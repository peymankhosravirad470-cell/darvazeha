"""VIVA live hub — زیرساخت مشترک مسابقه‌های واقعی چندنفره.

مسئولیت‌ها:
- اتاق‌ها با ظرفیت، میزبان و وضعیت (lobby / playing / finished / closed)
- حضور بازیکنان (Presence) و اتصال مجدد با جایگزینی سوکت کهنه
- بلیت یک‌مصرف WebSocket (۶۰ ثانیه) به‌جای توکن بلندمدت در دسترسِ WS
- نرخ‌سنجی هر اتصال (ضد اسپم)
- حلقهٔ تیک: فازهای زمانی بازی‌ها، پاک‌سازی اتاق‌های خالی و اتصال‌های کهنه
- ثبت نتیجهٔ مسابقه در PostgreSQL (MatchResult) + پاداش یکتا در TokenLedger

قاعدهٔ طلایی ضدتقلب: هر تصمیم حساس بازی در موتور سمت سرور گرفته می‌شود؛
کلاینت فقط «قصد» (action) می‌فرستد. نقش‌ها و اطلاعات محرمانه فقط با
snapshot شخصی‌سازی‌شده به همان بازیکن می‌رود.
"""
from __future__ import annotations

import asyncio
import secrets
import time
import uuid
from collections import deque
from typing import Any

TICKET_TTL_SECONDS = 60
RATE_LIMIT_MESSAGES = 12
RATE_LIMIT_WINDOW_SECONDS = 5
STALE_CONNECTION_SECONDS = 75
EMPTY_ROOM_TTL_SECONDS = 600
FINISHED_ROOM_TTL_SECONDS = 120


class Connection:
    """یک اتصال WebSocket زنده برای یک حساب؛ هر حساب هر لحظه یک اتصال معتبر دارد."""

    def __init__(self, ws: Any, account_id: str, room_id: str):
        self.ws = ws
        self.account_id = account_id
        self.room_id = room_id
        self.closed = False
        self._send_lock = asyncio.Lock()
        self._recent: deque[float] = deque()

    async def send(self, payload: dict) -> None:
        if self.closed:
            return
        async with self._send_lock:
            try:
                await self.ws.send_json(payload)
            except Exception:
                self.closed = True

    async def close(self, code: int = 1000) -> None:
        if self.closed:
            return
        self.closed = True
        try:
            await self.ws.close(code=code)
        except Exception:
            pass

    def allow_message(self) -> bool:
        now = time.time()
        recent = self._recent
        while recent and now - recent[0] > RATE_LIMIT_WINDOW_SECONDS:
            recent.popleft()
        if len(recent) >= RATE_LIMIT_MESSAGES:
            return False
        recent.append(now)
        return True


class Presence:
    """عضویت یک حساب در یک اتاق، مستقل از وضعیت اتصال."""

    def __init__(self, account_id: str, display_name: str):
        self.account_id = account_id
        self.display_name = display_name
        self.seat: int | None = None
        self.connected = False
        self.last_seen = 0.0

    def public(self) -> dict:
        return {
            "account_id": self.account_id,
            "display_name": self.display_name,
            "seat": self.seat,
            "connected": self.connected,
        }


class Room:
    def __init__(self, room_id: str, game: str, host_account_id: str, capacity: int, config: dict | None = None):
        self.id = room_id
        self.game = game
        self.host_account_id = host_account_id
        self.capacity = capacity
        self.config = dict(config or {})
        self.status = "lobby"  # lobby | playing | finished | closed
        self.presences: dict[str, Presence] = {}
        self.engine: Any = None  # GameEngine پس از شروع مسابقه
        self.created_at = time.time()
        self.started_at: float | None = None
        self.finished_at: float | None = None
        self.result_recorded = False
        self.match_id: str | None = None

    # --- membership -------------------------------------------------
    def seated_count(self) -> int:
        return sum(1 for p in self.presences.values() if p.seat is not None)

    def assign_seat(self, presence: Presence) -> int:
        taken = {p.seat for p in self.presences.values() if p.seat is not None}
        for seat in range(self.capacity):
            if seat not in taken:
                presence.seat = seat
                return seat
        presence.seat = None  # ظرفیت نشسته پر است → تماشاگر
        return -1

    def reseat(self) -> None:
        """فشرده‌سازی صندلی‌ها در ترتیب عضویت — پس از خروج یک عضو نشسته."""
        seated = [p for p in self.presences.values() if p.seat is not None]
        for seat, p in enumerate(seated):
            p.seat = seat

    def add_member(self, account_id: str, display_name: str) -> tuple[Presence, bool]:
        """بازگشت: (presence، آیا عضویت تازه بود)."""
        existing = self.presences.get(account_id)
        if existing:
            return existing, False
        presence = Presence(account_id, display_name)
        self.presences[account_id] = presence
        if self.status == "lobby" and self.seated_count() < self.capacity:
            self.assign_seat(presence)
        return presence, True

    def public_state(self, viewer: str | None = None) -> dict:
        state = {
            "room_id": self.id,
            "game": self.game,
            "status": self.status,
            "host": self.host_account_id,
            "capacity": self.capacity,
            "config": self.config,
            "players": [p.public() for p in self.presences.values()],
        }
        if self.engine is not None and self.status in ("playing", "finished"):
            state["match"] = self.engine.snapshot_for(viewer)
        return state

    def touch(self, account_id: str) -> None:
        p = self.presences.get(account_id)
        if p:
            p.last_seen = time.time()


