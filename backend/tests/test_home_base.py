"""آزمون‌های پایگاه خانگی سروری (home_realm / home_land روی حساب بازیکن).

پوشش الزامات دستور:
- ثبت اولین پایگاه در دیتابیس (خود ردیف بررسی می‌شود).
- عدم جایگزینی پایگاه در انتخاب دوم (۴۰۹ + ثبات مقدار).
- دو درخواست هم‌زمان برای ثبت دو انتخاب متفاوت (اتمیک بودن؛ دقیقاً یک برنده).
- اعتبارسنجی رابطهٔ سرزمین و امپراتوری با دادهٔ رسمی ۷×۱۱.
- عدم دسترسی یک حساب به پایگاه حساب دیگر (مالکیت فقط با توکن احراز‌شده).
- رفتار بدون احراز هویت (۴۰۱).
"""
import hashlib
import hmac
import json
import threading
import time
from urllib.parse import urlencode

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import NullPool

from app.core import database
from app.core.config import settings
from app.core.database import Base, get_db
from app.main import app
from app.models import PlayerAccount


def make_init_data(token, uid=654321):
    values = {"auth_date": str(int(time.time())), "query_id": "home-test-query",
              "user": json.dumps({"id": uid, "first_name": "بازیکن پایگاه"}, separators=(",", ":"))}
    check = "\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret = hmac.new(token.encode(), b"WebAppData", hashlib.sha256).digest()
    values["hash"] = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
    return urlencode(values)


def _install_engine(engine):
    factory = sessionmaker(bind=engine, autoflush=False, autocommit=False)
    database._engine, database._factory = engine, factory
    Base.metadata.create_all(engine)

    def override_db():
        db = factory()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_db
    return factory


@pytest.fixture()
def client():
    engine = create_engine("sqlite://", connect_args={"check_same_thread": False},
                           poolclass=__import__("sqlalchemy.pool", fromlist=["StaticPool"]).StaticPool)
    _install_engine(engine)
    old = (settings.bale_bot_token, settings.session_secret)
    settings.bale_bot_token = "home-test-token"
    settings.session_secret = "home-test-session-secret-which-is-long"
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()
    settings.bale_bot_token, settings.session_secret = old
    engine.dispose()
    database._engine = database._factory = None


def login(client, uid):
    r = client.post("/api/v1/auth/bale", json={"init_data": make_init_data("home-test-token", uid)})
    assert r.status_code == 200, r.text
    return {"Authorization": f"Bearer {r.json()['access_token']}"}


# ── ۱) ثبت اولین پایگاه در دیتابیس ──
def test_first_home_base_persisted_in_database(client):
    headers = login(client, 101001)
    assert client.get("/api/v1/players/me/home", headers=headers).json() == {"home": None}
    put = client.put("/api/v1/players/me/home", headers=headers, json={"realm": "targon", "land": "t1"})
    assert put.status_code == 201, put.text
    assert put.json() == {"created": True, "home": {"realm": "targon", "land": "t1"}}
    got = client.get("/api/v1/players/me/home", headers=headers)
    assert got.status_code == 200
    assert got.json() == {"home": {"realm": "targon", "land": "t1"}}
    # خودِ ردیف دیتابیس
    db = database.get_session_factory()()
    row = db.query(PlayerAccount).first()
    assert row.home_realm == "targon" and row.home_land == "t1"
    db.close()


# ── ۲) عدم جایگزینی پایگاه در انتخاب دوم ──
def test_second_choice_never_replaces_home(client):
    headers = login(client, 101002)
    first = client.put("/api/v1/players/me/home", headers=headers, json={"realm": "targon", "land": "t1"})
    assert first.status_code == 201
    second = client.put("/api/v1/players/me/home", headers=headers, json={"realm": "dezhmaar", "land": "d1"})
    assert second.status_code == 409
    assert second.json()["detail"]["home"] == {"realm": "targon", "land": "t1"}
    got = client.get("/api/v1/players/me/home", headers=headers)
    assert got.json() == {"home": {"realm": "targon", "land": "t1"}}
    db = database.get_session_factory()()
    row = db.query(PlayerAccount).first()
    assert (row.home_realm, row.home_land) == ("targon", "t1")
    db.close()


