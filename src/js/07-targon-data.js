/* ═══════════ جهان تارگون — دادهٔ ۱۱ ناحیه (مرحلهٔ ۲) ═══════════
   نقشهٔ مادر ایزومتریک قابل تعامل تارگون: ۱۱ ناحیه با نام‌های دقیقِ اعلام‌شدهٔ
   مالک محصول. این نام‌ها عیناً و بدون تغییر ثبت شده‌اند و نباید تغییر کنند.

   مرز این ماژول (مطابق دستور کارفرما):
   - فقط دادهٔ جهان (ناحیه/جاده/مأموریت آغازین) — هیچ دست‌زدنی به اقتصاد،
     کیف پول، توکن، دفترکل، وضعیت بازیکن (S) یا دیتابیس.
   - سه نام «دریای شیشه‌ای»، «جنگل نقره‌ای» و «کوه بلورین» و نگاشت مرحلهٔ ۱
     (DOMINION_PLAYABLE_LANDS) عمداً دست‌نخورده مانده‌اند؛ تعارض ساختاری آن‌ها
     با ۱۱ ناحیهٔ جدید در گزارش مرحله و docs/TARGON-WORLD.md ثبت شده است و
     هر تصمیم دربارهٔ ادغام فقط با تأیید کارفرما انجام می‌شود.
   - پاداش مأموریت‌های این ماژول «نشانِ کشف» است؛ هیچ سکه/توکنی پرداخت
     نمی‌شود (اقتصاد فعلی دست‌نخورده).

   توسعه‌پذیری: NPCها، حیوانات، مشاغل و ساختمان‌های بیشتر بعداً در
   TARGON_EXTENSIONS (پایین همین فایل) نشسته می‌شوند — فعلاً عمداً خالی‌اند. */

/* ---------- هویت جهان ---------- */
const TARGON_WORLD = {
  id: 'targon',
  fa: 'تارگون',
  en: 'TARGON',
  W: 52, H: 52,               // ابعاد شبکهٔ نقشهٔ مادر (کاشی)
  spawn: { x: 42, y: 40 },    // آغاز بازیکن در سپیده‌دم
  saveKey: 'hs77_targon_world_v1',
};

/* ---------- ۱۱ ناحیهٔ تارگون — نام‌ها دقیقاً طبق دستور کارفرما ----------
   ترتیب فهرست = اولویت تشخیص ناحیه از مختصات (اولویت با نواحی مشخص‌تر).
   سه ردیف آخر عمداً «دشت سبز»اند تا کل نقشه پوشش داده شود.
   terrain: grass|rock|stone|ruin|sand|plaza|village|dirt|forest|dawn|water */
const TARGON_AREAS = [
  { id:'dezh-negahban',       fa:'دژ نگهبان',           x0:20, y0: 2, x1:27, y1: 7, terrain:'stone',  icon:'🏰', label:[23,4]  },
  { id:'kuhestan-sangnegahban', fa:'کوهستان سنگ‌نگهبان', x0: 0, y0: 0, x1:51, y1: 9, terrain:'rock',   icon:'⛰️', label:[10,5]  },
  { id:'viraneh-khamush',     fa:'ویرانه‌های خاموش',      x0: 2, y0:12, x1:12, y1:22, terrain:'ruin',   icon:'🏛️', label:[7,17]  },
  { id:'bazar-kohan',         fa:'بازار کهن',            x0: 5, y0:23, x1:15, y1:28, terrain:'sand',   icon:'⛺', label:[10,26] },
  { id:'meydan-hampeymanan',  fa:'میدان هم‌پیمانان',      x0:16, y0:20, x1:29, y1:28, terrain:'plaza',  icon:'⚜️', label:[22,24] },
  { id:'dehkade-azarin',      fa:'دهکده آذرین',          x0:13, y0:29, x1:29, y1:43, terrain:'village',icon:'🏘️', label:[21,34] },
  { id:'darvazeh-sorkh',      fa:'دروازه سرخ',           x0:17, y0:44, x1:26, y1:51, terrain:'dirt',   icon:'🚩', label:[21,48] },
  { id:'jangal-zomorrod',     fa:'جنگل زمرد',            x0:34, y0:10, x1:51, y1:33, terrain:'forest', icon:'🌲', label:[43,21] },
  { id:'sepideh-dam',         fa:'سپیده‌دم',             x0:34, y0:34, x1:51, y1:51, terrain:'dawn',   icon:'🌅', label:[43,38] },
  { id:'rud-roshan',          fa:'رود روشن',             x0:30, y0:10, x1:33, y1:51, terrain:'water',  icon:'💧', label:[31,26] },
  { id:'dasht-sabz',          fa:'دشت سبز',              x0:13, y0:10, x1:29, y1:19, terrain:'grass',  icon:'🌾', label:[21,14] },
  { id:'dasht-sabz',          fa:'دشت سبز',              x0: 0, y0:10, x1:12, y1:51, terrain:'grass',  icon:'🌾', label:null },
  { id:'dasht-sabz',          fa:'دشت سبز',              x0: 0, y0:44, x1:29, y1:51, terrain:'grass',  icon:'🌾', label:null },
];

/* فهرست یکتای ۱۱ ناحیه برای رابط کاربری (بدون ردیف‌های پوشش تکراری) */
const TARGON_AREA_LIST = [
  'sepideh-dam','dehkade-azarin','meydan-hampeymanan','bazar-kohan','dasht-sabz',
  'jangal-zomorrod','rud-roshan','kuhestan-sangnegahban','dezh-negahban',
  'viraneh-khamush','darvazeh-sorkh',
];

