# Backend — هفتاد و هفت سرزمین

FastAPI + SQLAlchemy + PostgreSQL. SQLite فقط برای تست/توسعهٔ محلی است.

## اجرا
`pip install -r requirements.txt`، سپس `.env.example` را به `.env` کپی و مقادیر را تنظیم کنید؛ در پایان:
`uvicorn app.main:app --reload`

## API
- GET /health
- POST /api/v1/auth/bale
- GET /api/v1/players/me
- GET /api/v1/world/territories (۷۷ سرزمین)
- GET /api/v1/progress
- PUT /api/v1/progress/snapshot
- POST /api/v1/progress/events
- POST /api/v1/integrations/bale/webhook/{BALE_WEBHOOK_SECRET}

## امنیت و محدودیت
امضای initData مطابق الگوریتم مستندات بله بررسی می‌شود. رویدادهای گزارش‌شده از کلاینت با client_unverified ذخیره می‌شوند و پاداش نمی‌گیرند. شماره فقط از Update معتبر contact و پس از تطبیق شناسه ثبت می‌شود. وبهوک با URL دارای secret تصادفی محافظت می‌شود؛ ثبت webhook و دریافت Update واقعی باید در محیط بله تست شود. هیچ راز واقعی در مخزن قرار ندهید.


## استقرار روی Liara (هنوز اجرا نشده)

1. مخزن را به سرویس Docker متصل کنید؛ build context را ریشهٔ مخزن و Dockerfile را `backend/Dockerfile` قرار دهید.
2. یک سرویس PostgreSQL در Liara بسازید و connection string آن را در متغیر `DATABASE_URL` سرویس برنامه قرار دهید.
3. متغیرهای `APP_ENV=production`، `BALE_BOT_TOKEN`، `BALE_WEBHOOK_SECRET` (حداقل ۳۲ کاراکتر تصادفی) و `SESSION_SECRET` (حداقل ۳۲ کاراکتر تصادفی مستقل) را تنظیم کنید.
4. دامنهٔ HTTPS را به سرویس متصل کنید. مسیر `/` مینی‌اپ و `/health` بررسی سلامت را ارائه می‌کند.
5. پس از استقرار، URL وبهوک را به شکل `https://YOUR_DOMAIN/api/v1/integrations/bale/webhook/BALE_WEBHOOK_SECRET` با متد setWebhook بازوی بله ثبت کنید. ثبت واقعی webhook هنوز انجام نشده است.
6. در BotFather نشانی ریشهٔ HTTPS را به‌عنوان Mini App اصلی ثبت کنید یا از دکمهٔ `web_app` استفاده کنید.

**نکته:** قبل از انتشار، اجرای واقعی Mini App در اندروید و وب بله، دریافت Update نوع contact و تنظیم CSP/هدرهای iframe باید تست شود. این راهنما جایگزین تأیید تنظیمات واقعی پنل Liara و بله نیست.
