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
