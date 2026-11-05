/**
 * 77 Lands — Village builders: buildings & environment.
 *
 * همهٔ مدل‌ها پروسیجرال و چندجزئی‌اند (پایهٔ سنگی + بدنه + تیر + سقف شیب‌دار +
 * جزئیات) — هیچ ساختمانی «یک مکعب خام» نیست. پالت هر پادشاهی از پرچم رسمی
 * می‌آید (RealmVillageConfig). چندوجهی‌ها کم‌وجه‌اند تا روی موبایل روان بماند.
 */
import * as THREE from "three";
import { RealmVillageConfig as RC } from "./config";

const PI = Math.PI;
const rnd = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
};

export interface Mats {
  wall: THREE.MeshStandardMaterial;
  wall2: THREE.MeshStandardMaterial;
  beam: THREE.MeshStandardMaterial;
  roof: THREE.MeshStandardMaterial;
  roof2: THREE.MeshStandardMaterial;
  stone: THREE.MeshStandardMaterial;
  stoneDark: THREE.MeshStandardMaterial;
  wood: THREE.MeshStandardMaterial;
  woodDark: THREE.MeshStandardMaterial;
  trim: THREE.MeshStandardMaterial;
  gold: THREE.MeshStandardMaterial;
  iron: THREE.MeshStandardMaterial;
  banner: THREE.MeshStandardMaterial;
  cloth: THREE.MeshStandardMaterial;
  foliage: THREE.MeshStandardMaterial;
  foliage2: THREE.MeshStandardMaterial;
  trunk: THREE.MeshStandardMaterial;
  crop: THREE.MeshStandardMaterial;
  skin: THREE.MeshStandardMaterial;
}

export function makeMats(cfg: RC, bannerTex: THREE.Texture | null): Mats {
  const S = (c: number, r = 0.85, m = 0) =>
    new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
  if (bannerTex) {
    bannerTex.colorSpace = THREE.SRGBColorSpace;
    bannerTex.anisotropy = 4;
  }
  return {
    wall: S(cfg.wallCol, 0.9),
    wall2: S(cfg.wallCol2, 0.9),
    beam: S(cfg.beamCol, 0.85),
    roof: S(cfg.roofCol, 0.8),
    roof2: S(cfg.roofCol2, 0.8),
    stone: S(cfg.stoneCol, 0.95),
    stoneDark: S(new THREE.Color(cfg.stoneCol).multiplyScalar(0.78).getHex(), 0.95),
    wood: S(0x8a5a33, 0.85),
    woodDark: S(0x5f3d22, 0.85),
    trim: S(cfg.trimCol, 0.85),
    gold: S(0xd9a437, 0.45, 0.55),
    iron: S(0x4a4f58, 0.5, 0.6),
    banner: S(new THREE.Color(cfg.primary).getHex(), 0.9),
    cloth: S(0xe6d9c2, 0.95),
    foliage: S(0x3f7d3a, 0.95),
    foliage2: S(0x2f6330, 0.95),
    trunk: S(0x6e4a2b, 0.9),
    crop: S(0xd9b64e, 0.95),
    skin: S(0xe0b48c, 0.8),
  };
}

/* ───────────────────── helpers ───────────────────── */

function mesh(geo: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh {
  const me = new THREE.Mesh(geo, m);
  me.position.set(x, y, z);
  me.castShadow = true;
  me.receiveShadow = true;
  return me;
}
const box = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt: number, rb: number, h: number, seg = 8) =>
  new THREE.CylinderGeometry(rt, rb, h, seg);
const cone = (r: number, h: number, seg = 4) => new THREE.ConeGeometry(r, h, seg);

/** timber-framed wall panel: plaster fill + dark frame beams */
function framedPanel(m: Mats, w: number, h: number, vertical = 2): THREE.Group {
  const g = new THREE.Group();
  g.add(mesh(box(w, h, 0.14), m.wall2, 0, h / 2, 0));
  const t = 0.1;
  g.add(mesh(box(w, t, 0.18), m.beam, 0, h - t / 2, 0));          // top beam
  g.add(mesh(box(w, t, 0.18), m.beam, 0, t / 2, 0));              // bottom beam
  for (let i = 0; i < vertical; i++) {
    const x = -w / 2 + (w / (vertical - 1 || 1)) * i;
    g.add(mesh(box(t, h, 0.18), m.beam, x, h / 2, 0));
  }
  return g;
}

/** pyramid / hip roof with overhang */
function hipRoof(m: Mats, w: number, d: number, h: number, mat?: THREE.Material): THREE.Mesh {
  const r = Math.max(w, d) * 0.72;
  const geo = new THREE.ConeGeometry(r, h, 4);
  const me = mesh(geo, mat ?? m.roof);
  me.rotation.y = PI / 4;
  return me;
}

