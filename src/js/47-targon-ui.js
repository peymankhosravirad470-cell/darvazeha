/* ═══════════ جهان تارگون — رابط کاربری (مرحلهٔ ۲) ═══════════
   اتصال جهان به ناوبری مرحلهٔ ۱ (منوی قلمروها → تارگون → ۱۱ سرزمین)،
   HUD جهان، برگه‌های «نواحی»، «مأموریت‌های آغازین» و «کیف پول».

   قواعد کیف پول (دستور کارفرما — بدون استثنا):
   - موجودی «رسمی» فقط از Backend و دفترکل معتبر خوانده می‌شود
     (POST /api/v1/auth/bale با initData بله → GET /api/v1/players/me).
   - اگر سرور در دسترس نیست، صادقانه «در دسترس نیست» نمایش داده می‌شود؛
     هیچ عدد آزمایشیِ بازی محلی به‌عنوان موجودی واقعی نشان داده نمی‌شود.
   - هیچ خرید توکن، واریز یا افزایش دستی موجودی در این نسخه وجود ندارد.
   - اقتصاد/دفترکل/دیتابیس backend خوانده می‌شود، نه نوشته. */

/* ---------- توست مخصوص صفحهٔ جهان ---------- */
function tToast(msg){
  const box = $('#t-toasts'); if(!box) return;
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  box.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

/* ---------- ورود به جهان از شبکهٔ ۱۱ سرزمین تارگون ---------- */
const tWorldBtn = document.createElement('button');
tWorldBtn.id = 'btn-targon-world';
tWorldBtn.className = 'btn block targon-world-cta';
tWorldBtn.innerHTML = '<b>🌍 ورود به نقشهٔ زندهٔ تارگون</b>' +
  '<small>جهان آغازین — ۱۱ ناحیهٔ قابل گشت‌وگذار · حرکت با لمس نقشه</small>';
tWorldBtn.addEventListener('click', () => {
  Sfx.click();
  show('screen-targon');
  targonEnter();
});
(function injectWorldCta(){
  const wrap = document.querySelector('#screen-lands .lands-wrap');
  if(wrap) wrap.appendChild(tWorldBtn);
})();

/* نمایش/پنهان‌سازی دکمه فقط برای تارگون — بدون تغییر در منطق مرحلهٔ ۱ */
const tBaseShow = show;
show = function(id){
  tBaseShow(id);
  const b = $('#btn-targon-world');
  if(b) b.style.display = (id === 'screen-lands' && currentDominion === 'targon') ? '' : 'none';
  if(id !== 'screen-targon' && typeof targonLeave === 'function') targonLeave();
};

/* ---------- HUD جهان ---------- */
function tSyncWorldHUD(){
  const a = targonAreaAt(Math.round(TP.x), Math.round(TP.y));
  $('#t-area-name').innerHTML = a.icon + ' ' + a.fa;
}
$('#btn-targon-back').addEventListener('click', () => {
  Sfx.click();
  targonLeave();
  show('screen-lands');
});
$('#t-zoom-in').addEventListener('click', () => tZoomStep(1));
$('#t-zoom-out').addEventListener('click', () => tZoomStep(-1));

/* ---------- لمس نقشه → حرکت ---------- */
(function tTap(){
  const cv = $('#t-iso');
  cv.addEventListener('pointerdown', e => {
    if(!$('#screen-targon').classList.contains('active')) return;
    if(openSheetId || $('#confirm').classList.contains('show')) return;
    const rect = cv.getBoundingClientRect();
    const sxp = e.clientX - rect.left, syp = e.clientY - rect.top;
    const TW2 = tTW * TZ / 2, TH2 = tTW * TZ / 4;
    const ox = tCanvasW / 2 - T_CAM.x, oy = tCanvasH / 2 - T_CAM.y - 20;
    const wx = (sxp - ox) / TW2, wy = (syp - oy) / TH2;
    const tx = Math.round((wx + wy) / 2), ty = Math.round((wy - wx) / 2);
    if(tx < 0 || ty < 0 || tx >= TARGON_WORLD.W || ty >= TARGON_WORLD.H) return;
    Vibe(6);
    targonMoveTo(tx, ty);
  });
})();

/* ---------- برگهٔ نواحی (۱۱ ناحیهٔ تارگون) ---------- */
$('#btn-t-areas').addEventListener('click', () => { Sfx.click(); tRenderAreasSheet(); openSheet('#sheet-wareas'); });
function tRenderAreasSheet(){
  const body = $('#wareas-body'); body.innerHTML = '';
  TARGON_AREA_LIST.forEach(id => {
    const a = targonAreaById(id); if(!a) return;
    const seen = TWS.visited.includes(id);
    const row = document.createElement('div');
    row.className = 'w-area-row' + (seen ? ' seen' : '');
    row.innerHTML =
      '<span class="wa-ico">' + a.icon + '</span>' +
      '<div class="wa-names"><b>' + a.fa + '</b>' +
      '<small>' + (seen ? 'بازدید شد ✓' : 'هنوز دیده نشده') + '</small></div>';
    const go = document.createElement('button');
    go.className = 'wa-go';
    go.textContent = 'رفتن';
    go.addEventListener('click', () => {
      Sfx.click(); closeSheets();
      const tgt = targonAreaTarget(id);
      if(tgt) targonMoveTo(tgt.x, tgt.y);
    });
    row.appendChild(go);
    body.appendChild(row);
  });
}

/* ---------- مأموریت‌های آغازین (فقط پیشرفت کشف — بدون پاداش اقتصادی) ---------- */
$('#btn-t-missions').addEventListener('click', () => { Sfx.click(); tRenderMissionsSheet(); openSheet('#sheet-wmissions'); });
function tMissionDone(id){ return TWS.done.includes(id); }
function tMissionCheck(){
  TARGON_MISSIONS.forEach(m => {
    if(tMissionDone(m.id)) return;
    const ok = (m.type === 'steps') ? (TWS.steps >= m.n) : TWS.visited.includes(m.area);
    if(ok){
      TWS.done.push(m.id);
      tToast('✅ مأموریت آغازین کامل شد: ' + m.title);
      Sfx.level(); Vibe(25);
      if(openSheetId === '#sheet-wmissions') tRenderMissionsSheet();
    }
  });
}
function tRenderMissionsSheet(){
  const body = $('#wmissions-body'); body.innerHTML = '';
  const head = document.createElement('p');
  head.className = 'wm-note';
  head.textContent = 'مأموریت‌های آغازین جهان تارگون — نشانِ کشف؛ پاداش اقتصادی این مأموریت‌ها صراحتاً به نسخهٔ سرور موکول شده است.';
  body.appendChild(head);
  TARGON_MISSIONS.forEach(m => {
    const done = tMissionDone(m.id);
    const prog = (m.type === 'steps')
      ? fa(Math.min(TWS.steps, m.n)) + ' از ' + fa(m.n) + ' قدم'
      : (TWS.visited.includes(m.area) ? 'رسیدی ✓' : 'در انتظار');
    const row = document.createElement('div');
    row.className = 'w-mission' + (done ? ' done' : '');
    row.innerHTML =
      '<span class="wm-ico">' + m.icon + '</span>' +
      '<div class="wm-names"><b>' + m.title + '</b><small>' + m.desc + '</small>' +
      '<span class="wm-prog">' + (done ? 'کامل شد ✅' : prog) + '</span></div>';
    body.appendChild(row);
  });
}

/* ---------- کیف پول — فقط موجودی رسمی از Backend/دفترکل ---------- */
$('#btn-t-wallet').addEventListener('click', () => { Sfx.click(); openSheet('#sheet-wallet'); targonWalletRefresh(); });
$('#t-wallet-chip').addEventListener('click', () => { openSheet('#sheet-wallet'); targonWalletRefresh(); });
$('#btn-wallet-refresh').addEventListener('click', () => { Sfx.click(); targonWalletRefresh(); });

let tWalletBusy = false;
function tWalletRender(state, balance, note){
  const box = $('#wallet-body');
  $('#t-wallet-chip').textContent = state === 'ok' ? ('💰 ' + fa(balance)) : '💰 —';
  if(state === 'checking'){
    box.innerHTML = '<p class="wt-state">⏳ در حال دریافت موجودی رسمی از سرور…</p>';
  } else if(state === 'ok'){
    box.innerHTML =
      '<div class="wt-balance"><span class="wt-num">' + fa(balance) + '</span><span class="wt-unit">سکهٔ رسمی</span></div>' +
      '<p class="wt-ok">✅ خوانده‌شده از Backend و دفترکل معتبر</p>' +
      '<p class="wt-src">منبع: GET /api/v1/players/me · ' + (note || '') + '</p>';
  } else {
    box.innerHTML =
      '<p class="wt-state wt-err">⛔ موجودی واقعی در دسترس نیست</p>' +
      '<p class="wt-src">' + (note || '') + '</p>';
  }
  const foot = $('#wallet-footnote');
  if(foot) foot.textContent = 'هیچ خرید توکن، واریز یا افزایش دستی موجودی در این نسخه وجود ندارد. اعداد آزمایشی بازی محلی عمداً اینجا نمایش داده نمی‌شوند.';
}
async function targonWalletRefresh(){
  if(tWalletBusy) return;
  tWalletBusy = true;
  tWalletRender('checking');
  try{
    const origin = (location.protocol === 'http:' || location.protocol === 'https:') ? location.origin : null;
    const initData = (window.Bale && window.Bale.WebApp && window.Bale.WebApp.initData) || null;
    if(!origin || !initData){
      tWalletRender('off', 0, !origin
        ? 'این اجرا آفلاین/محلی است؛ موجودی رسمی فقط در اجرای داخل بله (Mini App متصل به سرور) خوانده می‌شود.'
        : 'دادهٔ ورود بله (initData) در دسترس نیست؛ موجودی رسمی فقط با ورود معتبر از داخل بله خوانده می‌شود.');
      tWalletBusy = false; return;
    }
    const r1 = await fetch(origin + '/api/v1/auth/bale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ init_data: initData }),
    });
    if(!r1.ok) throw new Error('auth ' + r1.status);
    const tok = (await r1.json()).access_token;
    const r2 = await fetch(origin + '/api/v1/players/me', {
      headers: { 'Authorization': 'Bearer ' + tok },
    });
    if(!r2.ok) throw new Error('me ' + r2.status);
    const me = await r2.json();
    const bal = Number(me && me.player && me.player.token_balance);
    if(!Number.isFinite(bal)) throw new Error('bad balance');
    tWalletRender('ok', bal, new Date().toLocaleTimeString('fa-IR'));
  }catch(err){
    console.warn('wallet:', err);
    tWalletRender('off', 0, 'دریافت موجودی از سرور ناموفق بود؛ هیچ عددی به‌جای موجودی واقعی نمایش داده نمی‌شود.');
  }
  tWalletBusy = false;
}
/* در محیط بله (Mini App) یک‌بار بی‌صدا موجودی را می‌خواند تا چیپ HUD زنده شود */
function targonWalletAutoRefresh(){
  const inBale = !!(window.Bale && window.Bale.WebApp && window.Bale.WebApp.initData);
  const onHttp = location.protocol === 'http:' || location.protocol === 'https:';
  if(inBale && onHttp) targonWalletRefresh();
}
