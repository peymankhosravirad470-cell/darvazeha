"""موتور مافیا در دژمار — کاملاً سرورمحور و محرمانه.

اصل بنیادی: نقش هیچ بازیکنی هرگز در دادهٔ عمومی یا snapshot دیگران ظاهر
نمی‌شود. نقش فقط با رویداد خصوصی (send_to) به صاحبش می‌رسد؛ رأی‌ها، اهداف
شب و نتیجهٔ کارآگاه همه سمت سرور نگه‌داری و اعتبارسنجی می‌شوند.

چرخه: night_pick → dawn → day_talk → day_vote → (اجرای محکوم) → شب بعد …
پایان: حذف کامل مافیا (پیروزی شهر) یا مافیا ≥ بقیه (پیروزی مافیا).
"""
from __future__ import annotations

import random
from typing import Any

from app.modules.games import GameEngine

ROLE_MAFIA = "mafia"
ROLE_DOCTOR = "doctor"
ROLE_DETECTIVE = "detective"
ROLE_CITIZEN = "citizen"

ROLE_TITLES = {
    ROLE_MAFIA: "مافیا",
    ROLE_DOCTOR: "دکتر",
    ROLE_DETECTIVE: "کارآگاه",
    ROLE_CITIZEN: "شهروند",
}

NIGHT = "night_pick"
DAWN = "dawn"
TALK = "day_talk"
VOTE = "day_vote"


def mafia_count_for(n: int) -> int:
    if n <= 6:
        return 1
    if n <= 9:
        return 2
    return 3


class MafiaPlayer:
    def __init__(self, account_id: str, display_name: str):
        self.account_id = account_id
        self.display_name = display_name
        self.role: str | None = None
        self.alive = True
        self.left = False  # خروج صریح از اتاق در حین مسابقه
        self.heal_used = False
        self.checked_by_detective: bool | None = None

    @property
    def active(self) -> bool:
        return self.alive and not self.left

    def public(self) -> dict:
        return {
            "account_id": self.account_id,
            "display_name": self.display_name,
            "alive": self.active,
            "left": self.left,
            "role": self.role if (not self.alive or self.left) else None,  # نقش مردگان علنی می‌شود
        }


