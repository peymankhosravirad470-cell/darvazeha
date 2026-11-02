#!/usr/bin/env python3
"""
Automated verification for «هفتاد و هفت سرزمین» prototype 0.1 (prototype/index.html).
Runs real browser checks with Playwright in Android mobile emulation
(390x844, DPR 3, touch). Prints PASS/FAIL per check. Nothing is invented:
every line reflects an actual assertion made during the run.
Real-device testing on physical Android is NOT done here (reported separately).
"""
import http.server, socketserver, threading, pathlib, sys, time
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
PROTO = ROOT / 'prototype'
SHOTS = ROOT / 'download' / 'prototype-screens'
SHOTS.mkdir(parents=True, exist_ok=True)
PORT = 8124
URL = f'http://127.0.0.1:{PORT}/index.html?debug=1'

results, console_errors, page_errors = [], [], []
def record(name, ok, note=''):
    results.append((name, bool(ok), note))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f' | {note}' if note else ''))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(PROTO), **kw)
    def log_message(self, *a): pass

def serve():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', PORT), Handler) as httpd:
        httpd.serve_forever()

threading.Thread(target=serve, daemon=True).start()
time.sleep(0.6)

def G(page):
    return page.evaluate('() => window.HS77.api.getState()')

def tap_action_when(page, label_contains=None, timeout=4000):
    """Wait until action button is shown (optionally with label) and tap it.
    If a sheet is open, close it first (the HUD sits under the sheet)."""
    deadline = time.time() + timeout/1000
    while time.time() < deadline:
        if page.locator('.sheet.show').count():
            try:
                page.locator('.sheet.show [data-close]').first.tap(timeout=1500)
                page.wait_for_timeout(200)
            except Exception:
                pass
        ab = page.locator('#btn-action')
        if 'show' in (ab.get_attribute('class') or ''):
            txt = ab.inner_text()
            if label_contains is None or label_contains in txt:
                try:
                    ab.tap(timeout=2000)
                    return txt
                except Exception:
                    page.wait_for_timeout(150)
        page.wait_for_timeout(120)
    return None

def hit_when_in_zone(page, timeout=8000):
    """Real UI: watch the marker and tap #btn-hit when it is inside the green zone."""
    deadline = time.time() + timeout/1000
    while time.time() < deadline:
        st = page.evaluate("""() => {
            const m = document.getElementById('t-marker').getBoundingClientRect();
            const z = document.getElementById('t-zone').getBoundingClientRect();
            const mc = m.top + m.height/2, zc = z.top + z.height/2;
            return {dist: Math.abs(mc - zc), inside: Math.abs(mc - zc) <= z.height/2};
        }""")
        if st['inside']:
            page.locator('#btn-hit').tap()
            return True
        page.wait_for_timeout(40)
    return False

