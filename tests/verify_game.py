#!/usr/bin/env python3
"""
Automated verification for «هفتاد و هفت سرزمین» game v0.3 (game/index.html).
Real browser checks with Playwright in Android mobile emulation (390x844, DPR 3,
touch). Every PASS/FAIL line reflects an actual assertion made during the run.
Real-device testing on physical Android is NOT done here (reported separately).
Covers stages 1..8 of the roadmap: core, world/realms, character/skills/equipment,
economy/market/farm, quests/realm2, social identity, ledger hash-chain, day/night,
settings, persistence, layout, console errors, v1 isolation.
"""
import http.server, socketserver, threading, pathlib, sys, time
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
GAME = ROOT / 'game'
SHOTS = ROOT / 'download' / 'game-screens'
SHOTS.mkdir(parents=True, exist_ok=True)
PORT = 8126
URL = f'http://127.0.0.1:{PORT}/index.html?debug=1'

results, console_errors, page_errors = [], [], []
ROCK_I = 0
TREE_I = 0
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

def G(page):
    return page.evaluate('() => window.HS77.api.getState()')

def close_sheet(page):
    if page.locator('.sheet.show').count():
        try:
            page.locator('.sheet.show [data-close]').first.tap(timeout=1500)
            page.wait_for_timeout(250)
        except Exception:
            pass

def tap_action_when(page, label_contains=None, timeout=5000):
    deadline = time.time() + timeout/1000
    while time.time() < deadline:
        if page.locator('.sheet.show').count():
            close_sheet(page)
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

def hit_when_in_zone(page, timeout=9000):
    deadline = time.time() + timeout/1000
    while time.time() < deadline:
        st = page.evaluate("""() => {
            const m = document.getElementById('t-marker').getBoundingClientRect();
            const z = document.getElementById('t-zone').getBoundingClientRect();
            const mc = m.top + m.height/2, zc = z.top + z.height/2;
            return {inside: Math.abs(mc - zc) <= z.height/2};
        }""")
        if st['inside']:
            page.locator('#btn-hit').tap()
            page.wait_for_timeout(250)
            return True
        page.wait_for_timeout(40)
    return False

def mine_once(page, spot=None):
    global ROCK_I
    spots = [(5.8, 4.9), (11.9, 3.9), (5.2, 12.6), (11.6, 10.6)]   # نقاط نزدیک ۴ صخره
    if spot: spots = [spot]
    else:
        for k in range(len(spots)):
            tx, ty = spots[(ROCK_I + k) % len(spots)]
            page.evaluate(f'() => window.HS77.api.teleport({tx}, {ty})')
            page.wait_for_timeout(300)
            if 'show' in (page.locator('#btn-action').get_attribute('class') or '') and 'کوه‌کاوی' in page.locator('#btn-action').inner_text():
                ROCK_I = (ROCK_I + k) % len(spots)
                page.locator('#btn-action').tap()
                if page.locator('#timing.show').count() == 1:
                    return hit_when_in_zone(page)
                return False
        return False
    page.evaluate(f'() => window.HS77.api.teleport({spots[0][0]}, {spots[0][1]})')
    page.wait_for_timeout(350)
    ok = tap_action_when(page, 'کوه‌کاوی')
    if not ok: return False
    if page.locator('#timing.show').count() != 1: return False
    return hit_when_in_zone(page)

def chop_once(page, spot=None):
    global TREE_I
    spots = [(3.7, 8.7), (9.0, 6.9), (12.2, 7.5), (4.9, 12.5), (10.4, 12.1)]   # نقاط نزدیک ۵ درخت
    if spot: spots = [spot]
    else:
        for k in range(len(spots)):
            tx, ty = spots[(TREE_I + k) % len(spots)]
            page.evaluate(f'() => window.HS77.api.teleport({tx}, {ty})')
            page.wait_for_timeout(300)
            if 'show' in (page.locator('#btn-action').get_attribute('class') or '') and 'هیزم' in page.locator('#btn-action').inner_text():
                TREE_I = (TREE_I + k) % len(spots)
                page.locator('#btn-action').tap()
                if page.locator('#timing.show').count() == 1:
                    return hit_when_in_zone(page)
                return False
        return False
    page.evaluate(f'() => window.HS77.api.teleport({spots[0][0]}, {spots[0][1]})')
    page.wait_for_timeout(350)
    ok = tap_action_when(page, 'هیزم')
    if not ok: return False
    if page.locator('#timing.show').count() != 1: return False
    return hit_when_in_zone(page)