class MafiaEngine(GameEngine):
    game_id = "mafia"
    min_players = 5
    max_players = 12

    def __init__(self, room: Any, hub: Any):
        super().__init__(room, hub)
        cfg = room.config or {}
        self.night_seconds = float(cfg.get("night_seconds", 30))
        self.talk_seconds = float(cfg.get("talk_seconds", 90))
        self.vote_seconds = float(cfg.get("vote_seconds", 45))
        self.players: dict[str, MafiaPlayer] = {}
        self.phase = NIGHT
        self.day_no = 0
        self.deadline = 0.0
        self.mafia_picks: dict[str, str] = {}   # mafia_account → target
        self.heal_pick: str | None = None
        self.detective_pick: str | None = None
        self.votes: dict[str, str] = {}         # voter → target
        self.winner: str | None = None          # "town" | "mafia"
        self.log: list[dict] = []

    # --- helpers -----------------------------------------------------
    def _by_role(self, role: str, only_active: bool = True) -> list[MafiaPlayer]:
        out = [p for p in self.players.values() if p.role == role]
        if only_active:
            out = [p for p in out if p.active]
        return out

    def _alive_mafia(self) -> list[MafiaPlayer]:
        return self._by_role(ROLE_MAFIA)

    def _alive_town(self) -> list[MafiaPlayer]:
        return [p for p in self.players.values() if p.active and p.role != ROLE_MAFIA]

    async def _private(self, account_id: str, event: dict) -> None:
        await self.hub.send_to(self.room, account_id, {"t": "event", "event": event})

    async def _public(self, event: dict) -> None:
        await self.hub.broadcast(self.room, {"t": "event", "event": event})

    def _deadline_in(self, seconds: float) -> float:
        return self.hub.now() + max(0.5, seconds)

    # --- lifecycle ---------------------------------------------------
    async def start(self) -> None:
        seated = [p for p in self.room.presences.values()]
        ids = [p.account_id for p in seated]
        rng = random.Random(self.room.config.get("seed"))  # تخصیص نقش سروری و محرمانه
        rng.shuffle(ids)
        mafia_n = mafia_count_for(len(ids))
        roles = [ROLE_MAFIA] * mafia_n + [ROLE_DOCTOR, ROLE_DETECTIVE]
        roles += [ROLE_CITIZEN] * (len(ids) - len(roles))
        rng.shuffle(roles)
        for account_id, role in zip(ids, roles):
            self.players[account_id] = MafiaPlayer(account_id, self.room.presences[account_id].display_name)
            self.players[account_id].role = role
        await self._deal_roles()
        await self._begin_night()

    async def _deal_roles(self) -> None:
        mafia_ids = [p.account_id for p in self.players.values() if p.role == ROLE_MAFIA]
        for p in self.players.values():
            payload: dict = {"type": "your_role", "role": p.role, "title": ROLE_TITLES[p.role]}
            if p.role == ROLE_MAFIA:
                payload["teammates"] = [m for m in mafia_ids if m != p.account_id]
            await self._private(p.account_id, payload)

    async def _begin_night(self) -> None:
        self.phase = NIGHT
        self.day_no += 1
        self.mafia_picks.clear()
        self.heal_pick = None
        self.detective_pick = None
        self.deadline = self._deadline_in(self.night_seconds)
        await self._public({"type": "phase", "phase": NIGHT, "day": self.day_no, "deadline": self.deadline})
        await self._push_private_actions()

    async def _push_private_actions(self) -> None:
        for m in self._alive_mafia():
            await self._private(m.account_id, {"type": "night_request", "as": ROLE_MAFIA, "targets": self._living_ids()})
        for d in self._by_role(ROLE_DOCTOR):
            await self._private(d.account_id, {"type": "night_request", "as": ROLE_DOCTOR, "targets": self._living_ids()})
        for det in self._by_role(ROLE_DETECTIVE):
            await self._private(det.account_id, {"type": "night_request", "as": ROLE_DETECTIVE, "targets": self._living_ids(exclude=[det.account_id])})

    def _living_ids(self, exclude: list[str] | None = None) -> list[str]:
        exclude = exclude or []
        return [p.account_id for p in self.players.values() if p.active and p.account_id not in exclude]

    # --- actions -------------------------------------------------------
    async def handle_action(self, presence: Any, action: dict) -> None:
        player = self.players.get(presence.account_id)
        if player is None:
            return
        kind = action.get("type")
        if kind == "chat":
            if self.phase == TALK and player.active:
                text = str(action.get("text", ""))[:200].strip()
                if text:
                    await self._public({"type": "chat", "from": player.account_id, "name": player.display_name, "text": text})
            return
        if not player.active:
            await self._private(player.account_id, {"type": "rejected", "reason": "dead_or_left"})
            return
        if kind == "night_pick":
            await self._handle_night_pick(player, action)
        elif kind == "vote":
            await self._handle_vote(player, action)
        else:
            await self._private(player.account_id, {"type": "rejected", "reason": "unknown_action"})

    async def _handle_night_pick(self, player: MafiaPlayer, action: dict) -> None:
        if self.phase != NIGHT:
            await self._private(player.account_id, {"type": "rejected", "reason": "not_night"})
            return
        target = action.get("target")
        if target not in self._living_ids():
            await self._private(player.account_id, {"type": "rejected", "reason": "bad_target"})
            return
        if player.role == ROLE_MAFIA:
            self.mafia_picks[player.account_id] = target
            await self._mafia_sync()
            await self._maybe_resolve_night()
        elif player.role == ROLE_DOCTOR:
            if target == player.account_id and player.heal_used:
                await self._private(player.account_id, {"type": "rejected", "reason": "heal_used"})
                return
            self.heal_pick = target
            if target == player.account_id:
                player.heal_used = True  # خوددرمانی فقط یک‌بار در کل بازی
            await self._private(player.account_id, {"type": "night_ok", "as": ROLE_DOCTOR})
            await self._maybe_resolve_night()
        elif player.role == ROLE_DETECTIVE:
            if target == player.account_id:
                await self._private(player.account_id, {"type": "rejected", "reason": "bad_target"})
                return
            self.detective_pick = target
            is_mafia = self.players[target].role == ROLE_MAFIA
            await self._private(player.account_id, {"type": "detective_result", "target": target, "is_mafia": is_mafia})
            await self._maybe_resolve_night()
        else:
            await self._private(player.account_id, {"type": "rejected", "reason": "no_night_action"})

    async def _mafia_sync(self) -> None:
        picks = dict(self.mafia_picks)
        for m in self._alive_mafia():
            await self._private(m.account_id, {"type": "mafia_picks", "picks": picks})

    def _mafia_majority_target(self) -> str | None:
        if not self._alive_mafia():
            return None
        counts: dict[str, int] = {}
        for target in self.mafia_picks.values():
            counts[target] = counts.get(target, 0) + 1
        needed = max(1, (len(self._alive_mafia()) + 1) // 2)
        best, best_n = None, 0
        for target, n in counts.items():  # ترتیب درج → تساوی به نفع اولین اکثریت
            if n > best_n:
                best, best_n = target, n
        return best if best_n >= needed else None

    def _night_actions_complete(self) -> bool:
        return (
            self._mafia_majority_target() is not None
            and (self.heal_pick is not None or not self._by_role(ROLE_DOCTOR))
            and (self.detective_pick is not None or not self._by_role(ROLE_DETECTIVE))
        )

    async def _maybe_resolve_night(self) -> None:
        if self.phase == NIGHT and self._night_actions_complete():
            await self._resolve_night()

    async def _resolve_night(self) -> None:
        if self.phase != NIGHT:
            return
        self.phase = DAWN
        killed: str | None = self._mafia_majority_target()
        saved = self.heal_pick if (killed and self.heal_pick == killed) else None
        victim = None
        if killed and not saved:
            victim = killed
            self.players[victim].alive = False
        event: dict = {"type": "dawn", "day": self.day_no}
        if victim:
            event["died"] = victim
            event["role"] = ROLE_TITLES[self.players[victim].role]
        if saved:
            event["saved"] = saved
        self.log.append({"day": self.day_no, "night_death": victim, "saved": saved})
        await self._public(event)
        if victim:
            await self._private(victim, {"type": "you_died", "cause": "night"})
        if await self._check_win():
            return
        await self._begin_talk()

    async def _begin_talk(self) -> None:
        self.phase = TALK
        self.deadline = self._deadline_in(self.talk_seconds)
        await self._public({"type": "phase", "phase": TALK, "day": self.day_no, "deadline": self.deadline})

    async def _begin_vote(self) -> None:
        self.phase = VOTE
        self.votes.clear()
        self.deadline = self._deadline_in(self.vote_seconds)
        await self._public({"type": "phase", "phase": VOTE, "day": self.day_no, "deadline": self.deadline})

    async def _handle_vote(self, player: MafiaPlayer, action: dict) -> None:
        if self.phase != VOTE:
            await self._private(player.account_id, {"type": "rejected", "reason": "not_vote_time"})
            return
        target = action.get("target")
        if target not in self._living_ids():
            await self._private(player.account_id, {"type": "rejected", "reason": "bad_target"})
            return
        self.votes[player.account_id] = target
        await self._public({"type": "vote_update", "votes": dict(self.votes), "living": self._living_ids()})
        living = self._living_ids()
        if all(v in self.votes for v in living):
            await self._resolve_vote()

    async def _resolve_vote(self) -> None:
        if self.phase != VOTE:
            return
        counts: dict[str, int] = {}
        for target in self.votes.values():
            counts[target] = counts.get(target, 0) + 1
        best, best_n, tie = None, 0, False
        for target, n in counts.items():
            if n > best_n:
                best, best_n, tie = target, n, False
            elif n == best_n:
                tie = True
        executed = None if (tie or best is None) else best
        event: dict = {"type": "execution", "day": self.day_no, "executed": executed, "votes": dict(self.votes)}
        if executed:
            self.players[executed].alive = False
            event["role"] = ROLE_TITLES[self.players[executed].role]
            await self._private(executed, {"type": "you_died", "cause": "execution"})
        self.log.append({"day": self.day_no, "executed": executed, "tie": tie})
        await self._public(event)
        if await self._check_win():
            return
        await self._begin_night()

    # --- win / finish ----------------------------------------------------
    async def _check_win(self) -> bool:
        mafia_alive = len(self._alive_mafia())
        town_alive = len(self._alive_town())
        if mafia_alive == 0:
            await self._finish("town")
            return True
        if mafia_alive >= town_alive:
            await self._finish("mafia")
            return True
        return False

    async def _finish(self, winner: str) -> None:
        self.winner = winner
        winners = [p.account_id for p in self.players.values()
                   if (p.role == ROLE_MAFIA) == (winner == "mafia") and not p.left]
        rewards = {pid: 50 for pid in winners}
        rewards.update({p.account_id: 10 for p in self.players.values() if p.account_id not in rewards})
        await self.hub.finish_match(self.room, {
            "game": "mafia",
            "winner": winner,
            "winner_title": "شهر" if winner == "town" else "مافیا",
            "winners": winners,
            "rewards": rewards,
            "roles": {p.account_id: p.role for p in self.players.values()},
            "log": self.log,
        })

    # --- tick / presence ---------------------------------------------------
    async def tick(self, now: float) -> None:
        if now < self.deadline:
            return
        if self.phase == NIGHT:
            await self._resolve_night()
        elif self.phase == TALK:
            await self._begin_vote()
        elif self.phase == VOTE:
            await self._resolve_vote()

    def on_disconnect(self, presence: Any, permanent: bool) -> None:
        player = self.players.get(presence.account_id)
        if player is None:
            return
        if permanent:
            player.left = True

    def on_reconnect(self, presence: Any) -> None:
        player = self.players.get(presence.account_id)
        if player is None:
            return
        # نقش دوباره به‌صورت خصوصی ارسال می‌شود (اتصال مجدد، افشا نمی‌شود)

    def snapshot_for(self, account_id: str | None) -> dict:
        me = self.players.get(account_id) if account_id else None
        players = [p.public() for p in self.players.values()]
        snap = {
            "game": "mafia",
            "phase": self.phase,
            "day": self.day_no,
            "deadline": self.deadline,
            "winner": self.winner,
            "players": players,
        }
        if me is not None:
            snap["you"] = {
                "role": me.role,
                "title": ROLE_TITLES[me.role] if me.role else None,
                "alive": me.active,
                "role_public": not me.alive or me.left,
            }
        return snap
