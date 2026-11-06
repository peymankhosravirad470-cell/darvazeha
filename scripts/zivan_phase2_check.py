#!/usr/bin/env python3
"""آزمون واقعی سرتاسری زیوان فاز ۲ — سرور واقعی (uvicorn)، مرورگر واقعی (Playwright).

بخش A — سناریوی چندنفرهٔ کامل با کلاینت پروتکلی (REST واقعی):
        گروه + کد دعوت، مسابقهٔ قدم گروهی با جدول زنده، چالش دوستانه،
        حلقهٔ تمرین با پروتکل تایمری واقعی (۱۶ ثانیهٔ واقعی)، مأموریت جمعی،
        مأموریت روزانه و دعوای پاداش، جام هفتگی، لحظه‌ها (حریم خصوصی عکس)،
        تاریخچه، و ضدتقلب (جلسهٔ جعلی، اهدا تکراری، عضویت تکراری).
بخش B — ده تالار در مرورگر Galaxy S25 (۴۱۲×۸۶۰): ورود واقعی با initData،
        GPS شبیه‌سازی‌شدهٔ واقع‌گرایانه، تایمر واقعی پلانک، ساخت گروه/مسابقه
        از UI، ساخت چالش از UI، آپلود عکس واقعی از input و حذف آن.

هر خط PASS/FAIL یک ادعای واقعی است؛ هیچ نتیجه‌ای جعل نمی‌شود.
"""
import asyncio
import base64
import hashlib
import hmac
import json
import os
import struct
import subprocess
import sys
import time
import zlib
from pathlib import Path
from urllib.parse import urlencode

import httpx

ROOT = Path(__file__).resolve().parents[1]
PORT = 8913
BASE = f"http://127.0.0.1:{PORT}"
BOT = "zivan-phase2-bot-token"
SECRET = "zivan-phase2-session-secret-32-chars"
DB = "/tmp/zivan_p2.db"
EVIDENCE = ROOT / "download" / "evidence"
EVIDENCE.mkdir(parents=True, exist_ok=True)

results = []


def check(name, cond, extra=""):
    results.append((name, bool(cond)))
    print(("PASS | " if cond else "FAIL | ") + name + (f" | {extra}" if extra and not cond else ""),
          flush=True)
    return bool(cond)


def summary():
    total = len(results)
    ok = sum(1 for _, c in results if c)
    print(f"\n=== جمع‌بندی زیوان فاز ۲: {ok}/{total} PASS ===", flush=True)
    return 0 if ok == total else 1


def make_init_data(uid, name):
    values = {
        "auth_date": str(int(time.time())),
        "query_id": f"zv{uid}",
        "user": json.dumps({"id": uid, "first_name": name}, separators=(",", ":")),
    }
    check_str = "\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret = hmac.new(BOT.encode(), b"WebAppData", hashlib.sha256).digest()
    values["hash"] = hmac.new(secret, check_str.encode(), hashlib.sha256).hexdigest()
    return urlencode(values)


def make_png(w=64, h=48, rgb=(60, 160, 90)) -> bytes:
    """PNG واقعی با zlib — برای آپلود و آزمون مرورگر."""
    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
    raw = b"".join(b"\x00" + bytes(rgb) * w for _ in range(h))
    return (b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(raw))
            + chunk(b"IEND", b""))


def start_server():
    if os.path.exists(DB):
        os.remove(DB)
    env = dict(os.environ,
               DATABASE_URL=f"sqlite:///{DB}",
               BALE_BOT_TOKEN=BOT, SESSION_SECRET=SECRET, APP_ENV="development")
    subprocess.run([sys.executable, "-m", "alembic", "upgrade", "head"],
                   cwd=ROOT / "backend", env=env, check=True, capture_output=True)
    log = open("/tmp/zivan_p2_uv.log", "w")
    proc = subprocess.Popen([sys.executable, "-m", "uvicorn", "app.main:app",
                             "--port", str(PORT)],
                            cwd=ROOT / "backend", env=env, stdout=log,
                            stderr=subprocess.STDOUT)
    for _ in range(60):
        try:
            if httpx.get(BASE + "/health", timeout=1).status_code == 200:
                return proc
        except Exception:
            time.sleep(0.3)
    proc.kill()
    raise RuntimeError("سرور بالا نیامد — لاگ: /tmp/zivan_p2_uv.log")


