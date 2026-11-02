from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.dependencies import current_user, verified_phone_user
from app.models import GameEvent, PlayerAccount, PlayerProgress
from app.schemas import GameEventRequest, ProgressSnapshot, LegacyMigrationRequest

router = APIRouter(prefix="/progress", tags=["Progress"])

@router.get("")
def get_progress(user=Depends(current_user), db: Session = Depends(get_db)):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    p = db.query(PlayerProgress).filter(PlayerProgress.account_id == account.id).one()
    latest = db.query(GameEvent).filter(GameEvent.account_id == account.id, GameEvent.event_type == "balance_game").order_by(GameEvent.created_at.desc()).first()
    legacy = db.query(GameEvent).filter(GameEvent.account_id == account.id, GameEvent.event_type == "legacy_import").order_by(GameEvent.created_at.desc()).first()
    return {"unlocked": p.unlocked_territory, "visited": p.visited_territories, "missions": p.missions_completed, "stars": p.stars, "latest_balance_report": latest.payload if latest else None, "legacy_import": legacy.payload if legacy else None, "phone_verified": user.phone_verified_at is not None}

@router.put("/snapshot")
def save_progress_snapshot(body: ProgressSnapshot, user=Depends(verified_phone_user), db: Session = Depends(get_db)):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    p = db.query(PlayerProgress).filter(PlayerProgress.account_id == account.id).one()
    p.visited_territories = sorted({n for n in body.visited if 1 <= n <= 77 and n <= p.unlocked_territory}) or [1]
    db.commit()
    return {"ok": True, "visited": p.visited_territories, "unlocked": p.unlocked_territory, "stars": p.stars, "missions": p.missions_completed}

@router.post("/events", status_code=202)
def record_game_event(body: GameEventRequest, user=Depends(verified_phone_user), db: Session = Depends(get_db)):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    existing = db.get(GameEvent, body.event_id)
    if existing:
        return {"accepted": True, "duplicate": True, "trust_level": "client_unverified"}
    payload = body.model_dump(exclude={"event_id", "event_type"})
    db.add(GameEvent(id=body.event_id, account_id=account.id, event_type=body.event_type, payload=payload, trust_level="client_unverified"))
    db.commit()
    return {"accepted": True, "duplicate": False, "trust_level": "client_unverified", "reward_granted": False}

@router.post("/migrate", status_code=202)
def migrate_legacy_progress(body: LegacyMigrationRequest, user=Depends(current_user), db: Session = Depends(get_db)):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    existing = db.get(GameEvent, body.event_id)
    if existing:
        return {"accepted": True, "duplicate": True, "trust_level": "legacy_client_unverified"}
    legacy = body.legacy_state
    # Preserve the old client snapshot for audit/recovery. It never grants unlocks,
    # stars, tokens, or rewards. Only already-authorized visited territory IDs survive.
    p = db.query(PlayerProgress).filter(PlayerProgress.account_id == account.id).one()
    visited = legacy.get("visited", [])
    if isinstance(visited, list):
        p.visited_territories = sorted({int(n) for n in visited if str(n).isdigit() and 1 <= int(n) <= p.unlocked_territory}) or [1]
    safe_snapshot = {
        "unlocked_reported": legacy.get("unlocked", 1),
        "visited_reported": legacy.get("visited", []),
        "missions_reported": legacy.get("missions", 0),
        "stars_reported": legacy.get("stars", 0),
        "balance_reported": legacy.get("balance", {}),
        "source": "darvazeha_progress_v1"
    }
    db.add(GameEvent(id=body.event_id, account_id=account.id, event_type="legacy_import",
                     payload=safe_snapshot, trust_level="legacy_client_unverified"))
    db.commit()
    return {"accepted": True, "duplicate": False, "trust_level": "legacy_client_unverified",
            "server_unlocked": p.unlocked_territory, "visited": p.visited_territories,
            "note": "Legacy data archived; reported unlocks, stars and rewards were not trusted."}
