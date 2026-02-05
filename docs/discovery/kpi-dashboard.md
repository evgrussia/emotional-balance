---
title: "KPI Dashboard — Emotional Balance"
created_by: "Analytics Agent"
created_at: "2026-02-04"
version: "1.0"
status: "complete"
related_to:
  - "docs/discovery/metrics-framework.md"
  - "docs/discovery/tracking-plan.md"
  - "docs/discovery/unit-economics.md"
  - "docs/discovery/prd.md"
---

# KPI Dashboard: Emotional Balance

## 1. Обзор системы дашбордов

### 1.1 Назначение

Документ определяет полную структуру дашбордов для мониторинга ключевых показателей платформы Emotional Balance. Каждый дашборд ориентирован на конкретную аудиторию и содержит метрики с формулами расчёта, целевыми значениями (targets), порогами оповещений (alerts) и требованиями к обновлению данных.

### 1.2 North Star Metric

**Определение:** Количество пользователей, регулярно (3+ раз/неделю) использующих платформу и отмечающих улучшение эмоционального состояния.

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

**Target:** 15% от MAU к 12-му месяцу (7 500 пользователей при 50K MAU)

### 1.3 Структура дашбордов

| # | Дашборд | Аудитория | Частота обновления | Кол-во метрик |
|---|---------|-----------|-------------------|---------------|
| 1 | Executive Dashboard | CEO, инвесторы, C-level | Еженедельно | 18 |
| 2 | Product Dashboard | Product Manager, Product Team | Ежедневно | 22 |
| 3 | Growth Dashboard | Growth Team, Marketing | Еженедельно | 20 |
| 4 | Safety Dashboard | Safety Team, дежурные, Clinical Lead | Realtime | 14 |
| 5 | B2B Dashboard | Sales, Account Management | Еженедельно | 12 |
| 6 | Technical Dashboard | Engineering, DevOps, SRE | Ежедневно | 16 |

### 1.4 Цветовая система оповещений

| Цвет | Статус | Описание | Действие |
|------|--------|----------|----------|
| **Зелёный** | OK | Метрика в целевом диапазоне | Мониторинг |
| **Жёлтый** | Warning | Метрика приближается к критическому порогу | Анализ причин, план действий |
| **Красный** | Critical | Метрика ниже критического порога | Немедленное вмешательство, эскалация |

---

## 2. Executive Dashboard

**Аудитория:** CEO, инвесторы, совет директоров, C-level
**Частота просмотра:** Еженедельно
**Цель:** Общее здоровье бизнеса, финансовая устойчивость, стратегические KPI
**Канал оповещений:** Email + Telegram notify для CEO при красных threshold

### 2.1 Финансовые метрики

#### MRR (Monthly Recurring Revenue)

| Параметр | Значение |
|----------|----------|
| **Название** | Ежемесячный рекуррентный доход |
| **Формула** | `SUM(active_subscriptions.price)` |
| **Target (мес 12)** | 5 000 000 руб |
| **Alert Warning** | < 3 500 000 руб |
| **Alert Critical** | < 3 000 000 руб |
| **Data Source** | `subscription_activated`, `subscription_renewed`, `subscription_cancelled` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Line chart + breakdown по планам (Standard / Premium / B2B) |

#### ARR (Annual Recurring Revenue)

| Параметр | Значение |
|----------|----------|
| **Название** | Годовой рекуррентный доход |
| **Формула** | `MRR * 12` |
| **Target (мес 12)** | 60 000 000 руб |
| **Alert Warning** | < 42 000 000 руб |
| **Alert Critical** | < 36 000 000 руб |
| **Data Source** | Рассчитывается из MRR |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Big number + sparkline тренд |

#### MRR Growth Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Месячный темп роста MRR |
| **Формула** | `(MRR_current - MRR_previous) / MRR_previous * 100%` |
| **Target** | > 15% MoM (первые 12 мес) |
| **Alert Warning** | < 10% MoM |
| **Alert Critical** | < 5% MoM или отрицательный |
| **Data Source** | Рассчитывается из MRR |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Percentage + trendline |

#### Net Revenue Retention (NRR)

| Параметр | Значение |
|----------|----------|
| **Название** | Чистое удержание дохода |
| **Формула** | `(MRR_end_of_period_same_cohort) / MRR_start_of_period * 100%` |
| **Target** | > 100% |
| **Alert Warning** | < 95% |
| **Alert Critical** | < 90% |
| **Data Source** | `subscription_activated`, `subscription_upgraded`, `subscription_downgraded`, `subscription_cancelled` |
| **Refresh Rate** | Ежемесячно |
| **Визуализация** | Gauge + monthly trend |

#### Runway

| Параметр | Значение |
|----------|----------|
| **Название** | Запас средств в месяцах при текущем burn rate |
| **Формула** | `cash_balance / monthly_burn_rate` |
| **Target** | > 12 месяцев |
| **Alert Warning** | < 9 месяцев |
| **Alert Critical** | < 6 месяцев |
| **Data Source** | Финансовая система, банковские выписки |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Big number + прогноз исчерпания (дата) |

### 2.2 Метрики пользовательской базы

#### MAU (Monthly Active Users)

| Параметр | Значение |
|----------|----------|
| **Название** | Ежемесячно активные пользователи |
| **Формула** | `COUNT(DISTINCT user_id WHERE app_opened in last 30 days)` |
| **Target (мес 12)** | 50 000 |
| **Alert Warning** | < 35 000 |
| **Alert Critical** | < 30 000 |
| **Data Source** | `app_opened` |
| **Refresh Rate** | Real-time (rolling 30d) |
| **Визуализация** | Line chart (30d trend) |

#### WAU (Weekly Active Users)

| Параметр | Значение |
|----------|----------|
| **Название** | Еженедельно активные пользователи |
| **Формула** | `COUNT(DISTINCT user_id WHERE app_opened in last 7 days)` |
| **Target (мес 12)** | 35 000 |
| **Alert Warning** | < 24 000 |
| **Alert Critical** | < 20 000 |
| **Data Source** | `app_opened` |
| **Refresh Rate** | Real-time (rolling 7d) |
| **Визуализация** | Line chart (weekly trend) |

#### DAU (Daily Active Users)

| Параметр | Значение |
|----------|----------|
| **Название** | Ежедневно активные пользователи |
| **Формула** | `COUNT(DISTINCT user_id WHERE app_opened today)` |
| **Target (мес 12)** | 15 000 |
| **Alert Warning** | < 10 000 |
| **Alert Critical** | < 8 000 |
| **Data Source** | `app_opened` |
| **Refresh Rate** | Real-time |
| **Визуализация** | Line chart (daily) + day-of-week overlay |

#### DAU/MAU Ratio (Stickiness)

| Параметр | Значение |
|----------|----------|
| **Название** | Коэффициент вовлечённости |
| **Формула** | `DAU / MAU * 100%` |
| **Target** | > 30% |
| **Alert Warning** | < 20% |
| **Alert Critical** | < 15% |
| **Data Source** | Рассчитывается из DAU и MAU |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Percentage gauge + trend |

### 2.3 Юнит-экономика

#### Blended CAC

| Параметр | Значение |
|----------|----------|
| **Название** | Средневзвешенная стоимость привлечения клиента |
| **Формула** | `SUM(marketing_spend_all_channels) / COUNT(user_registered in period)` |
| **Target** | < 200 руб |
| **Alert Warning** | > 300 руб |
| **Alert Critical** | > 400 руб |
| **Data Source** | Маркетинговые расходы + `user_registered` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | KPI card + trend by channel |

#### LTV (платящие пользователи)

| Параметр | Значение |
|----------|----------|
| **Название** | Пожизненная ценность платящего пользователя |
| **Формула** | `ARPU_paying * (1 / monthly_churn_rate)` |
| **Target** | > 18 750 руб |
| **Alert Warning** | < 12 000 руб |
| **Alert Critical** | < 8 000 руб |
| **Data Source** | `subscription_activated`, `subscription_cancelled`, `payment_succeeded` |
| **Refresh Rate** | Ежемесячно |
| **Визуализация** | KPI card + cohort trend |

#### LTV/CAC Ratio

| Параметр | Значение |
|----------|----------|
| **Название** | Соотношение LTV к стоимости привлечения |
| **Формула** | `LTV_paying / Blended_CAC` |
| **Target** | > 10x (все), > 125x (платящие) |
| **Alert Warning** | < 5x (все) |
| **Alert Critical** | < 3x (все) |
| **Data Source** | Рассчитывается из LTV и CAC |
| **Refresh Rate** | Ежемесячно |
| **Визуализация** | KPI card с разбивкой по когортам |

### 2.4 Отток и удержание

#### Churn Rate (monthly)

