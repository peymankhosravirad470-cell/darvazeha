/**
 * Build the «هفت دروازهٔ رسمی» cinematic bundle (game/gates/).
 *
 * Input:  src-gates/*.ts (engine + controller)
 * Output: game/gates/app.js  — single minified bundle (three.js included)
 *
 * Cache strategy: the index.html script tag gets a build stamp (?v=…) so
 * Bale's WebView never serves a stale bundle. The official flag textures
 * (game/gates/assets/flags/*.webp) and the Vazirmatn fonts are committed as
 * cacheable files.
 * Run:  bun scripts/build_gates.mjs
 */

const result = await Bun.build({
  entrypoints: ["src-gates/main.ts"],
  target: "browser",
  minify: true,
  define: { "process.env.NODE_ENV": '"production"' },
});

if (!result.success) {
  console.error("build failed:");
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

const out = result.outputs[0];
await Bun.write("game/gates/app.js", out);

// Stamp the script URL (defeats stale WebView cache).
const stamp = new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "");
const htmlPath = "game/gates/index.html";
let html = await Bun.file(htmlPath).text();
html = html.replace(/app\.js\?v=[A-Za-z0-9]+/, `app.js?v=${stamp}`);
await Bun.write(htmlPath, html);

const kb = (await Bun.file("game/gates/app.js").size) / 1024;
console.log(`✔ game/gates/app.js built (${kb.toFixed(0)} KB, minified) — cache stamp ${stamp}`);
