from pathlib import Path

from alembic import command
from alembic.autogenerate import compare_metadata
from alembic.config import Config
from alembic.migration import MigrationContext
from sqlalchemy import create_engine

from app.core.config import settings
from app.core.database import Base
import app.models  # noqa: F401


def test_initial_migration_matches_current_orm_metadata(tmp_path, monkeypatch):
    database_url = f"sqlite:///{tmp_path / 'migration-parity.db'}"
    monkeypatch.setattr(settings, "database_url", database_url)

    backend_dir = Path(__file__).resolve().parents[1]
    config = Config(str(backend_dir / "alembic.ini"))
    config.set_main_option("script_location", str(backend_dir / "migrations"))
    command.upgrade(config, "head")

    engine = create_engine(database_url)
    try:
        with engine.connect() as connection:
            migration_context = MigrationContext.configure(connection)
            differences = compare_metadata(migration_context, Base.metadata)
        assert differences == []
    finally:
        engine.dispose()
