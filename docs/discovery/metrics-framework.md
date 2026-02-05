---
title: "Metrics Framework — Emotional Balance"
created_by: "Analytics Agent"
created_at: "2026-02-04"
version: "1.0"
status: "complete"
related_to:
  - "docs/discovery/tracking-plan.md"
  - "docs/discovery/prd.md"
  - "docs/discovery/unit-economics.md"
  - "docs/discovery/vision.md"
---

# Metrics Framework: Emotional Balance

## 1. Введение и цель фреймворка

### 1.1 Назначение

Metrics Framework формализует систему измерения успеха платформы Emotional Balance на всех уровнях: от стратегических бизнес-целей до операционных диагностических метрик. Документ дополняет Tracking Plan v1.1 (110+ событий, 5 dashboards), устанавливая иерархию метрик, методологию A/B-тестирования, когортный анализ и требования к качеству данных.

### 1.2 Принципы

| Принцип | Описание |
|---------|----------|
| **Иерархичность** | Каждая метрика связана с North Star через цепочку Input -> Output |
| **Actionability** | Метрики привязаны к конкретным рычагам воздействия |
| **Counter-balance** | Рост одной метрики не должен ухудшать другие (counter-metrics) |
| **Этичность** | Клиническая эффективность (PHQ-9/GAD-7) приоритетнее бизнес-метрик |
| **Data Quality** | Метрики валидны только при соблюдении SLA по качеству данных |

### 1.3 Область применения

Фреймворк покрывает все продуктовые фазы: Acquisition, Activation, Retention, Revenue, Referral, а также специфичные для mental health метрики клинической эффективности и безопасности.

---

## 2. Иерархия метрик

### 2.1 North Star Metric

**Определение:** Количество пользователей, регулярно (3+ раз/неделю) использующих платформу и отмечающих улучшение эмоционального состояния.

**Формула:**

```
NSM = COUNT(users WHERE
    sessions_per_week >= 3
    AND (
        mood_trend_4w > 0
        OR phq9_delta_8w < -20%
        OR gad7_delta_8w < -20%
        OR diary_emotion_trend_4w = "improving"
    )
)
```

**Компоненты North Star:**

| Компонент | Метрика | Описание | Вес |
|-----------|---------|----------|-----|
| **Регулярность** | sessions_per_week >= 3 | Пользователь заходит 3+ раз в неделю | Обязательный |
| **Mood improvement** | mood_trend_4w > 0 | Положительный тренд настроения за 4 недели | Один из |
| **PHQ-9 improvement** | phq9_delta_8w < -20% | Снижение PHQ-9 на 20%+ за 8 недель | Один из |
| **GAD-7 improvement** | gad7_delta_8w < -20% | Снижение GAD-7 на 20%+ за 8 недель | Один из |
| **Diary trend** | diary_emotion_trend = improving | Тренд эмоций в дневнике улучшается | Один из |

**Measurement:**

- Рассчитывается еженедельно по скользящему окну 4 недели
- Источники данных: `chat_session_started`, `diary_entry_created`, `exercise_completed`, `meditation_completed`, опросники PHQ-9/GAD-7
- Target: 15% от MAU к 12 месяцу (7 500 пользователей при 50K MAU)

### 2.2 Level 1: Primary Metrics (Input -> Output -> North Star)

Первичные метрики напрямую влияют на North Star.

```
North Star = f(Engagement, Health Outcomes)

Engagement = f(Retention, Feature Adoption, Session Frequency)
Health Outcomes = f(PHQ-9 Improvement, GAD-7 Improvement, Mood Trend)
```

| Метрика | Тип | Target (12 мес) | Связь с NSM |
|---------|-----|-----------------|-------------|
| MAU | Output | 50 000 | Размер пула потенциальных NSM-пользователей |
| DAU/MAU (Stickiness) | Output | > 30% | Регулярность использования |
| Sessions/week per user | Input | > 3 | Прямой компонент NSM |
| PHQ-9 improvement (8w) | Output | > 20% снижение | Прямой компонент NSM |
| Retention D30 | Output | > 25% | Возможность достичь клинического эффекта |
| Conversion Free->Paid | Output | > 5% | Монетизация для устойчивости |
| MRR | Output | 5M руб | Финансовая устойчивость платформы |

### 2.3 Level 2: Secondary Metrics

Вторичные метрики влияют на первичные и дают детализацию.

| Метрика | Влияет на | Target | Alert |
|---------|-----------|--------|-------|
| Onboarding completion rate | Activation, Retention | > 70% | < 50% |
| Chat session duration (avg) | Engagement | 8-15 мин | < 3 мин или > 30 мин |
| Exercise completion rate | Health Outcomes | > 60% | < 30% |
| Feature adoption rate (7d) | Engagement | > 40% (2+ фичи) | < 20% |
| CSAT | Retention | > 4.2/5 | < 3.5/5 |
| NPS | Retention, Referral | > 40 | < 20 |
| ARPU (платящие) | MRR | 1 500 руб | < 1 000 руб |
| Churn rate (monthly) | Retention, MRR | < 8% | > 12% |
| Trial-to-Paid conversion | Revenue | > 30% | < 15% |
| Crisis detection recall | Safety | > 95% | < 90% |

### 2.4 Level 3: Diagnostic Metrics

Диагностические метрики используются для анализа причин изменений в Level 1-2.

| Метрика | Диагностирует | Источник |
|---------|---------------|----------|
| Messages per chat session | Глубину вовлечённости в чат | `chat_message_sent` |
| CBT technique acceptance rate | Эффективность КПТ-рекомендаций | `chat_cbt_technique_used` |
| Diary entries per week | Привычку ведения дневника | `diary_entry_created` |
| Diary insight helpfulness | Качество ИИ-инсайтов | `diary_insight_helpful` |
| Push notification open rate | Эффективность реактивации | `diary_reminder_opened` |
| Exercise abandonment rate | Качество упражнений | `exercise_abandoned` |
| SOS protocol completion rate | Эффективность кризисных протоколов | `sos_protocol_completed` |
| Voice session STT error rate | Качество голосового канала | `voice_error` |
| API response time (p95) | Техническое качество | `chat_response_received` |
| LLM cost per session | Оптимизация расходов | `api_call_made` |
| Wearable sync frequency | Глубину интеграции с устройствами | `wearable_sync_completed` |
| Referral link share rate | Виральность продукта | `referral_link_shared` |
| Course completion rate | Качество мини-курсов | `course_completed` |
| Tree growth engagement | Эффективность геймификации | `tree_growth_triggered` |

### 2.5 Дерево метрик (текстовая визуализация)

