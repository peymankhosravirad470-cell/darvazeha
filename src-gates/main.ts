/**
 * 77 Lands — vanilla controller (no framework).
 * title → loading → seven gates (3D cloth flags) → realm intro → 11 lands → 3D world
 * Ported 1:1 from the React shell of the cinematic engine.
 */
import * as THREE from "three";
import { REALMS, Realm, Land, faNum } from "./data";
import { detectTier, profile, Tier } from "./quality";
import { audio } from "./audio";
import { serverWallet, WalletView } from "./serverWallet";
import { fetchServerHome, registerServerHome, syncLocalHome } from "./serverHome";
import { createJoystick } from "./joystick";
import { GatesScene } from "./scenes/GatesScene";
import { WorldScene, NearTarget, WorldInput } from "./scenes/WorldScene";

type Phase = "title" | "loading" | "gates" | "intro" | "lands" | "world";

const $ = <T extends HTMLElement = HTMLElement>(sel: string): T => {
  const el = document.querySelector(sel);
  if (!el) throw new Error("missing element: " + sel);
  return el as T;
};

const ALL_TEX: { key: string; url: string }[] = REALMS.flatMap((r) => [
  { key: r.id, url: r.flagCloth },
  { key: `${r.id}_n`, url: r.flagNormal },
]);

let phase: Phase = "title";
let progressDone = 0;
let focused: Realm = REALMS[0];
let introRealm: Realm | null = null;
let selectedLand: Land | null = null;
let muted = false;
let tier: Tier = "mid";
let showEnter = false;
/** نسخهٔ پیشین (?world=1) — مسیر بازگشت، بدون منطق پایگاه خانگی */
let legacyMode = false;
/** سفر آگاهانه از نقشهٔ کل (?travel=<امپراتوری>) — هرگز پایگاه نمی‌سازد */
let travelRealm: Realm | null = null;

const textures: Record<string, THREE.Texture> = {};
let gatesScene: GatesScene | null = null;
let worldScene: WorldScene | null = null;
const input: WorldInput = { move: { x: 0, y: 0 }, look: { dx: 0 }, run: false };
let crystals = { got: 0, total: 5 };
let toastTimer = 0;
let introTimer = 0;
let enterTimer = 0;
let joystick: { destroy(): void } | null = null;
let lookLast: number | null = null;
let wallet: WalletView = serverWallet.get();

const screens: Partial<Record<Phase, HTMLElement>> = {};

function show(phase_: Phase): void {
  phase = phase_;
  for (const [p, el] of Object.entries(screens)) {
    (el as HTMLElement).classList.toggle("active", p === phase_);
  }
}

function showToast(msg: string): void {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("on");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => t.classList.remove("on"), 3400);
}

/* ---------------- home base (انتخاب یک‌بار امپراتوری ← پایگاه ثابت بازیکن) ----------------
   ریشهٔ باگ «هر بار وسط یک منطقهٔ رندوم»: هیچ پایگاه ماندگاری وجود نداشت و ورود فقط از
   پارامترهای URL ساخته می‌شد. این جا اندازهٔ حسابِ یک‌بارِ انتخاب + ورود مستقیم به آن است. */
const HOME_KEY = "lands.home";
interface HomeBase { r: string; l: string }
function getHome(): HomeBase | null {
  try {
    const h = JSON.parse(localStorage.getItem(HOME_KEY) || "null") as HomeBase | null;
    if (h && REALMS.some((r) => r.id === h.r && r.lands.some((l) => l.id === h.l))) return h;
  } catch { /* private mode */ }
  return null;
}
/** پایگاه خانگی = نخستین سرزمین رسمیِ امپراتوری انتخاب‌شده؛ یک‌بار ساخته می‌شود و ثابت می‌ماند. */
function setHome(realm: Realm): void {
  try { localStorage.setItem(HOME_KEY, JSON.stringify({ r: realm.id, l: realm.lands[0].id })); } catch { /* private mode */ }
}
const villageURL = (r: string, l: string): string =>
  `/game/village/index.html?realm=${encodeURIComponent(r)}&land=${encodeURIComponent(l)}`;

