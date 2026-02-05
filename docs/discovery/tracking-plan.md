---
title: "Tracking Plan — Emotional Balance"
created_by: "Analytics Agent"
created_at: "2026-02-04"
version: "1.0"
status: "complete"
related_to:
  - "docs/discovery/prd.md"
  - "docs/discovery/vision.md"
  - "docs/discovery/user-research.md"
---

# Tracking Plan: Emotional Balance

## 1. Metrics Framework

### 1.1 North Star Metric

**Количество пользователей с 3+ сессиями/неделю, отмечающих улучшение эмоционального состояния.**

**Компоненты:**
- Weekly Active Users (WAU) с 3+ сессиями
- % из них с положительной динамикой в дневнике/PHQ-9/GAD-7

### 1.2 Пирамида метрик

```
                     North Star
                    /          \
              Engagement    Health Outcomes
             /    |    \         |
          Retention  Conversion  PHQ-9/GAD-7
         /    |        |            |
     DAU/MAU  D7/D30  Free→Paid  Pre/Post
```

### 1.3 Key Metrics Dashboard

| Категория | Метрика | Описание | Target (6 мес.) | Частота |
|-----------|---------|----------|-----------------|---------|
| **Acquisition** | Sign-ups | Новые регистрации | 10 000/мес | Ежедневно |
| | Source distribution | Каналы привлечения | — | Еженедельно |
| **Activation** | Onboarding completion | % завершивших опросник | > 70% | Ежедневно |
| | First chat message | % отправивших 1-е сообщение | > 80% | Ежедневно |
| | Aha-moment rate | % дошедших до 3-го сообщения | > 60% | Ежедневно |
| **Engagement** | DAU | Ежедневно активные | 15 000 | Ежедневно |
| | WAU | Еженедельно активные | 35 000 | Еженедельно |
| | MAU | Ежемесячно активные | 50 000 | Ежемесячно |
| | DAU/MAU | Stickiness | > 30% | Ежедневно |
| | Sessions/week | Сессий в неделю на юзера | > 3 | Еженедельно |
| | Session duration | Средняя длина сессии | 8-15 мин | Ежедневно |
| **Retention** | D1 | Возврат на 1-й день | > 50% | Ежедневно |
| | D7 | Возврат на 7-й день | > 40% | Еженедельно |
| | D30 | Возврат на 30-й день | > 25% | Ежемесячно |
| **Revenue** | MRR | Monthly Recurring Revenue | 5M руб | Ежемесячно |
| | ARPU | Revenue per user (платящие) | 1 500 руб | Ежемесячно |
| | Conversion Free→Paid | Конверсия в подписку | > 5% | Еженедельно |
| | Trial→Paid | Конверсия trial в подписку | > 30% | Еженедельно |
| | Churn rate | Отток платных | < 8%/мес | Ежемесячно |
| | LTV | Lifetime Value | > 6 000 руб | Ежемесячно |
| **Health** | PHQ-9 change | Изменение за 8 недель | > 20% ↓ | Ежемесячно |
| | GAD-7 change | Изменение за 8 недель | > 20% ↓ | Ежемесячно |
| | CSAT | Удовлетворённость | > 4.2/5 | Еженедельно |
| | NPS | Net Promoter Score | > 40 | Ежемесячно |
| **Safety** | Crisis detection rate | Корректное распознавание | > 95% recall | Ежедневно |
| | Crisis response time | Время от детекции до эскалации | < 60 сек | Ежедневно |
| | False negative rate | Пропущенные кризисы | < 5% | Ежедневно |
| **B2B** | B2B clients | Корпоративные клиенты | > 10 | Ежемесячно |
| | B2B ARR | B2B annual revenue | 5M руб | Ежемесячно |
| | B2B utilization | % активных сотрудников | > 40% | Ежемесячно |

---

## 2. Event Taxonomy

### 2.1 Naming Convention

