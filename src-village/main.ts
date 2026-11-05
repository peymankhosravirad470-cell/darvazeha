/**
 * 77 Lands — Village page controller (HUD + panels + wiring).
 * هیچ منطق اقتصادی رسمی این‌جا نیست؛ فقط اقتصاد درون‌بازی دهکده روی دستگاه.
 */
import * as THREE from "three";
import {
  BUILDINGS, BType, REALM_VILLAGE, RES_FA, ResKey, faNum, LAYOUT,
} from "./config";
import {
  VillageState, caps, collect, costOf, load, missionProgress, MISSIONS,
  pending, save, settle, startBuild, startUpgrade, canAfford,
} from "./state";
import { VillageScene } from "./scene";
import { detectTier, profile as gatesProfile, Tier } from "../src-gates/quality";

const $ = <T extends HTMLElement = HTMLElement>(s: string): T => {
  const el = document.querySelector(s);
  if (!el) throw new Error("missing " + s);
  return el as T;
};

/* ── query ── */
const qp = new URLSearchParams(location.search);
let realmId = qp.get("realm") ?? "targon";
if (!REALM_VILLAGE[realmId]) realmId = "targon";
const landId = qp.get("land") ?? "t1";
const cfg = REALM_VILLAGE[realmId];

/* ── tier ── */
function resolveTier(): Tier {
  try {
    const q = localStorage.getItem("lands.quality");
    if (q === "high" || q === "mid" || q === "low") return q;
  } catch { /* private mode */ }
  return detectTier();
}
const tier = resolveTier();
const gp = gatesProfile(tier);
const vp = {
  tier,
  dpr: gp.dpr,
  shadows: tier === "high" ? 2048 : tier === "mid" ? 1024 : 0,
  trees: tier === "high" ? 90 : tier === "mid" ? 55 : 30,
  props: tier === "high" ? 26 : tier === "mid" ? 16 : 8,
};

/* ── state ── */
const loaded = load(realmId, landId);
const st: VillageState = loaded.st;
const now0 = Date.now();
const settledEarly = settle(st, now0);
if (loaded.fresh) {
  const lay = LAYOUT[realmId];
  let i = 0;
  for (const [x, y, type] of lay.init) {
    st.buildings.push({ id: `i${i++}`, type, lvl: 1, targetLvl: 1, x, y, doneAt: 0, lastAt: now0 });
  }
  save(st);
}

/* ── toast ── */
let toastTimer = 0;
function toast(msg: string): void {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("on");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => t.classList.remove("on"), 2600);
}

/* ── HUD refs ── */
const RES_KEYS: ResKey[] = ["wood", "stone", "iron", "food", "coin"];
let scene: VillageScene;
let selectedId: string | null = null;

function updateHUD(): void {
  const cap = caps(st);
  for (const k of RES_KEYS) {
    $(`#r-${k}`).textContent = faNum(Math.floor(st.res[k]));
    $(`#c-${k}`).textContent = "/" + faNum(Math.floor(cap[k]));
    $(`.res.r-${k}`).classList.toggle("full", st.res[k] >= cap[k] * 0.98);
  }
}

const costHTML = (cost: Partial<Res>): string =>
  (Object.keys(cost) as ResKey[])
    .map((k) => {
      const need = cost[k] ?? 0;
      const lack = st.res[k] < need;
      return `<span class="c ${lack ? "lack" : ""}">${RES_FA[k]}: ${faNum(need)}</span>`;
    })
    .join("");

