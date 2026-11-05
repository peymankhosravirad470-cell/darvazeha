/**
 * Procedural mesh builders for the 3D world — keep/castle, timber houses,
 * bazaar stalls, trees, rocks, torches, chests, crystals, portal, humanoids,
 * deer and birds. All hand-modeled in code (premium stylized look), shared
 * materials, mobile-friendly poly counts.
 */
import * as THREE from "three";

// ---------- shared material library ----------
export const MATS = {
  stone: new THREE.MeshStandardMaterial({ color: 0x8d8577, roughness: 0.92, metalness: 0.02 }),
  stoneDark: new THREE.MeshStandardMaterial({ color: 0x5c554b, roughness: 0.95 }),
  wood: new THREE.MeshStandardMaterial({ color: 0x7a5230, roughness: 0.85 }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x4c3018, roughness: 0.9 }),
  plaster: new THREE.MeshStandardMaterial({ color: 0xd8c9a8, roughness: 0.9 }),
  roofRed: new THREE.MeshStandardMaterial({ color: 0x8c3a2a, roughness: 0.8 }),
  roofBlue: new THREE.MeshStandardMaterial({ color: 0x2e4d74, roughness: 0.8 }),
  gold: new THREE.MeshStandardMaterial({ color: 0xd9a93c, metalness: 0.85, roughness: 0.3 }),
  iron: new THREE.MeshStandardMaterial({ color: 0x4a4a52, metalness: 0.7, roughness: 0.45 }),
  leaf: new THREE.MeshStandardMaterial({ color: 0x3f7d34, roughness: 0.95 }),
  leafDark: new THREE.MeshStandardMaterial({ color: 0x2c5d28, roughness: 0.95 }),
  pine: new THREE.MeshStandardMaterial({ color: 0x274e2a, roughness: 0.95 }),
  bark: new THREE.MeshStandardMaterial({ color: 0x5d4226, roughness: 0.95 }),
  clothRed: new THREE.MeshStandardMaterial({ color: 0xa32026, roughness: 0.85, side: THREE.DoubleSide }),
  clothGold: new THREE.MeshStandardMaterial({ color: 0xd9a93c, roughness: 0.75, side: THREE.DoubleSide }),
  clothPurple: new THREE.MeshStandardMaterial({ color: 0x5b2a86, roughness: 0.85, side: THREE.DoubleSide }),
  clothBlue: new THREE.MeshStandardMaterial({ color: 0x1e3a6e, roughness: 0.85, side: THREE.DoubleSide }),
  crystal: new THREE.MeshStandardMaterial({
    color: 0xff9a3c, emissive: 0xff6a1a, emissiveIntensity: 1.6, roughness: 0.25, metalness: 0.1,
  }),
  water: null as unknown as THREE.ShaderMaterial,
};

export function realmClothMaterial(color: string): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color), roughness: 0.85, side: THREE.DoubleSide,
  });
}