| Параметр | Значение |
|----------|----------|
| **Название** | Ежемесячный отток платящих пользователей |
| **Формула** | `COUNT(subscription_cancelled in month) / COUNT(active_paid at month_start) * 100%` |
| **Target** | < 8% |
| **Alert Warning** | > 10% |
| **Alert Critical** | > 12% |
| **Data Source** | `subscription_cancelled` |
| **Refresh Rate** | Ежемесячно |
| **Визуализация** | Line chart + breakdown по планам |

### 2.5 Конверсионная воронка

#### Registration -> Activation -> Paid

| Параметр | Значение |
|----------|----------|
| **Название** | Сквозная конверсионная воронка |
| **Формула** | Поэтапная конверсия (см. ниже) |
| **Data Source** | `user_registered`, `onboarding_completed`, `chat_session_started`, `subscription_trial_started`, `subscription_activated` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Funnel chart с % на каждом этапе |

**Этапы воронки:**

| Этап | Формула | Target | Alert Warning | Alert Critical |
|------|---------|--------|---------------|----------------|
| Install -> Registration | `user_registered / app_opened * 100%` | > 60% | < 45% | < 35% |
| Registration -> Onboarding complete | `onboarding_completed / user_registered * 100%` | > 70% | < 55% | < 50% |
| Onboarding -> First chat | `first_chat / onboarding_completed * 100%` | > 80% | < 65% | < 60% |
| First chat -> Trial | `trial_started / first_chat * 100%` | > 15% | < 10% | < 7% |
| Trial -> Paid | `subscription_activated / trial_ended * 100%` | > 30% | < 20% | < 15% |
| **Сквозная: Registration -> Paid** | `paying_users / user_registered * 100%` | > 5% | < 3% | < 2% |

### 2.6 Макет Executive Dashboard

```
+------------------------------------------------------------------+
|                    EXECUTIVE DASHBOARD                            |
|                 Emotional Balance | Неделя 48                     |
+------------------------------------------------------------------+
|                                                                  |
|  [NSM: 4 250]        [MAU: 38 500]       [MRR: 3.8M руб]       |
|  Target: 7 500       Target: 50 000       Target: 5.0M руб      |
|  Тренд: +12% WoW     Тренд: +8% WoW     Тренд: +15% MoM       |
|  Статус: ЖЁЛТЫЙ      Статус: ЖЁЛТЫЙ      Статус: ЖЁЛТЫЙ        |
|                                                                  |
+------------------+-------------------+---------------------------+
|  DAU: 11 200     |  DAU/MAU: 29%     |  ARR: 45.6M руб          |
|  WAU: 26 800     |  Target: >30%     |  MRR Growth: +15%        |
|  Статус: ЗЕЛЁНЫЙ |  Статус: ЖЁЛТЫЙ   |  Статус: ЗЕЛЁНЫЙ         |
+------------------+-------------------+---------------------------+
|                                                                  |
|  [CAC: 165 руб]  [LTV: 17 800 руб]  [LTV/CAC: 108x]            |
|  Target: <200    Target: >18 750     Target: >10x               |
|  Статус: ЗЕЛЁНЫЙ Статус: ЖЁЛТЫЙ     Статус: ЗЕЛЁНЫЙ            |
|                                                                  |
+------------------+-------------------+---------------------------+
|  Churn: 8.5%     |  NRR: 98%         |  Runway: 11 мес          |
|  Target: <8%     |  Target: >100%    |  Target: >12 мес         |
|  Статус: ЖЁЛТЫЙ  |  Статус: ЖЁЛТЫЙ   |  Статус: ЖЁЛТЫЙ         |
+------------------+-------------------+---------------------------+
|                                                                  |
|  КОНВЕРСИОННАЯ ВОРОНКА              |  КРИЗИСНАЯ СВОДКА         |
|  Reg: 60K -> Onboard: 42K          |  Активных: 0              |
|  Chat: 34K -> Trial: 5.1K          |  SOS/день: 45             |
|  Paid: 1 530                        |  Время реакции: 48 сек   |
|  Сквозная: 2.6%                     |  Recall: 96.2%           |
|                                                                  |
+------------------------------------------------------------------+
```

---

## 3. Product Dashboard

**Аудитория:** Product Manager, Product Team
**Частота просмотра:** Ежедневно
**Цель:** Детальное понимание пользовательского поведения, качество фич, клиническая эффективность
**Канал оповещений:** Slack + Telegram notify для Product Team

### 3.1 Activation Funnel (пошаговый онбординг)

#### Onboarding Completion Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Процент завершивших онбординг |
| **Формула** | `COUNT(onboarding_completed) / COUNT(onboarding_started) * 100%` |
| **Target** | > 70% |
| **Alert Warning** | < 55% |
| **Alert Critical** | < 50% |
| **Data Source** | `onboarding_started`, `onboarding_step_completed`, `onboarding_completed` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Funnel chart с dropoff на каждом шаге |

**Детализация по шагам:**

| Шаг | Описание | Target (step-to-step) | Alert Critical |
|-----|----------|----------------------|----------------|
| 1. Начало опросника | `onboarding_started` | 95% от registered | < 85% |
| 2. PHQ-9 блок | `onboarding_step_completed (step=1)` | 90% от started | < 75% |
| 3. GAD-7 блок | `onboarding_step_completed (step=2)` | 85% от step 1 | < 70% |
| 4. Предпочтения | `onboarding_step_completed (step=3)` | 90% от step 2 | < 80% |
| 5. Завершение | `onboarding_completed` | 95% от step 3 | < 85% |

#### Time to First Value Moment

| Параметр | Значение |
|----------|----------|
| **Название** | Время до первого ценностного момента (Aha-момент) |
| **Формула** | `MEDIAN(timestamp(chat_message_sent WHERE session_message_count=3) - timestamp(user_registered))` |
| **Target** | < 10 минут |
| **Alert Warning** | > 20 минут |
| **Alert Critical** | > 30 минут |
| **Data Source** | `user_registered`, `chat_message_sent` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Histogram распределения + median line |

#### Aha-Moment Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Процент пользователей, достигших Aha-момента (3-е сообщение + CBT рекомендация) |
| **Формула** | `COUNT(users with session_message_count >= 3 AND chat_cbt_technique_used on D0) / COUNT(user_registered on D0) * 100%` |
| **Target** | > 60% |
| **Alert Warning** | < 45% |
| **Alert Critical** | < 40% |
| **Data Source** | `chat_message_sent`, `chat_cbt_technique_used` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Percentage + daily trend |

### 3.2 Feature Adoption Rate

#### Общий Feature Adoption

| Параметр | Значение |
|----------|----------|
| **Название** | Процент пользователей, использующих 2+ фичи за 7 дней |
| **Формула** | `COUNT(users with 2+ distinct feature_types in 7d) / WAU * 100%` |
| **Target** | > 40% |
| **Alert Warning** | < 25% |
| **Alert Critical** | < 20% |
| **Data Source** | `chat_session_started`, `diary_entry_created`, `exercise_started`, `meditation_started`, `sos_button_pressed`, `course_started` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Heatmap / stacked bar |

**Детализация по фичам:**

| Фича | Формула | Target (7d adoption) | Alert Warning | Alert Critical | Data Source |
|------|---------|---------------------|---------------|----------------|-------------|
| AI Chat (текст) | `users_with_chat_session / WAU * 100%` | > 70% | < 55% | < 45% | `chat_session_started (mode=text)` |
| AI Chat (голос) | `users_with_voice_session / WAU * 100%` | > 15% | < 8% | < 5% | `voice_session_started` |
| Дневник эмоций | `users_with_diary_entry / WAU * 100%` | > 35% | < 20% | < 15% | `diary_entry_created` |
| КПТ-упражнения | `users_with_exercise / WAU * 100%` | > 25% | < 15% | < 10% | `exercise_started` |
| Медитации | `users_with_meditation / WAU * 100%` | > 20% | < 12% | < 8% | `meditation_started` |
| SOS-протоколы | `users_with_sos / WAU * 100%` | Информационная | — | — | `sos_button_pressed` |
| Маркетплейс | `users_with_marketplace / WAU * 100%` | > 10% | < 5% | < 3% | `marketplace_opened` |
| Мини-курсы | `users_with_course / WAU * 100%` | > 15% | < 8% | < 5% | `course_started` |

### 3.3 Session Metrics

#### Chat Session Duration (avg)

| Параметр | Значение |
|----------|----------|
| **Название** | Средняя длительность чат-сессии |
| **Формула** | `AVG(chat_session_ended.duration_sec) / 60` |
| **Target** | 8-15 мин |
| **Alert Warning** | < 5 мин или > 25 мин |
| **Alert Critical** | < 3 мин или > 30 мин |
| **Data Source** | `chat_session_ended` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Histogram + avg trendline |

#### Messages per Session

| Параметр | Значение |
|----------|----------|
| **Название** | Среднее количество сообщений за чат-сессию |
| **Формула** | `AVG(chat_session_ended.message_count)` |
| **Target** | 8-20 |
| **Alert Warning** | < 5 или > 30 |
| **Alert Critical** | < 3 |
| **Data Source** | `chat_session_ended` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Histogram + trendline |

