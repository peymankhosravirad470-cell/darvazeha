# سند ۱۴ — معماری داده و تضمین تراکنش‌ها

> **نسخهٔ v2.0 پیش‌نویس برای تصویب | ۲۰۲۶-۱۱-۰۲ | وابسته به: سند ۰۲ (دفترکل)، سند ۰۵ (بازار)، سند ۰۸ (هماورد)، سند ۱۱ (ضدتقلب)**
> **این سند صرفاً طراحی است و مجوز تغییر کد نیست [قطعی از دستور].** نسخهٔ فعلی v1 (تک‌فایل، localStorage) دست‌نخورده می‌ماند؛ این معماری برای نسخهٔ سرورمحور v2 است (تعارض C4 سند ۱۷).

---

## ۱. اصل سروری‌بودن [قطعی از دستور]

- محاسبهٔ نتیجهٔ هماورد و هر پاداش/معامله **سمت سرور** است؛ کلاینت فقط ورودی بازی و نیت کاربر می‌فرستد.
- **جلوگیری از ارسال امتیاز جعلی از کلاینت [قطعی]:** امتیاز فقط از رویدادهای سیستمی امضاشدهٔ سرور ساخته می‌شود؛ هیچ مسیر نوشتن امتیاز از API عمومی وجود ندارد.
- ثبت تغییرات و ممیزی + امکان رسیدگی به اعتراض [قطعی]: هر تغییر وضعیت دارایی/امتیاز یک `AuditEvent` دارد.

## ۲. قرارداد شناسه‌ها و زمان

| الگو | نمونه |
|---|---|
| شناسهٔ رویداد فعالیت | `evt_` + ULID |
| شناسهٔ معامله | `txn_` + ULID |
| شناسهٔ آگهی | `lst_` + ULID |
| شناسهٔ محصول | `itm_` + ULID (ردیابی provenance) |
| زمان | ISO-8601 UTC + نمایش فارسی محلی |
| idempotency | کلید کلاینت `idem_` + هش نیت عملیات |

## ۳. موجودیت‌ها (۲۷ موجودیت دستور کارفرما)

> فیلدهای «کلید» برای هر موجودیت: شناسه همیشه PK است و تکرار نمی‌شود. حفظ‌داری پیش‌فرض همهٔ موجودیت‌های مالی: **حذف نرم/تغییرناپذیر** — حذف فیزیکی فقط طبق سیاست نگهداری §۶.

