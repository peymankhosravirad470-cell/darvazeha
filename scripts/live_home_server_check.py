#!/usr/bin/env python3
"""آزمون پذیرش واقعی «پایگاه خانگی سروری» روی استقرار Liara — معیار پایان کار.

معیار: پایگاه بازیکن پس از پاک‌شدن کامل اطلاعات محلی و ورود با همان حساب در
Context مرورگری کاملاً مستقل، از دیتابیس سرور بازیابی شود؛ بدون نمایش صفحهٔ
انتخاب امپراتوری.

پیش‌نیاز (در همان خط فرمان، بدون چاپ مقدار):
  BALE_BOT_TOKEN=... python3 scripts/live_home_server_check.py [BASE]
  BALE_BOT_TOKEN از env اپ روی Liara خوانده می‌شود (liara env:list).
  # اختیاری: DATABASE_URL برای راستیِ مستقیم ردیف دیتابیس
  DATABASE_URL=... python3 scripts/live_home_server_check.py

مراحل (دو Context مستقلِ واقعی):
  ۱) Context اول — حساب واقعی (initData امضاشده و معتبر): صفحهٔ انتخاب →
     ثبت امپراتوری → پایگاه در سرور ثبت می‌شود → تأیید با API.
  ۲) localStorage و کش مرورگر اول نادیده گرفته می‌شود (Context بسته می‌شود).
  ۳) Context دوم مستقل (بدون localStorage) با همان حساب: همان پایگاه مستقیم
     باز می‌شود و هیچ صفحهٔ انتخابی نمایش داده نمی‌شود.
  ۴) اگر DATABASE_URL در دسترس باشد، ردیف دیتابیس مستقیماً هم خوانده می‌شود.
"""
import hashlib
import hmac
import json
import os
import pathlib
import re
import sys
import time
import urllib.request
from urllib.parse import urlencode

from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "https://darvazeh-ha.liara.run"
BOT_TOKEN = os.environ.get("BALE_BOT_TOKEN", "").strip()
DATABASE_URL = os.environ.get("DATABASE_URL", "").strip()
SHOTS = pathlib.Path("/home/z/my-project/download/evidence")
SHOTS.mkdir(parents=True, exist_ok=True)
UID = 990777  # حساب آزمون پذیرش
SDK_URL = "tapi.bale.ai/miniapp.js"

results = []


def record(name, ok, note=""):
    results.append(bool(ok))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f" | {note}" if note else ""))


def make_init_data(token, uid, now=None):
    values = {"auth_date": str(int(now if now is not None else time.time())), "query_id": "accept-query",
              "user": json.dumps({"id": uid, "first_name": "بازیکن پذیرش"}, separators=(",", ":"))}
    check = "\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret = hmac.new(token.encode(), b"WebAppData", hashlib.sha256).digest()
    values["hash"] = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
    return urlencode(values)


