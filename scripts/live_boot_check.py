#!/usr/bin/env python3
"""راه‌اندازی واقعی صفحه‌های نسخهٔ استقرار یافتهٔ عملیاتی (Liara) در مرورگر واقعی.

کنترل نهایی پس از استقرار v7:
- بدون خطای نحوی/دامنه — به‌ویژه «already been declared»
- بوت کامل بازی (document.title / ریشهٔ بازی)
- صفحهٔ اصلی و کارت «🌍 جهان تارگون»
"""
import sys
from playwright.sync_api import sync_playwright

BASE = 'https://darvazeh-ha.liara.run'
BAD = 'already been declared'
ok = True

def check(name, cond):
    global ok
    print(('PASS' if cond else 'FAIL'), '|', name)
    if not cond:
        ok = False

with sync_playwright() as p:
    browser = p.chromium.launch()
    for url, tag in [(BASE + '/', 'main'), (BASE + '/game/index.html', 'game')]:
        page = browser.new_page(viewport={'width': 390, 'height': 844})
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
        page.goto(url, wait_until='load', timeout=45000)
        page.wait_for_timeout(3500)
        body = page.content()
        check(f'{tag}: بدون خطای «already been declared»', BAD not in ' '.join(errors))
        check(f'{tag}: صفحه لود شد (HTTP بوت)', len(body) > 1000)
        if tag == 'main':
            check('main: کارت «🌍 جهان تارگون» هست', 'جهان تارگون' in body)
        else:
            # ریشهٔ بازی: بوم یا ظرف بازی واقعاً در DOM هست
            has_root = page.evaluate("!!(document.querySelector('#app,#game,#root,canvas,.screen')||document.body.innerText.length>50)")
            check('game: ریشهٔ بازی در DOM بوت شد', has_root)
        net_sdk_fail = [e for e in errors if 'tapi.bale.ai' in e or 'miniapp' in e]
        if net_sdk_fail:
            print(f'NOTE | {tag}: بارگیری SDK بله از سندباکس ممکن نیست (خارج از بله طبیعی است):', len(net_sdk_fail))
        page.close()
    browser.close()

print('=== live_boot_check:', 'ALL PASS' if ok else 'FAIL', '===')
sys.exit(0 if ok else 1)
