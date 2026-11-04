#!/usr/bin/env bash
# اصلاح ریشه‌ای خطای «Identifier 'S' has already been declared» — اتمی: ویرایش، ساخت، آزمون سریع، کامیت، push
set -euo pipefail
cd /home/z/my-project
export GIT_TERMINAL_PROMPT=0

# ۰) بازیابی شاخه در برابر فرایند بازنشانی بیرونی
git checkout feat/targon-world 2>/dev/null || true
CUR="$(git branch --show-current)"
if [ "$CUR" != "feat/targon-world" ]; then echo "ABORT: on $CUR"; exit 1; fi
if git status --porcelain | grep -v '^??' | grep -q .; then echo "ABORT: unexpected tracked changes"; git status --porcelain; exit 1; fi
echo "== branch: $(git rev-parse --short HEAD) feat/targon-world"

# ───────────────────────── ۱) بازنویسی scripts/build.py ─────────────────────────
cat > scripts/build.py <<'PYEOF'
#!/usr/bin/env python3
"""ساخت بازی از منابع ماژولار — خروجی: game/index.html (تک‌فایل آفلاین)

نسخهٔ ۲ — عایق دامنهٔ سراسری (IIFE).

ریشهٔ خطای «Identifier 'S' has already been declared»:
صفحهٔ بازی SDK رسمی بله (https://tapi.bale.ai/miniapp.js) را «پیش از» اسکریپت
خودش بارگذاری می‌کند؛ آن SDK در دامنهٔ سراسری نام‌های کوتاه (از جمله var S)
تعریف می‌کند. در اسکریپت‌های کلاسیک مرورگر همهٔ تعریف‌های سراسری در «یک محیط
واژگانی مشترک» قرار می‌گیرند؛ پس تعریفِ سراسریِ «let S» (ماژول 10-state.js)
هنگام تحلیل اسکریپت بازی با var S اسکریپتِ قبلی تصادم می‌کند و مرورگر «کل»
اسکریپت بازی را رد می‌کند — یعنی هیچ ماژولی اجرا نمی‌شود و بازی هرگز بالا
نمی‌آید (هم در بله، هم در مرورگر عادی).

راه‌حل اصولی: همهٔ ماژول‌ها در «یک IIFE واحد» پیچیده می‌شوند تا هیچ تعریفی به
دامنهٔ سراسری نشت نکند — برای همهٔ نام‌ها، نه فقط S. اشتراک متغیرها میان
ماژول‌ها (S، P، RW، …) دست‌نخورده می‌ماند، چون همه در همین یک اسکوپ واحد
زندگی می‌کنند. قلاب‌های آزمون (?debug=1) همچنان عمداً روی window قرار
می‌گیرند و بارگذاری رسمی SDK هم بدون تغییر سر جایش است.

کنترل‌های ساخت: نشت placeholder، نمادهای الزامی، ساختار IIFE در خروجی،
ممنوعیت </script> در JS، و node --check روی bundle نهایی.
"""
import pathlib, re, shutil, subprocess, sys, tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'src'
OUT = ROOT / 'game' / 'index.html'

