/**
 * 77 Lands — server wallet (READ-ONLY, real backend only).
 *
 * Rules (per project directives):
 * - The balance is fetched ONLY from the real backend:
 *     POST /api/v1/auth/bale   { init_data }  → access_token
 *     GET  /api/v1/players/me  (Bearer)       → player.token_balance
 * - No local balance, no localStorage wallet, no demo coins, no minting.
 *   There is no purchase and no manual increase of any kind.
 * - If Bale identity or the server is unavailable → status "offline" and the
 *   UI must show the disconnected state (never a number).
 */

export type WalletStatus = "connecting" | "online" | "offline";

export interface WalletView {
  status: WalletStatus;
  balance: number | null;
  fetchedAt: number;
  note: string;
}

type Listener = (w: WalletView) => void;

let state: WalletView = { status: "connecting", balance: null, fetchedAt: 0, note: "" };
const listeners = new Set<Listener>();

function emit(): void {
  listeners.forEach((l) => l(state));
}

function set(p: Partial<WalletView>): void {
  state = { ...state, ...p };
  emit();
}

export const serverWallet = {
  get(): WalletView {
    return state;
  },
  subscribe(l: Listener): () => void {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },

  /** Called once on boot. Safe to call from any environment. Never stays "connecting". */
  async init(): Promise<void> {
    const isHttp = location.protocol === "http:" || location.protocol === "https:";

    // Reading initData outside the Bale WebView can throw (SDK getter) — guard it.
    let initData = "";
    try {
      const w = window as unknown as {
        Bale?: { WebApp?: { initData?: string; ready?: () => void; expand?: () => void } };
      };
      try { w.Bale?.WebApp?.ready?.(); } catch { /* noop */ }
      try { w.Bale?.WebApp?.expand?.(); } catch { /* noop */ }
      initData = w.Bale?.WebApp?.initData || "";
    } catch {
      initData = "";
    }

    try {
      if (!isHttp) {
        set({ status: "offline", note: "اجرای آفلاین/محلی — موجودی رسمی فقط داخل مینی‌اپ بله خوانده می‌شود." });
        return;
      }
      if (!initData) {
        set({ status: "offline", note: "دادهٔ ورود بله (initData) در دسترس نیست؛ موجودی رسمی فقط با ورود معتبر از داخل بله خوانده می‌شود." });
        return;
      }

      set({ status: "connecting", note: "" });
      const r1 = await fetch("/api/v1/auth/bale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ init_data: initData }),
        cache: "no-store",
      });
      if (!r1.ok) throw new Error("auth " + r1.status);
      const token = (await r1.json()).access_token as string;

      const r2 = await fetch("/api/v1/players/me", {
        headers: { Authorization: "Bearer " + token },
        cache: "no-store",
      });
      if (!r2.ok) throw new Error("me " + r2.status);
      const me = await r2.json();
      const bal = Number(me && me.player && me.player.token_balance);
      if (!Number.isFinite(bal)) throw new Error("bad balance");

      set({
        status: "online",
        balance: bal,
        fetchedAt: Date.now(),
        note: "خوانده‌شده از Backend و دفترکل معتبر",
      });
    } catch {
      set({
        status: "offline",
        note: "دریافت موجودی از سرور ناموفق بود؛ هیچ عددی به‌جای موجودی واقعی نمایش داده نمی‌شود.",
      });
    }
  },

  refresh(): Promise<void> {
    return serverWallet.init();
  },
};
