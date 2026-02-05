---
title: "Business Rules — Emotional Balance"
created_by: "Business-Analyst Agent"
created_at: "2026-02-04"
version: "1.0"
status: "approved"
phase: "Discovery"
related_docs:
  - "docs/discovery/prd.md"
  - "docs/discovery/requirements-specification.md"
  - "docs/discovery/decision-log.md"
  - "docs/discovery/user-stories.md"
  - "docs/discovery/unit-economics.md"
  - "docs/discovery/business-processes.md"
---

# Business Rules: Emotional Balance (Нейро-Психолог 24/7)

## 1. Введение

### 1.1 Назначение документа

Настоящий документ формализует бизнес-правила платформы **Emotional Balance** — ИИ-платформы психологической поддержки 24/7 через Telegram WebApp. Документ охватывает ограничения (constraints), вычисления (derivations), триггеры (triggers), правила бизнес-логики с псевдокодом, граничные случаи (edge cases) и матрицу трассируемости.

### 1.2 Классификация правил

| Тип | Описание | Кодировка |
|-----|----------|-----------|
| **CONSTRAINT** | Ограничение, которое система обязана соблюдать | CON-001...CON-030 |
| **DERIVATION** | Формула или алгоритм вычисления | DER-001...DER-015 |
| **TRIGGER** | Событие, автоматически запускающее действие | TRG-001...TRG-020 |

### 1.3 Ссылки на решения

Каждое бизнес-правило трассируется к решениям из Decision Log (`docs/discovery/decision-log.md`) и функциональным требованиям из PRD (`docs/discovery/prd.md`).

---

## 2. Constraints (Ограничения)

### 2.1 Тарифные ограничения

#### CON-001: Лимиты тарифа Free

| Ресурс | Лимит | Период |
|--------|-------|--------|
| ИИ-чат сообщения | 5 сообщений | /день |
| ИИ-чат длительность | 20 мин | /сессия |
| Дневник эмоций записи | 1 запись | /день |
| КПТ-упражнения | 1 упражнение | /день |
| Медитации | 1 базовая медитация | без ограничения по частоте |
| Голосовые сессии | Недоступно | -- |
| Wearables | Недоступно | -- |
| Маркетплейс | Только просмотр каталога | -- |
| Мини-курсы | 1 курс бесплатно | навсегда |
| Детектор кризисов | Всегда активен | -- |
| SOS-протоколы | Всегда доступны | -- |

**Решение:** DEC-015 (Free-тариф с жёсткими ограничениями)
**FR:** FR-002.6, FR-004, FR-005.5, FR-008.6, FR-016.6

```pseudo
RULE CON-001_check_free_limit(user, resource_type):
    IF user.subscription.plan == "free":
        limits = FREE_TIER_LIMITS[resource_type]
        usage = get_usage(user, resource_type, limits.period)
        IF usage >= limits.max_value:
            RETURN LimitExceeded(
                resource=resource_type,
                current=usage,
                limit=limits.max_value,
                upgrade_suggestion=TRUE
            )
    RETURN Allowed
```

#### CON-002: Лимиты тарифа Standard (990 руб/мес)

| Ресурс | Лимит | Период |
|--------|-------|--------|
| ИИ-чат сообщения | Без ограничений | -- |
| ИИ-чат длительность | Без ограничений | -- |
| Дневник эмоций записи | Без ограничений | -- |
| КПТ-упражнения | Без ограничений | -- |
| Медитации | Базовый каталог | -- |
| Голосовые сессии | 30 мин | /день |
| Wearables | Недоступно | -- |
| Маркетплейс | Запись + скидка 5% | -- |
| Мини-курсы | Все курсы | -- |
| Персональные КПТ-программы | Доступны | -- |
| ИИ-анализ дневника | Доступен | -- |
| Терапевтический мост | Доступен | -- |

**FR:** FR-003.5, FR-008.6, FR-009.9, FR-010.1, FR-015.6

#### CON-003: Лимиты тарифа Premium (2990 руб/мес)

| Ресурс | Лимит | Период |
|--------|-------|--------|
| ИИ-чат сообщения | Без ограничений + приоритет | -- |
| Голосовые сессии | Без ограничений | -- |
| Дневник эмоций | Без ограничений + расширенная аналитика | -- |
| КПТ-упражнения | Без ограничений + эксклюзивные | -- |
| Медитации | Полный каталог + фоновые звуки | -- |
| Wearables | Apple Watch + Mi Band | -- |
| Маркетплейс | Запись + скидка 10% + приоритет | -- |
| Мини-курсы | Все курсы | -- |
| Семейный доступ | Доступен | -- |
| Терапевтический мост | Доступен | -- |

**FR:** FR-003, FR-008, FR-009, FR-010.1

```pseudo
RULE CON-003_check_feature_access(user, feature):
    plan = user.subscription.plan
    required_plan = FEATURE_REQUIREMENTS[feature]
    IF plan_level(plan) < plan_level(required_plan):
        RETURN FeatureRestricted(
            feature=feature,
            current_plan=plan,
            required_plan=required_plan,
            upgrade_url=generate_upgrade_url(user)
        )
    RETURN FeatureAllowed
```

---

### 2.2 Safety-ограничения

#### CON-004: Кризис-детектор нельзя отключить

**Правило:** Детектор кризисных состояний (FR-006) НЕ МОЖЕТ быть отключён, обойдён, ограничен по бюджету или деактивирован. Работает на всех тарифах, включая Free. Имеет отдельный выделенный бюджет LLM API.

**Решение:** DEC-017, DEC-020
**FR:** FR-006.8

```pseudo
RULE CON-004_crisis_detector_always_on():
    # Проверяется при каждом старте системы и при изменении конфигурации
    ASSERT crisis_detector.enabled == TRUE
    ASSERT crisis_detector.budget.type == "dedicated"
    ASSERT crisis_detector.budget NOT IN global_limits
    ASSERT crisis_detector.can_be_disabled == FALSE

    # При попытке отключения
    ON attempt_to_disable(crisis_detector):
        LOG_CRITICAL("Attempt to disable crisis detector", actor=current_user)
        REJECT("Детектор кризисных состояний не может быть отключён")
        NOTIFY(admin_team, "Попытка отключения кризис-детектора")
```

#### CON-005: SOS-протоколы всегда бесплатны

**Правило:** SOS-протоколы быстрой помощи (FR-014) доступны на ВСЕХ тарифах, включая Free. Являются safety-функцией и не подлежат тарификации.

**Решение:** DEC-027
**FR:** FR-014.7

```pseudo
RULE CON-005_sos_always_free(user):
    # SOS-протоколы не проверяют тарифный план
    IF user.requests_sos_protocol():
        SKIP tariff_check
        SKIP usage_limit_check
        RETURN SOSProtocolAllowed
    # Даже при graceful degradation SOS остаётся доступным
    IF system.in_degraded_mode():
        ASSERT sos_protocol.available == TRUE
```

#### CON-006: Консервативный порог кризис-детектора

**Правило:** Детектор кризисов использует консервативный порог: лучше ложное срабатывание (false positive), чем пропуск кризиса (false negative). False negative rate должен быть < 1%.

**Решение:** DEC-017
**FR:** FR-006.5

```pseudo
RULE CON-006_conservative_threshold():
    CONST CRISIS_THRESHOLD = 0.85  # confidence для эскалации
    CONST FALSE_NEGATIVE_MAX = 0.01  # максимум 1% пропусков

    # При калибровке модели
    ON model_calibration(new_threshold):
        simulated_fn_rate = simulate_false_negative_rate(new_threshold)
        IF simulated_fn_rate > FALSE_NEGATIVE_MAX:
            REJECT("Порог приведёт к FN rate > 1%")
        ELSE:
            APPLY new_threshold
            LOG_AUDIT("Crisis threshold updated", old=CRISIS_THRESHOLD, new=new_threshold)
```

---

### 2.3 Regulatory-ограничения (ФЗ-152)

#### CON-007: Хранение данных на территории РФ

**Правило:** ВСЕ персональные данные пользователей хранятся и обрабатываются исключительно на серверах, расположенных на территории Российской Федерации.

**Решение:** DEC-002, DEC-006
**FR:** FR-001.6
**NFR:** NFR-016

```pseudo
RULE CON-007_data_residency():
    FOR EACH data_storage IN system.storages:
        ASSERT data_storage.location.country == "RU"
    FOR EACH llm_provider IN [gigachat, yandexgpt]:
        ASSERT llm_provider.data_processing_location == "RU"
    FOR EACH stt_tts_engine IN system.speech_engines:
        ASSERT stt_tts_engine.hosting == "self-hosted"
        ASSERT stt_tts_engine.location.country == "RU"
```

#### CON-008: Обязательное согласие на обработку ПДн

**Правило:** Пользователь ОБЯЗАН дать явное согласие на обработку персональных данных перед использованием платформы. Без согласия использование невозможно.

**FR:** FR-001.6

