/* ═══════════ داده‌های بازی — همهٔ اعداد [آزمایشی] طبق D12 ═══════════
   هیچ عدد اقتصادی قطعی نیست؛ شبیه‌سازی کامل = موضوع A10 (سند ۱۵).
   ساختار داده‌محور است: افزودن سرزمین/کالا/مأموریت = افزودن داده، نه هاردکد. */

/* ---------- کالاها ---------- */
const ITEMS = {
  sang:   {name:'سنگ صخره‌ای',  ico:'🪨', desc:'از صخره‌های ساحلی — سرِ زنجیرهٔ نمونهٔ مصوب: معدن‌کار ← آهنگر ← نجار ← کشاورز (D16)'},
  choob:  {name:'چوب شناور',    ico:'🪵', desc:'از درخت‌های ساحلی — دستهٔ ابزار'},
  choobN: {name:'چوب نقره‌ای',  ico:'🌲', desc:'از درخت‌های جنگل نقره‌ای (سرزمین ۲) — چوب سازوکار دروازه'},
  abzar:  {name:'ابزار سنگی',   ico:'🔨', desc:'محصول کارگاه — هم سفارش ناخدا، هم ابزار کوه‌کاوی (جای تجهیز می‌گیرد)'},
  tabar:  {name:'تبر سنگی',     ico:'🪓', desc:'ابزار هیزم‌شکنی — ساخت کارگاه'},
  marjan: {name:'سنگ‌مرجان',    ico:'🪸', desc:'سه سنگ مرجانیِ دروازهٔ کهن — درشت، میانه، ریز (فروش نمی‌شود)'},
  bolur:  {name:'بلور شیشه‌ای', ico:'💎', desc:'یادگاری دروازهٔ مرجانی'},
  neshan: {name:'نشانِ دریای شیشه‌ای', ico:'🌀', desc:'نشان اکتشاف — یادگاری (فروش نمی‌شود؛ پیش‌نمایش اقلام کمیاب بازار عمومی آینده)'},
  daneh:  {name:'دانهٔ گندم',   ico:'🌱', desc:'از بازار محلی بخر و در مزرعهٔ دهکده بکار — پایان زنجیرهٔ D16: کشاورز'},
  gandom: {name:'خوشهٔ طلایی',  ico:'🌾', desc:'برداشت مزرعه — رشد قطعی زمان‌محور، بدون شانس'},
  bolurK: {name:'بلور کوهستان', ico:'💠', desc:'از بلورهای کوه بلورین (سرزمین ۳) — درخششی که پیمان کهن را خاطره‌انگیز می‌کند'},
};

/* ---------- تجهیزات و جامه‌ها ---------- */
const GEAR = {
  abzar:{item:'abzar', slot:'mine', label:'ابزار کوه‌کاوی', bonus:'هر ضربهٔ دوم کوه‌کاوی +۱ سنگ'},
  tabar:{item:'tabar', slot:'wood', label:'ابزار هیزم‌شکنی', bonus:'هر ضربهٔ دوم هیزم‌شکنی +۱ چوب'},
};
const OUTFITS = {
  j_mosafar:{name:'جامهٔ مسافر',     speed:1,    desc:'جامهٔ آغازین'},
  j_fanous: {name:'جامهٔ فانوس‌بان', speed:1.12, desc:'پاداش «فانوس‌های گمشده» — سرعت حرکت +۱۲٪'},
};

/* ---------- مهارت‌ها (حرفه‌های فعال نمونه) ----------
   فهرست کامل ۱۲ حرفه = موضوع A7 (باز). موتور مهارت داده‌محور است؛
   حرفه‌های دیگر پس از تأیید فهرست، فقط داده اضافه می‌شوند. */
const SKILLS = {
  mining:     {name:'کوه‌کاوی',  ico:'⛏️'},
  woodcutting:{name:'هیزم‌شکنی', ico:'🪓'},
  crafting:   {name:'ساخت',      ico:'⚒️'},
  farming:    {name:'کشاورزی',   ico:'🌾'},
  trading:    {name:'بازرگانی',  ico:'⚖️'},
};
const SKILL_XP = [0, 20, 50, 90, 140, 200];
const XP_LV    = [0, 30, 80, 160, 280, 460, 700, 1000];