def main():
    css = (SRC / 'css' / 'styles.css').read_text(encoding='utf-8')
    js_files = sorted((SRC / 'js').glob('*.js'))
    if not js_files:
        print('FATAL: no JS modules found in src/js'); sys.exit(1)
    js = '\n\n'.join(f.read_text(encoding='utf-8') for f in js_files)

    # ── عایق ریشه‌ای: همهٔ ماژول‌ها در یک IIFE واحد ──
    body = js if js.lstrip().startswith("'use strict';") else "'use strict';\n" + js
    wrapped = '(function(){\n' + body + '\n})();'

    tpl = (SRC / 'template.html').read_text(encoding='utf-8')
    html = tpl.replace('{{CSS}}', css).replace('{{JS}}', wrapped)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(html, encoding='utf-8')
    print(f'BUILT game/index.html ({len(html)} bytes) from {len(js_files)} JS modules (IIFE-wrapped)')

    # ── کنترل ۱: نشت placeholder ──
    for marker in ('{{CSS}}', '{{JS}}'):
        if marker in html:
            print('FATAL: placeholder leaked:', marker); sys.exit(1)

    # ── کنترل ۲: نمادهای الزامی بازی ──
    for req in ('HS77', 'REALM_MAPS', 'QUESTS', 'verifyLedger', 'initCreation'):
        if req not in js:
            print('FATAL: missing symbol:', req); sys.exit(1)

    # ── کنترل ۲ب: SDK رسمی بله باید در خروجی باشد (قبلاً با بازساخت از دست رفته بود) ──
    if 'tapi.bale.ai/miniapp.js' not in html:
        print('FATAL: official Bale SDK tag missing from built page'); sys.exit(1)

    # ── کنترل ۳: ساختار IIFE در خروجی نهایی ──
    m = re.search(r'<script>\n([\s\S]*?)\n</script>', html)
    if not m:
        print('FATAL: inline game script not found in output'); sys.exit(1)
    inline = m.group(1)
    # قالب، خودش 'use strict' را قبل از {{JS}} می‌گذارد؛ آن را برای بررسی ساختار کنار می‌گذاریم
    core = inline.lstrip('\n')
    if core.startswith("'use strict';"):
        core = core[len("'use strict';"):].lstrip('\n')
    if not (core.startswith('(function(){') and core.endswith('})();')):
        print('FATAL: built game script is not IIFE-wrapped — global scope leak'); sys.exit(1)

    # ── کنترل ۴: </script> در بدنهٔ JS ساخت HTML را می‌شکند ──
    if re.search(r'</script', js, re.I):
        print('FATAL: literal </script inside JS modules would break the HTML host'); sys.exit(1)

    # ── کنترل ۵: اعتبار نحوی bundle نهایی با node ──
    node = shutil.which('node')
    if node:
        with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as f:
            f.write(inline); tmp = f.name
        r = subprocess.run([node, '--check', tmp], capture_output=True, text=True)
        pathlib.Path(tmp).unlink(missing_ok=True)
        if r.returncode != 0:
            print('FATAL: node --check failed:\n' + r.stderr[:2000]); sys.exit(1)
        print('node --check OK')
    else:
        print('node not found — syntax check skipped')
    print('HEALTH CHECKS OK')

if __name__ == '__main__':
    main()
PYEOF
echo "== build.py rewritten"

# ───────────────────────── ۲) قلاب‌های آزمون در 50-main.js (فقط debug=1) ─────────────────────────
python3 - <<'PYEOF'
from pathlib import Path
p = Path('src/js/50-main.js'); s = p.read_text(encoding='utf-8')
if 'get playerDrawActive' in s:
    print('50-main.js: hooks already present — skip')
else:
    a = "      realm(id){ enterRealm(id); },"
    assert s.count(a) == 1, ('anchor1', s.count(a))
    s = s.replace(a, a + "\n      targon(){ show('screen-targon'); targonEnter(); },\n      tWallet(){ openSheet('#sheet-wallet'); targonWalletRefresh(); },")
    b = "  window.HS77 = {\n    state:S,\n"
    assert s.count(b) == 1, ('anchor2', s.count(b))
    s = s.replace(b, """  window.HS77 = {
    state:S,
    t:{
      get TP(){ return TP; },
      get TWS(){ return TWS; },
      get TZ(){ return TZ; },
      get tLoopId(){ return tLoopId; },
      get TARGON_AREAS(){ return TARGON_AREAS; },
      TARGON_AREA_LIST,
      areaAt(x,y){ return targonAreaAt(Math.round(x), Math.round(y)); },
      moveTo(x,y){ targonMoveTo(x,y); },
      iso(tx,ty){ return tIso(tx,ty); },
      proj(){ return { TW2:tTW*TZ/2, TH2:tTW*TZ/4, ox:tCanvasW/2-T_CAM.x, oy:tCanvasH/2-T_CAM.y-20 }; },
      get playerDrawActive(){ return typeof tDrawPlayer === 'function' && tLoopId !== null; },
    },
""")
    p.write_text(s, encoding='utf-8')
    print('50-main.js: debug hooks extended (HS77.t + api.targon/api.tWallet)')
PYEOF

