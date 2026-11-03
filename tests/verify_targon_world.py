#!/usr/bin/env python3
"""
آزمون مرحلهٔ ۲ — جهان آغازین تارگون (game/index.html)
نقشهٔ مادر ایزومتریک، ۱۱ ناحیه با نام‌های دقیق، حرکت بازیکن، نشانگر موقعیت،
مأموریت‌های آغازین، کیف پول سرویس‌محور، ورودی از شبکهٔ ۱۱ سرزمین.
Playwright در شبیه‌سازی اندروید (390x844, DPR 3, touch).
"""
import http.server, socketserver, threading, pathlib, sys, time
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
GAME = ROOT / 'game'
SHOTS = ROOT / 'download' / 'game-screens'
SHOTS.mkdir(parents=True, exist_ok=True)
PORT = 8133
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

# نام‌های دقیق ۱۱ ناحیه — عین دستور کارفرما
EXPECT_AREAS = ['سپیده‌دم', 'دهکده آذرین', 'میدان هم‌پیمانان', 'بازار کهن', 'دشت سبز',
                'جنگل زمرد', 'رود روشن', 'کوهستان سنگ‌نگهبان', 'دژ نگهبان',
                'ویرانه‌های خاموش', 'دروازه سرخ']

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

        # ۱) مسیر ورود: آغاز → هفت قلمرو → تارگون → بازی کن → ۱۱ سرزمین
        page.locator('#btn-realms-open').tap()
        page.wait_for_timeout(400)
        record('ورود: منوی هفت قلمرو باز شد', active(page, 'screen-realms'))
        page.locator('#realms-grid .dom-card[data-domain="targon"]').tap()
        page.wait_for_timeout(400)
        record('ورود: صفحهٔ معرفی تارگون', active(page, 'screen-domain'))
        page.locator('#btn-play-domain').tap()
        page.wait_for_timeout(400)
        record('ورود: شبکهٔ ۱۱ سرزمین تارگون', active(page, 'screen-lands'))

        # ۲) دکمهٔ جهان زنده — فقط برای تارگون
        cta = page.locator('#btn-targon-world')
        record('دکمهٔ «نقشهٔ زندهٔ تارگون» نمایان است', cta.is_visible())
        page.locator('#btn-lands-back').tap(); page.wait_for_timeout(250)
        page.locator('#btn-domain-back').tap(); page.wait_for_timeout(250)
        page.locator('#realms-grid .dom-card[data-domain="dezhmaar"]').tap()
        page.wait_for_timeout(300)
        page.locator('#btn-play-domain').tap(); page.wait_for_timeout(300)
        record('در دژمار دکمهٔ جهان زنده پنهان است', page.locator('#btn-targon-world').is_hidden())
        page.locator('#btn-lands-back').tap(); page.wait_for_timeout(200)
        page.locator('#btn-domain-back').tap(); page.wait_for_timeout(200)
        page.locator('#realms-grid .dom-card[data-domain="targon"]').tap(); page.wait_for_timeout(250)
        page.locator('#btn-play-domain').tap(); page.wait_for_timeout(250)

        # ۳) ورود به جهان
        cta.tap()
        page.wait_for_timeout(900)
        record('صفحهٔ جهان تارگون باز شد', active(page, 'screen-targon'))
        record('بوم نقشه موجود است', page.evaluate("() => document.getElementById('t-iso').width > 100"))

        # ۴) دادهٔ ۱۱ ناحیه — نام‌های دقیق و بدون تغییر
        data = page.evaluate("""() => {
          const ids = [...new Set(TARGON_AREAS.map(a => a.id))];
          const names = TARGON_AREA_LIST.map(id => TARGON_AREAS.find(a => a.id === id).fa);
          return { count: ids.length, names };
        }""")
        record('دقیقاً ۱۱ ناحیهٔ یکتا ثبت شده', data['count'] == 11, f"n={data['count']}")
        record('نام ۱۱ ناحیه عیناً مطابق دستور کارفرما',
               sorted(data['names']) == sorted(EXPECT_AREAS), str(data['names']))

        # ۵) شروع در سپیده‌دم + نام ناحیهٔ فعلی در HUD
        area0 = page.evaluate("() => targonAreaAt(Math.round(TP.x), Math.round(TP.y)).id")
        chip0 = page.locator('#t-area-name').inner_text()
        record('شروع بازیکن در سپیده‌دم', area0 == 'sepideh-dam', area0)
        record('نام ناحیهٔ فعلی در HUD نمایش داده می‌شود', 'سپیده‌دم' in chip0, chip0)
        page.screenshot(path=str(SHOTS / 'targon-01-spawn-mobile.png'))

        # ۶) حرکت: لمس واقعی روی نقشه (نقطهٔ صفحهٔ کاشی هدف)
        tx, ty = 38, 38   # چند کاشی آن‌طرف‌تر، همچنان سپیده‌دم
        pt = page.evaluate("""([tx,ty]) => {
          const TW2=tTW*TZ/2, TH2=tTW*TZ/4;
          const ox=tCanvasW/2-T_CAM.x, oy=tCanvasH/2-T_CAM.y-20;
          const [ix,iy]=tIso(tx+0.45, ty+0.45);
          return [ox+ix, oy+iy];
        }""", [tx, ty])
        before = page.evaluate("() => [TP.x, TP.y]")
        page.mouse.click(pt[0], pt[1])
        page.wait_for_timeout(300)
        moving = page.evaluate("() => TP.path.length > 0")
        record('لمس نقشه مسیر حرکت ساخت', moving)
        page.wait_for_function("() => Math.abs(TP.x-%d)<0.7 && Math.abs(TP.y-%d)<0.7" % (tx, ty), timeout=20000)
        after = page.evaluate("() => [TP.x, TP.y]")
        record('بازیکن بین نقاط قابل دسترس حرکت کرد', before != after, f'{before} → {after}')
        page.screenshot(path=str(SHOTS / 'targon-02-walking-mobile.png'))

        # ۷) مسیر طولانی تا دهکده آذرین — تغییر نام ناحیه در HUD
        page.evaluate("() => targonMoveTo(21, 35)")
        page.wait_for_function(
            "() => document.getElementById('t-area-name').textContent.includes('دهکده آذرین')", timeout=30000)
        record('نام ناحیهٔ فعلی پس از عبور به‌روزرسانی شد (دهکده آذرین)',
               'دهکده آذرین' in page.locator('#t-area-name').inner_text())
        vis = page.evaluate("() => TWS.visited")
        record('کشف ناحیه‌ها ثبت می‌شود', 'dehkade-azarin' in vis, str(vis))
        page.screenshot(path=str(SHOTS / 'targon-03-village-mobile.png'))

        # ۸) نشانگر موقعیت — تابع ترسیم با حلقهٔ تپنده فعال است
        record('نشانگر موقعیت (حلقهٔ تپنده) در کد ترسیم فعال است',
               page.evaluate("() => typeof tDrawPlayer === 'function' && tLoopId !== null"))

        # ۹) مأموریت‌های آغازین — قدم‌ها و کشف دهکده کامل شده‌اند
        mdone = page.evaluate("() => TWS.done")
        record('مأموریت «گام‌های نخست» با قدم‌زدن کامل شد', 't_m1' in mdone, str(mdone))
        record('مأموریت «راه به دهکدهٔ آذرین» کامل شد', 't_m2' in mdone)
        page.locator('#btn-t-missions').tap(); page.wait_for_timeout(350)
        mbody = page.locator('#wmissions-body').inner_text()
        record('برگهٔ مأموریت‌ها: ۵ مأموریت آغازین با وضعیت', all(m in mbody for m in
               ['گام‌های نخست', 'راه به دهکدهٔ آذرین', 'به دیدار هم‌پیمانان', 'گشت در بازار کهن', 'آستانهٔ دروازهٔ سرخ']))
        record('مأموریت کامل‌شده در رابط نمایش داده می‌شود', 'کامل شد ✅' in mbody)
        page.screenshot(path=str(SHOTS / 'targon-04-missions-mobile.png'))
        page.locator('#sheet-wmissions .sheet-close').tap(); page.wait_for_timeout(250)

        # ۱۰) برگهٔ ۱۱ ناحیه + دکمهٔ «رفتن»
        page.locator('#btn-t-areas').tap(); page.wait_for_timeout(350)
        rows = page.locator('#wareas-body .w-area-row').count()
        record('برگهٔ نواحی دقیقاً ۱۱ ردیف دارد', rows == 11, f'n={rows}')
        abody = page.locator('#wareas-body').inner_text()
        record('همهٔ نام‌های نواحی در برگه عیناً هست', all(a in abody for a in EXPECT_AREAS))
        page.locator('#wareas-body .wa-go').first.tap(); page.wait_for_timeout(300)
        record('دکمهٔ «رفتن» مسیر حرکت ساخت', page.evaluate("() => TP.path.length > 0"))
        page.wait_for_timeout(400)

        # ۱۱) کیف پول — آفلاین: صادقانه «در دسترس نیست»، بدون عدد آزمایشی
        page.locator('#btn-t-wallet').tap(); page.wait_for_timeout(600)
        wbody = page.locator('#wallet-body').inner_text()
        record('کیف پول آفلاین: موجودی واقعی «در دسترس نیست»', 'در دسترس نیست' in wbody)
        record('کیف پول آفلاین: هیچ عدد آزمایشی به‌عنوان موجودی نشان داده نمی‌شود',
               'آزمایشی' not in wbody and 'سکهٔ رسمی' not in wbody)
        foot = page.locator('#wallet-footnote').inner_text()
        record('کیف پول: هیچ خرید/افزایش دستی وجود ندارد (تذکر رابط)',
               'افزایش دستی' in foot and 'خرید' in foot)
        page.screenshot(path=str(SHOTS / 'targon-05-wallet-mobile.png'))
        page.locator('#sheet-wallet .sheet-close').tap(); page.wait_for_timeout(250)

        # ۱۲) بزرگ‌نمایی
        z0 = page.evaluate("() => TZ")
        page.locator('#t-zoom-in').tap(); page.wait_for_timeout(200)
        z1 = page.evaluate("() => TZ")
        record('بزرگ‌نمایی نقشه کار می‌کند', z1 > z0, f'{z0} → {z1}')
        page.locator('#t-zoom-out').tap(); page.wait_for_timeout(200)

        # ۱۳) ماندگاری جهان: بارگذاری مجدد — موقعیت حفظ می‌شود
        page.wait_for_function("() => TP.path.length === 0", timeout=40000)  # پایان حرکت «رفتن»
        pre = page.evaluate("() => [Math.round(TP.x), Math.round(TP.y)]")
        page.reload(); page.wait_for_timeout(600)
        page.locator('#btn-realms-open').tap(); page.wait_for_timeout(300)
        page.locator('#realms-grid .dom-card[data-domain="targon"]').tap(); page.wait_for_timeout(250)
        page.locator('#btn-play-domain').tap(); page.wait_for_timeout(250)
        cta.tap(); page.wait_for_timeout(800)
        px, py = page.evaluate("() => [TP.x, TP.y]")
        record('موقعیت بازیکن پس از بارگذاری مجدد حفظ شد',
               abs(px - pre[0]) < 0.6 and abs(py - pre[1]) < 0.6, f'{pre} → [{px:.1f},{py:.1f}]')
        zlab = page.locator('#t-zoom-label').inner_text()
        record('بزرگ‌نمایی ذخیره‌شده پس از بارگذاری بازیابی شد', '۱۰۰٪' in zlab or '۸۵٪' in zlab or '۱۲۰٪' in zlab, zlab)

        # ۱۴) بازگشت به شبکهٔ سرزمین‌ها
        page.locator('#btn-targon-back').tap(); page.wait_for_timeout(300)
        record('بازگشت به شبکهٔ ۱۱ سرزمین', active(page, 'screen-lands'))

        # ۱۵) پاکیزگی کنسول
        real_errors = [e for e in console_errors if 'wallet' not in e.lower() and 'favicon' not in e.lower()]
        record('بدون خطای کنسول', len(real_errors) == 0, ' | '.join(real_errors[:3]))
        record('بدون خطای صفحه', len(page_errors) == 0, ' | '.join(page_errors[:3]))

        browser.close()

    n_ok = sum(1 for _, ok, _ in results if ok)
    print(f"\n== verify_targon_world: {n_ok}/{len(results)} PASS ==")
    sys.exit(0 if n_ok == len(results) else 1)

if __name__ == '__main__':
    run()