```pseudo
RULE CON-008_consent_required(user):
    IF NOT user.consents.personal_data_processing:
        BLOCK all_features EXCEPT [view_disclaimer, give_consent, delete_account]
        SHOW consent_form(
            purpose="Обработка персональных данных для предоставления услуг",
            legal_basis="ФЗ-152",
            data_categories=["profile", "messages", "diary", "health_metrics"],
            retention_period="До удаления аккаунта или запроса на удаление",
            rights=["access", "rectification", "deletion", "portability"]
        )
    IF user.consents.personal_data_processing.revoked:
        TRIGGER account_deletion_flow(user)
```

#### CON-009: Право на удаление данных

**Правило:** Пользователь имеет право запросить полное удаление всех своих персональных данных. Удаление выполняется в течение 30 дней.

**FR:** FR-012.5
**NFR:** NFR-032

```pseudo
RULE CON-009_right_to_deletion(user, request):
    IF request.type == "account_deletion":
        # Немедленная деактивация
        user.status = "pending_deletion"
        DEACTIVATE user.subscription
        ANONYMIZE user.active_sessions

        # Полное удаление в течение 30 дней
        SCHEDULE delete_all_user_data(user.id) AT now() + 30 DAYS

        # Данные для удаления
        DELETE user.profile
        DELETE user.messages
        DELETE user.diary_entries
        DELETE user.exercises_history
        DELETE user.payment_info  # кроме юридически обязательных чеков
        DELETE user.wearable_data
        DELETE user.voice_recordings
        ANONYMIZE user.audit_logs  # логи анонимизируются, не удаляются

        SEND confirmation_email(user, "Данные будут удалены в течение 30 дней")
        LOG_AUDIT("Account deletion requested", user_id=user.id)
```

#### CON-010: Обязательный disclaimer

**Правило:** На всех экранах, содержащих терапевтический контент (чат, упражнения, дневник, SOS), отображается disclaimer: "Не является медицинской услугой. ИИ не заменяет консультацию врача."

**Решение:** DEC-012
**FR:** FR-001.3

```pseudo
RULE CON-010_disclaimer_display():
    CONST DISCLAIMER_TEXT = "Emotional Balance — это инструмент поддержки эмоционального здоровья. " +
        "Не является медицинской услугой. ИИ не заменяет консультацию врача. " +
        "При ухудшении состояния обратитесь к специалисту."

    CONST THERAPY_SCREENS = [
        "ai_chat", "voice_session", "diary", "exercises",
        "sos_protocols", "meditations", "mini_courses"
    ]

    FOR EACH screen IN THERAPY_SCREENS:
        ASSERT screen.has_disclaimer(DISCLAIMER_TEXT) == TRUE

    # При первом входе — полноэкранный disclaimer с обязательным подтверждением
    IF user.is_first_login:
        SHOW full_screen_disclaimer(DISCLAIMER_TEXT)
        REQUIRE user.confirms_disclaimer BEFORE proceeding
```

#### CON-011: Верификация возраста 18+

**Правило:** Платформа предназначена только для пользователей 18 лет и старше. При регистрации обязательна верификация возраста.

**FR:** FR-001

```pseudo
RULE CON-011_age_verification(user):
    ON registration:
        REQUIRE user.confirms_age_18_plus == TRUE
        IF NOT user.confirms_age_18_plus:
            REJECT registration
            SHOW "Сервис доступен только для пользователей 18 лет и старше"
            LOG_AUDIT("Underage registration attempt blocked")
```

---

### 2.4 B2B-ограничения

#### CON-012: Минимум 10 сотрудников для B2B

**Правило:** Корпоративная группа должна содержать минимум 10 сотрудников. HR-аналитика отображается только при >= 10 активных участниках (для обеспечения анонимности).

**Решение:** DEC-019
**FR:** FR-011.1, FR-011.3

```pseudo
RULE CON-012_b2b_minimum_employees(company):
    # Создание группы
    IF company.employee_count < 10:
        REJECT("Минимальное количество сотрудников для B2B: 10")

    # Аналитика
    FUNCTION show_analytics(company):
        active_employees = company.get_active_employees()
        IF count(active_employees) < 10:
            SHOW "Агрегированная аналитика доступна при 10+ активных участниках"
            RETURN EmptyAnalytics
        ELSE:
            RETURN AggregatedAnalytics(
                data=aggregate(active_employees),
                # НИКОГДА не показывать индивидуальные данные
                individual_data=FORBIDDEN
            )
```

#### CON-013: Минимальный B2B-контракт 3 месяца

**Правило:** Минимальная длительность корпоративного контракта — 3 месяца. Оплата по invoice.

**FR:** FR-011.4

```pseudo
RULE CON-013_b2b_contract_duration(contract):
    CONST MIN_CONTRACT_MONTHS = 3
    CONST MIN_EMPLOYEES = 10
    CONST PRICE_PER_EMPLOYEE = 1500  # руб/мес

    IF contract.duration_months < MIN_CONTRACT_MONTHS:
        REJECT("Минимальный контракт: 3 месяца")
    IF contract.employee_count < MIN_EMPLOYEES:
        REJECT("Минимум 10 сотрудников")

    contract.monthly_amount = contract.employee_count * PRICE_PER_EMPLOYEE
    contract.total_amount = contract.monthly_amount * contract.duration_months
    contract.payment_method = "invoice"
```

#### CON-014: B2B анонимность персональных данных

**Правило:** HR-администратор корпоративной группы НИКОГДА не видит персональные данные сотрудников: записи дневника, сообщения чата, результаты упражнений, кризисные срабатывания. Доступна только агрегированная аналитика.

**FR:** FR-011.3
**SR:** SR-002, SR-007

```pseudo
RULE CON-014_b2b_data_anonymity(hr_user, request):
    IF hr_user.role == "hr_admin":
        ALLOWED_DATA = [
            "aggregate_stress_level",     # средний уровень стресса (при >= 10 чел.)
            "active_users_percentage",     # % активных пользователей
            "total_sessions_count",        # общее кол-во сессий
            "average_satisfaction_score",  # средний CSAT
            "feature_usage_distribution"   # распределение по функциям
        ]
        FORBIDDEN_DATA = [
            "individual_diary_entries",
            "individual_chat_messages",
            "individual_exercise_results",
            "individual_crisis_events",
            "individual_mood_scores",
            "individual_session_history"
        ]
        IF request.data_type IN FORBIDDEN_DATA:
            REJECT("Доступ к персональным данным сотрудников запрещён")
            LOG_AUDIT("B2B privacy violation attempt", hr_user=hr_user.id)
```

---

### 2.5 Платёжные ограничения

#### CON-015: Привязка карты при Trial

**Правило:** Для активации 7-дневного trial-периода Standard/Premium обязательна привязка банковской карты через YooKassa. По окончании trial — автоматическое списание, если подписка не отменена.

**Решение:** DEC-016
**FR:** FR-010.5

```pseudo
RULE CON-015_trial_activation(user, plan):
    CONST TRIAL_DAYS = 7

    IF NOT user.has_payment_method:
        REQUIRE add_payment_method(user)

    trial = Trial(
        user=user,
        plan=plan,
        start_date=now(),
        end_date=now() + TRIAL_DAYS,
        auto_charge=TRUE
    )

    # Уведомление за 3 дня до окончания
    SCHEDULE notify_trial_ending(user) AT trial.end_date - 3 DAYS
    # Автоматическое списание по окончании
    SCHEDULE charge_subscription(user, plan) AT trial.end_date

    LOG_AUDIT("Trial activated", user=user.id, plan=plan, end_date=trial.end_date)
```

#### CON-016: Graceful downgrade при неоплате

**Правило:** При неудачном списании подписки пользователь переводится на Free-тариф с сохранением данных. Три попытки списания в течение 7 дней.

**FR:** FR-010.9

```pseudo
RULE CON-016_payment_failure(user, payment):
    CONST MAX_RETRY_ATTEMPTS = 3
    CONST RETRY_INTERVAL_DAYS = [1, 3, 7]  # дни между попытками

    ON payment_failed(user, payment):
        payment.retry_count += 1

        IF payment.retry_count <= MAX_RETRY_ATTEMPTS:
            next_retry = now() + RETRY_INTERVAL_DAYS[payment.retry_count - 1] DAYS
            SCHEDULE retry_payment(user, payment) AT next_retry
            NOTIFY user "Не удалось списать оплату. Следующая попытка: {next_retry}"
        ELSE:
            # Все попытки исчерпаны — downgrade
            old_plan = user.subscription.plan
            user.subscription.plan = "free"
            user.subscription.downgraded_at = now()
            user.subscription.previous_plan = old_plan

            NOTIFY user "Подписка {old_plan} отменена из-за неоплаты. Вы переведены на Free."
            LOG_AUDIT("Subscription downgraded", user=user.id, from=old_plan, to="free")

            # Данные сохраняются, но доступ ограничивается
            APPLY free_tier_limits(user)
```

#### CON-017: Комиссия маркетплейса 15%

**Правило:** Платформа удерживает 15% комиссию с каждой консультации, оплаченной через маркетплейс.

