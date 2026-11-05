/**
 * 77 Lands — Village units: troops, villagers, animals.
 * شخصیت‌های متناسب (حدود ۴ سر ارتفاع)، دست/پای مخروطی، کلاه‌خود و سلاح اختصاصی؛
 * انیمیشن راه‌رفتن/آسایش/حمله پروسیجرال است و در scene.ts رانده می‌شود.
 */
import * as THREE from "three";
import { RealmVillageConfig as RC } from "./config";

const PI = Math.PI;

function mesh(geo: THREE.BufferGeometry, m: THREE.Material | THREE.MeshStandardMaterial, x = 0, y = 0, z = 0): THREE.Mesh {
  const me = new THREE.Mesh(geo, m);
  me.position.set(x, y, z);
  me.castShadow = true;
  me.receiveShadow = true;
  return me;
}
const cyl = (rt: number, rb: number, h: number, seg = 7) => new THREE.CylinderGeometry(rt, rb, h, seg);
const cone = (r: number, h: number, seg = 6) => new THREE.ConeGeometry(r, h, seg);
const box = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);

const M = (c: number, r = 0.85, e = 0) =>
  new THREE.MeshStandardMaterial({ color: c, roughness: r, emissive: e ? c : 0x000000, emissiveIntensity: e });

export type UnitKind = "swordsman" | "archer" | "spearman" | "guard" | "villager" | "hero";

export interface Unit {
  g: THREE.Group;
  legL: THREE.Group; legR: THREE.Group;
  armL: THREE.Group; armR: THREE.Group;
  body: THREE.Group;
  head: THREE.Group;
  h: number; // eye/label height
}

