/* ═══════════ رابط کاربری: پنل‌ها، گفت‌وگو، نقشه، ساخت شخصیت ═══════════ */

/* ---------- توست / ناوبری / پنل‌ها ---------- */
function toast(msg){
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  $('#toasts').appendChild(t);
  setTimeout(()=>t.remove(), 3000);
}
function show(id){ $$('.view').forEach(v => v.classList.toggle('active', v.id===id)); }
let openSheetId = null;
function openSheet(id){
  $$('.sheet').forEach(s=>s.classList.remove('show'));
  $(id).classList.add('show');
  $('#dim').classList.add('show');
  openSheetId = id;
}
function closeSheets(){
  $$('.sheet').forEach(s=>s.classList.remove('show'));
  $('#dim').classList.remove('show');
  openSheetId = null;
}
$$('[data-close]').forEach(b => b.addEventListener('click', closeSheets));
$('#dim').addEventListener('click', closeSheets);

let confirmYes = null;
function askConfirm(text, onYes){
  $('#confirm-text').textContent = text;
  $('#confirm').classList.add('show');
  confirmYes = onYes;
}
$('#btn-confirm-no').addEventListener('click', ()=> $('#confirm').classList.remove('show'));
$('#btn-confirm-yes').addEventListener('click', ()=>{
  $('#confirm').classList.remove('show');
  if(confirmYes) confirmYes();
  confirmYes = null;
});

/* ---------- HUD ---------- */
function renderHUD(){
  $('#hud-coins').textContent = '💰 ' + fa(S.coins);
  $('#hud-clock').textContent = dayLabel();
  const r = REALMS.find(x=>x.id===S.realm) || REALMS[0];
  $('#realm-title').innerHTML = '<i class="dot"></i> سرزمین ' + fa(r.id) + ' — ' + r.name;
}

/* ---------- نقشهٔ جهان ---------- */
function renderChain(){
  let el = $('#map-chain');
  if(!el){
    el = document.createElement('div'); el.id='map-chain'; el.className='map-chain';
    $('.map-wrap').insertBefore(el, $('#gate-grid'));
    const legend = document.createElement('p'); legend.className='chain-legend';
    legend.innerHTML = 'مسیر اتصال سرزمین‌ها (زنجیرهٔ پیشرفت): ◆ قابل بازی · ◇ گشوده · · قفل — مسافر اکنون اینجاست:';
    $('.map-wrap').insertBefore(legend, el);
  }
  el.innerHTML = REALMS.map(r=>{
    const unlocked = realmUnlocked(r);
    const st = (unlocked && r.built) ? 'built' : (unlocked ? 'open' : 'locked');
    const here = (r.built && r.id === S.realm) ? ' here' : '';
    return '<span class="chain-node '+st+here+'" title="سرزمین '+fa(r.id)+' — '+r.name+'">'+
           (st==='built'?'◆':(unlocked?'◇':'·'))+'</span>';
  }).join('<span class="chain-line"></span>');
}
function realmQuestTags(g){
  const mainQ = Object.keys(QUESTS).find(qid => QUESTS[qid].realm===g.id && QUESTS[qid].main);
  const sideQ = Object.keys(QUESTS).find(qid => QUESTS[qid].realm===g.id && !QUESTS[qid].main);
  let s = '';
  if(mainQ){
    const st = questState(mainQ);
    s += 'مأموریت اصلی: ' + (st.done ? 'کامل ✓' : (st.accepted ? 'در جریان' : '—'));
  }
  if(sideQ){
    const st = questState(sideQ);
    s += ' · مأموریت فرعی: ' + (st.done ? 'کامل ✓' : (st.accepted ? 'در جریان' : '—'));
  }
  const pois = (REALM_MAPS[g.id] ? REALM_MAPS[g.id].pois.length : 0);
  if(pois) s += ' · اکتشاف: ' + fa(discoveredInRealm(g.id)) + '/' + fa(pois);
  return s;
}
function discoveredInRealm(rid){
  return S.discovered.filter(d => d.startsWith(rid+':')).length;
}
function renderGates(){
  const grid = $('#gate-grid'); grid.innerHTML = '';
  REALMS.forEach(g=>{
    const unlocked = realmUnlocked(g);
    const card = document.createElement('button');
    card.className = 'gate-card ' + (unlocked ? 'open' : 'locked');
    card.dataset.gate = g.id;
    const ico = (g.built && unlocked) ? '🌊' : (unlocked ? '🔓' : '🔒');
    let status;
    if(g.built && unlocked) status = (g.id===S.realm) ? 'مسافر اینجاست' : 'قابل بازی';
    else if(g.built) status = 'قفل — ' + g.unlockText;
    else if(unlocked) status = 'شرط کامل شد — محتوا پس از تصمیم A1 ساخته می‌شود';
    else status = g.unlockText;
    card.innerHTML =
      '<span class="g-idx">سرزمین '+fa(g.id)+'</span>' +
      '<div class="g-ico" style="background:linear-gradient(135deg,'+g.c1+'33,'+g.c2+'33);border:1px solid '+g.c1+'55">'+ico+'</div>' +
      '<div class="g-name">'+g.name+'</div>' +
      '<div class="g-zone">حوزه: '+g.zone+'</div>' +
      '<div class="g-status">'+status+'</div>' +
      '<div class="g-tags">'+(g.built ? realmQuestTags(g) : 'ساختار داده‌محور آماده افزودن محتواست')+'</div>' +
      (g.built && unlocked ? '<span class="g-glow"></span>' : '');
    card.addEventListener('click', ()=>{
      Sfx.click();
      if(g.built && unlocked) enterRealm(g.id);
      else if(unlocked) toast('شرط گشودن کامل شد؛ محتوای این سرزمین هنوز ساخته نشده (A1 باز است)');
      else toast('قفل است — ' + g.unlockText);
    });
    grid.appendChild(card);
  });
  const prog = progressLevel();
  const doneMain = Object.keys(QUESTS).filter(q=>QUESTS[q].main && questState(q).done).length;
  const totalMain = Object.keys(QUESTS).filter(q=>QUESTS[q].main).length;
  $('#chip-progress-map').textContent = 'پیشرفت مسافر: سرزمین '+fa(prog)+' از ۱۳ · مأموریت اصلی '+fa(doneMain)+'/'+fa(totalMain);
  renderChain();
}
$('#btn-enter').addEventListener('click', ()=>{
  Sfx.click();
  if(!S.pid){ initCreation(); return; }
  renderGates(); show('screen-map');
});
$('#btn-back-map').addEventListener('click', ()=>{ show('screen-map'); renderGates(); });

