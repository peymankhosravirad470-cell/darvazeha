/* ═══════════ ورودی، حلقهٔ بازی، تعامل، راه‌اندازی ═══════════ */

/* ---------- جوی‌استیک + کیبورد ---------- */
const joy=$('#joy'), thumb=$('#joy-thumb');
let joyVec={x:0,y:0}, joyId=null;
function joyUpdate(e){
  const r = joy.getBoundingClientRect();
  const cx = r.left+r.width/2, cy = r.top+r.height/2;
  let dx = e.clientX-cx, dy = e.clientY-cy;
  const len = Math.hypot(dx,dy), max=r.width/2-14;
  if(len>max){ dx=dx/len*max; dy=dy/len*max; }
  thumb.style.transform = 'translate(calc(-50% + '+dx+'px), calc(-50% + '+dy+'px))';
  joyVec = {x:dx/max, y:dy/max};
}
function joyReset(){ joyVec={x:0,y:0}; thumb.style.transform='translate(-50%,-50%)'; }
joy.addEventListener('pointerdown', e=>{ joyId=e.pointerId; try{ joy.setPointerCapture(joyId); }catch(err){} joyUpdate(e); });
joy.addEventListener('pointermove', e=>{ if(e.pointerId===joyId) joyUpdate(e); });
joy.addEventListener('pointerup',   ()=>{ joyId=null; joyReset(); });
joy.addEventListener('pointercancel',()=>{ joyId=null; joyReset(); });
const keys={};
addEventListener('keydown', e=>{ keys[e.key.toLowerCase()]=true; if(['arrowup','arrowdown','arrowleft','arrowright'].includes(e.key.toLowerCase())) e.preventDefault(); });
addEventListener('keyup',   e=>{ keys[e.key.toLowerCase()]=false; });

