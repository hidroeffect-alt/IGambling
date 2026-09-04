# PM Interview Trainer PWA v2.4

Объединены:
- `iGaming_prep_interactive.html` — уникальные учебные разделы, таблицы, формулы, заметки и вопросы.
- `index.html` — подробная диагностика воронки, Analytics + SQL, Head/B2B, кейсы и сегментация.

## v2
- вертикальный каскад во всех разделах;
- воронка: схема, термины, проблемы, диагностика, оптимизация, проверка результата;
- остальные модули: каждый исходный блок — отдельный каскадный этап с полным раскрываемым материалом, терминами и логикой применения;
- расширенный словарь;
- объединённый тренажёр с удалением дублей;
- лаконичный интерфейс без рекламных слоганов;
- PWA/offline/localStorage/import-export.

## Cloudflare Pages
Framework preset: None
Build command: пусто
Output directory: корень репозитория


## Исправление v2.1
- исправлена синтаксическая ошибка `app.js`, из-за которой `init()` не запускался;
- добавлен fallback списка разделов до инициализации JS;
- добавлен boot watchdog с видимой диагностикой вместо пустой страницы;
- обновлён cache key Service Worker, чтобы Cloudflare/браузер не держал сломанную старую версию.

## Исправление v2.2
- левая колонка — единственная навигация по учебным разделам;
- дублирующий каталог справа удалён;
- клик по разделу слева открывает полный блок справа;
- исправлено перезаписывание обработчика sidebar;
- при старте автоматически открывается «Воронка»;
- контент и остальной интерфейс не изменены.


## v2.3 LATAM Product Playbook
- добавлен отдельный глубокий LATAM-модуль (Brazil, Mexico, Colombia, Argentina, Peru, Chile);
- payments, localization, acquisition, CRM, bonuses, KYC/fraud, Responsible Gaming, analytics, competitor research, launch playbook, 30/60/90;
- добавлены LATAM-вопросы в тренажёр и новые термины в словарь;
- regulatory/payment content актуализирован на 24.08.2026;
- cache key Service Worker обновлён для гарантированного получения новой версии.


## v2.4 Target Vacancy — iGaming Mexico
- отдельная вкладка «Вакансия · iGaming Mexico» вынесена над общими материалами;
- 21 блок подготовки именно под вакансию Product Manager для рынка Мексики;
- актуальные на 24.08.2026 Mexico regulation/tax/mobile/payment facts;
- глубокие блоки по Mexico funnel, SPEI/cashier, sportsbook, competitors, unit economics, A/B, CRM, KYC/fraud/RG, stakeholder management;
- 35 специальных вопросов категории «Вакансия · Mexico» в тренажёре;
- добавлены профильные термины в словарь;
- Service Worker cache key обновлён.


## v2.6 Product Knowledge Base
- Added Research Toolkit with practical use/limits for DataReportal, GSMA, Similarweb, AppMagic, Sensor Tower, Statista, Google Trends, Store Reviews, Reddit and LinkedIn.
- Added Mexico-first GEO Playbook for Mexico, Brazil, Colombia, Chile, Argentina and Peru.
- Added Product Frameworks, Product Discovery, Product Delivery and Product Thinking modules.
- Existing modules/content preserved.
- PWA cache bumped to v2.6; index.html and offline.html preserved.


## v2.6 Research Playbook
Добавлен отдельный раздел «Research Playbook · Как продакт исследует рынок»: карта продуктовых вопросов и источников, hierarchy of evidence, market sizing, player/device research, payments, competitor intelligence, честное разделение публичных proxy и внутренних FTD/Retention/LTV, пошаговый алгоритм Market → Player → Legal → Competitors → Payments → Hypotheses → Priority → Validation, пример Mexico и checklist качества research. Остальной контент и HTML сохранены без изменений.

## v2.7 — Sportsbook Promotions & Bonus Mechanics (04.09.2026)

Добавлены два самостоятельных раздела без изменения существующего контента:

- **Sportsbook · Promotions** — стратегия промо, 10+ ключевых механик, segmentation/personalization, promo economics, incrementality, A/B/holdout, UX, anti-abuse/RG, Mexico event-led use cases, competitor teardown и интервью-кейсы.
- **Sportsbook · Bonus Mechanics** — Bonus Engine, eligibility/qualification, reward state machine, trigger events, idempotency, wallet/token model, stake-removed settlement, wagering, expiry/concurrency, void/cashout/rollback, stacking, ledger/reconciliation, observability, QA и mini-spec.

Тренажёр расширен до 204 вопросов, словарь — до 136 терминов. Service Worker cache обновлён на v2.7.
