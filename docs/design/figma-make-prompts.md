---
title: "Промпты для Figma Make — Emotional Balance"
created_by: "Orchestrator Agent (делегировано UI Agent + UX Agent)"
created_at: "2026-02-04"
version: "1.0"
status: "ready"
purpose: "Последовательные промпты для создания концепт-версии проекта в Figma Make"
related_to:
  - "context/project-brief.yaml"
  - "docs/discovery/prd.md"
  - "docs/design/design-foundations.md"
  - "docs/design/user-flows.md"
  - "docs/design/wireframes.md"
---

# Промпты для Figma Make — Emotional Balance

## Инструкция по использованию

1. Промпты выполняются **строго последовательно** — от #01 до #30
2. Каждый промпт создаёт **отдельный экран или группу экранов**
3. Перед началом убедитесь, что в Figma настроен **Mobile frame: iPhone 14 Pro (393×852)**
4. После создания каждого экрана проверяйте визуал и при необходимости корректируйте
5. Все экраны должны быть связаны **протоптайпинг-ссылками** (connections)

## Общий дизайн-контекст (копировать в каждый промпт при необходимости)

```
Design context for ALL screens:
- App name: "Emotional Balance" (display: "Нейро-Психолог 24/7")
- Platform: Mobile-first (Telegram WebApp), frame 393x852
- Design style: Modern 2026, organic, warm, nature-inspired — NOT clinical/medical
- Visual metaphor: "Garden of Growth" — soft, rounded, breathing
- Font: Inter (Google Fonts), all text in Russian language
- Primary color (Sage Green): #5F9A63 (buttons, links, accents)
- Secondary color (Warm Blue): #5289AB (AI chat, info blocks)
- Accent color (Soft Lavender): #8477B4 (achievements, meditation, premium)
- SOS color (Warm Coral): #DE5438 (SOS button, crisis elements)
- Background: #FAFAF8 (warm off-white, NOT pure white)
- Card background: #FFFFFF with shadow 0 1px 3px rgba(0,0,0,0.04)
- Text primary: #262624, Text secondary: #737370
- Border radius: buttons 8px, cards 8px, pills/chips 9999px, SOS button 9999px (circle)
- Spacing: 16px page padding, 24px section gap, 8px element gap
- Bottom Tab Bar: 4 tabs — Главная (home icon), Чат (chat bubble), Дневник (book), Ещё (menu/burger)
- SOS FAB: 56x56px circle, #DE5438, bottom-right corner, always visible
- All icons: outline style (Lucide or Heroicons), 24px default
- Animations concept: gentle, organic, never jarring
- Accessibility: WCAG AA, touch targets min 44x44px, SOS 56x56px
```

---

## ЧАСТЬ 1: ЛЕНДИНГ (Главная страница сайта)

---

### Промпт #01 — Hero-секция лендинга

```
Design a hero section for a modern Russian-language landing page for "Emotional Balance" — an AI-powered 24/7 mental health support platform accessed via Telegram.

Frame: Desktop 1440x900, with mobile variant 393x852.

Hero section includes:
- Top navigation bar: logo "Emotional Balance" (leaf/growth icon + text) on left, nav links "Возможности", "Как это работает", "Тарифы", "Для бизнеса", "Отзывы" in center, CTA button "Начать бесплатно" (Sage Green #5F9A63, rounded 8px) on right
- Large headline: "Нейро-Психолог 24/7" (bold, 48-60px, color #262624)
- Subheadline: "ИИ-платформа психологической поддержки с методами КПТ. Доступна 24/7 через Telegram. Безопасно. Конфиденциально. Эффективно." (18-20px, color #737370)
- Two CTA buttons side by side: "Начать бесплатно" (primary, #5F9A63 bg, white text) and "Узнать больше" (outline, #5F9A63 border)
- Right side: mockup of phone showing the app interface (Telegram WebApp with chat screen, sage green accents, AI chat bubbles)
- Background: warm gradient from #FAFAF8 to #F0F6F0 (Sage Mist), subtle leaf pattern at 3% opacity
- Trust badges below CTA: "🔒 Данные в РФ (ФЗ-152)", "🧠 Методы КПТ", "📱 Через Telegram", "⏰ 24/7"
- Floating decorative elements: soft gradient circles, leaf silhouettes at low opacity

Style: 2026 modern, organic, warm — NOT clinical. Think wellness brand meets tech. Generous whitespace, soft shadows, rounded corners everywhere.
```

---

### Промпт #02 — Секция проблемы и статистики

```
Design a "Problem" section for the Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide, scrollable section.

Section includes:
- Section title: "Почему это важно" (centered, 36px bold, #262624)
- Subtitle: "15 миллионов россиян страдают от тревожности и депрессии" (20px, #737370)
- 4 problem cards in a row (responsive grid, 2 cols on tablet, 1 on mobile):
  Card 1: Icon 💰 + "Финансовый барьер" + "Сессия у психолога: 3 000–7 000 ₽. Недоступно для 70%+ населения"
  Card 2: Icon ⏰ + "Временной барьер" + "Запись за дни и недели. Помощь недоступна в момент кризиса"
  Card 3: Icon 📍 + "Географический барьер" + "5 психологов на 100 000 человек в регионах"
  Card 4: Icon 🤐 + "Стигматизация" + "60% не обращаются из-за страха осуждения"
- Each card: white bg #FFFFFF, rounded 12px, soft shadow, sage green icon accent, 24px padding
- Below cards: large stat highlight: "Emotional Balance решает все 4 барьера одновременно" in a sage green gradient card (#F0F6F0 to #D9EAD9)
- Background: #FAFAF8
- Decorative: subtle wave divider between sections

Style: Empathetic, data-driven, not scary. Warm tones, soft illustrations or icons.
```

---

### Промпт #03 — Секция возможностей (все функции)

```
Design a comprehensive "Features" section for Emotional Balance landing page. Russian language. This is the MAIN feature showcase — show ALL platform capabilities.

Frame: Desktop 1440px wide section.

Section title: "Всё для вашего эмоционального здоровья" (centered, 36px bold)
Subtitle: "Полная экосистема психологической поддержки в одном приложении"

Feature grid — 6 main feature cards (3x2 grid, each card 400px wide):

Card 1 — "ИИ-психолог 24/7":
- Icon: chat bubble with brain
- "Текстовый и голосовой чат с ИИ на базе российских LLM. КПТ-протоколы, streaming-ответы, сохранение контекста между сессиями. 5 бесплатных сессий в день."
- Mini mockup: phone with AI chat interface

Card 2 — "Голосовые сессии":
- Icon: microphone with waves
- "Говорите голосом — ИИ слушает и отвечает. Собственная технология распознавания и синтеза речи. Выбор голоса: мужской/женский."
- Mini mockup: voice recording waveform

Card 3 — "Дневник эмоций":
- Icon: open book with heart
- "Ежедневный трекинг эмоций с палитрой из 8 эмоций. ИИ-анализ паттернов, триггеров и корреляций. Визуализация графиков за неделю/месяц."
- Mini mockup: emotion picker with emoji grid

Card 4 — "КПТ-упражнения":
- Icon: puzzle piece with checkmark
- "Библиотека адаптивных упражнений: когнитивное реструктурирование, поведенческая активация, экспозиция. ИИ подбирает под ваше состояние."
- Mini mockup: CBT step wizard

Card 5 — "SOS-протоколы":
- Icon: heart-shield (warm coral accent #DE5438)
- "Мгновенная помощь при панике, тревоге, бессоннице. Дыхательные техники 4-7-8, grounding 5-4-3-2-1, прогрессивная мышечная релаксация. Бесплатно на всех тарифах."
- Mini mockup: breathing animation circle

Card 6 — "Детектор кризисных состояний":
- Icon: shield with heart
- "Автоматическое распознавание суицидальных намерений. Мгновенная связь с горячей линией 8-800-2000-122. Нельзя отключить. Работает всегда."
- Mini mockup: crisis overlay screen

Cards style: white bg, rounded 12px, soft shadow on hover (elevation effect), sage green icon tint, 24px padding inside. Hover state: slight scale up + deeper shadow.

Background: alternating #FAFAF8 and #F0F6F0 subtle gradient
```

---

### Промпт #04 — Секция дополнительных возможностей

```
Design an "Additional Features" section for Emotional Balance landing page. Russian language. These are secondary but important features.

Frame: Desktop 1440px wide.

Section title: "И это ещё не всё" (centered, 30px bold)

Feature list — alternating left-right layout (image + text, zigzag pattern):

Block 1 (image left, text right):
- Image: phone mockup showing meditation player with breathing circle animation
- Title: "Медитации и дыхательные практики"
- Text: "Каталог медитаций по категориям: расслабление, сон, тревога, фокус, body-scan. Дыхательные техники с визуальной анимацией. Выбор длительности: 3, 5, 10, 15, 20 минут. Фоновые звуки: природа, дождь, океан."
- Badge: "Premium"

Block 2 (text left, image right):
- Image: phone mockup showing psychologist profile with rating and booking calendar
- Title: "Маркетплейс психологов"
- Text: "Каталог верифицированных психологов с фильтрами по специализации, цене, рейтингу. Онлайн-запись, видео-консультации, оплата через YooKassa. Рейтинг и отзывы. Скидка 5-10% для подписчиков."

Block 3 (image left, text right):
- Image: phone mockup showing wearable data dashboard (heart rate, stress level, sleep)
- Title: "Интеграция с носимыми устройствами"
- Text: "Подключите Apple Watch или Mi Band. Мониторинг пульса, вариабельности сердечного ритма (HRV), качества сна. Push-уведомление при повышенном стрессе с предложением дыхательной практики."
- Badge: "Premium"

Block 4 (text left, image right):
- Image: phone mockup showing gamification tree growing with leaves and flowers
- Title: "Терапевтическая геймификация"
- Text: "Дерево эмоционального здоровья растёт вместе с вами. Листья за дневник, цветы за медитации, рост ствола за чат-сессии. Достижения: '7 дней осознанности', 'Мастер дыхания'. Нет наказания за пропуск."

Block 5 (image left, text right):
- Image: phone mockup showing mini-course lesson with text and quiz
- Title: "Мини-курсы самообразования"
- Text: "Короткие обучающие модули по 5-10 минут: основы КПТ, управление тревогой, эмоциональный интеллект, здоровый сон. Формат: текст + иллюстрации + тест + практика."

Block 6 (text left, image right):
- Image: phone showing therapeutic bridge summary for psychologist
- Title: "Терапевтический мост ИИ↔Психолог"
- Text: "ИИ генерирует структурированное саммари ваших сессий для живого психолога: темы, эмоциональные тренды, прогресс по упражнениям. Психолог получает перед консультацией. Вы контролируете что отправить."

Each block: generous whitespace, text max-width 500px, images with soft shadow and rounded corners 16px.
Background: #FAFAF8 with subtle sage green gradient accents
```