// ---------- keep / castle ----------
export function makeKeep(cloth: THREE.Material): { group: THREE.Group; colliders: Col[] } {
  const g = new THREE.Group();
  const col: Col[] = [];
  const add = (m: THREE.Mesh, x: number, y: number, z: number, r: number) => {
    m.position.set(x, y, z);
    g.add(m);
    if (r > 0) col.push({ x, z, r });
    return m;
  };
  // main hall
  const hall = new THREE.Mesh(new THREE.BoxGeometry(9, 5, 6.5), MATS.stone);
  add(hall, 0, 2.5, 0, 5.4);
  const hallRoof = new THREE.Mesh(new THREE.ConeGeometry(5.4, 2.6, 4), MATS.roofBlue);
  hallRoof.rotation.y = Math.PI / 4;
  add(hallRoof, 0, 6.3, 0, 0);
  // corner towers with crenellations
  const tw = [
    [-4.2, -3], [4.2, -3], [-4.2, 3], [4.2, 3],
  ] as const;
  for (const [x, z] of tw) {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.3, 7.2, 10), MATS.stone);
    add(t, x, 3.6, z, 1.5);
    const cren = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.7, 10), MATS.stoneDark);
    add(cren, x, 7.5, z, 0);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.5, 1.7, 10), MATS.roofBlue);
    add(roof, x, 8.6, z, 0);
    const flagP = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 6), MATS.gold);
    add(flagP, x, 10.2, z, 0);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 0.62), cloth);
    flag.position.set(x + 0.55, 10.55, z);
    g.add(flag);
  }
  // gate arch
  const gateL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4.2, 1.2), MATS.stoneDark);
  add(gateL, -1.5, 2.1, 3.35, 0.9);
  const gateR = gateL.clone(); add(gateR, 1.5, 2.1, 3.35, 0.9);
  const arch = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 1.2, 12, 1, false, 0, Math.PI), MATS.stoneDark);
  arch.rotation.set(Math.PI / 2, 0, Math.PI);
  arch.position.set(0, 4.2, 3.35);
  g.add(arch);
  const portcullis = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 0.15), MATS.iron);
  portcullis.position.set(0, 1.7, 3.3);
  g.add(portcullis);
  return { group: g, colliders: col };
}

// ---------- house ----------
export function makeHouse(variant = 0, cloth?: THREE.Material): { group: THREE.Group; collider: Col } {
  const g = new THREE.Group();
  const w = 2.6 + (variant % 2) * 0.7;
  const d = 2.4;
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, 2.2, d), MATS.plaster);
  body.position.y = 1.1;
  // timber frame accents
  const beam = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.16, 0.1), MATS.woodDark);
  beam.position.set(0, 2.05, d / 2);
  const beamV = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.2, 0.1), MATS.woodDark);
  beamV.position.set(w / 4, 1.1, d / 2 + 0.02);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(w * 0.78, 1.5, 4), variant % 2 ? MATS.roofBlue : MATS.roofRed);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 2.95;
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.35, 0.08), MATS.woodDark);
  door.position.set(0, 0.68, d / 2 + 0.03);
  const win = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.06), new THREE.MeshStandardMaterial({
    color: 0xffc866, emissive: 0xff9a2a, emissiveIntensity: 0.9, roughness: 0.4,
  }));
  win.position.set(-w / 4, 1.35, d / 2 + 0.03);
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.1, 0.42), MATS.stoneDark);
  chimney.position.set(w / 3, 3.3, -0.4);
  g.add(body, beam, beamV, roof, door, win, chimney);
  if (cloth) {
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.4), cloth);
    flag.position.set(0, 3.1, 0.72);
    g.add(flag);
  }
  return { group: g, collider: { x: 0, z: 0, r: Math.max(w, d) * 0.62 } };
}

// ---------- bazaar stall ----------
export function makeStall(canopyColor = 0xa32026): { group: THREE.Group; collider: Col } {
  const g = new THREE.Group();
  const counter = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.9, 1.1), MATS.wood);
  counter.position.y = 0.45;
  const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.2, 6), MATS.woodDark);
  post1.position.set(-1.05, 1.1, 0.45);
  const post2 = post1.clone(); post2.position.x = 1.05;
  const canopy = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 0.06, 1.5),
    new THREE.MeshStandardMaterial({ color: canopyColor, roughness: 0.8, side: THREE.DoubleSide }),
  );
  canopy.position.y = 2.2;
  canopy.rotation.x = -0.12;
  const goods1 = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshStandardMaterial({ color: 0xc46a2a, roughness: 0.6 }));
  goods1.position.set(-0.5, 1.0, 0.1);
  const goods2 = goods1.clone(); goods2.position.x = -0.1;
  const goods3 = goods1.clone(); goods3.position.x = 0.32;
  const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.34, 8), new THREE.MeshStandardMaterial({ color: 0x8a5a2a, roughness: 0.7 }));
  jar.position.set(0.75, 1.06, 0);
  g.add(counter, post1, post2, canopy, goods1, goods2, goods3, jar);
  return { group: g, collider: { x: 0, z: 0, r: 1.35 } };
}