class LiveHub:
    """نقطهٔ مرکزی اتاق‌ها و اتصال‌ها — تک‌نمونه (singleton) در هر فرایند."""

    def __init__(self) -> None:
        self.rooms: dict[str, Room] = {}
        self.tickets: dict[str, dict] = {}
        self.connections: dict[str, Connection] = {}  # account_id -> اتصال جاری
        self.persist_result = None  # تزریق‌شده از api/live.py (به‌دلیل وابستگی دیتابیس)
        self._tick_task: asyncio.Task | None = None
        self._now_override: float | None = None  # برای آزمون‌های قطعی

    # --- time -------------------------------------------------------
    def now(self) -> float:
        return self._now_override if self._now_override is not None else time.time()

    def debug_set_now(self, ts: float) -> None:
        """فقط برای آزمون‌ها: پرش زمانی بدون انتظار واقعی."""
        self._now_override = ts

    # --- tickets ----------------------------------------------------
    def issue_ticket(self, account_id: str, room_id: str) -> str:
        token = secrets.token_urlsafe(24)
        self.tickets[token] = {
            "account_id": account_id,
            "room_id": room_id,
            "exp": self.now() + TICKET_TTL_SECONDS,
            "used": False,
        }
        return token

    def consume_ticket(self, token: str) -> dict | None:
        info = self.tickets.get(token)
        if not info or info["used"] or info["exp"] <= self.now():
            return None
        info["used"] = True
        room = self.rooms.get(info["room_id"])
        if room is None or info["account_id"] not in room.presences:
            return None
        return info

    # --- rooms ------------------------------------------------------
    def create_room(self, game: str, host_account_id: str, display_name: str, capacity: int, config: dict | None = None) -> Room:
        room_id = uuid.uuid4().hex[:12]
        room = Room(room_id, game, host_account_id, capacity, config)
        presence = Presence(host_account_id, display_name)
        room.presences[host_account_id] = presence
        room.assign_seat(presence)
        presence.last_seen = self.now()
        self.rooms[room_id] = room
        return room

    def get_room(self, room_id: str) -> Room | None:
        return self.rooms.get(room_id)

    def list_open_rooms(self, game: str) -> list[dict]:
        out = []
        for room in self.rooms.values():
            if room.game != game or room.status not in ("lobby", "playing"):
                continue
            out.append({
                "room_id": room.id,
                "status": room.status,
                "capacity": room.capacity,
                "seated": room.seated_count(),
                "host_name": room.presences[room.host_account_id].display_name if room.host_account_id in room.presences else "—",
                "created_at": room.created_at,
            })
        out.sort(key=lambda r: (r["status"] != "lobby", r["created_at"]))
        return out

    async def _broadcast_room_state(self, room: Room) -> None:
        """وضعیت شخصی‌سازی‌شدهٔ اتاق را به همهٔ اعضای متصل می‌فرستد (لابی زنده)."""
        for account_id in list(room.presences):
            await self.send_to(room, account_id, {"t": "state", "state": room.public_state(account_id)})

    def join_room(self, room: Room, account_id: str, display_name: str) -> dict:
        presence, fresh = room.add_member(account_id, display_name)
        presence.last_seen = self.now()
        if fresh and room.engine is not None:
            # عضویت در حین مسابقه → تماشاگر (موتور تصمیم می‌گیرد چه چیزی ببیند)
            room.engine.on_join_late(presence)
        state = room.public_state(account_id)
        try:
            loop = asyncio.get_running_loop()
            loop.create_task(self._broadcast_room_state(room))
        except RuntimeError:
            pass  # از مسیر sync REST — endpoint async خودش broadcast می‌کند
        return state

    def leave_room(self, room: Room, account_id: str) -> None:
        presence = room.presences.get(account_id)
        if not presence:
            return
        if room.engine is not None and room.status == "playing":
            room.engine.on_disconnect(presence, permanent=True)
        room.presences.pop(account_id, None)
        conn = self.connections.get(account_id)
        if conn and conn.room_id == room.id:
            asyncio.ensure_future(conn.close(code=4400))
        self._migrate_host_if_needed(room)
        room.reseat()

    def _migrate_host_if_needed(self, room: Room) -> None:
        if room.host_account_id in room.presences:
            return
        if room.presences:
            room.host_account_id = next(iter(room.presences))
        # اتاق بدون عضو در sweep حذف می‌شود

    # --- connections --------------------------------------------------
    def register_connection(self, conn: Connection) -> Connection | None:
        """ثبت اتصال؛ اگر اتصال کهنه‌ای برای همین حساب بود، آن را برمی‌گرداند."""
        old = self.connections.get(conn.account_id)
        self.connections[conn.account_id] = conn
        return old

    def drop_connection(self, conn: Connection) -> None:
        if self.connections.get(conn.account_id) is conn:
            self.connections.pop(conn.account_id, None)
        room = self.rooms.get(conn.room_id)
        if room is None:
            return
        presence = room.presences.get(conn.account_id)
        if presence is None:
            return
        presence.connected = False
        presence.last_seen = self.now()
        if room.engine is not None and room.status == "playing":
            room.engine.on_disconnect(presence, permanent=False)
        room.touch(conn.account_id)

    async def replace_connection(self, old: Connection | None) -> None:
        if old is not None:
            await old.close(code=4412)  # اتصال از دستگاه دیگر جایگزین شد

    # --- send helpers -------------------------------------------------
    async def send_to(self, room: Room, account_id: str, payload: dict) -> None:
        conn = self.connections.get(account_id)
        if conn is not None and conn.room_id == room.id:
            await conn.send(payload)

    async def broadcast(self, room: Room, payload: dict, exclude: set[str] | None = None) -> None:
        exclude = exclude or set()
        tasks = []
        for account_id, conn in list(self.connections.items()):
            if account_id in exclude or conn.room_id != room.id or conn.closed:
                continue
            tasks.append(asyncio.ensure_future(conn.send(payload)))
        if tasks:
            await asyncio.gather(*tasks, return_exceptions=True)

    # --- match lifecycle ----------------------------------------------
    async def start_match(self, room: Room) -> dict:
        if room.status != "lobby":
            raise ValueError("مسابقه فقط از لابی قابل شروع است.")
        from app.modules.games import create_engine  # ایمپورت دیرهنگام برای جلوگیری از چرخه
        engine = create_engine(room.game, room, self)
        if room.seated_count() < engine.min_players:
            raise ValueError(f"حداقل {engine.min_players} بازیکن لازم است.")
        if room.seated_count() > engine.max_players:
            raise ValueError(f"حداکثر {engine.max_players} بازیکن مجاز است.")
        room.engine = engine
        room.status = "playing"
        room.started_at = self.now()
        await engine.start()
        # snapshot شخصی‌سازی‌شده برای هر بازیکن (نقش محرمانه فقط برای صاحبش)
        for account_id in list(room.presences):
            await self.send_to(room, account_id, {"t": "state", "state": room.public_state(account_id)})
        return room.public_state()

    async def finish_match(self, room: Room, result: dict) -> None:
        """ثبت نتیجه — همیشه فقط یک‌بار برای هر مسابقه (ضد ثبت تکراری پاداش)."""
        if room.status == "finished":
            return
        room.status = "finished"
        room.finished_at = self.now()
        room.match_id = uuid.uuid4().hex
        payload = {
            "match_id": room.match_id,
            "game": room.game,
            "result": result,
            "finished_at": room.finished_at,
        }
        if self.persist_result is not None and not room.result_recorded:
            room.result_recorded = True
            try:
                # ثبت پیش از اعلان: وقتی بازیکن «پایان» را دید، نتیجه و پاداش ماندگار شده‌اند
                await asyncio.to_thread(self.persist_result, room.match_id, room, result)
            except Exception as exc:  # ثبت باید هرگز بازی را نسکند؛ خطا لاگ می‌شود
                import logging
                logging.getLogger("viva.live").exception("persist_result failed: %s", exc)
        await self.broadcast(room, {"t": "event", "event": {"type": "match_finished", **payload}})

    # --- tick loop ------------------------------------------------------
    async def tick_loop(self) -> None:
        while True:
            await asyncio.sleep(1.0)
            try:
                await self.tick()
            except Exception:
                import logging
                logging.getLogger("viva.live").exception("tick failed")

    async def tick(self) -> None:
        now = self.now()
        for room in list(self.rooms.values()):
            if room.engine is not None and room.status == "playing":
                await room.engine.tick(now)
            # پاک‌سازی اتاق خالی
            if room.presences:
                continue
            ttl = FINISHED_ROOM_TTL_SECONDS if room.status == "finished" else EMPTY_ROOM_TTL_SECONDS
            base = room.finished_at or room.created_at
            if now - base > ttl:
                self.rooms.pop(room.id, None)


hub = LiveHub()  # تک‌نمونهٔ فرایند
