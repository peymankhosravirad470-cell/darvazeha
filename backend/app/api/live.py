"""API زندهٔ VIVA — ساخت/پیوستن اتاق، بلیت WebSocket، وضعیت برای polling fallback.

همهٔ مسیرها احراز هویت Bearer دارند. سرور مرجع اصلی داده است؛
این API وضعیت عمومی اتاق را می‌دهد و snapshot محرمانه فقط از مسیر WS
شخصی‌سازی‌شده می‌رود (برای polling، فقط بخش عمومی snapshot برمی‌گردد).
"""
from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from app.core.database import get_db, get_session_factory
from app.dependencies import current_user
from app.models import AccountBalance, MatchResult, TokenLedger, User, utcnow
from app.modules.games import GAME_LIMITS
from app.modules.live import hub
from app.modules.players import ensure_player_account

router = APIRouter(prefix="/live", tags=["VIVA Live"])


class CreateRoomRequest(BaseModel):
    game: str = Field(min_length=1, max_length=30)
    capacity: int = Field(ge=2, le=12)
    config: dict = Field(default_factory=dict)


def _account_for(db: Session, user: User):
    account, _progress = ensure_player_account(db, user, user.first_name or "مسافر")
    return account


def _require_room(room_id: str):
    room = hub.get_room(room_id)
    if room is None:
        raise HTTPException(status_code=404, detail="اتاق پیدا نشد یا بسته شده است.")
    return room


def _member_or_403(room, account_id: str):
    if account_id not in room.presences:
        raise HTTPException(status_code=403, detail="عضو این اتاق نیستید.")


@router.post("/rooms")
def create_room(body: CreateRoomRequest, user: User = Depends(current_user), db: Session = Depends(get_db)):
    limits = GAME_LIMITS.get(body.game)
    if limits:
        lo, hi = limits
        if not (lo <= body.capacity <= hi):
            raise HTTPException(status_code=422, detail=f"ظرفیت مجاز برای {body.game}: {lo} تا {hi}")
    account = _account_for(db, user)
    # کلید هویتی هاب = شناسهٔ حساب بازیکن (هم‌راستا با کیف پول و دفترکل)
    room = hub.create_room(body.game, account.id, account.display_name, body.capacity, body.config)
    return {"room": room.public_state(account.id)}


@router.get("/rooms")
def list_rooms(game: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    _account_for(db, user)
    return {"rooms": hub.list_open_rooms(game)}


@router.get("/rooms/{room_id}")
def room_state(room_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    room = _require_room(room_id)
    account = _account_for(db, user)
    viewer = account.id if account.id in room.presences else None
    state = room.public_state(viewer)
    if viewer is None and "match" in state:
        # تماشاگر غیرعضو: فقط بخش عمومی مسابقه
        state["match"] = {k: v for k, v in state["match"].items() if not v.get("private")}
    return {"room": state}


@router.post("/rooms/{room_id}/join")
def join_room(room_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    room = _require_room(room_id)
    account = _account_for(db, user)
    if account.id not in room.presences:
        if room.status != "lobby":
            raise HTTPException(status_code=409, detail="مسابقه آغاز شده است؛ پیوستن به‌عنوان عضو ممکن نیست.")
        if room.seated_count() >= room.capacity:
            raise HTTPException(status_code=409, detail="ظرفیت اتاق پر است.")
    state = hub.join_room(room, account.id, account.display_name)
    return {"room": state}


@router.post("/rooms/{room_id}/leave")
def leave_room(room_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    room = _require_room(room_id)
    account = _account_for(db, user)
    _member_or_403(room, account.id)
    hub.leave_room(room, account.id)
    return {"ok": True}


@router.post("/rooms/{room_id}/start")
async def start_room(room_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    room = _require_room(room_id)
    account = _account_for(db, user)
    _member_or_403(room, account.id)
    if room.host_account_id != account.id:
        raise HTTPException(status_code=403, detail="فقط میزبان می‌تواند مسابقه را شروع کند.")
    try:
        state = await hub.start_match(room)
    except ValueError as exc:
        raise HTTPException(status_code=409, detail=str(exc))
    return {"room": state}


@router.post("/rooms/{room_id}/ticket")
def ticket_for_room(room_id: str, user: User = Depends(current_user), db: Session = Depends(get_db)):
    room = _require_room(room_id)
    account = _account_for(db, user)
    _member_or_403(room, account.id)
    return {"ticket": hub.issue_ticket(account.id, room.id), "ws_path": "/ws/viva"}


# --- ماندگاری نتیجه + پاداش یکتا -------------------------------------------

def persist_match_result(match_id: str, room, result: dict) -> None:
    """ثبت MatchResult + پاداش‌های یکتا در TokenLedger/AccountBalance.

    reference_id یکتا (`match:<id>:reward:<account>`) تضمین می‌کند که حتی
    اگر این تابع دوباره صدا زده شود، هیچ حسابی دوباره پاداش نگیرد.
    """
    factory = get_session_factory()
    db = factory()
    try:
        already_recorded = db.query(MatchResult.id).filter(MatchResult.id == match_id).first()
        if already_recorded:
            return  # این مسابقه قبلاً ثبت شده — کاملاً idempotent
        db.add(MatchResult(
            id=match_id,
            game=room.game,
            room_id=room.id,
            player_count=len(room.presences),
            config=room.config,
            result=result,
            started_at=None,
            finished_at=utcnow(),
        ))
        for account_id, amount in (result.get("rewards") or {}).items():
            amount = int(amount)
            if amount == 0:
                continue
            reference = f"match:{match_id}:reward:{account_id}"
            already = db.query(TokenLedger.id).filter(TokenLedger.reference_id == reference).first()
            if already:
                continue
            ledger_id = reference if len(reference) <= 80 else f"{uuid.uuid4().hex}"
            db.add(TokenLedger(
                id=ledger_id,
                account_id=account_id,
                amount=amount,
                reason="viva_match",
                reference_id=reference,
            ))
            balance = db.query(AccountBalance).filter(AccountBalance.account_id == account_id).first()
            if balance is None:
                balance = AccountBalance(id=str(uuid.uuid4()), account_id=account_id, token_balance=0)
                db.add(balance)
                db.flush()
            balance.token_balance += amount
        db.commit()
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()
