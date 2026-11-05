/**
 * 77 Lands — Village Strategy Layer: configuration.
 *
 * Building definitions + per-realm architecture identity.
 * درآمد/هزینه‌ها «اقتصاد درون‌بازی دهکده» هستند (چوب/سنگ/آهن/غذا/سکهٔ دهکده)
 * و هیچ ارتباطی به توکن تخفیف فروشگاه و دفترکل بک‌اند ندارند.
 */

export type ResKey = "wood" | "stone" | "iron" | "food" | "coin";
export type Res = Record<ResKey, number>;

export type BType =
  | "keep" | "house" | "farm" | "lumber" | "mine" | "storage" | "barracks" | "tower";

export interface BuildingDef {
  type: BType;
  fa: string;
  desc: string;
  /** footprint in grid cells (w × d) */
  size: [number, number];
  /** production per hour (per resource) — collector is drained by tapping */
  produce?: Partial<Res>;
  /** pending cap of the collector itself */
  pCap?: number;
  /** storage contribution per level (main resource caps) */
  store?: Partial<Res>;
  cost: (lvl: number) => Partial<Res>;
  /** short build/upgrade timer for the demo build (ms) */
  timerMs: number;
  maxLvl: number;
}

export const BUILDINGS: Record<BType, BuildingDef> = {
  keep: {
    type: "keep", fa: "قلعهٔ مرکزی", desc: "قلب دهکده؛ نشانهٔ اطاعت نگهبانان و تاج قلمرو توست.",
    size: [3, 3],
    store: { wood: 1500, stone: 1500, iron: 800, food: 1500, coin: 900 },
    cost: (l) => ({ wood: 220 * l, stone: 260 * l, coin: 90 * l }),
    timerMs: 45_000, maxLvl: 9,
  },
  house: {
    type: "house", fa: "خانهٔ ساکنان", desc: "ساکنان بی‌نام و نشانه نیستند؛ مالیات سکهٔ دهکده از این‌جاست.",
    size: [2, 2], produce: { coin: 240 }, pCap: 600,
    cost: (l) => ({ wood: 90 * l, stone: 40 * l, coin: 25 * l }),
    timerMs: 20_000, maxLvl: 6,
  },
  farm: {
    type: "farm", fa: "مزرعه", desc: "گندم و جو؛ سرباز گرسنه نمی‌جنگد و دهکده گرسنه نمی‌سازد.",
    size: [3, 2], produce: { food: 300 }, pCap: 700,
    cost: (l) => ({ wood: 70 * l, coin: 30 * l }),
    timerMs: 15_000, maxLvl: 6,
  },
  lumber: {
    type: "lumber", fa: "چوب‌بری", desc: "تبر بر تنهٔ جنگل؛ چوب، خونِ هر دیوار و بام است.",
    size: [2, 2], produce: { wood: 280 }, pCap: 650,
    cost: (l) => ({ coin: 40 * l, stone: 20 * l }),
    timerMs: 15_000, maxLvl: 6,
  },
  mine: {
    type: "mine", fa: "معدن", desc: "از دل سنگ، سنگِ بنا و آهنِ شمشیر بیرون می‌آید.",
    size: [2, 2], produce: { stone: 220, iron: 90 }, pCap: 600,
    cost: (l) => ({ wood: 110 * l, coin: 45 * l }),
    timerMs: 22_000, maxLvl: 6,
  },
  storage: {
    type: "storage", fa: "انبار", desc: "هرچه دهکده می‌آفریند، در سقف انبار ماندگار می‌شود.",
    size: [2, 2],
    store: { wood: 1200, stone: 1200, iron: 600, food: 1200, coin: 700 },
    cost: (l) => ({ wood: 130 * l, stone: 130 * l, coin: 35 * l }),
    timerMs: 25_000, maxLvl: 6,
  },
  barracks: {
    type: "barracks", fa: "پادگان", desc: "آنجا که دهقان، سرباز می‌شود؛ شمشیر، کمان و نیزه از این دروازه بیرون می‌زنند.",
    size: [3, 2],
    cost: (l) => ({ wood: 160 * l, stone: 120 * l, iron: 60 * l, coin: 50 * l }),
    timerMs: 30_000, maxLvl: 6,
  },
  tower: {
    type: "tower", fa: "برج تیرانداز", desc: "چشمِ بیدار دهکده؛ تیراندازِ بر بام، پیش از هر تهدید می‌بیند.",
    size: [2, 2],
    cost: (l) => ({ wood: 80 * l, stone: 150 * l, iron: 40 * l }),
    timerMs: 25_000, maxLvl: 6,
  },
};

/** initial layout + free plots, per realm (grid coords) */
export interface VillageLayout {
  init: [number, number, BType][];
  plots: [number, number][];
  decor?: number;
}