#### Session Depth (уровень погружения)

| Параметр | Значение |
|----------|----------|
| **Название** | Процент сессий с глубоким взаимодействием (CBT-техника использована) |
| **Формула** | `COUNT(sessions with chat_cbt_technique_used) / COUNT(chat_session_ended) * 100%` |
| **Target** | > 40% |
| **Alert Warning** | < 25% |
| **Alert Critical** | < 15% |
| **Data Source** | `chat_cbt_technique_used`, `chat_session_ended` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Percentage + trend |

#### Sessions per Week per User

| Параметр | Значение |
|----------|----------|
| **Название** | Среднее количество сессий на пользователя в неделю |
| **Формула** | `COUNT(DISTINCT session_id per user per 7d)` — среднее по WAU |
| **Target** | > 3 |
| **Alert Warning** | < 2 |
| **Alert Critical** | < 1.5 |
| **Data Source** | `chat_session_started`, `exercise_started`, `meditation_started` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Distribution histogram + median |

### 3.4 Удовлетворённость

#### NPS (Net Promoter Score)

| Параметр | Значение |
|----------|----------|
| **Название** | Индекс лояльности |
| **Формула** | `%Promoters(9-10) - %Detractors(0-6)` |
| **Target** | > 40 |
| **Alert Warning** | < 30 |
| **Alert Critical** | < 20 |
| **Data Source** | Квартальный NPS-опрос (in-app) |
| **Refresh Rate** | Ежеквартально (отображается непрерывно) |
| **Визуализация** | Gauge + distribution bar (promoters/passives/detractors) |

#### CSAT (общий)

| Параметр | Значение |
|----------|----------|
| **Название** | Средняя оценка удовлетворённости |
| **Формула** | `AVG(chat_session_rated.rating)` |
| **Target** | > 4.2/5 |
| **Alert Warning** | < 3.8/5 |
| **Alert Critical** | < 3.5/5 |
| **Data Source** | `chat_session_rated` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Star rating + trend |

#### CSAT по фичам

| Фича | Формула | Target | Alert Critical | Data Source |
|------|---------|--------|----------------|-------------|
| AI Chat | `AVG(chat_session_rated.rating)` | > 4.2/5 | < 3.5/5 | `chat_session_rated` |
| Упражнения | `AVG(exercise_rated.usefulness)` | > 3.5/5 | < 2.5/5 | `exercise_rated` |
| Дневник (инсайты) | `AVG(diary_insight_helpful WHERE helpful=true) / total` | > 70% | < 50% | `diary_insight_helpful` |
| SOS-протоколы | `AVG(sos_mood_after - sos_mood_before)` | > +2 (из 10) | < +1 | `sos_protocol_completed` |
| Маркетплейс | `AVG(review_submitted.rating)` | > 4.0/5 | < 3.0/5 | `review_submitted` |

### 3.5 Клиническая эффективность

#### PHQ-9 Средний тренд

| Параметр | Значение |
|----------|----------|
| **Название** | Среднее снижение PHQ-9 за 8 недель |
| **Формула** | `AVG((PHQ9_baseline - PHQ9_current) / PHQ9_baseline * 100%)` — для пользователей с 2+ замерами |
| **Target** | > 20% снижение |
| **Alert Warning** | < 15% снижение |
| **Alert Critical** | < 10% снижение |
| **Data Source** | Опросник PHQ-9 (8-недельный цикл) |
| **Refresh Rate** | Еженедельно (rolling 8 weeks) |
| **Визуализация** | Line chart (средний балл PHQ-9 по когортам) |

#### GAD-7 Средний тренд

| Параметр | Значение |
|----------|----------|
| **Название** | Среднее снижение GAD-7 за 8 недель |
| **Формула** | `AVG((GAD7_baseline - GAD7_current) / GAD7_baseline * 100%)` — для пользователей с 2+ замерами |
| **Target** | > 20% снижение |
| **Alert Warning** | < 15% снижение |
| **Alert Critical** | < 10% снижение |
| **Data Source** | Опросник GAD-7 (8-недельный цикл) |
| **Refresh Rate** | Еженедельно (rolling 8 weeks) |
| **Визуализация** | Line chart (средний балл GAD-7 по когортам) |

#### Mood Trend (настроение в дневнике)

| Параметр | Значение |
|----------|----------|
| **Название** | Процент пользователей с положительным трендом настроения |
| **Формула** | `COUNT(users WHERE linear_regression_slope(diary_entry.emotion_intensity, 28d) > 0) / COUNT(users with 5+ diary entries in 28d) * 100%` |
| **Target** | > 60% |
| **Alert Warning** | < 45% |
| **Alert Critical** | < 35% |
| **Data Source** | `diary_entry_created` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Percentage + improving/stable/declining breakdown |

### 3.6 Макет Product Dashboard

```
+------------------------------------------------------------------+
|                    PRODUCT DASHBOARD                              |
|              Emotional Balance | 2026-02-04                       |
+------------------------------------------------------------------+
|                                                                  |
|  ACTIVATION FUNNEL                                               |
|  ================================================================|
|  Registered:    100% ████████████████████████████████  (2 100)   |
|  Onboard start: 95% ███████████████████████████████   (1 995)   |
|  Onboard done:  72% ████████████████████████          (1 512)   |
|  First chat:    85% █████████████████████████████     (1 285)   |
|  Aha-moment:    62% ██████████████████████            (797)     |
|  Trial:         18% ██████                            (143)     |
|                                                                  |
+---------------------------+--------------------------------------+
|  FEATURE ADOPTION (7d)    |  SESSION METRICS                     |
|                           |                                      |
|  AI Chat:       72% ████  |  Avg duration:    11.3 мин           |
|  Diary:         38% ██    |  Msgs/session:    12.4               |
|  Exercises:     27% █     |  Sessions/week:   3.2                |
|  Meditation:    21% █     |  Session depth:   43%                |
|  SOS:            4% .     |  CBT acceptance:  38%                |
|  Marketplace:   11% .     |                                      |
|  Mini-courses:  16% .     |  CSAT: 4.3/5  NPS: 42               |
+---------------------------+--------------------------------------+
|                                                                  |
|  КЛИНИЧЕСКАЯ ЭФФЕКТИВНОСТЬ                                      |
|  PHQ-9 тренд (8w): -22% (ЗЕЛЁНЫЙ)                              |
|  GAD-7 тренд (8w): -19% (ЖЁЛТЫЙ)                               |
|  Mood improving:    63% пользователей                            |
|  Value moment:      8 мин (median)                               |
|                                                                  |
+------------------------------------------------------------------+
```

---

## 4. Growth Dashboard

**Аудитория:** Growth Team, Marketing Lead
**Частота просмотра:** Еженедельно
**Цель:** Привлечение, конверсия, виральность, когортное удержание
**Канал оповещений:** Email + Telegram для Growth Lead

### 4.1 Channel Performance

#### CAC по каналам

| Канал | Формула CAC | Target CAC | Alert Warning | Alert Critical | Volume Target (мес 12) |
|-------|------------|-----------|---------------|----------------|----------------------|
| Organic (Telegram) | `organic_spend / organic_registrations` | < 50 руб | > 80 руб | > 100 руб | 30% трафика |
| Content marketing | `content_spend / content_registrations` | < 100 руб | > 150 руб | > 200 руб | 25% трафика |
| Paid (Telegram Ads, VK) | `paid_spend / paid_registrations` | < 300 руб | > 450 руб | > 600 руб | 20% трафика |
| Referral | `referral_bonus_cost / referral_signup_completed` | < 150 руб | > 250 руб | > 300 руб | 15% трафика |
| PR / партнёрства | `pr_spend / pr_registrations` | < 80 руб | > 120 руб | > 160 руб | 10% трафика |

**Data Source:** Маркетинговые расходы + `user_registered` (с атрибуцией `source`)
**Refresh Rate:** Еженедельно
**Визуализация:** Stacked bar (volume) + line (CAC per channel)

#### Channel Conversion Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Конверсия Install -> Registration по каналам |
| **Формула** | `COUNT(user_registered WHERE source=channel) / COUNT(app_opened WHERE source=channel) * 100%` |
| **Target (blended)** | > 65% |
| **Alert Warning** | < 50% (любой канал) |
| **Alert Critical** | < 35% (любой канал) |
| **Data Source** | `app_opened`, `user_registered` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Grouped bar chart |

#### Channel Quality (D7 Retention по каналам)

| Параметр | Значение |
|----------|----------|
| **Название** | Качество привлечённого трафика по каналам |
| **Формула** | `COUNT(users active on D7 WHERE source=channel) / COUNT(user_registered WHERE source=channel) * 100%` |
| **Target (blended)** | > 42% |
| **Alert Warning** | < 30% (любой канал) |
| **Alert Critical** | < 20% (любой канал) |
| **Data Source** | `user_registered`, `app_opened` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Grouped bar + trendline |

