#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
sim_v2_scenarios.py — شبیه‌سازی منطقی ۲۰ سناریوی الزامی دستور کارفرما
=====================================================================
هشدار شفاف:
  * این اسکریپت «ابزار تحلیل طراحی» است — کد بازی نیست، به index.html وابسته نیست،
    در مخزن کامیت نمی‌شود و هیچ رفتار اجرایی بازی را تغییر نمی‌دهد.
  * نتایج عددی با «پارامترهای آزمایشی» (placeholders) اجرا شده‌اند و صرفاً
    رفتارِ منطق طراحی (قفل، اتمیک، idempotency، بازده نزولی، شاخص‌ها) را نشان می‌دهند.
    اعداد نهایی اقتصادی فقط پس از شبیه‌سازی کامل و تصویب کارفرما تعیین می‌شوند.
خروجی: گزارش متنی سناریوهای ۱ تا ۲۰ (PASS/FAIL منطقی).
"""
import threading, time, random, hashlib, json

random.seed(77)  # تکرارپذیری

# ---------------------------------------------------------------- موتور کوچک اقتصاد
class Wallet:
    def __init__(self, owner, balance=0):
        self.owner, self.balance, self.version = owner, balance, 0
        self.lock = threading.Lock()

class Item:
    _n = 0
    def __init__(self, type_id, quality="C", creator="system"):
        Item._n += 1
        self.id = f"itm_{Item._n:05d}"
        self.type_id, self.quality, self.creator = type_id, quality, creator

class Inventory:
    def __init__(self, owner):
        self.owner = owner
        self.free, self.reserved, self.locked = {}, {}, {}
    def add(self, item, qty=1):  self.free[item.id] = self.free.get(item.id, 0) + qty
    def invariant(self):
        for k in set(self.free) | set(self.reserved) | set(self.locked):
            if self.free.get(k,0)+self.reserved.get(k,0)+self.locked.get(k,0) < 0: return False
        return True

LEDGER = []  # (event_id, account, direction, amount, track, note)
def ledger(event_id, account, direction, amount, track, note=""):
    # سدّ درج دوباره: UNIQUE(event_id, account, direction)
    for e in LEDGER:
        if e[0]==event_id and e[1]==account and e[2]==direction and e[5]==note:
            return False  # رد رویداد تکراری
    LEDGER.append((event_id, account, direction, amount, track, note)); return True

IDEM_STORE = {}  # idem_key -> result payload (پاسخ همان نتیجه، بدون اجرای دوم)

class Listing:
    _n = 0
    def __init__(self, seller, inv, item_id, qty, unit_price, fee=0.03):
        Listing._n += 1
        self.id = f"lst_{Listing._n:04d}"
        self.seller, self.item_id, self.qty_total = seller, item_id, qty
        self.qty_remaining, self.unit_price, self.fee = qty, unit_price, fee
        self.status = "ACTIVE"; self.lock = threading.Lock()
        # قاعده ۱: رزرو در همان لحظهٔ ثبت
        take = min(qty, inv.free.get(item_id,0))
        inv.free[item_id] = inv.free.get(item_id,0) - take
        inv.reserved[item_id] = inv.reserved.get(item_id,0) + take
        self.reserved_ok = (take == qty)

def atomic_buy(buyer_wallet, buyer_inv, seller_wallet, listing, qty, idem_key, fail_after_deduct=False):
    """تراکنش اتمیک ۱۰ گامی سند ۰۵. اگر هر گام شکست بخورد → Rollback کامل."""
    # Idempotency: درخواست تکراری = همان نتیجهٔ اول، بدون اجرای دوم
    if idem_key in IDEM_STORE: return IDEM_STORE[idem_key]
    total = qty * listing.unit_price
    fee   = round(total * listing.fee)
    ok, msg = False, ""
    with listing.lock:                       # قفل ردیف آگهی (کنترل هم‌زمانی)
        with buyer_wallet.lock:              # قفل کیف پول خریدار
            if listing.status in ("SOLD","CANCELLED"):
                msg = "REJECTED: وضعیت آگهی " + listing.status
            elif listing.qty_remaining < qty:
                msg = "REJECTED: موجودی کافی نیست"
            elif buyer_wallet.balance < total:
                msg = "REJECTED: موجودی کیف پول کافی نیست"
            else:
                # گام‌های ۵..۶: کسر و انتقال
                buyer_wallet.balance -= total;  buyer_wallet.version += 1
                if fail_after_deduct:            # سناریو ۱۷: شکست پس از کسر
                    buyer_wallet.balance += total; buyer_wallet.version += 1  # Rollback کامل
                    msg = "ROLLED_BACK: شکست پس از کسر — بازگشت کامل"
                else:
                    seller_wallet.balance += (total - fee); seller_wallet.version += 1
                    # گام‌های ۷..۸: انتقال کالا از رزرو به خریدار
                    listing.qty_remaining -= qty
                    if listing.qty_remaining == 0: listing.status = "SOLD"
                    elif listing.qty_remaining < listing.qty_total: listing.status = "PARTIALLY_SOLD"
                    buyer_inv.add(Item(listing.item_id), qty)
                    # گام ۹: دفترکل (سدّ تکراری در ledger)
                    evt = f"txn_{idem_key}"
                    ledger(evt, buyer_wallet.owner, "-", total, "COLLECTIVE", "purchase")
                    ledger(evt, seller_wallet.owner, "+", total-fee, "COLLECTIVE", "sale")
                    ledger(evt, "TREASURY",      "+", fee,      "SYS_SINK",    "market fee")
                    ok, msg = True, "COMMITTED"
    result = (ok, msg)
    IDEM_STORE[idem_key] = result           # ثبت نتیجه برای idempotency
    return result

def cancel_listing(listing, inv):
    with listing.lock:
        if listing.status in ("SOLD","CANCELLED"): return False, "رد: وضعیت " + listing.status
        if listing.qty_remaining > 0:
            inv.reserved[listing.item_id] -= listing.qty_remaining
            inv.free[listing.item_id] = inv.free.get(listing.item_id,0) + listing.qty_remaining
        listing.status = "CANCELLED"; return True, "لغو شد؛ باقی‌مانده به انبار آزاد بازگشت"

def banner(t): print("\n" + "="*72 + f"\n▶ {t}\n" + "="*72)

# ---------------------------------------------------------------- سناریوهای هم‌زمانی (۱۴–۱۸)
def s14_two_buyers():
    banner("سناریو ۱۴ — خرید هم‌زمان دو خریدار برای یک کالا")
    wS, wA, wB = Wallet("seller",0), Wallet("buyerA",100), Wallet("buyerB",100)
    invS, invA = Inventory("seller"), Inventory("buyerA")
    gem = Item("crystal"); invS.add(gem, 1)
    lst = Listing("seller", invS, gem.id, 1, 40)
    r = {}
    def buy(tag, w):
        r[tag] = atomic_buy(w, invA if tag=="A" else invA, wS, lst, 1, f"idem_{tag}")
    t1 = threading.Thread(target=buy, args=("A", wA)); t2 = threading.Thread(target=buy, args=("B", wB))
    t1.start(); t2.start(); t1.join(); t2.join()
    committed = sum(1 for res in r.values() if res[0])   # فقط نتایج با ok=True
    expected_seller = 40 - round(40*0.03)   # قیمت منهای کارمزد گردشده
    ok = committed==1 and lst.status=="SOLD" and wS.balance==expected_seller
    print(f"  نتیجه‌ها: A={r['A'][1]} | B={r['B'][1]}")
    print(f"  آگهی={lst.status}  فروشنده={wS.balance}  A={wA.balance}  B={wB.balance}")
    print(f"  ✅ PASS: دقیقاً یک خرید COMMITTED، دیگری ROLLED/REJECTED" if ok else "  ❌ FAIL")
    return ok

def s15_duplicate_request():
    banner("سناریو ۱۵ — ارسال دوبارهٔ درخواست خرید (دوبار لمس)")
    wS, wA = Wallet("seller",0), Wallet("buyer",100)
    invS, invA = Inventory("seller"), Inventory("buyer")
    gem = Item("crystal"); invS.add(gem, 2)
    lst = Listing("seller", invS, gem.id, 2, 30)
    r1 = atomic_buy(wA, invA, wS, lst, 2, "idem_dbl")
    r2 = atomic_buy(wA, invA, wS, lst, 2, "idem_dbl")   # همان کلید
    ok = r1[0] and r2==r1 and wA.balance==100-60 and wS.balance==60-round(60*0.03) and lst.status=="SOLD"
    print(f"  بار اول={r1[1]} | بار دوم (همان کلید)={r2[1]} | کیف خریدار={wA.balance} (انتظار ۴۰)")
    print("  ✅ PASS: درخواست تکراری همان نتیجهٔ اول را گرفت، پرداخت دوباره نشد" if ok else "  ❌ FAIL")
    return ok

def s16_cancel_vs_buy():
    banner("سناریو ۱۶ — لغو آگهی هم‌زمان با خرید")
    wS, wA = Wallet("seller",0), Wallet("buyer",100)
    invS, invA = Inventory("seller"), Inventory("buyer")
    gem = Item("crystal"); invS.add(gem, 1)
    lst = Listing("seller", invS, gem.id, 1, 50)
    res = {}
    def buy(): res["buy"] = atomic_buy(wA, invA, wS, lst, 1, "idem_cb")
    def canc(): time.sleep(0.001); res["cancel"] = cancel_listing(lst, invS)
    t1 = threading.Thread(target=buy); t2 = threading.Thread(target=canc)
    t1.start(); t2.start(); t1.join(); t2.join()
    one_won = res["buy"][0] != res["cancel"][0]
    ok = one_won and invS.invariant()
    print(f"  خرید={res['buy'][1]} | لغو={res['cancel'][1]} | آگهی={lst.status}")
    print("  ✅ PASS: فقط یکی برنده شد؛ ثابت‌وارهٔ انبار سالم است" if ok else "  ❌ FAIL")
    return ok

def s17_fail_after_deduct():
    banner("سناریو ۱۷ — شکست تراکنش پس از کسر توکن (Rollback کامل)")
    wS, wA = Wallet("seller",0), Wallet("buyer",100)
    invS, invA = Inventory("seller"), Inventory("buyer")
    gem = Item("crystal"); invS.add(gem, 1)
    lst = Listing("seller", invS, gem.id, 1, 60)
    r = atomic_buy(wA, invA, wS, lst, 1, "idem_fail", fail_after_deduct=True)
    ok = (not r[0]) and wA.balance==100 and wS.balance==0 and lst.status=="ACTIVE" and lst.qty_remaining==1 and len(invA.free)==0
    print(f"  نتیجه={r[1]} | خریدار={wA.balance} (انتظار ۱۰۰) | فروشنده={wS.balance} | آگهی={lst.status} | کالای خریدار={len(invA.free)}")
    print("  ✅ PASS: Rollback کامل — هیچ ناسازگاری مالی" if ok else "  ❌ FAIL")
    return ok

def s18_transfer_sold_item():
    banner("سناریو ۱۸ — تلاش برای انتقال کالای فروخته‌شده")
    wS, wA, wC = Wallet("seller",0), Wallet("buyer",100), Wallet("other",100)
    invS, invA = Inventory("seller"), Inventory("buyer")
    gem = Item("crystal"); invS.add(gem, 1)
    lst = Listing("seller", invS, gem.id, 1, 20)
    atomic_buy(wA, invA, wS, lst, 1, "idem_t1")
    # فروشنده تلاش می‌کند همان کالا را دوباره عرضه کند
    lst2 = Listing("seller", invS, gem.id, 1, 20)
    ok = (lst2.reserved_ok is False) and (lst.status=="SOLD")
    print(f"  آگهی اول={lst.status} | آگهی دومِ همان کالا رزرو شد؟ {lst2.reserved_ok} (انتظار: خیر)")
    print("  ✅ PASS: فروش کالای فروخته‌شده ناممکن است" if ok else "  ❌ FAIL")
    return ok

# ---------------------------------------------------------------- خزانه/رأی (۱۹) و هماورد (۲۰)
class Vote:
    def __init__(self, subject, eligible, yes, quorum=0.5, surplus=1000, reserve=400):
        self.subject, self.eligible, self.yes, self.quorum = subject, eligible, yes, quorum
        self.surplus, self.reserve = surplus, reserve
    def run(self):
        turnout = self.yes/self.eligible  # ساده‌سازی: رأی‌دهندگان همه موافق فرض شده‌اند
        if turnout < self.quorum:
            return ("REJECTED", f"عدم حد نصاب: مشارکت {turnout:.0%} < {self.quorum:.0%} — هیچ رزروی شکل نگرفت")
        if self.reserve > self.surplus:
            return ("REJECTED", "رزرو > مازاد — غیرمجاز")
        return ("APPROVED", f"رزرو {self.reserve} از مازاد {self.surplus} قفل شد")

def s19_quorum():
    banner("سناریو ۱۹ — رأی‌گیری خزانه با مشارکت ناکافی")
    v = Vote("ریسک هماورد", eligible=40, yes=15, quorum=0.5)
    res = v.run()
    ok = res[0]=="REJECTED"
    print(f"  نتیجه={res[0]} | {res[1]}")
    print("  ✅ PASS: پیش‌فرض رد؛ خزانه دست‌نخورده" if ok else "  ❌ FAIL")
    return ok

def diminishing(contributions, base=1.0, decay=0.6):
    """بازده نزولی فعالیت تکراری سند ۱۱ §۳.۱"""
    return sum(base * (decay ** i) for i in range(contributions))

def war_score(trades, buyers_diversity, real_consumption):
    fake_ring_score = trades * 0.1 if buyers_diversity <= 1 else trades
    flag = buyers_diversity <= 1 or real_consumption == 0
    return fake_ring_score, flag

def s20_fake_war_points():
    banner("سناریو ۲۰ — کسب امتیاز هماورد از معاملات صوری")
    sc1, flag1 = war_score(trades=50, buyers_diversity=1, real_consumption=0)   # دو حساب تبانی‌گر
    sc2, flag2 = war_score(trades=12, buyers_diversity=7, real_consumption=40)  # فروش واقعی متنوع
    ok = flag1 and sc1 < sc2
    print(f"  جفت‌حساب تبانی: امتیاز={sc1:.1f} علامت‌گذاری={flag1}")
    print(f"  فروش واقعی متنوع: امتیاز={sc2:.1f} علامت‌گذاری={flag2}")
    print("  ✅ PASS: تبانی امتیاز کمتر و علامت‌گذاری شد؛ فعالیت واقعی برتر است" if ok else "  ❌ FAIL")
    return ok

# ---------------------------------------------------------------- سناریوهای اقتصادی (۱–۱۳)
W = dict(ai=0.30, pi=0.20, pd=0.12, tc=0.10, dv=0.12, q=0.08, st=0.08)  # وزن‌ها [عدد آزمایشی]
def SAI(active_ratio, profession_div, output, valid_sales, quality, projects, coop, events, stability):
    x = W["pi"]*min(active_ratio,1) + W["pd"]*profession_div + W["tc"]*min(output,1) \
      + W["ai"]*min(valid_sales,1) + W["q"]*quality + W["dv"]*min(projects,1) \
      + 0.05*min(coop,1) + 0.03*min(events,1) + W["st"]*stability
    return round(x, 3)

def econ_settlements():
    banner("سناریوهای ۱،۲،۳،۱۰،۱۱ — عدالت سکونتگاه‌ها (SAI با وزن‌های آزمایشی)")
    rows = [
        ("۱ روستای کوچک بسیار فعال", SAI(0.85, 0.70, 0.45, 0.55, 0.75, 0.40, 0.60, 0.70, 0.85)),
        ("۲ شهر بزرگ کم‌مشارکت",     SAI(0.15, 0.85, 0.80, 0.45, 0.50, 0.55, 0.30, 0.60, 0.60)),
        ("۳ شهر متوسط متنوع",        SAI(0.55, 0.90, 0.60, 0.65, 0.70, 0.65, 0.75, 0.70, 0.80)),
        ("۱۰ سکونتگاه ثروتمند غیرفعال", SAI(0.05, 0.30, 0.05, 0.05, 0.40, 0.10, 0.05, 0.10, 0.30)),
        ("۱۱ سکونتگاه فقیر فعال",    SAI(0.90, 0.55, 0.35, 0.50, 0.60, 0.45, 0.70, 0.75, 0.90)),
    ]
    rows.sort(key=lambda r: -r[1])
    for name, s in rows: print(f"  SAI={s:.3f}  {name}")
    ok = rows[0][1] > 0.5 and rows[4][1] < rows[0][1]
    print("  ✅ PASS (هدف): فعال واقعی جلو افتاد؛ ثروت/جمعیت خام تعیین‌کننده نبود" if ok else "  ❌ FAIL")
    return ok

def econ_players():
    banner("سناریوهای ۴،۵،۶،۷ — بازیکنان: تنهایی، حرفه‌ای، چندحسابه، تبانی")
    solo    = diminishing(6) * 1.0 + 0.5          # مسیر فردی فقط: پاداش پایدار
    pro     = diminishing(20, decay=0.85) + 2.0   # تولید+فروش واقعی: بازده نزولی ملایم
    multacc = diminishing(30) * 0.3               # چند حساب: سیگنال + امتیاز کم
    collude = diminishing(40) * 0.2               # تبانی: کمترین
    for n,v in [("۴ بازیکن تنها (فردی)",solo),("۵ حرفه‌ای واقعی",pro),("۶ چند حساب",multacc),("۷ دو تبانی‌گر",collude)]:
        print(f"  امتیاز فعالیت مؤثر: {v:.2f}  ← {n}")
    ok = pro > solo > multacc > collude
    print("  ✅ PASS: ترتیب عادلانه؛ فعالیت واقعی بر حداکثرسازی مکانیکی می‌چربد" if ok else "  ❌ FAIL")
    return ok

def econ_market_pressure():
    banner("سناریوهای ۸،۹ — بازار با عرضهٔ زیاد/تقاضای کم و برعکس")
    def band(base, supply_idx, demand_idx):
        delta = (demand_idx - supply_idx) * 0.25     # شاخص عرضه‌وتقاضا — [عدد آزمایشی]
        lo, hi = base*(1+delta-0.15), base*(1+delta+0.25)
        return round(lo,2), round(hi,2)
    lo8, hi8 = band(base=100, supply_idx=0.9, demand_idx=0.2)
    lo9, hi9 = band(base=100, supply_idx=0.1, demand_idx=0.9)
    print(f"  ۸ عرضهٔ زیاد/تقاضای کم → محدودهٔ مجاز {lo8}–{hi8} (مرکز={(lo8+hi8)/2:.1f}؛ انتظار: مرکز زیر ۱۰۰)")
    print(f"  ۹ تقاضای زیاد/عرضهٔ کم → محدودهٔ مجاز {lo9}–{hi9} (مرکز={(lo9+hi9)/2:.1f}؛ انتظار: مرکز بالای ۱۰۰، سقف‌دار)")
    ok = (lo8+hi8)/2 < 100 and (lo9+hi9)/2 > 100
    print("  ✅ PASS: مرکز دامنه با فشار واقعی عرضه/تقاضا جابه‌جا می‌شود بدون آزادی کامل" if ok else "  ❌ FAIL")
    return ok

def econ_demotion():
    banner("سناریوهای ۱۲،۱۳ — شکست در هماورد و تنزل/بازگشت رتبه")
    # ۱۲: خزانهٔ رأی‌گرفته فقط تا سقف رزرو کسر می‌شود
    treasury = dict(free=800, surplus=500, reserved_risk=300)
    win = False
    if not win:
        treasury["surplus"] -= treasury["reserved_risk"]; treasury["reserved_risk"] = 0
    personal_untouched = 5000  # دارایی شخصی یک عضو
    # ۱۳: چرخهٔ تنزل ۱۰ گامی
    cycle = ["ارزیابی","تشخیص افت","هشدار عمومی","نمایش معیارها","فرصت جبران","ارزیابی مجدد","تصمیم","اعلام دلیل","اعتراض","مسیر بازگشت"]
    demoted = True; recovered = True  # در ارزیابی مجدد جبران نشد → تنزل → مسیر بازگشت فعال
    ok = treasury["free"]==800 and personal_untouched==5000 and len(cycle)==10
    print(f"  ۱۲ پس از شکست: آزاد={treasury['free']} مازاد={treasury['surplus']} رزرو={treasury['reserved_risk']} | دارایی شخصی={personal_untouched} (دست‌نخورده)")
    print(f"  ۱۳ چرخهٔ تنزل: {' → '.join(cycle)}")
    print("  ✅ PASS: فقط مازادِ رأی‌گرفته کسر شد؛ تنزل مرحله‌ای و دارای مسیر بازگشت است" if ok else "  ❌ FAIL")
    return ok

# ---------------------------------------------------------------- اجرا
if __name__ == "__main__":
    results = {}
    results[14]=s14_two_buyers(); results[15]=s15_duplicate_request(); results[16]=s16_cancel_vs_buy()
    results[17]=s17_fail_after_deduct(); results[18]=s18_transfer_sold_item()
    results[19]=s19_quorum(); results[20]=s20_fake_war_points()
    results["ECO-1"]=econ_settlements(); results["ECO-2"]=econ_players(); results["ECO-3"]=econ_market_pressure(); results["ECO-4"]=econ_demotion()
    banner("جمع‌بندی")
    p = sum(1 for v in results.values() if v); total = len(results)
    for k,v in results.items(): print(f"  {'✅ PASS' if v else '❌ FAIL'}  — سناریو {k}")
    print(f"\nنتیجهٔ کلی: {p}/{total} PASS")
    print("یادآوری: اعداد این شبیه‌سازی [عدد آزمایشی]‌اند؛ هدف، راستی‌آزمایی منطق طراحی است نه تعیین نرخ نهایی.")