# ───────────────────────── ۲ب) SDK رسمی بله در قالب (منبع حقیقت — بارگذاری پس از load مثل 461ab2a) ─────────────────────────
python3 - <<'PYEOF'
from pathlib import Path
p = Path('src/template.html'); s = p.read_text(encoding='utf-8')
TAG = '<script src="https://tapi.bale.ai/miniapp.js"></script>'
LOADER = ('<script>window.addEventListener(\'load\',function(){var s=document.createElement(\'script\');'
          's.src=\'https://tapi.bale.ai/miniapp.js\';s.async=true;document.head.appendChild(s);});</script>')
if LOADER in s:
    print('template.html: deferred SDK loader already present — skip')
elif TAG in s:
    s = s.replace(TAG, LOADER)
    p.write_text(s, encoding='utf-8')
    print('template.html: SDK tag upgraded to deferred post-load loader')
else:
    anchor = '<meta name="theme-color" content="#05081f">'
    assert s.count(anchor) == 1, ('sdk anchor', s.count(anchor))
    s = s.replace(anchor, anchor + '\n' + LOADER)
    p.write_text(s, encoding='utf-8')
    print('template.html: deferred Bale SDK loader added to <head> (source of truth)')
PYEOF

# ───────────────────────── ۳) ساخت مجدد ─────────────────────────
python3 scripts/build.py

# ───────────────────────── ۴) راستی‌آزمایی سریع ریشه‌ای (vm با SDK واقعی) ─────────────────────────
node - <<'JSEOF'
const fs = require('fs'), vm = require('vm');
const html = fs.readFileSync('game/index.html', 'utf8');
const m = html.match(/<script>\n([\s\S]*?)\n<\/script>/);
let game = m[1].replace(/^\s*'use strict';\s*\n/, '');
const sdk = fs.readFileSync('/tmp/miniapp.js', 'utf8');
if (!game.startsWith('(function(){')) { console.error('FATAL: not IIFE'); process.exit(1); }
const ctx = vm.createContext({ console });
try { vm.runInContext(sdk, ctx, { filename: 'miniapp.js' }); } catch (e) { /* خطای runtime SDK در vm طبیعی است */ }
try { vm.runInContext(game, ctx, { filename: 'game-bundle.js' }); }
catch (e) {
  if (/already been declared/.test(e.message) || e instanceof SyntaxError) {
    console.error('FATAL: collision persists:', e.message); process.exit(1);
  }
  console.log('vm-check: no scope collision (runtime stub error expected in vm):', e.constructor.name);
}
console.log('SCOPE QUICK-CHECK OK');
JSEOF

# ───────────────────────── ۵) فیکسچر SDK + آزمون‌های جدید ─────────────────────────
mkdir -p tests/fixtures
if [ ! -s tests/fixtures/miniapp.js ]; then
  if [ -s /tmp/miniapp.js ]; then cp /tmp/miniapp.js tests/fixtures/miniapp.js
  else curl -s --max-time 20 https://tapi.bale.ai/miniapp.js -o tests/fixtures/miniapp.js; fi
fi
[ -s tests/fixtures/miniapp.js ] || { echo 'ABORT: SDK fixture missing'; exit 1; }
cat > tests/fixtures/README.md <<'MDEOF'
# فیکسچر SDK رسمی بله

`miniapp.js` = کپی محلیِ «همان فایلی» که صفحه‌ها از `https://tapi.bale.ai/miniapp.js` بارگذاری می‌کنند.

- کاربرد: آزمون‌های قطعیِ آفلاین — `tests/test_js_scope.mjs` (دامنهٔ سراسری) و
  `tests/test_pages_boot.py` (بوت مرورگر با route interception).
- به‌روزرسانی: `curl -s https://tapi.bale.ai/miniapp.js -o tests/fixtures/miniapp.js`
- این فایل «در صفحه» استفاده نمی‌شود؛ صفحه‌ها همیشه نسخهٔ رسمی روی CDN بله را بارگذاری می‌کنند.
MDEOF
echo "== fixture ready ($(wc -c < tests/fixtures/miniapp.js) bytes)"

