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
