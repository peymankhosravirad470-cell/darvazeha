/**
 * 77 Lands — official realm & land data.
 * Seven realms, eleven lands each (77 lands total).
 * Realm identities, flag textures and names are the OFFICIAL approved assets.
 */

export type LandTheme =
  | "dawn" | "emberVillage" | "alliesField" | "oldBazaar" | "greenPlain"
  | "emeraldForest" | "brightRiver" | "guardianMountains" | "guardianKeep"
  | "silentRuins" | "redGate"
  | "mistGate" | "coldStoneVillage" | "chainBridge" | "shadowBazaar"
  | "blackPineForest" | "lanternMarsh" | "darkRiver" | "ravenMountains"
  | "seerTower" | "dezhmaarRuins" | "nightGate"
  | "generic";

export interface Land {
  id: string;
  fa: string;
  desc: string;
  theme: LandTheme;
}

export interface Realm {
  id: string;
  fa: string;
  en: string;
  /** identity colors: primary = realm color, accent = gold/emblem tone */
  color: string;
  accent: string;
  lore: string;
  motto: string;
  flagCloth: string;   // public path of the official flag cloth texture (webp, alpha)
  flagNormal: string;  // normal map for cinematic emblem relief
  art: string;         // official full artwork for intro/cards
  /** wind personality of the cloth flag */
  wind: { strength: number; speed: number; gust: number };
  /** music root (midi note) for realm sting / ambience */
  note: number;
  unlocked: boolean;
  lands: Land[];
}

const land = (id: string, fa: string, desc: string, theme: LandTheme): Land =>
  ({ id, fa, desc, theme });

