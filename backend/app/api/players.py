from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.dependencies import current_user
from app.models import AccountBalance, PlayerAccount

router = APIRouter(prefix="/players", tags=["Players"])

@router.get("/me")
def get_me(user=Depends(current_user), db: Session = Depends(get_db)):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    balance = db.query(AccountBalance).filter(AccountBalance.account_id == account.id).one()
    return {
        "user": {
            "bale_user_id": user.bale_user_id,
            "first_name": user.first_name,
            "username": user.username,
            "photo_url": user.photo_url,
            "phone_verified": user.phone_verified_at is not None,
            "phone_verified_at": user.phone_verified_at,
        },
        "player": {
            "id": account.id,
            "display_name": account.display_name,
            "status": account.status,
            "token_balance": balance.token_balance,
        },
    }
