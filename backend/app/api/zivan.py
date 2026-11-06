"""API زیوان — تالارها، جلسهٔ فعالیت GPS، رتبه‌بندی و تاریخچه.

امنیت و حریم خصوصی:
- همهٔ مسیرها با Bearer احراز هویت می‌شوند.
- مختصات هرگز در پاسخ‌های عمومی/رتبه‌بندی نمی‌آید.
- مسیر ذخیره‌شده فقط از مسیر /sessions/{id}/path و فقط برای صاحبش.
- پایان جلسه کاملاً idempotent است؛ ارسال تکراری نتیجهٔ تازه‌ای نمی‌سازد.
- پاداش فقط اگر settings.zivan_rewards_enabled=True (پیش‌فرض خاموش).
"""
from __future__ import annotations

import time
import uuid

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.database import get_db
from app.dependencies import current_user
from app.models import AccountBalance, ActivitySession, TokenLedger, User
from app.modules.players import ensure_player_account
from app.modules.zivan import (
    HALLS, LIVE_HALL_IDS, VALID_ACTIVITIES, privacy_path, reward_for,
    validate_protocol_session, validate_session_points,
)

router = APIRouter(prefix="/zivan", tags=["VIVA Zivan"])

MAX_SESSIONS_PER_DAY = 40


class StartSessionRequest(BaseModel):
    hall: str = Field(min_length=1, max_length=40)
    consent: bool = False


class FinishSessionRequest(BaseModel):
    points: list[dict] = Field(default_factory=list, max_length=2100)


def _account(db: Session, user: User):
    account, _ = ensure_player_account(db, user, user.first_name or "همسفر زیوان")
    return account


def _now() -> float:
    """ساعت ماژول — قابل تزریق در آزمون‌ها (زمان فشرده بدون خواب واقعی)."""
    return time.time()


def _own_session(db: Session, session_id: str, account_id: str) -> ActivitySession:
    s = db.query(ActivitySession).filter(ActivitySession.id == session_id).first()
    if s is None or s.account_id != account_id:
        raise HTTPException(status_code=404, detail="جلسه پیدا نشد.")
    return s