```
{object}_{action}

Примеры:
  user_registered
  chat_message_sent
  diary_entry_created
  exercise_started
  subscription_activated
```

**Правила:**
- snake_case
- Объект → Действие (прошедшее время)
- Без сокращений
- Английский язык для названий событий

### 2.2 Стандартные свойства (каждое событие)

| Свойство | Тип | Описание |
|----------|-----|----------|
| `user_id` | string | ID пользователя |
| `session_id` | string | ID сессии |
| `timestamp` | datetime | UTC время |
| `platform` | string | "telegram_webapp" |
| `app_version` | string | Версия приложения |
| `subscription_plan` | string | "free" / "standard" / "premium" / "b2b" |
| `is_b2b` | boolean | Корпоративный пользователь |
| `device_type` | string | "ios" / "android" / "desktop" |

---

## 3. Events Catalog

### 3.1 Onboarding Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `app_opened` | WebApp открыт | `source`, `referrer` | — |
| `user_registered` | Регистрация завершена | `method: "telegram_oauth"` | FR-001 |
| `disclaimer_shown` | Disclaimer показан | — | FR-001 |
| `disclaimer_accepted` | Disclaimer принят | `consent_pd: boolean` | FR-001 |
| `disclaimer_rejected` | Disclaimer отклонён | — | FR-001 |
| `onboarding_started` | Опросник начат | — | FR-001 |
| `onboarding_step_completed` | Шаг опросника пройден | `step_number`, `step_name`, `answers` | FR-001 |
| `onboarding_completed` | Опросник завершён | `duration_sec`, `steps_completed` | FR-001 |
| `onboarding_skipped` | Опросник пропущен | `completed_steps` | FR-001 |
| `plan_viewed` | Экран тарифов просмотрен | — | FR-010 |
| `plan_selected` | Тариф выбран | `plan`, `is_trial` | FR-010 |

### 3.2 Chat Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `chat_session_started` | Чат-сессия начата | `is_new`, `mode: "text"/"voice"` | FR-002 |
| `chat_message_sent` | Сообщение отправлено | `message_length`, `session_message_count` | FR-002 |
| `chat_response_received` | Ответ ИИ получен | `response_time_ms`, `llm_provider`, `tokens_used` | FR-002 |
| `chat_cbt_technique_used` | КПТ-техника применена | `technique_type` | FR-002 |
| `chat_exercise_recommended` | Упражнение рекомендовано | `exercise_id`, `accepted: boolean` | FR-002 |
| `chat_session_ended` | Сессия завершена | `duration_sec`, `message_count`, `mode` | FR-002 |
| `chat_session_rated` | Сессия оценена | `rating: 1-5`, `comment` | FR-002 |
| `chat_limit_reached` | Лимит сообщений достигнут | `plan`, `messages_sent` | FR-002 |
| `chat_upgrade_shown` | Показано предложение апгрейда | `trigger_reason` | FR-002 |

### 3.3 Voice Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `voice_session_started` | Голосовая сессия начата | — | FR-003 |
| `voice_stt_processed` | STT обработка | `duration_sec`, `confidence` | FR-003 |
| `voice_tts_played` | TTS воспроизведён | `duration_sec`, `voice_type` | FR-003 |
| `voice_mode_switched` | Переключение текст↔голос | `from_mode`, `to_mode` | FR-003 |
| `voice_session_ended` | Голосовая сессия завершена | `duration_sec`, `stt_errors` | FR-003 |
| `voice_limit_reached` | Лимит голосовых минут | `minutes_used`, `plan` | FR-003 |
| `voice_error` | Ошибка распознавания | `error_type` | FR-003 |

