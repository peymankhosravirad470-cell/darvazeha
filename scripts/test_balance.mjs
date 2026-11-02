import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const htmlUrl = pathToFileURL(resolve('index.html')).href;
const KEY = 'darvazeha_progress_v1';
const results = [];
const record = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'} | ${name}${detail ? ' | ' + detail : ''}`);
};

async function openGame(browser, { touch = false } = {}) {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: touch,
    isMobile: touch
  });
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto(htmlUrl);
  await page.evaluate(key => localStorage.removeItem(key), KEY);
  await page.reload();
  await page.locator('[data-tab="minigame"]').click();
  await page.locator('#balance-stage').waitFor();
  return { context, page, pageErrors };
}

async function pathPoints(page, step = 10) {
  return page.locator('#balance-stage').evaluate((svg, step) => {
    const path = svg.querySelector('#balance-path');
    const matrix = svg.getScreenCTM();
    const points = [];
    for (let d = 0; d <= path.getTotalLength(); d += step) {
      const p = path.getPointAtLength(d);
      const screen = new DOMPoint(p.x, p.y).matrixTransform(matrix);
      points.push({ x: screen.x, y: screen.y });
    }
    const p = path.getPointAtLength(path.getTotalLength());
    const screen = new DOMPoint(p.x, p.y).matrixTransform(matrix);
    points.push({ x: screen.x, y: screen.y });
    return points;
  }, step);
}

async function assertStored(page, predicate) {
  return page.evaluate(({ key, predicateName }) => {
    const value = JSON.parse(localStorage.getItem(key) || '{}');
    if (predicateName === 'won') return value.balance?.wins === 1 && value.balance?.attempts === 1 && value.balance?.lastResult === 'won';
    if (predicateName === 'lost') return value.balance?.losses === 1 && value.balance?.attempts === 1 && value.balance?.lastResult === 'lost';
    if (predicateName === 'reset') return value.balance?.inProgress === false && value.balance?.progress === 0;
    if (predicateName === 'started') return value.balance?.inProgress === true;
    return false;
  }, { key: KEY, predicateName: predicate });
}

const browser = await chromium.launch({ headless: true });
try {
  // 1) Function must be executable JavaScript, not CSS text.
  {
    const { context, page, pageErrors } = await openGame(browser);
    const isFunction = await page.evaluate(() => typeof window.initBalanceGame === 'function');
    record('تابع initBalanceGame در بخش JavaScript تعریف شده', isFunction);
    record('باز شدن مینی‌گیم بدون خطای زمان اجرا', pageErrors.length === 0, pageErrors.join('; '));
    await context.close();
  }

  // 2) Win path, verify real pointer interaction and persisted result.
  {
    const { context, page, pageErrors } = await openGame(browser);
    const points = await pathPoints(page, 8);
    await page.mouse.move(points[0].x, points[0].y);
    await page.mouse.down();
    for (const p of points.slice(1)) await page.mouse.move(p.x, p.y, { steps: 2 });
    await page.mouse.up();
    const status = await page.locator('#balance-status').getAttribute('class');
    const saved = await assertStored(page, 'won');
    record('برد با دنبال‌کردن مسیر واقعی pointer', status?.includes('success') && saved,
      `status=${status}; persistedWin=${saved}`);
    record('برد بدون خطای JavaScript', pageErrors.length === 0, pageErrors.join('; '));
    await page.reload();
    const survivesReload = await assertStored(page, 'won');
    record('ماندگاری نتیجهٔ برد پس از بارگذاری مجدد', survivesReload);
    await context.close();
  }

  // 3) Loss path by moving well outside the track.
  {
    const { context, page, pageErrors } = await openGame(browser);
    const points = await pathPoints(page, 12);
    await page.mouse.move(points[0].x, points[0].y);
    await page.mouse.down();
    const box = await page.locator('#balance-stage').boundingBox();
    await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.04, { steps: 4 });
    await page.mouse.up();
    const status = await page.locator('#balance-status').getAttribute('class');
    const saved = await assertStored(page, 'lost');
    record('باخت با خروج واقعی از مسیر', status?.includes('failed') && saved,
      `status=${status}; persistedLoss=${saved}`);
    record('باخت بدون خطای JavaScript', pageErrors.length === 0, pageErrors.join('; '));

    // 4) Reset must restore the initial state and persist it.
    await page.locator('#balance-reset').click();
    const resetStatus = await page.locator('#balance-status').textContent();
    const resetSaved = await assertStored(page, 'reset');
    const resetPosition = await page.locator('#balance-player').evaluate(el => ({
      x: Number(el.getAttribute('cx')), y: Number(el.getAttribute('cy'))
    }));
    record('شروع مجدد: بازنشانی نشانگر، پیام و ذخیره', resetStatus.includes('برای شروع') &&
      resetSaved && resetPosition.x === 20 && resetPosition.y === 90,
      `position=${resetPosition.x},${resetPosition.y}; persistedReset=${resetSaved}`);
    await context.close();
  }

  // 5) Real touch input through Chromium's touch input pipeline.
  {
    const { context, page, pageErrors } = await openGame(browser, { touch: true });
    const cdp = await context.newCDPSession(page);
    const points = await pathPoints(page, 10);
    const dispatch = (type, p) => cdp.send('Input.dispatchTouchEvent', {
      type,
      touchPoints: type === 'touchEnd' ? [] : [{ x: p.x, y: p.y, id: 1 }]
    });
    await dispatch('touchStart', points[0]);
    let started = await assertStored(page, 'started');
    for (const p of points.slice(1)) await dispatch('touchMove', p);
    await dispatch('touchEnd', points.at(-1));
    const status = await page.locator('#balance-status').getAttribute('class');
    const saved = await assertStored(page, 'won');
    record('ورودی لمسی واقعی (CDP touch) و برد', started && status?.includes('success') && saved,
      `startedPersisted=${started}; status=${status}; persistedWin=${saved}`);
    record('لمس بدون خطای JavaScript', pageErrors.length === 0, pageErrors.join('; '));
    await context.close();
  }
} finally {
  await browser.close();
}

const passed = results.filter(result => result.ok).length;
console.log(`\nRESULT: ${passed}/${results.length} passed`);
if (passed !== results.length) process.exit(1);
