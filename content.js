window.APP_CONTENT={
  "modules": [
    {
      "id": "funnel",
      "title": "Воронка",
      "icon": "↘",
      "level": "must",
      "summary": "Путь пользователя и универсальная диагностика drop-off.",
      "sections": [
        {
          "title": "Модель",
          "body": "Acquisition → Landing → Sign-up → Onboarding/Setup → Activation → Core Action → Repeat Use → Retention. Сильный PM не начинает с идеи: сначала подтверждает проблему, локализует шаг, делает breakdown, проверяет tracking и только затем формирует гипотезу."
        },
        {
          "title": "Acquisition / Visit",
          "body": "Смотри users/sessions, source mix, GEO, device, new vs returning. Вопрос: релевантная ли аудитория пришла и не изменился ли состав трафика? Диагностика: source/GEO/device, tracking/UTM, downstream conversion."
        },
        {
          "title": "Landing",
          "body": "Смотри landing → next step conversion, exits, load/error rate. Проблемы: performance, message mismatch, неясный CTA, mobile/responsive issues, локализация. Guardrails: error rate, load time, exit rate."
        },
        {
          "title": "Sign-up",
          "body": "Смотри start → complete conversion, field-level errors, abandonment, time-to-complete. Ищи лишние поля, validation, mobile input issues, backend errors. После изменения проверь CR, error rate и качество данных."
        },
        {
          "title": "Onboarding / Setup",
          "body": "Смотри completion/fail/retry, processing time, support contacts. Разделяй user cancel и system fail; сопоставляй frontend event и backend outcome; проверяй SLA внешних зависимостей."
        },
        {
          "title": "Activation",
          "body": "Activation — первое получение ключевой ценности. Выбирай activation event по связи с дальнейшим успешным использованием, а не по удобству измерения. Смотри activation rate и time-to-value."
        },
        {
          "title": "Core Action",
          "body": "Основной пользовательский сценарий продукта. Смотри start→success, error rate, latency, abandonment, retries. Делай breakdown по version/device/GEO/user type и сопоставляй с релизами."
        },
        {
          "title": "Repeat Use / Retention",
          "body": "Смотри repeat rate, time-to-second action, cohort retention и churn signals. Средний D1/D7/D30 может скрывать противоположные тренды — обязательно new/returning/reactivated, source, GEO, version."
        }
      ]
    },
    {
      "id": "metrics",
      "title": "Метрики",
      "icon": "◫",
      "level": "must",
      "summary": "Основные продуктовые и iGaming-метрики без дублирования.",
      "sections": [
        {
          "title": "GGR / NGR / Hold",
          "body": "Turnover — общий оборот. GGR = turnover − payouts. Hold% = GGR / turnover. NGR — GGR после прямых корректировок, которые компания относит к net revenue (например бонусные расходы, комиссии, налоги — конкретная формула зависит от компании)."
        },
        {
          "title": "ARPU / ARPPU",
          "body": "ARPU — средний доход на активного пользователя по принятому в компании revenue definition. ARPPU — средний доход на платящего пользователя. Всегда уточняй numerator и denominator."
        },
        {
          "title": "LTV / CAC / Payback",
          "body": "LTV — ценность пользователя за жизненный цикл; CAC — стоимость привлечения; payback — время окупаемости acquisition cost. Важно не зубрить универсальный LTV/CAC-бенчмарк, а понимать unit economics конкретного продукта и канала."
        },
        {
          "title": "DAU / WAU / MAU / Stickiness",
          "body": "DAU/WAU/MAU — уникальные активные пользователи за день/неделю/месяц. DAU/MAU используют как индикатор частоты возврата, но корректная интерпретация зависит от естественного cadence продукта."
        },
        {
          "title": "Retention / Churn",
          "body": "Retention — доля пользователей, возвращающихся к выбранному meaningful event спустя время. Churn — прекращение активности по принятому определению. D7 может означать exact-day или rolling retention — definition нужно уточнять."
        },
        {
          "title": "Conversion / Drop-off",
          "body": "Conversion — доля, прошедшая заданный переход. Drop-off — не прошедшие следующий шаг. Для любой просадки: metric definition → tracking → funnel step → breakdown → root cause → experiment/solution."
        }
      ]
    },
    {
      "id": "analytics",
      "title": "Analytics + SQL",
      "icon": "⌁",
      "level": "must",
      "summary": "Как выбирать инструмент анализа и говорить об этом на интервью.",
      "sections": [
        {
          "title": "Amplitude / Mixpanel",
          "body": "Events + properties → funnels → segmentation → cohorts/retention → paths. Это быстрый слой продуктовой аналитики для локализации проблемы и проверки гипотез."
        },
        {
          "title": "SQL",
          "body": "SQL — язык запросов. Для Middle PM достаточно уверенно понимать SELECT, WHERE, GROUP BY, aggregates, JOIN, CASE WHEN, CTE и базовые window functions. SQL полезен для кастомных выборок и sanity-check."
        },
        {
          "title": "Breakdown vs Cohort",
          "body": "Breakdown — разрез одной метрики по категориям: device, GEO, version, source. Cohort — группа пользователей с общим стартовым событием или признаком, которую обычно отслеживают во времени."
        },
        {
          "title": "Dashboard ≠ diagnosis",
          "body": "Дашборд отвечает «что произошло». PM должен дойти до «где, у кого, с какого момента, почему и что изменит решение». Для каждой ключевой метрики нужны definition, baseline, diagnostic cuts и owner."
        }
      ]
    },
    {
      "id": "ab",
      "title": "A/B testing",
      "icon": "A/B",
      "level": "must",
      "summary": "Дизайн эксперимента и статистическая логика на уровне Product Manager.",
      "sections": [
        {
          "title": "Что делает A/B",
          "body": "Контролируемый рандомизированный эксперимент помогает оценить причинный эффект изменения и отделить его от случайных колебаний. Before/after слабее из-за сезонности, traffic mix, маркетинга и других confounders."
        },
        {
          "title": "До запуска",
          "body": "Зафиксируй hypothesis, audience, primary/secondary/guardrail metrics, randomization unit, baseline, MDE, sample size, duration, success criteria и stop rule."
        },
        {
          "title": "MDE / Power / Alpha",
          "body": "MDE — минимальный эффект, который тест должен уметь обнаружить. Power — вероятность заметить реальный эффект. Alpha — заранее принятый риск false positive."
        },
        {
          "title": "p-value / Confidence interval",
          "body": "p-value показывает, насколько наблюдение необычно при H0; это не размер бизнес-эффекта. Confidence interval показывает диапазон правдоподобных значений эффекта и неопределённость."
        },
        {
          "title": "SRM / Peeking / Post-hoc",
          "body": "SRM — mismatch ожидаемого и фактического split; сначала расследуй bucketing/tracking. Peeking увеличивает риск false positive. Post-hoc «выигрышный сегмент» — exploratory finding, а не подтверждённый causal effect."
        },
        {
          "title": "Решение",
          "body": "Статистическая значимость ≠ бизнес-значимость. Смотри effect size, CI, cost of change и guardrails. Возможные решения: rollout, redesign, reject, новый тест."
        }
      ]
    },
    {
      "id": "retention",
      "title": "Retention & CRM",
      "icon": "↻",
      "level": "focus",
      "summary": "Диагностика удержания и CRM как коммуникационный слой продукта.",
      "sections": [
        {
          "title": "Retention thinking",
          "body": "Сначала уточни definition retention. Затем cohort trend, new/returning/reactivated, source, GEO, device, version. Не начинай с коммуникаций, пока не исключены tracking, технические и UX-причины."
        },
        {
          "title": "CRM",
          "body": "CRM — управление отношениями и коммуникациями с пользователями: сегментация, триггеры, каналы и измерение эффекта. Для интервью важны timing, relevance, consent/preferences и корректная оценка uplift."
        },
        {
          "title": "CRM measurement",
          "body": "Смотри deliverability, engagement, downstream product metric и incremental uplift относительно контроля. Open rate или CTR сами по себе не доказывают бизнес-эффект."
        },
        {
          "title": "High-value / VIP",
          "body": "VIP/high-value — обычно сегмент, не когорта. С точки зрения PM фокусируйся на качестве сервиса, SLA, надежности критичных сценариев, безопасности данных и снижении operational friction. Не путай high spend с хорошим product health."
        },
        {
          "title": "Responsible design",
          "body": "В продукте с финансовым риском любые retention/CRM-механики должны учитывать возрастные ограничения, responsible gaming, self-exclusion, limits и локальные regulatory requirements."
        }
      ]
    },
    {
      "id": "segmentation",
      "title": "Сегментация",
      "icon": "◎",
      "level": "focus",
      "summary": "Как резать аудиторию так, чтобы анализ становился полезнее.",
      "sections": [
        {
          "title": "Lifecycle",
          "body": "Visitor → registered → activated → active → returning → reactivated/churned. Такая сегментация показывает, на какой стадии жизненного цикла возникла проблема."
        },
        {
          "title": "Behavior",
          "body": "Frequency, session depth, preferred product area, repeat patterns. Источник отдельно предлагает разрез незарегистрированных по глубине/длительности сессии как диагностическую эвристику — её нужно валидировать на данных конкретного продукта."
        },
        {
          "title": "Value",
          "body": "Low/medium/high-value или VIP — сегменты по экономической ценности. Важно задавать rule прозрачно и пересматривать, если он перестаёт коррелировать с целями."
        },
        {
          "title": "Technical / GEO",
          "body": "Device, OS, browser, app version, GEO, source. Это классический breakdown для поиска локальной технической или локализационной проблемы."
        },
        {
          "title": "Cohorts",
          "body": "Например, пользователи, зарегистрированные в одну неделю, или активированные после конкретного релиза. Когортный анализ помогает отделить изменение поведения от изменения состава аудитории."
        }
      ]
    },
    {
      "id": "risk",
      "title": "KYC & Risk",
      "icon": "◇",
      "level": "focus",
      "summary": "Безопасность, compliance и продуктовый trade-off без разрушения UX.",
      "sections": [
        {
          "title": "KYC",
          "body": "KYC подтверждает личность/возраст и поддерживает compliance. Продуктовый вопрос: где и насколько строгая проверка нужна по правилам конкретного рынка, и как измерять pass rate, time-to-verify и drop-off."
        },
        {
          "title": "Risk signals",
          "body": "Не полагайся на один сигнал. Возможны device/IP anomalies, multi-account relationships, unusual transaction patterns и consistency checks. Решения должны учитывать false positives."
        },
        {
          "title": "Frontend ↔ Backend",
          "body": "При проблеме критичного сценария сопоставляй то, что увидел пользователь, с backend outcome/error code/provider response. Это часто быстрее выводит на root cause."
        },
        {
          "title": "Responsible Gaming",
          "body": "Self-exclusion, deposit/time limits, age controls, cooling-off и другие механизмы зависят от юрисдикции. Для PM это часть продукта, а не только юридический чекбокс."
        }
      ]
    },
    {
      "id": "geo",
      "title": "GEO & B2B",
      "icon": "◉",
      "level": "focus",
      "summary": "Выход на рынок и логика платформенного B2B-продукта.",
      "sections": [
        {
          "title": "GEO adaptation",
          "body": "Выход на рынок — это не перевод сайта. Нужны research, regulation, payments, localization, product performance, support, content fit и QA. Одинаковый симптом в разных GEO может иметь разные root causes."
        },
        {
          "title": "Payments as product dependency",
          "body": "Платёжные интеграции — внешний dependency со своими SLA, failure modes и локальной доступностью. PM должен видеть success/fail/retry, latency, provider/GEO breakdown и recovery flow."
        },
        {
          "title": "B2B",
          "body": "Buyer, customer и end user могут быть разными ролями. Feature request клиента — input, а не автоматический roadmap item. Смотри repeatability, strategic impact, architecture, maintenance/support cost."
        },
        {
          "title": "Platform thinking",
          "body": "Платформа — integrations, configuration, permissions, localization, reliability, monitoring, support, backward compatibility и rollout. Чем больше GEO/клиентов, тем важнее отделять core от configurable layer."
        }
      ]
    },
    {
      "id": "delivery",
      "title": "Delivery & Head",
      "icon": "✓",
      "level": "focus",
      "summary": "Как выглядеть не координатором задач, а правой рукой Head.",
      "sections": [
        {
          "title": "Problem → Outcome",
          "body": "Хорошая задача начинается с problem statement и expected outcome, затем scope/non-scope, flow, acceptance criteria, edge/error cases, analytics, dependencies и Definition of Done."
        },
        {
          "title": "Prioritization",
          "body": "Сначала mandatory/critical. Остальное сравнивай по impact, reach, confidence/evidence, effort, dependencies и strategic fit. В конфликте показывай trade-offs."
        },
        {
          "title": "Cross-team ownership",
          "body": "Если увидел проблему у соседней команды — принеси owner observation + evidence + гипотезу + способ проверки. Не подменяй чужой ownership."
        },
        {
          "title": "Right hand of Head",
          "body": "Держать KPI tree, зависимости, риски, owners, deadlines и decision log; связывать analytics, retention/CRM, high-value и B2B в одну систему принятия решений."
        }
      ]
    }
  ],
  "questions": [
    {
      "cat": "Funnel",
      "q": "Метрика упала на 15%. Что делаешь первые 30 минут?",
      "a": "Проверяю definition и tracking, фиксирую момент начала, локализую funnel step, делаю breakdown, сопоставляю с релизами/инцидентами и только потом формирую причины."
    },
    {
      "cat": "Funnel",
      "q": "Reg → Dep просел. Как разбирать?",
      "a": "Разложу путь Registration complete → cashier open → method selected → transaction started → successful outcome. Затем breakdown по GEO/device/source/provider/version, frontend↔backend и error codes."
    },
    {
      "cat": "Analytics",
      "q": "Breakdown и cohort — в чём разница?",
      "a": "Breakdown — разрез метрики по категориям. Cohort — группа с общим стартом/признаком, поведение которой обычно отслеживают во времени."
    },
    {
      "cat": "Analytics",
      "q": "Когда SQL полезнее Amplitude/Mixpanel?",
      "a": "Когда нужен кастомный join, нестандартная population, собственная формула, raw-data sanity-check или разрез, которого нет в стандартном отчёте."
    },
    {
      "cat": "A/B",
      "q": "Почему before/after слабее A/B?",
      "a": "Потому что одновременно меняются сезонность, traffic mix, маркетинг и внешняя среда. Контрольная группа помогает изолировать causal effect."
    },
    {
      "cat": "A/B",
      "q": "Что такое MDE?",
      "a": "Минимальный эффект, который эксперимент должен уметь обнаружить. Чем меньше MDE, тем обычно больше sample size."
    },
    {
      "cat": "A/B",
      "q": "Что означает p-value?",
      "a": "Насколько необычен результат при предположении отсутствия эффекта. Он не показывает размер или бизнес-ценность эффекта."
    },
    {
      "cat": "A/B",
      "q": "Что такое power?",
      "a": "Вероятность обнаружить реальный эффект, если он существует. Низкая power повышает риск false negative."
    },
    {
      "cat": "A/B",
      "q": "Зачем confidence interval?",
      "a": "Показывает диапазон правдоподобных значений эффекта и неопределённость оценки."
    },
    {
      "cat": "A/B",
      "q": "Что такое SRM?",
      "a": "Несоответствие ожидаемого и фактического split. До расследования bucketing/tracking результат нельзя считать доказательным."
    },
    {
      "cat": "A/B",
      "q": "Primary выросла, guardrail ухудшился. Что делать?",
      "a": "Не принимать решение только по primary. Оценить размер побочного ущерба, validity и заранее заданные limits; возможно redesign или reject."
    },
    {
      "cat": "Metrics",
      "q": "GGR и Hold — как связаны?",
      "a": "GGR — абсолютный результат после выплат; Hold% = GGR / turnover. Hold показывает тот же результат относительно оборота."
    },
    {
      "cat": "Metrics",
      "q": "ARPU и ARPPU — разница?",
      "a": "ARPU делит выбранную revenue metric на активных пользователей; ARPPU — на платящих. Всегда уточняй numerator/denominator."
    },
    {
      "cat": "Metrics",
      "q": "Retention D7 — exact или rolling?",
      "a": "Может быть и так, и так. Нужно уточнить definition: exact-day считает возврат ровно на D7, rolling — D7 или позже."
    },
    {
      "cat": "Retention",
      "q": "D30 retention просел. С чего начать?",
      "a": "С definition/tracking и cohort trend, затем breakdown new/returning/reactivated, source/GEO/device/version. После локализации — root cause и проверяемая гипотеза."
    },
    {
      "cat": "Retention",
      "q": "Чем CRM отличается от retention?",
      "a": "Retention — результат/поведение возврата. CRM — один из инструментальных слоёв коммуникации и lifecycle management, который может влиять на retention, но не заменяет product diagnosis."
    },
    {
      "cat": "Retention",
      "q": "Как измерить CRM-кампанию корректно?",
      "a": "Не только open/CTR. Нужны downstream product metric, guardrails и incremental uplift относительно контрольной группы."
    },
    {
      "cat": "Segmentation",
      "q": "VIP — сегмент или когорта?",
      "a": "Обычно сегмент по ценности/статусу. Отдельно можно строить когорты VIP по дате входа в статус и смотреть их retention/trend."
    },
    {
      "cat": "Risk",
      "q": "Как отличить user cancel от system fail?",
      "a": "Нужны отдельные события/статусы и сопоставление frontend action с backend outcome/error code. Иначе пользовательский drop-off и технический failure смешиваются."
    },
    {
      "cat": "Risk",
      "q": "Почему false positive важен в anti-fraud?",
      "a": "Слишком жёсткие правила могут блокировать нормальных пользователей и ломать UX. Нужно балансировать detection и ошибочные срабатывания."
    },
    {
      "cat": "GEO",
      "q": "Почему нельзя переносить гипотезу между GEO без проверки?",
      "a": "Различаются payments, regulation, devices, language, culture и support context. Похожий симптом может иметь другую root cause."
    },
    {
      "cat": "B2B",
      "q": "Когда отклонить feature request клиента?",
      "a": "Если проблема уникальна, слабо повторяется, имеет низкий strategic impact или создаёт непропорциональный architecture/support cost; сначала ищу generic solution."
    },
    {
      "cat": "Delivery",
      "q": "Как писать acceptance criteria?",
      "a": "Проверяемые условия: основной сценарий, edge cases, errors, permissions/limits, analytics events и observable expected behavior."
    },
    {
      "cat": "Leadership",
      "q": "Ты увидел проблему в соседней команде. Что делать?",
      "a": "Связаться с owner и принести observation + evidence + гипотезу + способ проверки. Не перехватывать ownership без системной причины."
    }
  ],
  "glossary": [
    {
      "term": "Conversion",
      "def": "Доля пользователей, прошедших заданный переход."
    },
    {
      "term": "Drop-off",
      "def": "Пользователи, не прошедшие следующий шаг."
    },
    {
      "term": "Breakdown",
      "def": "Разрез метрики по категориям: GEO, device, version, source."
    },
    {
      "term": "Cohort",
      "def": "Группа пользователей с общим стартовым событием или признаком."
    },
    {
      "term": "Retention",
      "def": "Возврат к meaningful event спустя время."
    },
    {
      "term": "Churn",
      "def": "Прекращение активности по принятому определению."
    },
    {
      "term": "Activation",
      "def": "Первое получение ключевой ценности."
    },
    {
      "term": "Latency",
      "def": "Время между действием и реакцией системы."
    },
    {
      "term": "SLA",
      "def": "Согласованный уровень сервиса внешней или внутренней системы."
    },
    {
      "term": "GGR",
      "def": "Turnover минус выплаты/выигрыши по принятому определению."
    },
    {
      "term": "Hold",
      "def": "GGR как доля от turnover."
    },
    {
      "term": "NGR",
      "def": "Net revenue по внутренней финансовой методологии компании."
    },
    {
      "term": "ARPU",
      "def": "Средний доход на активного пользователя."
    },
    {
      "term": "ARPPU",
      "def": "Средний доход на платящего пользователя."
    },
    {
      "term": "LTV",
      "def": "Ценность пользователя за жизненный цикл."
    },
    {
      "term": "CAC",
      "def": "Стоимость привлечения пользователя/клиента по принятому определению."
    },
    {
      "term": "MDE",
      "def": "Минимальный эффект, который тест должен уметь обнаружить."
    },
    {
      "term": "Power",
      "def": "Вероятность обнаружить реальный эффект."
    },
    {
      "term": "p-value",
      "def": "Необычность результата при H0; не размер бизнес-эффекта."
    },
    {
      "term": "Confidence interval",
      "def": "Диапазон правдоподобных значений эффекта."
    },
    {
      "term": "SRM",
      "def": "Несовпадение ожидаемого и фактического split в эксперименте."
    },
    {
      "term": "Guardrail",
      "def": "Защитная метрика от побочного ущерба."
    },
    {
      "term": "Randomization unit",
      "def": "Уровень назначения варианта: user/account/device/session."
    }
  ]
};