```
                            NORTH STAR METRIC
                   Users 3+/week + Improvement
                    Target: 15% от MAU (7 500)
                          /              \
                         /                \
              ENGAGEMENT                HEALTH OUTCOMES
              /    |     \                /       |        \
             /     |      \              /        |         \
      Retention  Sessions  Feature    PHQ-9     GAD-7     Mood
      D30>25%    /wk >3    Adopt     -20%      -20%      Trend+
        |          |        >40%       |          |         |
        |          |         |         |          |         |
   +---------+  +------+  +-----+  +------+  +------+  +--------+
   |D1 >50%  |  |Chat  |  |Chat |  |PHQ-9 |  |GAD-7 |  |Diary   |
   |D7 >40%  |  |Diary |  |Diary|  |Survey|  |Survey|  |Entries |
   |D14 >30% |  |Exer. |  |Exer.|  |8-week|  |8-week|  |Emotion |
   |D90 >15% |  |Medit.|  |SOS  |  |Cycle |  |Cycle |  |Trend   |
   +---------+  +------+  +-----+  +------+  +------+  +--------+
        |          |         |
   +---------+  +------+  +-----+
   |Churn <8%|  |Msgs/ |  |1st  |
   |React.   |  |Sess  |  |Use  |
   |Rate     |  |Dur.  |  |Rate |
   +---------+  +------+  +-----+

                    REVENUE                    REFERRAL
                   /      \                    /       \
                  /        \                  /         \
            Conversion    ARPU          Referral     Viral
            >5%          1500r          Rate         k-factor
              |            |              |            |
         +--------+   +--------+    +---------+  +---------+
         |Trial   |   |Std 990 |    |Link     |  |Signup   |
         |>30%    |   |Prm 2990|    |Shares   |  |per Link |
         |Paywall |   |B2B 1500|    |per User |  |         |
         +--------+   +--------+    +---------+  +---------+
```

---

## 3. HEART Framework (адаптация для Mental Health)

### 3.1 Happiness (Удовлетворённость)

| Метрика | Определение | Формула | Target | Alert | Data Source |
|---------|-------------|---------|--------|-------|-------------|
| **CSAT** | Средняя оценка сессий чата | `AVG(chat_session_rated.rating)` | > 4.2/5 | < 3.5/5 | `chat_session_rated` |
| **NPS** | Net Promoter Score (квартальный опрос) | `%Promoters - %Detractors` | > 40 | < 20 | Опрос NPS (in-app) |
| **PHQ-9 improvement** | Снижение депрессии за 8 недель | `(PHQ9_baseline - PHQ9_current) / PHQ9_baseline * 100%` | > 20% | < 10% | Опросник PHQ-9 |
| **GAD-7 improvement** | Снижение тревожности за 8 недель | `(GAD7_baseline - GAD7_current) / GAD7_baseline * 100%` | > 20% | < 10% | Опросник GAD-7 |
| **Mood score trend** | Тренд настроения в дневнике за 4 нед. | `Linear regression slope(diary_entry.emotion_intensity, 28d)` | Положительный | Отрицательный 2+ нед. | `diary_entry_created` |
| **Exercise usefulness** | Средняя оценка полезности упражнений | `AVG(exercise_rated.usefulness)` | > 3.5/5 | < 2.5/5 | `exercise_rated` |

### 3.2 Engagement (Вовлечённость)

| Метрика | Определение | Формула | Target | Alert | Data Source |
|---------|-------------|---------|--------|-------|-------------|
| **Sessions/week** | Среднее кол-во сессий на пользователя в неделю | `COUNT(DISTINCT session_id) per user per 7d` | > 3 | < 1.5 | `chat_session_started`, `exercise_started`, `meditation_started` |
| **Session duration** | Средняя длительность сессии чата | `AVG(chat_session_ended.duration_sec) / 60` | 8-15 мин | < 3 мин | `chat_session_ended` |
| **Feature adoption rate** | % пользователей, использующих 2+ фичи за 7 дней | `COUNT(users with 2+ feature_types in 7d) / WAU * 100%` | > 40% | < 20% | `chat_session_started`, `diary_entry_created`, `exercise_started`, `meditation_started` |
| **Messages per session** | Среднее кол-во сообщений за чат-сессию | `AVG(chat_session_ended.message_count)` | 8-20 | < 3 | `chat_session_ended` |
| **DAU/MAU (Stickiness)** | Доля ежедневных из месячных | `DAU / MAU * 100%` | > 30% | < 15% | `app_opened` |
| **Diary streak** | Средняя длительность серии дневника | `AVG(streak_updated.current_days WHERE streak_type='diary')` | > 7 дней | < 3 дня | `streak_updated` |

### 3.3 Adoption (Принятие)

| Метрика | Определение | Формула | Target | Alert | Data Source |
|---------|-------------|---------|--------|-------|-------------|
| **Onboarding completion** | % завершивших онбординг-опросник | `COUNT(onboarding_completed) / COUNT(onboarding_started) * 100%` | > 70% | < 50% | `onboarding_completed`, `onboarding_started` |
| **Chat first-use rate** | % отправивших первое сообщение в чат (D0) | `COUNT(users with chat_message_sent on D0) / COUNT(user_registered on D0) * 100%` | > 80% | < 60% | `chat_message_sent`, `user_registered` |
| **Diary first-use rate** | % создавших первую запись в дневнике (D0-D3) | `COUNT(users with diary_entry_created in D0-D3) / COUNT(user_registered) * 100%` | > 40% | < 20% | `diary_entry_created` |
| **Exercise first-use rate** | % начавших первое упражнение (D0-D7) | `COUNT(users with exercise_started in D0-D7) / COUNT(user_registered) * 100%` | > 35% | < 15% | `exercise_started` |
| **Trial activation rate** | % активировавших trial | `COUNT(subscription_trial_started) / COUNT(plan_viewed) * 100%` | > 20% | < 10% | `subscription_trial_started`, `plan_viewed` |
| **SOS first-use rate** | % нажавших SOS-кнопку (D0-D14) | `COUNT(users with sos_button_pressed in D0-D14) / COUNT(user_registered) * 100%` | Информационная | Не применимо | `sos_button_pressed` |

### 3.4 Retention (Удержание)