class Pc:
    """کلاینت پروتکلی مستقل (یک «دستگاه» با حساب واقعی)."""

    def __init__(self, uid, name):
        self.uid, self.name = uid, name
        self.token = None
        self.account_id = None

    def login(self):
        r = httpx.post(BASE + "/api/v1/auth/bale",
                       json={"init_data": make_init_data(self.uid, self.name)}, timeout=10)
        d = r.json()
        self.token = d["access_token"]
        self.account_id = d["player"]["id"]

    def api(self, method, path, body=None):
        resp = httpx.request(method, BASE + "/api/v1" + path, json=body,
                             headers={"Authorization": "Bearer " + self.token}, timeout=15)
        try:
            return resp.status_code, resp.json()
        except Exception:
            return resp.status_code, {}


def walk_points(n, dt, step_m, started_server, lat=35.70, lon=51.40, acc=8.0):
    dlat = step_m / 111_320.0
    t0 = started_server + 2
    pts = [{"lat": lat, "lon": lon, "t": t0, "acc": acc}]
    for i in range(1, n + 1):
        pts.append({"lat": lat + dlat * i, "lon": lon, "t": t0 + dt * i, "acc": acc})
    return pts


def do_walk(c: Pc, hall, n, dt=15.0, step_m=45.0):
    st, d = c.api("POST", "/zivan/sessions", {"hall": hall, "consent": True})
    if st != 200:
        return st, d, None
    sid = d["session"]["id"]
    pts = walk_points(n, dt, step_m, d["session"]["started_at"])
    st2, d2 = c.api("POST", f"/zivan/sessions/{sid}/finish", {"points": pts})
    return st2, d2, sid


# ═══════════════════════════ بخش A: سناریوی چندنفره ═══════════════════════════