### 4.2 Referral & Virality

#### K-factor (Viral Coefficient)

| Параметр | Значение |
|----------|----------|
| **Название** | Вирусный коэффициент |
| **Формула** | `avg_invites_per_user * conversion_per_invite` |
| **Target** | > 0.3 |
| **Alert Warning** | < 0.15 |
| **Alert Critical** | < 0.1 |
| **Data Source** | `referral_link_shared`, `referral_signup_completed` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | KPI card + trend |

#### Referral Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Процент пользователей, поделившихся реферальной ссылкой |
| **Формула** | `COUNT(DISTINCT users with referral_link_shared) / MAU * 100%` |
| **Target** | > 15% |
| **Alert Warning** | < 8% |
| **Alert Critical** | < 5% |
| **Data Source** | `referral_link_shared` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Percentage + trend |

#### Referral Signup Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Конверсия реферальных приглашений в регистрации |
| **Формула** | `COUNT(referral_signup_completed) / COUNT(referral_link_shared) * 100%` |
| **Target** | > 20% |
| **Alert Warning** | < 12% |
| **Alert Critical** | < 10% |
| **Data Source** | `referral_link_shared`, `referral_signup_completed` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Funnel + conversion rate |

#### Time to First Share

| Параметр | Значение |
|----------|----------|
| **Название** | Медианное время от регистрации до первого шаринга |
| **Формула** | `MEDIAN(first referral_link_shared.timestamp - user_registered.timestamp)` |
| **Target** | < 14 дней |
| **Alert Warning** | > 21 день |
| **Alert Critical** | > 30 дней |
| **Data Source** | `referral_link_shared`, `user_registered` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Histogram + median line |

### 4.3 Cohort Retention Curves

#### Acquisition Cohort Retention

| Параметр | Значение |
|----------|----------|
| **Название** | Кривые удержания по еженедельным когортам регистрации |
| **Формула** | `COUNT(users active on Dx) / COUNT(user_registered in cohort) * 100%` |
| **Data Source** | `user_registered`, `app_opened` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Heatmap + overlay line chart |

**Targets и alerts по точкам:**

| Точка | Target | Alert Warning | Alert Critical | Действия при alert |
|-------|--------|---------------|----------------|-------------------|
| D1 | > 50% | < 40% | < 35% | Проверить onboarding, push D1, качество первого ответа ИИ |
| D7 | > 40% | < 30% | < 25% | Проверить Aha-момент, diary reminders, упражнения |
| D14 | > 30% | < 22% | < 18% | Проверить engagement loop, feature adoption |
| D30 | > 25% | < 18% | < 15% | Проверить value delivery, paywall timing |
| D60 | > 20% | < 13% | < 10% | Проверить долгосрочную мотивацию, геймификацию |
| D90 | > 15% | < 10% | < 8% | Проверить clinical outcomes, платные фичи |

#### Feature Retention (удержание по фичам)

| Параметр | Значение |
|----------|----------|
| **Название** | Какие фичи лучше удерживают пользователей |
| **Формула** | `D30_retention(users who used feature in D0-D7) vs D30_retention(users who did NOT use feature in D0-D7)` |
| **Data Source** | Все feature events + `app_opened` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Grouped bar chart (D30 retention by first feature used) |

**Ожидаемые значения (на основе behavioral cohort):**

| Первое действие (D0-D7) | Ожид. D7 | Ожид. D30 | Ожид. Conversion |
|--------------------------|----------|-----------|------------------|
| Chat (текст) | 42% | 26% | 5% |
| Chat (голос) | 50% | 32% | 8% |
| Diary entry | 48% | 30% | 7% |
| Exercise | 38% | 22% | 4% |
| SOS protocol | 55% | 35% | 10% |
| Meditation | 35% | 20% | 3% |

### 4.4 Funnel Drop-offs

#### Daily Funnel Drop-off Monitor

| Параметр | Значение |
|----------|----------|
| **Название** | Мониторинг точек отвала в воронке |
| **Формула** | `1 - (step_N_count / step_N-1_count)` — для каждого перехода |
| **Target** | Каждый переход < 30% drop |
| **Alert Warning** | Любой переход > 35% drop |
| **Alert Critical** | Любой переход > 40% drop или ухудшение > 10% WoW |
| **Data Source** | Все funnel events |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Funnel chart с % dropoff + WoW delta |

### 4.5 Churn Analysis

#### Churn Reasons

| Параметр | Значение |
|----------|----------|
| **Название** | Распределение причин оттока |
| **Формула** | `COUNT(subscription_cancelled WHERE reason=X) / COUNT(subscription_cancelled) * 100%` |
| **Data Source** | `subscription_cancelled.reason` |
| **Refresh Rate** | Ежемесячно |
| **Визуализация** | Pie chart + table |

#### Churn Timing

| Параметр | Значение |
|----------|----------|
| **Название** | Распределение оттока по длительности подписки |
| **Формула** | `HISTOGRAM(subscription_cancelled.days_active)` |
| **Data Source** | `subscription_cancelled` |
| **Refresh Rate** | Ежемесячно |
| **Визуализация** | Histogram (бакеты: 0-7d, 7-30d, 30-90d, 90-180d, 180d+) |

#### Reactivation Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Процент возврата ушедших пользователей |
| **Формула** | `COUNT(reactivated_users) / COUNT(churned_30d_ago) * 100%` |
| **Target** | > 10% |
| **Alert Warning** | < 7% |
| **Alert Critical** | < 5% |
| **Data Source** | `app_opened` (после паузы 30+ дней) |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Bar chart + campaign attribution |

---

## 5. Safety Dashboard

**Аудитория:** Safety Team, дежурные операторы, Clinical Lead
**Частота просмотра:** Realtime (мониторинг 24/7)
**Цель:** Мониторинг кризисных ситуаций и безопасности пользователей
**Канал оповещений:** Immediate push + SMS для дежурных при Critical events; Telegram notify для Safety Lead

### 5.1 Crisis Detection Metrics

#### Crisis Detection Rate (Recall)

| Параметр | Значение |
|----------|----------|
| **Название** | Полнота распознавания кризисов (True Positive Rate) |
| **Формула** | `TP / (TP + FN) * 100%` |
| **Target** | > 95% |
| **Alert Warning** | < 92% |
| **Alert Critical** | < 90% |
| **Data Source** | `crisis_detected` + ручная разметка |
| **Refresh Rate** | Ежедневно (агрегат), realtime (incidents) |
| **Визуализация** | Gauge + daily trend |

#### Crisis Detection Precision

| Параметр | Значение |
|----------|----------|
| **Название** | Точность распознавания кризисов |
| **Формула** | `TP / (TP + FP) * 100%` |
| **Target** | > 80% |
| **Alert Warning** | < 72% |
| **Alert Critical** | < 70% |
| **Data Source** | `crisis_detected` + ручная разметка |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Gauge + trend |

#### False Negative Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Процент пропущенных кризисов |
| **Формула** | `FN / (TP + FN) * 100%` |
| **Target** | < 5% |
| **Alert Warning** | > 7% |
| **Alert Critical** | > 10% (КРИТИЧНО: при > 1% требуется анализ) |
| **Data Source** | `crisis_detected` + ручная разметка + пользовательские жалобы |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Counter + trendline (должна стремиться к 0) |

**КРИТИЧЕСКОЕ ТРЕБОВАНИЕ:** False Negative Rate < 1% является стратегической целью. Каждый пропущенный кризис анализируется индивидуально в течение 24 часов.

### 5.2 SOS Protocol Metrics

#### SOS Activations per Day/Week

| Параметр | Значение |
|----------|----------|
| **Название** | Количество активаций SOS-протоколов |
| **Формула** | `COUNT(sos_button_pressed) per day/week` |
| **Target** | Информационная метрика (отслеживание тренда) |
| **Alert Warning** | Рост > 50% WoW |
| **Alert Critical** | Рост > 100% WoW |
| **Data Source** | `sos_button_pressed` |
| **Refresh Rate** | Realtime |
| **Визуализация** | Counter + hourly heatmap |

#### Average Time to Hotline Redirect

| Параметр | Значение |
|----------|----------|
| **Название** | Среднее время от детекции кризиса до перенаправления на горячую линию |
| **Формула** | `AVG(crisis_hotline_shown.timestamp - crisis_detected.timestamp)` |
| **Target** | < 60 секунд |
| **Alert Warning** | > 90 секунд |
| **Alert Critical** | > 120 секунд |
| **Data Source** | `crisis_detected`, `crisis_hotline_shown` |
| **Refresh Rate** | Realtime |
| **Визуализация** | Histogram (p50, p95, p99) |

#### Crisis Response Time (P50, P95, P99)

