# هفتاد و هفت سرزمین

بازی ماجراجویی فارسی (RTL) با تم سفر میان سرزمین‌ها — یک مخزن، دو جریانِ هم‌زیست:

1. **بازی کامل نسخهٔ ۰٫۳** ([`game/index.html`](game/index.html)) — تک‌فایل آفلاین قابل‌بازی: سه سرزمین کامل، اقتصاد، مأموریت، دفترکل زنجیره‌دار
2. **مینی‌اپ متصل به سرور** ([`index.html`](index.html) + [`backend/`](backend/)) — رابط v1 متصل به SDK بله و API سروری (FastAPI/PostgreSQL)

> نام مخزن `darvazeha` به‌دلایل تاریخی حفظ شده است؛ نام رسمی محصول «هفتاد و هفت سرزمین» است.

## وضعیت انتشار — شفاف

- استقرار عمومی و انتشار روی دامنه هنوز انجام نشده است؛ ساخت مخزن به معنای انتشار بازی نیست.
- Backend و دیتابیس روی Liara هنوز مستقر/پیکربندی نشده‌اند؛ ورود و همگام‌سازی ابری فقط پس از تنظیم رازها و استقرار فعال می‌شود.
- بازکردن مستقیم فایل‌ها در مرورگر، پیش‌نمایش محلی است و هویت بله یا همگام‌سازی سروری ایجاد نمی‌کند.
- گزارش عیب‌یابی استقرار Liara (۲۰۲۶-۱۱-۰۴): [`reports/2026-11-02-delivery-status.md`](reports/2026-11-02-delivery-status.md)

## بازی کامل نسخهٔ ۰٫۳ (آفلاین)

- فایل: [`game/index.html`](game/index.html) — تک‌فایل آفلاین (~۱۳۵KB، بدون کتابخانه) · منبع ماژولار: [`src/`](src/) · ساخت: `python3 scripts/build.py`
- قابل‌بازی: سرزمین ۱ «دریای شیشه‌ای» + سرزمین ۲ «جنگل نقره‌ای» + سرزمین ۳ «کوه بلورین» (هرکدام با مأموریت، NPC و اقتصاد اختصاصی)
- سیستم‌های متصل: ساخت شخصیت + شناسهٔ یکتا · ۵ مهارت با مزیت قطعی · تجهیزات و جامه · بازار محلی + مزرعه (چرخهٔ D16) · موتور مأموریت داده‌محور + گشودن زنجیره‌ای ۱۳ دروازه · دفترکل زنجیره‌دار با آشکارسازی دستکاری · شب/روز + صدا + لرزش
- آزمون: **۳۷/۳۷ PASS** ([`tests/verify_game.py`](tests/verify_game.py)، شبیه‌سازی اندروید لمسی) · رگرسیون: نمونهٔ اولیه ۲۲/۲۲ ([`tests/verify_prototype.py`](tests/verify_prototype.py)) · v1 ۱۶/۱۶ ([`scripts/verify.py`](scripts/verify.py))
- سرزمین‌های ۴–۱۳: ساختار و شرط واقعی؛ محتوا پس از تصمیم A1 به‌صورت داده اضافه می‌شود
- راهنمای کامل اجرا و بازی: [`docs/GAME-GUIDE.md`](docs/GAME-GUIDE.md) · گزارش‌های مرحله‌ای: [`reports/`](reports/) · [`CHANGELOG.md`](CHANGELOG.md)

## Backend و مینی‌اپ بله

- Backend: Python 3.11+ / FastAPI / SQLAlchemy — معماری Modular Monolith
- Database: PostgreSQL · Hosting مصوب: Liara (استقرار هنوز انجام نشده)
- رابط v1: اتصال Mini App به SDK بله، ورود با initData، بارگذاری وضعیت سرور، انتقال اختیاری سابقهٔ localStorage با رضایت بازیکن
- تصمیم‌های فنی تأییدشده: [docs/DECISIONS.md](docs/DECISIONS.md) · راهنمای Backend و استقرار Liara/بله: [backend/README.md](backend/README.md)
- در Mini App، سرور مرجع اصلی داده است و `localStorage` فقط کش موقت است؛ رویدادهای مینی‌گیم فعلاً با برچسب `client_unverified` ثبت می‌شوند و پاداش ندارند.

## جهان ۷۷ سرزمینی

Backend برای ۷۷ سرزمین رکورد ایجاد می‌کند. نام ۱۳ دروازهٔ رابط فعلی حفظ شده است؛ ۱۳ دروازه معادل کل جهان بازی نیستند و با مفهوم ۷۷ سرزمین یکسان نیستند. در بازی ۰٫۳ نیز گشودن سرزمین‌ها زنجیره‌ای و شرطی است.

## آزمون و انتشار

| مجموعه آزمون | اجرا |
|---|---|
| بازی ۰٫۳ — ۳۷ بررسی | `python3 tests/verify_game.py` |
| نمونهٔ اولیه — ۲۲ بررسی | `python3 tests/verify_prototype.py` |
| رابط v1 — ۱۶ بررسی | `python3 scripts/verify.py` |
| Backend | CI: [backend.yml](https://github.com/peymankhosravirad470-cell/darvazeha/actions/workflows/backend.yml) |
| مینی‌گیم تعادل | CI: [balance-game.yml](https://github.com/peymankhosravirad470-cell/darvazeha/actions/workflows/balance-game.yml) |

**امنیت:** هیچ توکن، رمز دیتابیس یا راز webhook نباید وارد مخزن شود (`.gitignore` پوشش داده است). پس از هر تغییر: کامیت کوچک معنادار → push → هش کامیت‌ها در گزارش‌ها ثبت می‌شود.
