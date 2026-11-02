from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.dependencies import current_user
from app.models import WorldTerritory, PlayerAccount, PlayerProgress

router = APIRouter(prefix="/world", tags=["World"])

@router.get("/territories")
def list_territories(user=Depends(current_user), db: Session = Depends(get_db)):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    progress = db.query(PlayerProgress).filter(PlayerProgress.account_id == account.id).one()
    rows = db.query(WorldTerritory).order_by(WorldTerritory.id).all()
    return {"total": 77, "territories": [{
        "id": row.id, "slug": row.slug, "title": row.title_fa,
        "release_status": row.release_status, "is_gate": row.is_gate,
        "unlocked": row.id <= progress.unlocked_territory and row.release_status == "released"
    } for row in rows]}
