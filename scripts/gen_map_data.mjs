/**
 * Generate game/map/data.json from the OFFICIAL realm/land data (src-gates/data.ts).
 * The world map must show exactly the approved 7 empires × 11 lands — no new
 * names are invented here; this is a faithful export of the official dataset.
 * Run:  bun scripts/gen_map_data.mjs
 */
import { mkdirSync } from "node:fs";
import { REALMS } from "../src-gates/data.ts";

mkdirSync("game/map", { recursive: true });

const data = {
  generatedFrom: "src-gates/data.ts (official)",
  realms: REALMS.map((r) => ({
    id: r.id,
    fa: r.fa,
    en: r.en,
    color: r.color,
    accent: r.accent,
    motto: r.motto,
    lore: r.lore,
    unlocked: r.unlocked,
    lands: r.lands.map((l) => ({ id: l.id, fa: l.fa, desc: l.desc })),
  })),
};

await Bun.write("game/map/data.json", JSON.stringify(data, null, 1));
console.log(
  `✔ game/map/data.json — ${data.realms.length} realms × ${data.realms[0].lands.length} lands`,
);