/* ---------- حلقهٔ بازی ---------- */
let interactTarget = null;
let lastT = 0, fpsAcc=0, fpsN=0, FPS=0, clockTick=0;
function gameLoop(t){
  requestAnimationFrame(gameLoop);
  const dt = Math.min(.05, (t-lastT)/1000 || 0); lastT = t;
  fpsAcc += dt; fpsN++;
  if(fpsAcc>=1){ FPS=Math.round(fpsN/fpsAcc); fpsAcc=0; fpsN=0;
    clockTick++; if(clockTick%2===0 && $('#screen-realm').classList.contains('active')) renderHUD(); }
  if(!$('#screen-realm').classList.contains('active') || !RW) return;
  try{
    const busy = !!openSheetId || $('#timing').classList.contains('show') || $('#confirm').classList.contains('show');
    if(!busy) updateMove(dt);
    updateWorld(t);
    scanInteract();
    draw(t);
  }catch(err){
    console.error('gameLoop:', err);
    if(!gameLoop._errShown){
      gameLoop._errShown = true;
      toast('خطای غیرمنتظره در رندر — بازی ادامه می‌دهد؛ جزئیات در کنسول');
      setTimeout(()=>{ gameLoop._errShown = false; }, 5000);
    }
  }
}
function updateMove(dt){
  let jx=joyVec.x, jy=joyVec.y;
  if(keys['w']||keys['arrowup'])    jy-=1;
  if(keys['s']||keys['arrowdown'])  jy+=1;
  if(keys['a']||keys['arrowleft'])  jx-=1;
  if(keys['d']||keys['arrowright']) jx+=1;
  const mag=Math.hypot(jx,jy);
  if(mag>1){ jx/=mag; jy/=mag; }
  const outfit = OUTFITS[S.equip.outfit] || OUTFITS.j_mosafar;
  const sp = 3.2 * (outfit.speed || 1);
  const wx=(jx+jy)*sp*dt, wy=(jy-jx)*sp*dt;
  if(!blocked(P.x+wx, P.y)) P.x+=wx;
  if(!blocked(P.x, P.y+wy)) P.y+=wy;
  P.x=Math.max(.5, Math.min(RW.W-.5, P.x));
  P.y=Math.max(.5, Math.min(RW.H-.5, P.y));
  if(mag>0.08){ P.walkT+=dt*9; P.facing = jx>=0?1:-1; } else P.walkT=0;
}
function updateWorld(t){
  const now = performance.now();
  [...(RW.rocks||[]), ...(RW.trees||[]), ...(RW.crystals||[])].forEach(n=>{
    if(n.charges<=0 && n.depletedAt && now-n.depletedAt > n.respawn*1000){
      n.charges=n.max; n.depletedAt=0;
    }
  });
  /* کشف محیط — شناسه با پیشوند سرزمین؛ اتصال به مأموریت‌ها (مرحله ۵) */
  (RW.pois||[]).forEach(p=>{
    const gid = S.realm+':'+p.id;
    if(!S.discovered.includes(gid) && Math.hypot(P.x-p.x,P.y-p.y)<2){
      S.discovered.push(gid);
      toast('🧭 کشف شد: '+p.label);
      logEvent('discover',{poi:gid, realm:S.realm});
      Sfx.discover();
      questNotify('discover', {poi:p.id});
    }
  });
  /* ساکنان: شب‌ها گرد آتشگاه (فضای اجتماعی محلی) — حرکت نرم قطعی */
  const na = nightAlpha();
  (RW.npcs||[]).forEach((n,i)=>{
    let tx = n.x, ty = n.y;
    if(RW.fire && na > 0.15){
      tx = RW.fire.x + Math.cos(i*1.7)*0.9;
      ty = RW.fire.y + Math.sin(i*1.7)*0.55 + 0.9;
    }
    n.nx += (tx - n.nx) * 0.01;
    n.ny += (ty - n.ny) * 0.01;
  });
}
function scanInteract(){
  const cands = [];
  (RW.rocks||[]).forEach(r=>{ if(r.charges>0) cands.push({type:'rock', ref:r, x:r.x, y:r.y, label:'کوه‌کاوی'}); });
  (RW.crystals||[]).forEach(cr=>{ if(cr.charges>0) cands.push({type:'crystal', ref:cr, x:cr.x, y:cr.y, label:'بلورکاوی'}); });
  (RW.trees||[]).forEach(tr=>{ if(tr.charges>0) cands.push({type:'tree', ref:tr, x:tr.x, y:tr.y, label:'هیزم‌شکنی'}); });
  (RW.corals||[]).forEach(c=>{ if(!S.puzzle.picked.includes(c.id)) cands.push({type:'coral', ref:c, x:c.x, y:c.y, label:'سنگ‌مرجان برداشتن'}); });
  if(RW.workshop) cands.push({type:'workshop', x:RW.workshop.x, y:RW.workshop.y, label:'کارگاه'});
  if(RW.market)   cands.push({type:'market',   x:RW.market.x,   y:RW.market.y,   label:'بازار محلی'});
  if(RW.farm)     cands.push({type:'farm',     x:RW.farm.x,     y:RW.farm.y,     label:'مزرعه'});
  if(RW.house)    cands.push({type:'house', x:RW.house.x+RW.house.w/2, y:RW.house.y+RW.house.h+1, label:'خانهٔ مسافر'});
  if(RW.gate)     cands.push({type:'gate',  x:RW.gate.x,  y:RW.gate.y+0.9, label:'دروازهٔ مرجانی'});
  if(RW.gate2)    cands.push({type:'gate2', x:RW.gate2.x, y:RW.gate2.y+0.9, label:'دروازهٔ نقره‌ای'});
  if(RW.chest && !S.chestOpen) cands.push({type:'chest', x:RW.chest.x, y:RW.chest.y, label:'صندوق دروازه'});
  (RW.lanterns||[]).forEach(l=>cands.push({type:'lantern', ref:l, x:l.x, y:l.y, label:'فانوس ساحلی'}));
  (RW.npcs||[]).forEach(n=>cands.push({type:'npc', ref:n, x:n.nx, y:n.ny, label:n.name}));
  let best=null, bd=1.55;
  cands.forEach(c=>{
    const d=Math.hypot(P.x-c.x, P.y-c.y);
    if(d<bd){ bd=d; best=c; }
  });
  interactTarget = best;
  const ab=$('#btn-action'), hint=$('#hint');
  if(best){ ab.classList.add('show'); ab.textContent=best.label; hint.textContent=''; }
  else{ ab.classList.remove('show');
        hint.textContent='با دستهٔ حرکت بگرد — صخره، درخت، کارگاه، بازار، مزرعه، دروازه و ساکنان را نزدیک شو.'; }
}
$('#btn-action').addEventListener('click', ()=>{
  if(!interactTarget) return;
  Sfx.click();
  const t=interactTarget;
  if(t.type==='rock')      startTiming('mine', t.ref);
  else if(t.type==='crystal') startTiming('crystal', t.ref);
  else if(t.type==='tree') startTiming('chop', t.ref);
  else if(t.type==='workshop'){ renderCraft(); openSheet('#sheet-craft'); }
  else if(t.type==='market'){ mktTab='sell'; renderMarket(); openSheet('#sheet-market'); }
  else if(t.type==='farm'){ renderFarm(); openSheet('#sheet-farm'); }
  else if(t.type==='house'){ renderHouse(); openSheet('#sheet-house'); }
  else if(t.type==='gate'){ renderPuzzle(); openSheet('#sheet-puzzle'); }
  else if(t.type==='gate2'){ toast((RW.gateName||'دروازهٔ نقره‌ای') + ' به سرزمین '+fa(S.realm+1)+' می‌رسد — مسیر روی نقشه با تکمیل مأموریت این سرزمین گشوده می‌شود'); }
  else if(t.type==='chest') openChest();
  else if(t.type==='coral') pickCoral(t.ref);
  else if(t.type==='lantern'){ toast('🏮 فانوس ساحلی' + (S.discovered.includes(S.realm+':'+t.ref.id)?' — پیش‌تر کشف شده':' — کشف شد (اگر نزدیک بودی)')); }
  else if(t.type==='npc')   openDialogue(t.ref.id);
});