/* ───────────────────────── realm identity ───────────────────────── */

export interface RealmVillageConfig {
  id: string;
  fa: string;
  /** identity palette taken from the official flag */
  primary: string;    // banner / flag color
  accent: string;     // gold/emblem
  wallCol: number;    // building wall
  wallCol2: number;   // secondary plaster fill
  beamCol: number;    // timber beams
  roofCol: number;    // main roof
  roofCol2: number;   // tower roof
  stoneCol: number;   // plinths / stone towers
  trimCol: number;    // door/window frames
  bannerTex: string;  // official cloth texture path
  groundTint: string; // grass tint for the painted ground texture
  groundDark: string;
  pathCol: string;
  waterCol: string;
  skyTop: string; skyBot: string;
  fogCol: string; fogNear: number; fogFar: number;
  sunCol: string; sunPos: [number, number, number];
  hemiSky: string; hemiGround: string;
  ambient: number;
  mist?: boolean;   // dezhmaar low mist
  outerTint: string; // terrain beyond the cliff
}

export const REALM_VILLAGE: Record<string, RealmVillageConfig> = {
  targon: {
    id: "targon", fa: "تارگون",
    primary: "#c8102e", accent: "#f5c542",
    wallCol: 0xe8d9bd, wallCol2: 0xd9c8a6, beamCol: 0x6b4a2c,
    roofCol: 0xa4372f, roofCol2: 0x8c2d27, stoneCol: 0xb8a98d, trimCol: 0x5a3d24,
    bannerTex: "../gates/assets/flags/targon_cloth.webp",
    groundTint: "#7fae56", groundDark: "#6a9a47", pathCol: "#c9ab77",
    waterCol: "#3fa8d5",
    skyTop: "#ffd9a0", skyBot: "#ffefc9",
    fogCol: "#ffe3b3", fogNear: 70, fogFar: 230,
    sunCol: "#ffdfae", sunPos: [40, 55, 22], hemiSky: "#ffe9c4", hemiGround: "#7c9a5a",
    ambient: 0.35, outerTint: "#88b05e",
  },
  dezhmaar: {
    id: "dezhmaar", fa: "دژمار",
    primary: "#1e3a6e", accent: "#7fb2ff",
    wallCol: 0x9aa4b4, wallCol2: 0x8a93a6, beamCol: 0x3c4354,
    roofCol: 0x2c3a56, roofCol2: 0x24304a, stoneCol: 0x7e8798, trimCol: 0x2e3444,
    bannerTex: "../gates/assets/flags/dezhmaar_cloth.webp",
    groundTint: "#5e7d63", groundDark: "#4f6d55", pathCol: "#8f96a3",
    waterCol: "#3f7fb2",
    skyTop: "#8fa8c9", skyBot: "#c4d2e2",
    fogCol: "#b8c6d8", fogNear: 55, fogFar: 190,
    sunCol: "#dfe9f5", sunPos: [-35, 50, 30], hemiSky: "#cfdcee", hemiGround: "#5a6b5e",
    ambient: 0.3, mist: true, outerTint: "#66806b",
  },
};

/** master grid */
export const GRID = { w: 24, h: 24, cell: 2 };
export const GRID_W = GRID.w, GRID_H = GRID.h, CELL = GRID.cell;
export const WORLD_W = GRID_W * CELL, WORLD_H = GRID_H * CELL;
/** buildable plateau (leaves a rim of cells as cliff/decor) */
export const PLATEAU = { x0: 2, y0: 2, x1: GRID_W - 3, y1: GRID_H - 3 };

export const faNum = (n: number | string): string =>
  String(n).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

export const RES_FA: Record<ResKey, string> = {
  wood: "چوب", stone: "سنگ", iron: "آهن", food: "غذا", coin: "سکهٔ دهکده",
};

/** initial village layouts (data-driven, grid coords) */
export const LAYOUT: Record<string, VillageLayout> = {
  targon: {
    init: [
      [11, 11, "keep"],
      [6, 13, "house"], [15, 8, "house"],
      [6, 6, "farm"], [16, 15, "lumber"], [17, 6, "mine"],
      [9, 16, "storage"], [13, 5, "barracks"],
      [8, 9, "tower"],
    ],
    plots: [[9, 7], [14, 13], [7, 16], [16, 11], [10, 4], [18, 13]],
    decor: 7,
  },
  dezhmaar: {
    init: [
      [11, 11, "keep"],
      [7, 12, "house"], [14, 8, "house"],
      [6, 7, "farm"], [16, 14, "lumber"], [18, 6, "mine"],
      [10, 16, "storage"], [13, 4, "barracks"],
      [9, 8, "tower"], [15, 11, "tower"],
    ],
    plots: [[8, 6], [14, 16], [6, 14], [17, 10], [11, 18], [19, 14]],
    decor: 11,
  },
};