| Метрика | Определение | Формула | Target | Alert | Data Source |
|---------|-------------|---------|--------|-------|-------------|
| **D1 Retention** | Возврат на следующий день | `COUNT(users active on D1) / COUNT(user_registered on D0) * 100%` | > 50% | < 35% | `app_opened` |
| **D7 Retention** | Возврат через неделю | `COUNT(users active on D7) / COUNT(user_registered on D0) * 100%` | > 40% | < 25% | `app_opened` |
| **D14 Retention** | Возврат через 2 недели | `COUNT(users active on D14) / COUNT(user_registered on D0) * 100%` | > 30% | < 18% | `app_opened` |
| **D30 Retention** | Возврат через месяц | `COUNT(users active on D30) / COUNT(user_registered on D0) * 100%` | > 25% | < 15% | `app_opened` |
| **D90 Retention** | Возврат через 3 месяца | `COUNT(users active on D90) / COUNT(user_registered on D0) * 100%` | > 15% | < 8% | `app_opened` |
| **Churn rate (monthly)** | Месячный отток платящих | `COUNT(subscription_cancelled in month) / COUNT(active_paid at month_start) * 100%` | < 8% | > 12% | `subscription_cancelled` |
| **Reactivation rate** | Возврат ушедших пользователей (30+ дней неактивности) | `COUNT(reactivated) / COUNT(churned_30d_ago) * 100%` | > 10% | < 5% | `app_opened` (после паузы 30+ дней) |

### 3.5 Task Success (Успешность задач)

| Метрика | Определение | Формула | Target | Alert | Data Source |
|---------|-------------|---------|--------|-------|-------------|
| **Crisis detection accuracy (recall)** | % корректно распознанных кризисов | `TP / (TP + FN) * 100%` | > 95% | < 90% | `crisis_detected` + ручная разметка |
| **Crisis detection precision** | % истинных кризисов среди определённых | `TP / (TP + FP) * 100%` | > 80% | < 70% | `crisis_detected` + ручная разметка |
| **Crisis response time** | Время от детекции до эскалации | `AVG(crisis_escalated.timestamp - crisis_detected.timestamp)` | < 60 сек | > 120 сек | `crisis_detected`, `crisis_escalated` |
| **Exercise completion rate** | % завершённых упражнений | `COUNT(exercise_completed) / COUNT(exercise_started) * 100%` | > 60% | < 35% | `exercise_completed`, `exercise_started` |
| **SOS protocol effectiveness** | Улучшение mood после SOS | `AVG(sos_protocol_completed.mood_after - sos_protocol_completed.mood_before)` | > +2 (из 10) | < +1 | `sos_protocol_completed` |
| **SOS completion rate** | % завершённых SOS-протоколов | `COUNT(sos_protocol_completed) / COUNT(sos_protocol_started) * 100%` | > 70% | < 45% | `sos_protocol_completed`, `sos_protocol_started` |
| **Meditation completion rate** | % завершённых медитаций | `COUNT(meditation_completed) / COUNT(meditation_started) * 100%` | > 65% | < 40% | `meditation_completed`, `meditation_started` |

---

## 4. AARRR Funnel

### 4.1 Acquisition (Привлечение)

**Воронка:** Install -> Registration -> First Session

| Этап | Событие | Target (мес 12) | Alert |
|------|---------|-----------------|-------|
| Install (WebApp open) | `app_opened` | 100 000/мес | < 50 000/мес |
| Registration | `user_registered` | 60 000/мес | < 30 000/мес |
| Disclaimer accepted | `disclaimer_accepted` | 57 000/мес | < 27 000/мес |
| First chat session | `chat_session_started` (first) | 48 000/мес | < 24 000/мес |

**Targets по каналам:**

| Канал | Доля трафика | CAC | Conversion Install->Reg | Качество (D7 ret.) |
|-------|-------------|-----|------------------------|-------------------|
| Organic (Telegram-каналы) | 30% | 50 руб | 70% | 45% |
| Content marketing | 25% | 100 руб | 65% | 42% |
| Paid (Telegram Ads, VK) | 20% | 300 руб | 55% | 35% |
| Referral | 15% | 150 руб | 75% | 50% |
| PR / партнёрства | 10% | 80 руб | 60% | 40% |
| **Blended** | **100%** | **~150 руб** | **~65%** | **~42%** |

### 4.2 Activation (Активация)

**Воронка:** Onboarding -> First Chat -> Aha-Moment

| Этап | Событие | Target | Alert |
|------|---------|--------|-------|
| Onboarding started | `onboarding_started` | 95% от registered | < 85% |
| Onboarding completed | `onboarding_completed` | 70% от started | < 50% |
| First chat message | `chat_message_sent` (first) | 80% от onboarded | < 60% |
| 3rd chat message (Aha) | `chat_message_sent` (count=3) | 60% от first_msg | < 40% |
| First exercise | `exercise_started` (first, D0-D7) | 35% от registered | < 15% |

**Определение Aha-Момента:**

Aha-момент наступает, когда пользователь отправляет 3-е сообщение в чат и получает персонализированную рекомендацию КПТ-техники. На этом этапе пользователь осознаёт ценность платформы: ИИ понимает его состояние и предлагает конкретное действие для улучшения.

Валидация Aha-момента:
- Пользователи, достигшие 3-го сообщения, имеют D7 retention на 2.5x выше
- Корреляция с переходом в trial: +40% к trial activation
- Источник данных: `chat_message_sent` (session_message_count >= 3) + `chat_cbt_technique_used`

### 4.3 Retention (Удержание)

**Кривая удержания (targets):**

```
100% |*
     | *
 80% |  *
     |   *
 60% |    *
     |     *
 50% |------*---- D1: 50%
     |       *
 40% |--------*-- D7: 40%
     |          *
 30% |----------*- D14: 30%
     |            *
 25% |------------*  D30: 25%
     |              *
 20% |               *
     |                *
 15% |----------------*  D90: 15%
     |
  0% +--+--+--+--+--+--+--+--+--+--
     D0 D1 D3 D7 D14 D21 D30 D60 D90
```

| Период | Target | Alert (красный) | Действия при alert |
|--------|--------|-----------------|-------------------|
| D1 | > 50% | < 35% | Проверить onboarding, push D1, качество первого ответа ИИ |
| D7 | > 40% | < 25% | Проверить Aha-момент, diary reminders, упражнения |
| D14 | > 30% | < 18% | Проверить engagement loop, feature adoption |
| D30 | > 25% | < 15% | Проверить value delivery, paywall timing |
| D90 | > 15% | < 8% | Проверить clinical outcomes, долгосрочную мотивацию |

### 4.4 Revenue (Монетизация)

**Воронка монетизации:**

