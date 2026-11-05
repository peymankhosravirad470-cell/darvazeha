/**
 * 77 Lands — Village scene: isometric orthographic strategy view.
 * دوربین ایزومتریک + pan/zoom/چرخش ۹۰°، زمین نقاشی‌شده، فلات با لبهٔ صخره‌ای،
 * طبیعت، سیمک ساختمان‌ها از وضعیت، داربست و حلقهٔ پیشرفت، حالت جابه‌جایی،
 * نیروها/حیوانات زنده، مه و نور مخصوص هر پادشاهی.
 */
import * as THREE from "three";
import {
  BUILDINGS, BType, CELL, GRID_H, GRID_W, PLATEAU, RealmVillageConfig as RC, WORLD_H, WORLD_W, faNum,
} from "./config";
import { BInst, VillageState, footprint } from "./state";
import {
  Banner, Mats, makeBanner, makeBarracks, makeCypress, makeFarm, makeFlowers, makeHouse,
  makeKeep, makeLantern, makeLumber, makeMine, makeOak, makePine, makePond, makeRock,
  makeStorage, makeTower, makeWell, makeBird, makeMats,
} from "./builders";
import { Animal, Unit, animUnit, makeCat, makeChicken, makeUnit, UnitKind } from "./units";

export interface VillageProfile { tier: "high" | "mid" | "low"; dpr: number; shadows: number; trees: number; props: number }

export interface SceneCallbacks {
  onSelect: (id: string | null) => void;
  onCollect: (id: string) => void;
  onToast: (msg: string) => void;
}

const PI = Math.PI;
const gx2w = (g: number, n: number) => (g - n / 2 + 0.5) * CELL;
const w2gx = (x: number, n: number) => Math.round(x / CELL + n / 2 - 0.5);

/** L-shaped road cells from keep to each building (data-driven) */
function roadCells(st: VillageState): Set<number> {  const set = new Set<number>();
  const keep = st.buildings.find((b) => b.type === "keep");
  if (!keep) return set;
  const kx = keep.x + 1, ky = keep.y + 3; // front of the keep
  const key = (x: number, y: number) => y * GRID_W + x;
  const carve = (x0: number, y0: number, x1: number, y1: number) => {
    let x = x0, y = y0;
    const step = () => {
      set.add(key(x, y));
      if (x !== x1) x += Math.sign(x1 - x);
      else if (y !== y1) y += Math.sign(y1 - y);
    };
    let guard = GRID_W * GRID_H;
    while ((x !== x1 || y !== y1) && guard-- > 0) step();
    set.add(key(x1, y1));
  };
  for (const b of st.buildings) {
    if (b.type === "keep") continue;
    const f = footprint(b);
    carve(kx, ky, b.x + Math.floor(f.w / 2), b.y > ky ? b.y - 1 : b.y + f.d);
  }
  return set;
}

interface BView {
  b: BInst;
  group: THREE.Group;
  scaffold?: THREE.Group;
  ring?: THREE.Mesh;
  sign?: THREE.Sprite;
  bubble?: THREE.Sprite;
  banners: Banner[];
}

export class VillageScene {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  cam: THREE.OrthographicCamera;
  private canvas: HTMLCanvasElement;
  private cfg: RC;
  private mats: Mats;
  private prof: VillageProfile;
  private cb: SceneCallbacks;
  private st: VillageState;

  private azim = PI / 4; private elev = 0.9273; // ~53°; classic strategy tilt
  private target = new THREE.Vector3(0, 0, 0);
  private view = 30; private viewMin = 14; private viewMax = 46;
  private camR = 90;
  private azimTarget = PI / 4;

  private views = new Map<string, BView>();
  private units: { u: Unit; gx: number; gy: number; tx: number; ty: number; speed: number; t0: number }[] = [];
  private animals: { a: Animal; ox: number; oz: number }[] = [];
  private birds: { g: THREE.Group; update: (t: number) => void; r: number; a: number; h: number; s: number }[] = [];
  private mists: THREE.Sprite[] = [];
  private roadSet = new Set<number>();
  private banners: Banner[] = [];

  private selRing: THREE.Mesh;
  private ghost: THREE.Group | null = null;
  private ghostTile: THREE.Mesh;
  moveId: string | null = null;
  buildType: BType | null = null;
  private ghostGX = 0; private ghostGY = 0;

  private ray = new THREE.Raycaster();
  private ptrDown = { x: 0, y: 0, t: 0, moved: false, id: -1 };
  private pinch = { d0: 0, view0: 24, active: false };
  private pointers = new Map<number, { x: number; y: number }>();
  private selected: string | null = null;
  private disposeFns: (() => void)[] = [];
  private ro: ResizeObserver;
  private raf = 0;
  private lastT = 0;
  private clock = 0;

