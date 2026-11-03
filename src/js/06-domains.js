/* ═══════════ هفت قلمرو و ۷۷ سرزمین — دادهٔ ساختاریافته (مرحله ۱) ═══════════
   قلمرو = DOMINION (۷ عدد) · سرزمین = LAND (۱۱ سرزمین در هر قلمرو = ۷۷)

   مرز این ماژول: فقط داده و منطق قفل/آزاد. هیچ دست‌زدنی به اقتصاد، کیف پول،
   توکن، دفترکل، وضعیت بازیکن (S) یا ذخیره‌سازی انجام نمی‌شود.

   قواعد محتوایی (طبق دستور مالک محصول):
   - نام فارسی/انگلیسی قلمروها و شعارها عیناً از تصاویر مرجع رسمی خوانده شده‌اند.
   - نام نهایی ۷۷ سرزمین عمداً خالی است (name:null) — هیچ نامی خودسرانه ساخته
     نشده؛ مرحله‌های بعدی نام‌ها را اعلام می‌کنند و همین‌جا قرار می‌گیرند.
   - سه سرزمینِ قابل‌بازیِ رسمیِ فعلی (دریای شیشه‌ای، جنگل نقره‌ای، کوه بلورین)
     به‌عنوان سرزمین‌های ۱ تا ۳ قلمرو تارگون معرفی شده‌اند — محتوای موجود بازی،
     نه نام جدید.
   - تارماد هنوز تصویر مرجع رسمی ندارد؛ img:null یعنی «بدون تصویر» — هیچ پرچم یا
     نشانی جایگزین ساخته نمی‌شود.
*/

/* ---------- وضعیت قفل/آزاد قلمروها — تنها نقطهٔ مدیریت ----------
   مراحل بعد فقط همین جدول را تغییر می‌دهند (مثلاً open:true پس از آزادسازی
   رسمی یا افزودن شرط unlockFuture). */
const DOMINION_UNLOCK = {
  targon:   { open:true,  note:'' },
  dezhmaar: { open:true,  note:'' },
  argad:    { open:false, note:'به‌زودی آزاد می‌شود' },
  mardak:   { open:false, note:'به‌زودی آزاد می‌شود' },
  vergad:   { open:false, note:'به‌زودی آزاد می‌شود' },
  zardak:   { open:false, note:'به‌زودی آزاد می‌شود' },
  tarmad:   { open:false, note:'به‌زودی آزاد می‌شود' },
};

/* ---------- هفت قلمرو — ترتیب نمایش: فهرست رسمی مالک محصول ----------
   tagline عیناً متن پلاک داخل تصویر مرجع همان قلمرو است. */
const DOMINIONS = [
  { id:'targon',   fa:'تارگون', en:'TARGON',
    img:'assets/domains/targon.jpg',   flag:'assets/domains/flags/targon.jpg',
    tagline:'قلمرو اژدهایان، جنگ و تاج‌وتخت',  c1:'#d4452c', c2:'#ffd86f' },
  { id:'dezhmaar', fa:'دژمار', en:'DEZHMAAR',
    img:'assets/domains/dezhmaar.jpg', flag:'assets/domains/flags/dezhmaar.jpg',
    tagline:'قلمرو ممنوعه و رازهای کهن',       c1:'#a02c1e', c2:'#5b120b' },
  { id:'argad',    fa:'آرگاد', en:'ARGAD',
    img:'assets/domains/argad.jpg',    flag:'assets/domains/flags/argad.jpg',
    tagline:'قلمرو سنگ و آهن',                 c1:'#2f6db4', c2:'#dfe8f2' },
  { id:'mardak',   fa:'مرداک', en:'MARDAK',
    img:'assets/domains/mardak.jpg',   flag:'assets/domains/flags/mardak.jpg',
    tagline:'قلمرو جنگل‌های کهن',              c1:'#1f8a4c', c2:'#d9f2e0' },
  { id:'vergad',   fa:'ورگاد', en:'VERGAD',
    img:'assets/domains/vergad.jpg',   flag:'assets/domains/flags/vergad.jpg',
    tagline:'قلمرو دژهای تسخیرناپذیر',         c1:'#6a3fa8', c2:'#e6dcf7' },
  { id:'zardak',   fa:'زرداک', en:'ZARDAK',
    img:'assets/domains/zardak.jpg',   flag:'assets/domains/flags/zardak.jpg',
    tagline:'قلمرو امپراتوری‌های کهن',         c1:'#d3a72c', c2:'#f7e7b0' },
  { id:'tarmad',   fa:'تارماد', en:'TARMAD',
    img:null,                          flag:null,
    tagline:'',                                c1:'#37474f', c2:'#90a4ae' },
];

const DOMINION_LANDS_COUNT = 11;   // هر قلمرو دقیقاً ۱۱ سرزمین دارد

/* ---------- سرزمین‌های قابل‌بازی رسمی فعلی داخل تارگون ----------
   gate = شناسهٔ همان سرزمین در نقشهٔ ۱۳ دروازه‌ای فعلی (enterRealm(gate)). */
const DOMINION_PLAYABLE_LANDS = {
  targon: [
    { slot:1, name:'دریای شیشه‌ای', gate:1 },
    { slot:2, name:'جنگل نقره‌ای',  gate:2 },
    { slot:3, name:'کوه بلورین',    gate:3 },
  ],
};

function getDominion(id){
  return DOMINIONS.find(d => d.id === id) || null;
}
function isDominionUnlocked(id){
  const u = DOMINION_UNLOCK[id];
  return !!(u && u.open);
}
function dominionLockNote(id){
  const u = DOMINION_UNLOCK[id];
  return (u && u.note) || 'به‌زودی آزاد می‌شود';
}

/* فهرست ۱۱ سرزمین یک قلمرو — خروجی پایدار و یکسان برای هر قلمرو:
   {slot, name, playable, gate, locked} */
function dominionLands(id){
  const playable = {};
  (DOMINION_PLAYABLE_LANDS[id] || []).forEach(l => { playable[l.slot] = l; });
  const lands = [];
  for(let n=1; n<=DOMINION_LANDS_COUNT; n++){
    const p = playable[n];
    lands.push({
      slot:n,
      name: p ? p.name : null,          // نام‌های رسمی بعداً همین‌جا قرار می‌گیرند
      playable: !!p,
      gate: p ? p.gate : null,
      locked: !p,
    });
  }
  return lands;
}

/* شمارندهٔ کلی برای چیپ وضعیت منو */
function dominionStatusSummary(){
  const open = DOMINIONS.filter(d => isDominionUnlocked(d.id)).length;
  return { open, total: DOMINIONS.length };
}