| موجودیت | فیلدهای اصلی | روابط کلیدی | محدودیت‌ها و وضعیت‌ها | شاخص‌های اصلی |
|---|---|---|---|---|
| **Player** | id، display_name، created_at، trust_level، status(active/frozen/banned) | 1—* همهٔ چیزها | trust NEW→TRUSTED؛ ban فقط با فرایند سند ۱۱ §۶ | id، status، settlement_id |
| **Profession** | id، name، mechanics[]، recipes[] | *—1 Player (primary) | یک primary به‌ازای بازیکن (در فاز ۱) | player_id |
| **ProfessionSkill** | player_id، profession_id، level، xp | *—1 Player، *—1 Profession | level 1–10 [عدد آزمایشی]؛ xp فقط از رویداد معتبر | (player_id,profession_id) UNIQUE |
| **Recipe** | id، profession_id، inputs[]، output_item، min_skill، cost | *—1 Profession | اعمال فقط از سرور؛ نسخه‌بندی قواعد | profession_id |
| **ProductionJob** | id، player_id، recipe_id، inputs_reserved[]، mg_session_id، quality، status | *—Recipe، *—Inventory | DRAFT→READY→RUNNING→EVALUATED→COMPLETED/FAILED | player_id، status |
| **Item** | id، type_id، quality، creator_id، provenance[]، created_at، flags(tradeable/consumable/war_ok/public_ok) | *—1 ItemDef(سیاست بازار) | وضعیت مالکیت فقط با txn تغییر می‌کند | type_id، creator_id، owner |
| **Inventory** | player_id، item_id، qty، zone(free/reserved/locked) | *—1 Player، *—1 Item | ثابت‌واره: free+reserved+locked=کل | player_id، zone |
| **LocalMarket** | settlement_id، fee_rate، price_policy | *—1 Settlement | fee شفاف و اعلام‌شده | settlement_id |
| **PublicMarket** | global config، cooldown_rules، ownership_caps | سراسری | قواعد سند ۰۶ | — |
| **MarketListing** | id، market(kind)، seller_id، item_type، qty_total، qty_remaining، unit_price، quality_min، expires_at، status | *—1 Player، *—Item | ACTIVE→PARTIALLY_SOLD→SOLD/CANCELLED/EXPIRED؛ رزرو هم‌زمان با ثبت | seller، market، status، expires |
| **MarketOrder** | id، listing_id، buyer_id، qty، idem_key، status | *—1 Listing | INITIATED→LOCKED→COMMITTED/ROLLED_BACK؛ UNIQUE(idem_key) | listing_id، buyer_id |
| **Transaction** | id، kind(sale/payout/refund/fee)، from_acc، to_acc، amount، market، event_id، ts | *—Ledger | تغییرناپذیر؛ اصلاح با reversal | from، to، event_id |
| **Wallet** | player_id، balance، version(optimistic) | 1—1 Player | balance ≥ ۰ همیشه؛ version برای قفل خوش‌بینانه | player_id |
| **LedgerEntry** | id، account، direction، amount， track(INDIVIDUAL/COLLECTIVE/SYS_SRC/SYS_SINK)، event_id، counterparty، ts | — | **تغییرناپذیر مطلق**؛ UNIQUE(event_id,account,direction,category) | account، event_id، ts |
| **Settlement** | id، name، kind(village/city/…)، rank، activity_index، status(STABLE/PROBATION/…) | 1—* Player | رتبه فقط با چرخهٔ سند ۱۰ §۴ تغییر می‌کند | rank، status |
| **SettlementMember** | settlement_id، player_id، joined_at، role، opt_in_flags | *—2 طرفه | نقش‌ها طبق سند ۱۰ §۳ | (settlement,player) UNIQUE |
| **SettlementTreasury** | settlement_id، free， surplus， reserved_risk، version | 1—1 Settlement | reserved_risk ≤ surplus همیشه | settlement_id |
| **SettlementProject** | id، settlement_id، kind، required_resources[]، contributions[]، status | *—1 Settlement | PLANNED→FUNDED→IN_PROGRESS→DELIVERED/CANCELLED | settlement_id، status |
| **GovernmentRank** | id، level(1..5)، promotion_criteria، demotion_criteria | *—1 Settlement | فقط با دورهٔ ارزیابی اعمال می‌شود | level |
| **WarEvent** | id، phase، started_at، scoring_weights(نسخه‌شده)، rules_doc | — | فازهای سند ۰۸ §۲؛ قواعد پس از انتشار ثابت | phase |
| **WarParticipant** | war_id، settlement_id، roster[]، opt_in | *—2 طرفه | حد نصاب پیش از MATCHMAKING | (war,settlement) UNIQUE |
| **WarContribution** | id، war_id، player_id، kind، value، event_id، score_delta | *—1 WarEvent | فقط از رویداد سیستمی؛ UNIQUE(event_id) | war_id، player_id |
| **WarResult** | war_id، settlement_id، score_breakdown{}، rank_reward | *—1 WarEvent | breakdown ۹معیاره؛ تغییرناپذیر پس از انتشار | war_id |
| **Vote** | id، scope(settlement/…)، subject، published_doc، opened_at، closed_at، counts، result | *—1 Settlement/Treasury | QUORUM پیش‌فرض رد؛ پس از PUBLISHED متن ثابت | scope، status |
| **Reward** | id، event_id، grant_class، recipient، amount، status | *—Event | **UNIQUE(event_id, grant_class)** — سدّ پاداش دوبل | event_id، status |
| **AuditEvent** | id، actor_id، action، target_type، target_id، before، after، ts | — | فقط افزودنی؛ جستجوپذیر برای اعتراض | actor، target، ts |
| **FraudSignal** | id، subject(kind,id)، signal، evidence[], opened_at، status(open/reviewed/closed)، outcome | — | باز کردن ≠ مجازات؛ مسیر سند ۱۱ §۶ | subject، status |

