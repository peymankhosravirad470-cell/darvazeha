"""API زیوان — فاز ۲: تالارهای شش‌گانهٔ باقی‌مانده + رقابت گروهی.

پوشش واقعی (بدون قابلیت نمایشی):
- تعادل و انعطاف + تمرین گروهی: پروتکل‌های تایمری با حکم سمت سرور
  (مدت فقط از ساعت سرور — «خوداظهاری تأییدشده با تایمر» و همین‌طور
  برچسب می‌خورد، نه بیشتر).
- چالش دوستانه: دوئل قدم/مسافت؛ برنده فقط از جمعِ جلسه‌های معتبر سرور.
- مأموریت اجتماعی: مأموریت جمعی با سهمِ یکتای هر جلسه (قید یکتای دیتابیس).
- جام بزرگ سلامت: دورهٔ هفتگی با امتیاز شفاف (قدم + ثانیهٔ تمرین).
- لحظه‌ها: گالری کاملاً خصوصی؛ عکس فقط برای صاحبش؛ امضای بایت‌ها ملاک
  نوع فایل است، نه ادعای کلاینت.
- رقابت گروهی: گروه با کد دعوت، مسابقهٔ قدم/مسافت گروهی با جدول زنده.

امنیت مشترک همهٔ مسیرها: Bearer؛ هیچ مختصاتی در پاسخ‌ها نیست؛ پاداش
زیوان همچنان با ZIVAN_REWARDS_ENABLED پیش‌فرض خاموش است.
"""
from __future__ import annotations

import base64
import secrets
import uuid
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo

from fastapi import APIRouter, Depends, HTTPException, Response
from pydantic import BaseModel, Field
from sqlalchemy import func
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.database import get_db
from app.dependencies import current_user
from app.models import (
    ActivitySession, PlayerAccount, User, ZivanChallenge, ZivanGroup,
    ZivanGroupMember, ZivanMissionProgress, ZivanMoment, ZivanRace,
    ZivanSocialContribution, ZivanSocialMission, ZivanWorkout,
    ZivanWorkoutMember,
)
from app.modules.players import ensure_player_account
from app.modules.zivan import (
    CHALLENGE_MAX_HOURS, CHALLENGE_MAX_OPEN_PER_ACCOUNT, CHALLENGE_MAX_TARGET,
    CHALLENGE_METRICS, CHALLENGE_MIN_HOURS, CHALLENGE_MIN_TARGET,
    GROUP_MAX_MEMBERS, GROUP_MAX_PER_ACCOUNT, GROUP_NAME_MAX,
    MISSION_TEMPLATES, MOMENT_CAPTION_MAX, MOMENT_MAX_BYTES,
    MOMENT_MAX_PER_ACCOUNT, PROTOCOLS, RACE_DURATION_CHOICES,
    RACE_MAX_ACTIVE_PER_GROUP, SOCIAL_CONTRIBUTION_METRICS, WORKOUT_MAX_MEMBERS,
    WORKOUT_MAX_OPEN_HOURS, cup_score, make_invite_code, moment_image_type,
    validate_protocol_session,
)

router = APIRouter(prefix="/zivan", tags=["VIVA Zivan Phase 2"])

TEHRAN = ZoneInfo("Asia/Tehran")
OPEN_STATUSES = ("open", "active")


def _account(db: Session, user: User):
    account, _ = ensure_player_account(db, user, user.first_name or "همسفر زیوان")
    return account


def _now() -> float:
    """ساعت ماژول — قابل تزریق در آزمون‌ها."""
    import time
    return time.time()


def _ts_to_dt(ts: float) -> datetime:
    return datetime.fromtimestamp(ts, tz=timezone.utc)


def _dt_to_ts(dt: datetime | None) -> float:
    return dt.timestamp() if dt else 0.0


def _names(db: Session, account_ids: list[str]) -> dict[str, str]:
    ids = list({a for a in account_ids if a})
    if not ids:
        return {}
    return {a.id: a.display_name
            for a in db.query(PlayerAccount).filter(PlayerAccount.id.in_(ids)).all()}


# ===========================================================================
# پروتکل‌های تایمری — تالار تعادل و انعطاف + تمرین گروهی
# ===========================================================================

class ProtocolStartRequest(BaseModel):
    hall: str = Field(min_length=1, max_length=40)
    protocol: str = Field(min_length=1, max_length=40)
    workout_id: str | None = Field(default=None, max_length=80)


@router.get("/protocols")
def protocols():
    """فهرست پروتکل‌های تمرین تایمری — با برچسب صادقانهٔ منبع حکم."""
    return {
        "protocols": [
            {"id": pid, "name": p["name"], "min_s": p["min_s"], "max_s": p["max_s"],
             "icon": p["icon"]}
            for pid, p in PROTOCOLS.items()
        ],
        "verdict_source": "server_clock",
        "honesty_note": "حکم این تالارها «خوداظهاری تأییدشده با تایمر سرور» است — مدت فقط با ساعت سرور محاسبه می‌شود.",
    }


@router.post("/protocol-sessions")
def start_protocol_session(body: ProtocolStartRequest,
                           user: User = Depends(current_user),
                           db: Session = Depends(get_db)):
    account = _account(db, user)
    if body.hall not in ("balance", "group_training"):
        raise HTTPException(status_code=422, detail="این تالار پروتکل تایمری ندارد.")
    if body.protocol not in PROTOCOLS:
        raise HTTPException(status_code=422, detail="پروتکل تمرین نامعتبر است.")

    link_id = None
    workout = None
    if body.workout_id:
        workout = db.query(ZivanWorkout).filter(ZivanWorkout.id == body.workout_id).first()
        if workout is None or workout.status != "open":
            raise HTTPException(status_code=404, detail="حلقهٔ تمرین باز پیدا نشد.")
        member = db.query(ZivanWorkoutMember.id).filter(
            ZivanWorkoutMember.workout_id == workout.id,
            ZivanWorkoutMember.account_id == account.id).first()
        if member is None:
            raise HTTPException(status_code=403, detail="ابتدا به حلقهٔ تمرین بپیوندید.")
        link_id = workout.id

    # سقف روزانهٔ پروتکل‌ها (ضد اسپم)
    now = _now()
    day_ago = _ts_to_dt(now - 86400)
    n = db.query(ActivitySession.id).filter(
        ActivitySession.account_id == account.id,
        ActivitySession.created_at >= day_ago,
        ActivitySession.activity == "balance").count()
    if n >= 24:
        raise HTTPException(status_code=429, detail="سقف جلسه‌های تمرین امروز پر شده است.")
    # فقط یک جلسهٔ باز (ضد ثبت هم‌زمان — مثل GPS)
    open_s = db.query(ActivitySession.id).filter(
        ActivitySession.account_id == account.id, ActivitySession.status == "active").first()
    if open_s:
        raise HTTPException(status_code=409, detail="یک جلسهٔ باز دارید؛ ابتدا آن را پایان دهید.")

    s = ActivitySession(
        id=uuid.uuid4().hex, account_id=account.id, hall=body.hall,
        activity="balance", consent=False, status="active",
        validation_stats={"protocol": body.protocol, "workout_id": workout.id if workout else None},
        link_id=link_id,
    )
    db.add(s)
    db.commit()
    p = PROTOCOLS[body.protocol]
    return {"session": {
        "id": s.id, "hall": s.hall, "activity": "balance", "status": "active",
        "protocol": {"id": body.protocol, "name": p["name"], "min_s": p["min_s"],
                     "max_s": p["max_s"], "icon": p["icon"]},
        "started_at": _dt_to_ts(s.started_at),
        "workout_id": workout.id if workout else None,
    }}


