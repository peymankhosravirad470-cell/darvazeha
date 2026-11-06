#!/usr/bin/env python3
"""بررسی زندهٔ مسیر تازهٔ ورود (پایگاه خانگی) روی استقرار واقعی Liara.

۱) بازیکن تازه: هفت دروازه ← انتخاب تارگون ← ساخت پایگاه خانگی (سپیده‌دم) ← ورود مستقیم به دهکده
۲) ورود دوباره با پایگاه موجود: منوی اصلی ← گزینهٔ ۱ مستقیم دهکده؛ هفت دروازه ← ریدایرکت به پایگاه
۳) چیپ «پایگاه خانگی تو» و سفر آگاهانه (?travel=) از نقشه
اسکرین‌شات‌ها به download/evidence/ ذخیره می‌شود.
"""
import json
import pathlib
import sys
import time

from playwright.sync_api import sync_playwright

BASE = "https://darvazeh-ha.liara.run"
SHOTS = pathlib.Path("/home/z/my-project/download/evidence")
SHOTS.mkdir(parents=True, exist_ok=True)

results = []


def record(name, ok, note=""):
    results.append(bool(ok))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f" | {note}" if note else ""))


with sync_playwright() as p:
    browser = p.chromium.launch(args=["--use-gl=swiftshader", "--enable-unsafe-swiftshader"])

    # ── ۱) بازیکن تازه: انتخاب امپراتوری ← پایگاه خانگی ──
    ctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2,
                              is_mobile=True, has_touch=True, locale="fa-IR")
    page = ctx.new_page()
    errs = []
    page.on("pageerror", lambda e: errs.append(str(e)))
    page.goto(BASE + "/game/gates/index.html", wait_until="networkidle")
    page.wait_for_timeout(1500)
    record("L1. بازیکن تازه: صفحهٔ عنوان", page.locator("#title-screen.active").count() == 1)
    page.locator("#btn-enter-game").tap()
    page.wait_for_selector("#gates-screen.active", timeout=30000)
    record("L2. صحنهٔ هفت پرچم (انتخاب امپراتوری)", page.locator("#gates-screen.active").count() == 1)
    page.wait_for_timeout(1500)
    page.screenshot(path=str(SHOTS / "live-01-empire-selection.png"))
    page.locator("#gates-enter").tap()
    page.wait_for_url("**/game/village/index.html**", timeout=20000)
    home = page.evaluate("() => localStorage.getItem('lands.home')")
    record("L3. انتخاب تارگون ← پایگاه خانگی ساخته شد (سپیده‌دم)",
           home is not None and json.loads(home) == {"r": "targon", "l": "t1"}, str(home))
    page.wait_for_timeout(4500)
    record("L4. ورود مستقیم به پایگاه: دهکدهٔ سه‌بعدی بوت شد", page.evaluate("() => !!window.__VILLAGE"))
    chip = page.locator("#realmchip").inner_text()
    record("L5. چیپ جهت‌یابی: «پایگاه خانگی تو»", "پایگاه خانگی تو" in chip, chip)
    page.screenshot(path=str(SHOTS / "live-02-home-base-village.png"))
    ctx.close()

    # ── ۲) ورود دوباره: مستقیم پایگاه ──
    ctx2 = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2,
                               is_mobile=True, has_touch=True, locale="fa-IR")
    ctx2.add_init_script("try{localStorage.setItem('lands.home', JSON.stringify({r:'targon',l:'t1'}))}catch(e){}")
    page2 = ctx2.new_page()
    page2.goto(BASE + "/", wait_until="networkidle")
    page2.wait_for_timeout(900)
    href = page2.locator("#menu-empires").get_attribute("href")
    record("L6. منوی اصلی: گزینهٔ ۱ مستقیم به پایگاه خانگی می‌رود",
           href == "/game/village/index.html?realm=targon&land=t1", str(href))
    page2.goto(BASE + "/game/gates/index.html")
    page2.wait_for_url("**/game/village/index.html**", timeout=15000)
    record("L7. بازکردن مستقیم هفت دروازه ← ریدایرکت به پایگاه",
           "realm=targon" in page2.url and "land=t1" in page2.url, page2.url)
    page2.wait_for_timeout(4500)
    page2.screenshot(path=str(SHOTS / "live-03-reentry-direct-home.png"))
    ctx2.close()

    # ── ۳) سفر آگاهانه از نقشهٔ کل ──
    ctx3 = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2,
                               is_mobile=True, has_touch=True, locale="fa-IR")
    page3 = ctx3.new_page()
    page3.goto(BASE + "/game/gates/index.html?travel=dezhmaar")
    page3.wait_for_selector("#lands-screen.active", timeout=20000)
    page3.wait_for_timeout(1200)
    realm_name = page3.locator("#lands-realm-name").inner_text()
    record("L8. سفر آگاهانه: فهرست ۱۱ سرزمین دژمار مستقیم باز می‌شود",
           "دژمار" in realm_name and page3.locator(".land-card").count() == 11, realm_name)
    record("L9. سفر پایگاهی نمی‌سازد",
           page3.evaluate("() => localStorage.getItem('lands.home')") is None)
    page3.screenshot(path=str(SHOTS / "live-04-travel-lands-list.png"))
    ctx3.close()
    browser.close()

n_ok = sum(1 for r in results if r)
print(f"== live home-base check: {n_ok}/{len(results)} PASS ==")
sys.exit(0 if n_ok == len(results) else 1)