---

### Промпт #05 — Секция "Как это работает"

```
Design a "How It Works" section for Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide.

Section title: "Как начать" (centered, 36px bold)
Subtitle: "3 простых шага до вашего цифрового психолога"

3 steps in a horizontal flow with connecting arrows/lines:

Step 1:
- Large number "1" in sage green circle
- Icon: Telegram logo
- Title: "Откройте бот в Telegram"
- Description: "Найдите @EmotionalBalanceBot или перейдите по ссылке. Нажмите 'Начать'. Авторизация — одна кнопка."
- Time: "30 секунд"

Step 2:
- Large number "2" in sage green circle
- Icon: clipboard with checkmarks
- Title: "Пройдите мини-опросник"
- Description: "4 коротких вопроса: настроение, проблемы, цели, триггеры. ИИ создаст персональный профиль и подберёт рекомендации."
- Time: "2 минуты"

Step 3:
- Large number "3" in sage green circle
- Icon: sparkles/magic wand
- Title: "Начните чат с ИИ-психологом"
- Description: "Расскажите что вас беспокоит. ИИ применит методы КПТ, предложит упражнения и поддержит в любое время дня и ночи."
- Time: "Мгновенно"

Below steps: large CTA card with gradient background (#F0F6F0 to #D9EAD9):
- Text: "Первые 5 сессий бесплатно. Без карты. Без обязательств."
- CTA button: "Начать бесплатно" (sage green, large, 56px height)
- Secondary text: "Уже 50 000+ пользователей доверяют нам"

Connecting elements between steps: dotted curved line in sage green 200 (#B5D6B5)
Background: #FAFAF8
```

---

### Промпт #06 — Секция тарифов

```
Design a "Pricing" section for Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide.

Section title: "Тарифные планы" (centered, 36px bold)
Subtitle: "Выберите подходящий план. SOS-помощь бесплатна на всех тарифах. ❤️"

3 pricing cards side by side (equal height, middle one elevated):

Card 1 — FREE (0 ₽/мес):
- Header: "Бесплатный" on light gray bg
- Price: "0 ₽" large + "/месяц"
- Feature list with checkmarks (green) and crosses (gray):
  ✅ ИИ-чат: 5 сообщений/день
  ✅ Дневник эмоций: 1 запись/день
  ✅ КПТ-упражнение: 1 в день
  ✅ 1 базовая медитация
  ✅ Маркетплейс: просмотр каталога
  ✅ SOS-протоколы (всегда)
  ✅ Детектор кризисов (всегда)
  ❌ Голосовые сессии
  ❌ Wearables
  ❌ ИИ-аналитика дневника
- CTA: "Начать бесплатно" (outline button)
- Border: neutral #E8E8E3

Card 2 — STANDARD (990 ₽/мес) — RECOMMENDED:
- Badge: "Популярный" (sage green ribbon/badge)
- Header: "Стандартный" on sage green bg, white text
- Price: "990 ₽" large + "/месяц"
- Trial: "7 дней бесплатно"
- Feature list:
  ✅ ИИ-чат: без ограничений
  ✅ Голосовые сессии: 30 мин/день
  ✅ Дневник эмоций: без ограничений + ИИ-анализ
  ✅ КПТ-упражнения: без ограничений + программы
  ✅ Базовый каталог медитаций
  ✅ Маркетплейс: запись + скидка 5%
  ✅ Мини-курсы
  ✅ Геймификация
  ✅ Реферальная программа
  ❌ Wearables
  ❌ Полный каталог медитаций
- CTA: "Попробовать 7 дней бесплатно" (primary filled button, sage green)
- Border: sage green #5F9A63, elevated shadow
- Scale: slightly larger than other cards (1.05x)

Card 3 — PREMIUM (2 990 ₽/мес):
- Header: "Премиум" on lavender bg (#9B8EC4)
- Price: "2 990 ₽" large + "/месяц"
- Trial: "7 дней бесплатно"
- Feature list:
  ✅ Всё из Стандартного
  ✅ ИИ-чат: приоритет обработки
  ✅ Голосовые сессии: без ограничений
  ✅ Полный каталог медитаций + фоновые звуки
  ✅ Расширенная аналитика
  ✅ Маркетплейс: скидка 10% + приоритет
  ✅ Apple Watch + Mi Band
  ✅ Терапевтический мост
  ✅ Эксклюзивные КПТ-упражнения
- CTA: "Попробовать 7 дней бесплатно" (lavender filled button)
- Border: lavender #9B8EC4

Cards style: white bg, rounded 16px, 32px padding, generous list spacing
Below cards: "Все цены включают НДС. Отмена в любой момент. Оплата через YooKassa."
Background: #FAFAF8

Also include a small "B2B" teaser below:
- Card: "Для корпоративных клиентов"
- Text: "Wellness-программы для команд от 10 человек. Анонимная аналитика, корпоративный тариф, управление через Telegram."
- CTA: "Запросить демо" (outline button)
```

---

### Промпт #07 — Секция сравнения с конкурентами

```
Design a "Comparison" section for Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide.

Section title: "Почему Emotional Balance" (centered, 36px bold)
Subtitle: "Сравните с другими решениями"

Comparison table:
- Columns: Emotional Balance (highlighted) | Zigmund/YouTalk | Replika/Woebot | Медитации (Calm) | Живой психолог
- Rows:
  1. Доступность 24/7: ✅ | ❌ Только по записи | ✅ | ✅ | ❌
  2. На русском языке: ✅ | ✅ | ❌ | Частично | ✅
  3. Соответствие ФЗ-152: ✅ Данные в РФ | ✅ | ❌ Данные за рубежом | ❌ | ✅
  4. КПТ-протоколы: ✅ Адаптивные | ❌ | Базовые | ❌ | ✅
  5. Стоимость/мес: от 0 ₽ | от 3 000 ₽/сессия | от $9.99 | от $14.99 | от 12 000 ₽
  6. Голосовые сессии: ✅ | ✅ Живой голос | ❌ | ❌ | ✅
  7. Дневник эмоций: ✅ + ИИ-анализ | ❌ | Базовый | ❌ | ❌
  8. Детектор кризисов: ✅ Автоматический | ❌ | ❌ | ❌ | Субъективный
  9. Wearables: ✅ Apple Watch, Mi Band | ❌ | ❌ | ❌ | ❌
  10. Маркетплейс психологов: ✅ Встроенный | ✅ | ❌ | ❌ | N/A

Emotional Balance column: sage green highlight background (#F0F6F0), checkmarks in sage green
Other columns: neutral background
✅ = green checkmark, ❌ = gray cross/dash

Style: clean table with alternating row colors, rounded corners on table container, soft shadow
Background: #FAFAF8
```

---

### Промпт #08 — Секция безопасности и доверия

```
Design a "Security & Trust" section for Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide.

Section title: "Безопасность и конфиденциальность" (centered, 36px bold)
Subtitle: "Ваши данные под надёжной защитой"

4 trust cards in a grid (2x2):

Card 1: 🔒 "ФЗ-152 Compliance"
- "Все данные хранятся исключительно на серверах в России. Полное соответствие Федеральному закону о персональных данных."

Card 2: 🛡️ "Шифрование"
- "AES-256 шифрование данных at rest. TLS 1.3 для передачи данных. Ваши записи и диалоги защищены."

Card 3: 🤖 "Российские LLM"
- "Используем GigaChat и YandexGPT — российские языковые модели. Данные не покидают территорию РФ."

Card 4: ⚠️ "Этичный ИИ"
- "ИИ не заменяет врача. Обязательный disclaimer. Детектор кризисов нельзя отключить. Безопасность превыше всего."

Below cards — disclaimer banner:
- Muted background (#F4F4F1)
- Text: "Emotional Balance — это wellness-платформа, а не медицинское устройство. ИИ-помощник не ставит диагнозы и не назначает лечение. При серьёзных проблемах обратитесь к квалифицированному специалисту."
- Icon: info circle

Cards style: white bg, rounded 12px, 24px padding, icon in sage green circle at top
Background: gradient from #FAFAF8 to #EFF5F9 (slight blue tint for trust feeling)
```

---

### Промпт #09 — Секция персон и отзывов

