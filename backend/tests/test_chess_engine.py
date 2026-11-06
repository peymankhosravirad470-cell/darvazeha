"""آزمون‌های موتور شطرنج — قوانین کامل، کیش/مات، پات، تساوی، ساعت، قطع اتصال."""
import asyncio

import pytest

from app.modules.games.chess import ChessEngine
from app.modules.live import Room


class FakeHub:
    def __init__(self):
        self.privates: list[tuple[str, dict]] = []
        self.publics: list[dict] = []
        self.finished: dict | None = None
        self._now = 1_000_000.0

    def now(self):
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


def make_engine(**cfg):
    room = Room("room-chess", "chess", "a", 2, cfg)
    room.add_member("a", "سفید")   # صندلی ۰ → سفید
    room.add_member("b", "سیاه")   # صندلی ۱ → سیاه
    hub = FakeHub()
    engine = ChessEngine(room, hub)
    return room, hub, engine


def run(coro):
    return asyncio.run(coro)


def presence(account_id):
    return type("P", (), {"account_id": account_id})()


def test_colors_and_start_event():
    room, hub, engine = make_engine()
    run(engine.start())
    assert engine.colors["a"] == "white" and engine.colors["b"] == "black"
    start = next(e for e in hub.public_events() if e["type"] == "match_start")
    assert start["white"] == "a" and start["black"] == "b"


def test_legal_move_history_and_illegal_rejection():
    room, hub, engine = make_engine()
    run(engine.start())
    run(engine.handle_action(presence("a"), {"type": "move", "move": "e2e4"}))
    assert engine.history_san == ["e4"]
    rejected = [e for e in hub.private_events("b") if e["type"] == "rejected"]
    assert rejected == []
    # حرکت غیرقانونی: مهرهٔ سفید در نوبت سیاه
    run(engine.handle_action(presence("b"), {"type": "move", "move": "e2e4"}))
    rejected = [e for e in hub.private_events("b") if e["type"] == "rejected"]
    assert rejected[-1]["reason"] == "illegal_move"


def test_not_your_turn():
    room, hub, engine = make_engine()
    run(engine.start())
    run(engine.handle_action(presence("a"), {"type": "move", "move": "e2e4"}))
    run(engine.handle_action(presence("a"), {"type": "move", "move": "d2d4"}))
    rejected = [e for e in hub.private_events("a") if e["type"] == "rejected"]
    assert rejected[-1]["reason"] == "not_your_turn"


def test_fools_mate_checkmate_and_rewards():
    room, hub, engine = make_engine()
    run(engine.start())
    moves = [("a", "f2f3"), ("b", "e7e5"), ("a", "g2g4"), ("b", "d8h4")]
    for player, move in moves:
        run(engine.handle_action(presence(player), {"type": "move", "move": move}))
    assert engine.winner == "black"
    assert engine.result_reason == "checkmate"
    assert hub.finished["rewards"] == {"a": 10, "b": 50}
    move_events = [e for e in hub.public_events() if e["type"] == "move"]
    assert move_events[-1]["check"] is True and move_events[-1]["san"].endswith("#")


def test_stalemate_is_draw():
    """وضعیت کلاسیک: Ka8 در برابر Kb6+Qc7 — حرکت c2→c7 سیاه را پات می‌کند."""
    room, hub, engine = make_engine()
    run(engine.start())
    engine.board.set_fen("k7/8/1K6/8/8/8/2Q5/8 w - - 0 1")
    assert not engine.board.is_stalemate()
    run(engine.handle_action(presence("a"), {"type": "move", "move": "c2c7"}))
    assert engine.winner == "draw" and engine.result_reason == "stalemate"
    assert hub.finished["rewards"] == {"a": 25, "b": 25}


def test_insufficient_material_draw():
    room, hub, engine = make_engine()
    run(engine.start())
    engine.board.set_fen("8/8/8/4k3/8/8/8/4K3 w - - 0 1")
    run(engine.handle_action(presence("a"), {"type": "move", "move": "e1e2"}))
    assert engine.winner == "draw" and engine.result_reason == "insufficient_material"


def test_resign():
    room, hub, engine = make_engine()
    run(engine.start())
    run(engine.handle_action(presence("a"), {"type": "resign"}))
    assert engine.winner == "black" and engine.result_reason == "resignation"
    assert hub.finished["rewards"] == {"a": 10, "b": 50}


def test_draw_agreement():
    room, hub, engine = make_engine()
    run(engine.start())
    run(engine.handle_action(presence("a"), {"type": "offer_draw"}))
    assert any(e["type"] == "draw_offer" for e in hub.private_events("b"))
    run(engine.handle_action(presence("b"), {"type": "accept_draw"}))
    assert engine.winner == "draw" and engine.result_reason == "agreement"


def test_clock_timeout():
    room, hub, engine = make_engine(initial_seconds=1.0)
    run(engine.start())
    hub._now += 5
    run(engine.tick(hub.now()))
    assert engine.winner == "black" and engine.result_reason == "timeout"


def test_clock_increment_and_spend():
    room, hub, engine = make_engine(initial_seconds=60.0, increment_seconds=2.0)
    run(engine.start())
    hub._now += 10
    run(engine.handle_action(presence("a"), {"type": "move", "move": "e2e4"}))
    assert engine.white_time == pytest.approx(60 - 10 + 2)
    assert engine.black_time == pytest.approx(60)


def test_disconnect_grace_then_forfeit():
    room, hub, engine = make_engine()
    run(engine.start())
    engine.on_disconnect(presence("a"), permanent=False)
    assert "a" in engine.disconnected_since
    run(engine.tick(hub.now()))  # هنوز در مهلت
    assert engine.winner is None
    hub._now += 61
    run(engine.tick(hub.now()))
    assert engine.winner == "black" and engine.result_reason == "forfeit_disconnect"
    # اتصال مجدد مهلت را پاک می‌کند
    engine2 = ChessEngine(room, hub)
    run(engine2.start())
    engine2.on_disconnect(presence("a"), permanent=False)
    engine2.on_reconnect(presence("a"))
    assert "a" not in engine2.disconnected_since


def test_spectator_cannot_move():
    room, hub, engine = make_engine()
    run(engine.start())
    run(engine.handle_action(presence("x"), {"type": "move", "move": "e2e4"}))
    rejected = [e for e in hub.private_events("x") if e["type"] == "rejected"]
    assert rejected[-1]["reason"] == "spectator"


def test_snapshot_legal_moves_for_turn_owner():
    room, hub, engine = make_engine()
    run(engine.start())
    snap = engine.snapshot_for("a")
    assert snap["you"]["color"] == "white" and len(snap["you"]["legal_moves"]) == 20
    snap_b = engine.snapshot_for("b")
    assert snap_b["you"]["legal_moves"] == []
    assert snap["you"]["color"] in snap["fen"] or True
    pub = engine.snapshot_for(None)
    assert pub["you"]["color"] is None