**FR:** FR-007.9

```pseudo
RULE CON-017_marketplace_commission(consultation):
    CONST COMMISSION_RATE = 0.15

    platform_commission = consultation.price * COMMISSION_RATE
    psychologist_payout = consultation.price - platform_commission

    # Выплата психологу
    SCHEDULE payout(
        recipient=consultation.psychologist,
        amount=psychologist_payout,
        original_amount=consultation.price,
        commission=platform_commission,
        commission_rate=COMMISSION_RATE
    ) AT consultation.completed_at + 1 DAY  # Выплата через 24 часа после завершения

    LOG_AUDIT("Marketplace commission",
        consultation_id=consultation.id,
        total=consultation.price,
        commission=platform_commission,
        payout=psychologist_payout)
```

---

### 2.6 Технические ограничения

#### CON-018: Отдельный бюджет LLM для кризис-детектора

**Правило:** Кризис-детектор имеет выделенный бюджет LLM API, не подчиняющийся общим лимитам системы. При исчерпании основного бюджета (graceful degradation) кризис-детектор продолжает работать.

**Решение:** DEC-020
**FR:** FR-006, FR-013

```pseudo
RULE CON-018_crisis_detector_budget():
    budgets = {
        "general": Budget(daily=X, weekly=Y, monthly=Z),
        "crisis_detector": Budget(daily=UNLIMITED, weekly=UNLIMITED, monthly=UNLIMITED)
    }

    # Кризис-детектор НИКОГДА не ограничивается общим бюджетом
    ON general_budget_exceeded():
        ASSERT crisis_detector.status == "active"
        # Основные функции деградируют, но кризис-детектор работает
        DEGRADE ai_chat, voice_sessions
        KEEP_ACTIVE crisis_detector, sos_protocols
```

#### CON-019: Реферальный анти-фрод лимит

**Правило:** Максимум 10 реферальных бонусов на одного пользователя в месяц.

**Решение:** DEC-030
**FR:** FR-017.6

```pseudo
RULE CON-019_referral_antifraud(referrer):
    CONST MAX_REFERRAL_BONUSES_PER_MONTH = 10

    current_month_bonuses = count(
        referrer.referral_bonuses
        WHERE created_at >= start_of_month()
    )

    IF current_month_bonuses >= MAX_REFERRAL_BONUSES_PER_MONTH:
        # Реферал регистрируется, но бонус не начисляется
        REGISTER referral WITHOUT bonus
        NOTIFY referrer "Лимит бонусов за этот месяц достигнут (10/10)"
        RETURN BonusLimitReached
```

#### CON-020: Верификация дипломов психологов

**Правило:** Психолог может принимать клиентов на маркетплейсе только после ручной верификации дипломов и сертификатов модератором.

**FR:** FR-007.8

```pseudo
RULE CON-020_psychologist_verification(psychologist):
    STATES = ["pending", "documents_submitted", "under_review", "verified", "rejected"]

    IF psychologist.verification_status != "verified":
        BLOCK psychologist.can_accept_clients = FALSE
        BLOCK psychologist.visible_in_catalog = FALSE

    ON verification_approved(psychologist, moderator):
        psychologist.verification_status = "verified"
        psychologist.verified_by = moderator.id
        psychologist.verified_at = now()
        psychologist.visible_in_catalog = TRUE
        psychologist.can_accept_clients = TRUE
        NOTIFY psychologist "Ваш профиль верифицирован. Вы можете принимать клиентов."
        LOG_AUDIT("Psychologist verified", psychologist=psychologist.id, moderator=moderator.id)
```

---

## 3. Derivations (Вычисления и формулы)

### DER-001: Расчёт Mood Trend (скользящее среднее)

**Описание:** Тренд настроения вычисляется как скользящее среднее интенсивности эмоций за 4 недели (28 дней) с весовым коэффициентом для более свежих записей.

**FR:** FR-004.4, FR-004.5

```pseudo
DERIVATION DER-001_mood_trend(user, date_range=28):
    entries = user.diary_entries
        .WHERE(created_at >= now() - date_range DAYS)
        .ORDER_BY(created_at ASC)

    IF count(entries) < 3:
        RETURN InsufficientData("Минимум 3 записи для расчёта тренда")

    # Экспоненциально взвешенное скользящее среднее (EMA)
    CONST ALPHA = 0.3  # Вес новых данных (0.2-0.4)

    ema = entries[0].intensity
    FOR entry IN entries[1:]:
        ema = ALPHA * entry.intensity + (1 - ALPHA) * ema

    # Недельные средние для визуализации
    weekly_averages = []
    FOR week IN split_by_weeks(entries, weeks=4):
        avg = mean(week.intensities)
        weekly_averages.append(avg)

    # Определение тренда
    trend_direction = CASE
        WHEN weekly_averages[-1] > weekly_averages[-2] + 0.5: "improving"
        WHEN weekly_averages[-1] < weekly_averages[-2] - 0.5: "declining"
        ELSE: "stable"

    RETURN MoodTrend(
        current_ema=round(ema, 2),
        weekly_averages=weekly_averages,
        direction=trend_direction,
        data_points=count(entries),
        period_days=date_range
    )
```

### DER-002: PHQ-9 Scoring (оценка депрессии)

**Описание:** Стандартизированный опросник из 9 вопросов для оценки уровня депрессии. Каждый вопрос оценивается от 0 до 3.

**FR:** FR-004, FR-006

```pseudo
DERIVATION DER-002_phq9_scoring(answers):
    # answers = массив из 9 значений (0-3 каждый)
    ASSERT length(answers) == 9
    ASSERT ALL(a IN [0, 1, 2, 3] FOR a IN answers)

    total_score = sum(answers)

    severity = CASE
        WHEN total_score >= 0 AND total_score <= 4:   "minimal"       # минимальная
        WHEN total_score >= 5 AND total_score <= 9:   "mild"          # лёгкая
        WHEN total_score >= 10 AND total_score <= 14:  "moderate"      # умеренная
        WHEN total_score >= 15 AND total_score <= 19:  "moderately_severe"  # умеренно-тяжёлая
        WHEN total_score >= 20 AND total_score <= 27:  "severe"        # тяжёлая

    recommendations = CASE
        WHEN severity == "minimal":          "Продолжайте вести дневник"
        WHEN severity == "mild":             "Рекомендуем КПТ-упражнения"
        WHEN severity == "moderate":         "Рекомендуем записаться к психологу"
        WHEN severity == "moderately_severe": "Настоятельно рекомендуем консультацию специалиста"
        WHEN severity == "severe":           "Необходима помощь специалиста"

    # Вопрос 9 (суицидальные мысли) — отдельная обработка
    IF answers[8] > 0:
        TRIGGER crisis_assessment(user, source="phq9_q9", score=answers[8])

    RETURN PHQ9Result(
        total_score=total_score,
        severity=severity,
        recommendation=recommendations,
        question_9_flagged=(answers[8] > 0),
        assessed_at=now()
    )
```

### DER-003: GAD-7 Scoring (оценка тревожности)

**Описание:** Стандартизированный опросник из 7 вопросов для оценки уровня тревожности. Каждый вопрос оценивается от 0 до 3.

**FR:** FR-004, FR-006

```pseudo
DERIVATION DER-003_gad7_scoring(answers):
    ASSERT length(answers) == 7
    ASSERT ALL(a IN [0, 1, 2, 3] FOR a IN answers)

    total_score = sum(answers)

    severity = CASE
        WHEN total_score >= 0 AND total_score <= 4:   "minimal"
        WHEN total_score >= 5 AND total_score <= 9:   "mild"
        WHEN total_score >= 10 AND total_score <= 14:  "moderate"
        WHEN total_score >= 15 AND total_score <= 21:  "severe"

    recommendations = CASE
        WHEN severity == "minimal":  "Состояние в норме"
        WHEN severity == "mild":     "Рекомендуем дыхательные практики и медитации"
        WHEN severity == "moderate": "Рекомендуем КПТ-упражнения и консультацию"
        WHEN severity == "severe":   "Необходима помощь специалиста"

    RETURN GAD7Result(
        total_score=total_score,
        severity=severity,
        recommendation=recommendations,
        assessed_at=now()
    )
```

### DER-004: Кризисный Threshold (порог эскалации)

**Описание:** Алгоритм определения уровня кризиса на основе анализа сообщений пользователя. При confidence >= 0.85 для уровня "critical" или "high" — немедленная эскалация.

**FR:** FR-006.1, FR-006.2, FR-006.5