  constructor(canvas: HTMLCanvasElement, st: VillageState, cfg: RC, prof: VillageProfile, bannerTex: THREE.Texture | null, cb: SceneCallbacks) {
    this.canvas = canvas;
    this.st = st;
    this.cfg = cfg;
    this.prof = prof;
    this.cb = cb;
    this.bannerTexture = bannerTex;
    this.mats = makeMats(cfg, bannerTex);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: prof.tier !== "low", powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, prof.dpr));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = prof.shadows > 0;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const sky = document.createElement("canvas");
    sky.width = 2; sky.height = 256;
    const sctx = sky.getContext("2d")!;
    const grad = sctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, cfg.skyTop); grad.addColorStop(1, cfg.skyBot);
    sctx.fillStyle = grad; sctx.fillRect(0, 0, 2, 256);
    const skyTex = new THREE.CanvasTexture(sky);
    skyTex.colorSpace = THREE.SRGBColorSpace;
    this.scene.background = skyTex;
    this.scene.fog = new THREE.Fog(cfg.fogCol, cfg.fogNear, cfg.fogFar);

    this.cam = new THREE.OrthographicCamera(-10, 10, 10, -10, 1, 400);

    /* lights */
    const hemi = new THREE.HemisphereLight(new THREE.Color(cfg.hemiSky), new THREE.Color(cfg.hemiGround), 0.95);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(new THREE.Color(cfg.sunCol), 1.6);
    sun.position.set(...cfg.sunPos);
    if (prof.shadows > 0) {
      sun.castShadow = true;
      sun.shadow.mapSize.set(prof.shadows, prof.shadows);
      const sc = sun.shadow.camera as THREE.OrthographicCamera;
      sc.left = -34; sc.right = 34; sc.top = 34; sc.bottom = -34; sc.far = 160;
      sun.shadow.bias = -0.0006;
    }
    this.scene.add(sun);
    this.scene.add(new THREE.AmbientLight(0xffffff, cfg.ambient));

    this.roadSet = roadCells(st);
    this.buildEnvironment(this.roadSet);

    // selection ring
    const ringGeo = new THREE.RingGeometry(0.92, 1.08, 28);
    this.selRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(cfg.accent), transparent: true, opacity: 0.95, side: THREE.DoubleSide }));
    this.selRing.rotation.x = -PI / 2;
    this.selRing.position.y = 0.06;
    this.selRing.visible = false;
    this.scene.add(this.selRing);

    // move-mode tile
    this.ghostTile = new THREE.Mesh(
      new THREE.PlaneGeometry(CELL, CELL),
      new THREE.MeshBasicMaterial({ color: 0x44dd66, transparent: true, opacity: 0.35 }),
    );
    this.ghostTile.rotation.x = -PI / 2;
    this.ghostTile.visible = false;
    this.scene.add(this.ghostTile);

    this.syncAll();
    this.spawnLife();

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas.parentElement ?? canvas);
    this.resize();
    this.bindInput();
    this.lastT = performance.now();
    this.raf = requestAnimationFrame(this.loop);
  }

  /* ───────────── environment ───────────── */

  private buildEnvironment(roads: Set<number>): void {
    const cfg = this.cfg;
    // painted ground texture (grass blotches + roads painted later per state)
    const px = 1024;
    const cv = document.createElement("canvas");
    cv.width = cv.height = px;
    const ctx = cv.getContext("2d")!;
    ctx.fillStyle = cfg.groundTint;
    ctx.fillRect(0, 0, px, px);
    let s = (this.st.createdAt % 100000) >>> 0;
    const rr = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = rr() > 0.5 ? cfg.groundDark : cfg.groundTint;
      ctx.globalAlpha = 0.12 + rr() * 0.12;
      const r = 8 + rr() * 26;
      ctx.beginPath();
      ctx.arc(rr() * px, rr() * px, r, 0, PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    // dirt roads (data-driven, L-shaped from the keep to every building)
    const cs = px / GRID_W;
    const arr = [...roads];
    ctx.fillStyle = cfg.pathCol;
    for (const k of arr) {
      const rx = k % GRID_W, ry = Math.floor(k / GRID_W);
      ctx.globalAlpha = 0.82;
      ctx.fillRect(rx * cs - 0.5, ry * cs - 0.5, cs + 1, cs + 1); // full cell → continuous path
    }
    // organic speckle on top of the roads
    ctx.globalAlpha = 0.22;
    for (let i = 0; i < 300 && arr.length; i++) {
      const rk = arr[i % arr.length];
      const rx = rk % GRID_W, ry = Math.floor(rk / GRID_W);
      ctx.fillStyle = i % 2 ? "#4a3520" : "#ffffff26";
      ctx.beginPath();
      ctx.arc(rx * cs + Math.random() * cs, ry * cs + Math.random() * cs, 1.4 + Math.random() * 2.4, 0, PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    const groundTex = new THREE.CanvasTexture(cv);
    groundTex.colorSpace = THREE.SRGBColorSpace;
    groundTex.anisotropy = 4;

    // plateau box with grass top + cliff sides
    const cliffMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(cfg.stoneCol).multiplyScalar(0.72), roughness: 1 });
    const topMat = new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 });
    const plateau = new THREE.Mesh(boxGeo(WORLD_W + 4, 3, WORLD_H + 4), [cliffMat, cliffMat, topMat, cliffMat, cliffMat, cliffMat]);
    plateau.position.y = -1.5;
    plateau.receiveShadow = true;
    this.scene.add(plateau);

    // outer terrain
    const outer = new THREE.Mesh(
      new THREE.CircleGeometry(190, 36),
      new THREE.MeshStandardMaterial({ color: new THREE.Color(cfg.outerTint), roughness: 1 }),
    );
    outer.rotation.x = -PI / 2;
    outer.position.y = -3.1;
    outer.receiveShadow = true;
    this.scene.add(outer);

    // mountains far away
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * PI * 2 + 0.35;
      const r = 120 + (i % 3) * 26;
      const mt = new THREE.Mesh(
        new THREE.ConeGeometry(22 + (i % 4) * 9, 34 + (i % 3) * 18, 6),
        new THREE.MeshStandardMaterial({ color: new THREE.Color(cfg.stoneCol).lerp(new THREE.Color(cfg.fogCol), 0.45), roughness: 1 }),
      );
      mt.position.set(Math.cos(a) * r, -3 + 14, Math.sin(a) * r);
      this.scene.add(mt);
    }

    // nature outside + rim decor
    const n = this.prof.trees;
    for (let i = 0; i < n; i++) {
      const a = rr() * PI * 2;
      const rad = WORLD_W / 2 + 6 + rr() * 70;
      const x = Math.cos(a) * rad, z = Math.sin(a) * rad;
      const k = rr();
      const t = k < 0.45 ? makeOak(this.mats, i * 13 + 1) : k < 0.8 ? makePine(this.mats, i * 7 + 3) : makeCypress(this.mats, i * 5 + 2);
      t.position.set(x, -3.1, z);
      t.rotation.y = rr() * PI * 2;
      this.scene.add(t);
    }
    for (let i = 0; i < Math.floor(n / 3); i++) {
      const a = rr() * PI * 2;
      const rad = WORLD_W / 2 + 5 + rr() * 60;
      const rk = makeRock(this.mats, 400 + i * 17);
      rk.position.set(Math.cos(a) * rad, -3.1, Math.sin(a) * rad);
      this.scene.add(rk);
    }
    // rim decor inside plateau edges (non-buildable border cells)
    for (let i = 0; i < this.prof.props; i++) {
      const x = rr() * (GRID_W - 2), y = rr() * (GRID_H - 2);
      const inPlateau = x >= PLATEAU.x0 && x <= PLATEAU.x1 + 1 && y >= PLATEAU.y0 && y <= PLATEAU.y1 + 1;
      const nearEdge = x < PLATEAU.x0 + 0.9 || x > PLATEAU.x1 + 0.1 || y < PLATEAU.y0 + 0.9 || y > PLATEAU.y1 + 0.1;
      if (inPlateau && !nearEdge) continue;
      const wx = gx2w(x, GRID_W), wz = gx2w(y, GRID_H);
      const d = rr();
      const o = d < 0.4 ? makeOak(this.mats, 900 + i) : d < 0.6 ? makeRock(this.mats, 950 + i) : d < 0.85 ? makeFlowers(this.mats, 980 + i, 5) : makePine(this.mats, 700 + i);
      o.position.set(wx, 0, wz);
      this.scene.add(o);
    }

    // pond in the SE meadow (outside buildable grid edge)
    const pond = makePond(this.mats, 3.4);
    pond.position.set(WORLD_W / 2 - 1.5, 0.02, -WORLD_H / 2 + 5.5);
    this.scene.add(pond);

    // lanterns near the keep gate
    const keep = this.st.buildings.find((b) => b.type === "keep");
    if (keep) {
      const lx = gx2w(keep.x + 1, GRID_W);
      const lz = gx2w(keep.y + 3, GRID_H);
      for (const dx of [-3.4, 3.4]) {
        const l = makeLantern(this.mats);
        l.position.set(lx + dx, 0, lz + 1.2);
        this.scene.add(l);
      }
      const w = makeWell(this.mats, cfg);
      w.position.set(lx - 6.5, 0, lz + 4.5);
      this.scene.add(w);
    }

    // dezhmaar mist
    if (cfg.mist) {
      const mc = document.createElement("canvas");
      mc.width = mc.height = 128;
      const mctx = mc.getContext("2d")!;
      const g2 = mctx.createRadialGradient(64, 64, 6, 64, 64, 62);
      g2.addColorStop(0, "rgba(255,255,255,0.55)");
      g2.addColorStop(1, "rgba(255,255,255,0)");
      mctx.fillStyle = g2;
      mctx.fillRect(0, 0, 128, 128);
      const mtex = new THREE.CanvasTexture(mc);
      for (let i = 0; i < 7; i++) {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: mtex, transparent: true, opacity: 0.16, depthWrite: false }));
        sp.scale.set(16, 5, 1);
        sp.position.set((rr() - 0.5) * WORLD_W, 0.8 + rr() * 1.4, (rr() - 0.5) * WORLD_H);
        this.scene.add(sp);
        this.mists.push(sp);
      }
    }
  }

  /* ───────────── buildings sync ───────────── */

  private makeBuildingGroup(b: BInst): THREE.Group {
    const cfg = this.cfg;
    let g: THREE.Group;
    const tex = this.bannerTexture;
    switch (b.type) {
      case "keep": g = makeKeep(this.mats, cfg, tex, b.lvl); break;
      case "house": g = makeHouse(this.mats, cfg); break;
      case "farm": g = makeFarm(this.mats, cfg); break;
      case "lumber": g = makeLumber(this.mats, cfg); break;
      case "mine": g = makeMine(this.mats, cfg); break;
      case "storage": g = makeStorage(this.mats, cfg); break;
      case "barracks": g = makeBarracks(this.mats, cfg, tex); break;
      case "tower": g = makeTower(this.mats, cfg); break;
      default: throw new Error("unknown building type");
    }
    const f = BUILDINGS[b.type].size;
    g.scale.setScalar(1 + (b.lvl - 1) * 0.045);
    g.position.set(gx2w(b.x, GRID_W) + (f[0] - 1) * CELL / 2, 0, gx2w(b.y, GRID_H) + (f[1] - 1) * CELL / 2);
    g.rotation.y = 0;
    g.traverse((o) => { o.userData.bid = b.id; });
    return g;
  }

  private bannerTexture: THREE.Texture | null = null;
  setBannerTexture(t: THREE.Texture | null): void { this.bannerTexture = t; }

  private makeScaffold(w: number, d: number): THREE.Group {
    const g = new THREE.Group();
    const m = this.mats.wood;
    const h = 1.6 + Math.max(w, d) * 0.35;
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]] as const) {
      g.add(meshC(cylG(0.06, 0.07, h, 5), m, (sx * w) / 2, h / 2, (sz * d) / 2));
    }
    for (let i = 0; i < 3; i++) {
      const p = meshC(boxG(w + 0.2, 0.07, 0.07), m, 0, (h / 3) * (i + 1), d / 2);
      p.rotation.z = i % 2 ? 0.04 : -0.04;
      g.add(p);
      g.add(meshC(boxG(0.07, 0.07, d + 0.2), m, w / 2, (h / 3) * (i + 1), 0));
    }
    // canvas cover
    const cover = new THREE.Mesh(
      new THREE.PlaneGeometry(w * 0.9, h * 0.55),
      new THREE.MeshStandardMaterial({ color: 0xd8cbae, roughness: 1, side: THREE.DoubleSide }),
    );
    cover.position.y = h * 0.62;
    g.add(cover);
    return g;
  }

  private makeRing(): THREE.Mesh {
    return new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.68, 24, 1, 0, PI * 2),
      new THREE.MeshBasicMaterial({ color: 0xffd257, side: THREE.DoubleSide, transparent: true, opacity: 0.95 }),
    );
  }

  private makeSign(lvl: number): THREE.Sprite {
    const cv = document.createElement("canvas");
    cv.width = 96; cv.height = 96;
    const ctx = cv.getContext("2d")!;
    const draw = (lvl: number) => {
      ctx.clearRect(0, 0, 96, 96);
      ctx.fillStyle = "rgba(24,20,14,0.85)";
      ctx.strokeStyle = this.cfg.accent;
      ctx.lineWidth = 5;
      roundRect(ctx, 18, 14, 60, 60, 14);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#ffe9b0";
      ctx.font = "bold 40px Vazirmatn, sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(faNum(lvl), 48, 47);
    };
    draw(lvl);
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    sp.scale.set(0.85, 0.85, 1);
    sp.userData.redraw = (l: number) => { draw(l); tex.needsUpdate = true; };
    return sp;
  }

  private makeBubble(): THREE.Sprite {
    const cv = document.createElement("canvas");
    cv.width = 128; cv.height = 128;
    const ctx = cv.getContext("2d")!;
    const draw = (kind: string) => {
      ctx.clearRect(0, 0, 128, 128);
      ctx.fillStyle = "rgba(28,24,16,0.88)";
      ctx.beginPath();
      ctx.arc(64, 58, 40, 0, PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(52, 92); ctx.lineTo(76, 92); ctx.lineTo(64, 112);
      ctx.closePath(); ctx.fill();
      const cols: Record<string, string> = { wood: "#a8703d", stone: "#b3b8c2", iron: "#7e8ea6", food: "#e8c454", coin: "#f2c545" };
      ctx.fillStyle = cols[kind] ?? "#f2c545";
      ctx.beginPath();
      ctx.arc(64, 58, 20, 0, PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 34px Vazirmatn, sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("+", 64, 59);
    };
    draw("wood");
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    sp.scale.set(1.0, 1.0, 1);
    sp.visible = false;
    sp.userData.redraw = (kind: string) => { draw(kind); tex.needsUpdate = true; };
    return sp;
  }

  /** create/update all building views from state */
  syncAll(): void {
    const seen = new Set<string>();
    for (const b of this.st.buildings) {
      seen.add(b.id);
      let v = this.views.get(b.id);
      if (!v) {
        const group = this.makeBuildingGroup(b);
        this.scene.add(group);
        v = { b, group, banners: [] };
        this.views.set(b.id, v);
        this.collectBanners(group, v);
      }
      this.refreshView(v);
    }
    for (const [id, v] of [...this.views]) {
      if (!seen.has(id)) {
        this.scene.remove(v.group);
        disposeGroup(v.group);
        this.views.delete(id);
      }
    }
  }

  /** public: rebuild one building view by id */
  refreshBuilding(id: string): void {
    const v = this.views.get(id);
    if (v) this.refreshView(v);
  }

  private collectBanners(group: THREE.Group, v: BView): void {
    group.traverse((o) => {
      const bn = (o as THREE.Group & { banner?: Banner }).banner;
      if (bn) { v.banners.push(bn); this.banners.push(bn); }
    });
  }

  /** rebuild a view after build/upgrade completes */
  refreshView(v: BView): void {
    const b = v.b;
    const under = b.doneAt > 0;
    v.group.visible = !under;
    if (under) {
      if (!v.scaffold) {
        const f = BUILDINGS[b.type].size;
        v.scaffold = this.makeScaffold(f[0] * CELL * 0.86, f[1] * CELL * 0.86);
        const gx = gx2w(b.x, GRID_W) + (f[0] - 1) * CELL / 2;
        const gz = gx2w(b.y, GRID_H) + (f[1] - 1) * CELL / 2;
        v.scaffold.position.set(gx, 0, gz);
        v.ring = this.makeRing();
        v.ring.rotation.x = -PI / 2;
        v.ring.position.set(gx, 0.09, gz);
        this.scene.add(v.scaffold, v.ring);
      }
      if (v.sign) v.sign.visible = false;
      if (v.bubble) v.bubble.visible = false;
    } else {
      if (v.scaffold) {
        this.scene.remove(v.scaffold, v.ring!);
        disposeGroup(v.scaffold);
        v.scaffold = undefined; v.ring = undefined;
      }
      if (!v.sign) {
        v.sign = this.makeSign(b.lvl);
        this.scene.add(v.sign);
        v.bubble = this.makeBubble();
        this.scene.add(v.bubble);
      }
      (v.sign.userData.redraw as (l: number) => void)(b.lvl);
      const f = BUILDINGS[b.type].size;
      const gx = gx2w(b.x, GRID_W) + (f[0] - 1) * CELL / 2;
      const gz = gx2w(b.y, GRID_H) + (f[1] - 1) * CELL / 2;
      const topY = b.type === "keep" ? 7.6 : b.type === "tower" ? 7.1 : 3.4;
      v.sign.position.set(gx + f[0] * 0.55, topY * 0.55 + 1.6, gz);
      v.bubble.position.set(gx - f[0] * 0.55, topY * 0.55 + 1.7, gz);
    }
  }

  /* ───────────── life: units, animals, birds ───────────── */

  private spawnLife(): void {
    const kinds: UnitKind[] = ["swordsman", "swordsman", "archer", "spearman", "guard"];
    kinds.forEach((k, i) => {
      const u = makeUnit(this.cfg, k, 100 + i * 37);
      u.g.userData.noRay = true;
      const cell = this.randRoad();
      this.scene.add(u.g);
      this.units.push({ u, gx: cell[0], gy: cell[1], tx: cell[0], ty: cell[1], speed: 0.75 + (i % 3) * 0.16, t0: performance.now() });
    });
    for (let i = 0; i < 2; i++) {
      const u = makeUnit(this.cfg, "villager", 300 + i * 53);
      u.g.userData.noRay = true;
      const cell = this.randRoad();
      this.scene.add(u.g);
      this.units.push({ u, gx: cell[0], gy: cell[1], tx: cell[0], ty: cell[1], speed: 0.6 + i * 0.1, t0: performance.now() });
    }
    // chickens near each farm + a cat by the keep
    const farms = this.st.buildings.filter((b) => b.type === "farm");
    let ci = 0;
    for (const f of farms) {
      const fp = footprint(f);
      for (let i = 0; i < 2; i++) {
        const c = makeChicken();
        const fx = gx2w(f.x, GRID_W) + 2 + i * 1.1;
        const fz = gx2w(f.y, GRID_H) + fp[1] * CELL + 1.2 + i * 0.7;
        c.g.position.set(fx, 0, fz);
        this.scene.add(c.g);
        this.animals.push({ a: c, ox: fx, oz: fz });
        ci++;
      }
    }
    const keep = this.st.buildings.find((b) => b.type === "keep");
    if (keep && ci > 0) {
      const cat = makeCat();
      cat.g.position.set(gx2w(keep.x + 1, GRID_W) - 2.6, 0, gx2w(keep.y + 3, GRID_H) + 2.8);
      this.scene.add(cat.g);
      this.animals.push({ a: cat, ox: cat.g.position.x, oz: cat.g.position.z });
    }
    // birds
    for (let i = 0; i < 3; i++) {
      const b = makeBird(this.mats);
      this.scene.add(b.g);
      this.birds.push({ g: b.g, update: b.update, r: 14 + i * 5, a: i * 2.1, h: 9 + i * 2.2, s: 0.24 + i * 0.05 });
    }
  }

  private randRoad(): [number, number] {
    const arr = [...this.roadSet];
    if (!arr.length) return [GRID_W / 2, GRID_H / 2];
    const k = arr[Math.floor(Math.random() * arr.length)];
    return [k % GRID_W, Math.floor(k / GRID_W)];
  }

  private stepUnits(dt: number, t: number): void {
    for (const it of this.units) {
      const dxT = it.tx - it.gx, dyT = it.ty - it.gy;
      if (Math.abs(dxT) < 0.02 && Math.abs(dyT) < 0.02) {
        animUnit(it.u, t, false);
        if (Math.random() < dt * 0.5) {
          const opts: [number, number][] = [];
          for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
            if (this.roadSet.has((it.gy + dy) * GRID_W + it.gx + dx)) opts.push([it.gx + dx, it.gy + dy]);
          }
          if (opts.length) {
            const [nx, ny] = opts[Math.floor(Math.random() * opts.length)];
            it.tx = nx; it.ty = ny;
          }
        }
      } else {
        const wx = gx2w(it.gx, GRID_W), wz = gx2w(it.gy, GRID_H);
        const twx = gx2w(it.tx, GRID_W), twz = gx2w(it.ty, GRID_H);
        const dx = twx - wx, dz = twz - wz;
        const dist = Math.hypot(dx, dz);
        const sp = it.speed * CELL * dt;
        if (dist <= sp) { it.gx = it.tx; it.gy = it.ty; }
        else { it.gx += (dx / CELL) * (sp / CELL) / (dist / CELL); it.gy += (dz / CELL) * (sp / CELL) / (dist / CELL); }
        it.u.g.position.set(gx2w(it.gx, GRID_W), 0, gx2w(it.gy, GRID_H));
        it.u.g.rotation.y = Math.atan2(dx, dz);
        animUnit(it.u, t, true, it.speed);
      }
    }
    // exact placement when idle
    for (const it of this.units) it.u.g.position.set(gx2w(it.gx, GRID_W), 0, gx2w(it.gy, GRID_H));
    for (const an of this.animals) {
      an.a.g.position.x = an.ox + Math.sin(t * 0.5 + an.ox) * 0.35;
      an.a.g.position.z = an.oz + Math.cos(t * 0.37 + an.oz) * 0.35;
      an.a.update(t);
    }
    for (const b of this.birds) {
      b.a += dt * b.s;
      b.g.position.set(Math.cos(b.a) * b.r, b.h + Math.sin(t * 0.7 + b.r) * 0.6, Math.sin(b.a) * b.r);
      b.g.rotation.y = -b.a;
      b.update(t);
    }
  }

  /* ───────────── selection / move / build ghost ───────────── */

  select(id: string | null): void {
    this.selected = id;
    if (!id) { this.selRing.visible = false; return; }
    const v = this.views.get(id);
    if (!v) return;
    const f = BUILDINGS[v.b.type].size;
    const gx = gx2w(v.b.x, GRID_W) + (f[0] - 1) * CELL / 2;
    const gz = gx2w(v.b.y, GRID_H) + (f[1] - 1) * CELL / 2;
    const r = Math.max(f[0], f[1]) * CELL * 0.62;
    this.selRing.scale.setScalar(r);
    this.selRing.position.set(gx, 0.06, gz);
    this.selRing.visible = true;
  }

  /** show ghost for moving a building or building new */
  enterMove(id: string | null, type: BType | null): void {
    this.moveId = id;
    this.buildType = type;
    if (this.ghost) { this.scene.remove(this.ghost); disposeGroup(this.ghost); this.ghost = null; }
    this.ghostTile.visible = false;
    if (id) {
      const v = this.views.get(id);
      if (!v) return;
      v.group.visible = false; // the real one hides while the ghost leads
      this.ghost = this.makeBuildingGroup(v.b);
      this.ghost.traverse((o) => {
        const me = o as THREE.Mesh;
        if (me.isMesh) {
          me.castShadow = false;
          const m = (me.material as THREE.MeshStandardMaterial).clone();
          m.transparent = true; m.opacity = 0.55;
          me.material = m;
        }
      });
      this.scene.add(this.ghost);
    } else if (type) {
      // empty-plot build ghost: simple translucent footprint block + tile
      const f = BUILDINGS[type].size;
      this.ghost = new THREE.Group();
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(f[0] * CELL * 0.8, 0.6, f[1] * CELL * 0.8),
        new THREE.MeshStandardMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.4 }),
      );
      base.position.y = 0.3;
      this.ghost.add(base);
      this.scene.add(this.ghost);
    }
  }

  updateGhost(gx: number, gy: number): void {
    if (!this.ghost) return;
    const w = this.moveId ? BUILDINGS[this.views.get(this.moveId)!.b.type].size[0] : BUILDINGS[this.buildType!].size[0];
    const d = this.moveId ? BUILDINGS[this.views.get(this.moveId)!.b.type].size[1] : BUILDINGS[this.buildType!].size[1];
    this.ghostGX = gx; this.ghostGY = gy;
    const wx = gx2w(gx, GRID_W) + (w - 1) * CELL / 2;
    const wz = gx2w(gy, GRID_H) + (d - 1) * CELL / 2;
    this.ghost.position.set(wx, 0, wz);
    this.ghostTile.position.set(wx, 0.05, wz);
    this.ghostTile.scale.set(w, d, 1);
    this.ghostTile.visible = true;
    const free = this.moveId
      ? !collidesEx(this.st, this.moveId, gx, gy, w, d)
      : !collidesEx(this.st, null, gx, gy, w, d);
    (this.ghostTile.material as THREE.MeshBasicMaterial).color.set(free ? 0x44dd66 : 0xdd4444);
    this.ghostFree = free;
  }
  ghostFree = false;

  confirmMove(): boolean {
    if (!this.moveId || !this.ghostFree) return false;
    const b = this.st.buildings.find((x) => x.id === this.moveId);
    if (!b) return false;
    b.x = this.ghostGX; b.y = this.ghostGY;
    const v = this.views.get(b.id)!;
    const f = BUILDINGS[b.type].size;
    v.group.position.set(gx2w(b.x, GRID_W) + (f[0] - 1) * CELL / 2, 0, gx2w(b.y, GRID_H) + (f[1] - 1) * CELL / 2);
    v.group.visible = b.doneAt <= 0;
    this.exitMove();
    this.select(b.id);
    return true;
  }
  cancelMove(): void {
    if (this.moveId) {
      const v = this.views.get(this.moveId);
      if (v) v.group.visible = v.b.doneAt <= 0;
    }
    this.exitMove();
  }
  private exitMove(): void {
    if (this.ghost) { this.scene.remove(this.ghost); disposeGroup(this.ghost); this.ghost = null; }
    this.ghostTile.visible = false;
    this.moveId = null;
    this.buildType = null;
  }

  /* ───────────── camera & input ───────────── */

  resize(): void {
    const el = this.canvas.parentElement ?? this.canvas;
    const w = el.clientWidth || window.innerWidth;
    const h = el.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    const a = w / h;
    this.cam.left = (-this.view / 2) * a;
    this.cam.right = (this.view / 2) * a;
    this.cam.top = this.view / 2;
    this.cam.bottom = -this.view / 2;
    this.cam.updateProjectionMatrix();
  }

  private applyCamera(): void {
    this.azim += (this.azimTarget - this.azim) * 0.14;
    const ce = Math.cos(this.elev), se = Math.sin(this.elev);
    const dir = new THREE.Vector3(Math.cos(this.azim) * ce, se, Math.sin(this.azim) * ce);
    this.cam.position.copy(this.target).add(dir.multiplyScalar(this.camR));
    this.cam.lookAt(this.target);
    const a = (this.canvas.clientWidth || 1) / (this.canvas.clientHeight || 1);
    this.cam.left = (-this.view / 2) * a;
    this.cam.right = (this.view / 2) * a;
    this.cam.top = this.view / 2;
    this.cam.bottom = -this.view / 2;
    this.cam.updateProjectionMatrix();
  }

  rotate(dir: 1 | -1): void { this.azimTarget += dir * (PI / 2); }

  private clampTarget(): void {
    const lim = WORLD_W / 2 - 2;
    this.target.x = Math.max(-lim, Math.min(lim, this.target.x));
    this.target.z = Math.max(-lim, Math.min(lim, this.target.z));
  }

  private screenRay(x: number, y: number): THREE.Raycaster {
    const r = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(ndc, this.cam);
    return this.ray;
  }

  private pickBuilding(x: number, y: number): string | null {
    const ray = this.screenRay(x, y);
    const hits = ray.intersectObjects(this.scene.children, true);
    for (const h of hits) {
      // sprites (signs/bubbles/mist) and units are click-transparent
      let o0: THREE.Object3D | null = h.object;
      let skip = false;
      while (o0) {
        if ((o0 as THREE.Sprite).isSprite || o0.userData.noRay) { skip = true; break; }
        o0 = o0.parent;
      }
      if (skip) continue;
      let o: THREE.Object3D | null = h.object;
      let bid: string | null = null;
      while (o) {
        if (o.userData && o.userData.bid) { bid = o.userData.bid as string; break; }
        o = o.parent;
      }
      if (bid) {
        const b = this.st.buildings.find((bb) => bb.id === bid);
        return b && b.doneAt <= 0 ? bid : null;
      }
      return null; // hit ground/decor first
    }
    return null;
  }

  private groundPoint(x: number, y: number): THREE.Vector3 | null {
    const ray = this.screenRay(x, y);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const p = new THREE.Vector3();
    return ray.ray.intersectPlane(plane, p) ? p : null;
  }

  private bindInput(): void {
    const c = this.canvas;
    const onDown = (e: PointerEvent) => {
      c.setPointerCapture(e.pointerId);
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this.pointers.size === 1) {
        this.ptrDown = { x: e.clientX, y: e.clientY, t: performance.now(), moved: false, id: e.pointerId };
      } else if (this.pointers.size === 2) {
        const [a, b] = [...this.pointers.values()];
        this.pinch = { d0: Math.hypot(a.x - b.x, a.y - b.y), view0: this.view, active: true };
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!this.pointers.has(e.pointerId)) return;
      const prev = this.pointers.get(e.pointerId)!;
      const dx = e.clientX - prev.x, dy = e.clientY - prev.y;
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this.pointers.size === 2 && this.pinch.active) {
        const [a, b] = [...this.pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        this.view = Math.max(this.viewMin, Math.min(this.viewMax, this.pinch.view0 * (this.pinch.d0 / Math.max(20, d))));
        this.resize();
        return;
      }
      if (this.moveId || this.buildType) {
        const gp = this.groundPoint(e.clientX, e.clientY);
        if (gp) this.updateGhost(w2gx(gp.x, GRID_W), w2gx(gp.z, GRID_H));
        return;
      }
      if (Math.abs(e.clientX - this.ptrDown.x) + Math.abs(e.clientY - this.ptrDown.y) > 8) this.ptrDown.moved = true;
      if (this.ptrDown.moved) {
        // pan: screen-space drag → ground-plane axes of the iso camera
        const k = this.view / (this.canvas.clientHeight || 1);
        const right = new THREE.Vector3(Math.sin(this.azim), 0, -Math.cos(this.azim));
        const upGround = new THREE.Vector3(Math.cos(this.azim), 0, Math.sin(this.azim));
        this.target.addScaledVector(right, -dx * k);
        this.target.addScaledVector(upGround, dy * k);
        this.clampTarget();
      }
    };
    const onUp = (e: PointerEvent) => {
      this.pointers.delete(e.pointerId);
      if (this.pointers.size < 2) this.pinch.active = false;
      if (this.ptrDown.id !== e.pointerId) return;
      const dt = performance.now() - this.ptrDown.t;
      const moved = this.ptrDown.moved;
      if (!moved && dt < 600) {
        if (this.moveId || this.buildType) {
          const gp = this.groundPoint(e.clientX, e.clientY);
          if (gp) {
            this.updateGhost(w2gx(gp.x, GRID_W), w2gx(gp.z, GRID_H));
            if (this.ghostFree) {
              if (this.moveId) { this.confirmMove(); this.cb.onToast("سازه جابه‌جا شد."); }
              else if (this.buildType) this.cb.onToast("جای سازه تأیید شد — از پنل بساز.");
            }
          }
          return;
        }
        const hit = this.pickBuilding(e.clientX, e.clientY);
        if (hit) {
          this.select(hit);
          this.cb.onSelect(hit);
        } else {
          this.select(null);
          this.cb.onSelect(null);
          // tapping a producer's bubble collects
          const gp = this.groundPoint(e.clientX, e.clientY);
          if (gp) {
            for (const [id, v] of this.views) {
              if (v.bubble && v.bubble.visible && v.bubble.position.distanceTo(gp) < 1.4) {
                this.cb.onCollect(id);
                break;
              }
            }
          }
        }
      }
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      this.view = Math.max(this.viewMin, Math.min(this.viewMax, this.view * (e.deltaY > 0 ? 1.08 : 0.93)));
      this.resize();
    };
    c.addEventListener("pointerdown", onDown);
    c.addEventListener("pointermove", onMove);
    c.addEventListener("pointerup", onUp);
    c.addEventListener("pointercancel", onUp);
    c.addEventListener("wheel", onWheel, { passive: false });
    this.disposeFns.push(() => {
      c.removeEventListener("pointerdown", onDown);
      c.removeEventListener("pointermove", onMove);
      c.removeEventListener("pointerup", onUp);
      c.removeEventListener("pointercancel", onUp);
      c.removeEventListener("wheel", onWheel);
    });
  }

  /* ───────────── loop ───────────── */

  private loop = (now: number): void => {
    this.raf = requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, (now - this.lastT) / 1000);
    this.lastT = now;
    this.clock += dt;
    const t = this.clock;

    this.applyCamera();
    this.stepUnits(dt, t);
    for (const bn of this.banners) bn.update(t);
    for (const m of this.mists) {
      m.position.x += dt * 0.5;
      if (m.position.x > WORLD_W / 2 + 8) m.position.x = -WORLD_W / 2 - 8;
    }
    this.selRing.rotation.z += dt * 0.8;

    // scaffold progress rings
    for (const [, v] of this.views) {
      if (v.scaffold && v.ring && v.b.doneAt > 0) {
        const def = BUILDINGS[v.b.type];
        const total = def.timerMs;
        const p = Math.max(0, Math.min(1, 1 - (v.b.doneAt - now) / total));
        const geo = new THREE.RingGeometry(0.5, 0.68, 24, 1, -PI / 2, PI * 2 * Math.max(0.02, p));
        v.ring.geometry.dispose();
        v.ring.geometry = geo;
      }
      if (v.bubble) {
        const p = pendingOf(v.b, now);
        const kind = p.kind;
        const show = p.amount >= 8;
        v.bubble.visible = show;
        if (show && v.bubble.userData.lastKind !== kind) {
          (v.bubble.userData.redraw as (k: string) => void)(kind);
          v.bubble.userData.lastKind = kind;
        }
        if (show) v.bubble.position.y = (v.b.type === "keep" ? 4.4 : v.b.type === "tower" ? 4.2 : 2.6) + Math.sin(t * 2 + v.b.x) * 0.12;
      }
    }
    this.renderer.render(this.scene, this.cam);
  };

  dispose(): void {
    cancelAnimationFrame(this.raf);
    this.ro.disconnect();
    for (const f of this.disposeFns) f();
    this.scene.traverse((o) => {
      const me = o as THREE.Mesh;
      if (me.isMesh || (o as THREE.Sprite).isSprite) {
        me.geometry?.dispose?.();
        const m = me.material as THREE.Material | THREE.Material[];
        if (Array.isArray(m)) m.forEach((x) => x.dispose());
        else m?.dispose?.();
      }
    });
    this.renderer.dispose();
  }
}

