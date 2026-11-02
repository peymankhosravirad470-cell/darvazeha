#!/usr/bin/env python3
"""
Automated verification suite for «هفتاد و هفت سرزمین» v1 (index.html).
Runs 13 real browser checks with Playwright and saves screenshots
to download/screenshots/. Prints a PASS/FAIL line per check.
No results are invented: each line reflects an actual assertion.
"""
import http.server, socketserver, threading, pathlib, sys, time
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SHOTS = ROOT / 'download' / 'screenshots'
SHOTS.mkdir(parents=True, exist_ok=True)
URL = 'http://127.0.0.1:8123/index.html'
KEY = 'darvazeha_progress_v1'

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)
    def log_message(self, *a): pass

def serve():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', 8123), Handler) as httpd:
        httpd.serve_forever()

threading.Thread(target=serve, daemon=True).start()
time.sleep(0.6)

results, console_errors, page_errors = [], [], []
def record(name, ok, note=''):
    results.append((name, bool(ok), note))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f" | {note}" if note else ''))

def get_player_pos(page):
    return page.evaluate("""() => {
        const r = document.getElementById('player').getBoundingClientRect();
        return {x: r.left, y: r.top};
    }""")

with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={'width': 1180, 'height': 760})
    page = ctx.new_page()
    page.on('console', lambda m: console_errors.append(m.text) if m.type == 'error' else None)
    page.on('pageerror', lambda e: page_errors.append(str(e)))

    # ---------- 1) main page opens ----------
    try:
        page.goto(URL, wait_until='load', timeout=20000)
        page.wait_for_timeout(800)
        home_ok = page.evaluate("() => !!document.querySelector('#view-gates.active')")
        record('1. باز شدن صفحهٔ اصلی', home_ok, 'view-gates active')
        page.screenshot(path=str(SHOTS / '01-home-desktop_1180x760.png'))
    except Exception as e:
        record('1. باز شدن صفحهٔ اصلی', False, f'exception: {e}')

    # ---------- 2) 13 gates displayed ----------
    n = page.evaluate("() => document.querySelectorAll('#gates-grid .gate').length")
    record('2. نمایش ۱۳ دروازه', n == 13, f'count={n}')

    # ---------- 3) map opens ----------
    page.click('button[data-view="map"]'); page.wait_for_timeout(500)
    nodes = page.evaluate("() => document.querySelectorAll('#map-svg .map-node').length")
    map_ok = page.evaluate("() => !!document.querySelector('#view-map.active')") and nodes == 13
    record('3. باز شدن نقشهٔ جهان', map_ok, f'nodes={nodes}')
    page.screenshot(path=str(SHOTS / '02-map-desktop_1180x760.png'))

    # ---------- 4) profile opens ----------
    page.click('button[data-view="profile"]'); page.wait_for_timeout(500)
    prof_ok = page.evaluate("() => !!document.querySelector('#view-profile.active')")
    record('4. باز شدن پروفایل', prof_ok)
    page.screenshot(path=str(SHOTS / '03-profile-desktop_1180x760.png'))

    # ---------- 5) QR modal ----------
    page.click('#btn-qr'); page.wait_for_timeout(400)
    qr_ok = page.evaluate("() => document.getElementById('qr-modal').classList.contains('open')")
    record('5. باز شدن مودال QR', qr_ok)
    page.screenshot(path=str(SHOTS / '04-qr-modal-desktop_1180x760.png'))
    page.click('#qr-modal .modal-close'); page.wait_for_timeout(300)
    qr_closed = page.evaluate("() => !document.getElementById('qr-modal').classList.contains('open')")
    record('10a. بستن مودال QR با دکمهٔ ✕', qr_closed)

    # ---------- 6) gate-1 modal ----------
    page.click('button[data-view="gates"]'); page.wait_for_timeout(400)
    page.click('.gate:not(.locked)'); page.wait_for_timeout(400)
    gm_ok = page.evaluate("""() => {
        const m = document.getElementById('gate-modal');
        return m.classList.contains('open') &&
               document.getElementById('gm-title').textContent.includes('دریای شیشه‌ای');
    }""")
    record('6. باز شدن مودال دروازهٔ اول', gm_ok)
    page.screenshot(path=str(SHOTS / '05-gate1-modal-desktop_1180x760.png'))

    # ---------- 7) enter Glass Sea scene ----------
    page.click('#gm-actions .btn'); page.wait_for_timeout(700)
    scene_ok = page.evaluate("() => document.getElementById('scene').classList.contains('active')")
    record('7. ورود به صحنهٔ دریای شیشه‌ای', scene_ok)
    page.screenshot(path=str(SHOTS / '06-scene-glass-sea-desktop_1180x760.png'))

    # ---------- 8) keyboard movement ----------
    p0 = get_player_pos(page)
    page.keyboard.down('ArrowRight'); page.keyboard.down('ArrowUp')
    page.wait_for_timeout(900)
    page.keyboard.up('ArrowRight'); page.keyboard.up('ArrowUp')
    p1 = get_player_pos(page)
    moved_kb = (abs(p1['x'] - p0['x']) + abs(p1['y'] - p0['y'])) > 40
    record('8. حرکت با کیبورد', moved_kb,
           f'dx={p1["x"]-p0["x"]:.0f}px dy={p1["y"]-p0["y"]:.0f}px')
    page.screenshot(path=str(SHOTS / '07-scene-moved-keyboard-desktop_1180x760.png'))

    # ---------- 9) joystick movement (pointer simulation) ----------
    p2 = get_player_pos(page)
    box = page.locator('#joy').bounding_box()
    cx, cy = box['x'] + box['width']/2, box['y'] + box['height']/2
    page.mouse.move(cx, cy); page.mouse.down()
    page.mouse.move(cx + 42, cy - 42, steps=8)
    page.wait_for_timeout(800)          # keep dragging → rAF loop keeps moving
    p3 = get_player_pos(page)
    page.mouse.up(); page.wait_for_timeout(200)
    moved_js = (abs(p3['x'] - p2['x']) + abs(p3['y'] - p2['y'])) > 30
    record('9. حرکت با کنترل لمسی (شبیه‌سازی pointer — دستگاه لمسی واقعی در دسترس نبود)',
           moved_js, f'dx={p3["x"]-p2["x"]:.0f}px dy={p3["y"]-p2["y"]:.0f}px')
    page.screenshot(path=str(SHOTS / '08-scene-moved-joystick-desktop_1180x760.png'))

    # ---------- 10b) back button + gate modal close ----------
    page.click('#btn-exit-scene'); page.wait_for_timeout(400)
    back_ok = page.evaluate("""() => !document.getElementById('scene').classList.contains('active')
                                && document.querySelector('.topbar').style.display !== 'none'""")
    record('10b. دکمهٔ بازگشت از صحنه', back_ok)
    page.click('.gate:not(.locked)'); page.wait_for_timeout(300)
    page.click('#gate-modal .modal-close'); page.wait_for_timeout(300)
    gm_closed = page.evaluate("() => !document.getElementById('gate-modal').classList.contains('open')")
    record('10c. بستن مودال دروازه با دکمهٔ ✕', gm_closed)

    # ---------- 11) localStorage save/restore ----------
    page.evaluate(f"""() => localStorage.setItem('{KEY}', JSON.stringify({{unlocked:3, visited:[1], missions:2, stars:5}}))""")
    page.reload(wait_until='load'); page.wait_for_timeout(700)
    chip = page.evaluate("() => document.getElementById('chip-progress').textContent")
    g2_unlocked = page.evaluate("() => !document.querySelectorAll('#gates-grid .gate')[1].classList.contains('locked')")
    ls_ok = ('۳' in chip) and g2_unlocked
    record('11. ذخیره/بازیابی localStorage (تزریق state → reload → بازیابی)', ls_ok, f'chip="{chip}"')
    page.screenshot(path=str(SHOTS / '09-gates-after-reload-desktop_1180x760.png'))
    page.evaluate(f"() => localStorage.removeItem('{KEY}')")
    page.reload(wait_until='load'); page.wait_for_timeout(600)

    # ---------- 12) mobile rendering ----------
    page.set_viewport_size({'width': 390, 'height': 844}); page.wait_for_timeout(500)
    overflow_home = page.evaluate("() => document.documentElement.scrollWidth - document.documentElement.clientWidth")
    record('12a. موبایل ۳۹۰×۸۴۴ — خانه بدون سرریز افقی', overflow_home <= 1, f'overflowX={overflow_home}px')
    page.screenshot(path=str(SHOTS / '10-home-mobile_390x844.png'))
    page.click('.gate:not(.locked)'); page.wait_for_timeout(300)
    page.click('#gm-actions .btn'); page.wait_for_timeout(600)
    overflow_scene = page.evaluate("() => document.documentElement.scrollWidth - document.documentElement.clientWidth")
    record('12b. موبایل ۳۹۰×۸۴۴ — صحنهٔ اکتشاف بدون سرریز افقی', overflow_scene <= 1, f'overflowX={overflow_scene}px')
    page.screenshot(path=str(SHOTS / '11-scene-mobile_390x844.png'))
    page.click('#btn-exit-scene'); page.wait_for_timeout(300)

    # ---------- 13) no JS console errors ----------
    no_err = (len(console_errors) == 0 and len(page_errors) == 0)
    record('13. نبود خطای JavaScript در کنسول (کل سناریو)', no_err,
           f'consoleErrors={len(console_errors)} pageErrors={len(page_errors)}')
    for e in (console_errors + page_errors):
        print(f'   console/page error: {e[:200]}')

    browser.close()

passed = sum(1 for _, ok, _ in results if ok)
print(f'\n=== SUMMARY: {passed}/{len(results)} passed ===')
sys.exit(0 if passed == len(results) else 1)