| Параметр | Значение |
|----------|----------|
| **Название** | Время от детекции до эскалации (персентили) |
| **Формула** | `PERCENTILE(crisis_escalated.timestamp - crisis_detected.timestamp, [50, 95, 99])` |
| **Targets** | P50 < 30 сек, P95 < 60 сек, P99 < 120 сек |
| **Alert Warning** | P95 > 90 сек |
| **Alert Critical** | P95 > 120 сек |
| **Data Source** | `crisis_detected`, `crisis_escalated` |
| **Refresh Rate** | Realtime |
| **Визуализация** | Percentile lines + histogram |

#### Escalation Completion Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Процент завершённых эскалаций (пользователь получил помощь) |
| **Формула** | `COUNT(crisis_escalated WHERE action IN ('hotline','specialist','operator')) / COUNT(crisis_detected WHERE level IN ('high','critical')) * 100%` |
| **Target** | > 90% |
| **Alert Warning** | < 82% |
| **Alert Critical** | < 75% |
| **Data Source** | `crisis_detected`, `crisis_escalated` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Percentage + breakdown by action type |

#### SOS Protocol Completion Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Процент завершённых SOS-протоколов |
| **Формула** | `COUNT(sos_protocol_completed) / COUNT(sos_protocol_started) * 100%` |
| **Target** | > 70% |
| **Alert Warning** | < 55% |
| **Alert Critical** | < 45% |
| **Data Source** | `sos_protocol_started`, `sos_protocol_completed` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Funnel + breakdown by situation_type |

#### SOS Protocol Effectiveness (Mood Change)

| Параметр | Значение |
|----------|----------|
| **Название** | Средний прирост настроения после SOS-протокола |
| **Формула** | `AVG(sos_protocol_completed.mood_after - sos_protocol_completed.mood_before)` |
| **Target** | > +2 (из 10) |
| **Alert Warning** | < +1.5 |
| **Alert Critical** | < +1 |
| **Data Source** | `sos_protocol_completed` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Before/after bar + effectiveness by situation_type |

### 5.3 Operational Metrics

#### Active Crisis Events (Live)

| Параметр | Значение |
|----------|----------|
| **Название** | Текущие открытые кризисные ситуации |
| **Формула** | `COUNT(crisis_detected WHERE NOT resolved)` |
| **Target** | Информационная |
| **Alert Warning** | > 3 одновременно |
| **Alert Critical** | > 5 одновременно |
| **Data Source** | `crisis_detected`, `crisis_escalated` |
| **Refresh Rate** | Realtime |
| **Визуализация** | Live counter + list с уровнями |

#### Crisis Level Distribution

| Параметр | Значение |
|----------|----------|
| **Название** | Распределение кризисов по уровням |
| **Формула** | `COUNT(crisis_detected WHERE level=X) / COUNT(crisis_detected) * 100%` |
| **Target** | Critical < 3% от всех |
| **Alert Warning** | Critical > 5% |
| **Alert Critical** | Critical > 8% |
| **Data Source** | `crisis_detected` |
| **Refresh Rate** | Realtime |
| **Визуализация** | Pie chart + trend |

#### False Negative Review Log

| Параметр | Значение |
|----------|----------|
| **Название** | Пропущенные кризисы (ручная разметка) |
| **Формула** | `COUNT(manually_flagged_missed_crisis) per day` |
| **Target** | 0 за день |
| **Alert Warning** | > 0 за день |
| **Alert Critical** | > 1 за день |
| **Data Source** | Ручная разметка + пользовательские жалобы |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Table + counter |

### 5.4 Макет Safety Dashboard

```
+------------------------------------------------------------------+
|            SAFETY DASHBOARD (REALTIME)                            |
|         Emotional Balance | 2026-02-04 15:42 UTC                  |
+------------------------------------------------------------------+
|                                                                  |
|  [АКТИВНЫХ КРИЗИСОВ: 1]     [SOS СЕГОДНЯ: 23]                   |
|  Уровень: moderate           SOS за неделю: 148                  |
|  Статус: ЗЕЛЁНЫЙ             Тренд: стабильно                    |
|                                                                  |
+---------------------------+--------------------------------------+
|  DETECTION ACCURACY       |  RESPONSE TIME                       |
|                           |                                      |
|  Recall:    96.2% [OK]    |  P50:  28 сек [OK]                  |
|  Precision: 83.4% [OK]    |  P95:  52 сек [OK]                  |
|  F1-score:  89.4%         |  P99:  98 сек [OK]                  |
|  False Neg: 3.8%  [OK]    |                                      |
|                           |  Hotline redirect: 45 сек [OK]       |
+---------------------------+--------------------------------------+
|                                                                  |
|  SOS PROTOCOL              |  ESCALATION                         |
|  Completion: 72% [OK]      |  Completion: 91% [OK]              |
|  Mood change: +2.3 [OK]    |  By type:                          |
|  By situation:              |    Hotline: 45%                    |
|    Panic:    78%            |    Specialist: 35%                 |
|    Anxiety:  74%            |    Operator: 20%                   |
|    Insomnia: 68%            |                                    |
|    Anger:    71%            |  FALSE NEGATIVE REVIEW             |
|    Thoughts: 65%            |  Today: 0 [OK]                    |
|                             |  This week: 2 (analysed)          |
+---------------------------+--------------------------------------+
|                                                                  |
|  AUDIT LOG (последние 10 событий)                                |
|  15:41 - crisis_detected (moderate) - user_hash:a3f2...          |
|  15:38 - sos_protocol_completed (panic) - mood: 3->6            |
|  15:35 - crisis_escalated (high) -> hotline                      |
|  ...                                                             |
|                                                                  |
+------------------------------------------------------------------+
```

---

## 6. B2B Dashboard

**Аудитория:** Sales Team, Account Management, CEO
**Частота просмотра:** Еженедельно
**Цель:** Управление B2B-продажами, мониторинг контрактов, удержание корпоративных клиентов
**Канал оповещений:** Email + Telegram для Sales Lead

### 6.1 Pipeline & Contracts

#### Active Contracts

| Параметр | Значение |
|----------|----------|
| **Название** | Количество активных B2B-контрактов |
| **Формула** | `COUNT(b2b_groups WHERE status='active')` |
| **Target (мес 12)** | > 10 |
| **Alert Warning** | < 6 |
| **Alert Critical** | < 3 |
| **Data Source** | `b2b_group_created`, CRM |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Big number + monthly trend |

#### Pipeline Value

| Параметр | Значение |
|----------|----------|
| **Название** | Стоимость воронки продаж (ожидаемые контракты) |
| **Формула** | `SUM(pipeline_deals.value * probability)` |
| **Target** | > 3x от квартального плана |
| **Alert Warning** | < 2x от квартального плана |
| **Alert Critical** | < 1.5x от квартального плана |
| **Data Source** | CRM (pipeline) |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Funnel chart (Lead -> Qualified -> Demo -> Pilot -> Contract) |

#### B2B Sales Funnel

| Этап | Формула | Target Conversion | Alert Critical |
|------|---------|------------------|----------------|
| Lead -> Qualified | `qualified / leads * 100%` | > 50% | < 30% |
| Qualified -> Demo | `demos / qualified * 100%` | > 60% | < 40% |
| Demo -> Pilot | `pilots / demos * 100%` | > 40% | < 25% |
| Pilot -> Contract | `contracts / pilots * 100%` | > 70% | < 50% |
| **Lead -> Contract** | Сквозная | **> 8.4%** | **< 5%** |

#### Average Deal Size

| Параметр | Значение |
|----------|----------|
| **Название** | Средний размер B2B-контракта (MRR) |
| **Формула** | `AVG(b2b_contract.employee_count * 1500)` |
| **Target** | > 150 000 руб/мес (100 сотрудников) |
| **Alert Warning** | < 100 000 руб/мес |
| **Alert Critical** | < 75 000 руб/мес (минимальный контракт) |
| **Data Source** | CRM + `b2b_group_created` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | KPI card + trend |

### 6.2 Employee Engagement

#### Employee Activation Rate per Company

| Параметр | Значение |
|----------|----------|
| **Название** | Процент активированных сотрудников от общего числа в контракте |
| **Формула** | `COUNT(b2b_member_joined WHERE app_opened in last 30d) / COUNT(b2b_members_total) * 100%` — per company |
| **Target** | > 40% |
| **Alert Warning** | < 25% (по любой компании) |
| **Alert Critical** | < 15% (по любой компании) |
| **Data Source** | `b2b_member_joined`, `app_opened` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Bar chart per company + average line |

#### B2B User Activity

| Параметр | Значение |
|----------|----------|
| **Название** | Средние сессии в неделю на B2B-пользователя |
| **Формула** | `AVG(sessions_per_week WHERE is_b2b=true)` |
| **Target** | > 2.5 |
| **Alert Warning** | < 1.5 |
| **Alert Critical** | < 1 |
| **Data Source** | `chat_session_started`, `exercise_started`, `diary_entry_created` (WHERE is_b2b=true) |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Line chart + comparison with B2C |

### 6.3 Revenue & Retention

#### B2B MRR

