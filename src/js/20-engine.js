/* ═══════════ موتورهای بازی: مأموریت، اقتصاد، مزرعه، صدا، لرزش ═══════════ */

/* ---------- صدا (سنتز WebAudio — بدون فایل دارایی) ---------- */
const Sfx = {
  ctx:null,
  ensure(){ if(!S.settings.sound) return null;
    try{ if(!this.ctx) this.ctx = new (window.AudioContext||window.webkitAudioContext)(); if(this.ctx.state==='suspended') this.ctx.resume(); return this.ctx; }
    catch(e){ return null; } },
  tone(f, dur, type, vol, when){
    const c = this.ensure(); if(!c) return;
    try{
      const o = c.createOscillator(), g = c.createGain();
      o.type = type||'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(vol||0.08, c.currentTime + (when||0));
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + (when||0) + dur);
      o.connect(g); g.connect(c.destination);
      o.start(c.currentTime + (when||0)); o.stop(c.currentTime + (when||0) + dur + 0.02);
    }catch(e){}
  },
  hit(){ this.tone(150, 0.09, 'square', 0.07); },
  coin(){ this.tone(880, 0.08, 'sine', 0.06); this.tone(1320, 0.1, 'sine', 0.05, 0.07); },
  level(){ [523,659,784].forEach((f,i)=>this.tone(f, 0.14, 'triangle', 0.06, i*0.09)); },
  discover(){ this.tone(660, 0.12, 'sine', 0.05); this.tone(990, 0.14, 'sine', 0.04, 0.1); },
  click(){ this.tone(420, 0.04, 'sine', 0.03); },
};
function Vibe(ms){ try{ if(S.settings.vibro && navigator.vibrate) navigator.vibrate(ms); }catch(e){} }

/* ---------- اقتصاد: بازار محلی (سند ۰۵) — نرخ پایهٔ ثابت [آزمایشی] ---------- */
function sellPrice(id){
  const base = MARKET.sell[id]; if(!base) return 0;
  return base + (skillLv('trading')>=2 ? 1 : 0);
}
function marketSell(id, n){
  const price = sellPrice(id); if(!price || !hasItem(id, n)) return false;
  takeItems({[id]:n});
  const gain = price * n;
  S.coins += gain; S.stats.sold += n;
  addSkillXP('trading', 1);
  Sfx.coin(); Vibe(15);
  toast('💰 ' + fa(gain) + ' سکه از فروش ' + ITEMS[id].name);
  logEvent('sale_market', {consume:{[id]:n}, tokens:{coins:gain}, unit:price},
    'بازار محلی — نرخ پایهٔ ثابت + مزیت مهارت (A4 باز، اعداد آزمایشی)');
  return true;
}
function marketBuy(id){
  const price = MARKET.buy[id]; if(!price) return false;
  if(S.coins < price){ toast('سکه کافی نداری'); return false; }
  S.coins -= price; addItem(id, 1);
  Sfx.coin();
  toast('🛒 ' + ITEMS[id].name + ' خریدی (-' + fa(price) + ' سکه)');
  logEvent('buy_market', {produce:{[id]:1}, tokens:{coins:-price}, unit:price},
    'خرید از بازار محلی — نرخ پایهٔ ثابت [آزمایشی]');
  return true;
}
function caravanSale(){
  if(!hasItems(MARKET.caravan.need)){ toast('برای سفارش کاروان ۳ سنگ لازم است'); return false; }
  takeItems(MARKET.caravan.need);
  const pay = MARKET.caravan.pay + (skillLv('trading')>=2 ? 1 : 0);
  S.coins += pay; S.stats.sold += 3;
  addSkillXP('trading', 1);
  Sfx.coin(); Vibe(15);
  toast('💰 ' + fa(pay) + ' سکه از کاروان');
  logEvent('sale_caravan', {consume:MARKET.caravan.need, tokens:{coins:pay}},
    'سفارش کاروان — نرخ پایهٔ ثابت (A4 باز) [آزمایشی]');
  return true;
}