/* مزیت‌های قطعی مهارت‌ها (بدون شانس) [آزمایشی] */
function skillPerkText(id, lv){
  if(id==='mining'){
    if(lv>=3) return 'هر ضربهٔ دوم +۱ سنگ (مزیت سطح ۳)';
    if(lv>=2) return 'هر ضربهٔ سوم +۱ سنگ (مزیت سطح ۲)';
  }
  if(id==='woodcutting'){
    if(lv>=3) return 'هر ضربهٔ دوم +۱ چوب (مزیت سطح ۳)';
    if(lv>=2) return 'هر ضربهٔ سوم +۱ چوب (مزیت سطح ۲)';
  }
  if(id==='crafting' && lv>=2) return 'هر سومین ساخت، خروجی +۱';
  if(id==='trading'  && lv>=2) return 'هر فروش +۱ سکه';
  if(id==='farming'  && lv>=2) return 'برداشت ۳ خوشه به‌جای ۲';
  return '';
}

/* ---------- دستورهای کارگاه ---------- */
const RECIPES = [
  {id:'r_abzar', out:'abzar', n:1, need:{sang:2, choob:1}, title:'ابزار سنگی ×۱',
   note:'سفارش ناخدا + ابزار کوه‌کاوی'},
  {id:'r_tabar', out:'tabar', n:1, need:{sang:1, choob:2}, title:'تبر سنگی ×۱',
   note:'ابزار هیزم‌شکنی — برای تجهیز در کارنامه'},
];

/* ---------- بازار محلی (سند ۰۵؛ D8: محلی ≠ عمومی) ----------
   نرخ پایهٔ ثابت — مدل قیمت‌گذاری نهایی = A4 باز؛ بدون مزایده (P14). */
const MARKET = {
  sell:{sang:2, choob:2, choobN:3, gandom:4, abzar:8, tabar:8, bolur:12, bolurK:15},
  buy:{daneh:3},
  caravan:{need:{sang:3}, pay:6},
  note:'نرخ‌ها آزمایشی‌اند (A4/A10 باز). فروش نشان و مرجان و دانه ممکن نیست — یادگاری/نهادهٔ کشاورزی.',
};

/* ---------- مزرعه ---------- */
const FARM_CFG = {seed:'daneh', crop:'gandom', cropN:2, growMs:75000, growLabel:'۷۵ ثانیه'};

/* ---------- شناسنامهٔ سرزمین‌ها ----------
   نام‌ها از کد فعلی v1 (موضوع A1 باز). built = محتوای قابل‌بازی دارد. */
