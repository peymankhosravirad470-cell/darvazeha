/**
 * WorldScene — the explorable 3D land of each realm.
 * Terrain + river + stone bridge, keep/castle, timber village, bazaar, ruins,
 * gate landmark, torches, animated NPCs & wildlife, day/night cycle, fog,
 * free movement (touch joystick), interactions, daily quest & rewards.
 */
import * as THREE from "three";
import { Realm, Land } from "../data";
import { QualityProfile } from "../quality";
import { audio } from "../audio";
import {
  MATS, makeKeep, makeHouse, makeStall, makeWell, makeOak, makePine, makeRock,
  makeTorch, makeChest, makeCrystal, makePortal, makeHumanoid, makeDeer, makeBird,
  makeHumanoid as _mh, flameTexture, realmClothMaterial, Col, Torch,
} from "./builders";
import { makeClothMaterial } from "./clothMaterial";

export interface WorldInput {
  move: { x: number; y: number };
  look: { dx: number };
  run: boolean;
}

export type NearTarget =
  | { type: "npc"; id: string; label: string }
  | { type: "chest"; id: string; label: string }
  | { type: "portal"; id: string; label: string }
  | null;

export interface WorldCallbacks {
  onNear: (t: NearTarget) => void;
  onTalk: (npcId: string) => void;
  onChestOpened: (chestId: string, coins: number) => void;
  onCrystalCollected: (collected: number, total: number) => void;
  onQuestComplete: (coins: number) => void;
  onExit: () => void;
  onToast: (msg: string) => void;
}

interface Interactable {
  id: string;
  type: "npc" | "chest" | "portal";
  label: string;
  pos: THREE.Vector3;
  used?: boolean;
}

interface Npc {
  h: ReturnType<typeof makeHumanoid>;
  anchor: THREE.Vector3;
  wanderAngle: number;
  timer: number;
  pos: THREE.Vector3;
}

const WATER_Y = -1.05;
const riverX = (z: number) => Math.sin(z * 0.032) * 13 + 7;

export function height(x: number, z: number): number {
  let h = Math.sin(x * 0.045) * Math.cos(z * 0.052) * 1.1
    + Math.sin(x * 0.11 + 3.1) * Math.cos(z * 0.093 + 1.7) * 0.5
    + Math.sin((x + z) * 0.023 + 2.0) * 1.6;
  const d = Math.hypot(x, z);
  const flat = THREE.MathUtils.smoothstep(d, 8, 26);
  h *= flat;
  h += THREE.MathUtils.smoothstep(d, 58, 92) * (Math.abs(Math.sin(x * 0.08) * Math.cos(z * 0.07)) * 10 + 6);
  const dd = Math.abs(x - riverX(z));
  if (dd < 6) h -= Math.pow(1 - dd / 6, 1.5) * 2.4;
  return h;
}

interface ThemeCfg {
  trees: "oak" | "pine" | "mixed";
  hasBazaar: boolean;
  hasKeep: boolean;
  hasRuins: boolean;
  hasGate: boolean;
  fog: number;
  skyTint: number;
  grass: number;
  night?: boolean;
}

const THEME: Record<string, Partial<ThemeCfg>> = {
  dawn: { trees: "oak", hasGate: true, fog: 0x2a2438, skyTint: 0xffd9a0, grass: 1 },
  emberVillage: { trees: "pine", hasBazaar: false, fog: 0x33201a, skyTint: 0xff9a50, grass: 0.6 },
  alliesField: { trees: "oak", hasBazaar: true, fog: 0x28303a, skyTint: 0xffe8b0, grass: 1 },
  oldBazaar: { trees: "oak", hasBazaar: true, fog: 0x30281e, skyTint: 0xffc070, grass: 0.4 },
  greenPlain: { trees: "oak", fog: 0x24352a, skyTint: 0xd8ffd0, grass: 1.2 },
  emeraldForest: { trees: "mixed", fog: 0x1c3826, skyTint: 0xa8ffc8, grass: 1.2 },
  brightRiver: { trees: "mixed", fog: 0x223648, skyTint: 0xbfe8ff, grass: 1 },
  guardianMountains: { trees: "pine", fog: 0x2a3040, skyTint: 0xcfd8ff, grass: 0.7 },
  guardianKeep: { trees: "pine", hasKeep: true, fog: 0x262c3a, skyTint: 0xcfd8ff, grass: 0.7 },
  silentRuins: { trees: "pine", hasRuins: true, fog: 0x232034, skyTint: 0xb8b0ff, grass: 0.5, night: true },
  redGate: { trees: "oak", hasGate: true, hasKeep: true, fog: 0x38181a, skyTint: 0xffa070, grass: 0.8 },
  mistGate: { trees: "pine", hasGate: true, fog: 0x252c38, skyTint: 0xaac4e8, grass: 0.8 },
  coldStoneVillage: { trees: "pine", fog: 0x242830, skyTint: 0xb8c8e0, grass: 0.5 },
  chainBridge: { trees: "pine", fog: 0x222834, skyTint: 0x9ab4d8, grass: 0.5 },
  shadowBazaar: { trees: "pine", hasBazaar: true, fog: 0x1e2230, skyTint: 0x8898c8, grass: 0.3 },
  blackPineForest: { trees: "pine", fog: 0x161e1c, skyTint: 0x78a888, grass: 0.8 },
  lanternMarsh: { trees: "pine", fog: 0x1c2426, skyTint: 0x88c8a8, grass: 0.6 },
  darkRiver: { trees: "pine", fog: 0x1c202c, skyTint: 0x8898b8, grass: 0.6 },
  ravenMountains: { trees: "pine", fog: 0x20222e, skyTint: 0x9888c0, grass: 0.5 },
  seerTower: { trees: "pine", hasRuins: true, fog: 0x1e2030, skyTint: 0x9890d8, grass: 0.5, night: true },
  dezhmaarRuins: { trees: "pine", hasRuins: true, fog: 0x222430, skyTint: 0xa0a8d0, grass: 0.4 },
  nightGate: { trees: "pine", hasGate: true, fog: 0x161824, skyTint: 0x8088c0, grass: 0.4, night: true },
  generic: { trees: "mixed", fog: 0x28303c, skyTint: 0xc8d8ff, grass: 1 },
};