/* ---------- ورود به سرزمین ---------- */
function enterRealm(id){
  if(!REALM_MAPS[id]) return;
  S.realm = id; save();
  loadRealmRuntime(id);
  show('screen-realm');
  resize();
  renderHUD();
}

/* ---------- موجودی ---------- */
function renderInv(){
  const b=$('#inv-body');
  const ids=Object.keys(S.inv);
  if(!ids.length){
    b.innerHTML='<div class="empty-state"><span class="es-ico">🎒</span>کیف تو خالی است.<br>به صخره‌ها یا درخت‌ها نزدیک شو و «کوبش» را در پنجرهٔ سبز بزن.</div>';
    return;
  }
  let g='<div class="inv-grid">';
  ids.forEach(id=>{
    g+='<div class="inv-slot"><div class="i-ico">'+ITEMS[id].ico+'</div>' +
       '<div class="i-name">'+ITEMS[id].name+'</div><div class="i-count">×'+fa(S.inv[id])+'</div></div>';
  });
  g+='</div><div class="chip" style="margin-top:14px">💰 سکه: '+fa(S.coins)+'</div>';
  b.innerHTML=g;
}

/* ---------- کارگاه ---------- */
function renderCraft(){
  const b=$('#craft-body');
  let rows='';
  RECIPES.forEach(r=>{
    const can = hasItems(r.need);
    const needTxt = Object.keys(r.need).map(k=>ITEMS[k].name+' ×'+fa(r.need[k])+' (داری '+fa(S.inv[k]||0)+')').join(' + ');
    rows += '<div class="row"><span class="r-ico">'+ITEMS[r.out].ico+'</span>' +
      '<div class="r-main"><b>'+r.title+'</b>' +
      '<small>'+r.note+'</small>' +
      '<small>مواد: '+needTxt+'</small></div>' +
      '<span class="tag test">آزمایشی</span></div>' +
      '<button class="btn block" data-craft="'+r.id+'" '+(!can?'disabled':'')+'>ساختن '+r.title+'</button>';
  });
  rows += '<div class="bar" id="craft-prog" style="display:none"><i style="width:0%"></i></div>';
  rows += '<p style="font-size:.7rem;color:var(--muted);margin-top:10px">تولید فقط با مواد واقعی ثبت می‌شود (ضد تولید صوری — سند ۰۴ §۹). ' +
          'مزیت مهارت ساخت (سطح ۲+): هر سومین ساخت، خروجی +۱. شناسهٔ رویداد یکتا در دفترکل ثبت می‌شود.</p>';
  b.innerHTML = rows;
  b.querySelectorAll('[data-craft]').forEach(el=>el.addEventListener('click', ()=>{
    el.disabled = true;
    const prog = $('#craft-prog'); prog.style.display='block';
    let w=0;
    const iv=setInterval(()=>{
      w+=10; prog.firstElementChild.style.width=Math.min(w,100)+'%';
      if(w>=100){
        clearInterval(iv);
        doCraftRecipe(el.dataset.craft);
        renderCraft(); renderHUD();
      }
    }, 80);
  }));
}

/* ---------- مأموریت‌ها ---------- */
function renderMissions(){
  const b=$('#missions-body');
  let rows='';
  Object.keys(QUESTS).forEach(qid=>{
    const q = QUESTS[qid], st = questState(qid);
    let steps = '<div class="qsteps">';
    q.steps.forEach((s,i)=>{
      const done = st.done || i < st.step;
      steps += '<div class="qstep'+(done?' done':'')+'"><span class="st-ico">'+(done?'✅':'⬜')+'</span>'+s.text+'</div>';
    });
    steps += '</div>';
    const rewardTxt = q.reward ? ('پاداش یک‌بار: ' + q.reward.text + ' [آزمایشی]') : '';
    rows += '<div class="row"><span class="r-ico">'+(q.main?'📜':'🏮')+'</span>' +
      '<div class="r-main"><b>'+q.title+'</b><small>سرزمین '+fa(q.realm)+' · '+q.brief+'</small>' + steps +
      '<small>'+rewardTxt+'</small></div>' +
      '<span class="tag '+(st.done?'ok':(st.accepted?'warn':''))+'">'+(st.done?'کامل شد':(st.accepted?'در جریان':'پذیرفته نشده'))+'</span></div>';
  });
  rows += '<p style="font-size:.7rem;color:var(--muted)">مأموریت‌ها داده‌محورند؛ گشودن سرزمین بعدی به «کامل‌شدن» مأموریت اصلی پیوند دارد. پاداش اصلی فقط یک‌بار (D7).</p>';
  b.innerHTML=rows;
}