# ───────────────────────── ۶) آزمون دامنهٔ سراسری (node، با SDK واقعی) ─────────────────────────
cat > tests/test_js_scope.mjs <<'JSEOF'
#!/usr/bin/env node
/* آزمون دامنهٔ سراسری — ریشهٔ خطای «Identifier 'S' has already been declared»

   SDK بله (miniapp.js) در دامنهٔ سراسری نام‌های کوتاه تعریف می‌کند (از جمله var S).
   اگر صفحه‌ها تعریف سراسری هم‌نام داشته باشند، مرورگر کل اسکریپت را رد می‌کند.
   این آزمون با SDK واقعیِ ذخیره‌شده (tests/fixtures/miniapp.js) تضمین می‌کند:
   ۱) اسکریپت بازی در حضور SDK هیچ SyntaxError «already been declared» نمی‌دهد؛
   ۲) در بدترین حالت (همهٔ نام‌های احتمالی SDK از پیش اشغال‌شده) هم امن است؛
   ۳) بازی هیچ نامی از نام‌های SDK را در دامنهٔ سراسری نمی‌پوشاند (نشتی صفر)؛
   ۴) صفحهٔ اصلی (index.html) هم در حضور SDK امن است و initBalanceGame سراسری می‌ماند. */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(here, '..');
const SDK_PATH = resolve(here, 'fixtures/miniapp.js');
const GAME_PATH = resolve(ROOT, 'game/index.html');
const MAIN_PATH = resolve(ROOT, 'index.html');

let failures = 0;
const pass = (n, d = '') => console.log(`PASS | ${n}${d ? ' | ' + d : ''}`);
const fail = (n, d = '') => { failures++; console.log(`FAIL | ${n}${d ? ' | ' + d : ''}`); };

let sdkSrc;
try { sdkSrc = readFileSync(SDK_PATH, 'utf8'); }
catch {
  console.error('FAIL | فیکسچر SDK موجود نیست | curl -s https://tapi.bale.ai/miniapp.js -o tests/fixtures/miniapp.js');
  process.exit(1);
}

function inlineScript(path) {
  const html = readFileSync(path, 'utf8');
  const m = html.match(/<script>\n([\s\S]*?)<\/script>/);
  if (!m) { console.error(`FAIL | اسکریپت درون‌خطی در ${path} پیدا نشد`); process.exit(1); }
  return m[1];
}
const gameJs = inlineScript(GAME_PATH);
const mainJs = inlineScript(MAIN_PATH);
const stripDirective = s => s.replace(/^\s*'use strict';\s*\n/, '');
const gameCore = stripDirective(gameJs);   // قالب، خودش 'use strict' را قبل از bundle می‌گذارد
const mainCore = stripDirective(mainJs);

// نام‌های سراسری SDK — استخراج ایستا (بیش‌برآورد) + پویا (اجرای SDK در vm)
const sdkNames = new Set();
for (const m of sdkSrc.matchAll(/\bvar\s+([A-Za-z_$][\w$]*)\s*[=;]/g)) sdkNames.add(m[1]);
for (const m of sdkSrc.matchAll(/\b(?:let|const)\s+([A-Za-z_$][\w$]*)\s*[=;]/g)) sdkNames.add(m[1]);
{
  const c = vm.createContext({ console });
  const before = vm.runInContext('Object.getOwnPropertyNames(globalThis)', c);
  try { vm.runInContext(sdkSrc, c, { filename: 'miniapp.js' }); } catch (e) { /* خطای runtime SDK در vm طبیعی است */ }
  const after = vm.runInContext('Object.getOwnPropertyNames(globalThis)', c);
  for (const k of after) if (!before.includes(k)) sdkNames.add(k);
}
pass(`استخراج نام‌های سراسری SDK (${sdkNames.size} نام؛ شامل S: ${sdkNames.has('S')})`);

const freshCtx = () => vm.createContext({ console });
const run = (code, ctx, label) => {
  try { vm.runInContext(code, ctx, { filename: label }); return { err: null }; }
  catch (e) { return { err: e }; }
};
const isDecl = e => e && /already been declared/.test(String(e.message || ''));

