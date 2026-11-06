"""آزمون‌های زیوان فاز ۲ — شش تالار باقی‌مانده + رقابت گروهی + مأموریت‌ها.

پوشش:
- تعادل/انعطاف: حکم تایمری فقط از ساعت سرور (کف/سقف/پروتکل نامعلوم/تکرار)
- تمرین گروهی: حلقهٔ تمرین با کد دعوت، پیوند جلسه، شمارش پیشرفت
- چالش دوستانه: پذیرش/تسویه/برنده فقط از جلسه‌های معتبر
- مأموریت اجتماعی: سهمِ یکتا از هر جلسه، رد جلسهٔ نامعتبر/دیگری
- مأموریت روزانه/هفتگی: پیشرفت از جلسه‌های معتبر، دعوای یکتا
- جام هفتگی: امتیاز شفاف قدم + ثانیهٔ تمرین
- لحظه‌ها: امضای بایت، سقف حجم/تعداد، دیدِ فقط-صاحب، حذف فقط-صاحب
- رقابت گروهی: گروه/کد دعوت/مسابقهٔ قدم/جدول زنده/برنده/ضدتکرار
"""
import base64
import time

import pytest

from app.core.config import settings
from app.models import ActivitySession
from app.modules.zivan import (
    PROTOCOLS, PROTOCOL_TOLERANCE_RATIO, cup_score, make_invite_code,
    moment_image_type, validate_protocol_session,
)

from test_zivan import _login, walk_points


PNG_1PX = base64.b64decode(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==")
PNG_BYTES = PNG_1PX + b"\x00" * 60          # ≥ ۱۰۰ بایت (مرورگر پسوند پس از IEND را می‌پذیرد)
JPEG_BYTES = b"\xff\xd8\xff\xe0\x00\x10JFIF" + b"\x00" * 120


@pytest.fixture()
def shift(monkeypatch):
    """ساعت فشردهٔ مشترک هر دو ماژول API زیوان."""
    import app.api.zivan as z1
    import app.api.zivan_phase2 as z2
    box = {"offset": 0.0}

    def _now():
        return time.time() + box["offset"]

    monkeypatch.setattr(z1, "_now", _now)
    monkeypatch.setattr(z2, "_now", _now)
    return box


def do_valid_walk(live_env, headers, hall="walking", *, n=25, dt=15.0, step_m=45.0, shift=None):
    """جلسهٔ پیاده‌روی معتبر سرتاسری؛ خروجی: (status_code, data, sid)."""
    r = live_env.post("/api/v1/zivan/sessions", headers=headers,
                      json={"hall": hall, "consent": True})
    assert r.status_code == 200, r.text
    sid = r.json()["session"]["id"]
    started = r.json()["session"]["started_at"]
    pts = walk_points(n=n, dt=dt, step_m=step_m, t0=started + 2)
    if shift is not None:
        shift["offset"] = pts[-1]["t"] + 50 - time.time()
    f = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=headers,
                      json={"points": pts})
    return f.status_code, f.json(), sid


# ===========================================================================
# تعادل و انعطاف — پروتکل تایمری با حکم ساعت سرور
# ===========================================================================

def test_validate_protocol_bounds_unit():
    p = PROTOCOLS["plank"]
    v = validate_protocol_session("plank", 1000.0, 1000.0 + p["min_s"])
    assert v["valid"] is True
    v2 = validate_protocol_session("plank", 1000.0, 1000.0 + p["min_s"] - 1)
    assert v2["valid"] is False and v2["reject_reason"] == "too_short"
    limit = 1000.0 + p["max_s"] * PROTOCOL_TOLERANCE_RATIO
    v3 = validate_protocol_session("plank", 1000.0, limit)
    assert v3["valid"] is True          # داخل حاشیهٔ فراموشی توقف
    v4 = validate_protocol_session("plank", 1000.0, limit + 1)
    assert v4["valid"] is False and v4["reject_reason"] == "too_long"
    v5 = validate_protocol_session("nope", 0.0, 60.0)
    assert v5["valid"] is False and v5["reject_reason"] == "unknown_protocol"


def test_protocols_endpoint_honest_label(live_env):
    h, _ = _login(live_env, 2201)
    r = live_env.get("/api/v1/zivan/protocols", headers=h)
    assert r.status_code == 200
    d = r.json()
    assert len(d["protocols"]) == len(PROTOCOLS)
    assert d["verdict_source"] == "server_clock"
    assert "تایمر سرور" in d["honesty_note"]


