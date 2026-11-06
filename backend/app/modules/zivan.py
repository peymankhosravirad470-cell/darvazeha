"""زیوان — پادشاهی هشتم VIVA (سلامت، تحرک، نشاط).

این ماژول «منطق خالص» اعتبارسنجی فعالیت بدنی است؛ کاملاً سمت سرور و
مستقل از رابط کاربری و دیتابیس (طبق قانون معماری: جداسازی منطق از UI).

اصل‌های امنیتی زیوان:
- کلاینت فقط «نقاط خام GPS» می‌فرستد؛ مسافت، قدم، سرعت و اعتبار همه
  سمت سرور محاسبه و تصمیم‌گیری می‌شود.
- ضدتقلب: سقف سرعت در هر فعالیت، سقف مسافت، رد نقاط کم‌دقت، رد ناهنجاری
  زمان، حذف نقاط تکراری، کنترل سرعت میانگین کل.
- حریم خصوصی: مسافت/قدمِ اعتبارسنجی‌شده ذخیره می‌شود؛ مسیر خام فقط با
  رضایت صریح و فقط تا ۶۰ نقطهٔ تقطیع‌شده با دقت ~۱۱ متر؛ مسیر فقط برای
  خود کاربر قابل دریافت است.
- پاداش: کد مسیر پاداش وجود دارد ولی با کلید تنظیمی ZIVAN_REWARDS_ENABLED
  به‌صورت پیش‌فرض خاموش است — تا تأیید صریح مالک محصول در محیط اصلی
  هیچ پاداشی صادر نمی‌شود.
"""
from __future__ import annotations

import math

# --- تالارهای ده‌گانهٔ زیوان ------------------------------------------------
# همهٔ تالارها «live» هستند؛ هر تالار فعالیت اختصاصی واقعی خودش را دارد و
# برچسب‌های صادقانه (مثل «خوداظهاری تأییدشده با تایمر») داخل محصول دیده می‌شود.

HALLS: list[dict] = [
    {"id": "walking", "name": "تالار پیاده‌روی", "activity": "walk",
     "tagline": "ثبت مسیر، مسافت، مدت و قدم‌ها با GPS و اجازهٔ کاربر",
     "status": "live", "icon": "footprints"},
    {"id": "steps_battle", "name": "تالار نبرد قدم‌ها", "activity": "walk",
     "tagline": "رقابت فردی و گروهی (مسابقهٔ قدم گروه) بر اساس قدم معتبر سرور",
     "status": "live", "icon": "swords"},
    {"id": "running", "name": "تالار دویدن", "activity": "run",
     "tagline": "ثبت فعالیت و مسابقه‌های دویدن",
     "status": "live", "icon": "wind"},
    {"id": "nature_trail", "name": "تالار طبیعت‌گردی", "activity": "walk",
     "tagline": "مأموریت کشف مسیر و ثبت برداشت از طبیعت",
     "status": "live", "icon": "mountain"},
    {"id": "balance", "name": "تالار تعادل و انعطاف", "activity": "balance",
     "tagline": "پروتکل‌های تایمری تعادل و انعطاف — پلانک، تک‌پا، کشش‌ها",
     "status": "live", "icon": "feather"},
    {"id": "group_training", "name": "تالار تمرین گروهی", "activity": "balance",
     "tagline": "حلقهٔ تمرین با کد دعوت — تمرین هم‌زمان دوستان با پیشرفت زنده",
     "status": "live", "icon": "users"},
    {"id": "friendly_challenge", "name": "تالار چالش دوستانه", "activity": "duel",
     "tagline": "دوئل قدم و مسافت با دوست — برنده فقط از فعالیت معتبر سرور",
     "status": "live", "icon": "flag"},
    {"id": "social_mission", "name": "تالار مأموریت اجتماعی", "activity": "social",
     "tagline": "مأموریت جمعی شهر سبز — سهم هر همسفر از فعالیت معتبرش",
     "status": "live", "icon": "heart"},
    {"id": "grand_cup", "name": "تالار جام بزرگ سلامت", "activity": "cup",
     "tagline": "جام هفتگی سلامت — قدم معتبر + ثانیه‌های تمرین معتبر",
     "status": "live", "icon": "trophy"},
    {"id": "moments", "name": "تالار ثبت لحظه‌ها", "activity": "moments",
     "tagline": "گالری خصوصی عکس‌های طبیعت — فقط خودتان می‌بینید",
     "status": "live", "icon": "camera"},
]

