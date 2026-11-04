/* ═══════════ جهان تارگون — موتور نقشهٔ مادر ایزومتریک (مرحلهٔ ۲) ═══════════
   Canvas 2D مستقل (canvas#t-iso) — بدون کتابخانه، بدون دارایی بیرونی.
   شامل: ساخت جهان از داده (07-targon-data.js)، مسیریابی BFS، حرکت نرم
   بازیکن بین نقاط قابل دسترس، نشانگر موقعیت، تشخیص ناحیهٔ فعلی، ذخیرهٔ
   موقعیت/کشف/مأموریت‌ها در کلید localStorage مستقل.

   مرزها: هیچ اقتصاد، سکه، توکن یا دفترکلی اینجا نوشته نمی‌شود. وضعیت S
   بازی اصلی خوانده نمی‌شود جز رنگ پرچم نمایشی شخصیت (S.banner). */

/* ---------- وضعیت ران‌تایم جهان ---------- */
let T_MAP = null;                 // {terr,areaOf,blocked,props} — یک‌بار ساخته می‌شود
let TWS = null;                   // وضعیت قابل‌ذخیره جهان (بدون هیچ دادهٔ اقتصادی)
const TP = { x: 0, y: 0, path: [], facing: 1, walkT: 0, moving: false };
const T_CAM = { x: 0, y: 0, init: false };
let TZ = 1;                       // بزرگ‌نمایی (۰٫۸۵ / ۱ / ۱٫۲)
let tLoopId = null, tLastT = 0, tSaveTimer = null;
let tCurAreaId = null, tAreaToastAt = 0;
let tCanvasW = 0, tCanvasH = 0, tDPR = 1, tTW = 56;

const TERR_COLORS = {
  grass:  ['#3f9e4d','#379147'], rock:   ['#8d99ae','#8290a5'],
  stone:  ['#aab2bd','#9fa8b3'], ruin:   ['#c9b79c','#bfae94'],
  sand:   ['#d8b567','#cfae5e'], plaza:  ['#cfd3d8','#bfc4cb'],
  village:['#b98a5a','#b08253'], dirt:   ['#a9744f','#a06d49'],
  forest: ['#2e7d4f','#297448'], dawn:   ['#dfab77','#d6a06c'],
  water:  ['#2fa3d9','#2394cc'], road:   ['#c7a97a','#bfa271'],
  bridge: ['#8a5a33','#7e5230'],
};
const T_SPAWN = () => Object.assign({}, TARGON_WORLD.spawn);

/* ---------- ساخت جهان (یک‌بار) ---------- */
function tIdx(x, y){ return y * TARGON_WORLD.W + x; }
function tHash(x, y, salt){ return parseInt(hstr(x + ',' + y + ',' + salt, 7).slice(0, 6), 16); }