/* ---------- کارنامه (شخصیت، مهارت، تجهیز) ---------- */
function renderProfile(){
  const b=$('#profile-body');
  const lv = levelOf(S.xp, XP_LV);
  const lo = XP_LV[lv-1], hi = XP_LV[lv]||XP_LV[XP_LV.length-1];
  let html = '';
  html += '<div class="stat-grid">' +
    '<div class="stat-card"><b>'+ (S.name||'مسافر') +'</b><span>پرچم: '+(BANNERS[S.banner]||BANNERS[0]).name+'</span></div>' +
    '<div class="stat-card"><b>سطح '+fa(lv)+'</b><span>مسافر — تجربهٔ '+fa(S.xp)+'</span></div>' +
    '</div>' +
    '<p style="margin:14px 2px 6px;font-size:.8rem">پیشرفت مسافر — تا سطح '+fa(lv+1)+'</p>' +
    '<div class="bar"><i style="width:'+Math.round(100*(S.xp-lo)/Math.max(1,hi-lo))+'%"></i></div>';
  html += '<p style="margin:16px 2px 6px;font-size:.8rem">شناسهٔ بازیکن (یکتا): <span style="color:var(--neon-b);font-size:.7rem">'+ (S.pid||'—') +'</span></p>';
  /* مهارت‌ها */
  html += '<p style="margin:14px 2px 6px;font-size:.8rem">مهارت‌ها (حرفه‌های فعال نمونه — فهرست کامل ۱۲ حرفه = A7 باز):</p>';
  Object.keys(SKILLS).forEach(id=>{
    const slv = skillLv(id);
    const slo = SKILL_XP[slv-1], shi = SKILL_XP[slv]||SKILL_XP[SKILL_XP.length-1];
    const perk = skillPerkText(id, slv);
    const reg = !!(S.skills[id] && S.skills[id].reg);
    html += '<div class="row"><span class="r-ico">'+SKILLS[id].ico+'</span>' +
      '<div class="r-main"><b>'+SKILLS[id].name+' — سطح '+fa(slv)+'</b>' +
      '<small>تجربه: '+fa(S.skills[id]?S.skills[id].xp:0)+(perk? ' · '+perk:'')+'</small></div>' +
      '<span class="tag '+(reg?'ok':'')+'">'+(reg?'فعال':'ثبت‌نشده')+'</span></div>' +
      '<div class="bar"><i style="width:'+Math.round(100*((S.skills[id]?S.skills[id].xp:0)-slo)/Math.max(1,shi-slo))+'%"></i></div>';
  });
  /* تجهیزات */
  html += '<p style="margin:16px 2px 6px;font-size:.8rem">تجهیزات:</p>';
  ['mine','wood'].forEach(slot=>{
    const g = Object.values(GEAR).find(g=>g.slot===slot);
    const eq = S.equip[slot];
    const owned = hasItem(g.item, 1);
    html += '<div class="row"><span class="r-ico">'+ITEMS[g.item].ico+'</span>' +
      '<div class="r-main"><b>'+g.label+': '+(eq?ITEMS[eq].name:'—')+'</b><small>'+g.bonus+'</small></div>' +
      (eq ? '<button class="btn ghost" data-uneq="'+slot+'">برداشتن</button>'
          : (owned ? '<button class="btn ghost" data-eq="'+g.item+'">تجهیز</button>' : '<span class="tag">نساخته‌ای</span>')) +
      '</div>';
  });
  /* جامه‌ها */
  html += '<p style="margin:14px 2px 6px;font-size:.8rem">جامه‌ها:</p>';
  S.outfits.forEach(o=>{
    const odef = OUTFITS[o];
    const on = S.equip.outfit===o;
    html += '<div class="row"><span class="r-ico">🧥</span>' +
      '<div class="r-main"><b>'+odef.name+(on?' (پوشیده)':'')+'</b><small>'+odef.desc+'</small></div>' +
      (on ? '' : '<button class="btn ghost" data-outfit="'+o+'">پوشیدن</button>') + '</div>';
  });
  /* آمار */
  html += '<div class="stat-grid" style="margin-top:14px">' +
    '<div class="stat-card"><b>'+fa(S.stats.mined)+'</b><span>کوه‌کاوی موفق</span></div>' +
    '<div class="stat-card"><b>'+fa(S.stats.chopped)+'</b><span>هیزم‌شکنی</span></div>' +
    '<div class="stat-card"><b>'+fa(S.stats.crafted)+'</b><span>ساخت</span></div>' +
    '<div class="stat-card"><b>'+fa(S.stats.harvested)+'</b><span>برداشت مزرعه</span></div>' +
    '</div>';
  b.innerHTML = html;
  b.querySelectorAll('[data-eq]').forEach(el=>el.addEventListener('click', ()=>{
    const item = el.dataset.eq;
    const g = Object.values(GEAR).find(g=>g.item===item);
    S.equip[g.slot] = item; save(); Sfx.click(); renderProfile();
  }));
  b.querySelectorAll('[data-uneq]').forEach(el=>el.addEventListener('click', ()=>{
    S.equip[el.dataset.uneq] = null; save(); Sfx.click(); renderProfile();
  }));
  b.querySelectorAll('[data-outfit]').forEach(el=>el.addEventListener('click', ()=>{
    S.equip.outfit = el.dataset.outfit; save(); Sfx.click(); renderProfile();
  }));
}

/* ---------- وضعیت سرزمین + دفترکل ---------- */
function renderStatus(){
  const b=$('#status-body');
  const v = verifyLedger();
  const earned = S.ledger.filter(e=>e.type==='reward_quest'||e.type==='sale_market'||e.type==='sale_caravan'||e.type==='reward_chest')
    .reduce((a,e)=>a+(e.delta.tokens?e.delta.tokens.coins:0),0);
  let led = '<div class="notes-sec"><h3>دفترکل ضمیمه‌تنها + زنجیرهٔ هش (نمونهٔ محلیِ الگوی سند ۱۴ — نسخهٔ نهایی سمت سرور است)</h3>';
  S.ledger.slice(-6).reverse().forEach(e=>{
    led += '<p>#'+fa(e.seq)+' <span style="color:#38c6ff">'+e.type+'</span> — '+e.id+' · هش '+e.h.slice(0,8)+'</p>';
  });
  if(!S.ledger.length) led += '<p>تا این لحظه رویدادی ثبت نشده است.</p>';
  led += '<p style="margin-top:8px">راستی‌آزمایی زنجیره: <b style="color:'+(v.ok?'#7dfcb4':'#ff8f8f')+'">' +
         (v.ok ? 'سالم ('+fa(v.n)+' رویداد)' : 'دستکاری آشکار شد در #'+fa(v.brokenAt)) + '</b></p></div>';
  const r = REALMS.find(x=>x.id===S.realm);
  const npcCount = (REALM_MAPS[S.realm]?REALM_MAPS[S.realm].npcs.length:0);
  b.innerHTML =
    '<div class="stat-grid">' +
      '<div class="stat-card"><b>روستا (سطح ۱/۵)</b><span>روستا ← شهر ← منطقه ← پادشاهی ← امپراتوری (D5) — ارتقا در فاز جمعی</span></div>' +
      '<div class="stat-card"><b>'+fa(npcCount+1)+' ساکن</b><span>'+npcCount+' ساکن + مسافر (NPC — بازیکن واقعی دیگر حاضر نیست)</span></div>' +
      '<div class="stat-card"><b>'+fa(S.stats.mined+S.stats.chopped+S.stats.crafted+S.stats.harvested)+'</b><span>تولید کل این مسافر</span></div>' +
      '<div class="stat-card"><b>'+fa(earned)+' 💰</b><span>سکهٔ کسب‌شده (فقط از کار واقعی)</span></div>' +
      '<div class="stat-card"><b>'+fa(Object.keys(QUESTS).filter(q=>questState(q).done).length)+'/'+fa(Object.keys(QUESTS).length)+'</b><span>مأموریت‌های کامل</span></div>' +
      '<div class="stat-card"><b>'+fa(S.discovered.length)+'</b><span>کشف محیط (همهٔ سرزمین‌ها)</span></div>' +
    '</div>' + led +
    '<p style="font-size:.7rem;color:var(--muted)">اقتصاد این بازی: هیچ فروش توکن، قمار یا خرید شانس‌محور وجود ندارد. سکه فقط از کار واقعی می‌آید. دارایی شخصی مصادره نمی‌شود (اصل ۱ از ۹ اصل عدالت).</p>';
}

