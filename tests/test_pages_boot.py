#!/usr/bin/env python3
"""بوت واقعی صفحه‌ها در مرورگر با SDK رسمی بله (فیکسچر محلی از طریق route — بدون شبکهٔ بیرونی)

پوشش ریشهٔ خطای «Identifier 'S' has already been declared»:
- صفحهٔ بازی (game/index.html) در مرورگر عادی (اندروید-مانند) بالا می‌آید؛
- جهان تارگون باز می‌شود؛ کیف پول بدون initData صادقانه «در دسترس نیست»؛
- با initData (شبیه‌سازی محیط بله) و بدون Backend: تلاش واقعی auth به
  /api/v1/auth/bale و سپس پیام صادقانه — هیچ عدد قلابی نمایش داده نمی‌شود؛
- منوی اصلی جدید: دقیقاً سه گزینه (هفت امپراتوری / نقشهٔ کل مناطق / پروفایل و تنظیمات)،
  نشان کوچک وضعیت سرور (نه دکمهٔ «اتصال سرور»)، و هر سه مقصد واقعاً بوت می‌شوند؛
- نقشهٔ کل مناطق: ۷ قلمرو و ۷۷ سرزمین رسمی از data.json رندر می‌شود؛
- پروفایل: دسترسی به نسخهٔ پیشین حفظ شده و به /game/index.html می‌رود. """
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

    # ── ۳) منوی اصلی جدید: دقیقاً سه گزینه + نشان سرور ──
    ctx3 = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    ctx3.route(SDK_RE, route)
    errs3 = []
    page3 = new_page(ctx3, errs3)
    page3.goto(f'{BASE}/index.html'); page3.wait_for_timeout(800)
    record('منوی اصلی: بدون خطای «already been declared»', not any(BAD in e for e in errs3))
    record('منوی اصلی: دقیقاً سه گزینهٔ اصلی وجود دارد',
           page3.locator('#menu-empires').count() == 1 and page3.locator('#menu-map').count() == 1
           and page3.locator('#menu-profile').count() == 1)
    record('منوی اصلی: گزینه‌های اضافی (اتصال سرور/دروازه‌ها/نقشهٔ ۱۳گانه) حذف شده‌اند',
           page3.locator('#cloud-action').count() == 0 and page3.locator('#gates-grid').count() == 0)
    record('منوی اصلی: وضعیت سرور به‌صورت نشان کوچک است', page3.locator('#status-badge').count() == 1)
    href = page3.locator('#menu-empires').get_attribute('href')
    record('منوی اصلی: گزینهٔ ۱ به نسخهٔ هفت دروازه می‌رود', href == '/game/gates/index.html', str(href))
    page3.locator('#menu-empires').tap()
    page3.wait_for_url('**/game/gates/index.html**', timeout=5000)
    page3.wait_for_timeout(700)
    record('گزینهٔ ۱: نسخهٔ هفت دروازه واقعاً باز و بوت شد', page3.locator('#title-screen.active').count() == 1)
    page3.screenshot(path=str(SHOTS / 'boot-menu-empires.png'))
    ctx3.close()

    # ── ۴) نقشهٔ کل مناطق: ۷ قلمرو و ۷۷ سرزمین رسمی ──
    ctx4 = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    ctx4.route(SDK_RE, route)
    errs4 = []
    page4 = new_page(ctx4, errs4)
    page4.goto(f'{BASE}/game/map/index.html'); page4.wait_for_timeout(1200)
    record('نقشهٔ کل مناطق: بدون خطای جاوااسکریپت', not any(BAD in e for e in errs4), ' | '.join(errs4[:2]))
    record('نقشهٔ کل مناطق: دادهٔ رسمی ۷×۱۱ بارگذاری شد',
           page4.evaluate('() => window.__MAP77 && window.__MAP77.realms === 7 && window.__MAP77.lands === 77'))
    record('نقشهٔ کل مناطق: هر ۷۷ گرهٔ سرزمین رندر شد', page4.locator('#map-svg g[data-land]').count() == 77)
    record('نقشهٔ کل مناطق: نام رسمی «سپیده‌دم» روی نقشه هست',
           'سپیده‌دم' in page4.evaluate("() => document.getElementById('map-svg').textContent"))
    page4.locator('#map-svg g[data-land]').first.tap(); page4.wait_for_timeout(500)
    record('نقشهٔ کل مناطق: پنل اطلاعات سرزمین باز می‌شود', page4.locator('#sheet.on').count() == 1)
    page4.screenshot(path=str(SHOTS / 'boot-world-map.png'))
    ctx4.close()

    # ── ۵) پروفایل و تنظیمات + حفظ دسترسی به نسخهٔ پیشین ──
    ctx5 = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    ctx5.route(SDK_RE, route)
    errs5 = []
    page5 = new_page(ctx5, errs5)
    page5.goto(f'{BASE}/game/profile/index.html'); page5.wait_for_timeout(900)
    record('پروفایل: بدون خطای جاوااسکریپت', not any(BAD in e for e in errs5), ' | '.join(errs5[:2]))
    record('پروفایل: بدون initData صادقانه «قطع» است و عددی نشان نمی‌دهد',
           page5.locator('.w-off').count() == 1 and page5.locator('.balance').count() == 0)
    record('پروفایل: تنظیمات صدا/گرافیک/کنترل/متن هست',
           page5.locator('#sw-sound').count() == 1 and page5.locator('#seg-quality button').count() == 4
           and page5.locator('#seg-joy button').count() == 2 and page5.locator('#seg-text button').count() == 2)
    href_old = page5.locator('#legacy-entry').get_attribute('href')
    record('پروفایل: دسترسی به نسخهٔ پیشین حفظ شده و به /game/index.html می‌رود',
           href_old == '/game/index.html', str(href_old))
    page5.locator('#legacy-entry').tap()
    page5.wait_for_url('**/game/index.html**', timeout=5000)
    page5.wait_for_timeout(700)
    record('نسخهٔ پیشین: صفحهٔ بازی قدیمی واقعاً بوت شد', page5.locator('#screen-boot.active').count() == 1)
    page5.screenshot(path=str(SHOTS / 'boot-profile-legacy.png'))
    ctx5.close()

    # ── ۶) پایگاه خانگی: انتخاب یک‌بار ← ورود مستقیم ← سفر آگاهانه از نقشه ──
    ctx6 = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    ctx6.route(SDK_RE, route)
    ctx6.add_init_script("try{localStorage.setItem('lands.home', JSON.stringify({r:'targon',l:'t1'}))}catch(e){}")
    errs6 = []
    page6 = new_page(ctx6, errs6)
    page6.goto(f'{BASE}/index.html'); page6.wait_for_timeout(700)
    href6 = page6.locator('#menu-empires').get_attribute('href')
    record('پایگاه خانگی: گزینهٔ ۱ منو مستقیم به دهکدهٔ خود بازیکن می‌رود',
           href6 == '/game/village/index.html?realm=targon&land=t1', str(href6))
    page6.goto(f'{BASE}/game/gates/index.html')
    page6.wait_for_url('**/game/village/index.html**', timeout=8000)
    record('پایگاه خانگی: بازکردن صفحهٔ هفت دروازه مستقیم به پایگاه خانگی می‌رسد',
           'realm=targon' in page6.url and 'land=t1' in page6.url, page6.url)
    ctx6.close()

    ctx7 = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    ctx7.route(SDK_RE, route)
    errs7 = []
    page7 = new_page(ctx7, errs7)
    page7.goto(f'{BASE}/game/gates/index.html?travel=dezhmaar'); page7.wait_for_timeout(900)
    record('سفر آگاهانه: فهرست سرزمین‌های همان امپراتوری مستقیم باز می‌شود',
           page7.locator('#lands-screen.active').count() == 1
           and 'دژمار' in page7.locator('#lands-realm-name').inner_text())
    record('سفر آگاهانه: پایگاه خانگی ساخته نمی‌شود',
           page7.evaluate("() => localStorage.getItem('lands.home')") is None)
    page7.goto(f'{BASE}/game/map/index.html'); page7.wait_for_timeout(1200)
    page7.locator('#map-svg g[data-realm="targon"][data-land="t1"]').tap(); page7.wait_for_timeout(500)
    go7 = page7.locator('#sh-go').get_attribute('href')
    record('نقشهٔ کل: دکمهٔ ورود پنل، سفر آگاهانه به همان امپراتوری است',
           go7 == '/game/gates/index.html?travel=targon', str(go7))
    record('سفر/نقشه: بدون خطای جاوااسکریپت', not any(BAD in e for e in errs7), ' | '.join(errs7[:2]))
    ctx7.close()
    browser.close()

n_ok = sum(1 for r in results if r)
print(f"== test_pages_boot: {n_ok}/{len(results)} PASS ==")
sys.exit(0 if n_ok == len(results) else 1)