function tBuildWorld(){
  const W = TARGON_WORLD.W, H = TARGON_WORLD.H, N = W * H;
  const terr = new Array(N), areaOf = new Array(N), blocked = new Array(N).fill(false);
  for(let y = 0; y < H; y++) for(let x = 0; x < W; x++){
    const i = tIdx(x, y), a = targonAreaAt(x, y);
    terr[i] = a.terrain; areaOf[i] = a.id;
  }
  /* بستر رود: از چشمهٔ کوهستان (y=4) تا جنوب + کرانهٔ علفی دو طرف */
  for(let y = 4; y < H; y++){ terr[tIdx(31, y)] = 'water'; terr[tIdx(32, y)] = 'water'; }
  /* جاده‌ها (عرض ۱) — کاشی جاده روی آب خودکار پل می‌شود */
  TARGON_ROADS.forEach(r => {
    const [x0, y0, x1, y1] = r;
    for(let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++)
      for(let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
        terr[tIdx(x, y)] = (terr[tIdx(x, y)] === 'water') ? 'bridge' : 'road';
  });
  /* آب مسیر بسته است (پل‌ها به‌صورت 'bridge' باقی می‌مانند و قابل عبورند) */
  for(let i = 0; i < N; i++) if(terr[i] === 'water') blocked[i] = true;
  const props = [];
  const solid = (x, y) => { blocked[tIdx(x, y)] = true; };
  const add = (t, x, y, solidFlag) => { props.push({ t, x, y, v: tHash(x, y, t) }); if(solidFlag) solid(x, y); };

  /* دژ نگهبان — دیوار سنگی با دروازهٔ باز در جنوب (x=23) */
  for(let x = 20; x <= 27; x++){
    add('wall', x, 2, true);
    if(x !== 23 && x !== 22) add('wall', x, 7, true);
  }
  for(let y = 3; y <= 6; y++){ add('wall', 20, y, true); add('wall', 27, y, true); }
  add('tower', 20, 2, true); add('tower', 27, 2, true);
  add('tower', 20, 7, true); add('tower', 27, 7, true);

  /* وسایل ثابت داده‌محور */
  TARGON_FIXTURES.columns.forEach(([x, y]) => add('column', x, y, true));
  TARGON_FIXTURES.stalls.forEach(([x, y]) => add('stall', x, y, true));
  TARGON_FIXTURES.crates.forEach(([x, y]) => add('crate', x, y, true));
  TARGON_FIXTURES.houses.forEach(([x, y]) => {           // خانه ۲×۲
    props.push({ t:'house', x, y, v: tHash(x, y, 'house') });
    solid(x, y); solid(x + 1, y); solid(x, y + 1); solid(x + 1, y + 1);
  });
  add('well', TARGON_FIXTURES.well[0], TARGON_FIXTURES.well[1], true);
  TARGON_FIXTURES.farms.forEach(([x, y]) => add('farm', x, y, false));
  TARGON_FIXTURES.monument.forEach(([x, y]) => {
    solid(x, y);
    if(x === 22 && y === 23) props.push({ t:'monument', x, y, v:0 });
  });
  TARGON_FIXTURES.poles.forEach(([x, y]) => add('pole', x, y, true));
  TARGON_FIXTURES.stones.forEach(([x, y]) => add('stoneDeco', x, y, false));
  TARGON_FIXTURES.lamps.forEach(([x, y]) => add('lamp', x, y, true));
  TARGON_FIXTURES.torches.forEach(([x, y]) => add('torch', x, y, true));
  TARGON_FIXTURES.pillars.forEach(([x, y]) => add('pillar', x, y, true));

  /* پوشش طبیعی قطعی (هش ثابت — چیدمان بین اجراها ثابت است) */
  for(let y = 0; y < H; y++) for(let x = 0; x < W; x++){
    const i = tIdx(x, y), tr = terr[i], h = tHash(x, y, 'nat') % 100;
    if(blocked[i] || tr === 'road' || tr === 'bridge') continue;
    if(tr === 'forest' && h < 50){ add('treeBig', x, y, true); }
    else if(tr === 'grass' && h < 6){ add('tree', x, y, true); }
    else if(tr === 'grass' && h >= 6 && h < 15){ add('flower', x, y, false); }
    else if(tr === 'rock' && h < 26){ add(h < 8 ? 'snowrock' : 'rock', x, y, true); }
    else if(tr === 'dawn' && h >= 90){ add('shell', x, y, false); }
  }
  T_MAP = { W, H, terr, areaOf, blocked, props };
}

/* ---------- وضعیت ذخیره‌شدهٔ جهان (موقعیت/کشف/مأموریت — بدون اقتصاد) ---------- */
function tDefaultWS(){
  const s = T_SPAWN();
  return { v: 1, x: s.x, y: s.y, visited: [], steps: 0, done: [], zoom: 1 };
}
function tLoadWS(){
  TWS = tDefaultWS(); TZ = 1;
  try{
    const raw = localStorage.getItem(TARGON_WORLD.saveKey);
    if(raw){
      const p = JSON.parse(raw);
      if(p && p.v === 1){
        TWS = Object.assign(tDefaultWS(), p);
        TZ = [0.85, 1, 1.2].includes(TWS.zoom) ? TWS.zoom : 1;
      }
    }
  }catch(e){ TWS = tDefaultWS(); }
  if(tIsBlocked(TWS.x, TWS.y)){ const s = T_SPAWN(); TWS.x = s.x; TWS.y = s.y; }
}
function tSaveWS(){
  clearTimeout(tSaveTimer);
  tSaveTimer = setTimeout(() => {
    TWS.zoom = TZ;
    try{ localStorage.setItem(TARGON_WORLD.saveKey, JSON.stringify(TWS)); }catch(e){}
  }, 300);
}
function tSaveNow(){ clearTimeout(tSaveTimer); TWS.zoom = TZ;
  try{ localStorage.setItem(TARGON_WORLD.saveKey, JSON.stringify(TWS)); }catch(e){} }
addEventListener('pagehide', () => { if(T_MAP) tSaveNow(); });

/* ---------- کمکی‌های شبکه ---------- */
function tIsBlocked(x, y){
  x = Math.round(x); y = Math.round(y);
  if(x < 0 || y < 0 || x >= TARGON_WORLD.W || y >= TARGON_WORLD.H) return true;
  if(!T_MAP) return true;
  return !!T_MAP.blocked[tIdx(x, y)];
}
function tIsWater(x, y){
  return T_MAP && T_MAP.terr[tIdx(Math.round(x), Math.round(y))] === 'water';
}

/* ---------- مسیریابی BFS (بدون شانس، قطعی) ---------- */
function tFindPath(sx, sy, tx, ty){
  sx = Math.round(sx); sy = Math.round(sy); tx = Math.round(tx); ty = Math.round(ty);
  if(tIsBlocked(tx, ty)) return null;
  if(sx === tx && sy === ty) return [];
  const W = TARGON_WORLD.W, N = W * TARGON_WORLD.H;
  const prev = new Int32Array(N).fill(-2);
  const q = [tIdx(sx, sy)]; prev[tIdx(sx, sy)] = -1;
  let head = 0, found = false;
  while(head < q.length && q.length < 6000){
    const cur = q[head++];
    const cx = cur % W, cy = (cur - cx) / W;
    if(cx === tx && cy === ty){ found = true; break; }
    const nb = [[cx+1,cy],[cx-1,cy],[cx,cy+1],[cx,cy-1]];
    for(const [nx, ny] of nb){
      if(nx < 0 || ny < 0 || nx >= W || ny >= TARGON_WORLD.H) continue;
      const ni = tIdx(nx, ny);
      if(prev[ni] !== -2 || T_MAP.blocked[ni]) continue;
      prev[ni] = cur; q.push(ni);
    }
  }
  if(!found) return null;
  const path = [];
  let cur = tIdx(tx, ty);
  while(cur !== -1 && prev[cur] !== -1){
    const cx = cur % W, cy = (cur - cx) / W;
    path.push({ x: cx, y: cy });
    cur = prev[cur];
  }
  return path.reverse();
}

/* ---------- ورود/خروج از جهان ---------- */
function targonEnter(){
  if(!T_MAP) tBuildWorld();
  tLoadWS();
  TP.x = TWS.x; TP.y = TWS.y; TP.path = []; TP.walkT = 0; TP.moving = false;
  T_CAM.init = false;
  tResizeCanvas();
  tCurAreaId = null;
  targonEnterArea(true);
  $('#t-zoom-label').textContent = fa(Math.round(TZ * 100)) + '٪';
  tSyncWorldHUD();
  $('#t-wallet-chip').textContent = '💰 —';
  if(typeof targonWalletAutoRefresh === 'function') targonWalletAutoRefresh();
  if(!tLoopId){ tLastT = 0; tLoopId = requestAnimationFrame(tLoop); }
}
function targonLeave(){
  if(tLoopId){ cancelAnimationFrame(tLoopId); tLoopId = null; }
  if(T_MAP) tSaveNow();
}

/* ---------- بوم و بزرگ‌نمایی ---------- */
function tResizeCanvas(){
  const cv = $('#t-iso'); if(!cv) return;
  tDPR = Math.min(devicePixelRatio || 1, 2);
  tCanvasW = innerWidth; tCanvasH = innerHeight;
  cv.width = tCanvasW * tDPR; cv.height = tCanvasH * tDPR;
  $('#t-iso').getContext('2d').setTransform(tDPR, 0, 0, tDPR, 0, 0);
  tTW = Math.max(38, Math.min(58, Math.floor(tCanvasW / 7)));
}
addEventListener('resize', () => {
  if($('#screen-targon') && $('#screen-targon').classList.contains('active')) tResizeCanvas();
});
function tZoomStep(dir){
  const steps = [0.85, 1, 1.2];
  let i = steps.indexOf(TZ); if(i < 0) i = 1;
  TZ = steps[Math.max(0, Math.min(steps.length - 1, i + dir))];
  $('#t-zoom-label').textContent = fa(Math.round(TZ * 100)) + '٪';
  tResizeCanvas(); tSaveWS(); Sfx.click();
}

/* ---------- مختصات ایزومتریک ---------- */
function tIso(x, y){
  const TW2 = tTW * TZ / 2, TH2 = tTW * TZ / 4;
  return [ (x - y) * TW2, (x + y) * TH2 ];
}
function tCamera(dt){
  const [px, py] = tIso(TP.x, TP.y);
  if(!T_CAM.init){ T_CAM.x = px; T_CAM.y = py; T_CAM.init = true; }
  const k = Math.min(1, dt * 5);          // دنبال‌کردن نرم دوربین
  T_CAM.x += (px - T_CAM.x) * k;
  T_CAM.y += (py - T_CAM.y) * k;
  return [T_CAM.x, T_CAM.y];
}

/* ---------- حرکت بازیکن ---------- */
function targonMoveTo(tx, ty){
  const path = tFindPath(TP.x, TP.y, tx, ty);
  if(path === null){ tToast('اینجا راه بسته است — یک نقطهٔ باز را انتخاب کن'); return false; }
  TP.path = path;
  if(path.length){ Sfx.click(); Vibe(8); }
  return true;
}
function tUpdateMove(dt){
  if(!TP.path.length){ TP.moving = false; TP.walkT = 0; return; }
  TP.moving = true;
  const speed = 3.1;                       // کاشی بر ثانیه — مستقل از بزرگ‌نمایی
  let remain = speed * dt;
  while(remain > 0 && TP.path.length){
    const t = TP.path[0];
    const dx = t.x - TP.x, dy = t.y - TP.y;
    const dist = Math.hypot(dx, dy);
    if(dx > 0.01) TP.facing = 1; else if(dx < -0.01) TP.facing = -1;
    if(dist <= remain){
      TP.x = t.x; TP.y = t.y; remain -= dist;
      TP.path.shift();
      tOnTile();
    } else {
      TP.x += dx / dist * remain; TP.y += dy / dist * remain;
      remain = 0;
    }
  }
  TP.walkT += dt * 10;
}
function tOnTile(){
  TWS.x = TP.x; TWS.y = TP.y; TWS.steps += 1;
  targonEnterArea(false);
  if(typeof tMissionCheck === 'function') tMissionCheck();
  tSaveWS();
}
function targonEnterArea(silent){
  const a = targonAreaAt(Math.round(TP.x), Math.round(TP.y));
  if(a.id !== tCurAreaId){
    const first = !TWS.visited.includes(a.id);
    if(first) TWS.visited.push(a.id);
    tCurAreaId = a.id;
    $('#t-area-name').innerHTML = a.icon + ' ' + a.fa;
    if(!silent && Date.now() - tAreaToastAt > 1200){
      tToast('📍 ' + (first ? 'کشف ناحیهٔ جدید: ' : 'ورود به ') + a.fa);
      tAreaToastAt = Date.now();
      Sfx.discover();
    }
    tSaveWS();
  }
}

/* ---------- حلقهٔ رندر جهان ---------- */
function tLoop(t){
  tLoopId = null;
  if(!$('#screen-targon').classList.contains('active')) return;
  tLoopId = requestAnimationFrame(tLoop);
  const dt = Math.min(0.05, (t - tLastT) / 1000 || 0); tLastT = t;
  const busy = !!openSheetId || $('#confirm').classList.contains('show');
  try{
    if(!busy) tUpdateMove(dt);
    tDraw(t, dt);
  }catch(err){
    console.error('targonLoop:', err);
    if(!tLoop._err){ tLoop._err = true;
      tToast('خطای غیرمنتظره در رندر جهان — جزئیات در کنسول');
      setTimeout(()=>{ tLoop._err = false; }, 5000); }
  }
}

/* ---------- ترسیم ---------- */
function tDraw(t, dt){
  const ctx = $('#t-iso').getContext('2d');
  const [cpx, cpy] = tCamera(dt || 0.016);
  const ox = tCanvasW / 2 - cpx, oy = tCanvasH / 2 - cpy - 20;
  ctx.fillStyle = '#0b2a17';               // پس‌زمینهٔ بیرون نقشه
  ctx.fillRect(0, 0, tCanvasW, tCanvasH);
  const W = TARGON_WORLD.W, H = TARGON_WORLD.H;
  const TW2 = tTW * TZ / 2, TH2 = tTW * TZ / 4;
  const waterT = t / 420;

  /* کاشی‌ها — ردیف‌به‌ردیف (x+y صعودی) */
  for(let y = 0; y < H; y++){
    for(let x = 0; x < W; x++){
      const i = tIdx(x, y);
      const sx = ox + (x - y) * TW2, sy = oy + (x + y) * TH2;
      if(sx < -tTW * 2 || sx > tCanvasW + tTW * 2 || sy < -tTW * 2 || sy > tCanvasH + tTW * 2) continue;
      const tr = T_MAP.terr[i];
      const cols = TERR_COLORS[tr] || TERR_COLORS.grass;
      const alt = (x + y) % 2 === 0 ? 0 : 1;
      ctx.fillStyle = cols[alt];
      ctx.beginPath();
      ctx.moveTo(sx, sy - TH2); ctx.lineTo(sx + TW2, sy);
      ctx.lineTo(sx, sy + TH2); ctx.lineTo(sx - TW2, sy);
      ctx.closePath(); ctx.fill();
      if(tr === 'water'){
        ctx.strokeStyle = 'rgba(255,255,255,' + (0.14 + 0.12 * Math.sin(waterT + (x + y))) + ')';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sx - TW2 * 0.55, sy + Math.sin(waterT * 1.3 + x) * 2);
        ctx.lineTo(sx + TW2 * 0.1, sy + Math.sin(waterT * 1.3 + y) * 2);
        ctx.stroke();
      } else if(tr === 'bridge'){
        ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(sx - TW2 * .6, sy); ctx.lineTo(sx + TW2 * .6, sy); ctx.stroke();
      } else if(tr === 'plaza' && (x + y) % 4 === 0){
        ctx.strokeStyle = 'rgba(255,216,111,.35)'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sx, sy - TH2); ctx.lineTo(sx + TW2, sy); ctx.lineTo(sx, sy + TH2); ctx.lineTo(sx - TW2, sy);
        ctx.closePath(); ctx.stroke();
      } else if(tr === 'ruin' && (x * 7 + y * 3) % 9 === 0){
        ctx.strokeStyle = 'rgba(90,70,50,.4)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(sx - TW2*.4, sy + TH2*.2); ctx.lineTo(sx + TW2*.3, sy - TH2*.15); ctx.stroke();
      }
    }
  }

  /* برچسب نام ناحیه‌ها روی زمین — نمایش ۱۱ ناحیه روی نقشهٔ مادر */
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const seen = new Set();
  for(const a of TARGON_AREAS){
    if(!a.label || seen.has(a.id)) continue;
    seen.add(a.id);
    const [lx, ly] = tIso(a.label[0] + 0.5, a.label[1] + 0.5);
    const sx = ox + lx, sy = oy + ly;
    if(sx < -80 || sx > tCanvasW + 80 || sy < -40 || sy > tCanvasH + 40) continue;
    ctx.font = '700 ' + Math.round(13 * TZ + 4) + 'px Vazirmatn, sans-serif';
    ctx.fillStyle = 'rgba(10,14,30,.45)';
    const w = ctx.measureText(a.fa).width + 18;
    ctx.beginPath();
    if(ctx.roundRect) ctx.roundRect(sx - w/2, sy - 12, w, 24, 12); else ctx.rect(sx - w/2, sy - 12, w, 24);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,230,160,.95)';
    ctx.fillText(a.fa, sx, sy + 1);
  }

  /* عناصر + بازیکن با ترتیب عمق (x+y) */
  const items = [];
  for(const p of T_MAP.props){
    const d = p.x + p.y;
    const sx = ox + (p.x - p.y) * TW2, sy = oy + d * TH2;
    if(sx < -tTW * 3 || sx > tCanvasW + tTW * 3 || sy < -tTW * 4 || sy > tCanvasH + tTW * 3) continue;
    items.push({ d, kind:'prop', p, sx, sy });
  }
  items.push({ d: TP.x + TP.y, kind:'player', sx: ox + (TP.x - TP.y) * TW2, sy: oy + (TP.x + TP.y) * TH2 });
  items.sort((a, b) => a.d - b.d);
  for(const it of items){
    if(it.kind === 'prop') tDrawProp(ctx, it.p, it.sx, it.sy, t);
    else tDrawPlayer(ctx, it.sx, it.sy, t);
  }

  /* نشانگر مقصد + رد مسیر */
  if(TP.path.length){
    const last = TP.path[TP.path.length - 1];
    const [mx, my] = tIso(last.x + 0.5, last.y + 0.5);
    const bounce = Math.abs(Math.sin(t / 220)) * 5;
    ctx.fillStyle = 'rgba(255,216,111,.95)';
    ctx.beginPath();
    ctx.moveTo(ox + mx, oy + my - 14 - bounce);
    ctx.lineTo(ox + mx - 6, oy + my - 26 - bounce);
    ctx.lineTo(ox + mx + 6, oy + my - 26 - bounce);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,216,111,.4)';
    ctx.beginPath(); ctx.ellipse(ox + mx, oy + my, 7, 3.5, 0, 0, 7); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.5)';
    for(let k = 0; k < TP.path.length - 1; k += 2){
      const n = TP.path[k];
      const [dx2, dy2] = tIso(n.x + 0.5, n.y + 0.5);
      ctx.beginPath(); ctx.ellipse(ox + dx2, oy + dy2, 2.4, 1.2, 0, 0, 7); ctx.fill();
    }
  }
}