/* ---------- خانه ---------- */
function renderHouse(){
  const b=$('#house-body');
  const ids=Object.keys(ITEMS);
  let rows=''; let any=false;
  ids.forEach(id=>{
    const inv=S.inv[id]||0, ch=S.chest[id]||0;
    if(!inv && !ch) return;
    any=true;
    rows += '<div class="row"><span class="r-ico">'+ITEMS[id].ico+'</span>' +
      '<div class="r-main">'+ITEMS[id].name+'<small>کیف: '+fa(inv)+' · صندوق: '+fa(ch)+'</small></div>' +
      (inv?'<button class="btn ghost" data-dep="'+id+'">گذاشتن</button>':'') +
      (ch?'<button class="btn ghost" data-wdr="'+id+'">برداشتن</button>':'') +
      '</div>';
  });
  b.innerHTML = any ? rows :
    '<div class="empty-state"><span class="es-ico">📦</span>صندوق خانه خالی است.<br>کالایی در کیف نداری — از صخره‌ها و درخت‌ها برداشت کن.</div>' +
    '<p style="font-size:.7rem;color:var(--muted)">دارایی شخصی مصادره نمی‌شود (اصل ۱ از ۹ اصل عدالت). صندوق خانه بخشی از دارایی محافظت‌شدهٔ توست.</p>';
  b.querySelectorAll('[data-dep]').forEach(el=>el.addEventListener('click',()=>{
    const id=el.dataset.dep;
    if(takeItem2(id,1)){ S.chest[id]=(S.chest[id]||0)+1; toast('📦 در صندوق گذاشته شد'); renderHouse(); }
  }));
  b.querySelectorAll('[data-wdr]').forEach(el=>el.addEventListener('click',()=>{
    const id=el.dataset.wdr;
    if((S.chest[id]||0)>0){ S.chest[id]-=1; if(S.chest[id]<=0) delete S.chest[id]; addItem(id,1); toast('🎒 به کیف برگشت'); renderHouse(); }
  }));
}
function takeItem2(id, n){ return takeItems({[id]:n}); }

/* ---------- بازار محلی ---------- */
let mktTab = 'sell';
function renderMarket(){
  const b=$('#market-body');
  let html = '<div class="mkt-tabs">' +
    '<button class="mkt-tab'+(mktTab==='sell'?' sel':'')+'" data-tab="sell">فروش</button>' +
    '<button class="mkt-tab'+(mktTab==='buy'?' sel':'')+'" data-tab="buy">خرید</button>' +
    '<button class="mkt-tab'+(mktTab==='caravan'?' sel':'')+'" data-tab="caravan">سفارش کاروان</button>' +
    '</div>';
  if(mktTab==='sell'){
    let rows='';
    Object.keys(MARKET.sell).forEach(id=>{
      if(!ITEMS[id]) return;
      const have = S.inv[id]||0;
      rows += '<div class="row"><span class="r-ico">'+ITEMS[id].ico+'</span>' +
        '<div class="r-main">'+ITEMS[id].name+'<small>داری: '+fa(have)+'</small></div>' +
        '<span class="mkt-price">'+fa(sellPrice(id))+' سکه</span>' +
        '<button class="btn ghost" data-sell="'+id+'" '+(!have?'disabled':'')+'>فروش ۱</button></div>';
    });
    html += rows + '<p style="font-size:.7rem;color:var(--muted);margin-top:8px">'+MARKET.note+'</p>';
  }
  if(mktTab==='buy'){
    let rows='';
    Object.keys(MARKET.buy).forEach(id=>{
      rows += '<div class="row"><span class="r-ico">'+ITEMS[id].ico+'</span>' +
        '<div class="r-main">'+ITEMS[id].name+'<small>'+ITEMS[id].desc+'</small></div>' +
        '<span class="mkt-price">'+fa(MARKET.buy[id])+' سکه</span>' +
        '<button class="btn ghost" data-buy="'+id+'" '+(S.coins<MARKET.buy[id]?'disabled':'')+'>خرید</button></div>';
    });
    html += rows + '<div class="chip" style="margin-top:10px">💰 سکه: '+fa(S.coins)+'</div>';
  }
  if(mktTab==='caravan'){
    const needTxt = Object.keys(MARKET.caravan.need).map(k=>ITEMS[k].name+' ×'+fa(MARKET.caravan.need[k])).join(' + ');
    const can = hasItems(MARKET.caravan.need);
    html += '<div class="row"><span class="r-ico">🧺</span>' +
      '<div class="r-main"><b>سفارش کاروان هفتگی</b><small>'+needTxt+' → '+fa(MARKET.caravan.pay)+' سکه'+(skillLv('trading')>=2?'+۱ مزیت بازرگانی':'')+'</small></div>' +
      '<button class="btn ghost" id="btn-caravan" '+(!can?'disabled':'')+'>فروش</button></div>' +
      '<p style="font-size:.7rem;color:var(--muted)">سفارش کاروان تکرارشدنی است — نرخ پایهٔ ثابت؛ مدل قیمت‌گذاری نهایی = A4 باز.</p>';
  }
  b.innerHTML = html;
  b.querySelectorAll('[data-tab]').forEach(el=>el.addEventListener('click', ()=>{
    mktTab = el.dataset.tab; Sfx.click(); renderMarket();
  }));
  b.querySelectorAll('[data-sell]').forEach(el=>el.addEventListener('click', ()=>{
    if(marketSell(el.dataset.sell, 1)){ renderMarket(); renderHUD(); }
  }));
  b.querySelectorAll('[data-buy]').forEach(el=>el.addEventListener('click', ()=>{
    if(marketBuy(el.dataset.buy)){ renderMarket(); renderHUD(); }
  }));
  const cv = b.querySelector('#btn-caravan');
  if(cv) cv.addEventListener('click', ()=>{
    if(caravanSale()){ renderMarket(); renderHUD(); }
  });
}

