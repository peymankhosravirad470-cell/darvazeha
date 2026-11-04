#!/usr/bin/env python3
"""
آزمون مرحله ۱ — منوی هفت قلمرو + شبکهٔ ۱۱ سرزمین (game/index.html)
Playwright در شبیه‌سازی اندروید (390x844, DPR 3, touch).
هر خط PASS/FAIL حاصل یک assertions واقعی در مرورگر است.
"""
import http.server, socketserver, threading, pathlib, sys, time
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
GAME = ROOT / 'game'
SHOTS = ROOT / 'download' / 'game-screens'
SHOTS.mkdir(parents=True, exist_ok=True)
PORT = 8131
URL = f'http://127.0.0.1:{PORT}/index.html'

results, console_errors, page_errors = [], [], []

def record(name, ok, note=''):
    results.append((name, bool(ok), note))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f' | {note}' if note else ''))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(GAME), **kw)
    def log_message(self, *a): pass

def serve():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', PORT), Handler) as httpd:
        httpd.serve_forever()

threading.Thread(target=serve, daemon=True).start()
time.sleep(0.6)

EXPECT_FA = ['تارگون', 'دژمار', 'آرگاد', 'مرداک', 'ورگاد', 'زرداک', 'تارماد']
EXPECT_EN = ['TARGON', 'DEZHMAAR', 'ARGAD', 'MARDAK', 'VERGAD', 'ZARDAK', 'TARMAD']
OPEN_IDS = ['targon', 'dezhmaar']
LOCKED_IDS = ['argad', 'mardak', 'vergad', 'zardak', 'tarmad']