def test_protocol_session_valid_and_server_clock(live_env, shift):
    h, _ = _login(live_env, 2202)
    r = live_env.post("/api/v1/zivan/protocol-sessions", headers=h,
                      json={"hall": "balance", "protocol": "plank"})
    assert r.status_code == 200, r.text
    sid = r.json()["session"]["id"]
    assert r.json()["session"]["protocol"]["name"] == "پلانک"
    # ۶۰ ثانیه بعد (زمان فشرده) پایان — بدون هیچ عددی از کلاینت
    shift["offset"] = 60.0
    f = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": []})
    assert f.status_code == 200, f.text
    s = f.json()["session"]
    assert s["valid"] is True and s["reject_reason"] is None
    assert 55 <= s["duration_s"] <= 65
    assert s["steps"] == 0 and s["distance_m"] == 0
    assert f.json()["reward"] == 0 and f.json()["rewards_enabled"] is False


def test_protocol_too_short_rejected(live_env, shift):
    h, _ = _login(live_env, 2203)
    r = live_env.post("/api/v1/zivan/protocol-sessions", headers=h,
                      json={"hall": "balance", "protocol": "plank"})
    sid = r.json()["session"]["id"]
    shift["offset"] = 3.0    # فقط ۳ ثانیه — زیر کف ۱۵ ثانیه
    f = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": []})
    s = f.json()["session"]
    assert s["valid"] is False and s["reject_reason"] == "too_short"


def test_protocol_unknown_rejected_and_hall_guard(live_env):
    h, _ = _login(live_env, 2204)
    r1 = live_env.post("/api/v1/zivan/protocol-sessions", headers=h,
                       json={"hall": "balance", "protocol": "fly"})
    assert r1.status_code == 422
    r2 = live_env.post("/api/v1/zivan/protocol-sessions", headers=h,
                       json={"hall": "walking", "protocol": "plank"})
    assert r2.status_code == 422   # تالار GPS از مسیر پروتکل وارد نمی‌شود


def test_protocol_finish_idempotent(live_env, shift):
    h, _ = _login(live_env, 2205)
    r = live_env.post("/api/v1/zivan/protocol-sessions", headers=h,
                      json={"hall": "balance", "protocol": "breathing"})
    sid = r.json()["session"]["id"]
    shift["offset"] = 90.0
    f1 = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": []})
    f2 = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": []})
    assert f1.json()["session"]["valid"] is True
    assert f2.json()["already"] is True
    assert f2.json()["session"]["duration_s"] == f1.json()["session"]["duration_s"]


def test_one_open_session_across_halls(live_env, shift):
    h, _ = _login(live_env, 2206)
    r1 = live_env.post("/api/v1/zivan/protocol-sessions", headers=h,
                       json={"hall": "balance", "protocol": "plank"})
    assert r1.status_code == 200
    # GPS هم همان قید یک جلسهٔ باز را دارد
    r2 = live_env.post("/api/v1/zivan/sessions", headers=h,
                       json={"hall": "walking", "consent": True})
    assert r2.status_code == 409
    r3 = live_env.post("/api/v1/zivan/protocol-sessions", headers=h,
                       json={"hall": "balance", "protocol": "tree_pose"})
    assert r3.status_code == 409


# ===========================================================================
# تمرین گروهی — حلقهٔ تمرین
# ===========================================================================

def _create_workout(live_env, headers, title="حلقهٔ عصر", protocol="plank"):
    r = live_env.post("/api/v1/zivan/workouts", headers=headers,
                      json={"title": title, "protocol": protocol})
    assert r.status_code == 200, r.text
    return r.json()["workout"]


def test_workout_create_join_and_code(live_env):
    h1, _ = _login(live_env, 2210)
    h2, _ = _login(live_env, 2211)
    w = _create_workout(live_env, h1)
    assert len(w["invite_code"]) == 8
    assert w["members"][0]["display_name"]
    r = live_env.post("/api/v1/zivan/workouts/join", headers=h2,
                      json={"code": w["invite_code"].lower()})
    assert r.status_code == 200
    assert r.json()["workout"]["done_count"] == 0
    # عضویت تکراری رد می‌شود
    r2 = live_env.post("/api/v1/zivan/workouts/join", headers=h2,
                       json={"code": w["invite_code"]})
    assert r2.status_code == 409
    # کد ناموجود
    r3 = live_env.post("/api/v1/zivan/workouts/join", headers=h2, json={"code": "ZZZZ9999"})
    assert r3.status_code == 404