// ---------- well ----------
export function makeWell(): { group: THREE.Group; collider: Col } {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 0.85, 12), MATS.stone);
  ring.position.y = 0.42;
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.82, 12), new THREE.MeshStandardMaterial({
    color: 0x1c4a6e, roughness: 0.15, metalness: 0.4,
  }));
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.72;
  const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.7, 6), MATS.woodDark);
  post1.position.set(-0.7, 1.6, 0);
  const post2 = post1.clone(); post2.position.x = 0.7;
  const top = new THREE.Mesh(new THREE.ConeGeometry(1.15, 0.7, 4), MATS.roofRed);
  top.rotation.y = Math.PI / 4;
  top.position.y = 2.85;
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.5, 6), MATS.wood);
  bar.rotation.z = Math.PI / 2;
  bar.position.y = 2.35;
  g.add(ring, water, post1, post2, top, bar);
  return { group: g, collider: { x: 0, z: 0, r: 1.25 } };
}

// ---------- trees ----------
export function makeOak(scale = 1): { group: THREE.Group; collider: Col } {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.26, 1.7, 7), MATS.bark);
  trunk.position.y = 0.85;
  g.add(trunk);
  const fol = new THREE.Group();
  const puffs: [number, number, number, number][] = [
    [0, 2.15, 0, 1.05], [0.55, 1.8, 0.2, 0.7], [-0.5, 1.9, -0.15, 0.75], [0.1, 2.6, -0.2, 0.65],
  ];
  for (const [x, y, z, r] of puffs) {
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), MATS.leaf);
    s.position.set(x, y, z);
    s.scale.y = 0.82;
    fol.add(s);
  }
  g.add(fol);
  g.scale.setScalar(scale);
  return { group: g, collider: { x: 0, z: 0, r: 0.42 * scale } };
}

export function makePine(scale = 1): { group: THREE.Group; collider: Col } {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 1.4, 6), MATS.bark);
  trunk.position.y = 0.7;
  g.add(trunk);
  for (let i = 0; i < 3; i++) {
    const c = new THREE.Mesh(new THREE.ConeGeometry(1.05 - i * 0.28, 1.15, 8), MATS.pine);
    c.position.y = 1.55 + i * 0.75;
    g.add(c);
  }
  g.scale.setScalar(scale);
  return { group: g, collider: { x: 0, z: 0, r: 0.4 * scale } };
}

// ---------- rock ----------
export function makeRock(scale = 1): { mesh: THREE.Mesh; collider: Col } {
  const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 0), MATS.stoneDark);
  m.scale.set(scale * (0.8 + Math.random() * 0.5), scale * (0.55 + Math.random() * 0.4), scale * (0.8 + Math.random() * 0.5));
  m.rotation.y = Math.random() * Math.PI;
  m.position.y = scale * 0.22;
  const g = new THREE.Group();
  g.add(m);
  return { mesh: m, collider: { x: 0, z: 0, r: scale * 0.85 } };
}

// ---------- torch (animated flame) ----------
export interface Torch {
  group: THREE.Group;
  light?: THREE.PointLight;
  flame: THREE.Sprite;
  seed: number;
}