/** shared humanoid skeleton + per-kind dress/weapon */
export function makeUnit(cfg: RC, kind: UnitKind, seed = 1): Unit {
  const g = new THREE.Group();
  const rr = (() => { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); })();

  const tunic = new THREE.Color(cfg.primary).offsetHSL(0, -0.08, kind === "villager" ? 0.16 : 0).getHex();
  const tunicM = M(tunic, 0.9);
  const pantsM = M(kind === "guard" ? 0x3a4048 : 0x6e5a3f, 0.95);
  const skinM = M(0xe0b48c, 0.8);
  const leatherM = M(0x6e4a2b, 0.85);
  const ironM = M(0x9aa2ad, 0.45, 0, );
  const goldM = M(0xd9a437, 0.4, 0);

  const legH = 0.5;
  const mkLeg = (side: 1 | -1): THREE.Group => {
    const lg = new THREE.Group();
    lg.position.set(side * 0.11, legH, 0);
    lg.add(mesh(cyl(0.062, 0.075, legH, 6), pantsM, 0, -legH / 2, 0));
    lg.add(mesh(box(0.13, 0.09, 0.2), leatherM, 0, -legH + 0.045, 0.03));
    return lg;
  };
  const legL = mkLeg(-1), legR = mkLeg(1);
  g.add(legL, legR);

  const body = new THREE.Group();
  body.position.y = legH;
  // torso (tapered: shoulders wider)
  const torsoH = 0.62;
  body.add(mesh(cyl(0.21, 0.16, torsoH, 8), tunicM, 0, torsoH / 2, 0));
  // belt + buckle
  body.add(mesh(cyl(0.175, 0.175, 0.09, 8), leatherM, 0, 0.1, 0));
  body.add(mesh(box(0.08, 0.07, 0.03), goldM, 0, 0.1, 0.17));
  // shoulder pads for armored kinds
  if (kind === "guard" || kind === "swordsman") {
    for (const s of [-1, 1]) body.add(mesh(new THREE.SphereGeometry(0.1, 7, 6), ironM, s * 0.2, torsoH - 0.03, 0));
  }
  if (kind === "archer" || kind === "villager") {
    // leather strap across chest
    const strap = mesh(box(0.07, torsoH * 0.95, 0.02), leatherM, 0.05, torsoH / 2, 0.15);
    strap.rotation.z = 0.35;
    body.add(strap);
  }
  // arms
  const mkArm = (side: 1 | -1): THREE.Group => {
    const ag = new THREE.Group();
    ag.position.set(side * 0.23, torsoH - 0.06, 0);
    ag.add(mesh(cyl(0.05, 0.062, 0.52, 6), tunicM, 0, -0.26, 0));
    ag.add(mesh(new THREE.SphereGeometry(0.055, 6, 6), skinM, 0, -0.54, 0));
    return ag;
  };
  const armL = mkArm(-1), armR = mkArm(1);
  body.add(armL, armR);

  // head
  const head = new THREE.Group();
  head.position.y = torsoH + 0.02;
  head.add(mesh(new THREE.SphereGeometry(0.16, 9, 8), skinM, 0, 0.17, 0));
  // eyes + brows
  for (const s of [-1, 1]) {
    head.add(mesh(new THREE.SphereGeometry(0.018, 5, 5), M(0x1d1d24, 0.5), s * 0.058, 0.19, 0.14));
    head.add(mesh(box(0.045, 0.012, 0.01), M(0x3a2a1a, 0.9), s * 0.058, 0.225, 0.152));
  }
  head.add(mesh(box(0.05, 0.03, 0.02), skinM, 0, 0.14, 0.16)); // nose
  // beard for some
  if (kind === "guard" || kind === "villager" || rr() > 0.5)
    head.add(mesh(new THREE.SphereGeometry(0.09, 7, 6, 0, PI * 2, 0, PI / 2), M(0x5a4632, 0.95), 0, 0.08, 0.06));

  /* ── headgear + weapons per kind ── */
  if (kind === "swordsman") {
    const helm = new THREE.Group();
    helm.add(mesh(new THREE.SphereGeometry(0.175, 9, 7, 0, PI * 2, 0, PI / 1.7), ironM, 0, 0.18, 0));
    helm.add(mesh(box(0.03, 0.12, 0.02), ironM, 0, 0.2, 0.16)); // nasal
    helm.add(mesh(cone(0.05, 0.16, 6), M(new THREE.Color(cfg.accent).getHex(), 0.9), 0, 0.38, 0)); // plume base
    head.add(helm);
    // sword in right hand + round shield on left arm
    const sword = new THREE.Group();
    sword.add(mesh(box(0.045, 0.42, 0.015), M(0xc7ccd4, 0.35), 0, 0.3, 0));
    sword.add(mesh(box(0.14, 0.035, 0.035), goldM, 0, 0.08, 0));
    sword.add(mesh(cyl(0.022, 0.022, 0.12, 5), leatherM, 0, 0.0, 0));
    sword.position.set(0, -0.54, 0.06);
    sword.rotation.x = -0.35;
    armR.add(sword);
    const shield = mesh(cyl(0.19, 0.19, 0.04, 12), M(new THREE.Color(cfg.primary).getHex(), 0.7), 0.02, -0.45, 0.08);
    shield.rotation.x = PI / 2;
    shield.rotation.z = 0;
    armL.add(shield);
    armL.add(mesh(new THREE.SphereGeometry(0.05, 6, 6), goldM, 0.02, -0.45, 0.1));
  } else if (kind === "archer") {
    // hood
    head.add(mesh(cone(0.19, 0.3, 8), M(0x4a5d3a, 0.95), 0, 0.26, 0));
    head.add(mesh(box(0.03, 0.16, 0.015), M(0xe8e2d2, 0.9), 0.09, 0.3, 0.12)); // feather
    // bow in left hand, quiver on back
    const bow = new THREE.Group();
    const arc = mesh(new THREE.TorusGeometry(0.3, 0.018, 5, 12, PI * 1.15), leatherM, 0, 0, 0);
    arc.rotation.z = PI * 0.42;
    bow.add(arc);
    bow.add(mesh(cyl(0.006, 0.006, 0.56, 4), M(0xd9d2bd, 0.9), 0.0, 0, 0.12));
    bow.position.set(0.06, -0.5, 0.1);
    bow.rotation.z = -0.3;
    armL.add(bow);
    const quiver = mesh(cyl(0.06, 0.07, 0.34, 6), leatherM, -0.12, 0.4, -0.16);
    quiver.rotation.z = 0.4;
    body.add(quiver);
    for (let i = 0; i < 3; i++)
      body.add(mesh(cyl(0.008, 0.008, 0.2, 4), M(0xd9d2bd, 0.9), -0.16 + i * 0.035, 0.62, -0.2));
  } else if (kind === "spearman") {
    head.add(mesh(new THREE.SphereGeometry(0.17, 8, 7, 0, PI * 2, 0, PI / 1.6), ironM, 0, 0.2, 0));
    const spear = new THREE.Group();
    spear.add(mesh(cyl(0.018, 0.022, 1.7, 5), leatherM, 0, 0.25, 0));
    spear.add(mesh(cone(0.05, 0.2, 6), M(0xc7ccd4, 0.35), 0, 1.18, 0));
    spear.position.set(0, -0.5, 0.04);
    armR.add(spear);
    const buckler = mesh(cyl(0.13, 0.13, 0.035, 10), M(0x8a6b42, 0.8), 0.02, -0.42, 0.09);
    buckler.rotation.x = PI / 2;
    armL.add(buckler);
  } else if (kind === "guard") {
    // full helm with slit
    head.add(mesh(new THREE.SphereGeometry(0.18, 9, 7), ironM, 0, 0.18, 0));
    head.add(mesh(box(0.2, 0.045, 0.03), M(0x14161c, 0.6), 0, 0.2, 0.145));
    head.add(mesh(cone(0.06, 0.2, 6), M(new THREE.Color(cfg.primary).getHex(), 0.9), 0, 0.42, 0));
    const towerShield = mesh(box(0.34, 0.62, 0.045), M(new THREE.Color(cfg.primary).getHex(), 0.7), 0.03, -0.4, 0.1);
    armL.add(towerShield);
    armL.add(mesh(box(0.1, 0.14, 0.02), goldM, 0.03, -0.4, 0.13));
    const axe = new THREE.Group();
    axe.add(mesh(cyl(0.02, 0.025, 0.65, 5), leatherM, 0, 0.1, 0));
    axe.add(mesh(box(0.16, 0.2, 0.03), M(0xc7ccd4, 0.35), 0.09, 0.36, 0));
    axe.position.set(0, -0.52, 0.05);
    armR.add(axe);
  } else if (kind === "villager") {
    // straw hat
    head.add(mesh(cyl(0.26, 0.28, 0.03, 10), M(0xd9b95c, 0.95), 0, 0.28, 0));
    head.add(mesh(cone(0.17, 0.14, 9), M(0xd9b95c, 0.95), 0, 0.34, 0));
    // hoe
    const hoe = new THREE.Group();
    hoe.add(mesh(cyl(0.016, 0.02, 0.9, 5), leatherM, 0, 0.2, 0));
    hoe.add(mesh(box(0.14, 0.05, 0.04), M(0x8a8f98, 0.5), 0.07, 0.66, 0));
    hoe.position.set(0, -0.5, 0.06);
    hoe.rotation.z = 0.18;
    armR.add(hoe);
  }
  g.add(body, head);

  const h = legH + torsoH + 0.42;
  return { g, legL, legR, armL, armR, body, head, h };
}