def test_workout_completion_from_valid_protocol_session(live_env, shift):
    h1, _ = _login(live_env, 2212)
    h2, _ = _login(live_env, 2213)
    w = _create_workout(live_env, h1, protocol="wall_sit")
    wid = w["id"]
    code = w["invite_code"]
    live_env.post("/api/v1/zivan/workouts/join", headers=h2, json={"code": code})

    # غیرعضو نمی‌تواند جلسهٔ متصل بسازد
    h3, _ = _login(live_env, 2214)
    r_for = live_env.post("/api/v1/zivan/protocol-sessions", headers=h3,
                          json={"hall": "group_training", "protocol": "wall_sit",
                                "workout_id": wid})
    assert r_for.status_code == 403

    # عضو دوم تمرین را کامل می‌کند
    r = live_env.post("/api/v1/zivan/protocol-sessions", headers=h2,
                      json={"hall": "group_training", "protocol": "wall_sit",
                            "workout_id": wid})
    assert r.status_code == 200, r.text
    sid = r.json()["session"]["id"]
    shift["offset"] = 30.0
    f = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h2, json={"points": []})
    assert f.json()["session"]["valid"] is True

    d = live_env.get(f"/api/v1/zivan/workouts/{wid}", headers=h1)
    pub = d.json()["workout"]
    assert pub["done_count"] == 1
    done_map = {m["account_id"]: m["done"] for m in pub["members"]}
    assert any(done_map.values()) and not all(done_map.values())


def test_workout_close_owner_only_and_nonmember_hides_code(live_env):
    h1, acc1 = _login(live_env, 2215)
    h2, _ = _login(live_env, 2216)
    w = _create_workout(live_env, h1)
    # غیرعضو کد دعوت را نمی‌بیند
    d = live_env.get(f"/api/v1/zivan/workouts/{w['id']}", headers=h2)
    assert d.status_code == 200
    assert "invite_code" not in d.json()["workout"]
    # غیرسازنده نمی‌تواند ببندد
    r2 = live_env.post(f"/api/v1/zivan/workouts/{w['id']}/close", headers=h2)
    assert r2.status_code == 403
    r3 = live_env.post(f"/api/v1/zivan/workouts/{w['id']}/close", headers=h1)
    assert r3.status_code == 200 and r3.json()["workout"]["status"] == "closed"


# ===========================================================================
# چالش دوستانه
# ===========================================================================

def test_challenge_flow_accept_settle_winner(live_env, shift):
    h1, _ = _login(live_env, 2220)
    h2, _ = _login(live_env, 2221)
    r = live_env.post("/api/v1/zivan/challenges", headers=h1,
                      json={"metric": "steps", "target": 1000, "hours": 2})
    assert r.status_code == 200, r.text
    cid = r.json()["challenge"]["id"]
    assert r.json()["challenge"]["status"] == "open"
    # پذیرفتن چالش خودش رد می‌شود
    own = live_env.post(f"/api/v1/zivan/challenges/{cid}/accept", headers=h1)
    assert own.status_code == 422
    acc = live_env.post(f"/api/v1/zivan/challenges/{cid}/accept", headers=h2)
    assert acc.status_code == 200 and acc.json()["challenge"]["status"] == "active"
    # پذیرش دوباره (حریف سوم) رد می‌شود
    h3, _ = _login(live_env, 2222)
    acc2 = live_env.post(f"/api/v1/zivan/challenges/{cid}/accept", headers=h3)
    assert acc2.status_code == 409

    # هر دو فعالیت ثبت می‌کنند؛ حریف دوم دو برابر قدم دارد
    sc1, d1, _ = do_valid_walk(live_env, h1, n=25, dt=15.0, shift=shift)   # ~۱۶۸۷ قدم
    assert sc1 == 200 and d1["session"]["valid"] is True
    shift["offset"] = 0.0
    sc2, d2, _ = do_valid_walk(live_env, h2, n=50, dt=15.0, shift=shift)   # ~۳۳۷۵ قدم
    assert d2["session"]["valid"] is True

    # تسویه پس از پایان بازه (زمان فشرده)
    shift["offset"] = 2 * 3600 + 10
    det = live_env.get(f"/api/v1/zivan/challenges/{cid}", headers=h1)
    ch = det.json()["challenge"]
    assert ch["status"] == "settled"
    assert ch["result"]["opponent"]["value"] > ch["result"]["creator"]["value"]
    assert ch["winner_account_id"] == ch["opponent"]["account_id"]
    # تسویه idempotent — نتیجه ثابت می‌ماند
    det2 = live_env.get(f"/api/v1/zivan/challenges/{cid}", headers=h1)
    assert det2.json()["challenge"]["result"] == ch["result"]


