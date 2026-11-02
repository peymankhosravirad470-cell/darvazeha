from fastapi import Depends, Header, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import AuthenticationError, verify_session_token
from app.models import AuthSession, User

def current_user(authorization: str | None = Header(default=None), db: Session = Depends(get_db)) -> User:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="نشست معتبر نیست؛ دوباره وارد شوید.")
    try:
        payload = verify_session_token(authorization[7:])
    except AuthenticationError:
        raise HTTPException(status_code=401, detail="نشست نامعتبر یا منقضی شده است.")
    session = db.get(AuthSession, payload["sid"])
    if not session or session.revoked_at is not None or session.user_id != payload["sub"]:
        raise HTTPException(status_code=401, detail="نشست لغو شده است.")
    user = db.get(User, payload["sub"])
    if not user:
        raise HTTPException(status_code=401, detail="حساب بازیکن پیدا نشد.")
    return user
