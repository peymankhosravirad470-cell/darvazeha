# Backend — هفتاد و هفت سرزمین

FastAPI + SQLAlchemy + PostgreSQL. SQLite فقط برای تست/توسعهٔ محلی است.

## اجرای محلی

از پوشهٔ backend:

1. محیط مجازی Python بسازید و وابستگی‌های requirements.txt را نصب کنید.
2. فایل .env.example را به .env کپی کنید.
3. قبل از اجرای برنامه، دستور alembic upgrade head را اجرا کنید.
4. برنامه را با uvicorn app.main:app --reload اجرا کنید.

در توسعهٔ محلی، مقدار پیش‌فرض دیتابیس SQLite است. برای اجرای PostgreSQL، مقدار DATABASE_URL را در محیط یا .env تنظیم کنید. برنامه هنگام شروع جدول‌ها را خودکار نمی‌سازد؛ ساختار دیتابیس فقط از طریق Alembic مدیریت می‌شود.

## API

- GET / — فایل Mini App
- GET /health — سلامت برنامه و اتصال واقعی دیتابیس
- POST /api/v1/auth/bale
- POST /api/v1/auth/logout
- GET /api/v1/players/me
- GET /api/v1/world/territories — ۷۷ سرزمین
- GET /api/v1/progress
- PUT /api/v1/progress/snapshot
- POST /api/v1/progress/events
- POST /api/v1/progress/migrate
- POST /api/v1/integrations/bale/webhook/{BALE_WEBHOOK_SECRET}

پاسخ /health فقط در صورت موفقیت پرس‌وجوی دیتابیس SELECT 1 کد ۲۰۰ می‌دهد؛ در صورت قطع دیتابیس کد ۵۰۳ برمی‌گرداند. خطای دیتابیس یا Migration نباید به‌عنوان سلامت سرویس گزارش شود.

## استقرار روی Liara — آماده‌سازی

### ۱. تنظیم سرویس

1. یک سرویس برنامه با روش Docker بسازید و مخزن GitHub را متصل کنید.
2. Build context را ریشهٔ مخزن قرار دهید و مسیر Dockerfile را backend/Dockerfile تنظیم کنید.
3. پورت سرویس را 8000 قرار دهید. برنامه از متغیر محیطی PORT استفاده می‌کند و در نبود آن روی 8000 گوش می‌دهد.
4. یک دیتابیس PostgreSQL در Liara بسازید. Connection string صادرشده توسط Liara را بدون بازنویسی در متغیر محیطی DATABASE_URL سرویس برنامه قرار دهید. فرمت‌های postgres:// و postgresql:// به درایور psycopg تبدیل می‌شوند؛ postgresql+psycopg:// نیز پذیرفته می‌شود.

### ۲. متغیرهای محیطی

در بخش Environment Variables سرویس برنامه، این مقادیر را تعریف کنید:

| نام | الزام |
|---|---|
| APP_ENV | دقیقاً production |
| DATABASE_URL | Connection string دیتابیس PostgreSQL لیارا |
| BALE_BOT_TOKEN | توکن واقعی ربات بله |
| BALE_WEBHOOK_SECRET | مقدار تصادفی مستقل، حداقل ۳۲ کاراکتر |
| SESSION_SECRET | مقدار تصادفی مستقل از Webhook، حداقل ۳۲ کاراکتر |
| INIT_DATA_MAX_AGE_SECONDS | در صورت عدم تعیین، 300 |
| SESSION_TTL_SECONDS | در صورت عدم تعیین، 3600 |

هیچ‌یک از Secretها را در GitHub، فایل‌های مخزن، Dockerfile، گزارش‌ها یا پیام‌های عمومی قرار ندهید. Secret واقعی را برای بررسی یا پشتیبانی ارسال نکنید. مقادیر نمونهٔ .env.example برای production معتبر نیستند.

### ۳. Migration و شروع سرویس

Docker ابتدا فرمان alembic upgrade head را اجرا می‌کند و فقط در صورت موفقیت Migration، Uvicorn را بالا می‌آورد. بنابراین شکست Migration مانع شروع سرویس می‌شود. برای جلوگیری از رقابت هنگام بالا آمدن چند replica هم‌زمان، Migrationهای PostgreSQL از advisory lock سطح نشست استفاده می‌کنند؛ بسته‌شدن اتصال قفل را آزاد می‌کند.

مهم: اپلیکیشن در startup از Base.metadata.create_all استفاده نمی‌کند. تغییر ساختار دیتابیس فقط باید از Migrationهای نسخه‌بندی‌شدهٔ Alembic عبور کند. Migration را دستی روی دیتابیس عملیاتی اجرا نکنید مگر در یک برنامهٔ نگهداری کنترل‌شده و با نسخهٔ پشتیبان.

### ۴. دامنه و بله

1. دامنهٔ HTTPS را به سرویس متصل کنید.
2. پس از آماده‌شدن دامنه، URL وبهوک را با متد رسمی setWebhook بازوی بله ثبت کنید؛ مسیر فعلی:
   https://YOUR_DOMAIN/api/v1/integrations/bale/webhook/BALE_WEBHOOK_SECRET
3. نشانی HTTPS ریشهٔ برنامه را به‌عنوان Mini App اصلی یا در دکمهٔ web_app تنظیم کنید.
4. ورود واقعی، Update نوع contact، بازشدن Mini App و هدرهای موردنیاز iframe را داخل کلاینت واقعی بله آزمایش کنید.

## آزمون‌ها

از پوشهٔ backend، دستور python -m pytest -q را اجرا کنید. برای بررسی Migration نیز alembic upgrade head را اجرا کنید.

گردش‌کار GitHub Actions آزمون‌های Backend، Migration روی SQLite و PostgreSQL خالی، ساخت Docker image و اجرای کانتینر با دیتابیس PostgreSQL را بررسی می‌کند.

## امنیت و مرز اعتماد

- امضای initData مطابق الگوریتم مستندات بله در سرور اعتبارسنجی می‌شود.
- شماره فقط از Update معتبر contact و پس از تطبیق contact.user_id == from.id تأیید می‌شود.
- رویدادهای گزارش‌شده از کلاینت با client_unverified ذخیره می‌شوند و پاداش نمی‌گیرند.
- موجودی اولیهٔ بازیکن صفر است؛ این مرحله هیچ توکن یا پاداشی ایجاد نمی‌کند.
- هیچ Secret واقعی در مخزن قرار نگیرد.
