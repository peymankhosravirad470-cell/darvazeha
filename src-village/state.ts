/**
 * 77 Lands — Village Strategy Layer: state (pure logic, no THREE).
 *
 * اقتصاد محلی دهکده — کاملاً مستقل از توکن تخفیف/دفترکل بک‌اند:
 * ذخیره در localStorage با کلیدهای lands.village.* و بدون هیچ درخواست شبکه.
 * هر تابع خالص است تا در آزمون‌ها (Node/Playwright) قابل استفاده باشد.
 */
import { BUILDINGS, BType, GRID_W, GRID_H, PLATEAU, Res, ResKey } from "./config";

export interface BInst {
  id: string;
  type: BType;
  lvl: number;
  /** level being built toward (while doneAt > 0) */
  targetLvl: number;
  x: number;
  y: number;
  /** epoch ms when a build/upgrade finishes (0 = ready) */
  doneAt: number;
  /** epoch ms of last collector drain (for produce buildings) */
  lastAt: number;
}

export interface VillageState {
  v: number;            // state schema version
  realm: string;
  land: string;
  createdAt: number;
  res: Res;
  buildings: BInst[];
  /** lifetime totals for missions */
  totals: Res;
}

const KEY = (realm: string) => `lands.village.${realm}`;
export const STATE_V = 2;

export const emptyRes = (): Res => ({ wood: 0, stone: 0, iron: 0, food: 0, coin: 0 });

let _idc = 0;
const nid = () => `b${Date.now().toString(36)}${(_idc++).toString(36)}`;

/* ───────────────────────── caps ───────────────────────── */

export function caps(st: VillageState): Res {
  const c = emptyRes();
  for (const b of st.buildings) {
    if (b.doneAt) continue; // under construction: contributes nothing yet
    const def = BUILDINGS[b.type];
    if (!def.store) continue;
    (Object.keys(def.store) as ResKey[]).forEach((k) => {
      c[k] += (def.store![k] ?? 0) * b.lvl;
    });
  }
  // generous floor so the demo village never hard-locks
  if (c.wood < 400) c.wood = 400;
  if (c.stone < 400) c.stone = 400;
  if (c.iron < 200) c.iron = 200;
  if (c.food < 400) c.food = 400;
  if (c.coin < 300) c.coin = 300;
  return c;
}

/* ───────────────────────── occupancy ───────────────────────── */

export function footprint(b: BInst): { w: number; d: number } {
  const [w, d] = BUILDINGS[b.type].size;
  return { w, d };
}

export function collides(st: VillageState, bid: string | null, x: number, y: number, w: number, d: number): boolean {
  if (x < PLATEAU.x0 || y < PLATEAU.y0 || x + w - 1 > PLATEAU.x1 || y + d - 1 > PLATEAU.y1) return true;
  for (const o of st.buildings) {
    if (o.id === bid) continue;
    const f = footprint(o);
    if (x < o.x + f.w && o.x < x + w && y < o.y + f.d && o.y < y + d) return true;
  }
  return false;
}

/* ───────────────────────── production ───────────────────────── */

/** pending resources inside a producer's collector (lazy, capped) */
export function pending(b: BInst, now: number): Res {
  const def = BUILDINGS[b.type];
  const p = emptyRes();
  if (!def.produce || b.doneAt) return p;
  const hrs = Math.max(0, Math.min((now - b.lastAt) / 3_600_000, 8)); // 8h offline cap
  (Object.keys(def.produce) as ResKey[]).forEach((k) => {
    p[k] = Math.min(def.pCap ?? 500, (def.produce![k] ?? 0) * b.lvl * hrs);
  });
  return p;
}

export function totalPending(st: VillageState, now: number): Res {
  const t = emptyRes();
  for (const b of st.buildings) {
    const p = pending(b, now);
    (Object.keys(p) as ResKey[]).forEach((k) => (t[k] += p[k]));
  }
  return t;
}

export function collect(st: VillageState, id: string, now: number): Res {
  const b = st.buildings.find((x) => x.id === id);
  if (!b) return emptyRes();
  const p = pending(b, now);
  const cap = caps(st);
  const got = emptyRes();
  (Object.keys(p) as ResKey[]).forEach((k) => {
    const room = Math.max(0, cap[k] - st.res[k]);
    const take = Math.min(room, Math.floor(p[k]));
    st.res[k] += take;
    st.totals[k] += take;
    got[k] = take;
  });
  b.lastAt = now;
  return got;
}

