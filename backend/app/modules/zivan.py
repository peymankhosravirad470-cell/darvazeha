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
# وضعیت‌ها: live (فعالیت واقعی کار می‌کند) | structure (تالار ساخته شده؛
# فعالیت اختصاصی آن در نسخهٔ بعد — صادقانه برچسب می‌خورد)

HALLS: list[dict] = [
    {"id": "walking", "name": "تالار پیاده‌روی", "activity": "walk",
     "tagline": "ثبت مسیر، مسافت، مدت و قدم‌ها با GPS و اجازهٔ کاربر",
     "status": "live", "icon": "footprints"},
    {"id": "steps_battle", "name": "تالار نبرد قدم‌ها", "activity": "walk",
     "tagline": "رقابت فردی بر اساس قدم‌های معتبر سمت‌سرور",
     "status": "live", "icon": "swords"},
    {"id": "running", "name": "تالار دویدن", "activity": "run",
     "tagline": "ثبت فعالیت و مسابقه‌های دویدن",
     "status": "live", "icon": "wind"},
    {"id": "nature_trail", "name": "تالار طبیعت‌گردی", "activity": "walk",
     "tagline": "مأموریت کشف مسیر و ثبت برداشت از طبیعت",
     "status": "live", "icon": "mountain"},
    {"id": "balance", "name": "تالار تعادل و انعطاف", "activity": "balance",
     "tagline": "چالش‌های تعادل، هماهنگی و انعطاف‌پذیری",
     "status": "structure", "icon": "feather"},
    {"id": "group_training", "name": "تالار تمرین گروهی", "activity": "group",
     "tagline": "مأموریت‌ها و تمرین‌های مشترک دوستان",
     "status": "structure", "icon": "users"},
    {"id": "friendly_challenge", "name": "تالار چالش دوستانه", "activity": "duel",
     "tagline": "مسابقات ورزشی و فعالیت‌های دوستانه",
     "status": "structure", "icon": "flag"},
    {"id": "social_mission", "name": "تالار مأموریت اجتماعی", "activity": "social",
     "tagline": "فعالیت‌های جمعی و کمک‌رسانی",
     "status": "structure", "icon": "heart"},
    {"id": "grand_cup", "name": "تالار جام بزرگ سلامت", "activity": "cup",
     "tagline": "مسابقات دوره‌ای و رتبه‌بندی بازیکنان",
     "status": "structure", "icon": "trophy"},
    {"id": "moments", "name": "تالار ثبت لحظه‌ها", "activity": "moments",
     "tagline": "عکاسی از طبیعت با رعایت حریم خصوصی",
     "status": "structure", "icon": "camera"},
]

HALL_IDS = {h["id"] for h in HALLS}
LIVE_HALL_IDS = {h["id"] for h in HALLS if h["status"] == "live"}

# فعالیت‌های GPS-محورِ قابل اعتبارسنجی فعلی
VALID_ACTIVITIES = {"walk", "run"}

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