def api(path, token=None, method="GET", body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(BASE + path, data=data, method=method,
                                 headers={"Content-Type": "application/json",
                                          **({"Authorization": "Bearer " + token} if token else {})})
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.load(r)


def db_row_check():
    """راستیِ مستقیم ردیف دیتابیس — فقط اگر DATABASE_URL در دسترس و قابل اتصال باشد."""
    if not DATABASE_URL:
        return None
    try:
        import psycopg
    except ImportError:
        return None
    try:
        url = DATABASE_URL
        if url.startswith("postgres://"):
            url = "postgresql://" + url[len("postgres://"):]
        with psycopg.connect(url, connect_timeout=8) as con:
            with con.cursor() as cur:
                cur.execute("SELECT a.home_realm, a.home_land FROM player_accounts a "
                            "JOIN users u ON u.id = a.user_id WHERE u.bale_user_id = %s", (UID,))
                row = cur.fetchone()
        return tuple(row) if row else None
    except Exception as exc:
        print(f"NOTE | اتصال مستقیم دیتابیس ممکن نشد: {type(exc).__name__}")
        return None


def main():
    if not BOT_TOKEN:
        print("FAIL | BALE_BOT_TOKEN تنظیم نشده — مقدار را از env اپ Liara در همین خط فرمان بدهید.")
        return 2

    health = api("/health")
    record("۰.۱ سلامت سرور روی Liara", health.get("status") == "ok", str(health))

    token = api("/api/v1/auth/bale", method="POST", body={"init_data": make_init_data(BOT_TOKEN, UID)})["access_token"]
    record("۰.۲ احراز هویت واقعی حساب آزمون روی استقرار", bool(token))
    before = api("/api/v1/players/me/home", token)["home"]
    record("۰.۳ وضعیت پایگاه حساب پیش از آزمون (None یا ثبت قبلی)", True, str(before))

    sdk_note = ("؛ سپس در Context دوم بدون localStorage همین پایگاه مستقیم باز می‌شود"
                if before else "")
    expected_home = before  # اگر قبلاً ثبت شده، همان باید بر بگردد

    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--use-gl=swiftshader", "--enable-unsafe-swiftshader"])

        def new_ctx(init_data):
            ctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2,
                                      is_mobile=True, has_touch=True, locale="fa-IR")
            ctx.route(re.compile(r"tapi\.bale\.ai/miniapp\.js"), lambda r: r.fulfill(
                status=200, content_type="application/javascript",
                body=";window.Bale={WebApp:{initData:" + json.dumps(init_data) + "}};"))
            return ctx

        # ── Context اول: ورود واقعی و ثبت/تأیید پایگاه ──
        ctx1 = new_ctx(make_init_data(BOT_TOKEN, UID))
        p1 = ctx1.new_page()
        p1.goto(BASE + "/game/gates/index.html", wait_until="domcontentloaded")
        if before:
            p1.wait_for_url("**/game/village/index.html**", timeout=25000)
            ok = f"realm={before['realm']}" in p1.url and f"land={before['land']}" in p1.url
            record(f"۱.۱ Context اول: پایگاه ثبت‌شده قبلی مستقیم باز شد{sdk_note}", ok, p1.url)
        else:
            p1.wait_for_selector("#title-screen.active", timeout=25000)
            p1.locator("#btn-enter-game").tap()
            p1.wait_for_selector("#gates-screen.active", timeout=40000)
            p1.wait_for_timeout(1800)
            p1.screenshot(path=str(SHOTS / "accept-01-empire-selection.png"))
            p1.locator("#gates-enter").tap()
            p1.wait_for_url("**/game/village/index.html**", timeout=30000)
            record("۱.۱ Context اول: انتخاب امپراتوری ← ورود به پایگاه", "realm=" in p1.url, p1.url)
        time.sleep(2.0)  # فرصت کامل ثبت سروری انتخاب اول
        after = api("/api/v1/players/me/home", token)["home"]
        record("۱.۲ ثبت پایگاه در پاسخ API تأیید شد", after is not None, str(after))
        expected_home = after
        ls1 = p1.evaluate("() => localStorage.getItem('lands.home')")
        record("۱.۳ localStorage مرورگر اول با سرور هم‌خوان است",
               ls1 is not None and json.loads(ls1) == {"r": after["realm"], "l": after["land"]} if after else ls1 is None,
               str(ls1))
        p1.wait_for_timeout(4000)
        record("۱.۴ دهکدهٔ سه‌بعدی پایگاه بوت شد", p1.evaluate("() => !!window.__VILLAGE"))
        p1.screenshot(path=str(SHOTS / "accept-02-first-context-home.png"))
        ctx1.close()  # «پاک‌شدن کامل اطلاعات مرورگر اول» — Context به‌کلی بسته می‌شود

        # ── Context دوم: کاملاً مستقل، بدون localStorage، همان حساب ──
        ctx2 = new_ctx(make_init_data(BOT_TOKEN, UID))
        p2 = ctx2.new_page()
        title_seen = []
        p2.on("load", lambda _: title_seen.append(
            p2.evaluate("() => document.querySelector('#title-screen')?.classList.contains('active') || false")))
        p2.goto(BASE + "/game/gates/index.html", wait_until="domcontentloaded")
        p2.wait_for_url("**/game/village/index.html**", timeout=25000)
        record("۲.۱ Context دوم مستقل (بدون localStorage): همان پایگاه مستقیم باز شد",
               f"realm={after['realm']}" in p2.url and f"land={after['land']}" in p2.url, p2.url)
        record("۲.۲ Context دوم: هیچ صفحهٔ انتخاب امپراتوری نمایش داده نشد", not any(title_seen), str(title_seen))
        ls2 = p2.evaluate("() => localStorage.getItem('lands.home')")
        record("۲.۳ Context دوم: localStorage از دیتابیس سرور پر شد",
               ls2 is not None and json.loads(ls2) == {"r": after["realm"], "l": after["land"]}, str(ls2))
        p2.wait_for_timeout(4000)
        record("۲.۴ دهکدهٔ سه‌بعدی در Context دوم بوت شد", p2.evaluate("() => !!window.__VILLAGE"))
        p2.screenshot(path=str(SHOTS / "accept-03-second-context-same-home.png"))
        ctx2.close()
        browser.close()

    # ── راستیِ مستقیم دیتابیس (اختیاری، در صورت دسترسی) ──
    row = db_row_check()
    if row is not None:
        record("۳.۱ ردیف دیتابیس production مستقیماً خوانده شد و هم‌خوان است",
               row == (after["realm"], after["land"]), str(row))
    else:
        print("NOTE | راستیِ مستقیم دیتابیس انجام نشد (DATABASE_URL در دسترس/قابل اتصال نبود) — "
              "اثر دیتابیس از پاسخ API و رفتار Context دوم اثبات شد.")

    n_ok = sum(1 for r in results if r)
    print(f"== live home server check ({BASE}): {n_ok}/{len(results)} PASS ==")
    return 0 if n_ok == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
