from sqlalchemy.orm import Session
from app.models import WorldTerritory

GATE_NAMES = ["دریای شیشه‌ای","جنگل نقره‌ای","کوه بلورین","کویر آینه‌ها","غار ستاره‌ها","شهر ابرها","جزیرهٔ مه","درهٔ فانوس‌ها","باغ روشنایی","برج بادها","چشمهٔ زمان","صخرهٔ آواز","دروازهٔ سپیده"]

def seed_world(db: Session):
    existing = {row.id for row in db.query(WorldTerritory.id).all()}
    missing = [
        WorldTerritory(id=n, slug=f"territory-{n:02d}",
          title_fa=GATE_NAMES[n-1] if n <= 13 else f"سرزمین {n}",
          release_status="released" if n == 1 else "locked", is_gate=n <= 13)
        for n in range(1, 78) if n not in existing
    ]
    if missing:
        db.add_all(missing)
        db.commit()