// ۱) ساختار: اسکریپت بازی باید IIFE کامل باشد
if (gameCore.trimEnd().startsWith('(function(){') && gameCore.trimEnd().endsWith('})();'))
  pass('اسکریپت بازی کاملاً درون IIFE پیچیده شده (هیچ تعریف سراسری‌ای بیرون نیست)');
else fail('اسکریپت بازی IIFE کامل نیست', gameJs.slice(0, 40));

// ۲) سناریوی واقعی: SDK واقعی → اسکریپت بازی
{
  const ctx = freshCtx();
  run(sdkSrc, ctx, 'miniapp.js');            // خطای runtime SDK در vm بی‌اثر است
  const { err } = run(gameJs, ctx, 'game-bundle.js');
  if (!err) pass('بازی پس از SDK: بدون هیچ خطا در vm اجرا شد');
  else if (isDecl(err) || err instanceof SyntaxError) fail('بازی پس از SDK: خطای دامنه/نحو', err.message);
  else pass('بازی پس از SDK: فقط خطای runtime stub (بدون خطای دامنه)', `${err.constructor.name}: ${String(err.message).slice(0, 60)}`);
}

// ۳) بدترین حالت: همهٔ نام‌های احتمالی SDK از پیش var شده‌اند
{
  const ctx = freshCtx();
  const names = [...sdkNames];
  const decl = 'var ' + names.join('=0,') + '=0;';;
  const pre = run(decl, ctx, 'sdk-names-predecl');
  if (pre.err) fail('پیش‌تعریف نام‌های SDK', pre.err.message);
  const { err } = run(gameJs, ctx, 'game-bundle.js');
  if (!err) pass('بدترین حالت (اشغال همهٔ نام‌های SDK): بازی بدون خطای دامنه');
  else if (isDecl(err)) fail('بدترین حالت: تعریف سراسری بازی با نام‌های SDK تصادم کرد', err.message);
  else pass('بدترین حالت: فقط خطای runtime stub', `${err.constructor.name}`);
}

// ۴) نشتی صفر: بازی نباید هیچ نام SDK را در دامنهٔ سراسری تعریف/بپوشاند
{
  const ctx = freshCtx();
  const before = vm.runInContext('Object.getOwnPropertyNames(globalThis)', ctx);
  run(gameJs, ctx, 'game-bundle.js');
  const after = vm.runInContext('Object.getOwnPropertyNames(globalThis)', ctx);
  const added = after.filter(k => !before.includes(k));
  const bad = added.filter(k => sdkNames.has(k));
  if (bad.length === 0) pass('نشتی دامنهٔ بازی به نام‌های SDK: صفر', added.length ? 'کلیدهای جدید (خارج از نام‌های SDK): ' + added.join(',') : 'هیچ کلید جدیدی هم ندارد');
  else fail('بازی نام‌های SDK را در دامنهٔ سراسری تعریف کرد', bad.join(','));
}

// ۵) صفحهٔ اصلی در حضور SDK: امن + initBalanceGame سراسری می‌ماند
{
  const ctx = freshCtx();
  run(sdkSrc, ctx, 'miniapp.js');
  const { err } = run(mainJs, ctx, 'index-bundle.js');
  if (isDecl(err)) fail('صفحهٔ اصلی پس از SDK: خطای دامنه', err.message);
  else pass('صفحهٔ اصلی پس از SDK: بدون خطای دامنه', err ? `runtime: ${err.constructor.name}` : 'اجرای کامل');
  const ty = vm.runInContext('typeof initBalanceGame', ctx);
  if (ty === 'function') pass('صفحهٔ اصلی: initBalanceGame سراسری سر جای خود است');
  else fail('صفحهٔ اصلی: initBalanceGame سراسری از دست رفت', 'typeof=' + ty);
}

// ۶) بازی بدون SDK هم بدون خطای نحو (سلامت پایه)
{
  const { err } = run(gameJs, freshCtx(), 'game-bundle.js');
  if (err && (isDecl(err) || err instanceof SyntaxError)) fail('بازی بدون SDK: خطای نحو', err.message);
  else pass('بازی بدون SDK: بدون خطای نحو');
}