/* ── پایگاه خانگی سروری (لایهٔ دوم ماندگاری) ──
   سرور مرجع است؛ localStorage فقط هماهنگ‌کننده/fallback موقت. اولویت دقیق:
   ۱) سرور پایگاه دارد → همان مقدار استفاده و localStorage با آن هماهنگ می‌شود.
   ۲) سرور خالی + محلی معتبر → مهاجرت یک‌بارهٔ محلی به سرور، ورود به همان پایگاه.
   ۳) سرور در دسترس نیست + محلی معتبر → fallback موقت محلی (هیچ داده‌ای از دست نمی‌رود).
   ۴) هر دو خالی → انتخاب اولیهٔ امپراتوری.
   هیچ مقدار محلی پایگاهِ ثبت‌شدهٔ سرور را جایگزین نمی‌کند (سمت سرور هم اتمیک محافظت می‌شود).
   ثبت/مهاجرت قبل از ریدایرکت await می‌شود (با سقف زمانی)؛ وگرنه ناوبری، فچ را قطع می‌کرد. */
const SERVER_STEP_CAP_MS = 4000;
const delay = (ms: number): Promise<void> => new Promise((res) => window.setTimeout(res, ms));

async function resolveHomeOnBoot(): Promise<void> {
  const local = getHome();
  const server = await fetchServerHome();
  if (server.kind === "home") {
    syncLocalHome(server.home);
    location.replace(villageURL(server.home.r, server.home.l));
    return;
  }
  if (local && server.kind === "empty") {
    // مهاجرت یک‌بارهٔ محلی → سرور (باند‌شده در زمان؛ نتیجهٔ سرور مرجع است)
    const result = await Promise.race([registerServerHome(local), delay(SERVER_STEP_CAP_MS)]);
    if (result === "kept-existing") {
      // بین خواندن و ثبت، همان حساب در تب/دستگاه دیگری ثبت کرده — مقدار سرور می‌برد
      const again = await fetchServerHome();
      if (again.kind === "home") {
        syncLocalHome(again.home);
        location.replace(villageURL(again.home.r, again.home.l));
        return;
      }
    }
    location.replace(villageURL(local.r, local.l));
    return;
  }
  if (local && server.kind === "unreachable") {
    location.replace(villageURL(local.r, local.l)); // fallback موقت؛ همگام‌سازی پس از بازگشت اتصال
    return;
  }
  show("title");
}

/* ---------------- wallet HUD ---------------- */
function walletChipHTML(): string {
  const cls =
    wallet.status === "online" ? "" : wallet.status === "connecting" ? " connecting" : " off";
  let inner: string;
  if (wallet.status === "online") {
    inner = `<span class="coin" aria-hidden="true"></span><span class="wt-num">${faNum(wallet.balance ?? 0)}</span>`;
  } else if (wallet.status === "connecting") {
    inner = `<span class="dot-wait" aria-hidden="true"></span><span class="wt-txt">در حال اتصال…</span>`;
  } else {
    inner = `<span class="dot-off" aria-hidden="true"></span><span class="wt-txt">کیف پول: قطع</span>`;
  }
  return `<div class="wallet-chip${cls}" title="${wallet.note || ""}">${inner}</div>`;
}

function renderWallet(next?: WalletView): void {
  wallet = next ?? serverWallet.get();
  for (const slot of document.querySelectorAll<HTMLElement>(".wallet-slot")) {
    slot.innerHTML = walletChipHTML();
  }
  const tw = $("#title-wallet");
  if (wallet.status === "online") {
    tw.innerHTML = `<span class="coin" aria-hidden="true"></span> کیف پول متصل — موجودی رسمی از Backend`;
  } else if (wallet.status === "connecting") {
    tw.innerHTML = `<span class="dot-wait" aria-hidden="true"></span> در حال اتصال به سرور…`;
  } else {
    tw.innerHTML = `<span class="dot-off" aria-hidden="true"></span> اتصال به سرور برقرار نیست — موجودی نمایش داده نمی‌شود`;
    tw.title = wallet.note || "";
  }
}

/* ---------------- user preferences (set in Profile & Settings) ---------------- */
function resolveTier(): Tier {
  try {
    const q = localStorage.getItem("lands.quality");
    if (q === "high" || q === "mid" || q === "low") return q;
  } catch { /* private mode */ }
  return detectTier();
}

function applyStoredPrefs(): void {
  try {
    if (localStorage.getItem("lands.muted") === "1") {
      muted = true;
      audio.setMuted(true);
      $("#btn-mute").classList.add("muted");
    }
    if (localStorage.getItem("lands.text") === "big") {
      document.documentElement.classList.add("big-text");
    }
  } catch { /* private mode */ }
}

