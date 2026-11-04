# اتصال GitHub — وضعیت واقعی و امنیت

## مشخصات مخزن (بررسی‌شده با API در ۲۰۲۶-۱۱-۰۱)

- **مخزن:** https://github.com/peymankhosravirad470-cell/darvazeha
- **مالک حساب:** peymankhosravirad470-cell (Peyman Rad)
- **شاخهٔ اصلی:** `main`
- **وضعیت دید (visibility):** **Public** — وضعیت واقعی فعلی.
  (در لحظهٔ ساخت خصوصی بود و بعداً توسط مالک عمومی شد؛ هرگونه تغییر مجدد
  visibility فقط با اجازهٔ صریح مالک انجام می‌شود.)

## وضعیت انتشار

- مخزن ≠ وب‌سایت. **بازی منتشر نشده است** (هیچ هاست/دامنه‌ای وجود ندارد).
- روش اجرا: باز کردن `index.html` به‌صورت محلی در مرورگر (بدون نیاز به سرور).

## احراز هویت push

**روش انتخابی: credential helper محلی** (معادل عملیاتی Git Credential Manager در این محیط).

- **SSH در این محیط در دسترس نیست** (`ssh-keygen` و `ssh` نصب نیستند و دسترسی نصب وجود ندارد) —
  بنابراین روش SSH اجرا نشد و این موضوع صریحاً گزارش شده است.
- توکن **بیرون از پوشهٔ مخزن** نگه‌داری می‌شود:
  `~/.config/darvazeha/github.token` (پوشه 700، فایل 600)
- `scripts/git-credential-darvazeha` تنها در لحظهٔ push و فقط برای میزبان
  `github.com` اعتبارنامه را به git می‌دهد؛ **توکن هرگز در URL فرمان، خروجی،
  گزارش‌ها یا کامیت‌ها ظاهر نمی‌شود.**
- `scripts/push.sh` فقط `git push origin main` اجرا می‌کند.
- نصب helper (یک‌بار، فقط محلی):
  `git config credential.helper "$PWD/scripts/git-credential-darvazeha"`

### اگر فایل توکن جابه‌جا یا پاک شد

```bash
mkdir -p ~/.config/darvazeha && chmod 700 ~/.config/darvazeha
printf '%s' 'TOKEN' > ~/.config/darvazeha/github.token
chmod 600 ~/.config/darvazeha/github.token
./scripts/push.sh   # تست
```

## امنیت توکن — وضعیت و هشدار

- ✅ ممیزی کامل تاریخچهٔ git انجام شد: **هیچ توکنی در هیچ کامیت/فایلی ثبت نشده است.**
- ✅ remote URL فاقد توکن است؛ فایل‌های حساس در `.gitignore` هستند.
- ⚠️ **هشدار:** توکن فعلی (۱) قبلاً در متن چت جای‌گذاری شده (سطح افشا: گفتگو)،
  (۲) دسترسی‌های بسیار گسترده‌ای دارد (شامل `delete_repo`، `admin:*`).
  **توصیه:** لغو آن و جایگزینی با توکن fine-grained با فقط مجوز Contents:Read/Write
  روی همین مخزن. **بدون تأیید صریح مالک هیچ توکنی لغو یا جایگزین نمی‌شود.**
- پس از پایان پروژه، کلید دسترسی حذف (Revoke) شود.

## ساختار تحویل

- مرجع کد: `index.html` در ریشهٔ مخزن (روی GitHub قابل مشاهده است).
- نسخهٔ نسخه‌دار تحویلی: `darvazeha-v1.html` — کپی بایت‌به‌بایت یکسان از `index.html`
  در پوشهٔ محلی `download/` (برای ضدکش). این پوشه **عمداً** در `.gitignore` است و
  فایل غیرضروری به مخزن اضافه نمی‌شود.
- نام نسخه‌دار فایل مانع نمایش نسخهٔ قدیمی از کش مرورگر می‌شود.

## قاعدهٔ کار (الزام مالک)

پس از هر تغییر: کامیت جداگانه با پیام دقیق، سپس push؛ هش کامیت‌ها در گزارش‌ها.
اگر push شکست بخورد، ثبت‌شدن تغییرات روی GitHub ادعا نمی‌شود.
## توکن Fine-grained — دستورالعمل (الزام کارفرما — ۲۰۲۶-۱۱-۰۴)

ساخت PAT (کلاسیک یا fine-grained) از طریق API گیت‌هاب **ممکن نیست** — فقط از رابط وب.
مراحل برای مالک حساب:

1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → Generate new token
2. Repository access: **Only select repositories** → `peymankhosravirad470-cell/darvazeha`
3. Permissions → Repository permissions → **Contents: Read and write** (همین یکی بس است)
4. Expiration: کوتاه (مثلاً ۳۰ روز)
5. اعتبارسنجی توکن جدید: `git ls-remote https://github.com/peymankhosravirad470-cell/darvazeha.git`
6. پس از تأیید عملکرد توکن جدید، توکن قبلی (scopeهای گسترده شامل `delete_repo`/`admin:*`) لغو شود و مقدار جدید در
   `~/.config/darvazeha/github.token` (chmod 600) جایگزین گردد. **لغو توکن فعلی پیش از عملی‌بودن توکن جدید انجام نمی‌شود.**