| Этап | Конверсия | Target (мес 12) | Alert |
|------|-----------|-----------------|-------|
| MAU | Base | 50 000 | < 30 000 |
| Plan viewed | 30% MAU | 15 000 | < 9 000 |
| Trial started | 20% от viewed | 3 000 | < 1 500 |
| Trial -> Paid | 30% от trial | 900/мес | < 450/мес |
| Direct Free -> Paid | 2% MAU | 1 000/мес | < 500/мес |
| **Total Paid (cumulative)** | **5%+ MAU** | **4 000** | **< 2 000** |

**Переходы между планами:**

| Переход | Target | Источник |
|---------|--------|----------|
| Free -> Standard | 4% MAU | `subscription_activated` (plan=standard) |
| Free -> Premium | 1% MAU | `subscription_activated` (plan=premium) |
| Standard -> Premium | 10% Standard/год | `subscription_upgraded` |
| Premium -> Standard (downgrade) | < 5%/год | `subscription_downgraded` |

**Revenue-метрики:**

| Метрика | Формула | Target (мес 12) | Alert |
|---------|---------|-----------------|-------|
| MRR | `SUM(active_subscriptions * price)` | 5M руб | < 3M руб |
| ARR | `MRR * 12` | 60M руб | < 36M руб |
| ARPU (платящие) | `MRR / COUNT(paying_users)` | 1 500 руб | < 1 000 руб |
| ARPU (все) | `MRR / MAU` | 100 руб | < 60 руб |
| Net Revenue Retention | `MRR_end / MRR_start * 100% (same cohort)` | > 100% | < 90% |
| Expansion MRR | Апгрейды + доп. покупки | 10% от MRR | < 5% |

### 4.5 Referral (Виральность)

| Метрика | Формула | Target | Alert |
|---------|---------|--------|-------|
| Referral rate | `COUNT(users who shared) / MAU * 100%` | > 15% | < 5% |
| Viral coefficient (k-factor) | `invites_per_user * conversion_per_invite` | > 0.3 | < 0.1 |
| Referral signup rate | `COUNT(referral_signup_completed) / COUNT(referral_link_shared) * 100%` | > 20% | < 10% |
| Referral CAC | `referral_bonus_cost / COUNT(referral_signup_completed)` | < 150 руб | > 300 руб |
| Time to first share | `MEDIAN(first referral_link_shared.timestamp - user_registered.timestamp)` | < 14 дней | > 30 дней |

**Текстовая воронка AARRR (полный путь):**

```
ACQUISITION                          ACTIVATION                        RETENTION
Install -> Registration -> Onboard -> 1st Chat -> Aha-moment       D1  D7  D30  D90
100K       60K (60%)       42K (70%)  34K (80%)  20K (60%)        50% 40% 25%  15%

                        REVENUE                              REFERRAL
            Plan View -> Trial -> Paid -> Renew         Share -> Signup -> Active
            15K (30%)    3K(20%)  900(30%) 828(92%)     7.5K(15%) 1.5K(20%) 750(50%)
```

---

## 5. A/B Testing Strategy

### 5.1 Hypothesis Template

Все гипотезы формулируются по шаблону:

```
Hypothesis: If we [change],
            then [metric] will [direction] by [amount],
            because [rationale].

Example:    If we show the paywall after the 3rd session (instead of 1st),
            then Trial activation rate will increase by 15%,
            because users will better understand the value before being asked to pay.
```

### 5.2 Sample Size Calculator

**Формула минимального размера выборки (на вариант):**

```
n = (Z_alpha/2 + Z_beta)^2 * 2 * p * (1 - p) / MDE^2

Где:
  Z_alpha/2 = 1.96 (для alpha = 0.05, двусторонний тест)
  Z_beta    = 0.84 (для power = 0.80)
  p         = baseline conversion rate
  MDE       = Minimum Detectable Effect (абсолютное изменение)
```

**Таблица размеров выборки для разных MDE и baseline:**

| Baseline Rate | MDE = 1% | MDE = 2% | MDE = 5% | MDE = 10% |
|---------------|----------|----------|----------|-----------|
| 5% (conversion) | 9 510 | 2 378 | 381 | 96 |
| 10% (trial) | 17 294 | 4 324 | 692 | 174 |
| 25% (D30 retention) | 35 956 | 8 989 | 1 439 | 360 |
| 40% (D7 retention) | 46 080 | 11 520 | 1 844 | 462 |
| 50% (D1 retention) | 48 020 | 12 005 | 1 921 | 481 |
| 70% (onboarding) | 40 322 | 10 081 | 1 613 | 404 |

### 5.3 Statistical Significance

| Параметр | Значение | Обоснование |
|----------|----------|-------------|
| Significance level (alpha) | 0.05 (p < 0.05) | Стандарт для продуктовых тестов |
| Statistical power (1-beta) | 0.80 (80%) | Баланс между чувствительностью и размером |
| Test type | Двусторонний | Результат может быть как лучше, так и хуже |
| Correction | Bonferroni (при 3+ вариантах) | Контроль family-wise error rate |
| Minimum test duration | 7 дней | Учёт day-of-week эффектов |
| Maximum test duration | 28 дней | Ограничение novelty/fatigue эффектов |

### 5.4 MDE (Minimum Detectable Effect) по метрикам

| Метрика | Baseline | MDE | Обоснование |
|---------|----------|-----|-------------|
| Onboarding completion | 70% | 5% | Высокий baseline, нужен значимый эффект |
| Trial activation | 20% | 3% | Стратегическая метрика, малое изменение ценно |
| Free->Paid conversion | 5% | 1% | Прямое влияние на revenue |
| D7 Retention | 40% | 3% | Ключевая retention-метрика |
| D30 Retention | 25% | 3% | Долгосрочное удержание |
| CSAT | 4.2/5 | 0.2 | Субъективная метрика, малое изменение ощутимо |
| Session duration | 10 мин | 2 мин | Engagement proxy |
| Exercise completion | 60% | 5% | Связь с health outcomes |
| SOS completion | 70% | 5% | Критическая для безопасности |

### 5.5 Rollout Strategy

```
Canary (1%)    ->    Limited (10%)    ->    Broad (50%)    ->    Full (100%)
  1-2 дня             3-5 дней               7-14 дней           Постоянно

  Мониторинг:         Мониторинг:            Мониторинг:         Мониторинг:
  - Errors             - Primary metric      - All metrics       - Long-term
  - Crashes            - Counter-metrics     - Cohort splits       effects
  - Guardrails         - Segments            - Revenue impact    - Seasonal

  Критерий             Критерий              Критерий            Критерий
  перехода:            перехода:             перехода:           завершения:
  No errors            p < 0.05              p < 0.01            Стабильный
  No guardrail         MDE достигнут         No counter-metric     результат
  violations           No regressions          degradation         4+ недели
```

