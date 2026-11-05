#!/usr/bin/env python3
"""عیب‌یابی سریع projection دهکده"""
import http.server, socketserver, threading, pathlib, time
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
PORT = 8142
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw): super().__init__(*a, directory=str(ROOT), **kw)
    def log_message(self, *a): pass
socketserver.TCPServer.allow_reuse_address = True
threading.Thread(target=lambda: socketserver.TCPServer(('127.0.0.1', PORT), H).serve_forever(), daemon=True).start()
time.sleep(0.5)

with sync_playwright() as p:
    b = p.chromium.launch(args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = b.new_context(viewport={'width': 390, 'height': 844})
    errs = []
    page = ctx.new_page()
    page.on('pageerror', lambda e: errs.append('PAGEERROR: ' + str(e)))
    page.on('console', lambda m: errs.append(f'CONSOLE-{m.type}: {m.text}'))
    page.goto(f'http://127.0.0.1:{PORT}/game/village/index.html?realm=targon&land=t1', wait_until='networkidle')
    page.wait_for_timeout(2500)
    diag = page.evaluate("""() => {
      const V = window.__VILLAGE;
      if (!V) return {v: false};
      const S = V.scene;
      const keep = V.buildings().find(x => x.type === 'keep');
      const wx = (keep.x - 12 + 0.5) * 2 + 2, wz = (keep.y - 12 + 0.5) * 2 + 2;
      let proj = null, err = null;
      try {
        const THREEv = S.cam.position.constructor;
        const v = new THREEv();
        v.set(wx, 1.2, wz);
        v.project(S.cam);
        proj = [v.x, v.y];
      } catch (e) { err = String(e); }
      return {
        v: true, tier: V.tier, sceneType: typeof S, camType: S.cam ? S.cam.type : null,
        keep: [keep.x, keep.y], wx, wz, proj, err,
        camPos: S.cam ? Array.from(S.cam.position.toArray()).map(n => +n.toFixed(2)) : null,
        renderer: S.renderer ? 'ok' : null,
        children: S.scene.children.length,
      };
    }""")
    import json
    print(json.dumps(diag, indent=1))
    print('ERRORS:', [e for e in errs if '404' not in e][:5], f'(total console={len(errs)})')
    b.close()