# ── ۳) دو درخواست هم‌زمان برای ثبت دو انتخاب متفاوت ──
def test_concurrent_registrations_exactly_one_winner():
    # فایل‌محور: دو اتصال واقعی و موازی، مثل دو رپلیکا روی پایگاه واقعی
    import tempfile, os
    dbfile = os.path.join(tempfile.mkdtemp(), "concurrency.db")
    engine = create_engine(f"sqlite:///{dbfile}", connect_args={"check_same_thread": False}, poolclass=NullPool)
    _install_engine(engine)
    old = (settings.bale_bot_token, settings.session_secret)
    settings.bale_bot_token = "home-test-token"
    settings.session_secret = "home-test-session-secret-which-is-long"
    try:
        with TestClient(app) as c:
            headers = login(c, 101003)
            barrier = threading.Barrier(2, timeout=15)
            outcomes = {}

            def attempt(name, realm, land):
                payload = {"realm": realm, "land": land}
                barrier.wait()
                with TestClient(app) as c2:
                    r1 = c2.put("/api/v1/players/me/home", headers=headers, json=payload)
                    g = c2.get("/api/v1/players/me/home", headers=headers)
                    outcomes[name] = (r1.status_code, r1.json(), g.json())

            t1 = threading.Thread(target=attempt, args=("A", "targon", "t1"))
            t2 = threading.Thread(target=attempt, args=("B", "dezhmaar", "d1"))
            t1.start(); t2.start(); t1.join(20); t2.join(20)
            assert "A" in outcomes and "B" in outcomes, outcomes
            created = [n for n, (code, _, _) in outcomes.items() if code == 201]
            conflicted = [n for n, (code, _, _) in outcomes.items() if code == 409]
            assert len(created) == 1 and len(conflicted) == 1, outcomes
            winner = outcomes[created[0]][1]["home"]
            assert outcomes[conflicted[0]][1]["detail"]["home"] == winner
            # هر دو خواندن بعد از ثبت، همان مقدار واحد را می‌بینند
            assert outcomes["A"][2] == outcomes["B"][2] == {"home": winner}
            db = database.get_session_factory()()
            row = db.query(PlayerAccount).first()
            assert (row.home_realm, row.home_land) == (winner["realm"], winner["land"])
            db.close()
    finally:
        settings.bale_bot_token, settings.session_secret = old
        app.dependency_overrides.clear()
        engine.dispose()
        database._engine = database._factory = None


# ── ۴) اعتبارسنجی رابطهٔ سرزمین و امپراتوری ──
@pytest.mark.parametrize("realm,land", [
    ("targon", "d1"),      # سرزمین دژمار در امپراتوری تارگون
    ("dezhmaar", "t5"),    # برعکس
    ("atlantis", "t1"),    # امپراتوری ناشناخته
    ("targon", "t99"),     # سرزمین ناشناخته
])
def test_invalid_realm_land_pairs_rejected(client, realm, land):
    headers = login(client, 101004)
    r = client.put("/api/v1/players/me/home", headers=headers, json={"realm": realm, "land": land})
    assert r.status_code == 422
    assert client.get("/api/v1/players/me/home", headers=headers).json() == {"home": None}


def test_all_seven_official_realms_accept_their_first_land(client):
    headers = login(client, 101005)
    # برای یک حساب فقط یکی ثبت می‌شود؛ اینجا فقط اعتبار جفت‌ها را با خطای ۴۰۹ بعد از اولین ثبت می‌سنجیم
    ok_first = client.put("/api/v1/players/me/home", headers=headers, json={"realm": "tarmad", "land": "r1"})
    assert ok_first.status_code == 201
    for realm, land in [("targon", "t1"), ("dezhmaar", "d1"), ("argad", "a1"), ("mardak", "m1"),
                        ("vergad", "v1"), ("zardak", "z1")]:
        r = client.put("/api/v1/players/me/home", headers=headers, json={"realm": realm, "land": land})
        assert r.status_code == 409  # معتبرند ولی جایگزینی ممنوع است
    second = client.put("/api/v1/players/me/home", headers=headers, json={"realm": "tarmad", "land": "r11"})
    assert second.status_code == 409


# ── ۵) عدم دسترسی یک حساب به پایگاه حساب دیگر ──
def test_account_isolation_ownership_from_server_token(client):
    headers_a = login(client, 101006)
    headers_b = login(client, 101007)
    put = client.put("/api/v1/players/me/home", headers=headers_a, json={"realm": "targon", "land": "t1"})
    assert put.status_code == 201
    # حساب B پایگاه ندارد و نمی‌تواند پایگاه A را ببیند یا تغییر دهد
    assert client.get("/api/v1/players/me/home", headers=headers_b).json() == {"home": None}
    put_b = client.put("/api/v1/players/me/home", headers=headers_b, json={"realm": "dezhmaar", "land": "d1"})
    assert put_b.status_code == 201  # پایگاه خودش ساخته شد، نه A
    assert put_b.json()["home"] == {"realm": "dezhmaar", "land": "d1"}
    # A دست‌نخورده
    assert client.get("/api/v1/players/me/home", headers=headers_a).json() == {"home": {"realm": "targon", "land": "t1"}}
    assert client.get("/api/v1/players/me/home", headers=headers_b).json() == {"home": {"realm": "dezhmaar", "land": "d1"}}
    # هیچ endpointی شناسهٔ بازیکن از کلاینت را به‌عنوان مالک نمی‌پذیرد — مالکیت فقط از توکن
    db = database.get_session_factory()()
    rows = {r.user_id: (r.home_realm, r.home_land) for r in db.query(PlayerAccount).all()}
    assert len(rows) == 2 and len({v for v in rows.values()}) == 2
    db.close()


# ── ۶) بدون احراز هویت: ۴۰۱ ──
def test_home_endpoints_require_authentication(client):
    assert client.get("/api/v1/players/me/home").status_code == 401
    assert client.put("/api/v1/players/me/home", json={"realm": "targon", "land": "t1"}).status_code == 401


# ── ۷) شکل درخواست نامعتبر ──
def test_malformed_request_rejected(client):
    headers = login(client, 101008)
    r = client.put("/api/v1/players/me/home", headers=headers, json={"realm": "TARGON", "land": "t1"})
    assert r.status_code == 422  # الگوی مجاز فقط حروف کوچک/عدد/زیرخط
    r = client.put("/api/v1/players/me/home", headers=headers, json={"realm": "targon"})
    assert r.status_code == 422