export const REALMS: Realm[] = [
  {
    id: "targon",
    fa: "تارگون",
    en: "TARGON",
    color: "#c8102e",
    accent: "#f5c542",
    lore:
      "سرزمین اژدهای طلایی و تاج شکوه. پادشاهان تارگون از آتش کوره‌های سپیدار سر برآوردند و پرچم سرخ آنان بر بلندترین برج‌های سرزمین‌های هفتگانه در اهتزاز است.",
    motto: "از خاکستر، تاج",
    flagCloth: "./assets/flags/targon_cloth.webp",
    flagNormal: "./assets/flags/targon_normal.webp",
    art: "./assets/flags/targon_art.webp",
    wind: { strength: 1.0, speed: 1.9, gust: 0.55 },
    note: 50, // D3
    unlocked: true,
    lands: [
      land("t1", "سپیده‌دم", "جایی که نخستین نور خورشید بر دشت‌های تارگون می‌افتد؛ نقطه آغاز هر سفر.", "dawn"),
      land("t2", "دهکده آذرین", "دهکده‌ای برپا شده بر دل آتش خاموش؛ شومینه‌ها هرگز سرد نمی‌شوند.", "emberVillage"),
      land("t3", "میدان هم‌پیمانان", "میدان پیمان خاندان‌ها؛ صدای طبل بشارت هنوز در باد می‌پیچد.", "alliesField"),
      land("t4", "بازار کهن", "کهن‌ترین بازار سرزمین‌های هفتگانه؛ عطر ادویه و صدای سکه در کوچه‌ها جاری است.", "oldBazaar"),
      land("t5", "دشت سبز", "دشت بی‌پایان سبز، زادگاه اسبان آزاد و بادهای شاد.", "greenPlain"),
      land("t6", "جنگل زمرد", "جنگلی که نور در آن سبز می‌شود؛ رازهای کهن زیر خزه خفته‌اند.", "emeraldForest"),
      land("t7", "رود روشن", "رودی زلال که داستان‌های تارگون را به دریا می‌رساند؛ پل سنگی نگهبان آن است.", "brightRiver"),
      land("t8", "کوهستان سنگ‌نگهبان", "قله‌های سنگی که چون نگهبانان خاموش بر مرزها می‌ایستند.", "guardianMountains"),
      land("t9", "دژ نگهبان", "دژ نظامی تارگون؛ شعله‌های دیده‌بانی هرگز خاموش نمی‌شوند.", "guardianKeep"),
      land("t10", "ویرانه‌های خاموش", "ویرانه‌ای از روزگار پیشین؛ زمزمه‌هایش را تنها شب می‌شنوی.", "silentRuins"),
      land("t11", "دروازه سرخ", "دروازه باشکوه سرزمین اژدها؛ گذرگاه ستون‌های آتش و افتخار.", "redGate"),
    ],
  },
  {
    id: "dezhmaar",
    fa: "دژمار",
    en: "DEZHMAAR",
    color: "#1e3a6e",
    accent: "#7fb2ff",
    lore:
      "دژ باستانی بر لبه مه. عقاب طلایی دژمار بر پرچم سرمه‌ای‌اش، قرن‌هاست خاموش مرزهای شب را پاس می‌دارد و رازهایش را با هیچ بادی در میان نمی‌گذارد.",
    motto: "دیوارِ خوابِ شب",
    flagCloth: "./assets/flags/dezhmaar_cloth.webp",
    flagNormal: "./assets/flags/dezhmaar_normal.webp",
    art: "./assets/flags/dezhmaar_art.webp",
    wind: { strength: 1.25, speed: 2.3, gust: 0.8 },
    note: 45, // A2
    unlocked: true,
    lands: [
      land("d1", "دروازه مه‌گرفته", "دروازه‌ای که تنها هنگام طلوع از میان مه پدیدار می‌شود.", "mistGate"),
      land("d2", "دهکده سنگ‌سرد", "خانه‌های سنگی با شومینه‌های کم‌سو؛ مهمان‌نوازی‌اش سخت ولی وفادار است.", "coldStoneVillage"),
      land("d3", "پل زنجیری", "پلی از زنجیر و چوب بر دره ابرها؛ هر تخته‌اش داستانی دارد.", "chainBridge"),
      land("d4", "بازار سایه", "بازاری در دل سنگ؛ چیزی که در روشنی یافت نمی‌شود، اینجاست.", "shadowBazaar"),
      land("d5", "جنگل کاج سیاه", "کاج‌هایی به بلندای برج؛ زیر تاجشان شب همیشه زودتر می‌رسد.", "blackPineForest"),
      land("d6", "مرداب فانوس‌ها", "فانوس‌های شناور مسیر را نشان می‌دهند؛ اگر به آن‌ها اعتماد کنی.", "lanternMarsh"),
      land("d7", "رود تیره", "رود عمیق و آرام که نام مسافرانش را نگه می‌دارد.", "darkRiver"),
      land("d8", "کوهستان کلاغ", "لانهٔ کلاغ‌های دژمار؛ چشم‌های سیاهشان همه‌چیز را دیده‌اند.", "ravenMountains"),
      land("d9", "برج فالگیر", "برجی که ستاره‌شناسان دژمار در آن سرنوشت را می‌خوانند.", "seerTower"),
      land("d10", "ویرانه‌های دژمار", "دژ کهنِ نیمه‌فروریخته؛ سنگ‌هایش هنوز هم سپر می‌شوند.", "dezhmaarRuins"),
      land("d11", "دروازه شب", "آخرین دروازه پیش از سرزمینِ بی‌ستاره؛ عبور از آن شجاعت می‌خواهد.", "nightGate"),
    ],
  },
  {
    id: "argad",
    fa: "آرگاد",
    en: "ARGAD",
    color: "#1f6e43",
    accent: "#8fe3a1",
    lore:
      "درخت کهن و سنگِ مادر. آرگاد سرزمین درویشانِ تنومند و نگهبانان جنگل است؛ ریشه‌های درخت زندگی‌اش به اعماق زمین و خاطره‌ها گره خورده است.",
    motto: "ریشه، ستونِ آسمان",
    flagCloth: "./assets/flags/argad_cloth.webp",
    flagNormal: "./assets/flags/argad_normal.webp",
    art: "./assets/flags/argad_art.webp",
    wind: { strength: 0.85, speed: 1.6, gust: 0.45 },
    note: 55, // G3
    unlocked: false,
    lands: [
      land("a1", "درختگاه سپیدار", "دروازه جنگل آرگاد؛ شاخه‌های کهن بر مسافران طاق می‌سازند.", "generic"),
      land("a2", "دهکده ریشه", "خانه‌هایی در دل تنه درختان کهن؛ نور از شاخه‌ها می‌تراود.", "generic"),
      land("a3", "چشمه زمرد", "چشمه‌ای که آبش سبز است؛ نوشیدنش خاطره را زنده می‌کند.", "generic"),
      land("a4", "سنگ‌چین کهن", "دایره سنگ‌های ایستاده؛ تقویم کهن‌سالان آرگاد.", "generic"),
      land("a5", "دشت گل‌ریز", "دشتی زیر پایش گل و بر فرازش نوقا.", "generic"),
      land("a6", "جنگل خزه", "زمین نرم خزه؛ صدای پا در آن گم می‌شود.", "generic"),
      land("a7", "رود شفاف", "رودی به شفافی بلور؛ سنگ‌های کفش دیده می‌شوند.", "generic"),
      land("a8", "کوهستان سرسبز", "قله‌های پوشیده از جنگل؛ خانه عقاب‌های آرگاد.", "generic"),
      land("a9", "پناهگاه نگهبان", "دژ چوبی نگهبانان جنگل؛ آتشش هرگز بی‌مهمان نمی‌ماند.", "generic"),
      land("a10", "وادی خاموشی", "وادی‌ای که باد در آن آواز کهن می‌خواند.", "generic"),
      land("a11", "دروازه سبز", "دروازه درخت زندگی؛ گذرگاه پیمان‌بندان آرگاد.", "generic"),
    ],
  },
  {
    id: "mardak",
    fa: "مرداک",
    en: "MARDAK",
    color: "#5b2a86",
    accent: "#c89bff",
    lore:
      "کلاغ تاج‌دار و بنفش شب. مرداک سرزمین جنگاوران سایه است؛ در شورایش، تاج تنها به شایستگی می‌رسد و پرچم بنفشش همیشه یک لبه در بادِ جنگ دارد.",
    motto: "تاجِ بالِ سیاه",
    flagCloth: "./assets/flags/mardak_cloth.webp",
    flagNormal: "./assets/flags/mardak_normal.webp",
    art: "./assets/flags/mardak_art.webp",
    wind: { strength: 1.35, speed: 2.45, gust: 0.9 },
    note: 48, // C3
    unlocked: false,
    lands: [
      land("m1", "دروازه کلاغ", "دروازه‌ای با نگین بنفش؛ کلاغ‌ها بر آن نوبت می‌دهند.", "generic"),
      land("m2", "دهکده آذرخش", "دهکده‌ای بر فراز تپه؛ آذرخش دوبار به برجش خورده است.", "generic"),
      land("m3", "میدان زره", "میدان تمرین جنگاوران؛ همیشه صدای سپر و شمشیر دارد.", "generic"),
      land("m4", "بازار غنیمت", "بازار بازرگانان مرداک؛ سکه‌هایش سرخ‌تر از جای دیگرند.", "generic"),
      land("m5", "دشت خاکستر", "دشت نبرد روزگار پیشین؛ علف از خاکستر زاده شده است.", "generic"),
      land("m6", "جنگل کبود", "درختانی با برگ بنفش‌فام؛ سایه‌ها اینجا سنگین‌ترند.", "generic"),
      land("m7", "رود سپیدار", "رودی سرد و تند؛ فقط پل‌های مرداک از آن می‌گذرند.", "generic"),
      land("m8", "کوه کلاغ‌آشیان", "قلعه سنگی بر قله؛ پادگان همیشگی پرندگان سیاه.", "generic"),
      land("m9", "دژ تاج", "تختگاه خاندان مرداک؛ تاج کلاغ بر دروازه‌اش نشسته است.", "generic"),
      land("m10", "ویرانه جنگ", "یادمان نبرد بزرگ؛ نام‌ها بر سنگ حک شده‌اند.", "generic"),
      land("m11", "دروازه بنفش", "دروازه شورای جنگ؛ از آن عبور کنند، دیگر عقب‌نشینی نیست.", "generic"),
    ],
  },
  {
    id: "vergad",
    fa: "ورگاد",
    en: "VERGAD",
    color: "#1b4b9e",
    accent: "#ffd34d",
    lore:
      "ققنوس طلایی و آبی. ورگاد سرزمین رنسانس فانتزی است؛ هنر، موسیقی و شعله تجدید تولدش، هر صد سال برج‌هایش را نو می‌کند.",
    motto: "هر پایان، پرِ نو",
    flagCloth: "./assets/flags/vergad_cloth.webp",
    flagNormal: "./assets/flags/vergad_normal.webp",
    art: "./assets/flags/vergad_art.webp",
    wind: { strength: 0.95, speed: 2.0, gust: 0.6 },
    note: 52, // E3
    unlocked: false,
    lands: [
      land("v1", "دروازه ققنوس", "دروازه‌ای با الماس آبی؛ هنگام عبور، پر زرین می‌بخشد.", "generic"),
      land("v2", "دهکده آواز", "دهکده نوازندگان؛ هر خانه‌ای یک ساز است.", "generic"),
      land("v3", "میدان جشن", "میدان فواره‌ها و ریسمان‌های نور؛ جشن هرگز تمام نمی‌شود.", "generic"),
      land("v4", "بازار شیشه‌گران", "بازار شیشه‌های رنگین؛ نور در دست فروشندگان می‌رقصد.", "generic"),
      land("v5", "دشت شکوفه", "دشتی که همیشه بهاره است.", "generic"),
      land("v6", "جنگل طلا", "درختان با برگ زرین؛ باد، سکه پخش می‌کند.", "generic"),
      land("v7", "رود بلور", "رودی به رنگ آسمان ورگاد.", "generic"),
      land("v8", "کوهستان پرنسا", "قله‌های برفی برج‌های سفید؛ اقامتگاه شورای هنر.", "generic"),
      land("v9", "دژ فانوس", "دژ دریاچه؛ شب‌ها هزار فانوس بر پله‌هایش.", "generic"),
      land("v10", "ویرانه اول", "ویرانه نخستین آتش ورگاد؛ جایی که ققنوس زاده شد.", "generic"),
      land("v11", "دروازه آبی", "دروازه آبی و طلا؛ پیمان تجدید تولد.", "generic"),
    ],
  },
  {
    id: "zardak",
    fa: "زرداک",
    en: "ZARDAK",
    color: "#d4a017",
    accent: "#3a6fd8",
    lore:
      "خورشید طلایی و تمدن کهن. زرداک سرزمین گنبدفیروزه‌ای و دانشنامه‌های ستاره است؛ خورشیدش هرگز غروب را باور نمی‌کند.",
    motto: "نور، میراثِ ما",
    flagCloth: "./assets/flags/zardak_cloth.webp",
    flagNormal: "./assets/flags/zardak_normal.webp",
    art: "./assets/flags/zardak_art.webp",
    wind: { strength: 0.9, speed: 1.75, gust: 0.5 },
    note: 53, // F3
    unlocked: false,
    lands: [
      land("z1", "دروازه خورشید", "دروازه‌ای با هاله طلایی؛ سنگ‌هایش گرم است.", "generic"),
      land("z2", "دهکده کاهگل", "خانه‌های گنبددار؛ خنکای خشت در گرمای روز.", "generic"),
      land("z3", "میدان آفتاب", "میدان ساعت آفتابی عظیم؛ ساعت شهر زرداک.", "generic"),
      land("z4", "بازار ادویه", "بازار زعفران و دارچین؛ رنگ‌ها به آسمان می‌ریزند.", "generic"),
      land("z5", "دشت زرین", "دشت گندم رسیده؛ باد موج می‌سازد.", "generic"),
      land("z6", "جنگل سرو", "سروهای استوار؛ نشان خاندان‌های زرداک.", "generic"),
      land("z7", "رود فیروزه", "رودی به رنگ گنبد مس؛ کاروان‌ها بر آن نوبت دارند.", "generic"),
      land("z8", "کوهستان مفرغی", "کانی‌های درخشان؛ کارگاه‌های آهنگری بر دامنه‌ها.", "generic"),
      land("z9", "دژ خورشیدتاب", "دژ گنبد طلایی؛ آرامگاه بنیان‌گذار زرداک.", "generic"),
      land("z10", "ویرانه نجوم", "رصدخانه کهن؛ خطوط سماق بر سنگش زنده‌اند.", "generic"),
      land("z11", "دروازه زرین", "دروازه تمدن کهن؛ کلیدش در نُه پرتو خورشید است.", "generic"),
    ],
  },
  {
    id: "tarmad",
    fa: "تارماد",
    en: "TARMAD",
    color: "#6b21a8",
    accent: "#e9c46a",
    lore:
      "گوزن تاج‌دار و خاندان‌های قدرتمند. تارماد سرزمین شکارگاه‌های سرمه‌ای و پیمان‌های خونی است؛ شاخ‌های طلایی‌اش بر هر پرچم، ردّ یک پیمان است.",
    motto: "شاخِ پیمان",
    flagCloth: "./assets/flags/tarmad_cloth.webp",
    flagNormal: "./assets/flags/tarmad_normal.webp",
    art: "./assets/flags/tarmad_art.webp",
    wind: { strength: 1.1, speed: 2.1, gust: 0.7 },
    note: 47, // B2
    unlocked: false,
    lands: [
      land("r1", "دروازه شاخ‌دار", "دروازه‌ای با شاخ‌های طلایی متقاطع.", "generic"),
      land("r2", "دهکده سواران", "دهکده اسب‌داران تارماد؛ طبل شکار همیشه برپاست.", "generic"),
      land("r3", "میدان پیمان", "میدان سوگند خاندان‌ها؛ سنگ دایره‌ای پیمان.", "generic"),
      land("r4", "بازار خز", "بازار پوست و عاج؛ چانه‌زنی هنر تارمادی‌هاست.", "generic"),
      land("r5", "دشت گوزن‌ها", "دشت آزاد گوزن‌سانان؛ شکار در آن سوگند می‌خواهد.", "generic"),
      land("r6", "جنگل سرمه‌ای", "جنگل شب‌های تارماد؛ نوقای بنفش می‌درخشد.", "generic"),
      land("r7", "رود شکارگاه", "رود پرآب ماهی؛ جای پای گوزن بر گِلش.", "generic"),
      land("r8", "کوهستان پیمان", "قله‌ای که خاندان‌ها بر آن بیرق می‌نشانند.", "generic"),
      land("r9", "دژ گوزن تاج‌دار", "تختگاه فرمانروای تارماد؛ تالار شاخ‌ها.", "generic"),
      land("r10", "ویرانه سوگند", "جای نبرد خاندان‌ها؛ هنوز شب‌ها سکه‌ای در خاک می‌درخشد.", "generic"),
      land("r11", "دروازه سرمه‌ای", "دروازه شب‌های تارماد؛ عبور با سوگندِ گوزن.", "generic"),
    ],
  },
];

export const TOTAL_LANDS = REALMS.reduce((n, r) => n + r.lands.length, 0);

/** numeric helper → Persian digits */
export const faNum = (n: number | string): string =>
  String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