### 5.6 Feature Flag Implementation

```yaml
feature_flag:
  name: "experiment_paywall_timing_v2"
  description: "Show paywall after 3rd session instead of 1st"
  status: "active"  # active | paused | completed | killed
  allocation:
    control: 50%   # Текущее поведение
    variant_a: 50%  # Новое поведение
  targeting:
    new_users_only: true
    exclude_b2b: true
    platforms: ["telegram_webapp"]
  guardrails:
    - metric: "crisis_detection_recall"
      threshold: ">= 95%"
      action: "kill"
    - metric: "csat"
      threshold: ">= 3.8"
      action: "alert"
  start_date: "2026-03-01"
  end_date: "2026-03-28"
```

### 5.7 Guardrail Metrics

Метрики, которые НЕ должны ухудшаться ни в одном эксперименте:

| Guardrail | Порог | Action при нарушении |
|-----------|-------|---------------------|
| Crisis detection recall | >= 95% | Kill эксперимент немедленно |
| Crisis response time | < 120 сек | Kill эксперимент немедленно |
| App crash rate | < 0.5% | Kill эксперимент немедленно |
| CSAT | >= 3.5/5 | Alert + review |
| D7 Retention | >= 30% | Alert + review |
| Error rate (5xx) | < 1% | Kill эксперимент немедленно |

### 5.8 Примеры A/B-тестов для Emotional Balance

#### AB-001: Paywall Timing

```yaml
Hypothesis: If we show the paywall after the 3rd session (instead of 1st),
            then Trial activation rate will increase by 15%,
            because users will better understand the value.

Variants:
  Control: Paywall после 1-й сессии
  Variant A: Paywall после 3-й сессии

Primary metric: Trial activation rate (baseline: 20%)
Secondary: Free->Paid conversion, D30 retention
Counter-metric: MRR (не должна упасть), CSAT
Guardrails: Crisis detection >= 95%

Sample size: 2 378/variant (MDE = 3%)
Duration: 14 дней
Targeting: Новые пользователи, non-B2B
```

#### AB-002: Onboarding Length

```yaml
Hypothesis: If we reduce onboarding from 5 steps to 3 steps,
            then Onboarding completion rate will increase by 10%,
            because shorter flow reduces friction.

Variants:
  Control: 5 шагов (полный опросник PHQ-9 + GAD-7 + preferences)
  Variant A: 3 шага (mood + top concern + preferences)

Primary metric: Onboarding completion rate (baseline: 70%)
Secondary: D7 retention, Aha-moment rate
Counter-metric: PHQ-9 accuracy (достаточно ли данных для персонализации)
Guardrails: Chat session quality (CSAT >= 3.8)

Sample size: 1 613/variant (MDE = 5%)
Duration: 14 дней
Targeting: Новые пользователи
```

#### AB-003: SOS Button Placement

```yaml
Hypothesis: If we place SOS button on main screen (instead of menu),
            then SOS protocol usage will increase by 20%,
            because accessibility reduces barrier in crisis moments.

Variants:
  Control: SOS в hamburger-меню
  Variant A: SOS floating button на главном экране

Primary metric: SOS protocol start rate per crisis user
Secondary: SOS completion rate, Crisis response time
Counter-metric: Accidental SOS presses (false trigger rate)
Guardrails: Crisis detection >= 95%, UX satisfaction >= 4.0

Sample size: 692/variant (MDE = 5%, baseline 10%)
Duration: 21 день
Targeting: Все пользователи
```

#### AB-004: Push Notification Timing

```yaml
Hypothesis: If we send diary reminders at 21:00 (instead of 20:00),
            then Diary entry rate will increase by 10%,
            because evening reflection aligns with winding-down routine.

Variants:
  Control: Push в 20:00
  Variant A: Push в 21:00
  Variant B: Push в 22:00

Primary metric: Diary entry creation rate (baseline: 35%)
Secondary: Diary entries/week, Diary streak length
Counter-metric: Push unsubscribe rate, Sleep quality feedback
Guardrails: Push opt-out < 5%, CSAT >= 4.0

Sample size: 1 439/variant (MDE = 5%, baseline 35%)
Duration: 14 дней
Targeting: Пользователи с включёнными push и >= 1 diary entry
Note: Bonferroni correction (alpha = 0.05/3 = 0.017)
```

#### AB-005: Trial Duration

```yaml
Hypothesis: If we extend trial from 7 to 14 days,
            then Trial-to-Paid conversion will increase by 5%,
            because users need more time to experience clinical improvement.

Variants:
  Control: 7-дневный trial
  Variant A: 14-дневный trial

Primary metric: Trial-to-Paid conversion (baseline: 30%)
Secondary: D30 retention, PHQ-9 improvement at trial end, ARPU
Counter-metric: Time to first payment (не должен удвоиться), MRR
Guardrails: MRR decline < 5% during test

Sample size: 1 439/variant (MDE = 5%, baseline 30%)
Duration: 28 дней (+ 14 дней observation)
Targeting: Новые пользователи, активировавшие trial
```

#### AB-006: CBT Technique Positioning

```yaml
Hypothesis: If we proactively recommend CBT exercises after mood dip detection,
            then Exercise completion rate will increase by 10%,
            because contextual recommendations feel more relevant.

Variants:
  Control: Упражнения в каталоге (pull-модель)
  Variant A: Проактивная рекомендация после детекции снижения mood (push-модель)

Primary metric: Exercise completion rate (baseline: 60%)
Secondary: Exercise usefulness rating, PHQ-9 improvement
Counter-metric: Notification fatigue (opt-out rate)
Guardrails: CSAT >= 4.0, Push opt-out < 3%

Sample size: 1 844/variant (MDE = 5%, baseline 60%)
Duration: 21 день
Targeting: Пользователи с 3+ diary entries
```

---

## 6. Cohort Analysis Framework

### 6.1 Acquisition Cohort (по времени регистрации)

**Определение:** Группировка пользователей по неделе/месяцу первой регистрации.

**Цель:** Отслеживание изменений quality привлечения со временем.

| Когорта | D1 | D7 | D14 | D30 | D60 | D90 |
|---------|----|----|-----|-----|-----|-----|
| Week 1 (Jan) | 52% | 38% | 28% | 22% | 18% | 14% |
| Week 2 (Jan) | 50% | 40% | 30% | 24% | 19% | — |
| Week 3 (Jan) | 55% | 42% | 31% | 26% | — | — |
| Week 4 (Jan) | 48% | 36% | — | — | — | — |
| ... | ... | ... | ... | ... | ... | ... |
| **Target** | **>50%** | **>40%** | **>30%** | **>25%** | **>20%** | **>15%** |