/* ---------- شبکهٔ جاده‌ها [x0,y0,x1,y1] — مسیرهای قابل دسترس ----------
   پل‌ها خودکار ساخته می‌شوند: هر کاشی جاده روی آب = پل (قابل عبور). */
const TARGON_ROADS = [
  [23,2,23,9],     // گذر کوهستانی تا دروازهٔ دژ نگهبان
  [21,9,23,9],     // اتصال گذر به خط شمالی
  [21,9,21,29],    // ستون فقرات: پای کوه → دشت → میدان → دهکده
  [6,24,15,24],    // راستهٔ بازار کهن
  [15,24,16,24],   // اتصال بازار به میدان
  [7,20,7,24],     // ویرانه‌های خاموش → بازار
  [12,28,12,31],   // بازار → دهکده
  [12,31,13,31],
  [21,43,21,47],   // دهکده → دروازه سرخ
  [27,36,43,36],   // دهکده → پل رود روشن → سپیده‌دم
  [29,14,36,14],   // دشت → پل → جنگل زمرد
  [42,27,42,36],   // جنگل → سپیده‌دم
];

/* عناصر ثابت محیط (ترسیم هندسی؛ مسدودکننده بودن با solid) */
const TARGON_FIXTURES = {
  columns:  [[4,14],[6,17],[9,14],[4,19],[10,20],[7,16]],            // ویرانه‌ها
  stalls:   [[7,25],[10,25],[13,25],[7,27],[10,27],[13,27]],         // بساط بازار
  crates:   [[6,26],[12,26]],
  houses:   [[15,31],[24,31],[16,39],[24,39],[19,33]],               // خانه‌های دهکده (۲×۲)
  well:     [18,35],
  farms:    [[26,34],[26,35],[27,34],[27,35],[15,37],[16,37]],       // مزرعه (قابل عبور)
  monument: [[22,23],[23,23],[22,24],[23,24]],                       // بنای یادبود میدان
  poles:    [[17,21],[28,21],[17,27],[28,27]],                       // ستون‌های پرچم میدان
  stones:   [[40,38],[44,41],[38,43]],                               // سنگ‌های سپیده‌دم (تزئینی)
  lamps:    [[37,37],[45,44]],                                       // چراغ‌های سپیده‌دم
  torches:  [[19,45],[25,45]],                                       // مشعل‌های دروازه سرخ
  pillars:  [[20,46],[24,46]],                                       // پایه‌های دروازه سرخ
};

/* ---------- مأموریت‌های آغازین — فقط پیشرفتِ کشف، بدون پاداش اقتصادی ---------- */
const TARGON_MISSIONS = [
  { id:'t_m1', icon:'👣', title:'گام‌های نخست',        desc:'ده قدم در جهان تارگون بردار',            type:'steps', n:10 },
  { id:'t_m2', icon:'🏘️', title:'راه به دهکدهٔ آذرین', desc:'از سپیده‌دم به دهکده آذرین برو',          type:'area', area:'dehkade-azarin' },
  { id:'t_m3', icon:'🤝', title:'به دیدار هم‌پیمانان', desc:'میدان هم‌پیمانان را پیدا کن',             type:'area', area:'meydan-hampeymanan' },
  { id:'t_m4', icon:'⛺', title:'گشت در بازار کهن',    desc:'راستهٔ بازار کهن را ببین',                type:'area', area:'bazar-kohan' },
  { id:'t_m5', icon:'🚩', title:'آستانهٔ دروازهٔ سرخ',  desc:'خودت را به دروازه سرخ برسان',             type:'area', area:'darvazeh-sorkh' },
];

/* ---------- جایگاه‌های توسعهٔ آینده (عمداً خالی — پرکردن فقط با دستور کارفرما) ---------- */
const TARGON_EXTENSIONS = {
  npcs:       [],   // NPCها: {id, fa, area, x, y, dialogue…}
  animals:    [],   // حیوانات: {id, fa, area, x, y, …}
  jobs:       [],   // مشاغل و تولید: به سند ۰۴ و پس از تأیید اقتصادی
  buildings:  [],   // ساختمان‌های عملیاتی جدید: {id, fa, area, x, y, action…}
};

/* ---------- تشخیص ناحیه از مختصات ---------- */
function targonAreaAt(x, y){
  for(const a of TARGON_AREAS){
    if(x >= a.x0 && x <= a.x1 && y >= a.y0 && y <= a.y1) return a;
  }
  return TARGON_AREAS[TARGON_AREAS.length - 1];
}
function targonAreaById(id){
  return TARGON_AREAS.find(a => a.id === id) || null;
}
/* ناحیهٔ قابل «رفتن» نزدیک به مرکز برچسب — نخستین کاشی آزاد اطراف مرکز */
function targonAreaTarget(id){
  const a = targonAreaById(id);
  if(!a) return null;
  const [cx, cy] = a.label;
  for(let r = 0; r < 6; r++){
    for(let dy = -r; dy <= r; dy++) for(let dx = -r; dx <= r; dx++){
      const x = cx + dx, y = cy + dy;
      if(T_MAP && !T_MAP.blocked[y * TARGON_WORLD.W + x]) return { x, y };
    }
  }
  return { x: cx, y: cy };
}
