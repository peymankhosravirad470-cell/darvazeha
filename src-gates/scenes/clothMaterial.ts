/**
 * Cloth shader for the official realm flags.
 * GPU vertex-displacement waving (mobile-friendly, no CPU cloth sim):
 * - fixed edge at the pole (top), natural ripple growth toward the free edge
 * - per-flag wind strength/speed/gust, plus a global slow gust field
 * - analytic normals recomputed per vertex → cinematic light response on folds
 * - normal-map sampling for emblem relief (gold borders catch the light)
 */
import * as THREE from "three";

export interface ClothUniforms {
  [k: string]: THREE.IUniform;
}

export function makeClothMaterial(
  diffuse: THREE.Texture,
  normalMap: THREE.Texture,
  opts: { strength: number; speed: number; gust: number; seed: number },
): THREE.ShaderMaterial {
  const uniforms: ClothUniforms = {
    uMap: { value: diffuse },
    uNormalMap: { value: normalMap },
    uTime: { value: 0 },
    uStrength: { value: opts.strength },
    uSpeed: { value: opts.speed },
    uGust: { value: opts.gust },
    uSeed: { value: opts.seed },
    uHighlight: { value: 0 },
    uDim: { value: 1 },
    // lighting (world space)
    uLightDir: { value: new THREE.Vector3(-0.45, 0.75, 0.55).normalize() },
    uLightColor: { value: new THREE.Color(1.0, 0.9, 0.72) },
    uAmbTop: { value: new THREE.Color(0.88, 0.86, 0.9) },
    uAmbBot: { value: new THREE.Color(0.42, 0.38, 0.4) },
    uPointPos: { value: new THREE.Vector3(0, 4, 9) },
    uPointColor: { value: new THREE.Color(1, 0.8, 0.45) },
    uPointIntensity: { value: 0.9 },
    uFogColor: { value: new THREE.Color(0x0a0d16) },
    uFogDensity: { value: 0.028 },
  };

  return new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: true,
    alphaTest: 0.0,
    vertexShader: /* glsl */ `
      uniform float uTime, uStrength, uSpeed, uGust, uSeed;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vNrm;
      varying float vDimF;

      // wave displacement + analytic derivative
      vec3 wave(vec2 p, float t, out float dzdx, out float dzdy) {
        // p: x across width [-w/2..w/2], y height [-h/2..h/2], top y=+h/2 fixed
        float fall = clamp(0.5 - p.y / 3.1, 0.0, 1.0);       // 0 at pole edge
        float f = pow(fall, 1.45);
        float k1 = 2.4, k2 = 4.9, k3 = 7.3;
        float w = uSpeed;
        float ph = uSeed * 6.2831;
        float gust = sin(t * 0.35 + uSeed * 12.0) * 0.5 + sin(t * 0.13 + uSeed * 5.0) * 0.5;
        float S = uStrength * (1.0 + uGust * gust * 0.55);

        float a1 = sin(p.x * k1 + t * w * 1.9 + ph + p.y * 0.35);
        float a2 = sin(p.x * k2 - t * w * 2.6 + ph * 2.1 + p.y * 0.9);
        float a3 = sin(p.x * k3 + t * w * 3.7 + ph * 3.7);
        float z = S * f * (0.16 * a1 + 0.075 * a2 + 0.045 * a3);
        z += S * f * 0.09 * sin(t * w * 0.9 + ph + p.x * 1.4); // slow body sway

        // derivatives (for lighting)
        float da1 = cos(p.x * k1 + t * w * 1.9 + ph + p.y * 0.35);
        float da2 = cos(p.x * k2 - t * w * 2.6 + ph * 2.1 + p.y * 0.9);
        float da3 = cos(p.x * k3 + t * w * 3.7 + ph * 3.7);
        float dfdx = 0.0;
        // fall depends only on y; f on x constant → dz/dx:
        dzdx = S * f * (0.16 * a1 * k1 + 0.075 * a2 * k2 + 0.045 * a3 * k3)
             + S * f * 0.09 * 1.4 * cos(t * w * 0.9 + ph + p.x * 1.4);
        // dz/dy: product rule on f(y)
        float dfdy = -1.0 / 3.1 * 1.45 * pow(max(fall, 1e-4), 0.45);
        dzdy = S * dfdy * (0.16 * a1 + 0.075 * a2 + 0.045 * a3)
             + S * f * (0.16 * a1 * 0.35 + 0.075 * a2 * 0.9)
             + S * f * 0.09 * 0.0;
        // gentle x drift on free edge (flag tail slides in wind)
        float xDrift = S * f * f * 0.10 * sin(t * w * 1.3 + ph * 1.7);
        return vec3(xDrift, 0.0, z);
      }

      void main() {
        vUv = uv;
        vec3 p = position;
        float dzdx, dzdy;
        vec3 w = wave(p.xy, uTime, dzdx, dzdy);
        p += w;
        vec3 n = normalize(vec3(-dzdx * 2.2, -dzdy * 1.4, 1.0));
        vNrm = normalize(mat3(modelMatrix) * n);
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap, uNormalMap;
      uniform float uHighlight, uDim, uPointIntensity, uFogDensity;
      uniform vec3 uLightDir, uLightColor, uAmbTop, uAmbBot;
      uniform vec3 uPointPos, uPointColor;
      uniform vec3 uFogColor;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vNrm;

      void main() {
        vec4 tex = texture2D(uMap, vUv);
        if (tex.a < 0.06) discard;
        vec3 albedo = tex.rgb;

        // normal-map relief (object-space approximate; cloth is mostly vertical)
        vec3 nm = texture2D(uNormalMap, vUv).xyz * 2.0 - 1.0;
        vec3 N = normalize(vNrm + vec3(nm.x, nm.y, 0.0) * 0.35);
        if (!gl_FrontFacing) N = -N;

        vec3 V = normalize(cameraPosition - vWorldPos);
        vec3 L = normalize(uLightDir);

        // double-sided: light back faces softly
        float ndl = max(dot(N, L), 0.0);
        float back = gl_FrontFacing ? 1.0 : 0.55;

        vec3 amb = mix(uAmbBot, uAmbTop, clamp(N.y * 0.5 + 0.5, 0.0, 1.0));
        vec3 col = albedo * (amb + uLightColor * ndl * 0.5 * back);

        // realm point light (focus glow)
        vec3 Lp = uPointPos - vWorldPos;
        float d = length(Lp);
        float att = uPointIntensity * 6.0 / (1.0 + d * d * 0.09);
        col += albedo * uPointColor * max(dot(N, normalize(Lp)), 0.0) * att * 0.55;

        // golden rim / fresnel for cinematic edge
        float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);
        col += vec3(1.0, 0.82, 0.45) * fres * (0.16 + uHighlight * 0.55);

        // specular sheen on folds
        vec3 H = normalize(L + V);
        float spec = pow(max(dot(N, H), 0.0), 30.0) * 0.4 * back;
        col += uLightColor * spec;

        // focus/dim grading
        float luma = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(col, vec3(luma), (1.0 - uHighlight) * 0.14);
        col *= mix(0.72, 1.12, uHighlight) * uDim;

        // manual exp2 fog
        float fogDist = length(cameraPosition - vWorldPos);
        float f = 1.0 - exp(-uFogDensity * uFogDensity * fogDist * fogDist);
        col = mix(col, uFogColor, clamp(f, 0.0, 1.0));

        gl_FragColor = vec4(col, tex.a * 0.995);
      }
    `,
  });
}
