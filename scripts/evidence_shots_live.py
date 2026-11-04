#!/usr/bin/env python3
"""شواهد تصویری از نسخهٔ زندهٔ عملیاتی (Liara) در همان دید موبایل کارفرما.

فقط عکس‌گیری از وضعیت موجود — هیچ تغییری در کد/استقرار.
مسیر واقعی کارفرما: صفحهٔ اصلی → کارت تارگون → ساخت شخصیت → هفت قلمرو →
تارگون → بازی کن → جهان زندهٔ تارگون → نقشهٔ ایزومتریک فعلی.
"""
import re, sys, pathlib
from playwright.sync_api import sync_playwright

BASE = 'https://darvazeh-ha.liara.run'
ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'download' / 'evidence-v7-live'
OUT.mkdir(parents=True, exist_ok=True)
SDKF = ROOT / 'tests' / 'fixtures' / 'miniapp.js'

with sync_playwright() as p:
    browser = p.chromium.launch()
    sdk = SDKF.read_text(encoding='utf-8')
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=3,
                              is_mobile=True, has_touch=True, locale='fa-IR',
                              user_agent='Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 Chrome/120 Mobile')
    ctx.route(re.compile(r'tapi\.bale\.ai/miniapp\.js'),
              lambda r: r.fulfill(status=200, content_type='application/javascript', body=sdk))
    page = ctx.new_page()
    errs = []
    page.on('pageerror', lambda e: errs.append(str(e)))

    def shot(name, full=False):
        page.wait_for_timeout(500)
        page.screenshot(path=str(OUT / f'{name}.png'), full_page=full)
        print('shot:', name)

    # ۱) صفحهٔ اصلی مینی‌اپ (کارت جهان تارگون)
    page.goto(BASE + '/', wait_until='load', timeout=60000)
    page.wait_for_timeout(2500)
    page.locator('#targon-entry').scroll_into_view_if_needed()
    shot('01-root-targon-card')

    # ۲) ورود به بازی از کارت
    page.locator('#targon-entry').tap()
    page.wait_for_url('**/game/index.html**', timeout=15000)
    page.wait_for_timeout(2000)
    shot('02-game-creation')

    # ۳) ساخت شخصیت (مسیر واقعی)
    page.locator('#btn-enter').tap(); page.wait_for_timeout(500)
    page.fill('#cre-name', 'آرش')
    page.locator('.banner-opt[data-b="2"]').tap()
    page.locator('#btn-cre-start').tap(); page.wait_for_timeout(900)

    # ۴) بارگیری تازه — منوی هفت قلمرو (هنر مرجع کارفرما)
    page.goto(BASE + '/game/index.html', wait_until='load', timeout=60000)
    page.wait_for_timeout(2000)
    page.locator('#btn-realms-open').tap(); page.wait_for_timeout(800)
    shot('03-realms-menu-reference-art')

    # ۵) صفحهٔ قلمرو تارگون (هنر مرجع + دکمهٔ بازی)
    page.locator('#realms-grid .dom-card[data-domain="targon"]').tap(); page.wait_for_timeout(700)
    shot('04-targon-domain-page')
    page.locator('#btn-play-domain').tap(); page.wait_for_timeout(700)

    # ۶) جهان زندهٔ تارگون — نقشهٔ ایزومتریک فعلی (سویهٔ اصلی شکاف)
    page.locator('#btn-targon-world').tap(); page.wait_for_timeout(2200)
    shot('05-targon-live-map')

    # ۷) نمای نزدیک از کاشی‌ها/شخصیت هندسی
    page.screenshot(path=str(OUT / '06-targon-map-closeup.png'),
                    clip={'x': 45, 'y': 260, 'width': 300, 'height': 320})
    print('shot: 06-targon-map-closeup')

    # ۸) برگهٔ ۱۱ ناحیه
    page.locator('#btn-t-areas').tap(); page.wait_for_timeout(700)
    shot('07-targon-11-areas-sheet')

    # ۹) نمای دسکتاپ صفحهٔ اصلی (برای کامل بودن گزارش)
    dctx = browser.new_context(viewport={'width': 1280, 'height': 800}, locale='fa-IR')
    dctx.route(re.compile(r'tapi\.bale\.ai/miniapp\.js'),
               lambda r: r.fulfill(status=200, content_type='application/javascript', body=sdk))
    dp = dctx.new_page()
    dp.goto(BASE + '/', wait_until='load', timeout=60000); dp.wait_for_timeout(2000)
    dp.locator('#targon-entry').scroll_into_view_if_needed()
    dp.screenshot(path=str(OUT / '08-root-desktop.png'))
    print('shot: 08-root-desktop')

    print('pageerrors:', errs[:3] if errs else 'none')
    browser.close()

print('EVIDENCE SHOTS DONE ->', OUT)
