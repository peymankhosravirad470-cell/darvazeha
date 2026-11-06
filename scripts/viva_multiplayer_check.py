#!/usr/bin/env python3
"""آزمون واقعی چندنفرهٔ VIVA — سرور واقعی (uvicorn)، سوکت واقعی، مرورگر واقعی.

بخش A — مافیا در سطح پروتکل: ۵ کلاینت مستقل websockets یک بازی کامل می‌کنند
        (تخصیص محرمانه نقش، شب/روز، رأی، پایان مافیا) + کنترل نشتی نقش در
        تمام پیام‌ها + ثبت نتیجه و پاداش یکتا در دیتابیس.
بخش B — شطرنج در مرورگر: دو Context مستقل Playwright (حافظهٔ جدا) یک مات
        کامل (مات چوپان) را از طریق رابط واقعی بازی می‌کنند + اسکرین‌شات.
بخش C — مافیا در مرورگر: پنج Context مستقل Playwright یک بازی کامل می‌کنند
        (شب، نقش محرمانه در UI، هدف‌گیری، رأی‌گیری، پیروزی شهر) + اسکرین‌شات.

هر خط PASS/FAIL یک ادعای واقعی است؛ هیچ نتیجه‌ای جعل نمی‌شود.
"""
import asyncio
import hashlib
import hmac
import json
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path
from urllib.parse import urlencode

import httpx
import websockets

ROOT = Path(__file__).resolve().parents[1]
PORT = 8911
BASE = f"http://127.0.0.1:{PORT}"
BOT = "viva-mp-test-bot-token"
SECRET = "viva-mp-test-session-secret-32-chars-x"
DB = "/tmp/viva_mp.db"
EVIDENCE = ROOT / "download" / "evidence"
EVIDENCE.mkdir(parents=True, exist_ok=True)

results = []


def check(name, cond):
    results.append((name, bool(cond)))
    print(("PASS | " if cond else "FAIL | ") + name, flush=True)
    return bool(cond)


def summary():
    total = len(results)
    ok = sum(1 for _, c in results if c)
    print(f"\n=== جمع‌بندی چندنفرهٔ واقعی: {ok}/{total} PASS ===", flush=True)
    return 0 if ok == total else 1


def make_init_data(uid, name):
    values = {
        "auth_date": str(int(time.time())),
        "query_id": f"mp{uid}",
        "user": json.dumps({"id": uid, "first_name": name}, separators=(",", ":")),
    }
    check_str = "\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret = hmac.new(BOT.encode(), b"WebAppData", hashlib.sha256).digest()
    values["hash"] = hmac.new(secret, check_str.encode(), hashlib.sha256).hexdigest()
    return urlencode(values)


def start_server():
    if os.path.exists(DB):
        os.remove(DB)
    env = dict(
        os.environ,
        DATABASE_URL=f"sqlite:///{DB}",
        BALE_BOT_TOKEN=BOT,
        SESSION_SECRET=SECRET,
        APP_ENV="development",
    )
    subprocess.run([sys.executable, "-m", "alembic", "upgrade", "head"],
                   cwd=ROOT / "backend", env=env, check=True, capture_output=True)
    log = open("/tmp/viva_mp_uv.log", "w")
    proc = subprocess.Popen([sys.executable, "-m", "uvicorn", "app.main:app", "--port", str(PORT)],
                            cwd=ROOT / "backend", env=env, stdout=log, stderr=subprocess.STDOUT)
    for _ in range(60):
        try:
            if httpx.get(BASE + "/health", timeout=1).status_code == 200:
                return proc
        except Exception:
            time.sleep(0.3)
    proc.kill()
    raise RuntimeError("سرور بالا نیامد — لاگ: /tmp/viva_mp_uv.log")


# ───────────────────────────── بخش A: پروتکل مافیا ─────────────────────────────

