from datetime import datetime, timezone
from sqlalchemy import Boolean, DateTime, ForeignKey, Integer, JSON, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base

def utcnow():
    return datetime.now(timezone.utc)

class User(Base):
    __tablename__ = "users"
    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    bale_user_id: Mapped[int] = mapped_column(Integer, unique=True, index=True, nullable=False)
    first_name: Mapped[str] = mapped_column(String(120), default="")
    username: Mapped[str | None] = mapped_column(String(120), nullable=True)
    photo_url: Mapped[str | None] = mapped_column(Text, nullable=True)
    phone_e164: Mapped[str | None] = mapped_column(String(20), nullable=True, unique=True)
    phone_verified_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

class PlayerAccount(Base):
    __tablename__ = "player_accounts"
    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), unique=True, nullable=False)
    display_name: Mapped[str] = mapped_column(String(80), default="مسافر")
    status: Mapped[str] = mapped_column(String(20), default="active")
    # Home base (پایگاه خانگی) — انتخاب یک‌بارِ امپراتوری/سرزمین، مالکیت با حساب.
    # هرگز از کلاینت بازنویسی نمی‌شود؛ فقط وقتی NULL است ثبت می‌شود (اتمیک، سرورمحور).
    home_realm: Mapped[str | None] = mapped_column(String(40), nullable=True)
    home_land: Mapped[str | None] = mapped_column(String(40), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

class PlayerProgress(Base):
    __tablename__ = "player_progress"
    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    account_id: Mapped[str] = mapped_column(ForeignKey("player_accounts.id"), unique=True, nullable=False)
    unlocked_territory: Mapped[int] = mapped_column(Integer, default=1)
    visited_territories: Mapped[list] = mapped_column(JSON, default=lambda: [1])
    missions_completed: Mapped[int] = mapped_column(Integer, default=0)
    stars: Mapped[int] = mapped_column(Integer, default=0)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow, onupdate=utcnow)

class WorldTerritory(Base):
    __tablename__ = "world_territories"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    slug: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)
    title_fa: Mapped[str] = mapped_column(String(120), nullable=False)
    release_status: Mapped[str] = mapped_column(String(20), default="locked")
    is_gate: Mapped[bool] = mapped_column(Boolean, default=False)

class PlayerTerritoryProgress(Base):
    __tablename__ = "player_territory_progress"
    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    account_id: Mapped[str] = mapped_column(ForeignKey("player_accounts.id"), nullable=False)
    territory_id: Mapped[int] = mapped_column(ForeignKey("world_territories.id"), nullable=False)
    status: Mapped[str] = mapped_column(String(20), default="locked")
    progress_data: Mapped[dict] = mapped_column(JSON, default=dict)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    __table_args__ = (UniqueConstraint("account_id", "territory_id", name="uq_player_territory"),)

class AuthSession(Base):
    __tablename__ = "auth_sessions"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), nullable=False, index=True)
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    revoked_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

class GameEvent(Base):
    __tablename__ = "game_events"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    account_id: Mapped[str] = mapped_column(ForeignKey("player_accounts.id"), nullable=False, index=True)
    event_type: Mapped[str] = mapped_column(String(40), nullable=False)
    payload: Mapped[dict] = mapped_column(JSON, default=dict)
    trust_level: Mapped[str] = mapped_column(String(30), default="client_unverified")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

class AccountBalance(Base):
    __tablename__ = "account_balances"
    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    account_id: Mapped[str] = mapped_column(ForeignKey("player_accounts.id"), unique=True, nullable=False)
    token_balance: Mapped[int] = mapped_column(Integer, default=0)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow, onupdate=utcnow)

class TokenLedger(Base):
    __tablename__ = "token_ledger"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    account_id: Mapped[str] = mapped_column(ForeignKey("player_accounts.id"), nullable=False, index=True)
    amount: Mapped[int] = mapped_column(Integer, nullable=False)
    reason: Mapped[str] = mapped_column(String(80), nullable=False)
    reference_id: Mapped[str | None] = mapped_column(String(80), nullable=True, unique=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

class MatchResult(Base):
    """نتیجهٔ مسابقه‌های زندهٔ VIVA — ماندگاری سروری و مرجع حسابرسی پاداش."""
    __tablename__ = "match_results"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    game: Mapped[str] = mapped_column(String(30), nullable=False, index=True)
    room_id: Mapped[str] = mapped_column(String(80), nullable=False, index=True)
    player_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    config: Mapped[dict] = mapped_column(JSON, default=dict)
    result: Mapped[dict] = mapped_column(JSON, default=dict)
    started_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    finished_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
