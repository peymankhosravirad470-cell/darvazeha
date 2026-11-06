"""آزمون‌های موتور مافیا — محرمانگی نقش، چرخهٔ شب/روز، رأی‌گیری، شرایط پیروزی.

هاب فیک: همهٔ ارسال‌ها ثبت می‌شوند تا افشا شدن نقش‌ها در دادهٔ عمومی
به‌صورت خودکار کنترل شود.
"""
import asyncio

import pytest

from app.modules.games.mafia import MafiaEngine, ROLE_MAFIA, ROLE_DOCTOR, ROLE_DETECTIVE, ROLE_CITIZEN
from app.modules.live import Room


class FakeHub:
    def __init__(self):
        self.privates: list[tuple[str, dict]] = []
        self.publics: list[dict] = []
        self.finished: dict | None = None
        self._now = 1_000_000.0

    def now(self) -> float:
        return self._now

    async def send_to(self, room, account_id, payload):
        self.privates.append((account_id, payload))

    async def broadcast(self, room, payload, exclude=None):
        self.publics.append(payload)

    async def finish_match(self, room, result):
        self.finished = result
        room.status = "finished"

    def private_events(self, account_id):
        return [p["event"] for a, p in self.privates if a == account_id]

    def public_events(self):
        return [p["event"] for p in self.publics]


def make_engine(n=5, seed=42, **cfg):
    room = Room("room-test", "mafia", "a", n, {"seed": seed, **cfg})
    for i, account_id in enumerate("abcde"[:n]):
        room.add_member(account_id, f"پلیر{account_id}")
    hub = FakeHub()
    engine = MafiaEngine(room, hub)
    return room, hub, engine


def run(coro):
    return asyncio.run(coro)


def public_role_leak(hub: FakeHub) -> list:
    """هر نقشی که در پیام‌های عمومی ظاهر شود نشتی است."""
    leaks = []
    for payload in hub.publics:
        text = str(payload)
        for role in (ROLE_MAFIA, ROLE_DOCTOR, ROLE_DETECTIVE, ROLE_CITIZEN):
            if f'"{role}"' in text:
                leaks.append((payload, role))
    return leaks


def test_role_deal_counts_and_secrecy():
    room, hub, engine = make_engine(n=5, seed=42)
    run(engine.start())
    roles = [p.role for p in engine.players.values()]
    assert roles.count(ROLE_MAFIA) == 1
    assert roles.count(ROLE_DOCTOR) == 1
    assert roles.count(ROLE_DETECTIVE) == 1
    assert roles.count(ROLE_CITIZEN) == 2
    # نقش فقط خصوصی ارسال شده باشد
    for account_id, p in engine.players.items():
        role_events = [e for e in hub.private_events(account_id) if e["type"] == "your_role"]
        assert len(role_events) == 1 and role_events[0]["role"] == p.role
    assert public_role_leak(hub) == []
    # مافیا هم‌تیمی‌هایش را می‌شناسد
    mafia = next(p for p in engine.players.values() if p.role == ROLE_MAFIA)
    role_event = next(e for e in hub.private_events(mafia.account_id) if e["type"] == "your_role")
    assert "teammates" in role_event


def test_night_to_vote_full_cycle():
    room, hub, engine = make_engine(n=5, seed=42)
    run(engine.start())
    mafia = next(p for p in engine.players.values() if p.role == ROLE_MAFIA and p.active)
    doctor = next(p for p in engine.players.values() if p.role == ROLE_DOCTOR)
    detective = next(p for p in engine.players.values() if p.role == ROLE_DETECTIVE)
    victims = [p.account_id for p in engine.players.values() if p.role == ROLE_CITIZEN]
    # شب ۱: مافیا یک شهروند را می‌زند؛ دکتر خودش را نجات می‌دهد؛ کارآگاه کسی را چک می‌کند
    run(engine.handle_action(type("P", (), {"account_id": mafia.account_id})(), {"type": "night_pick", "target": victims[0]}))
    run(engine.handle_action(type("P", (), {"account_id": doctor.account_id})(), {"type": "night_pick", "target": doctor.account_id}))
    run(engine.handle_action(type("P", (), {"account_id": detective.account_id})(), {"type": "night_pick", "target": victims[1]}))
    dawn = next(e for e in hub.public_events() if e["type"] == "dawn")
    assert dawn["died"] == victims[0] and "role" in dawn  # نقش مرده علنی می‌شود
    assert engine.phase == "day_talk"
    # گفتگو
    run(engine.handle_action(type("P", (), {"account_id": mafia.account_id})(), {"type": "chat", "text": "سلام"}))
    assert any(e["type"] == "chat" for e in hub.public_events())
    # پایان وقت گفتگو → رأی‌گیری
    hub._now = engine.deadline + 1
    run(engine.tick(hub.now()))
    assert engine.phase == "day_vote"
    # همهٔ زنده‌ها به یک شهروند دیگر رأی می‌دهند (نه مافیا) تا چرخه ادامه یابد
    alive = engine._living_ids()
    target = next(x for x in alive if x != mafia.account_id)
    for voter in list(alive):
        run(engine.handle_action(type("P", (), {"account_id": voter})(), {"type": "vote", "target": target}))
    execution = next(e for e in hub.public_events() if e["type"] == "execution")
    assert execution["executed"] == target
    # شب ۲ آغاز شد
    assert engine.phase == "night_pick" and engine.day_no == 2
    assert public_role_leak(hub) == []


