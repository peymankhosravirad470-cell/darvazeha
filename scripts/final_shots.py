#!/usr/bin/env python3
"""تصاویر راستی‌آزمایی موبایل از نسخهٔ نهایی ادغام‌شده — صفحات واقعی با SDK رسمی بله (فیکسچر محلی)"""
import http.server, socketserver, threading, pathlib, sys, time, re
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SDKF = ROOT / 'tests' / 'fixtures' / 'miniapp.js'
SHOTS = ROOT / 'download' / 'game-screens'
SHOTS.mkdir(parents=True, exist_ok=True)
PORT = 8143
BASE = f'http://127.0.0.1:{PORT}'

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)
    def log_message(self, *a): pass

socketserver.TCPServer.allow_reuse_address = True
threading.Thread(target=lambda: socketserver.TCPServer(('127.0.0.1', PORT), Handler).serve_forever(), daemon=True).start()
time.sleep(0.6)

with sync_playwright() as p:
    browser = p.chromium.launch()
    sdk = SDKF.read_text(encoding='utf-8')
    INITD = ("\n;window.Bale=window.Bale||{WebApp:{}};"
             "window.Bale.WebApp.initData='initData%3Dstub%26auth_date%3D1%26hash%3Dstub';")

    def mobile(extra_sdk=''):
        ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=3,
                                  is_mobile=True, has_touch=True, locale='fa-IR',
                                  user_agent='Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 Chrome/120 Mobile')
        ctx.route(re.compile(r'tapi\.bale\.ai/miniapp\.js'),
                  lambda r: r.fulfill(status=200, content_type='application/javascript', body=sdk + extra_sdk))
        return ctx

    def create_and_enter(page):
        page.locator('#btn-enter').tap(); page.wait_for_timeout(400)
        page.fill('#cre-name', 'آرش')
        page.locator('.banner-opt[data-b="2"]').tap()
        page.locator('#btn-cre-start').tap(); page.wait_for_timeout(500)

    # ── ۱) صفحهٔ اصلی مینی‌اپ با کارت ورود جهان تارگون ──
    ctx = mobile(); page = ctx.new_page()
    page.goto(f'{BASE}/index.html'); page.wait_for_timeout(1200)
    page.locator('#targon-entry').scroll_into_view_if_needed(); page.wait_for_timeout(300)
    page.screenshot(path=str(SHOTS / 'final-1-root-entry-mobile.png'))
    print('shot 1 OK')
    # کارت → صفحهٔ بازی (همان شبیه‌سازی کلیک کاربر)
    page.locator('#targon-entry').tap(); page.wait_for_url('**/game/index.html**', timeout=5000)
    page.wait_for_timeout(800)
    page.screenshot(path=str(SHOTS / 'final-2-game-boot-mobile.png'))
    print('shot 2 OK')
    create_and_enter(page)
    # بازگشت به جریان واقعی ورود: بارگیری تازهٔ صفحهٔ بازی (بدون ساخت شخصیت — مثل مسیر آزمون ۳۲بندی)
    page.goto(f'{BASE}/game/index.html'); page.wait_for_timeout(900)
    # مسیر واقعی کاربر: منوی هفت قلمرو ← تارگون ← بازی کن ← شبکهٔ ۱۱ سرزمین ← ورود به جهان
    page.locator('#btn-realms-open').tap(); page.wait_for_timeout(450)
    page.locator('#realms-grid .dom-card[data-domain="targon"]').tap(); page.wait_for_timeout(450)
    page.locator('#btn-play-domain').tap(); page.wait_for_timeout(450)
    page.locator('#btn-targon-world').tap(); page.wait_for_timeout(1300)
    page.screenshot(path=str(SHOTS / 'final-3-targon-map-mobile.png'))
    print('shot 3 OK')
    page.locator('#btn-t-areas').tap(); page.wait_for_timeout(450)
    page.screenshot(path=str(SHOTS / 'final-4-targon-11areas-mobile.png'))
    print('shot 4 OK')
    page.locator('#sheet-wareas .sheet-close').tap(); page.wait_for_timeout(250)
    page.locator('#btn-t-wallet').tap(); page.wait_for_timeout(600)
    page.screenshot(path=str(SHOTS / 'final-5-wallet-noinitdata-mobile.png'))
    print('shot 5 OK')
    ctx.close()

    # ── ۲) محیط بله با initData — تلاش واقعی auth؛ بدون Backend → پیام صادقانه ──
    ctx2 = mobile(INITD); page2 = ctx2.new_page()
    page2.goto(f'{BASE}/game/index.html'); page2.wait_for_timeout(900)
    page2.locator('#btn-realms-open').tap(); page2.wait_for_timeout(450)
    page2.locator('#realms-grid .dom-card[data-domain="targon"]').tap(); page2.wait_for_timeout(450)
    page2.locator('#btn-play-domain').tap(); page2.wait_for_timeout(450)
    page2.locator('#btn-targon-world').tap(); page2.wait_for_timeout(1500)
    page2.locator('#btn-t-wallet').tap(); page2.wait_for_timeout(1200)
    page2.screenshot(path=str(SHOTS / 'final-6-wallet-bale-no-backend-mobile.png'))
    print('shot 6 OK')
    ctx2.close()
    browser.close()

print('ALL SCREENSHOTS DONE')