/** gable roof: two slabs + ridge — better than pyramid for long halls */
function gableRoof(m: Mats, w: number, d: number, h: number, mat?: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  const ang = Math.atan2(h, d / 2);
  const L = Math.hypot(h, d / 2) + 0.12;
  const slab = box(w + 0.3, 0.1, L);
  const a = mesh(slab, mat ?? m.roof);
  a.position.set(0, h / 2, d / 4);
  a.rotation.x = ang;
  const b = mesh(slab, mat ?? m.roof);
  b.position.set(0, h / 2, -d / 4);
  b.rotation.x = -ang;
  g.add(a, b);
  g.add(mesh(box(w + 0.34, 0.14, 0.16), m.trim, 0, h + 0.05, 0)); // ridge
  // gable fills
  const tri = new THREE.Shape([new THREE.Vector2(-d / 2, 0), new THREE.Vector2(d / 2, 0), new THREE.Vector2(0, h)]);
  const tg = new THREE.ExtrudeGeometry(tri, { depth: 0.14, bevelEnabled: false });
  const t1 = mesh(tg, m.wall2);
  t1.position.set(w / 2 - 0.02, 0, -0.07); t1.rotation.y = PI / 2; t1.castShadow = true;
  const t2 = mesh(tg, m.wall2);
  t2.position.set(-w / 2 + 0.02, 0, -0.07); t2.rotation.y = -PI / 2; t2.castShadow = true;
  g.add(t1, t2);
  return g;
}

function window_(m: Mats, w = 0.5, h = 0.55): THREE.Group {
  const g = new THREE.Group();
  g.add(mesh(box(w, h, 0.08), m.trim, 0, h / 2, 0));
  const glow = new THREE.MeshStandardMaterial({ color: 0xffe9a8, emissive: 0xffc866, emissiveIntensity: 0.55, roughness: 0.6 });
  g.add(mesh(box(w - 0.14, h - 0.16, 0.05), glow, 0, h / 2, 0.03));
  g.add(mesh(box(0.06, h - 0.16, 0.06), m.trim, 0, h / 2, 0.05));
  g.add(mesh(box(w - 0.14, 0.06, 0.06), m.trim, 0, h / 2, 0.05));
  return g;
}

function door(m: Mats, w = 0.8, h = 1.25): THREE.Group {
  const g = new THREE.Group();
  g.add(mesh(box(w + 0.16, h + 0.14, 0.12), m.trim, 0, h / 2, 0));
  g.add(mesh(box(w, h, 0.09), m.woodDark, 0, h / 2, 0.05));
  g.add(mesh(new THREE.SphereGeometry(0.05, 6, 6), m.iron, w / 2 - 0.16, h * 0.55, 0.11));
  return g;
}

/** official cloth banner on a pole — returns group + wave updater */
export interface Banner { g: THREE.Group; update: (t: number) => void }
export function makeBanner(m: Mats, tex: THREE.Texture | null, color: string, h = 3.2, w = 1.5): Banner {
  const g = new THREE.Group();
  g.add(mesh(cyl(0.05, 0.07, h, 6), m.woodDark, 0, h / 2, 0));
  g.add(mesh(new THREE.SphereGeometry(0.11, 8, 8), m.gold, 0, h + 0.06, 0));
  const segX = 10, segY = 6;
  const geo = new THREE.PlaneGeometry(w, w * 0.62, segX, segY);
  const mat = tex
    ? new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.9, transparent: true, alphaTest: 0.35 })
    : new THREE.MeshStandardMaterial({ color: new THREE.Color(color).getHex(), side: THREE.DoubleSide, roughness: 0.9 });
  const cloth = new THREE.Mesh(geo, mat);
  cloth.position.set(w / 2 + 0.02, h - w * 0.38, 0);
  cloth.castShadow = true;
  g.add(cloth);
  const base = (geo.attributes.position.array as Float32Array).slice();
  const update = (t: number) => {
    const pos = geo.attributes.position.array as Float32Array;
    for (let i = 0; i < pos.length; i += 3) {
      const bx = base[i], by = base[i + 1];
      const k = (bx + w / 2) / w; // 0 at pole → 1 at free edge
      pos[i + 2] =
        Math.sin(t * 2.2 + k * 4.4) * 0.14 * k +
        Math.sin(t * 3.7 + by * 2.2) * 0.05 * k;
      pos[i] = bx + Math.sin(t * 2.2 + k * 4.4) * 0.05 * k;
    }
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
  };
  return { g, update };
}