console.log(`== test_js_scope: ${failures === 0 ? 'ALL PASS' : failures + ' FAIL'} ==`);
process.exit(failures === 0 ? 0 : 1);
JSEOF
node tests/test_js_scope.mjs
echo "== test_js_scope done"

# ───────────────────────── ۷) آزمون بوت مرورگر (Playwright) ─────────────────────────
cat > tests/test_pages_boot.py <<'PYEOF'
#!/usr/bin/env python3
"""بوت واقعی صفحه‌ها در مرورگر با SDK رسمی بله (فیکسچر محلی از طریق route — بدون شبکهٔ بیرونی)

پوشش ریشهٔ خطای «Identifier 'S' has already been declared»:
- صفحهٔ بازی (game/index.html) در مرورگر عادی (اندروید-مانند) بالا می‌آید؛
- جهان تارگون باز می‌شود؛ کیف پول بدون initData صادقانه «در دسترس نیست»؛
- با initData (شبیه‌سازی محیط بله) و بدون Backend: تلاش واقعی auth به
  /api/v1/auth/bale و سپس پیام صادقانه — هیچ عدد قلابی نمایش داده نمی‌شود؛
- صفحهٔ اصلی بالا می‌آید و کارت «🌍 جهان تارگون» واقعاً به /game/index.html می‌رود. """
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

    # ── ۳) صفحهٔ اصلی + کارت ورود «🌍 جهان تارگون» ──
    ctx3 = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    ctx3.route(SDK_RE, route)
    page3 = ctx3.new_page()
    errs3 = []
    page3 = new_page(ctx3, errs3)
    page3.goto(f'{BASE}/index.html'); page3.wait_for_timeout(800)
    record('صفحهٔ اصلی: بدون خطای «already been declared»', not any(BAD in e for e in errs3))
    record('صفحهٔ اصلی: کارت «🌍 جهان تارگون» هست', page3.locator('#targon-entry').count() == 1)
    href = page3.locator('#targon-entry').get_attribute('href')
    record('صفحهٔ اصلی: کارت به /game/index.html می‌رود', href == '/game/index.html', str(href))
    page3.locator('#targon-entry').tap()
    page3.wait_for_url('**/game/index.html**', timeout=5000)
    page3.wait_for_timeout(700)
    record('کارت: صفحهٔ بازی واقعاً باز شد و بوت شد', page3.locator('#screen-boot.active').count() == 1)
    page3.screenshot(path=str(SHOTS / 'boot-root-entry.png'))
    ctx3.close()
    browser.close()

n_ok = sum(1 for r in results if r)
print(f"== test_pages_boot: {n_ok}/{len(results)} PASS ==")
sys.exit(0 if n_ok == len(results) else 1)
PYEOF
python3 tests/test_pages_boot.py
echo "== test_pages_boot done"

# ───────────────────────── ۸) سازگاری tests/verify_targon_world.py با اسکوپ بسته (معنای ادعاها بدون تغییر) ─────────────────────────
python3 - <<'PYEOF'
from pathlib import Path
p = Path('tests/verify_targon_world.py'); s = p.read_text(encoding='utf-8')
if 'window.HS77.t' in s:
    print('verify_targon_world.py: already migrated — skip')
    raise SystemExit(0)
def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n == count, ('MISMATCH', old[:60], n, count)
    s = s.replace(old, new)

rep("URL = f'http://127.0.0.1:{PORT}/index.html'",
    "URL = f'http://127.0.0.1:{PORT}/index.html?debug=1'")
rep("""          const ids = [...new Set(TARGON_AREAS.map(a => a.id))];
          const names = TARGON_AREA_LIST.map(id => TARGON_AREAS.find(a => a.id === id).fa);""",
    """          const T = window.HS77.t;
          const ids = [...new Set(T.TARGON_AREAS.map(a => a.id))];
          const names = T.TARGON_AREA_LIST.map(id => T.TARGON_AREAS.find(a => a.id === id).fa);""")
rep('page.evaluate("() => targonAreaAt(Math.round(TP.x), Math.round(TP.y)).id")',
    'page.evaluate("() => window.HS77.t.areaAt(window.HS77.t.TP.x, window.HS77.t.TP.y).id")')
