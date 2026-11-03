import os
import uuid
from concurrent.futures import ThreadPoolExecutor
from threading import Barrier

import pytest
from sqlalchemy import create_engine, text
from sqlalchemy.orm import Session

from app.core.database import Base
from app.models import WorldTerritory
from app.modules.world import GATE_NAMES, seed_world


def test_first_13_existing_gate_names_are_preserved():
    assert len(GATE_NAMES) == 13
    assert GATE_NAMES[0] == "دریای شیشه‌ای"
    assert GATE_NAMES[-1] == "دروازهٔ سپیده"


def test_seed_world_creates_77_and_is_idempotent():
    engine = create_engine("sqlite://")
    Base.metadata.create_all(engine)
    with Session(engine) as db:
        seed_world(db)
        assert db.query(WorldTerritory).count() == 77
        assert db.query(WorldTerritory).filter_by(release_status="released").count() == 1
        seed_world(db)
        assert db.query(WorldTerritory).count() == 77
    engine.dispose()


def test_seed_world_repairs_partial_dataset_without_changing_existing_rows():
    engine = create_engine("sqlite://")
    Base.metadata.create_all(engine)
    with Session(engine) as db:
        db.add(
            WorldTerritory(
                id=1,
                slug="territory-01",
                title_fa="رکورد سفارشی موجود",
                release_status="locked",
                is_gate=False,
            )
        )
        db.commit()
        seed_world(db)
        assert db.query(WorldTerritory).count() == 77
        preserved = db.get(WorldTerritory, 1)
        assert preserved.title_fa == "رکورد سفارشی موجود"
        assert preserved.release_status == "locked"
        assert preserved.is_gate is False
    engine.dispose()


def _assert_concurrent_seed_is_safe(engine):
    Base.metadata.create_all(engine)
    with Session(engine) as db:
        db.add(
            WorldTerritory(
                id=1,
                slug="territory-01",
                title_fa="رکورد محافظت‌شده",
                release_status="locked",
                is_gate=False,
            )
        )
        db.commit()

    barrier = Barrier(2)

    def run_replica_startup():
        with Session(engine) as db:
            barrier.wait(timeout=15)
            seed_world(db)

    with ThreadPoolExecutor(max_workers=2) as pool:
        futures = [pool.submit(run_replica_startup) for _ in range(2)]
        for future in futures:
            future.result(timeout=30)

    with Session(engine) as db:
        assert db.query(WorldTerritory).count() == 77
        preserved = db.get(WorldTerritory, 1)
        assert preserved.title_fa == "رکورد محافظت‌شده"
        assert preserved.release_status == "locked"
        assert preserved.is_gate is False


def test_seed_world_is_safe_under_concurrent_sqlite_startup(tmp_path):
    engine = create_engine(
        f"sqlite:///{tmp_path / 'concurrent-seed.db'}",
        connect_args={"check_same_thread": False, "timeout": 30},
    )
    try:
        _assert_concurrent_seed_is_safe(engine)
    finally:
        engine.dispose()


def test_seed_world_is_safe_under_concurrent_postgresql_startup():
    database_url = os.getenv("TEST_POSTGRES_URL")
    if not database_url:
        pytest.skip("TEST_POSTGRES_URL is not configured")

    schema = f"seed_test_{uuid.uuid4().hex}"
    admin_engine = create_engine(database_url)
    engine = None
    try:
        with admin_engine.begin() as connection:
            connection.execute(text(f'CREATE SCHEMA "{schema}"'))
        engine = create_engine(
            database_url,
            connect_args={"options": f"-csearch_path={schema}"},
        )
        _assert_concurrent_seed_is_safe(engine)
    finally:
        if engine is not None:
            engine.dispose()
        with admin_engine.begin() as connection:
            connection.execute(text(f'DROP SCHEMA IF EXISTS "{schema}" CASCADE'))
        admin_engine.dispose()
