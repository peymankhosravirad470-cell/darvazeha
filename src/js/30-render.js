/* ═══════════ موتور ایزومتریک — داده‌محور برای هر سرزمین ═══════════
   Canvas 2D بدون کتابخانه. دارایی‌ها موقت/هندسی‌اند (مرحله ۸: بهبود تدریجی). */
const cv = $('#iso'), ctx = cv.getContext('2d');
let vw=0, vh=0, DPR=1, TW=64, TH=32;
function resize(){
  DPR = Math.min(devicePixelRatio||1, 2);
  vw = innerWidth; vh = innerHeight;
  cv.width = vw*DPR; cv.height = vh*DPR;
  ctx.setTransform(DPR,0,0,DPR,0,0);
  TW = Math.max(46, Math.min(72, Math.floor(vw/7)));
  TH = TW/2;
}
addEventListener('resize', resize);

const BANNERS = [
  {c:'#0f8ea8', h:'#38c6ff', name:'فیروزه‌ای'},
  {c:'#7c5cff', h:'#b16cea', name:'بنفش'},
  {c:'#c0392b', h:'#e67e22', name:'شفق'},
  {c:'#1e8449', h:'#7dfcb4', name:'زمرد'},
];

/* جهان در حال اجرا — از REALM_MAPS ساخته می‌شود */
let RW = null;   // نقشهٔ ران‌تایم (کپی تغییرپذیر گره‌ها)
const P  = {x:8, y:13, facing:1, walkT:0};
const cam = {sx:0, sy:0, init:false};

function loadRealmRuntime(id){
  const m = REALM_MAPS[id];
  RW = JSON.parse(JSON.stringify(m));
  RW.npcs.forEach(n=>{ n.nx = n.x; n.ny = n.y; });
  P.x = m.spawn.x; P.y = m.spawn.y; P.walkT = 0;
  cam.init = false;
}

/* ---------- چرخهٔ شب و روز [آزمایشی: شبانه‌روز ۴ دقیقه‌ای] ---------- */
const DAY_MS = 240000;
let timeOffsetMs = 0;
function dayPhase(){ return (((Date.now()+timeOffsetMs) % DAY_MS) + DAY_MS) % DAY_MS / DAY_MS; }
function nightAlpha(){
  const p = dayPhase();
  if(p < 0.50) return 0;
  if(p < 0.60) return (p-0.5)/0.1 * 0.55;
  if(p < 0.90) return 0.55;
  return (1-p)/0.1 * 0.55;
}
function dayLabel(){
  const p = dayPhase();
  if(p < 0.5) return '☀ روز';
  if(p < 0.6 || p >= 0.9) return '🌆 غروب';
  return '🌙 شب';
}

function isoScreen(x, y){ return {sx:(x-y)*TW/2, sy:(x+y)*TH/2}; }
function proj(x, y){ const s = isoScreen(x, y); return {x:s.sx + vw/2 - cam.sx, y:s.sy + vh/2 - cam.sy}; }
function tilePath(x,y){ return RW.pathTiles.includes(x+','+y); }
function hash2(x,y){ let h=(x*374761393 + y*668265263)>>>0; h=(h^(h>>13))*1274126177>>>0; return ((h>>>16)&255)/255; }
function inPond(x,y){ const w = RW.water && RW.water.rect;
  return w ? (x>=w.x && x<w.x+w.w && y>=w.y && y<w.y+w.h) : false; }

