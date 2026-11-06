"""آزمون‌های زیوان — تالارها، اعتبارسنجی ضدتقلب، حریم خصوصی، پاداش خاموش/روشن."""
import json
import time

import pytest

from app.core.config import settings
from app.core.database import get_db
from app.models import AccountBalance, ActivitySession, TokenLedger
from app.modules.zivan import (
    HALLS, LIVE_HALL_IDS, haversine_m, privacy_path, reward_for,
    validate_session_points,
)

import hashlib
import hmac
from urllib.parse import urlencode


def make_init_data(token, uid=222000):
    values = {"auth_date": str(int(time.time())), "query_id": "zivan-test",
              "user": json.dumps({"id": uid, "first_name": f"همسفر{uid}"}, separators=(",", ":"))}
    check = "\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret = hmac.new(token.encode(), b"WebAppData", hashlib.sha256).digest()
    values["hash"] = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
    return urlencode(values)


def _login(client, uid):
    from app.core.config import settings as s
    r = client.post("/api/v1/auth/bale", json={"init_data": make_init_data(s.bale_bot_token, uid)})
    assert r.status_code == 200, r.text
    data = r.json()
    return {"Authorization": "Bearer " + data["access_token"]}, data["player"]["id"]


LAT0, LON0 = 35.7000, 51.4000


def walk_points(n=25, step_m=45.0, dt=30.0, t0=None, acc=8.0, lat0=LAT0, lon0=LON0):
    """پیاده‌روی مصنوعی واقع‌گرایانه — هر گام ۴۵ متر در ۳۰ ثانیه (۱٫۵ m/s)."""
    t0 = t0 if t0 is not None else time.time() - (n * dt) - 10
    dlat = step_m / 111_320.0
    pts = [{"lat": lat0, "lon": lon0, "t": t0, "acc": acc}]
    for i in range(1, n + 1):
        pts.append({"lat": lat0 + dlat * i, "lon": lon0, "t": t0 + dt * i, "acc": acc})
    return pts


# ---------------------------------------------------------------------------
# واحد — موتور اعتبارسنجی
# ---------------------------------------------------------------------------

def test_haversine_known_distance():
    d = haversine_m(LAT0, LON0, LAT0 + 1.0, LON0)
    assert abs(d - 111_195) < 300  # یک درجهٔ عرض ≈ ۱۱۱٫۲ کیلومتر


def test_valid_walk_session():
    pts = walk_points()
    started = pts[0]["t"] - 10
    finished = pts[-1]["t"] + 5
    v = validate_session_points("walk", pts, started_at_ts=started, finished_at_ts=finished)
    assert v["valid"] is True
    assert v["reject_reason"] is None
    assert v["distance_m"] > 1000  # ۲۵ گام ۴۵ متری
    assert v["steps"] == int(v["distance_m"] / 0.72)
    assert v["accepted_points"] == len(pts)
    assert v["stats"]["bad_speed"] == 0


def test_teleport_segment_is_dropped_not_credited():
    pts = walk_points(n=10)
    # یک نقطهٔ ۵ کیلومتری بعد از آخرین نقطه → پرش تلگرافی
    far = dict(pts[-1])
    far["lat"] = far["lat"] + 5 / 111.32
    far["t"] = far["t"] + 30
    pts.append(far)
    v = validate_session_points("run", pts, started_at_ts=pts[0]["t"] - 10,
                                finished_at_ts=far["t"] + 5)
    assert v["stats"]["bad_speed"] == 1
    assert v["accepted_points"] == len(pts) - 1
    assert v["distance_m"] < 1000  # پرش در مسافت به حساب نیامده
    assert v["valid"] is True  # ولی بقیهٔ جلسه معتبر مانده


def test_many_teleports_reject_session():
    pts = walk_points(n=12)
    t = pts[-1]["t"]
    for i in range(7):  # هفت پرش غیرممکن پشت‌سرهم
        t += 20
        p = {"lat": LAT0 + i * 0.01, "lon": LON0, "t": t, "acc": 8.0}
        pts.append(p)
    v = validate_session_points("walk", pts, started_at_ts=pts[0]["t"] - 10,
                                finished_at_ts=t + 5)
    assert v["valid"] is False
    assert v["reject_reason"] == "impossible_speed"


def test_low_gps_accuracy_rejected():
    pts = walk_points(n=10, acc=500.0)  # دقت ۵۰۰ متر = آشغال
    v = validate_session_points("walk", pts, started_at_ts=pts[0]["t"] - 10,
                                finished_at_ts=pts[-1]["t"] + 5)
    assert v["valid"] is False
    assert v["reject_reason"] == "gps_quality"


