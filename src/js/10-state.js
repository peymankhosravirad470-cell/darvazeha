/* ═══════════ وضعیت بازی، ذخیره‌سازی و دفترکل ═══════════ */
const SAVE_KEY = 'hs77_darvazeha_v1';   // کلید مستقل از v1 و نمونهٔ اولیه
const GAME_VERSION = '۰٫۳';

function defaultState(){
  return {
    v:2,
    pid:null,                 // شناسهٔ یکتای بازیکن — هنگام ساخت شخصیت
    name:'', banner:0, created:0,
    coins:0, xp:0,
    skills:{},                // {mining:{xp}, ...} — سطح از SKILL_XP
    inv:{}, chest:{},
    equip:{mine:null, wood:null, outfit:'j_mosafar'},
    outfits:['j_mosafar'],
    quests:{},                // id -> {accepted, step, done, prog:{}}
    puzzle:{picked:[], placed:[], placedOrder:[], solved:false},
    chestOpen:false,
    realm:1,
    discovered:[],            // POIهای کشف‌شده (همهٔ سرزمین‌ها، با پیشوند شناسه)
    farm:{stage:'empty', at:0},
    settings:{sound:true, vibro:true},
    stats:{mined:0, chopped:0, crafted:0, delivered:0, sold:0, harvested:0, mineHits:0, chopHits:0},
    ledger:[],                // ضمیمه‌تنها + زنجیرهٔ هش
    seq:0,
  };
}
let S = defaultState();

(function loadState(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(raw){
      const p = JSON.parse(raw);
      if(p && p.v === 2){
        const d = defaultState();
        S = Object.assign(d, p);
        S.skills = Object.assign({}, p.skills||{});
        S.settings = Object.assign({sound:true, vibro:true}, p.settings||{});
      }
    }
  }catch(e){ S = defaultState(); }
})();

let saveTimer = null;
function save(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=>{ try{ localStorage.setItem(SAVE_KEY, JSON.stringify(S)); }catch(e){} }, 250);
}
function saveNow(){ try{ localStorage.setItem(SAVE_KEY, JSON.stringify(S)); }catch(e){} }
addEventListener('pagehide', saveNow);
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState==='hidden') saveNow(); });

/* ---------- دفترکل ضمیمه‌تنها + زنجیرهٔ دست‌نخوردگی (مرحله ۷) ----------
   هر رویداد: شناسهٔ یکتا + هشِ پیوسته به رویداد پیشین.
   هر دستکاری در فایل ذخیره با verifyLedger() آشکار می‌شود.
   نسخهٔ نهایی (D13): همین الگو سمت سرور اجرا می‌شود. */
function logEvent(type, delta, note){
  S.seq += 1;
  const prev = S.ledger.length ? S.ledger[S.ledger.length-1].h : 'genesis';
  const id = 'evt_' + S.seq + '_' + hstr(uuid()).slice(0,8);
  const e = {seq:S.seq, id, t:Date.now(), type, delta, note:note||'', prev};
  e.h = hstr(prev + '|' + e.seq + '|' + e.id + '|' + JSON.stringify(e.delta));
  S.ledger.push(e);
  if(S.ledger.length > 400) S.ledger.splice(0, S.ledger.length - 400);
  save();
}
function verifyLedger(){
  let prev = 'genesis';
  for(const e of S.ledger){
    const want = hstr(prev + '|' + e.seq + '|' + e.id + '|' + JSON.stringify(e.delta));
    if(e.prev !== prev || e.h !== want) return {ok:false, brokenAt:e.seq};
    prev = e.h;
  }
  return {ok:true, n:S.ledger.length};
}

/* ---------- سطح‌ها و مهارت‌ها ---------- */
function levelOf(xp, arr){ let l=1; for(let i=1;i<arr.length;i++) if(xp>=arr[i]) l=i+1; return l; }
function addPlayerXP(n){
  const before = levelOf(S.xp, XP_LV);
  S.xp += n;
  const after = levelOf(S.xp, XP_LV);
  if(after>before){ toast('⭐ سطح مسافر: ' + fa(after)); logEvent('player_level',{level:after}); Sfx.level(); Vibe(30); }
  save();
}
function skillLv(id){ return S.skills[id] ? levelOf(S.skills[id].xp, SKILL_XP) : 1; }
function addSkillXP(id, n){
  if(!SKILLS[id]) return;
  if(!S.skills[id]) S.skills[id] = {xp:0, reg:true};
  const before = levelOf(S.skills[id].xp, SKILL_XP);
  S.skills[id].xp += n;
  const after = levelOf(S.skills[id].xp, SKILL_XP);
  if(after>before){ toast(SKILLS[id].ico + ' مهارت ' + SKILLS[id].name + ': سطح ' + fa(after)); logEvent('skill_level',{skill:id, level:after}); Sfx.level(); }
  save();
}

/* ---------- موجودی ---------- */
function addItem(id, n){ S.inv[id] = (S.inv[id]||0) + n; if(S.inv[id]<=0) delete S.inv[id]; save(); }
function hasItem(id, n){ return (S.inv[id]||0) >= (n||1); }
function hasItems(obj){ for(const k in obj){ if(!hasItem(k, obj[k])) return false; } return true; }
function takeItems(obj){
  if(!hasItems(obj)) return false;
  for(const k in obj){ S.inv[k] -= obj[k]; if(S.inv[k]<=0) delete S.inv[k]; }
  save(); return true;
}
/* اگر کالای تجهیزشده فروخته/مصرف شد، جایگاه تجهیز خالی می‌شود (سازگاری واقعی) */
function syncEquip(){
  ['mine','wood'].forEach(slot=>{
    const g = Object.values(GEAR).find(g=>g.slot===slot);
    if(S.equip[slot] && !hasItem(S.equip[slot], 1)) S.equip[slot] = null;
    if(!S.equip[slot] && g && hasItem(g.item,1)) S.equip[slot] = g.item;
  });
  if(S.equip.outfit && !S.outfits.includes(S.equip.outfit)) S.equip.outfit = 'j_mosafar';
  save();
}
function countInv(){ let c=0; for(const k in S.inv) c+=S.inv[k]; return c; }
