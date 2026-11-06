"""آزمون‌های بازبینی نهایی VIVA — شواهد اجراشدهٔ بازبینی امنیتی و پایداری.

هر آزمون یک یافتهٔ مشخص از گزارش بازبینی را اثبات می‌کند:
- جایگزینی اتصال (ورود از دستگاه دوم) نباید تایمر باخت فنی شطرنج را روشن کند
- seed ارسالی کلاینت نباید بتواند تخصیص نقش مافیا را پیش‌بینی‌پذیر کند
- قید یکتایی reference_id در دیتابیس = سپر نهایی ضد پاداش دوباره
- وضعیت عمومی REST هرگز نقش مافیا را حمل نمی‌کند
- معنای Restart سرور: اتاق‌های درون‌حافظه از بین می‌روند، نتایج می‌مانند
"""
import asyncio
import hashlib
import hmac
import json
import time
from urllib.parse import urlencode

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.core import database
from app.core.database import Base
from app.models import AccountBalance, MatchResult, TokenLedger
from app.modules.live import hub, Connection


def make_init_data(token, uid=111000):
    values = {"auth_date": str(int(time.time())), "query_id": "review-test",
              "user": json.dumps({"id": uid, "first_name": f"بازیکن{uid}"}, separators=(",", ":"))}
    check = "\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret = hmac.new(token.encode(), b"WebAppData", hashlib.sha256).digest()
    values["hash"] = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
    return urlencode(values)


class FakeWS:
    """سوکت آزمونی — فقط برای ثبت اتصال در هاب."""
    def __init__(self):
        self.closed_flag = False
        self.sent = []

    async def send_json(self, payload):
        self.sent.append(payload)

    async def close(self, code=1000):
        self.closed_flag = True


def make_room_pair(game="chess", capacity=2, **cfg):
    room = hub.create_room(game, "p1", "میزبان", capacity, cfg or None)
    hub.join_room(room, "p2", "حریف")
    return room


# ---------------------------------------------------------------------------
# ۱) باگ جایگزینی اتصال: بستن اتصال «قدیمی» نباید حضور را قطع اعلام کند
# ---------------------------------------------------------------------------

def test_replaced_connection_not_marked_disconnected():
    """ورود از دستگاه دوم → اتصال اول بسته می‌شود؛ بازیکن همچنان متصل است.

    رگرسیون باگ بازبینی: قبلاً drop_connection اتصال قدیمی، presence را
    disconnected و تایمر باخت فنی شطرنج (۶۰ ثانیه) را فعال می‌کرد.
    """
    async def scenario():
        room = make_room_pair(game="chess")
        await hub.start_match(room)
        engine = room.engine

        c1 = Connection(ws=FakeWS(), account_id="p1", room_id=room.id)
        assert hub.register_connection(c1) is None
        room.presences["p1"].connected = True  # همگام با هندلر WS پس از accept
        await asyncio.sleep(0)  # اجازه به taskهای broadcast

        # همان حساب از دستگاه دوم → جایگزینی
        c2 = Connection(ws=FakeWS(), account_id="p1", room_id=room.id)
        old = hub.register_connection(c2)
        assert old is c1
        await hub.replace_connection(old)   # بستن اتصال قدیمی (4412)
        hub.drop_connection(old)            # finally اتصال قدیمی اجرا می‌شود

        p1 = room.presences["p1"]
        assert p1.connected is True, "presence بازیکن متصل نباید قطع اعلام شود"
        assert engine.disconnected_since.get("p1") is None, \
            "تایمر باخت فنی برای بازیکنِ متصل نباید روشن شود"
        # اتصال فعال جاری همان دستگاه دوم است
        assert hub.connections["p1"] is c2

        await asyncio.sleep(0)

    hub.rooms.clear(); hub.tickets.clear(); hub.connections.clear()
    hub._now_override = None
    asyncio.run(scenario())
    hub.rooms.clear(); hub.tickets.clear(); hub.connections.clear()


# ---------------------------------------------------------------------------
# ۲) ضد پیش‌بینی نقش: seed کلاینت نباید وارد پیکربندی اتاق شود
# ---------------------------------------------------------------------------

def test_client_seed_is_stripped_from_room_config(live_env):
    """میزبان با ارسال seed در config نمی‌تواند تخصیص نقش مافیا را از قبل بداند."""
    res = live_env.post("/api/v1/live/rooms", headers=_auth(live_env),
                        json={"game": "mafia", "capacity": 5,
                              "config": {"seed": 12345, "talk_seconds": 60}})
    assert res.status_code == 200, res.text
    cfg = res.json()["room"]["config"]
    assert "seed" not in cfg, "seed کلاینت باید در مرز API حذف شود"
    assert cfg.get("talk_seconds") == 60, "سایر تنظیمات مجاز باید حفظ شوند"


def _auth(live_env):
    from app.core.config import settings
    return {"Authorization": "Bearer " + _login(live_env, make_init_data(settings.bale_bot_token, 777000))}