```
Design a "Testimonials & Personas" section for Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide.

Section title: "Кому подходит Emotional Balance" (centered, 36px bold)

4 persona cards in horizontal scroll (snap scroll on mobile):

Card 1 — "Аня, 28 лет, Москва":
- Avatar: female illustration, friendly
- Quote: "Панические атаки часто начинаются ночью, когда помощь недоступна. С Emotional Balance я могу получить поддержку в 3 часа ночи — и это спасает."
- Tag: "Тревожность"
- Use case: ИИ-чат ночью + SOS-протоколы при панике

Card 2 — "Дмитрий, 35 лет, Екатеринбург":
- Avatar: male illustration, professional look
- Quote: "После 12 часов на работе сил на психолога не остаётся. 15-минутная КПТ-сессия с ИИ в метро — это именно то, что нужно."
- Tag: "Профессиональное выгорание"
- Use case: КПТ-упражнения + дневник эмоций

Card 3 — "Марина, 40 лет, HR-директор, СПб":
- Avatar: female illustration, business
- Quote: "Подключила команду из 50 человек. Анонимная аналитика показала что уровень стресса упал на 30% за 2 месяца. ROI очевиден."
- Tag: "B2B Wellness"
- Use case: Корпоративное управление + аналитика

Card 4 — "Олег, 32 года, Тольятти":
- Avatar: male illustration, casual
- Quote: "В нашем городе 2 психолога и оба заняты на месяц вперёд. Emotional Balance дал мне доступ к поддержке и помог записаться к онлайн-специалисту."
- Tag: "Географический барьер"
- Use case: Маркетплейс + дневник + ИИ-чат

Cards style: white bg, rounded 16px, soft shadow, left colored border (sage green), 24px padding, quote marks decorative
Background: #FAFAF8 with subtle lavender gradient at section edges
```

---

### Промпт #10 — Секция B2B и партнёрства

```
Design a "B2B / Corporate" section for Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide.

Section title: "Для корпоративных клиентов" (centered, 36px bold)
Subtitle: "Wellness-программы для здоровья ваших сотрудников"

Split layout:
Left side (50%):
- Headline: "Снижайте выгорание. Повышайте продуктивность."
- Bullet list with icons:
  ✅ Групповое управление через Telegram (от 10 сотрудников)
  ✅ Анонимная агрегированная аналитика для HR
  ✅ Метрики: % активных, средний стресс, количество сессий
  ✅ Ежемесячный PDF-отчёт
  ✅ Premium-доступ для каждого сотрудника
  ✅ Оплата по invoice, корпоративный тариф
  ✅ Настраиваемые лимиты использования
  ✅ Брендирование (логотип компании)
- Two CTA buttons: "Запросить демо" (primary) + "Скачать презентацию" (outline)

Right side (50%):
- Mockup: HR-dashboard showing anonymized team analytics
  - Cards: "32 участника", "Средний стресс: 4.2/10", "Активность: 78%"
  - Bar chart: "Стресс по отделам"
  - Line chart: "Динамика за месяц"
  - Note: "Все данные анонимизированы"

Below:
- 3 metric cards inline:
  - "⬇️ -30% уровень стресса за 2 месяца"
  - "⬆️ +25% вовлечённость команды"
  - "💰 ROI: 3x окупаемость программы"

Background: #EFF5F9 (light blue) to differentiate from B2C sections
Style: professional, clean, data-driven
```

---

### Промпт #11 — Секция Out of Scope / Roadmap

```
Design a "Coming Soon / Roadmap" section for Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide.

Section title: "Скоро в Emotional Balance" (centered, 30px bold)
Subtitle: "Мы постоянно развиваемся"

Timeline/roadmap layout (vertical on mobile, horizontal on desktop):

Phase 1 — "v1.0 — Запуск" (current, highlighted sage green):
- ✅ ИИ-чат 24/7 + голосовые сессии
- ✅ Дневник эмоций + ИИ-аналитика
- ✅ КПТ-упражнения + SOS-протоколы
- ✅ Маркетплейс психологов
- ✅ Медитации и дыхание
- ✅ B2B wellness
- ✅ Apple Watch + Mi Band

Phase 2 — "v1.5 — Расширение":
- 🔮 ACT и DBT терапевтические подходы
- 🔮 Предиктивная аналитика кризисов
- 🔮 Voice sentiment analysis
- 🔮 Peer-support сообщество

Phase 3 — "v2.0 — Платформа":
- 🚀 Нативные iOS и Android приложения
- 🚀 Веб-версия вне Telegram
- 🚀 Групповая терапия
- 🚀 Видео-аватар ИИ
- 🚀 Работа с несовершеннолетними

Phase 4 — "v3.0 — Экспансия":
- 🌍 Международная экспансия
- 🌍 Интеграция с ЭМК (электронные медкарты)
- 🌍 Дополнительные языки

Style: timeline with dots and connecting lines, current phase highlighted, future phases with dashed lines
Background: #FAFAF8 with subtle lavender gradient (#F3F0F8)
```

---

### Промпт #12 — Footer лендинга и финальный CTA

```
Design a "Final CTA + Footer" section for Emotional Balance landing page. Russian language.

Frame: Desktop 1440px wide.

Final CTA block:
- Large gradient card (sage green to warm blue gradient: #D9EAD9 -> #D6E7F0), rounded 20px
- Headline: "Начните заботиться о себе прямо сейчас" (white or dark text, 36px bold)
- Subtext: "Первые 5 сессий бесплатно. 7 дней Premium при регистрации по реферальной ссылке."
- Large CTA button: "Открыть в Telegram" (white bg, sage green text, 56px height, rounded full)
- Social proof: "50 000+ пользователей | 4.8★ средняя оценка | 95%+ точность детектора кризисов"

Footer:
- Dark background (#262624)
- Logo "Emotional Balance" + tagline "Нейро-Психолог 24/7"
- 4 columns:
  Column 1 — "Продукт": ИИ-чат, Дневник, Упражнения, Медитации, SOS, Маркетплейс
  Column 2 — "Для бизнеса": B2B программы, Демо, Кейсы, Партнёрство
  Column 3 — "Поддержка": Помощь, FAQ, Контакты, Горячая линия 8-800-2000-122
  Column 4 — "Юридическое": Политика конфиденциальности, Условия использования, ФЗ-152, Cookies
- Social links: Telegram, VK
- Bottom bar: "© 2026 Emotional Balance. Не является медицинским устройством." + "Данные хранятся в РФ 🇷🇺"

Footer text color: #A8A8A3, links: #8FC28F on hover
```

---

## ЧАСТЬ 2: ПРИЛОЖЕНИЕ — ОНБОРДИНГ

---

### Промпт #13 — Экраны онбординга (Welcome + Disclaimer)

```
Design 3 mobile screens for Emotional Balance Telegram WebApp onboarding flow. Russian language. Frame: 393x852 (iPhone 14 Pro).

Screen 1 — Welcome (WF-001):
- Centered layout, no navigation bars
- Logo: leaf/growth icon, 80x80px, sage green
- App name: "Нейро-Психолог" (24px bold)
- Tagline: "Твоя поддержка 24/7. Безопасно. Конфиденциально." (16px, #737370)
- Page dots: 1 filled + 3 empty (indicating 4 onboarding steps)
- Bottom: Telegram MainButton "Начать" (sage green, full width, 48px)
- Small link: "Условия использования" (14px, underline)
- Background: warm gradient #FAFAF8 to #F0F6F0

Screen 2 — Age Verification (WF-002):
- BackButton top-left
- Warning icon/emoji 18+ (large, centered)
- Text: "Это приложение предназначено для людей старше 18 лет" (16px)
- Primary button: "Мне есть 18 лет" (sage green, full width)
- Secondary button: "Мне нет 18 лет" (outline, full width)
- Below: "Телефон доверия для детей и подростков: 8-800-2000-122" (tappable link, warm coral accent)
- No bottom tab bar, no SOS

Screen 3 — Disclaimer (added):
- BackButton top-left
- Icon: shield with checkmark
- Title: "Важная информация" (20px bold)
- Text block: "Emotional Balance — это wellness-платформа психологической поддержки. Это НЕ замена профессиональной медицинской помощи. ИИ-помощник не ставит диагнозы и не назначает лечение." (16px)
- Checkbox: "☐ Я прочитал(а) и принимаю условия использования и политику обработки персональных данных (ФЗ-152)" (with tappable link)
- Checkbox: "☐ Мне есть 18 лет"
- MainButton "Принимаю" (disabled until both checked, then sage green)
- No bottom tab bar, no SOS

All 3 screens: clean, calming, sage green accents, Inter font, rounded elements.
```

---

### Промпт #14 — Экраны опросника (4 шага)

```
Design 4 mobile onboarding quiz screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Goal Selection (WF-003):
- BackButton + step indicator "Шаг 1 из 4"
- Progress bar: 25% filled (sage green)
- Title: "Что тебя сейчас беспокоит?" (20px bold)
- Subtitle: "Выбери 1-3 темы" (14px, #737370)
- Chip grid (2 columns, 8 chips, 44px height each, rounded full, outline style, selected = filled sage green + white text + checkmark):
  😟 Тревога | 😰 Стресс | 😴 Сон | 💔 Отношения
  🙁 Самооценка | 😔 Настроение | 💼 Работа | 👨‍👩‍👧 Семья
- Counter: "Выбрано: 2 из 3"
- MainButton "Продолжить" (disabled until >= 1 selected)

Screen 2 — Mood Assessment (WF-004):
- BackButton + "Шаг 2 из 4"
- Progress bar: 50%
- Title: "Как ты себя чувствуешь прямо сейчас?" (20px bold)
- 5 emoji scale (48x48 each, horizontal): 😢 😟 😐 🙂 😊 with numbers 1-5
- Slider synced with emoji (gradient: red -> yellow -> green)
- Labels: "Плохо" (left) — "Отлично" (right)
- Radio question: "Как давно ты чувствуешь себя так?"
  ○ Несколько дней | ○ Несколько недель | ○ Месяц и больше | ○ Не хочу отвечать
- MainButton "Продолжить"

Screen 3 — Goals (added):
- BackButton + "Шаг 3 из 4"
- Progress bar: 75%
- Title: "Чего ты хочешь достичь?" (20px bold)
- Chip grid (2 cols, selectable, multi-select):
  🧘 Снизить тревогу | 😴 Улучшить сон
  💪 Справиться со стрессом | 🧠 Понять свои эмоции
  ❤️ Улучшить отношения | 📈 Повысить самооценку
- MainButton "Продолжить"

Screen 4 — Triggers (added):
- BackButton + "Шаг 4 из 4"
- Progress bar: 100%
- Title: "Что чаще всего вызывает стресс?" (20px bold)
- Chip grid:
  💼 Работа | 👥 Люди | 🏠 Дом | 💰 Финансы
  📱 Соцсети | 🌙 Вечер/ночь | 🚗 Дорога | 🤷 Не знаю
- MainButton "Завершить"

All screens: no bottom tab bar, no SOS (still onboarding). Consistent progress bar, sage green accents, Inter font.
```

