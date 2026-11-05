# استقرار روی Liara — دستور دقیق و متغیرهای محیطی

این سند فقط «چگونه» استقرار را توضیح می‌دهد؛ **هیچ راز یا توکنی در این فایل یا
در هر فایل دیگری از مخزن قرار نمی‌گیرد.** تمام مقادیر حساس باید در داشبورد
Liara یا با `liara envs set` تنظیم شوند.

## ۱) فرمان استقرار (از ریشهٔ مخزن)

`liara.json` در ریشه با پلتفرم docker، پورت ۸۰۰۰ و health-check از نوع exec
(`command`) آماده است؛ CLI نسخه ۹ لایارا healthCheck را فقط به‌صورت `command`
می‌پذیرد و همان دستور `/health` را داخل کانتینر اجرا می‌کند. Dockerfile اصلی
`backend/Dockerfile` است (context = ریشهٔ مخزن):

```bash
liara deploy --app <APP_ID> --dockerfile backend/Dockerfile
```

- اگر `liara.json` وجود داشته باشد، `--platform` و `--port` و health-check از
  آن خوانده می‌شود.
- دستور ساخت ایمیج دقیقاً همان مسیری است که CI انجام می‌دهد
  (`docker build -f backend/Dockerfile .`) و پیش‌تر در CI سبز شده است.

## ۲) متغیرهای محیطی الزامیِ Production (بدون آن‌ها سرور بالا نمی‌آید)

طبق کنترل‌های `backend/app/main.py` در `APP_ENV=production`:

| متغیر | شرط |
|---|---|
| `APP_ENV` | `production` |
| `DATABASE_URL` | آدرس PostgreSQL واقعی (`postgres://` یا `postgresql+psycopg://`) |
| `BALE_BOT_TOKEN` | توکن واقعی ربات بله (از BotFather بله) |
| `BALE_WEBHOOK_SECRET` | مقدار تصادفی ≥۳۲ کاراکتر |
| `SESSION_SECRET` | مقدار تصادفی ≥۳۲ کاراکتر، متفاوت از WEBHOOK_SECRET |

تنظیم نمونه (مقادیر را خودتان وارد کنید؛ هرگز در کد/کامیت/گفتگو ننویسید):

```bash
liara envs set --app <APP_ID> APP_ENV production
liara envs set --app <APP_ID> DATABASE_URL 'postgresql+psycopg://...'
liara envs set --app <APP_ID> BALE_BOT_TOKEN '...'
liara envs set --app <APP_ID> BALE_WEBHOOK_SECRET '<random-32+>'
liara envs set --app <APP_ID> SESSION_SECRET   '<random-32+>'
```

## ۳) اتصال ربات بله

1. در بله‌ساز، دکمهٔ منوی Mini App/Web App را روی دامنهٔ نهایی اپ قرار دهید
   (مثلاً `https://<APP_ID>.liara.run`).
2. دکمهٔ ربات ریشهٔ دامنه را باز می‌کند → همان صفحهٔ اصلی (`index.html`) که
   کارت «هفت دروازهٔ رسمی» دارد و به `/game/gates/index.html` می‌رود.
3. HTTPS پیش‌فرض Liara است؛ بله فقط HTTPS را باز می‌کند.

## ۴) پس از انتشار

- Deployment ID در خروجی CLI و داشبورد Liara نمایش داده می‌شود؛ آن را در
  گزارش نهایی ثبت کنید.
- صحت زنجیرهٔ کیف پول را با دستگاه واقعی داخل بله چک کنید:
  ورود → هفت پرچم → انتخاب تارگون → ۱۱ سرزمین → جهان سه‌بعدی → چیپ کیف پول
  باید «متصل» و برابر با موجودی رسمی دفترکل باشد؛ بدون Backend معتبر، فقط
  «قطع» نمایش داده می‌شود و هیچ عددی نشان داده نمی‌شود.