HALL_IDS = {h["id"] for h in HALLS}
LIVE_HALL_IDS = {h["id"] for h in HALLS if h["status"] == "live"}

# فعالیت‌های GPS-محورِ قابل اعتبارسنجی فعلی
VALID_ACTIVITIES = {"walk", "run"}

# فعالیت‌های بدون GPS (پروتکل تایمری — حکم بر اساس ساعت سرور)
TIMED_ACTIVITIES = {"balance"}

# --- پروتکل‌های تمرین تایمری (تعادل/انعطاف/تمرین گروهی) -----------------------
# هر پروتکل یک تمرین واقعی با بازهٔ زمانی معقول است؛ حکم فقط بر اساس
# «ساعت سرور» بین شروع و پایان جلسه صادر می‌شود — عدد کلاینت ملاک نیست.
# honest: این ثبت «خوداظهاری تأییدشده با تایمر سرور» است (نه GPS) و داخل
# محصول هم با همین عبارت برچسب می‌خورد.
PROTOCOLS: dict[str, dict] = {
    "plank":             {"name": "پلانک", "min_s": 15, "max_s": 180, "icon": "🧘"},
    "side_plank":        {"name": "پلانک پهلو", "min_s": 10, "max_s": 120, "icon": "🧘"},
    "wall_sit":          {"name": "نشست به دیوار", "min_s": 20, "max_s": 240, "icon": "🪑"},
    "single_leg":        {"name": "ایستادن تک‌پا", "min_s": 10, "max_s": 120, "icon": "🦩"},
    "tree_pose":         {"name": "حالت درخت", "min_s": 10, "max_s": 120, "icon": "🌳"},
    "glute_bridge":      {"name": "پل باسن (۱۰ تکرار)", "min_s": 20, "max_s": 180, "icon": "🌉"},
    "stretch_hamstring": {"name": "کشش پشت پا", "min_s": 20, "max_s": 150, "icon": "🤸"},
    "stretch_shoulder":  {"name": "کشش شانه و گردن", "min_s": 20, "max_s": 150, "icon": "🤲"},
    "stretch_back":      {"name": "کشش کمر", "min_s": 20, "max_s": 150, "icon": "🙆"},
    "breathing":         {"name": "تنفس عمیق آرام‌سازی", "min_s": 30, "max_s": 300, "icon": "🌬️"},
}
PROTOCOL_TOLERANCE_RATIO = 1.6   # فراموشی توقف — تا ۶۰٪ بیش از سقف مجاز
MAX_PROTOCOL_SESSIONS_PER_DAY = 24
WORKOUT_MAX_MEMBERS = 12
WORKOUT_MAX_OPEN_HOURS = 2       # حلقهٔ تمرین پس از این مدت خودش بسته می‌شود

# --- پارامترهای ضدتقلب (مستند در گزارش بازبینی) ------------------------------
MAX_POINT_ACCURACY_M = 50.0        # نقاط با دقت بدتر از این رد می‌شوند
MAX_ACCURACY_DROP_RATIO = 0.5      # بیش از این نسبت نقطهٔ ردشده = جلسهٔ نامعتبر
MAX_POINTS = 2000                  # سقف نقاط هر جلسه (ضد حافظهٔ سمی)
MIN_VALID_DISTANCE_M = 30.0        # کمتر از این ثبت رسمی نمی‌شود
MAX_SESSION_SECONDS = 6 * 3600     # سقف مدت یک جلسه

ACTIVITY_RULES = {
    # حداکثر سرعت پیوسته‌ی مجاز (متر بر ثانیه) — با حاشیهٔ خطای GPS
    "walk": {"max_speed_mps": 4.0, "max_distance_m": 42_000, "stride_m": 0.72},
    "run":  {"max_speed_mps": 8.5, "max_distance_m": 60_000, "stride_m": 1.05},
}

PATH_MAX_POINTS = 60               # حریم خصوصی: حداکثر نقاط ذخیره‌شدهٔ مسیر
PATH_COORD_DECIMALS = 4            # ~۱۱ متر — فقط «حداقلِ لازم» از مکان

MAX_BAD_SEGMENTS = 5               # بیش از این سگمنت غیرممکن = جلسهٔ نامعتبر


def haversine_m(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """فاصلهٔ کروی بین دو نقطه بر حسب متر."""
    r = 6_371_000.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = p2 - p1
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(min(1.0, a)))