/* ---------------- title ---------------- */
function bindTitle(): void {
  $("#btn-enter-game").addEventListener("click", () => {
    audio.init();
    audio.resume();
    audio.startWind(1);
    audio.startMusic();
    audio.uiClick();
    show("loading");
    startPreload();
  });
}

/* ---------------- preload ---------------- */
function startPreload(): void {
  let cancelled = false;
  const loader = new THREE.TextureLoader();
  const total = ALL_TEX.length + REALMS.length;
  let done = 0;
  const tick = () => {
    done++;
    const pct = Math.round((done / total) * 100);
    $("#loading-fill").style.width = `${pct}%`;
    $("#loading-pct").textContent = faNum(pct) + "٪";
  };
  REALMS.forEach((r) => {
    const img = new Image();
    img.onload = tick;
    img.onerror = tick;
    img.src = r.art;
  });
  Promise.all(
    ALL_TEX.map(
      ({ key, url }) =>
        new Promise<void>((res) => {
          loader.load(
            url,
            (t) => {
              if (!cancelled) {
                t.colorSpace = THREE.SRGBColorSpace;
                textures[key] = t;
              }
              tick();
              res();
            },
            undefined,
            () => { tick(); res(); },
          );
        }),
    ),
  ).then(() => {
    if (cancelled) return;
    tier = resolveTier();
    show("gates");
    mountGates();
  });
  window.addEventListener("gates-unload", () => { cancelled = true; }, { once: true });
}

/* ---------------- gates ---------------- */
function mountGates(): void {
  const canvas = $<HTMLCanvasElement>("#gates-canvas");
  const prof = profile(resolveTier());
  const tex: Record<string, { cloth: THREE.Texture; normal: THREE.Texture }> = {};
  for (const r of REALMS) {
    const cloth = textures[r.id];
    const normal = textures[`${r.id}_n`];
    if (cloth && normal) tex[r.id] = { cloth, normal };
  }
  const scene = new GatesScene(canvas, prof, tex);
  scene.setLabelContainer($("#gate-labels"));
  scene.setCallbacks({
    onFocused: (id) => {
      const r = REALMS.find((x) => x.id === id)!;
      focused = r;
      renderFocus();
      audio.setKey(r.note);
      audio.setWindIntensity(r.wind.strength);
    },
    onEnterRequested: (id) => {
      const r = REALMS.find((x) => x.id === id)!;
      openIntro(r);
    },
    onSound: (k) => {
      if (k === "focus") audio.focusTick();
      else if (k === "sting") audio.selectSting(REALMS[0].note);
    },
  });
  scene.setFocus(REALMS[0].id, true);
  scene.start();
  gatesScene = scene;
  window.clearTimeout(enterTimer);
  enterTimer = window.setTimeout(() => {
    showEnter = true;
    $("#gates-enter").classList.add("in");
  }, 400);
  renderFocus();
}

function unmountGates(): void {
  window.dispatchEvent(new Event("gates-unload"));
  gatesScene?.dispose();
  gatesScene = null;
  $("#gates-enter").classList.remove("in");
  showEnter = false;
}

function renderFocus(): void {
  const chip = $("#realm-chip");
  chip.style.borderColor = focused.color;
  chip.innerHTML =
    `<span class="realm-dot" style="background:${focused.color};color:${focused.color}"></span>` +
    `<b>${focused.fa}</b><i>${focused.motto}</i>`;
  const btn = $("#gates-enter");
  // The button stays royal gold (readable on every realm); the realm identity
  // shows as the glow ring + colored dot next to the realm name.
  btn.style.removeProperty("background");
  btn.style.setProperty("--rg", focused.color + "A6");
  btn.querySelector<HTMLElement>(".enter-label")!.innerHTML =
    `<span class="enter-dot" style="background:${focused.color};box-shadow:0 0 10px ${focused.color}"></span>` +
    `ورود به ${focused.fa}`;
}

function bindGates(): void {
  $("#btn-mute").addEventListener("click", () => {
    muted = !muted;
    audio.setMuted(muted);
    $("#btn-mute").classList.toggle("muted", muted);
  });
  $("#arrow-right").addEventListener("click", () => gatesScene?.focusByOffset(1));
  $("#arrow-left").addEventListener("click", () => gatesScene?.focusByOffset(-1));
  $("#gates-enter").addEventListener("click", () => {
    audio.selectSting(focused.note);
    openIntro(focused);
  });
}