/* ---------- مزرعه ---------- */
function renderFarm(){
  const b=$('#farm-body');
  const st = farmState();
  let html='';
  if(st==='empty'){
    const have = hasItem(FARM_CFG.seed,1);
    html = '<div class="row"><span class="r-ico">🌱</span>' +
      '<div class="r-main"><b>کاشت دانه</b><small>۱ دانهٔ گندم → رشد قطعی در '+FARM_CFG.growLabel+' → برداشت '+fa(FARM_CFG.cropN)+' خوشه</small></div></div>' +
      '<button class="btn block" id="btn-plant" '+(!have?'disabled':'')+'>'+(have?'کاشت دانه':'دانه نداری — از بازار بخر')+'</button>';
  }
  if(st==='growing'){
    const left = Math.max(0, FARM_CFG.growMs - (Date.now()-S.farm.at));
    html = '<div class="row"><span class="r-ico">🌿</span>' +
      '<div class="r-main"><b>در حال رشد</b><small>زمان باقی‌مانده: حدود '+fa(Math.ceil(left/1000))+' ثانیه — رشد قطعی است، بدون شانس</small></div></div>' +
      '<p style="font-size:.7rem;color:var(--muted)">می‌توانی بگردی و بعد برگردی؛ رشد در ذخیره ادامه دارد.</p>';
  }
  if(st==='ready'){
    html = '<div class="row"><span class="r-ico">🌾</span>' +
      '<div class="r-main"><b>آمادهٔ برداشت</b><small>خوشهٔ طلایی ×'+fa(FARM_CFG.cropN+(skillLv('farming')>=2?1:0))+'</small></div></div>' +
      '<button class="btn block" id="btn-harvest">برداشت</button>';
  }
  html += '<p style="font-size:.7rem;color:var(--muted);margin-top:10px">مزرعه = پایان زنجیرهٔ نمونهٔ D16: معدن‌کار ← آهنگر ← نجار ← کشاورز. مزیت کشاورزی سطح ۲: برداشت +۱.</p>';
  b.innerHTML = html;
  const bp = b.querySelector('#btn-plant');
  if(bp) bp.addEventListener('click', ()=>{ if(farmPlant()){ renderFarm(); renderHUD(); } });
  const bh = b.querySelector('#btn-harvest');
  if(bh) bh.addEventListener('click', ()=>{ if(farmHarvest()){ renderFarm(); renderHUD(); } });
}

/* ---------- پازل دروازهٔ مرجانی (حفظ‌شده از نمونهٔ آزموده) ---------- */
let selCoral = null;
function pickCoral(c){
  S.puzzle.picked.push(c.id);
  addItem('marjan', 1);
  toast('🪸 سنگ‌مرجان «'+c.size+'» برداشته شد');
  logEvent('pick_coral',{coral:c.id, size:c.size});
}
function renderPuzzle(){
  const b=$('#puzzle-body');
  if(S.puzzle.solved){
    b.innerHTML = '<div class="empty-state"><span class="es-ico">🌀</span>' +
      'دروازهٔ مرجانی بار دیگر می‌درخشد.<br>نشانِ دریای شیشه‌ای از صندوق کنار دروازه گرفته شد.</div>';
    return;
  }
  const available = S.puzzle.picked.filter(id => !S.puzzle.placed.includes(id));
  const coralInfo = {m1:'درشت', m2:'ریز', m3:'میانه'};
  let peds='';
  RW.pedestals.forEach((pd,i)=>{
    peds += '<button class="pedestal" data-i="'+i+'"><span class="p-size">'+(pd.size==='درشت'?'🪨':pd.size==='میانه'?'🪸':'✨')+'</span>' +
      pd.size + '<br>' + (S.puzzle.placedOrder[i] ? '✓ '+S.puzzle.placedOrder[i] : 'خالی') + '</button>';
  });
  let corals='';
  available.forEach(id=>{
    corals += '<button class="coral-btn'+(selCoral===id?' sel':'')+'" data-c="'+id+'">سنگ‌مرجان '+coralInfo[id]+'</button>';
  });
  b.innerHTML =
    '<p style="font-size:.78rem;color:var(--muted)">سنگ‌های مرجانی را با اندازهٔ درست روی سکوها بگذار — از شرق به غرب: درشت، میانه، ریز. (پازل قطعی — بدون شانس)</p>' +
    '<div class="ped-row">'+peds+'</div>' +
    (corals ? '<div class="coral-row">'+corals+'</div>' :
      '<div class="empty-state"><span class="es-ico">🪸</span>هنوز سنگ‌مرجانی نداری — سه سنگ را از ساحل پیدا کن.<br>راهنما: پیر دریا کنار دریا ایستاده است.</div>');
  b.querySelectorAll('.coral-btn').forEach(el=>{
    el.addEventListener('click', ()=>{ selCoral = el.dataset.c; renderPuzzle(); });
  });
  b.querySelectorAll('.pedestal').forEach(el=>{
    el.addEventListener('click', ()=>{
      const i = +el.dataset.i;
      if(!selCoral){ toast('نخست یک سنگ‌مرجان را انتخاب کن'); return; }
      const wanted = RW.pedestals[i].size;
      const got = coralInfo[selCoral];
      if(got !== wanted){ toast('اندازه نمی‌خورد — این سکو «'+wanted+'» است'); renderPuzzle(); return; }
      S.puzzle.placedOrder[i] = got;
      S.puzzle.placed.push(selCoral);
      takeItems({marjan:1});
      selCoral=null;
      logEvent('place_coral',{pedestal:i, coral:got});
      if(S.puzzle.placed.length===3){
        S.puzzle.solved=true;
        toast('🌀 دروازهٔ مرجانی گشوده شد — صندوقی پدیدار گشت!');
        logEvent('puzzle_solved',{}, 'پاداش در صندوق ثابت است — بدون شانس');
        Sfx.level();
      }
      renderPuzzle();
    });
  });
}
function openChest(){
  if(S.chestOpen) return;
  askConfirm('صندوق دروازه را باز کنم؟ محتوای آن ثابت و مشخص است: بلور شیشه‌ای ×۲ + نشانِ دریای شیشه‌ای ×۱ (بدون هیچ عنصر شانسی).', ()=>{
    S.chestOpen=true;
    addItem('bolur',2); addItem('neshan',1);
    addPlayerXP(5);
    Sfx.discover();
    toast('🎁 بلور شیشه‌ای ×۲ + نشانِ دریای شیشه‌ای ×۱');
    logEvent('reward_chest',{items:{bolur:2, neshan:1}}, 'محتوای ثابت — ممنوعیت خرید شانس‌محور');
    renderHUD();
  });
}