def test_challenge_invalid_sessions_never_count(live_env, shift):
    h1, _ = _login(live_env, 2223)
    h2, _ = _login(live_env, 2224)
    shift["offset"] = 0.0
    r = live_env.post("/api/v1/zivan/challenges", headers=h1,
                      json={"metric": "distance_m", "target": 500, "hours": 2})
    cid = r.json()["challenge"]["id"]
    live_env.post(f"/api/v1/zivan/challenges/{cid}/accept", headers=h2)
    # حریف جلسهٔ معتبر کوچک (۴۵۰ متر) ثبت می‌کند
    sc, d, sid = do_valid_walk(live_env, h2, n=10, dt=30.0, shift=shift)
    assert d["session"]["valid"] is True
    shift["offset"] = 0.0
    # سپس تلاش برای جلسهٔ جعلی با هفت پرش تلگرافی — سرور نامعتبر ثبت می‌کند
    r0 = live_env.post("/api/v1/zivan/sessions", headers=h2,
                       json={"hall": "walking", "consent": True})
    sid0 = r0.json()["session"]["id"]
    started0 = r0.json()["session"]["started_at"]
    pts = walk_points(n=5, t0=started0 + 2)
    t = pts[-1]["t"]
    for i in range(7):
        t += 20
        pts.append({"lat": 35.7 + i * 0.01, "lon": 51.4, "t": t, "acc": 8.0})
    shift["offset"] = t + 50 - time.time()
    f0 = live_env.post(f"/api/v1/zivan/sessions/{sid0}/finish", headers=h2, json={"points": pts})
    assert f0.json()["session"]["valid"] is False
    shift["offset"] = 2 * 3600 + 10
    det = live_env.get(f"/api/v1/zivan/challenges/{cid}", headers=h1)
    res = det.json()["challenge"]["result"]
    # فقط جلسهٔ معتبر شمرده شده؛ جلسهٔ جعلی هیچ اثری ندارد (۴۵۰ متر، نه بیشتر)
    assert res["opponent"]["distance_m"] == d["session"]["distance_m"]
    # برنده صاحبِ همان جلسهٔ معتبر است — جلسهٔ جعلی کسی را برنده نمی‌کند
    assert det.json()["challenge"]["winner_account_id"] == det.json()["challenge"]["opponent"]["account_id"]


def test_challenge_validation_rules(live_env):
    h1, _ = _login(live_env, 2225)
    h2, acc2 = _login(live_env, 2226)
    r = live_env.post("/api/v1/zivan/challenges", headers=h1,
                      json={"metric": "power", "target": 100, "hours": 2})
    assert r.status_code == 422                       # متریک نامعتبر
    r2 = live_env.post("/api/v1/zivan/challenges", headers=h1,
                       json={"metric": "steps", "target": 10, "hours": 2})
    assert r2.status_code == 422                      # هدف زیر کف
    r3 = live_env.post("/api/v1/zivan/challenges", headers=h1,
                       json={"metric": "steps", "target": 1000, "hours": 0})
    assert r3.status_code == 422                      # مدت زیر کف
    r4 = live_env.post("/api/v1/zivan/challenges", headers=h1,
                       json={"metric": "steps", "target": 1000, "hours": 2,
                             "opponent_account_id": acc2})
    assert r4.status_code == 200                      # چالش مستقیم مجاز
    assert r4.json()["challenge"]["status"] == "active"


# ===========================================================================
# مأموریت اجتماعی جمعی
# ===========================================================================

def test_social_seeded_and_contribute(live_env, shift):
    h1, _ = _login(live_env, 2230)
    h2, _ = _login(live_env, 2231)
    lst = live_env.get("/api/v1/zivan/social", headers=h1)
    assert lst.status_code == 200
    missions = lst.json()["missions"]
    assert len(missions) >= 2
    m = next(x for x in missions if x["metric"] == "distance_m")
    mid = m["id"]
    shift["offset"] = 0.0
    # جلسهٔ معتبر اول
    sc1, d1, sid1 = do_valid_walk(live_env, h1, n=25, dt=15.0, shift=shift)
    assert d1["session"]["valid"] is True
    r = live_env.post(f"/api/v1/zivan/social/{mid}/contribute", headers=h1,
                      json={"session_id": sid1})
    assert r.status_code == 200, r.text
    contributed = r.json()["contributed"]
    assert r.json()["mission"]["my_contribution"] == contributed
    # اهداي تکراری همان جلسه رد می‌شود (ضدتکرار)
    r2 = live_env.post(f"/api/v1/zivan/social/{mid}/contribute", headers=h1,
                       json={"session_id": sid1})
    assert r2.status_code == 409
    # جلسهٔ دیگری اهدا نمی‌شود
    h3, _ = _login(live_env, 2232)
    r3 = live_env.post(f"/api/v1/zivan/social/{mid}/contribute", headers=h3,
                       json={"session_id": sid1})
    assert r3.status_code == 404
    # جلسهٔ ناموجود
    r4 = live_env.post(f"/api/v1/zivan/social/{mid}/contribute", headers=h1,
                       json={"session_id": "nonsense"})
    assert r4.status_code == 404
    # پیشرفت کل = سهم جلسه‌های اهدا شده
    lst2 = live_env.get("/api/v1/zivan/social", headers=h2)
    m2 = next(x for x in lst2.json()["missions"] if x["id"] == mid)
    assert m2["progress"] == contributed


