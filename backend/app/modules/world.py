from sqlalchemy.orm import Session
from app.models import WorldTerritory

GATE_NAMES = ["دریای شیشه‌ای","جنگل نقره‌ای","کوه بلورین","کویر آینه‌ها","غار ستاره‌ها","شهر ابرها","جزیرهٔ مه","درهٔ فانوس‌ها","باغ روشنایی","برج بادها","چشمهٔ زمان","صخرهٔ آواز","دروازهٔ سپیده"]

def seed_world(db: Session):
    if db.query(WorldTerritory).count():
        return
    db.add_all([
        WorldTerritory(id=n, slug=f"territory-{n:02d}",
          title_fa=GATE_NAMES[n-1] if n <= 13 else f"سرزمین {n}",
          release_status="released" if n == 1 else "locked", is_gate=n <= 13)
        for n in range(1, 78)
    ])
    db.commit()