# ===========================================================================
# حلقهٔ تمرین گروهی (تالار تمرین گروهی)
# ===========================================================================

class WorkoutCreateRequest(BaseModel):
    title: str = Field(min_length=2, max_length=80)
    protocol: str = Field(min_length=1, max_length=40)


def _workout_public(db: Session, w: ZivanWorkout, viewer_account: str | None = None) -> dict:
    members = db.query(ZivanWorkoutMember).filter(
        ZivanWorkoutMember.workout_id == w.id).all()
    ids = [m.account_id for m in members]
    names = _names(db, ids)
    done_ids = {r[0] for r in (
        db.query(ActivitySession.account_id).filter(
            ActivitySession.link_id == w.id,
            ActivitySession.valid.is_(True)).distinct().all())}
    return {
        "id": w.id, "title": w.title, "protocol": w.protocol,
        "protocol_name": PROTOCOLS.get(w.protocol, {}).get("name", w.protocol),
        "status": w.status, "invite_code": w.invite_code,
        "started_at": _dt_to_ts(w.started_at), "ends_at": _dt_to_ts(w.ends_at),
        "members": [{"account_id": m.account_id, "display_name": names.get(m.account_id, "همسفر"),
                     "done": m.account_id in done_ids} for m in members],
        "done_count": len(done_ids & set(ids)),
        "you_in": viewer_account in ids if viewer_account else None,
    }


