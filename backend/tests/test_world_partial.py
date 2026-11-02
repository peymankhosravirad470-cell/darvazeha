from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from app.core.database import Base
from app.modules.world import GATE_NAMES, seed_world
from app.models import WorldTerritory

def test_first_13_existing_gate_names_are_preserved():
    assert len(GATE_NAMES) == 13
    assert GATE_NAMES[0] == "دریای شیشه‌ای"
    assert GATE_NAMES[-1] == "دروازهٔ سپیده"

def test_seed_world_creates_77_and_is_idempotent():
    engine=create_engine("sqlite://")
    Base.metadata.create_all(engine)
    with Session(engine) as db:
        seed_world(db)
        assert db.query(WorldTerritory).count() == 77
        assert db.query(WorldTerritory).filter_by(release_status="released").count() == 1
        seed_world(db)
        assert db.query(WorldTerritory).count() == 77
    engine.dispose()

def test_seed_world_repairs_partial_dataset():
    engine=create_engine("sqlite://")
    Base.metadata.create_all(engine)
    with Session(engine) as db:
        db.add(WorldTerritory(id=1, slug="territory-01", title_fa="دریای شیشه‌ای", release_status="released", is_gate=True))
        db.commit()
        seed_world(db)
        assert db.query(WorldTerritory).count() == 77
    engine.dispose()
