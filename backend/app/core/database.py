from collections.abc import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker
from app.core.config import settings

class Base(DeclarativeBase):
    pass

_engine = None
_factory = None

def get_engine():
    global _engine, _factory
    if _engine is None:
        args = {"check_same_thread": False} if settings.database_url.startswith("sqlite") else {}
        _engine = create_engine(settings.database_url, pool_pre_ping=True, connect_args=args)
        _factory = sessionmaker(bind=_engine, autoflush=False, autocommit=False)
    return _engine

def get_session_factory():
    get_engine()
    return _factory

def get_db() -> Generator[Session, None, None]:
    db = get_session_factory()()
    try:
        yield db
    finally:
        db.close()