function tDrawProp(ctx, p, sx, sy, t){
  const s = tTW * TZ / 56;                 // مقیاس عناصر
  switch(p.t){
    case 'treeBig': {
      ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.beginPath(); ctx.ellipse(sx, sy + 3*s, 11*s, 4.5*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#6b4a2b'; ctx.fillRect(sx - 2*s, sy - 12*s, 4*s, 13*s);
      ctx.fillStyle = '#1f7a3d';
      ctx.beginPath(); ctx.ellipse(sx, sy - 20*s, 14*s, 11*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#35a356';
      ctx.beginPath(); ctx.ellipse(sx - 3*s, sy - 24*s, 8*s, 6*s, 0, 0, 7); ctx.fill();
      break; }
    case 'tree': {
      ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.beginPath(); ctx.ellipse(sx, sy + 2*s, 8*s, 3.2*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#6b4a2b'; ctx.fillRect(sx - 1.6*s, sy - 8*s, 3.2*s, 9*s);
      ctx.fillStyle = '#2f8f46';
      ctx.beginPath(); ctx.ellipse(sx, sy - 13*s, 9*s, 7*s, 0, 0, 7); ctx.fill();
      break; }
    case 'rock': case 'snowrock': {
      ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.beginPath(); ctx.ellipse(sx, sy + 2*s, 10*s, 4*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = p.t === 'rock' ? '#7c8794' : '#b9c3cf';
      ctx.beginPath();
      ctx.moveTo(sx - 9*s, sy + 2*s); ctx.lineTo(sx - 4*s, sy - 10*s);
      ctx.lineTo(sx + 4*s, sy - 8*s); ctx.lineTo(sx + 9*s, sy + 2*s);
      ctx.closePath(); ctx.fill();
      if(p.t === 'snowrock'){
        ctx.fillStyle = '#eef4fb';
        ctx.beginPath(); ctx.moveTo(sx - 4*s, sy - 10*s); ctx.lineTo(sx + 1*s, sy - 6*s); ctx.lineTo(sx + 4*s, sy - 8*s); ctx.closePath(); ctx.fill();
      }
      break; }
    case 'column': {
      ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.beginPath(); ctx.ellipse(sx, sy + 2*s, 8*s, 3.5*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#cfc4ad'; ctx.fillRect(sx - 4*s, sy - 22*s - (p.v % 7) * s, 8*s, 23*s + (p.v % 7) * s);
      ctx.fillStyle = '#e2d8c2'; ctx.beginPath(); ctx.ellipse(sx, sy - 22*s - (p.v % 7) * s, 5*s, 2.4*s, 0, 0, 7); ctx.fill();
      break; }
    case 'stall': {
      ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.beginPath(); ctx.ellipse(sx, sy + 3*s, 14*s, 5*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#8a5a33'; ctx.fillRect(sx - 12*s, sy - 10*s, 24*s, 13*s);
      ctx.fillStyle = '#a06c3d'; ctx.fillRect(sx - 12*s, sy - 10*s, 24*s, 3*s);
      const stripes = p.v % 2 ? ['#c0392b','#f5e9d0'] : ['#d4a017','#3b2a20'];
      for(let k = 0; k < 4; k++){
        ctx.fillStyle = stripes[k % 2];
        ctx.beginPath();
        ctx.moveTo(sx - 13*s + k*7*s, sy - 12*s); ctx.lineTo(sx - 6*s + k*7*s, sy - 12*s);
        ctx.lineTo(sx - 4*s + k*7*s, sy - 22*s); ctx.lineTo(sx - 11*s + k*7*s, sy - 22*s);
        ctx.closePath(); ctx.fill();
      }
      break; }
    case 'crate': {
      ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.beginPath(); ctx.ellipse(sx, sy + 2*s, 7*s, 3*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#9c6b3c'; ctx.fillRect(sx - 6*s, sy - 12*s, 12*s, 13*s);
      ctx.strokeStyle = '#6f4a27'; ctx.lineWidth = 1.5*s;
      ctx.strokeRect(sx - 6*s, sy - 12*s, 12*s, 13*s);
      break; }
    case 'house': {
      const w = 30*s, h = 26*s, roof = 16*s;
      ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(sx, sy + 8*s, w*0.62, 8*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#d9a05b';                                  // دیوار
      ctx.beginPath();
      ctx.moveTo(sx - w/2, sy); ctx.lineTo(sx, sy + h*0.28);
      ctx.lineTo(sx + w/2, sy); ctx.lineTo(sx, sy - h*0.28);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#c08a49';
      ctx.beginPath();
      ctx.moveTo(sx - w/2, sy); ctx.lineTo(sx, sy + h*0.28); ctx.lineTo(sx, sy + h*0.28 + roof*0.9);
      ctx.lineTo(sx - w/2, sy + roof*0.9);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#b3542f';                                  // سقف آذرین
      ctx.beginPath();
      ctx.moveTo(sx - w/2 - 4*s, sy); ctx.lineTo(sx, sy - roof*0.62);
      ctx.lineTo(sx + w/2 + 4*s, sy); ctx.lineTo(sx, sy + roof*0.5);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#5b3319';                                  // در
      ctx.fillRect(sx - 4*s, sy + 4*s, 8*s, 11*s);
      ctx.fillStyle = '#ffd98a';                                  // پنجره
      ctx.fillRect(sx - 13*s, sy + 1*s, 5*s, 5*s);
      break; }
    case 'well': {
      ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.beginPath(); ctx.ellipse(sx, sy + 3*s, 10*s, 4*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#9aa3ad'; ctx.beginPath(); ctx.ellipse(sx, sy, 9*s, 5*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#7d8792'; ctx.beginPath(); ctx.ellipse(sx, sy - 2*s, 9*s, 5*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#6b4a2b'; ctx.fillRect(sx - 8*s, sy - 16*s, 2.5*s, 14*s); ctx.fillRect(sx + 5.5*s, sy - 16*s, 2.5*s, 14*s);
      ctx.fillStyle = '#b3542f'; ctx.beginPath();
      ctx.moveTo(sx - 11*s, sy - 15*s); ctx.lineTo(sx, sy - 22*s); ctx.lineTo(sx + 11*s, sy - 15*s);
      ctx.closePath(); ctx.fill();
      break; }
    case 'farm': {
      ctx.fillStyle = '#7a5230'; ctx.beginPath();
      ctx.moveTo(sx, sy - TH2q(s)); ctx.lineTo(sx + TW2q(s), sy); ctx.lineTo(sx, sy + TH2q(s)); ctx.lineTo(sx - TW2q(s), sy);
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle = '#8fbc4f'; ctx.lineWidth = 2*s;
      for(let k = -1; k <= 1; k++){
        ctx.beginPath(); ctx.moveTo(sx - 8*s, sy + k*4*s); ctx.lineTo(sx + 8*s, sy + k*4*s - 2*s); ctx.stroke();
      }
      break; }
    case 'monument': {
      ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(sx, sy + 6*s, 16*s, 6*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#aab2bd'; ctx.fillRect(sx - 10*s, sy - 4*s, 20*s, 8*s);
      ctx.fillStyle = '#cfd6dd'; ctx.fillRect(sx - 4*s, sy - 30*s, 8*s, 27*s);
      ctx.fillStyle = '#ffd86f';
      ctx.beginPath(); ctx.moveTo(sx - 4*s, sy - 30*s); ctx.lineTo(sx, sy - 40*s); ctx.lineTo(sx + 4*s, sy - 30*s); ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(255,216,111,.35)';
      ctx.beginPath(); ctx.ellipse(sx, sy - 38*s, 10*s, 5*s, 0, 0, 7); ctx.fill();
      break; }
    case 'pole': {
      ctx.fillStyle = '#6b4a2b'; ctx.fillRect(sx - 1.6*s, sy - 30*s, 3.2*s, 31*s);
      ctx.fillStyle = '#ffd86f';
      ctx.beginPath(); ctx.moveTo(sx + 1.6*s, sy - 29*s); ctx.lineTo(sx + 15*s, sy - 24*s); ctx.lineTo(sx + 1.6*s, sy - 19*s);
      ctx.closePath(); ctx.fill();
      break; }
    case 'wall': {
      ctx.fillStyle = '#8f99a5'; ctx.fillRect(sx - TW2q(s)*0.9, sy - 14*s, TW2q(s)*1.8, 15*s);
      ctx.fillStyle = '#a7b1bd'; ctx.fillRect(sx - TW2q(s)*0.9, sy - 14*s, TW2q(s)*1.8, 4*s);
      ctx.fillStyle = 'rgba(0,0,0,.18)';
      ctx.fillRect(sx - TW2q(s)*0.9, sy - 1*s, TW2q(s)*1.8, 2*s);
      break; }
    case 'tower': {
      ctx.fillStyle = '#828e9b'; ctx.fillRect(sx - 9*s, sy - 30*s, 18*s, 31*s);
      ctx.fillStyle = '#98a4b1';
      for(let k = 0; k < 3; k++) ctx.fillRect(sx - 9*s + k*7*s, sy - 35*s, 5*s, 6*s);
      ctx.fillStyle = '#d4452c';
      ctx.beginPath(); ctx.moveTo(sx + 9*s, sy - 33*s); ctx.lineTo(sx + 21*s, sy - 29*s); ctx.lineTo(sx + 9*s, sy - 25*s);
      ctx.closePath(); ctx.fill();
      break; }
    case 'pillar': {
      ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.beginPath(); ctx.ellipse(sx, sy + 3*s, 9*s, 4*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#a02c1e'; ctx.fillRect(sx - 6*s, sy - 40*s, 12*s, 41*s);
      ctx.fillStyle = '#c23a28'; ctx.fillRect(sx - 8*s, sy - 44*s, 16*s, 5*s);
      ctx.fillStyle = '#ffd86f'; ctx.fillRect(sx - 2*s, sy - 34*s, 4*s, 10*s);
      break; }
    case 'torch': {
      ctx.fillStyle = '#6b4a2b'; ctx.fillRect(sx - 1.4*s, sy - 18*s, 2.8*s, 19*s);
      const fl = 1 + Math.sin(t / 90 + p.x) * 0.25;
      ctx.fillStyle = '#ff9d3b';
      ctx.beginPath(); ctx.ellipse(sx, sy - 21*s, 3.2*s*fl, 5*s*fl, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#ffd86f';
      ctx.beginPath(); ctx.ellipse(sx, sy - 20*s, 1.6*s*fl, 2.8*s*fl, 0, 0, 7); ctx.fill();
      break; }
    case 'lamp': {
      ctx.fillStyle = '#5b4a33'; ctx.fillRect(sx - 1.6*s, sy - 24*s, 3.2*s, 25*s);
      const gl = 0.5 + 0.2 * Math.sin(t / 300 + p.y);
      ctx.fillStyle = 'rgba(255,216,111,' + gl + ')';
      ctx.beginPath(); ctx.ellipse(sx, sy - 27*s, 5*s, 6*s, 0, 0, 7); ctx.fill();
      break; }
    case 'flower': {
      const cols = ['#ffd86f','#ff8fb1','#8ecfff','#f5e9d0'];
      ctx.fillStyle = cols[p.v % 4];
      for(let k = 0; k < 3; k++){
        ctx.beginPath(); ctx.ellipse(sx - 5*s + k*5*s, sy + ((p.v>>k)%3 - 1)*2*s, 1.7*s, 1.7*s, 0, 0, 7); ctx.fill();
      }
      break; }
    case 'shell': {
      ctx.fillStyle = '#f2e3d5';
      ctx.beginPath(); ctx.ellipse(sx, sy, 3.5*s, 2.2*s, (p.v % 6) / 3, 0, 7); ctx.fill();
      break; }
    case 'stoneDeco': {
      ctx.fillStyle = '#b9a98f';
      ctx.beginPath(); ctx.ellipse(sx, sy, 7*s, 4*s, 0, 0, 7); ctx.fill();
      ctx.fillStyle = '#cbc0a9';
      ctx.beginPath(); ctx.ellipse(sx - 1.5*s, sy - 1*s, 4.5*s, 2.4*s, 0, 0, 7); ctx.fill();
      break; }
  }
}
function TW2q(s){ return 28 * s; }
function TH2q(s){ return 14 * s; }

/* ---------- شخصیت بازیکن + نشانگر موقعیت ---------- */
function tDrawPlayer(ctx, sx, sy, t){
  const s = tTW * TZ / 56;
  const banner = (typeof BANNERS !== 'undefined' && typeof S !== 'undefined') ? (BANNERS[S.banner] || BANNERS[0]) : { c:'#0f8ea8', h:'#38c6ff' };
  const bob = TP.moving ? Math.sin(TP.walkT) * 1.8 * s : 0;
  /* نشانگر موقعیت — حلقهٔ تپندهٔ طلایی زیر پا */
  const pulse = 0.5 + 0.5 * Math.sin(t / 260);
  ctx.strokeStyle = 'rgba(255,216,111,' + (0.45 + 0.4 * pulse) + ')';
  ctx.lineWidth = 2.2;
  ctx.beginPath(); ctx.ellipse(sx, sy + 3*s, (10 + 3.5 * pulse) * s, (4.5 + 1.6 * pulse) * s, 0, 0, 7); ctx.stroke();
  ctx.fillStyle = 'rgba(255,216,111,.25)';
  ctx.beginPath(); ctx.ellipse(sx, sy + 3*s, 8*s, 3.6*s, 0, 0, 7); ctx.fill();
  /* سایه */
  ctx.fillStyle = 'rgba(0,0,0,.3)';
  ctx.beginPath(); ctx.ellipse(sx, sy + 3*s, 6.5*s, 2.8*s, 0, 0, 7); ctx.fill();
  /* پاها */
  const legSwing = TP.moving ? Math.sin(TP.walkT) * 3 * s : 0;
  ctx.fillStyle = '#4a3222';
  ctx.fillRect(sx - 3.4*s, sy - 8*s + bob, 2.8*s, 8*s + legSwing);
  ctx.fillRect(sx + 0.6*s, sy - 8*s + bob, 2.8*s, 8*s - legSwing);
  /* تنوان با رنگ پرچم بازیکن */
  ctx.fillStyle = banner.c;
  ctx.beginPath();
  ctx.moveTo(sx - 5*s, sy - 8*s + bob); ctx.lineTo(sx + 5*s, sy - 8*s + bob);
  ctx.lineTo(sx + 4*s, sy - 18*s + bob); ctx.lineTo(sx - 4*s, sy - 18*s + bob);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = banner.h;
  ctx.fillRect(sx - 5*s, sy - 10*s + bob, 10*s, 2.4*s);
  /* پرچم پشتی — جهت نگاه */
  const fdx = TP.facing >= 0 ? -1 : 1;
  ctx.fillStyle = '#6b4a2b';
  ctx.fillRect(sx + fdx * 4*s - 1*s, sy - 28*s + bob, 2*s, 11*s);
  ctx.fillStyle = banner.h;
  ctx.beginPath();
  ctx.moveTo(sx + fdx * 3*s, sy - 27*s + bob);
  ctx.lineTo(sx + fdx * 12*s, sy - 24.5*s + bob);
  ctx.lineTo(sx + fdx * 3*s, sy - 22*s + bob);
  ctx.closePath(); ctx.fill();
  /* سر */
  ctx.fillStyle = '#e8b98a';
  ctx.beginPath(); ctx.ellipse(sx, sy - 22.5*s + bob, 4.6*s, 4.8*s, 0, 0, 7); ctx.fill();
  ctx.fillStyle = '#3c2a1a';
  ctx.beginPath(); ctx.ellipse(sx, sy - 25*s + bob, 4.6*s, 2.6*s, 0, Math.PI, 0); ctx.fill();
}