**Анализируемые паттерны:**
- Улучшение retention со временем (продуктовые изменения помогают)
- Деградация retention (выгорание каналов привлечения)
- Сезонные паттерны (осень/зима = выше retention в mental health)

### 6.2 Behavioral Cohort (по первому действию)

**Определение:** Группировка по типу первого значимого действия после регистрации.

| Первое действие | % пользователей | D7 Retention | D30 Retention | Conversion |
|----------------|----------------|-------------|---------------|------------|
| Chat (текст) | 60% | 42% | 26% | 5% |
| Chat (голос) | 10% | 50% | 32% | 8% |
| Diary entry | 15% | 48% | 30% | 7% |
| Exercise | 10% | 38% | 22% | 4% |
| SOS protocol | 3% | 55% | 35% | 10% |
| Meditation | 2% | 35% | 20% | 3% |

**Инсайты для анализа:**
- Какое первое действие коррелирует с лучшим retention
- Как направлять пользователей к оптимальному первому действию
- Связь первого действия с долгосрочными клиническими результатами

### 6.3 Revenue Cohort (по плану подписки)

**Определение:** Группировка платящих пользователей по плану подписки.

| План | ARPU | Avg Lifetime | LTV | Churn/мес | D90 Retention |
|------|------|-------------|-----|-----------|---------------|
| Free | 0 руб | n/a | 0 руб | n/a | 12% |
| Standard | 990 руб | 10 мес | 9 900 руб | 10% | 45% |
| Premium | 2 990 руб | 14 мес | 41 860 руб | 7% | 60% |
| B2B | 1 500 руб | 18 мес | 27 000 руб | 5% | 65% |

**Анализируемые паттерны:**
- Upgrade path: Free -> Standard -> Premium (% и time-to-upgrade)
- Downgrade triggers: Premium -> Standard (причины)
- Churn correlation с usage metrics
- B2B vs B2C retention сравнение

### 6.4 Retention Curves Template

```
Cohort Retention Curve (Target vs Actual)

100%|*  *
    | \  \
 80%|  \  \
    |   \  \
 60%|    \  \
    |     *  \
 50%|-----|---*---- Target D1
    |     |    \
 40%|-----|-----*-- Target D7
    |     |      \
 30%|-----|-------* Target D14
    |     |        \
 25%|-----|--------* Target D30
    |     |          \
 20%|     |           *
    |     |            \
 15%|-----|-------------* Target D90
    |     |
  0%+--+--+--+--+--+--+--
    D0 D1 D7 D14 D30 D60 D90

Legend: * = Target    Actual curves by cohort overlaid
```

### 6.5 Cohort Comparison Methodology

**Процесс сравнения когорт:**

1. **Определение когорт:** Выбрать ось сегментации (время, поведение, план)
2. **Выравнивание:** Привести когорты к одному "возрасту" (дни с регистрации)
3. **Размер когорты:** Минимум 100 пользователей на когорту
4. **Статистический тест:** Chi-squared test для сравнения retention rates
5. **Визуализация:** Наложение кривых удержания для визуального сравнения
6. **Интерпретация:** Идентификация значимых различий (p < 0.05)
7. **Actionable insights:** Связать отличия с конкретными продуктовыми изменениями

**Регулярность когортного анализа:**

| Тип когорты | Частота анализа | Ответственный |
|-------------|----------------|---------------|
| Acquisition (weekly) | Еженедельно | Growth / Product |
| Acquisition (monthly) | Ежемесячно | Executive |
| Behavioral | Ежемесячно | Product |
| Revenue | Ежемесячно | Revenue / Finance |
| Post-experiment | По завершении A/B | Product |

---

## 7. Counter-Metrics

### 7.1 Принцип Counter-Metrics

При оптимизации одной метрики всегда контролировать, что сопутствующие метрики не ухудшаются. Это критически важно для mental health платформы, где агрессивная оптимизация бизнес-метрик может нанести вред пользователям.

### 7.2 Матрица Counter-Metrics

| При росте метрики | Counter-Metrics (НЕ должны ухудшаться) | Threshold |
|-------------------|-----------------------------------------|-----------|
| **Engagement** (sessions, duration) | Crisis detection accuracy (recall) | >= 95% |
| | Session quality (CSAT per session) | >= 4.0 |
| | PHQ-9 / GAD-7 (не должны расти) | Не хуже baseline |
| **Conversion** (Free->Paid) | CSAT (удовлетворённость не жертвуется) | >= 4.0 |
| | D30 Retention (не отпугивать paywall) | >= 22% |
| | Onboarding completion rate | >= 65% |
| **Revenue** (MRR, ARPU) | PHQ-9 improvement (этика) | >= 15% |
| | User safety score | Не хуже baseline |
| | Churn rate (не доить до оттока) | <= 10% |
| | NPS (восприятие ценности) | >= 30 |
| **Retention** (D7, D30) | Session quality (не уведомлять до спама) | >= 4.0 |
| | Push opt-out rate | <= 5% |
| | Time per session (не формировать зависимость) | <= 30 мин avg |
| **Feature adoption** | Core task completion rate | Не хуже baseline |
| | Cognitive load (error rates) | Не хуже baseline |
| | Time to key action | Не хуже baseline |

### 7.3 Этические Counter-Metrics (уникальные для Mental Health)

| Метрика | Описание | Порог | Проверка |
|---------|----------|-------|----------|
| **PHQ-9 non-deterioration** | Пользователи не должны ухудшаться | < 5% пользователей с ухудшением PHQ-9 на 20%+ | Ежемесячно |
| **Crisis false negative rate** | Пропущенные кризисы | < 5% | Еженедельно |
| **Dependency indicators** | Признаки формирования зависимости от платформы | < 2% пользователей с 5+ часов/день | Ежемесячно |
| **Harmful content rate** | ИИ-ответы, потенциально вредные | 0% (zero tolerance) | Ежедневно (sampling) |
| **Specialist escalation rate** | Пользователи, которым нужен живой специалист | Адекватная escalation, не занижение | Еженедельно |

---

## 8. Dashboards

### 8.1 Executive Dashboard

**Аудитория:** CEO, инвесторы, C-level
**Цель:** Общее здоровье бизнеса и продукта

