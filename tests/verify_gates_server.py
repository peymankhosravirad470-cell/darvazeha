#!/usr/bin/env python3
"""
End-to-end integration: real FastAPI backend + cinematic gates page +
signed Bale initData. Proves the full wallet chain:

  Bale initData (HMAC-signed) → POST /api/v1/auth/bale → Bearer session →
  GET /api/v1/players/me → player.token_balance → honest HUD.

The bot token here is a THROWAWAY test value used to sign initData locally;
no production secret is ever needed or loaded.
"""
import base64
import hashlib
import hmac
import http.server
import json
import os
import pathlib
import socketserver
import subprocess
import sys
import threading
import time
import urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent.parent
BACKEND = ROOT / "backend"
SHOTS = ROOT / "download" / "gates-screens"
SHOTS.mkdir(parents=True, exist_ok=True)

PORT_HTTP = 8141        # uvicorn (real backend)
TEST_TOKEN = "777001:VERIFY_GATES_TEST_TOKEN_ONLY"
SESSION_SECRET = "verify-gates-session-secret-0123456789abcdef0123456789"
results = []


def record(name, ok, note=""):
    results.append((name, bool(ok), note))
    print(f"{'PASS' if ok else 'FAIL'} | {name}" + (f" | {note}" if note else ""))


def sign_init_data(bot_token: str, user_id: int, first_name: str) -> str:
    auth_date = str(int(time.time()))
    user = json.dumps({"id": user_id, "first_name": first_name}, ensure_ascii=False)
    params = {"auth_date": auth_date, "query_id": "AAF0", "user": user}
    check = "\n".join(f"{k}={v}" for k, v in sorted(params.items()))
    secret = hmac.new(bot_token.encode(), b"WebAppData", hashlib.sha256).digest()
    h = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
    params["hash"] = h
    return urllib.parse.urlencode(params)


def prepare_db():
    """Create the schema for the local run (alembic owns real deployments)."""
    sys.path.insert(0, str(BACKEND))
    os.environ["DATABASE_URL"] = f"sqlite:///{BACKEND / 'verify_gates.db'}"
    from app.core.database import get_engine
    from app.models import Base
    Base.metadata.create_all(get_engine())


def start_backend():
    env = dict(os.environ)
    env.update({
        "DATABASE_URL": f"sqlite:///{BACKEND / 'verify_gates.db'}",
        "BALE_BOT_TOKEN": TEST_TOKEN,
        "SESSION_SECRET": SESSION_SECRET,
        "BALE_WEBHOOK_SECRET": SESSION_SECRET + "-webhook",
        "APP_ENV": "development",
        "PORT": str(PORT_HTTP),
    })
    proc = subprocess.Popen(
        [sys.executable, "-m", "uvicorn", "app.main:app", "--host", "127.0.0.1",
         "--port", str(PORT_HTTP), "--log-level", "warning"],
        cwd=BACKEND, env=env,
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    import urllib.request
    for _ in range(60):
        try:
            with urllib.request.urlopen(f"http://127.0.0.1:{PORT_HTTP}/health", timeout=2) as r:
                if b"ok" in r.read():
                    return proc
        except Exception:
            pass
        time.sleep(0.5)
    raise RuntimeError("backend did not become healthy")


def main():
    db = BACKEND / "verify_gates.db"
    if db.exists():
        db.unlink()
    prepare_db()
    proc = start_backend()
    try:
        base = f"http://127.0.0.1:{PORT_HTTP}"

        # raw API sanity (outside the browser)
        import urllib.request
        init_data = sign_init_data(TEST_TOKEN, 86001, "بازیکن آزمون")
        req = urllib.request.Request(
            base + "/api/v1/auth/bale",
            data=json.dumps({"init_data": init_data}).encode(),
            headers={"Content-Type": "application/json"}, method="POST")
        with urllib.request.urlopen(req, timeout=10) as r:
            auth = json.loads(r.read())
        record("A1. ورود واقعی بله (initData امضاشده) روی Backend", bool(auth.get("access_token")))
        token = auth["access_token"]
        req = urllib.request.Request(base + "/api/v1/players/me",
                                     headers={"Authorization": "Bearer " + token})
        with urllib.request.urlopen(req, timeout=10) as r:
            me = json.loads(r.read())
        bal0 = me["player"]["token_balance"]
        record("A2. موجودی واقعی از دفترکل Backend", bal0 == 0, f"token_balance={bal0}")

        # browser end-to-end: page + SDK-mocked initData (signed) → wallet online
        from playwright.sync_api import sync_playwright
        init_js = (
            "window.__E2E_INIT = " + json.dumps(init_data) + ";\n"
            "const __mockBale = { WebApp: { get initData(){ return window.__E2E_INIT; }, "
            "ready(){}, expand(){} } };\n"
            # non-writable so the real SDK script (tapi.bale.ai/miniapp.js) cannot
            # overwrite the mock after this init script runs
            "Object.defineProperty(window, 'Bale', { value: __mockBale, writable: false, configurable: false });"
        )
        with sync_playwright() as p:
            browser = p.chromium.launch(args=["--use-gl=swiftshader", "--enable-unsafe-swiftshader"])
            ctx = browser.new_context(viewport={"width": 390, "height": 844},
                                      device_scale_factor=3, is_mobile=True, has_touch=True)
            ctx.add_init_script(init_js)
            page = ctx.new_page()
            page.goto(base + "/game/gates/index.html?world=1", wait_until="networkidle")
            time.sleep(2.5)
            tw = page.locator("#title-wallet").inner_text()
            record("B1. صفحهٔ بازی: کیف پول متصل به Backend واقعی", "متصل" in tw, tw.strip()[:46])
            page.locator("#btn-enter-game").tap()
            page.wait_for_selector("#gates-screen.active", timeout=30000)
            page.locator("#gates-enter").tap()
            page.wait_for_selector("#lands-screen.active", timeout=15000)
            chip = page.locator("#lands-screen .wallet-chip").inner_text().strip()
            record("B2. چیپ کیف پول در فهرست سرزمین‌ها = موجودی واقعی سرور", chip == "۰", chip)
            page.screenshot(path=str(SHOTS / "wallet-online.png"))

            # a DIFFERENT signature must NOT be authorized (server-side security)
            bad = sign_init_data(TEST_TOKEN, 86002, "هکر")[:-2] + "zz"
            try:
                req = urllib.request.Request(
                    base + "/api/v1/auth/bale",
                    data=json.dumps({"init_data": bad}).encode(),
                    headers={"Content-Type": "application/json"}, method="POST")
                urllib.request.urlopen(req, timeout=10)
                record("B3. امضای دستکاری‌شده رد شد", False, "401 expected")
            except urllib.error.HTTPError as e:
                record("B3. امضای دستکاری‌شده رد شد", e.code == 401, f"HTTP {e.code}")

            browser.close()
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=10)
        except Exception:
            proc.kill()

    passed = sum(1 for _, ok, _ in results if ok)
    print(f"\n=== جمع‌بندی یکپارچگی هفت دروازه + Backend: {passed}/{len(results)} PASS ===")
    return 0 if passed == len(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