/* ---------- برخورد ---------- */
function blocked(nx, ny){
  const boxes = [];
  if(RW.house)    boxes.push({x:RW.house.x, y:RW.house.y, w:RW.house.w, h:RW.house.h});
  if(RW.hut)      boxes.push({x:RW.hut.x,   y:RW.hut.y,   w:RW.hut.w,   h:RW.hut.h});
  if(RW.workshop) boxes.push({x:RW.workshop.x-0.45, y:RW.workshop.y-0.45, w:0.9, h:0.9});
  if(RW.well)     boxes.push({x:RW.well.x-0.45, y:RW.well.y-0.45, w:0.9, h:0.9});
  for(const b of boxes)
    if(nx>b.x-0.3 && nx<b.x+b.w+0.3 && ny>b.y-0.3 && ny<b.y+b.h+0.3) return true;
  const circles = [];
  (RW.rocks||[]).forEach(r=>circles.push({x:r.x, y:r.y, r:.55}));
  (RW.crystals||[]).forEach(c=>circles.push({x:c.x, y:c.y, r:.5}));
  (RW.trees||[]).forEach(t=>circles.push({x:t.x, y:t.y, r:.45}));
  (RW.npcs||[]).forEach(n=>circles.push({x:n.nx, y:n.ny, r:.42}));
  (RW.corals||[]).forEach(c=>circles.push({x:c.x, y:c.y, r:.3}));
  (RW.lanterns||[]).forEach(l=>circles.push({x:l.x, y:l.y, r:.3}));
  if(RW.market) circles.push({x:RW.market.x, y:RW.market.y, r:.55});
  if(RW.farm)   circles.push({x:RW.farm.x,   y:RW.farm.y,   r:.6});
  if(RW.bigtree)circles.push({x:RW.bigtree.x,y:RW.bigtree.y,r:.7});
  if(RW.fire)   circles.push({x:RW.fire.x,   y:RW.fire.y,   r:.35});
  if(RW.gate){
    circles.push({x:RW.gate.x-1.1, y:RW.gate.y, r:.4}, {x:RW.gate.x+1.1, y:RW.gate.y, r:.4});
  }
  if(RW.gate2)  circles.push({x:RW.gate2.x, y:RW.gate2.y, r:.5});
  if(RW.chest && !S.chestOpen) circles.push({x:RW.chest.x, y:RW.chest.y, r:.4});
  for(const c of circles){
    const dx=nx-c.x, dy=ny-c.y;
    if(dx*dx+dy*dy < (c.r+0.26)*(c.r+0.26)) return true;
  }
  return false;
}

/* ---------- شکل‌های پایه ---------- */
function diamond(px, py, w, h, fill, stroke){
  ctx.beginPath();
  ctx.moveTo(px, py-h/2); ctx.lineTo(px+w/2, py); ctx.lineTo(px, py+h/2); ctx.lineTo(px-w/2, py);
  ctx.closePath();
  if(fill){ ctx.fillStyle=fill; ctx.fill(); }
  if(stroke){ ctx.strokeStyle=stroke; ctx.lineWidth=1; ctx.stroke(); }
}
function boxIso(px, py, w, h, bh, cTop, cL, cR){
  ctx.fillStyle=cR; ctx.beginPath();
  ctx.moveTo(px+w, py); ctx.lineTo(px+w, py-bh); ctx.lineTo(px, py-bh+h); ctx.lineTo(px, py+h); ctx.closePath(); ctx.fill();
  ctx.fillStyle=cL; ctx.beginPath();
  ctx.moveTo(px-w, py); ctx.lineTo(px-w, py-bh); ctx.lineTo(px, py-bh+h); ctx.lineTo(px, py+h); ctx.closePath(); ctx.fill();
  diamond(px, py-bh, w*2, h*2, cTop);
}
function shadowEllipse(px, py, r){
  ctx.fillStyle='rgba(0,0,0,.25)';
  ctx.beginPath(); ctx.ellipse(px, py, r, r*0.5, 0, 0, Math.PI*2); ctx.fill();
}
function tag(name, px, py, color){
  ctx.font='600 10px Vazirmatn, Tahoma, sans-serif';
  ctx.textAlign='center';
  ctx.fillStyle='rgba(5,8,31,.55)';
  const w = ctx.measureText(name).width + 12;
  ctx.beginPath(); ctx.roundRect ? ctx.roundRect(px-w/2, py-24, w, 16, 8) : ctx.rect(px-w/2, py-24, w, 16); ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.18)'; ctx.stroke();
  ctx.fillStyle=color; ctx.fillText(name, px, py-12);
}
function glow(px, py, r, color, a){
  ctx.save(); ctx.globalCompositeOperation='lighter';
  const g = ctx.createRadialGradient(px, py, 0, px, py, r);
  g.addColorStop(0, color.replace('A', (a).toFixed(2)));
  g.addColorStop(1, color.replace('A', '0'));
  ctx.fillStyle=g; ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI*2); ctx.fill();
  ctx.restore();
}