def test_social_contribution_rejects_invalid_session(live_env, shift):
    h1, _ = _login(live_env, 2233)
    missions = live_env.get("/api/v1/zivan/social", headers=h1).json()["missions"]
    mid = missions[0]["id"]
    # جلسهٔ زیر حداقل (۲۰ متر < ۳۰ متر) نامعتبر است و اهدا نمی‌شود
    sc, d, sid = do_valid_walk(live_env, h1, n=2, dt=30.0, step_m=10.0, shift=shift)
    assert d["session"]["valid"] is False
    r = live_env.post(f"/api/v1/zivan/social/{mid}/contribute", headers=h1,
                      json={"session_id": sid})
    assert r.status_code == 422
    # جلسهٔ باز (پایان‌نیافته) هم رد می‌شود
    r0 = live_env.post("/api/v1/zivan/sessions", headers=h1,
                       json={"hall": "walking", "consent": True})
    sid_open = r0.json()["session"]["id"]
    r5 = live_env.post(f"/api/v1/zivan/social/{mid}/contribute", headers=h1,
                       json={"session_id": sid_open})
    assert r5.status_code == 422


# ===========================================================================
# مأموریت‌های روزانه و هفتگی
# ===========================================================================

def test_missions_list_and_progress(live_env, shift):
    h, _ = _login(live_env, 2240)
    lst = live_env.get("/api/v1/zivan/missions", headers=h)
    assert lst.status_code == 200
    d = lst.json()
    assert len(d["daily"]) == 4 and len(d["weekly"]) == 4
    assert all(m["progress"] == 0 and m["claimed"] is False for m in d["daily"] + d["weekly"])

    # یک پیاده‌روی معتبر → پیشرفت مأموریت‌های مسافت/قدم روزانه
    sc, data, sid = do_valid_walk(live_env, h, n=25, dt=15.0, shift=shift)
    assert data["session"]["valid"] is True
    lst2 = live_env.get("/api/v1/zivan/missions", headers=h)
    walk3k = next(m for m in lst2.json()["daily"] if m["code"] == "daily_walk_3k")
    assert walk3k["progress"] == data["session"]["distance_m"]
    assert walk3k["done"] is False           # ۱۱۲۵ متر < ۳۰۰۰ هدف

    # دعوای مأموریت ناکامل رد می‌شود
    r = live_env.post("/api/v1/zivan/missions/daily_walk_3k/claim", headers=h)
    assert r.status_code == 422


def test_mission_claim_idempotent_and_rewards_off(live_env, shift, monkeypatch):
    h, _ = _login(live_env, 2241)
    assert settings.zivan_rewards_enabled is False
    # ۳ جلسهٔ معتبر کوتاه جمعاً ≥ ۳۰۰۰ متر → مأموریت روزانه کامل
    total = 0
    for i in range(3):
        sc, data, sid = do_valid_walk(live_env, h, n=25, dt=15.0, shift=shift)
        total += data["session"]["distance_m"]
    assert total >= 3000
    r = live_env.post("/api/v1/zivan/missions/daily_walk_3k/claim", headers=h)
    assert r.status_code == 200, r.text
    assert r.json()["already"] is False
    assert r.json()["reward"] == 0           # پاداش خاموش است
    r2 = live_env.post("/api/v1/zivan/missions/daily_walk_3k/claim", headers=h)
    assert r2.status_code == 200 and r2.json()["already"] is True and r2.json()["reward"] == 0
    lst = live_env.get("/api/v1/zivan/missions", headers=h)
    walk3k = next(m for m in lst.json()["daily"] if m["code"] == "daily_walk_3k")
    assert walk3k["claimed"] is True


def test_invalid_session_never_counts_for_mission(live_env, shift):
    h, _ = _login(live_env, 2242)
    # جلسهٔ جعلی: هفت پرش تلگرافی → سرور نامعتبر ثبت می‌کند
    r = live_env.post("/api/v1/zivan/sessions", headers=h,
                      json={"hall": "walking", "consent": True})
    sid = r.json()["session"]["id"]
    started = r.json()["session"]["started_at"]
    pts = walk_points(n=30, t0=started + 2)
    t = pts[-1]["t"]
    for i in range(7):
        t += 20
        pts.append({"lat": 35.7 + i * 0.01, "lon": 51.4, "t": t, "acc": 8.0})
    shift["offset"] = t + 50 - time.time()
    f = live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": pts})
    assert f.json()["session"]["valid"] is False
    lst = live_env.get("/api/v1/zivan/missions", headers=h)
    walk3k = next(m for m in lst.json()["daily"] if m["code"] == "daily_walk_3k")
    assert walk3k["progress"] == 0           # هیچ نشتی از جلسهٔ نامعتبر