---

### Промпт #15 — Выбор тарифа и Feature Tour

```
Design 2 mobile screens for Emotional Balance onboarding. Russian language. Frame: 393x852.

Screen 1 — Tariff Selection:
- BackButton + "Выберите план"
- 3 plan cards (vertical stack, horizontally scrollable on small screens):

  Card "Бесплатный" (neutral border):
  - Price: "0 ₽/мес"
  - Features: "5 сессий/день, 1 запись в дневник, 1 упражнение"
  - Button: "Начать бесплатно" (outline)

  Card "Стандартный" (sage green border, badge "Рекомендуем", slightly elevated):
  - Price: "990 ₽/мес"
  - Trial: "7 дней бесплатно"
  - Features: "Безлимит чат, голос 30 мин/день, полный дневник, все упражнения"
  - Button: "Попробовать бесплатно" (sage green filled)

  Card "Премиум" (lavender border):
  - Price: "2 990 ₽/мес"
  - Trial: "7 дней бесплатно"
  - Features: "Всё + безлимит голос, wearables, полные медитации, приоритет"
  - Button: "Попробовать бесплатно" (lavender filled)

- Bottom text: "❤️ SOS-помощь бесплатна на всех тарифах"

Screen 2 — Feature Tour (WF-005):
- BackButton + "Пропустить" (right)
- Large illustration area (200x200px): showing AI chat interface mockup
- Slide title: "AI-помощник 24/7" (20px bold)
- Description: "Текстовый и голосовой чат с ИИ-психологом. Методы КПТ. Доступен в любое время." (16px, #737370)
- Page dots: 4 dots (1st filled)
- MainButton "Далее"
- Show 4 slides concept: AI Chat, Diary, Exercises, SOS

Both screens: no bottom tab bar (still onboarding flow). Clean, calm design.
```

---

## ЧАСТЬ 3: ПРИЛОЖЕНИЕ — ГЛАВНЫЙ ЭКРАН

---

### Промпт #16 — Главный экран (Home Dashboard)

```
Design a Home Dashboard screen for Emotional Balance app. Russian language. Frame: 393x852.

This is the MAIN screen users see after onboarding. Must feel warm, supportive, personalized.

Top area:
- Header: "Нейро-Психолог" (left) + Settings gear icon (right)
- Greeting: "Привет, Аня! Как ты сегодня?" (time-based, 20px semibold, #262624)

Content (scrollable, vertical stack):

1. Daily Check-in Card (sage green light bg #F0F6F0, rounded 12px):
   - 5 emoji scale (48x48): 😢 😟 😐 🙂 😊
   - Text: "Нажми, чтобы отметить настроение"
   - Tappable, leads to emotion entry

2. Quick Actions (3 circular buttons, 64x64px, in a row):
   - 💬 "Чат" (sage green bg)
   - 📖 "Дневник" (warm blue bg)
   - 🧘 "Практики" (lavender bg)

3. Health Tree Widget Card (white bg, rounded 12px, shadow):
   - Small tree illustration/icon (left)
   - "Уровень 3 — Молодое дерево" (bold)
   - "240/500 XP" + progress bar (48%, sage green)
   - Tappable -> tree detail

4. Streak Card (white bg, rounded 12px):
   - 🔥 "5 дней подряд!" (semibold)
   - "Отличная регулярность!" (14px, #737370)
   - Mini calendar dots for last 7 days

5. AI Tip Card (light blue bg #EFF5F9, rounded 12px):
   - 💡 "Совет дня" (label)
   - "Попробуйте технику 5-4-3-2-1, когда чувствуете нарастающую тревогу..." (14px, truncated)
   - "Подробнее →" link

6. Recommended Action Card (white, rounded 12px):
   - "Рекомендуем для вас" (label)
   - Card: "Дыхание 4-7-8" | "5 мин" | "Снижает тревогу"
   - Button: "Начать" (sage green outline)

Bottom:
- SOS FAB button: 56x56px, #DE5438, circle, "SOS" text + heart icon, bottom-right, elevated shadow, pulse animation indicator
- Bottom Tab Bar (56px): Главная (active, filled icon) | Чат | Дневник | Ещё
  - Tab icons: Home, Chat bubble, Book, Menu
  - Active tab: sage green filled icon + label
  - Inactive: gray outline icon + label

Background: #FAFAF8
All cards: 16px horizontal padding, 12px gap between cards
```

---

### Промпт #17 — Пустое состояние главного экрана

```
Design an Empty State Home screen for Emotional Balance (first login after onboarding). Russian language. Frame: 393x852.

- Header: "Нейро-Психолог" + settings icon
- Greeting: "Привет! Добро пожаловать 👋" (20px semibold)
- Warm illustration: cozy scene with growing seedling (placeholder area, 200x200px, centered)
- Text: "С чего начнём?" (18px bold, centered)

3 action buttons (stacked, full width, 48px height, rounded 8px):
1. "💬 Поговорить с AI-помощником" (Primary CTA, sage green bg, white text)
2. "📖 Записать в дневник" (outline, sage green border)
3. "🧘 Попробовать упражнение" (outline, sage green border)

Tree seedling message (below buttons):
- Small tree seedling icon
- "Ты посадил дерево! 🌱 Оно будет расти вместе с тобой."
- (14px, #737370)

SOS FAB: 56x56px, bottom-right
Bottom Tab Bar: 4 tabs (Главная active)
Background: #FAFAF8

Style: encouraging, warm, not empty — feels like a beginning, not absence.
```

---

## ЧАСТЬ 4: ПРИЛОЖЕНИЕ — AI ЧАТ

---

### Промпт #18 — AI Чат (пустой + активный + думает)

```
Design 3 AI Chat screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Chat Empty (WF-011):
- BackButton + header "AI-помощник"
- AI welcome bubble (left-aligned, with bot avatar circle 32px):
  "Привет! 👋 Я твой AI-помощник. Расскажи, что тебя беспокоит, или выбери тему ниже."
  Small disclaimer: "Не является медицинской услугой" (12px, #A3A39C)
- 4 Suggested prompt cards (tappable, rounded 8px, outline style, 2x2 grid):
  "😟 Меня что-то тревожит"
  "😰 Сильный стресс"
  "😔 Грустно и одиноко"
  "🤔 Хочу разобраться"
- Input bar (bottom, above tab bar):
  - Auto-grow textarea (16px, placeholder "Напишите сообщение...", min 44px height)
  - Microphone button (44x44, right side) — voice input toggle
  - Send button (44x44, sage green, arrow up icon, disabled when empty)
- SOS FAB + Bottom Tab Bar (Чат active)

Screen 2 — Chat Active (WF-012):
- BackButton + "AI-помощник" + history icon (top-right)
- Chat messages alternating:
  AI (left, light gray bg #F4F4F1, rounded 12px with tail, bot avatar):
    "Расскажите подробнее — что именно вызывает тревогу? Когда вы впервые заметили это чувство?"
  User (right, sage green bg #5F9A63, white text, rounded 12px with tail):
    "Последнюю неделю не могу нормально спать. Постоянно думаю о работе и не могу остановить мысли."
  AI: "Понимаю. Навязчивые мысли перед сном — распространённая проблема. Давайте попробуем технику когнитивного реструктурирования..." + timestamp "14:32"
  - Thumbs up/down (24x24) under AI messages
- Input bar with text and buttons
- SOS FAB + Bottom Tab Bar

Screen 3 — Chat AI Thinking (WF-013):
- Same as Screen 2 but with:
  AI typing indicator: bubble with 3 animated dots (●●●), gentle bounce animation
  Input bar: DISABLED (grayed out) while AI generates
  User's last message visible above

All screens: warm chat bg #FAFAF8, smooth bubble corners, clear visual distinction between AI and user messages.
```

---

### Промпт #19 — Голосовой ввод + Лимит чата + История сессий

```
Design 3 additional chat screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Voice Input Mode (WF-014):
- BackButton + "AI-помощник"
- Previous chat messages visible above
- Voice recording overlay card (centered, white bg, rounded 16px, elevated shadow):
  - Real-time waveform visualization (audio bars, sage green)
  - Recording timer: "0:12" (seconds)
  - Red recording dot indicator
  - Two buttons (side by side):
    ✕ Cancel (48x48, gray outline circle)
    ✓ Done (48x48, sage green filled circle)
- Hint text: "Говорите — я слушаю" (14px, centered below overlay)
- SOS FAB + Bottom Tab Bar

Screen 2 — Chat Limit Reached (WF-016):
- BackButton + "AI-помощник"
- Previous messages above (faded/grayed)
- Limit notification card (centered, white bg, rounded 16px, prominent):
  - Chat icon (large, 48px)
  - "Сегодняшние сессии закончились" (18px bold)
  - "Ты использовал 5 из 5 бесплатных сессий" (14px)
  - "Новые сессии завтра в 00:00" (14px, #737370)
  - Timer: "До обновления: 8ч 32м"
  - CTA: "Получить безлимит — 990 ₽/мес" (sage green button, full width)
  - Alternative actions (text links):
    "📖 Записать в дневник" | "🫁 Дыхательное упражнение" | "📚 Мини-курс"
- Input bar HIDDEN
- SOS FAB (always available, even at limit) + Bottom Tab Bar

Screen 3 — Session History (WF-017):
- BackButton + "История сессий"
- Grouped list by date:
  "Сегодня":
    Card: "14:32 — Тревога и сон" | "«Не могу остановить мысли...»" | "12 сообщений" | 😟→🙂
  "Вчера":
    Card: "20:15 — Стресс на работе" | "«Начальник снова...»" | "8 сообщений" | 😰→😐
  "2 февраля":
    Card: "09:00 — Утренняя сессия" | "«Проснулся с тревогой...»" | "15 сообщений" | 😟→🙂
- Each card: white bg, rounded 8px, emoji mood trajectory (start -> end), preview text in quotes
- SOS FAB + Bottom Tab Bar

All screens: consistent chat design language, sage green accents.
```