/* ---------- گفت‌وگوها (پیوند با موتور مأموریت) ---------- */
function openDialogue(id){
  const d = buildDialogue(id);
  $('#dlg-title').textContent = d.name;
  const body = $('#dialogue-body');
  body.innerHTML = '<div class="dlg-text">'+d.text+'</div><div class="choices" id="dlg-choices"></div>';
  const ch = $('#dlg-choices');
  d.choices.forEach(c=>{
    const btn=document.createElement('button');
    btn.className='btn ghost'; btn.textContent=c.label;
    if(c.disabled) btn.disabled = true;
    btn.addEventListener('click', ()=>{ Sfx.click(); c.fn(); });
    ch.appendChild(btn);
  });
  openSheet('#sheet-dialogue');
}
function closeD(){ closeSheets(); }
function buildDialogue(id){
  /* مأموریت‌محورها */
  if(id==='nakhoda'){
    const q = QUESTS.q_tools, st = questState('q_tools');
    if(st.done) return { name:'ناخدای بی‌کشتی',
      text:'با آن ابزار، عرشهٔ تازه‌ای ساختم. دروازهٔ جنگل نقره‌ای روی نقشه گشوده است — از نقشه سفر کن. راه جنگل را بلدم.',
      choices:[{label:'بستن', fn:closeD}] };
    if(!st.accepted) return { name:'ناخدای بی‌کشتی',
      text:'کشتم را به دریای شیشه‌ای باختم و دستانم دیگر توانِ طناب ندارند. یک ابزار سنگی بساز — دو سنگ و یک چوب، در کارگاه دهکده — تا دوباره دست به کار شوم.',
      choices:[
        {label:'پذیرش مأموریت: «ابزار برای ناخدا»', fn:()=>{ questAccept('q_tools'); closeD(); }},
        {label:'بعداً می‌آیم', fn:closeD},
      ]};
    if(questCanDeliver('q_tools')) return { name:'ناخدای بی‌کشتی',
      text:'آه… آن سوسوی آبی! ابزار سنگی است، درست همان‌طور که گفتم. تحویلش بده.',
      choices:[
        {label:'تحویل ابزار سنگی ('+q.reward.text+')', fn:()=>{ questDeliver('q_tools'); renderHUD(); closeD(); }},
        {label:'هنوز نه', fn:closeD},
      ]};
    const step = q.steps[st.step];
    return { name:'ناخدای بی‌کشتی', text:'منتظرم: '+ (step?step.text:'') ,
      choices:[{label:'در مسیرم', fn:closeD}] };
  }
  if(id==='dokhtar'){
    const st = questState('q_lanterns');
    if(st.done) return { name:'دختر فانوس‌بان',
      text:'جامهٔ فانوس‌بان بر تن تو می‌درخشد! حالا شب‌های ساحل هم برایت روشن است. جامه را در کارنامه می‌توانی بپوشی.',
      choices:[{label:'ممنون', fn:closeD}] };
    if(!st.accepted) return { name:'دختر فانوس‌بان',
      text:'کنار آتش بشین! اما سه فانوس پدرم در ساحل گم شده و تاریکی آن‌ها را بلعیده. پیدایشان کن — پاداشش جامهٔ فانوس‌بان است.',
      choices:[
        {label:'پذیرش مأموریت: «فانوس‌های گمشده»', fn:()=>{ questAccept('q_lanterns'); closeD(); }},
        {label:'بعداً', fn:closeD},
      ]};
    const st2 = questState('q_lanterns');
    const found = st2.prog.disc ? st2.prog.disc.length : 0;
    return { name:'دختر فانوس‌بان',
      text:'فانوس‌ها می‌درخشند: یکی در ساحل غربی، یکی در خاور دور، یکی ساحل شمالی. تا حالا '+fa(found)+' از ۳ را یافتی — فقط نزدیکشان شو.',
      choices:[{label:'در جست‌وجو', fn:closeD}] };
  }
  if(id==='mehtar'){
    return { name:'مهتر ساحل',
      text:'به دهکدهٔ ساحل شیشه‌ای خوش آمدی، مسافر. کاروانِ من هر هفته سنگ می‌خرد و چادرِ بازار همیشه باز است: فروش، خرید دانه، سفارش کاروان. نرخ‌ها آزمایشی‌اند تا مدل قیمت‌گذاری نهایی (A4) تصویب شود.',
      choices:[
        {label:'باز کن: بازار محلی ⛺', fn:()=>{ closeSheets(); mktTab='sell'; renderMarket(); openSheet('#sheet-market'); }},
        {label:'چه خبر از جهان؟', fn:()=>{ openDialogue('mehtar2'); }},
        {label:'بستن', fn:closeD},
      ]};
  }
  if(id==='mehtar2'){
    return { name:'مهتر ساحل',
      text:'می‌گویند پیمانِ دروازهٔ هفتاد و هفتم روزی همهٔ سرزمین‌ها را به هم دوخت. اما پیر دریا شب‌ها زمزمه می‌کند که «صلح» تنها نیمی از حقیقت بود… برای پیمانِ هفتاد و هفتم امیدوار باش، مسافر.',
      choices:[{label:'فهمیدم', fn:closeD}] };
  }
  if(id==='pir'){
    return { name:'پیر دریا',
      text:'سه سنگ‌مرجانِ دروازه را می‌شناسی؟ روزی که پیمان شکست، از جایشان کنده شدند. آن‌ها را از ساحل پیدا کن و بر سکوها بگذار — به ترتیبی که طبیعت می‌گوید: از سمت شرقِ دروازه، نخست «درشت»، سپس «میانه»، آن‌گاه «ریز».',
      choices:[
        {label:'کجای ساحل؟', fn:()=>{ openDialogue('pir2'); }},
        {label:'بستن', fn:closeD},
      ]};
  }
  if(id==='pir2'){
    return { name:'پیر دریا',
      text:'یکی در خاورِ ساحل نزدیک دریا، یکی در جنوبِ دورِ دهکده، و یکی در گوشهٔ جنوب‌خاوری. چشم‌هایت را باز کن — می‌درخشند.',
      choices:[{label:'سپاس', fn:closeD}] };
  }
  if(id==='banafsheh'){
    const q = QUESTS.q_gate2, st = questState('q_gate2');
    if(st.done) return { name:'بانفشهٔ نگهبان',
      text:'سازوکار دروازهٔ نقره‌ای دوباره نفس می‌کشد. مسیر سرزمین سوم «کوه بلورین» روی نقشه گشوده شد — محتوایش را سازندگان جهان بعداً می‌آورند؛ من صادقم، نه قصه‌گو.',
      choices:[{label:'بستن', fn:closeD}] };
    if(!st.accepted) return { name:'بانفشهٔ نگهبان',
      text:'به جنگل نقره‌ای خوش آمدی! سازوکار دروازهٔ شمالی از کار افتاده و من تنهایم. شش چوب نقره‌ای از درخت‌های جنگل و یک ابزار سنگی می‌خواهم.',
      choices:[
        {label:'پذیرش مأموریت: «درهای جنگل نقره‌ای»', fn:()=>{ questAccept('q_gate2'); closeD(); }},
        {label:'بعداً می‌آیم', fn:closeD},
      ]};
    if(questCanDeliver('q_gate2')) return { name:'بانفشهٔ نگهبان',
      text:'همه‌چیز آماده است! بده تا دروازه را تعمیر کنم.',
      choices:[
        {label:'تحویل چوب‌ها و ابزار ('+q.reward.text+')', fn:()=>{ questDeliver('q_gate2'); renderHUD(); closeD(); }},
        {label:'صبر کن', fn:closeD},
      ]};
    const step = q.steps[st.step];
    return { name:'بانفشهٔ نگهبان', text:'هنوز کامل نیست: '+(step?step.text:''),
      choices:[{label:'مشغولم', fn:closeD}] };
  }
  if(id==='dara'){
    return { name:'دارا هیزم‌شکن',
      text:'درخت‌های این جنگل «چوب نقره‌ای» می‌دهند — سخت‌تر و گران‌بهاتر از چوب ساحل. اگر تبر نداری، در کارگاهِ دهکدهٔ خودتان بساز و بیا. آتشگاه ما شب‌ها گرم است؛ بنشین و قصه‌های بلوط کهن را بشنو.',
      choices:[{label:'سپاس', fn:closeD}] };
  }
  return { name:'ساکن', text:'…', choices:[{label:'بستن', fn:closeD}] };
}