/* ---------------- intro ---------------- */
function openIntro(realm: Realm): void {
  introRealm = realm;
  audio.gateOpen();
  const scr = $("#intro-screen");
  scr.style.background = `radial-gradient(120% 90% at 50% 10%, ${realm.color}44 0%, #05060c 62%)`;
  $("#intro-art").style.backgroundImage = `url(${realm.art})`;
  $("#intro-kicker").style.color = realm.accent;
  $("#intro-kicker").textContent = `دروازهٔ ${realm.fa} گشوده می‌شود`;
  $("#intro-name").textContent = realm.fa;
  $("#intro-en").textContent = realm.en;
  $("#intro-lore").textContent = realm.lore;
  show("intro");
  window.clearTimeout(introTimer);
  introTimer = window.setTimeout(() => {
    /* نخستین انتخاب امپراتوری: پایگاه خانگی ساخته می‌شود و بازیکن مستقیم وارد آن می‌شود.
       سفر آگاهانه (?travel)، نسخهٔ پیشین (?world=1) و قلمروهای قفل مثل قبل به فهرست سرزمین‌ها می‌روند. */
    if (!legacyMode && !travelRealm && !getHome() && realm.unlocked) {
      setHome(realm);
      const fresh = getHome();
      // ثبت سروری اولین انتخاب قبل از ورود به دهکده (سقف‌دار؛ در قطعی، بوت بعدی مهاجرت می‌کند)
      void (async () => {
        if (fresh) await Promise.race([registerServerHome(fresh), delay(SERVER_STEP_CAP_MS)]);
        location.replace(villageURL(realm.id, realm.lands[0].id));
      })();
      return;
    }
    show("lands");
    renderLands();
  }, 2400);
}

/* ---------------- lands ---------------- */
function renderLands(): void {
  const realm = introRealm!;
  $("#lands-realm-name").textContent = realm.fa;
  $("#lands-realm-sub").textContent = `${realm.en} · ${faNum(realm.lands.length)} سرزمین`;
  $("#lands-hero").style.backgroundImage = `url(${realm.art})`;
  renderWallet();
  const scroll = $("#lands-scroll");
  scroll.innerHTML = "";
  realm.lands.forEach((land, i) => {
    const locked = !realm.unlocked;
    const card = document.createElement("button");
    card.className = `land-card ${locked ? "locked" : ""}`;
    card.style.setProperty("--rc", realm.color);
    card.style.setProperty("--ra", realm.accent);
    card.innerHTML =
      `<div class="land-num">${faNum(i + 1)}</div>` +
      `<div class="land-body"><div class="land-name">${land.fa}</div><div class="land-desc">${land.desc}</div></div>` +
      `<div class="land-state">${locked ? `<span class="lock">قفل</span>` : `<span class="go">ورود ←</span>`}</div>`;
    card.addEventListener("click", () => {
      if (locked) {
        audio.uiClick();
        showToast("این قلمرو هنوز دروازه‌اش بسته است — به‌زودی!");
        return;
      }
      audio.gateOpen();
      try { localStorage.setItem("lands.lastLand", JSON.stringify({ r: realm.id, l: land.id })); } catch { /* private mode */ }
      // Stage-2 strategy layer: an unlocked realm now leads to the player's
      // own isometric village (Clash-of-Clans-like hub). The old exploration
      // world stays reachable via ?world=1 for rollback.
      const legacy = new URLSearchParams(location.search).get("world") === "1";
      if (legacy) {
        selectedLand = land;
        crystals = { got: 0, total: 5 };
        show("world");
        mountWorld();
        return;
      }
      location.href = `/game/village/index.html?realm=${encodeURIComponent(realm.id)}&land=${encodeURIComponent(land.id)}`;
    });
    scroll.appendChild(card);
  });
  $("#lands-locknote").style.display = realm.unlocked ? "none" : "block";
  if (!realm.unlocked) {
    $("#lands-locknote").textContent = `پرچم ${realm.fa} باشکوه است، اما گذرش هنوز با پیمانِ نسخهٔ بعد گشوده می‌شود.`;
  }
}