def part_a():
    print("\n── بخش A — سناریوی چندنفرهٔ REST واقعی ──", flush=True)
    a, b, c3 = Pc(7301, "آرش"), Pc(7302, "بهنام"), Pc(7303, "سیما")
    d4 = Pc(7309, "ناشناس")
    for x in (a, b, c3, d4):
        x.login()
        check(f"ورود واقعی {x.name}", bool(x.token))

    st, halls = a.api("GET", "/zivan/halls")
    live = [h for h in halls.get("halls", []) if h["status"] == "live"]
    check("همهٔ ۱۰ تالار زیوان «فعال» هستند", st == 200 and len(live) == 10, str(len(live)))

    st, protos = a.api("GET", "/zivan/protocols")
    check("۱۰ پروتکل تایمری با برچسب صادقانهٔ «تایمر سرور»",
          st == 200 and len(protos.get("protocols", [])) == 10
          and protos.get("verdict_source") == "server_clock")

    # --- گروه + کد دعوت + مسابقهٔ قدم ---
    st, g = a.api("POST", "/zivan/groups", {"name": "همسفران سبز"})
    code = g["group"]["invite_code"]
    check("ساخت گروه با کد دعوت ۸ نویسه‌ای", st == 200 and len(code) == 8)
    st1, _ = b.api("POST", "/zivan/groups/join", {"code": code.lower()})
    st2, _ = c3.api("POST", "/zivan/groups/join", {"code": code})
    check("پیوستن دو نفر با کد (حتی با حروف کوچک)", st1 == 200 and st2 == 200)
    st3, _ = b.api("POST", "/zivan/groups/join", {"code": code})
    check("عضویت تکراری رد می‌شود (۴۰۹)", st3 == 409)
    gid = g["group"]["id"]
    st, pub = d4.api("GET", f"/zivan/groups/{gid}")
    check("غیرعضو کد دعوت را نمی‌بیند", st == 200 and "invite_code" not in pub["group"])

    st, r = a.api("POST", f"/zivan/groups/{gid}/races",
                  {"title": "نبرد قدم افتتاحیه", "duration": "1d"})
    rid = r["race"]["id"]
    check("مسابقهٔ قدم گروهی ۱ روزه شروع شد", st == 200 and r["race"]["status"] == "active")
    st4, _ = a.api("POST", f"/zivan/groups/{gid}/races",
                   {"title": "دوم", "duration": "1d"})
    check("مسابقهٔ دومِ هم‌زمان رد می‌شود", st4 == 409)

    # --- چالش دوستانه: ساخت و پذیرش «قبل از» فعالیت تا بازهٔ چالش فعالیت‌ها را بگیرد ---
    st, ch = a.api("POST", "/zivan/challenges",
                   {"metric": "steps", "target": 1000, "hours": 1})
    cid = ch["challenge"]["id"]
    check("چالش دوستانه ساخته شد (در انتظار حریف)", st == 200 and ch["challenge"]["status"] == "open")
    st_own, _ = a.api("POST", f"/zivan/challenges/{cid}/accept")
    check("پذیرفتن چالشِ خودش رد می‌شود", st_own == 422)
    st_acc, ch2 = b.api("POST", f"/zivan/challenges/{cid}/accept")
    check("بهنام چالش را پذیرفت → فعال", st_acc == 200 and ch2["challenge"]["status"] == "active")
    st3rd, _ = c3.api("POST", f"/zivan/challenges/{cid}/accept")
    check("حریف سوم رد می‌شود", st3rd == 409)

    # فعالیت واقعی فشرده (نقاط هر ۱ ثانیه — داخل پنجرهٔ زمانی سرور):
    # بهنام دو برابر آرش
    _, d_a, _ = do_walk(a, "walking", n=20, dt=1.0, step_m=3.0)   # ~۶۰ متر ≈ ۸۳ قدم
    check("آرش پیاده‌روی معتبر ثبت کرد", d_a["session"]["valid"] is True)
    _, d_b, _ = do_walk(b, "walking", n=40, dt=1.0, step_m=3.0)   # ~۱۲۰ متر ≈ ۱۶۶ قدم
    check("بهنام پیاده‌روی معتبرِ بیشتر ثبت کرد", d_b["session"]["valid"] is True)
    st_c, d_c, _ = do_walk(c3, "walking", n=10, dt=1.0, step_m=3.0)  # ~۳۰ متر معتبر
    check("سیما پیاده‌روی کوچک معتبر ثبت کرد", d_c["session"]["valid"] is True)

    st, race = b.api("GET", f"/zivan/races/{rid}")
    s = race["race"]["standings"]
    check("جدول زندهٔ مسابقه درست است (بهنام > آرش > سیما)",
          st == 200 and s[0]["steps"] > s[1]["steps"] > s[2]["steps"]
          and s[0]["rank"] == 1, json.dumps(s, ensure_ascii=False)[:120])
    check("بدون مختصات در جدول مسابقه", "lat" not in json.dumps(race) and "lon" not in json.dumps(race))

    # جلسهٔ جعلی سیما: هفت پرش تلگرافی «داخل پنجرهٔ زمانی» — سرور باید رد کند
    st0, s0 = c3.api("POST", "/zivan/sessions", {"hall": "walking", "consent": True})
    pts = walk_points(5, 5.0, 3.0, s0["session"]["started_at"])   # ۲۵ ثانیه پیاده‌روی آرام
    t = pts[-1]["t"]
    for i in range(7):
        t += 5
        pts.append({"lat": 35.7 + i * 0.01, "lon": 51.4, "t": t, "acc": 8.0})  # پرش ۱٫۱km/۵ث
    _, f0 = c3.api("POST", f"/zivan/sessions/{s0['session']['id']}/finish", {"points": pts})
    check("جلسهٔ جعلی (پرش تلگرافی) از سرور رد شد", f0["session"]["valid"] is False)
    _, race2 = b.api("GET", f"/zivan/races/{rid}")
    s2 = {x["account_id"]: x["steps"] for x in race2["race"]["standings"]}
    check("جلسهٔ جعلی هیچ قدمی به مسابقه اضافه نکرد",
          s2.get(c3.account_id) == d_c["session"]["steps"])

    _, ch3 = b.api("GET", f"/zivan/challenges/{cid}")
    live = ch3["challenge"].get("live") or {}
    check("جدول زندهٔ چالش: بهنام جلوتر از آرش",
          live.get("opponent", {}).get("value", 0) > live.get("creator", {}).get("value", 0),
          json.dumps(live, ensure_ascii=False)[:120])

    # --- حلقهٔ تمرین (پروتکل واقعی ۱۶ ثانیه) ---
    st, w = a.api("POST", "/zivan/workouts",
                  {"title": "پلانک افتتاحیه", "protocol": "plank"})
    wid, wcode = w["workout"]["id"], w["workout"]["invite_code"]
    check("حلقهٔ تمرین با کد دعوت ساخته شد", st == 200 and len(wcode) == 8)
    b.api("POST", "/zivan/workouts/join", {"code": wcode})
    st_f, _ = c3.api("POST", "/zivan/protocol-sessions",
                     {"hall": "group_training", "protocol": "plank", "workout_id": wid})
    check("غیرعضو نمی‌تواند جلسهٔ حلقه بسازد", st_f == 403)
    st_ps, ps = b.api("POST", "/zivan/protocol-sessions",
                      {"hall": "group_training", "protocol": "plank", "workout_id": wid})
    check("بهنام جلسهٔ پروتکلِ متصل به حلقه شروع کرد", st_ps == 200)
    time.sleep(16)   # تایمر واقعی — حداقل پلانک ۱۵ ثانیه
    _, pf = b.api("POST", f"/zivan/sessions/{ps['session']['id']}/finish", {"points": []})
    check("حکم سرور: پلانک ۱۶ ثانیه‌ای معتبر", pf["session"]["valid"] is True
          and 15 <= pf["session"]["duration_s"] <= 20)
    _, wv = a.api("GET", f"/zivan/workouts/{wid}")
    check("پیشرفت حلقه: ۱ از ۲ نفر انجام داد", wv["workout"]["done_count"] == 1)

    # جلسهٔ خیلی کوتاه باید رد شود
    st_ps2, ps2 = a.api("POST", "/zivan/protocol-sessions",
                        {"hall": "balance", "protocol": "plank"})
    _, pf2 = a.api("POST", f"/zivan/sessions/{ps2['session']['id']}/finish", {"points": []})
    check("پلانک ۰ ثانیه‌ای رد شد (too_short)", pf2["session"]["valid"] is False
          and pf2["session"]["reject_reason"] == "too_short")

    # --- مأموریت اجتماعی جمعی ---
    st, soc = b.api("GET", "/zivan/social")
    mission = next(m for m in soc["missions"] if m["metric"] == "distance_m")
    st1, c1 = b.api("POST", f"/zivan/social/{mission['id']}/contribute",
                    {"session_id": d_b["session"]["id"]})
    check("بهنام جلسهٔ معتبرش را به مأموریت جمعی اهدا کرد",
          st1 == 200 and c1["contributed"] == d_b["session"]["distance_m"])
    st2, _ = b.api("POST", f"/zivan/social/{mission['id']}/contribute",
                   {"session_id": d_b["session"]["id"]})
    check("اهداي تکراری همان جلسه رد می‌شود", st2 == 409)
    st3, _ = c3.api("POST", f"/zivan/social/{mission['id']}/contribute",
                    {"session_id": d_b["session"]["id"]})
    check("جلسهٔ دیگران قابل اهدا نیست", st3 == 404)
    st4, _ = c3.api("POST", f"/zivan/social/{mission['id']}/contribute",
                    {"session_id": d_c["session"]["id"]})
    check("جلسهٔ معتبرِ خودِ سیما پذیرفته شد", st4 == 200)

    # --- مأموریت روزانه: پیشرفت فقط از جلسهٔ معتبر؛ دعوای ناکامل رد می‌شود ---
    # (تسویهٔ مأموریت ۳ کیلومتری با زمان فشرده در آزمون‌های pytest پوشش داده شده)
    st, mis = a.api("GET", "/zivan/missions")
    w3k = next(m for m in mis["daily"] if m["code"] == "daily_walk_3k")
    check("پیشرفت مأموریت روزانه دقیقاً برابر مسافت معتبر جلسه",
          w3k["progress"] == d_a["session"]["distance_m"] and w3k["done"] is False)
    st_cl, _ = a.api("POST", "/zivan/missions/daily_walk_3k/claim")
    check("دعوای مأموریتِ ناکامل رد می‌شود (۴۲۲)", st_cl == 422)
    bal_m = next(m for m in mis["daily"] if m["code"] == "daily_balance_120s")
    check("مأموریت تعادل: پلانک ردشدهٔ آرش هیچ ثانیه‌ای اضافه نمی‌کند",
          bal_m["progress"] == 0)

    # --- جام هفتگی ---
    st, cup = b.api("GET", "/zivan/cup")
    top = {x["account_id"]: x["score"] for x in cup["top"]}
    check("امتیاز جام = قدم + ثانیهٔ تمرین (بهنام بالاتر از آرش)",
          st == 200 and top.get(b.account_id, 0) > top.get(a.account_id, 0)
          and top.get(b.account_id, 0) == d_b["session"]["steps"] + pf["session"]["duration_s"],
          json.dumps(cup.get("top", []), ensure_ascii=False)[:160])

    # --- لحظه‌ها (حریم خصوصی) ---
    png = make_png()
    st, mo = a.api("POST", "/zivan/moments",
                   {"image": base64.b64encode(png).decode(), "caption": "آوای جنگل"})
    check("آپلود عکس واقعی PNG", st == 200 and mo["moment"]["content_type"] == "image/png")
    img_url = mo["moment"]["image_url"]
    r_own = httpx.get(BASE + img_url, headers={"Authorization": "Bearer " + a.token}, timeout=10)
    r_oth = httpx.get(BASE + img_url, headers={"Authorization": "Bearer " + b.token}, timeout=10)
    check("عکس فقط برای صاحبش قابل دریافت است",
          r_own.status_code == 200 and r_own.content == png and r_oth.status_code == 404)
    st_f, _ = a.api("POST", "/zivan/moments",
                    {"image": base64.b64encode(b"GIF89a" + b"x" * 120).decode()})
    check("فایل جعلی با امضای GIF رد می‌شود", st_f == 415)
    st_big, _ = a.api("POST", "/zivan/moments",
                      {"image": base64.b64encode(b"\xff\xd8\xff\xe0" + b"\x00" * 1_600_000).decode()})
    check("عکس بزرگ‌تر از ۱٫۵MB رد می‌شود", st_big == 413)
    st_del, _ = a.api("DELETE", f"/zivan/moments/{mo['moment']['id']}")
    check("حذف عکس توسط صاحب", st_del == 200)

    # --- تاریخچه ---
    st, hist = a.api("GET", "/zivan/history?days=7")
    check("تاریخچهٔ ۷ روزه بدون هیچ مختصاتی",
          st == 200 and len(hist["days"]) >= 1 and "lat" not in json.dumps(hist)
          and "lon" not in json.dumps(hist))