def test_points_outside_session_window_dropped():
    pts = walk_points(n=5)
    started = pts[-1]["t"] + 200  # جلسه پس از همهٔ نقاط شروع شده → همه بیرون پنجره
    v = validate_session_points("walk", pts, started_at_ts=started,
                                finished_at_ts=started + 600)
    assert v["valid"] is False
    assert v["stats"]["outside_window"] == 6
    assert v["reject_reason"] == "below_minimum"


def test_duplicate_points_deduped():
    pts = walk_points(n=8)
    v = validate_session_points("walk", pts + [dict(pts[-1]), dict(pts[-1])],
                                started_at_ts=pts[0]["t"] - 10,
                                finished_at_ts=pts[-1]["t"] + 5)
    assert v["stats"]["duplicate"] == 2
    assert v["valid"] is True


def test_too_many_points_rejected():
    pts = [{"lat": LAT0, "lon": LON0, "t": 1 + i, "acc": 5} for i in range(2100)]
    v = validate_session_points("walk", pts, started_at_ts=0, finished_at_ts=1000)
    assert v["valid"] is False
    assert v["reject_reason"] == "too_many_points"


def test_run_allows_faster_than_walk():
    pts = walk_points(n=6, step_m=90.0, dt=15.0)  # ۶ m/s
    started, finished = pts[0]["t"] - 10, pts[-1]["t"] + 5
    assert validate_session_points("run", pts, started_at_ts=started,
                                   finished_at_ts=finished)["valid"] is True
    v_walk = validate_session_points("walk", pts, started_at_ts=started,
                                     finished_at_ts=finished)
    assert v_walk["stats"]["bad_speed"] > 0  # همان سرعت برای پیاده‌روی غیرممکن است


def test_below_minimum_not_credited():
    pts = walk_points(n=1, step_m=10.0)  # ۱۰ متر < حداقل ۳۰ متر
    v = validate_session_points("walk", pts, started_at_ts=pts[0]["t"] - 10,
                                finished_at_ts=pts[-1]["t"] + 5)
    assert v["valid"] is False
    assert v["reject_reason"] == "below_minimum"
    assert v["steps"] == 0


def test_unknown_activity_rejected():
    v = validate_session_points("flying", [], started_at_ts=0, finished_at_ts=10)
    assert v["valid"] is False and v["reject_reason"] == "unknown_activity"


def test_privacy_path_downsamples_and_rounds():
    pts = walk_points(n=300)  # ۳۰۱ نقطه
    out = privacy_path(pts)
    assert len(out) <= 60
    for p in out:
        assert p["lat"] == round(p["lat"], 4)
        assert p["lon"] == round(p["lon"], 4)
        assert "acc" not in p  # دقت GPS هم ذخیره نمی‌شود — فقط حداقلِ لازم


def test_reward_formula_capped():
    assert reward_for(500, 0) == 0
    assert reward_for(1000, 0) == 1
    assert reward_for(60_000, 0) == 50  # سقف ۵۰


# ---------------------------------------------------------------------------
# API — با احراز هویت کامل
# ---------------------------------------------------------------------------

def test_halls_listed_ten_with_honest_status(live_env):
    h, _ = _login(live_env, 1)
    r = live_env.get("/api/v1/zivan/halls", headers=h)
    assert r.status_code == 200
    data = r.json()
    assert data["kingdom"] == "zivan"
    assert len(data["halls"]) == 10
    assert {x["id"] for x in data["halls"] if x["status"] == "live"} == LIVE_HALL_IDS
    assert data["me"]["rewards_enabled"] is False  # پاداش پیش‌فرض خاموش


def test_start_without_consent_forbidden(live_env):
    h, _ = _login(live_env, 2)
    r = live_env.post("/api/v1/zivan/sessions", headers=h,
                      json={"hall": "walking", "consent": False})
    assert r.status_code == 403
    assert "رضایت" in r.json()["detail"]


def test_start_unknown_or_structure_hall_rejected(live_env):
    h, _ = _login(live_env, 3)
    r1 = live_env.post("/api/v1/zivan/sessions", headers=h,
                       json={"hall": "moments", "consent": True})
    assert r1.status_code == 422  # تالار ساختاری — فعالیت زنده ندارد
    r2 = live_env.post("/api/v1/zivan/sessions", headers=h,
                       json={"hall": "atlantis", "consent": True})
    assert r2.status_code == 422