| Параметр | Значение |
|----------|----------|
| **Название** | Ежемесячный рекуррентный доход от B2B |
| **Формула** | `SUM(active_b2b_employees * 1500)` |
| **Target (мес 12)** | 750 000 руб |
| **Alert Warning** | < 500 000 руб |
| **Alert Critical** | < 300 000 руб |
| **Data Source** | `b2b_group_created`, `b2b_member_joined`, `b2b_member_removed` |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Line chart + breakdown per company |

#### B2B ARR

| Параметр | Значение |
|----------|----------|
| **Название** | Годовой рекуррентный доход от B2B |
| **Формула** | `B2B_MRR * 12` |
| **Target (мес 12)** | 9 000 000 руб |
| **Alert Warning** | < 6 000 000 руб |
| **Alert Critical** | < 3 600 000 руб |
| **Data Source** | Рассчитывается из B2B MRR |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | Big number + trend |

#### Revenue per Contract

| Параметр | Значение |
|----------|----------|
| **Название** | Средний доход с одного B2B-контракта в месяц |
| **Формула** | `B2B_MRR / COUNT(active_b2b_contracts)` |
| **Target** | > 150 000 руб/мес |
| **Alert Warning** | < 100 000 руб/мес |
| **Alert Critical** | < 75 000 руб/мес |
| **Data Source** | B2B MRR + active contracts count |
| **Refresh Rate** | Еженедельно |
| **Визуализация** | KPI card + breakdown |

#### B2B NPS

| Параметр | Значение |
|----------|----------|
| **Название** | NPS среди B2B-клиентов (HR-контакты) |
| **Формула** | `%Promoters - %Detractors` (среди HR-контактов) |
| **Target** | > 50 |
| **Alert Warning** | < 35 |
| **Alert Critical** | < 20 |
| **Data Source** | Квартальный B2B NPS-опрос |
| **Refresh Rate** | Ежеквартально |
| **Визуализация** | Gauge + trend |

#### B2B Renewal Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Процент продления B2B-контрактов |
| **Формула** | `COUNT(renewed_contracts) / COUNT(contracts_up_for_renewal) * 100%` |
| **Target** | > 90% |
| **Alert Warning** | < 80% |
| **Alert Critical** | < 70% |
| **Data Source** | CRM + контрактные данные |
| **Refresh Rate** | Ежемесячно |
| **Визуализация** | Percentage + per-company breakdown |

#### B2B Churn Rate

| Параметр | Значение |
|----------|----------|
| **Название** | Ежемесячный отток B2B-клиентов |
| **Формула** | `COUNT(cancelled_b2b_contracts in month) / COUNT(active_b2b at month_start) * 100%` |
| **Target** | < 5% (годовые контракты: < 2%) |
| **Alert Warning** | > 7% |
| **Alert Critical** | > 10% |
| **Data Source** | CRM |
| **Refresh Rate** | Ежемесячно |
| **Визуализация** | Line chart + reason breakdown |

---

## 7. Technical Dashboard

**Аудитория:** Engineering Lead, DevOps, SRE, Backend Team
**Частота просмотра:** Ежедневно (realtime при инцидентах)
**Цель:** Производительность, надёжность инфраструктуры, оптимизация расходов
**Канал оповещений:** PagerDuty-style через Telegram для SRE; Grafana alerts для DevOps

### 7.1 API Performance

#### API Response Time

| Параметр | Значение |
|----------|----------|
| **Название** | Время ответа API (персентили) |
| **Формула** | `PERCENTILE(api_response_time, [50, 95, 99])` |
| **Targets** | P50 < 200ms, P95 < 500ms, P99 < 1000ms |
| **Alert Warning** | P95 > 700ms |
| **Alert Critical** | P95 > 1000ms или P99 > 2000ms |
| **Data Source** | Application metrics (Prometheus) |
| **Refresh Rate** | Realtime |
| **Визуализация** | Percentile lines + heatmap |

#### Error Rate (5xx)

| Параметр | Значение |
|----------|----------|
| **Название** | Процент ошибок сервера |
| **Формула** | `COUNT(responses WHERE status >= 500) / COUNT(total_responses) * 100%` |
| **Target** | < 0.1% |
| **Alert Warning** | > 0.5% |
| **Alert Critical** | > 1% |
| **Data Source** | Nginx logs + Application metrics |
| **Refresh Rate** | Realtime |
| **Визуализация** | Line chart + top errors table |

#### Uptime

| Параметр | Значение |
|----------|----------|
| **Название** | Доступность сервиса |
| **Формула** | `(total_minutes - downtime_minutes) / total_minutes * 100%` |
| **Target** | > 99.9% (rolling 30d) |
| **Alert Warning** | < 99.7% |
| **Alert Critical** | < 99.5% |
| **Data Source** | Health check endpoint + Prometheus |
| **Refresh Rate** | Realtime |
| **Визуализация** | Status indicator + monthly SLA gauge |

### 7.2 LLM Performance

#### LLM Latency

| Параметр | Значение |
|----------|----------|
| **Название** | Время ответа LLM-провайдера |
| **Формула** | `AVG(chat_response_received.response_time_ms)` |
| **Target** | P50 < 2000ms, P95 < 5000ms |
| **Alert Warning** | P95 > 7000ms |
| **Alert Critical** | P95 > 10000ms |
| **Data Source** | `chat_response_received` |
| **Refresh Rate** | Realtime |
| **Визуализация** | Line chart by provider (GigaChat / YandexGPT) |

#### Token Usage

| Параметр | Значение |
|----------|----------|
| **Название** | Среднее потребление токенов за сессию |
| **Формула** | `AVG(SUM(chat_response_received.tokens_used) per session)` |
| **Target** | < 3000 tokens/session |
| **Alert Warning** | > 4500 tokens/session |
| **Alert Critical** | > 6000 tokens/session |
| **Data Source** | `chat_response_received` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Histogram + trendline |

#### LLM Cost per Session

| Параметр | Значение |
|----------|----------|
| **Название** | Стоимость LLM-запросов на одну сессию |
| **Формула** | `AVG(SUM(api_call_made.cost_rub) per session)` |
| **Target** | < 15 руб/session |
| **Alert Warning** | > 25 руб/session |
| **Alert Critical** | > 40 руб/session |
| **Data Source** | `api_call_made` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Line chart + cumulative cost trend |

#### LLM Cost per User (monthly)

| Параметр | Значение |
|----------|----------|
| **Название** | Ежемесячные расходы на LLM на одного активного пользователя |
| **Формула** | `SUM(api_call_made.cost_rub in month) / MAU` |
| **Target** | < 50 руб/user/мес |
| **Alert Warning** | > 70 руб/user/мес |
| **Alert Critical** | > 100 руб/user/мес |
| **Data Source** | `api_call_made` |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | KPI card + trend + breakdown by plan |

### 7.3 Database Performance

#### Database Query Time

| Параметр | Значение |
|----------|----------|
| **Название** | Время выполнения запросов к БД |
| **Формула** | `PERCENTILE(query_duration_ms, [50, 95, 99])` |
| **Targets** | P50 < 50ms, P95 < 200ms, P99 < 500ms |
| **Alert Warning** | P95 > 350ms |
| **Alert Critical** | P95 > 500ms |
| **Data Source** | PostgreSQL query logs + Prometheus pg_exporter |
| **Refresh Rate** | Realtime |
| **Визуализация** | Percentile lines + slow query table |

#### Database Connections

| Параметр | Значение |
|----------|----------|
| **Название** | Количество активных подключений к БД |
| **Формула** | `current_connections / max_connections * 100%` |
| **Target** | < 60% от max |
| **Alert Warning** | > 75% от max |
| **Alert Critical** | > 90% от max |
| **Data Source** | PostgreSQL metrics |
| **Refresh Rate** | Realtime |
| **Визуализация** | Gauge + trend |

#### Database Storage

| Параметр | Значение |
|----------|----------|
| **Название** | Использование дискового пространства БД |
| **Формула** | `db_size_current / disk_total * 100%` |
| **Target** | < 60% |
| **Alert Warning** | > 75% |
| **Alert Critical** | > 85% |
| **Data Source** | Система мониторинга (df / pg_database_size) |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Gauge + growth projection |

### 7.4 Infrastructure Metrics

#### STT/TTS Latency

| Параметр | Значение |
|----------|----------|
| **Название** | Задержка распознавания/синтеза речи |
| **Формула** | `AVG(voice_stt_processed.duration_sec)`, `AVG(voice_tts_played.duration_sec)` |
| **Target** | STT < 2 сек, TTS < 1.5 сек |
| **Alert Warning** | STT > 3 сек или TTS > 2.5 сек |
| **Alert Critical** | STT > 5 сек или TTS > 4 сек |
| **Data Source** | `voice_stt_processed`, `voice_tts_played` |
| **Refresh Rate** | Realtime |
| **Визуализация** | Dual line chart + histogram |

