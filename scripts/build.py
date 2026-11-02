#!/usr/bin/env python3
"""ساخت بازی از منابع ماژولار — خروجی: game/index.html (تک‌فایل آفلاین)"""
import pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'src'
OUT = ROOT / 'game' / 'index.html'

def main():
    css = (SRC / 'css' / 'styles.css').read_text(encoding='utf-8')
    js_files = sorted((SRC / 'js').glob('*.js'))
    js = '\n\n'.join(f.read_text(encoding='utf-8') for f in js_files)
    tpl = (SRC / 'template.html').read_text(encoding='utf-8')
    html = tpl.replace('{{CSS}}', css).replace('{{JS}}', js)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(html, encoding='utf-8')
    # bundle برای بررسی نحوی node (خارج از مخزن)
    import tempfile
    tmp = pathlib.Path(tempfile.gettempdir()) / 'hs77-bundle.js'
    tmp.write_text(js, encoding='utf-8')
    print(f'BUILT game/index.html ({len(html)} bytes) from {len(js_files)} JS modules')
    print(f'JS bundle -> {tmp}')
    # کنترل‌های سلامت ساده
    for marker in ('{{CSS}}', '{{JS}}'):
        if marker in html:
            print('FATAL: placeholder leaked:', marker); sys.exit(1)
    for req in ('HS77', 'REALM_MAPS', 'QUESTS', 'verifyLedger', 'initCreation'):
        if req not in js:
            print('FATAL: missing symbol:', req); sys.exit(1)
    print('HEALTH CHECKS OK')

if __name__ == '__main__':
    main()
