/**
 * 77 Lands — WebAudio synthesis engine.
 * Zero audio files: epic realm music, ambience and SFX are synthesized live,
 * so the game stays fully offline-capable inside Bale's webview.
 */

type Vec = [number, number, number];

const midiHz = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

export class AudioEngine {
  ctx: AudioContext | null = null;
  private master!: GainNode;
  private musicBus!: GainNode;
  private sfxBus!: GainNode;
  private ambBus!: GainNode;
  private windGain?: GainNode;
  private windFilter?: BiquadFilterNode;
  private noiseBuf?: AudioBuffer;
  private musicTimer: number | null = null;
  private step = 0;
  private root = 50; // D3
  private enabled = false;
  private started = false;

  init(): boolean {
    if (this.ctx) return true;
    try {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AC();
      const c = this.ctx;
      this.master = c.createGain(); this.master.gain.value = 0.9; this.master.connect(c.destination);
      this.musicBus = c.createGain(); this.musicBus.gain.value = 0.55; this.musicBus.connect(this.master);
      this.sfxBus = c.createGain(); this.sfxBus.gain.value = 0.8; this.sfxBus.connect(this.master);
      this.ambBus = c.createGain(); this.ambBus.gain.value = 0.5; this.ambBus.connect(this.master);
      // shared noise buffer (2s stereo)
      const len = c.sampleRate * 2;
      const buf = c.createBuffer(2, len, c.sampleRate);
      for (let ch = 0; ch < 2; ch++) {
        const d = buf.getChannelData(ch);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      }
      this.noiseBuf = buf;
      this.enabled = true;
      return true;
    } catch {
      return false;
    }
  }

  resume(): void {
    if (this.ctx && this.ctx.state === "suspended") void this.ctx.resume();
  }

  setMuted(m: boolean): void {
    if (!this.ctx) return;
    this.master.gain.linearRampToValueAtTime(m ? 0 : 0.9, this.ctx.currentTime + 0.3);
  }

  // ---------- ambience ----------
  startWind(intensity = 1): void {
    if (!this.ctx || !this.noiseBuf || this.windGain) return;
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf; src.loop = true;
    const bp = c.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.value = 420; bp.Q.value = 0.6;
    const g = c.createGain(); g.gain.value = 0.05 * intensity;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.11;
    const lfoG = c.createGain(); lfoG.gain.value = 180;
    lfo.connect(lfoG); lfoG.connect(bp.frequency); lfo.start();
    src.connect(bp); bp.connect(g); g.connect(this.ambBus);
    src.start();
    this.windGain = g; this.windFilter = bp;
  }

  setWindIntensity(v: number): void {
    if (this.windGain && this.ctx)
      this.windGain.gain.linearRampToValueAtTime(0.02 + v * 0.06, this.ctx.currentTime + 0.8);
  }

  // ---------- music: epic minor progression with pads, drums, plucks ----------
  setKey(rootMidi: number): void {
    this.root = rootMidi;
  }

  startMusic(): void {
    if (!this.ctx || this.musicTimer !== null) return;
    const beat = 0.86; // seconds per step
    const tick = () => {
      this.musicStep(this.step++);
    };
    tick();
    this.musicTimer = window.setInterval(tick, beat * 1000);
  }

  stopMusic(): void {
    if (this.musicTimer !== null) { window.clearInterval(this.musicTimer); this.musicTimer = null; }
  }

  private musicStep(s: number): void {
    if (!this.ctx) return;
    const c = this.ctx;
    const t = c.currentTime;
    const bar = Math.floor(s / 4) % 4;
    // epic minor progression: i - VI - III - VII
    const prog = [0, 8, 3, 10];
    const rootShift = this.root + prog[bar] - 12;
    if (s % 4 === 0) {
      // pad chord (root, fifth, octave+third)
      const third = bar === 2 ? 4 : 3; // relative major on III
      const chord: Vec[] = [
        [rootShift, 0], [rootShift + 7, 0], [rootShift + 12 + third, 0],
      ];
      for (const [n, d] of chord) this.pad(midiHz(n), t, 3.6, 0.05);
    }
    // heartbeat drum every beat 0 & 2
    if (s % 4 === 0 || s % 4 === 2) this.drum(t, s % 4 === 0 ? 0.5 : 0.3);
    // taiko-ish accent
    if (s % 8 === 6) this.drum(t, 0.42, 90);
    // shimmering pluck arpeggio (sparse)
    if (Math.random() < 0.4) {
      const scale = [0, 3, 5, 7, 10, 12, 15];
      const n = rootShift + 24 + scale[Math.floor(Math.random() * scale.length)];
      this.pluck(midiHz(n), t + Math.random() * 0.4, 0.05);
    }
  }

