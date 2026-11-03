from sqlalchemy.dialects.postgresql import insert as postgresql_insert
from sqlalchemy.dialects.sqlite import insert as sqlite_insert
from sqlalchemy.orm import Session

from app.models import WorldTerritory


GATE_NAMES = [
    "دریای شیشه‌ای", "جنگل نقره‌ای", "کوه بلورین", "کویر آینه‌ها",
    "غار ستاره‌ها", "شهر ابرها", "جزیرهٔ مه", "درهٔ فانوس‌ها",
    "باغ روشنایی", "برج بادها", "چشمهٔ زمان", "صخرهٔ آواز",
    "دروازهٔ سپیده",
]


def seed_world(db: Session):
    """Insert missing world rows atomically without changing existing rows.

    PostgreSQL and SQLite both support INSERT .. ON CONFLICT DO NOTHING.
    Avoid a read-then-insert sequence: concurrent application replicas can
    otherwise observe the same missing IDs and race on the primary key.
    Omitting the conflict target also makes an existing unique slug conflict
    a no-op rather than an IntegrityError. Existing records are never updated.
    """
    values = [
        {
            "id": n,
            "slug": f"territory-{n:02d}",
            "title_fa": GATE_NAMES[n - 1] if n <= 13 else f"سرزمین {n}",
            "release_status": "released" if n == 1 else "locked",
            "is_gate": n <= 13,
        }
        for n in range(1, 78)
    ]

    dialect = db.get_bind().dialect.name
    if dialect == "postgresql":
        statement = postgresql_insert(WorldTerritory).values(values).on_conflict_do_nothing()
    elif dialect == "sqlite":
        statement = sqlite_insert(WorldTerritory).values(values).on_conflict_do_nothing()
    else:
        raise RuntimeError(f"seed_world does not support database dialect: {dialect}")

    db.execute(statement)
    db.commit()