/* ───────────── small helpers (module scope) ───────────── */

const boxGeo = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const cylG = (rt: number, rb: number, h: number, seg = 6) => new THREE.CylinderGeometry(rt, rb, h, seg);
const boxG = boxGeo;
function meshC(geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number): THREE.Mesh {
  const me = new THREE.Mesh(geo, m);
  me.position.set(x, y, z);
  me.castShadow = true;
  return me;
}
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function disposeGroup(g: THREE.Group): void {
  g.traverse((o) => {
    const me = o as THREE.Mesh;
    if (me.isMesh) {
      me.geometry?.dispose?.();
      const m = me.material as THREE.Material | THREE.Material[];
      if (Array.isArray(m)) m.forEach((x) => x.dispose());
      else m?.dispose?.();
    }
  });
}

/** pending for bubble display: dominant resource + amount */
function pendingOf(b: BInst, now: number): { kind: string; amount: number } {
  const def = BUILDINGS[b.type];
  if (!def.produce || b.doneAt > 0) return { kind: "", amount: 0 };
  const hrs = Math.max(0, Math.min((now - b.lastAt) / 3_600_000, 8));
  let best = "", bestAmt = 0;
  for (const k of Object.keys(def.produce) as (keyof typeof def.produce)[]) {
    const amt = Math.min(def.pCap ?? 500, (def.produce[k] ?? 0) * b.lvl * hrs);
    if (amt > bestAmt) { bestAmt = amt; best = k; }
  }
  return { kind: best, amount: bestAmt };
}

/** standalone collision check (mirror of state.collides) */
function collidesEx(st: VillageState, bid: string | null, x: number, y: number, w: number, d: number): boolean {
  if (x < PLATEAU.x0 || y < PLATEAU.y0 || x + w - 1 > PLATEAU.x1 || y + d - 1 > PLATEAU.y1) return true;
  for (const o of st.buildings) {
    if (o.id === bid) continue;
    const [ow, od] = BUILDINGS[o.type].size;
    if (x < o.x + ow && o.x < x + w && y < o.y + od && o.y < y + d) return true;
  }
  return false;
}