```pseudo
DERIVATION DER-004_crisis_threshold(message, user_context):
    CONST THRESHOLD_CRITICAL = 0.85
    CONST THRESHOLD_HIGH = 0.85
    CONST THRESHOLD_MODERATE = 0.60

    # Шаг 1: Keyword-based pre-screening (быстрый, < 100ms)
    keyword_score = check_crisis_keywords(message, CRISIS_KEYWORD_DB)

    # Шаг 2: LLM-based анализ (если keyword_score > 0.3)
    IF keyword_score > 0.3:
        llm_analysis = crisis_llm.analyze(
            message=message,
            user_history=user_context.recent_messages(limit=10),
            diary_trend=user_context.mood_trend,
            prompt=CRISIS_DETECTION_PROMPT
        )
        confidence = llm_analysis.confidence
        risk_level = llm_analysis.risk_level
    ELSE:
        confidence = keyword_score
        risk_level = "low"

    # Шаг 3: Классификация и действие
    crisis_level = CASE
        WHEN risk_level == "critical" AND confidence >= THRESHOLD_CRITICAL:
            ESCALATE_IMMEDIATELY(user, "critical")
            RETURN CrisisLevel.CRITICAL
        WHEN risk_level == "high" AND confidence >= THRESHOLD_HIGH:
            ESCALATE(user, "high")
            RETURN CrisisLevel.HIGH
        WHEN risk_level == "moderate" AND confidence >= THRESHOLD_MODERATE:
            MONITOR(user, "moderate")
            RETURN CrisisLevel.MODERATE
        ELSE:
            RETURN CrisisLevel.LOW

    LOG_AUDIT("Crisis detection",
        user=user.id, level=crisis_level,
        confidence=confidence, message_hash=hash(message))
```

### DER-005: LTV прогноз

**Описание:** Расчёт прогнозного Lifetime Value платящего пользователя.

**FR:** FR-010
**Решение:** DEC-024

```pseudo
DERIVATION DER-005_ltv_forecast(user_cohort):
    # Формула: LTV = ARPU x avg_lifetime_months
    # avg_lifetime_months = 1 / monthly_churn_rate

    CONST PLAN_PRICES = {
        "standard": 990,
        "premium": 2990,
        "b2b": 1500  # per employee
    }

    CONST MONTHLY_CHURN = {
        "standard": 0.10,    # 10% оттока
        "premium": 0.06,     # 6% оттока (выше вовлечённость)
        "b2b": 0.05          # 5% оттока (контракты)
    }

    FUNCTION calculate_ltv(plan):
        arpu = PLAN_PRICES[plan]
        churn = MONTHLY_CHURN[plan]
        avg_lifetime = 1 / churn
        ltv = arpu * avg_lifetime
        RETURN ltv

    # Для когорты
    blended_arpu = weighted_average(
        values=[990, 2990],
        weights=[0.6, 0.4]  # 60% Standard, 40% Premium
    )  # = 1790 руб/мес (прогноз; текущая оценка 1500)

    blended_churn = 0.08  # средневзвешенный
    blended_ltv = blended_arpu / blended_churn  # = 18 750 руб

    RETURN LTVForecast(
        standard_ltv=calculate_ltv("standard"),
        premium_ltv=calculate_ltv("premium"),
        b2b_ltv=calculate_ltv("b2b"),
        blended_ltv=blended_ltv,
        blended_arpu=blended_arpu,
        blended_churn=blended_churn
    )
```

### DER-006: Расчёт Streak (серия дней для геймификации)

**Описание:** Серия дней (streak) считается непрерывной последовательностью дней, когда пользователь выполнил определённое действие. Guilt-free подход: пропуск мягко сбрасывает серию, а не обнуляет прогресс.

**Решение:** DEC-031
**FR:** FR-018.4, FR-018.7

```pseudo
DERIVATION DER-006_streak_calculation(user, activity_type):
    # activity_type = "diary" | "exercise" | "meditation" | "chat"

    activities = user.activities
        .WHERE(type == activity_type)
        .ORDER_BY(date DESC)

    current_streak = 0
    best_streak = user.best_streaks[activity_type]
    check_date = today()

    FOR activity IN activities:
        IF activity.date == check_date:
            current_streak += 1
            check_date -= 1 DAY
        ELIF activity.date == check_date - 1 DAY:
            # Пропуск 1 дня — "grace period" (guilt-free)
            check_date = activity.date
            current_streak += 1
            check_date -= 1 DAY
        ELSE:
            BREAK  # Серия прервана

    # Обновление лучшей серии
    IF current_streak > best_streak:
        best_streak = current_streak
        user.best_streaks[activity_type] = best_streak

    # Guilt-free messaging
    IF current_streak == 0 AND user.previous_streak > 0:
        message = "Пауза — это тоже забота о себе. Начните новую серию, когда будете готовы."
    ELSE:
        message = streak_messages[min(current_streak, 30)]  # Поощрительные сообщения

    RETURN Streak(
        current=current_streak,
        best=best_streak,
        activity_type=activity_type,
        message=message,
        grace_period_used=(current_streak != consecutive_days(activities))
    )
```

### DER-007: Когортный Retention

**Описание:** Расчёт retention для когорты пользователей, зарегистрированных в определённый период.

**FR:** FR-011.5

```pseudo
DERIVATION DER-007_cohort_retention(cohort_start, cohort_end, measure_date):
    cohort_users = users
        .WHERE(registered_at >= cohort_start AND registered_at <= cohort_end)

    cohort_size = count(cohort_users)

    IF cohort_size == 0:
        RETURN EmptyCohort

    days_since_registration = (measure_date - cohort_start).days

    # Активность = хотя бы 1 действие за последние 7 дней
    active_users = cohort_users
        .WHERE(last_activity >= measure_date - 7 DAYS)

    retention_rate = count(active_users) / cohort_size

    # Бенчмарки
    benchmarks = {
        1: 0.55,   # D1 retention 55%
        7: 0.35,   # D7 retention 35%
        14: 0.28,  # D14 retention 28%
        30: 0.25,  # D30 retention 25%
        60: 0.18,  # D60 retention 18%
        90: 0.12   # D90 retention 12%
    }

    RETURN CohortRetention(
        cohort_start=cohort_start,
        cohort_size=cohort_size,
        active_count=count(active_users),
        retention_rate=round(retention_rate, 4),
        days=days_since_registration,
        benchmark=benchmarks.get(days_since_registration, None),
        status="above_benchmark" IF retention_rate > benchmarks.get(days_since_registration, 0) ELSE "below"
    )
```

### DER-008: NPS Scoring

**Описание:** Net Promoter Score на основе ответа на вопрос "Какова вероятность, что вы порекомендуете сервис?" (0-10).

```pseudo
DERIVATION DER-008_nps_calculation(responses):
    # responses = массив оценок 0-10

    promoters = count(r FOR r IN responses WHERE r >= 9)
    passives = count(r FOR r IN responses WHERE r >= 7 AND r <= 8)
    detractors = count(r FOR r IN responses WHERE r <= 6)

    total = count(responses)

    IF total == 0:
        RETURN InsufficientData

    nps = ((promoters - detractors) / total) * 100

    RETURN NPSResult(
        score=round(nps, 1),
        promoters_pct=round(promoters / total * 100, 1),
        passives_pct=round(passives / total * 100, 1),
        detractors_pct=round(detractors / total * 100, 1),
        total_responses=total,
        category=CASE
            WHEN nps >= 50: "excellent"
            WHEN nps >= 30: "good"
            WHEN nps >= 0:  "neutral"
            ELSE:           "needs_improvement"
    )
```

### DER-009: Расчёт роста дерева (геймификация)

**Описание:** Визуальный прогресс-виджет "Дерево эмоционального здоровья". Дерево растёт по мере активности пользователя.

**FR:** FR-018.1, FR-018.2

```pseudo
DERIVATION DER-009_tree_growth(user):
    CONST GROWTH_RULES = {
        "diary_entry":   {"element": "leaf",   "points": 1},
        "exercise_done": {"element": "leaf",   "points": 1},
        "meditation":    {"element": "flower", "points": 2},
        "chat_session":  {"element": "trunk",  "points": 1},
        "sos_completed": {"element": "root",   "points": 1},
        "course_lesson": {"element": "branch", "points": 1}
    }

    total_points = 0
    elements = {"leaf": 0, "flower": 0, "trunk": 0, "root": 0, "branch": 0}

    FOR activity IN user.activities_this_week():
        rule = GROWTH_RULES.get(activity.type)
        IF rule:
            elements[rule.element] += rule.points
            total_points += rule.points

    # Уровень дерева (1-100)
    tree_level = min(100, user.total_growth_points // 10)

    # Визуальные стадии
    visual_stage = CASE
        WHEN tree_level <= 10:  "sprout"       # росток
        WHEN tree_level <= 25:  "sapling"      # деревце
        WHEN tree_level <= 50:  "young_tree"   # молодое дерево
        WHEN tree_level <= 75:  "mature_tree"  # зрелое дерево
        WHEN tree_level <= 100: "mighty_tree"  # могучее дерево

    RETURN TreeState(
        level=tree_level,
        visual_stage=visual_stage,
        weekly_growth=total_points,
        elements=elements,
        total_points=user.total_growth_points + total_points
    )
```

### DER-010: Расчёт стоимости консультации с учётом скидки

**Описание:** Расчёт итоговой стоимости консультации в маркетплейсе с учётом скидки по тарифному плану.

**FR:** FR-007.4, FR-010.1

