#!/usr/bin/env python3
"""ساخت بازی از منابع ماژولار — خروجی: game/index.html (تک‌فایل آفلاین)

دارایی‌های تصویری (assets/...) هنگام ساخت به data URI درون فایل تزریق می‌شوند
تا بازی تک‌فایل و کاملاً آفلاین بماند. اگر فایل تصویری موجود نباشد، مسیر literal
می‌ماند و رابط کاربری جایگزین (placeholder) نشان می‌دهد."""
import base64, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'src'
OUT = ROOT / 'game' / 'index.html'

ASSET_RE = re.compile(r'''(['"])(assets/[^'"]+)\1''')
MIME = {'.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp'}

def inline_assets(html: str) -> str:
    def repl(m):
        quote, rel = m.group(1), m.group(2)
        f = SRC / rel
        if not f.is_file():
            print(f'WARN: asset missing (placeholder stays): {rel}')
            return m.group(0)
        mime = MIME.get(f.suffix.lower(), 'application/octet-stream')
        b64 = base64.b64encode(f.read_bytes()).decode('ascii')
        return f'{quote}data:{mime};base64,{b64}{quote}'
    return ASSET_RE.sub(repl, html)

def main():
    css = (SRC / 'css' / 'styles.css').read_text(encoding='utf-8')
    js_files = sorted((SRC / 'js').glob('*.js'))
    js = '\n\n'.join(f.read_text(encoding='utf-8') for f in js_files)
    tpl = (SRC / 'template.html').read_text(encoding='utf-8')
    html = tpl.replace('{{CSS}}', css).replace('{{JS}}', js)
    html = inline_assets(html)
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
    for req in ('HS77', 'REALM_MAPS', 'QUESTS', 'verifyLedger', 'initCreation', 'DOMINIONS'):
        if req not in js:
            print('FATAL: missing symbol:', req); sys.exit(1)
    leftover = [m.group(2) for m in ASSET_RE.finditer(html)]
    if leftover:
        print('NOTE: assets left as literal paths (missing files):', leftover)
    print('HEALTH CHECKS OK')

if __name__ == '__main__':
    main()