/* ---------- مینی‌گیم M4 ضربه به‌موقع (کتابخانهٔ مصوب) ---------- */
const T_ZONE_HW = 0.17;
let tmg = null;
function startTiming(mode, node){
  tmg = {mode, node, t0:performance.now()};
  $('#t-title').textContent = mode==='mine' ? 'کوه‌کاوی' : (mode==='crystal' ? 'بلورکاوی' : 'هیزم‌شکنی');
  $('#t-sub').textContent = mode==='mine'
    ? 'مکانیک M4 «ضربه به‌موقع» — پتک را در پنجرهٔ سبز فرود بیاور.'
    : (mode==='crystal'
      ? 'مکانیک M4 «ضربه به‌موقع» — پتک را روی بلور در پنجرهٔ سبز فرود بیاور.'
      : 'مکانیک M4 «ضربه به‌موقع» — تبر را در پنجرهٔ سبز فرود بیاور.');
  $('#timing').classList.add('show');
  tmgLoop();
}
function tmgLoop(){
  if(!tmg) return;
  const el = (performance.now()-tmg.t0)/1000;
  const m = Math.abs(((el*0.55)%2)-1);
  const trackH = $('#t-track').clientHeight-14;
  $('#t-marker').style.top = (m*trackH)+'px';
  const zH = T_ZONE_HW*2*trackH;
  $('#t-zone').style.top = ((0.5-T_ZONE_HW)*trackH)+'px';
  $('#t-zone').style.height = zH+'px';
  tmg.raf = requestAnimationFrame(tmgLoop);
}
$('#btn-hit').addEventListener('click', ()=>{
  if(!tmg) return;
  const el = (performance.now()-tmg.t0)/1000;
  const m = Math.abs(((el*0.55)%2)-1);
  if(Math.abs(m-0.5) <= T_ZONE_HW) finishHit();
  else { toast('نشنید! نشانگر را در نوار سبز فرود بیاور.'); Vibe(10); }
});
$('#btn-timing-cancel').addEventListener('click', cancelTiming);
function cancelTiming(){ if(tmg) cancelAnimationFrame(tmg.raf); tmg=null; $('#timing').classList.remove('show'); }
function finishHit(){
  const {mode, node} = tmg;
  cancelAnimationFrame(tmg.raf); tmg=null;
  $('#timing').classList.remove('show');
  node.charges -= 1;
  if(node.charges<=0) node.depletedAt = performance.now();
  if(mode==='mine') mineReward(node);
  else if(mode==='crystal') crystalReward(node);
  else chopReward(node);
  Sfx.hit(); Vibe(20);
  questNotify('inv', {});
  renderHUD();
}

/* ---------- هوک ذخیره برای تغییر موجودی (اتصال مأموریت‌ها) ---------- */
const _addItem = addItem;
addItem = function(id, n){ _addItem(id, n); syncEquip(); questNotify('inv', {}); };

/* ---------- شروع ---------- */
resize();
requestAnimationFrame(gameLoop);

/* ---------- قلاب‌های آزمون خودکار (فقط با ?debug=1) ---------- */
if(/[?&]debug=1/.test(location.search)){
  window.HS77 = {
    state:S,
    api:{
      teleport(x,y){ P.x=x; P.y=y; },
      give(id,n){ addItem(id,n); },
      addCoins(n){ S.coins+=n; save(); },
      acceptQuest(id){ questAccept(id); },
      deliverQuest(id){ return questDeliver(id); },
      equip(item){ const g=Object.values(GEAR).find(g=>g.item===item); if(g){ S.equip[g.slot]=item; save(); return true; } return false; },
      setOutfit(o){ if(S.outfits.includes(o)){ S.equip.outfit=o; save(); return true; } return false; },
      realm(id){ enterRealm(id); },
      setTime(phase){ timeOffsetMs = (phase*DAY_MS) - (Date.now()%DAY_MS); },
      night(){ return nightAlpha(); },
      farm(){ return farmState(); },
      npcPos(id){ const n=RW.npcs.find(n=>n.id===id); return n?{x:n.nx,y:n.ny}:null; },
      tamperLedger(i){ if(S.ledger[i]) S.ledger[i].delta.tokens = {coins:999999}; saveNow(); },
      verifyLedger(){ return verifyLedger(); },
      openTiming(){ if(interactTarget && ['rock','tree','crystal'].includes(interactTarget.type)) startTiming(interactTarget.type==='rock'?'mine':interactTarget.type, interactTarget.ref); return !!interactTarget; },
      hit(){ finishHit(); },
      getState(){ return JSON.parse(JSON.stringify({
        pid:S.pid, name:S.name, banner:S.banner, x:P.x, y:P.y, coins:S.coins, inv:S.inv,
        equip:S.equip, outfits:S.outfits, skills:S.skills, quests:S.quests,
        realm:S.realm, puzzle:{picked:S.puzzle.picked, solved:S.puzzle.solved},
        chestOpen:S.chestOpen, farm:S.farm, discovered:S.discovered.length,
        stats:S.stats, settings:S.settings, level:levelOf(S.xp,XP_LV),
        ledgerN:S.ledger.length })); },
    }
  };
}
