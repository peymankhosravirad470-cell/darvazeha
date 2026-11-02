import uuid
from datetime import datetime, timedelta, timezone
from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.database import get_db
from app.core.security import AuthenticationError, validate_bale_init_data, issue_session_token, new_session_id, verify_session_token
from app.dependencies import current_user
from app.models import AuthSession, User, utcnow
from app.modules.players import ensure_player_account
from app.schemas import BaleAuthRequest

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/bale")
def login_with_bale(body: BaleAuthRequest, db: Session = Depends(get_db)):
    try:
        verified = validate_bale_init_data(body.init_data)
    except AuthenticationError as exc:
        raise HTTPException(status_code=401, detail=str(exc))
    bale_user = verified["user"]
    user = db.query(User).filter(User.bale_user_id == int(bale_user["id"])).first()
    if not user:
        user = User(id=str(uuid.uuid4()), bale_user_id=int(bale_user["id"]))
        db.add(user)
        db.flush()
    account, progress = ensure_player_account(db, user, bale_user.get("first_name") or "مسافر")
    user.first_name = (bale_user.get("first_name") or user.first_name or "")[:120]
    user.username = bale_user.get("username")
    user.photo_url = bale_user.get("photo_url")
    session_id = new_session_id()
    expires = datetime.now(timezone.utc) + timedelta(seconds=settings.session_ttl_seconds)
    db.add(AuthSession(id=session_id, user_id=user.id, expires_at=expires))
    db.commit()
    return {
        "access_token": issue_session_token(user.id, session_id, int(expires.timestamp())),
        "token_type": "bearer", "expires_in": settings.session_ttl_seconds,
        "player": {"id": account.id, "display_name": account.display_name, "phone_verified": user.phone_verified_at is not None},
        "progress": {"unlocked": progress.unlocked_territory, "visited": progress.visited_territories, "missions": progress.missions_completed, "stars": progress.stars},
    }

@router.post("/logout")
def logout(authorization: str | None = Header(default=None), user: User = Depends(current_user), db: Session = Depends(get_db)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="نشست معتبر نیست.")
    try:
        payload = verify_session_token(authorization[7:])
    except AuthenticationError:
        raise HTTPException(status_code=401, detail="نشست نامعتبر است.")
    session = db.get(AuthSession, payload["sid"])
    if session and session.user_id == user.id and session.revoked_at is None:
        session.revoked_at = utcnow()
        db.commit()
    return {"ok": True}