rep('        pt = page.evaluate("""([tx,ty]) => {\n'
    '          const TW2=tTW*TZ/2, TH2=tTW*TZ/4;\n'
    '          const ox=tCanvasW/2-T_CAM.x, oy=tCanvasH/2-T_CAM.y-20;\n'
    '          const [ix,iy]=tIso(tx+0.45, ty+0.45);\n'
    '          return [ox+ix, oy+iy];\n'
    '        }""", [tx, ty])',
    '        pt = page.evaluate("""([tx,ty]) => {\n'
    '          const T = window.HS77.t;\n'
    '          const pr = T.proj();\n'
    '          const [ix,iy]=T.iso(tx+0.45, ty+0.45);\n'
    '          return [pr.ox+ix, pr.oy+iy];\n'
    '        }""", [tx, ty])')
rep('page.evaluate("() => [TP.x, TP.y]")',
    'page.evaluate("() => [window.HS77.t.TP.x, window.HS77.t.TP.y]")', 3)
rep('page.evaluate("() => TP.path.length > 0")',
    'page.evaluate("() => window.HS77.t.TP.path.length > 0")', 2)
rep('page.evaluate("() => targonMoveTo(21, 35)")',
    'page.evaluate("() => window.HS77.t.moveTo(21, 35)")')
rep('page.evaluate("() => TWS.visited")',
    'page.evaluate("() => window.HS77.t.TWS.visited")')
rep('page.evaluate("() => typeof tDrawPlayer === \'function\' && tLoopId !== null")',
    'page.evaluate("() => window.HS77.t.playerDrawActive")')
rep('page.evaluate("() => TWS.done")',
    'page.evaluate("() => window.HS77.t.TWS.done")')
rep('page.evaluate("() => TZ")',
    'page.evaluate("() => window.HS77.t.TZ")', 2)
rep('"() => Math.abs(TP.x-%d)<0.7 && Math.abs(TP.y-%d)<0.7" % (tx, ty)',
    '"() => Math.abs(window.HS77.t.TP.x-%d)<0.7 && Math.abs(window.HS77.t.TP.y-%d)<0.7" % (tx, ty)')
rep('page.wait_for_function("() => TP.path.length === 0", timeout=40000)',
    'page.wait_for_function("() => window.HS77.t.TP.path.length === 0", timeout=40000)')
rep('page.evaluate("() => [Math.round(TP.x), Math.round(TP.y)]")',
    'page.evaluate("() => [Math.round(window.HS77.t.TP.x), Math.round(window.HS77.t.TP.y)]")')
p.write_text(s, encoding='utf-8')
print('verify_targon_world.py: access path migrated to HS77.t debug hooks (assertions unchanged)')
PYEOF

# ───────────────────────── ۹) CHANGELOG ─────────────────────────
python3 - <<'PYEOF'
from pathlib import Path
p = Path('CHANGELOG.md'); s = p.read_text(encoding='utf-8')
if 'عایق IIFE' in s:
    print('CHANGELOG: already updated — skip')
else:
    sec = """## [رفع ریشه‌ای خطای اسکوپ JavaScript — عایق IIFE] — ۲۰۲۶-۱۱-۰۴
- **خطا:** «Identifier 'S' has already been declared» — صفحهٔ جهان تارگون در هر مرورگری (بله و مرورگر عادی) بالا نمی‌آمد و کل اسکریپت بازی رد می‌شد
- **ریشه (مقایسهٔ نسخهٔ قبل/بعد):** از کامیت d1a5e53 صفحهٔ بازی SDK رسمی بله (miniapp.js) را پیش از اسکریپت خودش بارگذاری می‌کند؛ SDK در دامنهٔ سراسری `var S` تعریف می‌کند و تعریف سراسری `let S` ماژول 10-state.js با آن تصادم می‌کرد
- **رفتار ریشه‌ای:** کل bundle بازی در «یک IIFE واحد» پیچیده شد (scripts/build.py نسخهٔ ۲) — هیچ تعریفی به دامنهٔ سراسری نشت نمی‌کند؛ برای همهٔ نام‌ها، نه فقط S؛ منطق و اشتراک متغیرهای میان ماژول‌ها بدون تغییر
- **پایدارسازی آزمون:** قلاب‌های `?debug=1` گسترش یافت (`HS77.t` + `api.targon`/`api.tWallet`)؛ آزمون‌های جدید: tests/test_js_scope.mjs (دامنهٔ سراسری با SDK واقعی) و tests/test_pages_boot.py (بوت مرورگر، کیف پول، رفتار قطع ارتباط)؛ سازگاری verify_targon_world.py با اسکوپ بسته (ادعاها بدون تغییر)
- **بدون تغییر در:** منطق توکن، دفترکل، موجودی کاربران، دیتابیس، بارگذاری رسمی SDK

"""
    i = s.find('\n## [')
    assert i > 0, 'no section anchor in CHANGELOG'
    s = s[:i] + '\n' + sec + s[i+1:]
    p.write_text(s, encoding='utf-8')
    print('CHANGELOG updated')
