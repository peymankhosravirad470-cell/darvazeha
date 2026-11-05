#!/usr/bin/env python3
"""
Automated verification for «هفت دروازهٔ رسمی» — the cinematic seven-gates
version (game/gates/index.html). Real-browser checks with Playwright in
Android mobile emulation (390x844, DPR 3, touch). Every PASS/FAIL line
reflects an actual assertion made during the run.

Covers: asset completeness, honest wallet (no fake balance), preload,
seven cloth flags with official FA/EN names, realm intro, the 11 official
TARGON lands (exact order), locked realms, the 3D world HUD, navigation,
layout overflow and console cleanliness.
"""
import http.server
import pathlib
import socketserver
import threading
import time

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
GATES = ROOT / "game" / "gates"
SHOTS = ROOT / "download" / "gates-screens"
SHOTS.mkdir(parents=True, exist_ok=True)
PORT = 8139
URL = f"http://127.0.0.1:{PORT}/index.html"

results, console_errors, page_errors = [], [], []


def record(name, ok, note=""):
    results.append((name, bool(ok), note))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f" | {note}" if note else ""))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(GATES), **kw)

    def log_message(self, *a):
        pass


def serve():
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", PORT), Handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main():
    # ---------- 1. asset completeness (Docker output must include all) ----------
    flags = sorted((GATES / "assets" / "flags").glob("*.webp"))
    record("1a. ۲۱ بافت پرچم رسمی (۷ قلمرو × بافت/نرمال/اثر)", len(flags) == 21, f"count={len(flags)}")
    realms = ["targon", "dezhmaar", "argad", "mardak", "vergad", "zardak", "tarmad"]
    missing = [r for r in realms if not all(
        (GATES / "assets" / "flags" / f"{r}_{k}.webp").exists() for k in ("cloth", "normal", "art"))]
    record("1b. هر ۷ قلمرو هر سه فایل را دارد", not missing, f"missing={missing}")
    fonts = sorted((GATES / "assets" / "fonts").glob("*.woff2"))
    record("1c. فونت وزیرمتن محلی (۲ وزن)", len(fonts) == 2, f"count={len(fonts)}")
    appjs = GATES / "app.js"
    record("1d. باندل app.js سالم و حجیم", appjs.exists() and appjs.stat().st_size > 400_000,
           f"size={appjs.stat().st_size if appjs.exists() else 0}")
    html = (GATES / "index.html").read_text(encoding="utf-8")
    import re
    stamp_ok = re.search(r'app\.js\?v=\d{14}', html)
    record("1e. مُهر ضدکش روی app.js", bool(stamp_ok), stamp_ok.group(0) if stamp_ok else "")
    record("1f. SDK بله در صفحه", "tapi.bale.ai/miniapp.js" in html)

    httpd = serve()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(args=["--use-gl=swiftshader", "--enable-unsafe-swiftshader"])
            context = browser.new_context(
                viewport={"width": 390, "height": 844}, device_scale_factor=3,
                is_mobile=True, has_touch=True, locale="fa-IR",
            )
            page = context.new_page()
            page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
            page.on("pageerror", lambda e: page_errors.append(str(e)))
            page.goto(URL, wait_until="networkidle")
            time.sleep(1.5)

            # ---------- 2. title + honest wallet ----------
            record("2a. صفحهٔ عنوان رندر شد", page.locator("#title-screen.active").count() == 1)
            record("2b. دکمهٔ ورود به بازی هست", page.locator("#btn-enter-game").is_visible())
            tw = page.locator("#title-wallet").inner_text()
            honest = ("قطع" in tw) or ("اتصال" in tw) or ("متصل" in tw)
            record("2c. وضعیت کیف پول صادقانه است (بدون عدد ساختگی)", honest, tw.strip()[:48])
            record("2d. هیچ عدد سکهٔ ساختگی در عنوان نیست", "سکه" not in tw or "متصل" in tw)

            # ---------- 3. enter → loading → gates ----------
            page.locator("#btn-enter-game").tap()
            page.wait_for_selector("#gates-screen.active", timeout=30000)
            record("3a. پس از پیش‌بارگذاری، صحنهٔ هفت دروازه فعال شد", True)
            record("3b. بدون خطای JavaScript تا اینجا", not page_errors, str(page_errors[:2]))

            # ---------- 4. seven official flags ----------
            labels = page.locator(".gate-label")
            record("4a. هفت برچسب پرچم", labels.count() == 7, f"count={labels.count()}")
            fa_names = [labels.nth(i).locator(".gate-label-fa").inner_text() for i in range(labels.count())]
            en_names = [labels.nth(i).locator(".gate-label-en").inner_text() for i in range(labels.count())]
            expect_fa = ["تارگون", "دژمار", "آرگاد", "مرداک", "ورگاد", "زرداک", "تارماد"]
            expect_en = ["TARGON", "DEZHMAAR", "ARGAD", "MARDAK", "VERGAD", "ZARDAK", "TARMAD"]
            record("4b. نام‌های فارسی رسمی (فارسی+انگلیسی)", fa_names == expect_fa, "،".join(fa_names))
            record("4c. نام‌های انگلیسی رسمی", en_names == expect_en, "|".join(en_names))
            canvas_size = page.locator("#gates-canvas").evaluate("c => c.width + 'x' + c.height")
            w, h = canvas_size.split("x")
            record("4d. بوم WebGL پررنگ است", int(w) >= 300 and int(h) >= 600, canvas_size)
            time.sleep(1.2)
            page.screenshot(path=str(SHOTS / "gates-flags.png"))
            shot = SHOTS / "gates-flags.png"
            # The visible page screenshot is the ground truth (WebGL default
            # clears its buffer after present, so readPixels can't be used
            # here). Rich render ⇒ many distinct colors and a lit scene.
            from PIL import Image
            im = Image.open(shot).convert("RGB")
            px = list(im.getdata())
            uniq = len(set(px[::7]))
            lit = sum(1 for r, g, b in px[::7] if r + g + b > 90) / len(px[::7])
            record("4e. پرچم‌ها واقعاً ترسیم شده‌اند (تنوع پیکسلی اسکرین‌شات)",
                   uniq > 3000 and lit > 0.15, f"uniq={uniq} lit={lit:.0%}")

            # ---------- 5. focus navigation ----------
            first_chip = page.locator("#realm-chip b").inner_text()
            page.locator("#arrow-right").tap()
            time.sleep(0.9)
            second_chip = page.locator("#realm-chip b").inner_text()
            record("5a. فلش جهت، پرچم فوکوس را عوض می‌کند", first_chip != second_chip,
                   f"{first_chip} → {second_chip}")
            page.locator("#arrow-left").tap()
            time.sleep(0.9)

            # ---------- 6. enter TARGON → intro → 11 official lands ----------
            page.locator("#gates-enter").tap()
            page.wait_for_selector("#lands-screen.active", timeout=15000)
            cards = page.locator(".land-card .land-name")
            names = [cards.nth(i).inner_text() for i in range(cards.count())]
            expect_lands = ["سپیده‌دم", "دهکده آذرین", "میدان هم‌پیمانان", "بازار کهن", "دشت سبز",
                            "جنگل زمرد", "رود روشن", "کوهستان سنگ‌نگهبان", "دژ نگهبان",
                            "ویرانه‌های خاموش", "دروازه سرخ"]
            record("6a. دقیقاً ۱۱ سرزمین", cards.count() == 11, f"count={cards.count()}")
            record("6b. ترتیب و نام‌های رسمی تارگون", names == expect_lands, "،".join(names))
            record("6c. کارت‌ها باز هستند (ورود ←)", page.locator(".land-card .go").count() == 11)
            record("6d. بدون سرریز افقی در فهرست سرزمین‌ها",
                   page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1"))
            page.screenshot(path=str(SHOTS / "lands.png"))

            # ---------- 7. world ----------
            page.locator(".land-card").first.tap()
            page.wait_for_selector("#world-screen.active", timeout=30000)
            time.sleep(3.0)
            record("7a. جهان سه‌بعدی فعال شد", True)
            record("7b. چیپ سرزمین/سرزمین درست است",
                   "تارگون" in page.locator("#land-chip").inner_text()
                   and "سپیده‌دم" in page.locator("#land-chip").inner_text())
            chip = page.locator("#world-screen .wallet-chip").inner_text()
            record("7c. کیف پول در جهان: حالت صادقانه (قطع/اتصال)", ("قطع" in chip) or ("اتصال" in chip), chip.strip()[:40])
            record("7d. هیچ موجودی ساختگی در جهان نیست", not any(ch.isdigit() for ch in chip))
            record("7e. جوی‌استیک لمسی هست", page.locator("#joystick-zone").count() == 1)
            record("7f. دکمهٔ دویدن هست", page.locator("#btn-run").count() == 1)
            record("7g. بدون سرریز افقی در جهان",
                   page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1"))
            page.screenshot(path=str(SHOTS / "world.png"))

            # back navigation
            page.locator("#btn-world-back").tap()
            page.wait_for_selector("#lands-screen.active", timeout=8000)
            record("8a. بازگشت جهان → فهرست سرزمین‌ها", True)
            page.locator("#btn-lands-back").tap()
            page.wait_for_selector("#gates-screen.active", timeout=8000)
            record("8b. بازگشت فهرست → دروازه‌ها", True)

            # ---------- 9. locked realm ----------
            for _ in range(3):
                page.locator("#arrow-right").tap()
                time.sleep(0.5)
            page.locator("#gates-enter").tap()
            page.wait_for_selector("#lands-screen.active", timeout=15000)
            locked = page.locator(".land-card.locked").count()
            record("9a. قلمرو قفل: هر ۱۱ کارت قفل است", locked == 11, f"locked={locked}")
            note = page.locator("#lands-locknote")
            record("9b. پیام قفل نمایش داده می‌شود", note.is_visible(), note.inner_text()[:40])

            # ---------- 10. console cleanliness ----------
            record("10a. هیچ خطای JavaScript در کل سناریو", not page_errors, str(page_errors[:2]))
            record("10b. هیچ خطای کنسول در کل سناریو", not console_errors, str(console_errors[:2]))

            browser.close()
    finally:
        httpd.shutdown()

    passed = sum(1 for _, ok, _ in results if ok)
    print(f"\n=== جمع‌بندی هفت دروازه: {passed}/{len(results)} PASS ===")
    return 0 if passed == len(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