export function makeTorch(withLight: boolean): Torch {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 2.1, 6), MATS.woodDark);
  pole.position.y = 1.05;
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.1, 0.16, 8), MATS.iron);
  bowl.position.y = 2.16;
  g.add(pole, bowl);
  const flame = new THREE.Sprite(new THREE.SpriteMaterial({
    map: flameTexture(), color: 0xffa93c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  flame.position.y = 2.5;
  flame.scale.set(0.55, 0.85, 1);
  g.add(flame);
  const light = withLight ? new THREE.PointLight(0xff9a3c, 0, 9, 2) : undefined;
  if (light) { light.position.y = 2.5; g.add(light); }
  return { group: g, light, flame, seed: Math.random() * 100 };
}

// ---------- chest ----------
export function makeChest(): { group: THREE.Group; lid: THREE.Mesh; collider: Col } {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.6), MATS.woodDark);
  body.position.y = 0.25;
  const trim = new THREE.Mesh(new THREE.BoxGeometry(0.94, 0.1, 0.64), MATS.gold);
  trim.position.y = 0.32;
  const lid = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.28, 0.6), MATS.wood);
  lid.position.y = 0.64;
  const lock = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, 0.05), MATS.gold);
  lock.position.set(0, 0.5, 0.32);
  g.add(body, trim, lid, lock);
  lid.geometry.translate(0, 0.14, 0);
  lid.position.y = 0.5;
  return { group: g, lid, collider: { x: 0, z: 0, r: 0.8 } };
}

// ---------- quest crystal ----------
export function makeCrystal(): { group: THREE.Group; core: THREE.Mesh } {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), MATS.crystal);
  core.position.y = 0.9;
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: flameTexture(), color: 0xff8a2a, transparent: true, blending: THREE.AdditiveBlending,
    opacity: 0.6, depthWrite: false,
  }));
  glow.position.y = 0.9;
  glow.scale.set(1.4, 1.4, 1);
  g.add(core, glow);
  return { group: g, core };
}

// ---------- portal ----------
export function makePortal(): { group: THREE.Group; ring: THREE.Mesh; disc: THREE.Mesh } {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.14, 10, 40), MATS.gold);
  ring.position.y = 1.9;
  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(1.42, 36),
    new THREE.ShaderMaterial({
      transparent: true, side: THREE.DoubleSide, depthWrite: false,
      uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x8a4a12) } },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
      fragmentShader: `
        uniform float uTime; uniform vec3 uColor; varying vec2 vUv;
        void main(){
          vec2 c = vUv - 0.5;
          float r = length(c) * 2.0;
          float a = atan(c.y, c.x);
          float swirl = sin(a * 3.0 - uTime * 2.2 + r * 9.0) * 0.5 + 0.5;
          float alpha = smoothstep(1.0, 0.25, r) * (0.35 + swirl * 0.45);
          vec3 col = uColor * (0.6 + swirl * 0.9) + vec3(1.0, 0.75, 0.35) * smoothstep(0.9, 0.0, r) * 0.5;
          gl_FragColor = vec4(col, alpha);
        }`,
    }),
  );
  disc.position.y = 1.9;
  const pillarL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3.6, 0.5), MATS.stoneDark);
  pillarL.position.set(-1.85, 1.8, 0);
  const pillarR = pillarL.clone(); pillarR.position.x = 1.85;
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.5, 0.6), MATS.stone);
  lintel.position.y = 3.7;
  g.add(ring, disc, pillarL, pillarR, lintel);
  return { group: g, ring, disc };
}

// ---------- humanoid (player & NPC) ----------
export interface Humanoid {
  group: THREE.Group;
  torso: THREE.Group;
  head: THREE.Group;
  armL: THREE.Group;
  armR: THREE.Group;
  legL: THREE.Group;
  legR: THREE.Group;
}

