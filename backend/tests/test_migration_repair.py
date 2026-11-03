from pathlib import Path

from alembic import command
from alembic.config import Config
from sqlalchemy import create_engine

from app.core.config import settings


def test_repair_migration_restores_missing_world_territories(tmp_path, monkeypatch):
    database_url = f"sqlite:///{tmp_path / 'repair-missing-world.db'}"
    monkeypatch.setattr(settings, "database_url", database_url)

    backend_dir = Path(__file__).resolve().parents[1]
    config = Config(str(backend_dir / "alembic.ini"))
    config.set_main_option("script_location", str(backend_dir / "migrations"))

    command.upgrade(config, "0001_initial")

    engine = create_engine(database_url)
    try:
        with engine.begin() as connection:
            connection.exec_driver_sql("DROP TABLE world_territories")
    finally:
        engine.dispose()

    command.upgrade(config, "head")

    engine = create_engine(database_url)
    try:
        from sqlalchemy import inspect
        assert inspect(engine).has_table("world_territories")
    finally:
        engine.dispose()