/** walk-cycle driver: t seconds, speed factor; also idle breathing */
export function animUnit(u: Unit, t: number, moving: boolean, speed = 1): void {
  const s = t * 7 * speed;
  if (moving) {
    const a = Math.sin(s) * 0.62;
    u.legL.rotation.x = a;
    u.legR.rotation.x = -a;
    u.armL.rotation.x = -a * 0.7;
    u.armR.rotation.x = a * 0.7;
    u.body.position.y = 0.5 + Math.abs(Math.cos(s)) * 0.035;
    u.body.rotation.z = Math.sin(s) * 0.03;
    u.head.rotation.z = Math.sin(s) * 0.02;
  } else {
    const b = Math.sin(t * 1.8) * 0.035;
    u.legL.rotation.x *= 0.85;
    u.legR.rotation.x *= 0.85;
    u.armL.rotation.x = b;
    u.armR.rotation.x = -b;
    u.body.position.y = 0.5 + Math.max(0, Math.sin(t * 1.8)) * 0.012;
    u.body.rotation.z = 0;
  }
}

/* ───────────────────── animals ───────────────────── */

export interface Animal { g: THREE.Group; update: (t: number) => void }

export function makeChicken(): Animal {
  const g = new THREE.Group();
  const bodyM = M(0xf0ede4, 0.95);
  const body = mesh(new THREE.SphereGeometry(0.13, 8, 7), bodyM, 0, 0.14, 0);
  body.scale.set(1, 0.9, 1.25);
  g.add(body);
  const head = mesh(new THREE.SphereGeometry(0.07, 7, 6), bodyM, 0, 0.28, 0.12);
  g.add(head);
  g.add(mesh(cone(0.03, 0.06, 5), M(0xe8a13c, 0.8), 0, 0.28, 0.2));
  g.add(mesh(box(0.035, 0.05, 0.03), M(0xd4453a, 0.85), 0, 0.35, 0.11)); // comb
  for (const s of [-1, 1]) g.add(mesh(cyl(0.008, 0.008, 0.08, 4), M(0xe8a13c, 0.8), s * 0.04, 0.04, 0));
  const tail = mesh(cone(0.05, 0.12, 5), M(0xd9d2bd, 0.95), 0, 0.18, -0.15);
  tail.rotation.x = -PI / 2.4;
  g.add(tail);
  const update = (t: number) => {
    g.rotation.y = Math.sin(t * 0.4) * 0.6;
    g.position.y = Math.abs(Math.sin(t * 2.4)) * 0.02;
    head.rotation.x = Math.max(0, Math.sin(t * 2.2)) * 0.5; // pecking
  };
  return { g, update };
}

export function makeCat(): Animal {
  const g = new THREE.Group();
  const fur = M(0x6e6259, 0.95);
  const body = mesh(new THREE.SphereGeometry(0.1, 7, 6), fur, 0, 0.11, 0);
  body.scale.set(1, 0.85, 1.5);
  g.add(body);
  const head = mesh(new THREE.SphereGeometry(0.07, 7, 6), fur, 0, 0.19, 0.13);
  g.add(head);
  for (const s of [-1, 1]) g.add(mesh(cone(0.025, 0.05, 4), fur, s * 0.035, 0.26, 0.12));
  const tail = mesh(cyl(0.015, 0.02, 0.24, 5), fur, 0, 0.15, -0.17);
  tail.rotation.x = 1.1;
  g.add(tail);
  const update = (t: number) => { tail.rotation.z = Math.sin(t * 2.6) * 0.35; };
  return { g, update };
}