@router.get("/halls")
def halls(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    week_ago = _now() - 7 * 86400
    my_stats = (
        db.query(
            func.count(ActivitySession.id),
            func.sum(ActivitySession.distance_m),
            func.sum(ActivitySession.steps),
        )
        .filter(
            ActivitySession.account_id == account.id,
            ActivitySession.valid.is_(True),
            ActivitySession.started_at >= _ts_to_dt(week_ago),
        )
        .first()
    )
    return {
        "kingdom": "zivan",
        "halls": HALLS,
        "me": {
            "sessions_7d": int(my_stats[0] or 0),
            "distance_m_7d": int(my_stats[1] or 0),
            "steps_7d": int(my_stats[2] or 0),
            "rewards_enabled": bool(settings.zivan_rewards_enabled),
        },
    }


@router.post("/sessions")
def start_session(body: StartSessionRequest, user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    if body.hall not in LIVE_HALL_IDS:
        raise HTTPException(status_code=422, detail="این تالار هنوز فعالیت زنده ندارد.")
    hall = next(h for h in HALLS if h["id"] == body.hall)
    activity = hall["activity"]
    if activity not in VALID_ACTIVITIES:
        raise HTTPException(status_code=422, detail="فعالیت این تالار فعلاً قابل ثبت نیست.")
    if body.consent is not True:
        raise HTTPException(status_code=403, detail="GPS فقط با رضایت صریح شما فعال می‌شود.")
    # سقف روزانه (ضد اسپم/دستکاری)
    day_ago = _ts_to_dt(_now() - 86400)
    n = db.query(ActivitySession.id).filter(
        ActivitySession.account_id == account.id, ActivitySession.created_at >= day_ago).count()
    if n >= MAX_SESSIONS_PER_DAY:
        raise HTTPException(status_code=429, detail="سقف جلسه‌های امروز پر شده است.")
    # فقط یک جلسهٔ باز برای هر حساب
    open_s = db.query(ActivitySession.id).filter(
        ActivitySession.account_id == account.id, ActivitySession.status == "active").first()
    if open_s:
        raise HTTPException(status_code=409, detail="یک جلسهٔ باز دارید؛ ابتدا آن را پایان دهید.")

    s = ActivitySession(
        id=uuid.uuid4().hex, account_id=account.id, hall=body.hall,
        activity=activity, consent=True, status="active",
    )
    db.add(s)
    db.commit()
    return {"session": {
        "id": s.id, "hall": s.hall, "activity": s.activity,
        "consent": True, "status": "active", "started_at": _dt_to_ts(s.started_at),
    }}


@router.post("/sessions/{session_id}/finish")
def finish_session(session_id: str, body: FinishSessionRequest,
                   user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    s = _own_session(db, session_id, account.id)

    if s.status == "finished":
        # idempotent: پایان تکراری همان نتیجهٔ ثبت‌شده را برمی‌گرداند
        paid = _paid_amount(db, s.id)
        return {"session": _public(s), "already": True, "reward": paid,
                "rewards_enabled": bool(settings.zivan_rewards_enabled)}

    started_ts = _dt_to_ts(s.started_at)
    finished_ts = _now()

    if s.activity == "balance":
        # پروتکل تایمری — مدت فقط از ساعت سرور؛ نقاط کلاینت هرگز ملاک نیست
        stats = s.validation_stats or {}
        verdict = validate_protocol_session(
            stats.get("protocol"), started_ts, finished_ts)
        s.status = "finished"
        s.valid = bool(verdict["valid"])
        s.reject_reason = verdict["reject_reason"]
        s.distance_m = 0
        s.steps = 0
        s.duration_s = int(verdict["duration_s"])
        s.validation_stats = {
            "protocol": stats.get("protocol"),
            "protocol_name": verdict["protocol"]["name"] if verdict["protocol"] else None,
            "workout_id": stats.get("workout_id"),
            "min_s": verdict["protocol"]["min_s"] if verdict["protocol"] else None,
            "max_s": verdict["protocol"]["max_s"] if verdict["protocol"] else None,
        }
        s.finished_at = _ts_to_dt(finished_ts)
        db.commit()
        return {"session": _public(s), "already": False, "reward": 0,
                "rewards_enabled": bool(settings.zivan_rewards_enabled)}

    verdict = validate_session_points(
        s.activity, body.points, started_at_ts=started_ts, finished_at_ts=finished_ts)

    s.status = "finished"
    s.valid = bool(verdict["valid"])
    s.reject_reason = verdict["reject_reason"]
    s.distance_m = int(verdict["distance_m"])
    s.steps = int(verdict["steps"])
    s.duration_s = int(verdict["duration_s"])
    s.validation_stats = verdict["stats"]
    s.finished_at = _ts_to_dt(finished_ts)
    # حریم خصوصی: مسیر فقط با رضایت (که شرط شروع بود) و فقط نسخهٔ تقطیع‌شده
    if s.consent and verdict["valid"]:
        s.path = privacy_path(body.points or [])

    reward_paid = 0
    if s.valid and settings.zivan_rewards_enabled:
        reward_paid = _pay_reward(db, account.id, s.id, reward_for(s.distance_m, s.steps))

    db.commit()
    return {"session": _public(s), "already": False, "reward": reward_paid,
            "rewards_enabled": bool(settings.zivan_rewards_enabled)}


@router.get("/sessions/{session_id}/path")
def session_path(session_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    """مسیر فقط برای صاحب جلسه — مختصات هرگز به دیگران نمی‌رود."""
    account = _account(db, user)
    s = _own_session(db, session_id, account.id)
    return {"session_id": s.id, "consent": s.consent, "path": s.path or []}


@router.get("/sessions/mine")
def my_sessions(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    rows = (db.query(ActivitySession)
            .filter(ActivitySession.account_id == account.id)
            .order_by(ActivitySession.started_at.desc())
            .limit(30).all())
    return {"sessions": [_public(s) for s in rows]}


@router.get("/leaderboard")
def leaderboard(period: str = "7d", user: User = Depends(current_user), db: Session = Depends(get_db)):
    """رتبه‌بندی قدم‌های معتبر — بدون هیچ مختصات؛ فقط نام، قدم، مسافت."""
    days = 30 if period == "30d" else 7
    since = _ts_to_dt(_now() - days * 86400)
    rows = (db.query(
                ActivitySession.account_id,
                func.sum(ActivitySession.steps).label("steps"),
                func.sum(ActivitySession.distance_m).label("dist"),
            )
            .filter(ActivitySession.valid.is_(True), ActivitySession.started_at >= since)
            .group_by(ActivitySession.account_id)
            .order_by(func.sum(ActivitySession.steps).desc())
            .limit(20).all())
    from app.models import PlayerAccount
    ids = [r[0] for r in rows]
    names = {}
    if ids:
        for acc in db.query(PlayerAccount).filter(PlayerAccount.id.in_(ids)).all():
            names[acc.id] = acc.display_name
    return {"period": f"{days}d", "leaderboard": [
        {"rank": i + 1, "display_name": names.get(r[0], "همسفر"),
         "steps": int(r[1] or 0), "distance_m": int(r[2] or 0)}
        for i, r in enumerate(rows)
    ]}


def _paid_amount(db: Session, session_id: str) -> int:
    reference = f"zivan:{session_id}"
    row = db.query(TokenLedger).filter(TokenLedger.reference_id == reference).first()
    return int(row.amount) if row else 0


def _pay_reward(db: Session, account_id: str, session_id: str, amount: int) -> int:
    """پرداخت یکتا — reference یکتا یعنی پایان تکراری هرگز دوباره پاداش نمی‌دهد."""
    if amount <= 0:
        return 0
    reference = f"zivan:{session_id}"
    exists = db.query(TokenLedger.id).filter(TokenLedger.reference_id == reference).first()
    if exists:
        return 0
    db.add(TokenLedger(
        id=reference if len(reference) <= 80 else uuid.uuid4().hex,
        account_id=account_id, amount=amount, reason="zivan_activity", reference_id=reference,
    ))
    balance = db.query(AccountBalance).filter(AccountBalance.account_id == account_id).first()
    if balance is None:
        balance = AccountBalance(id=str(uuid.uuid4()), account_id=account_id, token_balance=0)
        db.add(balance)
        db.flush()
    balance.token_balance += amount
    return amount


def _public(s: ActivitySession) -> dict:
    stats = s.validation_stats or {}
    return {
        "id": s.id, "hall": s.hall, "activity": s.activity, "status": s.status,
        "valid": s.valid, "reject_reason": s.reject_reason,
        "distance_m": s.distance_m, "steps": s.steps, "duration_s": s.duration_s,
        "consent": s.consent,
        "protocol": stats.get("protocol"),
        "protocol_name": stats.get("protocol_name"),
        "link_id": s.link_id,
        "started_at": _dt_to_ts(s.started_at),
        "finished_at": _dt_to_ts(s.finished_at) if s.finished_at else None,
        # عمداً بدون path — مسیر فقط از /path برای صاحبش
    }


# --- کمکی‌های زمان ---------------------------------------------------------
def _ts_to_dt(ts: float):
    from datetime import datetime, timezone
    return datetime.fromtimestamp(ts, tz=timezone.utc)


def _dt_to_ts(dt) -> float:
    return dt.timestamp() if dt is not None else 0.0