function bindLands(): void {
  $("#btn-lands-back").addEventListener("click", () => {
    audio.uiClick();
    if (travelRealm) { location.href = "/game/map/index.html"; return; } // سفر از نقشه ← بازگشت به نقشه
    unmountGates();
    show("gates");
    mountGates();
  });
}

/* ---------------- world ---------------- */
function mountWorld(): void {
  const realm = focused;
  const land = selectedLand!;
  const prof = profile(resolveTier());
  $("#land-chip").innerHTML =
    `<span class="land-chip-realm" style="color:${realm.accent}">${realm.fa}</span>` +
    `<span class="land-chip-sep">·</span><span>${land.fa}</span>`;
  renderWallet();
  // remember the player's actual position for the World Map «موقعیت شما» marker
  try { localStorage.setItem("lands.lastLand", JSON.stringify({ r: realm.id, l: land.id })); } catch { /* private mode */ }
  // joystick side preference (Profile → Controls)
  try { document.body.classList.toggle("joy-right", localStorage.getItem("lands.joy") === "right"); } catch { /* private mode */ }

  const scene = new WorldScene(
    $<HTMLCanvasElement>("#world-canvas"),
    prof,
    realm,
    land,
    input,
    {
      onNear: (t: NearTarget) => {
        const holder = $("#world-interact");
        if (t) {
          holder.style.display = "flex";
          $("#interact-label").textContent = t.label;
        } else {
          holder.style.display = "none";
        }
      },
      onTalk: (npcId: string) => {
        const labels: Record<string, string> = {
          quest: "نگهبان سرزمین", merchant: "بازرگان", villager: "اهالی دهکده",
        };
        const lines: Record<string, string[]> = {
          quest: [
            `به ${land.fa} خوش آمدی، مسافرِ ${realm.fa}.`,
            "کریستال‌های شعله در سرزمین پراکنده شده‌اند؛ پنج کریستال بیاور تا برکتِ روز تجدید شود.",
            "کارِ بزرگ از گام‌های کوچک ساخته می‌شود.",
          ],
          merchant: [
            "وارد شو! هرچه از آتش و آهن و ادویه بخواهی همین‌جاست… فعلاً چشمک!",
            "کریستال‌هایت را به نگهبان بده؛ بازارِ ما همیشه باز است.",
          ],
          villager: [
            "امروز باد از سمت کوه می‌وزد؛ پرچم‌ها پرشورتر از همیشه‌اند.",
            "اگر صندوقی در دشت‌ها دیدی، بدان که پادشاه راهش را عوض کرده است!",
          ],
        };
        const arr = lines[npcId] ?? lines.villager;
        const line = arr[Math.floor(Math.random() * arr.length)];
        openDialog(labels[npcId] ?? "", line, npcId === "quest" && crystals.got >= 5);
      },
      onChestOpened: () => {
        // No local coin minting — the real balance comes only from the backend.
        showToast("صندوق گنج باز شد! موجودی رسمی فقط از سرور به‌روز می‌شود.");
      },
      onCrystalCollected: (got: number, total: number) => {
        crystals = { got, total };
        renderQuest();
      },
      onQuestComplete: () => {
        // No local coin minting — the real balance comes only from the backend.
        crystals = { got: 0, total: 5 };
        renderQuest();
        showToast("مأموریت روزانه کامل شد! موجودی رسمی فقط از سرور به‌روز می‌شود.");
      },
      onExit: () => {
        unmountWorld();
        show("lands");
        renderLands();
      },
      onToast: showToast,
    },
    textures[realm.id] ?? null,
  );
  scene.start();
  worldScene = scene;
  audio.setWindIntensity(0.45);
  renderQuest();

  const canvas = $<HTMLCanvasElement>("#world-canvas");
  const onDown = (e: PointerEvent) => { lookLast = e.clientX; };
  const onMove = (e: PointerEvent) => {
    if (lookLast !== null) {
      input.look.dx += e.clientX - lookLast;
      lookLast = e.clientX;
    }
  };
  const onUp = () => { lookLast = null; };
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  worldCleanup = () => {
    canvas.removeEventListener("pointerdown", onDown);
    canvas.removeEventListener("pointermove", onMove);
    canvas.removeEventListener("pointerup", onUp);
    canvas.removeEventListener("pointercancel", onUp);
  };

  joystick = createJoystick($("#joystick-zone"), $("#joystick-knob"), (x, y) => {
    input.move.x = x;
    input.move.y = y;
  });
  $("#world-tier").textContent =
    tier === "high" ? "کیفیت: بالا" : tier === "mid" ? "کیفیت: متعادل" : "کیفیت: سبک";
}