### 3.4 Diary Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `diary_entry_created` | Запись создана | `emotion`, `intensity`, `tags`, `has_note` | FR-004 |
| `diary_entry_updated` | Запись обновлена | `entry_id`, `changes` | FR-004 |
| `diary_analytics_viewed` | Аналитика просмотрена | `period: "week"/"month"`, `entries_count` | FR-004 |
| `diary_insight_shown` | ИИ-инсайт показан | `insight_type`, `insight_id` | FR-004 |
| `diary_insight_helpful` | Инсайт отмечен полезным | `insight_id`, `helpful: boolean` | FR-004 |
| `diary_reminder_sent` | Напоминание отправлено | `time`, `day_of_week` | FR-004 |
| `diary_reminder_opened` | Напоминание открыто | `time_to_open_sec` | FR-004 |
| `diary_limit_reached` | Лимит записей | `plan` | FR-004 |

### 3.5 Exercise Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `exercise_catalog_viewed` | Каталог просмотрен | `category_filter` | FR-005 |
| `exercise_started` | Упражнение начато | `exercise_id`, `exercise_type`, `source` | FR-005 |
| `exercise_step_completed` | Шаг выполнен | `exercise_id`, `step_number`, `total_steps` | FR-005 |
| `exercise_completed` | Упражнение завершено | `exercise_id`, `duration_sec`, `emotion_before`, `emotion_after` | FR-005 |
| `exercise_abandoned` | Упражнение прервано | `exercise_id`, `last_step`, `total_steps` | FR-005 |
| `exercise_rated` | Упражнение оценено | `exercise_id`, `usefulness: 1-5` | FR-005 |
| `exercise_limit_reached` | Лимит упражнений | `plan` | FR-005 |

### 3.6 Crisis Detection Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `crisis_detected` | Кризис обнаружен | `level: "low"/"moderate"/"high"/"critical"`, `markers`, `confidence` | FR-006 |
| `crisis_escalated` | Эскалация выполнена | `level`, `action: "hotline"/"specialist"/"operator"` | FR-006 |
| `crisis_hotline_shown` | Горячая линия показана | — | FR-006 |
| `crisis_hotline_clicked` | Нажата кнопка звонка | — | FR-006 |
| `crisis_specialist_offered` | Предложен специалист | — | FR-006 |
| `crisis_declined` | Эскалация отклонена | `level`, `user_response` | FR-006 |
| `crisis_operator_notified` | Оператор уведомлён | `response_time_sec` | FR-006 |

### 3.7 Marketplace Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `marketplace_opened` | Каталог открыт | `source` | FR-007 |
| `psychologist_viewed` | Профиль просмотрен | `psychologist_id`, `specialization` | FR-007 |
| `psychologist_filtered` | Фильтр применён | `filters` | FR-007 |
| `booking_started` | Запись начата | `psychologist_id`, `format`, `price` | FR-007 |
| `booking_completed` | Запись завершена | `psychologist_id`, `slot_datetime`, `price` | FR-007 |
| `booking_cancelled` | Запись отменена | `psychologist_id`, `hours_before`, `refunded` | FR-007 |
| `consultation_started` | Консультация началась | `psychologist_id`, `format` | FR-007 |
| `consultation_completed` | Консультация завершена | `psychologist_id`, `duration_min` | FR-007 |
| `review_submitted` | Отзыв оставлен | `psychologist_id`, `rating`, `has_text` | FR-007 |

### 3.8 Meditation Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `meditation_catalog_viewed` | Каталог просмотрен | `category` | FR-008 |
| `meditation_started` | Медитация начата | `meditation_id`, `category`, `duration_min` | FR-008 |
| `meditation_completed` | Медитация завершена | `meditation_id`, `actual_duration_sec` | FR-008 |
| `meditation_paused` | Медитация на паузе | `meditation_id`, `at_sec` | FR-008 |
| `meditation_abandoned` | Медитация прервана | `meditation_id`, `at_sec`, `total_sec` | FR-008 |
| `breathing_started` | Дыхательная практика начата | `type`, `duration_min` | FR-008 |
| `breathing_completed` | Дыхательная практика завершена | `type`, `mood_before`, `mood_after` | FR-008 |