def test_balance_mission_counts_only_balance(live_env, shift):
    h, _ = _login(live_env, 2243)
    # پیاده‌روی روی مأموریت تعادل هیچ اثری ندارد
    do_valid_walk(live_env, h, n=25, dt=15.0, shift=shift)
    shift["offset"] = 0.0
    lst = live_env.get("/api/v1/zivan/missions", headers=h)
    bal = next(m for m in lst.json()["daily"] if m["code"] == "daily_balance_120s")
    assert bal["progress"] == 0
    # دو پلانک ۶۵ ثانیه‌ای → ۱۳۰ ثانیه (هر بار ساعت صفر می‌شود)
    for _ in range(2):
        shift["offset"] = 0.0
        r = live_env.post("/api/v1/zivan/protocol-sessions", headers=h,
                          json={"hall": "balance", "protocol": "plank"})
        sid = r.json()["session"]["id"]
        shift["offset"] = 65.0
        live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h, json={"points": []})
    lst2 = live_env.get("/api/v1/zivan/missions", headers=h)
    bal2 = next(m for m in lst2.json()["daily"] if m["code"] == "daily_balance_120s")
    assert bal2["progress"] >= 120 and bal2["done"] is True
    r3 = live_env.post("/api/v1/zivan/missions/daily_balance_120s/claim", headers=h)
    assert r3.status_code == 200


# ===========================================================================
# جام بزرگ سلامت
# ===========================================================================

def test_cup_ranks_by_transparent_formula(live_env, shift):
    h1, _ = _login(live_env, 2250)
    h2, _ = _login(live_env, 2251)
    h3, _ = _login(live_env, 2252)
    # نفر ۱: فقط پیاده‌روی (~۱۶۸۷ قدم)
    do_valid_walk(live_env, h1, n=25, dt=15.0, shift=shift)
    shift["offset"] = 0.0
    # نفر ۲: پیاده‌روی کمتر + تمرین تعادل ۶۵ ثانیه
    do_valid_walk(live_env, h2, n=15, dt=15.0, shift=shift)
    shift["offset"] = 0.0
    r = live_env.post("/api/v1/zivan/protocol-sessions", headers=h2,
                      json={"hall": "balance", "protocol": "plank"})
    sid = r.json()["session"]["id"]
    shift["offset"] = 65.0
    live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h2, json={"points": []})
    shift["offset"] = 0.0
    # نفر ۳: جلسهٔ جعلی با هفت پرش تلگرافی — نباید در جدول جام بنشیند
    r0 = live_env.post("/api/v1/zivan/sessions", headers=h3,
                       json={"hall": "running", "consent": True})
    sid0 = r0.json()["session"]["id"]
    started = r0.json()["session"]["started_at"]
    pts = walk_points(n=25, t0=started + 2)
    t = pts[-1]["t"]
    for i in range(7):
        t += 20
        pts.append({"lat": 35.7 + i * 0.01, "lon": 51.4, "t": t, "acc": 8.0})
    shift["offset"] = t + 50 - time.time()
    f0 = live_env.post(f"/api/v1/zivan/sessions/{sid0}/finish", headers=h3, json={"points": pts})
    assert f0.json()["session"]["valid"] is False
    shift["offset"] = 0.0

    cup = live_env.get("/api/v1/zivan/cup", headers=h1)
    assert cup.status_code == 200
    d = cup.json()
    assert "قدم معتبر" in d["formula"]
    ids = [row["account_id"] for row in d["top"]]
    # نفر سوم (فقط جلسهٔ نامعتبر) در جدول نیست
    acc3 = None
    # سنجش فرمول: رتبهٔ ۱ باید بیشترین امتیاز را داشته باشد
    assert d["top"][0]["score"] >= d["top"][-1]["score"]
    scores = {row["rank"]: row["score"] for row in d["top"]}
    for i in range(1, len(scores)):
        assert scores[i] >= scores[i + 1]
    # امتیاز من = قدم + ثانیهٔ تعادل (مطابق فرمول)
    mine = d["me"]
    assert mine["score"] == cup_score(mine["steps"], mine["balance_s"])


def test_cup_me_rank_when_in_top(live_env, shift):
    h1, _ = _login(live_env, 2253)
    do_valid_walk(live_env, h1, n=25, dt=15.0, shift=shift)
    cup = live_env.get("/api/v1/zivan/cup", headers=h1)
    d = cup.json()
    assert d["me"]["rank"] is not None
    assert d["me"]["steps"] > 0