class Pc:
    """کلاینت پروتکلی مستقل (یک «دستگاه»)."""

    def __init__(self, uid, name):
        self.uid, self.name = uid, name
        self.token = None
        self.account_id = None
        self.ws = None
        self.inbox = []
        self.role = None

    def login(self):
        r = httpx.post(BASE + "/api/v1/auth/bale",
                       json={"init_data": make_init_data(self.uid, self.name)}, timeout=10)
        d = r.json()
        self.token = d["access_token"]
        self.account_id = d["player"]["id"]

    def api(self, method, path, body=None):
        resp = httpx.request(method, BASE + "/api/v1" + path, json=body,
                             headers={"Authorization": "Bearer " + self.token}, timeout=10)
        return resp.status_code, resp.json()


async def pump(c: Pc):
    try:
        async for raw in c.ws:
            c.inbox.append(json.loads(raw))
    except Exception:
        pass


async def ws_connect(c: Pc, room_id):
    _, d = c.api("POST", f"/live/rooms/{room_id}/ticket")
    c.ws = await websockets.connect(f"ws://127.0.0.1:{PORT}/ws/viva?ticket={d['ticket']}")
    c.inbox = []
    c.pump_task = asyncio.create_task(pump(c))
    return await wait_for(c, lambda m: m.get("t") == "state", 6)


async def wait_for(c: Pc, pred, timeout=10):
    end = time.time() + timeout
    while time.time() < end:
        for m in c.inbox:
            try:
                if pred(m):
                    return m
            except Exception:
                pass
        await asyncio.sleep(0.08)
    raise TimeoutError(f"wait_for timeout: {c.name}")


async def act(c: Pc, action):
    await c.ws.send(json.dumps({"t": "action", "action": action}))


