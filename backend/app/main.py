from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from app.api import auth, players, progress, world
from app.core.database import Base, get_engine, get_session_factory
from app.core.config import settings
from app.integrations.bale.webhook import router as bale_webhook_router
from app.modules.world import seed_world

@asynccontextmanager
async def lifespan(app: FastAPI):
    if settings.app_env == "production":
        if len(settings.session_secret) < 32 or settings.session_secret.startswith("development"):
            raise RuntimeError("SESSION_SECRET must be a unique random value of at least 32 characters in production")
        if not settings.bale_bot_token or len(settings.bale_webhook_secret) < 32:
            raise RuntimeError("BALE_BOT_TOKEN and a 32+ character BALE_WEBHOOK_SECRET are required in production")
        if not settings.database_url.startswith(("postgres://", "postgresql://", "postgresql+psycopg://")):
            raise RuntimeError("Production DATABASE_URL must point to PostgreSQL")
    Base.metadata.create_all(bind=get_engine())
    db = get_session_factory()()
    try:
        seed_world(db)
    finally:
        db.close()
    yield

app = FastAPI(title="هفتاد و هفت سرزمین API", version="0.1.0", lifespan=lifespan)
app.include_router(auth.router, prefix="/api/v1")
app.include_router(players.router, prefix="/api/v1")
app.include_router(progress.router, prefix="/api/v1")
app.include_router(world.router, prefix="/api/v1")
app.include_router(bale_webhook_router, prefix="/api/v1")

@app.get("/health")
def health():
    return {"status": "ok", "service": "darvazeha-api"}

@app.get("/api/v1/world/summary")
def world_summary():
    return {"territories": 77, "released": 1, "gates_in_current_ui": 13}

# Serve the current Mini App from the same origin as the API.
APP_ROOT = Path(__file__).resolve().parents[1]
STATIC_DIR = APP_ROOT / "web"
if not STATIC_DIR.is_dir():
    STATIC_DIR = APP_ROOT.parent  # repository root during tests/local source checkout
app.mount("/", StaticFiles(directory=str(STATIC_DIR), html=True), name="miniapp")