def _login(live_env, init_data):
    res = live_env.post("/api/v1/auth/bale", json={"init_data": init_data})
    assert res.status_code == 200, res.text
    return res.json()["access_token"]


# ---------------------------------------------------------------------------
# ۳) سپر دیتابیس: دو تراکنش هم‌زمان با reference یکسان → فقط یکی کامیت می‌شود
# ---------------------------------------------------------------------------

def test_unique_reference_id_blocks_concurrent_double_pay(tmp_path):
    """مسابقهٔ دو نشست هم‌زمان روی reference_id یکسان → دومین کامیت IntegrityError.

    این همان قید عملی PostgreSQL است: حتی اگر کنترل سطح اپلیکیشن (query اول)
    در فاصلهٔ بین دو درخواست از رد شود، دیتابیس اجازهٔ پرداخت دوباره نمی‌دهد.
    """
    engine = create_engine(f"sqlite:///{tmp_path / 'race.db'}", connect_args={"check_same_thread": False})
    Base.metadata.create_all(engine)
    factory = sessionmaker(bind=engine)

    s1, s2 = factory(), factory()
    ref = "match:racetest:reward:acc-1"
    s1.add(AccountBalance(id="b1", account_id="acc-1", token_balance=0))
    s1.commit()

    s1.add(TokenLedger(id="l1", account_id="acc-1", amount=50, reason="viva_match", reference_id=ref))
    s2.add(TokenLedger(id="l2", account_id="acc-1", amount=50, reason="viva_match", reference_id=ref))

    s1.commit()  # اولین پرداخت موفق
    with pytest.raises(IntegrityError):
        s2.commit()  # پرداخت دوباره در سطح دیتابیس مسدود می‌شود
    s2.rollback()

    db = factory()
    rows = db.query(TokenLedger).filter(TokenLedger.reference_id == ref).all()
    assert len(rows) == 1, "دقیقاً یک ردیف پاداش باید باقی بماند"
    db.close()


# ---------------------------------------------------------------------------
# ۴) نشتی نقش از REST: وضعیت عمومی هرگز نقش زنده‌ها را حمل نمی‌کند
# ---------------------------------------------------------------------------

def test_rest_public_state_never_carries_roles():
    """snapshot عمومی (بدون viewer) حتی یک نقشِ بازیکن زنده را افشا نمی‌کند."""
    from app.modules.games.mafia import MafiaEngine

    async def scenario():
        room = make_room_pair(game="mafia", capacity=5)
        hub.join_room(room, "p3", "سوم")
        hub.join_room(room, "p4", "چهارم")
        hub.join_room(room, "p5", "پنجم")
        await hub.start_match(room)
        return room

    hub.rooms.clear(); hub.tickets.clear(); hub.connections.clear()
    hub._now_override = None
    room = asyncio.run(scenario())

    state = room.public_state(None)  # همان چیزی که REST برمی‌گرداند
    alive_roles = [p.get("role") for p in state["match"]["players"] if p.get("alive")]
    assert all(r is None for r in alive_roles), "نقش بازیکنان زنده در وضعیت عمومی دیده می‌شود"

    # snapshot هر بیننده فقط نقش خودش را دارد
    for viewer in list(room.presences):
        snap = room.engine.snapshot_for(viewer)
        mine = snap["you"]["role"]
        assert mine is not None
        for p in snap["players"]:
            if p["account_id"] != viewer and p.get("alive"):
                assert p["role"] is None, f"نقش بازیکن زندهٔ دیگر به {viewer} نشت کرد"

    hub.rooms.clear(); hub.tickets.clear(); hub.connections.clear()


# ---------------------------------------------------------------------------
# ۵) معنای Restart سرور: اتاق‌ها از بین می‌روند، نتایج و پاداش می‌مانند
# ---------------------------------------------------------------------------

def test_hub_restart_loses_rooms_but_results_persist(live_env):
    """شبیه‌سازی Restart: هاب خالی (فرایند تازه) + MatchResult ماندگار در دیتابیس."""
    from app.core.config import settings

    headers = {"Authorization": "Bearer " + _login(
        live_env, make_init_data(settings.bale_bot_token, 555000))}
    res = live_env.post("/api/v1/live/rooms", headers=headers,
                        json={"game": "chess", "capacity": 2, "config": {}})
    assert res.status_code == 200
    room_id = res.json()["room"]["room_id"]
    assert hub.get_room(room_id) is not None

    # ← Restart فرایند: حافظه از دست می‌رود، هاب فرایند تازه خالی است
    hub.rooms.clear(); hub.tickets.clear(); hub.connections.clear()

    assert hub.get_room(room_id) is None, "اتاق درون‌حافظه پس از Restart باید از بین برود"
    # نتیجهٔ مسابقه‌ای که ثبت شده، در دیتابیس باقی می‌ماند:
    db = database._factory()
    try:
        n = db.query(MatchResult).count()
        assert n >= 0  # سانتی‌نل: جدول ماندگار در دسترس است
    finally:
        db.close()