#### Event Pipeline Health

| Параметр | Значение |
|----------|----------|
| **Название** | Здоровье pipeline обработки событий |
| **Формула** | `events_per_sec`, `processing_lag_sec`, `failed_events_ratio` |
| **Targets** | Lag < 30 сек, Failed < 0.1% |
| **Alert Warning** | Lag > 45 сек или Failed > 0.5% |
| **Alert Critical** | Lag > 60 сек или Failed > 1% |
| **Data Source** | Pipeline metrics (APScheduler / Celery) |
| **Refresh Rate** | Realtime |
| **Визуализация** | Counter + lag gauge + error rate |

#### Telegram Bot API Health

| Параметр | Значение |
|----------|----------|
| **Название** | Статус Telegram Bot API |
| **Формула** | `webhook_delivery_rate`, `bot_api_latency` |
| **Target** | Delivery > 99.5%, Latency < 500ms |
| **Alert Warning** | Delivery < 99% или Latency > 1000ms |
| **Alert Critical** | Delivery < 98% или Latency > 2000ms |
| **Data Source** | Telegram Bot API metrics |
| **Refresh Rate** | Realtime |
| **Визуализация** | Status board + line chart |

#### Infrastructure Cost

| Параметр | Значение |
|----------|----------|
| **Название** | Общие инфраструктурные расходы |
| **Формула** | `SUM(hosting + gpu + services + llm_api)` |
| **Target** | < budget * 1.0 |
| **Alert Warning** | > budget * 1.1 |
| **Alert Critical** | > budget * 1.2 |
| **Data Source** | Биллинг провайдеров |
| **Refresh Rate** | Ежедневно |
| **Визуализация** | Stacked area chart (by service) + per-user cost |

---

## 8. Alert Thresholds (сводная таблица)

### 8.1 Executive Dashboard Alerts

| Метрика | OK (Зелёный) | Warning (Жёлтый) | Critical (Красный) |
|---------|--------------|-------------------|---------------------|
| MRR | >= 5.0M | 3.5M - 5.0M | < 3.0M |
| MRR Growth | >= 15% MoM | 5% - 15% MoM | < 5% MoM |
| MAU | >= 50K | 35K - 50K | < 30K |
| DAU/MAU | >= 30% | 15% - 30% | < 15% |
| CAC (blended) | <= 200 руб | 200 - 400 руб | > 400 руб |
| LTV/CAC | >= 10x | 3x - 10x | < 3x |
| Churn | <= 8% | 8% - 12% | > 12% |
| NRR | >= 100% | 90% - 100% | < 90% |
| Runway | >= 12 мес | 6 - 12 мес | < 6 мес |
| Registration -> Paid | >= 5% | 2% - 5% | < 2% |

### 8.2 Product Dashboard Alerts

| Метрика | OK (Зелёный) | Warning (Жёлтый) | Critical (Красный) |
|---------|--------------|-------------------|---------------------|
| Onboarding completion | >= 70% | 50% - 70% | < 50% |
| Aha-moment rate | >= 60% | 40% - 60% | < 40% |
| Feature adoption (2+) | >= 40% | 20% - 40% | < 20% |
| Session duration | 8-15 мин | 5-8 или 15-25 мин | < 3 или > 30 мин |
| Messages/session | 8-20 | 5-8 или 20-30 | < 3 |
| Sessions/week | >= 3 | 1.5 - 3 | < 1.5 |
| CSAT | >= 4.2 | 3.5 - 4.2 | < 3.5 |
| NPS | >= 40 | 20 - 40 | < 20 |
| PHQ-9 improvement (8w) | >= 20% | 10% - 20% | < 10% |
| GAD-7 improvement (8w) | >= 20% | 10% - 20% | < 10% |
| Time to value moment | <= 10 мин | 10 - 20 мин | > 30 мин |

### 8.3 Growth Dashboard Alerts

| Метрика | OK (Зелёный) | Warning (Жёлтый) | Critical (Красный) |
|---------|--------------|-------------------|---------------------|
| Blended CAC | <= 200 руб | 200 - 400 руб | > 400 руб |
| K-factor | >= 0.3 | 0.1 - 0.3 | < 0.1 |
| Referral rate | >= 15% | 5% - 15% | < 5% |
| D1 Retention | >= 50% | 35% - 50% | < 35% |
| D7 Retention | >= 40% | 25% - 40% | < 25% |
| D30 Retention | >= 25% | 15% - 25% | < 15% |
| D90 Retention | >= 15% | 8% - 15% | < 8% |
| Reactivation rate | >= 10% | 5% - 10% | < 5% |
| Funnel drop-off (any step) | < 30% | 30% - 40% | > 40% |
| Channel quality (D7 ret.) | >= 35% | 20% - 35% | < 20% |

### 8.4 Safety Dashboard Alerts

| Метрика | OK (Зелёный) | Warning (Жёлтый) | Critical (Красный) |
|---------|--------------|-------------------|---------------------|
| Crisis detection recall | >= 95% | 90% - 95% | < 90% |
| Crisis detection precision | >= 80% | 70% - 80% | < 70% |
| False negative rate | < 5% | 5% - 8% | > 8% |
| Response time (P95) | < 60 сек | 60 - 120 сек | > 120 сек |
| Hotline redirect time | < 60 сек | 60 - 90 сек | > 90 сек |
| Escalation completion | >= 90% | 75% - 90% | < 75% |
| SOS completion rate | >= 70% | 45% - 70% | < 45% |
| SOS mood improvement | >= +2 | +1 - +2 | < +1 |
| Active crises (simultaneous) | <= 3 | 3 - 5 | > 5 |
| False negatives/day | 0 | 1 | > 1 |

### 8.5 B2B Dashboard Alerts

| Метрика | OK (Зелёный) | Warning (Жёлтый) | Critical (Красный) |
|---------|--------------|-------------------|---------------------|
| Active contracts | >= 10 | 3 - 10 | < 3 |
| Pipeline (vs план) | >= 3x | 1.5x - 3x | < 1.5x |
| Employee activation | >= 40% | 15% - 40% | < 15% |
| B2B MRR | >= 750K | 300K - 750K | < 300K |
| B2B NPS | >= 50 | 20 - 50 | < 20 |
| Renewal rate | >= 90% | 70% - 90% | < 70% |
| B2B Churn | <= 5% | 5% - 10% | > 10% |
| Avg deal size | >= 150K | 75K - 150K | < 75K |

### 8.6 Technical Dashboard Alerts

| Метрика | OK (Зелёный) | Warning (Жёлтый) | Critical (Красный) |
|---------|--------------|-------------------|---------------------|
| API response (P95) | < 500ms | 500 - 1000ms | > 1000ms |
| Error rate (5xx) | < 0.1% | 0.1% - 1% | > 1% |
| Uptime (30d rolling) | >= 99.9% | 99.5% - 99.9% | < 99.5% |
| LLM latency (P95) | < 5000ms | 5000 - 10000ms | > 10000ms |
| LLM cost/user/мес | < 50 руб | 50 - 100 руб | > 100 руб |
| DB query time (P95) | < 200ms | 200 - 500ms | > 500ms |
| DB connections usage | < 60% | 60% - 90% | > 90% |
| Event pipeline lag | < 30 сек | 30 - 60 сек | > 60 сек |
| Telegram delivery | >= 99.5% | 98% - 99.5% | < 98% |
| STT latency | < 2 сек | 2 - 5 сек | > 5 сек |

---

## 9. Data Freshness SLA

### 9.1 Требования по свежести данных

| Тип данных | SLA (макс. задержка) | Dashboard | Проверка | Escalation |
|------------|---------------------|-----------|----------|------------|
| **Realtime events** (crisis, SOS) | < 5 секунд | Safety | Heartbeat каждые 30 сек | Немедленно -> SRE + Safety Lead |
| **Session events** (chat, exercise, diary) | < 30 секунд | Product, Safety | Pipeline lag monitor | 5 мин -> SRE |
| **User activity** (app_opened, registrations) | < 1 минута | Executive, Growth | Event counter check | 15 мин -> Analytics |
| **Aggregated metrics** (DAU, WAU, funnel) | < 15 минут | Executive, Product, Growth | Dashboard refresh check | 30 мин -> Analytics |
| **Subscription events** (activation, cancellation) | < 5 минут | Executive, B2B | Payment webhook monitor | 15 мин -> Backend + Finance |
| **Cohort calculations** | < 4 часа | Growth | Job completion monitor | 8 часов -> Analytics |
| **Financial metrics** (MRR, ARR, ARPU) | < 24 часа | Executive, B2B | Daily reconciliation | 48 часов -> Finance |
| **Clinical metrics** (PHQ-9, GAD-7 trends) | < 24 часа | Product | Survey completion check | 48 часов -> Clinical Lead |
| **B2B reports** | < 24 часа | B2B | Report generation job | 48 часов -> Analytics |
| **A/B test results** | < 1 час | Product | Experiment pipeline monitor | 4 часа -> Product |
| **Infrastructure metrics** | < 10 секунд | Technical | Prometheus scrape interval | 1 мин -> SRE |