export function makeHumanoid(opts: {
  tunic: number; trim?: number; scale?: number; guard?: boolean;
}): Humanoid {
  const g = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xd9a37a, roughness: 0.8 });
  const tunicM = new THREE.MeshStandardMaterial({ color: opts.tunic, roughness: 0.85 });
  const trimM = new THREE.MeshStandardMaterial({ color: opts.trim ?? 0xd9a93c, metalness: 0.6, roughness: 0.35 });

  const pelvis = new THREE.Group(); pelvis.position.y = 0.62;
  const torso = new THREE.Group(); torso.position.y = 0.0;
  const chest = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.52, 0.26), tunicM);
  chest.position.y = 0.26;
  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.09, 0.28), trimM);
  belt.position.y = 0.02;
  torso.add(chest, belt);
  pelvis.add(torso);

  const head = new THREE.Group(); head.position.y = 0.62;
  const skull = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.28, 0.24), skin);
  skull.position.y = 0.14;
  head.add(skull);
  if (opts.guard) {
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), trimM);
    helm.position.y = 0.18;
    head.add(helm);
  } else {
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.1, 0.25), new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 0.9 }));
    hair.position.y = 0.27;
    head.add(hair);
  }
  torso.add(head);

  const mkArm = (side: 1 | -1) => {
    const arm = new THREE.Group();
    arm.position.set(side * 0.29, 0.46, 0);
    const upper = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.34, 0.12), tunicM);
    upper.position.y = -0.17;
    const fore = new THREE.Mesh(new THREE.BoxGeometry(0.095, 0.3, 0.1), skin);
    fore.position.y = -0.46;
    arm.add(upper, fore);
    return arm;
  };
  const armL = mkArm(-1), armR = mkArm(1);
  torso.add(armL, armR);

  const mkLeg = (side: 1 | -1) => {
    const leg = new THREE.Group();
    leg.position.set(side * 0.12, 0.62, 0);
    const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.34, 0.15), tunicM);
    thigh.position.y = -0.17;
    const shin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, 0.13), new THREE.MeshStandardMaterial({ color: 0x4a3520, roughness: 0.9 }));
    shin.position.y = -0.47;
    leg.add(thigh, shin);
    return leg;
  };
  const legL = mkLeg(-1), legR = mkLeg(1);
  g.add(pelvis, legL, legR);

  if (opts.scale) g.scale.setScalar(opts.scale);
  return { group: g, torso, head, armL, armR, legL, legR };
}

// ---------- deer ----------
export interface Deer {
  group: THREE.Group;
  legs: THREE.Group[];
  head: THREE.Group;
}

export function makeDeer(): Deer {
  const g = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color: 0x9a6a3a, roughness: 0.9 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x6a4522, roughness: 0.9 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.44, 0.4), fur);
  body.position.y = 0.72;
  const neck = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.42, 0.18), fur);
  neck.position.set(0.42, 1.0, 0);
  neck.rotation.z = -0.4;
  const head = new THREE.Group();
  head.position.set(0.56, 1.22, 0);
  const skull = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.18), fur);
  const antlerM = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.035, 0.36, 5), dark);
  antlerM.rotation.z = 0.5;
  antlerM.position.set(0.02, 0.18, 0.07);
  const antler2 = antlerM.clone(); antler2.position.z = -0.07;
  head.add(skull, antlerM, antler2);
  const legs: THREE.Group[] = [];
  for (const [x, z] of [[0.32, 0.14], [0.32, -0.14], [-0.32, 0.14], [-0.32, -0.14]]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.5, z);
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.5, 0.09), fur);
    m.position.y = -0.25;
    leg.add(m);
    legs.push(leg);
    g.add(leg);
  }
  g.add(body, neck, head);
  return { group: g, legs, head };
}

// ---------- bird ----------
export function makeBird(): { group: THREE.Group; wings: THREE.Mesh[] } {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x2a2a34, roughness: 0.8, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.4, 5), mat);
  body.rotation.x = Math.PI / 2;
  const w1 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.16), mat);
  w1.position.x = 0.26;
  const w2 = w1.clone(); w2.position.x = -0.26;
  g.add(body, w1, w2);
  return { group: g, wings: [w1, w2] };
}

// ---------- textures ----------
let _flameTex: THREE.Texture | null = null;
export function flameTexture(): THREE.Texture {
  if (_flameTex) return _flameTex;
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, "rgba(255,240,200,1)");
  g.addColorStop(0.35, "rgba(255,180,80,0.75)");
  g.addColorStop(0.7, "rgba(255,110,30,0.25)");
  g.addColorStop(1, "rgba(255,80,20,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  _flameTex = new THREE.CanvasTexture(c);
  _flameTex.colorSpace = THREE.SRGBColorSpace;
  return _flameTex;
}

export interface Col { x: number; z: number; r: number }