/** called once on boot + periodically: finish timers → apply target level */
export function settle(st: VillageState, now: number): boolean {
  let changed = false;
  for (const b of st.buildings) {
    if (b.doneAt && b.doneAt <= now) {
      b.lvl = b.targetLvl ?? b.lvl;
      b.doneAt = 0;
      b.lastAt = now;
      changed = true;
    }
  }
  return changed;
}

/* ───────────────────────── build / upgrade / move ───────────────────────── */

export function costOf(type: BType, lvl: number): Partial<Res> {
  return BUILDINGS[type].cost(lvl);
}

export function canAfford(st: VillageState, cost: Partial<Res>): boolean {
  return (Object.keys(cost) as ResKey[]).every((k) => st.res[k] >= (cost[k] ?? 0));
}

export function pay(st: VillageState, cost: Partial<Res>): boolean {
  if (!canAfford(st, cost)) return false;
  (Object.keys(cost) as ResKey[]).forEach((k) => { st.res[k] -= cost[k] ?? 0; });
  return true;
}

export function startBuild(st: VillageState, type: BType, x: number, y: number, now: number): BInst | null {
  const def = BUILDINGS[type];
  const [w, d] = def.size;
  if (collides(st, null, x, y, w, d)) return null;
  if (!pay(st, def.cost(1))) return null;
  const b: BInst = { id: nid(), type, lvl: 0, targetLvl: 1, x, y, doneAt: now + def.timerMs, lastAt: now };
  st.buildings.push(b);
  return b;
}

export function startUpgrade(st: VillageState, id: string, now: number): boolean {
  const b = st.buildings.find((x) => x.id === id);
  if (!b || b.doneAt) return false;
  const def = BUILDINGS[b.type];
  if (b.lvl >= def.maxLvl) return false;
  if (!pay(st, def.cost(b.lvl + 1))) return false;
  b.targetLvl = b.lvl + 1;
  b.doneAt = now + def.timerMs;
  return true;
}

export function moveBuilding(st: VillageState, id: string, x: number, y: number): boolean {
  const b = st.buildings.find((v) => v.id === id);
  if (!b) return false;
  const [w, d] = BUILDINGS[b.type].size;
  if (collides(st, id, x, y, w, d)) return false;
  b.x = x; b.y = y;
  return true;
}

/* ───────────────────────── persistence ───────────────────────── */

export function freshState(realm: string, land: string): VillageState {
  return {
    v: STATE_V, realm, land, createdAt: Date.now(),
    res: { wood: 500, stone: 420, iron: 160, food: 480, coin: 260 },
    buildings: [], totals: emptyRes(),
  };
}

export function save(st: VillageState): void {
  try { localStorage.setItem(KEY(st.realm), JSON.stringify(st)); } catch { /* private mode */ }
}

export function load(realm: string, land: string): { st: VillageState; fresh: boolean } {
  try {
    const raw = localStorage.getItem(KEY(realm));
    if (raw) {
      const st = JSON.parse(raw) as VillageState;
      if (st && st.v === STATE_V && Array.isArray(st.buildings) && st.buildings.length) {
        settle(st, Date.now());
        return { st, fresh: false };
      }
    }
  } catch { /* corrupted/private — start fresh */ }
  const st = freshState(realm, land);
  return { st, fresh: true };
}

/* ───────────────────────── missions (in-game only) ───────────────────────── */

export interface Mission {
  id: string; fa: string; goal: number; key: ResKey | "buildings";
}

export const MISSIONS: Mission[] = [
  { id: "m1", fa: "۲۰۰ چوب برای اصطبل‌ها جمع کن", goal: 200, key: "wood" },
  { id: "m2", fa: "۱۵۰ غذا از مزرعه‌ها برداشت کن", goal: 150, key: "food" },
  { id: "m3", fa: "۶ سازه در دهکده برپا کن", goal: 6, key: "buildings" },
];

export function missionProgress(st: VillageState, m: Mission): { cur: number; done: boolean } {
  const cur = m.key === "buildings"
    ? st.buildings.length
    : st.totals[m.key] + st.res[m.key];
  return { cur, done: cur >= m.goal };
}

export { GRID_W, GRID_H };