/* ───────────────────── buildings ───────────────────── */

export function makeKeep(m: Mats, cfg: RC, tex: THREE.Texture | null, lvl: number): THREE.Group {
  const g = new THREE.Group();
  const W = 4.6, D = 4.6;
  // plinth
  g.add(mesh(box(W + 0.7, 0.5, D + 0.7), m.stoneDark, 0, 0.25, 0));
  // main hall
  g.add(mesh(box(W, 2.5, D), m.stone, 0, 0.5 + 1.25, 0));
  // corner quoin stones
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]] as const) {
    for (let i = 0; i < 4; i++)
      g.add(mesh(box(0.34, 0.34, 0.34), m.stoneDark, (sx * W) / 2 - sx * 0.12, 0.85 + i * 0.58, (sz * D) / 2 - sz * 0.12));
  }
  // gate
  const gate = new THREE.Group();
  gate.add(mesh(box(1.7, 1.9, 0.3), m.trim, 0, 0.95, 0));
  gate.add(mesh(new THREE.BoxGeometry(1.15, 1.5, 0.14), m.woodDark, 0, 0.75, 0.1));
  for (let i = 0; i < 4; i++) gate.add(mesh(box(0.12, 1.5, 0.18), m.iron, -0.4 + i * 0.27, 0.75, 0.14)); // portcullis
  gate.position.set(0, 0.5, D / 2 + 0.1);
  g.add(gate);
  // central tower
  const tw = mesh(cyl(1.25, 1.5, 4.6, 10), m.stone, 0, 0.5 + 2.3, 0);
  g.add(tw);
  g.add(mesh(cyl(1.5, 1.5, 0.35, 10), m.stoneDark, 0, 5.15, 0));
  const tRoof = mesh(cone(1.62, 1.7, 8), lvl >= 3 ? m.roof : m.roof2, 0, 6.15, 0);
  g.add(tRoof);
  g.add(mesh(new THREE.SphereGeometry(0.16, 8, 8), m.gold, 0, 7.08, 0));
  // side turrets
  for (const [sx, sz] of [[1, 1], [-1, -1]] as const) {
    const tx = sx * (W / 2 - 0.15), tz = sz * (D / 2 - 0.15);
    g.add(mesh(cyl(0.62, 0.72, 3.4, 8), m.stone, tx, 0.5 + 1.7, tz));
    g.add(mesh(cyl(0.78, 0.78, 0.22, 8), m.stoneDark, tx, 4.05, tz));
    g.add(mesh(cone(0.85, 1.0, 8), m.roof2, tx, 4.66, tz));
    g.add(mesh(new THREE.SphereGeometry(0.09, 6, 6), m.gold, tx, 5.22, tz));
  }
  // windows
  const w1 = window_(m); w1.position.set(W / 2 + 0.02, 2.9, 0); w1.rotation.y = PI / 2; g.add(w1);
  const w2 = window_(m); w2.position.set(0, 4.6, D / 2 + 0.02); g.add(w2);
  // banner on tower front
  const bn = makeBanner(m, tex, cfg.primary, 2.6, 1.15);
  bn.g.position.set(0, 2.4, D / 2 + 0.35);
  g.add(bn.g);
  (g as THREE.Group & { banner?: Banner }).banner = bn;
  // level flags (small pennants on turrets when upgraded)
  if (lvl >= 2) {
    const p1 = makeBanner(m, null, cfg.accent, 1.7, 0.7);
    p1.g.position.set(W / 2 - 0.15, 3.6, D / 2 - 0.15); p1.g.rotation.y = PI / 4;
    g.add(p1.g);
    (g as THREE.Group & { banner2?: Banner }).banner2 = p1;
  }
  return g;
}

