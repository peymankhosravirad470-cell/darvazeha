"""آزمون‌های زیرساخت زندهٔ VIVA — اتاق، بلیت، WS، نرخ‌سنجی، ثبت نتیجهٔ یکتا."""
import json
import time
import uuid

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.core import database
from app.core.config import settings
from app.core.database import Base, get_db
import app.main as main_module
from app.main import app
from app.models import AccountBalance, MatchResult, TokenLedger
from app.modules.games import GameEngine, register_engine, GAME_LIMITS
from app.modules.live import hub


def make_init_data(token, uid=111000):
    import hashlib, hmac
    from urllib.parse import urlencode
    values = {"auth_date": str(int(time.time())), "query_id": "live-test",
              "user": json.dumps({"id": uid, "first_name": f"بازیکن{uid}"}, separators=(",", ":"))}
    check = "\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret = hmac.new(token.encode(), b"WebAppData", hashlib.sha256).digest()
    values["hash"] = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
    return urlencode(values)


class EchoEngine(GameEngine):
    """موتور کمکی آزمون — ثبت اکشن‌ها و امکان پایان مسابقه برای آزمون پاداش."""
    game_id = "testecho"
    min_players = 2
    max_players = 4

    async def start(self):
        self.log = []

    async def handle_action(self, presence, action):
        kind = action.get("type")
        if kind == "echo":
            self.log.append((presence.account_id, action))
            await self.hub.broadcast(self.room, {"t": "event", "event": {"type": "echo", "from": presence.account_id}})
        elif kind == "finish":
            rewards = {pid: 50 for pid in self.room.presences}
            await self.hub.finish_match(self.room, {"winners": [], "rewards": rewards})

    def snapshot_for(self, account_id):
        return {"view": "echo", "you": account_id, "private": True}


@pytest.fixture()
def live_env(monkeypatch):
    """محیط ایزوله: دیتابیس SQLite در حافظه + هاب خالی + تنظیمات آزمونی."""
    engine = create_engine("sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool)
    factory = sessionmaker(bind=engine, autoflush=False, autocommit=False)
    database._engine, database._factory = engine, factory
    Base.metadata.create_all(engine)

    def override_db():
        db = factory()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_db
    old = (settings.bale_bot_token, settings.session_secret)
    settings.bale_bot_token = "live-test-token"
    settings.session_secret = "live-test-session-secret-which-is-long"
    hub.rooms.clear(); hub.tickets.clear(); hub.connections.clear()
    hub.persist_result = main_module.persist_match_result
    hub._now_override = None
    register_engine("testecho", lambda room_, hub_: EchoEngine(room_, hub_))

    with TestClient(app) as c:
        yield c

    app.dependency_overrides.clear()
    settings.bale_bot_token, settings.session_secret = old
    hub.rooms.clear(); hub.tickets.clear(); hub.connections.clear(); hub.persist_result = None
    engine.dispose()
    database._engine = database._factory = None


def login(client, uid):
    r = client.post("/api/v1/auth/bale", json={"init_data": make_init_data("live-test-token", uid)})
    assert r.status_code == 200, r.text
    data = r.json()
    return {"Authorization": "Bearer " + data["access_token"]}, data["player"]["id"]


def create_room(client, headers, game="testecho", capacity=2):
    r = client.post("/api/v1/live/rooms", headers=headers, json={"game": game, "capacity": capacity})
    assert r.status_code == 200, r.text
    return r.json()["room"]["room_id"]


# --- اتاق‌ها -------------------------------------------------------------

def test_create_room_and_invalid_capacity(live_env):
    c = live_env
    h, _ = login(c, 1)
    r = c.post("/api/v1/live/rooms", headers=h, json={"game": "mafia", "capacity": 3})
    assert r.status_code == 422  # مافیا حداقل ۵ نفر
    room_id = create_room(c, h, capacity=2)
    assert room_id


def test_join_capacity_and_rejoin(live_env):
    c = live_env
    h1, h2, h3 = login(c, 1)[0], login(c, 2)[0], login(c, 3)[0]
    room_id = create_room(c, h1, capacity=2)
    assert c.post(f"/api/v1/live/rooms/{room_id}/join", headers=h2).status_code == 200
    # ظرفیت پر است
    r3 = c.post(f"/api/v1/live/rooms/{room_id}/join", headers=h3)
    assert r3.status_code == 409
    # پیوستن دوباره عضو فعلی مجاز است (rejoin)
    assert c.post(f"/api/v1/live/rooms/{room_id}/join", headers=h2).status_code == 200


def test_leave_migrates_host(live_env):
    c = live_env
    h1, a1 = login(c, 1)
    h2, a2 = login(c, 2)
    room_id = create_room(c, h1, capacity=2)
    c.post(f"/api/v1/live/rooms/{room_id}/join", headers=h2)
    c.post(f"/api/v1/live/rooms/{room_id}/leave", headers=h1)
    state = c.get(f"/api/v1/live/rooms/{room_id}", headers=h2).json()["room"]
    assert state["host"] != a1 and state["players"][0]["seat"] == 0  # فشرده‌سازی صندلی


# --- بلیت -----------------------------------------------------------------

def test_ticket_single_use_and_membership(live_env):
    c = live_env
    h1, h2 = login(c, 1)[0], login(c, 2)[0]
    room_id = create_room(c, h1, capacity=2)
    # غیرعضو بلیت نمی‌گیرد
    assert c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h2).status_code == 403
    ticket = c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h1).json()["ticket"]
    info = hub.consume_ticket(ticket)
    assert info and len(info["account_id"]) == 36
    assert hub.consume_ticket(ticket) is None  # یک‌مصرف
    assert hub.consume_ticket("nope") is None