/* ---------- دربارهٔ بازی (شفافیت کامل) ---------- */
function renderAbout(){
  const b=$('#about-body');
  b.innerHTML =
    '<div class="notes-sec"><h3>۱) معماری — انتخاب فعلی و گزینه‌ها</h3>' +
    '<ul><li><b>الف (فعلی):</b> ساختار ماژولار در <code>src/</code> + ساخت تک‌فایل <code>game/index.html</code> — آفلاین، بدون کتابخانه، Canvas ایزومتریک، localStorage</li>' +
    '<li><b>ب:</b> موتور سه‌بعدی CDN — نیازمند شبکه، سنگین برای گوشی معمولی</li>' +
    '<li><b>ج:</b> سرور + پایگاه داده — مسیر v2 جمعی؛ پس از تصمیم A3 و بودجه</li></ul>' +
    '<p>انتخاب قطعی موتور/سرور/انتشار = «نیازمند تصویب کارفرما».</p></div>' +
    '<div class="notes-sec"><h3>۲) دارایی‌های موقت (صادقانه)</h3>' +
    '<ul><li>شخصیت‌ها و ساختمان‌ها: هندسی — جای مدل نهایی را می‌گیرند؛ ادعای دارایی نهایی نمی‌شود</li>' +
    '<li>آیکون‌ها: ایموجی موقت · صدا: سنتز WebAudio (بدون فایل) · بدون بافت</li></ul></div>' +
    '<div class="notes-sec"><h3>۳) تصمیم‌های قطعی رعایت‌شده</h3>' +
    '<ul><li>D2: ۱۳ دروازه = بخش ابتدایی جهان ۷۷ سرزمین</li>' +
    '<li>D4: مکانیک M4 «ضربه به‌موقع» از کتابخانهٔ ۸گانه</li>' +
    '<li>D5: ساختار سکونتگاه روستا (سطح ۱/۵)</li>' +
    '<li>D7: یک رویداد، یک پاداش — شناسهٔ یکتا + گارد</li>' +
    '<li>D8: بازار محلی ≠ بازار عمومی (عمومی هنوز ساخته نشده)</li>' +
    '<li>D12: همهٔ اعداد آزمایشی</li>' +
    '<li>D16: زنجیرهٔ نمونه معدن‌کار←آهنگر←نجار←کشاورز (با مزرعه و بازار کامل شد)</li>' +
    '<li>بدون فروش توکن، قمار، خرید شانس‌محور · دارایی شخصی مصادره نمی‌شود</li></ul></div>' +
    '<div class="notes-sec"><h3>۴) موضوعات باز — پیش‌فرض‌های موقت این نسخه</h3>' +
    '<ul><li>A1 نام دروازه‌ها → نام‌های کد v1</li>' +
    '<li>A3 معماری دو نسخه‌ای → این نسخه آفلاین مستقل</li>' +
    '<li>A4 مدل قیمت‌گذاری → نرخ پایهٔ ثابت بدون قیمت‌گذاری بازیکن</li>' +
    '<li>A5 نام توکن → «سکه» پیش‌نام</li>' +
    '<li>A7 فهرست ۱۲ حرفه → ۵ مهارت نمونه فعال (موتور داده‌محور)</li>' +
    '<li>A10 اعداد → آزمایشی بدون شبیه‌سازی</li></ul>' +
    '<p><b style="color:#ffd86f">همهٔ این‌ها نیازمند تصویب کارفرماست.</b></p></div>' +
    '<div class="notes-sec"><h3>۵) اجتماعی و چندنفره — شفاف</h3>' +
    '<p>این نسخه آفلاین است: ساکنانِ گرد آتشگاه NPC هستند، نه بازیکن واقعی. چندنفرهٔ واقعی نیازمند Backend (D13/A3) است؛ رابط شبکه‌ای آماده شده ولی هیچ قابلیت آنلاین جعل نشده است.</p></div>' +
    '<div class="notes-sec"><h3>۶) وضعیت فنی</h3>' +
    '<ul><li>FPS واقعی: <span id="fps-live">—</span></li>' +
    '<li>کلید ذخیره: '+SAVE_KEY+' (جدا از v1 و نمونه)</li>' +
    '<li>دفترکل: ضمیمه‌تنها + زنجیرهٔ هش، ۴۰۰ رویداد آخر</li>' +
    '<li>نسخه: '+GAME_VERSION+'</li></ul>' +
    '<button class="btn ghost block" id="btn-reset-save" style="margin-top:10px">پاک‌کردن ذخیره و شروع از نو</button></div>';
  $('#fps-live').textContent = FPS ? fa(FPS)+' فریم بر ثانیه' : '—';
  $('#btn-reset-save').addEventListener('click', ()=>{
    askConfirm('همهٔ پیشرفت این بازی پاک شود؟ (روی v1 و نمونهٔ اولیه اثری ندارد)', ()=>{
      localStorage.removeItem(SAVE_KEY);
      location.reload();
    });
  });
}