@router.post("/workouts")
def create_workout(body: WorkoutCreateRequest,
                   user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    if body.protocol not in PROTOCOLS:
        raise HTTPException(status_code=422, detail="پروتکل تمرین نامعتبر است.")
    now = _now()
    open_cnt = db.query(ZivanWorkout.id).filter(
        ZivanWorkout.owner_account_id == account.id,
        ZivanWorkout.status == "open",
        ZivanWorkout.ends_at >= _ts_to_dt(now)).count()
    if open_cnt >= 3:
        raise HTTPException(status_code=429, detail="سه حلقهٔ تمرین باز دارید.")
    w = ZivanWorkout(
        id=uuid.uuid4().hex, title=body.title.strip(), protocol=body.protocol,
        owner_account_id=account.id, invite_code=make_invite_code(secrets.SystemRandom()),
        status="open", started_at=_ts_to_dt(now),
        ends_at=_ts_to_dt(now + WORKOUT_MAX_OPEN_HOURS * 3600),
    )
    db.add(w)
    db.flush()
    db.add(ZivanWorkoutMember(id=uuid.uuid4().hex, workout_id=w.id, account_id=account.id))
    db.commit()
    return {"workout": _workout_public(db, w, account.id)}


@router.post("/workouts/join")
def join_workout(body: dict, user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    code = str(body.get("code", "")).strip().upper()
    if not code:
        raise HTTPException(status_code=422, detail="کد دعوت لازم است.")
    w = db.query(ZivanWorkout).filter(ZivanWorkout.invite_code == code).first()
    if w is None or w.status != "open" or _dt_to_ts(w.ends_at) < _now():
        raise HTTPException(status_code=404, detail="حلقهٔ تمرین با این کد باز نیست.")
    cnt = db.query(ZivanWorkoutMember.id).filter(ZivanWorkoutMember.workout_id == w.id).count()
    if cnt >= WORKOUT_MAX_MEMBERS:
        raise HTTPException(status_code=409, detail="ظرفیت حلقهٔ تمرین پر است.")
    exists = db.query(ZivanWorkoutMember.id).filter(
        ZivanWorkoutMember.workout_id == w.id, ZivanWorkoutMember.account_id == account.id).first()
    if exists:
        raise HTTPException(status_code=409, detail="شما عضو این حلقه هستید.")
    db.add(ZivanWorkoutMember(id=uuid.uuid4().hex, workout_id=w.id, account_id=account.id))
    db.commit()
    return {"workout": _workout_public(db, w, account.id)}


@router.get("/workouts/mine")
def my_workouts(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    ids = [r[0] for r in db.query(ZivanWorkoutMember.workout_id).filter(
        ZivanWorkoutMember.account_id == account.id).all()]
    if not ids:
        return {"workouts": []}
    rows = (db.query(ZivanWorkout).filter(ZivanWorkout.id.in_(ids))
            .order_by(ZivanWorkout.started_at.desc()).limit(10).all())
    # بستن خودکار حلقه‌های منقضی (idempotent)
    changed = False
    for w in rows:
        if w.status == "open" and _dt_to_ts(w.ends_at) < _now():
            w.status = "closed"
            changed = True
    if changed:
        db.commit()
    return {"workouts": [_workout_public(db, w, account.id) for w in rows]}


@router.get("/workouts/{workout_id}")
def workout_detail(workout_id: str, user: User = Depends(current_user),
                   db: Session = Depends(get_db)):
    account = _account(db, user)
    w = db.query(ZivanWorkout).filter(ZivanWorkout.id == workout_id).first()
    if w is None:
        raise HTTPException(status_code=404, detail="حلقهٔ تمرین پیدا نشد.")
    member = db.query(ZivanWorkoutMember.id).filter(
        ZivanWorkoutMember.workout_id == w.id, ZivanWorkoutMember.account_id == account.id).first()
    if member is None:
        # غیرعضو فقط وضعیت کلی را می‌بیند — بدون کد دعوت
        pub = _workout_public(db, w, None)
        pub.pop("invite_code", None)
        return {"workout": pub}
    return {"workout": _workout_public(db, w, account.id)}


@router.post("/workouts/{workout_id}/close")
def close_workout(workout_id: str, user: User = Depends(current_user),
                  db: Session = Depends(get_db)):
    account = _account(db, user)
    w = db.query(ZivanWorkout).filter(ZivanWorkout.id == workout_id).first()
    if w is None:
        raise HTTPException(status_code=404, detail="حلقهٔ تمرین پیدا نشد.")
    if w.owner_account_id != account.id:
        raise HTTPException(status_code=403, detail="فقط سازندهٔ حلقه می‌تواند ببندد.")
    if w.status == "open":
        w.status = "closed"
        db.commit()
    return {"workout": _workout_public(db, w, account.id)}


# ===========================================================================
# چالش دوستانه (دوئل قدم/مسافت)
# ===========================================================================

class ChallengeCreateRequest(BaseModel):
    metric: str = Field(min_length=1, max_length=20)
    target: int = Field(ge=0, le=1_000_000)
    hours: int = Field(ge=1, le=7 * 24)
    opponent_account_id: str | None = Field(default=None, max_length=36)


def _challenge_sums(db: Session, challenge: ZivanChallenge, account_id: str) -> dict:
    """جمع متریک چالش برای یک حساب — فقط جلسه‌های معتبرِ بازهٔ چالش."""
    since = challenge.started_at
    until = challenge.ends_at
    q = db.query(
        func.coalesce(func.sum(ActivitySession.steps), 0),
        func.coalesce(func.sum(ActivitySession.distance_m), 0),
        func.count(ActivitySession.id),
    ).filter(
        ActivitySession.account_id == account_id,
        ActivitySession.valid.is_(True),
        ActivitySession.started_at >= since,
        ActivitySession.started_at <= until,
    )
    if challenge.metric == "steps":
        # قدم فقط از پیاده‌روی/دویدن معنا دارد (قدم تایمری صفر است)
        q = q.filter(ActivitySession.activity.in_(("walk", "run")))
    else:  # distance_m
        q = q.filter(ActivitySession.activity.in_(("walk", "run")))
    steps, dist, cnt = q.first()
    return {"steps": int(steps or 0), "distance_m": int(dist or 0),
            "sessions": int(cnt or 0),
            "value": int(steps or 0) if challenge.metric == "steps" else int(dist or 0)}


def _challenge_public(db: Session, c: ZivanChallenge, with_live: bool = False) -> dict:
    names = _names(db, [c.creator_account_id, c.opponent_account_id or ""])
    pub = {
        "id": c.id, "metric": c.metric,
        "metric_name": CHALLENGE_METRICS.get(c.metric, c.metric),
        "target": c.target, "status": c.status,
        "creator": {"account_id": c.creator_account_id,
                    "display_name": names.get(c.creator_account_id, "همسفر")},
        "opponent": ({"account_id": c.opponent_account_id,
                      "display_name": names.get(c.opponent_account_id, "همسفر")}
                     if c.opponent_account_id else None),
        "started_at": _dt_to_ts(c.started_at), "ends_at": _dt_to_ts(c.ends_at),
        "winner_account_id": c.winner_account_id,
        "result": c.result or {},
    }
    if with_live and c.status in OPEN_STATUSES and c.opponent_account_id:
        pub["live"] = {
            "creator": _challenge_sums(db, c, c.creator_account_id),
            "opponent": _challenge_sums(db, c, c.opponent_account_id),
        }
    return pub


@router.post("/challenges")
def create_challenge(body: ChallengeCreateRequest,
                     user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    if body.metric not in CHALLENGE_METRICS:
        raise HTTPException(status_code=422, detail="متریک چالش نامعتبر است.")
    if body.target < CHALLENGE_MIN_TARGET[body.metric] or body.target > CHALLENGE_MAX_TARGET[body.metric]:
        raise HTTPException(status_code=422, detail="هدف چالش خارج از بازهٔ مجاز است.")
    if not (CHALLENGE_MIN_HOURS <= body.hours <= CHALLENGE_MAX_HOURS):
        raise HTTPException(status_code=422, detail="مدت چالش خارج از بازهٔ مجاز است.")
    open_cnt = db.query(ZivanChallenge.id).filter(
        ZivanChallenge.creator_account_id == account.id,
        ZivanChallenge.status == "open").count()
    if open_cnt >= CHALLENGE_MAX_OPEN_PER_ACCOUNT:
        raise HTTPException(status_code=429, detail="پنج چالش بازِ بی‌حریف دارید.")
    opponent_id = None
    if body.opponent_account_id:
        if body.opponent_account_id == account.id:
            raise HTTPException(status_code=422, detail="چالش با خودتان ممکن نیست.")
        acc = db.query(PlayerAccount).filter(
            PlayerAccount.id == body.opponent_account_id).first()
        if acc is None:
            raise HTTPException(status_code=404, detail="حساب حریف پیدا نشد.")
        opponent_id = acc.id
    now = _now()
    c = ZivanChallenge(
        id=uuid.uuid4().hex, metric=body.metric, target=body.target,
        creator_account_id=account.id, opponent_account_id=opponent_id,
        status="open" if opponent_id is None else "active",
        started_at=_ts_to_dt(now), ends_at=_ts_to_dt(now + body.hours * 3600),
    )
    db.add(c)
    db.commit()
    return {"challenge": _challenge_public(db, c)}


@router.get("/challenges/open")
def open_challenges(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    rows = (db.query(ZivanChallenge)
            .filter(ZivanChallenge.status == "open",
                    ZivanChallenge.creator_account_id != account.id)
            .order_by(ZivanChallenge.created_at.desc()).limit(20).all())
    return {"challenges": [_challenge_public(db, c) for c in rows]}


@router.get("/challenges/mine")
def my_challenges(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    rows = (db.query(ZivanChallenge)
            .filter((ZivanChallenge.creator_account_id == account.id) |
                    (ZivanChallenge.opponent_account_id == account.id))
            .order_by(ZivanChallenge.created_at.desc()).limit(20).all())
    return {"challenges": [_challenge_public(db, c, with_live=True) for c in rows]}


def _settle_challenge(db: Session, c: ZivanChallenge) -> None:
    """تعیین برنده فقط از جمع جلسه‌های معتبر — idempotent."""
    if c.status == "settled":
        return
    cs = _challenge_sums(db, c, c.creator_account_id)
    os_ = _challenge_sums(db, c, c.opponent_account_id) if c.opponent_account_id else None
    if os_ is None:
        return
    if cs["value"] > os_["value"]:
        c.winner_account_id = c.creator_account_id
    elif os_["value"] > cs["value"]:
        c.winner_account_id = c.opponent_account_id
    else:
        c.winner_account_id = None  # مساوی
    c.result = {"creator": cs, "opponent": os_}
    c.status = "settled"
    c.settled_at = _ts_to_dt(_now())


@router.post("/challenges/{challenge_id}/accept")
def accept_challenge(challenge_id: str, user: User = Depends(current_user),
                     db: Session = Depends(get_db)):
    account = _account(db, user)
    c = db.query(ZivanChallenge).filter(ZivanChallenge.id == challenge_id).first()
    if c is None:
        raise HTTPException(status_code=404, detail="چالش پیدا نشد.")
    if c.creator_account_id == account.id:
        raise HTTPException(status_code=422, detail="چالش خودتان را نمی‌توانید بپذیرید.")
    if c.status != "open":
        raise HTTPException(status_code=409, detail="این چالش پذیرفتنی نیست.")
    if _dt_to_ts(c.ends_at) < _now():
        raise HTTPException(status_code=409, detail="زمان این چالش گذشته است.")
    c.opponent_account_id = account.id
    c.status = "active"
    db.commit()
    return {"challenge": _challenge_public(db, c, with_live=True)}


@router.get("/challenges/{challenge_id}")
def challenge_detail(challenge_id: str, user: User = Depends(current_user),
                     db: Session = Depends(get_db)):
    account = _account(db, user)
    c = db.query(ZivanChallenge).filter(ZivanChallenge.id == challenge_id).first()
    if c is None:
        raise HTTPException(status_code=404, detail="چالش پیدا نشد.")
    participant = account.id in (c.creator_account_id, c.opponent_account_id)
    # تعیین خودکار نتیجه پس از پایان بازه (idempotent)
    if c.status == "active" and c.opponent_account_id and _dt_to_ts(c.ends_at) <= _now():
        _settle_challenge(db, c)
        db.commit()
    pub = _challenge_public(db, c, with_live=c.status in OPEN_STATUSES)
    if not participant:
        return {"challenge": pub}
    mine = _challenge_sums(db, c, account.id)
    my_claimed = (mine["value"] >= c.target) if c.target > 0 else False
    pub["you"] = mine
    pub["target_reached"] = my_claimed
    return {"challenge": pub}


# ===========================================================================
# مأموریت اجتماعی جمعی
# ===========================================================================

SOCIAL_SEEDS = [
    {"title": "شهر سبز: ۱٬۰۰۰ کیلومتر جمعی", "metric": "distance_m", "goal": 1_000_000,
     "description": "همهٔ همسفران زیوان با پیاده‌روی و دویدن معتبر ۱٬۰۰۰ کیلومتر جمعی کامل کنند."},
    {"title": "قدم‌های مهربانی: ۵۰۰٬۰۰۰ قدم جمعی", "metric": "steps", "goal": 500_000,
     "description": "قدم‌های معتبر همهٔ اعضا با هم به ۵۰۰ هزار برسد."},
]


def _social_public(db: Session, m: ZivanSocialMission, account_id: str | None) -> dict:
    total = db.query(func.coalesce(func.sum(ZivanSocialContribution.value), 0)).filter(
        ZivanSocialContribution.mission_id == m.id).scalar()
    mine = 0
    my_sessions: list[str] = []
    if account_id:
        mine = db.query(func.coalesce(func.sum(ZivanSocialContribution.value), 0)).filter(
            ZivanSocialContribution.mission_id == m.id,
            ZivanSocialContribution.account_id == account_id).scalar()
        my_sessions = [r[0] for r in db.query(ZivanSocialContribution.session_id).filter(
            ZivanSocialContribution.mission_id == m.id,
            ZivanSocialContribution.account_id == account_id).all()]
    return {
        "id": m.id, "title": m.title, "description": m.description,
        "metric": m.metric, "metric_name": SOCIAL_CONTRIBUTION_METRICS.get(m.metric, m.metric),
        "goal": m.goal, "progress": int(total or 0),
        "status": m.status,
        "started_at": _dt_to_ts(m.started_at), "ends_at": _dt_to_ts(m.ends_at),
        "my_contribution": int(mine or 0), "my_session_ids": my_sessions,
    }


def seed_social_missions(db: Session) -> None:
    """ایجاد مأموریت جمعی پیش‌فرض اگر هیچ مأموریت فعالی نباشد (idempotent).

    در راه‌اندازی سرور صدا زده می‌شود تا پنجرهٔ مأموریت از بوت آغاز شود و
    جلسه‌های معتبرِ همان روز هم قابل اهدا باشند؛ در GET هم به‌عنوان پشتوانه.
    """
    active = db.query(ZivanSocialMission.id).filter(
        ZivanSocialMission.status == "active").count()
    if active:
        return
    now = _now()
    for seed in SOCIAL_SEEDS[:2]:
        db.add(ZivanSocialMission(
            id=uuid.uuid4().hex, title=seed["title"], description=seed["description"],
            metric=seed["metric"], goal=seed["goal"], status="active",
            started_at=_ts_to_dt(now), ends_at=_ts_to_dt(now + 14 * 86400)))


@router.get("/social")
def social_missions(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    seed_social_missions(db)
    db.commit()
    rows = (db.query(ZivanSocialMission)
            .filter(ZivanSocialMission.status == "active")
            .order_by(ZivanSocialMission.created_at.asc()).limit(5).all())
    return {"missions": [_social_public(db, m, account.id) for m in rows]}


@router.post("/social/{mission_id}/contribute")
def contribute_social(mission_id: str, body: dict,
                      user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    m = db.query(ZivanSocialMission).filter(ZivanSocialMission.id == mission_id).first()
    if m is None or m.status != "active":
        raise HTTPException(status_code=404, detail="مأموریت جمعی فعال پیدا نشد.")
    now = _now()
    if _dt_to_ts(m.ends_at) < now:
        m.status = "completed"
        db.commit()
        raise HTTPException(status_code=409, detail="زمان این مأموریت تمام شده است.")
    session_id = str(body.get("session_id", "")).strip()
    if not session_id:
        raise HTTPException(status_code=422, detail="شناسهٔ جلسه لازم است.")
    s = db.query(ActivitySession).filter(ActivitySession.id == session_id).first()
    if s is None or s.account_id != account.id:
        raise HTTPException(status_code=404, detail="جلسهٔ شما پیدا نشد.")
    if not s.valid or s.finished_at is None:
        raise HTTPException(status_code=422, detail="فقط جلسهٔ معتبرِ تأییدشدهٔ سرور قابل اهدا است.")
    if not (s.finished_at is not None and
            _dt_to_ts(m.started_at) <= _dt_to_ts(s.finished_at) <= _dt_to_ts(m.ends_at)):
        raise HTTPException(status_code=422, detail="جلسه خارج از بازهٔ این مأموریت است.")
    value = int(s.steps if m.metric == "steps" else s.distance_m)
    if value <= 0:
        raise HTTPException(status_code=422, detail="این جلسه سهمی برای این مأموریت ندارد.")
    dup = db.query(ZivanSocialContribution.id).filter(
        ZivanSocialContribution.mission_id == m.id,
        ZivanSocialContribution.session_id == s.id).first()
    if dup:
        raise HTTPException(status_code=409, detail="این جلسه قبلاً به این مأموریت اهدا شده است.")
    db.add(ZivanSocialContribution(
        id=uuid.uuid4().hex, mission_id=m.id, session_id=s.id,
        account_id=account.id, value=value))
    try:
        db.commit()
    except IntegrityError:   # مسابقهٔ هم‌زمان روی قید یکتا — امن
        db.rollback()
        raise HTTPException(status_code=409, detail="این جلسه قبلاً اهدا شده است.")
    return {"mission": _social_public(db, m, account.id), "contributed": value}


# ===========================================================================
# مأموریت‌های روزانه و هفتگی
# ===========================================================================

def _day_window(now_ts: float) -> tuple[float, float, str]:
    """پنجرهٔ امروز بر اساس تقویم تهران (نیمه‌شب تهران)."""
    local = datetime.fromtimestamp(now_ts, tz=TEHRAN)
    midnight = local.replace(hour=0, minute=0, second=0, microsecond=0)
    key = midnight.strftime("%Y-%m-%d")
    return midnight.timestamp(), midnight.timestamp() + 86400, key


def _week_window(now_ts: float) -> tuple[float, float, str]:
    """پنجرهٔ هفتهٔ ایزو (دوشنبه‌آغاز) بر اساس تقویم تهران."""
    local = datetime.fromtimestamp(now_ts, tz=TEHRAN)
    monday = (local - timedelta(days=local.weekday())).replace(
        hour=0, minute=0, second=0, microsecond=0)
    key = f"{monday.isocalendar().year}-W{monday.isocalendar().week:02d}"
    return monday.timestamp(), monday.timestamp() + 7 * 86400, key


def _metric_sums(db: Session, account_id: str, start_dt: datetime, end_dt: datetime,
                 metric: str, hall: str | None) -> int | float:
    q = db.query(ActivitySession).filter(
        ActivitySession.account_id == account_id,
        ActivitySession.valid.is_(True),
        ActivitySession.started_at >= start_dt,
        ActivitySession.started_at < end_dt,
    )
    if metric in ("distance_m", "steps"):
        q = q.filter(ActivitySession.activity.in_(("walk", "run")))
    elif metric == "balance_s":
        q = q.filter(ActivitySession.activity == "balance")
    if hall:
        q = q.filter(ActivitySession.hall == hall)
    rows = q.all()
    if metric == "sessions":
        return len(rows)
    total = 0
    for s in rows:
        total += {"distance_m": s.distance_m, "steps": s.steps,
                  "balance_s": s.duration_s}.get(metric, 0)
    return int(total)


def _mission_public(db: Session, account_id: str, code: str, tpl: dict,
                    now_ts: float) -> dict:
    if tpl["period"] == "daily":
        start_ts, end_ts, key = _day_window(now_ts)
    else:
        start_ts, end_ts, key = _week_window(now_ts)
    progress = int(_metric_sums(db, account_id, _ts_to_dt(start_ts), _ts_to_dt(end_ts),
                                tpl["metric"], tpl.get("hall")))
    claimed = db.query(ZivanMissionProgress).filter(
        ZivanMissionProgress.account_id == account_id,
        ZivanMissionProgress.mission_code == code,
        ZivanMissionProgress.period_key == key).first()
    return {
        "code": code, "name": tpl["name"], "period": tpl["period"],
        "metric": tpl["metric"], "target": tpl["target"], "icon": tpl["icon"],
        "reward": tpl["reward"], "period_key": key,
        "period_start": start_ts, "period_end": end_ts,
        "progress": progress, "done": progress >= tpl["target"],
        "claimed": claimed.claimed_at is not None if claimed else False,
        "rewards_enabled": bool(settings.zivan_rewards_enabled),
    }


@router.get("/missions")
def missions(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    now = _now()
    daily = [_mission_public(db, account.id, code, tpl, now)
             for code, tpl in MISSION_TEMPLATES.items() if tpl["period"] == "daily"]
    weekly = [_mission_public(db, account.id, code, tpl, now)
              for code, tpl in MISSION_TEMPLATES.items() if tpl["period"] == "weekly"]
    return {"daily": daily, "weekly": weekly}


@router.post("/missions/{code}/claim")
def claim_mission(code: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    from app.models import AccountBalance, TokenLedger
    account = _account(db, user)
    tpl = MISSION_TEMPLATES.get(code)
    if tpl is None:
        raise HTTPException(status_code=404, detail="مأموریت پیدا نشد.")
    now = _now()
    info = _mission_public(db, account.id, code, tpl, now)
    if not info["done"]:
        raise HTTPException(status_code=422, detail="مأموریت هنوز کامل نشده است.")
    if info["claimed"]:
        return {"mission": info, "already": True, "reward": 0}
    # سقف ضد اسپم دعوا
    d_start, _, _ = _day_window(now)
    claims_today = db.query(ZivanMissionProgress.id).filter(
        ZivanMissionProgress.account_id == account.id,
        ZivanMissionProgress.claimed_at.isnot(None),
        ZivanMissionProgress.created_at >= _ts_to_dt(d_start)).count()
    if claims_today >= 10:
        raise HTTPException(status_code=429, detail="سقف دعوای مأموریت امروز پر شده است.")
    row = ZivanMissionProgress(
        id=uuid.uuid4().hex, account_id=account.id, mission_code=code,
        period_key=info["period_key"], claimed_at=_ts_to_dt(now))
    db.add(row)
    reward = 0
    if settings.zivan_rewards_enabled:
        reward = tpl["reward"]
        reference = f"zivan-mission:{account.id}:{code}:{info['period_key']}"
        if len(reference) > 80:
            reference = "zivan-mission:" + uuid.uuid4().hex
        exists = db.query(TokenLedger.id).filter(TokenLedger.reference_id == reference).first()
        if not exists:
            db.add(TokenLedger(
                id=reference, account_id=account.id, amount=reward,
                reason="zivan_mission", reference_id=reference))
            balance = db.query(AccountBalance).filter(
                AccountBalance.account_id == account.id).first()
            if balance is None:
                balance = AccountBalance(id=str(uuid.uuid4()), account_id=account.id, token_balance=0)
                db.add(balance)
                db.flush()
            balance.token_balance += reward
    try:
        db.commit()
    except IntegrityError:
        db.rollback()   # دعوای هم‌زمان — قید یکتا؛ همان «قبلاً دعوا شده»
        info2 = _mission_public(db, account.id, code, tpl, now)
        return {"mission": info2, "already": True, "reward": 0}
    info["claimed"] = True
    return {"mission": info, "already": False, "reward": reward,
            "rewards_enabled": bool(settings.zivan_rewards_enabled)}


# ===========================================================================
# جام بزرگ سلامت (دورهٔ هفتگی)
# ===========================================================================

def _cup_standings(db: Session, start_dt: datetime, end_dt: datetime, limit: int):
    rows = (db.query(
                ActivitySession.account_id,
                func.sum(ActivitySession.steps).label("steps"),
                func.sum(ActivitySession.distance_m).label("dist"),
                func.count(ActivitySession.id).label("cnt"),
            )
            .filter(ActivitySession.valid.is_(True),
                    ActivitySession.started_at >= start_dt,
                    ActivitySession.started_at < end_dt,
                    ActivitySession.activity.in_(("walk", "run", "balance")))
            .group_by(ActivitySession.account_id)
            .all())
    # ثانیهٔ تمرین تعادلی جداگانه
    bal = dict(db.query(ActivitySession.account_id,
                        func.coalesce(func.sum(ActivitySession.duration_s), 0))
               .filter(ActivitySession.valid.is_(True),
                       ActivitySession.started_at >= start_dt,
                       ActivitySession.started_at < end_dt,
                       ActivitySession.activity == "balance")
               .group_by(ActivitySession.account_id).all())
    scores = []
    for r in rows:
        scores.append({"account_id": r[0],
                       "steps": int(r[1] or 0), "distance_m": int(r[2] or 0),
                       "sessions": int(r[3] or 0), "balance_s": int(bal.get(r[0], 0))})
    for s in scores:
        s["score"] = cup_score(s["steps"], s["balance_s"])
    scores.sort(key=lambda x: x["score"], reverse=True)
    return scores[:limit]


@router.get("/cup")
def cup(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    now = _now()
    start_ts, end_ts, key = _week_window(now)
    top = _cup_standings(db, _ts_to_dt(start_ts), _ts_to_dt(end_ts), 20)
    names = _names(db, [s["account_id"] for s in top])
    my_score, my_rank, my_steps, my_bal = 0, None, 0, 0
    for i, s in enumerate(top):
        if s["account_id"] == account.id:
            my_rank = i + 1
            my_score, my_steps, my_bal = s["score"], s["steps"], s["balance_s"]
            break
    if my_rank is None:
        st = db.query(
            func.coalesce(func.sum(ActivitySession.steps), 0),
            func.count(ActivitySession.id),
        ).filter(ActivitySession.account_id == account.id,
                 ActivitySession.valid.is_(True),
                 ActivitySession.started_at >= _ts_to_dt(start_ts),
                 ActivitySession.started_at < _ts_to_dt(end_ts),
                 ActivitySession.activity.in_(("walk", "run", "balance"))).first()
        my_steps = int(st[0] or 0)
        bal = db.query(func.coalesce(func.sum(ActivitySession.duration_s), 0)).filter(
            ActivitySession.account_id == account.id, ActivitySession.valid.is_(True),
            ActivitySession.started_at >= _ts_to_dt(start_ts),
            ActivitySession.started_at < _ts_to_dt(end_ts),
            ActivitySession.activity == "balance").scalar()
        my_bal = int(bal or 0)
        my_score = cup_score(my_steps, my_bal)
    return {
        "cup_name": "جام بزرگ سلامت — هفتهٔ " + key.split("-W")[1],
        "period_key": key, "period_start": start_ts, "period_end": end_ts,
        "formula": "امتیاز = قدم معتبر + ثانیهٔ تمرین تعادلی معتبر",
        "top": [{"rank": i + 1, "account_id": s["account_id"],
                 "display_name": names.get(s["account_id"], "همسفر"),
                 "score": s["score"], "steps": s["steps"], "balance_s": s["balance_s"]}
                for i, s in enumerate(top)],
        "me": {"score": my_score, "rank": my_rank,
               "steps": my_steps, "balance_s": my_bal},
        "rewards_enabled": bool(settings.zivan_rewards_enabled),
    }


# ===========================================================================
# لحظه‌ها — گالری کاملاً خصوصی
# ===========================================================================

class MomentCreateRequest(BaseModel):
    image: str = Field(min_length=16, max_length=2_400_000)  # base64 (سقف نهایی در endpoint) 
    caption: str = Field(default="", max_length=200)


@router.post("/moments")
def create_moment(body: MomentCreateRequest,
                  user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    cnt = db.query(ZivanMoment.id).filter(
        ZivanMoment.account_id == account.id).count()
    if cnt >= MOMENT_MAX_PER_ACCOUNT:
        raise HTTPException(status_code=429, detail="گالری شما پر است (۳۰ عکس).")
    try:
        raw = base64.b64decode(body.image, validate=True)
    except Exception:
        raise HTTPException(status_code=422, detail="تصویر base64 نامعتبر است.")
    if len(raw) > MOMENT_MAX_BYTES:
        raise HTTPException(status_code=413, detail="حجم عکس بیش از ۱٫۵ مگابایت است.")
    if len(raw) < 100:
        raise HTTPException(status_code=422, detail="تصویر خیلی کوچک است.")
    ctype = moment_image_type(raw[:16])
    if ctype is None:
        raise HTTPException(status_code=415, detail="فقط JPEG یا PNG واقعی پذیرفته می‌شود.")
    m = ZivanMoment(
        id=uuid.uuid4().hex, account_id=account.id,
        caption=body.caption.strip()[:MOMENT_CAPTION_MAX],
        content_type=ctype, size_bytes=len(raw), image=raw)
    db.add(m)
    db.commit()
    return {"moment": _moment_public(m)}


def _moment_public(m: ZivanMoment) -> dict:
    return {"id": m.id, "caption": m.caption, "content_type": m.content_type,
            "size_bytes": m.size_bytes, "created_at": _dt_to_ts(m.created_at),
            "image_url": "/api/v1/zivan/moments/" + m.id + "/image"}


@router.get("/moments/mine")
def my_moments(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    rows = (db.query(ZivanMoment).filter(ZivanMoment.account_id == account.id)
            .order_by(ZivanMoment.created_at.desc()).limit(MOMENT_MAX_PER_ACCOUNT).all())
    return {"moments": [_moment_public(m) for m in rows],
            "privacy": "عکس‌ها فقط برای خودتان قابل دیدن و دریافت است؛ مختصات ذخیره نمی‌شود."}


@router.get("/moments/{moment_id}/image")
def moment_image(moment_id: str, user: User = Depends(current_user),
                 db: Session = Depends(get_db)):
    account = _account(db, user)
    m = db.query(ZivanMoment).filter(ZivanMoment.id == moment_id).first()
    if m is None or m.account_id != account.id:   # فقط صاحب عکس
        raise HTTPException(status_code=404, detail="لحظهٔ شما پیدا نشد.")
    return Response(content=m.image, media_type=m.content_type,
                    headers={"Cache-Control": "private, max-age=3600"})


@router.delete("/moments/{moment_id}")
def delete_moment(moment_id: str, user: User = Depends(current_user),
                  db: Session = Depends(get_db)):
    account = _account(db, user)
    m = db.query(ZivanMoment).filter(ZivanMoment.id == moment_id).first()
    if m is None or m.account_id != account.id:
        raise HTTPException(status_code=404, detail="لحظهٔ شما پیدا نشد.")
    db.delete(m)
    db.commit()
    return {"deleted": True}


# ===========================================================================
# رقابت گروهی — گروه‌ها، کد دعوت، مسابقهٔ قدم گروهی
# ===========================================================================

class GroupCreateRequest(BaseModel):
    name: str = Field(min_length=2, max_length=40)


class RaceCreateRequest(BaseModel):
    title: str = Field(min_length=2, max_length=80)
    duration: str = Field(min_length=2, max_length=3)


def _member_ids(db: Session, group_id: str) -> list[str]:
    return [r[0] for r in db.query(ZivanGroupMember.account_id).filter(
        ZivanGroupMember.group_id == group_id).all()]


def _group_public(db: Session, g: ZivanGroup, account_id: str | None) -> dict:
    ids = _member_ids(db, g.id)
    names = _names(db, ids)
    active_race = db.query(ZivanRace).filter(
        ZivanRace.group_id == g.id, ZivanRace.status == "active").first()
    return {
        "id": g.id, "name": g.name, "owner_account_id": g.owner_account_id,
        "invite_code": g.invite_code,
        "members": [{"account_id": i, "display_name": names.get(i, "همسفر"),
                     "is_owner": i == g.owner_account_id} for i in ids],
        "member_count": len(ids),
        "active_race_id": active_race.id if active_race else None,
        "you_in": account_id in ids if account_id else None,
    }


@router.post("/groups")
def create_group(body: GroupCreateRequest,
                 user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    owned = db.query(ZivanGroup.id).filter(
        ZivanGroup.owner_account_id == account.id).count()
    joined = db.query(ZivanGroupMember.id).filter(
        ZivanGroupMember.account_id == account.id).count()
    if owned + joined >= GROUP_MAX_PER_ACCOUNT:
        raise HTTPException(status_code=429, detail="سقف گروه‌های شما (۵) پر است.")
    g = ZivanGroup(
        id=uuid.uuid4().hex, name=body.name.strip()[:GROUP_NAME_MAX],
        owner_account_id=account.id, invite_code=make_invite_code(secrets.SystemRandom()))
    db.add(g)
    db.flush()
    db.add(ZivanGroupMember(id=uuid.uuid4().hex, group_id=g.id, account_id=account.id))
    db.commit()
    return {"group": _group_public(db, g, account.id)}


@router.post("/groups/join")
def join_group(body: dict, user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    code = str(body.get("code", "")).strip().upper()
    if not code:
        raise HTTPException(status_code=422, detail="کد دعوت لازم است.")
    g = db.query(ZivanGroup).filter(ZivanGroup.invite_code == code).first()
    if g is None:
        raise HTTPException(status_code=404, detail="گروهی با این کد دعوت پیدا نشد.")
    cnt = db.query(ZivanGroupMember.id).filter(ZivanGroupMember.group_id == g.id).count()
    if cnt >= GROUP_MAX_MEMBERS:
        raise HTTPException(status_code=409, detail="ظرفیت گروه (۲۰ نفر) پر است.")
    exists = db.query(ZivanGroupMember.id).filter(
        ZivanGroupMember.group_id == g.id, ZivanGroupMember.account_id == account.id).first()
    if exists:
        raise HTTPException(status_code=409, detail="شما عضو این گروه هستید.")
    db.add(ZivanGroupMember(id=uuid.uuid4().hex, group_id=g.id, account_id=account.id))
    db.commit()
    return {"group": _group_public(db, g, account.id)}


@router.get("/groups/mine")
def my_groups(user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    ids = [r[0] for r in db.query(ZivanGroupMember.group_id).filter(
        ZivanGroupMember.account_id == account.id).all()]
    if not ids:
        return {"groups": []}
    rows = db.query(ZivanGroup).filter(ZivanGroup.id.in_(ids)).all()
    return {"groups": [_group_public(db, g, account.id) for g in rows]}


@router.get("/groups/{group_id}")
def group_detail(group_id: str, user: User = Depends(current_user),
                 db: Session = Depends(get_db)):
    account = _account(db, user)
    g = db.query(ZivanGroup).filter(ZivanGroup.id == group_id).first()
    if g is None:
        raise HTTPException(status_code=404, detail="گروه پیدا نشد.")
    member = db.query(ZivanGroupMember.id).filter(
        ZivanGroupMember.group_id == g.id, ZivanGroupMember.account_id == account.id).first()
    pub = _group_public(db, g, account.id)
    if member is None:
        pub.pop("invite_code", None)   # غیرعضو کد دعوت نمی‌بیند
        return {"group": pub}
    races = (db.query(ZivanRace).filter(ZivanRace.group_id == g.id)
             .order_by(ZivanRace.started_at.desc()).limit(10).all())
    pub["races"] = [_race_public(db, r, account.id, with_standings=False) for r in races]
    return {"group": pub}


@router.post("/groups/{group_id}/leave")
def leave_group(group_id: str, user: User = Depends(current_user),
                db: Session = Depends(get_db)):
    account = _account(db, user)
    g = db.query(ZivanGroup).filter(ZivanGroup.id == group_id).first()
    if g is None:
        raise HTTPException(status_code=404, detail="گروه پیدا نشد.")
    member = db.query(ZivanGroupMember).filter(
        ZivanGroupMember.group_id == g.id, ZivanGroupMember.account_id == account.id).first()
    if member is None:
        raise HTTPException(status_code=404, detail="شما عضو این گروه نیستید.")
    if g.owner_account_id == account.id:
        others = db.query(ZivanGroupMember).filter(
            ZivanGroupMember.group_id == g.id,
            ZivanGroupMember.account_id != account.id).all()
        if others:
            raise HTTPException(status_code=409, detail="صاحب گروه نمی‌تواند با عضوِ موجود خارج شود؛ ابتدا گروه را منحل کنید.")
        db.delete(g)
    else:
        db.delete(member)
    db.commit()
    return {"left": True}


@router.post("/groups/{group_id}/races")
def create_race(group_id: str, body: RaceCreateRequest,
                user: User = Depends(current_user), db: Session = Depends(get_db)):
    account = _account(db, user)
    g = db.query(ZivanGroup).filter(ZivanGroup.id == group_id).first()
    if g is None:
        raise HTTPException(status_code=404, detail="گروه پیدا نشد.")
    member = db.query(ZivanGroupMember.id).filter(
        ZivanGroupMember.group_id == g.id, ZivanGroupMember.account_id == account.id).first()
    if member is None:
        raise HTTPException(status_code=403, detail="فقط اعضای گروه می‌توانند مسابقه بسازند.")
    if body.duration not in RACE_DURATION_CHOICES:
        raise HTTPException(status_code=422, detail="مدت مسابقه باید 1d، 3d یا 7d باشد.")
    active = db.query(ZivanRace.id).filter(
        ZivanRace.group_id == g.id, ZivanRace.status == "active").count()
    if active >= RACE_MAX_ACTIVE_PER_GROUP:
        raise HTTPException(status_code=409, detail="این گروه یک مسابقهٔ فعال دارد.")
    now = _now()
    r = ZivanRace(
        id=uuid.uuid4().hex, group_id=g.id, title=body.title.strip(),
        metric="steps", status="active",
        started_at=_ts_to_dt(now),
        ends_at=_ts_to_dt(now + RACE_DURATION_CHOICES[body.duration]),
        created_by=account.id)
    db.add(r)
    db.commit()
    return {"race": _race_public(db, r, account.id)}


def _race_standings(db: Session, race: ZivanRace) -> list[dict]:
    """جدول مسابقه — همهٔ اعضای فعلی گروه (حتی با صفر)؛ فقط جلسه‌های معتبرِ بازه."""
    ids = _member_ids(db, race.group_id)
    if not ids:
        return []
    rows = (db.query(
                ActivitySession.account_id,
                func.coalesce(func.sum(ActivitySession.steps), 0).label("steps"),
                func.coalesce(func.sum(ActivitySession.distance_m), 0).label("dist"),
            )
            .filter(ActivitySession.account_id.in_(ids),
                    ActivitySession.valid.is_(True),
                    ActivitySession.started_at >= race.started_at,
                    ActivitySession.started_at <= race.ends_at,
                    ActivitySession.activity.in_(("walk", "run")))
            .group_by(ActivitySession.account_id).all())
    sums = {r[0]: (int(r[1] or 0), int(r[2] or 0)) for r in rows}
    names = _names(db, ids)
    out = [{"account_id": i, "display_name": names.get(i, "همسفر"),
            "steps": sums.get(i, (0, 0))[0], "distance_m": sums.get(i, (0, 0))[1]}
           for i in ids]
    out.sort(key=lambda x: (x["steps"], x["distance_m"]), reverse=True)
    for i, row in enumerate(out):
        row["rank"] = i + 1
    return out


def _race_public(db: Session, r: ZivanRace, account_id: str | None,
                 with_standings: bool = True) -> dict:
    ended = _dt_to_ts(r.ends_at) <= _now()
    if r.status == "active" and ended:   # پایان خودکار (idempotent)
        r.status = "finished"
        r.finished_at = r.ends_at
        db.commit()
    pub = {
        "id": r.id, "group_id": r.group_id, "title": r.title,
        "metric": r.metric, "status": r.status,
        "started_at": _dt_to_ts(r.started_at), "ends_at": _dt_to_ts(r.ends_at),
        "finished": r.status != "active",
    }
    if with_standings:
        st = _race_standings(db, r)
        pub["standings"] = st
        pub["winner"] = st[0] if (r.status != "active" and st) else None
        if account_id:
            mine = next((x for x in st if x["account_id"] == account_id), None)
            pub["me"] = mine
    return pub


@router.get("/races/{race_id}")
def race_detail(race_id: str, user: User = Depends(current_user),
                db: Session = Depends(get_db)):
    account = _account(db, user)
    r = db.query(ZivanRace).filter(ZivanRace.id == race_id).first()
    if r is None:
        raise HTTPException(status_code=404, detail="مسابقه پیدا نشد.")
    return {"race": _race_public(db, r, account.id)}


# ===========================================================================
# تاریخچهٔ فعالیت
# ===========================================================================

@router.get("/history")
def history(days: int = 14, user: User = Depends(current_user),
            db: Session = Depends(get_db)):
    account = _account(db, user)
    days = max(1, min(days, 30))
    since = _ts_to_dt(_now() - days * 86400)
    rows = (db.query(ActivitySession)
            .filter(ActivitySession.account_id == account.id,
                    ActivitySession.started_at >= since)
            .order_by(ActivitySession.started_at.desc()).limit(200).all())
    by_day: dict[str, dict] = {}
    for s in rows:
        day = s.started_at.astimezone(TEHRAN).strftime("%Y-%m-%d")
        d = by_day.setdefault(day, {"date": day, "distance_m": 0, "steps": 0,
                                    "balance_s": 0, "valid_sessions": 0, "invalid_sessions": 0})
        if s.valid:
            d["distance_m"] += s.distance_m or 0
            d["steps"] += s.steps or 0
            if s.activity == "balance":
                d["balance_s"] += s.duration_s or 0
            d["valid_sessions"] += 1
        else:
            d["invalid_sessions"] += 1
    return {"days": sorted(by_day.values(), key=lambda x: x["date"], reverse=True),
            "sessions": [_session_public(s) for s in rows]}


def _session_public(s: ActivitySession) -> dict:
    return {
        "id": s.id, "hall": s.hall, "activity": s.activity, "status": s.status,
        "valid": s.valid, "reject_reason": s.reject_reason,
        "distance_m": s.distance_m, "steps": s.steps, "duration_s": s.duration_s,
        "protocol": (s.validation_stats or {}).get("protocol"),
        "started_at": _dt_to_ts(s.started_at),
        "finished_at": _dt_to_ts(s.finished_at) if s.finished_at else None,
    }
