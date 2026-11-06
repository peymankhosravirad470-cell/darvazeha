"""Fixtureهای مشترک آزمون — محیط ایزولهٔ VIVA live.

live_env: دیتابیس SQLite در حافظه + هاب خالی + تنظیمات آزمونی.
(از test_viva_live.py به اینجا منتقل شد تا همهٔ ماژول‌های آزمون از آن
استفاده کنند.)
"""
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
from app.modules.games import GameEngine, register_engine
from app.modules.live import hub


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

    app.dependency_overrides.pop(get_db, None)
    settings.bale_bot_token, settings.session_secret = old
    hub.rooms.clear(); hub.tickets.clear(); hub.connections.clear()
