/* ═══════════ رابط کاربری هفت قلمرو (مرحله ۱) ═══════════
   سه صفحهٔ جدید: منوی قلمروها (#screen-realms) · معرفی قلمرو (#screen-domain)
   · شبکهٔ ۱۱ سرزمین (#screen-lands).
   مرز تغییرات: فقط این ماژول + markup/استایل صفحات جدید. منطق اقتصادی،
   دفترکل، وضعیت بازیکن و نقشهٔ ۱۳ دروازه‌ای فعلی دست‌نخورده می‌ماند. */

let currentDominion = null;   // قلمروی در حال مشاهده (فقط حالت رابط، بدون ذخیره)

function dominionImgStyle(d){
  return 'background:linear-gradient(150deg,' + d.c1 + '33,' + d.c2 + '22)';
}

/* ---------- ۱) منوی هفت قلمرو ---------- */
function renderRealmsMenu(){
  const grid = $('#realms-grid'); grid.innerHTML = '';
  const sum = dominionStatusSummary();
  $('#chip-realms-status').textContent = 'آزاد: ' + fa(sum.open) + ' از ' + fa(sum.total) + ' قلمرو';
  DOMINIONS.forEach(d => {
    const open = isDominionUnlocked(d.id);
    const card = document.createElement('button');
    card.className = 'dom-card ' + (open ? 'open' : 'locked');
    card.dataset.domain = d.id;

    const imgHTML = d.img
      ? '<img class="dom-img" src="' + d.img + '" alt="' + d.fa + '">'
      : '<span class="dom-img dom-noimg"><small>تصویر مرجع قلمرو<br>در انتظار ارسال</small></span>';
    const flagHTML = d.flag
      ? '<img class="dom-flag" src="' + d.flag + '" alt="پرچم ' + d.fa + '">'
      : '<span class="dom-flag dom-flag-none"><small>بدون نشان</small></span>';

    card.innerHTML =
      '<div class="dom-media" style="' + dominionImgStyle(d) + '">' + imgHTML +
        flagHTML +
        (open ? '<span class="dom-badge open-badge">آزاد</span>'
              : '<span class="dom-badge lock-badge">🔒 ' + dominionLockNote(d.id) + '</span>') +
      '</div>' +
      '<div class="dom-names"><div class="dom-fa">' + d.fa + '</div>' +
      '<div class="dom-en">' + d.en + '</div></div>' +
      (d.tagline ? '<div class="dom-tagline">' + d.tagline + '</div>' : '') +
      (open ? '<span class="dom-glow"></span>' : '');

    card.addEventListener('click', () => {
      Sfx.click();
      if(open) openDomainIntro(d.id);
      else toast('قلمرو ' + d.fa + ' قفل است — ' + dominionLockNote(d.id));
    });
    grid.appendChild(card);
  });
}

/* ---------- ۲) صفحهٔ معرفی قلمرو ---------- */
function openDomainIntro(id){
  const d = getDominion(id);
  if(!d || !isDominionUnlocked(id)) return;
  currentDominion = id;
  $('#domain-chip').innerHTML = '<i class="dot"></i> قلمرو ' + d.fa;
  const hero = $('#domain-media');
  hero.style.background = dominionImgStyle(d);
  if(d.img){
    hero.innerHTML = '<img class="domain-img" src="' + d.img + '" alt="' + d.fa + '">';
  } else {
    hero.innerHTML = '<span class="domain-noimg"><small>تصویر مرجع قلمرو در انتظار ارسال</small></span>';
  }
  const flag = $('#domain-flagbox');
  if(d.flag){
    flag.innerHTML = '<img src="' + d.flag + '" alt="پرچم ' + d.fa + '">';
    flag.classList.remove('none');
  } else {
    flag.innerHTML = '<small>بدون نشان</small>';
    flag.classList.add('none');
  }
  $('#domain-fa').textContent = d.fa;
  $('#domain-en').textContent = d.en;
  $('#domain-tag').textContent = d.tagline || 'شعار این قلمرو هنوز اعلام نشده است.';
  const openLands = dominionLands(id).filter(l => l.playable).length;
  $('#domain-lands-note').textContent = 'این قلمرو ' + fa(DOMINION_LANDS_COUNT) +
    ' سرزمین دارد · هم‌اکنون قابل بازی: ' + fa(openLands);
  show('screen-domain');
}

/* ---------- ۳) شبکهٔ ۱۱ سرزمین قلمرو ---------- */
function renderDomainLands(id){
  const d = getDominion(id);
  if(!d || !isDominionUnlocked(id)) return;
  currentDominion = id;
  $('#lands-chip').innerHTML = '<i class="dot"></i> سرزمین‌های ' + d.fa;
  const lands = dominionLands(id);
  const ready = lands.filter(l => l.playable).length;
  $('#chip-lands-count').textContent = 'قابل بازی: ' + fa(ready) + ' از ' + fa(DOMINION_LANDS_COUNT);
  $('#lands-hint').textContent = 'هر قلمرو دقیقاً ' + fa(DOMINION_LANDS_COUNT) +
    ' سرزمین دارد. نام و تصویر نهایی ۷۷ سرزمین در مراحل بعدی توسط مالک محصول اعلام و همین‌جا نشسته می‌شود.';
  const grid = $('#lands-grid'); grid.innerHTML = '';
  lands.forEach(l => {
    const card = document.createElement('button');
    card.className = 'land-card ' + (l.playable ? 'playable' : 'tbd');
    card.dataset.land = l.slot;
    card.innerHTML =
      '<span class="l-slot">' + fa(l.slot) + '</span>' +
      '<div class="l-ico" style="background:linear-gradient(135deg,' + d.c1 + '44,' + d.c2 + '33);border:1px solid ' + d.c1 + '66">' +
        (l.playable ? '🌊' : '🔒') + '</div>' +
      '<div class="l-name">' + (l.name || 'در انتظار نام‌گذاری رسمی') + '</div>' +
      '<div class="l-status">' + (l.playable ? 'قابل بازی — ورود به سرزمین' : 'نام و تصویر در مراحل بعدی') + '</div>';
    card.addEventListener('click', () => {
      Sfx.click();
      if(!l.playable){ toast('سرزمین ' + fa(l.slot) + ' ' + d.fa + ' هنوز نام‌گذاری و ساخته نشده است'); return; }
      if(!S.pid){ initCreation(); return; }   // همان جریان رسمی ساخت شخصیت
      enterRealm(l.gate);
    });
    grid.appendChild(card);
  });
  show('screen-lands');
}

/* ---------- ناوبری ---------- */
function openRealmsMenu(){
  Sfx.click();
  renderRealmsMenu();
  show('screen-realms');
}
$('#btn-realms-open').addEventListener('click', openRealmsMenu);
$('#btn-realms-from-map').addEventListener('click', openRealmsMenu);
$('#btn-realms-back').addEventListener('click', () => {
  Sfx.click();
  if(S.pid){ show('screen-map'); } else { show('screen-boot'); }
});
$('#btn-domain-back').addEventListener('click', () => { Sfx.click(); renderRealmsMenu(); show('screen-realms'); });
$('#btn-lands-back').addEventListener('click', () => { Sfx.click(); openDomainIntro(currentDominion || 'targon'); });
$('#btn-play-domain').addEventListener('click', () => {
  Sfx.click();
  if(currentDominion) renderDomainLands(currentDominion);
});