/* ---------- تنظیمات ---------- */
function renderSettings(){
  const b=$('#settings-body');
  b.innerHTML =
    '<div class="row"><span class="r-ico">🔊</span><div class="r-main"><b>صدا</b><small>افکت‌های سنتزشده — بدون فایل صوتی</small></div>' +
    '<button class="btn ghost" id="btn-sound">'+(S.settings.sound?'روشن':'خاموش')+'</button></div>' +
    '<div class="row"><span class="r-ico">📳</span><div class="r-main"><b>لرزش</b><small>بازخورد لمسی اندروید (در دستگاه پشتیبان)</small></div>' +
    '<button class="btn ghost" id="btn-vibro">'+(S.settings.vibro?'روشن':'خاموش')+'</button></div>' +
    '<div class="row"><span class="r-ico">🌙</span><div class="r-main"><b>شب و روز</b><small>چرخهٔ خودکار ~۴ دقیقه‌ای [آزمایشی]</small></div><span class="tag">فعال</span></div>' +
    '<p style="font-size:.7rem;color:var(--muted)">تنظیمات در ذخیره می‌ماند. گزینهٔ «دارایی گرافیکی دانلودی» عمداً وجود ندارد: بازی باید آفلاین کامل بماند.</p>';
  $('#btn-sound').addEventListener('click', ()=>{ S.settings.sound=!S.settings.sound; save(); if(S.settings.sound) Sfx.click(); renderSettings(); });
  $('#btn-vibro').addEventListener('click', ()=>{ S.settings.vibro=!S.settings.vibro; save(); Vibe(30); renderSettings(); });
}

/* ---------- ساخت شخصیت ---------- */
let creSel = 0;
function initCreation(){
  const wrap = $('#cre-banners');
  wrap.innerHTML = BANNERS.map((b,i)=>
    '<button class="banner-opt'+(i===creSel?' sel':'')+'" data-b="'+i+'" style="background:linear-gradient(160deg,'+b.c+','+b.h+')"></button>').join('');
  wrap.querySelectorAll('[data-b]').forEach(el=>el.addEventListener('click', ()=>{
    creSel = +el.dataset.b;
    wrap.querySelectorAll('.banner-opt').forEach(x=>x.classList.remove('sel'));
    el.classList.add('sel');
    Sfx.click();
  }));
  $('#creation').classList.add('show');
  $('#btn-cre-start').onclick = ()=>{
    const name = ($('#cre-name').value||'').trim() || 'مسافر';
    S.pid = uuid();
    S.name = name.slice(0,18);
    S.banner = creSel;
    S.created = Date.now();
    saveNow();
    logEvent('player_created', {banner:S.banner}, 'هویت بازیکن ساخته شد — شناسهٔ یکتا (نمایش در کارنامه)');
    $('#creation').classList.remove('show');
    toast('سلام ' + S.name + '! سفرت از دریای شیشه‌ای آغاز می‌شود');
    Sfx.level();
    renderGates(); show('screen-map');
  };
}

/* ---------- دکمه‌های HUD ---------- */
$('#btn-inv').addEventListener('click', ()=>{ Sfx.click(); renderInv(); openSheet('#sheet-inv'); });
$('#btn-missions').addEventListener('click', ()=>{ Sfx.click(); renderMissions(); openSheet('#sheet-missions'); });
$('#btn-profile').addEventListener('click', ()=>{ Sfx.click(); syncEquip(); renderProfile(); openSheet('#sheet-profile'); });
$('#btn-status').addEventListener('click', ()=>{ Sfx.click(); renderStatus(); openSheet('#sheet-status'); });
$('#btn-about').addEventListener('click', ()=>{ Sfx.click(); renderAbout(); openSheet('#sheet-about'); });
$('#btn-settings').addEventListener('click', ()=>{ Sfx.click(); renderSettings(); openSheet('#sheet-settings'); });
