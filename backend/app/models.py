from datetime import datetime, timezone
from sqlalchemy import Boolean, DateTime, ForeignKey, Integer, JSON, LargeBinary, String, Text, UniqueConstraint
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

class ActivitySession(Base):
    """جلسهٔ فعالیت زیوان — فقط حاصلِ اعتبارسنجی سرور ذخیره می‌شود.

    حریم خصوصی: مسیر (path) فقط با رضایت صریح و حداکثر ۶۰ نقطهٔ
    تقطیع‌شده (~۱۱ متر دقت) نگه‌داری می‌شود و فقط برای خود کاربر
    قابل دریافت است. مسافت/قدمِ عمومی فاقد مختصات است.
    """
    __tablename__ = "zivan_activity_sessions"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    hall: Mapped[str] = mapped_column(String(40), nullable=False, index=True)
    activity: Mapped[str] = mapped_column(String(20), nullable=False)
    consent: Mapped[bool] = mapped_column(Boolean, default=False)
    status: Mapped[str] = mapped_column(String(20), default="active", index=True)
    distance_m: Mapped[int] = mapped_column(Integer, default=0)
    steps: Mapped[int] = mapped_column(Integer, default=0)
    duration_s: Mapped[int] = mapped_column(Integer, default=0)
    valid: Mapped[bool] = mapped_column(Boolean, default=False)
    reject_reason: Mapped[str | None] = mapped_column(String(40), nullable=True)
    validation_stats: Mapped[dict] = mapped_column(JSON, default=dict)
    path: Mapped[list] = mapped_column(JSON, default=list)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow, index=True)
    finished_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    # پیوند اختیاری جلسه به موجودیت دیگر (مثلاً حلقهٔ تمرین) — برای شمارش
    # پیشرفت گروهی فقط از جلسه‌های معتبرِ همین ستون استفاده می‌شود.
    link_id: Mapped[str | None] = mapped_column(String(80), nullable=True, index=True)


# ---------------------------------------------------------------------------
# زیوان — فاز ۲: رقابت گروهی، چالش دوستانه، مأموریت‌ها، جام، لحظه‌ها
# ---------------------------------------------------------------------------

class ZivanGroup(Base):
    """گروه زیوان — برای مسابقهٔ قدم گروهی و تمرین مشترک."""
    __tablename__ = "zivan_groups"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    name: Mapped[str] = mapped_column(String(80), nullable=False)
    owner_account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    invite_code: Mapped[str] = mapped_column(String(12), unique=True, index=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)


class ZivanGroupMember(Base):
    __tablename__ = "zivan_group_members"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    group_id: Mapped[str] = mapped_column(
        ForeignKey("zivan_groups.id"), nullable=False, index=True)
    account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    __table_args__ = (UniqueConstraint("group_id", "account_id", name="uq_group_member"),)


class ZivanRace(Base):
    """مسابقهٔ قدم گروهی — تجمیع فقط از جلسه‌های معتبرِ بازهٔ مسابقه."""
    __tablename__ = "zivan_races"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    group_id: Mapped[str] = mapped_column(
        ForeignKey("zivan_groups.id"), nullable=False, index=True)
    title: Mapped[str] = mapped_column(String(80), nullable=False)
    metric: Mapped[str] = mapped_column(String(20), nullable=False, default="steps")
    status: Mapped[str] = mapped_column(String(20), nullable=False, default="active", index=True)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    ends_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, index=True)
    finished_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_by: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)


class ZivanChallenge(Base):
    """چالش دوستانه — دو حساب، یک متریک، حکم فقط از جلسه‌های معتبر بازه."""
    __tablename__ = "zivan_challenges"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    metric: Mapped[str] = mapped_column(String(20), nullable=False)
    target: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    creator_account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    opponent_account_id: Mapped[str | None] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=True, index=True)
    status: Mapped[str] = mapped_column(String(20), nullable=False, default="open", index=True)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    ends_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, index=True)
    settled_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    winner_account_id: Mapped[str | None] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=True)
    result: Mapped[dict] = mapped_column(JSON, default=dict)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)


class ZivanSocialMission(Base):
    """مأموریت اجتماعی جمعی — هدف مشترک، سهم هر حساب از جلسه‌های معتبر."""
    __tablename__ = "zivan_social_missions"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    title: Mapped[str] = mapped_column(String(120), nullable=False)
    description: Mapped[str] = mapped_column(String(300), nullable=False, default="")
    metric: Mapped[str] = mapped_column(String(20), nullable=False)
    goal: Mapped[int] = mapped_column(Integer, nullable=False)
    status: Mapped[str] = mapped_column(String(20), nullable=False, default="active", index=True)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    ends_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, index=True)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)


class ZivanSocialContribution(Base):
    """سهم ثبت‌شده در مأموریت جمعی — هر جلسه حداکثر یک‌بار (قید یکتا)."""
    __tablename__ = "zivan_social_contributions"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    mission_id: Mapped[str] = mapped_column(
        ForeignKey("zivan_social_missions.id"), nullable=False, index=True)
    session_id: Mapped[str] = mapped_column(
        ForeignKey("zivan_activity_sessions.id"), nullable=False)
    account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    value: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    __table_args__ = (UniqueConstraint("mission_id", "session_id", name="uq_mission_session"),)


class ZivanMissionProgress(Base):
    """پیشرفت/دعوای مأموریت روزانه و هفتگی — دعوا یکتا (قید یکتا)."""
    __tablename__ = "zivan_mission_progress"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    mission_code: Mapped[str] = mapped_column(String(40), nullable=False)
    period_key: Mapped[str] = mapped_column(String(20), nullable=False)
    claimed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    __table_args__ = (UniqueConstraint("account_id", "mission_code", "period_key",
                                       name="uq_mission_period"),)


class ZivanMoment(Base):
    """لحظهٔ خصوصی — عکس فقط برای صاحبش؛ مختصات و EXIF هرگز ذخیره نمی‌شود."""
    __tablename__ = "zivan_moments"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    caption: Mapped[str] = mapped_column(String(200), nullable=False, default="")
    content_type: Mapped[str] = mapped_column(String(30), nullable=False)
    size_bytes: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    image: Mapped[bytes] = mapped_column(LargeBinary, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)


class ZivanWorkout(Base):
    """حلقهٔ تمرین گروهی — کد دعوت، اعضا، پایان خودکار پس از سقف زمان."""
    __tablename__ = "zivan_workouts"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    title: Mapped[str] = mapped_column(String(80), nullable=False)
    protocol: Mapped[str] = mapped_column(String(40), nullable=False)
    owner_account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    invite_code: Mapped[str] = mapped_column(String(12), unique=True, index=True, nullable=False)
    status: Mapped[str] = mapped_column(String(20), nullable=False, default="open", index=True)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    ends_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)


class ZivanWorkoutMember(Base):
    __tablename__ = "zivan_workout_members"
    id: Mapped[str] = mapped_column(String(80), primary_key=True)
    workout_id: Mapped[str] = mapped_column(
        ForeignKey("zivan_workouts.id"), nullable=False, index=True)
    account_id: Mapped[str] = mapped_column(
        ForeignKey("player_accounts.id"), nullable=False, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    __table_args__ = (UniqueConstraint("workout_id", "account_id", name="uq_workout_member"),)
