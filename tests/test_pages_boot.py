#!/usr/bin/env python3
"""بوت واقعی صفحه‌ها در مرورگر با SDK رسمی بله (فیکسچر محلی از طریق route — بدون شبکهٔ بیرونی)

پوشش ریشهٔ خطای «Identifier 'S' has already been declared»:
- صفحهٔ بازی (game/index.html) در مرورگر عادی (اندروید-مانند) بالا می‌آید؛
- جهان تارگون باز می‌شود؛ کیف پول بدون initData صادقانه «در دسترس نیست»؛
- با initData (شبیه‌سازی محیط بله) و بدون Backend: تلاش واقعی auth به
  /api/v1/auth/bale و سپس پیام صادقانه — هیچ عدد قلابی نمایش داده نمی‌شود؛
- صفحهٔ اصلی بالا می‌آید و کارت «هفت دروازهٔ رسمی» واقعاً به /game/gates/index.html می‌رود
  (نسخهٔ سینمایی جدید، بر پایهٔ commit 90d1e63) و کارت ثانویهٔ نسخهٔ پیشین همچنان
  به /game/index.html می‌رود. """
import http.server, socketserver, threading, pathlib, sys, time, re
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SDKF = ROOT / 'tests' / 'fixtures' / 'miniapp.js'
SHOTS = ROOT / 'download' / 'game-screens'
SHOTS.mkdir(parents=True, exist_ok=True)
PORT = 8135
BASE = f'http://127.0.0.1:{PORT}'
BAD = 'already been declared'

requests_log = []
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)
    def log_message(self, fmt, *a):
        requests_log.append(fmt % a)

socketserver.TCPServer.allow_reuse_address = True
threading.Thread(target=lambda: socketserver.TCPServer(('127.0.0.1', PORT), Handler).serve_forever(), daemon=True).start()
time.sleep(0.6)

results = []
def record(name, ok, note=''):
    results.append(bool(ok))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f' | {note}' if note else ''))

def new_page(ctx, errs):
    page = ctx.new_page()
    page.on('pageerror', lambda e: errs.append(str(e)))
    page.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
    return page

