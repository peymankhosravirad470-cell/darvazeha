# اتصال GitHub — مشخصات مخزن

- **مخزن:** https://github.com/peymankhosravirad470-cell/darvazeha
- **مالک حساب:** peymankhosravirad470-cell (Peyman Rad)
- **شاخهٔ اصلی:** `main`
- **نوع مخزن:** Private

## قاعدهٔ کار (الزام پروژه)

پس از **هر** تغییر (کوچک یا بزرگ): `git commit` فوری، سپس push. هیچ کدی فقط در محیط session نمی‌ماند.

## نحوهٔ push

توکن در فایل `token.github` (در ریشهٔ پروژه، ignore شده، دسترسی 600) نگه داشته می‌شود
و **هرگز** داخل کد، کامیت یا خروجی چاپ نمی‌شود.

```bash
# روش ساده:
./scripts/push.sh

# روش دستی:
git push "https://peymankhosravirad470-cell:$(cat token.github)@github.com/peymankhosravirad470-cell/darvazeha.git" main
```

## اگر توکن منقضی/حذف شد

1. توکن جدید بسازید (GitHub → Settings → Developer settings)
2. فقط مقدار جدید را در فایل `token.github` ذخیره کنید:
   `printf '%s' 'TOKEN' > token.github && chmod 600 token.github`
3. `./scripts/push.sh` را اجرا کنید

## امنیت

- فایل `token.github` در `.gitignore` است (`token*`) — هرگز کامیت نمی‌شود
- فایل `.env` نیز ignore شده و از تاریخچهٔ مخزن حذف است
- پس از پایان پروژه، توکن از پنل GitHub حذف (Revoke) شود