def _coerce_point(raw: dict) -> dict | None:
    """نرمال‌سازی یک نقطهٔ خام؛ None یعنی نقطهٔ ساختاری خراب."""
    try:
        lat = float(raw.get("lat"))
        lon = float(raw.get("lon"))
        t = float(raw.get("t"))
        acc = float(raw.get("acc", 0.0) or 0.0)
    except (TypeError, ValueError):
        return None
    if not (-90 <= lat <= 90) or not (-180 <= lon <= 180):
        return None
    if t <= 0 or acc < 0:
        return None
    return {"lat": lat, "lon": lon, "t": t, "acc": acc}


def validate_session_points(
    activity: str,
    points_raw: list[dict],
    *,
    started_at_ts: float,
    finished_at_ts: float,
) -> dict:
    """اعتبارسنجی کامل یک جلسهٔ فعالیت — تصمیم نهایی فقط همین تابع سروری است.

    خروجی شامل: مسافت معتبر، قدم، مدت، نقاط پذیرفته‌شده، آمار ردشدها و
    valid/reject_reason. هیچ داده‌ای از کلاینت بدون گذر از این مسیر پذیرفته
    نمی‌شود.
    """
    rule = ACTIVITY_RULES.get(activity)
    if rule is None:
        return {"valid": False, "reject_reason": "unknown_activity",
                "distance_m": 0.0, "steps": 0, "duration_s": 0.0,
                "accepted_points": 0, "stats": {}}

    duration_s = max(0.0, finished_at_ts - started_at_ts)
    if duration_s > MAX_SESSION_SECONDS:
        return _reject("session_too_long", duration_s)

    pts = [_coerce_point(p) for p in (points_raw or [])[:MAX_POINTS + 1]]
    if len(points_raw or []) > MAX_POINTS:
        return _reject("too_many_points", duration_s)
    pts = [p for p in pts if p is not None]

    stats = {"received": len(points_raw or []), "malformed": len(points_raw or []) - len(pts),
             "low_accuracy": 0, "duplicate": 0, "bad_speed": 0, "outside_window": 0}

    # پنجرهٔ زمانی: نقاط باید داخل بازهٔ جلسه باشند (با حاشیهٔ ۹۰ ثانیه ساعت دستگاه)
    lo, hi = started_at_ts - 90, finished_at_ts + 90
    windowed = []
    for p in pts:
        if lo <= p["t"] <= hi:
            windowed.append(p)
        else:
            stats["outside_window"] += 1
    pts = windowed

    # دقت GPS
    accurate = []
    for p in pts:
        if p["acc"] and p["acc"] > MAX_POINT_ACCURACY_M:
            stats["low_accuracy"] += 1
        else:
            accurate.append(p)
    # حتی اگر «همهٔ» نقاط کم‌دقت باشند باید رد شود (نسبت روی کل دریافتی)
    total_acc_checked = stats["low_accuracy"] + len(accurate)
    if total_acc_checked and stats["low_accuracy"] / total_acc_checked > MAX_ACCURACY_DROP_RATIO:
        return _reject("gps_quality", duration_s, stats)
    pts = accurate

    # حذف تکراری‌ها (همان مکان گردشده و همان ثانیه)
    seen: set[tuple] = set()
    unique = []
    for p in pts:
        key = (round(p["lat"], PATH_COORD_DECIMALS), round(p["lon"], PATH_COORD_DECIMALS), int(p["t"]))
        if key in seen:
            stats["duplicate"] += 1
            continue
        seen.add(key)
        unique.append(p)
    pts = unique

    # نقاط باید زمان‌مرتب باشند (نقاط نامرتب = دستکاری)
    pts.sort(key=lambda p: p["t"])

    # سگمنت‌ها: سرعت هر گام باید ممکن باشد
    distance = 0.0
    accepted: list[dict] = []
    if pts:
        accepted.append(pts[0])
    for prev, cur in zip(pts, pts[1:]):
        dt = cur["t"] - prev["t"]
        d = haversine_m(prev["lat"], prev["lon"], cur["lat"], cur["lon"])
        speed = d / dt if dt > 0 else float("inf")
        if speed > rule["max_speed_mps"]:
            stats["bad_speed"] += 1
            continue  # سگمنت غیرممکن: نقطهٔ جدید کنار گذاشته می‌شود (پرش تلگرافی)
        distance += d
        accepted.append(cur)
    if stats["bad_speed"] > MAX_BAD_SEGMENTS:
        return _reject("impossible_speed", duration_s, stats)

    distance = round(distance, 1)
    # کنترل میانگین کل: کل مسافت در کل مدت باید ممکن باشد
    if duration_s >= 30 and distance / duration_s > rule["max_speed_mps"]:
        return _reject("impossible_average", duration_s, stats)
    if distance > rule["max_distance_m"]:
        return _reject("distance_cap", duration_s, stats)
    if distance < MIN_VALID_DISTANCE_M:
        return {
            "valid": False, "reject_reason": "below_minimum", "distance_m": distance,
            "steps": 0, "duration_s": round(duration_s, 1),
            "accepted_points": len(accepted), "stats": stats,
        }

    steps = int(distance / rule["stride_m"])
    return {
        "valid": True, "reject_reason": None,
        "distance_m": distance, "steps": steps,
        "duration_s": round(duration_s, 1), "accepted_points": len(accepted),
        "stats": stats,
    }