/* ---------- مزرعه — رشد قطعی زمان‌محور، بدون شانس ---------- */
function farmState(){
  if(S.farm.stage==='growing' && Date.now() - S.farm.at >= FARM_CFG.growMs) return 'ready';
  return S.farm.stage;
}
function farmPlant(){
  if(farmState()!=='empty'){ return false; }
  if(!hasItem(FARM_CFG.seed,1)){ toast('دانه نداری — از بازار محلی بخر'); return false; }
  takeItems({[FARM_CFG.seed]:1});
  S.farm = {stage:'growing', at:Date.now()};
  toast('🌱 دانه کاشته شد — رشد در ' + FARM_CFG.growLabel);
  logEvent('plant', {seed:FARM_CFG.seed}, 'مزرعهٔ دهکده — رشد قطعی زمان‌محور');
  return true;
}
function farmHarvest(){
  if(farmState()!=='ready') return false;
  const n = FARM_CFG.cropN + (skillLv('farming')>=2 ? 1 : 0);
  addItem(FARM_CFG.crop, n);
  S.farm = {stage:'empty', at:0};
  S.stats.harvested += n;
  addSkillXP('farming', 3); addPlayerXP(2);
  Sfx.discover(); Vibe(20);
  toast('🌾 ' + ITEMS[FARM_CFG.crop].name + ' ×' + fa(n));
  logEvent('harvest', {items:{[FARM_CFG.crop]:n}}, 'برداشت مزرعه — مزیت مهارت کشاورزی اعمال شد');
  return true;
}

/* ---------- مینی‌گیم M4: پاداش برداشت — مزیت‌های قطعی ---------- */
function mineReward(node){
  S.stats.mined += 1; S.stats.mineHits += 1;
  let n = 1;
  if(S.equip.mine && S.stats.mineHits % 2 === 0) n += 1;
  const lv = skillLv('mining');
  if(lv>=3 && S.stats.mineHits % 2 === 0) n += 1;
  else if(lv>=2 && S.stats.mineHits % 3 === 0) n += 1;
  addItem('sang', n);
  addSkillXP('mining', 2); addPlayerXP(1);
  toast('🪨 سنگ صخره‌ای ×' + fa(n));
  logEvent('mine', {items:{sang:n}, realm:S.realm}, 'برداشت با M4 — مزیت تجهیز/مهارت اعمال شد [آزمایشی]');
}
function chopReward(node){
  S.stats.chopped += 1; S.stats.chopHits += 1;
  const item = S.realm===2 ? 'choobN' : 'choob';
  let n = 1;
  if(S.equip.wood && S.stats.chopHits % 2 === 0) n += 1;
  const lv = skillLv('woodcutting');
  if(lv>=3 && S.stats.chopHits % 2 === 0) n += 1;
  else if(lv>=2 && S.stats.chopHits % 3 === 0) n += 1;
  addItem(item, n);
  addSkillXP('woodcutting', 2); addPlayerXP(1);
  toast(ITEMS[item].ico + ' ' + ITEMS[item].name + ' ×' + fa(n));
  logEvent('chop', {items:{[item]:n}, realm:S.realm}, 'برداشت با M4 [آزمایشی]');
}

function crystalReward(node){
  S.stats.mineHits += 1;
  let n = 1;
  if(S.equip.mine && S.stats.mineHits % 2 === 0) n += 1;
  addItem('bolurK', n);
  addSkillXP('mining', 2); addPlayerXP(1);
  toast('💠 بلور کوهستان ×' + fa(n));
  logEvent('mine_crystal', {items:{bolurK:n}, realm:S.realm}, 'برداشت بلور با M4 [آزمایشی]');
}

