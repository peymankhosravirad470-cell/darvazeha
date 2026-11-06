#!/usr/bin/env python3
"""آزمون یکپارچهٔ سرتاسری پایگاه خانگی سروری — Backend واقعی (uvicorn) + مرورگر واقعی.

زیرساخت:
- migration واقعی: «alembic upgrade head» روی فایل دیتابیس (مسیر دقیق production در Docker).
- سرور واقعی: uvicorn با app.main:app (همان چیزی که روی Liara اجرا می‌شود).
- احراز هویت واقعی: initData امضاشده → POST /api/v1/auth/bale → توکن → GET/PUT home.
- دو Context مرورگر مستقل + مهاجرت localStorage + قطعی/بازگشت اتصال.

سناریوها (همان الزامات دستور):
  ۴) مهاجرت پایگاه قدیمی از localStorage به سرور (یک‌بار).
  ۵) در زمان قطعی، دادهٔ محلی از دست نمی‌رود و fallback موقت است.
  ۶) همگام‌سازی پس از بازگشت اینترنت — و «محلی هرگز جایگزین سرور نمی‌شود».
  ۷) ورود همان حساب در Context مرورگر دوم، بدون localStorage: همان پایگاه، بدون صفحهٔ انتخاب.
  ۸) حساب دوم به پایگاه حساب اول دسترسی ندارد.
"""
import hashlib
import hmac
import http.server
import json
import os
import pathlib
import re
import socketserver
import sqlite3
import subprocess
import sys
import tempfile
import threading
import time
import urllib.request
from urllib.parse import urlencode

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
BACKEND = ROOT / "backend"
SDKF = ROOT / "tests" / "fixtures" / "miniapp.js"

API_PORT = 8231
API = f"http://127.0.0.1:{API_PORT}"
WEB = API  # استاتیک هم از همین سرور سرو می‌شود — دقیقاً مثل production

BOT_TOKEN = "home-sync-live-bot-token"
SESSION_SECRET = "home-sync-live-session-secret-32-bytes-long"
WEBHOOK_SECRET = "home-sync-live-webhook-secret-32-bytes"
UID_A, UID_B = 880011, 880022

results = []


def record(name, ok, note=""):
    results.append(bool(ok))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f" | {note}" if note else ""))


def make_init_data(uid):
    values = {"auth_date": str(int(time.time())), "query_id": "sync-query",
              "user": json.dumps({"id": uid, "first_name": "بازیکن همگام‌سازی"}, separators=(",", ":"))}
    check = "\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret = hmac.new(BOT_TOKEN.encode(), b"WebAppData", hashlib.sha256).digest()
    values["hash"] = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
    return urlencode(values)


def api_auth(uid):
    body = json.dumps({"init_data": make_init_data(uid)}).encode()
    req = urllib.request.Request(API + "/api/v1/auth/bale", data=body,
                                 headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.load(r)["access_token"]


def api_get_home(token):
    req = urllib.request.Request(API + "/api/v1/players/me/home",
                                 headers={"Authorization": "Bearer " + token})
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.load(r)


def db_home(dbpath):
    con = sqlite3.connect(dbpath)
    try:
        rows = con.execute(
            "SELECT u.bale_user_id, a.home_realm, a.home_land FROM player_accounts a "
            "JOIN users u ON u.id = a.user_id").fetchall()
        return {int(uid): (hr, hl) for uid, hr, hl in rows}
    finally:
        con.close()


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)

    def log_message(self, *a):
        pass


