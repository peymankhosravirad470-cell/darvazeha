/* ═══════════ ابزارهای پایه — هفتاد و هفت سرزمین ═══════════ */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const fa = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

/* شناسهٔ یکتا (هویت بازیکن / رویداد دفترکل) */
function uuid(){
  let u = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c=>{
    const r = Math.random()*16|0, v = c==='x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
  return u;
}

/* هش ۵۳بیتی (cyrb53) — زنجیرهٔ دست‌نخوردگی دفترکل (مرحله ۷)
   یادآوری صادقانه: در نسخهٔ نهایی، دفترکل و پاداش سمت سرور است (D13)؛
   این زنجیره فقط دستکاری محلیِ فایل ذخیره را آشکار می‌کند. */
function hstr(str, seed=0){
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for(let i = 0; i < str.length; i++){
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1>>>16), 2246822507); h1 ^= Math.imul(h2 ^ (h2>>>13), 3266489909);
  h2 = Math.imul(h2 ^ (h2>>>16), 2246822507); h2 ^= Math.imul(h1 ^ (h1>>>13), 3266489909);
  return (h2>>>0).toString(16).padStart(8,'0') + (h1>>>0).toString(16).padStart(8,'0');
}
