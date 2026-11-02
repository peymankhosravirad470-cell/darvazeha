from collections.abc import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker
from app.core.config import settings

class Base(DeclarativeBase):
    pass

_engine = None
_factory = None

def normalize_database_url(url: str) -> str:
    if url.startswith("postgres://"):
        return "postgresql+psycopg://" + url[len("postgres://"):]
    if url.startswith("postgresql://"):
        return "postgresql+psycopg://" + url[len("postgresql://"):]
    return url

def get_engine():
    global _engine, _factory
    if _engine is None:
        url = normalize_database_url(settings.database_url)
        args = {"check_same_thread": False} if url.startswith("sqlite") else {}
        _engine = create_engine(url, pool_pre_ping=True, connect_args=args)
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
