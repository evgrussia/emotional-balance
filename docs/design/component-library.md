---
title: "Component Library"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
depends_on:
  - "docs/design/design-foundations.md"
  - "docs/design/design-tokens.md"
  - "docs/design/wireframes.md"
  - "docs/design/interaction-patterns.md"
---

# Component Library: Emotional Balance

Полная библиотека UI-компонентов платформы психологической поддержки "Emotional Balance" (Нейро-Психолог 24/7). Каждый компонент спроектирован с учётом mobile-first подхода, WCAG AA доступности, touch-целей не менее 44x44px и эмоциональной безопасности пользователя.

## Содержание

- [A. Inputs (8 компонентов)](#a-inputs)
- [B. Display (8 компонентов)](#b-display)
- [C. Navigation (5 компонентов)](#c-navigation)
- [D. Layout (5 компонентов)](#d-layout)
- [E. Specialized (6 компонентов)](#e-specialized)

---

# A. Inputs

---

## 1. Button

**Purpose:** Основной интерактивный элемент для выполнения действий пользователем.
**Used in:** WF-001 -- WF-054 (все экраны)

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Primary | Сплошная заливка `--eb-color-primary`, белый текст | Основное действие экрана (CTA) |
| Secondary | Обводка `--eb-color-primary`, прозрачный фон | Вторичное действие |
| Ghost | Без обводки, цвет текста `--eb-color-primary` | Третичные действия, inline-ссылки |
| Destructive | Сплошная заливка `--eb-color-error`, белый текст | Удаление, отмена подписки |
| SOS | Сплошная заливка `--eb-color-sos`, белый текст, усиленная тень | Экстренная помощь |

### Sizes

| Size | Height | Padding (x / y) | Font | Use case |
|------|--------|------------------|------|----------|
| sm | 36px | 16px / 8px | 14px medium | Inline-действия, чипы |
| md | 44px | 24px / 12px | 16px semibold | Стандартные кнопки |
| lg | 48px | 24px / 12px | 16px semibold | Telegram MainButton, CTA |

### States

```
Default  -->  Hover  -->  Active  -->  Disabled  -->  Loading
```

| State | Visual change |
|-------|---------------|
| Default | Фон variant, обычная тень |
| Hover | Фон затемнён (Primary 600), `--eb-shadow-card-hover` |
| Active | Фон затемнён (Primary 700), scale(0.98) |
| Disabled | Opacity 0.4, cursor: not-allowed |
| Loading | Текст скрыт, spinner 20px по центру, disabled |

### Anatomy (ASCII)

```
Full-width button:
┌──────────────────────────────────────────┐
│         [icon]  Label Text               │  44px height (md)
└──────────────────────────────────────────┘

Icon + Text button:
┌────────────────────────┐
│  [icon] Label Text     │  gap: 8px between icon and text
└────────────────────────┘

Icon-only button:
┌──────────┐
│  [icon]  │  44x44px touch target
└──────────┘

Loading state:
┌────────────────────────┐
│        ◠ (spinner)     │  spinner: 20px, white
└────────────────────────┘
```

### Design Tokens Used

- `--eb-color-primary` / `--eb-color-primary-hover` / `--eb-color-primary-active`
- `--eb-color-sos` / `--eb-color-sos-hover`
- `--eb-color-text-inverse` (white text on filled)
- `--eb-color-text-disabled`
- `--eb-radius-md` (8px)
- `--eb-radius-full` (pill variant)
- `--eb-space-button-x` / `--eb-space-button-y`
- `--eb-space-button-x-sm` / `--eb-space-button-y-sm`
- `--eb-shadow-card` / `--eb-shadow-card-hover`
- `--eb-duration-fast` (150ms)
- `--eb-ease-default`

### Accessibility

- Role: `button`
- ARIA: `aria-label` для icon-only кнопок, `aria-disabled="true"` при disabled
- Focus: visible focus ring `--eb-shadow-focus`, outline 2px `--eb-color-border-focus`
- Keyboard: `Space` / `Enter` для активации
- Touch target: minimum 44x44px (sm допускает 36px высоту, но touch area расширяется до 44px)

### Usage Guidelines

| Do | Don't |
|----|-------|
| Одна Primary-кнопка на экран | Несколько Primary-кнопок рядом |
| Full-width на мобильных | Узкие кнопки с обрезанным текстом |
| Показывать loading при async-операциях | Блокировать UI без обратной связи |
| Использовать Destructive для удаления | Красный цвет для обычных действий |
| SOS без confirmation-диалога | Добавлять подтверждение к SOS |

---

## 2. TextInput

**Purpose:** Ввод текстовой информации пользователем.
**Used in:** WF-003 -- WF-006, WF-011, WF-025, WF-042

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Default | Обводка `--eb-color-border`, фон `--eb-color-bg-elevated` | Стандартный ввод |
| Error | Обводка `--eb-color-error`, красный helper text | Ошибка валидации |
| Success | Обводка `--eb-color-success`, зелёная иконка | Валидный ввод |
| Disabled | Фон `--eb-color-bg-tertiary`, opacity 0.6 | Неактивное поле |

### States

```
Empty --> Focused --> Filled --> Error --> Success --> Disabled
```

| State | Border | Background | Label |
|-------|--------|------------|-------|
| Empty | `--eb-color-border` | `--eb-color-bg-elevated` | `--eb-color-text-secondary` |
| Focused | `--eb-color-border-focus` (2px) | `--eb-color-bg-elevated` | `--eb-color-primary` |
| Filled | `--eb-color-border` | `--eb-color-bg-elevated` | `--eb-color-text-secondary` |
| Error | `--eb-color-error` (2px) | `--eb-color-error-bg` | `--eb-color-error-text` |
| Success | `--eb-color-success` (2px) | `--eb-color-bg-elevated` | `--eb-color-success-text` |
| Disabled | `--eb-color-border` opacity 0.5 | `--eb-color-bg-tertiary` | `--eb-color-text-disabled` |

### Anatomy (ASCII)

```
┌─ Label ────────────────────────────┐
│                                    │
│  Placeholder / Input text          │  min-height: 44px
│                                    │
└────────────────────────────────────┘
  Helper text / Error message     0/240   <-- char counter (optional)

Textarea (auto-grow):
┌─ Label ────────────────────────────┐
│  Line 1 of multi-line input       │
│  Line 2 continues here            │  auto-grow
│  Line 3...                        │  max-height: 200px
│                                   │
└────────────────────────────────────┘
  Helper text                    56/500
```

### Design Tokens Used

- `--eb-color-border` / `--eb-color-border-focus`
- `--eb-color-bg-elevated` / `--eb-color-bg-tertiary`
- `--eb-color-text-primary` / `--eb-color-text-secondary` / `--eb-color-text-disabled`
- `--eb-color-error` / `--eb-color-error-bg` / `--eb-color-error-text`
- `--eb-color-success` / `--eb-color-success-text`
- `--eb-radius-sm` (4px)
- `--eb-space-input-x` (12px) / `--eb-space-input-y` (10px)
- `--eb-font-size-base` (16px minimum -- предотвращает zoom на iOS)
- `--eb-duration-fast` (150ms)

### Accessibility

- Role: `textbox` (input) / `textbox` с `aria-multiline="true"` (textarea)
- ARIA: `aria-label` или связь через `<label>`, `aria-describedby` для helper text, `aria-invalid="true"` при ошибке
- Focus: visible focus ring
- Keyboard: стандартная навигация, `Tab` для перехода
- Input size: min 16px (предотвращает iOS auto-zoom)

### Usage Guidelines

| Do | Don't |
|----|-------|
| Показывать label всегда | Использовать только placeholder как label |
| Helper text для пояснений | Длинные error messages без actionable guidance |
| Auto-grow textarea до max-height | Фиксированная высота для длинных текстов |
| Char counter при лимитах | Обрезание ввода без предупреждения |
| 16px minimum font size | Font size < 16px (вызывает zoom на iOS) |

---

## 3. Select / Dropdown

**Purpose:** Выбор одного или нескольких значений из списка.
**Used in:** WF-003, WF-006, WF-042, WF-046

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Single select | Выбор одного значения | Категория, тип упражнения |
| Multi select | Выбор нескольких значений | Темы, теги |
| Searchable | С полем поиска | Длинные списки (города, специализации) |

### States

```
Closed --> Open (bottom sheet) --> Selected --> Closed
```

### Anatomy (ASCII)

```
Trigger (closed):
┌────────────────────────────────────┐
│  Label                             │
│  Selected value              [v]   │  44px height
└────────────────────────────────────┘

Bottom Sheet (open, mobile):
┌─────────────────────────────────────┐
│  ┌─────── Handle ───────┐          │
│                                     │
│  Заголовок                     [x]  │
│  ─────────────────────────────────  │
│  [ Поиск...                     ]   │  <-- optional search
│  ─────────────────────────────────  │
│  ○  Option 1                        │  48px per row
│  ●  Option 2 (selected)             │
│  ○  Option 3                        │
│  ○  Option 4                        │
│  ─────────────────────────────────  │
│  [ Подтвердить ]                    │  <-- multi-select only
└─────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-bg-elevated` (sheet background)
- `--eb-color-border` (trigger border)
- `--eb-color-primary` (selected indicator)
- `--eb-radius-sm` (trigger) / `--eb-radius-lg` (sheet top corners)
- `--eb-shadow-modal`
- `--eb-z-modal` (500)
- `--eb-space-3` (12px item gap)
- `--eb-duration-slow` (350ms slide up)
- `--eb-ease-out`

### Accessibility

- Role: `combobox` (trigger), `listbox` (list), `option` (items)
- ARIA: `aria-expanded`, `aria-haspopup="listbox"`, `aria-selected` на опциях
- Focus: focus trap внутри bottom sheet
- Keyboard: `Arrow Up/Down` для навигации, `Enter` для выбора, `Escape` для закрытия

### Usage Guidelines

| Do | Don't |
|----|-------|
| Bottom sheet на мобильных | Нативный `<select>` (плохой UX на mobile) |
| Поиск при > 7 элементов | Длинные списки без поиска |
| Показывать выбранное значение в trigger | Placeholder вместо выбранного |
| Подтверждение для multi-select | Закрывать при каждом тапе в multi-select |

---

## 4. Checkbox

**Purpose:** Переключение булева значения, согласие с условиями.
**Used in:** WF-005, WF-042, WF-046

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Default | Стандартный checkbox | Настройки, согласия |
| Indeterminate | Частичный выбор (горизонтальная линия) | Групповой выбор |

### States

```
Unchecked --> Checked --> Indeterminate --> Disabled
```

| State | Visual |
|-------|--------|
| Unchecked | Пустой квадрат, border `--eb-color-border-strong` |
| Checked | Заливка `--eb-color-primary`, белая галочка |
| Indeterminate | Заливка `--eb-color-primary`, белая линия |
| Disabled | Opacity 0.4, cursor: not-allowed |

### Anatomy (ASCII)

```
Touch area (44x44px):
┌──────────────────────────────────────┐
│  ┌────┐                             │
│  │ ✓  │  Label text                 │  visual checkbox: 24x24px
│  └────┘                             │  touch target: 44x44px
│         Helper / description text    │
└──────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-primary` (checked fill)
- `--eb-color-border-strong` (unchecked border)
- `--eb-color-text-primary` (label)
- `--eb-color-text-secondary` (description)
- `--eb-radius-sm` (4px checkbox corners)
- `--eb-duration-fast` (150ms transition)
- `--eb-ease-default`

### Accessibility

- Role: `checkbox`
- ARIA: `aria-checked="true|false|mixed"`, `aria-label` или связь через `<label>`
- Focus: visible focus ring вокруг checkbox
- Keyboard: `Space` для переключения

### Usage Guidelines

| Do | Don't |
|----|-------|
| Label всегда рядом, кликабельный | Checkbox без label |
| Вертикальный список при > 2 опций | Горизонтальный ряд при > 3 чекбоксов |
| Indeterminate для групповых операций | Indeterminate для пользовательского ввода |
| Мгновенное применение (без "Сохранить") | Требовать нажатия "Сохранить" для настроек |

---

## 5. Radio

**Purpose:** Выбор одного значения из группы взаимоисключающих вариантов.
**Used in:** WF-003, WF-004, WF-006

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Default | Стандартная radio-кнопка | Выбор одного варианта |
| Card radio | Radio внутри карточки, вся карточка кликабельна | Выбор тарифа, типа упражнения |

### States

| State | Visual |
|-------|--------|
| Unselected | Пустой круг, border `--eb-color-border-strong` |
| Selected | Заливка `--eb-color-primary`, белая точка по центру |
| Disabled | Opacity 0.4 |

### Anatomy (ASCII)

```
Radio group (vertical):
┌──────────────────────────────────────┐
│  ( )  Option A                       │  48px per row
│  (●)  Option B (selected)            │  radio: 24x24px visual
│  ( )  Option C                       │  touch target: 44x44px
└──────────────────────────────────────┘

Card radio variant:
┌──────────────────────────────────────┐
│ ┌──────────────────────────────────┐ │
│ │ (●)  Базовый тариф               │ │
│ │      Описание тарифа             │ │  entire card tappable
│ │      Цена: 299 руб/мес           │ │
│ └──────────────────────────────────┘ │
│ ┌──────────────────────────────────┐ │
│ │ ( )  Премиум тариф               │ │
│ │      Описание тарифа             │ │
│ │      Цена: 799 руб/мес           │ │
│ └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-primary` (selected fill)
- `--eb-color-border-strong` (unselected border)
- `--eb-color-text-primary` / `--eb-color-text-secondary`
- `--eb-radius-full` (circle)
- `--eb-radius-md` (card variant)
- `--eb-space-3` (12px gap between items)
- `--eb-duration-fast`

### Accessibility

- Role: `radiogroup` (container), `radio` (each item)
- ARIA: `aria-checked="true|false"`, `aria-label` на group
- Focus: focus ring, `Arrow Up/Down` для навигации внутри группы
- Keyboard: `Arrow` keys для перемещения, `Space` для выбора

### Usage Guidelines

| Do | Don't |
|----|-------|
| Вертикальный layout | Горизонтальный при > 3 вариантах |
| Один вариант предвыбран (default) | Пустой выбор без default |
| Card radio для сложных вариантов | Стандартный radio для контента с описанием |
| Ясные, различимые labels | Похожие или двусмысленные варианты |

---

## 6. Toggle Switch

**Purpose:** Включение / выключение настройки с мгновенным эффектом.
**Used in:** WF-006, WF-046

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Default | Стандартный toggle | Уведомления, звук, вибрация |

### States

| State | Track color | Thumb position |
|-------|-------------|----------------|
| OFF | `--eb-color-neutral-300` | Слева |
| ON | `--eb-color-primary` | Справа |
| Disabled OFF | `--eb-color-neutral-200` opacity 0.5 | Слева |
| Disabled ON | `--eb-color-primary` opacity 0.5 | Справа |

### Anatomy (ASCII)

```
ON state:
┌──────────────────────────────────────┐
│                                      │
│  Label text                  [███●]  │  track: 44x24px
│  Description (optional)              │  thumb: 20px
│                                      │  touch area: 44x44px
└──────────────────────────────────────┘

OFF state:
┌──────────────────────────────────────┐
│                                      │
│  Label text                  [●░░░]  │
│  Description (optional)              │
│                                      │
└──────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-primary` (ON track)
- `--eb-color-neutral-300` (OFF track)
- `--eb-color-bg-elevated` (thumb)
- `--eb-color-text-primary` (label)
- `--eb-color-text-secondary` (description)
- `--eb-radius-full` (track and thumb)
- `--eb-shadow-xs` (thumb shadow)
- `--eb-duration-fast` (150ms slide)
- `--eb-ease-default`

### Accessibility

- Role: `switch`
- ARIA: `aria-checked="true|false"`, `aria-label` включает название настройки
- Focus: visible focus ring вокруг track
- Keyboard: `Space` / `Enter` для переключения

### Usage Guidelines

| Do | Don't |
|----|-------|
| Label всегда видим слева | Toggle без label |
| Мгновенный эффект (не требует "Сохранить") | Отложенное применение |
| Описание для неочевидных настроек | Сокращённые label без контекста |
| ON = цвет primary (однозначно) | Одинаковый цвет для ON и OFF |

---

## 7. Slider

**Purpose:** Выбор значения на непрерывной шкале.
**Used in:** WF-004, WF-008, WF-020, WF-025

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Mood (1-10) | Цветной градиент track, emoji labels | Оценка настроения, интенсивность |
| Simple | Однотонный track | Громкость, длительность |

### Anatomy (ASCII)

```
Mood slider:
┌──────────────────────────────────────────────┐
│                                              │
│  Слабо ─────────────●────────────── Сильно   │
│                     7                        │
│                                              │
│  Track: 4px height, rounded                  │
│  Thumb: 24px visual (44px touch area)        │
│  Active track: --eb-color-primary            │
│  Inactive track: --eb-color-neutral-300      │
│  Value label: centered below thumb           │
└──────────────────────────────────────────────┘

Detail:
  ═══════════●░░░░░░░░   active (primary) | inactive (neutral)
             |
         thumb 24px visual
         44px touch area
```

### Design Tokens Used

- `--eb-color-primary` (active track)
- `--eb-color-neutral-300` (inactive track)
- `--eb-color-bg-elevated` (thumb fill)
- `--eb-color-text-primary` (value label)
- `--eb-color-text-secondary` (min/max labels)
- `--eb-shadow-sm` (thumb shadow)
- `--eb-radius-full` (track and thumb)
- `--eb-touch-target-min` (44px)

### Accessibility

- Role: `slider`
- ARIA: `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-label="Интенсивность эмоции"`
- Focus: visible focus ring на thumb
- Keyboard: `Left/Right Arrow` для шагов, `Home/End` для min/max

### Usage Guidelines

| Do | Don't |
|----|-------|
| Показывать текущее значение под thumb | Скрытое значение |
| Min/max labels по краям | Числовые шкалы без контекста |
| Целочисленные шаги для mood | Дробные значения для эмоций |
| Haptic feedback при каждом шаге | Тихий slider без обратной связи |

---

## 8. EmotionPicker

**Purpose:** Быстрый визуальный выбор текущей эмоции.
**Used in:** WF-008, WF-025, WF-034

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Grid (2x4) | 8 эмоций в сетке 2 колонки | Daily check-in, дневник |
| Grid (3x3) | 9 эмоций в сетке 3 колонки | Расширенный выбор |
| Compact | Горизонтальный ряд мини-карточек | В чате, после упражнения |

### Anatomy (ASCII)

```
Grid 2x4 (standard):
┌────────────────────────────────────────┐
│  ┌──────────┐    ┌──────────┐         │
│  │    :)     │    │    :|     │         │
│  │  Радость  │    │ Спокойст.│  64x64  │
│  └──────────┘    └──────────┘         │
│  ┌──────────┐    ┌──────────┐         │
│  │    :(     │    │    :S     │         │
│  │  Грусть   │    │  Тревога │  gap: 12px
│  └──────────┘    └──────────┘         │
│  ┌──────────┐    ┌──────────┐         │
│  │    >:(    │    │    XO     │         │
│  │  Злость   │    │  Стресс  │         │
│  └──────────┘    └──────────┘         │
│  ┌──────────┐    ┌──────────┐         │
│  │    :/     │    │    Zzz    │         │
│  │ Одиночест│    │ Усталость│         │
│  └──────────┘    └──────────┘         │
└────────────────────────────────────────┘

Selected state:
┌──────────┐         ┌──────────────┐
│    :S     │  --->   │   ██ :S ██   │  scale(1.1)
│  Тревога  │         │   Тревога    │  border: 2px primary
└──────────┘         │      [v]     │  checkmark overlay
                     └──────────────┘
```

### Sizes

| Size | Cell | Emoji | Padding | Use case |
|------|------|-------|---------|----------|
| Compact | 48x48px | 24px | 12px | В чате, inline |
| Standard | 64x64px | 32px | 16px | Дневник, check-in |
| Large | 80x80px | 40px | 20px | Главный выбор эмоции |

### Design Tokens Used

- Emotion-specific backgrounds (см. design-foundations.md раздел 9.4):
  - Радость: `#FEF9C3` bg / `#CA8A04` icon
  - Грусть: `--eb-color-blue-50` bg / `--eb-color-blue-600` icon
  - Тревога: `--eb-color-lavender-50` bg / `--eb-color-lavender-600` icon
  - Гнев: `--eb-color-coral-50` bg / `--eb-color-coral-600` icon
  - Спокойствие: `--eb-color-sage-50` bg / `--eb-color-sage-600` icon
  - Усталость: `--eb-color-neutral-100` bg / `--eb-color-neutral-600` icon
- `--eb-radius-2xl` (20px for cells)
- `--eb-space-3` (12px gap)
- `--eb-color-primary` (selected border)
- `--eb-duration-fast` (150ms selection animation)
- `--eb-ease-out`

### Accessibility

- Role: `radiogroup` (container), `radio` (each cell)
- ARIA: `aria-checked`, `aria-label="Эмоция: Тревога"`
- Focus: visible focus ring на текущей ячейке
- Keyboard: `Arrow` keys для перемещения по grid, `Space/Enter` для выбора

### Usage Guidelines

| Do | Don't |
|----|-------|
| Single-select (одна эмоция) | Multi-select (выбрать несколько эмоций) |
| Визуальное увеличение выбранного | Только изменение цвета (недостаточно) |
| Haptic feedback при выборе | Тихий выбор без обратной связи |
| Повторный тап снимает выбор | Невозможность отменить выбор |

---

# B. Display

---

## 9. Card

**Purpose:** Контейнер для группировки связанного контента.
**Used in:** WF-007 -- WF-010, WF-024, WF-030, WF-037

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Default | Фон `--eb-color-bg-elevated`, тень `--eb-shadow-card` | Статичный контент |
| Elevated | Усиленная тень `--eb-shadow-md` | Выделенные элементы |
| Outlined | Border `--eb-color-border`, без тени | Списки, каталоги |
| Interactive | Hover/active-состояния, cursor pointer | Кликабельные карточки |

### Anatomy (ASCII)

```
Default card:
┌──────────────────────────────────┐
│                                  │  padding: 16px (--eb-space-card-padding)
│  [Optional image / header]       │  border-radius: 8px (--eb-radius-md)
│                                  │  shadow: --eb-shadow-card
│  Title                           │
│  Description text                │
│                                  │
│  [Optional action area]          │
│                                  │
└──────────────────────────────────┘

Interactive card (hover):
┌──────────────────────────────────┐
│                                  │  shadow: --eb-shadow-card-hover
│  Content...                      │  transform: translateY(-1px)
│                                  │
└──────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-bg-elevated` (background)
- `--eb-color-border` (outlined variant)
- `--eb-shadow-card` / `--eb-shadow-card-hover`
- `--eb-radius-md` (8px standard) / `--eb-radius-xl` (16px hero cards)
- `--eb-space-card-padding` (16px)
- `--eb-space-card-gap` (12px internal gap)
- `--eb-duration-fast` (hover transition)

### Accessibility

- Role: `article` (self-contained) или без role (generic container)
- ARIA: Interactive cards: `role="link"` или `role="button"` с `aria-label`
- Focus: visible focus ring для interactive variant
- Keyboard: `Enter` для активации interactive card

### Usage Guidelines

| Do | Don't |
|----|-------|
| Единообразный padding 16px | Разный padding у разных карточек |
| Interactive для навигационных карточек | Вложенные interactive cards |
| Outlined в списках (экономия visual weight) | Elevated для всех карточек подряд |
| Max 1 primary action per card | Несколько CTA в одной карточке |

---

## 10. Badge

**Purpose:** Краткая метка для статуса, категории или количества.
**Used in:** WF-007, WF-011, WF-024, WF-050

### Variants

| Variant | Background | Text | Use case |
|---------|------------|------|----------|
| Info | `--eb-color-info-bg` | `--eb-color-info-text` | Информационный статус |
| Success | `--eb-color-success-bg` | `--eb-color-success-text` | Завершено, пройдено |
| Warning | `--eb-color-warning-bg` | `--eb-color-warning-text` | Внимание, лимит |
| Error | `--eb-color-error-bg` | `--eb-color-error-text` | Ошибка, критично |
| Neutral | `--eb-color-bg-tertiary` | `--eb-color-text-secondary` | Категория, тег |

### Sizes

| Size | Height | Font | Padding |
|------|--------|------|---------|
| sm | 20px | 12px medium | 4px 8px |
| md | 24px | 14px medium | 4px 10px |

### Anatomy (ASCII)

```
Text badge:              Number badge (notification):
┌──────────────┐         ┌────┐
│  Пройдено    │  pill    │ 3  │  min-width: 20px
└──────────────┘  shape   └────┘  circle if single digit

Dot badge (on icon):
  [icon]
       ●   8px red dot, no text
```

### Design Tokens Used

- Semantic color pairs (`--eb-color-*-bg` / `--eb-color-*-text`)
- `--eb-radius-full` (pill shape)
- `--eb-font-size-xs` / `--eb-font-size-sm`
- `--eb-font-weight-medium`

### Accessibility

- Role: none (decorative) или `status` для dynamic counts
- ARIA: `aria-label` для notification badges ("3 новых уведомления")
- Цвет не единственный индикатор (иконка + цвет + текст)

### Usage Guidelines

| Do | Don't |
|----|-------|
| Краткий текст (1-2 слова или число) | Длинные фразы в badge |
| Контрастные цвета text/bg | Низкий контраст |
| Dot badge для simple notification | Числовой badge если не нужен точный count |
| Семантические цвета по назначению | Красный badge для некритичной информации |

---

## 11. Avatar

**Purpose:** Визуальная идентификация пользователя или AI-ассистента.
**Used in:** WF-007, WF-012, WF-040, WF-041

### Sizes

| Size | Dimension | Use case |
|------|-----------|----------|
| xs | 24px | Inline с текстом, мета-данные |
| sm | 32px | Списки, комментарии |
| md | 40px | Чат-сообщения, карточки |
| lg | 64px | Профиль психолога в каталоге |
| xl | 80px | Детальная страница профиля |

### Variants

| Variant | Description |
|---------|-------------|
| Image | Фото пользователя / аватар психолога |
| Initials | Буквы имени на цветном фоне (fallback) |
| AI | Иконка AI-ассистента (фирменная) |

### Anatomy (ASCII)

```
Image avatar with status:
┌────┐
│ Img│  ● <-- status dot (8px)
└────┘     online: --eb-color-success
           offline: --eb-color-neutral-400

Initials fallback:
┌────┐
│ ЕД │  bg: --eb-color-primary-50
└────┘  text: --eb-color-primary

AI avatar:
┌────┐
│ AI │  bg: --eb-color-blue-50
│ ic │  icon: --eb-color-secondary
└────┘
```

### Design Tokens Used

- `--eb-radius-full` (circle)
- `--eb-color-sage-50` / `--eb-color-sage-600` (initials variant)
- `--eb-color-blue-50` / `--eb-color-secondary` (AI variant)
- `--eb-color-success` (online dot)
- `--eb-color-neutral-400` (offline dot)
- `--eb-color-bg-elevated` (border for contrast)

### Accessibility

- Role: `img`
- ARIA: `aria-label="Аватар пользователя Евгений"` или `aria-label="AI-ассистент"`
- Status dot: `aria-label` включает "онлайн" / "офлайн"

### Usage Guidelines

| Do | Don't |
|----|-------|
| Initials fallback при отсутствии фото | Пустой серый круг |
| Единый стиль AI-аватара во всех чатах | Разные стили AI в разных местах |
| Status dot только когда релевантно | Status на всех аватарах |

---

## 12. Alert

**Purpose:** Информационное сообщение, требующее внимания пользователя.
**Used in:** WF-016, WF-020, WF-046

### Variants

| Variant | Icon | Border | Background | Use case |
|---------|------|--------|------------|----------|
| Info | info-circle | `--eb-color-info` | `--eb-color-info-bg` | Подсказки, новости |
| Success | check-circle | `--eb-color-success` | `--eb-color-success-bg` | Подтверждения |
| Warning | alert-triangle | `--eb-color-warning` | `--eb-color-warning-bg` | Предупреждения, лимиты |
| Error | x-circle | `--eb-color-error` | `--eb-color-error-bg` | Ошибки |
| Crisis | heart-pulse | `--eb-color-sos` | `--eb-color-sos-bg` | Кризисные сообщения (не dismissible) |

### Anatomy (ASCII)

```
┌──────────────────────────────────────────┐
│  [icon]  Title text                 [x]  │  icon: 24px
│          Description text that can       │  title: semibold
│          span multiple lines.            │  description: regular
│                                          │  dismiss: 44x44 touch
│  [ Action button ]                       │  (optional action)
└──────────────────────────────────────────┘
  border-left: 4px solid variant color
  padding: 16px
  border-radius: --eb-radius-md
```

### Design Tokens Used

- Variant-specific: `--eb-color-{variant}` / `--eb-color-{variant}-bg` / `--eb-color-{variant}-text`
- `--eb-color-sos` / `--eb-color-sos-bg` (crisis variant)
- `--eb-radius-md` (8px)
- `--eb-space-card-padding` (16px)
- `--eb-space-2` (8px icon-to-text gap)
- `--eb-font-weight-semibold` (title)

### Accessibility

- Role: `alert` (error, crisis) или `status` (info, success, warning)
- ARIA: `aria-live="assertive"` для error/crisis, `aria-live="polite"` для info/success/warning
- Dismiss: `aria-label="Закрыть уведомление"`, crisis variant -- NOT dismissible
- Focus: dismiss button accessible via keyboard

### Usage Guidelines

| Do | Don't |
|----|-------|
| Crisis alert -- не dismissible | Позволять закрыть crisis alert |
| Конкретный actionable текст | Расплывчатые сообщения об ошибках |
| Иконка + цвет + текст (тройная индикация) | Только цвет для передачи статуса |
| Дружелюбный тон ошибок | Обвиняющий тон ("Вы ошиблись!") |

---

## 13. Toast

**Purpose:** Кратковременное уведомление о результате действия.
**Used in:** WF-003, WF-027, WF-034

### Anatomy (ASCII)

```
Screen with toast:
┌─────────────────────────────────────┐
│                                     │
│           [Content area]            │
│                                     │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  [icon] Message text  [Act] │    │  toast
│  └─────────────────────────────┘    │  bottom: 16px above tab bar
├─────────────────────────────────────┤
│           [Tab Bar]                 │
└─────────────────────────────────────┘
```

### Variants

| Type | Icon | Use case |
|------|------|----------|
| Success | check-circle (green) | "Сохранено", "Скопировано" |
| Info | info (blue) | "Максимум 3 темы" |
| Error | x-circle (red) | "Не удалось сохранить" + "Повторить" |
| Warning | alert-triangle (yellow) | "Лимит почти исчерпан" |

### Design Tokens Used

- `--eb-color-neutral-800` (background, dark)
- `--eb-color-text-inverse` (text, white)
- `--eb-color-primary` (action button accent)
- `--eb-radius-lg` (12px)
- `--eb-z-toast` (800)
- `--eb-duration-fast` (200ms slide-up in)
- `--eb-ease-out` (in) / `--eb-ease-in` (out)

### Behavior

- Auto-dismiss: 3 секунды
- Slide-up animation (200ms `--eb-ease-out`)
- Slide-down dismiss (150ms `--eb-ease-in`)
- Action button: optional ("Undo", "Повторить")
- Max 1 toast одновременно, новый заменяет старый
- Swipe-to-dismiss
- Не блокирует контент

### Accessibility

- Role: `status`
- ARIA: `aria-live="polite"`, action button с `aria-label`
- Screen reader: auto-dismiss отключён, ожидает dismiss пользователем

### Usage Guidelines

| Do | Don't |
|----|-------|
| Краткое сообщение (< 50 символов) | Длинные параграфы в toast |
| Action button для undo/retry | Навигационные действия в toast |
| Auto-dismiss 3s | Бесконечно висящий toast |
| Position above tab bar | Перекрытие SOS-кнопки |

---

## 14. BottomSheet

**Purpose:** Контекстный контент без полной навигации.
**Used in:** WF-006, WF-014, WF-042

### Variants

| Variant | Max height | Close | Use case |
|---------|-----------|-------|----------|
| Quarter | 25vh | Drag/backdrop | Быстрые пикеры |
| Half | 50vh | Drag/backdrop | Формы, списки |
| Full | 90vh | Drag/close button | Сложные формы, контент |

### Anatomy (ASCII)

```
Half-sheet:
┌─────────────────────────────────────┐
│  [Content behind, dimmed]           │
│                                     │
│  ─────────────────────────────────  │  backdrop: --eb-color-overlay
│  ┌─────────────────────────────┐    │
│  │     ┌─── Handle ───┐       │    │  handle: 40x4px
│  │                             │    │  bg: --eb-color-bg-elevated
│  │  Sheet content              │    │  radius: --eb-radius-lg top
│  │  max-height: 50vh           │    │  shadow: --eb-shadow-modal
│  │                             │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘

Full-sheet:
┌─────────────────────────────────────┐
│  ┌─── Handle ───┐                   │
│                                     │
│  Title                         [x]  │  close button for full
│  ─────────────────────────────────  │
│                                     │
│  Full content area                  │
│  max-height: 90vh                   │
│  scrollable                         │
│                                     │
│  [Action button area]               │
└─────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-bg-elevated` (sheet background)
- `--eb-color-overlay` (backdrop)
- `--eb-color-neutral-300` (handle color)
- `--eb-radius-lg` (12px top corners)
- `--eb-shadow-modal`
- `--eb-z-modal-backdrop` (400) / `--eb-z-modal` (500)
- `--eb-duration-slow` (350ms open) / `--eb-duration-normal` (250ms close)
- `--eb-ease-out` (open) / `--eb-ease-in` (close)

### Accessibility

- Role: `dialog`, `aria-modal="true"`
- Focus trap: `Tab/Shift+Tab` зациклен внутри sheet
- `aria-label` на sheet с описанием контента
- `Escape` для закрытия (Bluetooth keyboard)
- При закрытии фокус возвращается к trigger-элементу

### Usage Guidelines

| Do | Don't |
|----|-------|
| Drag handle всегда виден | Sheet без handle |
| Drag-to-dismiss (swipe > 30%) | Требовать нажатия кнопки закрытия |
| Focus trap для accessibility | Фокус "убегает" за пределы sheet |
| Quarter для простых выборов | Full sheet для 2-3 вариантов |

---

## 15. Tooltip

**Purpose:** Контекстная подсказка при фокусе или hover.
**Used in:** WF-007, WF-009, WF-046

### Anatomy (ASCII)

```
                ┌──────────────────────┐
                │  Tooltip text here   │  max-width: 200px
                │  on dark background  │  bg: --eb-color-neutral-800
                └──────────┬───────────┘  text: white
                           ▼              radius: --eb-radius-sm
                     [Target element]     padding: 8px 12px
```

### Design Tokens Used

- `--eb-color-neutral-800` (background)
- `--eb-color-text-inverse` (text)
- `--eb-radius-sm` (4px)
- `--eb-z-tooltip` (700)
- `--eb-duration-fast` (150ms fade)
- `--eb-ease-out`
- `--eb-shadow-md`

### Accessibility

- Role: `tooltip`
- ARIA: `aria-describedby` связывает target с tooltip
- Trigger: focus или long-press на mobile
- Keyboard: показывается при фокусе, скрывается при `Escape`
- Dismissible по тапу вне

### Usage Guidelines

| Do | Don't |
|----|-------|
| Краткий текст (< 80 символов) | Длинные инструкции в tooltip |
| Long-press trigger на mobile | Hover-only (недоступен на touch) |
| Prefer position top | Позиция, перекрывающая trigger |
| Один tooltip одновременно | Несколько открытых tooltip |

---

## 16. EmotionChart

**Purpose:** Визуализация эмоционального состояния за период.
**Used in:** WF-009, WF-024, WF-029

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Line chart | Линия настроения за 7/30 дней | Тренд эмоций |
| Bar chart | Частота эмоций (горизонтальные бары) | Распределение эмоций |

### Anatomy (ASCII)

```
Line chart (mood trend):
┌──────────────────────────────────────────┐
│  Настроение за 7 дней                    │
│                                          │
│ 10│         *                            │
│  8│    *         *                       │
│  6│ *     *         *                    │
│  4│                      *    *          │
│  2│                                      │
│   └──┬──┬──┬──┬──┬──┬──┬───             │
│     Пн Вт Ср Чт Пт Сб Вс               │
│                                          │
│  Average: 6.2  [emoji scale]             │
└──────────────────────────────────────────┘

Bar chart (emotion frequency):
┌──────────────────────────────────────────┐
│  Частота эмоций                          │
│                                          │
│  :) Радость    ████████████  12          │
│  :( Грусть     ██████        6           │
│  :S Тревога    ████████      8           │
│  >:( Злость     ███           3           │
│  :/ Усталость  █████████     9           │
│                                          │
└──────────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-primary` (line color, positive bars)
- `--eb-color-secondary` (secondary line)
- Emotion-specific colors (см. EmotionPicker)
- `--eb-color-text-primary` / `--eb-color-text-secondary` (labels)
- `--eb-color-border` (grid lines)
- `--eb-radius-md` (chart container)
- `--eb-space-card-padding` (16px)
- `--eb-duration-slower` (500ms fill animation)

### Accessibility

- Role: `img` with `aria-label` describing the data
- ARIA: `aria-label="Линейный график настроения за 7 дней. Среднее значение: 6.2 из 10"`
- Текстовая альтернатива с данными для screen reader
- Не полагаться только на цвет (emoji + подписи)

### Usage Guidelines

| Do | Don't |
|----|-------|
| Emoji на оси Y (наглядно) | Только числа без контекста |
| 7 дней по умолчанию | Слишком длинные периоды без фильтра |
| Тёплые цвета (nature palette) | Агрессивные контрастные цвета |
| Анимация при первом отображении | Анимация при каждом scroll |

---

# C. Navigation

---

## 17. BottomTabBar

**Purpose:** Основная навигация между корневыми разделами.
**Used in:** WF-007, WF-011, WF-024, WF-045

### Structure

4 вкладки: Главная, Чат, Дневник, Ещё.

### Anatomy (ASCII)

```
┌───────────┬───────────┬───────────┬───────────┐
│   [home]  │   [chat]  │  [diary]  │   [more]  │  height: 56px
│  Главная  │    Чат    │  Дневник  │   Ещё     │  icon: 24px
│           │      ●    │           │           │  label: 12px
└───────────┴───────────┴───────────┴───────────┘
     ^           ^                                  active: primary color
   active      badge                                inactive: neutral-400
                (8px dot)                           badge: 8px red dot

Safe area padding:
┌─────────────────────────────────────────────┐
│  [Tab bar content]                          │
├─────────────────────────────────────────────┤
│  [Safe area: env(safe-area-inset-bottom)]   │
└─────────────────────────────────────────────┘
```

### States

| State | Icon | Label | Color |
|-------|------|-------|-------|
| Active | Filled variant | Bold | `--eb-color-primary` |
| Inactive | Outline variant | Regular | `--eb-color-neutral-400` |
| Badge | Outline + red dot (8px) | Regular | `--eb-color-neutral-400` + red dot |

### Design Tokens Used

- `--eb-color-primary` (active tab)
- `--eb-color-neutral-400` (inactive tab)
- `--eb-color-sos` (notification dot)
- `--eb-color-bg-elevated` (bar background)
- `--eb-color-border` (top border)
- `--eb-z-fixed` (300)
- `--eb-safe-area-bottom` (bottom padding)
- `--eb-font-size-xs` (12px label)
- `--eb-font-weight-medium` (inactive) / `--eb-font-weight-semibold` (active)
- `--eb-touch-target-min` (44px per tab touch area)

### Accessibility

- Role: `tablist` (container), `tab` (each item)
- ARIA: `aria-selected="true"` на активном, `aria-label` включает badge ("Чат, есть новые")
- Focus: visible focus ring
- Keyboard: `Arrow Left/Right` для переключения

### Usage Guidelines

| Do | Don't |
|----|-------|
| Всегда видна на L1-экранах | Скрывать tab bar без причины |
| Badge для новых рекомендаций AI | Badge для каждого обновления |
| Мгновенное переключение (0ms) | Анимация перехода между табами |
| Safe area padding внизу | Игнорировать notch / home indicator |

---

## 18. Header

**Purpose:** Заголовок экрана с навигацией и действиями.
**Used in:** WF-002 -- WF-054 (все L2+ экраны)

### Anatomy (ASCII)

```
Telegram WebApp header:
┌──────────────────────────────────────────┐
│  [<-]     Title text          [action]   │  height: 44px
└──────────────────────────────────────────┘
   ^            ^                   ^
 BackButton   center-aligned    optional action
 (Telegram    truncate with      (icon button)
  SDK)        ellipsis

With subtitle:
┌──────────────────────────────────────────┐
│  [<-]     Title text          [action]   │  height: 44px
│           Subtitle text                  │  subtitle: text-xs
└──────────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-bg-primary` (background, transparent for overlay-on-gradient)
- `--eb-color-text-primary` (title)
- `--eb-color-text-secondary` (subtitle)
- `--eb-font-size-lg` (title 18px)
- `--eb-font-size-xs` (subtitle 12px)
- `--eb-font-weight-semibold` (title)
- `--eb-tg-header-height` (56px Telegram header area)
- `--eb-z-sticky` (200)

### Accessibility

- BackButton: managed by `Telegram.WebApp.BackButton.show()` / `.hide()`
- `aria-label="Вернуться назад"` на custom back elements
- Title: `<h1>` semantic heading

### Usage Guidelines

| Do | Don't |
|----|-------|
| Truncate long titles with ellipsis | Мелкий шрифт для длинных заголовков |
| Telegram BackButton SDK | Кастомная кнопка "Назад" |
| Max 1 action button справа | Несколько action buttons |
| Скрывать BackButton на L1 | BackButton на корневых экранах |

---

## 19. Tabs

**Purpose:** Горизонтальное переключение между подразделами контента.
**Used in:** WF-024, WF-030, WF-045

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Underline | Линия-индикатор под активным | Дневник (дни/недели/месяцы) |
| Pill | Заливка активного | Каталог (категории) |

### Sizes

| Size | Height | Font | Use case |
|------|--------|------|----------|
| sm | 32px | 14px medium | Фильтры, компактные секции |
| md | 40px | 16px semibold | Стандартные табы |

### Anatomy (ASCII)

```
Underline tabs:
┌──────────┬──────────┬──────────┬──────────┐
│   Все    │  Стресс  │   Сон    │  Тревога │
│ ════════ │          │          │          │  scrollable horizontal
└──────────┴──────────┴──────────┴──────────┘
     ^
  active: underline 2px --eb-color-primary
  text: --eb-color-primary, semibold

Pill tabs:
┌──────────┬───────────┬──────────┬──────────┐
│ [██Все██]│   Стресс  │   Сон    │  Тревога │
└──────────┴───────────┴──────────┴──────────┘
     ^
  active: bg --eb-color-primary, text white
  inactive: bg transparent, text --eb-color-text-secondary
```

### Design Tokens Used

- `--eb-color-primary` (active indicator / pill bg)
- `--eb-color-text-primary` (active text for underline)
- `--eb-color-text-secondary` (inactive text)
- `--eb-color-text-inverse` (active text for pill)
- `--eb-color-border` (bottom border for underline variant)
- `--eb-radius-full` (pill variant)
- `--eb-space-3` (12px horizontal padding per tab)
- `--eb-duration-normal` (250ms indicator slide)
- `--eb-ease-default`

### Accessibility

- Role: `tablist` (container), `tab` (each), `tabpanel` (content)
- ARIA: `aria-selected="true"`, `aria-controls` linking tab to panel
- Focus: visible focus ring
- Keyboard: `Arrow Left/Right` для навигации, `Enter` для выбора

### Usage Guidelines

| Do | Don't |
|----|-------|
| Horizontal scroll при > 4 табов | Уменьшать текст для вмещения |
| Underline для основных секций | Pill для главных секций (слишком тяжело) |
| Pill для фильтров категорий | Underline для большого количества фильтров |
| Animated underline indicator | Мгновенное переключение без визуального индикатора |

---

## 20. ProgressBar

**Purpose:** Отображение прогресса выполнения задачи или достижения.
**Used in:** WF-003 -- WF-006, WF-009, WF-032 -- WF-035

### Variants

| Variant | Height | Description | Use case |
|---------|--------|-------------|----------|
| Thin | 4px | Линейный прогресс | CBT steps, SOS protocol |
| Default | 8px | Стандартный прогресс | XP bar, курсы |
| Step indicator | 4px + dots | Пошаговый | Onboarding, wizard |

### Colors

| Context | Color |
|---------|-------|
| Primary | `--eb-color-primary` |
| Success | `--eb-color-success` |
| Warning | `--eb-color-warning` |
| XP / Gamification | `--eb-color-accent` |

### Anatomy (ASCII)

```
Linear (thin):
████████████████░░░░░░░░░░  Шаг 2 из 5
  filled: primary         unfilled: neutral-200
  height: 4px             radius: full

Linear (default):
████████████████████░░░░░░░░░░░  48%
  height: 8px             label: right-aligned

Step indicator:
  ●────●────○────○────○
  1    2    3    4    5
  ^    ^
 done  current (pulsing)
```

### Design Tokens Used

- `--eb-color-primary` / `--eb-color-success` / `--eb-color-warning` (fill)
- `--eb-color-neutral-200` (unfilled track)
- `--eb-color-accent` (XP bar)
- `--eb-radius-full` (rounded caps)
- `--eb-duration-slower` (500ms fill animation)
- `--eb-ease-out` (fill easing)
- `--eb-font-size-xs` (step label)

### Accessibility

- Role: `progressbar`
- ARIA: `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-label="Прогресс: 48 процентов"`
- Текстовый label видим рядом с баром

### Usage Guidelines

| Do | Don't |
|----|-------|
| Анимация заполнения при изменении | Мгновенное изменение без transition |
| Текстовый label (N из M или %) | Только визуальный бар без label |
| Thin для wizard/steps | Thick для простых индикаторов |
| Зелёный при завершении | Красный при незавершённости |

---

## 21. SOSButton

**Purpose:** Мгновенный доступ к экстренной помощи. КРИТИЧЕСКИЙ компонент безопасности.
**Used in:** WF-019, WF-020 (все экраны кроме SOS/Crisis/Onboarding)

### Anatomy (ASCII)

```
Floating button (fixed position):
                              ┌────────┐
                              │        │
                              │  SOS   │  56x56px
                              │   [h]  │  circle
                              │        │  z-index: 900
                              └────────┘
                              position: fixed
                              bottom: 72px (16px above tab bar)
                              right: 16px

Pulse animation (crisis detected):
                              ┌────────┐
                         ╭────│  SOS   │────╮  pulse ring
                         │    │   [h]  │    │  expanding 0-12px
                         ╰────│        │────╯  2s infinite
                              └────────┘
```

### States

| State | Visual |
|-------|--------|
| Default | `--eb-color-sos` bg, white text, `--eb-shadow-sos` |
| Pressed | `--eb-color-sos-hover` bg, scale(0.95), haptic heavy |
| Pulsating | Pulse ring animation (crisis trigger detected) |
| Hidden | Не отображается (SOS/Crisis/Onboarding экраны) |

### Design Tokens Used

- `--eb-color-sos` (background)
- `--eb-color-sos-hover` (pressed)
- `--eb-color-sos-text` (#FFFFFF)
- `--eb-shadow-sos` (elevated shadow)
- `--eb-radius-full` (circle)
- `--eb-z-sos-button` (900)
- `--eb-touch-target-sos` (56px)
- `--eb-safe-area-bottom`
- `--eb-ease-in-out` (pulse animation)

### Accessibility

- Role: `button`
- ARIA: `aria-label="Экстренная помощь SOS"`
- Focus: `--eb-shadow-focus-sos` (coral focus ring)
- Keyboard: `Space/Enter` для активации
- Contrast: WCAG AAA (white on coral)
- Screen reader: при пульсации объявляет "Кнопка SOS доступна"

### Usage Guidelines

| Do | Don't |
|----|-------|
| 1-tap activation, NO confirmation | Confirmation dialog перед SOS |
| Всегда видна (кроме SOS/Crisis/Onboarding) | Скрывать в настройках |
| z-index 900 (выше всего кроме crisis) | z-index ниже модальных окон |
| 56x56px touch target | Уменьшать размер |
| Никогда не блокировать тарифом | Paywall для SOS |

---

# D. Layout

---

## 22. Container

**Purpose:** Обёртка для ограничения ширины контента и центрирования.
**Used in:** Все экраны

### Anatomy (ASCII)

```
Mobile (< 640px):
┌──16px──[=========CONTENT=========]──16px──┐
│         single column, 100% width          │
│         max-width: 480px                   │
└────────────────────────────────────────────┘

Tablet (640-1023px):
┌──24px──[=========CONTENT=========]──24px──┐
│         max-width: 720px, centered         │
└────────────────────────────────────────────┘

Desktop (>= 1024px):
┌──32px──[=========CONTENT=========]──32px──┐
│         max-width: 1120px, centered        │
└────────────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-space-page-x` (16px mobile)
- `--eb-breakpoint-sm` (640px)
- `--eb-breakpoint-lg` (1024px)
- `--eb-safe-area-left` / `--eb-safe-area-right`

### Accessibility

- Role: none (semantic HTML `<main>`)
- Landmark: `<main>` для основного контента

### Usage Guidelines

| Do | Don't |
|----|-------|
| Единый Container на страницу | Nested Containers |
| Padding 16px на мобильных | Контент до краёв экрана |
| Center alignment для широких экранов | Left-align на desktop |

---

## 23. Stack

**Purpose:** Компоновка элементов вертикально или горизонтально с единообразным gap.
**Used in:** Все экраны (базовый layout primitive)

### Variants

| Variant | Direction | Use case |
|---------|-----------|----------|
| Vertical (default) | column | Секции, списки, формы |
| Horizontal | row | Кнопки в ряд, inline-элементы |

### Anatomy (ASCII)

```
Vertical Stack (gap: 16px):               Horizontal Stack (gap: 8px):
┌──────────────────────┐                  ┌────────┐ ┌────────┐ ┌────────┐
│  Child 1             │                  │ Child1 │ │ Child2 │ │ Child3 │
├──── gap: 16px ───────┤                  └────────┘ └────────┘ └────────┘
│  Child 2             │                       gap: 8px
├──── gap: 16px ───────┤
│  Child 3             │
└──────────────────────┘

Alignment options:
  align-items: start | center | end | stretch
  justify-content: start | center | end | space-between
```

### Design Tokens Used

- `--eb-space-1` through `--eb-space-16` (configurable gap)
- `--eb-space-element-gap` (8px default for horizontal)
- `--eb-space-section-gap` (24px default for vertical sections)
- `--eb-space-card-gap` (12px for card internals)

### Usage Guidelines

| Do | Don't |
|----|-------|
| Consistent gap via tokens | Ad-hoc margins на children |
| Vertical for mobile layouts | Horizontal for many items on mobile |
| `space-between` для footer actions | Фиксированные отступы вручную |

---

## 24. Divider

**Purpose:** Визуальное разделение секций или элементов.
**Used in:** WF-045, WF-046, settings, lists

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Line | Тонкая горизонтальная линия | Между элементами списка |
| Text | Линия с текстом по центру | "или" между действиями |
| Inset | Линия с отступом слева | Список с аватарами/иконками |

### Anatomy (ASCII)

```
Line divider:
──────────────────────────────────────────
  1px solid --eb-color-border
  margin: 16px 0

Text divider:
───────────── или ─────────────
  text: --eb-color-text-secondary
  font: 14px
  bg: --eb-color-bg-primary (cutout)

Inset divider:
          ────────────────────────────────
          ^
          56px left offset (icon + gap width)
```

### Design Tokens Used

- `--eb-color-border` (line color)
- `--eb-color-text-secondary` (text variant)
- `--eb-color-bg-primary` (text background cutout)
- `--eb-space-4` (16px vertical margin)
- `--eb-font-size-sm` (text divider)

### Usage Guidelines

| Do | Don't |
|----|-------|
| Line между неоднородными элементами | Divider между каждым item в list |
| Text divider для "или" между actions | Длинный текст в text divider |
| Inset для списков с leading icons | Line divider в card content |

---

## 25. ChatBubble

**Purpose:** Сообщение в AI-чате.
**Used in:** WF-011 -- WF-016

### Variants

| Variant | Alignment | Background | Corner | Avatar |
|---------|-----------|------------|--------|--------|
| User | Right | `--eb-color-bg-chat-user` | bottom-right: 4px | No |
| AI | Left | `--eb-color-bg-chat-ai` | bottom-left: 4px | Yes (AI) |

### Anatomy (ASCII)

```
AI message (left):
┌────┐ ┌────────────────────────────────┐
│ AI │ │  Понимаю, что тебе сейчас      │  max-width: 80%
│ av │ │  тяжело. Давай попробуем        │  padding: 12px
└────┘ │  разобраться вместе.            │  radius: 16px (4px bottom-left)
       │                                 │
       │                         14:32   │  timestamp: text-xs
       │  [ [good] [bad] ]              │  rating: optional (AI only)
       └────────────────────────────────┘

User message (right):
                    ┌────────────────────────────────┐
                    │  Сегодня был тяжёлый день на   │  max-width: 80%
                    │  работе...                     │  radius: 16px (4px bottom-right)
                    │                                │
                    │  14:31                          │
                    └────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-bg-chat-ai` (AI bubble)
- `--eb-color-bg-chat-user` (user bubble)
- `--eb-color-text-primary` (message text)
- `--eb-color-text-secondary` (timestamp)
- `--eb-radius-lg` (16px main) with 4px sender corner
- `--eb-space-chat-bubble` (12px padding)
- `--eb-font-size-base` (message text)
- `--eb-font-size-xs` (timestamp)

### Accessibility

- Role: `listitem` inside `list` (conversation)
- ARIA: `aria-label="Сообщение от AI-ассистента: [text]"` или `aria-label="Ваше сообщение: [text]"`
- Timestamp: `<time>` element
- Rating buttons: `aria-label="Оценить ответ как полезный"` / `"Оценить ответ как неполезный"`

### Usage Guidelines

| Do | Don't |
|----|-------|
| Max-width 80% viewport | Full-width bubbles |
| 4px corner на стороне отправителя | Одинаковые скругления со всех сторон |
| AI avatar слева | Avatar для пользователя |
| Rating только на AI сообщениях | Rating на user messages |
| Timestamp под текстом | Timestamp скрыт по умолчанию |

---

## 26. Spacer

**Purpose:** Фиксированный пустой отступ между элементами.
**Used in:** Все экраны (utility component)

### Sizes

| Size | Height | Token | Use case |
|------|--------|-------|----------|
| xs | 4px | `--eb-space-1` | Микро-разделение |
| sm | 8px | `--eb-space-2` | Между связанными элементами |
| md | 16px | `--eb-space-4` | Стандартный отступ |
| lg | 24px | `--eb-space-6` | Между секциями |
| xl | 32px | `--eb-space-8` | Крупные секционные разделители |

### Anatomy (ASCII)

```
┌──────────────────────┐
│  Component A         │
├──────────────────────┤
│  [spacer: 24px]      │  invisible, height only
├──────────────────────┤
│  Component B         │
└──────────────────────┘
```

### Usage Guidelines

| Do | Don't |
|----|-------|
| Spacer для явных отступов | margin на children (предпочитать gap в Stack) |
| Фиксированные размеры из tokens | Произвольные пиксельные значения |
| Spacer между секциями | Spacer внутри компонентов (используй padding) |

---

# E. Specialized

---

## 27. BreathingCircle

**Purpose:** Анимированный визуальный проводник дыхательного упражнения.
**Used in:** WF-020, WF-023, WF-031

### Phases (4-7-8 pattern)

| Phase | Duration | Circle | Label |
|-------|----------|--------|-------|
| Inhale (Вдох) | 4s | scale(1) -> scale(1.3) | "Вдохни..." |
| Hold (Задержка) | 7s | scale(1.3) steady | "Задержи..." |
| Exhale (Выдох) | 8s | scale(1.3) -> scale(1) | "Выдохни..." |
| Pause (Пауза) | 4s | scale(1) steady | "Задержи..." |

### Anatomy (ASCII)

```
Full-screen immersive:
┌────────────────────────────────────────┐
│                                        │
│            Вдохни...                   │  phase label: centered
│                                        │
│          ╭─────────────╮               │
│        ╱                 ╲             │
│       │                   │            │  circle: 200px
│       │     4             │            │  expanding/contracting
│       │                   │            │  gradient: sage -> blue
│        ╲                 ╱             │
│          ╰─────────────╯               │
│                                        │
│         ████████░░░░░░░░               │  phase timer (linear)
│         Цикл 2 из 5                   │
│                                        │
│            [ II Пауза ]                │  pause button
│                                        │
└────────────────────────────────────────┘
  bg: gradient Morning Mist
  no tab bar, no SOS button, no header
```

### Design Tokens Used

- `--eb-color-sage-300` -> `--eb-color-sage-500` (circle gradient)
- `--eb-color-blue-300` (hold phase tint)
- `--eb-color-text-primary` (phase label)
- `--eb-color-text-secondary` (cycle counter)
- `--eb-ease-breathing` (cubic-bezier(0.45, 0, 0.55, 1))
- `--eb-duration-breathing` (base cycle)
- `--eb-radius-full` (circle)
- `--eb-shadow-lg` (circle glow: `0 0 40px rgba(123, 174, 127, 0.3)`)

### Accessibility

- `aria-live="assertive"` на phase label
- `prefers-reduced-motion`: opacity-only анимация (без scale), текст с обратным отсчётом
- `aria-label="Дыхательное упражнение. Текущая фаза: вдох. Осталось 3 секунды"`
- Pause button accessible via keyboard

### Usage Guidelines

| Do | Don't |
|----|-------|
| Full-screen immersive (скрыть UI) | Дыхание с видимыми tab bar / header |
| Плавная кривая `--eb-ease-breathing` | Резкие или дёрганые переходы |
| Phase label крупным шрифтом | Мелкий текст, нечитаемый через слёзы |
| Пауза по тапу | Невозможность приостановить |
| Soft glow вокруг круга | Резкие тени или мигание |

---

## 28. AudioPlayer

**Purpose:** Воспроизведение записанных аудио и guided-медитаций.
**Used in:** WF-014, WF-031, WF-036

### Variants

| Variant | Description | Use case |
|---------|-------------|----------|
| Mini | Progress bar + play/pause | Inline в карточке |
| Waveform | Визуализация формы волны | Запись голосового сообщения |
| Full | Cover + controls + timeline | Guided-медитация |

### Anatomy (ASCII)

```
Mini player:
┌──────────────────────────────────────┐
│  [>]  ████████░░░░░░░░░  1:23/3:45  │  height: 44px
└──────────────────────────────────────┘

Waveform (recording):
┌──────────────────────────────────────┐
│                                      │
│   ▁▃▅▇▅▃▁▃▅▇▅▃▁▃▅▇▅▃▁              │  128px width
│                                      │  bars: 20-30 vertical
│          0:04 / 1:00                 │  amplitude mapping
│                                      │
│   [x] Cancel         [v] Done        │  48x48 each
└──────────────────────────────────────┘

Full player:
┌──────────────────────────────────────┐
│                                      │
│         [Cover image/icon]           │
│         Название медитации           │
│         Категория                    │
│                                      │
│   ████████████░░░░░░░░░░░░           │  seekable progress
│   2:15              7:30             │
│                                      │
│       [<<]    [> ||]    [>>]         │  44px each
│                                      │
└──────────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-primary` (progress fill, play button)
- `--eb-color-neutral-200` (progress track)
- `--eb-color-text-primary` / `--eb-color-text-secondary`
- `--eb-radius-md` (container)
- `--eb-radius-full` (play/pause button)
- `--eb-touch-target-min` (44px controls)

### Accessibility

- Role: `region` with `aria-label="Аудиоплеер: [название]"`
- Controls: `aria-label="Воспроизвести"` / `"Пауза"` / `"Перемотать"`
- Progress: `role="slider"` для seekable timeline
- Keyboard: `Space` play/pause, `Arrow Left/Right` seek

### Usage Guidelines

| Do | Don't |
|----|-------|
| Mini player для inline use | Full player в списках |
| Waveform при записи (real-time) | Static waveform для playback |
| Seekable progress bar | Неуправляемый progress |
| Timer с MM:SS format | Только progress bar без времени |

---

## 29. HealthTree

**Purpose:** Визуализация прогресса пользователя в терапевтической геймификации.
**Used in:** WF-007, WF-009

### Growth Stages

| Stage | Emoji | Level | XP Range |
|-------|-------|-------|----------|
| Росток | seedling | 1 | 0 -- 100 |
| Саженец | potted_plant | 2 | 100 -- 300 |
| Молодое дерево | deciduous_tree | 3 | 300 -- 500 |
| Зрелое дерево | evergreen_tree | 4 | 500 -- 1000 |
| Сад | house_with_garden | 5 | 1000+ |

### Anatomy (ASCII)

```
Health Tree widget (dashboard):
┌──────────────────────────────────┐
│                                  │
│         [Tree visual]            │  dynamic stage illustration
│         Appropriate emoji        │  or CSS/SVG illustration
│                                  │
│  Уровень 3: Молодое дерево      │
│  ████████████░░░░░░░  240/500 XP │  progress bar: 8px
│                                  │
└──────────────────────────────────┘

Level up animation:
  Stage N  -->  [sparkle particles]  -->  Stage N+1
  scale(1)     scale(1.05) + glow        scale(1) settled
  600ms total, bounce easing
```

### Design Tokens Used

- `--eb-color-accent` (XP progress bar)
- `--eb-color-primary` (tree visual tint)
- `--eb-color-text-primary` (level text)
- `--eb-color-text-secondary` (XP counter)
- `--eb-radius-md` (widget container)
- `--eb-radius-full` (progress bar)
- `--eb-ease-bounce` (level-up animation)
- `--eb-duration-slower` (600ms growth)

### Accessibility

- `aria-label="Дерево здоровья: уровень Молодое дерево, 240 из 500 очков опыта"`
- Level-up: `aria-live="assertive"` -- "Поздравляем! Новый уровень: Саженец"
- Progress bar: `role="progressbar"`, `aria-valuenow`, `aria-valuemax`

### Usage Guidelines

| Do | Don't |
|----|-------|
| Дерево НИКОГДА не уменьшается | Наказывать за пропуски (уменьшение) |
| Gentle particles при level-up | Агрессивный confetti |
| Мягкие зелёные/золотые частицы | Яркие кислотные цвета |
| CSS transitions для роста | Мгновенное переключение без анимации |

---

## 30. StreakCounter

**Purpose:** Отображение серии активных дней пользователя с guilt-free подходом.
**Used in:** WF-007, WF-051

### States

| State | Visual | Message |
|-------|--------|---------|
| Active (> 0) | flame icon + count, accent color | "Отличная регулярность!" |
| Reset (= 0) | seedling icon, soft color | "Продолжай в своём темпе!" |

### Anatomy (ASCII)

```
Active streak:
┌───────────────────────────────────┐
│  [flame] Серия: 5 дней            │  flame icon: animated wobble
│  Отличная регулярность!           │  count: bold, --eb-color-accent
└───────────────────────────────────┘

Reset streak (guilt-free):
┌───────────────────────────────────┐
│  [seedling] Начни новую серию     │  seedling: soft green
│  Продолжай в своём темпе!         │  encouraging tone
└───────────────────────────────────┘

Mini calendar heatmap:
┌───────────────────────────────────┐
│  Пн Вт Ср Чт Пт Сб Вс           │
│  [g][g][ ][g][g][g][ ]           │  green: active
│  [ ][g][g][ ][g][ ][ ]           │  gray: missed (NO red)
└───────────────────────────────────┘
```

### Design Tokens Used

- `--eb-color-accent` (flame icon, active count)
- `--eb-color-primary` (active days in heatmap: green)
- `--eb-color-neutral-200` (missed days: gray, never red)
- `--eb-color-text-primary` / `--eb-color-text-secondary`
- `--eb-radius-md` (container)
- `--eb-ease-gentle` (flame wobble animation)

### Accessibility

- `aria-label="Серия активности: 5 дней подряд"` (active)
- `aria-label="Начни новую серию активности"` (reset)
- Calendar: `aria-label` на каждой ячейке с датой и статусом

### Usage Guidelines

| Do | Don't |
|----|-------|
| Green для активных дней | Красный для пропущенных дней |
| Gray (нейтральный) для пропусков | "Ты потерял серию" (виновный тон) |
| "Продолжай в своём темпе!" | "Серия сброшена" (наказующий тон) |
| Мягкая wobble-анимация flame | Агрессивная flame-анимация |

---

## 31. CrisisOverlay

**Purpose:** Полноэкранный NON-DISMISSIBLE overlay при обнаружении кризисного состояния.
**Used in:** WF-021

### Anatomy (ASCII)

```
NON-DISMISSIBLE OVERLAY:
┌─────────────────────────────────────────┐
│ ████████████████████████████████████████ │
│ ██                                    ██│
│ ██      [warning icon]                ██│  z-index: 1000
│ ██                                    ██│  NO close button
│ ██      Мы заметили, что тебе         ██│  NO swipe dismiss
│ ██      сейчас может быть             ██│  NO BackButton
│ ██      очень тяжело.                 ██│
│ ██                                    ██│  backdrop: 90% opacity
│ ██  ┌──────────────────────────────┐  ██│
│ ██  │  [phone] Телефон доверия     │  ██│  primary CTA
│ ██  │          8-800-2000-122      │  ██│  tel: link, 56px height
│ ██  └──────────────────────────────┘  ██│
│ ██                                    ██│
│ ██  ┌──────────────────────────────┐  ██│
│ ██  │  [lungs] Дыхательное упр.    │  ██│  secondary CTA
│ ██  └──────────────────────────────┘  ██│
│ ██                                    ██│
│ ██  ┌──────────────────────────────┐  ██│
│ ██  │  Мне стало лучше             │  ██│  ONLY exit
│ ██  │  (удержи 2 секунды)          │  ██│  tap+hold 2s
│ ██  └──────────────────────────────┘  ██│
│ ██                                    ██│
│ ████████████████████████████████████████ │
└─────────────────────────────────────────┘

Tap+Hold exit:
  Default:    [ Мне стало лучше           ]
  Holding:    [ ████████░░░░░░  1.2с/2с   ]  progress fills
  Released:   [ ██░░░░░░░░░░░░  reset     ]  if early release
  Complete:   [ ✓ ]                           overlay closes
```

### Design Tokens Used

- `--eb-color-crisis-overlay-bg` (rgba(98, 31, 19, 0.8/0.85))
- `--eb-color-bg-elevated` (card backgrounds inside overlay)
- `--eb-color-sos` (accent elements)
- `--eb-color-sos-text` (white text)
- `--eb-color-text-primary` (body text)
- `--eb-z-crisis-overlay` (1000 -- maximum)
- `--eb-radius-lg` (card corners inside overlay)
- `--eb-shadow-xl`
- `--eb-ease-linear` (hold progress bar)

### Accessibility

- Role: `alertdialog`, `aria-modal="true"`
- `aria-label="Кризисное оповещение. Если вам нужна помощь, позвоните на телефон доверия."`
- Focus trap: фокус зациклен внутри overlay
- Screen reader озвучивает весь текст при появлении
- Haptic: `notificationOccurred('warning')` при появлении

### Usage Guidelines

| Do | Don't |
|----|-------|
| NON-DISMISSIBLE (нет кнопки закрытия) | Кнопка [x] или swipe dismiss |
| Tap+hold 2s для выхода | Обычный тап для выхода |
| Крупные touch targets (56px) для tel | Мелкие ссылки в кризисном overlay |
| BackButton скрыт | BackButton виден |
| Повторное появление после restart app | Одноразовое отображение |

---

## 32. StepWizard

**Purpose:** Пошаговый проводник для упражнений, онбординга и CBT-практик.
**Used in:** WF-003 -- WF-006, WF-032 -- WF-033

### Anatomy (ASCII)

```
┌─────────────────────────────────────────┐
│  [<-] Back           Шаг 2 из 5        │  header
├─────────────────────────────────────────┤
│  ████████████░░░░░░░░░░░░░              │  progress bar: 4px
│                                         │
│  Заголовок шага                         │  h2: text-2xl
│                                         │
│  Описание / инструкция текстом          │  body: text-base
│  для текущего шага.                     │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │  [Step-specific input area]     │    │  dynamic content
│  │  (TextInput, EmotionPicker,     │    │  varies per step
│  │   Radio, Slider, etc.)          │    │
│  │                                 │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [light] Подсказка (collapsible)        │  hint: expandable
│                                         │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │          Далее                  │    │  MainButton
│  └─────────────────────────────────┘    │  "Далее" или "Завершить"
└─────────────────────────────────────────┘

Step indicator (alternative to bar):
  ●────●────○────○────○
  1    2    3    4    5
  ^done ^current (accent)
```

### Step Navigation

| Action | Behavior |
|--------|----------|
| Next | Validate current step, advance, animate slide-left |
| Back | Preserve data, go back, animate slide-right |
| Close (mid-wizard) | Confirm dialog "Прогресс сохранён. Выйти?" |
| Resume | "Продолжить с шага N?" при следующем входе |

### Design Tokens Used

- `--eb-color-primary` (progress fill, step indicator active)
- `--eb-color-neutral-200` (progress unfilled)
- `--eb-color-text-primary` (title, body)
- `--eb-color-text-secondary` (step counter, hint)
- `--eb-font-size-2xl` (step title)
- `--eb-font-size-base` (step description)
- `--eb-radius-full` (progress bar, step dots)
- `--eb-space-section-gap` (24px between sections)
- `--eb-duration-slow` (300ms step transition)
- `--eb-ease-in-out` (step slide)

### Accessibility

- `aria-label="Шаг 2 из 5: Какая мысль тебя беспокоит?"` на контейнере
- Progress bar: `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Focus auto-перемещается на первый input нового шага
- MainButton disabled до прохождения валидации

### Usage Guidelines

| Do | Don't |
|----|-------|
| Сохранять прогресс при выходе | Терять данные при закрытии WebApp |
| Валидация per-step | Валидация всех шагов в конце |
| "Далее" disabled до валидации | Разрешать пропуск обязательных полей |
| Focus на первый input нового шага | Фокус остаётся на предыдущем элементе |
| Haptic `success` при завершении | Тихое завершение без обратной связи |
| "Завершить" на последнем шаге | "Далее" на последнем шаге |

---

# Appendix

---

## A.1 Global Component Tokens Reference

Сводная таблица токенов, наиболее часто используемых компонентами.

| Token | Value | Usage |
|-------|-------|-------|
| `--eb-touch-target-min` | 44px | Min touch target для всех interactive elements |
| `--eb-touch-target-comfortable` | 48px | Recommended touch target |
| `--eb-touch-target-sos` | 56px | SOS button touch target |
| `--eb-radius-sm` | 4px | Inputs, badges, tags |
| `--eb-radius-md` | 8px | Buttons, cards, toast |
| `--eb-radius-lg` | 12px | Bottom sheets, modals, chat bubbles |
| `--eb-radius-xl` | 16px | Large cards, containers |
| `--eb-radius-full` | 9999px | Avatars, pills, SOS button, progress bars |
| `--eb-space-card-padding` | 16px | Card internal padding |
| `--eb-space-card-gap` | 12px | Gap between elements inside card |
| `--eb-space-element-gap` | 8px | Gap between small elements |
| `--eb-space-section-gap` | 24px | Gap between sections |
| `--eb-z-sos-button` | 900 | SOS button z-index |
| `--eb-z-crisis-overlay` | 1000 | Crisis overlay z-index |
| `--eb-duration-fast` | 150ms | Hover, toggle, checkbox |
| `--eb-duration-normal` | 250ms | Fade, slide, collapse |
| `--eb-duration-slow` | 350ms | Modal, bottom sheet, page transition |
| `--eb-ease-default` | cubic-bezier(0.25, 0.1, 0.25, 1) | Default transition |
| `--eb-ease-out` | cubic-bezier(0, 0, 0.2, 1) | Element appearing |
| `--eb-ease-breathing` | cubic-bezier(0.45, 0, 0.55, 1) | Breathing exercises |

---

## A.2 Z-Index Layer Map

```
z-index: 1000  ── Crisis Overlay (non-dismissible)
z-index: 900   ── SOS Button (always on top of regular UI)
z-index: 800   ── Toast notifications
z-index: 700   ── Tooltips
z-index: 600   ── Popovers
z-index: 500   ── Modal dialogs, Bottom sheets
z-index: 400   ── Modal backdrop
z-index: 300   ── Fixed elements (bottom tab bar, FAB)
z-index: 200   ── Sticky header
z-index: 100   ── Dropdowns
z-index: 0     ── Base document flow
```

---

## A.3 Component Interaction Map

Какие компоненты появляются на каких экранах.

| Screen | Components Used |
|--------|----------------|
| Dashboard (WF-007) | Header, HealthTree, StreakCounter, Card, EmotionChart, BottomTabBar, SOSButton |
| Chat (WF-011-016) | Header, ChatBubble, Avatar, TextInput, AudioPlayer, Toast, BottomTabBar, SOSButton |
| Diary Entry (WF-025) | Header, EmotionPicker, Slider, TextInput, Button, Toast |
| Diary List (WF-024) | Header, Card, Tabs, Badge, BottomTabBar, SOSButton |
| SOS Activated (WF-020) | Button (SOS variant), Card, BreathingCircle |
| Crisis Overlay (WF-021) | CrisisOverlay, Button |
| Onboarding (WF-001-006) | StepWizard, ProgressBar, EmotionPicker, Radio, Checkbox, Toggle, Button |
| Exercise (WF-031-034) | StepWizard, BreathingCircle, Slider, TextInput, ProgressBar, Button |
| Settings (WF-046) | Header, Toggle, Divider, Select, Button |
| Specialist Catalog (WF-040) | Header, Tabs, Card, Avatar, Badge, BottomTabBar, SOSButton |

---

## A.4 Accessibility Checklist (All Components)

- [ ] Touch target minimum 44x44px (56px for SOS)
- [ ] WCAG AA contrast ratio (4.5:1 body text, 3:1 large text)
- [ ] Visible focus ring on all interactive elements
- [ ] Proper ARIA roles and attributes
- [ ] Keyboard navigation support
- [ ] `prefers-reduced-motion` respected
- [ ] Color is never the only indicator (icon + color + text)
- [ ] Screen reader announces state changes via `aria-live`
- [ ] Focus management on modal open/close
- [ ] Minimum 16px font size for inputs (prevent iOS zoom)
- [ ] Semantic HTML structure
- [ ] Crisis/SOS elements always accessible regardless of state

---

## A.5 Dark Mode Considerations

Все компоненты автоматически адаптируются к dark mode через semantic tokens:

| Component Aspect | Light Token | Dark Override |
|-----------------|-------------|---------------|
| Card background | `--eb-color-bg-elevated` (#FFFFFF) | #383835 |
| Card shadow | `--eb-shadow-card` | `none` (border fallback) |
| Text primary | `--eb-color-text-primary` (#262624) | #F0F0ED |
| Button primary bg | `--eb-color-primary` (#5F9A63) | #8FC28F |
| Border | `--eb-color-border` (#E8E8E3) | #3A3A37 |
| Chat AI bubble | `--eb-color-bg-chat-ai` (#EFF5F9) | #1C2832 |
| Chat User bubble | `--eb-color-bg-chat-user` (#F0F6F0) | #1C2A1E |
| SOS button | `--eb-color-sos` (#DE5438) | #E8725A |
| Crisis overlay | `--eb-color-crisis-overlay-bg` (0.8) | (0.85) |

В dark mode тени заменяются на `border: 1px solid var(--eb-color-border)` для визуального разделения поверхностей.

---

## A.6 Component Naming Convention

```
eb-{category}-{name}[-{variant}][-{size}][-{state}]
```

| Example | Description |
|---------|-------------|
| `eb-btn-primary` | Primary button |
| `eb-btn-primary-sm` | Small primary button |
| `eb-btn-sos` | SOS button |
| `eb-input-default` | Default text input |
| `eb-input-error` | Error state text input |
| `eb-card-interactive` | Interactive card |
| `eb-badge-success-sm` | Small success badge |
| `eb-avatar-md` | Medium avatar |
| `eb-tab-bar` | Bottom tab bar |
| `eb-breathing-circle` | Breathing circle |
| `eb-crisis-overlay` | Crisis overlay |

---

## A.7 Component CSS Specifications

Детальные CSS-спецификации для ключевых компонентов. Все значения используют semantic tokens.

### Button CSS

```css
/* Base button */
.eb-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--eb-space-2);                    /* 8px icon-text gap */
  font-family: var(--eb-font-family-primary);
  font-weight: var(--eb-font-weight-semibold);
  letter-spacing: var(--eb-letter-spacing-wide);
  border: none;
  cursor: pointer;
  transition: all var(--eb-duration-fast) var(--eb-ease-default);
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

/* Size: md (default) */
.eb-btn-md {
  height: 44px;
  min-height: var(--eb-touch-target-min);    /* 44px */
  padding: var(--eb-space-button-y) var(--eb-space-button-x);  /* 12px 24px */
  font-size: var(--eb-button-text-size);     /* 16px */
  border-radius: var(--eb-radius-md);        /* 8px */
}

/* Size: sm */
.eb-btn-sm {
  height: 36px;
  min-height: 36px;
  padding: var(--eb-space-button-y-sm) var(--eb-space-button-x-sm);  /* 8px 16px */
  font-size: var(--eb-button-text-sm-size);  /* 14px */
  font-weight: var(--eb-font-weight-medium);
  border-radius: var(--eb-radius-md);
}

/* Size: lg */
.eb-btn-lg {
  height: 48px;
  min-height: 48px;
  padding: var(--eb-space-button-y) var(--eb-space-button-x);
  font-size: var(--eb-button-text-size);
  border-radius: var(--eb-radius-md);
}

/* Variant: primary */
.eb-btn-primary {
  background: var(--eb-color-primary);
  color: var(--eb-color-text-inverse);
  box-shadow: var(--eb-shadow-card);
}

.eb-btn-primary:hover {
  background: var(--eb-color-primary-hover);
  box-shadow: var(--eb-shadow-card-hover);
}

.eb-btn-primary:active {
  background: var(--eb-color-primary-active);
  transform: scale(0.98);
}

/* Variant: secondary */
.eb-btn-secondary {
  background: transparent;
  color: var(--eb-color-primary);
  border: 1.5px solid var(--eb-color-primary);
}

.eb-btn-secondary:hover {
  background: var(--eb-color-sage-50);
}

.eb-btn-secondary:active {
  background: var(--eb-color-sage-100);
  transform: scale(0.98);
}

/* Variant: ghost */
.eb-btn-ghost {
  background: transparent;
  color: var(--eb-color-primary);
}

.eb-btn-ghost:hover {
  background: var(--eb-color-sage-50);
}

/* Variant: destructive */
.eb-btn-destructive {
  background: var(--eb-color-error);
  color: var(--eb-color-text-inverse);
}

.eb-btn-destructive:hover {
  background: var(--eb-color-error-dark);
}

/* Variant: SOS */
.eb-btn-sos {
  background: var(--eb-color-sos);
  color: var(--eb-color-sos-text);
  box-shadow: var(--eb-shadow-sos);
  border-radius: var(--eb-radius-full);
  width: var(--eb-touch-target-sos);         /* 56px */
  height: var(--eb-touch-target-sos);        /* 56px */
  padding: 0;
}

.eb-btn-sos:hover {
  background: var(--eb-color-sos-hover);
}

.eb-btn-sos:active {
  background: var(--eb-color-sos-active);
  transform: scale(0.95);
}

/* State: disabled */
.eb-btn:disabled,
.eb-btn[aria-disabled="true"] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* State: loading */
.eb-btn-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.eb-btn-loading::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: var(--eb-radius-full);
  animation: eb-spin 800ms linear infinite;
}

@keyframes eb-spin {
  to { transform: rotate(360deg); }
}

/* Full width */
.eb-btn-full {
  width: 100%;
}

/* Focus ring */
.eb-btn:focus-visible {
  outline: 2px solid var(--eb-color-border-focus);
  outline-offset: 2px;
}

.eb-btn-sos:focus-visible {
  outline: 2px solid var(--eb-color-sos);
  outline-offset: 2px;
}
```

### TextInput CSS

```css
/* Base input */
.eb-input {
  display: flex;
  flex-direction: column;
  gap: var(--eb-space-1);                    /* 4px */
  width: 100%;
}

.eb-input__label {
  font-size: var(--eb-font-size-sm);         /* 14px */
  font-weight: var(--eb-font-weight-medium);
  color: var(--eb-color-text-secondary);
  transition: color var(--eb-duration-fast) var(--eb-ease-default);
}

.eb-input__field {
  width: 100%;
  min-height: var(--eb-touch-target-min);    /* 44px */
  padding: var(--eb-space-input-y) var(--eb-space-input-x);  /* 10px 12px */
  font-family: var(--eb-font-family-primary);
  font-size: var(--eb-input-text-size);      /* 16px -- prevents iOS zoom */
  font-weight: var(--eb-input-text-weight);  /* 400 */
  color: var(--eb-color-text-primary);
  background: var(--eb-color-bg-elevated);
  border: 1.5px solid var(--eb-color-border);
  border-radius: var(--eb-radius-sm);        /* 4px */
  transition: border-color var(--eb-duration-fast) var(--eb-ease-default),
              box-shadow var(--eb-duration-fast) var(--eb-ease-default);
  -webkit-appearance: none;
  appearance: none;
}

.eb-input__field::placeholder {
  color: var(--eb-color-text-disabled);
}

/* Focus */
.eb-input__field:focus {
  outline: none;
  border-color: var(--eb-color-border-focus);
  box-shadow: var(--eb-shadow-focus);
}

.eb-input__field:focus ~ .eb-input__label,
.eb-input--focused .eb-input__label {
  color: var(--eb-color-primary);
}

/* Error */
.eb-input--error .eb-input__field {
  border-color: var(--eb-color-error);
  background: var(--eb-color-error-bg);
}

.eb-input--error .eb-input__label {
  color: var(--eb-color-error-text);
}

.eb-input__error-text {
  font-size: var(--eb-font-size-xs);
  color: var(--eb-color-error-text);
}

/* Success */
.eb-input--success .eb-input__field {
  border-color: var(--eb-color-success);
}

/* Disabled */
.eb-input--disabled .eb-input__field {
  background: var(--eb-color-bg-tertiary);
  opacity: 0.6;
  cursor: not-allowed;
}

/* Helper text */
.eb-input__helper {
  font-size: var(--eb-font-size-xs);
  color: var(--eb-color-text-secondary);
}

/* Char counter */
.eb-input__counter {
  font-size: var(--eb-font-size-xs);
  color: var(--eb-color-text-secondary);
  text-align: right;
}

/* Textarea auto-grow */
.eb-input__field--textarea {
  resize: none;
  overflow-y: auto;
  max-height: 200px;
  line-height: var(--eb-line-height-normal);
}
```

### Card CSS

```css
/* Base card */
.eb-card {
  background: var(--eb-color-bg-elevated);
  border-radius: var(--eb-radius-md);        /* 8px */
  padding: var(--eb-space-card-padding);     /* 16px */
  box-shadow: var(--eb-shadow-card);
  transition: box-shadow var(--eb-duration-fast) var(--eb-ease-default),
              transform var(--eb-duration-fast) var(--eb-ease-default);
}

/* Variant: elevated */
.eb-card--elevated {
  box-shadow: var(--eb-shadow-md);
}

/* Variant: outlined */
.eb-card--outlined {
  box-shadow: none;
  border: 1px solid var(--eb-color-border);
}

/* Variant: interactive */
.eb-card--interactive {
  cursor: pointer;
}

.eb-card--interactive:hover {
  box-shadow: var(--eb-shadow-card-hover);
  transform: translateY(-1px);
}

.eb-card--interactive:active {
  transform: translateY(0);
  box-shadow: var(--eb-shadow-card);
}

.eb-card--interactive:focus-visible {
  outline: 2px solid var(--eb-color-border-focus);
  outline-offset: 2px;
}

/* Hero card */
.eb-card--hero {
  border-radius: var(--eb-radius-xl);        /* 16px */
}

/* Dark mode: shadow to border fallback */
[data-theme="dark"] .eb-card {
  box-shadow: none;
  border: 1px solid var(--eb-color-border);
}

[data-theme="dark"] .eb-card--interactive:hover {
  border-color: var(--eb-color-border-strong);
  box-shadow: none;
}
```

### ChatBubble CSS

```css
/* Chat container */
.eb-chat {
  display: flex;
  flex-direction: column;
  gap: var(--eb-space-2);                    /* 8px */
  padding: var(--eb-space-page-x);
}

/* Base bubble */
.eb-chat-bubble {
  max-width: 80%;
  padding: var(--eb-space-chat-bubble);      /* 12px */
  font-size: var(--eb-font-size-base);
  line-height: var(--eb-line-height-normal);
  color: var(--eb-color-text-primary);
  word-wrap: break-word;
}

/* AI message (left) */
.eb-chat-bubble--ai {
  align-self: flex-start;
  background: var(--eb-color-bg-chat-ai);
  border-radius: var(--eb-radius-lg) var(--eb-radius-lg) var(--eb-radius-lg) 4px;
  margin-left: 48px;                         /* avatar + gap */
}

/* User message (right) */
.eb-chat-bubble--user {
  align-self: flex-end;
  background: var(--eb-color-bg-chat-user);
  border-radius: var(--eb-radius-lg) var(--eb-radius-lg) 4px var(--eb-radius-lg);
}

/* Timestamp */
.eb-chat-bubble__time {
  font-size: var(--eb-font-size-xs);
  color: var(--eb-color-text-secondary);
  margin-top: var(--eb-space-1);
}

/* AI avatar */
.eb-chat-bubble__avatar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 32px;
  height: 32px;
  border-radius: var(--eb-radius-full);
}

/* Rating buttons (AI only) */
.eb-chat-bubble__rating {
  display: flex;
  gap: var(--eb-space-2);
  margin-top: var(--eb-space-2);
}

.eb-chat-bubble__rating-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--eb-color-border);
  border-radius: var(--eb-radius-full);
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### BottomTabBar CSS

```css
/* Tab bar container */
.eb-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--eb-color-bg-elevated);
  border-top: 1px solid var(--eb-color-border);
  z-index: var(--eb-z-fixed);               /* 300 */
  padding-bottom: var(--eb-safe-area-bottom);
}

/* Tab item */
.eb-tab-bar__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-width: var(--eb-touch-target-min);     /* 44px */
  min-height: var(--eb-touch-target-min);    /* 44px */
  padding: var(--eb-space-1) var(--eb-space-2);
  border: none;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  position: relative;
}

/* Tab icon */
.eb-tab-bar__icon {
  width: 24px;
  height: 24px;
  color: var(--eb-color-neutral-400);
  transition: color var(--eb-duration-fast);
}

/* Tab label */
.eb-tab-bar__label {
  font-size: var(--eb-font-size-xs);         /* 12px */
  font-weight: var(--eb-font-weight-medium);
  color: var(--eb-color-neutral-400);
  transition: color var(--eb-duration-fast),
              font-weight var(--eb-duration-fast);
}

/* Active state */
.eb-tab-bar__item--active .eb-tab-bar__icon {
  color: var(--eb-color-primary);
}

.eb-tab-bar__item--active .eb-tab-bar__label {
  color: var(--eb-color-primary);
  font-weight: var(--eb-font-weight-semibold);
}

/* Notification badge */
.eb-tab-bar__badge {
  position: absolute;
  top: 4px;
  right: calc(50% - 16px);
  width: 8px;
  height: 8px;
  background: var(--eb-color-sos);
  border-radius: var(--eb-radius-full);
}

/* Focus */
.eb-tab-bar__item:focus-visible {
  outline: 2px solid var(--eb-color-border-focus);
  outline-offset: -2px;
  border-radius: var(--eb-radius-sm);
}
```

### BottomSheet CSS

```css
/* Backdrop */
.eb-sheet-backdrop {
  position: fixed;
  inset: 0;
  background: var(--eb-color-overlay);
  z-index: var(--eb-z-modal-backdrop);       /* 400 */
  opacity: 0;
  transition: opacity var(--eb-duration-fast) var(--eb-ease-default);
}

.eb-sheet-backdrop--visible {
  opacity: 1;
}

/* Sheet container */
.eb-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--eb-color-bg-elevated);
  border-radius: var(--eb-radius-lg) var(--eb-radius-lg) 0 0;
  z-index: var(--eb-z-modal);               /* 500 */
  transform: translateY(100%);
  transition: transform var(--eb-duration-slow) var(--eb-ease-out);
  box-shadow: var(--eb-shadow-modal);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-bottom: var(--eb-safe-area-bottom);
}

.eb-sheet--open {
  transform: translateY(0);
}

/* Height variants */
.eb-sheet--quarter {
  max-height: 25vh;
}

.eb-sheet--half {
  max-height: 50vh;
}

.eb-sheet--full {
  max-height: 90vh;
}

/* Handle */
.eb-sheet__handle {
  width: 40px;
  height: 4px;
  background: var(--eb-color-neutral-300);
  border-radius: var(--eb-radius-full);
  margin: var(--eb-space-2) auto var(--eb-space-3);
}

/* Header */
.eb-sheet__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--eb-space-modal-padding);
  margin-bottom: var(--eb-space-4);
}

.eb-sheet__title {
  font-size: var(--eb-font-size-lg);
  font-weight: var(--eb-font-weight-semibold);
  color: var(--eb-color-text-primary);
}

/* Close button (full-screen only) */
.eb-sheet__close {
  width: var(--eb-touch-target-min);
  height: var(--eb-touch-target-min);
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--eb-color-text-secondary);
  border-radius: var(--eb-radius-full);
}

.eb-sheet__close:hover {
  background: var(--eb-color-bg-tertiary);
}

/* Content */
.eb-sheet__content {
  padding: 0 var(--eb-space-modal-padding);
}
```

### SOSButton CSS

```css
/* SOS Floating Action Button */
.eb-sos-btn {
  position: fixed;
  bottom: calc(56px + 16px + var(--eb-safe-area-bottom));  /* above tab bar */
  right: 16px;
  width: var(--eb-touch-target-sos);         /* 56px */
  height: var(--eb-touch-target-sos);        /* 56px */
  border-radius: var(--eb-radius-full);
  background: var(--eb-color-sos);
  color: var(--eb-color-sos-text);
  border: none;
  cursor: pointer;
  z-index: var(--eb-z-sos-button);           /* 900 */
  box-shadow: var(--eb-shadow-sos);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--eb-font-size-sm);
  font-weight: var(--eb-font-weight-bold);
  transition: background var(--eb-duration-fast) var(--eb-ease-default),
              transform var(--eb-duration-fast) var(--eb-ease-default);
  -webkit-tap-highlight-color: transparent;
}

.eb-sos-btn:hover {
  background: var(--eb-color-sos-hover);
}

.eb-sos-btn:active {
  background: var(--eb-color-sos-active);
  transform: scale(0.95);
}

.eb-sos-btn:focus-visible {
  outline: 2px solid var(--eb-color-sos);
  outline-offset: 2px;
}

/* Pulse animation (crisis trigger detected) */
@keyframes eb-sos-pulse {
  0%   { box-shadow: var(--eb-shadow-sos), 0 0 0 0 rgba(232, 114, 90, 0.4); }
  70%  { box-shadow: var(--eb-shadow-sos), 0 0 0 12px rgba(232, 114, 90, 0); }
  100% { box-shadow: var(--eb-shadow-sos), 0 0 0 0 rgba(232, 114, 90, 0); }
}

.eb-sos-btn--pulsing {
  animation: eb-sos-pulse 2s var(--eb-ease-in-out) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .eb-sos-btn--pulsing {
    animation: none;
    /* Static glow instead */
    box-shadow: var(--eb-shadow-sos), 0 0 0 6px rgba(232, 114, 90, 0.2);
  }
}
```

### CrisisOverlay CSS

```css
/* Crisis overlay container */
.eb-crisis-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--eb-z-crisis-overlay);       /* 1000 */
  background: var(--eb-color-crisis-overlay-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--eb-space-modal-padding);
  gap: var(--eb-space-4);
}

/* Content card inside overlay */
.eb-crisis-overlay__content {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--eb-space-6);
  text-align: center;
}

/* Warning icon */
.eb-crisis-overlay__icon {
  width: 48px;
  height: 48px;
  color: var(--eb-color-sos-text);
}

/* Message text */
.eb-crisis-overlay__text {
  font-size: var(--eb-font-size-lg);
  line-height: var(--eb-line-height-relaxed);
  color: var(--eb-color-sos-text);
}

/* Action card (phone, breathing) */
.eb-crisis-overlay__action {
  width: 100%;
  min-height: 56px;
  padding: var(--eb-space-4);
  background: var(--eb-color-bg-elevated);
  border-radius: var(--eb-radius-lg);
  display: flex;
  align-items: center;
  gap: var(--eb-space-3);
  cursor: pointer;
  border: none;
  text-align: left;
  transition: background var(--eb-duration-fast);
}

.eb-crisis-overlay__action:hover {
  background: var(--eb-color-bg-secondary);
}

/* Tap+hold exit button */
.eb-crisis-overlay__exit {
  width: 100%;
  min-height: 48px;
  padding: var(--eb-space-3) var(--eb-space-4);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--eb-radius-md);
  color: var(--eb-color-sos-text);
  font-size: var(--eb-font-size-sm);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* Hold progress bar */
.eb-crisis-overlay__exit-progress {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0%;
  background: rgba(255, 255, 255, 0.15);
  transition: width 2s linear;
}

.eb-crisis-overlay__exit--holding .eb-crisis-overlay__exit-progress {
  width: 100%;
}
```

### BreathingCircle CSS

```css
/* Breathing container (full-screen immersive) */
.eb-breathing {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--eb-space-6);
  background: linear-gradient(180deg, #FAFAF8 0%, #F0F6F0 100%);
  z-index: var(--eb-z-modal);
}

[data-theme="dark"] .eb-breathing {
  background: linear-gradient(180deg, #1A1A18 0%, #1A2E1C 100%);
}

/* Phase label */
.eb-breathing__phase {
  font-size: var(--eb-font-size-2xl);
  font-weight: var(--eb-font-weight-semibold);
  color: var(--eb-color-text-primary);
}

/* Circle */
.eb-breathing__circle {
  width: 200px;
  height: 200px;
  border-radius: var(--eb-radius-full);
  background: radial-gradient(circle,
    var(--eb-color-sage-300) 0%,
    var(--eb-color-sage-500) 100%
  );
  box-shadow: 0 0 40px rgba(123, 174, 127, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 4-7-8 Breathing animation */
@keyframes eb-breathe-478 {
  0%    { transform: scale(0.6);  opacity: 0.6; }  /* Start inhale */
  17.4% { transform: scale(1.0);  opacity: 1.0; }  /* End inhale (4s / 23s) */
  47.8% { transform: scale(1.0);  opacity: 1.0; }  /* End hold (4+7=11s / 23s) */
  82.6% { transform: scale(0.6);  opacity: 0.6; }  /* End exhale (4+7+8=19s / 23s) */
  100%  { transform: scale(0.6);  opacity: 0.6; }  /* End pause (23s / 23s) */
}

.eb-breathing__circle--animate {
  animation: eb-breathe-478 23s var(--eb-ease-breathing) infinite;
}

/* Timer text inside circle */
.eb-breathing__timer {
  font-size: var(--eb-breathing-timer-size);   /* 48px */
  font-weight: var(--eb-font-weight-bold);
  color: var(--eb-color-text-inverse);
  font-variant-numeric: tabular-nums;
}

/* Phase progress bar */
.eb-breathing__progress {
  width: 200px;
  height: 4px;
  background: var(--eb-color-neutral-200);
  border-radius: var(--eb-radius-full);
  overflow: hidden;
}

.eb-breathing__progress-fill {
  height: 100%;
  background: var(--eb-color-primary);
  border-radius: var(--eb-radius-full);
  transition: width 1s linear;
}

/* Cycle counter */
.eb-breathing__cycles {
  font-size: var(--eb-font-size-sm);
  color: var(--eb-color-text-secondary);
}

/* Pause button */
.eb-breathing__pause {
  min-height: var(--eb-touch-target-min);
  padding: var(--eb-space-2) var(--eb-space-6);
  background: transparent;
  border: 1.5px solid var(--eb-color-border);
  border-radius: var(--eb-radius-full);
  color: var(--eb-color-text-secondary);
  cursor: pointer;
  font-size: var(--eb-font-size-sm);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .eb-breathing__circle--animate {
    animation: eb-breathe-478-reduced 23s var(--eb-ease-breathing) infinite;
  }

  @keyframes eb-breathe-478-reduced {
    0%    { opacity: 0.5; }
    17.4% { opacity: 1.0; }
    47.8% { opacity: 1.0; }
    82.6% { opacity: 0.5; }
    100%  { opacity: 0.5; }
  }
}
```

---

## A.8 Responsive Behavior Summary

| Component | Mobile (< 640px) | Tablet (640-1023px) | Desktop (>= 1024px) |
|-----------|-------------------|---------------------|----------------------|
| Button | Full-width CTA | Auto-width | Auto-width |
| TextInput | Full-width | Full-width | Max 480px |
| Select | Bottom sheet | Bottom sheet | Dropdown popover |
| EmotionPicker | 2x4 grid, 64px cells | 3x3 grid, 80px cells | 4x2 grid, 80px cells |
| Card | Full-width | 2-column grid | 3-column grid |
| BottomSheet | Native bottom sheet | Native bottom sheet | Center modal |
| BottomTabBar | Fixed bottom, 56px | Fixed bottom, 56px | Sidebar nav (280px) |
| ChatBubble | 80% max-width | 70% max-width | 60% max-width |
| BreathingCircle | 200px circle | 240px circle | 280px circle |
| HealthTree | Compact widget | Standard widget | Expanded view |
| CrisisOverlay | Full-screen | Full-screen | Full-screen |
| StepWizard | Full-width | Centered 640px | Centered 640px |
| Header | Telegram header | Telegram header | App header |

---

## A.9 Animation Quick Reference

| Component | Animation | Duration | Easing | Trigger |
|-----------|-----------|----------|--------|---------|
| Button hover | Background darken | 150ms | default | Hover |
| Button active | scale(0.98) | 150ms | default | Active |
| Button loading | Spinner rotate | 800ms | linear | Loading state |
| Toggle switch | Thumb slide | 150ms | default | Tap |
| Checkbox | Check scale-in | 150ms | ease-out | Check |
| EmotionPicker | Cell scale(1.1) | 150ms | ease-out | Select |
| Card interactive | translateY(-1px), shadow | 150ms | default | Hover |
| Toast | Slide up | 200ms | ease-out | Appear |
| Toast dismiss | Slide down | 150ms | ease-in | Auto/swipe |
| BottomSheet open | Slide up | 350ms | ease-out | Open |
| BottomSheet close | Slide down | 250ms | ease-in | Close |
| Progress fill | Width expansion | 500ms | ease-out | Value change |
| Skeleton | Shimmer sweep | 1500ms | ease-in-out | Loading (loop) |
| BreathingCircle | Scale + opacity | 23s (cycle) | breathing | Exercise (loop) |
| SOS pulse | Shadow ring | 2000ms | ease-in-out | Crisis (loop) |
| HealthTree level-up | Scale bounce | 600ms | bounce | Level up |
| XP award | Float up + fade | 500ms | ease-out | Action |
| Achievement reveal | Scale + glow | 750ms | bounce | Unlock |
| Streak flame | Wobble | 2000ms | gentle | Active (loop) |

---

*Документ создан: UI Agent | Дата: 2026-02-04*