let worldCleanup: (() => void) | null = null;

function renderQuest(): void {
  const active = $("#quest-card");
  const done = $("#quest-card-done");
  if (crystals.got > 0 && crystals.got < crystals.total) {
    active.style.display = "flex";
    done.style.display = "none";
    $("#quest-progress").textContent = `کریستال‌های شعله: ${faNum(crystals.got)} از ${faNum(crystals.total)}`;
    active.querySelector<HTMLElement>(".quest-bar div")!.style.width =
      `${(crystals.got / crystals.total) * 100}%`;
  } else if (crystals.got >= crystals.total) {
    active.style.display = "none";
    done.style.display = "flex";
  } else {
    active.style.display = "none";
    done.style.display = "none";
  }
}

function openDialog(name: string, line: string, canTurnIn: boolean): void {
  $("#dialog-name").textContent = name;
  $("#dialog-line").textContent = line;
  $("#btn-turnin").style.display = canTurnIn ? "block" : "none";
  $("#dialog-backdrop").classList.add("on");
}
function closeDialog(): void {
  $("#dialog-backdrop").classList.remove("on");
}

function bindWorld(): void {
  $("#btn-world-back").addEventListener("click", () => {
    audio.uiClick();
    unmountWorld();
    show("lands");
    renderLands();
  });
  $("#btn-run").addEventListener("pointerdown", (e) => {
    e.preventDefault();
    input.run = !input.run;
    $("#btn-run").classList.toggle("on", input.run);
  });
  $("#world-interact").addEventListener("pointerdown", (e) => {
    e.preventDefault();
    worldScene?.interact();
  });
  $("#btn-turnin").addEventListener("click", () => {
    worldScene?.completeQuest();
    closeDialog();
  });
  $("#dialog-close").addEventListener("click", closeDialog);
  $("#dialog-backdrop").addEventListener("click", (e) => {
    if (e.target === $("#dialog-backdrop")) closeDialog();
  });
}

function unmountWorld(): void {
  joystick?.destroy();
  joystick = null;
  worldCleanup?.();
  worldCleanup = null;
  worldScene?.dispose();
  worldScene = null;
  $("#world-interact").style.display = "none";
}

/* ---------------- boot ---------------- */
function boot(): void {
  screens.title = $("#title-screen");
  screens.loading = $("#loading-screen");
  screens.gates = $("#gates-screen");
  screens.intro = $("#intro-screen");
  screens.lands = $("#lands-screen");
  screens.world = $("#world-screen");
  for (const [, el] of Object.entries(screens)) el.classList.remove("active");

  serverWallet.subscribe(renderWallet);
  void serverWallet.init();
  renderWallet();

  applyStoredPrefs();
  bindTitle();
  bindGates();
  bindLands();
  bindWorld();

  /* ── مسیر ورود (رفع ورود رندوم به منطقه) ──
     ۱) ‎?world=1 ← نسخهٔ پیشین، مثل قبل.
     ۲) ‎?travel=<امپراتوری> ← سفر آگاهانه از نقشهٔ کل: مستقیم فهرست سرزمین‌های همان امپراتوری.
     ۳) پایگاه خانگی موجود ← هر بار ورود، مستقیم پایگاه خود بازیکن (مثل ورود به ویلیج).
     ۴) بدون پایگاه ← انتخاب یک‌بارِ امپراتوری از هفت پرچم. */
  const params = new URLSearchParams(location.search);
  legacyMode = params.get("world") === "1";
  const travelId = params.get("travel");
  travelRealm = travelId ? REALMS.find((r) => r.id === travelId) ?? null : null;
  if (!legacyMode && travelRealm) {
    introRealm = travelRealm;
    show("lands");
    renderLands();
    return;
  }
  if (legacyMode) {
    show("title");
    return;
  }
  /* مسیر پایگاه خانگی اکنون سرورمحور است (اول سرور، بعد محلی) — resolveHomeOnBoot
     یا مستقیم به پایگاه می‌برد یا صفحهٔ انتخاب اولیه را نشان می‌دهد. */
  void resolveHomeOnBoot();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
(window as unknown as { __GATES_BUILD: string }).__GATES_BUILD = "2026-11-06-a";