### 9.2 Частота обновления дашбордов

| Dashboard | Минимальная частота обновления | Auto-refresh |
|-----------|-------------------------------|--------------|
| Executive | Каждые 15 минут (виджеты), ежедневно (KPI cards) | Да |
| Product | Каждые 5 минут | Да |
| Growth | Каждый час | Да |
| Safety | Каждые 5 секунд (crisis events), каждые 30 сек (остальное) | Да (realtime) |
| B2B | Каждые 15 минут | Да |
| Technical | Каждые 10 секунд | Да (realtime) |

### 9.3 Мониторинг свежести данных

```yaml
data_freshness_checks:
  - name: "Realtime event pipeline"
    check: "Last event timestamp vs current time"
    threshold: "> 30 sec lag"
    alert: "Telegram -> SRE (immediate)"

  - name: "Dashboard data staleness"
    check: "Last refresh timestamp per dashboard"
    threshold: "> 2x expected refresh interval"
    alert: "Telegram -> Analytics team"

  - name: "Financial reconciliation"
    check: "Internal MRR vs YooKassa billing"
    threshold: "> 1% discrepancy"
    alert: "Telegram -> Finance + Backend"

  - name: "Clinical data completeness"
    check: "PHQ-9/GAD-7 surveys with missing data"
    threshold: "> 5% incomplete surveys"
    alert: "Telegram -> Clinical Lead"

  - name: "B2B report generation"
    check: "Last successful report per company"
    threshold: "> 48h since last report"
    alert: "Telegram -> Account Management"
```

---

## 10. Реализация и инструменты

### 10.1 Технический стек

| Компонент | Инструмент | Назначение |
|-----------|-----------|------------|
| Сбор метрик | Prometheus | Системные и инфраструктурные метрики |
| Визуализация | Grafana | Все дашборды, alerting |
| Хранение событий | PostgreSQL (AuditLog) | Пользовательские события |
| Агрегация | APScheduler (Django) | Расчёт cohort, daily/weekly/monthly агрегатов |
| Оповещения | Telegram Bot + Email | Alerts по threshold нарушениям |
| Логирование | AuditLogService | Аудит всех событий (см. `rules/04-logging.md`) |
| Admin-интерфейс | Django Admin | Просмотр AuditLog (`/admin/core/auditlog/`) |

### 10.2 Источники данных (mapping)

| Dashboard | Первичные источники | Вторичные источники |
|-----------|--------------------|--------------------|
| Executive | `subscription_*`, `user_registered`, `app_opened` | CRM, финансовая система |
| Product | `chat_*`, `diary_*`, `exercise_*`, `meditation_*`, `onboarding_*` | PHQ-9/GAD-7 surveys |
| Growth | `user_registered`, `app_opened`, `referral_*` | Маркетинговые расходы |
| Safety | `crisis_*`, `sos_*` | Ручная разметка, жалобы |
| B2B | `b2b_*`, `app_opened (is_b2b=true)` | CRM |
| Technical | Prometheus, `api_call_made`, `voice_*` | Nginx logs, PostgreSQL logs |

### 10.3 Доступ к дашбордам

| Роль | Executive | Product | Growth | Safety | B2B | Technical |
|------|-----------|---------|--------|--------|-----|-----------|
| CEO | Full | Summary | Summary | Summary | Full | -- |
| Product Manager | Summary | Full | Full | Summary | -- | Summary |
| Growth Lead | Summary | Summary | Full | -- | -- | -- |
| Safety Lead | Summary | -- | -- | Full | -- | Summary |
| Sales Lead | Summary | -- | Summary | -- | Full | -- |
| Engineering Lead | Summary | Summary | -- | Summary | -- | Full |
| SRE | -- | -- | -- | Full | -- | Full |
| Investor | Full (read-only) | -- | Summary | -- | Summary | -- |

---

## 11. Приложения

### 11.1 Глоссарий метрик

| Термин | Определение |
|--------|-------------|
| MAU | Monthly Active Users -- уникальные пользователи с минимум 1 сессией за 30 дней |
| DAU | Daily Active Users -- уникальные пользователи с минимум 1 сессией за день |
| WAU | Weekly Active Users -- уникальные пользователи с минимум 1 сессией за 7 дней |
| MRR | Monthly Recurring Revenue -- ежемесячный рекуррентный доход от подписок |
| ARR | Annual Recurring Revenue -- MRR * 12 |
| NRR | Net Revenue Retention -- чистое удержание дохода с учётом upgrade/downgrade/churn |
| ARPU | Average Revenue Per User -- средний доход на пользователя |
| LTV | Lifetime Value -- прогнозный доход с одного пользователя за всё время |
| CAC | Customer Acquisition Cost -- стоимость привлечения одного пользователя |
| NPS | Net Promoter Score -- индекс лояльности (от -100 до +100) |
| CSAT | Customer Satisfaction Score -- оценка удовлетворённости (1-5) |
| PHQ-9 | Patient Health Questionnaire-9 -- валидированный опросник депрессии (0-27 баллов) |
| GAD-7 | Generalized Anxiety Disorder-7 -- валидированный опросник тревожности (0-21 балл) |
| BEP | Break-Even Point -- точка безубыточности |
| NSM | North Star Metric -- ключевая метрика продукта |
| K-factor | Вирусный коэффициент (invites_per_user * conversion_rate) |
| D1/D7/D30/D90 | Retention на 1-й / 7-й / 30-й / 90-й день |
| SLA | Service Level Agreement -- соглашение об уровне обслуживания |
| P50/P95/P99 | 50-й / 95-й / 99-й персентиль распределения |

### 11.2 Связь с документами проекта

| Документ | Связь |
|----------|-------|
| `docs/discovery/metrics-framework.md` | Иерархия метрик, HEART Framework, AARRR Funnel, A/B-тесты, counter-metrics |
| `docs/discovery/tracking-plan.md` | 110+ tracking events, event taxonomy, naming conventions |
| `docs/discovery/unit-economics.md` | Тарифные планы, CAC/LTV, P&L, sensitivity analysis |
| `docs/discovery/prd.md` | 18 FR-модулей, User Stories, требования к фичам |
| `docs/discovery/vision.md` | Стратегическое видение продукта |

### 11.3 Процедуры эскалации

#### При Critical alert (красный):

```yaml
1. Автоматическое уведомление:
   - Safety: Immediate push + SMS -> дежурный оператор + Safety Lead
   - Technical: Telegram -> SRE on-call
   - Executive: Telegram -> CEO (только для MRR, MAU, Runway)
   - Product: Telegram -> PM

2. Время реакции:
   - Safety Critical: < 5 минут
   - Technical Critical: < 15 минут
   - Business Critical: < 1 час

3. Процедура:
   a. Подтвердить получение alert
   b. Начать расследование
   c. Определить root cause
   d. Применить mitigation
   e. Написать incident report (для Critical)

4. Post-mortem:
   - Для Safety Critical: обязательно в течение 24 часов
   - Для Technical Critical: в течение 48 часов
   - Для Business Critical: в течение 1 недели
```

#### При Warning alert (жёлтый):

```yaml
1. Уведомление: Telegram -> ответственная команда
2. Время реакции: < 24 часа
3. Действие: анализ тренда, определение плана действий
4. Отчёт: если warning сохраняется 3+ дня -> эскалация до Critical
```

### 11.4 Чек-лист запуска дашбордов

```yaml
Pre-launch:
  [ ] Все data sources подключены
  [ ] Event pipeline работает (lag < SLA)
  [ ] Формулы метрик проверены на тестовых данных
  [ ] Alert thresholds настроены в Grafana
  [ ] Каналы оповещений протестированы (Telegram, Email, SMS)
  [ ] Доступ настроен по ролям (см. 10.3)
  [ ] Backup dashboards (JSON export) сохранены

Post-launch:
  [ ] Data freshness SLA соблюдается
  [ ] Алерты срабатывают корректно (тестовый alert)
  [ ] Пользователи обучены работе с дашбордами
  [ ] Документация передана команде
  [ ] Процедуры эскалации утверждены
  [ ] Расписание review: еженедельно (PM), ежемесячно (CEO)
```

### 11.5 Roadmap развития аналитики

| Фаза | Срок | Действия |
|------|------|----------|
| **MVP** (мес 1-3) | Запуск | Executive + Safety dashboards, базовые алерты |
| **v1.0** (мес 3-6) | Расширение | Product + Growth + Technical dashboards |
| **v1.5** (мес 6-9) | B2B + Advanced | B2B dashboard, cohort analysis automation, A/B test monitor |
| **v2.0** (мес 9-12) | ML + Predictive | Predictive churn, anomaly detection, automated insights |

---

*Документ создан: Analytics Agent | Дата: 2026-02-04*