/* ---------- رسم صحنه ---------- */
function draw(t){
  ctx.clearRect(0,0,vw,vh);
  const pS = isoScreen(P.x, P.y);
  if(!cam.init){ cam.sx=pS.sx; cam.sy=pS.sy; cam.init=true; }
  cam.sx += (pS.sx - cam.sx) * .12;
  cam.sy += (pS.sy - cam.sy) * .12;

  /* زمین */
  for(let ty=0; ty<RW.W; ty++){
    for(let tx=0; tx<RW.H; tx++){
      const s = isoScreen(tx, ty);
      const px = s.sx + vw/2 - cam.sx, py = s.sy + vh/2 - cam.sy;
      if(px < -TW*2 || px > vw+TW*2 || py < -TH*4 || py > vh+TH*4) continue;
      const sea = RW.water.type==='sea' && ty < RW.water.until;
      const pond = RW.water.type==='pond' && inPond(tx+.5, ty+.5);
      if(sea || pond){
        const shimmer = Math.sin(t/700 + tx*1.4 + ty)*0.5+0.5;
        diamond(px, py, TW, TH, 'rgba('+Math.round(40+shimmer*30)+','+Math.round(150+shimmer*40)+',255,'+(0.75+shimmer*0.2)+')');
      }else{
        const v = hash2(tx,ty);
        let c = tilePath(tx,ty) ? (v>0.5?RW.pal.pathA:RW.pal.pathB) : (v>0.5?RW.pal.grassA:RW.pal.grassB);
        diamond(px, py, TW, TH, c, 'rgba(0,0,0,.06)');
      }
    }
  }

  /* اشیاء با ترتیب عمق */
  const list = [];
  const put = (depth, fn)=>list.push({depth, fn});
  drawProps(put, t);
  list.sort((a,b)=>a.depth-b.depth).forEach(o=>o.fn());

  /* شب — پوشش تیره + درخشش منابع نور */
  const na = nightAlpha();
  if(na > 0.01){
    ctx.fillStyle = 'rgba(10,14,48,' + na.toFixed(3) + ')';
    ctx.fillRect(0, 0, vw, vh);
    if(RW.fire){ const q=proj(RW.fire.x, RW.fire.y);
      glow(q.x, q.y-8, 70, 'rgba(255,170,80,A)', 0.25+na*0.55); }
    (RW.lanterns||[]).forEach(l=>{ const q=proj(l.x, l.y);
      glow(q.x, q.y-16, 46, 'rgba(255,216,111,A)', 0.2+na*0.5); });
    if(RW.market){ const q=proj(RW.market.x, RW.market.y);
      glow(q.x, q.y-14, 50, 'rgba(124,198,255,A)', 0.12+na*0.3); }
    if(RW.house){ const h=RW.house, q=proj(h.x+h.w/2, h.y+h.h/2);
      glow(q.x - TW*0.75, q.y-20, 30, 'rgba(255,216,111,A)', 0.1+na*0.35); }
    if(RW.gate2){ const q=proj(RW.gate2.x, RW.gate2.y);
      glow(q.x, q.y-26, 60, 'rgba(155,225,93,A)', 0.1+na*0.3); }
  }

  /* حلقهٔ هدف تعامل */
  if(interactTarget){
    const q = proj(interactTarget.x, interactTarget.y);
    const pu = Math.sin(t/180)*0.5+0.5;
    ctx.strokeStyle='rgba(143,240,255,'+(0.5+pu*0.5)+')'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.ellipse(q.x, q.y+2, 20+pu*3, 10+pu*1.5, 0, 0, Math.PI*2); ctx.stroke();
  }
}