def test_ticket_expiry(live_env):
    c = live_env
    h1 = login(c, 1)[0]
    room_id = create_room(c, h1, capacity=2)
    ticket = c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h1).json()["ticket"]
    hub.debug_set_now(hub.now() + 3600)
    assert hub.consume_ticket(ticket) is None
    hub.debug_set_now(None)


# --- WebSocket ------------------------------------------------------------

def test_ws_state_ping_and_no_match_error(live_env):
    c = live_env
    h1, h2 = login(c, 1)[0], login(c, 2)[0]
    room_id = create_room(c, h1, capacity=2)
    c.post(f"/api/v1/live/rooms/{room_id}/join", headers=h2)
    ticket = c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h1).json()["ticket"]
    with c.websocket_connect(f"/ws/viva?ticket={ticket}") as ws:
        first = ws.receive_json()
        assert first["t"] == "state"
        assert first["state"]["room_id"] == room_id
        ws.send_json({"t": "ping"})
        assert ws.receive_json()["t"] == "pong"
        ws.send_json({"t": "action", "action": {"type": "echo"}})
        assert ws.receive_json()["t"] == "error"  # مسابقه‌ای شروع نشده
    # بلیت استفاده‌شده دیگر کار نمی‌کند
    r = c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h1)
    with pytest.raises(Exception):
        with c.websocket_connect("/ws/viva?ticket=" + ticket) as ws:
            ws.receive_json()


def test_ws_start_match_and_echo_action(live_env):
    c = live_env
    h1, a1 = login(c, 1)
    h2 = login(c, 2)[0]
    room_id = create_room(c, h1, capacity=2)
    c.post(f"/api/v1/live/rooms/{room_id}/join", headers=h2)
    # شروع توسط غیرمیزبان ممنوع
    assert c.post(f"/api/v1/live/rooms/{room_id}/start", headers=h2).status_code == 403
    assert c.post(f"/api/v1/live/rooms/{room_id}/start", headers=h1).status_code == 200
    t1 = c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h1).json()["ticket"]
    with c.websocket_connect(f"/ws/viva?ticket={t1}") as ws:
        state = ws.receive_json()
        assert state["state"]["status"] == "playing"
        ws.send_json({"t": "action", "action": {"type": "echo"}})
        while True:
            msg = ws.receive_json()
            if msg.get("t") == "event" and msg["event"]["type"] == "echo":
                assert msg["event"]["from"] == a1
                break
            if msg.get("t") == "error":
                pytest.fail(f"unexpected error: {msg}")