### 3.9 Wearables Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `wearable_connected` | Устройство подключено | `device_type`, `model` | FR-009 |
| `wearable_disconnected` | Устройство отключено | `device_type`, `reason` | FR-009 |
| `wearable_sync_completed` | Синхронизация выполнена | `device_type`, `data_points` | FR-009 |
| `wearable_stress_alert_sent` | Алерт стресса отправлен | `hrv_value`, `threshold` | FR-009 |
| `wearable_stress_alert_opened` | Алерт стресса открыт | `response_time_sec` | FR-009 |

### 3.10 Subscription Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `subscription_trial_started` | Trial начат | `plan` | FR-010 |
| `subscription_trial_ended` | Trial завершён | `plan`, `converted: boolean` | FR-010 |
| `subscription_activated` | Подписка активирована | `plan`, `price`, `payment_method` | FR-010 |
| `subscription_renewed` | Подписка продлена | `plan`, `price` | FR-010 |
| `subscription_cancelled` | Подписка отменена | `plan`, `reason`, `days_active` | FR-010 |
| `subscription_downgraded` | Даунгрейд | `from_plan`, `to_plan` | FR-010 |
| `subscription_upgraded` | Апгрейд | `from_plan`, `to_plan` | FR-010 |
| `payment_failed` | Ошибка оплаты | `plan`, `error_type` | FR-010 |
| `payment_succeeded` | Оплата прошла | `plan`, `amount`, `method` | FR-010 |

### 3.11 B2B Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `b2b_group_created` | Группа создана | `company_name`, `employee_count` | FR-011 |
| `b2b_invite_sent` | Приглашение отправлено | `group_id` | FR-011 |
| `b2b_member_joined` | Сотрудник присоединился | `group_id` | FR-011 |
| `b2b_member_removed` | Сотрудник удалён | `group_id` | FR-011 |
| `b2b_analytics_viewed` | HR просмотрел аналитику | `group_id`, `period` | FR-011 |
| `b2b_report_downloaded` | Отчёт скачан | `group_id`, `format` | FR-011 |

### 3.12 SOS Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `sos_button_pressed` | SOS-кнопка нажата | `screen_source` | FR-014 |
| `sos_situation_selected` | Ситуация выбрана | `situation_type` (panic, insomnia, anxiety, anger, breathing, thoughts) | FR-014 |
| `sos_protocol_started` | Протокол начат | `situation_type`, `mood_before` | FR-014 |
| `sos_step_completed` | Шаг протокола завершён | `situation_type`, `step_number`, `step_type` | FR-014 |
| `sos_protocol_completed` | Протокол завершён | `situation_type`, `mood_before`, `mood_after`, `duration_sec` | FR-014 |
| `sos_protocol_abandoned` | Протокол прерван | `situation_type`, `at_step`, `duration_sec` | FR-014 |
| `sos_crisis_escalated` | Переключение на кризисный протокол | `situation_type`, `crisis_level` | FR-014 |

### 3.13 Therapeutic Bridge Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `bridge_summary_offered` | Саммари предложено пользователю | `psychologist_id`, `booking_id` | FR-015 |
| `bridge_summary_approved` | Пользователь одобрил отправку | `psychologist_id` | FR-015 |
| `bridge_summary_declined` | Пользователь отказался | `psychologist_id` | FR-015 |
| `bridge_summary_viewed_by_psychologist` | Психолог просмотрел саммари | `psychologist_id`, `hours_before_session` | FR-015 |
| `bridge_feedback_submitted` | Психолог оставил обратную связь | `psychologist_id`, `has_homework` | FR-015 |