---

## ЧАСТЬ 5: ПРИЛОЖЕНИЕ — SOS И КРИЗИС

---

### Промпт #20 — SOS-экраны (Safety-Critical)

```
Design 4 SOS/Crisis screens for Emotional Balance. Russian language. Frame: 393x852. These are SAFETY-CRITICAL screens.

Screen 1 — SOS Activated (WF-020):
- FULLSCREEN — no tab bar, no header, no SOS button
- Calming dark background with warm overlay (not pure black — use #2E2E2B with warm coral hint)
- Large heart emoji ❤️ (80x80px, centered)
- Text: "Ты не один. Мы рядом." (24px bold, white/light text)
- 4 action buttons (stacked, full width, 48px height, rounded 8px):
  1. "🫁 Дыхательное упражнение" (Primary, sage green bg)
  2. "📞 Горячая линия 8-800-2000-122" (warm coral bg #DE5438, white text)
  3. "💬 Написать в чат поддержки" (outline, white border)
  4. "👥 Мои доверенные лица" (outline, white border)
- Small "Закрыть" link at bottom (intentionally subtle, 12px, gray)
- Feeling of safety, warmth, no panic triggers

Screen 2 — SOS Breathing Exercise (WF-023):
- Fullscreen immersive (no tab bar)
- BackButton (top-left, white)
- Phase label: "Вдохни..." (24px bold, white, centered)
- Large animated breathing circle: 200x200px, sage green gradient (#7BAE7F center, transparent edge), soft glow shadow
- Phase timer: "Вдох — 4 сек" with countdown "3с" (tabular numbers)
- Cycle counter: "Цикл 2 из 5" (14px, white, below circle)
- Two buttons (bottom):
  "⏸ Пауза" (48px, outline white) | "✓ Завершить" (48px, outline white)
- Background: calming gradient (dark sage green to dark blue: #1A2E1C to #162838)
- Circle animates: expand on inhale, hold, contract on exhale

Screen 3 — Crisis Overlay (WF-021) — NON-DISMISSIBLE:
- FULLSCREEN OVERLAY, dark bg 90% opacity, z-index maximum
- ⚠️ Warning icon (large, warm coral)
- Text: "Важно" (20px bold, white)
- Text: "Я вижу, что вам сейчас очень тяжело. Вы не одиноки. Пожалуйста, обратитесь за помощью." (16px, white)
- 3 buttons (stacked):
  1. "📞 Позвонить: 8-800-2000-122" (LARGE, warm coral bg, white text, 56px height, prominent)
  2. "🫁 Дыхательное упражнение" (sage green outline)
  3. "✓ Мне стало лучше" (small, subtle, with instruction: "Удерживайте 2 секунды")
- NO close button, NO back button, NO swipe-to-dismiss
- This screen cannot be bypassed

Screen 4 — Emergency Contacts (WF-022):
- BackButton + "Экстренные контакты"
- Section "Горячие линии" (3 tappable cards):
  📞 "Телефон доверия: 8-800-2000-122" + "Бесплатно, 24/7"
  📞 "Скорая помощь: 112"
  📞 "Центр экстренной психологической помощи: 8-495-989-50-50"
- Section "Мои доверенные лица":
  Card: "Мама — +7 999 ***-**-12" (masked, tap to call)
  Card: "Друг — +7 916 ***-**-45" (masked, tap to call)
  + Button: "Добавить контакт" (outline, full width)
- SOS FAB + Bottom Tab Bar

Critical design notes: SOS screens must feel safe, not alarming. Use warm coral gently — attract attention without causing panic. Dark backgrounds for immersion and calm.
```

---

## ЧАСТЬ 6: ПРИЛОЖЕНИЕ — ДНЕВНИК ЭМОЦИЙ

---

### Промпт #21 — Дневник (список + новая запись + аналитика)

```
Design 4 Diary screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Diary Timeline (WF-024):
- Header: "Дневник" (left) + Analytics chart icon (right)
- Timeline list grouped by date:
  "Сегодня":
    Card: 😟 "Тревога" | "14:30" | "7/10" | "Опять не мог заснуть, мысли о работе..."
    Card: 😌 "Спокойствие" | "09:15" | "4/10" | "Утренняя медитация помогла..."
  "Вчера":
    Card: 😠 "Злость" | "18:00" | "8/10" | "Конфликт с коллегой..."
  Cards: white bg, rounded 8px, left border colored by emotion, emoji + label + time + intensity + preview text
- FAB "+" button (56x56, sage green, bottom-right) — new entry
- SOS FAB (repositioned to not overlap with "+" — e.g. bottom-left or above "+")
- Bottom Tab Bar (Дневник active)

Screen 2 — Emotion Picker (WF-025, step 1):
- BackButton + "Новая запись"
- Title: "Что ты сейчас чувствуешь?" (20px bold)
- Emotion grid (2 cols x 4 rows, 64x64px each cell):
  😊 Радость | 😌 Спокойствие
  😢 Грусть | 😟 Тревога
  😠 Злость | 😰 Стресс
  😔 Одиночество | 😴 Усталость
  - Each: emoji + label below, tappable, selected = enlarged + sage green highlight border
- Intensity slider (1-10, horizontal, with gradient green-yellow-red):
  Labels: "Слабо" — "Сильно", current value "7/10" displayed
  Slider track: colored gradient, thumb: sage green circle
- MainButton "Далее" (disabled until emotion selected)
- SOS FAB + Bottom Tab Bar

Screen 3 — Text Entry (WF-026, step 2):
- BackButton + "Новая запись"
- Selected emotion summary: 😟 "Тревога — 7/10" (sage green pill badge)
- Title: "Расскажи подробнее" (20px bold)
- Subtitle: "Необязательно, но помогает отследить паттерны" (14px, #737370)
- Textarea: placeholder "Что произошло? О чём ты думаешь?", max 500 chars, auto-grow, counter "0/500"
- Context chips (single-select row): 🏠 Дома | 💼 Работа | 👥 С людьми | 🧑 Один
- Tag chips (multi-select row): сон | работа | семья | здоровье | отношения | финансы | + Другое
- MainButton "Сохранить" (sage green)
- SOS FAB + Bottom Tab Bar

Screen 4 — Diary Analytics (WF-029):
- BackButton + "Аналитика"
- Period toggle: "7 дней" (active) | "30 дней"
- Section "Настроение" — line chart:
  Y-axis: 5 emoji (😢 😟 😐 🙂 😊), X-axis: Пн Вт Ср Чт Пт Сб Вс
  Line: sage green, dots on data points, area fill at 10% opacity
- Section "Частые эмоции" — horizontal bar chart:
  😟 Тревога ████████ 40%
  😰 Стресс ██████ 30%
  😌 Спокойствие ████ 20%
  😊 Радость ██ 10%
  Bars colored by emotion
- Section "Триггеры" — list with percentages:
  💼 Работа — 60%
  🌙 Вечер — 45%
  🧑 Один — 35%
- AI Insight card (lavender bg #F3F0F8): "💡 Вы чаще отмечаете тревогу по вечерам, особенно связанную с работой. Попробуйте вечернюю медитацию перед сном."
- SOS FAB + Bottom Tab Bar

All diary screens: warm, personal feel. Emotions are colorful but not overwhelming.
```

---

## ЧАСТЬ 7: ПРИЛОЖЕНИЕ — ПРАКТИКИ (КПТ + МЕДИТАЦИИ)

---

### Промпт #22 — КПТ-упражнения (каталог + wizard)

```
Design 3 CBT Exercise screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Exercise Catalog (WF-030):
- Header: "Упражнения"
- Category filter tabs (horizontal scroll, pill style): Все | 🫁 Дыхание | 🧠 КПТ | 🧘 Расслабление | 💪 PMR
- Section "Рекомендуем для вас" (AI-personalized):
  Card (sage green light bg): "🧠 Мысли и факты" | "10 мин" | "Средний уровень" | Badge "Подходит при тревоге" | "Начать" button
- Section "Все упражнения":
  Card: "🫁 Дыхание 4-7-8" | "5 мин" | "Лёгкий" | sage green accent
  Card: "🧠 Когнитивная реструктуризация" | "15 мин" | "Средний"
  Card: "🧘 Сканирование тела" | "10 мин" | "Лёгкий"
  Card: "🫁 Квадратное дыхание" | "5 мин" | "Лёгкий"
  Card: "🧠 Поведенческая активация" | "10 мин" | "Средний" | 🔒 Lock icon (Premium)
- Each card: white bg, rounded 8px, left icon, title, duration, difficulty badge
- SOS FAB + Bottom Tab Bar (Практики tab would be active if existed, otherwise navigate from Ещё)

Screen 2 — CBT Step Wizard (WF-032, step 2 of 5):
- BackButton + "Мысли и факты"
- Progress bar: step 2/5 filled (40%, sage green)
- Step indicator: "Шаг 2 из 5"
- Title: "Какая мысль тебя беспокоит?" (20px bold)
- Help text: "Запиши мысль именно так, как она прозвучала в голове. Не фильтруй и не исправляй." (14px, #737370)
- Textarea: placeholder "Например: 'Я никогда не справлюсь с этим проектом'", auto-grow, required
- Hint card (collapsible, light bg): "💡 Подсказка: Автоматические мысли часто содержат слова «всегда», «никогда», «должен». Попробуйте заметить их."
- MainButton "Далее" (disabled until >= 10 chars)
- BackButton returns to step 1 (data preserved)
- SOS FAB + Bottom Tab Bar

Screen 3 — CBT Complete / Thought Record (WF-033):
- BackButton + "Запись мыслей"
- Progress bar: 100% filled ✓
- Label: "Готово! 🎉"
- Summary cards (read-only, stacked):
  1. "Ситуация": "Получил критику от начальника на совещании"
  2. "Автоматическая мысль": "«Я никогда не справлюсь с этим проектом»"
  3. "Эмоция": 😟 Тревога — 8/10
  4. "Факты ЗА": "• Была ошибка в отчёте" / "Факты ПРОТИВ": "• Я успешно завершил 5 проектов до этого • Коллеги поддержали"
  5. "Альтернативная мысль": "Одна ошибка не определяет мою компетентность. У меня есть опыт успешного решения задач."
  6. "Эмоция ПОСЛЕ": 😐 Тревога — 4/10 (с зелёной стрелкой вниз ⬇️)
- XP reward: "+15 XP 🌱" (sage green badge)
- MainButton "Сохранить в дневник" (sage green)

All exercise screens: focused, step-by-step, encouraging tone.
```

