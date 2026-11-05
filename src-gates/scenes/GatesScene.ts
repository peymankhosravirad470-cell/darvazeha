/**
 * GatesScene — the cinematic Seven Gates realm-selection world.
 * Seven official flags as 3D cloth on golden spear-poles, arranged in a royal
 * arc: drifting camera, depth fog, ember particles, per-realm light identity,
 * focus light pillars, sound-reactive selection.
 *
 * Composition rule (official directive): the pole, crossbar and every fixture
 * sit BEHIND the cloth; the fabric waves in front of them. The focused flag is
 * center/larger, side flags recede deeper and slightly smaller.
 */
import * as THREE from "three";
import { REALMS, Realm } from "../data";
import { QualityProfile } from "../quality";
import { makeClothMaterial } from "./clothMaterial";

export interface GateLabel {
  realmId: string;
  x: number;
  y: number;
  visible: boolean;
  focused: boolean;
}

interface Gate {
  realm: Realm;
  group: THREE.Group;
  cloth: THREE.Mesh;
  mat: THREE.ShaderMaterial;
  pole: THREE.Group;
  beam: THREE.Mesh;
  beamMat: THREE.ShaderMaterial;
  glow: THREE.Sprite;
  sparkle?: THREE.Points;
  basePos: THREE.Vector3;
}

const GOLD = 0xd9a93c;