### 3.14 Mini-Course Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `course_catalog_viewed` | Каталог курсов просмотрен | `category` | FR-016 |
| `course_started` | Курс начат | `course_id`, `category`, `total_lessons` | FR-016 |
| `lesson_started` | Урок начат | `course_id`, `lesson_number` | FR-016 |
| `lesson_completed` | Урок завершён | `course_id`, `lesson_number`, `quiz_score` | FR-016 |
| `course_completed` | Курс завершён | `course_id`, `days_to_complete`, `avg_quiz_score` | FR-016 |
| `course_abandoned` | Курс заброшен | `course_id`, `at_lesson`, `days_since_last` | FR-016 |

### 3.15 Referral Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `referral_link_generated` | Ссылка сгенерирована | `channel` (link, qr, share) | FR-017 |
| `referral_link_shared` | Ссылка отправлена | `share_method` | FR-017 |
| `referral_signup_completed` | Реферал зарегистрировался | `referrer_id_hash` | FR-017 |
| `referral_bonus_activated` | Бонус активирован | `bonus_type` (referrer, referred), `days_premium` | FR-017 |
| `referral_limit_reached` | Лимит бонусов достигнут | `monthly_count` | FR-017 |

### 3.16 Gamification Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `tree_viewed` | Дерево здоровья просмотрено | `tree_level`, `total_leaves`, `total_flowers` | FR-018 |
| `tree_growth_triggered` | Рост дерева | `action_type` (diary, exercise, meditation, chat, sos), `growth_type` (leaf, flower, trunk, root) | FR-018 |
| `achievement_unlocked` | Достижение открыто | `achievement_id`, `achievement_name` | FR-018 |
| `achievement_shared` | Достижение расшарено | `achievement_id`, `share_channel` | FR-018 |
| `streak_updated` | Серия обновлена | `streak_type` (diary, exercise, meditation), `current_days`, `is_record` | FR-018 |
| `streak_broken` | Серия прервана | `streak_type`, `previous_days` | FR-018 |
| `weekly_progress_viewed` | Еженедельный отчёт просмотрен | `tree_growth_percent`, `achievements_count` | FR-018 |

### 3.17 System Events

| Event | Описание | Свойства | FR |
|-------|----------|----------|-----|
| `limit_warning_sent` | Предупреждение о лимите | `limit_type`, `percentage`, `current_value` | FR-013 |
| `limit_reached` | Лимит достигнут | `limit_type`, `action_taken` | FR-013 |
| `graceful_degradation_activated` | Деградация активирована | `reason`, `affected_features` | FR-013 |
| `error_occurred` | Ошибка в системе | `error_type`, `component`, `severity` | — |
| `api_call_made` | Вызов LLM API | `provider`, `model`, `tokens`, `cost_rub` | — |

---

## 4. Dashboards

### 4.1 Executive Dashboard

| Виджет | Метрики | Обновление |
|--------|---------|------------|
| MAU / DAU / WAU | Активные пользователи | Real-time |
| MRR | Ежемесячный доход | Ежедневно |
| Conversion Funnel | Sign-up → Onboarding → Chat → Trial → Paid | Ежедневно |
| Retention Curve | D1, D7, D14, D30, D60, D90 | Еженедельно |
| CSAT / NPS | Удовлетворённость | Еженедельно |
| Crisis Dashboard | Кризисные срабатывания, время реакции | Real-time |

### 4.2 Product Dashboard

| Виджет | Метрики | Обновление |
|--------|---------|------------|
| Feature Usage | % пользователей по фичам | Ежедневно |
| Chat Metrics | Сессий/день, длительность, % КПТ-техник | Ежедневно |
| Diary Metrics | Записей/день, % с ИИ-инсайтами | Ежедневно |
| Exercise Metrics | Начато vs завершено, категории | Ежедневно |
| Marketplace Metrics | Просмотры → Записи → Отзывы | Еженедельно |
| Paywall Analysis | Показов → Trials → Paid | Ежедневно |

### 4.3 Health Outcomes Dashboard