---

### Промпт #23 — Медитации и дыхательные практики

```
Design 3 Meditation screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Meditation Catalog:
- BackButton + "Медитации"
- Category filter (horizontal scroll pills): Все | 😌 Расслабление | 😴 Сон | 😟 Тревога | 🎯 Фокус | 🌅 Утро | 🧘 Body-scan
- AI recommendation card (lavender light bg #F3F0F8):
  "✨ Рекомендуем: Вечернее расслабление" | "На основе ваших записей в дневнике" | "10 мин" | "Начать" button
- Meditation list (cards):
  Card: "😌 Глубокое расслабление" | "10 мин" | "🎧 Аудио + голос"
  Card: "😴 Сон и покой" | "15 мин" | "🎧 Аудио + голос" | 🔒 Premium
  Card: "😟 Отпускаем тревогу" | "5 мин" | "🎧 Аудио"
  Card: "🧘 Body-scan" | "20 мин" | "🎧 Аудио + голос" | 🔒 Premium
  Card: "🫁 Дыхание 4-7-8" | "5 мин" | "📱 Визуальная анимация"
  Card: "🫁 Квадратное дыхание" | "3 мин" | "📱 Визуальная анимация"
- Each card: white bg, rounded 8px, category emoji, title, duration, type badge, lock for premium
- SOS FAB + Bottom Tab Bar

Screen 2 — Meditation Player:
- Fullscreen immersive (no tab bar, no SOS button)
- BackButton (white, top-left)
- Background: calming gradient (lavender dusk: #F3F0F8 to #EFF5F9)
- Title: "Глубокое расслабление" (18px bold, centered)
- Subtitle: "Расслабьте тело и разум" (14px, #737370)
- Large icon/illustration area (abstract calming shape, centered, 200x200px)
- Audio player controls:
  - Progress bar (full width, thin, sage green fill, gray track)
  - Time: "3:24 / 10:00"
  - Controls (centered): ⏪ Rewind 15s (44x44) | ▶️ Play/Pause (64x64, sage green circle) | ⏩ Forward 15s (44x44)
- Volume slider (optional)
- Background sounds selector (Premium): "🌧 Дождь" | "🌊 Океан" | "🌲 Природа" | "〰️ White noise" (horizontal scroll chips)

Screen 3 — Breathing Exercise Fullscreen (WF-031):
- Fullscreen immersive, dark calming background
- BackButton (white)
- Pattern label: "Дыхание 4-7-8" (14px, white, centered top)
- Phase text: "Выдохни..." (24px bold, white, centered)
- Breathing circle: 200x200px, centered
  - Expanding circle with sage green glow (#7BAE7F, radial gradient + shadow: 0 0 40px rgba(123,174,127,0.3))
  - Phase description: "Вдох 4с → Задержка 7с → Выдох 8с"
- Phase progress bar with timer: "6с" remaining
- Cycle counter: "Цикл 3 / 5"
- Two buttons: "⏸ Пауза" | "✓ Завершить" (side by side, outline white, 48px)

All meditation screens: calming, immersive, minimal UI during practice.
```

---

## ЧАСТЬ 8: ПРИЛОЖЕНИЕ — МАРКЕТПЛЕЙС ПСИХОЛОГОВ

---

### Промпт #24 — Маркетплейс (каталог + профиль + бронирование)

```
Design 3 Marketplace screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Specialist Catalog (WF-040):
- BackButton + "Специалисты" + search icon (top-right)
- Filter bar (horizontal scroll): Все | По цене ↓ | По рейтингу ↓ | Онлайн 🟢
- AI recommendation banner (sage green light bg):
  "✨ На основе ваших сессий рекомендуем специалиста по тревожности"
- Specialist cards (vertical list):
  Card 1:
    - Avatar: female photo placeholder (48x48, circular)
    - Name: "Елена Иванова" (16px bold)
    - Specialization: "Тревожность, Стресс, КПТ" (14px, #737370)
    - Rating: ⭐ 4.9 (128 отзывов)
    - Tags: "КПТ" "Тревога" (pill chips, sage green outline)
    - Price: "от 3 000 ₽" (bold)
    - Status: 🟢 "Онлайн"
  Card 2:
    - Avatar: male photo placeholder
    - Name: "Андрей Петров"
    - Specialization: "Депрессия, Выгорание, Отношения"
    - Rating: ⭐ 4.7 (89 отзывов)
    - Tags: "Депрессия" "Выгорание"
    - Price: "от 2 500 ₽"
    - Status: ⚪ "Ближайший слот: завтра, 14:00"
  Card 3: (similar pattern)
- Each card: white bg, rounded 8px, shadow-sm, 16px padding
- SOS FAB + Bottom Tab Bar

Screen 2 — Specialist Profile (WF-041):
- BackButton (scrollable content)
- Profile header:
  - Large avatar (80x80, circular)
  - Name: "Елена Иванова" (20px bold)
  - Credentials: "Клинический психолог, КПТ-терапевт"
  - Rating: ⭐ 4.9 (128 отзывов)
  - Experience: "Стаж: 12 лет"
- Section "О специалисте":
  "Практикую КПТ и ACT-подходы. Специализируюсь на тревожных расстройствах, панических атаках, фобиях..."
  Link: "Показать полностью"
- Section "Специализация" (chips): Тревога | Панические атаки | Фобии | КПТ | Стресс
- Section "Формат и цены":
  Card: "💻 Видеоконсультация — 3 500 ₽ (50 мин)"
  Card: "💬 Текстовая сессия — 2 000 ₽ (по переписке)"
  Discount badge: "Standard: -5% | Premium: -10%"
- Section "Отзывы" (2 cards):
  Card: ⭐⭐⭐⭐⭐ | "Елена помогла мне справиться с паническими атаками за 3 месяца..." | "Анна М." | "2 дня назад"
  Card: ⭐⭐⭐⭐ | "Профессиональный подход, понятные объяснения..." | "Дмитрий К." | "1 неделю назад"
  Link: "Все 128 отзывов →"
- MainButton "Записаться" (sage green, full width, 48px)
- SOS FAB + Bottom Tab Bar

Screen 3 — Booking (WF-042):
- BackButton + "Запись к специалисту"
- Specialist mini-card: avatar + name + format + price
- Calendar (custom date picker):
  Month header: "◀ Февраль 2026 ▶"
  Days grid: available days in sage green circles, past/unavailable days grayed out
  Selected day: filled sage green
- Time slots (grid, 3-4 columns):
  "09:00" "10:00" "11:00" "12:00"
  "14:00" "15:00" "16:00" "17:00"
  Available: outline sage green, Selected: filled sage green, Taken: grayed
- Selected summary: "📅 5 февраля, 14:00 — Видеоконсультация"
- Price: "3 325 ₽" (with strikethrough "3 500 ₽" and badge "-5% Standard")
- MainButton "Перейти к оплате" (sage green)
- SOS FAB + Bottom Tab Bar
```

---

## ЧАСТЬ 9: ПРИЛОЖЕНИЕ — ПРОФИЛЬ И НАСТРОЙКИ

---

### Промпт #25 — Профиль + Подписка + Настройки

```
Design 3 Profile screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Profile (WF-045):
- Header: "Профиль"
- User info: avatar from Telegram (64x64, circular) + "Аня Смирнова" (18px bold) + subscription badge "Standard" (sage green pill)
- Stats row (3 mini-cards inline, equal width):
  "23 сессии" | "🔥 5 дней" | "12 упражнений"
- Menu list (full-width rows, 48px height, with icons and chevron >):
  ⚙️ Настройки
  🔔 Уведомления
  💳 Подписка
  📞 Экстренные контакты
  🔒 Конфиденциальность
  📊 Статистика
  🏆 Достижения
  👥 Пригласить друга
  ❓ Помощь
  🚪 Выйти (red text)
- SOS FAB + Bottom Tab Bar (Ещё active)

Screen 2 — Subscription Management (WF-047):
- BackButton + "Подписка"
- Current plan card (highlighted, sage green border):
  "Ваш тариф: Standard"
  "990 ₽/мес"
  "Следующее списание: 11 февраля 2026"
  "Способ оплаты: •••• 4242"
  Buttons: "Сменить тариф" | "Отменить подписку" (red text)
- Available plans below:
  Card "Бесплатный" (outline): "0 ₽/мес" + feature summary + "Перейти" button
  Card "Премиум" (lavender border): "2 990 ₽/мес" + feature summary + badge "Рекомендуем" + "Перейти на Premium" button (lavender)
- Payment history:
  "04.02.2026 — 990 ₽ — Стандартный — Оплачено ✅"
  "04.01.2026 — 990 ₽ — Стандартный — Оплачено ✅"
- SOS FAB + Bottom Tab Bar

Screen 3 — Settings (WF-046):
- BackButton + "Настройки"
- Section "Основные":
  Toggle: "Тёмная тема" — OFF
  Toggle: "Haptic feedback" — ON
  Row: "Язык" — "Русский" (chevron)
- Section "Уведомления":
  Toggle: "Ежедневный check-in" — ON + Time "20:00"
  Toggle: "Напоминания об упражнениях" — ON
  Toggle: "Советы и рекомендации" — OFF
  Toggle: "Маркетинговые уведомления" — OFF
- Section "Конфиденциальность":
  Row: "Экспорт всех данных" (chevron) — "JSON/CSV"
  Row: "Удалить аккаунт" (RED text, chevron) — "Необратимо"
- Section "О приложении":
  "Версия: 1.0.0"
  "Политика конфиденциальности" (link)
  "Условия использования" (link)
- SOS FAB + Bottom Tab Bar
```