export function makeHouse(m: Mats, _cfg: RC): THREE.Group {
  const g = new THREE.Group();
  g.add(mesh(box(3.1, 0.35, 2.7), m.stoneDark, 0, 0.17, 0));
  const w = 2.7, d = 2.3, h = 1.55;
  const front = framedPanel(m, w, h, 3); front.position.set(0, 0.35, d / 2 - 0.07); g.add(front);
  const back = framedPanel(m, w, h, 3); back.position.set(0, 0.35, -d / 2 + 0.07); back.rotation.y = PI; g.add(back);
  const left = framedPanel(m, d, h, 2); left.position.set(-w / 2 + 0.07, 0.35, 0); left.rotation.y = -PI / 2; g.add(left);
  const right = framedPanel(m, d, h, 2); right.position.set(w / 2 - 0.07, 0.35, 0); right.rotation.y = PI / 2; g.add(right);
  const roof = gableRoof(m, w + 0.25, d, 1.0, m.roof);
  roof.position.set(0, 0.35 + h, 0);
  g.add(roof);
  // chimney + smoke
  g.add(mesh(box(0.4, 1.0, 0.4), m.stoneDark, w / 2 - 0.5, 0.35 + h + 0.75, -0.5));
  // door + window
  const dr = door(m); dr.position.set(-0.6, 0.35, d / 2 + 0.02); g.add(dr);
  const wd = window_(m); wd.position.set(0.55, 0.9, d / 2 + 0.02); g.add(wd);
  const wd2 = window_(m); wd2.position.set(w / 2 + 0.02, 0.9, 0); wd2.rotation.y = PI / 2; g.add(wd2);
  // wood pile
  for (let i = 0; i < 3; i++) {
    const log = mesh(cyl(0.11, 0.11, 0.7, 6), m.wood, -w / 2 - 0.25, 0.12 + (i < 2 ? 0 : 0.22), -0.5 + (i % 2) * 0.26);
    log.rotation.x = PI / 2;
    g.add(log);
  }
  return g;
}

export function makeFarm(m: Mats, _cfg: RC): THREE.Group {
  const g = new THREE.Group();
  const W = 4.8, D = 3.2;
  g.add(mesh(box(W, 0.18, D), new THREE.MeshStandardMaterial({ color: 0x8a6b42, roughness: 1 }), 0, 0.09, 0));
  // furrow rows + crops (instanced tufts)
  const rows = 4;
  const tuftGeo = new THREE.ConeGeometry(0.1, 0.34, 5);
  const n = rows * 9;
  const inst = new THREE.InstancedMesh(tuftGeo, m.crop, n);
  inst.castShadow = true;
  const mt = new THREE.Matrix4();
  let i = 0;
  const rr = rnd(77);
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < 9; c++) {
      const x = -W / 2 + 0.5 + c * ((W - 1) / 8);
      const z = -D / 2 + 0.45 + r * ((D - 0.9) / (rows - 1));
      mt.makeTranslation(x + (rr() - 0.5) * 0.1, 0.18 + 0.17, z + (rr() - 0.5) * 0.08);
      inst.setMatrixAt(i++, mt);
    }
  g.add(inst);
  // fence
  const fencePost = (x: number, z: number) => g.add(mesh(box(0.09, 0.5, 0.09), m.woodDark, x, 0.43, z));
  for (let c = 0; c <= 8; c++) { const x = -W / 2 + c * (W / 8); fencePost(x, -D / 2 - 0.12); fencePost(x, D / 2 + 0.12); }
  for (const z of [-D / 2 - 0.12, D / 2 + 0.12]) {
    g.add(mesh(box(W, 0.06, 0.05), m.woodDark, 0, 0.62, z));
    g.add(mesh(box(W, 0.06, 0.05), m.woodDark, 0, 0.38, z));
  }
  // scarecrow
  const sc = new THREE.Group();
  sc.add(mesh(cyl(0.05, 0.06, 1.1, 5), m.woodDark, 0, 0.55, 0));
  sc.add(mesh(box(0.8, 0.07, 0.07), m.woodDark, 0, 0.85, 0));
  sc.add(mesh(box(0.34, 0.4, 0.2), m.cloth, 0, 0.72, 0));
  sc.add(mesh(new THREE.SphereGeometry(0.14, 7, 7), new THREE.MeshStandardMaterial({ color: 0xd8b567, roughness: 1 }), 0, 1.08, 0));
  sc.add(mesh(cone(0.3, 0.14, 8), m.crop, 0, 1.2, 0));
  sc.position.set(W / 2 - 0.5, 0.1, -D / 2 + 0.4);
  g.add(sc);
  // small barn hut
  const hut = new THREE.Group();
  hut.add(mesh(box(1.5, 1.0, 1.3), m.wall2, 0, 0.6, 0));
  const hr = gableRoof(m, 1.6, 1.4, 0.55, m.roof2); hr.position.set(0, 1.1, 0); hut.add(hr);
  hut.add(mesh(box(0.5, 0.7, 0.06), m.woodDark, 0, 0.45, 0.66));
  hut.position.set(-W / 2 + 0.9, 0.15, D / 2 + 0.75);
  g.add(hut);
  return g;
}

