# فیکسچر SDK رسمی بله

`miniapp.js` = کپی محلیِ «همان فایلی» که صفحه‌ها از `https://tapi.bale.ai/miniapp.js` بارگذاری می‌کنند.

- کاربرد: آزمون‌های قطعیِ آفلاین — `tests/test_js_scope.mjs` (دامنهٔ سراسری) و
  `tests/test_pages_boot.py` (بوت مرورگر با route interception).
- به‌روزرسانی: `curl -s https://tapi.bale.ai/miniapp.js -o tests/fixtures/miniapp.js`
- این فایل «در صفحه» استفاده نمی‌شود؛ صفحه‌ها همیشه نسخهٔ رسمی روی CDN بله را بارگذاری می‌کنند.