---

## ЧАСТЬ 10: ПРИЛОЖЕНИЕ — ГЕЙМИФИКАЦИЯ И ДОСТИЖЕНИЯ

---

### Промпт #26 — Дерево здоровья + Достижения + Серии

```
Design 3 Gamification screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Health Tree Detail (WF-009/WF-049):
- BackButton + "Твоё дерево"
- Tree visualization (large, centered, 250x300px area):
  Stylized tree illustration growing from bottom:
  - Trunk: thick, brown, grows taller with chat sessions
  - Leaves: sage green, each leaf = diary entry or exercise completed
  - Flowers: lavender, each flower = meditation completed
  - Roots: warm coral, stabilized by SOS protocols
  - Current state: medium tree with ~15 leaves, 3 flowers
- Level info: "Уровень 3: Молодое дерево" (18px bold)
- XP progress: "240 / 500 XP" + progress bar (48%, sage green)
- Legend card (how tree grows):
  "🍃 Лист = дневник (+10 XP) или упражнение (+15 XP)"
  "🌸 Цветок = медитация (+10 XP)"
  "🌳 Ствол = чат-сессия (+20 XP)"
  "🌿 Корни = SOS-протокол (+5 XP)"
- Section "Последние достижения":
  🏆 "Первая неделя" +50 XP (earned, gold)
  🏆 "5 записей в дневнике" +30 XP (earned, sage green)
  🏆 "10 упражнений" +40 XP (earned, sage green)
  🔒 "Мастер дыхания" — "Завершите 20 дыхательных практик" (locked, gray)
- SOS FAB + Bottom Tab Bar

Screen 2 — Achievements Collection (WF-050):
- BackButton + "Достижения"
- Stats: "Открыто: 5 из 15"
- Achievement grid (3 columns, badge style):
  EARNED (colored, glowing):
    🌱 "Росток" — "Начните свой путь"
    📖 "Первая запись" — "Первая запись в дневнике"
    🫁 "Первый вдох" — "Первое дыхательное упражнение"
    7️⃣ "7 дней" — "Неделя практики"
    🧠 "Исследователь мыслей" — "Пройдите КПТ-упражнение"
  LOCKED (gray, with silhouette):
    🔒 "Мастер дыхания" — "20 дыхательных практик"
    🔒 "Первая победа" — "Улучшите настроение в КПТ"
    🔒 "30 дней" — "Месяц регулярной практики"
    🔒 "Сад мудрости" — "Достигните уровня Сад (1000 XP)"
    🔒 + 6 more locked
- Each badge: 80x80px circle, icon inside, name below, earned = full color + subtle glow, locked = gray
- SOS FAB + Bottom Tab Bar

Screen 3 — Streak View (WF-051):
- BackButton + "Серии"
- Current streaks:
  🔥 "Дневник: 5 дней" (large number, flame emoji)
  🧘 "Медитации: 3 дня"
  🧠 "Упражнения: 5 дней"
- Calendar heatmap (last 4 weeks):
  Grid of circles (7 cols x 4 rows), colored by activity:
  - Green circle = active day (diary + exercise)
  - Light green = partial (diary only)
  - White/empty = no activity
  - Today highlighted with border
- Personal record: "🏆 Рекорд: 12 дней подряд"
- Guilt-free message card (lavender bg):
  "💜 Пауза — это тоже забота о себе. Не корите себя за пропущенные дни. Главное — продолжать."
- SOS FAB + Bottom Tab Bar

All gamification screens: encouraging, therapy-aware, never punishing.
```

---

## ЧАСТЬ 11: ПРИЛОЖЕНИЕ — МИНИ-КУРСЫ И РЕФЕРАЛЬНАЯ ПРОГРАММА

---

### Промпт #27 — Мини-курсы + Реферальная программа

```
Design 3 screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Mini-Course Catalog (WF-036):
- BackButton + "Мини-курсы"
- Section "В процессе":
  Card: "📚 Управление тревогой" | "3/8 уроков" | progress bar 38% | "Продолжить →"
- Section "Рекомендуемые" (AI-based):
  Card: "🧠 Основы КПТ" | "7 уроков" | "35 мин" | Badge "Бесплатно" | Badge "Подходит для вас"
  Card: "😴 Здоровый сон" | "5 уроков" | "25 мин" | Badge "Standard+"
  Card: "❤️ Эмоциональный интеллект" | "8 уроков" | "40 мин" | 🔒 Premium
  Card: "💪 Стресс-менеджмент" | "6 уроков" | "30 мин" | Badge "Standard+"
- Each course card: white bg, rounded 8px, emoji icon, title, lesson count, total duration, access badge
- SOS FAB + Bottom Tab Bar

Screen 2 — Lesson View (WF-038):
- BackButton + "Урок 3: Когнитивные искажения"
- Progress: "3 / 8" with progress bar
- Content area (scrollable):
  Theory block:
    Title: "Что такое когнитивные искажения?" (18px bold)
    Text: explanation paragraph (16px, #262624)
    Illustration placeholder: diagram showing thought patterns
    Text: more explanation
  Quiz block (highlighted card, lavender light bg):
    "📝 Проверьте себя"
    Question: "Какое когнитивное искажение описывает ситуацию: 'Если я ошибусь один раз, значит я неудачник'?"
    Radio options (3): ○ Катастрофизация | ○ Чёрно-белое мышление ✓ (selected, sage green) | ○ Чтение мыслей
    Feedback: "✅ Верно! Это чёрно-белое мышление — склонность видеть только крайности."
  Practice block:
    "🧘 Практика" — mini exercise button
- MainButton "Следующий урок" (sage green)
- SOS FAB + Bottom Tab Bar

Screen 3 — Referral Program:
- BackButton + "Пригласить друга"
- Hero card (sage green gradient bg):
  "🎁 Подарите друг другу 7 дней Premium"
  "Пригласите друга — вы оба получите 7 дней бесплатного Premium!"
- Your referral link card (white, rounded 12px):
  Link field: "t.me/EmotionalBalanceBot?start=ref_ABC123" (truncated)
  Two buttons: "📋 Копировать" | "📤 Поделиться в Telegram"
- QR code (centered, 150x150px, sage green accent)
- Stats card:
  "👥 Приглашено: 3 человека"
  "✅ Активировано: 2"
  "🎁 Бонусных дней получено: 14"
  "📊 Лимит: 2/10 в этом месяце"
- How it works (3 steps mini):
  1. "Отправьте ссылку другу"
  2. "Друг регистрируется"
  3. "Оба получают 7 дней Premium"
- SOS FAB + Bottom Tab Bar
```

---

## ЧАСТЬ 12: ПРИЛОЖЕНИЕ — B2B И WEARABLES

---

### Промпт #28 — B2B HR-дашборд + Wearables

```
Design 3 screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — B2B HR Dashboard (WF-052):
- Header: "HR Панель" + company logo placeholder
- Company name: "ООО Технологии Будущего"
- Stats row (3 cards inline):
  "👥 32 участника" | "📊 Активность: 78%" | "😌 Стресс: 4.2/10"
- Section "Динамика за месяц":
  Line chart: X-axis = weeks, Y-axis = average stress level (1-10)
  Two lines: "Средний стресс" (warm coral) + "Активность %" (sage green)
- Section "Оповещения":
  Alert card (yellow bg): "⚠️ 3 сотрудника не активны более 7 дней"
  Alert card (green bg): "✅ Средний стресс снизился на 12% за месяц"
- Section "Действия":
  Button: "📩 Отправить напоминание участникам" (outline)
  Button: "📊 Скачать отчёт PDF" (outline)
  Button: "➕ Пригласить сотрудников" (sage green filled)
- Privacy notice: "🔒 Все данные анонимизированы. Индивидуальные данные сотрудников недоступны."
- SOS FAB + Bottom Tab Bar

Screen 2 — B2B Invite (WF-054 related):
- BackButton + "Пригласить сотрудников"
- Company invite link card:
  "Ссылка для вашей команды:"
  Link: "t.me/EmotionalBalanceBot?start=corp_TECHFUTURE"
  Buttons: "📋 Копировать" | "📤 Отправить в чат"
- Section "Участники" (list):
  Row: "Иван С." | "Активен" 🟢 | "Присоединился 01.02"
  Row: "Мария К." | "Активен" 🟢 | "Присоединилась 02.02"
  Row: "Алексей П." | "Неактивен 5 дней" 🟡 | "Присоединился 01.02"
  Each row: 48px height, avatar placeholder, name, status, date
  Swipe action: "Удалить из группы" (red)
- Counter: "32 из 50 мест занято"
- SOS FAB + Bottom Tab Bar

Screen 3 — Wearables Dashboard:
- BackButton + "Носимые устройства"
- Connected device card (white, rounded 12px, sage green left border):
  Icon: ⌚ Apple Watch
  "Apple Watch Series 9"
  "Подключено" 🟢
  "Последняя синхронизация: 5 мин назад"
  Button: "Отключить" (red text, small)
- Current metrics cards (2x2 grid):
  Card: ❤️ "Пульс" | "72 уд/мин" | "Норма" (green)
  Card: 📊 "HRV" | "42 мс" | "Средний стресс" (yellow)
  Card: 😴 "Сон" | "7ч 12м" | "Хорошо" (green)
  Card: 🏃 "Активность" | "6 500 шагов" | "Цель: 8 000"
- Section "Уровень стресса за неделю":
  Line chart: X = дни, Y = stress level (1-10 based on HRV)
  Annotation: "Пик стресса: Среда, 16:00"
- Section "Рекомендации":
  Card: "💡 Ваш стресс повышается к середине недели. Попробуйте медитацию во вторник вечером."
- Add device button: "+ Подключить Mi Band" (outline)
- Note: "Wearables доступны на тарифе Premium"
- SOS FAB + Bottom Tab Bar
```

