#!/usr/bin/env node
/* آزمون دامنهٔ سراسری — ریشهٔ خطای «Identifier 'S' has already been declared»

   SDK بله (miniapp.js) در دامنهٔ سراسری نام‌های کوتاه تعریف می‌کند (از جمله var S).
   اگر صفحه‌ها تعریف سراسری هم‌نام داشته باشند، مرورگر کل اسکریپت را رد می‌کند.
   این آزمون با SDK واقعیِ ذخیره‌شده (tests/fixtures/miniapp.js) تضمین می‌کند:
   ۱) اسکریپت بازی در حضور SDK هیچ SyntaxError «already been declared» نمی‌دهد؛
   ۲) در بدترین حالت (همهٔ نام‌های احتمالی SDK از پیش اشغال‌شده) هم امن است؛
   ۳) بازی هیچ نامی از نام‌های SDK را در دامنهٔ سراسری نمی‌پوشاند (نشتی صفر)؛
   ۴) منوی اصلی (index.html) هم در حضور SDK امن است و تابع وضعیت سرور آن
      (setBadge) سراسری می‌ماند و هر سه گزینهٔ اصلی در صفحه هست. */
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

// ۵) منوی اصلی در حضور SDK: امن + تابع show وضعیت سرور سراسری می‌ماند
{
  const ctx = freshCtx();
  run(sdkSrc, ctx, 'miniapp.js');
  const { err } = run(mainJs, ctx, 'index-bundle.js');
  if (isDecl(err)) fail('منوی اصلی پس از SDK: خطای دامنه', err.message);
  else pass('منوی اصلی پس از SDK: بدون خطای دامنه', err ? `runtime: ${err.constructor.name}` : 'اجرای کامل');
  const ty = vm.runInContext('typeof setBadge', ctx);
  if (ty === 'function') pass('منوی اصلی: setBadge سراسری سر جای خود است');
  else fail('منوی اصلی: setBadge سراسری از دست رفت', 'typeof=' + ty);
  const html = readFileSync(MAIN_PATH, 'utf8');
  const three = ['id="menu-empires"', 'id="menu-map"', 'id="menu-profile"'].every(id => html.includes(id));
  if (three && (html.match(/id="menu-/g) || []).length === 3)
    pass('منوی اصلی: دقیقاً سه گزینهٔ اصلی (امپراتوری‌ها/نقشه/پروفایل)');
  else fail('منوی اصلی: ساختار سه‌گزینه‌ای برقرار نیست');
}

// ۶) بازی بدون SDK هم بدون خطای نحو (سلامت پایه)
{
  const { err } = run(gameJs, freshCtx(), 'game-bundle.js');
  if (err && (isDecl(err) || err instanceof SyntaxError)) fail('بازی بدون SDK: خطای نحو', err.message);
  else pass('بازی بدون SDK: بدون خطای نحو');
}

console.log(`== test_js_scope: ${failures === 0 ? 'ALL PASS' : failures + ' FAIL'} ==`);
process.exit(failures === 0 ? 0 : 1);