| Виджет | Метрики | Визуализация | Refresh | Alert |
|--------|---------|-------------|---------|-------|
| North Star Metric | NSM (текущий, тренд) | Big number + sparkline | Daily | NSM < 10% MAU |
| MAU / DAU / WAU | Активные пользователи | Line chart (30d) | Real-time | MAU < 30K (мес 12) |
| MRR | Monthly Recurring Revenue | Line chart + breakdown by plan | Daily | MRR < 3M (мес 12) |
| Conversion Funnel | Sign-up -> Onboard -> Chat -> Trial -> Paid | Funnel chart | Daily | Any step < 50% of target |
| Retention Curve | D1, D7, D14, D30, D60, D90 | Line chart (cohort overlay) | Weekly | D30 < 15% |
| CSAT / NPS | Удовлетворённость | Gauge + trend | Weekly | CSAT < 3.5, NPS < 20 |
| Unit Economics | LTV, CAC, LTV/CAC, Payback | KPI cards | Monthly | LTV/CAC < 3x |
| Crisis Summary | Кризисных срабатываний, время реакции | Counter + histogram | Real-time | Response > 120 сек |

**Alerting:** Email + Telegram notify для CEO при красных threshold.

### 8.2 Product Dashboard

**Аудитория:** Product Manager, Product Team
**Цель:** Детальное понимание пользовательского поведения

| Виджет | Метрики | Визуализация | Refresh | Alert |
|--------|---------|-------------|---------|-------|
| Feature Usage Heatmap | % пользователей по фичам (chat, diary, exercise, meditation, SOS, courses) | Heatmap / stacked bar | Daily | Любая фича < 10% adoption |
| Chat Metrics | Sessions/day, avg duration, messages/session, CBT acceptance rate | Multi-line chart | Daily | Duration < 3 мин |
| Diary Metrics | Entries/day, insight helpfulness, streak distribution | Bar + pie | Daily | Entries < 500/day (мес 12) |
| Exercise Metrics | Started vs completed, category breakdown, usefulness ratings | Funnel + bar | Daily | Completion < 35% |
| Onboarding Funnel | Step-by-step dropoff | Funnel chart (detailed) | Daily | Any step dropoff > 30% |
| Paywall Analysis | Views -> Trials -> Paid, by trigger | Funnel + segmentation | Daily | Trial activation < 10% |
| Aha-Moment Tracking | % reaching 3rd message, time to Aha | Histogram | Daily | Aha rate < 40% |
| A/B Test Monitor | Active experiments status, p-values, guardrails | Table + charts | Real-time | Guardrail violation |

**Alerting:** Slack + Telegram notify для Product Team.

### 8.3 Growth Dashboard

**Аудитория:** Growth Team, Marketing
**Цель:** Привлечение, конверсия, виральность

| Виджет | Метрики | Визуализация | Refresh | Alert |
|--------|---------|-------------|---------|-------|
| Acquisition by Channel | Sign-ups per channel, CAC by channel | Stacked bar + table | Daily | Blended CAC > 300 руб |
| Cohort Retention | Weekly cohorts, retention curves overlay | Heatmap + lines | Weekly | New cohort D7 < 30% |
| Funnel Conversion | Install -> Reg -> Onboard -> Activate | Funnel + trend | Daily | Any step decline > 10% WoW |
| Referral Metrics | k-factor, referral rate, referral CAC | KPI cards + trend | Weekly | k-factor < 0.1 |
| Revenue Cohorts | LTV by acquisition cohort/channel | Table + line chart | Monthly | LTV decline > 15% MoM |
| Churn Analysis | Churn rate by plan, top reasons, timing | Pie + bar + histogram | Monthly | Churn > 12% |
| Reactivation | Reactivated users, campaigns effectiveness | Bar chart | Weekly | Reactivation < 5% |
| Channel Quality | D7 retention by acquisition source | Grouped bar | Weekly | Any channel D7 < 20% |

**Alerting:** Email + Telegram для Growth Lead.

### 8.4 Safety Dashboard (Real-time)

**Аудитория:** Safety Team, дежурные операторы, Clinical Lead
**Цель:** Мониторинг кризисных ситуаций и безопасности пользователей

| Виджет | Метрики | Визуализация | Refresh | Alert |
|--------|---------|-------------|---------|-------|
| Active Crisis Events | Текущие открытые кризисные ситуации | Live counter + list | Real-time | > 5 одновременно |
| Detection Accuracy | Precision, Recall, F1-score | Gauge + trend | Daily | Recall < 90% |
| Response Time | P50, P95, P99 времени эскалации | Histogram + percentiles | Real-time | P95 > 120 сек |
| Operator Availability | Кол-во доступных дежурных операторов | Status board | Real-time | 0 доступных |
| Crisis Level Distribution | Low / Moderate / High / Critical | Pie chart + trend | Real-time | Critical > 3% |
| SOS Protocol Metrics | Usage, completion, mood improvement | Bar + before/after | Daily | Completion < 45% |
| False Negative Review | Пропущенные кризисы (ручная разметка) | Table + counter | Daily | > 0 за день |
| Audit Log | Полный лог всех кризисных событий | Scrolling table | Real-time | — (информационный) |

**Alerting:** Immediate push + SMS для дежурных при Critical events. Telegram notify для Safety Lead.

### 8.5 Technical Dashboard

**Аудитория:** DevOps, SRE, Backend Team
**Цель:** Производительность и надёжность инфраструктуры

| Виджет | Метрики | Визуализация | Refresh | Alert |
|--------|---------|-------------|---------|-------|
| System Health | Uptime, error rate (5xx), response time P95 | Status board + trend | Real-time | Uptime < 99.5% |
| LLM API Metrics | Response time, token usage, cost/session, provider status | Multi-line + KPI | Real-time | Cost > 80 руб/user/мес |
| Database Metrics | Query time P95, connections, storage used | Gauges + trend | Real-time | Query > 500ms P95 |
| STT/TTS Performance | Latency, accuracy, GPU utilization | Gauges + histogram | Real-time | Latency > 3 сек |
| Event Pipeline | Events/sec, processing lag, failed events | Counter + lag gauge | Real-time | Lag > 60 сек |
| Infrastructure Costs | Total, by service, per user | Stacked area chart | Daily | Total > budget * 1.2 |
| Telegram API | Webhook delivery rate, Bot API latency | Line + success rate | Real-time | Delivery < 99% |
| Error Tracking | Top errors by frequency, new errors | Table + bar | Real-time | New error type |

**Alerting:** PagerDuty-style через Telegram для SRE. Grafana alerts для DevOps.

---

## 9. Data Quality Requirements

### 9.1 Event Validation Rules