const REALMS = [
  {id:1,  name:'دریای شیشه‌ای', c1:'#38c6ff', c2:'#7c5cff', zone:'ساحل بنیادین', built:true,
   unlock:()=>true, unlockText:'سرزمین آغازین'},
  {id:2,  name:'جنگل نقره‌ای',  c1:'#9be15d', c2:'#00e3ae', zone:'جنگل‌ها', built:true,
   unlock:s=>!!(s.quests.q_tools && s.quests.q_tools.done),
   unlockText:'کامل‌شدن مأموریت «ابزار برای ناخدا»'},
  {id:3,  name:'کوه بلورین',    c1:'#89f7fe', c2:'#66a6ff', zone:'کوهستان', built:true,
   unlock:s=>!!(s.quests.q_gate2 && s.quests.q_gate2.done),
   unlockText:'کامل‌شدن مأموریت «درهای جنگل نقره‌ای»'},
  {id:4,  name:'کویر آینه‌ها',  c1:'#f6d365', c2:'#fda085', zone:'کویر', built:false,
   unlock:s=>!!(s.quests.q_crystal && s.quests.q_crystal.done),
   unlockText:'شرط واقعی: تکمیل «بلور پیمان» — محتوا پس از تصمیم A1 ساخته می‌شود'},
  {id:5,  name:'غار ستاره‌ها',  c1:'#a18cd1', c2:'#fbc2eb', zone:'زیرزمین', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
  {id:6,  name:'شهر ابرها',     c1:'#c2e9fb', c2:'#a1c4fd', zone:'آسمان', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
  {id:7,  name:'جزیرهٔ مه',     c1:'#d4fc79', c2:'#96e6a1', zone:'دریا', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
  {id:8,  name:'درهٔ فانوس‌ها', c1:'#ffd86f', c2:'#fc6262', zone:'دره', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
  {id:9,  name:'باغ روشنایی',   c1:'#84fab0', c2:'#8fd3f4', zone:'باغ', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
  {id:10, name:'برج بادها',     c1:'#e0c3fc', c2:'#8ec5fc', zone:'ارتفاعات', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
  {id:11, name:'چشمهٔ زمان',    c1:'#5ee7df', c2:'#b490ca', zone:'چشمه', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
  {id:12, name:'صخرهٔ آواز',    c1:'#f78ca0', c2:'#f9748f', zone:'صخره', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
  {id:13, name:'دروازهٔ سپیده', c1:'#ffecd2', c2:'#fcb69f', zone:'مرز جهان', built:false,
   unlock:()=>false, unlockText:'پیوند زنجیرهٔ مأموریت‌ها — محتوا پس از تصمیم A1'},
];
/* شرط گشودن برای «همهٔ» سرزمین‌ها اعمال می‌شود؛ built فقط یعنی محتوا وجود دارد */
function realmUnlocked(r){ return r.unlock(S); }
function progressLevel(){ let p=1; REALMS.forEach(r=>{ if(realmUnlocked(r)) p=Math.max(p,r.id); }); return p; }

/* ---------- نقشهٔ سرزمین ۱ — دهکدهٔ ساحل شیشه‌ای (چیدمان آزموده‌شدهٔ نمونهٔ ۰٫۱) ---------- */
const REALM_MAPS = {
  1:{
    W:16, H:16, spawn:{x:7.5, y:12.5},
    pal:{grassA:'#3c8a58', grassB:'#378252', pathA:'#c9b189', pathB:'#c2a97f'},
    water:{type:'sea', until:2.1},
    pathTiles:['4,3','5,3','6,3','6,4','6,5','7,5','7,6','8,6','9,6','8,7','8,8','8,9','8,10','8,11','9,11','10,11','11,11','11,10','11,9','10,9','7,11','7,12','7,13','3,3','4,4','3,4','3,5','2,5','3,9','4,10','5,11','6,12','12,4','12,3','13,3','13,6','13,7','4,13','5,13','10,13','11,13','14,14','13,14','2,12','2,11'],
    house:{x:7, y:9, w:2, h:2},
    workshop:{x:10.5, y:9.5},
    gate:{x:2.5, y:2.5},
    chest:{x:3.7, y:3.4},
    well:{x:8.3, y:6.3},
    fire:{x:6.7, y:5.9},
    market:{x:5.3, y:7.3},
    farm:{x:11.5, y:12.5},
    rocks:[
      {x:5,   y:4,  charges:3, max:3, respawn:25},
      {x:11,  y:3,  charges:3, max:3, respawn:25},
      {x:6,   y:12, charges:3, max:3, respawn:25},
      {x:12.5,y:10, charges:3, max:3, respawn:25},
    ],
    trees:[
      {x:3,   y:8,  charges:2, max:2, respawn:30},
      {x:9,   y:6,  charges:2, max:2, respawn:30},
      {x:13,  y:7,  charges:2, max:2, respawn:30},
      {x:4,   y:13, charges:2, max:2, respawn:30},
      {x:10.5,y:13, charges:2, max:2, respawn:30},
    ],
    corals:[
      {id:'m1', x:13.5, y:2.6, size:'درشت'},
      {id:'m2', x:2,    y:12.5, size:'ریز'},
      {id:'m3', x:14,   y:14,  size:'میانه'},
    ],
    pedestals:[ {size:'درشت', dx:-1.1}, {size:'میانه', dx:0}, {size:'ریز', dx:1.1} ],
    lanterns:[
      {id:'l1', x:1.6, y:5.5},
      {id:'l2', x:14.3, y:8.5},
      {id:'l3', x:7.4, y:3.1},
    ],
    npcs:[
      {id:'mehtar',  name:'مهتر ساحل',      x:6.1, y:6.9,  c:'#7c5cff'},
      {id:'nakhoda', name:'ناخدای بی‌کشتی', x:9.7, y:10.4, c:'#38c6ff'},
      {id:'pir',     name:'پیر دریا',       x:3.4, y:4.1,  c:'#b16cea'},
      {id:'dokhtar', name:'دختر فانوس‌بان', x:7.7, y:5.1,  c:'#ffd86f'},
    ],
    pois:[
      {id:'plaza',    x:7.5, y:6,    label:'میدان دهکده'},
      {id:'house',    x:8,   y:11.2, label:'خانهٔ مسافر'},
      {id:'workshop', x:10.5,y:10.2, label:'کارگاه دهکده'},
      {id:'gate',     x:2.5, y:3.4,  label:'دروازهٔ مرجانی'},
      {id:'rocks',    x:5,   y:4,    label:'صخره‌های ساحلی'},
      {id:'trees',    x:3,   y:8,    label:'درخت‌های ساحلی'},
      {id:'sea',      x:9,   y:1,    label:'ساحل دریای شیشه‌ای'},
      {id:'market',   x:5.3, y:7.3,  label:'بازار محلی دهکده'},
      {id:'farm',     x:11.5,y:12.5, label:'مزرعهٔ دهکده'},
      {id:'l1', x:1.6, y:5.5,  label:'فانوس ساحلی (غرب)'},
      {id:'l2', x:14.3,y:8.5,  label:'فانوس ساحلی (خاور)'},
      {id:'l3', x:7.4, y:3.1,  label:'فانوس ساحل شمالی'},
    ],
  },

  /* ---------- نقشهٔ سرزمین ۲ — جنگل نقره‌ای (مرحله ۵) ---------- */
  2:{
    W:16, H:16, spawn:{x:8, y:13},
    pal:{grassA:'#2e7d4f', grassB:'#28734a', pathA:'#b7c9a8', pathB:'#aec2a0'},
    water:{type:'pond', rect:{x:12, y:2, w:3, h:2}},
    pathTiles:['8,13','8,12','8,11','8,10','8,9','7,9','7,8','8,8','9,8','9,7','10,7','10,6','10,5','11,5','6,9','5,9','4,9','4,8','4,7','4,6','5,6','6,6','6,5','6,4','6,3','7,3','8,3','9,3','10,3','11,3','12,5','12,6','13,8','13,9','3,10','3,11','2,12','8,14','7,14','9,14','13,3','14,3'],
    hut:{x:4, y:5, w:2, h:2},
    gate2:{x:8, y:2.5},
    fire:{x:8, y:10.5},
    rocks:[
      {x:3, y:7,  charges:3, max:3, respawn:28},
      {x:12,y:11, charges:3, max:3, respawn:28},
      {x:5, y:12, charges:2, max:2, respawn:28},
    ],
    trees:[
      {x:2, y:4,  charges:3, max:3, respawn:30},
      {x:3, y:6,  charges:3, max:3, respawn:30},
      {x:5, y:4,  charges:3, max:3, respawn:30},
      {x:10,y:4,  charges:3, max:3, respawn:30},
      {x:13,y:4,  charges:3, max:3, respawn:30},
      {x:13,y:10, charges:3, max:3, respawn:30},
      {x:2, y:13, charges:3, max:3, respawn:30},
      {x:11,y:13, charges:3, max:3, respawn:30},
    ],
    bigtree:{x:2.5, y:9.5},
    npcs:[
      {id:'banafsheh', name:'بانفشهٔ نگهبان', x:5.6, y:7.6,  c:'#9be15d'},
      {id:'dara',      name:'دارا هیزم‌شکن',  x:12.4, y:8.6, c:'#e0c3fc'},
    ],
    pois:[
      {id:'hut',      x:5,   y:7.2,  label:'کلبهٔ نگهبان جنگل'},
      {id:'pond',     x:13,  y:3,    label:'برکهٔ نقره‌ای'},
      {id:'gate2',    x:8,   y:3.4,  label:'دروازهٔ نقره‌ای'},
      {id:'campfire', x:8,   y:10.5, label:'آتشگاه جنگل — فضای اجتماعی'},
      {id:'oldoak',   x:2.5, y:9.5,  label:'بلوط کهن'},
    ],
  },
  /* ---------- نقشهٔ سرزمین ۳ — کوه بلورین (محصول ۰٫۳ — نام موقت طبق A1) ---------- */
  3:{
    W:16, H:16, spawn:{x:8, y:13},
    pal:{grassA:'#5d6b85', grassB:'#54617a', pathA:'#a8b4c8', pathB:'#9fabbf',
         tree1:'#3a5a7a', tree2:'#4a7296'},
    water:{type:'pond', rect:{x:1, y:2, w:2, h:2}},
    pathTiles:['8,13','8,12','8,11','8,10','7,10','7,9','7,8','8,8','9,8','9,7','9,6','10,6','10,5','11,5','11,4','11,3','12,3','6,10','5,10','5,9','5,8','5,7','6,7','6,6','6,5','7,5','7,4','8,4','9,4','10,4','3,11','3,12','2,13','9,13','10,13','11,12','12,11','13,10','14,9','8,14','7,14','13,4','13,3','14,3','4,6','4,5'],
    hut:{x:10, y:6, w:2, h:2},
    gate2:{x:8, y:2.5},
    gateName:'دروازهٔ بلورین',
    fire:{x:6.4, y:8.6},
    rocks:[
      {x:3, y:4,  charges:3, max:3, respawn:28},
      {x:12,y:8,  charges:3, max:3, respawn:28},
      {x:3, y:8,  charges:3, max:3, respawn:28},
      {x:13,y:12, charges:2, max:2, respawn:28},
    ],
    crystals:[
      {x:2, y:6,  charges:3, max:3, respawn:35},
      {x:14,y:6,  charges:3, max:3, respawn:35},
      {x:6, y:12, charges:3, max:3, respawn:35},
      {x:12,y:13, charges:3, max:3, respawn:35},
      {x:4, y:14, charges:2, max:2, respawn:35},
    ],
    trees:[
      {x:1, y:10, charges:2, max:2, respawn:32},
      {x:14,y:11, charges:2, max:2, respawn:32},
    ],
    npcs:[
      {id:'bahman', name:'بهمن معدن‌چی', x:9.2, y:9.4, c:'#89f7fe'},
      {id:'shirin', name:'شیرین راهنما', x:5.4, y:9.6, c:'#fbc2eb'},
    ],
    pois:[
      {id:'minehut', x:11, y:8.2, label:'خانهٔ معدن‌چی'},
      {id:'spring',  x:2,  y:3,   label:'چشمهٔ بلور'},
      {id:'gate3',   x:8,  y:3.4, label:'دروازهٔ بلورین'},
      {id:'campfire',x:6.4,y:8.6, label:'آتشگاه کوهستان'},
    ],
  },
};

/* ---------- مأموریت‌ها — موتور داده‌محور (مرحله ۵) ----------
   پاداش اصلی هر مأموریت فقط یک‌بار (D7). گشودن سرزمین بعدی به done پیوند دارد. */
const QUESTS = {
  q_tools:{ realm:1, giver:'nakhoda', main:true, title:'ابزار برای ناخدا',
    brief:'ناخدای بی‌کشتی برای بازگشت به عرشه به یک ابزار سنگی نیاز دارد: دو سنگ و یک چوب، ساخت در کارگاه.',
    steps:[
      {type:'have', item:'sang', n:2, text:'برداشت ۲ سنگ صخره‌ای (کوه‌کاوی — M4)'},
      {type:'have', item:'choob', n:1, text:'برداشت ۱ چوب شناور (هیزم‌شکنی — M4)'},
      {type:'craft', item:'abzar', n:1, text:'ساخت ابزار سنگی در کارگاه'},
      {type:'deliver', items:{abzar:1}, text:'تحویل ابزار به ناخدا'},
    ],
    reward:{coins:20, xp:15, skill:{mining:5}, text:'+۲۰ سکه · +۱۵ تجربه · +۵ تجربهٔ معدن‌کاری'},
    unlocksRealm:2 },
  q_lanterns:{ realm:1, giver:'dokhtar', main:false, title:'فانوس‌های گمشده',
    brief:'سه فانوس ساحلی در تاریکی مانده‌اند؛ آن‌ها را در ساحل پیدا کن — پاداش: جامهٔ فانوس‌بان.',
    steps:[
      {type:'discover', pois:['l1','l2','l3'], n:3, text:'یافتن ۳ فانوس ساحلی (با نزدیک‌شدن کشف می‌شوند)'},
    ],
    reward:{outfit:'j_fanous', xp:10, text:'+ جامهٔ فانوس‌بان (سرعت +۱۲٪) · +۱۰ تجربه'},
    unlocksRealm:null },
  q_gate2:{ realm:2, giver:'banafsheh', main:true, title:'درهای جنگل نقره‌ای',
    brief:'سازوکار دروازهٔ نقره‌ای از کار افتاده. بانفشه ۶ چوب نقره‌ای و ۱ ابزار سنگی می‌خواهد.',
    steps:[
      {type:'have', item:'choobN', n:6, text:'برداشت ۶ چوب نقره‌ای از درخت‌های جنگل'},
      {type:'have', item:'abzar', n:1, text:'آماده‌داشتن ۱ ابزار سنگی'},
      {type:'deliver', items:{choobN:6, abzar:1}, text:'تحویل هر دو به بانفشهٔ نگهبان'},
    ],
    reward:{coins:30, xp:25, skill:{woodcutting:8}, text:'+۳۰ سکه · +۲۵ تجربه · +۸ تجربهٔ هیزم‌شکنی'},
    unlocksRealm:3 },
  q_crystal:{ realm:3, giver:'bahman', main:true, title:'بلور پیمان',
    brief:'بهمن معدن‌چی برای یادبود پیمان کهن، ۵ بلور کوهستان می‌خواهد؛ بلورها در دامنهٔ کوه می‌درخشند.',
    steps:[
      {type:'have', item:'bolurK', n:5, text:'برداشت ۵ بلور کوهستان (بلورکاوی — M4)'},
      {type:'deliver', items:{bolurK:5}, text:'تحویل بلورها به بهمن معدن‌چی'},
    ],
    reward:{coins:40, xp:30, skill:{mining:10}, text:'+۴۰ سکه · +۳۰ تجربه · +۱۰ تجربهٔ معدن‌کاری'},
    unlocksRealm:4 },
};
