---
title: "Interaction Patterns"
created_by: "UX Agent"
created_at: "2026-02-04"
version: "1.0"
depends_on:
  - "docs/design/user-flows.md"
  - "docs/design/information-architecture.md"
  - "docs/design/wireframes.md"
---

# Interaction Patterns: Emotional Balance (Нейро-Психолог 24/7)

## Содержание

- [1. Navigation Patterns](#1-navigation-patterns)
- [2. Input Patterns](#2-input-patterns)
- [3. Feedback Patterns](#3-feedback-patterns)
- [4. Safety-Critical Interactions](#4-safety-critical-interactions)
- [5. Gamification Interactions](#5-gamification-interactions)
- [6. Media Interactions](#6-media-interactions)
- [7. Gesture Patterns](#7-gesture-patterns)
- [8. Transition & Animation Specs](#8-transition--animation-specs)
- [9. Accessibility Interactions](#9-accessibility-interactions)
- [10. Telegram WebApp Specific](#10-telegram-webapp-specific)

---

## 1. Navigation Patterns

### 1.1 Bottom Tab Bar

**Когда использовать:** Основная навигация между корневыми разделами приложения. Всегда видна на L1-экранах (Главная, Чат, Дневник, Ещё).

**Связь с wireframes:** WF-007, WF-011, WF-024, WF-045

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Табов | 4 (Главная, Чат, Дневник, Ещё) |
| Высота | 56px |
| Позиция | Фиксирована внизу viewport |
| Z-index | 800 |
| Иконки | 24x24px, с label под иконкой |
| Touch target | 44x44px min (area вокруг иконки) |

**Состояния:**

```
Active Tab                    Inactive Tab
┌──────────┐                 ┌──────────┐
│   [icon] │ ← accent color │   [icon] │ ← gray (#9E9E9E)
│  Label   │ ← bold, accent │  Label   │ ← regular, gray
└──────────┘                 └──────────┘

Badge (notification dot):
┌──────────┐
│  [icon]● │ ← red dot, 8px, top-right of icon
│  Label   │
└──────────┘
```

**Поведение:**
- Переключение между табами мгновенное, без анимации перехода
- Scroll position сохраняется при переходе между табами и восстанавливается при возврате
- Badge (красная точка, 8px) появляется на табе Чат при новых рекомендациях ИИ
- На L2+ экранах tab bar остаётся видимым (кроме immersive-экранов: SOS, дыхание, кризис)
- Активный таб подсвечен accent-цветом (--eb-color-primary), label bold
- Неактивные табы: серая иконка и label

**Accessibility:**
- `role="tablist"` на контейнере, `role="tab"` на каждом элементе
- `aria-selected="true"` на активном табе
- `aria-label` включает название раздела и badge-статус ("Чат, есть новые")

---

### 1.2 Back Navigation

**Когда использовать:** Возврат к предыдущему экрану в стеке навигации. Доступно на всех L2+ экранах.

**Связь с wireframes:** WF-002 -- WF-006, WF-012 -- WF-018, WF-020 -- WF-054

**Три механизма back-навигации:**

```
1. BackButton (Telegram SDK)       2. Gesture Back           3. Deep Link Return
┌────────────────────────┐        ┌──────────────────┐      ┌──────────────────┐
│ ← Назад    Заголовок   │        │  ← swipe from    │      │ Deep link entry  │
│                        │        │    left edge      │      │ → Back = close   │
│  Tap = go back         │        │    (if supported) │      │   WebApp or      │
│  in navigation stack   │        │                   │      │   go to root     │
└────────────────────────┘        └──────────────────┘      └──────────────────┘
```

**Правила отображения BackButton по экранам:**

| Экран | BackButton | Поведение при нажатии |
|-------|-----------|----------------------|
| Главная (Dashboard) | Скрыт | -- |
| Чат (таб) | Скрыт | -- |
| Активная чат-сессия | Виден | Список сессий |
| Дневник (таб) | Скрыт | -- |
| Новая запись дневника | Виден | Лента дневника |
| Инструменты (таб) | Скрыт | -- |
| Выполнение упражнения | Виден | Каталог (с confirm dialog) |
| SOS (выбор ситуации) | Виден | Предыдущий экран |
| SOS (протокол) | Скрыт | Нельзя случайно выйти |
| Crisis overlay | Скрыт | Non-dismissible |
| Профиль психолога | Виден | Каталог |

**Accessibility:**
- BackButton управляется через Telegram SDK: `Telegram.WebApp.BackButton.show()` / `.hide()`
- Семантика: `aria-label="Вернуться назад"` на кастомных back-элементах

---

### 1.3 Modal / Bottom Sheet

**Когда использовать:** Вторичный контент, не требующий полной навигации. Контекстные действия, подтверждения, пикеры.

**Связь с wireframes:** WF-006 (time picker), WF-014 (voice input), WF-042 (booking form)

**Типы:**

```
Half-screen Bottom Sheet           Full-screen Bottom Sheet
┌─────────────────────────┐       ┌─────────────────────────┐
│ [content behind, dimmed]│       │                         │
│                         │       │                         │
│ ─────────────────────── │       │  ┌─────────────────┐   │
│ ┌───────────────────┐   │       │  │  Handle (40x4)  │   │
│ │  Handle (40x4)    │   │       │  └─────────────────┘   │
│ ├───────────────────┤   │       │                         │
│ │                   │   │       │  Заголовок         ✕   │
│ │  Sheet Content    │   │       │  ─────────────────────  │
│ │  max-height: 50vh │   │       │                         │
│ │                   │   │       │  Full content area      │
│ └───────────────────┘   │       │  max-height: 90vh       │
└─────────────────────────┘       │                         │
                                  │                         │
                                  │  [MainButton area]      │
                                  └─────────────────────────┘
```

**Спецификация:**

| Параметр | Half-screen | Full-screen |
|----------|------------|-------------|
| Max height | 50vh | 90vh |
| Backdrop | 50% opacity black | 50% opacity black |
| Handle | 40x4px, centered, 8px top | 40x4px, centered, 8px top |
| Border radius | 16px top-left, top-right | 16px top-left, top-right |
| Drag-to-dismiss | Да (swipe down) | Да (swipe down on handle) |
| Close button | Нет (drag/backdrop) | Да (X, top-right) |
| Animation open | slide-up 250ms ease-out | slide-up 250ms ease-out |
| Animation close | slide-down 200ms ease-in | slide-down 200ms ease-in |
| Backdrop fade in | 200ms | 200ms |
| Backdrop fade out | 150ms | 150ms |

**Поведение:**
- Тап по backdrop закрывает half-screen sheet
- Drag-to-dismiss: при swipe > 30% высоты -- закрытие, < 30% -- snap back
- При открытии sheet фокус перемещается внутрь (focus trap)
- При закрытии фокус возвращается к элементу, вызвавшему sheet

**Accessibility:**
- `role="dialog"`, `aria-modal="true"`
- Focus trap: Tab/Shift+Tab зациклен внутри sheet
- `aria-label` на sheet с описанием контента
- Escape (Bluetooth keyboard) закрывает sheet

---

### 1.4 Deep Linking

**Когда использовать:** Внешний вход в конкретный экран через Telegram Bot deep links.

**Связь с wireframes:** WF-001 (onboarding entry), WF-020 (SOS), WF-040 (marketplace)

**Формат:** `t.me/EmotionalBalanceBot?start={param}`

| Deep Link | Целевой экран | Условие |
|-----------|---------------|---------|
| `start=sos` | SOS Activated (WF-020) | Всегда доступен |
| `start=chat` | Чат -- новая сессия (WF-011) | Авторизация |
| `start=diary` | Дневник -- новая запись (WF-025) | Авторизация |
| `start=ref_{code}` | Онбординг с реферальным кодом (WF-001) | Новый пользователь |
| `start=course_{id}` | Страница мини-курса (WF-037) | Авторизация + тариф |
| `start=psych_{id}` | Профиль психолога (WF-041) | Авторизация |
| `start=achievement` | Достижения (WF-050) | Авторизация |

**Поведение:**
- Параметр парсится из `window.Telegram.WebApp.initDataUnsafe.start_param`
- Если пользователь не авторизован -- сначала онбординг, затем redirect
- Back navigation из deep link: к корневому экрану (Dashboard), не к Telegram

**Accessibility:**
- Screen reader объявляет целевой экран после навигации

---

### 1.5 Tab Switching

**Когда использовать:** Переключение между основными разделами через bottom tab bar.

**Связь с wireframes:** WF-007 (Home), WF-011 (Chat), WF-024 (Diary)

```
Tab A (active)  →  Tab B (active)
┌──────────┐       ┌──────────┐
│ Content A│ ───→  │ Content B│    Мгновенное переключение
│ scroll:Y │       │ scroll:Y │    Без transition анимации
└──────────┘       └──────────┘    Scroll восстанавливается
```

**Спецификация:**
- Переключение мгновенное (0ms transition)
- Scroll position каждого таба кэшируется в памяти
- При возврате на таб восстанавливается прежняя позиция scroll
- Состояние контента (формы, ввод) сохраняется при переключении
- Данные обновляются при повторном фокусе на таб (pull-to-refresh паттерн)

---

### 1.6 Screen Transitions

**Когда использовать:** Переходы между экранами внутри одного таба (forward/back navigation).

**Связь с wireframes:** Все переходы L1 -> L2, L2 -> L3

```
Forward (deeper):                 Back (shallower):
┌────────┐    ┌────────┐         ┌────────┐    ┌────────┐
│ Screen │ →→ │ Screen │         │ Screen │ ←← │ Screen │
│   A    │    │   B    │         │   A    │    │   B    │
└────────┘    └────────┘         └────────┘    └────────┘
 slide-in from right              slide-out to right
 300ms ease-in-out                300ms ease-in-out
```

**Спецификация:**
- Forward: новый экран скользит справа (translateX: 100% -> 0%)
- Back: текущий экран скользит вправо (translateX: 0% -> 100%)
- Длительность: 300ms
- Easing: ease-in-out
- Предыдущий экран остаётся под новым (без удаления из DOM)

**Accessibility:**
- `prefers-reduced-motion: reduce` -- мгновенное переключение без slide
- `aria-live="polite"` на контейнере контента для объявления нового экрана

---

## 2. Input Patterns

### 2.1 Emotion Picker

**Когда использовать:** Выбор текущей эмоции при записи в дневник, daily check-in, оценке после упражнения.

**Связь с wireframes:** WF-008 (daily check-in), WF-025 (diary new entry), WF-034 (exercise complete)

```
Grid Layout (2 columns x 4 rows):

┌────────────────────────────────────┐
│ ┌──────────┐    ┌──────────┐      │
│ │ 😊       │    │ 😐       │      │
│ │ Радость  │    │ Спокойств│      │  64x64px each
│ └──────────┘    └──────────┘      │
│ ┌──────────┐    ┌──────────┐      │
│ │ 😢       │    │ 😟       │      │
│ │ Грусть   │    │ Тревога  │      │  gap: 12px
│ └──────────┘    └──────────┘      │
│ ┌──────────┐    ┌──────────┐      │
│ │ 😡       │    │ 😫       │      │
│ │ Злость   │    │ Стресс   │      │
│ └──────────┘    └──────────┘      │
│ ┌──────────┐    ┌──────────┐      │
│ │ 😔       │    │ 🥱       │      │
│ │ Одиночест│    │ Усталость│      │
│ └──────────┘    └──────────┘      │
└────────────────────────────────────┘

Selected state:
┌──────────┐         ┌──────────┐
│ 😟       │  ──→    │ ██😟██  │   scale: 1.1
│ Тревога  │         │ Тревога  │   border: 2px accent
└──────────┘         │ ✓        │   checkmark overlay
                     └──────────┘
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Размер ячейки | 64x64px |
| Grid | 2 columns, gap 12px |
| Тип выбора | Single selection |
| Selected state | scale(1.1), border 2px accent, checkmark |
| Transition | 150ms ease-out |
| Haptic | selectionChanged() |

**Поведение:**
- Single selection: повторный тап на выбранную эмоцию снимает выбор
- При выборе: анимация увеличения (scale 1 -> 1.1), появление border и checkmark
- HapticFeedback.selectionChanged() при выборе
- Связанные элементы (slider, MainButton) обновляются при выборе

**Accessibility:**
- `role="radiogroup"` на контейнере
- `role="radio"`, `aria-checked` на каждой ячейке
- `aria-label="Эмоция: Тревога"` на каждом элементе
- Keyboard: arrow keys для перемещения, Space/Enter для выбора

---

### 2.2 Chat Input

**Когда использовать:** Ввод текстовых сообщений в AI-чат.

**Связь с wireframes:** WF-011 (chat empty), WF-012 (chat active), WF-013 (AI thinking)

```
Default state:                    Expanded state (multi-line):
┌─────────────────────────────┐  ┌─────────────────────────────┐
│ Напиши сообщение... 🎤  ➤  │  │ Сегодня было очень тяжело  │
│                             │  │ на работе. Начальник снова  │
│ height: 44px                │  │ критиковал мою работу и я  │  auto-grow
└─────────────────────────────┘  │ чувствую...          🎤  ➤ │  max: 120px
                                 └─────────────────────────────┘

Button states:
  🎤 (mic) — always visible, 44x44px
  ➤ (send) — 44x44px
    Empty input:  disabled (dimmed, 30% opacity)
    Has text:     enabled (accent color)
    AI thinking:  disabled + loading spinner
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Min height | 44px (single line) |
| Max height | 120px (approx 4 lines, then scroll) |
| Auto-grow | Да, строка за строкой |
| Placeholder | "Напиши сообщение..." |
| Voice toggle | 44x44px, слева от send |
| Send button | 44x44px, справа |
| Keyboard | Telegram native keyboard |

**Поведение:**
- Auto-grow: textarea увеличивается по мере ввода до max-height, затем scroll
- Send: disabled при пустом вводе; enabled при наличии текста
- При нажатии Send: сообщение отправляется, input очищается, auto-scroll to bottom
- Voice toggle: переключает на overlay записи (WF-014)
- При генерации ответа ИИ: input disabled (визуально dimmed)
- ViewportStableHeight: input bar поднимается с клавиатурой

**Accessibility:**
- `role="textbox"`, `aria-label="Поле ввода сообщения"`
- `aria-disabled="true"` при отключённом состоянии
- Send button: `aria-label="Отправить сообщение"`
- Voice button: `aria-label="Голосовой ввод"`

---

### 2.3 Slider (Mood / Intensity)

**Когда использовать:** Оценка настроения (1-10), интенсивность эмоции, оценка до/после SOS-протокола.

**Связь с wireframes:** WF-004 (assessment), WF-025 (diary intensity), WF-020 (SOS pre/post)

```
┌──────────────────────────────────────────────┐
│                                              │
│  Слабо ─────────────●──────────── Сильно     │
│                     7                        │
│                                              │
│  Track: 4px height, rounded                  │
│  Thumb: 44x44px touch target (visual: 24px)  │
│  Active track: accent color                  │
│  Inactive track: gray                        │
│  Value label: centered below thumb           │
└──────────────────────────────────────────────┘

Visual detail:
  ═══════════●░░░░░░░░   ← active (accent) | inactive (gray)
             ↑
         thumb 24px visual
         44px touch area
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Range | 1--10 (continuous, integer steps) |
| Track height | 4px |
| Thumb visual | 24px diameter |
| Thumb touch target | 44x44px |
| Active track color | --eb-color-primary |
| Inactive track color | --eb-color-gray-300 |
| Value display | Число под thumb |
| Default value | 5 |

**Поведение:**
- Drag: плавное перемещение, value обновляется в реальном времени
- Tap на track: thumb перемещается к точке тапа
- Haptic: selectionChanged() при каждом целочисленном шаге
- Gradient опция: для mood slider -- цвет track меняется (red -> yellow -> green)
- Синхронизация с emoji scale (если есть): тап emoji = перемещение slider

**Accessibility:**
- `role="slider"`, `aria-valuemin="1"`, `aria-valuemax="10"`, `aria-valuenow="7"`
- `aria-label="Интенсивность эмоции"` или контекстный label
- Keyboard: Left/Right arrow для шагов, Home/End для min/max

---

### 2.4 Multi-step Form (CBT Wizard)

**Когда использовать:** Пошаговые упражнения КПТ, SOS-протоколы, онбординг-опросник.

**Связь с wireframes:** WF-003 -- WF-006 (onboarding), WF-032 -- WF-033 (CBT steps)

```
Progress Bar:
┌───────────────────────────────────────────┐
│ ████████████████░░░░░░░░░░  Шаг 2 из 5   │
│                                           │
│ Height: 4px                               │
│ Fill: accent color                        │
│ Background: gray-200                      │
│ Border-radius: 2px                        │
│ Label: right-aligned, muted text          │
└───────────────────────────────────────────┘

Step Layout:
┌─────────────────────────────────┐
│ ← Back          Шаг N из M     │
├─────────────────────────────────┤
│ ████████░░░░░░░                 │  ← Progress bar
│                                 │
│ Заголовок шага                  │
│                                 │
│ Описание / инструкция           │
│                                 │
│ [Input area for step]           │
│                                 │
│ 💡 Подсказка (collapsible)      │
│                                 │
│ ┌───────────────────────────┐   │
│ │    Далее / Завершить      │   │  ← MainButton
│ └───────────────────────────┘   │
└─────────────────────────────────┘
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Progress bar height | 4px |
| Step label | "Шаг N из M", right-aligned |
| Validation | Per-step, MainButton disabled until valid |
| Back | Сохраняет введённые данные |
| Forward | Валидация текущего шага |
| Haptic | notificationOccurred('success') при завершении |

**Поведение:**
- Progress bar заполняется линейно: (currentStep / totalSteps) * 100%
- MainButton: "Далее" на промежуточных шагах, "Завершить" на последнем
- MainButton disabled до прохождения валидации текущего шага
- Back: возврат к предыдущему шагу с сохранением данных
- При закрытии WebApp: прогресс сохраняется в CloudStorage, предложение "Продолжить?" при возврате
- Hint: сворачиваемая подсказка под input area

**Accessibility:**
- `aria-label="Шаг 2 из 5: Какая мысль тебя беспокоит?"` на контейнере
- Progress bar: `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Focus автоматически переходит на первый input нового шага

---

### 2.5 Search

**Когда использовать:** Поиск упражнений, медитаций, психологов в маркетплейсе.

**Связь с wireframes:** WF-030 (exercise catalog), WF-040 (specialist catalog)

```
Collapsed (default):               Expanded (active):
┌─────────────────────────┐       ┌─────────────────────────┐
│ 🔍 Поиск...             │       │ 🔍 [дыхание        ] ✕  │
└─────────────────────────┘       ├─────────────────────────┤
  height: 44px                    │ Результаты:             │
  tap → expand                    │ ┌─────────────────────┐ │
                                  │ │ Дыхание 4-7-8       │ │
                                  │ │ Квадратное дыхание   │ │
                                  │ └─────────────────────┘ │
                                  └─────────────────────────┘
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Height | 44px |
| Debounce | 300ms |
| Min chars | 2 (для начала поиска) |
| Clear button | ✕, 44x44px, появляется при вводе |
| Filter | Instant (client-side), затем server |
| Animation | Expand 200ms ease-out |

**Поведение:**
- Тап на collapsed search: раскрытие поля ввода, фокус, клавиатура
- Ввод: debounce 300ms, затем фильтрация результатов
- Clear (✕): очищает поле и результаты, возврат к полному списку
- Пустой результат: "Ничего не найдено. Попробуй другой запрос"
- Cancel (BackButton или тап вне): сворачивание search

**Accessibility:**
- `role="search"` на контейнере
- `aria-label="Поиск упражнений"` на input
- `aria-live="polite"` на контейнере результатов
- Результаты объявляются: "Найдено N результатов"

---

### 2.6 Time Picker

**Когда использовать:** Выбор времени для напоминаний, записи к психологу.

**Связь с wireframes:** WF-006 (notification settings), WF-042 (booking form)

```
Bottom Sheet Time Picker:
┌─────────────────────────────────┐
│                                 │
│  ┌─── Handle ───┐              │
│                                 │
│  Выберите время                 │
│                                 │
│  ┌──────────┐ : ┌──────────┐   │
│  │    19    │   │    30    │   │
│  │  [ 20 ] │   │  [ 00 ] │   │  ← Scroll wheels
│  │    21    │   │    30    │   │
│  └──────────┘   └──────────┘   │
│                                 │
│  ┌───────────────────────────┐  │
│  │       Подтвердить         │  │  ← Confirm button
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Спецификация:**
- Presentation: bottom sheet (half-screen)
- Scroll wheels: hours (0-23), minutes (00, 15, 30, 45)
- Selected value: центральная позиция, увеличенный шрифт
- Confirm: кнопка внизу sheet, 48px height
- Haptic: selectionChanged() при каждом snap

**Accessibility:**
- `role="spinbutton"` на каждом колесе
- `aria-valuemin`, `aria-valuemax`, `aria-valuenow`
- Keyboard: Up/Down arrows для прокрутки значений

---

### 2.7 Toggle Switch

**Когда использовать:** Включение/выключение настроек (уведомления, звук, вибрация).

**Связь с wireframes:** WF-006 (notification setup), WF-046 (settings)

```
ON state:                        OFF state:
┌──────────────────────────┐    ┌──────────────────────────┐
│ Напоминания     [████●]  │    │ Напоминания     [●░░░░]  │
│                          │    │                          │
│  44x24px track           │    │  44x24px track           │
│  Thumb: 20px             │    │  Thumb: 20px             │
│  ON = accent color       │    │  OFF = gray              │
│  Label always visible    │    │  Label always visible    │
└──────────────────────────┘    └──────────────────────────┘
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Track size | 44x24px |
| Thumb size | 20px diameter |
| ON color | --eb-color-primary |
| OFF color | --eb-color-gray-300 |
| Transition | 200ms ease |
| Touch target | 44x44px (extended around toggle) |
| Label | Всегда видим, слева от toggle |

**Поведение:**
- Тап: переключение ON/OFF с анимацией thumb slide
- Haptic: selectionChanged()
- Label всегда отображается рядом с toggle (не исчезает)
- Визуальное состояние однозначно читаемо (цвет + положение thumb)

**Accessibility:**
- `role="switch"`, `aria-checked="true|false"`
- `aria-label` включает название настройки
- Keyboard: Space/Enter для переключения

---

### 2.8 Chip Selection

**Когда использовать:** Выбор тем (онбординг), тегов (дневник), категорий (каталог), контекста.

**Связь с wireframes:** WF-003 (goal selection), WF-008 (daily check-in), WF-026 (diary tags)

```
Single-select (goal):              Multi-select (tags):
┌────────┐ ┌────────┐            ┌────────┐ ┌────────┐
│ Тревога│ │✓Стресс │            │✓ сон   │ │✓работа │
└────────┘ └────────┘            └────────┘ └────────┘
┌────────┐ ┌────────┐            ┌────────┐ ┌────────┐
│ Сон    │ │ Отнош. │            │ семья  │ │ учёба  │
└────────┘ └────────┘            └────────┘ └────────┘

Selected chip:                    Unselected chip:
┌──────────────┐                 ┌──────────────┐
│ ✓ Стресс     │ filled bg      │   Стресс     │ outline
│              │ white text      │              │ dark text
└──────────────┘ accent color    └──────────────┘ gray border
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Height | 44px |
| Padding | 12px horizontal, 10px vertical |
| Border radius | 22px (pill shape) |
| Grid | 2 columns, gap 8px |
| Selected | Filled bg (accent), white text, checkmark |
| Unselected | Outline (1px gray), dark text |
| Transition | 150ms ease-out |

**Типы:**
- **Single-select** (goal, context): макс 1 выбор, повторный тап снимает
- **Multi-select** (tags, emotions): макс N выборов (настраиваемо), при превышении -- toast "Максимум N"

**Поведение:**
- Тап: toggle selected/unselected с анимацией
- Multi-select с лимитом: при попытке выбрать сверх лимита -- toast notification
- Counter: "Выбрано: X из N" обновляется динамически (WF-003)
- Haptic: selectionChanged() при каждом тапе

**Accessibility:**
- Single-select: `role="radiogroup"` + `role="radio"`
- Multi-select: `role="group"` + `role="checkbox"`
- `aria-checked`, `aria-label` на каждом chip

---

## 3. Feedback Patterns

### 3.1 Loading States (Skeleton Shimmer)

**Когда использовать:** Начальная загрузка экрана, загрузка контента, переход между разделами.

**Связь с wireframes:** Все экраны при первой загрузке

```
Skeleton Layout (Home Screen example):
┌─────────────────────────────────┐
│ ░░░░░░░░░░░░                   │  ← Title placeholder
│                                 │
│ ┌───────────────────────────┐   │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░  │   │  ← Card skeleton
│ │ ░░░░░░░░░░░░░░            │   │
│ │ ░░░░░░░░░░░░░░░░░         │   │
│ └───────────────────────────┘   │
│                                 │
│ ┌──────┐ ┌──────┐ ┌──────┐     │
│ │ ░░░░ │ │ ░░░░ │ │ ░░░░ │     │  ← Button placeholders
│ └──────┘ └──────┘ └──────┘     │
│                                 │
│ ┌───────────────────────────┐   │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░  │   │
│ │ ░░░░░░░░░░░░░░░░░         │   │
│ └───────────────────────────┘   │
└─────────────────────────────────┘

Shimmer animation:
░░░░░░░  →  ▓░░░░░░  →  ░░▓░░░░  →  ░░░░░▓░  →  ░░░░░░░
  linear-gradient sweep, 1.5s infinite
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Skeleton color | --eb-color-gray-100 |
| Shimmer color | --eb-color-gray-200 (lighter) |
| Animation | linear-gradient 90deg, sweep left-to-right |
| Duration | 1.5s infinite |
| Border radius | Matches target element |
| Timing | ease-in-out |

**Принцип:** Skeleton повторяет layout будущего контента (progressive content reveal). НЕ использовать spinner -- только skeleton shimmer.

**Поведение:**
- Skeleton отображается мгновенно при навигации
- Контент заменяет skeleton по мере загрузки (fade-in 200ms)
- Если загрузка > 5s: показать "Загрузка занимает больше времени..."

**Accessibility:**
- `aria-busy="true"` на контейнере во время загрузки
- `aria-live="polite"` для объявления завершения загрузки
- Screen reader: "Загрузка контента" при появлении skeleton

---

### 3.2 AI Streaming Response

**Когда использовать:** Вывод ответа AI-помощника в чате.

**Связь с wireframes:** WF-013 (AI thinking), WF-012 (chat active)

```
Phase 1: Typing dots         Phase 2: Streaming text
┌────────────────────┐      ┌──────────────────────────┐
│ 🤖 ●●●             │  →   │ 🤖 Понимаю, что тебе    │
│    (animated)       │      │ сейчас тяжело. Давай     │
│                     │      │ попробуем разобра|        │  ← cursor
└────────────────────┘      └──────────────────────────┘

Typing dots animation:
●●●  →  ●●○  →  ●○○  →  ○○○  →  ●●●
  gentle bounce, 400ms per dot, staggered
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Typing dots | 3 dots, 8px each, bounce animation |
| Dot color | --eb-color-gray-400 |
| Streaming speed | Word-by-word, ~50ms per word |
| Auto-scroll | Smooth scroll to bottom as text appears |
| Max wait for first token | 15s (then timeout fallback) |
| Cursor | Blinking pipe character (optional) |

**Поведение:**
- Phase 1: Typing dots появляются после отправки сообщения пользователем
- Phase 2: Dots заменяются текстом, текст появляется слово за словом
- Auto-scroll: viewport плавно прокручивается по мере появления текста
- Timeout: если нет ответа > 15s -- "Ответ формируется дольше обычного..."
- При потере соединения: "Соединение потеряно. Подключаемся..." + retry

**Accessibility:**
- `aria-live="polite"` на контейнере сообщений
- Screen reader получает полный текст после завершения streaming
- Typing indicator: `aria-label="AI формирует ответ"`

---

### 3.3 Toast Notifications

**Когда использовать:** Краткие информационные сообщения о результатах действий (сохранение, копирование, ошибки).

**Связь с wireframes:** WF-003 (max topics toast), WF-027 (entry saved)

```
Position and layout:
┌─────────────────────────────────┐
│                                 │
│         [Content area]          │
│                                 │
│                                 │
│  ┌───────────────────────────┐  │  ← Toast
│  │  ✅ Запись сохранена       │  │     bottom, 16px margin
│  │                     [Undo]│  │     action button (optional)
│  └───────────────────────────┘  │
├─────────────────────────────────┤
│         [Tab Bar]               │
└─────────────────────────────────┘
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Position | Bottom, above tab bar, 16px margin |
| Height | Auto (min 48px) |
| Max width | calc(100% - 32px) |
| Background | --eb-color-gray-800 (dark) |
| Text color | white |
| Border radius | 12px |
| Auto-dismiss | 3s |
| Animation in | slide-up 200ms ease-out |
| Animation out | slide-down 150ms ease-in |
| Action button | Optional, right-aligned, accent color |
| Z-index | 850 (above content, below SOS) |

**Типы:**
- **Success:** зелёная иконка ✅, "Сохранено", "Скопировано"
- **Info:** синяя иконка ℹ, "Максимум 3 темы"
- **Error:** красная иконка ❌, "Не удалось сохранить" + "Повторить"
- **Warning:** жёлтая иконка ⚠, "Лимит почти исчерпан"

**Поведение:**
- Auto-dismiss через 3s (swipe для раннего dismiss)
- Action button (optional): "Undo", "Повторить", "Подробнее"
- Стек: максимум 1 toast одновременно, новый заменяет предыдущий
- Не блокирует взаимодействие с контентом под ним

**Accessibility:**
- `role="status"`, `aria-live="polite"`
- Action button: `aria-label` с описанием действия
- Auto-dismiss не применяется при screen reader (ожидает dismiss)

---

### 3.4 Success States

**Когда использовать:** Завершение действий: сохранение записи, завершение упражнения, отправка формы.

**Связь с wireframes:** WF-027 (diary saved), WF-034 (exercise complete), WF-043 (booking confirm)

```
Success Screen:
┌─────────────────────────────────┐
│                                 │
│           ✅                    │  ← Checkmark animation
│                                 │     0 → scale(1.2) → scale(1)
│      Записано!                  │     500ms total
│                                 │
│      +10 XP 🌳                  │  ← XP reward (float up)
│                                 │
│  ┌───────────────────────────┐  │
│  │  💡 Contextual insight     │  │  ← AI suggestion
│  └───────────────────────────┘  │
│                                 │
│  [Action button 1]              │
│  [Action button 2]              │
└─────────────────────────────────┘
```

**Checkmark Animation:**
- Frame 0ms: opacity 0, scale 0
- Frame 200ms: opacity 1, scale 1.2
- Frame 350ms: scale 0.95 (bounce)
- Frame 500ms: scale 1.0 (settle)
- Easing: cubic-bezier(0.175, 0.885, 0.32, 1.275) -- bounce

**Haptic:** `notificationOccurred('success')` при появлении checkmark

**Accessibility:**
- `aria-live="assertive"` для объявления успеха
- Screen reader: "Действие завершено успешно. Получено 10 очков опыта"

---

### 3.5 Error States

**Когда использовать:** Ошибки ввода, сетевые ошибки, серверные ошибки.

**Связь с wireframes:** WF-016 (limit reached), error paths в user-flows

**Три уровня:**

```
1. Inline (field-level):
┌─────────────────────────────┐
│ [Input field with error]    │
│ ❌ Минимум 10 символов      │  ← Red text, below field
└─────────────────────────────┘

2. Screen-level:
┌─────────────────────────────┐
│                             │
│     😔 Что-то пошло         │
│        не так                │
│                             │
│     Проверь подключение     │
│     к интернету             │
│                             │
│  ┌───────────────────────┐  │
│  │    Попробовать снова  │  │  ← Retry button
│  └───────────────────────┘  │
└─────────────────────────────┘

3. Toast (transient):
┌─────────────────────────────┐
│ ❌ Не удалось отправить     │
│                   [Повторить]│
└─────────────────────────────┘
```

**Спецификация:**

| Тип | Цвет | Позиция | Dismiss |
|-----|------|---------|---------|
| Inline | --eb-color-error (red) | Под полем ввода | При исправлении |
| Screen-level | -- | Центр экрана | Retry button |
| Toast | Red icon + dark bg | Низ экрана | 3s auto + action |

**Принципы:**
- Тон: дружелюбный, не обвиняющий ("Что-то пошло не так" а не "Ошибка!")
- Всегда предлагать действие (retry, альтернатива)
- Inline ошибки валидации: появляются при blur или submit, исчезают при исправлении

**Accessibility:**
- Inline: `aria-invalid="true"`, `aria-describedby` ссылается на текст ошибки
- Screen-level: `role="alert"`
- Focus переходит на первое поле с ошибкой при submit

---

### 3.6 Empty States

**Когда использовать:** Первый визит в раздел, нет данных для отображения.

**Связь с wireframes:** WF-010 (home empty), WF-011 (chat empty), WF-028 (diary empty)

```
┌─────────────────────────────────┐
│                                 │
│        [Illustration]           │  ← Warm, calming image
│        160x160px                │
│                                 │
│   Здесь будут твои записи       │  ← Encouraging headline
│                                 │
│   Дневник помогает заметить     │  ← Supportive subtext
│   паттерны и лучше понять       │
│   свои эмоции                   │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 📔 Сделать первую запись  │  │  ← Primary CTA
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Принципы (DEC-031: guilt-free):**
- Тон: ободряющий, не давящий
- НЕ использовать: "Ты ещё ничего не записал" (виновный тон)
- Использовать: "Здесь будут твои записи" (нейтральный, приглашающий)
- Illustration: тёплая, уютная, placeholder для будущих графических ассетов
- CTA: один главный призыв к действию

**Accessibility:**
- `aria-label` на CTA включает полное описание действия
- Illustration: `alt="Иллюстрация: дневник эмоций"` (декоративная)

---

### 3.7 Progress Indicators

**Когда использовать:** Прогресс шагов, прогресс курса, XP-прогресс, прогресс загрузки.

**Связь с wireframes:** WF-032 (CBT steps), WF-009 (health tree), WF-035 (exercise progress)

```
Linear (CBT steps):                 Circular (course):
████████░░░░░░░  40%               ┌──────┐
Шаг 2 из 5                        │ ╭──╮ │   stroke-dasharray
                                   │ │65│ │   animation
                                   │ ╰──╯ │   65% complete
                                   │  %   │
                                   └──────┘

XP Bar:
┌─────────────────────────────────────────┐
│ Уровень 3     240 / 500 XP             │
│ ████████████████░░░░░░░░░  48%          │
│                                         │
│ Height: 8px, border-radius: 4px        │
│ Fill: gradient (--eb-color-gamification)│
└─────────────────────────────────────────┘
```

**Типы:**

| Тип | Когда | Размер |
|-----|-------|--------|
| Linear bar | CBT steps, onboarding, SOS protocol | Height 4px, full width |
| Circular | Course completion, module progress | 64x64px |
| XP bar | Health tree, level progress | Height 8px, full width |
| Determinate | Известное количество шагов | Процент виден |
| Indeterminate | Неизвестное время (upload) | Shimmer/pulse |

**Accessibility:**
- `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- `aria-label="Прогресс: 48 процентов"` (текстовое описание)

---

### 3.8 Pull-to-Refresh

**Когда использовать:** Обновление ленты дневника, списка сессий, каталога.

**Связь с wireframes:** WF-024 (diary list), WF-017 (session history)

```
Pull gesture:
  ↓↓↓
┌─────────────────────────┐
│   ↻ (spinning)          │  ← Pull indicator
├─────────────────────────┤
│                         │
│   [Content reloading    │
│    with skeleton]       │
│                         │
└─────────────────────────┘
```

**Спецификация:**
- Pull threshold: 64px для активации
- Indicator: spinning icon, centered
- Release: trigger refresh, skeleton overlay on content
- Spring animation: bounce back при отпускании
- Haptic: impactOccurred('light') при активации threshold

**Accessibility:**
- `aria-live="polite"` объявляет "Обновление..." и "Обновлено"

---

## 4. Safety-Critical Interactions

### 4.1 SOS Button

**Когда использовать:** ВСЕГДА видна на КАЖДОМ экране (кроме SOS/Crisis overlay и онбординга). Единственная точка входа в экстренную помощь.

**Связь с wireframes:** WF-019 (SOS button), WF-020 (SOS activated)

```
SOS Button (floating):
                        ┌────────┐
                        │  SOS   │   56x56px
                        │   ❤️   │   z-index: 900
                        └────────┘   position: fixed
                                     bottom-right
                                     margin: 16px from edges,
                                     above tab bar

States:
  Default:    Red background, white text, subtle shadow
  Pressed:    Scale 0.95, darker red, haptic impact
  Pulsating:  Subtle pulse animation (crisis trigger detected)
              pulse: scale(1) → scale(1.05) → scale(1)
              2s infinite, only when TRG-001 triggered
```

**КРИТИЧЕСКОЕ правило: 1-tap activation, NO confirmation dialog.**

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Размер | 56x56px |
| Touch target | 56x56px (соответствует визуальному) |
| Z-index | 900 |
| Position | fixed, bottom: 72px (16px above tab bar), right: 16px |
| Background | --eb-color-sos (#E53935) |
| Shadow | --eb-shadow-sos (elevated, 4px blur) |
| Border radius | 50% (круг) |
| Contrast | WCAG AAA (white on red) |
| Haptic | impactOccurred('heavy') при нажатии |
| Тарифная блокировка | НИКОГДА (DEC-027, CON-005) |

**Поведение:**
- 1 тап = мгновенный переход на SOS Activated (WF-020)
- Нет confirmation dialog (скорость критична)
- При нажатии: haptic heavy impact + full-screen transition
- При обнаружении кризисных триггеров (TRG-001): пульсирующая анимация
- Скрывается ТОЛЬКО на экранах SOS/Crisis (уже в SOS) и при онбординге

**Accessibility:**
- `aria-label="Экстренная помощь SOS"`
- `role="button"`
- High contrast: AAA level -- белый текст на красном (#E53935)
- Screen reader: при пульсации объявляет "Кнопка SOS доступна"

---

### 4.2 Crisis Overlay

**Когда использовать:** Автоматически при обнаружении кризис-детектором critical-уровня.

**Связь с wireframes:** WF-021 (crisis overlay)

```
NON-DISMISSIBLE OVERLAY:
┌─────────────────────────────────┐
│ ████████████████████████████████│
│ ██                            ██│
│ ██      ⚠ Важно               ██│  z-index: 1000
│ ██                            ██│  NO close button
│ ██  Мы заметили, что тебе     ██│  NO swipe dismiss
│ ██  сейчас может быть         ██│  NO BackButton
│ ██  очень тяжело.             ██│
│ ██                            ██│  Backdrop: 90% opacity
│ ██ ┌──────────────────────┐   ██│
│ ██ │ 📞 Телефон доверия   │   ██│  ← Primary CTA
│ ██ │    8-800-2000-122    │   ██│     tappable tel: link
│ ██ └──────────────────────┘   ██│
│ ██                            ██│
│ ██ ┌──────────────────────┐   ██│
│ ██ │ 🫁 Дыхательное упр.  │   ██│  ← Secondary CTA
│ ██ └──────────────────────┘   ██│
│ ██                            ██│
│ ██ ┌──────────────────────┐   ██│
│ ██ │ 💬 Мне стало лучше   │   ██│  ← ONLY exit
│ ██ │    (hold 2s)         │   ██│     requires tap+hold
│ ██ └──────────────────────┘   ██│
│ ██                            ██│
│ ████████████████████████████████│
└─────────────────────────────────┘
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Z-index | 1000 (максимальный в приложении) |
| Backdrop | 90% opacity, --eb-color-gray-900 |
| Close button | ОТСУТСТВУЕТ (намеренно) |
| BackButton | Скрыт (BackButton.hide()) |
| Swipe dismiss | Отключен |
| "Мне стало лучше" | Требует tap + hold 2s |
| Haptic | notificationOccurred('warning') при появлении |

**Поведение "Мне стало лучше" (tap+hold exit):**

```
State 1: Default          State 2: Holding         State 3: Released
┌────────────────┐       ┌────────────────┐       ┌────────────────┐
│ Мне стало лучше│  →    │ ████████░░░░░░ │  →    │ ✅ Закрытие    │
│                │       │ Держи 2 сек... │       │                │
└────────────────┘       └────────────────┘       └────────────────┘
  tap+hold start         progress fill 2s         overlay closes
                         release early = reset
```

- Tap + hold: прогресс-бар заполняется за 2 секунды
- Если отпустить раньше: прогресс сбрасывается (предотвращение случайного закрытия)
- При успешном hold: overlay закрывается, haptic success
- При повторном открытии WebApp после закрытия с active overlay: overlay показывается снова

**Accessibility:**
- `role="alertdialog"`, `aria-modal="true"`
- `aria-label="Кризисное оповещение. Если вам нужна помощь, позвоните на телефон доверия."`
- Focus trap: фокус зациклен внутри overlay
- Screen reader озвучивает весь текст overlay при появлении

---

### 4.3 Emergency Call

**Когда использовать:** Звонок на горячую линию из SOS или Crisis overlay.

**Связь с wireframes:** WF-020 (SOS activated), WF-021 (crisis overlay), WF-022 (emergency contacts)

```
Tappable phone link:
┌──────────────────────────────┐
│ 📞 Телефон доверия           │
│    8-800-2000-122            │  ← tappable area: full card
│    Бесплатно, 24/7           │
└──────────────────────────────┘
  Touch target: full card width, min 56px height
  Action: openLink('tel:88002000122')
  NO confirmation modal (speed critical)
```

**КРИТИЧЕСКОЕ правило:** Нет confirmation dialog перед звонком. Скорость важнее предотвращения случайного нажатия.

**Спецификация:**
- Link type: `tel:88002000122` через `Telegram.WebApp.openLink()`
- Touch target: full card width, min 56px height
- Visual: крупный шрифт номера, зеленая иконка телефона
- Haptic: impactOccurred('medium') при тапе

**Accessibility:**
- `role="link"`, `aria-label="Позвонить на телефон доверия 8-800-2000-122, бесплатно, круглосуточно"`

---

### 4.4 Breathing Animation

**Когда использовать:** SOS-протокол дыхательного упражнения, standalone дыхательные практики.

**Связь с wireframes:** WF-023 (SOS breathing), WF-031 (breathing exercise)

```
4-phase cycle (4-7-8 pattern):

Phase 1: Вдох (4s)         Phase 2: Задержка (7s)
┌──────────────────┐       ┌──────────────────┐
│                  │       │                  │
│    ╭───────╮     │       │   ╭─────────╮    │
│   ╱         ╲    │       │  ╱           ╲   │
│  │  EXPAND   │   │       │ │   HOLD MAX  │  │
│  │  → → → →  │   │       │ │   (steady)  │  │
│   ╲         ╱    │       │  ╲           ╱   │
│    ╰───────╯     │       │   ╰─────────╯    │
│   Вдохни...      │       │  Задержи...      │
└──────────────────┘       └──────────────────┘

Phase 3: Выдох (8s)        Phase 4: Задержка (4s)
┌──────────────────┐       ┌──────────────────┐
│                  │       │                  │
│    ╭─────╮       │       │      ╭───╮       │
│   ╱       ╲      │       │     ╱     ╲      │
│  │CONTRACT │     │       │    │ HOLD  │     │
│  │ ← ← ← ←│     │       │    │  MIN  │     │
│   ╲       ╱      │       │     ╲     ╱      │
│    ╰─────╯       │       │      ╰───╯       │
│   Выдохни...     │       │   Задержи...     │
└──────────────────┘       └──────────────────┘
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Circle min size | 80px diameter |
| Circle max size | 200px diameter |
| Easing | --eb-ease-gentle (cubic-bezier(0.4, 0.0, 0.2, 1)) |
| Colors | Sage green (inhale) -> soft blue (hold) -> sage (exhale) |
| Phase label | Centered above circle, changes per phase |
| Phase timer | Progress bar under circle |
| Cycle counter | "Цикл N из M" под таймером |
| Default cycles | 5 |

**CSS Animation (пример 4-4-4-4 square breathing):**

```css
@keyframes breathe-circle {
  0%   { transform: scale(0.5); background: var(--eb-color-sage); }
  25%  { transform: scale(1.0); background: var(--eb-color-sage); }
  50%  { transform: scale(1.0); background: var(--eb-color-blue-light); }
  75%  { transform: scale(0.5); background: var(--eb-color-blue-light); }
  100% { transform: scale(0.5); background: var(--eb-color-sage); }
}
```

**Поведение:**
- Full-screen immersive: скрыть tab bar, SOS button, header
- Phase label меняется: "Вдохни..." -> "Задержи..." -> "Выдохни..." -> "Задержи..."
- Haptic: selectionChanged() при каждой смене фазы (опционально)
- Пауза: замораживает анимацию и таймер, кнопка "Продолжить"
- Завершение: плавный fade-out -> экран результата

**Accessibility:**
- `aria-live="assertive"` на phase label (объявляет текущую фазу)
- `prefers-reduced-motion`: вместо анимации -- текст с таймером обратного отсчёта
- `aria-label` на circle: "Дыхательное упражнение. Текущая фаза: вдох"

---

### 4.5 SOS Exit

**Когда использовать:** Закрытие SOS Activated экрана (WF-020).

**Связь с wireframes:** WF-020 (close button)

```
SOS Exit Button (intentionally small):
┌─────────────────────────────────┐
│                                 │
│  [SOS content...]               │
│                                 │
│                                 │
│        Закрыть ×                │  ← Small, muted text
│                                 │     Font: 14px
│                                 │     Color: muted gray
│                                 │     Touch target: 44x44
│                                 │     (despite small visual)
└─────────────────────────────────┘
```

**Спецификация:**
- Visual: маленький, приглушённый (14px, muted gray) -- намеренно менее заметный чем actions помощи
- Touch target: 44x44px (достаточный для accessibility, но визуально скромный)
- Position: bottom center, под основными actions
- No haptic при закрытии (скромное действие)

**Принцип:** Кнопка закрытия намеренно менее заметна, чтобы пользователь в кризисе сначала увидел варианты помощи.

---

## 5. Gamification Interactions

### 5.1 Tree Growth Animation

**Когда использовать:** Визуализация прогресса на Dashboard и в расширенном виде дерева.

**Связь с wireframes:** WF-007 (home tree widget), WF-009 (health tree expanded)

```
Level Up Animation:

Before:                     During:                      After:
🌱 Росток                  🌱 → 🪴                     🪴 Саженец
100/100 XP                 ✨ [confetti-like            0/200 XP
                              gentle particles]
                           scale(1) → scale(1.05)
                           → scale(1) (600ms bounce)
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Growth animation | scale 1 -> 1.05 -> 1, 600ms |
| Easing | cubic-bezier(0.34, 1.56, 0.64, 1) -- bounce |
| Level-up celebration | Gentle particles (not aggressive confetti) |
| Particles | 8-12 small circles, fade-out over 1s |
| Colors | Soft greens, golds (--eb-color-gamification) |
| Haptic | notificationOccurred('success') |

**Уровни дерева:**

| Уровень | Emoji | XP Range |
|---------|-------|----------|
| Росток | 🌱 | 0--100 |
| Саженец | 🪴 | 100--300 |
| Молодое дерево | 🌳 | 300--500 |
| Зрелое дерево | 🌲 | 500--1000 |
| Сад | 🏡 | 1000+ |

**Принцип (DEC-031):** Дерево НИКОГДА не уменьшается и не увядает. Нет наказания за пропуски.

**Accessibility:**
- `aria-label="Дерево здоровья: уровень Молодое дерево, 240 из 500 очков опыта"`
- Level-up: `aria-live="assertive"` объявляет "Поздравляем! Новый уровень: Саженец"

---

### 5.2 XP Award Animation

**Когда использовать:** После завершения действия, дающего XP (запись в дневник, завершение упражнения, check-in).

**Связь с wireframes:** WF-027 (diary saved +10XP), WF-034 (exercise complete +15XP)

```
XP Floating Text Animation:

  +15 XP ↑        Frame 0:   opacity 1, y: 0
         ↑        Frame 300: opacity 1, y: -30px
          ↑       Frame 400: opacity 0.5, y: -40px
           ·      Frame 500: opacity 0, y: -50px (removed)
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Text | "+N XP" (N = earned points) |
| Font | Bold, 16px |
| Color | --eb-color-gamification-accent (gold) |
| Animation | Float up 50px + fade out |
| Duration | 500ms total |
| Easing | ease-out |
| Fade start | At 300ms (last 200ms = fade out) |
| Position | Near the action that triggered XP |

**Поведение:**
- Text появляется рядом с элементом, вызвавшим награду
- Плавно поднимается вверх (translateY: 0 -> -50px)
- Fade-out в последние 200ms
- Одновременно обновляется XP bar (если виден на экране)

**Accessibility:**
- `aria-live="polite"` объявляет "Получено 15 очков опыта"
- `prefers-reduced-motion`: XP показывается как static text на 2s, без анимации

---

### 5.3 Streak Display

**Когда использовать:** Dashboard (WF-007), профиль, мотивационные виджеты.

**Связь с wireframes:** WF-007 (home streak widget), WF-051 (streak view)

```
Active streak:                    Reset streak (guilt-free):
┌───────────────────────────┐    ┌───────────────────────────┐
│ 🔥 Серия: 5 дней          │    │ 🌱 Начни новую серию      │
│ Отличная регулярность!    │    │ Продолжай в своём темпе!  │
└───────────────────────────┘    └───────────────────────────┘
  accent color, warm tone          soft color, encouraging
```

**КРИТИЧЕСКИЙ принцип (DEC-031):** НЕТ наказания за пропуски. Сообщение при потере streak:
- НЕ: "Ты потерял серию" / "Серия сброшена"
- ДА: "Продолжай в своём темпе!" / "Начни новую серию"

**Спецификация:**
- Flame icon: анимируется при активной серии (мягкое покачивание, 2s infinite)
- Counter: число дней, bold accent
- Message: encouraging, varies by streak length
- Reset: мягкая смена на "seedling" icon и ободряющее сообщение

**Accessibility:**
- `aria-label="Серия активности: 5 дней подряд"`
- При потере серии: "Начни новую серию активности"

---

### 5.4 Achievement Unlock

**Когда использовать:** При достижении milestone (первая неделя, 10 упражнений, 5 записей).

**Связь с wireframes:** WF-050 (achievements)

```
Achievement Reveal Animation:

Frame 0: Badge hidden          Frame 1: Badge appears       Frame 2: Settled
┌──────────────┐              ┌──────────────┐             ┌──────────────┐
│              │              │    ✨🏆✨     │             │     🏆       │
│              │   →250ms→    │              │   →500ms→   │  Первая      │
│              │              │  scale(1.3)  │             │  неделя!     │
│              │              │  glow effect │             │  +50 XP      │
└──────────────┘              └──────────────┘             └──────────────┘
  opacity: 0                    opacity: 1                   scale: 1
  scale: 0.5                    scale: 1.3                   glow: none
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Reveal | scale 0.5 -> 1.3 -> 1.0, 750ms total |
| Glow | Box-shadow pulse, gold color, 500ms |
| Haptic | notificationOccurred('success') |
| XP text | Float-up animation (reuse 5.2 pattern) |
| Share button | Optional, "Поделиться" -> Telegram share |

**Поведение:**
- Badge появляется с scale + glow анимацией
- XP награда показывается одновременно (float-up)
- Haptic success при reveal
- Share: опциональная кнопка для шаринга в Telegram (без давления)
- Toast: "Новое достижение: Первая неделя!" (на экранах без dedicated view)

**Accessibility:**
- `aria-live="assertive"` для объявления нового достижения
- Screen reader: "Получено достижение: Первая неделя. Плюс 50 очков опыта"

---

## 6. Media Interactions

### 6.1 Voice Recording

**Когда использовать:** Голосовой ввод в AI-чате.

**Связь с wireframes:** WF-014 (chat voice input)

```
Recording Interface (overlay):
┌───────────────────────────────────┐
│                                   │
│   ▁▃▅▇▅▃▁▃▅▇▅▃▁                  │  ← Waveform (real-time)
│                                   │
│          0:04                     │  ← Timer (seconds)
│                                   │
│   ❌ Отмена          ✅ Готово    │  ← 48x48 each
│                                   │
└───────────────────────────────────┘
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Waveform | Real-time audio visualization, 128px width |
| Bars | 20-30 vertical bars, height mapped to amplitude |
| Animation | 60fps update, smooth interpolation |
| Timer | MM:SS format, updates every second |
| Max duration | 60 seconds |
| Cancel | Discard recording, return to text input |
| Done | Send to STT -> text in input -> auto-send |
| Haptic | impactOccurred('medium') at start |

**Поведение:**
- Запись начинается при тапе на 🎤
- Waveform визуализирует аудио в реальном времени
- Cancel (❌): запись отменяется, возврат к text input
- Done (✅): аудио отправляется на STT, результат вставляется в input
- Max 60s: автоматический stop и send при достижении лимита
- Permission: запрос разрешения на микрофон при первом использовании

**Accessibility:**
- `aria-label="Запись голосового сообщения. Время: 4 секунды"`
- Cancel: `aria-label="Отменить запись"`
- Done: `aria-label="Завершить запись и отправить"`

---

### 6.2 Audio Playback

**Когда использовать:** Прослушивание медитаций, TTS-ответов AI.

**Связь с wireframes:** WF-031 (breathing with audio), meditation player (в "Ещё" разделе)

```
Mini Player:
┌───────────────────────────────────┐
│ ▶ ━━━━━━━●━━━━━━━━━━━  2:30/5:00 │
│   Play     Progress bar    Time   │
│   44x44    height: 4px           │
└───────────────────────────────────┘

Controls:
  ▶ / ⏸  — Play/Pause toggle, 44x44px
  Progress — tappable/draggable, 4px track, 24px thumb
  Time     — current / total, muted text
```

**Спецификация:**

| Параметр | Значение |
|----------|----------|
| Play/Pause | Toggle, 44x44px |
| Progress bar | 4px track, 24px thumb (44px touch) |
| Time display | Current / Total (MM:SS) |
| Seek | Tap on track or drag thumb |
| Auto-stop | At end of track |
| Background play | Не поддерживается (Telegram WebApp limitation) |

**Accessibility:**
- Play: `aria-label="Воспроизвести медитацию"` / `aria-label="Пауза"`
- Progress: `role="slider"`, `aria-valuenow` (в секундах)

---

### 6.3 Breathing Circle

**Когда использовать:** Дыхательные упражнения (SOS и standalone).

(Подробная спецификация -- см. раздел 4.4 Breathing Animation)

**CSS Keyframes (квадратное дыхание 4-4-4-4):**

```css
@keyframes breathe-square {
  0%   { transform: scale(0.4); opacity: 0.7; }
  25%  { transform: scale(1.0); opacity: 1.0; }  /* вдох завершён */
  50%  { transform: scale(1.0); opacity: 1.0; }  /* задержка */
  75%  { transform: scale(0.4); opacity: 0.7; }  /* выдох завершён */
  100% { transform: scale(0.4); opacity: 0.7; }  /* задержка */
}

.breathing-circle {
  animation: breathe-square 16s ease-in-out infinite;
  animation-timing-function: var(--eb-ease-gentle);
}
```

**Цветовые переходы:**
- Вдох: --eb-color-sage -> --eb-color-sage-dark
- Задержка: --eb-color-blue-light
- Выдох: --eb-color-blue-light -> --eb-color-sage
- Задержка: --eb-color-sage

---

### 6.4 Image Loading

**Когда использовать:** Загрузка иллюстраций, аватаров, графики.

**Связь с wireframes:** WF-001 (logo), WF-005 (illustrations), WF-041 (psychologist photo)

```
Blur-up technique:

Phase 1: Low-res blur      Phase 2: Full image
┌────────────────────┐     ┌────────────────────┐
│ ░░░░░░░░░░░░░░░░░ │     │                    │
│ ░░ blurred ░░░░░░ │ →   │  [Full resolution  │
│ ░░ thumbnail ░░░░ │     │   image loaded]    │
│ ░░░░░░░░░░░░░░░░░ │     │                    │
└────────────────────┘     └────────────────────┘
  20px thumbnail,            Full image fades in
  CSS blur(20px)             300ms ease-in
```

**Спецификация:**
- Low-res: ~20px wide thumbnail, CSS filter: blur(20px)
- Transition: full image fades in over 300ms when loaded
- Fallback: gray skeleton placeholder if no thumbnail
- Error: generic placeholder icon + "Не удалось загрузить"

**Accessibility:**
- `alt` text на всех images
- Decorative images: `alt=""`, `aria-hidden="true"`
- `loading="lazy"` для off-screen images

---

## 7. Gesture Patterns

### 7.1 Swipe

**Когда использовать:** Onboarding carousel, bottom sheet dismiss, tab switching (ограничено).

**Связь с wireframes:** WF-005 (feature tour carousel)

```
Horizontal Swipe (carousel):
  ← swipe left = next slide
  → swipe right = previous slide

  ┌──────┐ ┌──────┐ ┌──────┐
  │ Slide│→│ Slide│→│ Slide│
  │  1   │ │  2   │ │  3   │
  └──────┘ └──────┘ └──────┘
  Threshold: 30% viewport width
  Snap: spring animation to nearest slide

Vertical Swipe (scroll / dismiss):
  ↓ swipe down = dismiss bottom sheet (if > 30% height)
  ↓ pull down = pull-to-refresh (if at scroll top)
```

**Типы:**

| Gesture | Direction | Usage | Threshold |
|---------|-----------|-------|-----------|
| Carousel swipe | Horizontal | Onboarding slides, feature tour | 30% viewport width |
| Sheet dismiss | Vertical (down) | Close bottom sheet | 30% sheet height |
| Pull-to-refresh | Vertical (down) | Refresh content lists | 64px pull |
| Scroll | Vertical | Content scrolling | Standard |
| Tab switch | Horizontal | NOT SUPPORTED (conflict with carousel) | -- |

**Accessibility:**
- Swipe-based actions ALWAYS have button alternatives
- Carousel: dots are tappable + swipeable
- Sheet dismiss: always has close button alternative

---

### 7.2 Long Press

**Когда использовать:** Context menu на сообщениях в чате, "Мне стало лучше" в crisis overlay.

**Связь с wireframes:** WF-012 (chat message context), WF-021 (crisis hold-to-dismiss)

```
Chat Message Long Press:
  Hold 500ms → Context Menu appears

  ┌───────────────────────────┐
  │ 🤖 Ответ AI...             │
  │                           │
  │  [long press 500ms]       │
  │                           │
  │  ┌───────────────────┐    │
  │  │ 📋 Копировать      │    │  ← Context menu
  │  │ 🚩 Пожаловаться   │    │     appears above/below
  │  └───────────────────┘    │     message
  └───────────────────────────┘

Crisis "Мне стало лучше" Hold:
  Hold 2s → Overlay closes (see 4.2)
```

**Спецификация:**

| Gesture | Duration | Target | Action |
|---------|----------|--------|--------|
| Long press (context menu) | 500ms | Chat messages | Copy, Report |
| Hold-to-dismiss (crisis) | 2000ms | "Мне стало лучше" button | Close crisis overlay |

**Haptic:**
- Context menu: impactOccurred('medium') при появлении
- Crisis hold: notificationOccurred('success') при завершении hold

---

### 7.3 Pull to Refresh

(Подробная спецификация -- см. раздел 3.8)

---

### 7.4 Pinch/Zoom

**Статус: ОТКЛЮЧЕН.**

Pinch/Zoom не используется в контексте приложения. Все элементы имеют фиксированные размеры, оптимизированные для чтения.

**Реализация:** `<meta name="viewport" content="... user-scalable=no">` (не рекомендуется для accessibility). Вместо этого -- игнорировать pinch gesture на уровне CSS touch-action.

```css
.app-container {
  touch-action: pan-y pan-x;  /* разрешить scroll, запретить zoom */
}
```

**Accessibility:** Пользователи с нарушениями зрения используют системный zoom (OS-level), который НЕ блокируется этим правилом.

---

### 7.5 Double Tap

**Статус: ОТКЛЮЧЕН.**

Double tap отключен для предотвращения случайных действий. В контексте психологического приложения случайные тапы недопустимы (особенно в SOS/Crisis flow).

---

## 8. Transition & Animation Specs

### 8.1 Сводная таблица анимаций

| Анимация | Duration | Easing | CSS Property |
|----------|----------|--------|--------------|
| Screen transition (forward) | 300ms | ease-in-out | transform: translateX |
| Screen transition (back) | 300ms | ease-in-out | transform: translateX |
| Modal open | 250ms | ease-out | transform: translateY + opacity |
| Modal close | 200ms | ease-in | transform: translateY + opacity |
| Backdrop fade in | 200ms | linear | opacity |
| Backdrop fade out | 150ms | linear | opacity |
| Toast in | 200ms | ease-out | transform: translateY |
| Toast out | 150ms | ease-in | transform: translateY |
| Toast auto-dismiss | 3000ms | -- | delay before out |
| Skeleton shimmer | 1500ms | ease-in-out | background-position (infinite) |
| XP reward float-up | 500ms | ease-out | transform: translateY + opacity |
| XP fade-out | 200ms (last) | linear | opacity |
| Tree growth | 600ms | bounce | transform: scale |
| Achievement reveal | 750ms | bounce | transform: scale + box-shadow |
| Checkmark success | 500ms | bounce | transform: scale + opacity |
| Breathing circle | 16s (4-4-4-4) | --eb-ease-gentle | transform: scale + bg-color |
| Chip select | 150ms | ease-out | transform: scale + bg-color |
| Toggle switch | 200ms | ease | transform: translateX |
| Emotion picker select | 150ms | ease-out | transform: scale + border |
| Button press | 100ms | ease-in | transform: scale(0.95) |
| SOS pulse | 2000ms | ease-in-out | transform: scale (infinite) |
| Waveform bars | 16ms | -- | height (60fps) |

### 8.2 Easing функции

```css
:root {
  /* Стандартные */
  --eb-ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --eb-ease-in: cubic-bezier(0.4, 0.0, 1, 1);
  --eb-ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --eb-ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);

  /* Специальные */
  --eb-ease-gentle: cubic-bezier(0.4, 0.0, 0.2, 1);     /* Для дыхания */
  --eb-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);   /* Для gamification */
  --eb-ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Для success */
}
```

### 8.3 Reduced Motion

При `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Исключения: функциональные анимации сохраняются как static */
  .breathing-circle {
    /* Заменяется текстовым таймером */
  }

  .skeleton-shimmer {
    /* Статичный серый фон вместо shimmer */
  }
}
```

**Принцип:** Все анимации отключаются, функциональность сохраняется. Breathing exercise показывает текстовый таймер вместо анимированного круга.

---

## 9. Accessibility Interactions

### 9.1 Focus Management

**Связь с wireframes:** Все экраны и модальные окна

```
Focus Order (typical screen):
┌─────────────────────────────────┐
│ [1] BackButton  [2] Title  [3] │  ← Header
├─────────────────────────────────┤
│ [4] First interactive element   │
│ [5] Second interactive element  │  ← Content
│ [6] ...                        │
│ [N] Last interactive element    │
├─────────────────────────────────┤
│ [N+1] SOS Button               │  ← Floating (in tab order)
├─────────────────────────────────┤
│ [N+2] Tab 1  [N+3] Tab 2  ... │  ← Tab bar
└─────────────────────────────────┘
```

**Правила:**
- Логический порядок tab: сверху вниз, слева направо
- Focus trap в модальных окнах (Tab/Shift+Tab зациклен внутри)
- При открытии модала: фокус на первый interactive element внутри
- При закрытии модала: фокус возвращается к trigger element
- Skip-to-content: скрытая ссылка для клавиатурной навигации (пропуск header)
- SOS button: всегда в tab order, но последний перед tab bar

**Focus Indicator:**
- Outline: 2px solid --eb-color-focus (blue), offset 2px
- Не скрывать outline для keyboard navigation
- Скрывать outline только для mouse/touch (`:focus-visible`)

---

### 9.2 Screen Reader

**Связь с wireframes:** Все экраны

**Dynamic Content (aria-live):**

| Контент | aria-live | Причина |
|---------|-----------|---------|
| AI chat messages | polite | Новые сообщения объявляются |
| Breathing phase label | assertive | Критично для выполнения упражнения |
| Crisis overlay | assertive | Safety-critical |
| Toast notifications | polite | Информационные |
| XP rewards | polite | Gamification feedback |
| Timer countdown | off (visual only) | Слишком частые обновления |
| Typing indicator | polite | "AI формирует ответ" |
| Progress bar update | off (запрос только) | Обновляется слишком часто |

**Icon Labels:**

| Иконка | aria-label |
|--------|-----------|
| 🏠 | "Главная" |
| 💬 | "Чат" |
| 📔 | "Дневник" |
| ≡ | "Ещё (меню)" |
| SOS ❤️ | "Экстренная помощь SOS" |
| 🎤 | "Голосовой ввод" |
| ➤ | "Отправить сообщение" |
| 👍 | "Полезно" |
| 👎 | "Не полезно" |
| 🔒 | "Доступно по подписке" |
| 📞 | "Позвонить" |
| ✕ | "Закрыть" |

---

### 9.3 Reduced Motion

(Подробная спецификация -- см. раздел 8.3)

**Ключевые замены:**

| Анимация | С движением | Без движения |
|----------|------------|--------------|
| Screen transition | Slide 300ms | Instant switch |
| Skeleton shimmer | Gradient sweep | Static gray bg |
| Breathing circle | Scale animation | Text timer + phase label |
| Tree growth | Scale bounce | Instant size change |
| XP float-up | Translate + fade | Static text 2s |
| Toast | Slide-up/down | Instant appear/disappear |
| Modal | Slide-up + fade | Instant appear/disappear |
| SOS pulse | Scale infinite | Static (no pulse) |

---

### 9.4 High Contrast

**SOS Button (WCAG AAA):**

| Элемент | Foreground | Background | Contrast Ratio |
|---------|-----------|------------|----------------|
| SOS text | #FFFFFF | #E53935 | 4.6:1 (AA) |
| SOS text (high contrast mode) | #FFFFFF | #C62828 | 5.8:1 (AAA) |

**Crisis overlay:**

| Элемент | Foreground | Background | Contrast Ratio |
|---------|-----------|------------|----------------|
| Heading text | #FFFFFF | rgba(0,0,0,0.9) | 18:1 (AAA) |
| Button text | #FFFFFF | #2E7D32 (call) | 4.8:1 (AA) |
| Phone number | #FFFFFF | #1565C0 (link) | 5.2:1 (AAA) |

**Все interactive elements:** минимум WCAG AA (4.5:1 для normal text, 3:1 для large text).

---

### 9.5 Keyboard Navigation

**Когда использовать:** Bluetooth-клавиатуры на мобильных устройствах, desktop testing.

**Клавиши:**

| Key | Action |
|-----|--------|
| Tab | Следующий interactive element |
| Shift+Tab | Предыдущий interactive element |
| Enter/Space | Активировать кнопку / toggle / checkbox |
| Arrow keys | Навигация внутри radiogroup / slider / spinbutton |
| Escape | Закрыть modal / bottom sheet / context menu |
| Home/End | Min/Max для slider |

**Правила:**
- Все действия доступны с клавиатуры (no mouse-only interactions)
- Focus visible: 2px blue outline
- No keyboard traps (кроме focus trap в модалах, выход через Escape)
- SOS: доступна через Tab, активация через Enter

---

## 10. Telegram WebApp Specific

### 10.1 MainButton

**Когда использовать:** Primary action на текущем экране. Одна кнопка внизу, предоставляемая Telegram SDK.

**Связь с wireframes:** WF-001 -- WF-054 (контекстно на каждом экране)

```
MainButton Layout:
┌─────────────────────────────────┐
│                                 │
│  [Content area]                 │
│                                 │
├─────────────────────────────────┤
│ ┌───────────────────────────┐   │
│ │     Текст кнопки          │   │  ← MainButton (Telegram SDK)
│ │                           │   │     48px height
│ └───────────────────────────┘   │     Primary color
└─────────────────────────────────┘
```

**Контекстный текст по экранам:**

| Экран | MainButton Text | Состояние |
|-------|----------------|-----------|
| Welcome (WF-001) | "Начать" | Enabled |
| Age verify (WF-002) | Скрыт | -- |
| Goal selection (WF-003) | "Продолжить" | Disabled until selection |
| Assessment (WF-004) | "Продолжить" | Enabled |
| Feature tour (WF-005) | "Далее" / "Готово" (last) | Enabled |
| Notifications (WF-006) | "Начать пользоваться" | Enabled |
| Chat active (WF-012) | Скрыт (есть input) | -- |
| Diary new entry (WF-025) | "Далее" | Disabled until emotion |
| Diary text (WF-026) | "Сохранить" | Enabled |
| CBT step (WF-032) | "Далее" / "Завершить" | Disabled until valid |
| SOS protocol steps | "Следующий шаг" / "Завершить" | Enabled |
| Booking (WF-042) | "Записаться" | Enabled |

**Loading State:**
- `Telegram.WebApp.MainButton.showProgress()`
- Показывает spinner внутри кнопки
- Используется при отправке данных на сервер

**API:**
```javascript
Telegram.WebApp.MainButton.setText('Сохранить');
Telegram.WebApp.MainButton.show();
Telegram.WebApp.MainButton.enable();
Telegram.WebApp.MainButton.disable();  // visual dim
Telegram.WebApp.MainButton.showProgress();
Telegram.WebApp.MainButton.hide();
Telegram.WebApp.MainButton.onClick(callback);
```

---

### 10.2 BackButton

**Когда использовать:** На всех экранах кроме L1 (root tabs).

**Связь с wireframes:** Все L2+ экраны

**API:**
```javascript
// Показать
Telegram.WebApp.BackButton.show();
// Скрыть
Telegram.WebApp.BackButton.hide();
// Обработка нажатия
Telegram.WebApp.BackButton.onClick(() => {
  // Навигация назад
});
```

**Правила:**
- L1 экраны (root tabs): BackButton.hide()
- L2+ экраны: BackButton.show()
- SOS protocol (active): BackButton.hide() (нельзя случайно выйти)
- Crisis overlay: BackButton.hide() (non-dismissible)
- Onboarding disclaimer: BackButton click = WebApp.close()

---

### 10.3 HapticFeedback

**Когда использовать:** Тактильная обратная связь для критических и значимых действий.

**Типы и применение:**

| Метод | Стиль | Когда применять |
|-------|-------|-----------------|
| `impactOccurred('light')` | Лёгкий tap | Pull-to-refresh threshold |
| `impactOccurred('medium')` | Средний tap | Voice recording start, phone call tap |
| `impactOccurred('heavy')` | Сильный tap | SOS button activation |
| `notificationOccurred('success')` | Успех | Exercise complete, entry saved, achievement |
| `notificationOccurred('warning')` | Предупреждение | Crisis overlay appearance |
| `notificationOccurred('error')` | Ошибка | Validation error, network error |
| `selectionChanged()` | Выбор | Slider step, chip select, toggle, emotion pick |

**API:**
```javascript
Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
Telegram.WebApp.HapticFeedback.notificationOccurred('success');
Telegram.WebApp.HapticFeedback.selectionChanged();
```

**Принцип:** Haptic только для значимых событий. Не использовать для каждого тапа -- только для SOS, completions, selections, errors.

---

### 10.4 Viewport Management

**expand() / close():**

```javascript
// При запуске: развернуть на весь экран
Telegram.WebApp.expand();

// При нажатии "Закрыть" в настройках:
Telegram.WebApp.close();
```

**SafeAreaInsets:**
- Top: учитывать для header (status bar, notch)
- Bottom: учитывать для tab bar и MainButton

```css
.app-container {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar {
  bottom: env(safe-area-inset-bottom);
}
```

**ViewportStableHeight:**
- Использовать для корректной работы с клавиатурой
- Когда клавиатура открыта: контент не перекрывается
- Input bar поднимается вместе с клавиатурой

```javascript
Telegram.WebApp.onEvent('viewportChanged', (event) => {
  if (event.isStateStable) {
    // Adjust layout based on viewport height
  }
});
```

---

### 10.5 Theme Sync

**setHeaderColor / setBackgroundColor:**

```javascript
// Sync with app theme
Telegram.WebApp.setHeaderColor('#FFFFFF');        // Light theme
Telegram.WebApp.setBackgroundColor('#FAFAFA');    // Content bg

// SOS/Crisis mode
Telegram.WebApp.setHeaderColor('#1A1A1A');        // Dark header
Telegram.WebApp.setBackgroundColor('#1A1A1A');    // Dark bg

// Breathing exercise (immersive)
Telegram.WebApp.setHeaderColor('#E8F5E9');        // Sage green
Telegram.WebApp.setBackgroundColor('#E8F5E9');
```

**Правила:**
- Header color синхронизируется с текущим экраном
- SOS/Crisis: тёмная тема для успокоения
- Breathing: calming sage/blue tones
- Dashboard: light, neutral

---

### 10.6 Native Popups

**showPopup / showAlert:**

**Когда использовать:** Подтверждения критических действий (удаление аккаунта, прерывание упражнения).

```javascript
// Подтверждение прерывания упражнения
Telegram.WebApp.showPopup({
  title: 'Прервать упражнение?',
  message: 'Прогресс текущего шага будет потерян.',
  buttons: [
    { id: 'cancel', type: 'cancel', text: 'Продолжить' },
    { id: 'leave', type: 'destructive', text: 'Прервать' }
  ]
}, (buttonId) => {
  if (buttonId === 'leave') navigateBack();
});

// Информационное уведомление
Telegram.WebApp.showAlert('Запись сохранена!');
```

**Правила:**
- Использовать нативные popups Telegram для критических подтверждений
- Для обычных уведомлений -- toast (не popup)
- Destructive actions: красная кнопка (type: 'destructive')
- Cancel: всегда первая опция (type: 'cancel')

**Когда НЕ использовать popup:**
- SOS activation (NO confirmation -- speed critical!)
- Emergency call (NO confirmation -- speed critical!)
- Regular save/submit actions (toast instead)
- Navigation between screens (just navigate)

---

## Приложение A: CSS Custom Properties (Animation Tokens)

```css
:root {
  /* Durations */
  --eb-duration-instant: 0ms;
  --eb-duration-fast: 100ms;
  --eb-duration-normal: 200ms;
  --eb-duration-slow: 300ms;
  --eb-duration-modal-open: 250ms;
  --eb-duration-modal-close: 200ms;
  --eb-duration-toast: 3000ms;
  --eb-duration-shimmer: 1500ms;
  --eb-duration-xp-float: 500ms;
  --eb-duration-tree-grow: 600ms;
  --eb-duration-achievement: 750ms;
  --eb-duration-checkmark: 500ms;
  --eb-duration-chip: 150ms;
  --eb-duration-toggle: 200ms;
  --eb-duration-button-press: 100ms;
  --eb-duration-sos-pulse: 2000ms;
  --eb-duration-breathe-cycle: 16000ms;

  /* Easings */
  --eb-ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --eb-ease-in: cubic-bezier(0.4, 0.0, 1, 1);
  --eb-ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --eb-ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
  --eb-ease-gentle: cubic-bezier(0.4, 0.0, 0.2, 1);
  --eb-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --eb-ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Z-index scale */
  --eb-z-content: 1;
  --eb-z-sticky: 100;
  --eb-z-tabbar: 800;
  --eb-z-toast: 850;
  --eb-z-sos: 900;
  --eb-z-modal-backdrop: 950;
  --eb-z-modal: 960;
  --eb-z-crisis: 1000;
}
```

---

## Приложение B: Cross-Reference Matrix

| Паттерн | Wireframes | User Flows | IA Section |
|---------|-----------|------------|------------|
| Bottom Tab Bar | WF-007, WF-011, WF-024 | Все flows | 4.1 Tab Bar |
| BackButton | WF-002 -- WF-054 | Все flows | 4.4 SDK Nav |
| SOS Button | WF-019 | UF-SOS | 4.2 SOS FAB |
| Crisis Overlay | WF-021 | UF-CRISIS | 3.5 SOS Layer |
| Emotion Picker | WF-008, WF-025 | UF-DIARY | 3.4.3 Дневник |
| Chat Input | WF-011, WF-012 | UF-CHAT | 3.4.2 Чат |
| CBT Wizard | WF-032, WF-033 | UF-CBT | 3.4.4 Инструменты |
| Breathing Circle | WF-023, WF-031 | UF-MEDITATION, UF-SOS | 3.5 SOS |
| Tree Growth | WF-009, WF-049 | UF-GAMIFICATION | 3.4.1 Главная |
| XP Award | WF-027, WF-034 | UF-GAMIFICATION | 3.4.1 Главная |
| Streak | WF-007, WF-051 | UF-GAMIFICATION | 3.4.1 Главная |
| Voice Recording | WF-014 | UF-VOICE | 3.4.2 Чат |
| Skeleton Loading | Все экраны | Все flows | -- |
| Toast | WF-003, WF-027 | Все flows | -- |
| MainButton | Все экраны | Все flows | 4.4 SDK Nav |
| Deep Linking | WF-001 | Все flows | 4.5 Deep Links |

---

*Документ создан: UX Agent | Дата: 2026-02-04*