function fmtTimer(ms: number): string {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${faNum(Math.floor(s / 60))}:${faNum(String(s % 60).padStart(2, "0"))}`;
}

/* ── selection panel ── */
function openPanel(id: string): void {
  const b = st.buildings.find((x) => x.id === id);
  if (!b) return;
  const def = BUILDINGS[b.type];
  selectedId = id;
  $("#sel-name").textContent = def.fa;
  $("#sel-lvl").textContent = b.doneAt > 0
    ? `سطح ${faNum(b.targetLvl ?? b.lvl)} در راه`
    : `سطح ${faNum(b.lvl)}`;
  $("#sel-sub").textContent = b.doneAt > 0 ? "در حال ساخت…" : `${def.size[0]}×${def.size[1]} خانهٔ شبکه`;
  $("#sel-desc").textContent = def.desc;
  const prod = $("#sel-prod");
  if (def.produce) {
    prod.innerHTML =
      `<span>تولید در ساعت:</span>` +
      (Object.keys(def.produce) as ResKey[])
        .map((k) => `<span>${RES_FA[k]}: ${faNum(Math.round((def.produce![k] ?? 0) * b.lvl))}</span>`)
        .join("") +
      `<span>ظرفیت انبار سازه: ${faNum(def.pCap ?? 0)}</span>`;
  } else if (def.store) {
    prod.innerHTML =
      `<span>افزودن سقف انبار در هر سطح:</span>` +
      (Object.keys(def.store) as ResKey[])
        .map((k) => `<span>${RES_FA[k]}: +${faNum(def.store![k] ?? 0)}</span>`)
        .join("");
  } else {
    prod.innerHTML = `<span>سازهٔ دفاعی — برای نسخهٔ نبرد</span>`;
  }
  const upg = $("#btn-upgrade") as HTMLButtonElement;
  const costEl = $("#sel-cost");
  const timerEl = $("#sel-timer");
  const moveBtn = $("#btn-move") as HTMLButtonElement;
  const colBtn = $("#btn-collect") as HTMLButtonElement;
  if (b.doneAt > 0) {
    upg.disabled = true; moveBtn.disabled = true;
    costEl.innerHTML = "";
    timerEl.textContent = `آماده‌سازی تا ${fmtTimer(b.doneAt - Date.now())}`;
    colBtn.style.display = "none";
  } else {
    moveBtn.disabled = false;
    timerEl.textContent = "";
    if (b.lvl >= def.maxLvl) {
      upg.disabled = true;
      costEl.innerHTML = `<span class="c">به بیشینهٔ سطح رسیده است</span>`;
    } else {
      const cost = costOf(b.type, b.lvl + 1);
      upg.disabled = !canAfford(st, cost);
      costEl.innerHTML = `هزینهٔ ارتقا به سطح ${faNum(b.lvl + 1)}: ` + costHTML(cost);
    }
    const p = pending(b, Date.now());
    const tot = (Object.keys(p) as ResKey[]).reduce((a, k) => a + p[k], 0);
    colBtn.style.display = def.produce && tot >= 1 ? "flex" : "none";
  }
  $("#selpanel").classList.add("on");
}

function closePanel(): void {
  $("#selpanel").classList.remove("on");
  selectedId = null;
}

/* ── scene callbacks ── */
const cb = {
  onSelect: (id: string | null) => {
    if (id) openPanel(id);
    else closePanel();
  },
  onCollect: (id: string) => doCollect(id),
  onToast: toast,
};

function doCollect(id: string): void {
  const got = collect(st, id, Date.now());
  const total = (Object.keys(got) as ResKey[]).reduce((a, k) => a + got[k], 0);
  if (total > 0) {
    const parts = (Object.keys(got) as ResKey[]).filter((k) => got[k] > 0)
      .map((k) => `${RES_FA[k]} +${faNum(Math.floor(got[k]))}`);
    toast(`برداشت شد: ${parts.join(" · ")}`);
    save(st); updateHUD();
    if (selectedId) openPanel(selectedId);
  }
}

/* ── build menu ── */
const BUILD_ICONS: Record<string, string> = {
  house: "bi-house", farm: "bi-farm", lumber: "bi-lumber", mine: "bi-mine",
  storage: "bi-storage", barracks: "bi-barracks", tower: "bi-tower",
};
function openBuildMenu(): void {
  const list = $("#buildlist");
  list.innerHTML = "";
  (Object.keys(BUILDINGS) as BType[]).forEach((t) => {
    if (t === "keep") return;
    const def = BUILDINGS[t];
    const cost = costOf(t, 1);
    const afford = canAfford(st, cost);
    const el = document.createElement("div");
    el.className = "buildele";
    el.innerHTML =
      `<div class="bic ${BUILD_ICONS[t]}"></div>` +
      `<div style="flex:1"><div class="bname">${def.fa}</div><div class="bdesc">${def.desc}</div>` +
      `<div class="costline" style="margin:4px 0 0">${costHTML(cost)}</div></div>` +
      `<div style="font-size:11px;color:${afford ? "var(--ok)" : "var(--bad)"}">${afford ? "آماده" : "کمبود منبع"}</div>`;
    el.addEventListener("click", () => {
      if (!afford) { toast("منابع کافی نیست."); return; }
      $("#buildmenu").classList.remove("on");
      closePanel();
      scene.select(null);
      scene.enterMove(null, t);
      $("#confirmhint").textContent = `جای ${def.fa} را لمس کن`;
      $("#confirmbar").classList.add("on");
    });
    list.appendChild(el);
  });
  $("#buildmenu").classList.add("on");
}

/* ── missions ── */
function renderMissions(): void {
  const list = $("#missionlist");
  list.innerHTML = "";
  for (const m of MISSIONS) {
    const { cur, done } = missionProgress(st, m);
    const pct = Math.min(100, Math.round((cur / m.goal) * 100));
    const el = document.createElement("div");
    el.className = "mission";
    el.innerHTML =
      `<div class="mname">${m.fa}</div>` +
      `<div class="mbar"><div style="width:${pct}%"></div></div>` +
      `<div class="mmeta"><span>${faNum(Math.min(cur, m.goal))} از ${faNum(m.goal)}</span>` +
      `<span>${done ? "انجام شد" : pct + "٪"}</span></div>`;
    list.appendChild(el);
  }
}

/* ── boot ── */
async function boot(): Promise<void> {
  $("#boot-title").textContent = `دهکدهٔ ${cfg.fa}`;
  $("#realm-name").textContent = cfg.fa;
  $("#realmchip").textContent = `سرزمین: ${cfg.fa} · دهکدهٔ تو`;

  const bannerTex = await new Promise<THREE.Texture | null>((res) => {
    new THREE.TextureLoader().load(
      cfg.bannerTex,
      (t) => { t.colorSpace = THREE.SRGBColorSpace; res(t); },
      undefined,
      () => res(null),
    );
  });

  const canvas = document.createElement("canvas");
  $("#stage").appendChild(canvas);
  scene = new VillageScene(canvas, st, cfg, vp, bannerTex, cb);

  // re-sync if timers were already finished before scene creation
  if (settledEarly) scene.syncAll();

  updateHUD();

  /* buttons */
  $("#btn-build").addEventListener("click", openBuildMenu);
  $("#btn-missions").addEventListener("click", () => { renderMissions(); $("#missionsheet").classList.add("on"); });
  $("#btn-settings").addEventListener("click", () => $("#settingsheet").classList.add("on"));
  $("#btn-map").addEventListener("click", () => { try { localStorage.setItem("lands.lastLand", JSON.stringify({ r: realmId, l: landId })); } catch { /* noop */ } location.href = "/game/map/index.html"; });
  $("#btn-alliance").addEventListener("click", () => toast("اتحادها در نسخهٔ بعد می‌آیند — سپاه تو در حال شکل‌گرفتن است."));
  $("#btn-shop").addEventListener("click", () => toast("فروشگاه رسمی فقط از طریق Backend فعال می‌شود؛ هیچ خرید مستقیمی وجود ندارد."));
  $("#btn-upgrade").addEventListener("click", () => {
    if (!selectedId) return;
    const id = selectedId;
    if (startUpgrade(st, id, Date.now())) {
      scene.refreshBuilding(id);
      save(st); updateHUD(); openPanel(id);
      toast("ارتقا آغاز شد؛ تا پایان انتظار بکش.");
    } else toast("منابع کافی نیست.");
  });
  $("#btn-move").addEventListener("click", () => {
    if (!selectedId) return;
    const id = selectedId;
    closePanel();
    scene.enterMove(id, null);
    $("#confirmhint").textContent = "جای تازهٔ سازه را لمس کن";
    $("#confirmbar").classList.add("on");
  });
  $("#btn-collect").addEventListener("click", () => { if (selectedId) doCollect(selectedId); });
  $("#btn-rot-r").addEventListener("click", () => scene.rotate(1));
  $("#btn-rot-l").addEventListener("click", () => scene.rotate(-1));
  $("#btn-confirm").addEventListener("click", () => {
    if (scene.moveId) {
      if (scene.confirmMove()) { save(st); toast("سازه جابه‌جا شد."); }
      else toast("این‌جا جا نیست.");
    } else if (scene.buildType) {
      const t = scene.buildType;
      const b = startBuild(st, t, scene.ghostGX, scene.ghostGY, Date.now());
      if (b) {
        scene.syncAll(); save(st); updateHUD();
        toast(`${BUILDINGS[t].fa} در حال ساخت است.`);
      } else toast("منابع کافی یا جای مناسب نیست.");
    }
    $("#confirmbar").classList.remove("on");
    scene.cancelMove();
  });
  $("#btn-cancel").addEventListener("click", () => { $("#confirmbar").classList.remove("on"); scene.cancelMove(); });
  document.querySelectorAll("#settingsheet [data-q]").forEach((b) => {
    b.addEventListener("click", () => {
      const q = (b as HTMLElement).dataset.q!;
      try { localStorage.setItem("lands.quality", q); } catch { /* noop */ }
      toast("کیفیت تغییر کرد — صفحه تازه‌سازی می‌شود.");
      setTimeout(() => location.reload(), 600);
    });
  });
  let resetArm = false;
  $("#btn-reset").addEventListener("click", () => {
    if (!resetArm) {
      resetArm = true;
      $("#btn-reset").textContent = "مطمئنی؟ دوباره بزن";
      setTimeout(() => { resetArm = false; $("#btn-reset").textContent = "بازسازی دهکده"; }, 2500);
      return;
    }
    try { localStorage.removeItem(`lands.village.${realmId}`); } catch { /* noop */ }
    location.reload();
  });

  // close sheets on outside tap
  document.addEventListener("pointerdown", (e) => {
    const t = e.target as HTMLElement;
    for (const id of ["#buildmenu", "#missionsheet", "#settingsheet"]) {
      const sh = $(id);
      if (sh.classList.contains("on") && !sh.contains(t) && !(t.closest && t.closest(".barbtn"))) sh.classList.remove("on");
    }
  });

  /* server chip: honest /health check */
  fetch("/health", { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((j) => {
      $("#serverdot").classList.toggle("on", !!(j && (j.status === "ok" || j.database === "ok")));
      $("#serverdot").classList.toggle("off", !(j && (j.status === "ok" || j.database === "ok")));
    })
    .catch(() => { $("#serverdot").classList.add("off"); });

  /* fps */
  let frames = 0; let fpsT = performance.now();
  const fpsLoop = (t: number) => {
    frames++;
    if (t - fpsT >= 1000) { $("#fps").textContent = `${frames} fps`; frames = 0; fpsT = t; }
    requestAnimationFrame(fpsLoop);
  };
  requestAnimationFrame(fpsLoop);

  /* periodic: settle timers + HUD + save */
  setInterval(() => {
    const now = Date.now();
    const wasUnder = st.buildings.some((b) => b.doneAt > 0);
    if (settle(st, now)) {
      scene.syncAll();
      toast("سازه‌ای آماده شد!");
      if (selectedId) openPanel(selectedId);
    }
    if (wasUnder && selectedId) openPanel(selectedId);
    updateHUD();
  }, 1000);
  setInterval(() => save(st), 5000);
  window.addEventListener("pagehide", () => save(st));

  /* debug/test hook (no economy side effects beyond this device) */
  (window as unknown as Record<string, unknown>).__VILLAGE = {
    st, scene,
    addRes(r: Partial<Record<ResKey, number>>) { (Object.keys(r) as ResKey[]).forEach((k) => { st.res[k] += r[k] ?? 0; }); save(st); updateHUD(); },
    forceFinish(id: string) {
      const b = st.buildings.find((x) => x.id === id);
      if (b) { b.doneAt = 1; settle(st, Date.now()); scene.syncAll(); save(st); updateHUD(); }
    },
    upgrade(id: string) { return startUpgrade(st, id, Date.now()); },
    collect(id: string) { return collect(st, id, Date.now()); },
    buildings: () => st.buildings.map((b) => ({ id: b.id, type: b.type, lvl: b.lvl, x: b.x, y: b.y, doneAt: b.doneAt })),
    tier,
  };

  // hide boot overlay after first frames
  setTimeout(() => {
    $("#boot").classList.add("off");
    if (loaded.fresh) toast(`دهکدهٔ ${cfg.fa} از امروز مال توست — قلعه‌ات را آباد کن!`);
  }, 500);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else void boot();