export class WorldScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();
  private raf = 0;
  private disposed = false;
  private prof: QualityProfile;
  private theme: ThemeCfg;
  private colliders: Col[] = [];
  private torches: Torch[] = [];
  private chests: { id: string; group: THREE.Group; lid: THREE.Mesh; opened: boolean; anim: number }[] = [];
  private crystals: { group: THREE.Group; taken: boolean; seed: number }[] = [];
  private npcs: Npc[] = [];
  private deers: { d: ReturnType<typeof makeDeer>; angle: number; timer: number; center: THREE.Vector3 }[] = [];
  private birds: { b: ReturnType<typeof makeBird>; r: number; h: number; speed: number; phase: number }[] = [];
  private interactables: Interactable[] = [];
  private player!: ReturnType<typeof makeHumanoid>;
  private playerPos = new THREE.Vector3(0, 0, 10);
  private playerYaw = Math.PI;
  private camYaw = Math.PI;
  private walkPhase = 0;
  private stepTimer = 0;
  private near: NearTarget = null;
  private sun!: THREE.DirectionalLight;
  private hemi!: THREE.HemisphereLight;
  private skyMat!: THREE.ShaderMaterial;
  private waterMat!: THREE.ShaderMaterial;
  private stars!: THREE.Points;
  private clouds: THREE.Sprite[] = [];
  private fogColor = new THREE.Color(0x28303c);
  private questCrystalCount = 0;
  private questActive = false;
  private bannerMats: THREE.ShaderMaterial[] = [];

  constructor(
    private canvas: HTMLCanvasElement,
    prof: QualityProfile,
    private realm: Realm,
    private land: Land,
    private input: WorldInput,
    private cb: WorldCallbacks,
    clothTexture: THREE.Texture | null,
  ) {
    this.prof = prof;
    this.theme = { trees: "mixed", hasBazaar: false, hasKeep: false, hasRuins: false, hasGate: false, fog: 0x28303c, skyTint: 0xc8d8ff, grass: 1, ...(THEME[land.theme] ?? THEME.generic) };

    this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: prof.tier === "high", powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, prof.dpr));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.18;

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 400);
    this.camera.position.set(0, 6, 18);

    this.scene.fog = new THREE.FogExp2(this.theme.fog, 0.016);
    this.fogColor.set(this.theme.fog);

    this.buildSky();
    this.buildLights();
    this.buildTerrain();
    this.buildWater();
    this.buildVillage(clothTexture);
    this.buildNature();
    this.buildWildlife();
    this.buildPlayer();
    this.buildQuest();

    window.addEventListener("resize", this.onResize);
    (window as unknown as { __world?: WorldScene }).__world = this;
  }

  // ---------------- builders ----------------

  private buildSky(): void {
    const geo = new THREE.SphereGeometry(180, 24, 16);
    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      uniforms: {
        uTop: { value: new THREE.Color(0x1a2a52) },
        uHorizon: { value: new THREE.Color(0x6a80a8) },
        uGlow: { value: new THREE.Color(this.theme.skyTint) },
        uSunDir: { value: new THREE.Vector3(0.4, 0.8, 0.3) },
        uNight: { value: 0 },
      },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 uTop, uHorizon, uGlow, uSunDir; uniform float uNight;
        varying vec3 vDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        void main(){
          float h = clamp(vDir.y, -0.15, 1.0);
          vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.5, h));
          float sd = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
          col += uGlow * pow(sd, 5.0) * 0.5 * (1.0 - uNight);
          col += uGlow * pow(max(0.0, 1.0 - abs(h)*3.0), 2.0) * 0.22 * (1.0 - uNight * 0.6);
          vec2 sp = vDir.xz / max(vDir.y, 0.06) * 2.0;
          float st = step(0.9965, hash(floor(sp*50.0))) * smoothstep(0.18, 0.6, vDir.y);
          col += vec3(0.9,0.92,1.0) * st * uNight;
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.scene.add(new THREE.Mesh(geo, this.skyMat));

    // stars (visibility animated via material opacity through uNight)
    const n = this.prof.tier === "high" ? 300 : 140;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const th = Math.random() * Math.PI * 2, ph = Math.acos(Math.random() * 0.8);
      const r = 170;
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.cos(ph);
      pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({
      color: 0xcdd8ff, size: 1.4, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false,
    }));
    this.scene.add(this.stars);

    // clouds
    const ctex = flameTexture();
    for (let i = 0; i < 5; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: ctex, color: 0xd8e4f8, transparent: true, opacity: 0.22, depthWrite: false,
      }));
      s.scale.set(26 + Math.random() * 20, 9 + Math.random() * 6, 1);
      s.position.set((Math.random() - 0.5) * 160, 30 + Math.random() * 14, (Math.random() - 0.5) * 160);
      this.clouds.push(s);
      this.scene.add(s);
    }
  }

  private buildLights(): void {
    this.hemi = new THREE.HemisphereLight(0xbfd0ff, 0x3a4a2a, 0.75);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffe8c0, 2.0);
    this.sun.position.set(30, 50, 20);
    if (this.prof.worldShadowMap > 0) {
      this.sun.castShadow = true;
      this.sun.shadow.mapSize.set(this.prof.worldShadowMap, this.prof.worldShadowMap);
      const c = this.sun.shadow.camera as THREE.OrthographicCamera;
      c.left = -40; c.right = 40; c.top = 40; c.bottom = -40; c.far = 140;
      this.sun.shadow.bias = -0.0008;
    }
    this.scene.add(this.sun);
  }

  private buildTerrain(): void {
    const size = 190;
    const seg = this.prof.terrainSegments;
    const geo = new THREE.PlaneGeometry(size, size, seg, seg);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const colors = new Float32Array(pos.count * 3);
    const cGrass = new THREE.Color(0x4a7c3a);
    const cGrass2 = new THREE.Color(0x5e8c40);
    const cDirt = new THREE.Color(0x6e5a3a);
    const cRock = new THREE.Color(0x77726a);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const h = height(x, z);
      pos.setY(i, h);
      const dd = Math.abs(x - riverX(z));
      let c: THREE.Color;
      if (dd < 5.4) c = cDirt.clone().lerp(cRock, THREE.MathUtils.clamp((5.4 - dd) / 4, 0, 1));
      else if (h > 5.5) c = cRock.clone().lerp(new THREE.Color(0xd8dce8), THREE.MathUtils.clamp((h - 5.5) / 8, 0, 0.8));
      else {
        const v = (Math.sin(x * 0.8) + Math.cos(z * 0.7)) * 0.5;
        c = cGrass.clone().lerp(cGrass2, v * 0.5 + 0.5);
        c.lerp(cDirt, THREE.MathUtils.clamp(h * 0.12, 0, 0.3));
      }
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = this.prof.worldShadowMap > 0;
    this.scene.add(mesh);
  }

  private buildWater(): void {
    const shape = new THREE.Shape();
    const z0 = -96, z1 = 96;
    const pts: THREE.Vector2[] = [];
    for (let z = z0; z <= z1; z += 6) pts.push(new THREE.Vector2(riverX(z) - 3.4, z));
    for (let z = z1; z >= z0; z -= 6) pts.push(new THREE.Vector2(riverX(z) + 3.4, z));
    shape.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i].x, pts[i].y);
    const geo = new THREE.ShapeGeometry(shape, 24);
    geo.rotateX(-Math.PI / 2);
    this.waterMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color(0x14405e) },
        uShallow: { value: new THREE.Color(0x3a7ea8) },
        uNight: { value: 0 },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vW; varying float vY;
        void main(){
          vec3 p = position;
          p.y += sin(p.x * 1.2 + uTime * 1.8) * 0.045 + cos(p.z * 1.6 + uTime * 2.3) * 0.04;
          vY = p.y; vW = p.xz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: `
        uniform float uTime, uNight; uniform vec3 uDeep, uShallow;
        varying vec2 vW; varying float vY;
        void main(){
          float sp = sin(vW.x * 2.4 + uTime * 2.0) * cos(vW.y * 1.8 - uTime * 1.4);
          vec3 col = mix(uDeep, uShallow, 0.5 + sp * 0.3);
          col *= (1.0 - uNight * 0.55);
          float glint = pow(max(sp, 0.0), 6.0) * 0.7 * (1.0 - uNight * 0.5);
          col += vec3(1.0, 0.95, 0.8) * glint;
          gl_FragColor = vec4(col, 0.82);
        }`,
    });
    const mesh = new THREE.Mesh(geo, this.waterMat);
    mesh.position.y = WATER_Y;
    this.scene.add(mesh);

    // stone bridge at village crossing
    const bz = 4;
    const bx = riverX(bz);
    const bg = new THREE.Group();
    for (let i = -4; i <= 4; i++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.28, 1.1), MATS.stone);
      const t = i / 4;
      step.position.set(bx, WATER_Y + 1.55 - t * t * 0.5, bz + i * 1.05);
      bg.add(step);
    }
    for (const s of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.5, 9.4), MATS.stoneDark);
      rail.position.set(bx + s * 1.3, WATER_Y + 1.85, bz);
      bg.add(rail);
    }
    this.scene.add(bg);
  }

  private addCol(x: number, z: number, r: number): void {
    this.colliders.push({ x, z, r });
  }

  private buildVillage(clothTexture: THREE.Texture | null): void {
    const realmCloth = realmClothMaterial(this.realm.color);
    // banner cloth (waving) for keep/gate if texture available, else plain
    const bannerMat = clothTexture
      ? makeClothMaterial(clothTexture, clothTexture, { strength: 0.5, speed: 1.6, gust: 0.4, seed: Math.random() })
      : null;
    if (bannerMat) this.bannerMats.push(bannerMat);

    // plaza well + torches
    const well = makeWell();
    well.group.position.set(0, height(0, 0), 0);
    this.scene.add(well.group);
    this.addCol(0, 0, 1.6);

    const torchPos: [number, number][] = [[-4, -3], [4, -3], [-4, 4], [4, 4]];
    for (const [x, z] of torchPos) {
      const t = makeTorch(this.prof.tier !== "low");
      t.group.position.set(x, height(x, z), z);
      this.torches.push(t);
      this.scene.add(t.group);
      this.addCol(x, z, 0.3);
    }

    // houses ring
    const n = 7;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + 0.35;
      const r = 15 + (i % 2) * 3.2;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const house = makeHouse(i, realmCloth);
      house.group.position.set(x, height(x, z), z);
      house.group.rotation.y = -a + Math.PI / 2 + (Math.random() - 0.5) * 0.3;
      if (this.prof.worldShadowMap > 0) house.group.traverse((o) => { if (o instanceof THREE.Mesh) o.castShadow = true; });
      this.scene.add(house.group);
      const wx = x + Math.sin(house.group.rotation.y) * 0.5;
      const wz = z + Math.cos(house.group.rotation.y) * 0.5;
      this.addCol(x, z, house.collider.r + 0.4);
      void wx; void wz;
    }

    // bazaar stalls
    if (this.theme.hasBazaar) {
      const colors = [0xa32026, 0x2e6ea8, 0xc88a2a];
      for (let i = 0; i < 4; i++) {
        const a = 0.9 + i * 0.5;
        const r = 9.5;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        const st = makeStall(colors[i % 3]);
        st.group.position.set(x, height(x, z), z);
        st.group.rotation.y = -a + Math.PI;
        this.scene.add(st.group);
        this.addCol(x, z, st.collider.r);
      }
    }

    // keep
    if (this.theme.hasKeep) {
      const keep = makeKeep(realmCloth);
      const kx = 0, kz = -30;
      keep.group.position.set(kx, height(kx, kz) + 0.4, kz);
      if (this.prof.worldShadowMap > 0) keep.group.traverse((o) => { if (o instanceof THREE.Mesh) o.castShadow = true; });
      this.scene.add(keep.group);
      for (const c of keep.colliders) this.addCol(kx + c.x, kz + c.z, c.r);
      if (bannerMat) {
        for (const bx of [-4.2, 4.2]) {
          const b = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 1.5), bannerMat);
          b.position.set(kx + bx, height(kx, kz) + 9.2, kz + 3.1);
          b.rotation.y = Math.PI;
          this.scene.add(b);
        }
      }
    }

    // ruins
    if (this.theme.hasRuins) {
      const cx = 24, cz = 20;
      for (let i = 0; i < 6; i++) {
        const a = i * 1.1;
        const hgt = 1 + Math.random() * 2.4;
        const wall = new THREE.Mesh(new THREE.BoxGeometry(2.2, hgt, 0.7), MATS.stoneDark);
        wall.position.set(cx + Math.cos(a) * 5, height(cx, cz) + hgt / 2, cz + Math.sin(a) * 5);
        wall.rotation.y = a + 0.4;
        wall.rotation.z = (Math.random() - 0.5) * 0.08;
        this.scene.add(wall);
        this.addCol(wall.position.x, wall.position.z, 1.3);
      }
      for (let i = 0; i < 4; i++) {
        const rubble = makeRock(0.7 + Math.random() * 0.5);
        rubble.mesh.position.set(cx + (Math.random() - 0.5) * 8, height(cx, cz) + 0.2, cz + (Math.random() - 0.5) * 8);
        this.scene.add(rubble.mesh);
      }
    }

    // gate landmark
    if (this.theme.hasGate) {
      const gx = 0, gz = -52;
      const gate = makePortal();
      gate.group.position.set(gx, height(gx, gz), gz);
      gate.group.scale.setScalar(2.1);
      this.scene.add(gate.group);
      this.addCol(gx - 4, gz, 1.2);
      this.addCol(gx + 4, gz, 1.2);
    }

    // exit portal behind the spawn point
    const portal = makePortal();
    portal.group.position.set(0, height(0, 19), 19);
    this.scene.add(portal.group);
    this.interactables.push({ id: "portal", type: "portal", label: "بازگشت به سرزمین‌ها", pos: new THREE.Vector3(0, height(0, 19), 19) });
    (portal.disc.material as THREE.ShaderMaterial).uniforms.uColor.value.set(new THREE.Color(this.realm.color));
    this.portalDisc = portal.disc;
  }

  private portalDisc!: THREE.Mesh;

  private buildNature(): void {
    const count = this.prof.treeCount;
    const mk = this.theme.trees === "oak" ? makeOak : this.theme.trees === "pine" ? makePine : (i % 2 ? makeOak : makePine);
    let placed = 0, guard = 0;
    while (placed < count && guard++ < count * 8) {
      const a = Math.random() * Math.PI * 2;
      const r = 24 + Math.random() * 58;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const h = height(x, z);
      if (h > 6 || h < -0.4) continue;
      if (Math.abs(x - riverX(z)) < 5.5) continue;
      const tree = this.theme.trees === "mixed"
        ? (placed % 2 ? makeOak(0.9 + Math.random() * 0.5) : makePine(0.9 + Math.random() * 0.5))
        : mk(0.85 + Math.random() * 0.6);
      tree.group.position.set(x, h, z);
      tree.group.rotation.y = Math.random() * Math.PI * 2;
      if (this.prof.worldShadowMap > 0) tree.group.traverse((o) => { if (o instanceof THREE.Mesh) o.castShadow = true; });
      this.scene.add(tree.group);
      this.addCol(x, z, tree.collider.r + 0.25);
      placed++;
    }
    // rocks
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 14 + Math.random() * 66;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (height(x, z) > 8) continue;
      const rock = makeRock(0.5 + Math.random() * 1.1);
      rock.mesh.position.set(x, height(x, z), z);
      this.scene.add(rock.mesh);
      this.addCol(x, z, rock.collider.r);
    }
    // grass instanced (high tier)
    if (this.prof.grassInstances > 0) {
      const gGeo = new THREE.PlaneGeometry(0.22, 0.5);
      gGeo.translate(0, 0.25, 0);
      const gMat = new THREE.MeshStandardMaterial({ color: 0x558a3c, roughness: 0.9, side: THREE.DoubleSide });
      const inst = new THREE.InstancedMesh(gGeo, gMat, this.prof.grassInstances);
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      for (let i = 0; i < this.prof.grassInstances; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 8 + Math.random() * 60;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        const h = height(x, z);
        if (h > 5 || h < 0) { i--; continue; }
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * Math.PI);
        m.compose(new THREE.Vector3(x, h, z), q, new THREE.Vector3(1, 0.7 + Math.random() * 0.8, 1));
        inst.setMatrixAt(i, m);
      }
      this.scene.add(inst);
    }
  }

  private buildWildlife(): void {
    // NPCs
    const defs: { id: string; label: string; tunic: number; pos: [number, number]; guard?: boolean }[] = [
      { id: "quest", label: "نگهبان سرزمین", tunic: 0x35506e, pos: [-3.2, -6.5], guard: true },
      { id: "merchant", label: "بازرگان", tunic: 0x7a4a9a, pos: [4.5, -3.5] },
      { id: "villager", label: "اهالی دهکده", tunic: 0x8a6a3a, pos: [-5.5, 2.5] },
    ];
    for (const d of defs) {
      const h = makeHumanoid({ tunic: d.tunic, guard: d.guard });
      const p = new THREE.Vector3(d.pos[0], height(d.pos[0], d.pos[1]), d.pos[1]);
      h.group.position.copy(p);
      this.scene.add(h.group);
      this.npcs.push({ h, anchor: p.clone(), wanderAngle: Math.random() * Math.PI * 2, timer: Math.random() * 4, pos: p.clone() });
      this.interactables.push({ id: d.id, type: "npc", label: d.label, pos: p.clone() });
    }
    // deer
    for (let i = 0; i < 3; i++) {
      const d = makeDeer();
      const a = Math.random() * Math.PI * 2;
      const cx = Math.cos(a) * 34, cz = Math.sin(a) * 34;
      d.group.position.set(cx, height(cx, cz), cz);
      this.scene.add(d.group);
      this.deers.push({ d, angle: Math.random() * Math.PI * 2, timer: 0, center: new THREE.Vector3(cx, 0, cz) });
    }
    // birds
    for (let i = 0; i < 5; i++) {
      const b = makeBird();
      this.scene.add(b.group);
      this.birds.push({ b, r: 26 + Math.random() * 30, h: 16 + Math.random() * 10, speed: 0.14 + Math.random() * 0.1, phase: Math.random() * Math.PI * 2 });
    }
  }

  private buildPlayer(): void {
    this.player = makeHumanoid({ tunic: new THREE.Color(this.realm.color).getHex(), trim: 0xd9a93c });
    this.playerPos.set(0, height(0, 12), 12);
    this.player.group.position.copy(this.playerPos);
    if (this.prof.worldShadowMap > 0) this.player.group.traverse((o) => { if (o instanceof THREE.Mesh) o.castShadow = true; });
    this.scene.add(this.player.group);
  }

  private buildQuest(): void {
    // 3 chests
    const spots: [number, number][] = [[-30, -18], [26, 30], [18, -34]];
    spots.forEach(([x, z], i) => {
      const c = makeChest();
      c.group.position.set(x, height(x, z), z);
      c.group.rotation.y = Math.random() * Math.PI * 2;
      this.scene.add(c.group);
      this.addCol(x, z, c.collider.r);
      this.chests.push({ id: `chest${i}`, group: c.group, lid: c.lid, opened: false, anim: 0 });
      this.interactables.push({ id: `chest${i}`, type: "chest", label: "صندوق گنج", pos: new THREE.Vector3(x, 0, z) });
    });
    this.spawnCrystals();
  }

  private spawnCrystals(): void {
    for (const c of this.crystals) {
      this.scene.remove(c.group);
    }
    this.crystals = [];
    this.questCrystalCount = 0;
    let placed = 0, guard = 0;
    while (placed < 5 && guard++ < 200) {
      const a = Math.random() * Math.PI * 2;
      const r = 20 + Math.random() * 44;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const h = height(x, z);
      if (h > 5.5 || h < -0.5) continue;
      if (Math.abs(x - riverX(z)) < 5) continue;
      const c = makeCrystal();
      c.group.position.set(x, h, z);
      this.scene.add(c.group);
      this.crystals.push({ group: c.group, taken: false, seed: Math.random() * 10 });
      placed++;
    }
    this.cb.onCrystalCollected(0, 5);
  }

  // ---------------- lifecycle ----------------

  private onResize = (): void => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
  };

  start(): void {
    if (this.raf) return;
    this.clock.start();
    const loop = () => {
      if (this.disposed) return;
      this.raf = requestAnimationFrame(loop);
      try {
        this.update();
        this.renderer.render(this.scene, this.camera);
      } catch (err) {
        console.error("[WorldScene loop]", err);
        throw err;
      }
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop(): void {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  dispose(): void {
    this.disposed = true;
    this.stop();
    window.removeEventListener("resize", this.onResize);
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[];
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else if (mat) mat.dispose();
    });
    this.renderer.dispose();
  }

  // ---------------- gameplay ----------------

  private nearestInteract(): NearTarget {
    let best: NearTarget = null;
    let bestD = 3.0;
    for (const it of this.interactables) {
      if (it.type === "chest" && this.chests.find((c) => c.id === it.id)?.opened) continue;
      const d = Math.hypot(it.pos.x - this.playerPos.x, it.pos.z - this.playerPos.z);
      if (d < bestD) { bestD = d; best = { type: it.type, id: it.id, label: it.label }; }
    }
    return best;
  }

  /** called by UI when the interact button is pressed */
  interact(): void {
    const t = this.near;
    if (!t) return;
    if (t.type === "npc") {
      audio.uiClick();
      this.cb.onTalk(t.id);
    } else if (t.type === "chest") {
      const c = this.chests.find((x) => x.id === t.id)!;
      if (!c.opened) {
        c.opened = true;
        audio.chest();
        const coins = 5 + Math.floor(Math.random() * 11);
        this.cb.onChestOpened(t.id, coins);
      }
    } else if (t.type === "portal") {
      audio.gateOpen();
      this.cb.onExit();
    }
  }

  private update(): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.getElapsedTime();

    this.updateDayNight(t, dt);
    this.updatePlayer(dt);
    this.updateNpcs(dt, t);
    this.updateWildlife(dt, t);
    this.updateProps(dt, t);

    // near-target callback
    const n = this.nearestInteract();
    const changed = (n?.id ?? null) !== (this.near?.id ?? null) || (n?.type ?? null) !== (this.near?.type ?? null);
    if (changed) {
      this.near = n;
      this.cb.onNear(n);
    }
  }

  private updateDayNight(t: number, dt: number): void {
    const cycle = 300;
    const dayT = ((t + 95) % cycle) / cycle; // start mid-morning (sun ~30°)
    const ang = dayT * Math.PI * 2 - Math.PI / 2;
    const sunH = Math.sin(ang);
    const sunDir = new THREE.Vector3(Math.cos(ang) * 0.8, sunH, 0.45).normalize();
    this.sun.position.copy(sunDir).multiplyScalar(70);
    const day = THREE.MathUtils.clamp(sunH * 2.2, 0, 1);
    const dusk = THREE.MathUtils.clamp(1 - Math.abs(sunH) * 3.2, 0, 1);
    const night = this.theme.night ? Math.max(day, 0.72) : 0; // themed night lands keep dark
    const effNight = this.theme.night ? 0.75 : THREE.MathUtils.clamp(1 - day, 0, 1) * (sunH < 0.1 ? 1 : 0);

    this.sun.intensity = 0.6 + day * 4.2;
    this.sun.color.set(0xffe8c0).lerp(new THREE.Color(0xff7a3a), dusk * 0.8);
    this.hemi.intensity = 0.55 + day * 1.9;
    this.hemi.color.set(0x30406a).lerp(new THREE.Color(0xbfd0ff), day);

    const top = new THREE.Color(0x060a18).lerp(new THREE.Color(0x3f6cb4), day);
    const hor = new THREE.Color(0x141a2c).lerp(new THREE.Color(0xa8c8e8), day);
    hor.lerp(new THREE.Color(this.theme.skyTint), dusk * 0.5);
    this.skyMat.uniforms.uTop.value.copy(top);
    this.skyMat.uniforms.uHorizon.value.copy(hor);
    this.skyMat.uniforms.uSunDir.value.copy(sunDir);
    this.skyMat.uniforms.uNight.value = this.theme.night ? 0.7 : effNight;
    (this.stars.material as THREE.PointsMaterial).opacity = this.theme.night ? 0.9 : effNight * 0.9;
    (this.waterMat.uniforms.uNight as { value: number }).value = this.theme.night ? 0.6 : effNight;

    const fogDay = new THREE.Color(this.theme.fog).lerp(new THREE.Color(0x8aa8c8), day * 0.45);
    const fogNight = new THREE.Color(0x0a0e1a);
    (this.scene.fog as THREE.FogExp2).color.copy(fogNight.lerp(fogDay, this.theme.night ? 0.3 : day));
    this.renderer.setClearColor((this.scene.fog as THREE.FogExp2).color);

    // torches at night
    const torchOn = this.theme.night ? 1 : (1 - day);
    for (const to of this.torches) {
      if (to.light) to.light.intensity = torchOn * (7.0 + Math.sin(t * 9 + to.seed) * 1.4);
      const fs = 0.75 + Math.sin(t * 11 + to.seed) * 0.12;
      to.flame.scale.set(0.55 * fs, 0.85 * fs, 1);
      (to.flame.material as THREE.SpriteMaterial).opacity = 0.25 + torchOn * 0.75;
    }
    for (const c of this.clouds) {
      c.position.x += dt * 0.7;
      if (c.position.x > 110) c.position.x = -110;
      (c.material as THREE.SpriteMaterial).opacity = 0.1 + day * 0.16;
    }
  }

  private updatePlayer(dt: number): void {
    // camera yaw from look input
    this.camYaw -= this.input.look.dx * 0.0045;
    this.input.look.dx = 0;

    const mv = this.input.move;
    const mag = Math.min(Math.hypot(mv.x, mv.y), 1);
    const speed = (this.input.run ? 6.0 : 3.3) * (mag > 0.12 ? 1 : 0);

    if (mag > 0.12) {
      // camera-relative movement
      const dirAngle = Math.atan2(mv.x, mv.y);
      const world = dirAngle + this.camYaw + Math.PI;
      const nx = this.playerPos.x + Math.sin(world) * speed * mag * dt;
      const nz = this.playerPos.z + Math.cos(world) * speed * mag * dt;
      // collisions
      let px = nx, pz = nz;
      for (const c of this.colliders) {
        const dx = px - c.x, dz = pz - c.z;
        const d = Math.hypot(dx, dz);
        const min = c.r + 0.35;
        if (d < min && d > 1e-4) {
          px = c.x + (dx / d) * min;
          pz = c.z + (dz / d) * min;
        }
      }
      const rr = Math.hypot(px, pz);
      if (rr > 86) { px *= 86 / rr; pz *= 86 / rr; }
      const targetYaw = world + Math.PI;
      let dy = targetYaw - this.playerYaw;
      while (dy > Math.PI) dy -= Math.PI * 2;
      while (dy < -Math.PI) dy += Math.PI * 2;
      this.playerYaw += dy * Math.min(1, dt * 10);
      this.playerPos.x = px;
      this.playerPos.z = pz;
      this.walkPhase += dt * (this.input.run ? 11 : 6.5) * mag;
      // footsteps
      this.stepTimer -= dt;
      if (this.stepTimer <= 0) {
        audio.step();
        this.stepTimer = this.input.run ? 0.28 : 0.42;
      }
    } else {
      this.walkPhase += dt * 1.2;
    }

    this.playerPos.y = height(this.playerPos.x, this.playerPos.z);
    this.player.group.position.copy(this.playerPos);
    this.player.group.rotation.y = this.playerYaw;

    // walk animation
    const s = Math.sin(this.walkPhase);
    const c = Math.cos(this.walkPhase * 2);
    const amp = mag > 0.12 ? (this.input.run ? 0.85 : 0.6) : 0.12;
    this.player.legL.rotation.x = s * amp;
    this.player.legR.rotation.x = -s * amp;
    this.player.armL.rotation.x = -s * amp * 0.8;
    this.player.armR.rotation.x = s * amp * 0.8;
    this.player.torso.rotation.y = c * 0.04 * amp;
    this.player.torso.position.y = Math.abs(s) * 0.045 * amp;

    // crystal auto-collect
    for (const cr of this.crystals) {
      if (cr.taken) continue;
      const d = Math.hypot(cr.group.position.x - this.playerPos.x, cr.group.position.z - this.playerPos.z);
      if (d < 1.7) {
        cr.taken = true;
        cr.group.visible = false;
        this.questCrystalCount++;
        audio.collect();
        this.cb.onCrystalCollected(this.questCrystalCount, 5);
        if (this.questCrystalCount >= 5 && !this.questActive) {
          this.questActive = true;
        }
        if (this.questCrystalCount >= 5) {
          this.cb.onToast("همهٔ کریستال‌ها یافت شد! نزد نگهبان سرزمین بازگرد.");
        }
      }
    }

    // third-person camera
    const camDist = 6.4, camH = 2.6;
    const cx = this.playerPos.x + Math.sin(this.camYaw) * camDist;
    const cz = this.playerPos.z + Math.cos(this.camYaw) * camDist;
    const cy = this.playerPos.y + camH;
    this.camera.position.lerp(new THREE.Vector3(cx, cy, cz), Math.min(1, dt * 6));
    this.camera.lookAt(this.playerPos.x, this.playerPos.y + 1.5, this.playerPos.z);
  }

  private updateNpcs(dt: number, t: number): void {
    for (const n of this.npcs) {
      n.timer -= dt;
      if (n.timer <= 0) {
        n.timer = 2 + Math.random() * 4;
        n.wanderAngle = Math.random() * Math.PI * 2;
      }
      const wob = Math.sin(t * 0.5 + n.anchor.x) * 0.5;
      const tx = n.anchor.x + Math.cos(n.wanderAngle) * 1.3 * (0.4 + Math.abs(wob));
      const tz = n.anchor.z + Math.sin(n.wanderAngle) * 1.3 * (0.4 + Math.abs(wob));
      n.pos.x += (tx - n.pos.x) * Math.min(1, dt * 0.7);
      n.pos.z += (tz - n.pos.z) * Math.min(1, dt * 0.7);
      n.pos.y = height(n.pos.x, n.pos.z);
      n.h.group.position.copy(n.pos);
      // face player when near
      const dp = Math.hypot(this.playerPos.x - n.pos.x, this.playerPos.z - n.pos.z);
      if (dp < 5) {
        n.h.group.rotation.y = Math.atan2(this.playerPos.x - n.pos.x, this.playerPos.z - n.pos.z);
      } else {
        n.h.group.rotation.y += dt * 0.3;
      }
      // idle sway
      n.h.torso.position.y = Math.sin(t * 1.8 + n.anchor.x) * 0.02;
      n.h.armL.rotation.x = Math.sin(t * 1.6 + n.anchor.z) * 0.08;
      n.h.armR.rotation.x = -Math.sin(t * 1.6 + n.anchor.x) * 0.08;
    }
  }

  private updateWildlife(dt: number, t: number): void {
    for (const b of this.birds) {
      const a = t * b.speed + b.phase;
      b.b.group.position.set(Math.cos(a) * b.r, b.h + Math.sin(t * 0.7 + b.phase) * 1.5, Math.sin(a) * b.r);
      b.b.group.rotation.y = -a + Math.PI / 2;
      const flap = Math.sin(t * 7 + b.phase) * 0.55;
      b.b.wings[0].rotation.y = flap;
      b.b.wings[1].rotation.y = -flap;
    }
    for (const dr of this.deers) {
      dr.timer -= dt;
      if (dr.timer <= 0) {
        dr.timer = 3 + Math.random() * 5;
        dr.angle += (Math.random() - 0.5) * 2.4;
      }
      const sp = 1.1;
      const nx = dr.d.group.position.x + Math.sin(dr.angle) * sp * dt;
      const nz = dr.d.group.position.z + Math.cos(dr.angle) * sp * dt;
      if (height(nx, nz) < 5 && Math.abs(nx - riverX(nz)) > 5.5) {
        dr.d.group.position.set(nx, height(nx, nz), nz);
      } else {
        dr.angle += 2.2;
      }
      dr.d.group.rotation.y = dr.angle + Math.PI;
      const s = Math.sin(t * 6 + dr.angle);
      dr.d.legs[0].rotation.x = s * 0.5;
      dr.d.legs[1].rotation.x = -s * 0.5;
      dr.d.legs[2].rotation.x = -s * 0.5;
      dr.d.legs[3].rotation.x = s * 0.5;
    }
  }

  private updateProps(dt: number, t: number): void {
    for (const c of this.chests) {
      if (c.opened && c.anim < 1) {
        c.anim = Math.min(1, c.anim + dt * 2.2);
        c.lid.rotation.x = -c.anim * 1.9;
      }
    }
    for (const cr of this.crystals) {
      if (cr.taken) continue;
      cr.group.position.y = height(cr.group.position.x, cr.group.position.z) + 0.15 + Math.sin(t * 2 + cr.seed) * 0.12;
      cr.group.rotation.y = t * 1.4 + cr.seed;
    }
    if (this.portalDisc) {
      (this.portalDisc.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
    }
    for (const m of this.bannerMats) {
      m.uniforms.uTime.value = t;
    }
    void dt;
  }

  /** quest turn-in from dialog system */
  completeQuest(): boolean {
    if (this.questCrystalCount >= 5 && !this.questTurnedIn) {
      this.questTurnedIn = true;
      audio.questDone();
      this.cb.onQuestComplete(25);
      // respawn crystals for a new daily cycle
      window.setTimeout(() => {
        this.questTurnedIn = false;
        this.questActive = false;
        this.spawnCrystals();
      }, 2500);
      return true;
    }
    return false;
  }

  private questTurnedIn = false;
}
