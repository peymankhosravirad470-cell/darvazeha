from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from app.api import auth, players, progress, world
from app.core.database import Base, get_engine, get_session_factory
from app.integrations.bale.webhook import router as bale_webhook_router
from app.models import WorldTerritory

GATE_NAMES = ["دریای شیشه‌ای","جنگل نقره‌ای","کوه بلورین","کویر آینه‌ها","غار ستاره‌ها","شهر ابرها","جزیرهٔ مه","درهٔ فانوس‌ها","باغ روشنایی","برج بادها","چشمهٔ زمان","صخرهٔ آواز","دروازهٔ سپیده"]

def seed_world(db: Session):
    if db.query(WorldTerritory).count():
        return
    db.add_all([
        WorldTerritory(id=n, slug=f"territory-{n:02d}",
          title_fa=GATE_NAMES[n-1] if n <= 13 else f"سرزمین {n}",
          release_status="released" if n == 1 else "locked", is_gate=n <= 13)
        for n in range(1, 78)
    ])
    db.commit()

@asynccontextmanager
async def lifespan(app: FastAPI):
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
app.mount("/", StaticFiles(directory="web", html=True, check_dir=False), name="miniapp")
