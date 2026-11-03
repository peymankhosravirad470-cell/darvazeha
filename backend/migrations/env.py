from logging.config import fileConfig

from alembic import context
from sqlalchemy import engine_from_config, pool, text

from app.core.config import settings
from app.core.database import Base, normalize_database_url
import app.models  # noqa: F401

config = context.config
database_url = normalize_database_url(settings.database_url)
config.set_main_option("sqlalchemy.url", database_url.replace("%", "%%"))

if config.config_file_name:
    fileConfig(config.config_file_name)

target_metadata = Base.metadata


def run_migrations_offline():
    context.configure(
        url=database_url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online():
    connectable = engine_from_config(
        {"sqlalchemy.url": database_url},
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        # Every app replica may start the same image during a rollout. A
        # session-level PostgreSQL advisory lock serializes upgrade head;
        # closing this connection releases the lock even if a migration fails.
        if connection.dialect.name == "postgresql":
            connection.execute(text("SELECT pg_advisory_lock(771077)"))

        context.configure(connection=connection, target_metadata=target_metadata)
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