with sync_playwright() as p:
    browser = p.chromium.launch()
    sdk = SDKF.read_text(encoding='utf-8')
    SDK_RE = re.compile(r'tapi\.bale\.ai/miniapp\.js')
    route = lambda r: r.fulfill(status=200, content_type='application/javascript', body=sdk)
    INITD = ("\n;window.Bale=window.Bale||{WebApp:{}};"
             "window.Bale.WebApp.initData='initData%3Dstub%26auth_date%3D1%26hash%3Dstub';")

    def create_and_enter(page):
        page.locator('#btn-enter').tap(); page.wait_for_timeout(400)
        page.fill('#cre-name', 'آزمون')
        page.locator('.banner-opt[data-b="2"]').tap()
        page.locator('#btn-cre-start').tap(); page.wait_for_timeout(500)

    # ── ۱) صفحهٔ بازی در مرورگر عادی + جهان تارگون + کیف پول بدون initData ──
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=3,
                              is_mobile=True, has_touch=True, locale='fa-IR')
    ctx.route(SDK_RE, route)
    errs = []
    page = new_page(ctx, errs)
    page.goto(f'{BASE}/game/index.html?debug=1')
    page.evaluate("() => localStorage.removeItem('hs77_darvazeha_v1')")
    page.reload(); page.wait_for_timeout(700)
    record('بازی در مرورگر عادی: بدون خطای «already been declared»', not any(BAD in e for e in errs), ' | '.join(errs[:2]))
    record('بازی: صفحهٔ بوت فعال است', page.locator('#screen-boot.active').count() == 1)
    create_and_enter(page)
    record('بازی: ساخت شخصیت و ورود به نقشه', page.locator('#screen-map.active').count() == 1)
    record('بازی: شبکهٔ دروازه‌ها پر است', page.locator('#gate-grid .gate-card').count() > 0)
    page.evaluate("() => window.HS77.api.targon()"); page.wait_for_timeout(900)
    record('بازی: جهان تارگون باز شد', page.locator('#screen-targon.active').count() == 1)
    page.locator('#btn-t-wallet').tap(); page.wait_for_timeout(600)
    w = page.locator('#wallet-body').inner_text()
    record('کیف پول بدون initData: صادقانه «در دسترس نیست»', 'در دسترس نیست' in w, w[:60])
    record('کیف پول بدون initData: هیچ عددی به‌عنوان موجودی نیست', 'سکهٔ رسمی' not in w)
    page.screenshot(path=str(SHOTS / 'boot-wallet-noinit.png'))
    ctx.close()

    # ── ۲) با initData (محیط بله) و بدون Backend — رفتار قطع ارتباط ──
    ctx2 = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    ctx2.route(SDK_RE, lambda r: r.fulfill(status=200, content_type='application/javascript', body=sdk + INITD))
    errs2 = []
    page2 = new_page(ctx2, errs2)
    page2.goto(f'{BASE}/game/index.html?debug=1')
    page2.evaluate("() => localStorage.removeItem('hs77_darvazeha_v1')")
    page2.reload(); page2.wait_for_timeout(700)
    create_and_enter(page2)
    page2.evaluate("() => window.HS77.api.targon()"); page2.wait_for_timeout(1200)
    page2.locator('#btn-t-wallet').tap(); page2.wait_for_timeout(1200)
    w2 = page2.locator('#wallet-body').inner_text()
    auth_called = any('/api/v1/auth/bale' in r for r in requests_log)
    record('کیف پول با initData: درخواست واقعی auth به Backend رفت', auth_called)
    record('کیف پول با initData و بدون Backend: پیام صادقانه، بدون عدد قلابی',
           'در دسترس نیست' in w2 and 'سکهٔ رسمی' not in w2, w2[:70])
    record('اجرای با initData: بدون خطای «already been declared»', not any(BAD in e for e in errs2))
    page2.screenshot(path=str(SHOTS / 'boot-wallet-stubinit.png'))
    ctx2.close()

    # ── ۳) صفحهٔ اصلی + کارت ورود «🌍 جهان تارگون» ──
    ctx3 = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    ctx3.route(SDK_RE, route)
    page3 = ctx3.new_page()
    errs3 = []
    page3 = new_page(ctx3, errs3)
    page3.goto(f'{BASE}/index.html'); page3.wait_for_timeout(800)
    record('صفحهٔ اصلی: بدون خطای «already been declared»', not any(BAD in e for e in errs3))
    record('صفحهٔ اصلی: کارت «🌍 جهان تارگون» هست', page3.locator('#targon-entry').count() == 1)
    href = page3.locator('#targon-entry').get_attribute('href')
    record('صفحهٔ اصلی: کارت اصلی به نسخهٔ هفت دروازه می‌رود', href == '/game/gates/index.html', str(href))
    page3.locator('#targon-entry').tap()
    page3.wait_for_url('**/game/gates/index.html**', timeout=5000)
    page3.wait_for_timeout(700)
    record('کارت اصلی: نسخهٔ هفت دروازه واقعاً باز و بوت شد', page3.locator('#title-screen.active').count() == 1)
    page3.screenshot(path=str(SHOTS / 'boot-root-entry-gates.png'))
    page3.go_back(); page3.wait_for_timeout(500)
    href_old = page3.locator('#targon-entry-legacy').get_attribute('href')
    record('صفحهٔ اصلی: کارت نسخهٔ پیشین حفظ شده و به /game/index.html می‌رود',
           href_old == '/game/index.html', str(href_old))
    page3.locator('#targon-entry-legacy').tap()
    page3.wait_for_url('**/game/index.html**', timeout=5000)
    page3.wait_for_timeout(700)
    record('کارت نسخهٔ پیشین: صفحهٔ بازی قدیمی واقعاً بوت شد', page3.locator('#screen-boot.active').count() == 1)
    ctx3.close()
    browser.close()

n_ok = sum(1 for r in results if r)
print(f"== test_pages_boot: {n_ok}/{len(results)} PASS ==")
sys.exit(0 if n_ok == len(results) else 1)