# ═══════════════════════ بخش B: ده تالار در مرورگر واقعی ═══════════════════════

GPS_SIM = """
window.__VIVA_SIM__ = { speed: %f };
(function () {
  var lat0 = 35.70, lon0 = 51.40, n = 0;
  function fix() {
    n += 1;
    // هر تیک ۰٫۹ ثانیه؛ گام عرض = سرعت(م/ث) × ۰٫۹ / ۱۱۱۳۲۰ درجه
    return { coords: { latitude: lat0 + n * 0.0000081 * window.__VIVA_SIM__.speed,
                       longitude: lon0, accuracy: 8, altitude: null, heading: null, speed: null },
             timestamp: Date.now() };
  }
  navigator.geolocation.watchPosition = function (ok, err, opts) {
    return setInterval(function () { ok(fix()); }, 900);
  };
  navigator.geolocation.clearWatch = function (id) { clearInterval(id); };
  navigator.geolocation.getCurrentPosition = function (ok) { ok(fix()); };
})();
"""


def part_b():
    print("\n── بخش B — ده تالار در مرورگر Galaxy S25 (۴۱۲×۸۶۰) ──", flush=True)
    from playwright.sync_api import sync_playwright

    u_browser, u_second = Pc(7401, "داریوش"), Pc(7402, "الهام")
    u_browser.login()
    u_second.login()

    dialogs = []
    def on_dialog(dlg):
        dialogs.append(dlg.type)
        try:
            if dlg.type == "prompt":
                dlg.accept("نبرد قدمِ دوستان" if dlg.message.startswith("عنوان") else "1d")
            elif dlg.type == "confirm":
                dlg.accept(True)
            else:
                dlg.accept()
        except Exception:
            pass

    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context(viewport={"width": 412, "height": 860},
                                  device_scale_factor=2, is_mobile=True, has_touch=True)
        ctx.grant_permissions(["geolocation"])
        ctx.add_init_script(
            f"window.__VIVA_DEV_INITDATA__ = {json.dumps(make_init_data(7401, 'داریوش'))};")
        ctx.add_init_script(GPS_SIM % 3.0)
        page = ctx.new_page()
        page.on("dialog", on_dialog)
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))

        def shot(name):
            page.screenshot(path=str(EVIDENCE / name), full_page=True)

        # --- ۱) تالار پیاده‌روی: رضایت → GPS شبیه‌سازی → حکم سرور → مسیر ---
        page.goto(f"{BASE}/viva/zivan/hall.html?id=walking", wait_until="networkidle")
        page.wait_for_timeout(800)
        check("پیاده‌روی: کارت رضایت صریح دیده می‌شود", page.locator("#consent").is_visible())
        page.locator("#consent").check()
        page.locator("#btn-start").click()
        page.wait_for_timeout(14000)   # ~۴۲ متر با سرعت ۳ m/s شبیه‌سازی
        page.locator("#btn-finish").click()
        page.wait_for_timeout(2500)
        verdict = page.locator("#result-card").inner_text()
        check("پیاده‌روی: حکم سرور «فعالیت معتبر» آمد", "فعالیت معتبر" in verdict, verdict[:80])
        check("پیاده‌روی: مسیر شخصی رسم شد", page.locator("#path-card").is_visible())
        shot("zivan_walking_mobile.png")

        # --- ۲) دنیای زیوان: ۱۰ تالار فعال + مأموریت‌ها + تاریخچه (پس از پیاده‌روی) ---
        page.goto(f"{BASE}/viva/zivan/index.html", wait_until="networkidle")
        page.wait_for_timeout(1500)
        halls = page.locator(".hall")
        active_tags = page.locator(".hall .tag.live")
        check("دنیای زیوان: ۱۰ تالار رندر شد", halls.count() == 10, str(halls.count()))
        check("هر ۱۰ تالار برچسب «فعال» دارند", active_tags.count() == 10, str(active_tags.count()))
        missions = page.locator("#missions .mission")
        check("مأموریت‌های روزانه/هفتگی رندر شدند (۸ مأموریت)", missions.count() == 8,
              str(missions.count()))
        hist = page.locator("#hist .hist-line")
        check("تاریخچهٔ ۷ روز: جلسهٔ معتبر امروز دیده می‌شود", hist.count() >= 1, str(hist.count()))
        check("بدون خطای جاوااسکریپت در صفحهٔ اصلی", not errors, "; ".join(errors[:2]))
        shot("zivan_world_mobile.png")

        # --- ۳) تالار دویدن (همان موتور، این بار با آزمون مرورگر) ---
        ctx2 = browser.new_context(viewport={"width": 412, "height": 860},
                                   device_scale_factor=2, is_mobile=True, has_touch=True)
        ctx2.grant_permissions(["geolocation"])
        ctx2.add_init_script(
            f"window.__VIVA_DEV_INITDATA__ = {json.dumps(make_init_data(7401, 'داریوش'))};")
        ctx2.add_init_script(GPS_SIM % 6.0)
        pg2 = ctx2.new_page()
        pg2.on("dialog", on_dialog)
        pg2.goto(f"{BASE}/viva/zivan/hall.html?id=running", wait_until="networkidle")
        pg2.wait_for_timeout(800)
        pg2.locator("#consent").check()
        pg2.locator("#btn-start").click()
        pg2.wait_for_timeout(9000)   # ~۴۸ متر با ۶ m/s
        pg2.locator("#btn-finish").click()
        pg2.wait_for_timeout(2500)
        check("دویدن: حکم سرور «فعالیت معتبر» آمد",
              "فعالیت معتبر" in pg2.locator("#result-card").inner_text())
        pg2.screenshot(path=str(EVIDENCE / "zivan_running_mobile.png"), full_page=True)
        ctx2.close()

        # --- ۴) تالار تعادل و انعطاف: پروتکل → تایمر واقعی → حکم ---
        page.goto(f"{BASE}/viva/zivan/hall.html?id=balance", wait_until="networkidle")
        page.wait_for_timeout(900)
        chips = page.locator("#chips .chip")
        check("تعادل: ۱۰ پروتکل رندر شد", chips.count() == 10, str(chips.count()))
        chips.first.click()
        page.locator("#bal-start").click()
        page.wait_for_timeout(1000)
        check("تعادل: حلقهٔ تایمر زنده است", page.locator("#bal-live").is_visible())
        page.wait_for_timeout(16000)   # تایمر واقعی — حداقل پلانک ۱۵ ثانیه
        page.locator("#bal-finish").click()
        page.wait_for_timeout(2500)
        check("تعادل: حکم سرور «تمرین معتبر» آمد",
              "تمرین معتبر" in page.locator("#bal-result").inner_text(),
              page.locator("#bal-result").inner_text()[:80])
        shot("zivan_balance_mobile.png")

        # --- ۵) نبرد قدم‌ها: تب گروهی — ساخت گروه/مسابقه از UI + عضویت نفر دوم ---
        page.goto(f"{BASE}/viva/zivan/hall.html?id=steps_battle", wait_until="networkidle")
        page.wait_for_timeout(900)
        check("نبرد قدم‌ها: دو تب فردی/گروهی", page.locator(".tab").count() == 2)
        page.locator('.tab[data-t="grp"]').click()
        page.wait_for_timeout(700)
        page.fill("#g-name", "پیاده‌روان سپیده")
        page.locator("#g-create").click()
        page.wait_for_timeout(1200)
        code_ui = page.locator("#g-card code").inner_text().strip()
        check("گروهی: گروه از UI ساخته شد و کد دعوت نمایش داده شد", len(code_ui) == 8, code_ui)
        # عضویت کاربر دوم با Context کاملاً مستقل
        ctxB = browser.new_context(viewport={"width": 412, "height": 860},
                                   device_scale_factor=2, is_mobile=True, has_touch=True)
        ctxB.add_init_script(
            f"window.__VIVA_DEV_INITDATA__ = {json.dumps(make_init_data(7402, 'الهام'))};")
        ctxB.add_init_script(GPS_SIM % 3.0)
        pgB = ctxB.new_page()
        pgB.on("dialog", on_dialog)
        pgB.goto(f"{BASE}/viva/zivan/hall.html?id=steps_battle", wait_until="networkidle")
        pgB.wait_for_timeout(900)
        pgB.locator('.tab[data-t="grp"]').click()
        pgB.wait_for_timeout(600)
        pgB.fill("#g-code", code_ui)
        pgB.locator("#g-join").click()
        pgB.wait_for_timeout(1200)
        check("گروهی: نفر دوم با کد از UI واقعی پیوست",
              pgB.locator("#g-card .member").count() >= 2,
              pgB.locator("#g-card").inner_text()[:100])
        # ساخت مسابقه از UI (dialog prompt)
        page.locator("#g-newrace").click()
        page.wait_for_timeout(1500)
        race_visible = page.locator("#r-card .member").count() >= 2
        check("گروهی: مسابقهٔ قدم از UI ساخته شد و جدول زنده با ۲ عضو آمد", race_visible)
        shot("zivan_steps_group_mobile.png")
        ctxB.close()

        # --- ۶) تمرین گروهی: حلقه بساز → انجام واقعی پلانک → ✓ ---
        page.goto(f"{BASE}/viva/zivan/hall.html?id=group_training", wait_until="networkidle")
        page.wait_for_timeout(900)
        page.fill("#w-title", "پلانک صبحگاهی دوستان")
        page.locator("#w-create").click()
        page.wait_for_timeout(1200)
        check("تمرین گروهی: کد دعوت حلقه نمایش داده شد",
              page.locator("#w-copy").is_visible() and len(page.locator("#tr-main code").inner_text().strip()) == 8)
        page.locator("#w-go").click()
        page.wait_for_timeout(1200)
        page.wait_for_timeout(16500)   # تایمر واقعی پلانک
        # دکمه پس از شروع تمرین به «پایان» تبدیل می‌شود
        page.locator("#w-go").click()
        page.wait_for_timeout(2200)
        done = page.locator("#tr-main .done").count()
        check("تمرین گروهی: پس از تمرین واقعی، ✓ «انجام داد» ظاهر شد", done >= 1)
        shot("zivan_training_mobile.png")

        # --- ۷) چالش دوستانه: ساخت از UI → در فهرست آزاد دیده می‌شود ---
        page.goto(f"{BASE}/viva/zivan/hall.html?id=friendly_challenge", wait_until="networkidle")
        page.wait_for_timeout(900)
        page.fill("#c-target", "2000")
        page.locator("#c-go").click()
        page.wait_for_timeout(1500)
        mine = page.locator("#ch-mine li:not(.empty)").count()
        check("چالش: چالش ساخته‌شده در «چالش‌های من» آمد", mine >= 1, str(mine))
        shot("zivan_challenge_mobile.png")

        # --- ۸) مأموریت اجتماعی ---
        page.goto(f"{BASE}/viva/zivan/hall.html?id=social_mission", wait_until="networkidle")
        page.wait_for_timeout(1200)
        mcount = page.locator(".mission").count()
        bars = page.locator(".mission .pbar i").count()
        check("اجتماعی: ۲ مأموریت جمعی با نوار پیشرفت رندر شد",
              mcount >= 2 and bars >= 2, f"{mcount}/{bars}")
        shot("zivan_social_mobile.png")

        # --- ۹) جام بزرگ سلامت ---
        page.goto(f"{BASE}/viva/zivan/hall.html?id=grand_cup", wait_until="networkidle")
        page.wait_for_timeout(1500)
        check("جام: کارت امتیاز من رندر شد", page.locator("#cup-me .metric").count() == 3)
        check("جام: فرمول شفاف نمایش داده می‌شود",
              "قدم معتبر" in page.locator("#cup-me").inner_text())
        shot("zivan_cup_mobile.png")

        # --- ۱۰) لحظه‌ها: آپلود واقعی از input → گالری → حذف ---
        png_path = "/tmp/zivan_moment.png"
        with open(png_path, "wb") as f:
            f.write(make_png(96, 72))
        page.goto(f"{BASE}/viva/zivan/hall.html?id=moments", wait_until="networkidle")
        page.wait_for_timeout(900)
        page.set_input_files("#mo-file", png_path)
        page.wait_for_timeout(2500)
        shots = page.locator(".gal .shot")
        check("لحظه‌ها: عکس آپلود شد و در گالری خصوصی ظاهر شد", shots.count() == 1,
              str(shots.count()))
        shot("zivan_moments_mobile.png")
        page.evaluate("window.confirm = function(){ return true; }")   # تأیید حذف بدون دیالوگ بومی
        page.locator(".gal .shot .x").click()
        page.wait_for_timeout(1500)
        check("لحظه‌ها: حذف با تأیید کار کرد", page.locator(".gal .shot").count() == 0)

        check("هیچ خطای جاوااسکریپت در کل جریان مرورگر", not errors, "; ".join(errors[:3]))
        browser.close()


def main():
    proc = start_server()
    code = 1
    try:
        part_a()
        part_b()
    finally:
        proc.kill()
        code = summary()
    sys.exit(code)


if __name__ == "__main__":
    main()