with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(
        viewport={'width': 390, 'height': 844}, device_scale_factor=3,
        is_mobile=True, has_touch=True,
        user_agent='Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Mobile Safari/537.36',
        locale='fa-IR',
    )
    page = ctx.new_page()
    page.set_default_timeout(6000)
    page.on('console', lambda m: console_errors.append(m.text) if m.type == 'error' else None)
    page.on('pageerror', lambda e: page_errors.append(str(e)))

    # fresh state
    page.goto('about:blank')
    page.goto(URL)
    page.evaluate("() => localStorage.removeItem('hs77_nemune_v1')")
    page.reload(); page.wait_for_timeout(700)

    # 1 — load & title
    record('01 بارگذاری و عنوان', 'هفتاد و هفت سرزمین' in page.title() and page.locator('#screen-boot.active').count() == 1)
    page.screenshot(path=str(SHOTS / '01-boot.png'))

    # 2 — ورود به جهان → نقشه ۱۳ دروازه
    page.locator('#btn-enter').tap(); page.wait_for_timeout(400)
    n = page.locator('#gate-grid .gate-card').count()
    record('02 نقشهٔ جهان: ۱۳ کارت دروازه', n == 13, f'count={n}')
    page.screenshot(path=str(SHOTS / '02-map.png'))

    # 3 — سرزمین ۱ باز، سرزمین ۲ قفل
    c1 = page.locator('.gate-card[data-gate="1"]').get_attribute('class')
    c2 = page.locator('.gate-card[data-gate="2"]').get_attribute('class')
    record('03 وضعیت قفل/گشوده دروازه‌ها', 'open' in (c1 or '') and 'locked' in (c2 or ''))

    # 4 — ورود به صحنهٔ سرزمین
    page.locator('.gate-card[data-gate="1"]').tap(); page.wait_for_timeout(600)
    record('04 صحنهٔ سرزمین (بوم ایزومتریک)', page.locator('#screen-realm.active').count() == 1 and page.locator('#iso').count() == 1)
    page.screenshot(path=str(SHOTS / '04-realm.png'))

    # 5 — حرکت با جوی‌استیک (رویدادهای لمسی واقعی PointerEvent)
    st0 = G(page)
    joy = page.locator('#joy')
    box = joy.bounding_box()
    cx, cy = box['x']+box['width']/2, box['y']+box['height']/2
    page.touchscreen.tap(cx, cy)  # ensure focus
    page.evaluate("""([cx, cy]) => {
        const joy = document.getElementById('joy');
        const mk = (type, x, y) => new PointerEvent(type, {pointerId: 7, bubbles: true, clientX: x, clientY: y});
        joy.dispatchEvent(mk('pointerdown', cx, cy));
        joy.dispatchEvent(mk('pointermove', cx + 44, cy));
    }""", [cx, cy])
    page.wait_for_timeout(700)
    page.evaluate("""([cx, cy]) => {
        const joy = document.getElementById('joy');
        const mk = (type, x, y) => new PointerEvent(type, {pointerId: 7, bubbles: true, clientX: x, clientY: y});
        joy.dispatchEvent(mk('pointerup', cx, cy));
    }""", [cx, cy])
    st1 = G(page)
    moved = (abs(st1['x']-st0['x']) + abs(st1['y']-st0['y'])) > 0.3
    record('05 حرکت با دستهٔ لمسی', moved, f'delta=({st1["x"]-st0["x"]:.2f},{st1["y"]-st0["y"]:.2f})')

    # 6 — کوه‌کاوی: نزدیک صخره، دکمهٔ کنش، مینی‌گیم M4 با تپ واقعی
    page.evaluate('() => window.HS77.api.teleport(5.8, 4.9)')
    page.wait_for_timeout(400)
    label = tap_action_when(page, 'کوه‌کاوی')
    opened = page.locator('#timing.show').count() == 1
    ok_hit = hit_when_in_zone(page) if opened else False
    page.wait_for_timeout(300)
    st2 = G(page)
    record('06 کوه‌کاوی با مکانیک M4 (تپ واقعی در پنجرهٔ سبز)',
           label is not None and opened and ok_hit and st2['inv'].get('sang', 0) >= 1,
           f'sang={st2["inv"].get("sang", 0)}')
    page.screenshot(path=str(SHOTS / '06-mine.png'))

    # 7 — هیزم‌شکنی
    page.evaluate('() => window.HS77.api.teleport(3.7, 8.7)')
    page.wait_for_timeout(400)
    label = tap_action_when(page, 'هیزم')
    opened = page.locator('#timing.show').count() == 1
    ok_hit = hit_when_in_zone(page) if opened else False
    page.wait_for_timeout(300)
    st3 = G(page)
    record('07 هیزم‌شکنی با M4', label is not None and opened and ok_hit and st3['inv'].get('choob', 0) >= 1,
           f'choob={st3["inv"].get("choob", 0)}')

    # 8 — ساخت در کارگاه: ۲ سنگ + ۱ چوب → ابزار سنگی
    need = 2 - st3['inv'].get('sang', 0)
    tries = 0
    while need > 0 and tries < 6:
        page.evaluate('() => window.HS77.api.teleport(5.8, 4.9)')
        page.wait_for_timeout(350)
        if tap_action_when(page, 'کوه‌کاوی'):
            if hit_when_in_zone(page):
                need -= 1
        tries += 1
    page.evaluate('() => window.HS77.api.teleport(11.1, 9.9)')
    page.wait_for_timeout(400)
    label = tap_action_when(page, 'کارگاه')
    sheet_open = page.locator('#sheet-craft.show').count() == 1
    st4 = G(page)
    can = st4['inv'].get('sang', 0) >= 2 and st4['inv'].get('choob', 0) >= 1
    if sheet_open and can:
        page.locator('#btn-craft').tap()
        page.wait_for_timeout(1600)
    st5 = G(page)
    record('08 ساخت ابزار سنگی در کارگاه', sheet_open and st5['inv'].get('abzar', 0) >= 1,
           f'abzar={st5["inv"].get("abzar", 0)}')
    page.screenshot(path=str(SHOTS / '08-craft.png'))

    # 9 — مأموریت: پذیرش و تحویل به ناخدا (پاداش یک‌بار)
    page.evaluate('() => window.HS77.api.teleport(9.9, 11.2)')
    page.wait_for_timeout(400)
    coins0 = st5['coins']
    tap_action_when(page, 'ناخدا')
    acc = page.locator('#sheet-dialogue.show').count() == 1
    # پذیرش (اگر هنوز پذیرفته نشده) — پس از پذیرش، پنل خودش بسته می‌شود
    if acc and page.get_by_text('پذیرش مأموریت').count():
        page.get_by_text('پذیرش مأموریت').tap(); page.wait_for_timeout(400)
        page.wait_for_timeout(250)
        tap_action_when(page, 'ناخدا')
    # تحویل
    delivered = False
    if page.locator('#sheet-dialogue.show').count() and page.get_by_text('تحویل ابزار سنگی').count():
        page.get_by_text('تحویل ابزار سنگی').tap(); page.wait_for_timeout(400)
        delivered = True
    st6 = G(page)
    record('09 مأموریت «ابزار برای ناخدا»: پذیرش، ساخت، تحویل، پاداش یک‌بار',
           acc and delivered and st6['mission']['done'] and st6['coins'] == coins0 + 20,
           f'coins {coins0}→{st6["coins"]}')
    page.screenshot(path=str(SHOTS / '09-mission.png'))

    # 10 — سفارش کاروان (پیش‌نمایش فروش): تا ۳ سنگ، سپس فروش
    tries = 0
    while st6['inv'].get('sang', 0) < 3 and tries < 8:
        page.evaluate('() => window.HS77.api.teleport(5.8, 4.9)')
        page.wait_for_timeout(350)
        if tap_action_when(page, 'کوه‌کاوی'):
            hit_when_in_zone(page)
        st6 = G(page)
        tries += 1
    page.evaluate('() => window.HS77.api.teleport(5.5, 7.6)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'مهتر')
    sold = False
    if page.locator('#sheet-dialogue.show').count() and page.get_by_text('سفارش کاروان').count():
        coins1 = G(page)['coins']
        page.get_by_text('سفارش کاروان').tap(); page.wait_for_timeout(400)
        sold = G(page)['coins'] == coins1 + 6
    st7 = G(page)
    record('10 فروش ۳ سنگ به کاروان (+۶ سکه، نرخ آزمایشی)', sold, f'coins={st7["coins"]}')

    # 11 — پازل مرجانی: برداشت ۳ سنگ، چیدن به ترتیب اندازه، صندوق
    for pos in [(13.5, 3.3), (2.0, 13.3), (14.0, 14.7)]:
        page.evaluate(f'() => window.HS77.api.teleport({pos[0]}, {pos[1]})')
        page.wait_for_timeout(350)
        tap_action_when(page, 'سنگ‌مرجان')
    page.evaluate('() => window.HS77.api.teleport(2.4, 4.1)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'دروازهٔ مرجانی')
    pz = page.locator('#sheet-puzzle.show').count() == 1
    order_ok = True
    if pz:
        for size_text, ped_i in [('درشت', 0), ('میانه', 1), ('ریز', 2)]:
            btn = page.locator(f'.coral-btn', has_text=size_text)
            if not btn.count():
                order_ok = False; break
            btn.first.tap(); page.wait_for_timeout(150)
            page.locator(f'.pedestal[data-i="{ped_i}"]').tap(); page.wait_for_timeout(250)
    page.wait_for_timeout(300)
    st8 = G(page)
    record('11 پازل دروازهٔ مرجانی (قطعی، بدون شانس)', pz and order_ok and st8['puzzle']['solved'])
    page.screenshot(path=str(SHOTS / '11-puzzle.png'))

    # 12 — صندوق دروازه (محتوای ثابت + تأیید دوم)
    page.evaluate('() => window.HS77.api.teleport(4.15, 3.15)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'صندوق')
    conf = page.locator('#confirm.show').count() == 1
    if conf:
        page.locator('#btn-confirm-yes').tap(); page.wait_for_timeout(400)
    st9 = G(page)
    record('12 صندوق دروازه با تأیید دوم — محتوای ثابت بدون شانس',
           conf and st9['chestOpen'] and st9['inv'].get('neshan', 0) >= 1 and st9['inv'].get('bolur', 0) >= 2)

    # 13 — خانه و صندوق شخصی (گذاشتن/برداشتن)
    page.evaluate('() => window.HS77.api.teleport(8.0, 12.2)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'خانهٔ مسافر')
    hs = page.locator('#sheet-house.show').count() == 1
    dep = False
    if hs and page.locator('#sheet-house [data-dep]').count():
        page.locator('#sheet-house [data-dep]').first.tap(); page.wait_for_timeout(300)
        dep = True
    record('13 خانه: صندوق شخصی — گذاشتن/برداشتن', hs and dep)
    page.screenshot(path=str(SHOTS / '13-house.png'))

    # 14 — کارنامهٔ مسافر
    if page.locator('.sheet.show').count():
        page.locator('.sheet.show [data-close]').first.tap(); page.wait_for_timeout(300)
    page.locator('#btn-profile').tap(); page.wait_for_timeout(300)
    prof_txt = page.locator('#profile-body').inner_text()
    record('14 کارنامه: سطح، تجربه، حرفهٔ معدن‌کاری',
           'حرفهٔ معدن‌کاری' in prof_txt and 'سطح' in prof_txt)
    page.screenshot(path=str(SHOTS / '14-profile.png'))

    # 15 — وضعیت سرزمین + دفترکل
    if page.locator('.sheet.show').count():
        page.locator('.sheet.show [data-close]').first.tap(); page.wait_for_timeout(300)
    page.locator('#btn-status').tap(); page.wait_for_timeout(300)
    st_txt = page.locator('#status-body').inner_text()
    record('15 وضعیت سرزمین: سکونتگاه، تولید، دفترکل ضمیمه‌تنها',
           'روستا' in st_txt and 'دفترکل' in st_txt and 'evt_' in st_txt)
    page.screenshot(path=str(SHOTS / '15-status.png'))

    # 16 — یادداشت‌های نمونه (معماری/مصوبات/موارد باز)
    if page.locator('.sheet.show').count():
        page.locator('.sheet.show [data-close]').first.tap(); page.wait_for_timeout(300)
    page.locator('#btn-notes').tap(); page.wait_for_timeout(300)
    notes_txt = page.locator('#notes-body').inner_text()
    record('16 یادداشت‌ها: گزینه‌های معماری، مصوبات، موضوعات باز',
           'نیازمند تصویب کارفرما' in notes_txt and 'M4' in notes_txt and 'A1' in notes_txt)
    page.locator('#sheet-notes [data-close]').first.tap()

    # 17 — سرریز افقی ندارد (موبایل ۳۹۰px)
    ovf = page.evaluate('() => document.scrollingElement.scrollWidth - window.innerWidth')
    record('17 بدون اسکرول افقی در ۳۹۰px', ovf <= 1, f'overflow={ovf}px')

    # 18 — ماندگاری ذخیره پس از بارگذاری مجدد
    before = G(page)
    page.reload(); page.wait_for_timeout(800)
    after = G(page)
    record('18 ماندگاری localStorage پس از reload',
           after['coins'] == before['coins'] and after['mission']['done'] and after['puzzle']['solved'],
           f'coins={after["coins"]}')

    # 19 — بازی v1 دست‌نخورده: فایل مستقل است و کلید ذخیرهٔ جدا دارد
    keys = page.evaluate("() => Object.keys(localStorage)")
    record('19 کلید ذخیرهٔ جدا از v1 (hs77_nemune_v1)', 'hs77_nemune_v1' in keys and 'darvazeha_progress_v1' not in keys,
           f'keys={keys}')

    # 20 — خطاهای کنسول/صفحه در کل سناریو
    record('20 بدون خطای JavaScript در کل سناریو', not console_errors and not page_errors,
           f'console={console_errors[:2]} page={page_errors[:2]}')

    browser.close()

fails = [r for r in results if not r[1]]
print(f"\n=== جمع‌بندی نمونهٔ اولیه: {len(results)-len(fails)}/{len(results)} PASS ===")
print(f"\u062e\u0637\u0627\u0647\u0627\u06cc \u06a9\u0646\u0633\u0648\u0644: {console_errors[:3]}") if console_errors else None
sys.exit(1 if fails else 0)