  private pad(hz: number, t: number, dur: number, vol: number): void {
    const c = this.ctx!;
    const o1 = c.createOscillator(); o1.type = "sawtooth"; o1.frequency.value = hz; o1.detune.value = -6;
    const o2 = c.createOscillator(); o2.type = "sawtooth"; o2.frequency.value = hz; o2.detune.value = 7;
    const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 900; f.Q.value = 0.4;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 1.1);
    g.gain.linearRampToValueAtTime(0, t + dur);
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.musicBus);
    o1.start(t); o2.start(t); o1.stop(t + dur + 0.1); o2.stop(t + dur + 0.1);
  }

  private pluck(hz: number, t: number, vol: number): void {
    const c = this.ctx!;
    const o = c.createOscillator(); o.type = "triangle"; o.frequency.value = hz;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    o.connect(g); g.connect(this.musicBus);
    o.start(t); o.stop(t + 1.5);
  }

  private drum(t: number, vol: number, base = 60): void {
    const c = this.ctx!;
    const o = c.createOscillator(); o.type = "sine";
    o.frequency.setValueAtTime(base * 2.4, t);
    o.frequency.exponentialRampToValueAtTime(base, t + 0.16);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.42);
    o.connect(g); g.connect(this.musicBus);
    o.start(t); o.stop(t + 0.5);
    // thump noise
    if (this.noiseBuf) {
      const n = c.createBufferSource(); n.buffer = this.noiseBuf;
      const nf = c.createBiquadFilter(); nf.type = "lowpass"; nf.frequency.value = 240;
      const ng = c.createGain(); ng.gain.setValueAtTime(vol * 0.7, t);
      ng.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      n.connect(nf); nf.connect(ng); ng.connect(this.musicBus);
      n.start(t); n.stop(t + 0.25);
    }
  }

  // ---------- SFX ----------
  private env(vol: number, dur: number, t?: number): { g: GainNode; t: number } {
    const c = this.ctx!;
    const tt = t ?? c.currentTime;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, tt);
    g.gain.exponentialRampToValueAtTime(0.0001, tt + dur);
    g.connect(this.sfxBus);
    return { g, t: tt };
  }

  focusTick(): void {
    if (!this.ctx) return;
    const c = this.ctx, { g, t } = this.env(0.16, 0.28);
    const o = c.createOscillator(); o.type = "triangle"; o.frequency.value = 660;
    const o2 = c.createOscillator(); o2.type = "sine"; o2.frequency.value = 1320;
    o.connect(g); o2.connect(g);
    o.start(t); o2.start(t); o.stop(t + 0.3); o2.stop(t + 0.3);
  }

  /** realm selection sting — chord swell + shimmer + deep drum, in realm key */
  selectSting(rootMidi: number): void {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    this.drum(t, 0.55, 52);
    const chord = [rootMidi, rootMidi + 7, rootMidi + 15, rootMidi + 19];
    chord.forEach((n, i) => {
      const { g, t: tt } = this.env(0.14, 1.6, t + i * 0.06);
      g.gain.setValueAtTime(0, tt);
      g.gain.linearRampToValueAtTime(0.14, tt + 0.25);
      g.gain.exponentialRampToValueAtTime(0.0001, tt + 1.6);
      const o = c.createOscillator(); o.type = "sawtooth"; o.frequency.value = midiHz(n);
      const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 1400;
      o.connect(f); f.connect(g); o.start(tt); o.stop(tt + 1.7);
    });
    // shimmer
    for (let i = 0; i < 6; i++) {
      const { g, t: tt } = this.env(0.05, 0.9, t + 0.2 + i * 0.07);
      const o = c.createOscillator(); o.type = "sine";
      o.frequency.value = midiHz(rootMidi + 24 + [0, 3, 7, 12, 15, 19][i]);
      o.connect(g); o.start(tt); o.stop(tt + 1);
    }
  }

  gateOpen(): void {
    if (!this.ctx || !this.noiseBuf) return;
    const c = this.ctx, t = c.currentTime;
    const n = c.createBufferSource(); n.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = "bandpass"; f.Q.value = 1.4;
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(2400, t + 1.2);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.35, t + 0.7);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    n.connect(f); f.connect(g); g.connect(this.sfxBus);
    n.start(t); n.stop(t + 1.7);
    this.drum(t + 0.9, 0.5, 48);
  }

  step(): void {
    if (!this.ctx || !this.noiseBuf) return;
    const c = this.ctx, { g, t } = this.env(0.045, 0.09);
    const n = c.createBufferSource(); n.buffer = this.noiseBuf;
    n.playbackRate.value = 0.7 + Math.random() * 0.5;
    const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 500;
    n.connect(f); f.connect(g); n.start(t); n.stop(t + 0.1);
  }

  collect(): void {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    [880, 1320].forEach((hz, i) => {
      const { g, t: tt } = this.env(0.12, 0.5, t + i * 0.08);
      const o = c.createOscillator(); o.type = "sine"; o.frequency.value = hz;
      o.connect(g); o.start(tt); o.stop(tt + 0.6);
    });
  }

  chest(): void {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const { g, t: tt } = this.env(0.1, 0.5);
    const o = c.createOscillator(); o.type = "square"; o.frequency.setValueAtTime(120, tt);
    o.frequency.linearRampToValueAtTime(90, tt + 0.3);
    o.connect(g); o.start(tt); o.stop(tt + 0.5);
    this.collect();
  }

  questDone(): void {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    [0, 4, 7, 12].forEach((n, i) => {
      const { g, t: tt } = this.env(0.16, 0.7, t + i * 0.13);
      const o = c.createOscillator(); o.type = "triangle"; o.frequency.value = midiHz(60 + n);
      o.connect(g); o.start(tt); o.stop(tt + 0.8);
    });
    this.drum(t + 0.55, 0.4);
  }

  uiClick(): void {
    if (!this.ctx) return;
    const c = this.ctx, { g, t } = this.env(0.08, 0.12);
    const o = c.createOscillator(); o.type = "sine"; o.frequency.value = 520;
    o.connect(g); o.start(t); o.stop(t + 0.14);
  }
}

export const audio = new AudioEngine();