# ===========================================================================
# لحظه‌ها — گالری خصوصی
# ===========================================================================

def test_moment_upload_image_and_owner_only(live_env):
    h1, _ = _login(live_env, 2260)
    h2, _ = _login(live_env, 2261)
    b64 = base64.b64encode(PNG_BYTES).decode()
    r = live_env.post("/api/v1/zivan/moments", headers=h1,
                      json={"image": b64, "caption": "آوای جنگل"})
    assert r.status_code == 200, r.text
    m = r.json()["moment"]
    assert m["content_type"] == "image/png" and m["size_bytes"] == len(PNG_BYTES)
    # گالری من
    lst = live_env.get("/api/v1/zivan/moments/mine", headers=h1)
    assert lst.json()["moments"][0]["caption"] == "آوای جنگل"
    # دریافت تصویر فقط توسط صاحب
    img = live_env.get(m["image_url"], headers=h1)
    assert img.status_code == 200 and img.content == PNG_BYTES
    assert img.headers["content-type"].startswith("image/png")
    other = live_env.get(m["image_url"], headers=h2)
    assert other.status_code == 404            # حریم خصوصی: فقط صاحب
    # حذف توسط دیگری رد می‌شود
    rdel = live_env.delete(f"/api/v1/zivan/moments/{m['id']}", headers=h2)
    assert rdel.status_code == 404
    rdel2 = live_env.delete(f"/api/v1/zivan/moments/{m['id']}", headers=h1)
    assert rdel2.status_code == 200
    lst2 = live_env.get("/api/v1/zivan/moments/mine", headers=h1)
    assert lst2.json()["moments"] == []


def test_moment_forged_and_oversized_rejected(live_env):
    h, _ = _login(live_env, 2262)
    fake = base64.b64encode(b"GIF89a this is not an image at all ......" + b"x" * 80).decode()
    r = live_env.post("/api/v1/zivan/moments", headers=h, json={"image": fake})
    assert r.status_code == 415                # امضای بایت ملاک است
    big = base64.b64encode(b"\xff\xd8\xff\xe0" + b"\x00" * 1_600_000).decode()
    r2 = live_env.post("/api/v1/zivan/moments", headers=h, json={"image": big})
    assert r2.status_code == 413
    notb64 = live_env.post("/api/v1/zivan/moments", headers=h,
                           json={"image": "not!!base64!!not!!base64!!"})
    assert notb64.status_code == 422


def test_moment_unit_magic_detection():
    assert moment_image_type(PNG_BYTES[:16]) == "image/png"
    assert moment_image_type(JPEG_BYTES[:16]) == "image/jpeg"
    assert moment_image_type(b"GIF89a..............") is None
    assert moment_image_type(b"") is None


# ===========================================================================
# رقابت گروهی — گروه‌ها و مسابقهٔ قدم
# ===========================================================================

def test_group_create_join_ranking_race(live_env, shift):
    h1, _ = _login(live_env, 2270)
    h2, _ = _login(live_env, 2271)
    h3, _ = _login(live_env, 2272)
    g = live_env.post("/api/v1/zivan/groups", headers=h1,
                      json={"name": "همسفران سبز"}).json()["group"]
    code = g["invite_code"]
    live_env.post("/api/v1/zivan/groups/join", headers=h2, json={"code": code.lower()})
    live_env.post("/api/v1/zivan/groups/join", headers=h3, json={"code": code})
    # عضویت تکراری
    dup = live_env.post("/api/v1/zivan/groups/join", headers=h2, json={"code": code})
    assert dup.status_code == 409

    # ساخت مسابقهٔ قدم ۱ روزه
    race = live_env.post(f"/api/v1/zivan/groups/{g['id']}/races", headers=h1,
                         json={"title": "نبرد قدم هفته", "duration": "1d"})
    assert race.status_code == 200, race.text
    rid = race.json()["race"]["id"]
    # مسابقهٔ دوم فعال رد می‌شود
    race2 = live_env.post(f"/api/v1/zivan/groups/{g['id']}/races", headers=h2,
                          json={"title": "دوم", "duration": "1d"})
    assert race2.status_code == 409
    # غیرعضو نمی‌سازد
    h4, _ = _login(live_env, 2273)
    race3 = live_env.post(f"/api/v1/zivan/groups/{g['id']}/races", headers=h4,
                          json={"title": "بیرونی", "duration": "1d"})
    assert race3.status_code == 403

    # فعالیت‌ها: نفر۲ بیشترین، نفر۱ وسط، نفر۳ جلسهٔ نامعتبر
    do_valid_walk(live_env, h2, n=50, dt=15.0, shift=shift)   # ~۳۳۷۵ قدم
    shift["offset"] = 0.0
    do_valid_walk(live_env, h1, n=25, dt=15.0, shift=shift)   # ~۱۶۸۷ قدم
    shift["offset"] = 0.0
    do_valid_walk(live_env, h3, n=10, dt=30.0, shift=shift)   # ~۶۷۵ قدم
    shift["offset"] = 0.0

    st = live_env.get(f"/api/v1/zivan/races/{rid}", headers=h1)
    d = st.json()["race"]
    assert d["status"] == "active"
    ranks = [(x["rank"], x["display_name"]) for x in d["standings"]]
    assert d["standings"][0]["steps"] > d["standings"][1]["steps"] > d["standings"][2]["steps"]
    assert d["me"]["rank"] == 2

    # پایان خودکار پس از مهلت و تعیین برنده
    shift["offset"] = 86400 + 10
    fin = live_env.get(f"/api/v1/zivan/races/{rid}", headers=h1).json()["race"]
    assert fin["status"] == "finished"
    assert fin["winner"]["account_id"] == fin["standings"][0]["account_id"]
    # بدون ثبت تکراری — جلسه‌ها یک‌بار در جمع آمده‌اند
    assert fin["standings"][0]["steps"] + fin["standings"][1]["steps"] + fin["standings"][2]["steps"] > 5000