def active(page, screen_id):
    return page.evaluate(f"() => document.getElementById('{screen_id}').classList.contains('active')")

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context(
            viewport={'width': 390, 'height': 844}, device_scale_factor=3,
            is_mobile=True, has_touch=True,
            user_agent='Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 Chrome/120 Mobile',
        )
        page = ctx.new_page()
        page.on('console', lambda m: console_errors.append(m.text) if m.type == 'error' else None)
        page.on('pageerror', lambda e: page_errors.append(str(e)))
        page.goto(URL)
        page.wait_for_timeout(700)

        # ۱) دکمهٔ «هفت قلمرو» در صفحهٔ آغاز
        cta = page.locator('#btn-realms-open')
        record('boot CTA visible', cta.is_visible())
        record('boot CTA title text', 'هفت قلمرو' in (cta.inner_text() or ''))

        # ۲) بازشدن منو
        cta.tap()
        page.wait_for_timeout(450)
        record('realms screen opens', active(page, 'screen-realms'))

        # ۳) هفت کارت با نام‌های دقیق به ترتیب رسمی
        cards = page.locator('#realms-grid .dom-card')
        record('exactly 7 realm cards', cards.count() == 7, f'n={cards.count()}')
        fa = page.evaluate("() => [...document.querySelectorAll('#realms-grid .dom-fa')].map(e=>e.textContent.trim())")
        en = page.evaluate("() => [...document.querySelectorAll('#realms-grid .dom-en')].map(e=>e.textContent.trim())")
        record('fa names exact order', fa == EXPECT_FA, str(fa))
        record('en names exact order', en == EXPECT_EN, str(en))

        # ۴) وضعیت آزاد/قفل: ۲ آزاد، ۵ قفل با نشان «به‌زودی»
        open_ids = page.evaluate("() => [...document.querySelectorAll('#realms-grid .dom-card.open')].map(e=>e.dataset.domain)")
        locked_ids = page.evaluate("() => [...document.querySelectorAll('#realms-grid .dom-card.locked')].map(e=>e.dataset.domain)")
        record('targon+dezhmaar unlocked', sorted(open_ids) == sorted(OPEN_IDS), str(open_ids))
        record('5 realms locked', sorted(locked_ids) == sorted(LOCKED_IDS), str(locked_ids))
        lock_badges = page.evaluate("() => [...document.querySelectorAll('#realms-grid .dom-card.locked .lock-badge')].map(e=>e.textContent)")
        record('lock badges show به‌زودی', len(lock_badges) == 5 and all('به‌زودی' in b for b in lock_badges))

        # ۵) تصاویر اختصاصی: هر کارت data URI مستقل (۶ تصویر + ۶ پرچم) · تارماد بدون تصویر جعل‌شده
        info = page.evaluate("""() => [...document.querySelectorAll('#realms-grid .dom-card')].map(c => ({
            id: c.dataset.domain,
            img: (c.querySelector('.dom-img')||{}).src || '',
            noimg: !!c.querySelector('.dom-noimg'),
            flag: (c.querySelector('.dom-flag')||{}).src || '',
            noflag: !!c.querySelector('.dom-flag-none'),
        }))""")
        byid = {x['id']: x for x in info}
        six = ['targon','dezhmaar','argad','mardak','vergad','zardak']
        record('6 realm images embedded', all(byid[i]['img'].startswith('data:image/') for i in six))
        record('6 distinct images (no shared asset)',
               len({byid[i]['img'] for i in six}) == 6)
        record('6 flags embedded', all(byid[i]['flag'].startswith('data:image/') for i in six))
        record('tarmad has NO invented image/flag', byid['tarmad']['noimg'] and byid['tarmad']['noflag'])

        page.screenshot(path=str(SHOTS / 'domains-menu.png'))

        # ۶) قلمرو قفل قابل ورود نیست (توست می‌دهد، صفحه عوض نمی‌شود)
        page.locator('#realms-grid .dom-card[data-domain="argad"]').tap()
        page.wait_for_timeout(350)
        toast = page.evaluate("() => { const t=document.querySelector('.toast'); return t?t.textContent:''; }")
        record('locked realm rejected with toast', 'آرگاد' in toast and 'قفل' in toast, toast[:40])
        record('stays on realms screen', active(page, 'screen-realms'))

        # ۷) معرفی تارگون: تصویر بزرگ + پرچم + نام + دکمهٔ بازی کن
        page.locator('#realms-grid .dom-card[data-domain="targon"]').tap()
        page.wait_for_timeout(450)
        record('domain intro opens', active(page, 'screen-domain'))
        record('intro fa name', page.locator('#domain-fa').inner_text().strip() == 'تارگون')
        record('intro en name', page.locator('#domain-en').inner_text().strip() == 'TARGON')
        record('intro hero image embedded', page.evaluate("() => (document.querySelector('#domain-media img')||{}).src||''").startswith('data:image/'))
        record('intro flag embedded', page.evaluate("() => (document.querySelector('#domain-flagbox img')||{}).src||''").startswith('data:image/'))
        play = page.locator('#btn-play-domain')
        record('play button visible', play.is_visible() and 'بازی کن' in play.inner_text())
        page.screenshot(path=str(SHOTS / 'domains-intro-targon.png'))

        # ۸) بازی کن → ۱۱ سرزمین تارگون (۳ قابل بازی رسمی + ۸ جایگاه آینده)
        play.tap()
        page.wait_for_timeout(450)
        record('lands screen opens', active(page, 'screen-lands'))
        lands = page.locator('#lands-grid .land-card')
        record('targon has exactly 11 lands', lands.count() == 11, f'n={lands.count()}')
        playable = page.evaluate("() => [...document.querySelectorAll('#lands-grid .land-card.playable .l-name')].map(e=>e.textContent.trim())")
        record('targon 3 official playable lands',
               playable == ['دریای شیشه‌ای', 'جنگل نقره‌ای', 'کوه بلورین'], str(playable))
        record('targon 8 future slots locked', page.locator('#lands-grid .land-card.tbd').count() == 8)
        record('lands counter chip', '۳' in page.locator('#chip-lands-count').inner_text() and '۱۱' in page.locator('#chip-lands-count').inner_text())
        page.screenshot(path=str(SHOTS / 'domains-lands-targon.png'))

        # ۹) ورود واقعی: ساخت شخصیت سپس ورود به سرزمین ۱ از کارت سرزمین
        page.locator('#lands-grid .land-card.playable[data-land="1"]').tap()
        page.wait_for_timeout(450)
        record('creation flow triggered for new player',
               page.evaluate("() => document.getElementById('creation').classList.contains('show')"))
        page.fill('#cre-name', 'آزمون قلمرو')
        page.locator('#btn-cre-start').tap()
        page.wait_for_timeout(700)
        record('after creation lands in world map', active(page, 'screen-map'))

        # ۱۰) دکمهٔ قلمروها داخل نقشهٔ جهان
        page.locator('#btn-realms-from-map').tap()
        page.wait_for_timeout(400)
        record('realms menu from map', active(page, 'screen-realms'))
        page.locator('#realms-grid .dom-card[data-domain="targon"]').tap(); page.wait_for_timeout(350)
        page.locator('#btn-play-domain').tap(); page.wait_for_timeout(350)
        page.locator('#lands-grid .land-card.playable[data-land="1"]').tap()
        page.wait_for_timeout(900)
        record('land card enters real game realm', active(page, 'screen-realm'))
        record('realm title is Glass Sea', 'دریای شیشه‌ای' in page.locator('#realm-title').inner_text())

        # ۱۱) دژمار: ۱۱ سرزمین، هیچ‌کدام قابل بازی (بدون نام‌گذاری خودسرانه)
        page.locator('#btn-back-map').tap(); page.wait_for_timeout(350)
        page.locator('#btn-realms-from-map').tap(); page.wait_for_timeout(350)
        page.locator('#realms-grid .dom-card[data-domain="dezhmaar"]').tap(); page.wait_for_timeout(350)
        record('dezhmaar intro opens', active(page, 'screen-domain'))
        page.locator('#btn-play-domain').tap(); page.wait_for_timeout(350)
        record('dezhmaar 11 lands', page.locator('#lands-grid .land-card').count() == 11)
        record('dezhmaar 0 playable (no invented names)', page.locator('#lands-grid .land-card.playable').count() == 0)
        record('dezhmaar all 11 to-be-named', page.locator('#lands-grid .land-card.tbd').count() == 11)
        page.screenshot(path=str(SHOTS / 'domains-lands-dezhmaar.png'))

        # ۱۲) ناوبری برگشت: سرزمین‌ها → معرفی → منو
        page.locator('#btn-lands-back').tap(); page.wait_for_timeout(300)
        record('lands back to intro', active(page, 'screen-domain'))
        page.locator('#btn-domain-back').tap(); page.wait_for_timeout(300)
        record('intro back to menu', active(page, 'screen-realms'))
        page.locator('#btn-realms-back').tap(); page.wait_for_timeout(300)
        record('menu back to map (started player)', active(page, 'screen-map'))

        # ۱۳) خطاهای کنسول
        record('zero console errors', not console_errors, str(console_errors[:2]))
        record('zero page errors', not page_errors, str(page_errors[:2]))

        browser.close()

    ok = all(r[1] for r in results)
    print(f"\n== verify_domains: {sum(1 for r in results if r[1])}/{len(results)} PASS ==")
    sys.exit(0 if ok else 1)

try:
    run()
except Exception as exc:
    print('FATAL |', exc)
    for name, okv, note in results:
        print(('PASS' if okv else 'FAIL'), '|', name)
    sys.exit(1)
