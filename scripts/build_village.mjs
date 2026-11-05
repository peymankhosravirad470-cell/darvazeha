/**
 * Build the «دهکدهٔ استراتژیک» bundle (game/village/).
 * Input:  src-village/*.ts  →  Output: game/village/app.js (single minified bundle)
 * Cache-stamps game/village/index.html (?v=…) so Bale's WebView never serves a stale bundle.
 * Run: bun scripts/build_village.mjs
 */
const result = await Bun.build({
  entrypoints: ["src-village/main.ts"],
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
await Bun.write("game/village/app.js", out);

const stamp = new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "");
const htmlPath = "game/village/index.html";
let html = await Bun.file(htmlPath).text();
html = html.replace(/app\.js\?v=[A-Za-z0-9]+/, `app.js?v=${stamp}`);
await Bun.write(htmlPath, html);

const kb = (await Bun.file("game/village/app.js").size) / 1024;
console.log(`✔ game/village/app.js built (${kb.toFixed(0)} KB, minified) — cache stamp ${stamp}`);