```pseudo
DERIVATION DER-010_consultation_price(user, consultation):
    base_price = consultation.psychologist.session_price

    discount = CASE
        WHEN user.subscription.plan == "premium":  0.10   # 10% скидка
        WHEN user.subscription.plan == "standard":  0.05   # 5% скидка
        ELSE: 0.0  # Free — без скидки

    discount_amount = base_price * discount
    final_price = base_price - discount_amount
    platform_commission = final_price * 0.15
    psychologist_payout = final_price - platform_commission

    RETURN ConsultationPrice(
        base_price=base_price,
        discount_rate=discount,
        discount_amount=discount_amount,
        final_price=final_price,
        platform_commission=platform_commission,
        psychologist_payout=psychologist_payout
    )
```

### DER-011: Стресс-индекс на основе HRV

**Описание:** Расчёт уровня стресса на основе вариабельности сердечного ритма (HRV) от wearable-устройств.

**FR:** FR-009.4

```pseudo
DERIVATION DER-011_stress_index(hrv_data):
    # hrv_data = массив значений HRV (мс) за период

    IF count(hrv_data) < 5:
        RETURN InsufficientData

    mean_hrv = mean(hrv_data)
    rmssd = sqrt(mean([(hrv_data[i+1] - hrv_data[i])^2 FOR i IN range(len(hrv_data)-1)]))

    # Нормализация стресс-индекса (0-100)
    # Низкий HRV = высокий стресс, Высокий HRV = низкий стресс
    stress_index = CASE
        WHEN rmssd >= 80: max(0, 20 - (rmssd - 80) / 5)      # Низкий стресс
        WHEN rmssd >= 40: 20 + (80 - rmssd) / 40 * 50         # Средний стресс
        WHEN rmssd < 40:  min(100, 70 + (40 - rmssd) / 40 * 30)  # Высокий стресс

    level = CASE
        WHEN stress_index <= 30:  "low"        # Низкий
        WHEN stress_index <= 60:  "moderate"   # Средний
        WHEN stress_index <= 80:  "high"       # Высокий
        ELSE:                     "critical"   # Критический

    RETURN StressAssessment(
        stress_index=round(stress_index, 1),
        level=level,
        mean_hrv=round(mean_hrv, 1),
        rmssd=round(rmssd, 1),
        measured_at=now()
    )
```

---

## 4. Triggers (Триггеры)

### 4.1 Safety-триггеры

#### TRG-001: Кризис --> SOS-протокол

**Описание:** При обнаружении кризисного состояния (critical/high) немедленно прерывается текущий flow и активируется кризисный протокол.

**FR:** FR-006.3, FR-006.4, FR-006.7, FR-014.8

```pseudo
TRIGGER TRG-001_crisis_detected(user, crisis_level, confidence):
    # НЕМЕДЛЕННО, прерывает ЛЮБОЙ текущий flow
    PRIORITY = MAXIMUM

    IF crisis_level == "critical" AND confidence >= 0.85:
        # 1. Показать контакт горячей линии
        SHOW crisis_banner(
            phone="8-800-2000-122",
            text="Если вам нужна помощь, позвоните на линию поддержки"
        )
        # 2. Уведомить дежурного оператора
        NOTIFY duty_operator(
            user_id=user.id,
            level="critical",
            message_excerpt=anonymize(last_message),
            timestamp=now()
        )
        # 3. Логирование
        LOG_CRITICAL("Crisis detected: CRITICAL", user=user.id, confidence=confidence)
        # 4. Переключить чат на кризисный режим
        SET user.chat_mode = "crisis_intervention"

    ELIF crisis_level == "high" AND confidence >= 0.85:
        # 1. Мягко предложить помощь
        SHOW help_suggestion(
            text="Мы видим, что вам сейчас непросто.",
            actions=[
                "Позвонить на горячую линию: 8-800-2000-122",
                "Записаться к психологу",
                "Открыть SOS-протокол"
            ]
        )
        # 2. Логирование
        LOG_WARNING("Crisis detected: HIGH", user=user.id, confidence=confidence)

    # В обоих случаях записать в аудит
    LOG_AUDIT("Crisis trigger activated",
        user=user.id, level=crisis_level,
        confidence=confidence, action_taken=TRUE)
```

#### TRG-002: Повышенный стресс (wearables) --> Предложение практики

**Описание:** При получении данных о высоком стрессе от wearable-устройства автоматически отправляется push-уведомление с предложением дыхательной практики или медитации.

**FR:** FR-009.6

```pseudo
TRIGGER TRG-002_wearable_stress_alert(user, stress_data):
    IF stress_data.level IN ["high", "critical"]:
        IF user.subscription.plan == "premium":  # wearables только для Premium
            # Не отправлять чаще чем раз в 2 часа
            last_alert = user.last_stress_alert
            IF last_alert AND (now() - last_alert) < 2 HOURS:
                RETURN  # Cooldown

            recommended_practice = select_practice(
                stress_level=stress_data.level,
                user_preferences=user.preferred_practices,
                time_of_day=current_time()
            )

            SEND push_notification(user,
                title="Уровень стресса повышен",
                body="Попробуйте {recommended_practice.name} ({recommended_practice.duration} мин)",
                action="open_practice",
                practice_id=recommended_practice.id
            )

            user.last_stress_alert = now()
            LOG_AUDIT("Stress alert sent", user=user.id, stress_level=stress_data.level)
```

### 4.2 Тарифные триггеры

#### TRG-003: Лимит сессий --> Предложение апгрейда

**Описание:** При достижении лимита на ИИ-чат, дневник или упражнения (Free-тариф) показывается предложение перейти на платный тариф.

**FR:** FR-002.6, FR-010

```pseudo
TRIGGER TRG-003_limit_reached(user, resource_type, current_usage, limit):
    IF user.subscription.plan == "free":
        # При 80% лимита — мягкое напоминание
        IF current_usage >= limit * 0.8 AND current_usage < limit:
            SHOW soft_upgrade_hint(
                text="Осталось {limit - current_usage} {resource_type}",
                cta="Попробуйте Standard бесплатно 7 дней"
            )

        # При достижении лимита
        IF current_usage >= limit:
            SHOW upgrade_modal(
                title="Лимит достигнут",
                body="Вы использовали все {resource_type} на сегодня",
                plans=[
                    {"name": "Standard", "price": "990 руб/мес", "trial": "7 дней бесплатно"},
                    {"name": "Premium", "price": "2990 руб/мес", "trial": "7 дней бесплатно"}
                ],
                cta="Попробовать бесплатно"
            )
            LOG_AUDIT("Upgrade prompt shown", user=user.id, resource=resource_type)
```

#### TRG-004: Trial окончен --> Конвертация

**Описание:** За 3 дня до окончания trial и в момент окончания — серия уведомлений о конвертации в платную подписку.

**FR:** FR-010.5, FR-010.8

```pseudo
TRIGGER TRG-004_trial_expiration(user, trial):
    # За 3 дня до окончания
    ON (trial.end_date - 3 DAYS):
        SEND push_notification(user,
            title="Trial заканчивается через 3 дня",
            body="Продолжите использовать {trial.plan} за {plan_price(trial.plan)}/мес",
            action="manage_subscription"
        )

    # За 1 день
    ON (trial.end_date - 1 DAY):
        SEND push_notification(user,
            title="Последний день trial",
            body="Завтра будет списано {plan_price(trial.plan)} за {trial.plan}",
            action="manage_subscription"
        )

    # В момент окончания
    ON trial.end_date:
        IF user.has_active_payment_method:
            charge_result = charge_subscription(user, trial.plan)
            IF charge_result.success:
                ACTIVATE subscription(user, trial.plan)
                NOTIFY user "Подписка {trial.plan} активирована"
            ELSE:
                TRIGGER TRG-003_limit_reached  # Показать апгрейд
                APPLY free_tier_limits(user)
        ELSE:
            APPLY free_tier_limits(user)
            NOTIFY user "Trial завершён. Оформите подписку для продолжения"
```

#### TRG-005: Уведомление перед списанием

**Описание:** За 3 дня до рекуррентного списания подписки отправляется уведомление пользователю.

**FR:** FR-010.8

```pseudo
TRIGGER TRG-005_pre_charge_notification(user, subscription):
    ON (subscription.next_charge_date - 3 DAYS):
        SEND push_notification(user,
            title="Приближается списание подписки",
            body="{subscription.plan}: {subscription.price} руб будет списано {subscription.next_charge_date}",
            actions=["Продолжить", "Отменить подписку"]
        )
```

### 4.3 Engagement-триггеры

#### TRG-006: 3 дня без сессии --> Push-уведомление

**Описание:** Если пользователь не заходил в приложение 3 дня подряд, отправляется мотивирующее push-уведомление.

**FR:** FR-004.3, FR-018.7