def main():
    tmp = tempfile.mkdtemp(prefix="home-sync-")
    dbpath = os.path.join(tmp, "home_sync.db")

    env = {**os.environ,
           "APP_ENV": "development",
           "DATABASE_URL": f"sqlite:///{dbpath}",
           "BALE_BOT_TOKEN": BOT_TOKEN,
           "SESSION_SECRET": SESSION_SECRET,
           "BALE_WEBHOOK_SECRET": WEBHOOK_SECRET}

    # ۱) migration واقعی — دقیقاً مثل CMD داکر: alembic upgrade head
    mig = subprocess.run([sys.executable, "-m", "alembic", "upgrade", "head"],
                         cwd=BACKEND, env=env, capture_output=True, text=True)
    record("مهاجرت واقعی alembic upgrade head سبز است", mig.returncode == 0,
           (mig.stderr.strip().splitlines() or [""])[-1][:120])
    cols = {r[1] for r in sqlite3.connect(dbpath).execute("PRAGMA table_info(player_accounts)").fetchall()}
    record("ستون‌های home_realm/home_land با مهاجرت واقعی ساخته شدند",
           {"home_realm", "home_land"} <= cols, str(sorted(cols)))

    # ۲) سرور واقعی uvicorn (همان app.main:app استقرار)
    uv = subprocess.Popen([sys.executable, "-m", "uvicorn", "app.main:app",
                           "--host", "127.0.0.1", "--port", str(API_PORT), "--log-level", "warning"],
                          cwd=BACKEND, env=env, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
    try:
        for _ in range(60):
            try:
                with urllib.request.urlopen(API + "/health", timeout=2) as r:
                    if r.status == 200:
                        break
            except Exception:
                time.sleep(0.4)
        else:
            raise RuntimeError("backend did not start")

        token_a = api_auth(UID_A)
        record("احراز هویت واقعی حساب A روی Backend سبز است", bool(token_a))
        assert api_get_home(token_a)["home"] is None

        sdk = SDKF.read_text(encoding="utf-8")
        INITD_A = (f"\n;window.Bale=window.Bale||{{WebApp:{{}}}};"
                   f"window.Bale.WebApp.initData={json.dumps(make_init_data(UID_A))};")
        INITD_B = (f"\n;window.Bale=window.Bale||{{WebApp:{{}}}};"
                   f"window.Bale.WebApp.initData={json.dumps(make_init_data(UID_B))};")

        with sync_playwright() as p:
            browser = p.chromium.launch(args=["--use-gl=swiftshader", "--enable-unsafe-swiftshader"])
            vp = {"width": 390, "height": 844}

            def new_ctx(init_data, seed_home=None, block_api=False):
                ctx = browser.new_context(viewport=vp, device_scale_factor=2, is_mobile=True,
                                          has_touch=True, locale="fa-IR")
                ctx.route(re.compile(r"tapi\.bale\.ai/miniapp\.js"), lambda r: r.fulfill(
                    status=200, content_type="application/javascript", body=sdk + init_data))
                if block_api:
                    ctx.route(re.compile(r"/api/"), lambda r: r.abort())
                if seed_home:
                    # seed فقط یک‌بار در هر تب — وگرنه add_init_script در هر ناوبری
                    # مقدار کهنه را دوباره می‌نویسد و همگام‌سازی را خراب می‌کند
                    ctx.add_init_script(
                        "try{if(!sessionStorage.getItem('seed77')){sessionStorage.setItem('seed77','1');"
                        "localStorage.setItem('lands.home', JSON.stringify(" +
                        json.dumps(seed_home) + "))}}catch(e){}")
                return ctx

            # ── سناریوی ۴: مهاجرت localStorage قدیمی → سرور (یک‌بار) ──
            ctxA = new_ctx(INITD_A, seed_home={"r": "targon", "l": "t1"})
            pa = ctxA.new_page()
            pa.goto(WEB + "/game/gates/index.html", wait_until="domcontentloaded")
            pa.wait_for_url("**/game/village/index.html**", timeout=20000)
            record("۴.۱ مهاجرت: ورود مستقیم به پایگاه محلی قدیمی", "realm=targon" in pa.url and "land=t1" in pa.url, pa.url)
            time.sleep(1.2)  # فرصت کامل شدن PUT مهاجرت
            assert api_get_home(token_a)["home"] == {"realm": "targon", "land": "t1"}
            record("۴.۲ مهاجرت: پایگاه در دیتابیس سرور ثبت شد (پاسخ API)", True)
            rowA = db_home(dbpath).get(UID_A)
            record("۴.۳ مهاجرت: خود ردیف دیتابیس تأیید شد", rowA == ("targon", "t1"), str(rowA))
            ctxA.close()

            # ── سناریوی ۵: قطعی سرور → دادهٔ محلی از دست نمی‌رود (fallback موقت) ──
            ctxB = new_ctx(INITD_A, seed_home={"r": "targon", "l": "t1"}, block_api=True)
            pb = ctxB.new_page()
            pb.goto(WEB + "/game/gates/index.html", wait_until="domcontentloaded")
            pb.wait_for_url("**/game/village/index.html**", timeout=20000)
            record("۵.۱ قطعی: ورود با fallback موقت به پایگاه", "realm=targon" in pb.url, pb.url)
            stored = pb.evaluate("() => localStorage.getItem('lands.home')")
            record("۵.۲ قطعی: دادهٔ محلی حفظ شد (پاک نشد)",
                   stored is not None and json.loads(stored) == {"r": "targon", "l": "t1"}, str(stored))
            ctxB.close()

            # ── سناریوی ۶: پس از بازگشت اینترنت — سرور مرجع است، محلی کهنه می‌بازد ──
            ctxC = new_ctx(INITD_A, seed_home={"r": "dezhmaar", "l": "d1"})
            pc = ctxC.new_page()
            pc.goto(WEB + "/game/gates/index.html", wait_until="domcontentloaded")
            pc.wait_for_url("**/game/village/index.html**", timeout=20000)
            record("۶.۱ بازگشت اتصال: پایگاه ثبت‌شدهٔ سرور باز شد (نه مقدار کهنهٔ محلی)",
                   "realm=targon" in pc.url and "land=t1" in pc.url, pc.url)
            synced = pc.evaluate("() => localStorage.getItem('lands.home')")
            record("۶.۲ همگام‌سازی: localStorage با سرور هم‌خوان شد",
                   synced is not None and json.loads(synced) == {"r": "targon", "l": "t1"}, str(synced))
            record("۶.۳ دیتابیس دست‌نخورده ماند",
                   db_home(dbpath).get(UID_A) == ("targon", "t1"), str(db_home(dbpath).get(UID_A)))
            ctxC.close()

            # ── سناریوی ۷: Context دوم مستقل، بدون localStorage ──
            ctxD = new_ctx(INITD_A)
            pd = ctxD.new_page()
            title_seen = []
            pd.on("load", lambda _: title_seen.append(
                pd.evaluate("() => document.querySelector('#title-screen')?.classList.contains('active') || false")))
            pd.goto(WEB + "/game/gates/index.html", wait_until="domcontentloaded")
            pd.wait_for_url("**/game/village/index.html**", timeout=20000)
            record("۷.۱ Context دوم بدون localStorage: همان پایگاه مستقیم باز شد",
                   "realm=targon" in pd.url and "land=t1" in pd.url, pd.url)
            record("۷.۲ Context دوم: صفحهٔ انتخاب امپراتوری نمایش داده نشد",
                   not any(title_seen), str(title_seen))
            synced2 = pd.evaluate("() => localStorage.getItem('lands.home')")
            record("۷.۳ Context دوم: localStorage از سرور پر شد",
                   synced2 is not None and json.loads(synced2) == {"r": "targon", "l": "t1"}, str(synced2))
            pd.wait_for_timeout(4000)
            record("۷.۴ Context دوم: دهکدهٔ سه‌بعدی بوت شد", pd.evaluate("() => !!window.__VILLAGE"))
            pd.screenshot(path=str(ROOT / "download" / "game-screens" / "home-sync-second-context.png"))
            ctxD.close()

            # ── سناریوی ۸: حساب دوم به پایگاه حساب اول دسترسی ندارد ──
            ctxE = new_ctx(INITD_B)
            pe = ctxE.new_page()
            pe.goto(WEB + "/game/gates/index.html", wait_until="domcontentloaded")
            pe.wait_for_selector("#title-screen.active", timeout=20000)
            record("۸.۱ حساب دوم (بدون پایگاه): صفحهٔ انتخاب اولیه دیده می‌شود",
                   pe.locator("#title-screen.active").count() == 1)
            token_b = api_auth(UID_B)
            record("۸.۲ API: پایگاه حساب B برای خودش خالی است", api_get_home(token_b)["home"] is None)
            assert api_get_home(token_a)["home"] == {"realm": "targon", "land": "t1"}
            record("۸.۳ API: پایگاه حساب A فقط برای حساب A برمی‌گردد", True)
            rows = db_home(dbpath)
            record("۸.۴ دیتابیس: home فقط برای حساب A ثبت شده و حساب B خالی است",
                   rows.get(UID_A) == ("targon", "t1") and rows.get(UID_B) == (None, None), str(rows))
            ctxE.close()
            browser.close()
    finally:
        uv.terminate()
        try:
            uv.wait(8)
        except subprocess.TimeoutExpired:
            uv.kill()

    n_ok = sum(1 for r in results if r)
    print(f"== home server-sync e2e: {n_ok}/{len(results)} PASS ==")
    sys.exit(0 if n_ok == len(results) else 1)


if __name__ == "__main__":
    main()
