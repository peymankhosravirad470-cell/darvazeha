#!/usr/bin/env python3
"""وصلهٔ مرحلهٔ ۲ — افزودن صفحهٔ جهان تارگون به src/template.html + src/css/styles.css

Idempotent: اجرای مکرر تغییری اعمال نمی‌کند. اگر لنگرها پیدا نشوند، بدون
تغییر و با کد خطای غیرصفر خارج می‌شود تا در پایپ‌لاین کامیت نشود."""
import pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
TPL = ROOT / 'src' / 'template.html'
CSS = ROOT / 'src' / 'css' / 'styles.css'

HTML_BLOCK = """<!-- ═══════════ جهان تارگون — نقشهٔ مادر ایزومتریک (مرحلهٔ ۲) ═══════════ -->
<div id="screen-targon" class="view">
  <canvas id="t-iso"></canvas>
  <div class="hud">
    <div id="hud-top">
      <button class="chip" id="btn-targon-back">↩ سرزمین‌ها</button>
      <span class="chip title" id="t-area-name"><i class="dot"></i> تارگون</span>
      <span class="spacer"></span>
      <button class="chip" id="t-wallet-chip" title="کیف پول">💰 —</button>
    </div>
    <div id="t-toasts"></div>
    <div class="t-zoom">
      <button class="tool-btn t-zoom-btn" id="t-zoom-in">＋</button>
      <span class="chip" id="t-zoom-label">۱۰۰٪</span>
      <button class="tool-btn t-zoom-btn" id="t-zoom-out">－</button>
    </div>
    <div class="hud-col">
      <button class="tool-btn" id="btn-t-areas">🗺️<small>نواحی</small></button>
      <button class="tool-btn" id="btn-t-missions">📜<small>مأموریت</small></button>
      <button class="tool-btn" id="btn-t-wallet">💰<small>کیف پول</small></button>
    </div>
  </div>
</div>

<div class="sheet" id="sheet-wareas">
  <div class="sheet-head"><h2>🗺️ یازده ناحیهٔ تارگون</h2><button class="sheet-close" data-close>✕</button></div>
  <div class="sheet-body" id="wareas-body"></div>
</div>

<div class="sheet" id="sheet-wmissions">
  <div class="sheet-head"><h2>📜 مأموریت‌های آغازین تارگون</h2><button class="sheet-close" data-close>✕</button></div>
  <div class="sheet-body" id="wmissions-body"></div>
</div>

<div class="sheet" id="sheet-wallet">
  <div class="sheet-head"><h2>💰 کیف پول مسافر</h2><button class="sheet-close" data-close>✕</button></div>
  <div class="sheet-body">
    <div id="wallet-body"><p class="wt-state">برای دریافت موجودی رسمی، برگه را باز نگه دارید…</p></div>
    <button class="wt-refresh" id="btn-wallet-refresh">↻ به‌روزرسانی موجودی رسمی</button>
    <p class="wt-src" id="wallet-footnote"></p>
  </div>
</div>

"""

CSS_BLOCK = """
/* ═══════════ جهان تارگون — نقشهٔ مادر ایزومتریک (مرحلهٔ ۲) ═══════════ */
#screen-targon{position:relative;overflow:hidden;background:#0b2a17}
#t-iso{position:absolute;inset:0;width:100%;height:100%;touch-action:none;display:block}
#t-area-name{font-size:.8rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:46vw}
#t-wallet-chip{cursor:pointer;font-weight:700}
#t-toasts{position:absolute;top:64px;inset-inline:0;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none;z-index:9}
.t-zoom{position:absolute;bottom:calc(18px + env(safe-area-inset-bottom));inset-inline-start:12px;
  display:flex;flex-direction:column;gap:6px;align-items:center}
.t-zoom-btn{width:46px;height:46px;border-radius:16px;font-size:1.15rem}
#t-zoom-label{font-size:.62rem;padding:4px 10px}
.targon-world-cta{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;
  padding:16px;border-radius:18px;margin-top:14px;cursor:pointer;
  background:linear-gradient(120deg,rgba(212,69,44,.28),rgba(255,216,111,.14));
  border:1px solid rgba(255,216,111,.55);box-shadow:0 10px 34px rgba(212,69,44,.22);
  animation:domIn .35s ease both}
.targon-world-cta:active{transform:scale(.985)}
.targon-world-cta b{color:var(--gold);font-size:1rem}
.targon-world-cta small{color:var(--muted);font-size:.66rem}
/* برگه‌های جهان */
.w-area-row,.w-mission{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:14px;
  background:var(--glass-bg);border:1px solid var(--glass-stroke);margin-bottom:8px}
.w-area-row .wa-ico,.w-mission .wm-ico{width:36px;height:36px;border-radius:12px;font-size:1.05rem;
  display:flex;align-items:center;justify-content:center;background:rgba(255,216,111,.12)}
.wa-names,.wm-names{flex:1;display:flex;flex-direction:column;line-height:1.9}
.wa-names b,.wm-names b{font-size:.86rem}
.wa-names small,.wm-names small,.wm-prog{font-size:.62rem;color:var(--muted)}
.wm-prog{color:var(--neon-b)}
.w-mission.done{border-color:rgba(125,252,180,.4)}
.w-mission.done .wm-prog{color:#7dfcb4}
.wa-go{padding:7px 16px;border-radius:999px;font-size:.72rem;font-weight:700;
  background:rgba(56,198,255,.14);border:1px solid rgba(56,198,255,.5);color:#8fe0ff}
.wa-go:active{transform:scale(.94)}
.wm-note{font-size:.64rem;color:var(--muted);line-height:2;margin-bottom:10px}
.wt-state{font-size:.8rem;line-height:2.1}
.wt-err{color:#ffb08c}
.wt-balance{display:flex;align-items:baseline;gap:10px;margin:6px 0}
.wt-num{font-size:2rem;font-weight:800;color:var(--gold)}
.wt-unit{font-size:.72rem;color:var(--muted)}
.wt-ok{font-size:.7rem;color:#7dfcb4}
.wt-src{font-size:.62rem;color:var(--muted);line-height:2}
.wt-refresh{width:100%;padding:12px;border-radius:14px;font-size:.8rem;font-weight:700;margin:8px 0;
  background:rgba(255,216,111,.12);border:1px solid rgba(255,216,111,.5);color:var(--gold)}
.wt-refresh:active{transform:scale(.985)}
"""

def main():
    ok = True
    tpl = TPL.read_text(encoding='utf-8')
    if 'id="screen-targon"' in tpl:
        print('template: قبلاً وصله خورده — رد شد')
    else:
        anchor = '<div id="timing">'
        if anchor not in tpl:
            print('FATAL: لنگر template پیدا نشد'); ok = False
        else:
            tpl = tpl.replace(anchor, HTML_BLOCK + anchor, 1)
            TPL.write_text(tpl, encoding='utf-8')
            print('template: صفحهٔ جهان تارگون + ۳ برگه اضافه شد')
    css = CSS.read_text(encoding='utf-8')
    if 'جهان تارگون — نقشهٔ مادر ایزومتریک' in css:
        print('css: قبلاً وصله خورده — رد شد')
    else:
        CSS.write_text(css + CSS_BLOCK, encoding='utf-8')
        print('css: استایل جهان تارگون اضافه شد')
    sys.exit(0 if ok else 1)

if __name__ == '__main__':
    main()