def test_group_leave_rules(live_env):
    h1, _ = _login(live_env, 2274)
    h2, _ = _login(live_env, 2275)
    g = live_env.post("/api/v1/zivan/groups", headers=h1, json={"name": "گروه آزمون"}).json()["group"]
    live_env.post("/api/v1/zivan/groups/join", headers=h2, json={"code": g["invite_code"]})
    # صاحب با عضوِ موجود نمی‌تواند خارج شود
    r = live_env.post(f"/api/v1/zivan/groups/{g['id']}/leave", headers=h1)
    assert r.status_code == 409
    # عضو عادی خارج می‌شود
    r2 = live_env.post(f"/api/v1/zivan/groups/{g['id']}/leave", headers=h2)
    assert r2.status_code == 200
    # خروج دوباره رد می‌شود
    r3 = live_env.post(f"/api/v1/zivan/groups/{g['id']}/leave", headers=h2)
    assert r3.status_code == 404
    # حالا صاحبِ تنها گروه را با خروج منحل می‌کند
    r4 = live_env.post(f"/api/v1/zivan/groups/{g['id']}/leave", headers=h1)
    assert r4.status_code == 200
    mine = live_env.get("/api/v1/zivan/groups/mine", headers=h1)
    assert mine.json()["groups"] == []


def test_group_nonmember_hides_invite_code_and_sees_no_race(live_env):
    h1, _ = _login(live_env, 2276)
    h2, _ = _login(live_env, 2277)
    g = live_env.post("/api/v1/zivan/groups", headers=h1, json={"name": "خصوصی"}).json()["group"]
    d = live_env.get(f"/api/v1/zivan/groups/{g['id']}", headers=h2)
    pub = d.json()["group"]
    assert "invite_code" not in pub
    assert pub["you_in"] is False


def test_invite_code_alphabet():
    import secrets as _s
    rng = _s.SystemRandom()
    codes = {make_invite_code(rng) for _ in range(50)}
    assert len(codes) == 50 and all(len(c) == 8 for c in codes)
    assert all(set(c) <= set("ABCDEFGHJKMNPQRSTUVWXYZ23456789") for c in codes)


# ===========================================================================
# تاریخچهٔ فعالیت
# ===========================================================================

def test_history_daily_totals_and_privacy(live_env, shift):
    h1, _ = _login(live_env, 2280)
    do_valid_walk(live_env, h1, n=25, dt=15.0, shift=shift)
    shift["offset"] = 0.0
    r = live_env.post("/api/v1/zivan/protocol-sessions", headers=h1,
                      json={"hall": "balance", "protocol": "plank"})
    sid = r.json()["session"]["id"]
    shift["offset"] = 65.0
    live_env.post(f"/api/v1/zivan/sessions/{sid}/finish", headers=h1, json={"points": []})

    hist = live_env.get("/api/v1/zivan/history?days=7", headers=h1)
    assert hist.status_code == 200
    d = hist.json()
    assert len(d["days"]) >= 1
    day = d["days"][0]
    assert day["valid_sessions"] == 2
    assert day["distance_m"] > 1000 and day["balance_s"] >= 65
    # تاریخچه هیچ مختصاتی ندارد
    assert "lat" not in hist.text and "lon" not in hist.text
