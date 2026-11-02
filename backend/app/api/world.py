from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.dependencies import current_user
from app.models import WorldTerritory, PlayerAccount, PlayerProgress, PlayerTerritoryProgress

router = APIRouter(prefix="/world", tags=["World"])

@router.get("/territories")
def list_territories(user=Depends(current_user), db: Session = Depends(get_db)):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    progress = db.query(PlayerProgress).filter(PlayerProgress.account_id == account.id).one()
    rows = db.query(WorldTerritory).order_by(WorldTerritory.id).all()
    player_states = {
        row.territory_id: row
        for row in db.query(PlayerTerritoryProgress).filter(PlayerTerritoryProgress.account_id == account.id).all()
    }
    return {
        "total": 77,
        "territories": [{
            "id": row.id,
            "slug": row.slug,
            "title": row.title_fa,
            "release_status": row.release_status,
            "is_gate": row.is_gate,
            "unlocked": row.id <= progress.unlocked_territory and row.release_status == "released",
            "player_status": player_states[row.id].status if row.id in player_states else "locked",
            "progress_data": player_states[row.id].progress_data if row.id in player_states else {},
        } for row in rows],
    }
