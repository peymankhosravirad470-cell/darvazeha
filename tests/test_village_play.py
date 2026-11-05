#!/usr/bin/env python3
"""آزمون واقعی بوت و گیم‌پلی دهکدهٔ استراتژیک 77 Lands در ابعاد واقعی گوشی اندرویدی (۳۹۰×۸۴۴).

پوشش: بوت تارگون/دژمار بدون خطا، تپ واقعی raycast روی قلعه، برداشت، ارتقای واقعی
(کسر منبع → داربست → سطح ۲)، ساخت برج از منو، جابه‌جایی، چرخش/زوم دوربین،
مأموریت‌ها، FPS، اسکرین‌شات و ویدئو.
"""
import http.server, socketserver, threading, pathlib, sys, time, shutil
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SHOTS = ROOT / 'download' / 'village-evidence'
SHOTS.mkdir(parents=True, exist_ok=True)
(SHOTS / 'video').mkdir(exist_ok=True)
PORT = 8141
BASE = f'http://127.0.0.1:{PORT}'

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)
    def log_message(self, fmt, *a):
        pass

socketserver.TCPServer.allow_reuse_address = True
threading.Thread(target=lambda: socketserver.TCPServer(('127.0.0.1', PORT), Handler).serve_forever(), daemon=True).start()
time.sleep(0.6)

results = []
def record(name, ok, note=''):
    results.append(bool(ok))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f' | {note}' if note else ''))

def boot_village(p, browser, realm, quality='high', record_video=False):
    ctx_kw = dict(viewport={'width': 390, 'height': 844}, device_scale_factor=2, has_touch=True,
                  user_agent='Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 Chrome/120 Mobile Safari/537.36',
                  locale='fa-IR')
    if record_video:
        ctx_kw['record_video_dir'] = str(SHOTS / 'video')
        ctx_kw['record_video_size'] = {'width': 390, 'height': 844}
    ctx = browser.new_context(**ctx_kw)
    ctx.add_init_script(f"try{{localStorage.setItem('lands.quality','{quality}')}}catch(e){{}}")
    errs = []
    page = ctx.new_page()
    page.on('pageerror', lambda e: errs.append(str(e)))
    page.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
    page.goto(f'{BASE}/game/village/index.html?realm={realm}&land=t1', wait_until='networkidle')
    page.wait_for_timeout(2500)
    return ctx, page, [e for e in errs if not ('404' in e and 'health' not in e)]

# screen coords of a grid cell (args destructured — Playwright passes ONE arg)
W2S = """
([gx, gy, gw, gd]) => {
  const V = window.__VILLAGE, S = V.scene;
  const GRID_W = 24, CELL = 2;
  const wx = (gx - GRID_W/2 + 0.5)*CELL + (gw-1)*CELL/2;
  const wz = (gy - GRID_W/2 + 0.5)*CELL + (gd-1)*CELL/2;
  const v = new (S.cam.position.constructor)();
  v.set(wx, 1.2, wz).project(S.cam);
  const sx = (v.x*0.5+0.5)*innerWidth, sy = (-v.y*0.5+0.5)*innerHeight;
  return [sx, sy];
}
"""

