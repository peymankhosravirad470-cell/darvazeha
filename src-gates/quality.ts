/**
 * Adaptive quality engine — detects device tier once, then governs FPS at runtime
 * and downgrades gracefully. Flag cloth animation is NEVER disabled; only
 * resolution/segments/particles scale down (mobile-first, Bale webview safe).
 */

export type Tier = "high" | "mid" | "low";

export interface QualityProfile {
  tier: Tier;
  dpr: number;              // device pixel ratio clamp
  clothSegments: [number, number];
  embers: number;
  worldShadowMap: number;   // 0 = shadows off
  terrainSegments: number;
  treeCount: number;
  grassInstances: number;
  particles: number;
  anisotropy: number;
}

export function detectTier(): Tier {
  if (typeof navigator === "undefined") return "mid";
  const cores = navigator.hardwareConcurrency ?? 4;
  const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 4;
  const small = Math.min(window.screen.width, window.screen.height) < 420;
  const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
  if (cores >= 8 && mem >= 6 && !small) return "high";
  if (cores >= 4 && mem >= 3) return mobile ? "mid" : "high";
  return "low";
}

const PROFILES: Record<Tier, QualityProfile> = {
  high: {
    tier: "high", dpr: 2, clothSegments: [34, 46], embers: 170,
    worldShadowMap: 1024, terrainSegments: 110, treeCount: 90, grassInstances: 900, particles: 260,
    anisotropy: 4,
  },
  mid: {
    tier: "mid", dpr: 1.6, clothSegments: [24, 32], embers: 90,
    worldShadowMap: 0, terrainSegments: 80, treeCount: 60, grassInstances: 450, particles: 150,
    anisotropy: 2,
  },
  low: {
    tier: "low", dpr: 1.25, clothSegments: [16, 22], embers: 50,
    worldShadowMap: 0, terrainSegments: 56, treeCount: 34, grassInstances: 0, particles: 80,
    anisotropy: 1,
  },
};

export function profile(tier: Tier): QualityProfile {
  return PROFILES[tier];
}

/**
 * FPS governor — call once per frame with performance.now().
 * Returns a suggested tier change (only downward, never resets upward mid-session
 * to avoid oscillation; allow upgrade after 30s of stable high fps).
 */
export class FpsGovernor {
  private times: number[] = [];
  private lastSwitch = 0;
  private stableHighSince = 0;
  constructor(private tier: Tier, private onChange: (t: Tier) => void) {}

  tick(now: number): void {
    this.times.push(now);
    while (this.times.length > 0 && now - this.times[0] > 2500) this.times.shift();
    if (this.times.length < 40) return;
    const span = now - this.times[0];
    const fps = (this.times.length - 1) / (span / 1000);
    if (fps < 24 && this.tier !== "low" && now - this.lastSwitch > 4000) {
      this.tier = this.tier === "high" ? "mid" : "low";
      this.lastSwitch = now;
      this.times.length = 0;
      this.onChange(this.tier);
    } else if (fps > 50 && this.tier !== "high") {
      if (this.stableHighSince === 0) this.stableHighSince = now;
      if (now - this.stableHighSince > 30000 && now - this.lastSwitch > 15000) {
        this.tier = this.tier === "low" ? "mid" : "high";
        this.lastSwitch = now;
        this.stableHighSince = 0;
        this.times.length = 0;
        this.onChange(this.tier);
      }
    } else {
      this.stableHighSince = 0;
    }
  }
}