```pseudo
TRIGGER TRG-006_inactivity_reminder(user):
    CONST INACTIVITY_THRESHOLD = 3 DAYS
    CONST MAX_REMINDERS_PER_WEEK = 2

    IF (now() - user.last_activity) >= INACTIVITY_THRESHOLD:
        reminders_this_week = count(user.reminders.WHERE(sent_at >= start_of_week()))

        IF reminders_this_week < MAX_REMINDERS_PER_WEEK:
            # Guilt-free messaging (DEC-031)
            messages = [
                "Пауза — это тоже забота о себе. Мы здесь, когда будете готовы.",
                "Ваше дерево ждёт вас. Даже 2 минуты — уже забота о себе.",
                "Как ваше настроение? Запишите в дневник, когда будет минутка."
            ]

            SEND push_notification(user,
                title="Мы скучаем",
                body=random(messages),
                action="open_app"
            )
            LOG_AUDIT("Inactivity reminder sent", user=user.id, days_inactive=days_since_last)
```

#### TRG-007: PHQ-9 >= 15 --> Рекомендация маркетплейса

**Описание:** Если результат PHQ-9 показывает умеренно-тяжёлую или тяжёлую депрессию (score >= 15), пользователю рекомендуется записаться к живому психологу через маркетплейс.

**FR:** FR-007.10, FR-006

```pseudo
TRIGGER TRG-007_phq9_high_score(user, phq9_result):
    IF phq9_result.total_score >= 15:
        # Мягкая, но настойчивая рекомендация
        SHOW recommendation_card(
            title="Рекомендуем консультацию специалиста",
            body="Ваши результаты опросника показывают, что помощь профессионала " +
                 "может быть особенно полезна сейчас.",
            actions=[
                {"label": "Подобрать психолога", "action": "open_marketplace", "primary": TRUE},
                {"label": "Позже", "action": "dismiss"}
            ]
        )

        # Подобрать подходящих психологов
        recommended_psychologists = marketplace.find_psychologists(
            specialization="depression",
            user_location=user.location,
            sort_by="rating",
            limit=3
        )

        SHOW psychologist_suggestions(recommended_psychologists)
        LOG_AUDIT("PHQ-9 high score recommendation", user=user.id, score=phq9_result.total_score)

    # Если score >= 20 (тяжёлая) — дополнительная проверка кризиса
    IF phq9_result.total_score >= 20:
        TRIGGER crisis_assessment(user, source="phq9", score=phq9_result.total_score)
```

#### TRG-008: Негативный mood trend 2 недели --> Адаптация контента

**Описание:** Если mood trend отрицательный в течение 2 недель подряд, система адаптирует рекомендуемый контент: предлагает более мягкие упражнения, медитации для расслабления, записи в дневнике.

**FR:** FR-002.4, FR-004.5, FR-005.2

```pseudo
TRIGGER TRG-008_negative_mood_trend(user, mood_trend):
    IF mood_trend.direction == "declining" AND mood_trend.weeks_declining >= 2:
        # Адаптация контента
        user.content_profile.adjust(
            exercise_intensity="gentle",           # Мягкие упражнения
            meditation_type=["relaxation", "sleep"], # Расслабление
            chat_tone="extra_supportive",           # Более поддерживающий тон
            suggested_topics=["self_care", "small_wins", "gratitude"]
        )

        # Предложение конкретных действий
        SHOW adaptive_card(
            title="Мы заметили, что последние недели были непростыми",
            suggestions=[
                "Попробуйте медитацию для расслабления (5 мин)",
                "Напишите 3 вещи, за которые благодарны сегодня",
                "Запишитесь на консультацию к психологу"
            ]
        )

        LOG_AUDIT("Content adapted for negative trend", user=user.id, weeks=mood_trend.weeks_declining)
```

### 4.4 Реферальные триггеры

#### TRG-009: Реферальная регистрация --> Начисление бонуса

**Описание:** Когда приглашённый пользователь регистрируется по реферальной ссылке, обоим (приглашающему и приглашённому) начисляется бонус — 7 дней Premium.

**Решение:** DEC-030
**FR:** FR-017.3, FR-017.4, FR-017.7

```pseudo
TRIGGER TRG-009_referral_registration(new_user, referral_link):
    referrer = referral_link.owner

    # Проверка анти-фрод лимита (CON-019)
    IF referrer.monthly_referral_bonuses >= 10:
        REGISTER new_user
        LOG_AUDIT("Referral registered without bonus (limit reached)", referrer=referrer.id)
        RETURN

    # Бонус приглашающему
    extend_subscription(referrer, plan="premium", days=7, reason="referral_bonus")
    NOTIFY referrer "Ваш друг присоединился! +7 дней Premium"

    # Бонус приглашённому
    activate_trial(new_user, plan="premium", days=7, reason="referral_bonus")
    NOTIFY new_user "Добро пожаловать! У вас 7 дней Premium в подарок"

    # Обновить счётчики
    referrer.monthly_referral_bonuses += 1
    referrer.total_referrals += 1

    LOG_AUDIT("Referral bonus granted",
        referrer=referrer.id, new_user=new_user.id, bonus_days=7)
```

### 4.5 B2B-триггеры

#### TRG-010: B2B контракт истекает через 30 дней --> Уведомление HR

**Описание:** За 30 дней до окончания корпоративного контракта HR-администратор получает уведомление о необходимости продления.

**FR:** FR-011

```pseudo
TRIGGER TRG-010_b2b_contract_expiration(company, contract):
    # За 30 дней
    ON (contract.end_date - 30 DAYS):
        SEND notification(company.hr_admin,
            title="Контракт истекает через 30 дней",
            body="Корпоративный контракт для {company.name} завершится {contract.end_date}. " +
                 "Рекомендуем продлить для сохранения доступа сотрудников.",
            actions=["Продлить контракт", "Связаться с менеджером"]
        )

    # За 7 дней
    ON (contract.end_date - 7 DAYS):
        SEND notification(company.hr_admin,
            title="Контракт истекает через 7 дней!",
            body="Осталось 7 дней. После окончания сотрудники будут переведены на Free.",
            priority="high"
        )

    # В день истечения
    ON contract.end_date:
        IF NOT contract.renewed:
            FOR employee IN company.employees:
                employee.subscription.plan = "free"
                APPLY free_tier_limits(employee)
            NOTIFY company.hr_admin "Контракт завершён. Сотрудники переведены на Free."
            LOG_AUDIT("B2B contract expired", company=company.id)
```

### 4.6 Дневник и аналитика

#### TRG-011: Еженедельный отчёт (дневник)

**Описание:** Каждое воскресенье генерируется еженедельный отчёт по дневнику эмоций с инсайтами от ИИ.

**FR:** FR-004.6

```pseudo
TRIGGER TRG-011_weekly_diary_report(user):
    ON every_sunday(time=user.preferred_notification_time OR 10:00):
        IF user.subscription.plan IN ["standard", "premium"]:
            entries = user.diary_entries.WHERE(created_at >= now() - 7 DAYS)

            IF count(entries) >= 3:
                report = generate_weekly_report(
                    entries=entries,
                    mood_trend=DER-001_mood_trend(user, date_range=7),
                    exercises_done=user.exercises_this_week(),
                    meditations_done=user.meditations_this_week()
                )

                SEND push_notification(user,
                    title="Ваш еженедельный отчёт готов",
                    body="Посмотрите инсайты за неделю",
                    action="open_weekly_report"
                )
```

#### TRG-012: Запись SOS --> Автоматическая запись в дневник

**Описание:** После завершения SOS-протокола автоматически создаётся запись в дневнике эмоций с оценкой до и после.

**FR:** FR-014.6

```pseudo
TRIGGER TRG-012_sos_to_diary(user, sos_session):
    ON sos_session.completed:
        diary_entry = create_diary_entry(
            user=user,
            emotion=sos_session.situation_type,  # "паника", "тревога", etc.
            intensity_before=sos_session.pre_assessment,
            intensity_after=sos_session.post_assessment,
            note="SOS-протокол: {sos_session.protocol_name}. " +
                 "До: {sos_session.pre_assessment}/10, После: {sos_session.post_assessment}/10",
            tags=["sos", sos_session.situation_type],
            auto_generated=TRUE
        )

        LOG_AUDIT("SOS diary entry auto-created",
            user=user.id, sos_session=sos_session.id, diary_entry=diary_entry.id)
```

### 4.7 Системные триггеры

#### TRG-013: Бюджет LLM 80% --> Алерт администратору

**Описание:** При достижении 80%, 95% и 100% бюджета LLM API отправляются алерты администратору.

**FR:** FR-013.5

```pseudo
TRIGGER TRG-013_budget_alert(budget, threshold):
    usage_pct = budget.current_usage / budget.limit * 100

    IF usage_pct >= 80 AND NOT budget.alert_80_sent:
        NOTIFY admin_team "LLM Budget: 80% использовано ({budget.name})"
        budget.alert_80_sent = TRUE

    IF usage_pct >= 95 AND NOT budget.alert_95_sent:
        NOTIFY admin_team "LLM Budget: 95% использовано ({budget.name}). Рассмотрите увеличение."
        budget.alert_95_sent = TRUE
        PRIORITY = HIGH

    IF usage_pct >= 100:
        NOTIFY admin_team "LLM Budget: ИСЧЕРПАН ({budget.name}). Graceful degradation активирован."
        ACTIVATE graceful_degradation(budget.name)
        PRIORITY = CRITICAL
        # Кризис-детектор НЕ затрагивается (CON-018)
```