def test_ws_rate_limit(live_env):
    c = live_env
    h1, h2 = login(c, 1)[0], login(c, 2)[0]
    room_id = create_room(c, h1, capacity=2)
    c.post(f"/api/v1/live/rooms/{room_id}/join", headers=h2)
    c.post(f"/api/v1/live/rooms/{room_id}/start", headers=h1)
    t1 = c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h1).json()["ticket"]
    with c.websocket_connect(f"/ws/viva?ticket={t1}") as ws:
        ws.receive_json()  # state
        got_rate_limited = False
        for _ in range(30):
            ws.send_json({"t": "ping"})
            msg = ws.receive_json()
            if msg.get("t") == "error" and msg.get("msg") == "rate_limited":
                got_rate_limited = True
                break
        assert got_rate_limited


# --- ثبت نتیجه + پاداش یکتا -------------------------------------------------

def test_match_finish_persists_once_with_unique_rewards(live_env):
    c = live_env
    h1, a1 = login(c, 1)
    h2, a2 = login(c, 2)
    room_id = create_room(c, h1, capacity=2)
    c.post(f"/api/v1/live/rooms/{room_id}/join", headers=h2)
    c.post(f"/api/v1/live/rooms/{room_id}/start", headers=h1)
    t1 = c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h1).json()["ticket"]
    with c.websocket_connect(f"/ws/viva?ticket={t1}") as ws:
        ws.receive_json()
        ws.send_json({"t": "action", "action": {"type": "finish"}})
        while True:
            msg = ws.receive_json()
            if msg.get("t") == "event" and msg["event"]["type"] == "match_finished":
                match_id = msg["event"]["match_id"]
                break
    db = database._factory()
    try:
        rows = db.query(MatchResult).filter(MatchResult.id == match_id).all()
        assert len(rows) == 1 and rows[0].game == "testecho"
        ledgers = db.query(TokenLedger).filter(TokenLedger.reason == "viva_match").all()
        assert len(ledgers) == 2  # دو بازیکن
        balances = {b.account_id: b.token_balance for b in db.query(AccountBalance).all()}
        assert balances == {a1: 50, a2: 50}
    finally:
        db.close()
    # تلاش دوباره برای پایان همان مسابقه و ثبت دوباره → هیچ تغییری
    room = hub.get_room(room_id)
    import asyncio
    asyncio.get_event_loop_policy()
    # finish_match روی مسابقهٔ تمام‌شده کاری نمی‌کند
    anyio_ok = True
    t2 = c.post(f"/api/v1/live/rooms/{room_id}/ticket", headers=h1).json()["ticket"]
    with c.websocket_connect(f"/ws/viva?ticket={t2}") as ws:
        ws.receive_json()
        ws.send_json({"t": "action", "action": {"type": "finish"}})
        # نباید match_finished تازه‌ای برسد؛ فقط پیام‌های خطای no_active_match
        msg = ws.receive_json()
        assert msg["t"] == "error" and msg["msg"] == "no_active_match"
    db = database._factory()
    try:
        balances = {b.account_id: b.token_balance for b in db.query(AccountBalance).all()}
        assert balances == {a1: 50, a2: 50}  # بدون پاداش تکراری
    finally:
        db.close()


def test_double_persist_is_idempotent(live_env):
    """صدا زدن مستقیم persist با match_id یکسان → پاداش دوباره ثبت نمی‌شود."""
    c = live_env
    h1, a1 = login(c, 1)
    create_room(c, h1, capacity=2)
    room = next(iter(hub.rooms.values()))
    match_id = uuid.uuid4().hex
    result = {"rewards": {a1: 50}}
    main_module.persist_match_result(match_id, room, result)
    main_module.persist_match_result(match_id, room, result)  # دوباره
    db = database._factory()
    try:
        balances = {b.account_id: b.token_balance for b in db.query(AccountBalance).all()}
        assert balances.get(a1) == 50
    finally:
        db.close()
