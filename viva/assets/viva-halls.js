/* VIVA Halls — موتور صحنهٔ سینمایی تالارها (Phaser 3) + لایهٔ صوتی (Howler.js)
 *
 * هیچ گرافیک تخت CSS در این لایه وجود ندارد؛ محیط هر تالار روی بوم Canvas/WebGL
 * با لایه‌های بافت واقعی (Poly Haven)، اسپرایت‌های دارای مجوز (Kenney / OGA)،
 * نور پویا، شعلهٔ شمع، ذرات غبار، مه، باران و وینیت رندر می‌شود.
 *
 * فهرست دارایی‌ها و مجوزها: viva/assets/CREDITS.md
 */
(function () {
  "use strict";

  /* ================================================================
   *  لایهٔ صوتی — Howler.js
   * ================================================================ */
  var Audio = (function () {
    var layers = [];   // حلقه‌های پیوسته
    var sporadic = []; // صداهای تصادفی (پرنده و ...)
    var timers = [];
    var enabled = false;

    function startMix(mix) {
      stopAll();
      (mix.loops || []).forEach(function (l) {
        var h = new Howl({ src: [l.src], loop: true, volume: 0, html5: false });
        h.play();
        h.fade(0, l.vol, 1200);
        layers.push(h);
      });
      (mix.sporadic || []).forEach(function (s) {
        var h = new Howl({ src: [s.src], loop: false, volume: s.vol });
        sporadic.push({ howl: h, min: s.minMs, max: s.maxMs });
        schedule(h, s.minMs, s.maxMs);
      });
      enabled = true;
    }

    function schedule(h, minMs, maxMs) {
      var delay = minMs + Math.random() * (maxMs - minMs);
      var t = setTimeout(function () {
        if (enabled) h.play();
        schedule(h, minMs, maxMs);
      }, delay);
      timers.push(t);
    }

    function stopAll() {
      layers.forEach(function (h) { try { h.unload(); } catch (e) {} });
      layers = [];
      timers.forEach(clearTimeout);
      timers = [];
      sporadic = [];
    }

    return {
      toggle: function (mix) {
        if (enabled) { stopAll(); enabled = false; return false; }
        startMix(mix);
        return true;
      },
      isOn: function () { return enabled; },
    };
  })();

  /* ================================================================
   *  ابزارهای بافت رویه‌ای (Canvas Texture Factory)
   * ================================================================ */
  function makeCanvas(w, h) {
    var c = document.createElement("canvas");
    c.width = w; c.height = h;
    return c;
  }

  function radialTex(scene, key, size, stops) {
    if (scene.textures.exists(key)) return key;
    var c = makeCanvas(size, size), ctx = c.getContext("2d");
    var g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    stops.forEach(function (s) { g.addColorStop(s[0], s[1]); });
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    scene.textures.addCanvas(key, c);
    return key;
  }

  // شعلهٔ شمع: دو لایه‌ی گرادینتی با هستهٔ روشن
  function flameTex(scene, key, w, h, core, mid, outer) {
    if (scene.textures.exists(key)) return key;
    var c = makeCanvas(w, h), ctx = c.getContext("2d");
    var g = ctx.createRadialGradient(w / 2, h * 0.72, 1, w / 2, h * 0.62, h * 0.62);
    g.addColorStop(0, core); g.addColorStop(0.42, mid); g.addColorStop(0.75, outer); g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(w / 2, h * 0.58, w * 0.34, h * 0.42, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    scene.textures.addCanvas(key, c);
    return key;
  }

  function vignetteTex(scene, key, w, h, strength) {
    if (scene.textures.exists(key)) return key;
    var c = makeCanvas(w, h), ctx = c.getContext("2d");
    var g = ctx.createRadialGradient(w / 2, h * 0.46, Math.min(w, h) * 0.30, w / 2, h / 2, Math.max(w, h) * 0.72);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(0.65, "rgba(0,0,0," + (strength * 0.55) + ")");
    g.addColorStop(1, "rgba(0,0,0," + strength + ")");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    scene.textures.addCanvas(key, c);
    return key;
  }

  // میز بیضی مافیا: بافت چوب واقعی + لبهٔ طلاکاری + مرکز مخملی + ضخامت سه‌بعدی
  function mafiaTableTex(scene, key, W, H, feltColor) {
    if (scene.textures.exists(key)) return key;
    var c = makeCanvas(W, H), ctx = c.getContext("2d");
    var cx = W / 2, cy = H / 2, rx = W / 2 - 8, ry = H / 2 - 8;

    function ellipsePath(kx, ky) {
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * kx, ry * ky, 0, 0, Math.PI * 2);
    }

    // ضخامت میز (لبهٔ پایین)
    ctx.save();
    ctx.translate(0, H * 0.055);
    ellipsePath(1, 1);
    var side = ctx.createLinearGradient(0, cy - ry, 0, cy + ry);
    side.addColorStop(0, "#241206");
    side.addColorStop(0.5, "#3a1f0c");
    side.addColorStop(1, "#160a03");
    ctx.fillStyle = side;
    ctx.fill();
    ctx.restore();

    // رویهٔ چوب
    var wood = scene.textures.get("wood_dark").getSourceImage();
    ctx.save();
    ellipsePath(1, 1);
    ctx.clip();
    var pat = ctx.createPattern(wood, "repeat");
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(0.18);
    ctx.translate(-cx - 120, -cy - 60);
    ctx.fillStyle = pat;
    ctx.fillRect(-W, -H, W * 3, H * 3);
    ctx.restore();
    // نور شمعی روی رویه
    var sheen = ctx.createRadialGradient(cx, cy - ry * 0.25, 10, cx, cy, rx);
    sheen.addColorStop(0, "rgba(255,190,110,0.30)");
    sheen.addColorStop(0.55, "rgba(120,60,20,0.10)");
    sheen.addColorStop(1, "rgba(0,0,0,0.42)");
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    // مرکز مخملی
    ctx.save();
    ellipsePath(0.72, 0.72);
    var felt = ctx.createRadialGradient(cx, cy - ry * 0.2, 8, cx, cy, rx * 0.75);
    felt.addColorStop(0, feltColor.light);
    felt.addColorStop(1, feltColor.dark);
    ctx.fillStyle = felt;
    ctx.fill();
    ctx.strokeStyle = "rgba(226,178,84,0.55)";
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();

    // حاشیهٔ طلاکاری
    ctx.save();
    ellipsePath(1, 1);
    ctx.strokeStyle = "rgba(232,183,74,0.85)";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.strokeStyle = "rgba(90,60,20,0.9)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    scene.textures.addCanvas(key, c);
    return key;
  }

  // صندلی چوبی سلطنتی (نمای پشت)
  function chairTex(scene, key) {
    if (scene.textures.exists(key)) return key;
    var W = 64, H = 84, c = makeCanvas(W, H), ctx = c.getContext("2d");
    // پشتی قوسی
    var g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#5a3a1c"); g.addColorStop(0.5, "#3c2610"); g.addColorStop(1, "#241608");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(W * 0.18, H * 0.86);
    ctx.lineTo(W * 0.18, H * 0.30);
    ctx.quadraticCurveTo(W * 0.5, -H * 0.10, W * 0.82, H * 0.30);
    ctx.lineTo(W * 0.82, H * 0.86);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(226,178,84,0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();
    // نقش وسط پشتی
    ctx.strokeStyle = "rgba(226,178,84,0.65)";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.ellipse(W / 2, H * 0.40, W * 0.14, H * 0.16, 0, 0, Math.PI * 2);
    ctx.stroke();
    // نشیمن
    var seat = ctx.createLinearGradient(0, H * 0.62, 0, H * 0.78);
    seat.addColorStop(0, "#6a4a24"); seat.addColorStop(1, "#33200d");
    ctx.fillStyle = seat;
    ctx.beginPath();
    ctx.ellipse(W / 2, H * 0.70, W * 0.42, H * 0.075, 0, 0, Math.PI * 2);
    ctx.fill();
    scene.textures.addCanvas(key, c);
    return key;
  }

  // پنجرهٔ بلند شبانه با قاب چوبی (دژمار)
  function nightWindowTex(scene, key, W, H) {
    if (scene.textures.exists(key)) return key;
    var c = makeCanvas(W, H), ctx = c.getContext("2d");
    // آسمان شب
    var sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#0a1424"); sky.addColorStop(0.6, "#0c1a2e"); sky.addColorStop(1, "#0a1018");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    // شهر دور در باران
    ctx.fillStyle = "rgba(16,26,40,0.9)";
    for (var i = 0; i < 9; i++) {
      var bw = 10 + Math.random() * 16, bh = 24 + Math.random() * 46;
      ctx.fillRect(i * (W / 9), H - bh, bw, bh);
    }
    // پنجره‌های روشن شهری
    ctx.fillStyle = "rgba(255,200,120,0.35)";
    for (var j = 0; j < 26; j++) {
      ctx.fillRect(Math.random() * W, H - 12 - Math.random() * 52, 2, 2.6);
    }
    // قاب چوبی + قسامه
    ctx.strokeStyle = "#2e1a10";
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, W - 10, H - 10);
    ctx.fillStyle = "rgba(226,178,84,0.35)";
    ctx.fillRect(4, 4, W - 8, 3);
    ctx.fillStyle = "#241309";
    ctx.fillRect(W / 2 - 3, 5, 6, H - 10);
    ctx.fillRect(5, H * 0.46, W - 10, 6);
    scene.textures.addCanvas(key, c);
    return key;
  }

  // پنجرهٔ قوسی روز (آرگاد)
  function dayWindowTex(scene, key, W, H) {
    if (scene.textures.exists(key)) return key;
    var c = makeCanvas(W, H), ctx = c.getContext("2d");
    var sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#8ec4ea"); sky.addColorStop(0.55, "#c9e2f2"); sky.addColorStop(0.75, "#e8d9a8");
    ctx.fillStyle = sky;
    ctx.beginPath();
    ctx.moveTo(6, H);
    ctx.lineTo(6, H * 0.34);
    ctx.quadraticCurveTo(W / 2, -H * 0.14, W - 6, H * 0.34);
    ctx.lineTo(W - 6, H);
    ctx.closePath();
    ctx.fill();
    ctx.save();
    ctx.clip();
    // خورشید
    var sun = ctx.createRadialGradient(W * 0.30, H * 0.24, 2, W * 0.30, H * 0.24, W * 0.28);
    sun.addColorStop(0, "rgba(255,246,200,0.95)");
    sun.addColorStop(0.4, "rgba(255,214,107,0.55)");
    sun.addColorStop(1, "rgba(255,214,107,0)");
    ctx.fillStyle = sun;
    ctx.fillRect(0, 0, W, H);
    // تپه‌ها و برج دور
    ctx.fillStyle = "rgba(70,92,50,0.85)";
    ctx.beginPath();
    ctx.moveTo(0, H * 0.78);
    ctx.quadraticCurveTo(W * 0.3, H * 0.58, W * 0.55, H * 0.74);
    ctx.quadraticCurveTo(W * 0.8, H * 0.62, W, H * 0.72);
    ctx.lineTo(W, H); ctx.lineTo(0, H);
    ctx.fill();
    ctx.fillStyle = "rgba(58,74,44,0.9)";
    ctx.beginPath();
    ctx.moveTo(0, H * 0.9);
    ctx.quadraticCurveTo(W * 0.4, H * 0.72, W, H * 0.86);
    ctx.lineTo(W, H); ctx.lineTo(0, H);
    ctx.fill();
    ctx.fillStyle = "rgba(90,80,64,0.95)";
    ctx.fillRect(W * 0.62, H * 0.44, W * 0.10, H * 0.30);
    ctx.beginPath();
    ctx.moveTo(W * 0.60, H * 0.44);
    ctx.lineTo(W * 0.67, H * 0.34);
    ctx.lineTo(W * 0.74, H * 0.44);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    // قاب طلاکاری
    ctx.strokeStyle = "#4a3016";
    ctx.lineWidth = 11;
    ctx.beginPath();
    ctx.moveTo(6, H);
    ctx.lineTo(6, H * 0.34);
    ctx.quadraticCurveTo(W / 2, -H * 0.14, W - 6, H * 0.34);
    ctx.lineTo(W - 6, H);
    ctx.stroke();
    ctx.strokeStyle = "rgba(226,178,84,0.65)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = "#3a2410";
    ctx.fillRect(W / 2 - 3, 8, 6, H - 8);
    ctx.fillRect(6, H * 0.5, W - 12, 6);
    scene.textures.addCanvas(key, c);
    return key;
  }

  // فرش ایرانی ساده (لوزی طلا بر زمینهٔ شرابی)
  function carpetTex(scene, key, W, H) {
    if (scene.textures.exists(key)) return key;
    var c = makeCanvas(W, H), ctx = c.getContext("2d");
    var g = ctx.createLinearGradient(0, 0, W, 0);
    g.addColorStop(0, "#5e1420"); g.addColorStop(0.5, "#7a1c2c"); g.addColorStop(1, "#541220");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(226,178,84,0.5)";
    ctx.lineWidth = 1.4;
    var step = 34;
    for (var y = -step; y < H + step; y += step) {
      for (var x = -step; x < W + step; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + step / 2, y);
        ctx.lineTo(x + step, y + step / 2);
        ctx.lineTo(x + step / 2, y + step);
        ctx.lineTo(x, y + step / 2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "rgba(226,178,84,0.14)";
        ctx.fill();
      }
    }
    // سایهٔ محو لبه‌ها
    var edge = ctx.createLinearGradient(0, 0, 0, H);
    edge.addColorStop(0, "rgba(0,0,0,0.5)"); edge.addColorStop(0.2, "rgba(0,0,0,0)"); edge.addColorStop(1, "rgba(0,0,0,0.4)");
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, W, H);
    scene.textures.addCanvas(key, c);
    return key;
  }

  /* ================================================================
   *  بنای مشترک صحنهٔ تالار
   * ================================================================ */
  function baseScene(kind) {
    return {
      preload: function () {
        var A = "../assets/img/";
        this.load.image("wood_dark", A + "wood_dark.jpg");
        this.load.image("wood_fine", A + "wood_fine.jpg");
        this.load.image("wood_medieval", A + "wood_medieval.jpg");
        this.load.image("floor_old", A + "floor_old.jpg");
        this.load.image("wall_plank", A + "wall_plank.jpg");
        if (kind === "dezhmar") {
          this.load.image("card_back", A + "cards/back.png");
          this.load.image("card_hearts", A + "cards/hearts.png");
          this.load.image("card_spades", A + "cards/spades.png");
          this.load.image("card_diamonds", A + "cards/diamonds.png");
          this.load.image("card_deck", A + "cards/deck.png");
          this.load.image("chip_red", A + "chips/chip_red.png");
          this.load.image("chip_blue", A + "chips/chip_blue.png");
          this.load.image("chip_green", A + "chips/chip_green.png");
          this.load.image("chip_black", A + "chips/chip_black.png");
        }
        if (kind === "argad") {
          this.load.image("w_knight", A + "chess/w_knight.png");
          this.load.image("b_king", A + "chess/b_king.png");
        }
      },
      create: function () {
        var self = this;
        this.candles = [];
        this.dust = [];
        this.fog = [];
        this.rain = [];
        // بافت‌های رویه‌ای
        radialTex(this, "glow", 256, [[0, "rgba(255,200,120,0.85)"], [0.35, "rgba(255,160,70,0.35)"], [1, "rgba(255,140,50,0)"]]);
        radialTex(this, "blob", 256, [[0, "rgba(180,170,190,0.30)"], [1, "rgba(180,170,190,0)"]]);
        flameTex(this, "flame_outer", 34, 52, "rgba(255,236,170,0.95)", "rgba(255,166,60,0.85)", "rgba(255,90,20,0.35)");
        flameTex(this, "flame_inner", 18, 30, "rgba(255,255,240,0.98)", "rgba(255,230,150,0.9)", "rgba(255,190,90,0.4)");
        this.events.on("shutdown", function () { self.tweens.killAll(); });
        this.build();
        this.layout(this.scale.width, this.scale.height);
        this.scale.on("resize", function (s) { self.layout(s.width, s.height); });
      },
      addCandle: function (x, y, scale) {
        scale = scale || 1;
        var body = this.add.image(x, y, "candle_body").setScale(scale).setOrigin(0.5, 1);
        var fo = this.add.image(x, y - 14 * scale, "flame_outer").setScale(scale).setOrigin(0.5, 0.85);
        var fi = this.add.image(x, y - 14 * scale, "flame_inner").setScale(scale).setOrigin(0.5, 0.85);
        var gl = this.add.image(x, y - 16 * scale, "glow").setScale(2.4 * scale).setAlpha(0.5).setBlendMode(Phaser.BlendModes.ADD);
        this.candles.push({ fo: fo, fi: fi, gl: gl, phase: Math.random() * 9, x: x, y: y, scale: scale });
        return body;
      },
      candleBodyTex: function () {
        if (this.textures.exists("candle_body")) return;
        var W = 22, H = 64, c = makeCanvas(W, H), ctx = c.getContext("2d");
        var g = ctx.createLinearGradient(0, 0, W, 0);
        g.addColorStop(0, "#8a7450"); g.addColorStop(0.4, "#ecdfb8"); g.addColorStop(1, "#9a8460");
        ctx.fillStyle = g;
        ctx.fillRect(W * 0.32, 10, W * 0.36, H - 10);
        var holder = ctx.createLinearGradient(0, H - 8, 0, H);
        holder.addColorStop(0, "#e8b74a"); holder.addColorStop(1, "#7a5218");
        ctx.fillStyle = holder;
        ctx.beginPath();
        ctx.ellipse(W / 2, H - 4, W * 0.44, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#1a1208";
        ctx.fillRect(W / 2 - 1, 4, 2, 8);
        this.textures.addCanvas("candle_body", c);
      },
      update: function (t, dt) {
        var self = this;
        // سوسوی شعله‌ها
        this.candles.forEach(function (c) {
          var p = t * 0.004 + c.phase;
          var sway = Math.sin(p * 1.7) * 2.2 + Math.sin(p * 3.3) * 1.1;
          var sc = 1 + Math.sin(p * 2.6) * 0.09 + Math.sin(p * 5.1) * 0.05;
          c.fo.x = c.x + sway * c.scale;
          c.fi.x = c.x + sway * 0.8 * c.scale;
          c.fo.setScale(c.scale * (0.94 + 0.10 * Math.abs(Math.sin(p * 2.1))));
          c.fi.setScale(c.scale * sc);
          c.gl.setAlpha(0.40 + 0.16 * Math.abs(Math.sin(p * 1.9)) + (self.moodBoost || 0));
        });
        this.updateExtra && this.updateExtra(t, dt);
      },
      buildDust: function (count, w, h) {
        var self = this;
        this.dust.forEach(function (d) { d.destroy(); });
        this.dust = [];
        for (var i = 0; i < count; i++) {
          var d = this.add.image(Math.random() * w, Math.random() * h, "glow")
            .setScale(0.05 + Math.random() * 0.08)
            .setAlpha(0.05 + Math.random() * 0.10)
            .setBlendMode(Phaser.BlendModes.ADD)
            .setDepth(40);
          d.vx = (Math.random() - 0.5) * 4;
          d.vy = -3 - Math.random() * 5;
          this.dust.push(d);
        }
      },
      moveDust: function (dt, w, h) {
        this.dust.forEach(function (d) {
          d.x += d.vx * dt / 1000;
          d.y += d.vy * dt / 1000;
          if (d.y < -10) { d.y = h + 10; d.x = Math.random() * w; }
          if (d.x < -10) d.x = w + 10;
          if (d.x > w + 10) d.x = -10;
        });
      },
    };
  }

  /* ================================================================
   *  صحنهٔ تالار دژمار — اتاق مخفیِ بارانی با میز مافیا
   * ================================================================ */
  function dezhmarScene() {
    var base = baseScene("dezhmar");
    var api = Object.assign({}, base);

    api.build = function () {
      this.candleBodyTex();
      this.cameras.main.setBackgroundColor("#0a0605");
      this.layers = {};
      this.layers.env = this.add.container(0, 0);
      this.layers.table = this.add.container(0, 0);
      this.layers.fx = this.add.container(0, 0);
      this.mood = { ambient: 0.55, glow: 0 };
    };

    api.layout = function (w, h) {
      var self = this;
      this.tweens.killAll();
      this.children.removeAll(true);
      this.candles = []; this.dust = []; this.fog = []; this.rain = [];
      var W = w, H = h;

      // --- دیوار چوبی تیره ---
      var wall = this.add.tileSprite(W / 2, H * 0.30, W, H * 0.62, "wall_plank").setTint(0x8a6a58).setAlpha(0.85);
      wall.tileScaleX = 0.5; wall.tileScaleY = 0.5;
      var wallShade = this.add.rectangle(W / 2, H * 0.30, W, H * 0.62, 0x120806, 0.72);
      // قرنیز طلا
      var rail = this.add.rectangle(W / 2, H * 0.60, W, 5, 0x8a6428, 0.9);
      var railGlow = this.add.rectangle(W / 2, H * 0.60, W, 2, 0xe8b74a, 0.5);

      // --- کف چوبی ---
      var floor = this.add.tileSprite(W / 2, H * 0.82, W, H * 0.40, "floor_old").setTint(0x9a7250);
      floor.tileScaleX = 0.42; floor.tileScaleY = 0.42;
      var floorShade = this.add.rectangle(W / 2, H * 0.82, W, H * 0.40, 0x0d0603, 0.55);

      // --- پنجرهٔ بارانی ---
      var winW = Math.min(150, W * 0.30), winH = Math.min(215, H * 0.62);
      this.nightWindowTex = nightWindowTex.bind(null, this);
      var winFrame = this.add.image(W * 0.20, H * 0.32, nightWindowTex(this, "win_dezh", Math.round(winW), Math.round(winH)))
        .setDepth(2);
      var winShadow = this.add.rectangle(winFrame.x + 6, winFrame.y + 8, winW + 14, winH + 14, 0x000000, 0.5).setDepth(1);
      this.winFrame = winFrame;

      // --- میز مافیا ---
      var tW = Math.min(W * 0.94, 560), tH = tW * 0.42;
      var tableTexKey = mafiaTableTex(this, "table_dezh", Math.round(tW), Math.round(tH), { light: "rgba(140,32,52,0.92)", dark: "rgba(74,12,26,0.96)" });
      var tcx = W / 2, tcy = H * 0.80;
      var table = this.add.image(tcx, tcy, tableTexKey).setDepth(10);
      // هالهٔ نور شمع روی میز
      var tableGlow = this.add.image(tcx, tcy - tH * 0.15, "glow").setScale(tW / 210).setAlpha(0.30).setBlendMode(Phaser.BlendModes.ADD).setDepth(11);

      // --- کارت‌ها و ژتون‌ها روی میز ---
      var cardY = tcy - tH * 0.12;
      var defs = [
        { k: "card_diamonds", dx: -tW * 0.26, dy: -6, r: -0.20 },
        { k: "card_hearts", dx: -tW * 0.20, dy: 2, r: 0.12 },
        { k: "card_spades", dx: -tW * 0.14, dy: -2, r: -0.05 },
        { k: "card_back", dx: -tW * 0.20, dy: -16, r: -0.01, back: true },
      ];
      defs.forEach(function (d) {
        var s = self.add.image(tcx + d.dx, cardY + d.dy, d.k)
          .setDepth(12).setAngle(d.r * 57.3)
          .setScale(0.62);
        self.add.ellipse(s.x + 3, s.y + 6, 44, 12, 0x000000, 0.45).setDepth(11);
      });
      var deck = this.add.image(tcx + tW * 0.26, cardY + 4, "card_deck").setScale(0.5).setDepth(12).setAngle(6);
      this.add.ellipse(deck.x + 3, deck.y + 8, 66, 18, 0x000000, 0.45).setDepth(11);

      function chipStack(x, y, color, n) {
        for (var i = 0; i < n; i++) {
          self.add.image(x - i * 1.5, y - i * 4.5, color).setScale(0.5).setDepth(13);
        }
        self.add.ellipse(x + 2, y + 6, 44, 12, 0x000000, 0.4).setDepth(12);
      }
      chipStack(tcx - tW * 0.06, tcy + tH * 0.10, "chip_red", 5);
      chipStack(tcx + tW * 0.10, tcy + tH * 0.16, "chip_blue", 4);
      chipStack(tcx + tW * 0.02, tcy + tH * 0.02, "chip_green", 3);
      chipStack(tcx + tW * 0.17, tcy - tH * 0.02, "chip_black", 3);

      // --- شمع‌ها ---
      this.addCandle(tcx - tW * 0.30, tcy - tH * 0.30, 0.9);
      this.addCandle(tcx + tW * 0.30, tcy - tH * 0.32, 0.75);
      this.addCandle(tcx + tW * 0.36, tcy - tH * 0.05, 1.05);

      // --- مه ---
      for (var f = 0; f < 3; f++) {
        var blob = this.add.image(Math.random() * W, H * (0.55 + f * 0.12), "blob")
          .setScale(2.2 + f * 0.7).setAlpha(0.16).setDepth(30);
        this.fog.push(blob);
        this.tweens.add({
          targets: blob, x: "+=" + (40 + f * 30), alpha: 0.10,
          duration: 7000 + f * 2600, yoyo: true, repeat: -1, ease: "Sine.easeInOut",
        });
      }

      // --- ذرات غبار در نور شمع ---
      this.buildDust(14, W, H);

      // --- باران روی پنجره ---
      var g = this.add.graphics().setDepth(3);
      for (var r = 0; r < 54; r++) {
        this.rain.push({
          x: winFrame.x - winW / 2 + Math.random() * winW,
          y: winFrame.y - winH / 2 + Math.random() * winH,
          sp: 260 + Math.random() * 240, len: 7 + Math.random() * 9,
          far: Math.random() < 0.5,
        });
      }
      this.rainG = g;

      // --- وینیت و نور محیطی ---
      this.ambient = this.add.rectangle(W / 2, H / 2, W, H, 0x05020a, this.mood.ambient).setDepth(48);
      vignetteTex(this, "vig", Math.max(320, W), Math.max(240, H), 0.62);
      var vig = this.add.image(W / 2, H / 2, "vig").setDisplaySize(W, H).setDepth(49);
      var frameGlow = this.add.rectangle(W / 2, H / 2, W - 2, H - 2).setStrokeStyle(1, 0xe8b74a, 0.35).setDepth(50);

      // --- رعد و برق گاه‌به‌گاه ---
      this.lightning = this.add.rectangle(W / 2, H / 2, W, H, 0xcfe0ff, 0).setDepth(47);
      this.time.addEvent({
        delay: 9000, loop: true, callback: function () {
          if (Math.random() < 0.55) {
            self.lightning.setAlpha(0.22);
            self.tweens.add({ targets: self.lightning, alpha: 0, duration: 420, ease: "Quad.easeOut" });
          }
        },
      });
    };

    api.updateExtra = function (t, dt) {
      var self = this;
      // باران
      var win = this.winFrame, g = this.rainG;
      if (win && g) {
        g.clear();
        g.lineStyle(1, 0xaac4e8, 0.30);
        var x0 = win.x - win.displayWidth / 2, x1 = win.x + win.displayWidth / 2;
        var y0 = win.y - win.displayHeight / 2, y1 = win.y + win.displayHeight / 2;
        this.rain.forEach(function (r) {
          r.y += r.sp * dt / 1000 * (r.far ? 0.6 : 1);
          if (r.y > y1) { r.y = y0 - 4; r.x = x0 + Math.random() * (x1 - x0); }
          g.lineStyle(1, 0xaac4e8, r.far ? 0.18 : 0.34);
          g.lineBetween(r.x, r.y, r.x + 1.5, r.y + r.len * (r.far ? 0.7 : 1));
        });
      }
      this.moveDust(dt, this.scale.width, this.scale.height);
    };

    // تغییر نور با فاز بازی
    api.setMood = function (mood) {
      var self = this;
      var target = mood === "night" ? 0.66 : mood === "vote" ? 0.5 : 0.4;
      this.tweens.add({ targets: this.ambient, fillAlpha: target, duration: 900 });
      this.moodBoost = mood === "night" ? 0.14 : 0;
    };

    return api;
  }

  /* ================================================================
   *  صحنهٔ تالار آرگاد — تالار اشرافی روز با پنجرهٔ قوسی
   * ================================================================ */
  function argadScene() {
    var base = baseScene("argad");
    var api = Object.assign({}, base);

    api.build = function () {
      this.candleBodyTex();
      this.cameras.main.setBackgroundColor("#120c06");
    };

    api.layout = function (w, h) {
      var self = this;
      this.tweens.killAll();
      this.children.removeAll(true);
      this.candles = []; this.dust = [];
      var W = w, H = h;

      // --- دیوار گچ‌بری گرم ---
      var wall = this.add.tileSprite(W / 2, H * 0.28, W, H * 0.58, "wall_plank").setTint(0xc8a678).setAlpha(0.9);
      wall.tileScaleX = 0.55; wall.tileScaleY = 0.55;
      var wallShade = this.add.rectangle(W / 2, H * 0.28, W, H * 0.58, 0x241505, 0.60);
      // تابلهٔ چوبی پایین دیوار
      var wain = this.add.tileSprite(W / 2, H * 0.52, W, H * 0.13, "wood_medieval").setTint(0xb08a54);
      wain.tileScaleX = 0.35; wain.tileScaleY = 0.35;
      var rail = this.add.rectangle(W / 2, H * 0.455, W, 4, 0xe8b74a, 0.55);

      // --- کف ---
      var floor = this.add.tileSprite(W / 2, H * 0.82, W, H * 0.40, "floor_old").setTint(0xc09a68);
      floor.tileScaleX = 0.4; floor.tileScaleY = 0.4;
      var floorShade = this.add.rectangle(W / 2, H * 0.82, W, H * 0.40, 0x1a0e04, 0.42);

      // --- فرش ---
      var carW = W * 0.86, carH = H * 0.30;
      var carpet = this.add.image(W / 2, H * 0.80, carpetTex(this, "carpet_arg", Math.round(carW), Math.round(carH)))
        .setDepth(4).setAlpha(0.95);

      // --- پنجرهٔ قوسی خورشیدی + پرتو نور ---
      var winW = Math.min(170, W * 0.34), winH = Math.min(230, H * 0.64);
      var winFrame = this.add.image(W * 0.78, H * 0.30, dayWindowTex(this, "win_arg", Math.round(winW), Math.round(winH))).setDepth(5);
      var beam = this.add.image(winFrame.x - winW * 0.9, winFrame.y + winH * 0.30, "glow")
        .setScale(2.6, 1.15).setAlpha(0.16).setAngle(24).setBlendMode(Phaser.BlendModes.ADD).setDepth(6);
      this.tweens.add({ targets: beam, alpha: 0.10, duration: 3800, yoyo: true, repeat: -1, ease: "Sine.easeInOut" });
      this.winFrame = winFrame;

      // --- میز شطرنج چوبی (نمای سه‌رخ) ---
      var tW = Math.min(W * 0.66, 380), tH = tW * 0.5;
      var tcx = W * 0.36, tcy = H * 0.68;
      // پایهٔ میز
      this.add.rectangle(tcx, tcy + tH * 0.16, tW * 0.78, tH * 0.10, 0x2e1a08).setDepth(7);
      // لبهٔ جلویی
      var edge = this.add.image(tcx, tcy + tH * 0.06, "wood_medieval").setDisplaySize(tW, tH * 0.16).setTint(0x8a6438).setDepth(8);
      // رویه
      var top = this.add.image(tcx, tcy - tH * 0.04, "wood_fine").setDisplaySize(tW, tH * 0.30).setTint(0xffe0b0).setDepth(9);
      // حاشیهٔ طلا
      this.add.rectangle(tcx, tcy - tH * 0.04, tW - 8, tH * 0.30 - 6).setStrokeStyle(2, 0xe8b74a, 0.8).setDepth(10);
      var tableShadow = this.add.ellipse(tcx + 8, tcy + tH * 0.20, tW * 1.05, tH * 0.14, 0x000000, 0.5).setDepth(6);
      // مهره‌های تزئینی روی میز
      this.add.image(tcx - tW * 0.30, tcy - tH * 0.155, "w_knight").setScale(0.30).setDepth(12);
      this.add.image(tcx + tW * 0.30, tcy - tH * 0.15, "b_king").setScale(0.30).setDepth(12);

      // وسایل روی میز: شمعدان، کتاب، جوهر
      this.addCandle(tcx - tW * 0.26, tcy - tH * 0.16, 0.85).setDepth(12);
      this.addCandle(tcx + tW * 0.20, tcy - tH * 0.14, 0.65).setDepth(12);
      // کتاب بسته
      var book = this.add.image(tcx + tW * 0.02, tcy - tH * 0.10, "wood_dark").setDisplaySize(tW * 0.14, tH * 0.05).setTint(0x8a2432).setDepth(11);
      this.add.rectangle(book.x, book.y - book.displayHeight / 2, book.displayWidth, 3, 0xe8b74a, 0.75).setDepth(12);
      // جوهر
      var ink = this.add.image(tcx - tW * 0.10, tcy - tH * 0.11, "glow").setScale(0.16).setTint(0x223044).setAlpha(0.9).setDepth(11);
      ink.setBlendMode(Phaser.BlendModes.NORMAL);

      // --- ذرات غبار در پرتو خورشید ---
      this.buildDust(16, W, H);

      // --- وینیت ---
      this.ambient = this.add.rectangle(W / 2, H / 2, W, H, 0x180c02, 0.30).setDepth(48);
      vignetteTex(this, "vig", Math.max(320, W), Math.max(240, H), 0.55);
      this.add.image(W / 2, H / 2, "vig").setDisplaySize(W, H).setDepth(49);
      this.add.rectangle(W / 2, H / 2, W - 2, H - 2).setStrokeStyle(1, 0xe8b74a, 0.35).setDepth(50);
    };

    api.updateExtra = function (t, dt) {
      this.moveDust(dt, this.scale.width, this.scale.height);
    };

    api.setMood = function () {};

    return api;
  }

  /* ================================================================
   *  API عمومی
   * ================================================================ */
  window.VivaHalls = {
    bootRoom: function (el, kind) {
      var def = kind === "dezhmar" ? dezhmarScene() : argadScene();
      var SceneClass = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function SceneA() { Phaser.Scene.call(this, { key: "hall" }); },
      });
      Object.keys(def).forEach(function (k) {
        if (typeof def[k] === "function") SceneClass.prototype[k] = def[k];
      });
      var game = new Phaser.Game({
        type: Phaser.AUTO,
        parent: el,
        transparent: false,
        backgroundColor: kind === "dezhmar" ? "#0a0605" : "#120c06",
        scale: { mode: Phaser.Scale.RESIZE, width: "100%", height: "100%" },
        render: { antialias: true, powerPreference: "high-performance" },
        scene: [],
      });
      game.scene.add("hall", SceneClass, true);
      return game;
    },

    setMood: function (game, mood) {
      try { game.scene.getScene("hall").setMood(mood); } catch (e) {}
    },

    shake: function (game) {
      try { game.scene.getScene("hall").cameras.main.shake(220, 0.004); } catch (e) {}
    },

    /* ---------------- صفحهٔ شطرنج ---------------- */
    createBoard: function (el, api) {
      var BW = 640, CELL = 80;
      var PIECE_TEX = {
        K: "w_king", Q: "w_queen", R: "w_rook", B: "w_bishop", N: "w_knight", P: "w_pawn",
        k: "b_king", q: "b_queen", r: "b_rook", b: "b_bishop", n: "b_knight", p: "b_pawn",
      };
      var state = {
        sprites: {},   // sqName → sprite
        overlay: null, // گروه نشانگرها
        flipped: false,
        cur: null,
      };

      var BootScene = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function SceneB() { Phaser.Scene.call(this, { key: "board" }); },
        preload: function () {
          var A = "../assets/img/chess/";
          this.load.image("sq_light", A + "sq_light.png");
          this.load.image("sq_dark", A + "sq_dark.png");
          Object.keys(PIECE_TEX).forEach(function (k) {
            this.load.image(PIECE_TEX[k], A + PIECE_TEX[k] + ".png");
          }, this);
          this.load.image("wood_dark", "../assets/img/wood_dark.jpg");
        },
        create: function () {
          var self = this;
          // بافت نشانگرها
          (function () {
            var c = makeCanvas(CELL, CELL), ctx = c.getContext("2d");
            ctx.strokeStyle = "rgba(255,217,138,0.95)";
            ctx.lineWidth = 6;
            ctx.strokeRect(4, 4, CELL - 8, CELL - 8);
            self.textures.addCanvas("hl_sel", c);
            c = makeCanvas(CELL, CELL); ctx = c.getContext("2d");
            ctx.fillStyle = "rgba(122,232,138,0.5)";
            ctx.beginPath(); ctx.arc(CELL / 2, CELL / 2, CELL * 0.14, 0, Math.PI * 2); ctx.fill();
            self.textures.addCanvas("hl_move", c);
            c = makeCanvas(CELL, CELL); ctx = c.getContext("2d");
            ctx.strokeStyle = "rgba(255,110,110,0.85)";
            ctx.lineWidth = 6;
            ctx.strokeRect(6, 6, CELL - 12, CELL - 12);
            self.textures.addCanvas("hl_capture", c);
            c = makeCanvas(CELL, CELL); ctx = c.getContext("2d");
            ctx.fillStyle = "rgba(255,217,138,0.26)";
            ctx.fillRect(0, 0, CELL, CELL);
            self.textures.addCanvas("hl_last", c);
            c = makeCanvas(CELL, CELL); ctx = c.getContext("2d");
            var g = ctx.createRadialGradient(CELL / 2, CELL / 2, 2, CELL / 2, CELL / 2, CELL / 2);
            g.addColorStop(0, "rgba(255,60,60,0.75)"); g.addColorStop(1, "rgba(255,60,60,0)");
            ctx.fillStyle = g; ctx.fillRect(0, 0, CELL, CELL);
            self.textures.addCanvas("hl_check", c);
          })();

          this.boardLayer = this.add.container(0, 0);
          this.pieceLayer = this.add.container(0, 0);
          this.hlLayer = this.add.container(0, 0).setDepth(5);

          this.input.on("pointerdown", function (p) {
            var pt = self.pointToSquare(p.x, p.y);
            if (pt) api.onSquare(pt);
          });
        },
        pointToSquare: function (px, py) {
          var off = this.boardOffset || { x: 0, y: 0 };
          var fx = Math.floor((px - off.x) / CELL), fy = Math.floor((py - off.y) / CELL);
          if (fx < 0 || fx > 7 || fy < 0 || fy > 7) return null;
          var file = state.flipped ? 7 - fx : fx;
          var rank = state.flipped ? fy + 1 : 8 - fy;
          return "abcdefgh"[file] + rank;
        },
      });

      var game = new Phaser.Game({
        type: Phaser.AUTO,
        parent: el,
        transparent: true,
        scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, width: BW + 56, height: BW + 56 },
        render: { antialias: true },
        scene: [],
      });
      game.scene.add("board", BootScene, true);
      var scene = null;

      function sqToXY(sq) {
        var file = "abcdefgh".indexOf(sq[0]);
        var rank = parseInt(sq[1], 10);
        var fx = state.flipped ? 7 - file : file;
        var fy = state.flipped ? rank - 1 : 8 - rank;
        return { x: 28 + fx * CELL + CELL / 2, y: 28 + fy * CELL + CELL / 2 };
      }

      function fenToMap(fen) {
        var rows = fen.split(" ")[0].split("/");
        var map = {};
        for (var r = 0; r < 8; r++) {
          var f = 0;
          for (var i = 0; i < rows[r].length; i++) {
            var ch = rows[r][i];
            if (ch >= "1" && ch <= "8") { f += parseInt(ch, 10); continue; }
            var file = state.flipped ? 7 - f : f;
            var rank = state.flipped ? r + 1 : 8 - r;
            map["abcdefgh"[file] + rank] = ch;
            f++;
          }
        }
        return map;
      }

      function render(st) {
        state.cur = st;
        var sc = game.scene.getScene("board");
        if (!sc || !sc.boardLayer) return;
        state.flipped = st.myColor === "black";
        // قاب + خانه‌ها (فقط بار اول)
        if (!sc.built) {
          sc.boardLayer.removeAll(true);
          // قاب چوبی
          var frame = sc.add.image(BW / 2 + 28, BW / 2 + 28, "wood_dark").setDisplaySize(BW + 52, BW + 52).setTint(0x9a7238);
          sc.boardLayer.add(frame);
          var inner = sc.add.rectangle(BW / 2 + 28, BW / 2 + 28, BW + 40, BW + 40).setStrokeStyle(3, 0xe8b74a, 0.8);
          sc.boardLayer.add(inner);
          for (var fy = 0; fy < 8; fy++) {
            for (var fx = 0; fx < 8; fx++) {
              var file = state.flipped ? 7 - fx : fx;
              var rank = state.flipped ? fy + 1 : 8 - fy;
              var sq = "abcdefgh"[file] + rank;
              var isLight = (file + rank) % 2 === 1;
              var s = sc.add.image(28 + fx * CELL + CELL / 2, 28 + fy * CELL + CELL / 2, isLight ? "sq_light" : "sq_dark")
                .setDisplaySize(CELL, CELL);
              sc.boardLayer.add(s);
            }
          }
          sc.built = true;
          sc.boardOffset = { x: 28, y: 28 };
        }

        var target = fenToMap(st.fen);
        // حذف مهره‌های غایب / جابه‌جایی
        var used = {};
        Object.keys(state.sprites).forEach(function (sq) {
          var rec = state.sprites[sq];
          if (target[sq] === rec.char) { used[sq] = rec; }
          else {
            // مهره حرکت کرده؟ اگر در lastTo همین کاراکتر هست، اسپرایت را منتقل کن
            if (st.lastTo && target[st.lastTo] === rec.char && !used[st.lastTo] && rec.char === (st.movedChar || rec.char)) {
              used[st.lastTo] = rec;
              sc.tweens.add({ targets: rec.sprite, x: sqToXY(st.lastTo).x, y: sqToXY(st.lastTo).y, duration: 180, ease: "Sine.easeOut" });
            } else {
              sc.tweens.add({ targets: rec.sprite, alpha: 0, duration: 120, onComplete: (function (sp) { return function () { sp.destroy(); }; })(rec.sprite) });
            }
          }
        });
        // ساخت مهره‌های تازه
        Object.keys(target).forEach(function (sq) {
          if (used[sq]) return;
          var tex = PIECE_TEX[target[sq]];
          var xy = sqToXY(sq);
          var sp = sc.add.image(xy.x, xy.y, tex).setDisplaySize(CELL * 0.92, CELL * 0.92).setDepth(2);
          used[sq] = { char: target[sq], sprite: sp };
        });
        state.sprites = used;

        // نشانگرها
        sc.hlLayer.list.forEach(function (o) { sc.tweens.killTweensOf(o); });
        sc.hlLayer.removeAll(true);
        if (st.lastFrom && st.lastTo) {
          sc.hlLayer.add(sc.add.image(sqToXY(st.lastFrom).x, sqToXY(st.lastFrom).y, "hl_last").setAlpha(0.8));
          sc.hlLayer.add(sc.add.image(sqToXY(st.lastTo).x, sqToXY(st.lastTo).y, "hl_last").setAlpha(0.8));
        }
        if (st.selected) sc.hlLayer.add(sc.add.image(sqToXY(st.selected).x, sqToXY(st.selected).y, "hl_sel"));
        (st.legal || []).forEach(function (u) {
          var to = u.slice(2, 4);
          var isCap = st.legalCapture && st.legalCapture.indexOf(to) >= 0;
          var img = sc.add.image(sqToXY(to).x, sqToXY(to).y, isCap ? "hl_capture" : "hl_move");
          sc.hlLayer.add(img);
        });
        if (st.checkSq) {
          var chk = sc.add.image(sqToXY(st.checkSq).x, sqToXY(st.checkSq).y, "hl_check");
          sc.hlLayer.add(chk);
          sc.tweens.add({ targets: chk, alpha: 0.35, duration: 480, yoyo: true, repeat: -1 });
        }
      }

      return {
        update: function (st) {
          // صبر تا آماده‌شدن صحنه
          var tryRender = function (n) {
            var sc = game.scene.getScene("board");
            if (sc && sc.boardLayer && sc.textures.exists("sq_light")) render(st);
            else if (n < 60) setTimeout(function () { tryRender(n + 1); }, 100);
          };
          tryRender(0);
        },
        refresh: function () {
          // پس از نمایان‌شدن بستهٔ مسابقه، اندازهٔ بوم باید تازه شود
          try { game.scale.refresh(); } catch (e) {}
        },
      };
    },
  };

  window.VivaAudio = Audio;
})();