export function makeLumber(m: Mats, _cfg: RC): THREE.Group {
  const g = new THREE.Group();
  // hut
  g.add(mesh(box(2.6, 0.3, 2.3), m.stoneDark, 0, 0.15, 0));
  const hb = framedPanel(m, 2.3, 1.3, 2); hb.position.set(0, 0.3, 1.08); g.add(hb);
  const hb2 = framedPanel(m, 2.3, 1.3, 2); hb2.position.set(0, 0.3, -1.08); hb2.rotation.y = PI; g.add(hb2);
  const roof = gableRoof(m, 2.7, 2.4, 0.8, m.roof2); roof.position.set(0, 1.6, 0); g.add(roof);
  // log piles
  const logGeo = cyl(0.16, 0.16, 1.5, 7);
  const p1 = new THREE.Group();
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3 - r; c++) {
      const l = mesh(logGeo, m.wood, 0, 0.17 + r * 0.28, -0.3 + c * 0.32 + r * 0.16);
      l.rotation.z = PI / 2;
      p1.add(l);
    }
  p1.position.set(2.2, 0, 0.6);
  g.add(p1);
  const p2 = new THREE.Group();
  for (let c = 0; c < 2; c++) { const l = mesh(logGeo, m.wood, 0, 0.17, -0.15 + c * 0.34); l.rotation.z = PI / 2; p2.add(l); }
  p2.position.set(-2.0, 0, -0.7);
  g.add(p2);
  // stump + axe
  g.add(mesh(cyl(0.3, 0.34, 0.5, 8), m.woodDark, 1.0, 0.25, -1.3));
  const axe = new THREE.Group();
  axe.add(mesh(cyl(0.03, 0.035, 0.8, 5), m.wood, 0, 0.4, 0));
  axe.add(mesh(box(0.3, 0.18, 0.05), m.iron, 0.1, 0.78, 0));
  axe.position.set(1.32, 0.45, -1.25);
  axe.rotation.z = 0.6;
  g.add(axe);
  // sawhorse
  const sh = new THREE.Group();
  for (const dz of [-0.4, 0.4]) {
    sh.add(mesh(box(0.08, 0.7, 0.08), m.woodDark, -0.3, 0.35, dz));
    sh.add(mesh(box(0.08, 0.7, 0.08), m.woodDark, 0.3, 0.35, dz));
  }
  sh.add(mesh(box(1.0, 0.08, 0.3), m.wood, 0, 0.72, 0));
  const lg = mesh(cyl(0.09, 0.09, 1.3, 6), m.wood, 0, 0.82, 0);
  lg.rotation.z = PI / 2;
  sh.add(lg);
  sh.position.set(-1.6, 0, 1.0);
  g.add(sh);
  return g;
}

export function makeMine(m: Mats, _cfg: RC): THREE.Group {
  const g = new THREE.Group();
  // rock mound
  const rr = rnd(31);
  for (let i = 0; i < 9; i++) {
    const s = 0.6 + rr() * 0.7;
    const rock = mesh(new THREE.DodecahedronGeometry(s, 0), i % 2 ? m.stone : m.stoneDark,
      (rr() - 0.5) * 3.4, s * 0.55, -0.6 + (rr() - 0.5) * 1.6);
    rock.rotation.set(rr() * PI, rr() * PI, rr() * PI);
    g.add(rock);
  }
  // entrance frame
  const frame = new THREE.Group();
  for (const dx of [-0.55, 0.55]) frame.add(mesh(box(0.18, 1.5, 0.18), m.woodDark, dx, 0.75, 0));
  frame.add(mesh(box(1.5, 0.18, 0.22), m.woodDark, 0, 1.55, 0));
  frame.add(mesh(box(1.7, 0.14, 0.3), m.woodDark, 0, 1.78, 0));
  const dark = new THREE.MeshStandardMaterial({ color: 0x14161c, roughness: 1 });
  frame.add(mesh(box(0.95, 1.4, 0.1), dark, 0, 0.7, -0.02));
  frame.position.set(0, 0.1, 1.35);
  g.add(frame);
  // rails + cart
  for (const dx of [-0.28, 0.28])
    g.add(mesh(box(0.08, 0.06, 3.2), m.woodDark, dx, 0.06, 2.6));
  for (let i = 0; i < 5; i++) g.add(mesh(box(0.75, 0.05, 0.09), m.wood, 0, 0.045, 1.5 + i * 0.55));
  const cart = new THREE.Group();
  cart.add(mesh(box(0.75, 0.4, 0.55), m.woodDark, 0, 0.32, 0));
  cart.add(mesh(new THREE.BoxGeometry(0.65, 0.12, 0.45), m.stoneDark, 0, 0.55, 0));
  for (const [dx, dz] of [[-0.3, -0.2], [0.3, -0.2], [-0.3, 0.2], [0.3, 0.2]] as const) {
    const wheel = mesh(cyl(0.14, 0.14, 0.06, 8), m.iron, dx, 0.14, dz);
    wheel.rotation.z = PI / 2;
    cart.add(wheel);
  }
  cart.position.set(0, 0, 3.4);
  g.add(cart);
  return g;
}

