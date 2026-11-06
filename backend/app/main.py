from contextlib import asynccontextmanager
import asyncio
from pathlib import Path

from fastapi import FastAPI, HTTPException, Query, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.api import auth, players, progress, world
from app.api.live import persist_match_result
from app.api import zivan as zivan_api
from app.api import zivan_phase2 as zivan_phase2_api
from app.core.config import settings
from app.core.database import get_engine, get_session_factory
from app.integrations.bale.webhook import router as bale_webhook_router
from app.modules.live import hub
from app.modules.world import seed_world


@asynccontextmanager
async def lifespan(app: FastAPI):
    if settings.app_env.lower() == "production":
        session_secret = settings.session_secret.strip()
        webhook_secret = settings.bale_webhook_secret.strip()
        if (
            len(session_secret) < 32
            or session_secret.lower().startswith("development")
            or "replace-with" in session_secret.lower()
        ):
            raise RuntimeError(
                "SESSION_SECRET must be a unique random value of at least 32 characters in production"
            )
        if (
            not settings.bale_bot_token.strip()
            or len(webhook_secret) < 32
            or "replace-with" in webhook_secret.lower()
        ):
            raise RuntimeError(
                "BALE_BOT_TOKEN and a random 32+ character BALE_WEBHOOK_SECRET are required in production"
            )
        if session_secret == webhook_secret:
            raise RuntimeError("SESSION_SECRET and BALE_WEBHOOK_SECRET must be different values")
        if not settings.database_url.startswith(
            ("postgres://", "postgresql://", "postgresql+psycopg://")
        ):
            raise RuntimeError("Production DATABASE_URL must point to PostgreSQL")

    # Schema creation belongs exclusively to Alembic. The container entrypoint
    # runs migrations before Uvicorn; application startup must not bypass them.
    db = get_session_factory()()
    try:
        seed_world(db)
        from app.api.zivan_phase2 import seed_social_missions
        seed_social_missions(db)
        db.commit()   # بذر مأموریت‌های جمعی باید از بوتِ سرور پنجره‌اش شروع شود
    finally:
        db.close()
    hub.persist_result = persist_match_result
    hub._tick_task = asyncio.ensure_future(hub.tick_loop())
    yield
    if hub._tick_task is not None:
        hub._tick_task.cancel()
        hub._tick_task = None


app = FastAPI(title="هفتاد و هفت سرزمین API", version="0.2.0", lifespan=lifespan)
app.include_router(auth.router, prefix="/api/v1")
app.include_router(players.router, prefix="/api/v1")
app.include_router(progress.router, prefix="/api/v1")
app.include_router(world.router, prefix="/api/v1")
app.include_router(bale_webhook_router, prefix="/api/v1")
from app.api.live import router as live_router
app.include_router(live_router, prefix="/api/v1")
app.include_router(zivan_api.router, prefix="/api/v1")
app.include_router(zivan_phase2_api.router, prefix="/api/v1")


@app.get("/health")
def health():
    try:
        with get_engine().connect() as connection:
            connection.execute(text("SELECT 1"))
    except SQLAlchemyError as exc:
        raise HTTPException(
            status_code=503,
            detail={
                "status": "error",
                "service": "darvazeha-api",
                "checks": {"database": "unavailable"},
            },
        ) from exc

    return {
        "status": "ok",
        "service": "darvazeha-api",
        "checks": {"database": "ok"},
    }


@app.get("/api/v1/world/summary")
def world_summary():
    return {"territories": 77, "released": 1, "gates_in_current_ui": 13}


# --- VIVA زنده: مسیر WebSocket با بلیت یک‌مصرف ---------------------------------

@app.websocket("/ws/viva")
async def viva_ws(websocket: WebSocket, ticket: str = Query(default="")):
    info = hub.consume_ticket(ticket)
    if info is None:
        await websocket.close(code=4401)
        return
    account_id, room_id = info["account_id"], info["room_id"]
    room = hub.get_room(room_id)
    presence = room.presences.get(account_id) if room else None
    if room is None or presence is None:
        await websocket.close(code=4404)
        return
    await websocket.accept()
    from app.modules.live import Connection
    conn = Connection(ws=websocket, account_id=account_id, room_id=room.id)
    old = hub.register_connection(conn)
    await hub.replace_connection(old)
    was_connected = presence.connected
    presence.connected = True
    presence.last_seen = hub.now()
    if room.engine is not None and not was_connected:
        room.engine.on_reconnect(presence)
    await conn.send({"t": "state", "state": room.public_state(account_id)})
    try:
        while True:
            try:
                raw = await websocket.receive_json()
            except ValueError:
                await conn.send({"t": "error", "msg": "bad_json"})
                continue
            if conn.closed:
                break
            if not conn.allow_message():
                await conn.send({"t": "error", "msg": "rate_limited"})
                await conn.close(code=4429)
                break
            kind = raw.get("t")
            if kind == "ping":
                presence.last_seen = hub.now()
                await conn.send({"t": "pong"})
            elif kind == "action":
                if room.engine is not None and room.status == "playing":
                    await room.engine.handle_action(presence, raw.get("action") or {})
                else:
                    await conn.send({"t": "error", "msg": "no_active_match"})
            elif kind == "state":
                await conn.send({"t": "state", "state": room.public_state(account_id)})
            else:
                await conn.send({"t": "error", "msg": "unknown_type"})
    except WebSocketDisconnect:
        pass
    finally:
        conn.closed = True
        hub.drop_connection(conn)


# Serve the current Mini App from the same origin as the API.
APP_ROOT = Path(__file__).resolve().parents[1]
STATIC_DIR = APP_ROOT / "web"
if not STATIC_DIR.is_dir():
    STATIC_DIR = APP_ROOT.parent  # repository root during tests/local source checkout
app.mount("/", StaticFiles(directory=str(STATIC_DIR), html=True), name="miniapp")