| Виджет | Метрики | Обновление |
|--------|---------|------------|
| PHQ-9 / GAD-7 Distribution | Распределение баллов | Ежемесячно |
| PHQ-9 / GAD-7 Change | Динамика за 8 недель | Ежемесячно |
| Emotion Trends | Агрегированные эмоции по дневнику | Еженедельно |
| Wearables Stress | Средний уровень стресса (HRV) | Ежедневно |
| Crisis Events | Количество, уровни, исходы | Real-time |

### 4.4 Revenue Dashboard

| Виджет | Метрики | Обновление |
|--------|---------|------------|
| MRR by Plan | Standard / Premium / B2B | Ежедневно |
| Churn Analysis | Причины оттока, cohort analysis | Ежемесячно |
| LTV / CAC | Соотношение | Ежемесячно |
| Marketplace Revenue | Комиссии с записей | Еженедельно |
| LLM Costs | Расходы на API по провайдерам | Real-time |

### 4.5 Safety Dashboard (Real-time)

| Виджет | Метрики | Обновление |
|--------|---------|------------|
| Active Crisis Events | Текущие кризисные ситуации | Real-time |
| Detection Accuracy | Precision / Recall | Ежедневно |
| Response Time | Среднее время эскалации | Real-time |
| Operator Availability | Доступность дежурных | Real-time |
| Audit Log | Логи всех кризисных событий | Real-time |

---

## 5. Инструменты

### 5.1 Стек аналитики

| Инструмент | Назначение | Развёртывание |
|-----------|-----------|---------------|
| **Prometheus** | Системные метрики, мониторинг | Self-hosted |
| **Grafana** | Dashboards, визуализация | Self-hosted |
| **PostgreSQL** | Хранение событий (audit_log) | Self-hosted |
| **Django Signals** | Генерация событий | Backend |
| **APScheduler** | Агрегация метрик, отчёты | Backend |

### 5.2 Реализация (AuditLogService)

Все события трекаются через `AuditLogService` (см. `rules/04-logging.md`):
- Логирование в БД (AuditLog модель)
- Файловые логи (ротация 10MB, 5 бэкапов)
- Retention: 90 дней в БД
- Admin-интерфейс для просмотра

---

## 6. A/B Tests (план)

### 6.1 Запланированные эксперименты

| ID | Гипотеза | Варианты | Метрика | Размер выборки |
|----|---------|----------|---------|----------------|
| **AB-001** | Длина онбординга влияет на completion | 3 шага vs 4 шага | Onboarding completion rate | 1000/вариант |
| **AB-002** | Время предложения trial влияет на конверсию | После 1-й vs 3-й сессии | Trial activation rate | 2000/вариант |
| **AB-003** | Сравнение с ценой психолога в paywall | С/без anchoring | Free→Paid conversion | 2000/вариант |
| **AB-004** | Время push-напоминания о дневнике | 21:00 vs 20:00 vs 22:00 | Diary entry rate | 1000/вариант |
| **AB-005** | Голос ИИ (мужской vs женский) | 2 голоса | Voice session duration, CSAT | 500/вариант |

---

## 7. Data Privacy

### 7.1 Правила трекинга

| Правило | Описание |
|---------|----------|
| **No PII in events** | Никогда не включать текст сообщений, имена, email в event properties |
| **Hashed user_id** | Использовать хэш Telegram ID, не сырой ID |
| **ФЗ-152** | Все данные хранятся в РФ |
| **Consent** | Трекинг активируется после согласия пользователя |
| **Right to delete** | При удалении аккаунта — удаление всех event-данных |
| **B2B anonymity** | HR видит только агрегированные данные (порог 10 человек) |
| **Audit log** | Все запросы к данным логируются |

---

*Документ создан: Analytics Agent | Дата: 2026-02-04 | Обновлён: 2026-02-04 (v1.1 — +30 событий для SOS, терап. мост, мини-курсы, реферальная, геймификация)*