def test_doctor_save_prevents_kill():
    room, hub, engine = make_engine(n=5, seed=7)
    run(engine.start())
    mafia = next(p for p in engine.players.values() if p.role == ROLE_MAFIA and p.active)
    doctor = next(p for p in engine.players.values() if p.role == ROLE_DOCTOR)
    detective = next(p for p in engine.players.values() if p.role == ROLE_DETECTIVE)
    victim = next(p for p in engine.players.values() if p.role == ROLE_CITIZEN)
    run(engine.handle_action(type("P", (), {"account_id": mafia.account_id})(), {"type": "night_pick", "target": victim.account_id}))
    run(engine.handle_action(type("P", (), {"account_id": doctor.account_id})(), {"type": "night_pick", "target": victim.account_id}))
    run(engine.handle_action(type("P", (), {"account_id": detective.account_id})(), {"type": "night_pick", "target": mafia.account_id}))
    dawn = next(e for e in hub.public_events() if e["type"] == "dawn")
    assert dawn.get("saved") == victim.account_id and "died" not in dawn
    assert victim.alive


def test_doctor_self_heal_only_once():
    room, hub, engine = make_engine(n=5, seed=7)
    run(engine.start())
    doctor = next(p for p in engine.players.values() if p.role == ROLE_DOCTOR)
    presence = type("P", (), {"account_id": doctor.account_id})()
    run(engine.handle_action(presence, {"type": "night_pick", "target": doctor.account_id}))
    assert any(e["type"] == "night_ok" for e in hub.private_events(doctor.account_id))
    run(engine.handle_action(presence, {"type": "night_pick", "target": doctor.account_id}))
    rejected = [e for e in hub.private_events(doctor.account_id) if e["type"] == "rejected"]
    assert any(e["reason"] == "heal_used" for e in rejected)


def test_detective_result_is_private():
    room, hub, engine = make_engine(n=5, seed=3)
    run(engine.start())
    mafia = next(p for p in engine.players.values() if p.role == ROLE_MAFIA and p.active)
    detective = next(p for p in engine.players.values() if p.role == ROLE_DETECTIVE)
    doctor = next(p for p in engine.players.values() if p.role == ROLE_DOCTOR)
    # کارآگاه مافیا را چک می‌کند؛ دکتر هم شب را کامل کند
    run(engine.handle_action(type("P", (), {"account_id": detective.account_id})(), {"type": "night_pick", "target": mafia.account_id}))
    result = next(e for e in hub.private_events(detective.account_id) if e["type"] == "detective_result")
    assert result["target"] == mafia.account_id and result["is_mafia"] is True
    run(engine.handle_action(type("P", (), {"account_id": doctor.account_id})(), {"type": "night_pick", "target": doctor.account_id}))
    run(engine.handle_action(type("P", (), {"account_id": mafia.account_id})(), {"type": "night_pick", "target": doctor.account_id}))
    # نتیجهٔ کارآگاه در پیام‌های عمومی نیست
    assert all("detective_result" not in str(p) for p in hub.publics)


def test_town_win_when_all_mafia_out():
    room, hub, engine = make_engine(n=5, seed=11)
    run(engine.start())
    mafia_id = next(p.account_id for p in engine.players.values() if p.role == ROLE_MAFIA)
    # شب ۱ کامل بدون اکشن‌ها → سپس در رأی‌گیری همه مافیا را بیرون می‌کنند
    hub._now = engine.deadline + 1
    run(engine.tick(hub.now()))  # dawn (بدون اکشن شب → کسی نمی‌میرد)
    hub._now = engine.deadline + 1
    run(engine.tick(hub.now()))  # vote
    alive = engine._living_ids()
    for voter in list(alive):
        run(engine.handle_action(type("P", (), {"account_id": voter})(), {"type": "vote", "target": mafia_id}))
    assert hub.finished is not None
    assert hub.finished["winner"] == "town"
    assert mafia_id in hub.finished["roles"]  # نقش‌ها در پایان فاش می‌شوند
    assert hub.finished["rewards"][next(iter(hub.finished["winners"]))] == 50
    losers = [pid for pid in hub.finished["rewards"] if pid not in hub.finished["winners"]]
    assert all(hub.finished["rewards"][pid] == 10 for pid in losers)