export function makeStorage(m: Mats, _cfg: RC): THREE.Group {
  const g = new THREE.Group();
  const w = 3.2, d = 2.6, h = 1.7;
  g.add(mesh(box(w + 0.3, 0.4, d + 0.3), m.stoneDark, 0, 0.2, 0));
  g.add(mesh(box(w, h, d), m.wall, 0, 0.4 + h / 2, 0));
  // exposed timber braces
  for (const dx of [-w / 2 + 0.1, w / 2 - 0.1]) {
    g.add(mesh(box(0.16, h, 0.16), m.beam, dx, 0.4 + h / 2, d / 2 - 0.08));
    g.add(mesh(box(0.16, h, 0.16), m.beam, dx, 0.4 + h / 2, -d / 2 + 0.08));
  }
  const roof = gableRoof(m, w + 0.3, d, 0.95, m.roof);
  roof.position.set(0, 0.4 + h, 0);
  g.add(roof);
  // big doors + hayloft window
  g.add(mesh(box(1.3, 1.4, 0.12), m.woodDark, 0, 1.1, d / 2 + 0.02));
  g.add(mesh(box(1.44, 0.1, 0.16), m.trim, 0, 1.84, d / 2 + 0.02));
  g.add(mesh(box(0.5, 0.45, 0.1), m.trim, 0, 2.5, d / 2 + 0.1));
  // sacks + crates + barrels
  const sackM = new THREE.MeshStandardMaterial({ color: 0xcbb489, roughness: 1 });
  for (let i = 0; i < 3; i++) {
    const s = mesh(new THREE.SphereGeometry(0.26, 7, 6), sackM, w / 2 + 0.45 + (i % 2) * 0.5, 0.26 + (i >= 2 ? 0.4 : 0), 0.6 + Math.floor(i / 2) * 0.5);
    s.scale.y = 0.85;
    g.add(s);
  }
  const barrel = (x: number, z: number) => {
    const b = mesh(cyl(0.24, 0.28, 0.55, 8), m.wood, x, 0.47, z);
    g.add(b);
    g.add(mesh(cyl(0.29, 0.29, 0.06, 8), m.iron, x, 0.47, z));
  };
  barrel(-w / 2 - 0.45, 0.7);
  barrel(-w / 2 - 0.5, -0.1);
  g.add(mesh(box(0.5, 0.5, 0.5), m.woodDark, w / 2 + 0.5, 0.45, -0.6));
  return g;
}

export function makeBarracks(m: Mats, cfg: RC, tex: THREE.Texture | null): THREE.Group {
  const g = new THREE.Group();
  const w = 3.9, d = 2.8, h = 1.8;
  g.add(mesh(box(w + 0.4, 0.45, d + 0.4), m.stoneDark, 0, 0.22, 0));
  g.add(mesh(box(w, h, d), m.wall, 0, 0.45 + h / 2, 0));
  const roof = gableRoof(m, w + 0.3, d, 1.05, m.roof2);
  roof.position.set(0, 0.45 + h, 0);
  g.add(roof);
  // shield decorations on wall
  for (const dx of [-1.0, 0, 1.0]) {
    const sh = mesh(cyl(0.24, 0.24, 0.06, 10), m.banner, dx, 1.6, d / 2 + 0.05);
    sh.rotation.x = PI / 2;
    g.add(sh);
    g.add(mesh(new THREE.SphereGeometry(0.06, 6, 6), m.gold, dx, 1.6, d / 2 + 0.1));
  }
  const dr = door(m, 0.9, 1.4); dr.position.set(-0.9, 0.45, d / 2 + 0.02); g.add(dr);
  const wd = window_(m); wd.position.set(0.6, 1.35, d / 2 + 0.02); g.add(wd);
  // weapon rack
  const rack = new THREE.Group();
  rack.add(mesh(box(1.4, 0.1, 0.14), m.woodDark, 0, 0.9, 0));
  rack.add(mesh(box(1.4, 0.1, 0.14), m.woodDark, 0, 0.4, 0));
  for (const [dx, kind] of [[-0.45, "sword"], [0, "spear"], [0.45, "sword"]] as const) {
    const bl = mesh(box(0.07, 0.75, 0.03), m.iron, dx, 1.15, 0);
    rack.add(bl);
    rack.add(mesh(cyl(0.03, 0.03, 0.3, 5), m.woodDark, dx, 0.62, 0));
  }
  rack.position.set(2.5, 0, 0.9);
  g.add(rack);
  // training dummy
  const dum = new THREE.Group();
  dum.add(mesh(cyl(0.07, 0.09, 1.3, 5), m.woodDark, 0, 0.65, 0));
  dum.add(mesh(box(0.75, 0.12, 0.12), m.woodDark, 0, 1.0, 0));
  dum.add(mesh(new THREE.SphereGeometry(0.17, 7, 7), m.cloth, 0, 1.32, 0));
  dum.add(mesh(box(0.4, 0.3, 0.24), m.cloth, 0, 0.85, 0));
  dum.position.set(-2.4, 0, 1.0);
  g.add(dum);
  // banner
  const bn = makeBanner(m, tex, cfg.primary, 2.4, 1.0);
  bn.g.position.set(w / 2 - 0.2, 0.45, -d / 2 + 0.3);
  g.add(bn.g);
  (g as THREE.Group & { banner?: Banner }).banner = bn;
  return g;
}