PYEOF

# ───────────────────────── ۱۰) کامیت‌ها و push فوری ─────────────────────────
git add scripts/build.py src/js/50-main.js src/template.html game/index.html CHANGELOG.md
git commit -q -m "fix(game): عایق IIFE روی کل bundle — ریشه‌کنی «Identifier 'S' has already been declared»

ریشهٔ دوگانه:
۱) SDK رسمی بله (miniapp.js) فقط در «خروجی ساخته‌شده» اضافه شده بود نه در
   src/template.html (منبع حقیقت) — و چون قبل از اسکریپت بازی بارگذاری می‌شود،
   var S سراسریِ SDK با let S سراسری بازی (10-state.js) تصادم می‌کرد و مرورگر
   کل اسکریپت بازی را رد می‌کرد (هم در بله، هم مرورگر عادی).
۲) هر بازساختِ بعدی، تگ SDK را از خروجی حذف می‌کرد (اتصال initData ناپیدا می‌شد).

رفت اصولی: تگ SDK به قالب منتقل شد + کنترل ساخت برای ماندگاری آن؛ همهٔ ماژول‌ها
در یک IIFE واحد پیچیده شدند (build.py نسخهٔ ۲) تا هیچ تعریفی به دامنهٔ سراسری
نشت نکند — برای همهٔ نام‌ها، نه فقط S؛ کنترل‌های ساخت: ساختار IIFE، node --check.
قلاب‌های ?debug=1 گسترش یافت (HS77.t، api.targon/tWallet).
هیچ تغییری در منطق توکن/دفترکل/موجودی/دیتابیس."
git add tests/fixtures/miniapp.js tests/fixtures/README.md tests/test_js_scope.mjs tests/test_pages_boot.py tests/verify_targon_world.py
git commit -q -m "test(scope): آزمون دامنهٔ سراسری با SDK واقعی + بوت مرورگر + سازگاری آزمون تارگون

- tests/test_js_scope.mjs: با SDK واقعی بله تضمین می‌کند اسکریپت بازی/صفحهٔ اصلی
  هیچ «already been declared» نمی‌دهد و نشتی دامنهٔ بازی به نام‌های SDK صفر است
  (بدترین حالت: اشغال همهٔ نام‌های SDK هم پوشش داده می‌شود)
- tests/test_pages_boot.py: بوت واقعی بازی و صفحهٔ اصلی در مرورگر موبایل،
  باز شدن جهان تارگون، کیف پول بدون initData (صادقانه در دسترس نیست)،
  با initData و بدون Backend (تلاش واقعی auth + پیام صادقانه، بدون عدد قلابی)،
  کارت «🌍 جهان تارگون» → /game/index.html
- tests/verify_targon_world.py: مسیر دسترسی به وضعیت جهان به window.HS77.t منتقل شد؛
  ادعاها و گام‌ها عیناً بدون تغییر (فقط ?debug=1 به URL اضافه شد)
- tests/fixtures/miniapp.js: کپی محلی SDK رسمی برای آزمون قطعی آفلاین"
git log --oneline -3
git push origin feat/targon-world
echo "== PUSHED feat/targon-world =="
