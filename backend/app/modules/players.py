import uuid
from sqlalchemy.orm import Session
from app.models import PlayerAccount, PlayerProgress, User

def ensure_player_account(db: Session, user: User, display_name: str = "مسافر"):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).first()
    if not account:
        account = PlayerAccount(id=str(uuid.uuid4()), user_id=user.id, display_name=(display_name or "مسافر")[:80])
        db.add(account)
        db.flush()
    progress = db.query(PlayerProgress).filter(PlayerProgress.account_id == account.id).first()
    if not progress:
        progress = PlayerProgress(id=str(uuid.uuid4()), account_id=account.id)
        db.add(progress)
        db.flush()
    return account, progress