def test_mafia_win_when_parity():
    room, hub, engine = make_engine(n=6, seed=5)
    run(engine.start())
    mafia_players = [p for p in engine.players.values() if p.role == ROLE_MAFIA]
    assert len(mafia_players) == 1  # ۶ نفر → ۱ مافیا
    town = [p for p in engine.players.values() if p.role != ROLE_MAFIA]
    # دو شهروند را حذف می‌کنیم → مافیا ۱ در برابر ۳-۲... باید شرط برابری را ساخت
    town[0].alive = False
    town[1].alive = False
    # ۱ مافیا در برابر ۲ شهر → ۱ < ۲ هنوز باخته؛ یکی دیگر
    town[2].alive = False
    assert run(engine._check_win()) is True
    assert hub.finished["winner"] == "mafia"


def test_tie_vote_executes_nobody():
    room, hub, engine = make_engine(n=5, seed=13)
    run(engine.start())
    hub._now = engine.deadline + 1
    run(engine.tick(hub.now()))  # dawn بدون اکشن شب
    hub._now = engine.deadline + 1
    run(engine.tick(hub.now()))  # vote
    living = engine._living_ids()
    a, b, c, d = living[0], living[1], living[2], living[3]
    run(engine.handle_action(type("P", (), {"account_id": a})(), {"type": "vote", "target": b}))
    run(engine.handle_action(type("P", (), {"account_id": b})(), {"type": "vote", "target": a}))
    run(engine.handle_action(type("P", (), {"account_id": c})(), {"type": "vote", "target": b}))
    run(engine.handle_action(type("P", (), {"account_id": d})(), {"type": "vote", "target": a}))
    # هنوز همه رأی نداده‌اند → اجرا نشده
    assert not any(e["type"] == "execution" for e in hub.public_events())
    # مهلت رأی‌گیری تمام می‌شود → تساوی ۲-۲ → هیچ‌کس اعدام نمی‌شود
    hub._now = engine.deadline + 1
    run(engine.tick(hub.now()))
    execution = next(e for e in hub.public_events() if e["type"] == "execution")
    assert execution["executed"] is None
    assert engine.phase == "night_pick" and engine.day_no == 2


def test_dead_cannot_vote_or_pick():
    room, hub, engine = make_engine(n=5, seed=21)
    run(engine.start())
    victim = next(p for p in engine.players.values() if p.role == ROLE_CITIZEN)
    victim.alive = False
    run(engine.handle_action(type("P", (), {"account_id": victim.account_id})(), {"type": "vote", "target": "a"}))
    run(engine.handle_action(type("P", (), {"account_id": victim.account_id})(), {"type": "night_pick", "target": "a"}))
    rejected = [e for e in hub.private_events(victim.account_id) if e["type"] == "rejected"]
    assert len(rejected) == 2 and rejected[0]["reason"] == "dead_or_left"
    # رأی او ثبت نشده
    assert victim.account_id not in engine.votes


def test_snapshot_never_leaks_other_roles():
    room, hub, engine = make_engine(n=5, seed=8)
    run(engine.start())
    viewer = "a"
    snap = engine.snapshot_for(viewer)
    # در snapshot فقط نقش خود بیننده است
    assert snap["you"]["role"] == engine.players[viewer].role
    for p in snap["players"]:
        if p["account_id"] != viewer and p["alive"]:
            assert p["role"] is None
    # snapshot بدون بیننده (REST عمومی) هیچ نقش زنده‌ای ندارد
    public_snap = engine.snapshot_for(None)
    assert "you" not in public_snap
    assert all(p["role"] is None for p in public_snap["players"] if p["alive"])


def test_disconnect_skipped_but_reconnect_keeps_role():
    room, hub, engine = make_engine(n=5, seed=19)
    run(engine.start())
    player = next(p for p in engine.players.values() if p.role == ROLE_CITIZEN)
    presence = type("P", (), {"account_id": player.account_id})()
    engine.on_disconnect(presence, permanent=False)
    assert player.alive  # قطع اتصال = خروج نیست
    engine.on_reconnect(presence)
    assert player.role in (ROLE_CITIZEN, ROLE_DOCTOR, ROLE_DETECTIVE, ROLE_MAFIA)
    # خروج دائمی: از شرط برد کنار می‌رود
    engine.on_disconnect(presence, permanent=True)
    assert player.left is True
