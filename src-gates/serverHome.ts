/**
 * 77 Lands — پایگاه خانگی روی حساب بازیکن (server-persisted home base).
 *
 * قواعد (طبق دستور، لایهٔ دوم ماندگاری سروری):
 * - سرور مرجع است: GET /api/v1/players/me/home پایگاهِ حسابِ احراز‌شده را می‌دهد.
 * - ثبت اولین انتخاب: PUT /api/v1/players/me/home — فقط وقتی پایگاه خالی باشد؛
 *   سرور انتخاب قبلی را هرگز جایگزین نمی‌کند (اتمیک، مالکیت با توکن).
 * - هیچ اطلاعات محلی پایگاه ثبت‌شدهٔ سرور را جایگزین نمی‌کند؛ localStorage
 *   فقط با مقدار سرور هماهنگ می‌شود یا در نبود سرور به‌عنوان fallback موقت
 *   استفاده می‌شود (مهاجرت یک‌باره محلی → سرور بعد از بازگشت اتصال انجام می‌شود).
 * - احراز هویت مثل کیف پول سروری: initData بله → POST /api/v1/auth/bale → Bearer.
 *   بیرون از بله / بدون شبکه، وضعیت unreachable است و رفتار محلی حفظ می‌شود.
 */

import { REALMS } from "./data";

export interface HomeBase { r: string; l: string }

export type ServerHomeState =
  | { kind: "home"; home: HomeBase }   // سرور پاسخ داد و پایگاه ثبت‌شده دارد
  | { kind: "empty" }                  // سرور پاسخ داد؛ پایگاهی ثبت نشده
  | { kind: "unreachable" };           // بدون احراز هویت/شبکه — fallback محلی

const AUTH_TIMEOUT_MS = 3500;
const HOME_TIMEOUT_MS = 3500;

let cachedToken: string | null = null;

/** تبدیل پاسخ سرور ({realm, land}) به شکل محلی ({r, l}) با اعتبارسنجی دادهٔ رسمی ۷×۱۱. */
function parseServerHome(raw: unknown): HomeBase | null {
  if (!raw || typeof raw !== "object") return null;
  const h = raw as { realm?: unknown; land?: unknown };
  if (typeof h.realm !== "string" || typeof h.land !== "string") return null;
  const home: HomeBase = { r: h.realm, l: h.land };
  return isValidHomeShape(home) ? home : null;
}

/** مقدار معتبر پایگاه از نگاه دادهٔ رسمی ۷×۱۱ (امپراتوری و سرزمین هر دو واقعی باشند). */
export function isValidHomeShape(home: unknown): home is HomeBase {
  if (!home || typeof home !== "object") return false;
  const h = home as Partial<HomeBase>;
  if (typeof h.r !== "string" || typeof h.l !== "string") return false;
  return REALMS.some((realm) => realm.id === h.r && realm.lands.some((l) => l.id === h.l));
}

/** هماهنگ‌سازی localStorage با مقدار مرجع سرور (هرگز برعکس نمی‌شود). */
export function syncLocalHome(home: HomeBase): void {
  try { localStorage.setItem("lands.home", JSON.stringify({ r: home.r, l: home.l })); } catch { /* private mode */ }
}

function baleInitData(): string {
  // Reading initData outside the Bale WebView can throw (SDK getter) — guard it.
  try {
    const w = window as unknown as {
      Bale?: { WebApp?: { initData?: string } };
    };
    return w.Bale?.WebApp?.initData || "";
  } catch {
    return "";
  }
}

/** توکن Bearer از زنجیرهٔ واقعی احراز بله؛ بیرون از بله → null. */
async function authenticate(): Promise<string | null> {
  if (cachedToken) return cachedToken;
  if (location.protocol !== "http:" && location.protocol !== "https:") return null;
  const initData = baleInitData();
  if (!initData) return null;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), AUTH_TIMEOUT_MS);
  try {
    const res = await fetch("/api/v1/auth/bale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ init_data: initData }),
      cache: "no-store",
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const token = (await res.json()).access_token as string | undefined;
    if (!token) return null;
    cachedToken = token;
    return token;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

/** وضعیت پایگاه از مرجع سرور — بدون هیچ کش محلی. */
export async function fetchServerHome(): Promise<ServerHomeState> {
  const token = await authenticate();
  if (!token) return { kind: "unreachable" };
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), HOME_TIMEOUT_MS);
  try {
    const res = await fetch("/api/v1/players/me/home", {
      headers: { Authorization: "Bearer " + token },
      cache: "no-store",
      signal: controller.signal,
    });
    if (!res.ok) return { kind: "unreachable" };
    const body = (await res.json()) as { home?: unknown };
    if (body.home === null || body.home === undefined) return { kind: "empty" };
    const home = parseServerHome(body.home);
    if (!home) return { kind: "empty" };
    return { kind: "home", home };
  } catch {
    return { kind: "unreachable" };
  } finally {
    window.clearTimeout(timer);
  }
}

export type RegisterResult = "created" | "kept-existing" | "failed";

/** مهاجرت/ثبت پایگاه محلی روی سرور — فقط سرور تصمیم می‌گیرد (خلأ یا تعارض). */
export async function registerServerHome(home: HomeBase): Promise<RegisterResult> {
  const token = await authenticate();
  if (!token) return "failed";
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), HOME_TIMEOUT_MS);
  try {
    const res = await fetch("/api/v1/players/me/home", {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      body: JSON.stringify({ realm: home.r, land: home.l }),
      cache: "no-store",
      signal: controller.signal,
    });
    if (res.status === 201) return "created";
    if (res.status === 409) return "kept-existing"; // سرور صاحب انتخاب است — محلی نمی‌برد
    return "failed";
  } catch {
    return "failed";
  } finally {
    window.clearTimeout(timer);
  }
}