export function makeTower(m: Mats, _cfg: RC): THREE.Group {
  const g = new THREE.Group();
  g.add(mesh(box(2.5, 0.5, 2.5), m.stoneDark, 0, 0.25, 0));
  const body = mesh(cyl(0.85, 1.05, 4.2, 9), m.stone, 0, 0.5 + 2.1, 0);
  g.add(body);
  // machicolation ring
  g.add(mesh(cyl(1.25, 1.0, 0.5, 9), m.stoneDark, 0, 4.85, 0));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * PI * 2;
    g.add(mesh(box(0.22, 0.3, 0.22), m.stoneDark, Math.cos(a) * 1.12, 5.25, Math.sin(a) * 1.12));
  }
  g.add(mesh(cyl(1.28, 1.28, 0.16, 9), m.wood, 0, 5.1, 0));
  const roof = mesh(cone(1.35, 1.5, 8), m.roof, 0, 5.95, 0);
  g.add(roof);
  g.add(mesh(new THREE.SphereGeometry(0.11, 7, 7), m.gold, 0, 6.78, 0));
  // arrow slits
  for (const [ry, y] of [[0, 3.1], [PI / 2, 2.4]] as const) {
    const slit = mesh(box(0.08, 0.55, 0.08), m.trim, 0, y, 1.02);
    slit.rotation.y = ry;
    g.add(slit);
  }
  return g;
}

/* ───────────────────── nature ───────────────────── */

export function makeOak(m: Mats, seed: number): THREE.Group {
  const g = new THREE.Group();
  const rr = rnd(seed);
  const h = 1.3 + rr() * 0.5;
  const tr = mesh(cyl(0.14, 0.22, h, 7), m.trunk, 0, h / 2, 0);
  tr.rotation.z = (rr() - 0.5) * 0.14;
  g.add(tr);
  const blobs = 3 + Math.floor(rr() * 2);
  for (let i = 0; i < blobs; i++) {
    const r = 0.75 + rr() * 0.5;
    const b = mesh(new THREE.IcosahedronGeometry(r, 1), i % 2 ? m.foliage : m.foliage2,
      (rr() - 0.5) * 1.1, h + 0.35 + rr() * 0.6, (rr() - 0.5) * 1.1);
    g.add(b);
  }
  return g;
}

export function makePine(m: Mats, seed: number): THREE.Group {
  const g = new THREE.Group();
  const rr = rnd(seed);
  const h = 1.6 + rr() * 0.9;
  g.add(mesh(cyl(0.1, 0.16, h * 0.45, 6), m.trunk, 0, h * 0.22, 0));
  const layers = 3;
  for (let i = 0; i < layers; i++) {
    const r = 0.95 - i * 0.26;
    const y = h * 0.35 + i * (h * 0.26);
    g.add(mesh(cone(r, h * 0.45, 7), i % 2 ? m.foliage2 : m.foliage, 0, y, 0));
  }
  return g;
}

export function makeCypress(m: Mats, seed: number): THREE.Group {
  const g = new THREE.Group();
  const rr = rnd(seed);
  const h = 2.0 + rr() * 0.8;
  g.add(mesh(cyl(0.07, 0.11, 0.5, 5), m.trunk, 0, 0.25, 0));
  const c = mesh(cone(0.42, h, 7), m.foliage2, 0, h / 2 + 0.3, 0);
  c.scale.x = 0.7;
  g.add(c);
  return g;
}