#### TRG-014: Graceful degradation --> Ограничение функций

**Описание:** При исчерпании бюджета LLM или сбое провайдера активируется режим graceful degradation.

**FR:** FR-013.7

```pseudo
TRIGGER TRG-014_graceful_degradation(reason):
    # Функции, которые ВСЕГДА остаются доступными
    KEEP_ACTIVE = [
        "crisis_detector",    # CON-004
        "sos_protocols",      # CON-005
        "diary_basic",        # Без ИИ-анализа
        "emergency_contacts"
    ]

    # Функции, которые деградируют
    DEGRADE = {
        "ai_chat":       "queue_mode",        # Очередь вместо мгновенного ответа
        "voice_session": "text_only",          # Только текст
        "ai_analysis":   "disabled",           # ИИ-анализ отключён
        "exercise_rec":  "manual_selection"     # Ручной выбор вместо ИИ-подбора
    }

    FOR feature, mode IN DEGRADE:
        SET feature.mode = mode

    NOTIFY all_active_users "Некоторые ИИ-функции временно ограничены. Базовые функции доступны."
    LOG_CRITICAL("Graceful degradation activated", reason=reason)
```

#### TRG-015: Консультация через 24 часа --> Push-напоминание

**Описание:** За 24 часа и за 1 час до запланированной консультации с психологом отправляется push-уведомление.

**FR:** FR-007.11

```pseudo
TRIGGER TRG-015_consultation_reminder(user, consultation):
    ON (consultation.scheduled_at - 24 HOURS):
        SEND push_notification(user,
            title="Завтра консультация с {consultation.psychologist.name}",
            body="{consultation.scheduled_at.format('HH:MM, DD MMMM')}",
            action="view_consultation"
        )

    ON (consultation.scheduled_at - 1 HOUR):
        SEND push_notification(user,
            title="Консультация через 1 час",
            body="Подготовьтесь к сессии с {consultation.psychologist.name}",
            action="join_consultation"
        )
```

#### TRG-016: Терапевтический мост --> Генерация саммари

**Описание:** За 24 часа до запланированной консультации с психологом генерируется терапевтическое саммари (если пользователь дал согласие).

**FR:** FR-015.1, FR-015.2, FR-015.3

```pseudo
TRIGGER TRG-016_therapeutic_bridge(user, consultation):
    ON (consultation.scheduled_at - 24 HOURS):
        IF user.subscription.plan IN ["standard", "premium"]:
            IF user.consent_therapeutic_bridge == TRUE:
                summary = generate_therapeutic_summary(
                    user=user,
                    period=30 DAYS,
                    include=[
                        "chat_key_themes",
                        "diary_trends",
                        "exercises_completed",
                        "mood_dynamics",
                        "sos_usage"
                    ]
                )

                DELIVER summary TO consultation.psychologist.panel
                NOTIFY consultation.psychologist "Саммари для клиента готово"
                NOTIFY user "Саммари отправлено психологу {consultation.psychologist.name}"
```

#### TRG-017: Достижение разблокировано --> Уведомление

**Описание:** При выполнении условий достижения (геймификация) пользователь получает уведомление.

**FR:** FR-018.3

```pseudo
TRIGGER TRG-017_achievement_unlocked(user, achievement):
    ACHIEVEMENTS = {
        "first_diary":        {"condition": "diary_entries >= 1", "name": "Первый шаг"},
        "7_days_mindfulness": {"condition": "diary_streak >= 7", "name": "7 дней осознанности"},
        "anxiety_victory":    {"condition": "sos_completed AND post_score > pre_score + 3", "name": "Первая победа над тревогой"},
        "breath_master":      {"condition": "breathing_exercises >= 10", "name": "Мастер дыхания"},
        "tree_sapling":       {"condition": "tree_level >= 25", "name": "Деревце подросло"},
        "course_graduate":    {"condition": "courses_completed >= 1", "name": "Выпускник"}
    }

    ON activity_completed(user, activity):
        FOR ach_id, ach IN ACHIEVEMENTS:
            IF NOT user.has_achievement(ach_id):
                IF evaluate(ach.condition, user):
                    user.unlock_achievement(ach_id)
                    SHOW achievement_popup(
                        name=ach.name,
                        description=ach.description,
                        share_option=TRUE  # Share в Telegram (без деталей)
                    )
                    # Дерево растёт при достижении
                    user.tree_growth_points += 5
```

---

## 5. Edge Cases (Граничные случаи)

### 5.1 Edge Cases для Safety-правил

| ID | Сценарий | Правило | Ожидаемое поведение |
|----|----------|---------|---------------------|
| EC-001 | Пользователь шутит о суициде (ирония/юмор) | CON-006 | Консервативный подход: срабатывание детектора. Лучше false positive |
| EC-002 | Кризис-детектор и основной LLM одновременно недоступны | CON-004, CON-018 | Keyword-based fallback для кризис-детектора работает без LLM. SOS-протоколы доступны оффлайн |
| EC-003 | Пользователь в кризисе на Free-тарифе без интернета | CON-005 | Кэшированные SOS-протоколы (FR-014.9). Контакт горячей линии отображается из кэша |
| EC-004 | Пользователь отправляет кризисные маркеры на иностранном языке | CON-006 | Мультиязычный словарь кризисных маркеров. При неуверенности — эскалация (false positive) |
| EC-005 | Массовый кризис (N пользователей одновременно) | CON-004 | Выделенный бюджет кризис-детектора. Очередь приоритизации. Оповещение всей дежурной команды |

### 5.2 Edge Cases для тарифных правил

| ID | Сценарий | Правило | Ожидаемое поведение |
|----|----------|---------|---------------------|
| EC-006 | Пользователь исчерпал Free-лимит в середине сессии чата | CON-001 | Текущая сессия завершается (не обрывается). Следующая сессия недоступна до завтра |
| EC-007 | Downgrade с Premium на Free при активных wearables | CON-016 | Синхронизация останавливается. Исторические данные сохраняются, но новые не поступают |
| EC-008 | Trial и реферальный бонус активируются одновременно | CON-015, TRG-009 | Реферальный бонус (Premium 7 дней) имеет приоритет. Trial считается использованным |
| EC-009 | Пользователь отменяет подписку в день списания | CON-016 | Списание не производится. Доступ к платным функциям до конца текущего периода |
| EC-010 | B2B-сотрудник покупает личную Premium-подписку | CON-012 | Личная подписка имеет приоритет. B2B-лицензия остаётся за сотрудником, но считается "неактивной" |
| EC-011 | Промокод + скидка маркетплейса + реферальный бонус | CON-017 | Максимум одна скидка на консультацию. Приоритет: реферальный > промокод > тарифная скидка |

### 5.3 Edge Cases для B2B

| ID | Сценарий | Правило | Ожидаемое поведение |
|----|----------|---------|---------------------|
| EC-012 | В B2B группе ровно 10 сотрудников, один уволился | CON-012 | Аналитика скрывается при < 10 активных. HR получает уведомление |
| EC-013 | Сотрудник в B2B группе в кризисном состоянии | CON-014 | HR НЕ уведомляется (анонимность). Стандартный кризисный протокол для пользователя |
| EC-014 | HR пытается выгрузить индивидуальные данные через API | CON-014 | API возвращает 403 Forbidden. Попытка логируется в аудит |
| EC-015 | Контракт B2B истёк, но сотрудники продолжают пользоваться | TRG-010 | Grace period 7 дней. Затем принудительный перевод на Free |

### 5.4 Edge Cases для платежей

| ID | Сценарий | Правило | Ожидаемое поведение |
|----|----------|---------|---------------------|
| EC-016 | YooKassa недоступна при попытке оплаты | CON-015 | Показать сообщение "Платёжная система временно недоступна". Retry через 30 минут. Не блокировать доступ |
| EC-017 | Двойное списание из-за сетевой ошибки | CON-016 | Идемпотентные платежи (idempotency key). Автовозврат дубликата |
| EC-018 | Возврат средств после завершённой консультации | CON-017 | Возврат возможен в течение 24 часов. Комиссия платформы не возвращается психологу |
| EC-019 | Психолог не пришёл на консультацию | CON-017 | Полный возврат клиенту. Психолог получает warning. 3 warnings = деактивация |

### 5.5 Edge Cases для геймификации

| ID | Сценарий | Правило | Ожидаемое поведение |
|----|----------|---------|---------------------|
| EC-020 | Пользователь пропустил 1 день серии | DER-006 | Grace period: серия не сбрасывается при пропуске 1 дня. Guilt-free сообщение |
| EC-021 | Пользователь создал 100 записей за 1 день (спам) | DER-006, DER-009 | Максимум 1 "единица роста" в день на каждый тип активности. Анти-абьюз |
| EC-022 | Downgrade с Premium на Free: теряются ли достижения? | DER-009 | Достижения сохраняются. Дерево не "усыхает". Новый рост ограничен Free-лимитами |