def gather(page, item, n, max_tries=16):
    """برداشت واقعی تا رسیدن به n عدد از کالا (گردش میان گره‌ها)"""
    tries = 0
    close_sheet(page)
    while G(page)['inv'].get(item, 0) < n and tries < max_tries:
        if item == 'sang':
            if not mine_once(page):
                page.wait_for_timeout(1200)
        else:
            if not chop_once(page):
                page.wait_for_timeout(1200)
        tries += 1
    return G(page)['inv'].get(item, 0) >= n

def craft_abzar(page):
    """ساخت ابزار سنگی از رابط واقعی کارگاه"""
    gather(page, 'sang', 2)
    gather(page, 'choob', 1)
    page.evaluate('() => window.HS77.api.teleport(11.1, 9.9)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'کارگاه')
    b = page.locator('[data-craft="r_abzar"]')
    made = False
    if page.locator('#sheet-craft.show').count() and b.count() and b.first.is_enabled():
        b.first.tap(); page.wait_for_timeout(1500)
        made = G(page)['inv'].get('abzar', 0) >= 1
    close_sheet(page)
    return made

def goto_map(page):
    if page.locator('#screen-realm.active').count():
        page.locator('#btn-back-map').tap(); page.wait_for_timeout(450)

def dlg_tap(page, text, timeout=4000):
    deadline = time.time() + timeout/1000
    while time.time() < deadline:
        btn = page.locator('#dialogue-body .choices button', has_text=text)
        if page.locator('#sheet-dialogue.show').count() and btn.count():
            btn.first.tap()
            page.wait_for_timeout(350)
            return True
        page.wait_for_timeout(150)
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

    t0 = time.time()

    # fresh state
    page.goto('about:blank')
    page.goto(URL)
    page.evaluate("() => localStorage.removeItem('hs77_darvazeha_v1')")
    page.reload(); page.wait_for_timeout(700)

    # 1 — boot
    record('01 بارگذاری و عنوان', 'هفتاد و هفت سرزمین' in page.title() and page.locator('#screen-boot.active').count() == 1)
    page.screenshot(path=str(SHOTS / '01-boot.png'))

    # 2 — ساخت شخصیت: نام + پرچم + شناسهٔ یکتا (مرحله ۶)
    page.locator('#btn-enter').tap(); page.wait_for_timeout(400)
    cre = page.locator('#creation.show').count() == 1
    page.fill('#cre-name', 'آرش')
    page.locator('.banner-opt[data-b="2"]').tap(); page.wait_for_timeout(150)
    page.locator('#btn-cre-start').tap(); page.wait_for_timeout(450)
    st = G(page)
    record('02 ساخت شخصیت: نام، پرچم، شناسهٔ یکتای بازیکن',
           cre and st['pid'] and st['name'] == 'آرش' and st['banner'] == 2,
           f'pid={st["pid"][:13]}…')

    # 3 — نقشهٔ جهان: ۱۳ دروازه؛ ۱ باز، ۲ و ۳ قفل
    n = page.locator('#gate-grid .gate-card').count()
    c1 = page.locator('.gate-card[data-gate="1"]').get_attribute('class') or ''
    c2 = page.locator('.gate-card[data-gate="2"]').get_attribute('class') or ''
    c3 = page.locator('.gate-card[data-gate="3"]').get_attribute('class') or ''
    record('03 نقشه: ۱۳ کارت — سرزمین ۱ باز، ۲ و ۳ قفل',
           n == 13 and 'open' in c1 and 'locked' in c2 and 'locked' in c3)
    page.screenshot(path=str(SHOTS / '03-map.png'))

    # 4 — ورود سرزمین ۱ (ثبت زمان روز — ثبات موقعیت ساکنان برای آزمون)
    page.locator('.gate-card[data-gate="1"]').tap(); page.wait_for_timeout(600)
    page.evaluate('() => window.HS77.api.setTime(0.2)')   # روز — ساکنان در جایگاه اصلی
    page.wait_for_timeout(400)
    record('04 صحنهٔ سرزمین ۱ (بوم ایزومتریک)', page.locator('#screen-realm.active').count() == 1)
    page.screenshot(path=str(SHOTS / '04-realm.png'))

    # 5 — حرکت لمسی
    page.evaluate("""() => {
        const joy = document.getElementById('joy');
        const r = joy.getBoundingClientRect();
        const mk = (t,x,y)=>new PointerEvent(t,{pointerId:7,bubbles:true,clientX:x,clientY:y});
        joy.dispatchEvent(mk('pointerdown', r.left+r.width/2, r.top+r.height/2));
        joy.dispatchEvent(mk('pointermove', r.left+r.width/2+42, r.top+r.height/2));
    }""")
    page.wait_for_timeout(600)
    page.evaluate("""() => {
        const joy = document.getElementById('joy');
        const r = joy.getBoundingClientRect();
        joy.dispatchEvent(new PointerEvent('pointerup', {pointerId:7, bubbles:true, clientX:r.left+r.width/2, clientY:r.top+r.height/2}));
    }""")
    st1 = G(page)
    record('05 حرکت با دستهٔ لمسی', abs(st1['x']-7.5)+abs(st1['y']-12.5) > 0.3)

    # 6 — کوه‌کاوی M4 + ثبت مهارت
    ok = mine_once(page)
    st6 = G(page)
    record('06 کوه‌کاوی M4 (تپ واقعی) + تجربهٔ مهارت',
           ok and st6['inv'].get('sang',0) >= 1 and 'mining' in st6['skills'])
    page.screenshot(path=str(SHOTS / '06-mine.png'))

    # 7 — هیزم‌شکنی
    ok = chop_once(page)
    st7 = G(page)
    record('07 هیزم‌شکنی M4', ok and st7['inv'].get('choob',0) >= 1)

    # 8 — کارگاه: ساخت ابزار سنگی
    gather(page, 'sang', 2)
    gather(page, 'choob', 1)
    page.evaluate('() => window.HS77.api.teleport(11.1, 9.9)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'کارگاه')
    craft_open = page.locator('#sheet-craft.show').count() == 1
    btn = page.locator('[data-craft="r_abzar"]')
    if craft_open and btn.count(): btn.first.tap(); page.wait_for_timeout(1500)
    st8 = G(page)
    record('08 کارگاه: ساخت ابزار سنگی (۲ سنگ + ۱ چوب)',
           craft_open and st8['inv'].get('abzar',0) >= 1)
    page.screenshot(path=str(SHOTS / '08-craft.png'))
    close_sheet(page)

    # 9 — تجهیز ابزار: همگام‌سازی خودکار + چرخهٔ واقعی برداشتن/تجهیز از رابط
    page.locator('#btn-profile').tap(); page.wait_for_timeout(350)
    auto_eq = G(page)['equip'].get('mine') == 'abzar'          # همگام‌سازی خودکار پس از ساخت
    un = page.locator('#profile-body [data-uneq="mine"]')
    roundtrip = False
    if auto_eq and un.count():
        un.first.tap(); page.wait_for_timeout(300)
        unequipped = G(page)['equip'].get('mine') is None
        re_eq = page.locator('#profile-body [data-eq="abzar"]')
        if unequipped and re_eq.count():
            re_eq.first.tap(); page.wait_for_timeout(300)
            roundtrip = G(page)['equip'].get('mine') == 'abzar'
    close_sheet(page)
    record('09 کارنامه: تجهیز ابزار (خودکار + چرخهٔ برداشتن/تجهیز)', auto_eq and roundtrip)

    # 10 — مزیت قطعی تجهیز: ۲ ضربه با ابزار → حداقل ۳ سنگ
    s0 = G(page)
    mine_once(page); mine_once(page)
    s1 = G(page)
    gained = s1['inv'].get('sang',0) - s0['inv'].get('sang',0) + (0 if s0['inv'].get('sang',0) else 0)
    record('10 مزیت تجهیز (هر ضربهٔ دوم +۱ سنگ — قطعی)', gained >= 3,
           f'sang +{gained} در ۲ ضربه')

    # 11 — تبر: ساخت و تجهیز و مزیت
    gather(page, 'choob', 2)
    gather(page, 'sang', 1)
    page.evaluate('() => window.HS77.api.teleport(11.1, 9.9)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'کارگاه')
    btn2 = page.locator('[data-craft="r_tabar"]')
    tabar_made = False
    if btn2.count() and btn2.first.is_enabled():
        btn2.first.tap(); page.wait_for_timeout(1500)
        tabar_made = G(page)['inv'].get('tabar',0) >= 1
    close_sheet(page)
    page.locator('#btn-profile').tap(); page.wait_for_timeout(350)
    eqb = page.locator('#profile-body [data-eq="tabar"]')
    if eqb.count(): eqb.first.tap(); page.wait_for_timeout(300)
    close_sheet(page)
    s2 = G(page)
    chop_once(page); chop_once(page)
    s3 = G(page)
    cgain = s3['inv'].get('choob',0) - s2['inv'].get('choob',0)
    record('11 تبر سنگی: ساخت، تجهیز، مزیت قطعی برداشت',
           tabar_made and s3['equip'].get('wood') == 'tabar' and cgain >= 3,
           f'choob +{cgain} در ۲ ضربه')

    # 12 — بازار محلی: فروش، کاروان، خرید دانه (مرحله ۴)
    page.evaluate('() => window.HS77.api.teleport(5.5, 7.6)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'بازار')
    mkt_open = page.locator('#sheet-market.show').count() == 1
    coins_a = G(page)['coins']
    sb = page.locator('#market-body [data-sell="sang"]')
    sold = False
    if mkt_open and sb.count() and sb.first.is_enabled():
        sb.first.tap(); page.wait_for_timeout(350)
        sold = True
    coins_b = G(page)['coins']
    close_sheet(page)
    # کاروان: ابتدا ۳ سنگ (برداشت واقعی)، سپس فروش از زبانهٔ کاروان
    gather(page, 'sang', 3, max_tries=10)
    page.evaluate('() => window.HS77.api.teleport(5.5, 7.6)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'بازار')
    cb = page.locator('#market-body [data-tab="caravan"]')
    if cb.count(): cb.first.tap(); page.wait_for_timeout(250)
    cvs = page.locator('#btn-caravan')
    caravan_ok = False
    coins_c = G(page)['coins']
    if cvs.count() and cvs.first.is_enabled():
        cvs.first.tap(); page.wait_for_timeout(350)
        caravan_ok = True
    coins_d = G(page)['coins']
    # خرید دانه
    bb = page.locator('#market-body [data-tab="buy"]')
    if bb.count(): bb.first.tap(); page.wait_for_timeout(250)
    db = page.locator('#market-body [data-buy="daneh"]')
    bought = False
    if db.count() and db.first.is_enabled():
        db.first.tap(); page.wait_for_timeout(350)
        bought = True
    st12 = G(page)
    record('12 بازار محلی: فروش سنگ (+۲)، کاروان (+۶)، خرید دانه (−۳)',
           mkt_open and sold and (coins_b == coins_a + 2) and caravan_ok and (coins_d == coins_c + 6)
           and bought and st12['inv'].get('daneh',0) >= 1 and (coins_d - 3) == st12['coins'],
           f'coins {coins_a}→{st12["coins"]} sang={st12["inv"].get("sang",0)}')
    page.screenshot(path=str(SHOTS / '12-market.png'))
    close_sheet(page)

    # 13 — مزرعه: کاشت (رشد ~۷۵ ثانیه در پس‌زمینه ادامه دارد)
    page.evaluate('() => window.HS77.api.teleport(11.5, 13.4)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'مزرعه')
    farm_open = page.locator('#sheet-farm.show').count() == 1
    planted = False
    pl = page.locator('#btn-plant')
    if farm_open and pl.count() and pl.first.is_enabled():
        pl.first.tap(); page.wait_for_timeout(350)
        planted = G(page)['farm']['stage'] == 'growing'
    close_sheet(page)
    record('13 مزرعه: کاشت دانه (رشد قطعی زمان‌محور)', farm_open and planted)

    # 14 — مأموریت اصلی ۱: پذیرش از ناخدا
    page.evaluate('() => window.HS77.api.teleport(9.9, 11.2)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'ناخدا')
    acc = dlg_tap(page, 'پذیرش مأموریت')
    st14 = G(page)
    record('14 مأموریت «ابزار برای ناخدا»: پذیرش از گفت‌وگو',
           acc and st14['quests'].get('q_tools',{}).get('accepted', False))

    # 15 — گام‌های مأموریت با تولید واقعی پیش می‌روند
    #   (ابزار قبلی در گام ۸ ساخته شد؛ پس از پذیرش، یک ابزار دیگر می‌سازیم)
    gather(page, 'sang', 2)
    gather(page, 'choob', 1)
    craft_abzar(page)
    st15 = G(page)
    record('15 گام‌های مأموریت با تولید واقعی جلو می‌روند (گام تحویل فعال)',
           st15['quests'].get('q_tools',{}).get('step',0) == 3,
           f'step={st15["quests"].get("q_tools",{}).get("step",0)}')

    # 16 — تحویل به ناخدا: پاداش یک‌بار + گشودن سرزمین ۲
    coins_e = G(page)['coins']
    page.evaluate('() => window.HS77.api.teleport(9.9, 11.2)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'ناخدا')
    dlv = dlg_tap(page, 'تحویل ابزار سنگی')
    st16 = G(page)
    record('16 تحویل مأموریت: پاداش +۲۰ سکه (D7 یک‌بار) — سرزمین ۲ شرط کامل',
           dlv and st16['quests']['q_tools']['done'] and st16['coins'] == coins_e + 20)
    page.screenshot(path=str(SHOTS / '16-mission.png'))

    # 17 — مأموریت فرعی فانوس‌ها: پذیرش + کشف ۳ فانوس + پاداش جامه
    page.evaluate('() => window.HS77.api.teleport(7.7, 6.1)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'فانوس‌بان')
    acc2 = dlg_tap(page, 'پذیرش مأموریت')
    for pos in [(1.7, 6.5), (13.3, 8.5), (7.4, 4.1)]:
        page.evaluate(f'() => window.HS77.api.teleport({pos[0]}, {pos[1]})')
        page.wait_for_timeout(500)
    st17 = G(page)
    lantern_done = st17['quests'].get('q_lanterns',{}).get('done', False)
    has_outfit = 'j_fanous' in st17['outfits']
    record('17 «فانوس‌های گمشده»: کشف ۳ فانوس → پاداش جامهٔ فانوس‌بان',
           acc2 and lantern_done and has_outfit)

    # 18 — پوشیدن جامه از کارنامه
    page.locator('#btn-profile').tap(); page.wait_for_timeout(350)
    ob = page.locator('#profile-body [data-outfit="j_fanous"]')
    outfit_ok = False
    if ob.count():
        ob.first.tap(); page.wait_for_timeout(300)
        outfit_ok = G(page)['equip'].get('outfit') == 'j_fanous'
    close_sheet(page)
    record('18 پوشیدن جامهٔ فانوس‌بان (تجهیز جامه)', outfit_ok)
    page.screenshot(path=str(SHOTS / '18-outfit.png'))

    # 19 — پازل مرجانی (حفظ‌شده): برداشت، چیدن، صندوق با تأیید دوم
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
            btn = page.locator('.coral-btn', has_text=size_text)
            if not btn.count(): order_ok = False; break
            btn.first.tap(); page.wait_for_timeout(150)
            page.locator(f'.pedestal[data-i="{ped_i}"]').tap(); page.wait_for_timeout(250)
    close_sheet(page)
    page.evaluate('() => window.HS77.api.teleport(4.15, 3.15)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'صندوق')
    conf = page.locator('#confirm.show').count() == 1
    if conf:
        page.locator('#btn-confirm-yes').tap(); page.wait_for_timeout(400)
    st19 = G(page)
    record('19 پازل مرجانی + صندوق ثابت با تأیید دوم',
           pz and order_ok and st19['puzzle']['solved'] and st19['chestOpen']
           and st19['inv'].get('neshan',0) >= 1)

    # 20 — نقشه: سرزمین ۲ گشوده و قابل ورود
    goto_map(page)
    page.evaluate('() => window.HS77.api.setTime(0.2)')   # روز
    c2n = page.locator('.gate-card[data-gate="2"]').get_attribute('class') or ''
    chip = page.locator('#chip-progress-map').inner_text()
    page.locator('.gate-card[data-gate="2"]').tap(); page.wait_for_timeout(600)
    in2 = 'جنگل نقره‌ای' in page.locator('#realm-title').inner_text()
    record('20 سفر به سرزمین ۲ «جنگل نقره‌ای» پس از مأموریت',
           'open' in c2n and 'سرزمین ۲' in chip and in2)
    page.screenshot(path=str(SHOTS / '20-realm2.png'))

    # 21 — چوب نقره‌ای از درخت جنگل
    ok21 = chop_once(page, (2.8, 4.8))
    st21 = G(page)
    record('21 سرزمین ۲: برداشت چوب نقره‌ای (کالای اختصاصی سرزمین)',
           ok21 and st21['inv'].get('choobN',0) >= 1)

    # 22 — مأموریت ۲: پذیرش از بانفشه، برداشت ۶ چوب، تحویل
    page.evaluate('() => window.HS77.api.teleport(5.6, 8.6)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'بانفشه')
    acc3 = dlg_tap(page, 'پذیرش مأموریت')
    tries = 0
    while G(page)['inv'].get('choobN',0) < 6 and tries < 16:
        if not chop_once(page, (2.8, 4.8)) and not chop_once(page, (3.8, 6.8)):
            page.wait_for_timeout(1200)
        tries += 1
    # ابزار سنگی: باید موجود باشد (ساخته‌شده در گام ۱۵) — وگرنه می‌سازیم
    if G(page)['inv'].get('abzar',0) < 1:
        page.evaluate("() => window.HS77.api.realm(1)")
        page.wait_for_timeout(500)
        craft_abzar(page)
        goto_map(page)
        page.locator('.gate-card[data-gate="2"]').tap(); page.wait_for_timeout(600)
    coins_f = G(page)['coins']
    page.evaluate('() => window.HS77.api.teleport(5.6, 8.6)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'بانفشه')
    dlv2 = dlg_tap(page, 'تحویل چوب‌ها و ابزار')
    st22 = G(page)
    record('22 مأموریت ۲ «درهای جنگل نقره‌ای»: برداشت، ساخت، تحویل، پاداش +۳۰',
           acc3 and dlv2 and st22['quests'].get('q_gate2',{}).get('done', False)
           and st22['coins'] == coins_f + 30)
    page.screenshot(path=str(SHOTS / '22-quest2.png'))

    # 22c — سفر به سرزمین ۳ «کوه بلورین» و برداشت بلور
    goto_map(page)
    page.locator('.gate-card[data-gate="3"]').tap(); page.wait_for_timeout(600)
    in3 = 'کوه بلورین' in page.locator('#realm-title').inner_text()
    page.evaluate('() => window.HS77.api.setTime(0.2)')
    page.wait_for_timeout(400)
    page.evaluate('() => window.HS77.api.teleport(2.9, 6.8)')
    page.wait_for_timeout(400)
    ok_cr = tap_action_when(page, 'بلورکاوی')
    if ok_cr and page.locator('#timing.show').count() == 1:
        hit_when_in_zone(page)
    st22c = G(page)
    record('22c سرزمین ۳ «کوه بلورین»: ورود + بلورکاوی M4 (کالای اختصاصی)',
           in3 and ok_cr is not None and st22c['inv'].get('bolurK',0) >= 1)
    page.screenshot(path=str(SHOTS / '22c-realm3.png'))

    # 22d — مأموریت ۳ «بلور پیمان»: پذیرش، برداشت ۵ بلور، تحویل
    page.evaluate('() => window.HS77.api.teleport(9.2, 10.4)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'بهمن')
    acc4 = dlg_tap(page, 'پذیرش مأموریت')
    spots = [(2.9, 6.8), (13.1, 6.8), (5.2, 12.5), (11.1, 12.6), (4.9, 13.5)]
    tries = 0
    while G(page)['inv'].get('bolurK',0) < 5 and tries < 20:
        s = spots[tries % len(spots)]
        page.evaluate(f'() => window.HS77.api.teleport({s[0]}, {s[1]})')
        page.wait_for_timeout(300)
        if 'show' in (page.locator('#btn-action').get_attribute('class') or '') and 'بلورکاوی' in page.locator('#btn-action').inner_text():
            page.locator('#btn-action').tap()
            if page.locator('#timing.show').count() == 1:
                hit_when_in_zone(page)
        else:
            page.wait_for_timeout(1200)
        tries += 1
    coins_i = G(page)['coins']
    page.evaluate('() => window.HS77.api.teleport(9.2, 10.4)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'بهمن')
    dlv3 = dlg_tap(page, 'تحویل بلورها')
    st22d = G(page)
    record('22d مأموریت ۳ «بلور پیمان»: برداشت ۵ بلور، تحویل، پاداش +۴۰',
           acc4 and dlv3 and st22d['quests'].get('q_crystal',{}).get('done', False)
           and st22d['coins'] == coins_i + 40)

    # 23 — زنجیره: سرزمین ۳ قابل بازی شد؛ سرزمین ۴ وضعیت صادقانه دارد
    goto_map(page)
    c3n = page.locator('.gate-card[data-gate="3"]').get_attribute('class') or ''
    c3t = page.locator('.gate-card[data-gate="3"]').inner_text()
    c4n = page.locator('.gate-card[data-gate="4"]').get_attribute('class') or ''
    c4t = page.locator('.gate-card[data-gate="4"]').inner_text()
    record('23 سرزمین ۳ «قابل بازی/مقصِر مسافر» شد؛ سرزمین ۴: شرط کامل + برچسب صادقانه A1',
           'open' in c3n and ('قابل بازی' in c3t or 'مسافر اینجاست' in c3t)
           and 'open' in c4n and 'A1' in c4t)
    chain_built = page.locator('#map-chain .chain-node.built').count()
    record('23b زنجیرهٔ ۱۳ گره‌ای: سه سرزمینِ قابل بازی', chain_built == 3, f'built={chain_built}')

    # 24 — بازگشت به سرزمین ۱ (سفر رفت‌وبرگشت)
    page.locator('.gate-card[data-gate="1"]').tap(); page.wait_for_timeout(600)
    back = G(page)
    record('24 رفت‌وبرگشت سرزمین‌ها + مکان پیش‌فرض درست',
           back['realm'] == 1 and abs(back['x']-7.5) < 0.01 and abs(back['y']-12.5) < 0.01)

    # 25 — شب و روز: تاریکی و جمع‌شدن ساکنان گرد آتشگاه
    page.evaluate('() => window.HS77.api.setTime(0.75)')
    page.wait_for_timeout(2500)
    na = page.evaluate('() => window.HS77.api.night()')
    npos = page.evaluate('() => window.HS77.api.npcPos("mehtar")')
    dist_fire = ((npos['x']-6.7)**2 + (npos['y']-5.9)**2) ** 0.5 if npos else 99
    page.evaluate('() => window.HS77.api.setTime(0.2)')
    na2 = page.evaluate('() => window.HS77.api.night()')
    record('25 چرخهٔ شب/روز: تاریکی شب + ساکنان گرد آتشگاه (فضای اجتماعی NPC)',
           na > 0.4 and dist_fire < 2.0 and na2 == 0,
           f'night={na:.2f} npcDist={dist_fire:.2f}')

    # 26 — تنظیمات: صدا/لرزش + ماندگاری تنظیم
    page.locator('#btn-settings').tap(); page.wait_for_timeout(350)
    page.locator('#btn-sound').tap(); page.wait_for_timeout(250)
    snd_off = G(page)['settings']['sound'] == False
    page.locator('#btn-sound').tap(); page.wait_for_timeout(250)
    snd_on = G(page)['settings']['sound'] == True
    close_sheet(page)
    record('26 تنظیمات: کلید صدا کار می‌کند و در وضعیت می‌ماند', snd_off and snd_on)

    # 27 — برداشت مزرعه (انتظار واقعی برای پایان رشد) + فروش خوشه
    deadline = time.time() + 100
    while time.time() < deadline and page.evaluate('() => window.HS77.api.farm()') != 'ready':
        page.wait_for_timeout(2000)
    ready = page.evaluate('() => window.HS77.api.farm()') == 'ready'
    page.evaluate('() => window.HS77.api.teleport(11.5, 13.4)')
    page.wait_for_timeout(400)
    tap_action_when(page, 'مزرعه')
    hv = page.locator('#btn-harvest')
    harvested = False
    if ready and hv.count() and hv.first.is_enabled():
        hv.first.tap(); page.wait_for_timeout(400)
        harvested = G(page)['inv'].get('gandom',0) >= 2
    close_sheet(page)
    coins_g = G(page)['coins']
    sold_g = False
    if harvested:
        page.evaluate('() => window.HS77.api.teleport(5.5, 7.6)'); page.wait_for_timeout(350)
        tap_action_when(page, 'بازار')
        gb = page.locator('#market-body [data-sell="gandom"]')
        if gb.count() and gb.first.is_enabled():
            gb.first.tap(); page.wait_for_timeout(350)
            sold_g = True
        close_sheet(page)
    coins_h = G(page)['coins']
    record('27 چرخهٔ کشاورزی کامل: کاشت→رشد→برداشت→فروش (+۴ سکه)',
           harvested and sold_g and coins_h == coins_g + 4,
           f'coins {coins_g}→{coins_h}')

    # 28 — ماندگاری پس از بارگذاری مجدد
    before = G(page)
    page.reload(); page.wait_for_timeout(900)
    after = G(page)
    record('28 ماندگاری: سکه، مأموریت، تجهیز، جامه، مهارت‌ها پس از reload',
           after['coins'] == before['coins'] and after['pid'] == before['pid']
           and after['quests'].get('q_tools',{}).get('done') == True
           and after['quests'].get('q_gate2',{}).get('done') == True
           and after['equip'].get('wood') == 'tabar' and after['equip'].get('outfit') == 'j_fanous'
           and 'mining' in after['skills'])

    # 29 — جداسازی از v1 و نمونهٔ اولیه
    keys = page.evaluate("() => Object.keys(localStorage)")
    record('29 کلید ذخیرهٔ مستقل (v1 و نمونه دست‌نخورده)',
           'hs77_darvazeha_v1' in keys and 'darvazeha_progress_v1' not in keys and 'hs77_nemune_v1' not in keys,
           f'keys={keys}')

    # 30 — دفترکل: زنجیرهٔ هش سالم، سپس دستکاری آشکار می‌شود (مرحله ۷)
    v_ok = page.evaluate('() => window.HS77.api.verifyLedger()')
    page.evaluate('() => window.HS77.api.tamperLedger(0)')
    v_bad = page.evaluate('() => window.HS77.api.verifyLedger()')
    record('30 دفترکل: زنجیرهٔ هش سالم + آشکارسازی دستکاری',
           v_ok['ok'] == True and v_ok['n'] > 20 and v_bad['ok'] == False,
           f'n={v_ok["n"]}')

    # 31 — بدون سرریز افقی در سه اندازهٔ موبایل
    ovf = page.evaluate('() => document.scrollingElement.scrollWidth - window.innerWidth')
    record('31 بدون اسکرول افقی در ۳۹۰px', ovf <= 1, f'overflow={ovf}px')
    ctx.close()

    for w, h, name in [(360, 740, '360x740'), (412, 915, '412x915')]:
        c2 = browser.new_context(viewport={'width': w, 'height': h}, device_scale_factor=2,
                                 is_mobile=True, has_touch=True, locale='fa-IR')
        p2 = c2.new_page()
        p2.goto(URL.replace('?debug=1',''), wait_until='domcontentloaded')
        p2.wait_for_timeout(800)
        ovf2 = p2.evaluate('() => document.scrollingElement.scrollWidth - window.innerWidth')
        record(f'31{w} چیدمان سالم در {name}', ovf2 <= 1, f'overflow={ovf2}px')
        c2.close()

    # 32 — بدون خطای جاوااسکریپت در کل سناریو
    record('32 بدون خطای JavaScript در کل سناریو', not console_errors and not page_errors,
           f'console={console_errors[:2]} page={page_errors[:2]}')

    browser.close()

fails = [r for r in results if not r[1]]
print(f"\n=== جمع‌بندی بازی نسخهٔ ۰٫۳: {len(results)-len(fails)}/{len(results)} PASS ===")
if console_errors: print(f"خطاهای کنسول: {console_errors[:3]}")
sys.exit(1 if fails else 0)