## ۴. تضمین‌های تراکنش [قطعی از دستور]

| تضمین | سازوکار پیشنهادی |
|---|---|
| دفترکل تغییرناپذیر/قابل ممیزی | LedgerEntry فقط-append؛ اصلاح با رکورد معکوس |
| تراکنش اتمیک | همهٔ ۱۰ گام معامله در یک transaction پایگاه داده (سند ۰۵ §۲) |
| Idempotency | UNIQUE(idem_key) در MarketOrder؛ کلید تولید کلاینت در نخستین لمس |
| کنترل هم‌زمانی | قفل ردیفی (SELECT … FOR UPDATE) روی listing + wallet.version خوش‌بینانه |
| قفل/رزرو منطقی موجودی | Inventory.zone: آزاد/رزروشده/قفل — هم‌زمانی با ProductionJob |
| کنترل موجودی منفی | CHECK در لایهٔ DB + بازبینی در commit |
| جلوگیری از Double Spend | قفل خریدار و کالا در یک تراکنش؛ سفارش دوم روی همان رزرو رد می‌شود |
| ثبت زمان و منشأ رویداد | ts + event_id + منشأ (کلاینت/سرور/سرویس) در همهٔ رکوردهای مالی |
| بازسازی تاریخچهٔ مالی | پرس‌وجوی LedgerEntry بر پایهٔ account و بازهٔ زمانی |

## ۵. اعتبارسنجی مینی‌گیم و هماورد [قطعی]

- جریان: کلاینت ورودی خام + نشانه‌های جلسه می‌فرستد → سرور شبیه‌سازی نتیجه را اجرا/راستی‌آزمایی می‌کند (بررسی پلازیبیلدی: نرخ ورودی، زمان، الگو) → نمرهٔ نهایی فقط سرور.
- امتیاز هماورد فقط از `WarContribution`هایی ساخته می‌شود که `event_id` سیستمی معتبر دارند؛ جمع‌بندی در پایان فاز توسط سرویس رسمی و با ثبت `WarResult` تغییرناپذیر.

## ۶. سیاست نگهداری و حذف [پیشنهادی]

| داده | نگهداری |
|---|---|
| مالی (Ledger/Transaction/Reward) | همیشگی — تغییرناپذیر |
| AuditEvent | حداقل ۲ سال [عدد آزمایشی] |
| MarketOrder/Listing | تاریخچهٔ کامل به‌عنوان آرشیو پس از بستن |
| FraudSignal | تا بستن + آرشیو ممیزی |
| دادهٔ شخصی بازیکن | حداقل لازم؛ حذف درخواستی فقط با حفظ رکوردهای مالی ناشناس‌شده [نیازمند تصویب] |

## ۷. تست پذیرش (خلاصه — سناریوهای ۱۴–۲۰ سند ۱۵)

همهٔ ۷ سناریوی هم‌زمانی/اداری (خرید مسابقه‌ای، درخواست تکراری، لغو هم‌زمان، شکست پس از کسر، انتقال فروخته‌شده، رأی بی‌نصاب، امتیاز صوری) باید روی این مدل پاس شوند — نتایج اجراشده: سند ۱۵.

## ۸. نیازمند تصویب کارفرما

1. تأیید معماری دو نسخه‌ای (v1 آفلاین فردی / v2 سرور جمعی — تعارض C4 سند ۱۷).
2. سیاست نگهداری دادهٔ شخصی (§۶).
3. فناوری پایگاه داده/زبان سرور — فاز پیش‌پیاده‌سازی، خارج از این سند.

**وضعیت این سند: ✅ طراحی کامل — ۲۷ موجودیت با فیلد/رابطه/محدودیت/وضعیت/ایندکس/نگهداری.**