export function makeRock(m: Mats, seed: number): THREE.Group {
  const g = new THREE.Group();
  const rr = rnd(seed);
  const s = 0.35 + rr() * 0.55;
  const r1 = mesh(new THREE.DodecahedronGeometry(s, 0), m.stone, 0, s * 0.5, 0);
  r1.rotation.set(rr() * PI, rr() * PI, 0);
  g.add(r1);
  if (rr() > 0.5) {
    const r2 = mesh(new THREE.DodecahedronGeometry(s * 0.55, 0), m.stoneDark, s * 0.8, s * 0.28, s * 0.3);
    r2.rotation.set(rr() * PI, rr() * PI, 0);
    g.add(r2);
  }
  return g;
}

export function makeFlowers(m: Mats, seed: number, n = 6): THREE.Group {
  const g = new THREE.Group();
  const rr = rnd(seed);
  const cols = [0xe8647a, 0xf2d34e, 0xe8e6da, 0xc96fd4];
  for (let i = 0; i < n; i++) {
    const x = (rr() - 0.5) * 2.2, z = (rr() - 0.5) * 2.2;
    g.add(mesh(cyl(0.015, 0.02, 0.18, 4), m.foliage2, x, 0.09, z));
    g.add(mesh(new THREE.SphereGeometry(0.05, 5, 4), new THREE.MeshStandardMaterial({ color: cols[i % 4], roughness: 0.9 }), x, 0.2, z));
  }
  return g;
}

export function makeWell(m: Mats, _cfg: RC): THREE.Group {
  const g = new THREE.Group();
  g.add(mesh(cyl(0.75, 0.8, 0.65, 10), m.stone, 0, 0.32, 0));
  g.add(mesh(cyl(0.6, 0.6, 0.1, 10), new THREE.MeshStandardMaterial({ color: 0x27445e, roughness: 0.3 }), 0, 0.62, 0));
  for (const dx of [-0.6, 0.6]) g.add(mesh(box(0.12, 1.1, 0.12), m.woodDark, dx, 1.1, 0));
  const roof = gableRoof(m, 1.7, 1.5, 0.5, m.roof);
  roof.position.set(0, 1.65, 0);
  g.add(roof);
  g.add(mesh(cyl(0.05, 0.05, 0.5, 6), m.woodDark, 0, 1.25, 0));
  g.add(mesh(box(0.26, 0.2, 0.2), m.wood, 0, 1.0, 0));
  return g;
}

export function makeLantern(m: Mats): THREE.Group {
  const g = new THREE.Group();
  g.add(mesh(cyl(0.05, 0.08, 1.5, 6), m.iron, 0, 0.75, 0));
  g.add(mesh(box(0.3, 0.36, 0.3), m.iron, 0, 1.6, 0));
  const glow = new THREE.MeshStandardMaterial({ color: 0xffd98a, emissive: 0xffb84d, emissiveIntensity: 0.9, roughness: 0.5 });
  g.add(mesh(new THREE.SphereGeometry(0.1, 6, 6), glow, 0, 1.6, 0));
  g.add(mesh(cone(0.24, 0.18, 4), m.iron, 0, 1.86, 0));
  return g;
}

/** decorative pond + reeds */
export function makePond(m: Mats, r: number): THREE.Group {
  const g = new THREE.Group();
  const water = new THREE.Mesh(
    new THREE.CircleGeometry(r, 22),
    new THREE.MeshStandardMaterial({ color: 0x3fa8d5, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.92 }),
  );
  water.rotation.x = -PI / 2;
  water.position.y = 0.03;
  water.receiveShadow = true;
  g.add(water);
  const rim = mesh(cyl(r + 0.25, r + 0.4, 0.08, 22), m.stoneDark, 0, 0.01, 0);
  g.add(rim);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * PI * 2 + 0.4;
    const reed = mesh(cone(0.05, 0.55, 4), m.foliage2, Math.cos(a) * (r + 0.2), 0.3, Math.sin(a) * (r + 0.2));
    g.add(reed);
  }
  return g;
}

/** flying bird (simple but alive) */
export function makeBird(m: Mats): { g: THREE.Group; update: (t: number) => void } {
  const g = new THREE.Group();
  const body = mesh(new THREE.ConeGeometry(0.07, 0.3, 5), m.foliage2, 0, 0, 0);
  body.rotation.x = PI / 2;
  g.add(body);
  const wgeo = box(0.4, 0.02, 0.12);
  const wl = mesh(wgeo, m.foliage2, -0.2, 0.02, 0);
  const wr = mesh(wgeo, m.foliage2, 0.2, 0.02, 0);
  g.add(wl, wr);
  const update = (t: number) => {
    wl.rotation.z = Math.sin(t * 9) * 0.55;
    wr.rotation.z = -Math.sin(t * 9) * 0.55;
  };
  return { g, update };
}