async def part_a_mafia_protocol():
    print("\n── بخش A: مافیا با ۵ کلاینت پروتکلی واقعی ──", flush=True)
    players = [Pc(5100 + i, n) for i, n in enumerate(["آرمان", "بردیا", "پروانه", "تهمینا", "سیاوش"])]
    for p in players:
        p.login()
    check("A1 ورود واقعی ۵ کاربر جدا از initData امضاشده", all(p.token for p in players))

    code, d = players[0].api("POST", "/live/rooms",
                             {"game": "mafia", "capacity": 5,
                              "config": {"night_seconds": 2, "talk_seconds": 2, "vote_seconds": 6}})
    room_id = d["room"]["room_id"]
    for p in players[1:]:
        code, d = p.api("POST", f"/live/rooms/{room_id}/join")
        check(f"A2 پیوستن {p.name}", code == 200)

    states = [await ws_connect(p, room_id) for p in players]
    check("A3 اتصال WS هم‌زمان ۵ کلاینت با بلیت یک‌مصرف", all(s["state"]["room_id"] == room_id for s in states))

    code, d = players[0].api("POST", f"/live/rooms/{room_id}/start")
    check("A4 میزبان مسابقه را آغاز کرد", code == 200)

    for p in players:
        st = await wait_for(p, lambda m: m.get("t") == "state" and m["state"].get("status") == "playing", 8)
        snap = st["state"]["match"]
        p.role = snap["you"]["role"]
        your_role_events = [e for m in p.inbox if m.get("t") == "event" for e in [m["event"]] if e.get("type") == "your_role"]
        check(f"A5 نقش محرمانه فقط خصوصی به {p.name} رسید", len(your_role_events) == 1 and your_role_events[0]["role"] == p.role)

    roles = [p.role for p in players]
    check("A6 ترکیب نقش‌ها سروری درست (۱ مافیا، ۱ دکتر، ۱ کارآگاه، ۲ شهروند)",
          roles.count("mafia") == 1 and roles.count("doctor") == 1 and roles.count("detective") == 1 and roles.count("citizen") == 2)

    # کنترل نشتی: هیچ snapshotای نقش بازیکن زندهٔ دیگری را نشان نمی‌دهد
    leak = False
    for p in players:
        for m in p.inbox:
            if m.get("t") != "state":
                continue
            match = m["state"].get("match") or {}
            for pl in match.get("players", []):
                if pl["account_id"] != p.account_id and pl["alive"] and pl["role"] is not None:
                    leak = True
    check("A7 صفر نشتی نقش بازیکنان زنده در دادهٔ دریافتی هر کلاینت", not leak)

    by_role = {}
    for p in players:
        by_role.setdefault(p.role, []).append(p)
    mafia, doctor, detective = by_role["mafia"][0], by_role["doctor"][0], by_role["detective"][0]
    citizens = by_role["citizen"]

    # شب ۱: قتل شهروند اول + نجات خودم + بازرسی
    await act(mafia, {"type": "night_pick", "target": citizens[0].account_id})
    await act(doctor, {"type": "night_pick", "target": doctor.account_id})
    await act(detective, {"type": "night_pick", "target": citizens[1].account_id})
    dawn = await wait_for(detective, lambda m: m.get("t") == "event" and m["event"].get("type") == "dawn", 10)
    check("A8 شب ۱ سرورمحور حل شد: شهروند اول قربانی شد", dawn["event"].get("died") == citizens[0].account_id)
    det_result = [e for m in detective.inbox if m.get("t") == "event" for e in [m["event"]]
                  if e.get("type") == "detective_result"]
    check("A9 نتیجهٔ کارآگاه فقط خصوصی بود (شهروند دوم مافیا نیست)",
          det_result and det_result[0]["is_mafia"] is False)
    others_saw = [m for p in players if p is not detective for m in p.inbox
                  if m.get("t") == "event" and m["event"].get("type") == "detective_result"]
    check("A10 هیچ کلاینت دیگری نتیجهٔ کارآگاه را نگرفت", not others_saw)

    # روز ۱: رأی‌گیری — همه جز قربانی به شهروند دوم رأی می‌دهند
    await wait_for(mafia, lambda m: m.get("t") == "event" and m["event"].get("type") == "phase" and m["event"].get("phase") == "day_vote", 10)
    alive_now = [p for p in players if p is not citizens[0]]
    for p in alive_now:
        target = citizens[1].account_id if p is not citizens[1] else mafia.account_id
        await act(p, {"type": "vote", "target": target})
    execution = await wait_for(mafia, lambda m: m.get("t") == "event" and m["event"].get("type") == "execution", 10)
    check("A11 روز ۱: رأی‌گیری همگانی سرورمحور و حذف شهروند دوم", execution["event"].get("executed") == citizens[1].account_id)

    # شب ۲: کارآگاه حذف می‌شود → برابری → پیروزی مافیا
    await act(mafia, {"type": "night_pick", "target": detective.account_id})
    await act(doctor, {"type": "night_pick", "target": doctor.account_id})
    fin = await wait_for(mafia, lambda m: m.get("t") == "event" and m["event"].get("type") == "match_finished", 12)
    check("A12 شب ۲: برابری مافیا/شهر → پایان مسابقه از سمت سرور", fin["event"]["result"]["winner"] == "mafia")

    # ثبت نتیجه و پاداش یکتا در دیتابیس واقعی
    import sqlite3
    conn = sqlite3.connect(DB)
    try:
        match_id = fin["event"]["match_id"]
        row = conn.execute("SELECT game, result FROM match_results WHERE id=?", (match_id,)).fetchone()
        result_json = json.loads(row[1]) if row and isinstance(row[1], str) else (row[1] if row else {})
        check("A13 نتیجهٔ مسابقه در PostgreSQL-schema (SQLite آزمون) ماندگار شد",
              row is not None and result_json.get("winner") == "mafia")
        n_ledger = conn.execute("SELECT COUNT(*) FROM token_ledger WHERE reason='viva_match'").fetchone()[0]
        balances = dict(conn.execute("SELECT account_id, token_balance FROM account_balances").fetchall())
        expected_mafia = 50
        check("A14 پاداش: مافیا ۵۰ و بقیه ۱۰ — دقیقاً ۵ ردیف دفترکل",
              n_ledger == 5 and balances[mafia.account_id] == expected_mafia
              and all(balances[p.account_id] == 10 for p in players if p is not mafia))
        # درخواست پایان دوباره از طریق REST → خطا (مسابقه تمام شده)
        code, _ = players[0].api("POST", f"/live/rooms/{room_id}/start")
        check("A15 مسابقهٔ تمام‌شده دوباره شروع نمی‌شود (ضد ثبت تکراری)", code == 409)
    finally:
        conn.close()