function drawProps(put, t){
  /* درخت‌ها */
  (RW.trees||[]).forEach(tr=>{
    const q = proj(tr.x, tr.y);
    const c1 = RW.pal.tree1 || '#2f7d4f', c2 = RW.pal.tree2 || '#3d9b60';
    put(tr.x+tr.y, ()=>{
      shadowEllipse(q.x, q.y, 16);
      ctx.fillStyle='#6e4f31'; ctx.fillRect(q.x-4, q.y-26, 8, 26);
      ctx.fillStyle=c1; ctx.beginPath(); ctx.arc(q.x, q.y-36, 15, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle=c2; ctx.beginPath(); ctx.arc(q.x-7, q.y-42, 10, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(q.x+8, q.y-40, 9, 0, Math.PI*2); ctx.fill();
      if(tr.charges<=0){ ctx.fillStyle='rgba(0,0,0,.35)'; ctx.beginPath(); ctx.arc(q.x, q.y-36, 15, 0, Math.PI*2); ctx.fill(); }
    });
  });
  /* بلورهای کوهستان (سرزمین ۳) — درخشان، بدون شانس */
  (RW.crystals||[]).forEach(cr=>{
    if(cr.charges<=0) return;
    const q = proj(cr.x, cr.y);
    put(cr.x+cr.y, ()=>{
      const gl = Math.sin(t/260 + cr.x)*0.5+0.5;
      shadowEllipse(q.x, q.y, 12);
      ctx.fillStyle='#7fd7ff';
      ctx.beginPath();
      ctx.moveTo(q.x-10, q.y); ctx.lineTo(q.x-5, q.y-18); ctx.lineTo(q.x, q.y-26);
      ctx.lineTo(q.x+6, q.y-15); ctx.lineTo(q.x+11, q.y); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.5)';
      ctx.beginPath(); ctx.moveTo(q.x-5, q.y-18); ctx.lineTo(q.x, q.y-26); ctx.lineTo(q.x, q.y-6); ctx.closePath(); ctx.fill();
      ctx.strokeStyle='rgba(137,247,254,'+(0.3+gl*0.45)+')'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(q.x, q.y-12, 13+gl*3, 0, Math.PI*2); ctx.stroke();
    });
  });
  /* بلوط کهن (سرزمین ۲) */
  if(RW.bigtree){
    const q = proj(RW.bigtree.x, RW.bigtree.y);
    put(RW.bigtree.x+RW.bigtree.y, ()=>{
      shadowEllipse(q.x, q.y, 26);
      ctx.fillStyle='#5d4327'; ctx.fillRect(q.x-8, q.y-40, 16, 40);
      ctx.fillStyle='#2c6e49'; ctx.beginPath(); ctx.arc(q.x, q.y-56, 26, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle='#3d8b63'; ctx.beginPath(); ctx.arc(q.x-12, q.y-64, 16, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(q.x+13, q.y-62, 14, 0, Math.PI*2); ctx.fill();
      tag('بلوط کهن', q.x, q.y-88, '#9be15d');
    });
  }
  /* صخره‌ها */
  (RW.rocks||[]).forEach(rk=>{
    const q = proj(rk.x, rk.y);
    put(rk.x+rk.y, ()=>{
      shadowEllipse(q.x, q.y, 18);
      const g = rk.charges>0 ? '#8b93a5' : '#565d6e';
      ctx.fillStyle=g; ctx.beginPath();
      ctx.moveTo(q.x-16,q.y); ctx.lineTo(q.x-9,q.y-16); ctx.lineTo(q.x+3,q.y-20);
      ctx.lineTo(q.x+14,q.y-8); ctx.lineTo(q.x+11,q.y); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.16)';
      ctx.beginPath(); ctx.moveTo(q.x-9,q.y-16); ctx.lineTo(q.x+3,q.y-20); ctx.lineTo(q.x,q.y-10); ctx.closePath(); ctx.fill();
    });
  });
  /* خانه / کلبه */
  const bd = RW.house ? {b:RW.house, name:'خانهٔ مسافر', roof:'#a34e57', roofB:'#8c3f49'} :
             RW.hut   ? {b:RW.hut,   name:'کلبهٔ نگهبان', roof:'#3f7d6a', roofB:'#33695a'} : null;
  if(bd){
    const c0 = proj(bd.b.x + bd.b.w/2, bd.b.y + bd.b.h/2);
    put(bd.b.x + bd.b.y + 2, ()=>{
      shadowEllipse(c0.x, c0.y+6, 40);
      boxIso(c0.x, c0.y, TW*1.15, TH*1.15, 34, '#9a7b5c', '#7a5f47', '#6b533e');
      ctx.fillStyle=bd.roof; ctx.beginPath();
      ctx.moveTo(c0.x - TW*1.15, c0.y-34); ctx.lineTo(c0.x, c0.y-34-TH*1.15-22); ctx.lineTo(c0.x + TW*1.15, c0.y-34); ctx.closePath(); ctx.fill();
      ctx.fillStyle=bd.roofB; ctx.beginPath();
      ctx.moveTo(c0.x, c0.y-34+TH*1.15); ctx.lineTo(c0.x, c0.y-34-TH*1.15-22); ctx.lineTo(c0.x + TW*1.15, c0.y-34); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#4a3625'; ctx.fillRect(c0.x + TW*0.45, c0.y-20, 12, 20);
      ctx.fillStyle='#ffd86f55'; ctx.fillRect(c0.x - TW*0.75, c0.y-24, 10, 10);
      tag(bd.name, c0.x, c0.y-34-TH*1.15-26, '#ffd86f');
    });
  }
  /* کارگاه */
  if(RW.workshop){
    const w = RW.workshop, c0 = proj(w.x, w.y);
    put(w.x+w.y, ()=>{
      shadowEllipse(c0.x, c0.y+4, 26);
      boxIso(c0.x, c0.y, TW*0.62, TH*0.62, 22, '#7d8494', '#5f6675', '#525867');
      ctx.fillStyle='#3a3f4c'; ctx.fillRect(c0.x-8, c0.y-30, 16, 6);
      ctx.fillStyle='#3a3f4c'; ctx.fillRect(c0.x-3, c0.y-24, 6, 10);
      ctx.fillStyle='#ffd86f'; ctx.font='700 11px Vazirmatn, Tahoma'; ctx.textAlign='center';
      ctx.fillText('⚒', c0.x, c0.y-40);
      tag('کارگاه', c0.x, c0.y-52, '#9aa3c7');
    });
  }
  /* چاه */
  if(RW.well){
    const q = proj(RW.well.x, RW.well.y);
    put(RW.well.x+RW.well.y, ()=>{
      shadowEllipse(q.x, q.y, 16);
      ctx.fillStyle='#8b93a5'; ctx.fillRect(q.x-11, q.y-18, 22, 18);
      ctx.fillStyle='#39415a'; ctx.beginPath(); ctx.ellipse(q.x, q.y-18, 11, 5, 0, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle='#a34e57'; ctx.beginPath();
      ctx.moveTo(q.x-15,q.y-34); ctx.lineTo(q.x,q.y-46); ctx.lineTo(q.x+15,q.y-34); ctx.closePath(); ctx.fill();
    });
  }
  /* آتشگاه — فضای اجتماعی (شب‌ها ساکنان گرد آن جمع می‌شوند) */
  if(RW.fire){
    const q = proj(RW.fire.x, RW.fire.y);
    put(RW.fire.x+RW.fire.y, ()=>{
      shadowEllipse(q.x, q.y, 13);
      ctx.strokeStyle='#6e4f31'; ctx.lineWidth=3;
      ctx.beginPath(); ctx.moveTo(q.x-9,q.y+2); ctx.lineTo(q.x+9,q.y-4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(q.x-9,q.y-4); ctx.lineTo(q.x+9,q.y+2); ctx.stroke();
      const fl = Math.sin(t/120)*2;
      ctx.fillStyle='rgba(255,150,60,.9)';
      ctx.beginPath(); ctx.moveTo(q.x-6,q.y-4); ctx.quadraticCurveTo(q.x, q.y-22-fl, q.x+6, q.y-4); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(255,220,111,.9)';
      ctx.beginPath(); ctx.moveTo(q.x-3,q.y-4); ctx.quadraticCurveTo(q.x, q.y-13-fl, q.x+3, q.y-4); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(255,216,111,.08)';
      ctx.beginPath(); ctx.arc(q.x, q.y-8, 34, 0, Math.PI*2); ctx.fill();
      tag('آتشگاه', q.x, q.y-40, '#ffd86f');
    });
  }
  /* بازار محلی — چادر کاروان */
  if(RW.market){
    const q = proj(RW.market.x, RW.market.y);
    put(RW.market.x+RW.market.y, ()=>{
      shadowEllipse(q.x, q.y+2, 22);
      ctx.fillStyle='#5b6270'; ctx.fillRect(q.x-16, q.y-14, 32, 14);
      ctx.fillStyle='#7c5cff'; ctx.beginPath();
      ctx.moveTo(q.x-20, q.y-14); ctx.quadraticCurveTo(q.x, q.y-44, q.x+20, q.y-14); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#38c6ff'; ctx.beginPath();
      ctx.moveTo(q.x-8, q.y-14); ctx.quadraticCurveTo(q.x, q.y-36, q.x+8, q.y-14); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#ffd86f'; ctx.font='700 10px Vazirmatn, Tahoma'; ctx.textAlign='center';
      ctx.fillText('⚖', q.x, q.y-24);
      tag('بازار محلی', q.x, q.y-50, '#ffd86f');
    });
  }
  /* مزرعه */
  if(RW.farm){
    const q = proj(RW.farm.x, RW.farm.y);
    const st = farmState();
    put(RW.farm.x+RW.farm.y, ()=>{
      diamond(q.x, q.y, TW*0.9, TH*0.9, '#6b4f2f', 'rgba(0,0,0,.15)');
      if(st==='growing'){
        const gr = Math.min(1, (Date.now()-S.farm.at)/FARM_CFG.growMs);
        ctx.fillStyle='#5fae63'; ctx.fillRect(q.x-2, q.y-6-gr*10, 4, 6+gr*10);
        ctx.fillStyle='#7fd6a0'; ctx.beginPath(); ctx.arc(q.x, q.y-8-gr*10, 3+gr*3, 0, Math.PI*2); ctx.fill();
      }
      if(st==='ready'){
        const pu = Math.sin(t/250)*0.5+0.5;
        for(let i=-1;i<=1;i++){
          ctx.fillStyle='#e8c34a'; ctx.fillRect(q.x+i*8-1.5, q.y-14, 3, 14);
          ctx.fillStyle='#ffd86f'; ctx.beginPath(); ctx.ellipse(q.x+i*8, q.y-16, 3.5, 6, 0, 0, Math.PI*2); ctx.fill();
        }
        ctx.strokeStyle='rgba(255,216,111,'+(0.3+pu*0.4)+')'; ctx.lineWidth=1.5;
        ctx.beginPath(); ctx.ellipse(q.x, q.y-6, 18, 9, 0, 0, Math.PI*2); ctx.stroke();
      }
      tag('مزرعه', q.x, q.y-30, st==='ready' ? '#ffd86f' : '#9aa3c7');
    });
  }
  /* فانوس‌های ساحلی (مأموریت فرعی + نور شب) */
  (RW.lanterns||[]).forEach(l=>{
    const q = proj(l.x, l.y);
    const found = S.discovered.includes('1:'+l.id) || S.discovered.includes(l.id);
    put(l.x+l.y, ()=>{
      shadowEllipse(q.x, q.y, 8);
      ctx.fillStyle='#6e4f31'; ctx.fillRect(q.x-2, q.y-22, 4, 22);
      ctx.fillStyle= found ? '#8f8873' : '#ffd86f';
      ctx.fillRect(q.x-5, q.y-30, 10, 9);
      const pu = Math.sin(t/300 + l.x)*0.5+0.5;
      ctx.strokeStyle='rgba(255,216,111,'+(0.25+pu*0.35)+')'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(q.x, q.y-26, 10+pu*3, 0, Math.PI*2); ctx.stroke();
    });
  });
  /* دروازهٔ مرجانی + سکوها (سرزمین ۱ — پازل حفظ‌شده) */
  if(RW.gate){
    const g = RW.gate;
    (RW.pedestals||[]).forEach(pd=>{
      const q = proj(g.x+pd.dx, g.y);
      put(g.y+g.x+pd.dx*0.01, ()=>{
        boxIso(q.x, q.y, 14, 7, 10, '#9aa3b8', '#767e93', '#68708a');
        ctx.fillStyle='#ffd86f'; ctx.font='700 9px Vazirmatn, Tahoma'; ctx.textAlign='center';
        ctx.fillText(pd.size, q.x, q.y-16);
      });
    });
    const q = proj(g.x, g.y);
    put(g.x+g.y+0.5, ()=>{
      const solved = S.puzzle.solved;
      shadowEllipse(q.x-18, q.y, 12); shadowEllipse(q.x+18, q.y, 12);
      boxIso(q.x-18, q.y, 9, 4.5, 40, '#9aa3b8', '#767e93', '#68708a');
      boxIso(q.x+18, q.y, 9, 4.5, 40, '#9aa3b8', '#767e93', '#68708a');
      ctx.fillStyle='#7d8494'; ctx.fillRect(q.x-24, q.y-52, 48, 8);
      if(solved){
        const gl = Math.sin(t/300)*0.5+0.5;
        ctx.strokeStyle='rgba(56,198,255,'+(0.35+gl*0.4)+')'; ctx.lineWidth=3;
        ctx.beginPath(); ctx.arc(q.x, q.y-24, 20+gl*4, 0, Math.PI*2); ctx.stroke();
      }
      tag('دروازهٔ مرجانی', q.x, q.y-58, solved ? '#7dfcb4' : '#ffd86f');
    });
  }
  /* دروازهٔ نقره‌ای (سرزمین ۲ — مسیر سرزمین ۳) */
  if(RW.gate2){
    const q = proj(RW.gate2.x, RW.gate2.y);
    put(RW.gate2.x+RW.gate2.y+0.5, ()=>{
      shadowEllipse(q.x-16, q.y, 11); shadowEllipse(q.x+16, q.y, 11);
      boxIso(q.x-16, q.y, 8, 4, 36, '#9be15d', '#6fae46', '#5f9c3c');
      boxIso(q.x+16, q.y, 8, 4, 36, '#9be15d', '#6fae46', '#5f9c3c');
      ctx.fillStyle='#7fb95c'; ctx.fillRect(q.x-22, q.y-48, 44, 7);
      const gl = Math.sin(t/350)*0.5+0.5;
      ctx.strokeStyle='rgba(155,225,93,'+(0.2+gl*0.3)+')'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.arc(q.x, q.y-22, 17, 0, Math.PI*2); ctx.stroke();
      tag(RW.gateName || 'دروازهٔ نقره‌ای', q.x, q.y-56, RW.pal.tree2 ? '#9be15d' : '#9be15d');
    });
  }
  /* صندوق دروازه */
  if(RW.chest && !S.chestOpen){
    const q = proj(RW.chest.x, RW.chest.y);
    put(RW.chest.x+RW.chest.y, ()=>{
      const pu = Math.sin(t/250)*0.5+0.5;
      shadowEllipse(q.x, q.y, 13);
      ctx.fillStyle='#a67c3d'; ctx.fillRect(q.x-12, q.y-16, 24, 16);
      ctx.fillStyle='#c49a52'; ctx.fillRect(q.x-12, q.y-22, 24, 7);
      ctx.fillStyle='#ffd86f'; ctx.fillRect(q.x-3, q.y-18, 6, 8);
      ctx.strokeStyle='rgba(255,216,111,'+(0.3+pu*0.4)+')';
      ctx.strokeRect(q.x-14, q.y-24, 28, 26);
    });
  }
  /* سنگ‌های مرجانی */
  (RW.corals||[]).forEach(c=>{
    if(S.puzzle.picked.includes(c.id)) return;
    const q = proj(c.x, c.y);
    put(c.x+c.y, ()=>{
      const gl = Math.sin(t/280 + c.x)*0.5+0.5;
      shadowEllipse(q.x, q.y, 9);
      ctx.fillStyle='#f9748f'; ctx.beginPath(); ctx.arc(q.x, q.y-7, 7, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle='#f78ca0'; ctx.beginPath(); ctx.arc(q.x-4, q.y-12, 4, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(q.x+5, q.y-11, 3.4, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle='rgba(255,216,111,'+(0.25+gl*0.5)+')'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(q.x, q.y-8, 11+gl*3, 0, Math.PI*2); ctx.stroke();
    });
  });
  /* ساکنان — شب‌ها گرد آتشگاه جمع می‌شوند (فضای اجتماعی محلی — NPC، نه بازیکن واقعی) */
  (RW.npcs||[]).forEach((n,i)=>{
    const q = proj(n.nx, n.ny);
    put(n.nx+n.ny, ()=>{
      shadowEllipse(q.x, q.y, 12);
      ctx.fillStyle=n.c;
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(q.x-7, q.y-22, 14, 20, 6) : ctx.rect(q.x-7,q.y-22,14,20); ctx.fill();
      ctx.fillStyle='#ffe3c2';
      ctx.beginPath(); ctx.arc(q.x, q.y-28, 6.5, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(5,8,31,.8)';
      ctx.beginPath(); ctx.arc(q.x-1.5, q.y-29, 1.1, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(q.x+1.5, q.y-29, 1.1, 0, Math.PI*2); ctx.fill();
      tag(n.name, q.x, q.y-38, n.c);
    });
  });
  /* مسافر — شکل هندسی موقت؛ جای مدل نهایی فقط این تابع تعویض می‌شود */
  {
    const q = proj(P.x, P.y);
    const bob = Math.sin(P.walkT)*2;
    const ban = BANNERS[S.banner] || BANNERS[0];
    const outfit = OUTFITS[S.equip.outfit] || OUTFITS.j_mosafar;
    const cloak = outfit===OUTFITS.j_fanous ? '#ffd86f' : ban.c;
    const cloak2 = outfit===OUTFITS.j_fanous ? '#ffb347' : ban.h;
    put(P.x+P.y+0.01, ()=>{
      shadowEllipse(q.x, q.y, 11);
      ctx.fillStyle=cloak;
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(q.x-8, q.y-24+bob, 16, 22, 7) : ctx.rect(q.x-8, q.y-24+bob, 16, 22); ctx.fill();
      ctx.fillStyle=cloak2;
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(q.x-8, q.y-24+bob, 16, 9, 7) : ctx.rect(q.x-8, q.y-24+bob, 16, 9); ctx.fill();
      ctx.fillStyle='#ffe3c2';
      ctx.beginPath(); ctx.arc(q.x, q.y-31+bob, 7, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(5,8,31,.85)';
      ctx.beginPath(); ctx.arc(q.x+P.facing*2-2, q.y-32+bob, 1.2, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(q.x+P.facing*2+2, q.y-32+bob, 1.2, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle= S.equip.outfit==='j_fanous' ? '#fff3c4' : '#ffd86f';
      ctx.beginPath(); ctx.moveTo(q.x-8, q.y-36+bob); ctx.lineTo(q.x, q.y-46+bob); ctx.lineTo(q.x+8, q.y-36+bob); ctx.closePath(); ctx.fill();
      tag(S.name || 'مسافر', q.x, q.y-52+bob, '#8ff0ff');
    });
  }
}