| Правило | Описание | Проверка | Action при нарушении |
|---------|----------|----------|---------------------|
| **Required fields** | `user_id`, `session_id`, `timestamp`, `platform` обязательны | При записи | Reject event, log error |
| **Timestamp validity** | Timestamp в пределах +/- 5 минут от серверного времени | При записи | Correct to server time, flag |
| **User existence** | `user_id` должен существовать в базе | При записи | Log warning, accept event |
| **Session continuity** | `session_id` должен быть в рамках активной сессии | При чтении | Flag orphaned events |
| **Value ranges** | Числовые поля в допустимых диапазонах (rating 1-5, duration > 0) | При записи | Clamp to range, log warning |
| **Enum validity** | Строковые поля из разрешённого набора значений | При записи | Reject event, log error |
| **Duplicate detection** | Уникальность event_id | При записи | Deduplicate, keep first |
| **Schema version** | Event schema соответствует текущей версии | При записи | Transform or reject |

### 9.2 Missing Data Handling

| Ситуация | Стратегия | Impact на метрики |
|----------|-----------|------------------|
| Missing `user_id` | Reject event | Event не учитывается ни в одной метрике |
| Missing `timestamp` | Use server timestamp | Минимальный (< 5 сек разница) |
| Missing optional fields | Accept with NULL | Метрика рассчитывается по доступным данным |
| Missing `session_id` | Generate from context | Возможны неточности в session-based метриках |
| Missing retention event | Count as churned | Может завышать churn на 1-2% |
| Incomplete onboarding | Count as abandoned | `onboarding_skipped` event |
| Missing payment events | Reconcile with YooKassa | Критично: cross-validate ежедневно |

### 9.3 Data Freshness SLA

| Тип данных | SLA (максимальная задержка) | Проверка | Escalation |
|------------|---------------------------|----------|------------|
| **Real-time events** (crisis, SOS) | < 5 секунд | Heartbeat check каждые 30 сек | Immediate -> SRE |
| **Session events** (chat, exercise) | < 30 секунд | Pipeline lag monitor | 5 мин -> SRE |
| **Aggregated metrics** (DAU, funnel) | < 15 минут | Dashboard refresh check | 30 мин -> Analytics |
| **Cohort calculations** | < 4 часа | Job completion monitor | 8 часов -> Analytics |
| **Financial metrics** (MRR, ARPU) | < 24 часа | Daily reconciliation job | 48 часов -> Finance |
| **Clinical metrics** (PHQ-9, GAD-7) | < 24 часа | Survey completion check | 48 часов -> Clinical |
| **A/B test results** | < 1 час | Experiment pipeline monitor | 4 часа -> Product |

### 9.4 Data Quality Monitoring

**Ежедневные проверки:**

```yaml
daily_data_quality_checks:
  - name: "Event volume anomaly"
    check: "Events/hour vs 7-day rolling average"
    threshold: "+/- 30%"
    alert: "Telegram -> Analytics team"

  - name: "Missing events ratio"
    check: "Events with NULL required fields / Total events"
    threshold: "> 1%"
    alert: "Telegram -> Backend team"

  - name: "Duplicate events"
    check: "Duplicate event_ids per day"
    threshold: "> 0.1%"
    alert: "Log warning"

  - name: "Event schema violations"
    check: "Events failing validation / Total events"
    threshold: "> 0.5%"
    alert: "Telegram -> Backend team"

  - name: "Metric calculation drift"
    check: "Difference between real-time and batch calculations"
    threshold: "> 5%"
    alert: "Telegram -> Analytics team"

  - name: "Payment reconciliation"
    check: "Internal payment events vs YooKassa records"
    threshold: "Any mismatch"
    alert: "Telegram -> Finance + Backend"
```

### 9.5 Data Governance

| Аспект | Требование |
|--------|-----------|
| **Retention** | Raw events: 90 дней в PostgreSQL, затем агрегаты |
| **Anonymization** | user_id = hash(telegram_id), no PII in events |
| **Access control** | Аналитики: read-only, DevOps: read-only + pipeline, Admin: full |
| **Audit trail** | Все запросы к данным логируются через AuditLogService |
| **GDPR/ФЗ-152** | Right to delete: полное удаление данных пользователя по запросу |
| **B2B privacy** | Агрегация данных при группе < 10 человек |
| **Backup** | Ежедневные бэкапы, retention 30 дней |

---

## 10. Приложения

### 10.1 Глоссарий метрик

| Термин | Определение |
|--------|-------------|
| MAU | Monthly Active Users — уникальные пользователи с хотя бы 1 сессией за 30 дней |
| DAU | Daily Active Users — уникальные пользователи с хотя бы 1 сессией за день |
| WAU | Weekly Active Users — уникальные пользователи с хотя бы 1 сессией за 7 дней |
| MRR | Monthly Recurring Revenue — ежемесячный рекуррентный доход |
| ARR | Annual Recurring Revenue — MRR * 12 |
| ARPU | Average Revenue Per User — средний доход на платящего пользователя |
| LTV | Lifetime Value — прогнозный доход с одного пользователя за всё время |
| CAC | Customer Acquisition Cost — стоимость привлечения одного пользователя |
| NPS | Net Promoter Score — индекс лояльности |
| CSAT | Customer Satisfaction Score — оценка удовлетворённости |
| PHQ-9 | Patient Health Questionnaire-9 — опросник для оценки депрессии |
| GAD-7 | Generalized Anxiety Disorder-7 — опросник для оценки тревожности |
| MDE | Minimum Detectable Effect — минимальный обнаружимый эффект в A/B-тесте |
| NSM | North Star Metric — ключевая метрика продукта |

### 10.2 Связь с Tracking Plan

Все метрики в этом фреймворке рассчитываются на основе событий из Tracking Plan v1.1 (`docs/discovery/tracking-plan.md`). Mapping метрик на события:

| Метрика | Ключевые события из Tracking Plan |
|---------|----------------------------------|
| NSM | `chat_session_started`, `diary_entry_created`, `exercise_completed`, PHQ-9/GAD-7 surveys |
| MAU/DAU/WAU | `app_opened` |
| Retention Dx | `app_opened` (по дням с `user_registered`) |
| Conversion | `plan_viewed`, `subscription_trial_started`, `subscription_activated` |
| MRR | `subscription_activated`, `subscription_renewed`, `subscription_cancelled` |
| CSAT | `chat_session_rated` |
| Crisis detection | `crisis_detected`, `crisis_escalated` |
| Feature adoption | `chat_session_started`, `diary_entry_created`, `exercise_started`, `meditation_started`, `sos_button_pressed`, `course_started` |
| Referral | `referral_link_generated`, `referral_link_shared`, `referral_signup_completed` |
| SOS effectiveness | `sos_protocol_started`, `sos_protocol_completed` |

---

*Документ создан: Analytics Agent | Дата: 2026-02-04*