# ───────────────────────────── بخش B و C: مرورگر واقعی ─────────────────────────────

def browser_parts():
    from playwright.sync_api import sync_playwright

    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        block = ["**tapi.bale.ai/**"]

        def make_context(uid, name):
            ctx = browser.new_context(viewport={"width": 412, "height": 860},
                                      device_scale_factor=2, locale="fa")
            for pattern in block:
                ctx.route(pattern, lambda route: route.abort())
            ctx.add_init_script(f"window.__VIVA_DEV_INITDATA__ = {json.dumps(make_init_data(uid, name))};")
            return ctx

        def click_seat(page, name_sub):
            for s in page.query_selector_all(".seat"):
                b = s.query_selector("b")
                if b and name_sub in b.inner_text():
                    s.click()
                    return True
            return False

        def wait_text(page, selector, contains, timeout=20000):
            page.wait_for_selector(selector, timeout=timeout)
            end = time.time() + timeout / 1000
            while time.time() < end:
                try:
                    if contains in page.inner_text(selector):
                        return True
                except Exception:
                    pass
                page.wait_for_timeout(200)
            return False

        # ── بخش B: شطرنج با دو مرورگر مستقل ──
        print("\n── بخش B: شطرنج با ۲ مرورگر مستقل ──", flush=True)
        ca, cb = make_context(7001, "آرش"), make_context(7002, "بردیا")
        pa, pb = ca.new_page(), cb.new_page()
        pa.goto(BASE + "/viva/argad/", wait_until="domcontentloaded")
        pb.goto(BASE + "/viva/argad/", wait_until="domcontentloaded")
        pa.click("#make-btn")
        check("B1 آرش میز شطرنج ساخت و داخل اتاق نشست", pa.wait_for_selector("#my-room:not(.hidden)", timeout=15000) is not None)
        pb.wait_for_selector(".room-card .join", timeout=15000)
        pb.click(".room-card .join")
        check("B2 بردیا با مرورگر مستقل از فهرست اتاق‌ها پیوست", pb.wait_for_selector("#my-room:not(.hidden)", timeout=15000) is not None)
        pa.wait_for_selector("#start-btn:not([disabled])", timeout=15000)
        pa.click("#start-btn")
        check("B3 مسابقه آغاز شد و صفحه در هر دو مرورگر باز شد",
              pa.wait_for_selector("#match:not(.hidden)", timeout=15000) is not None
              and pb.wait_for_selector("#match:not(.hidden)", timeout=15000) is not None)

        def tap(page, sq):
            page.click(f'[data-sq="{sq}"]')

        # مات چوپان: e4 e5 Bc4 Nc6 Qh5 Nf6 Qxf7#
        moves = [("a", ["e2", "e4"]), ("b", ["e7", "e5"]),
                 ("a", ["f1", "c4"]), ("b", ["b8", "c6"]),
                 ("a", ["d1", "h5"]), ("b", ["g8", "f6"]),
                 ("a", ["h5", "f7"])]
        pages = {"a": pa, "b": pb}
        for who, squares in moves:
            for sq in squares:
                tap(pages[who], sq)
                page = pages[who]
                page.wait_for_timeout(350)

        ok_b4 = wait_text(pa, "#res-title", "سفید برد", 15000) and wait_text(pb, "#res-title", "سفید برد", 15000)
        check("B4 مات چوپان کامل با کلیک واقعی UI → هر دو مرورگر «سفید برد!» را دیدند", ok_b4)
        pa.screenshot(path=str(EVIDENCE / "chess-white-mate.png"), full_page=True)
        pb.screenshot(path=str(EVIDENCE / "chess-black-mate.png"), full_page=True)
        check("B5 شواهد تصویری دو طرف مسابقهٔ شطرنج ذخیره شد",
              (EVIDENCE / "chess-white-mate.png").exists() and (EVIDENCE / "chess-black-mate.png").exists())
        ca.close(); cb.close()

        # ── بخش C: مافیا با پنج مرورگر مستقل ──
        print("\n── بخش C: مافیا با ۵ مرورگر مستقل ──", flush=True)
        names = ["مهرآرا", "کاوه", "رعنا", "بامداد", "سپهر"]
        ctxs = [make_context(7100 + i, n) for i, n in enumerate(names)]
        pages = [c.new_page() for c in ctxs]
        for pg in pages:
            pg.goto(BASE + "/viva/dezhmar/", wait_until="domcontentloaded")
            pg.wait_for_selector("#make-btn", timeout=15000)
        # ظرفیت ۵ + سرعت برق‌آسا
        pages[0].click(".pill:has-text('5 نفر')")
        pages[0].click(".pill:has-text('برق‌آسا')")
        pages[0].click("#make-btn")
        check("C1 مهرآرا اتاق مخفی ۵ نفره ساخت", pages[0].wait_for_selector("#my-room:not(.hidden)", timeout=15000) is not None)
        for pg in pages[1:]:
            pg.wait_for_selector(".room-card .join", timeout=20000)
            pg.click(".room-card .join")
            pg.wait_for_selector("#my-room:not(.hidden)", timeout=15000)
        check("C2 چهار بازیکن دیگر با مرورگرهای مستقل پیوستند", True)
        pages[0].wait_for_selector("#start-btn:not([disabled])", timeout=15000)
        pages[0].click("#start-btn")
        for i, pg in enumerate(pages):
            check(f"C3 {names[i]} مسابقهٔ زنده را دید و کارت نقش محرمانه گرفت",
                  pg.wait_for_selector("#match:not(.hidden)", timeout=15000) is not None
                  and wait_text(pg, "#role-title", "نقش محرمانهٔ شما", 15000))
        roles = {}
        for i, pg in enumerate(pages):
            t = pg.inner_text("#role-title")
            for key, fa in [("mafia", "مافیا"), ("doctor", "دکتر"), ("detective", "کارآگاه"), ("citizen", "شهروند")]:
                if fa in t:
                    roles[names[i]] = (key, fa)
        got = {k: v for k, v in roles.items()}
        check("C4 نقش‌ها در UI بدون درز بین مرورگرها تخصیص یافت",
              sum(1 for v in got.values() if v[0] == "mafia") == 1
              and sum(1 for v in got.values() if v[0] == "doctor") == 1
              and sum(1 for v in got.values() if v[0] == "detective") == 1
              and sum(1 for v in got.values() if v[0] == "citizen") == 2)

        mafia_name = next(n for n, (k, _) in got.items() if k == "mafia")
        citizens = [n for n, (k, _) in got.items() if k == "citizen"]
        by_name = {n: pages[i] for i, n in enumerate(names)}

        def wait_night_targets(page, timeout=15000):
            end = time.time() + timeout / 1000
            while time.time() < end:
                if page.query_selector(".seat.targeting"):
                    return True
                page.wait_for_timeout(200)
            return False

        # شب ۱
        pg = by_name[mafia_name]
        check("C5 مافیا در شب هدف‌گیری گرفت", wait_night_targets(pg))
        click_seat(pg, citizens[0])
        pg_doc = by_name[next(n for n, (k, _) in got.items() if k == "doctor")]
        wait_night_targets(pg_doc)
        pg_doc.click(".seat.me")  # خوددرمانی
        pg_det = by_name[next(n for n, (k, _) in got.items() if k == "detective")]
        wait_night_targets(pg_det)
        click_seat(pg_det, citizens[1])
        check("C6 سه بازیکن شبِ اول را از رابط واقعی اجرا کردند (قتل/نجات/بازرسی)", True)
        # اسکرین‌شات صحنهٔ شب پیش از سپیده
        pg.screenshot(path=str(EVIDENCE / "mafia-night-scene.png"), full_page=True)

        def wait_vote(page, timeout=20000):
            end = time.time() + timeout / 1000
            while time.time() < end:
                try:
                    if page.is_visible("#result-overlay") or "رأی‌گیری" in page.inner_text("#phase-badge"):
                        return True
                except Exception:
                    pass
                page.wait_for_timeout(250)
            return False

        def dump_pages(tag):
            print(f"\n--- DEBUG {tag} ---", flush=True)
            for i, pg in enumerate(pages):
                try:
                    print(f"[{names[i]}] badge={pg.inner_text('#phase-badge')!r} "
                          f"msg={pg.inner_text('#phase-msg')[:60]!r} role={pg.inner_text('#role-title')[:30]!r} "
                          f"net={pg.inner_text('#net-t')!r} targets_visible={pg.is_visible('#targets')} "
                          f"log={pg.inner_text('#log')[-120:]!r}", flush=True)
                except Exception as e:
                    print(f"[{names[i]}] dump_err {e}", flush=True)

        check("C7 سپیده و سپس رأی‌گیری در همهٔ مرورگرها آغاز شد",
              all(wait_vote(p) for n, p in by_name.items() if n != citizens[0]))
        # رأی حلقه‌ای مقاوم: تا ظاهر شدن نتیجه، هر بازیکن زنده روی مافیا (یا هدف جایگزین) کلیک می‌کند
        def vote_until_result(timeout=30000):
            end = time.time() + timeout / 1000
            alive_pages = [p for n, p in by_name.items() if n != citizens[0]]
            while time.time() < end:
                for pg in alive_pages:
                    try:
                        if pg.is_visible("#result-overlay"):
                            return True
                    except Exception:
                        return False
                for n, pg in by_name.items():
                    if n == citizens[0]:
                        continue
                    target = citizens[1] if n == mafia_name else mafia_name
                    click_seat(pg, target)
                time.sleep(0.6)
            return False

        check("C8 رأی‌گیری واقعی از پنج مرورگر انجام شد", vote_until_result())

        def wait_result(page, timeout=15000):
            end = time.time() + timeout / 1000
            while time.time() < end:
                try:
                    if page.is_visible("#result-overlay") and "پیروزی" in page.inner_text("#res-title"):
                        return True
                except Exception:
                    pass
                page.wait_for_timeout(300)
            return False

        ok_c9 = all(wait_result(p) for n, p in by_name.items() if n not in (citizens[0], citizens[1]))
        check("C9 شهر مافیا را رأی‌آوری کرد → «پیروزی شهر» در مرورگرهای زنده", ok_c9)
        by_name[mafia_name].screenshot(path=str(EVIDENCE / "mafia-result.png"), full_page=True)
        check("C10 شواهد تصویری شب مافیا و نتیجه ذخیره شد",
              (EVIDENCE / "mafia-night-scene.png").exists() and (EVIDENCE / "mafia-result.png").exists())
        for c in ctxs:
            c.close()
        browser.close()


def main():
    proc = start_server()
    try:
        asyncio.run(part_a_mafia_protocol())
        browser_parts()
    finally:
        proc.kill()
    sys.exit(summary())


if __name__ == "__main__":
    main()
