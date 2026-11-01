#!/usr/bin/env python3
"""Render index.html views and save screenshots for visual verification."""
import asyncio, pathlib, sys
from playwright.async_api import async_playwright

OUT = pathlib.Path('/tmp/shots'); OUT.mkdir(exist_ok=True)
URL = 'http://127.0.0.1:8123/index.html'

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1180, 'height': 760})
        await page.goto(URL, wait_until='networkidle')
        await page.wait_for_timeout(700)
        # 1) gates view
        await page.screenshot(path=str(OUT / '1-gates.png'))
        # 2) map view
        await page.click('button[data-view="map"]')
        await page.wait_for_timeout(600)
        await page.screenshot(path=str(OUT / '2-map.png'))
        # 3) profile view + QR
        await page.click('button[data-view="profile"]')
        await page.wait_for_timeout(600)
        await page.screenshot(path=str(OUT / '3-profile.png'))
        await page.click('#btn-qr')
        await page.wait_for_timeout(500)
        await page.screenshot(path=str(OUT / '4-qr.png'))
        await page.click('#qr-modal .modal-close')
        # 4) gate modal (gate 1)
        await page.click('button[data-view="gates"]')
        await page.wait_for_timeout(400)
        await page.click('.gate:not(.locked)')
        await page.wait_for_timeout(500)
        await page.screenshot(path=str(OUT / '5-gate-modal.png'))
        # 5) exploration scene
        await page.click('#gm-actions .btn')
        await page.wait_for_timeout(900)
        await page.screenshot(path=str(OUT / '6-scene.png'))
        # move player with keyboard
        await page.keyboard.down('ArrowRight'); await page.keyboard.down('ArrowUp')
        await page.wait_for_timeout(1200)
        await page.keyboard.up('ArrowRight'); await page.keyboard.up('ArrowUp')
        await page.screenshot(path=str(OUT / '7-scene-moved.png'))
        # console errors?
        browser.close_info = None
        await browser.close()
        print('saved:', sorted(f.name for f in OUT.glob('*.png')))

asyncio.run(main())
