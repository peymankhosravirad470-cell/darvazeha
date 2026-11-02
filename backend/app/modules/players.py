import uuid
from sqlalchemy.orm import Session
from app.models import AccountBalance, PlayerAccount, PlayerProgress, PlayerTerritoryProgress, User, WorldTerritory

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
    balance = db.query(AccountBalance).filter(AccountBalance.account_id == account.id).first()
    if not balance:
        db.add(AccountBalance(id=str(uuid.uuid4()), account_id=account.id, token_balance=0))
    existing = {row.territory_id for row in db.query(PlayerTerritoryProgress).filter(PlayerTerritoryProgress.account_id == account.id).all()}
    for territory in db.query(WorldTerritory).all():
        if territory.id not in existing:
            db.add(PlayerTerritoryProgress(id=str(uuid.uuid4()), account_id=account.id, territory_id=territory.id,
                status="unlocked" if territory.id == 1 else "locked", progress_data={}))
    db.flush()
    return account, progress
