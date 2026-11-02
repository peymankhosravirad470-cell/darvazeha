#!/usr/bin/env python3
"""Smoke test سریع game/index.html — فقط اجرا، ساخت شخصیت، ورود، حرکت، بدون خطا"""
import http.server, socketserver, threading, pathlib, sys, time
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
GAME = ROOT / 'game'
PORT = 8130
URL = f'http://127.0.0.1:{PORT}/index.html?debug=1'

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(GAME), **kw)
    def log_message(self, *a): pass

socketserver.TCPServer.allow_reuse_address = True
threading.Thread(target=lambda: socketserver.TCPServer(('127.0.0.1', PORT), Handler).serve_forever(), daemon=True).start()
time.sleep(0.6)

errs = []
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width':390,'height':844}, device_scale_factor=3,
        is_mobile=True, has_touch=True, locale='fa-IR')
    page = ctx.new_page()
    page.on('console', lambda m: errs.append('console: '+m.text) if m.type=='error' else None)
    page.on('pageerror', lambda e: errs.append('page: '+str(e)))
    page.goto('about:blank'); page.goto(URL)
    page.evaluate("() => localStorage.removeItem('hs77_darvazeha_v1')")
    page.reload(); page.wait_for_timeout(700)

    print('boot active:', page.locator('#screen-boot.active').count() == 1)
    page.locator('#btn-enter').tap(); page.wait_for_timeout(400)
    print('creation shown:', page.locator('#creation.show').count() == 1)
    page.fill('#cre-name', 'آرش')
    page.locator('.banner-opt[data-b="2"]').tap()
    page.locator('#btn-cre-start').tap(); page.wait_for_timeout(400)
    st = page.evaluate('() => window.HS77.api.getState()')
    print('pid:', bool(st['pid']), 'name:', st['name'], 'banner:', st['banner'])
    print('map shown:', page.locator('#screen-map.active').count() == 1,
          '| gates:', page.locator('#gate-grid .gate-card').count())
    page.locator('.gate-card[data-gate="1"]').tap(); page.wait_for_timeout(600)
    print('realm shown:', page.locator('#screen-realm.active').count() == 1)
    # حرکت
    page.evaluate("""() => {
        const joy = document.getElementById('joy');
        const r = joy.getBoundingClientRect();
        const mk = (t,x,y)=>new PointerEvent(t,{pointerId:7,bubbles:true,clientX:x,clientY:y});
        joy.dispatchEvent(mk('pointerdown', r.left+r.width/2, r.top+r.height/2));
        joy.dispatchEvent(mk('pointermove', r.left+r.width/2+40, r.top+r.height/2));
    }""")
    page.wait_for_timeout(600)
    st2 = page.evaluate('() => window.HS77.api.getState()')
    print('moved:', st2['x'] != 7.5 or st2['y'] != 12.5, (st2['x'], st2['y']))
    # بازگشت نقشه + ورود سرزمین ۲ (باید قفل باشد)
    page.evaluate("() => window.HS77.api.realm(1)")
    page.locator('#btn-back-map').tap(); page.wait_for_timeout(400)
    c2 = page.locator('.gate-card[data-gate="2"]').get_attribute('class')
    print('realm2 locked initially:', 'locked' in (c2 or ''))
    # unlock via quest (debug)
    page.evaluate("() => { window.HS77.api.acceptQuest('q_tools'); }")
    page.evaluate("() => { const s=window.HS77.state; s.quests.q_tools.done=true; }")
    page.evaluate("() => window.HS77.api.realm(1)")
    page.locator('#btn-back-map').tap(); page.wait_for_timeout(400)
    c2b = page.locator('.gate-card[data-gate="2"]').get_attribute('class')
    print('realm2 open after quest done:', 'open' in (c2b or ''))
    page.locator('.gate-card[data-gate="2"]').tap(); page.wait_for_timeout(600)
    print('realm2 entered:', page.locator('#realm-title').inner_text())
    print('ERRORS:', errs[:5])
    b.close()
sys.exit(1 if errs else 0)