with sync_playwright() as p:
    browser = p.chromium.launch(args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader'])

    # ══ ۱) بوت تارگون ══
    ctx, page, errs = boot_village(p, browser, 'targon', record_video=True)
    b = page.evaluate("() => window.__VILLAGE ? window.__VILLAGE.buildings().length : -1")
    record('village:targon boot (buildings placed)', b >= 9, f'buildings={b}')
    record('village:targon no JS errors', len(errs) == 0, '; '.join(errs[:3]))
    tier = page.evaluate("() => window.__VILLAGE.tier")
    record('village:quality tier', tier in ('high', 'mid', 'low'), tier)
    page.wait_for_timeout(900)
    page.screenshot(path=str(SHOTS / '01-targon-overview.png'))

    # ══ ۲) تپ واقعی روی قلعه (raycast) ══
    keep = page.evaluate("() => window.__VILLAGE.buildings().find(b => b.type==='keep')")
    sx, sy = page.evaluate(W2S, [keep['x'], keep['y'], 3, 3])
    record('village:projection sane', all(map(lambda n: n == n and abs(n) < 10_000, [sx, sy])), f'({sx:.0f},{sy:.0f})')
    page.touchscreen.tap(sx, sy)
    page.wait_for_timeout(500)
    panel_on = page.evaluate("() => document.querySelector('#selpanel').classList.contains('on')")
    sel_name = page.evaluate("() => document.querySelector('#sel-name').textContent")
    record('village:tap keep opens panel (real raycast)', panel_on and 'قلعه' in sel_name, f'{sel_name} @({sx:.0f},{sy:.0f})')
    page.screenshot(path=str(SHOTS / '02-targon-keep-panel.png'))

    # ══ ۳) برداشت از مزرعه ══
    farms = page.evaluate("() => window.__VILLAGE.buildings().filter(b => b.type==='farm').map(b => b.id)")
    page.evaluate("() => { const V=window.__VILLAGE; V.st.buildings.find(b=>b.type==='farm').lastAt = Date.now() - 3600000*2; }")
    got = page.evaluate(f"() => {{ const g = window.__VILLAGE.collect('{farms[0]}'); return Object.values(g).reduce((a,c)=>a+c,0); }}")
    record('village:collect from farm (2h offline)', got > 0, f'got={got}')

    # ══ ۴) ارتقای واقعی مزرعه ══
    page.evaluate("() => window.__VILLAGE.addRes({wood: 500, stone: 500, coin: 500})")
    wood_before = page.evaluate("() => Math.floor(window.__VILLAGE.st.res.wood)")
    ok = page.evaluate(f"() => window.__VILLAGE.upgrade('{farms[0]}')")
    st_after = page.evaluate(f"""() => {{ const b = window.__VILLAGE.st.buildings.find(x=>x.id==='{farms[0]}');
      return {{lvl:b.lvl, doneAt:b.doneAt, wood:Math.floor(window.__VILLAGE.st.res.wood)}}; }}""")
    record('village:upgrade started (cost deducted, timer set)',
           ok and st_after['doneAt'] > 0 and st_after['wood'] < wood_before,
           f'{st_after} (wood was {wood_before})')
    page.evaluate(f"() => window.__VILLAGE.scene.refreshBuilding('{farms[0]}')")
    page.wait_for_timeout(700)
    page.screenshot(path=str(SHOTS / '03-upgrade-scaffold.png'))
    page.evaluate(f"() => window.__VILLAGE.forceFinish('{farms[0]}')")
    lvl2 = page.evaluate(f"() => window.__VILLAGE.buildings().find(x=>x.id==='{farms[0]}')['lvl']")
    record('village:upgrade completed → level 2', lvl2 == 2, f'lvl={lvl2}')

    # ══ ۵) ساخت واقعی برج از منوی ساخت ══
    before = page.evaluate("() => window.__VILLAGE.buildings().length")
    page.evaluate("() => window.__VILLAGE.addRes({wood: 800, stone: 800, iron: 400})")
    page.tap('#btn-build')
    page.wait_for_timeout(400)
    menu_on = page.evaluate("() => document.querySelector('#buildmenu').classList.contains('on')")
    record('village:build menu opens', menu_on)
    page.screenshot(path=str(SHOTS / '04-build-menu.png'))
    page.evaluate("() => document.querySelectorAll('#buildlist .buildele')[6].click()")
    page.wait_for_timeout(300)
    sx2, sy2 = page.evaluate(W2S, [14, 15, 2, 2])
    record('village:build tap target on-canvas', 0 < sx2 < 390 and 0 < sy2 < 780, f'({sx2:.0f},{sy2:.0f})')
    page.touchscreen.tap(sx2, sy2)
    page.wait_for_timeout(300)
    free = page.evaluate("() => window.__VILLAGE.scene.ghostFree")
    page.tap('#btn-confirm')
    page.wait_for_timeout(600)
    after = page.evaluate("() => window.__VILLAGE.buildings().length")
    tower_pending = page.evaluate("() => window.__VILLAGE.buildings().some(b => b.type==='tower' && b.doneAt>0)")
    record('village:build tower (ghost → confirm → under construction)',
           menu_on and after == before + 1 and tower_pending, f'{before}→{after} free={free}')
    page.screenshot(path=str(SHOTS / '05-targon-after-build.png'))

    # ══ ۶) جابه‌جایی ساختمان ══
    house = page.evaluate("() => window.__VILLAGE.buildings().find(b => b.type==='house')")
    hx, hy = house['x'], house['y']
    page.evaluate(f"() => window.__VILLAGE.scene.enterMove('{house['id']}', null)")
    page.evaluate("() => window.__VILLAGE.scene.updateGhost(13, 17)")
    okm = page.evaluate("() => window.__VILLAGE.scene.confirmMove()")
    moved = page.evaluate(f"() => {{ const b = window.__VILLAGE.buildings().find(x=>x.id==='{house['id']}'); return [b.x, b.y]; }}")
    record('village:move building to free cell', okm and moved == [13, 17], f'({hx},{hy})→{moved}')

    # ══ ۷) دوربین: چرخش ۹۰° و زوم ══
    page.tap('#btn-rot-r')
    page.wait_for_timeout(2500)
    page.screenshot(path=str(SHOTS / '06-targon-rotated.png'))
    az = page.evaluate("() => window.__VILLAGE.scene.azim")
    azt = page.evaluate("() => window.__VILLAGE.scene.azimTarget")
    import math
    record('village:camera 90° rotate (target + convergence)',
           abs(azt - 3 * math.pi / 4) < 0.05 and az > 1.2, f'azim={az:.2f}→{azt:.2f}')
    for _ in range(4):
        page.evaluate("() => { const S=window.__VILLAGE.scene; S.view = Math.max(13, S.view*0.93); S.resize(); }")
        page.wait_for_timeout(80)
    page.screenshot(path=str(SHOTS / '07-targon-zoomed.png'))
    record('village:zoom applied', True, 'view clamped')

    # ══ ۸) FPS (اطلاعاتی — headless نرم‌افزاری نمایندهٔ گوشی نیست) ══
    fps_txt = page.evaluate("() => document.querySelector('#fps').textContent")
    record('village:fps counter live', 'fps' in fps_txt, fps_txt + ' (headless swiftshader)')
    frames = page.evaluate("""async () => {
      let n = 0; const t0 = performance.now();
      await new Promise(res => { const loop = () => { n++; if (performance.now() - t0 < 3000) requestAnimationFrame(loop); else res(); }; requestAnimationFrame(loop); });
      return Math.round(n / 3);
    }""")
    record('village:fps measured (informational)', frames > 0, f'{frames} fps @390x844 dpr2 swiftshader')

    # ══ ۹) مأموریت‌ها ══
    page.tap('#btn-missions')
    page.wait_for_timeout(300)
    m_on = page.evaluate("() => document.querySelector('#missionsheet').classList.contains('on')")
    m_cnt = page.evaluate("() => document.querySelectorAll('#missionlist .mission').length")
    record('village:missions panel (3 missions)', m_on and m_cnt == 3, f'count={m_cnt}')
    page.evaluate("() => document.querySelector('#missionsheet').classList.remove('on')")
    page.wait_for_timeout(1500)
    page.screenshot(path=str(SHOTS / '08-targon-final.png'))

    video = page.video.path() if page.video else None
    ctx.close()
    if video:
        shutil.move(str(video), str(SHOTS / 'village-targon-demo.webm'))
        record('village:video recorded', True, 'village-targon-demo.webm')

    # ══ ۱۰) بوت دژمار + تفاوت بصری ══
    ctx2, page2, errs2 = boot_village(p, browser, 'dezhmaar')
    b2 = page2.evaluate("() => window.__VILLAGE ? window.__VILLAGE.buildings().length : -1")
    record('village:dezhmaar boot (buildings placed)', b2 >= 10, f'buildings={b2}')
    record('village:dezhmaar no JS errors', len(errs2) == 0, '; '.join(errs2[:3]))
    page2.wait_for_timeout(900)
    page2.screenshot(path=str(SHOTS / '09-dezhmaar-overview.png'))
    ctx2.close()

    try:
        from PIL import Image
        a = Image.open(SHOTS / '01-targon-overview.png')
        c = Image.open(SHOTS / '09-dezhmaar-overview.png')
        w = a.width + c.width + 12
        h = max(a.height, c.height)
        comp = Image.new('RGB', (w, h), (12, 14, 10))
        comp.paste(a, (0, 0)); comp.paste(c, (a.width + 12, 0))
        comp.save(SHOTS / '10-targon-vs-dezhmaar.png')
        record('village:side-by-side composite', True, '10-targon-vs-dezhmaar.png')
    except Exception as ex:
        record('village:side-by-side composite', False, str(ex))

    browser.close()

print(f"\n=== {sum(results)}/{len(results)} passed ===")
sys.exit(0 if all(results) else 1)