def test_full_walk_flow_valid_and_no_reward_by_default(live_env, monkeypatch):
    import app.api.zivan as zapi
    h, _ = _login(live_env, 4)
    r = live_env.post("/api/v1/zivan/sessions", headers=h,
                      json={"hall": "walking", "consent": True})
    assert r.status_code == 200, r.text
    started_server = r.json()["session"]["started_at"]
    sid = r.json()["session"]["id"]

    # ساعت فشرده: پیاده‌روی ۲۵ گامی بلافاصله پس از شروع جلسه، پایان در +۸۰۰ ثانیه
    pts = walk_points(n=25, t0=started_server + 2)
    monkeypatch.setattr(zapi, "_now", lambda: pts[-1]["t"] + 50)
    f = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": pts})
    assert f.status_code == 200, f.text
    data = f.json()
    assert data["session"]["valid"] is True
    assert data["session"]["distance_m"] > 1000
    assert data["session"]["steps"] > 1000
    assert data["reward"] == 0  # پاداش در محیط اصلی خاموش است
    assert data["rewards_enabled"] is False

    # idempotent: پایان دوباره نتیجه را عوض نمی‌کند و پاداش تازه نمی‌دهد
    f2 = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h,
                       json={"points": pts + [{"lat": 80.0, "lon": 5.0, "t": pts[-1]["t"] + 10, "acc": 5}]})
    assert f2.json()["already"] is True
    assert f2.json()["session"]["distance_m"] == data["session"]["distance_m"]
    assert f2.json()["reward"] == 0


def test_path_owner_only(live_env, monkeypatch):
    import app.api.zivan as zapi
    h1, _ = _login(live_env, 5)
    h2, _ = _login(live_env, 6)
    r = live_env.post("/api/v1/zivan/sessions", headers=h1,
                      json={"hall": "walking", "consent": True})
    sid = r.json()["session"]["id"]
    started_server = r.json()["session"]["started_at"]
    pts = walk_points(n=25, t0=started_server + 2)
    monkeypatch.setattr(zapi, "_now", lambda: pts[-1]["t"] + 50)
    live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h1, json={"points": pts})

    mine = live_env.get(f"/api/v1/zivan/sessions/{sid}/path", headers=h1)
    assert mine.status_code == 200
    assert 0 < len(mine.json()["path"]) <= 60

    other = live_env.get(f"/api/v1/zivan/sessions/{sid}/path", headers=h2)
    assert other.status_code == 404  # مسیرِ دیگران هرگز قابل دریافت نیست


def test_leaderboard_has_no_coordinates(live_env):
    h, _ = _login(live_env, 7)
    r = live_env.get("/api/v1/zivan/leaderboard?period=7d", headers=h)
    assert r.status_code == 200
    text = r.text
    assert "lat" not in text and "lon" not in text


def test_reward_paid_exactly_once_when_enabled(live_env, monkeypatch):
    import app.api.zivan as zapi
    monkeypatch.setattr(settings, "zivan_rewards_enabled", True)
    h, _ = _login(live_env, 8)
    r = live_env.post("/api/v1/zivan/sessions", headers=h,
                      json={"hall": "running", "consent": True})
    sid = r.json()["session"]["id"]
    started_server = r.json()["session"]["started_at"]
    pts = walk_points(n=20, step_m=90.0, dt=15.0, t0=started_server + 2)  # دویدن ۶ m/s
    monkeypatch.setattr(zapi, "_now", lambda: pts[-1]["t"] + 50)
    f = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": pts})
    data = f.json()
    assert data["session"]["valid"] is True
    assert data["reward"] == data["session"]["distance_m"] // 1000
    # پایان تکراری: همان مبلغِ قبلاً پرداخت‌شده گزارش می‌شود ولی ردیف تازه ساخته نمی‌شود
    f2 = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": pts})
    assert f2.json()["already"] is True
    assert f2.json()["reward"] == data["reward"]  # همان پرداخت قبلی، نه پرداخت تازه
    ledger = f"zivan:{sid}"
    from app.core import database as dbmod
    db = dbmod._factory()
    try:
        rows = db.query(TokenLedger).filter(TokenLedger.reference_id == ledger).all()
        assert len(rows) == 1
        bal = db.query(AccountBalance).filter(AccountBalance.account_id == rows[0].account_id).first()
        assert bal.token_balance == rows[0].amount  # دقیقاً یک‌بار
    finally:
        db.close()


def test_second_open_session_conflicts(live_env):
    h, _ = _login(live_env, 9)
    r1 = live_env.post("/api/v1/zivan/sessions", headers=h,
                       json={"hall": "walking", "consent": True})
    assert r1.status_code == 200
    r2 = live_env.post("/api/v1/zivan/sessions", headers=h,
                       json={"hall": "running", "consent": True})
    assert r2.status_code == 409