export class GatesScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();
  private gates: Gate[] = [];
  private raf = 0;
  private disposed = false;
  private embers!: THREE.Points;
  private skyMat!: THREE.ShaderMaterial;
  private groundMat!: THREE.ShaderMaterial;
  private raycaster = new THREE.Raycaster();
  private pointerDown = { x: 0, y: 0, t: 0, moved: false };
  private focus = 0;
  private focusAnim = 0;          // 0..1 smooth
  private camBase = new THREE.Vector3(0, 4.25, 12.3);
  private camTarget = new THREE.Vector3(0, 3.55, 0);
  private tier: QualityProfile["tier"];
  private labelContainer?: HTMLDivElement;
  private labelEls = new Map<string, HTMLDivElement>();
  private onLabels?: (l: GateLabel[]) => void;
  private onFocused?: (realmId: string) => void;
  private onEnterRequested?: (realmId: string) => void;
  private onSound?: (kind: "focus" | "sting" | "deny") => void;
  private realmTint = new THREE.Color(1, 0.85, 0.5);
  private tintColor = new THREE.Color(1, 0.85, 0.5);
  private tmpV = new THREE.Vector3();

  constructor(
    private canvas: HTMLCanvasElement,
    private profile: QualityProfile,
    textures: Record<string, { cloth: THREE.Texture; normal: THREE.Texture }>,
  ) {
    this.tier = profile.tier;
    this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: profile.tier === "high", alpha: false, powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, profile.dpr));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;

    this.camera = new THREE.PerspectiveCamera(42.5, window.innerWidth / window.innerHeight, 0.1, 300);
    this.camera.position.copy(this.camBase);

    this.scene.fog = null; // fog handled per-material
    this.buildSky();
    this.buildGround();
    this.buildEmbers();
    this.buildGates(textures);
    this.buildLights();

    window.addEventListener("resize", this.onResize);
    canvas.addEventListener("pointerdown", this.onPointerDown);
    canvas.addEventListener("pointermove", this.onPointerMove);
    canvas.addEventListener("pointerup", this.onPointerUp);
    canvas.addEventListener("wheel", this.onWheel, { passive: true });
  }

  setLabelContainer(el: HTMLDivElement): void {
    this.labelContainer = el;
    el.innerHTML = "";
    this.labelEls.clear();
    for (const r of REALMS) {
      const d = document.createElement("div");
      d.className = "gate-label";
      d.innerHTML = `
        <div class="gate-label-fa">${r.fa}</div>
        <div class="gate-label-en">${r.en}</div>
        <div class="gate-label-rule"></div>`;
      d.style.pointerEvents = "none";
      el.appendChild(d);
      this.labelEls.set(r.id, d);
    }
  }

  setCallbacks(cb: {
    onFocused?: (id: string) => void;
    onEnterRequested?: (id: string) => void;
    onSound?: (k: "focus" | "sting" | "deny") => void;
    onLabels?: (l: GateLabel[]) => void;
  }): void {
    this.onFocused = cb.onFocused;
    this.onEnterRequested = cb.onEnterRequested;
    this.onSound = cb.onSound;
    this.onLabels = cb.onLabels;
  }

  setFocus(id: string, silent = false): void {
    const i = REALMS.findIndex((r) => r.id === id);
    if (i < 0 || i === this.focus) return;
    this.focus = i;
    if (!silent) this.onSound?.("focus");
    this.onFocused?.(id);
    // realm identity tint
    this.tintColor.set(REALMS[i].color).lerp(new THREE.Color(1, 0.9, 0.6), 0.45);
    const root = REALMS[i].note;
    void root;
  }

  focusByOffset(dir: number): void {
    const i = (this.focus + dir + REALMS.length) % REALMS.length;
    this.setFocus(REALMS[i].id);
  }

  get focusedRealm(): Realm {
    return REALMS[this.focus];
  }

  start(): void {
    if (this.raf) return;
    this.clock.start();
    const loop = () => {
      if (this.disposed) return;
      this.raf = requestAnimationFrame(loop);
      this.update();
      this.renderer.render(this.scene, this.camera);
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
    this.canvas.removeEventListener("pointerdown", this.onPointerDown);
    this.canvas.removeEventListener("pointermove", this.onPointerMove);
    this.canvas.removeEventListener("pointerup", this.onPointerUp);
    this.canvas.removeEventListener("wheel", this.onWheel);
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[];
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else if (mat) mat.dispose();
    });
    this.renderer.dispose();
  }

  // ---------------- construction ----------------

  private buildLights(): void {
    // lights only affect standard materials (poles, ground uses shader)
    const key = new THREE.DirectionalLight(0xffe2b0, 2.2);
    key.position.set(-6, 12, 8);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x5a78ff, 0.8);
    rim.position.set(7, 5, -6);
    this.scene.add(rim);
    this.scene.add(new THREE.AmbientLight(0x404866, 1.1));
    this.keyLight = key;
  }

  private keyLight!: THREE.DirectionalLight;

  private buildSky(): void {
    const geo = new THREE.SphereGeometry(140, 32, 20);
    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uTop: { value: new THREE.Color(0x05070f) },
        uHorizon: { value: new THREE.Color(0x2c2036) },
        uGlow: { value: new THREE.Color(0x8a5a2a) },
        uTint: { value: new THREE.Color(1, 0.85, 0.5) },
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 uTop, uHorizon, uGlow, uTint;
        uniform float uTime;
        varying vec3 vDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          float h = clamp(vDir.y, -0.2, 1.0);
          vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.55, h));
          // horizon warm glow toward sunset side
          float glow = pow(max(0.0, 1.0 - abs(h) * 3.2), 2.2);
          float azimuth = 0.5 + 0.5 * atan(vDir.x, vDir.z) / 3.14159;
          col += uGlow * glow * (0.35 + 0.4 * azimuth);
          col = mix(col, col * uTint, 0.25);
          // faint stars high up
          vec2 sp = vDir.xz / max(vDir.y, 0.08) * 3.0;
          float st = step(0.997, hash(floor(sp * 40.0))) * smoothstep(0.25, 0.7, vDir.y);
          col += vec3(0.8, 0.85, 1.0) * st * (0.5 + 0.5 * sin(uTime * 1.5 + hash(floor(sp * 40.0)) * 30.0));
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const sky = new THREE.Mesh(geo, this.skyMat);
    this.scene.add(sky);
  }

  private buildGround(): void {
    const geo = new THREE.CircleGeometry(70, 72);
    this.groundMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTint: { value: new THREE.Color(1, 0.85, 0.5) },
      },
      vertexShader: `
        varying vec2 vP;
        void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform float uTime; uniform vec3 uTint;
        varying vec2 vP;
        void main(){
          float r = length(vP);
          vec3 base = vec3(0.045, 0.05, 0.075);
          base *= smoothstep(70.0, 8.0, r) * 0.85 + 0.15;
          // royal rune rings
          float ring = smoothstep(0.012, 0.0, abs(r - 6.2) - 0.045);
          float ring2 = smoothstep(0.012, 0.0, abs(r - 10.8) - 0.07);
          float dash = 0.55 + 0.45 * sin(atan(vP.y, vP.x) * 36.0 + uTime * 0.15);
          float ring3 = smoothstep(0.01, 0.0, abs(r - 15.5) - 0.05) * step(0.35, dash);
          float glow = exp(-r * r * 0.012) * 0.5;
          vec3 gold = uTint * (ring * 0.5 + ring2 * 0.35 + ring3 * 0.3);
          vec3 col = base + gold + uTint * glow * 0.14;
          // distance fog to bg
          col = mix(col, vec3(0.028, 0.032, 0.055), smoothstep(14.0, 62.0, r));
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const g = new THREE.Mesh(geo, this.groundMat);
    g.rotation.x = -Math.PI / 2;
    g.position.y = 0;
    this.scene.add(g);
  }

  private buildEmbers(): void {
    const n = this.profile.embers;
    const pos = new Float32Array(n * 3);
    const seed = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 46;
      pos[i * 3 + 1] = Math.random() * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 2;
      seed[i] = Math.random() * 100;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uPixel: { value: this.renderer.getPixelRatio() } },
      vertexShader: `
        uniform float uTime, uPixel;
        attribute float aSeed;
        varying float vA;
        void main(){
          vec3 p = position;
          p.y = mod(p.y + uTime * (0.35 + fract(aSeed) * 0.5), 15.0);
          p.x += sin(uTime * (0.4 + fract(aSeed * 7.0) * 0.4) + aSeed) * 1.4;
          p.z += cos(uTime * 0.3 + aSeed * 3.0) * 1.1;
          vA = smoothstep(15.0, 12.5, p.y) * smoothstep(0.0, 1.5, p.y);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (2.0 + fract(aSeed * 3.0) * 3.4) * uPixel * (10.0 / -mv.z) * 2.4;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying float vA;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.0, d) * vA;
          gl_FragColor = vec4(vec3(1.0, 0.62, 0.28) * a, a);
        }`,
    });
    this.embers = new THREE.Points(geo, mat);
    this.scene.add(this.embers);
  }

  private buildGates(textures: Record<string, { cloth: THREE.Texture; normal: THREE.Texture }>): void {
    const [segX, segY] = this.profile.clothSegments;
    const R = 9.2;
    REALMS.forEach((realm, i) => {
      const a = (i - 3) * 0.26; // arc spread
      const x = Math.sin(a) * R;
      const z = -Math.cos(a) * R + 4.6;
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      group.rotation.y = -a * 0.55; // angle toward camera
      group.scale.setScalar(1.02);

      // pole
      const pole = new THREE.Group();
      const goldMat = new THREE.MeshStandardMaterial({
        color: GOLD, metalness: 0.85, roughness: 0.32, envMapIntensity: 0.8,
      });
      const darkMat = new THREE.MeshStandardMaterial({
        color: 0x3a2c1c, metalness: 0.6, roughness: 0.5,
      });
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 5.4, 12), goldMat);
      shaft.position.y = 3.2;
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.62, 10), goldMat);
      tip.position.y = 6.2;
      const collar = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), goldMat);
      collar.position.y = 5.88;
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 0.5, 8), darkMat);
      base.position.y = 0.25;
      // finial crossguard like official art
      const cross = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.5, 8), goldMat);
      cross.rotation.z = Math.PI / 2; cross.position.y = 5.62;
      const gA = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.34, 8), goldMat);
      gA.rotation.z = Math.PI / 2; gA.position.set(-0.85, 5.62, 0);
      const gB = gA.clone(); gB.rotation.z = -Math.PI / 2; gB.position.set(0.85, 5.62, 0);
      pole.add(shaft, tip, collar, base, cross, gA, gB);
      // Directive: pole + crossbar + all fixtures BEHIND the cloth. The cloth
      // waves up to ~0.75 toward -z on gusty realms, so -0.85 keeps every
      // fixture behind the fabric at all times.
      pole.position.z = -0.85;
      if (this.profile.worldShadowMap > 0) {
        shaft.castShadow = true;
      }
      group.add(pole);

      // cloth
      const tex = textures[realm.id];
      tex.cloth.colorSpace = THREE.SRGBColorSpace;
      tex.cloth.anisotropy = this.profile.anisotropy;
      const H = 3.05;
      const img = tex.cloth.image as { width?: number; height?: number };
      const aspect = img?.width && img?.height ? img.width / img.height : 0.78;
      const W = Math.min(3.15, H * aspect);
      const geo = new THREE.PlaneGeometry(W, H, segX, segY);
      const mat = makeClothMaterial(tex.cloth, tex.normal, {
        strength: realm.wind.strength, speed: realm.wind.speed, gust: realm.wind.gust,
        seed: (i * 0.618 + 0.17) % 1,
      });
      const cloth = new THREE.Mesh(geo, mat);
      // hang the top edge just under the crossbar, in FRONT of the pole
      cloth.position.set(0, 5.62 - H / 2 - 0.05, 0.1);
      group.add(cloth);

      // light beam behind (focus)
      const beamMat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
        uniforms: { uColor: { value: new THREE.Color(realm.color) }, uA: { value: 0 }, uTime: { value: 0 } },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} `,
        fragmentShader: `
          uniform vec3 uColor; uniform float uA, uTime;
          varying vec2 vUv;
          void main(){
            float x = smoothstep(0.0, 0.5, vUv.x) * smoothstep(1.0, 0.5, vUv.x);
            float y = pow(vUv.y, 1.6);
            float pulse = 0.85 + 0.15 * sin(uTime * 2.0 + vUv.y * 6.0);
            float a = x * y * 0.5 * uA * pulse;
            gl_FragColor = vec4(uColor * a + vec3(0.9,0.75,0.4) * a * 0.35, a);
          }`,
      });
      const beam = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 8.5), beamMat);
      beam.position.set(0, 3.6, -1.35);
      group.add(beam);

      // glow sprite at emblem height
      const glowTex = makeRadialTexture();
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, color: new THREE.Color(realm.color), transparent: true,
        opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      glow.scale.set(4.6, 4.6, 1);
      glow.position.set(0, 3.9, -1.0);
      group.add(glow);

      this.scene.add(group);
      this.gates.push({
        realm, group, cloth, mat, pole, beam, beamMat, glow, basePos: new THREE.Vector3(x, 0, z),
      });
    });
  }

  // ---------------- interaction ----------------

  private onResize = (): void => {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  };

  private ndc(e: PointerEvent): THREE.Vector2 {
    const r = this.canvas.getBoundingClientRect();
    return new THREE.Vector2(
      ((e.clientX - r.left) / r.width) * 2 - 1,
      -((e.clientY - r.top) / r.height) * 2 + 1,
    );
  }

  private onPointerDown = (e: PointerEvent): void => {
    this.pointerDown = { x: e.clientX, y: e.clientY, t: performance.now(), moved: false };
  };

  private onPointerMove = (e: PointerEvent): void => {
    if (!(e.buttons & 1) && e.pointerType === "mouse") return;
    const dx = e.clientX - this.pointerDown.x;
    if (Math.abs(dx) > 34 && !this.pointerDown.moved) {
      this.pointerDown.moved = true;
      this.focusByOffset(dx < 0 ? 1 : -1);
    }
  };

  private onPointerUp = (e: PointerEvent): void => {
    const dt = performance.now() - this.pointerDown.t;
    if (this.pointerDown.moved || dt > 900) return;
    const p = this.ndc(e);
    this.raycaster.setFromCamera(p, this.camera);
    const gate = this.gates[this.focus];
    // pick nearest gate cloth/pole under pointer (check all, prefer focused)
    let best: number | null = null;
    let bestD = Infinity;
    this.gates.forEach((g, i) => {
      const hits = this.raycaster.intersectObjects([g.cloth, g.pole], true);
      if (hits.length > 0) {
        const d = hits[0].distance;
        const bias = i === this.focus ? -0.4 : 0;
        if (d + bias < bestD) { bestD = d + bias; best = i; }
      }
    });
    if (best !== null) {
      if (best === this.focus) {
        const realm = this.gates[best].realm;
        this.onSound?.("sting");
        this.onEnterRequested?.(realm.id);
      } else {
        this.setFocus(this.gates[best].realm.id);
      }
    }
  };

  private onWheel = (e: WheelEvent): void => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      this.focusByOffset(e.deltaX > 0 ? 1 : -1);
    } else if (Math.abs(e.deltaY) > 20) {
      this.focusByOffset(e.deltaY > 0 ? 1 : -1);
    }
  };

  // ---------------- update ----------------

  private update(): void {
    const t = this.clock.getElapsedTime();
    // focus animation state
    this.focusAnim += ((this.focus === REALMS.findIndex((r) => r.id === REALMS[this.focus].id) ? 1 : 1) - this.focusAnim) * 0.08;
    void this.focusAnim;

    // smooth realm tint lerp
    this.realmTint.lerp(this.tintColor, 0.035);

    this.gates.forEach((g, i) => {
      const focused = i === this.focus;
      // carousel: wrap relative index to [-3..3] so the focused flag is centered
      const rel = ((i - this.focus) % 7 + 7 + 3) % 7 - 3;
      const a = rel * 0.26;
      const tx = Math.sin(a) * 9.2;
      // side flags recede DEEPER behind the focused one (cinematic depth)
      const tz = -Math.cos(a) * 9.2 + 4.6 + Math.abs(rel) * 0.9;
      const tr = -a * 0.55;
      g.group.position.x += (tx - g.group.position.x) * Math.min(1, 0.06);
      g.group.position.z += (tz - g.group.position.z) * Math.min(1, 0.06);
      g.group.rotation.y += (tr - g.group.rotation.y) * Math.min(1, 0.06);
      g.mat.uniforms.uTime.value = t + i * 1.7;
      const target = focused ? 1 : 0;
      const u = g.mat.uniforms.uHighlight;
      u.value += (target - u.value) * 0.07;
      g.mat.uniforms.uDim.value += ((focused ? 1 : 0.78) - g.mat.uniforms.uDim.value) * 0.06;
      g.mat.uniforms.uPointColor.value.set(this.realmTint);
      g.mat.uniforms.uPointIntensity.value = focused ? 1.15 : 0.5;
      g.beamMat.uniforms.uA.value += ((focused ? 1 : 0) - g.beamMat.uniforms.uA.value) * 0.055;
      g.beamMat.uniforms.uTime.value = t;
      g.beamMat.uniforms.uColor.value.set(g.realm.color);
      const gm = g.glow.material as THREE.SpriteMaterial;
      gm.opacity += ((focused ? 0.34 : 0.08) - gm.opacity) * 0.06;
      gm.color.set(g.realm.color);

      // focused flag steps forward, larger; sides smaller (royal hierarchy)
      const s = focused ? 1.14 : 0.88;
      g.group.scale.x += (s - g.group.scale.x) * 0.06;
      g.group.scale.y = g.group.scale.x;
      g.group.scale.z = g.group.scale.x;

      // independent gentle pole sway
      g.pole.rotation.z = Math.sin(t * 0.4 + i * 1.3) * 0.006 * g.realm.wind.strength;
    });

    // camera: slow drift + focus follow
    const desired = new THREE.Vector3(
      this.camBase.x + Math.sin(t * 0.13) * 0.45,
      this.camBase.y + Math.sin(t * 0.1) * 0.2,
      this.camBase.z,
    );
    this.camera.position.lerp(desired, 0.03);
    // camera gently follows the focused flag so it reads as the hero of the shot
    const focusX = this.gates[this.focus].group.position.x;
    this.camTarget.lerp(new THREE.Vector3(focusX * 0.35, 3.55, -1.6), 0.05);
    this.camera.lookAt(this.camTarget);
    // subtle roll for cinema feel
    this.camera.rotation.z = Math.sin(t * 0.07) * 0.006;

    // global uniforms
    this.skyMat.uniforms.uTime.value = t;
    this.skyMat.uniforms.uTint.value.set(this.realmTint);
    this.skyMat.uniforms.uHorizon.value.set(0x2c2036).lerp(this.realmTint, 0.28);
    this.skyMat.uniforms.uGlow.value.set(0x8a5a2a).lerp(this.realmTint, 0.3);
    this.groundMat.uniforms.uTime.value = t;
    this.groundMat.uniforms.uTint.value.set(this.realmTint);
    (this.embers.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
    this.keyLight.color.set(0xffe2b0).lerp(this.realmTint, 0.35);

    this.updateLabels();
  }

  private updateLabels(): void {
    if (!this.labelContainer) return;
    const w = window.innerWidth, h = window.innerHeight;
    this.gates.forEach((g) => {
      const el = this.labelEls.get(g.realm.id);
      if (!el) return;
      this.tmpV.set(0, -1.78, 0.15).applyMatrix4(g.cloth.matrixWorld);
      this.tmpV.project(this.camera);
      const x = (this.tmpV.x * 0.5 + 0.5) * w;
      const y = (-this.tmpV.y * 0.5 + 0.5) * h;
      const focused = g.realm.id === REALMS[this.focus].id;
      const vis = this.tmpV.z < 1 && x > -80 && x < w + 80;
      el.style.transform = `translate(-50%,0) translate(${x}px, ${y}px) scale(${focused ? 1.06 : 0.92})`;
      el.style.opacity = vis ? (focused ? "1" : "0.62") : "0";
      el.classList.toggle("focused", focused);
    });
    this.onLabels?.([]);
    void this.onLabels;
  }
}

function makeRadialTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, "rgba(255,255,255,0.9)");
  g.addColorStop(0.4, "rgba(255,255,255,0.28)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