---

## ЧАСТЬ 13: ПРИЛОЖЕНИЕ — ТЕРАПЕВТИЧЕСКИЙ МОСТ И САММАРИ

---

### Промпт #29 — Терапевтический мост + Саммари сессии

```
Design 3 screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Session Summary (WF-018):
- BackButton + "Итоги сессии"
- Meta card (white, rounded 8px):
  "📅 4 февраля 2026, 14:32"
  "💬 Тема: Тревога и сон"
  "📝 12 сообщений, 18 минут"
- Section "Настроение" (visual):
  Emoji trajectory: 😟 → 🙂
  Text: "Улучшение настроения за сессию" (sage green)
- Section "Ключевые темы" (AI-generated bullets):
  • Навязчивые мысли перед сном
  • Тревога связана с рабочим проектом
  • Страх не справиться
- Section "Рекомендации ИИ":
  • Попробуйте технику 5-4-3-2-1 перед сном
  • Запишите тревожные мысли в дневник
  • Рекомендуем КПТ-упражнение "Мысли и факты"
- Two buttons:
  "📤 Поделиться со специалистом" (sage green, full width)
  "💬 Продолжить диалог" (outline, full width)
- SOS FAB + Bottom Tab Bar

Screen 2 — Therapeutic Bridge Opt-in (WF-044):
- BackButton + "Мост ИИ↔Психолог"
- Info card (lavender bg #F3F0F8):
  "📋 ИИ-саммари для вашего психолога"
  "Подготовим краткий отчёт по вашим сессиям, дневнику и упражнениям. Психолог получит его до консультации для более эффективной работы."
- Preview of summary (editable, white card, rounded 12px):
  Section "Темы чата (последние 2 недели)":
    "• Тревога перед сном (5 раз)"
    "• Стресс на работе (3 раза)"
    "• Конфликт с коллегой (1 раз)"
  Section "Тренды дневника":
    Mini line chart: emoji mood over 2 weeks
    "Средняя тревога: 6.2/10"
  Section "КПТ-прогресс":
    "Завершено 4 упражнения, улучшение в 3 из 4"
  Section "Ключевые цитаты":
    "«Я постоянно думаю что не справлюсь...»"
    "«После дыхания стало легче»"
- Edit link: "✏️ Редактировать перед отправкой"
- Two buttons:
  "📤 Отправить психологу" (sage green, primary)
  "❌ Не отправлять" (outline)
- Privacy note: "🔒 Вы контролируете что отправляется. Психолог увидит только одобренное вами."
- SOS FAB + Bottom Tab Bar

Screen 3 — Psychologist Notes (after consultation):
- BackButton + "От моего психолога"
- Specialist card: avatar + "Елена Иванова" + "Клинический психолог"
- Date: "После консультации 5 февраля 2026"
- Notes card (white, rounded 12px, sage green left border):
  Title: "Рекомендации от специалиста"
  "1. Продолжайте вести дневник — обратите внимание на вечерние триггеры"
  "2. Практикуйте технику «Мысли и факты» при навязчивых мыслях о работе"
  "3. Попробуйте медитацию перед сном — начните с 5 минут"
  "4. Следующая консультация: 12 февраля, 14:00"
- Action cards:
  "📖 Открыть дневник" (tappable)
  "🧠 Начать 'Мысли и факты'" (tappable)
  "🧘 Вечерняя медитация" (tappable)
- SOS FAB + Bottom Tab Bar
```

---

## ЧАСТЬ 14: ДОПОЛНИТЕЛЬНЫЕ СОСТОЯНИЯ

---

### Промпт #30 — Состояния: Loading, Error, Success, Paywall

```
Design 4 utility/state screens for Emotional Balance. Russian language. Frame: 393x852.

Screen 1 — Loading State (Skeleton):
- Header: "Нейро-Психолог" (rendered normally)
- Content area: skeleton shimmer placeholders:
  - Greeting text: shimmer rectangle (200x24px)
  - Check-in card: shimmer card (full width x 80px, rounded 12px)
  - Quick actions: 3 shimmer circles (64x64)
  - Tree card: shimmer card (full width x 100px)
  - Streak card: shimmer card (full width x 60px)
- All shimmer elements: light gray (#E8E8E3) with animated gradient pulse (left to right)
- SOS FAB visible (always loaded first)
- Bottom Tab Bar visible

Screen 2 — Error State:
- Header normal
- Centered error illustration: cloud with exclamation mark (placeholder, 120x120)
- Title: "Не удалось загрузить" (18px bold, centered)
- Text: "Проверьте подключение к интернету и попробуйте снова" (14px, #737370, centered)
- Button: "🔄 Попробовать снова" (sage green, 48px, centered)
- Secondary text link: "📧 Связаться с поддержкой"
- SOS FAB (always available even on error)
- Bottom Tab Bar

Screen 3 — Success Toast / Confirmation:
- Normal screen underneath (e.g., diary timeline)
- Toast notification (top, animated slide down):
  - Rounded 8px, sage green bg (#5F9A63), white text
  - Checkmark icon + "Запись сохранена! +10 XP 🌱"
  - Auto-dismiss after 3 seconds
  - Subtle shadow

Screen 4 — Paywall / Locked Content:
- BackButton + "Медитации"
- Normal catalog above with available items
- Locked item card (tapped state):
  - Overlay on card: semi-transparent white with lock icon
  - Bottom sheet slides up (rounded 12px top corners):
    - 🔒 Lock icon (48px, lavender)
    - Title: "Доступно на Premium" (18px bold)
    - Text: "Полный каталог медитаций, фоновые звуки и расширенная аналитика"
    - Feature comparison mini-list:
      "✅ 50+ медитаций"
      "✅ Фоновые звуки: дождь, океан, природа"
      "✅ Apple Watch + Mi Band"
    - CTA: "Попробовать Premium — 7 дней бесплатно" (lavender button, full width)
    - Price: "Затем 2 990 ₽/мес. Отмена в любой момент."
    - Dismiss: "Не сейчас" (text link)
- SOS FAB + Bottom Tab Bar

All state screens: consistent with main design language, user-friendly, never scary.
```

---

## СВОДНАЯ КАРТА ЭКРАНОВ

```
ЛЕНДИНГ (12 промптов):
  #01 — Hero-секция
  #02 — Проблема и статистика
  #03 — Основные возможности (6 фич)
  #04 — Дополнительные возможности (6 фич)
  #05 — Как это работает (3 шага)
  #06 — Тарифы
  #07 — Сравнение с конкурентами
  #08 — Безопасность и доверие
  #09 — Персоны и отзывы
  #10 — B2B секция
  #11 — Roadmap / Coming Soon
  #12 — Footer + финальный CTA

ПРИЛОЖЕНИЕ — Онбординг (3 промпта):
  #13 — Welcome + Disclaimer + Age (3 экрана)
  #14 — Опросник 4 шага (4 экрана)
  #15 — Тарифы + Feature Tour (2 экрана)

ПРИЛОЖЕНИЕ — Основные экраны (15 промптов):
  #16 — Главный экран (Dashboard)
  #17 — Пустое состояние (Empty Home)
  #18 — AI Чат (пустой + активный + думает) — 3 экрана
  #19 — Голосовой ввод + Лимит + История — 3 экрана
  #20 — SOS + Кризис (4 экрана, safety-critical)
  #21 — Дневник (Timeline + Picker + Entry + Analytics) — 4 экрана
  #22 — КПТ (Каталог + Wizard + Complete) — 3 экрана
  #23 — Медитации (Каталог + Плеер + Дыхание) — 3 экрана
  #24 — Маркетплейс (Каталог + Профиль + Бронирование) — 3 экрана
  #25 — Профиль + Подписка + Настройки — 3 экрана
  #26 — Геймификация (Дерево + Достижения + Серии) — 3 экрана
  #27 — Мини-курсы + Реферальная программа — 3 экрана
  #28 — B2B HR-дашборд + Wearables — 3 экрана
  #29 — Терапевтический мост + Саммари — 3 экрана
  #30 — Состояния: Loading + Error + Success + Paywall — 4 экрана

ИТОГО: 30 промптов → ~55+ уникальных экранов
```

---

## ПОРЯДОК PROTOTYPING-СВЯЗЕЙ (Figma Connections)

```
Welcome → Age → Disclaimer → Quiz 1 → Quiz 2 → Quiz 3 → Quiz 4 → Tariffs → Feature Tour → Home
Home → Chat Empty → Chat Active → Chat Thinking → Voice → Session History → Session Summary
Home → Diary Timeline → Emotion Picker → Text Entry → Saved → Analytics
Home → Exercise Catalog → Breathing Exercise / CBT Wizard → Complete
Home → Meditation Catalog → Meditation Player / Breathing Fullscreen
Home → Profile → Settings / Subscription / Achievements / Referral / Wearables
Any Screen → SOS FAB → SOS Activated → Breathing / Crisis Overlay / Emergency Contacts
Chat → AI Limit → Subscription
Marketplace → Specialist Profile → Booking → Payment
Session Summary → Therapeutic Bridge → Psychologist Notes
Profile → B2B Dashboard → Team Analytics → Invite
Locked Content → Paywall Bottom Sheet → Subscription
```

---

*Документ создан: Orchestrator Agent (делегировано UI Agent + UX Agent) | Дата: 2026-02-04*