### 5.6 Edge Cases для маркетплейса

| ID | Сценарий | Правило | Ожидаемое поведение |
|----|----------|---------|---------------------|
| EC-023 | Психолог отменяет сессию менее чем за 2 часа | CON-020 | Полный возврат клиенту. Психолог получает пенальти в рейтинге |
| EC-024 | Клиент не пришёл на сессию (no-show) | CON-017 | Оплата удерживается. Психолог получает 50% (политика no-show) |
| EC-025 | Терапевтическое саммари содержит чувствительную информацию | TRG-016 | Пользователь видит preview саммари перед отправкой. Может отредактировать или отклонить |
| EC-026 | Психолог оставляет неэтичные заметки в обратной связи | TRG-016 | Заметки модерируются. Автоматический фильтр + ручная модерация при флаге |

---

## 6. Traceability Matrix: Business Rule --> FR --> User Story

| Business Rule | Тип | FR | User Stories | DEC |
|---------------|-----|-----|-------------|-----|
| CON-001 | Constraint | FR-002.6, FR-004, FR-005.5, FR-008.6, FR-016.6 | US-006, US-010, US-014, US-022, US-042 | DEC-015 |
| CON-002 | Constraint | FR-003.5, FR-008.6, FR-009.9, FR-010.1, FR-015.6 | US-008, US-022, US-025, US-028, US-040 | DEC-014 |
| CON-003 | Constraint | FR-003, FR-008, FR-009, FR-010.1 | US-008, US-022, US-025, US-028 | DEC-014 |
| CON-004 | Constraint | FR-006.8 | US-017 | DEC-017 |
| CON-005 | Constraint | FR-014.7 | US-038, US-039 | DEC-027 |
| CON-006 | Constraint | FR-006.5 | US-017 | DEC-017 |
| CON-007 | Constraint | FR-001.6 | US-002 | DEC-002, DEC-006 |
| CON-008 | Constraint | FR-001.6 | US-002 | -- |
| CON-009 | Constraint | FR-012.5 | US-034 | -- |
| CON-010 | Constraint | FR-001.3 | US-002 | DEC-012 |
| CON-011 | Constraint | FR-001 | US-001 | -- |
| CON-012 | Constraint | FR-011.1, FR-011.3 | US-030, US-031 | DEC-019 |
| CON-013 | Constraint | FR-011.4 | US-030 | -- |
| CON-014 | Constraint | FR-011.3 | US-031 | DEC-019 |
| CON-015 | Constraint | FR-010.5 | US-029 | DEC-016 |
| CON-016 | Constraint | FR-010.9 | US-029 | -- |
| CON-017 | Constraint | FR-007.9 | US-019 | -- |
| CON-018 | Constraint | FR-006, FR-013 | US-017, US-035 | DEC-020 |
| CON-019 | Constraint | FR-017.6 | US-044 | DEC-030 |
| CON-020 | Constraint | FR-007.8 | US-021 | -- |
| DER-001 | Derivation | FR-004.4, FR-004.5 | US-012, US-013 | -- |
| DER-002 | Derivation | FR-004, FR-006 | US-010, US-017 | -- |
| DER-003 | Derivation | FR-004, FR-006 | US-010, US-017 | -- |
| DER-004 | Derivation | FR-006.1, FR-006.2, FR-006.5 | US-017 | DEC-017 |
| DER-005 | Derivation | FR-010 | US-028 | DEC-024 |
| DER-006 | Derivation | FR-018.4, FR-018.7 | US-046 | DEC-031 |
| DER-007 | Derivation | FR-011.5 | US-031 | -- |
| DER-008 | Derivation | -- | -- | DEC-011 |
| DER-009 | Derivation | FR-018.1, FR-018.2 | US-045 | DEC-031 |
| DER-010 | Derivation | FR-007.4, FR-010.1 | US-019, US-028 | -- |
| DER-011 | Derivation | FR-009.4 | US-026 | DEC-008 |
| TRG-001 | Trigger | FR-006.3, FR-006.4, FR-006.7, FR-014.8 | US-017, US-038 | DEC-017 |
| TRG-002 | Trigger | FR-009.6 | US-027 | DEC-008 |
| TRG-003 | Trigger | FR-002.6, FR-010 | US-006, US-028 | DEC-015 |
| TRG-004 | Trigger | FR-010.5, FR-010.8 | US-029 | DEC-016 |
| TRG-005 | Trigger | FR-010.8 | US-029 | -- |
| TRG-006 | Trigger | FR-004.3, FR-018.7 | US-013, US-047 | DEC-031 |
| TRG-007 | Trigger | FR-007.10, FR-006 | US-017, US-018 | -- |
| TRG-008 | Trigger | FR-002.4, FR-004.5, FR-005.2 | US-006, US-012, US-014 | -- |
| TRG-009 | Trigger | FR-017.3, FR-017.4, FR-017.7 | US-044 | DEC-030 |
| TRG-010 | Trigger | FR-011 | US-030 | -- |
| TRG-011 | Trigger | FR-004.6 | US-012 | -- |
| TRG-012 | Trigger | FR-014.6 | US-039 | DEC-027 |
| TRG-013 | Trigger | FR-013.5 | US-036 | DEC-010 |
| TRG-014 | Trigger | FR-013.7 | US-037 | DEC-010 |
| TRG-015 | Trigger | FR-007.11 | US-019 | -- |
| TRG-016 | Trigger | FR-015.1, FR-015.2, FR-015.3 | US-040, US-041 | DEC-028 |
| TRG-017 | Trigger | FR-018.3 | US-046 | DEC-031 |

---

## 7. Сводная статистика

| Категория | Количество |
|-----------|------------|
| Constraints (CON) | 20 |
| Derivations (DER) | 11 |
| Triggers (TRG) | 17 |
| Edge Cases (EC) | 26 |
| Строк в Traceability Matrix | 47 |
| **Итого бизнес-правил** | **48** |

### Распределение по доменам

| Домен | CON | DER | TRG | EC |
|-------|-----|-----|-----|-----|
| Safety (кризис, SOS) | 3 | 1 | 2 | 5 |
| Тарифы и подписки | 6 | 2 | 3 | 6 |
| ФЗ-152 / Compliance | 5 | -- | -- | -- |
| B2B | 3 | 1 | 1 | 4 |
| Маркетплейс | 2 | 1 | 2 | 4 |
| Дневник / Аналитика | -- | 4 | 2 | -- |
| Геймификация | -- | 2 | 1 | 3 |
| Реферальная программа | 1 | -- | 1 | -- |
| Система (LLM, бюджет) | -- | -- | 2 | 2 |
| Wearables | -- | -- | 1 | 2 |

---

## 8. Приложения

### 8.1 Связанные документы

| Документ | Путь | Описание |
|----------|------|----------|
| PRD | `docs/discovery/prd.md` | Функциональные и нефункциональные требования |
| Requirements Specification | `docs/discovery/requirements-specification.md` | Формализованные требования (BR, SR, FR, NFR, TR) |
| Decision Log | `docs/discovery/decision-log.md` | 31 решение проекта |
| User Stories | `docs/discovery/user-stories.md` | 47 User Stories с AC |
| Unit Economics | `docs/discovery/unit-economics.md` | Финансовая модель, LTV, CAC, BEP |
| Business Processes | `docs/discovery/business-processes.md` | BPMN-диаграммы процессов |

### 8.2 Глоссарий

| Термин | Определение |
|--------|------------|
| **Constraint** | Неизменяемое ограничение, которое система обязана соблюдать |
| **Derivation** | Формула или алгоритм вычисления, определяющий как получать данные |
| **Trigger** | Событие, которое автоматически запускает одно или несколько действий |
| **Edge Case** | Граничный случай, требующий специальной обработки |
| **Graceful Degradation** | Режим работы системы при ограниченных ресурсах |
| **Guilt-Free** | Подход без наказания за пропуск (в контексте геймификации) |
| **False Positive** | Ложное срабатывание (детектор сработал, но кризиса нет) |
| **False Negative** | Пропуск кризиса (детектор не сработал, но кризис был) |
| **EMA** | Exponential Moving Average — экспоненциально взвешенное скользящее среднее |
| **PHQ-9** | Patient Health Questionnaire — стандартизированный опросник депрессии |
| **GAD-7** | Generalized Anxiety Disorder scale — опросник тревожности |
| **HRV** | Heart Rate Variability — вариабельность сердечного ритма |

### 8.3 История изменений

| Версия | Дата | Автор | Изменения |
|--------|------|-------|-----------|
| 1.0 | 2026-02-04 | Business-Analyst Agent | Первоначальная версия: 20 CON, 11 DER, 17 TRG, 26 EC, traceability matrix |

---

*Документ создан: Business-Analyst Agent | Дата: 2026-02-04*