/* ---------- ساخت ---------- */
function doCraftRecipe(recipeId, onDone){
  const r = RECIPES.find(x=>x.id===recipeId); if(!r) return;
  if(!hasItems(r.need)) return;
  takeItems(r.need);
  let n = r.n;
  if(skillLv('crafting')>=2){ S.counters = S.counters||{}; S.counters.craft = (S.counters.craft||0)+1;
    if(S.counters.craft % 3 === 0) n += 1; }
  addItem(r.out, n);
  S.stats.crafted += 1;
  addSkillXP('crafting', 4); addPlayerXP(2);
  Sfx.discover();
  toast('⚒️ ' + ITEMS[r.out].name + ' ×' + fa(n));
  logEvent('craft', {consume:r.need, produce:{[r.out]:n}}, 'ProductionJob — ضد تولید صوری (سند ۰۴ §۹)');
  questNotify('craft', {item:r.out});
  if(onDone) onDone();
}

/* ---------- موتور مأموریت (مرحله ۵) ---------- */
function questState(id){ if(!S.quests[id]) S.quests[id] = {accepted:false, step:0, done:false, prog:{}}; return S.quests[id]; }
function questAccept(id){
  const q = QUESTS[id], st = questState(id);
  if(st.accepted || st.done) return false;
  st.accepted = true; st.step = 0; st.prog = {};
  toast('📜 مأموریت پذیرفته شد: ' + q.title);
  logEvent('quest_accept', {quest:id}, 'مأموریت ' + q.title);
  questNotify('inv', {});   /* گام‌های «داشتن» با موجودیِ ازقبل آماده فوراً ارزیابی می‌شوند */
  return true;
}
function questCurStep(id){ const st = questState(id); return (!st.done && st.accepted) ? QUESTS[id].steps[st.step] : null; }
function questAdvance(id){
  const st = questState(id), q = QUESTS[id];
  if(!st.accepted || st.done) return;
  st.step += 1;
  if(st.step >= q.steps.length){ questComplete(id); }
  else { toast('قدم بعدی: ' + q.steps[st.step].text); }
  save();
}
function questNotify(kind, data){
  /* هوک رویدادها: inventory change / craft / discover */
  for(const qid in QUESTS){
    const step = questCurStep(qid);
    if(!step) continue;
    if(step.type==='have' && kind==='inv' && hasItem(step.item, step.n)) questAdvance(qid);
    if(step.type==='craft' && kind==='craft' && data && data.item===step.item){
      const st = questState(qid);
      st.prog.craft = (st.prog.craft||0) + 1;
      if(st.prog.craft >= step.n) questAdvance(qid);
    }
    if(step.type==='discover' && kind==='discover' && data && step.pois.includes(data.poi)){
      const st = questState(qid);
      if(!st.prog.disc) st.prog.disc = [];
      if(!st.prog.disc.includes(data.poi)){
        st.prog.disc.push(data.poi);
        if(st.prog.disc.length >= step.n) questAdvance(qid);
      }
    }
  }
}
function questCanDeliver(id){
  const step = questCurStep(id);
  return step && step.type==='deliver' && hasItems(step.items);
}
function questDeliver(id){
  const step = questCurStep(id);
  if(!step || step.type!=='deliver' || !hasItems(step.items)) return false;
  takeItems(step.items);
  questAdvance(id);
  return true;
}
function questComplete(id){
  const st = questState(id), q = QUESTS[id];
  if(st.done) return;                      // گارد پاداش یک‌بار (D7)
  st.done = true;
  const r = q.reward || {};
  if(r.coins){ S.coins += r.coins; Sfx.coin(); }
  if(r.xp) addPlayerXP(r.xp);
  if(r.skill) for(const k in r.skill) addSkillXP(k, r.skill[k]);
  if(r.outfit && !S.outfits.includes(r.outfit)){ S.outfits.push(r.outfit); }
  toast('✅ مأموریت کامل شد: ' + q.title + (r.coins? ' (+'+fa(r.coins)+' سکه)':''));
  logEvent('reward_quest', {quest:id, tokens:{coins:r.coins||0}, xp:r.xp||0, outfit:r.outfit||null},
    'پاداش اصلی رویداد — یک رویداد، یک پاداش (D7)');
  if(q.unlocksRealm){
    const rl = REALMS.find(x=>x.id===q.unlocksRealm);
    if(rl) toast('🗺️ سرزمین ' + fa(rl.id) + ' «' + rl.name + '» روی نقشه گشوده شد');
  }
  save();
}