def _reject(reason: str, duration_s: float, stats: dict | None = None) -> dict:
    return {"valid": False, "reject_reason": reason, "distance_m": 0.0, "steps": 0,
            "duration_s": round(duration_s, 1), "accepted_points": 0, "stats": stats or {}}


def privacy_path(points: list[dict]) -> list[dict]:
    """نمونه‌برداری مسیر برای ذخیره — حداقلِ لازم از اطلاعات مکانی.

    حداکثر ۶۰ نقطه با فاصله‌ی یکسان + گرد کردن مختصات (~۱۱ متر).
    بدون رضایت صریح این تابع هرگز صدا زده نمی‌شود.
    """
    pts = [p for p in points if p is not None]
    if not pts:
        return []
    if len(pts) > PATH_MAX_POINTS:
        step = len(pts) / PATH_MAX_POINTS
        pts = [pts[int(i * step)] for i in range(PATH_MAX_POINTS)]
    return [{"lat": round(p["lat"], PATH_COORD_DECIMALS),
             "lon": round(p["lon"], PATH_COORD_DECIMALS),
             "t": int(p["t"])} for p in pts]


def reward_for(distance_m: float, steps: int) -> int:
    """پاداش توکن جلسهٔ معتبر — فقط وقتی settings.zivan_rewards_enabled فعال است.

    فرمول محافظه‌کارانه: ۱ توکن به‌ازای هر کیلومتر معتبر + سقف ۵۰ توکن در جلسه.
    """
    if distance_m <= 0:
        return 0
    return min(50, int(distance_m // 1000))


# --- مأموریت‌های روزانه/هفتگی (کد-محور؛ پیشرفت فقط از جلسه‌های معتبر) --------
# metric: distance_m | steps | balance_s | sessions
# دامنهٔ فعالیت هر مأموریت در TEMPLATE مشخص است (hall=null یعنی همهٔ تالارها).
MISSION_TEMPLATES: dict[str, dict] = {
    "daily_walk_3k":      {"name": "پیاده‌روی ۳ کیلومتر", "period": "daily",
                           "metric": "distance_m", "target": 3000, "hall": None,
                           "icon": "🥾", "reward": 2},
    "daily_steps_8k":     {"name": "۸٬۰۰۰ قدم امروز", "period": "daily",
                           "metric": "steps", "target": 8000, "hall": None,
                           "icon": "👟", "reward": 3},
    "daily_balance_120s": {"name": "۱۲۰ ثانیه تمرین تعادل", "period": "daily",
                           "metric": "balance_s", "target": 120, "hall": "balance",
                           "icon": "🧘", "reward": 2},
    "daily_run_2k":       {"name": "دویدن ۲ کیلومتر", "period": "daily",
                           "metric": "distance_m", "target": 2000, "hall": "running",
                           "icon": "🏃", "reward": 2},
    "weekly_walk_15k":    {"name": "۱۵ کیلومتر در هفته", "period": "weekly",
                           "metric": "distance_m", "target": 15_000, "hall": None,
                           "icon": "🗺️", "reward": 6},
    "weekly_sessions_5":  {"name": "۵ جلسهٔ معتبر در هفته", "period": "weekly",
                           "metric": "sessions", "target": 5, "hall": None,
                           "icon": "📅", "reward": 5},
    "weekly_balance_600s": {"name": "۱۰ دقیقه تمرین تعادل در هفته", "period": "weekly",
                            "metric": "balance_s", "target": 600, "hall": None,
                            "icon": "🪶", "reward": 6},
    "weekly_run_8k":      {"name": "۸ کیلومتر دویدن در هفته", "period": "weekly",
                           "metric": "distance_m", "target": 8000, "hall": "running",
                           "icon": "💨", "reward": 6},
}

MISSION_MAX_CLAIMS_PER_DAY = 10   # سقف ضد اسپمِ دعوای پاداش

# --- چالش دوستانه -------------------------------------------------------------
CHALLENGE_METRICS = {"steps": "قدم معتبر", "distance_m": "مسافت معتبر (متر)"}
CHALLENGE_MIN_HOURS = 1
CHALLENGE_MAX_HOURS = 7 * 24
CHALLENGE_MIN_TARGET = {"steps": 500, "distance_m": 500}
CHALLENGE_MAX_TARGET = {"steps": 200_000, "distance_m": 100_000}
CHALLENGE_MAX_OPEN_PER_ACCOUNT = 5

# --- رقابت گروهی ---------------------------------------------------------------
GROUP_MAX_MEMBERS = 20
GROUP_MAX_PER_ACCOUNT = 5
GROUP_NAME_MAX = 40
RACE_DURATION_CHOICES = {"1d": 86400, "3d": 3 * 86400, "7d": 7 * 86400}
RACE_MAX_ACTIVE_PER_GROUP = 1

# --- لحظه‌ها (عکس طبیعت — گالری خصوصی) ---------------------------------------
MOMENT_MAX_BYTES = 1_500_000      # سقف حجم عکس خام
MOMENT_MAX_PER_ACCOUNT = 30       # سقف گالری هر حساب (ضد اسپم/حافظه)
MOMENT_CAPTION_MAX = 200
MOMENT_MAGIC = {                  # فقط امضای واقعی فایل ملاک است، نه نوع ادعایی
    b"\xff\xd8\xff": "image/jpeg",
    b"\x89PNG\r\n\x1a\n": "image/png",
}


def moment_image_type(head: bytes) -> str | None:
    """تشخیص نوع واقعی عکس با امضای بایت‌ها — تشخیص ادعای کلاینت ملاک نیست."""
    for magic, ctype in MOMENT_MAGIC.items():
        if head.startswith(magic):
            return ctype
    return None


# --- مأموریت اجتماعی جمعی (سهم از فعالیت معتبر) ------------------------------
SOCIAL_CONTRIBUTION_METRICS = {"distance_m": "کیلومتر جمعی", "steps": "قدم جمعی"}
SOCIAL_MAX_MISSIONS_ACTIVE = 5

# --- امتیاز جام هفتگی ---------------------------------------------------------
def cup_score(steps: int, balance_s: int) -> int:
    """امتیاز شفاف جام: قدم معتبر + ثانیهٔ تمرین تعادلی معتبر.

    فرمول عمداً ساده و قابل توضیح داخل محصول است؛ هیچ عددی از کلاینت
    وارد این محاسبه نمی‌شود.
    """
    return int(steps or 0) + int(balance_s or 0)


def make_invite_code(rng) -> str:
    """کد دعوت ۸ نویسه‌ای از الفبای بی‌ابهام (بدون 0/O/1/I)."""
    alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"
    return "".join(alphabet[rng.randrange(len(alphabet))] for _ in range(8))


def validate_protocol_session(
    protocol_id: str,
    started_at_ts: float,
    finished_at_ts: float,
) -> dict:
    """حکم سرور برای جلسهٔ پروتکل تایمری — مدت فقط از ساعت سرور.

    خروجی: valid / reject_reason / duration_s / protocol. سقف با
    حاشیهٔ ۱٫۶ برابر (فراموشی توقف) و کف بدون حاشیه بررسی می‌شود.
    """
    p = PROTOCOLS.get(protocol_id)
    if p is None:
        return {"valid": False, "reject_reason": "unknown_protocol",
                "duration_s": 0, "protocol": None}
    duration = max(0.0, finished_at_ts - started_at_ts)
    if duration < p["min_s"]:
        return {"valid": False, "reject_reason": "too_short",
                "duration_s": round(duration, 1), "protocol": p}
    if duration > p["max_s"] * PROTOCOL_TOLERANCE_RATIO:
        return {"valid": False, "reject_reason": "too_long",
                "duration_s": round(duration, 1), "protocol": p}
    return {"valid": True, "reject_reason": None,
            "duration_s": round(duration, 1), "protocol": p}
