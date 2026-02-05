---
title: "Design Foundations — Emotional Balance"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
status: "complete"
related_to:
  - "docs/discovery/prd.md"
  - "docs/discovery/competitive-analysis.md"
  - "docs/marketing/strategy.md"
  - "context/project-brief.yaml"
---

# Design Foundations: Emotional Balance

## 1. Визуальная философия

### 1.1 Миссия дизайна

Emotional Balance -- платформа психологической поддержки 24/7, и каждый визуальный элемент должен транслировать ощущение **безопасности, тепла и принятия**. Наш дизайн -- это не клиническое медицинское приложение. Это **цифровое безопасное пространство**, где пользователь чувствует себя услышанным и поддержанным.

### 1.2 Метафора: Сад роста (Garden of Growth)

Центральная визуальная метафора проекта -- **сад, в котором растёт дерево эмоционального здоровья**. Эта метафора пронизывает всю систему:

- **Цвета** -- природные, тёплые: зелень листьев, голубизна неба, лавандовые сумерки
- **Формы** -- мягкие, округлые: никогда острые углы, всегда скруглённые края
- **Анимации** -- плавные, органические: как покачивание листьев или медленное дыхание
- **Типографика** -- разборчивая, не давящая: лёгкая, воздушная, с достаточным межстрочным интервалом
- **Пространство** -- щедрое: много воздуха, элементы не теснят друг друга

### 1.3 Принципы визуального языка

| # | Принцип | Описание |
|---|---------|----------|
| 1 | **Безопасность прежде всего** | Каждый экран должен вызывать ощущение защищённости. SOS-элементы -- всегда доступны и заметны |
| 2 | **Тепло, не холод** | Wellness, а не medical. Тёплые тона, мягкие тени, природные палитры |
| 3 | **Простота без примитивности** | Минимум визуального шума, но достаточно деталей для эмоциональной глубины |
| 4 | **Доступность -- не опция** | WCAG AA как минимум. Контраст, размеры элементов, reduce-motion -- обязательны |
| 5 | **Telegram-native ощущения** | Дизайн интегрируется с экосистемой Telegram, а не конфликтует с ней |
| 6 | **Уважение к эмоциям** | Никогда не триггерить тревогу. Мягкие цвета ошибок, плавные переходы, предсказуемое поведение |

### 1.4 Визуальная дифференциация от конкурентов

| Конкурент | Визуальный стиль | Наше отличие |
|-----------|-----------------|--------------|
| Wysa | Фиолетовый/синий, мультяшный пингвин, игровой стиль | Природная зелень, минимализм, взрослый визуал |
| Woebot | Жёлтый, роботизированный, клинический | Тёплый sage green, органический, уютный |
| Replika | Синий/голубой, футуристичный, AI-ориентированный | Природный, заземлённый, wellness-ориентированный |
| Ясно | Нейтральный, бело-зелёный, профессиональный | Более тёплый, эмоциональный, с характером |
| Ася / Лея | Минимальный, текстовый, без дизайн-системы | Полноценная дизайн-система, последовательный визуал |

---

## 2. Цветовая палитра

### 2.1 Brand Primary -- Sage Green (Спокойствие, Рост, Природа)

Sage Green -- основной цвет бренда. Символизирует рост, обновление и связь с природой. В психологии зелёный ассоциируется со спокойствием, балансом и гармонией -- ключевыми ценностями платформы.

| Вариант | Название | HEX | RGB | HSL | Применение |
|---------|----------|-----|-----|-----|------------|
| Primary 50 | Sage Mist | `#F0F6F0` | rgb(240, 246, 240) | hsl(120, 21%, 95%) | Фон секций, hover-состояния |
| Primary 100 | Sage Frost | `#D9EAD9` | rgb(217, 234, 217) | hsl(120, 28%, 88%) | Фон карточек, бейджи |
| Primary 200 | Sage Light | `#B5D6B5` | rgb(181, 214, 181) | hsl(120, 27%, 77%) | Границы, разделители |
| Primary 300 | Sage Soft | `#8FC28F` | rgb(143, 194, 143) | hsl(120, 27%, 66%) | Иконки (неактивные) |
| **Primary 400** | **Sage** | **`#7BAE7F`** | **rgb(123, 174, 127)** | **hsl(125, 23%, 58%)** | **Основной бренд-цвет** |
| Primary 500 | Sage Mid | `#5F9A63` | rgb(95, 154, 99) | hsl(124, 24%, 49%) | Кнопки primary, ссылки |
| Primary 600 | Sage Deep | `#4A8550` | rgb(74, 133, 80) | hsl(126, 28%, 41%) | Hover-состояния кнопок |
| Primary 700 | Sage Dark | `#376F3D` | rgb(55, 111, 61) | hsl(126, 34%, 33%) | Активные состояния |
| Primary 800 | Sage Forest | `#275A2D` | rgb(39, 90, 45) | hsl(127, 40%, 25%) | Текст на светлом фоне |
| Primary 900 | Sage Night | `#1A4520` | rgb(26, 69, 32) | hsl(128, 45%, 19%) | Контрастный текст |

### 2.2 Brand Secondary -- Warm Blue (Доверие, Спокойствие)

Warm Blue дополняет зелёный, добавляя ощущение доверия и глубины. Используется для вторичных элементов интерфейса, ИИ-чата и информационных блоков.

| Вариант | Название | HEX | RGB | HSL | Применение |
|---------|----------|-----|-----|-----|------------|
| Secondary 50 | Sky Mist | `#EFF5F9` | rgb(239, 245, 249) | hsl(204, 38%, 96%) | Фон чата ИИ |
| Secondary 100 | Sky Frost | `#D6E7F0` | rgb(214, 231, 240) | hsl(201, 41%, 89%) | Пузырьки сообщений ИИ |
| Secondary 200 | Sky Light | `#ADCFE1` | rgb(173, 207, 225) | hsl(201, 41%, 78%) | Линии, разделители |
| Secondary 300 | Sky Soft | `#89B7D2` | rgb(137, 183, 210) | hsl(202, 40%, 68%) | Иконки ИИ |
| **Secondary 400** | **Warm Blue** | **`#6B9FBF`** | **rgb(107, 159, 191)** | **hsl(203, 36%, 58%)** | **Основной secondary** |
| Secondary 500 | Blue Mid | `#5289AB` | rgb(82, 137, 171) | hsl(203, 35%, 50%) | Кнопки secondary |
| Secondary 600 | Blue Deep | `#3F7497` | rgb(63, 116, 151) | hsl(204, 41%, 42%) | Hover кнопок |
| Secondary 700 | Blue Dark | `#2E5F82` | rgb(46, 95, 130) | hsl(205, 48%, 35%) | Активные состояния |
| Secondary 800 | Blue Night | `#204B6D` | rgb(32, 75, 109) | hsl(207, 55%, 28%) | Текст |
| Secondary 900 | Blue Abyss | `#153858` | rgb(21, 56, 88) | hsl(209, 61%, 21%) | Контрастный текст |

### 2.3 Accent -- Soft Lavender (Баланс, Интуиция)

Soft Lavender используется для акцентных элементов: achievement-бейджи, геймификация (дерево здоровья), специальные элементы интерфейса. Лавандовый в психологии связан с интуицией, балансом и духовным ростом.

| Вариант | Название | HEX | RGB | HSL | Применение |
|---------|----------|-----|-----|-----|------------|
| Accent 50 | Lavender Mist | `#F3F0F8` | rgb(243, 240, 248) | hsl(262, 33%, 96%) | Фон достижений |
| Accent 100 | Lavender Frost | `#E2DCEF` | rgb(226, 220, 239) | hsl(259, 34%, 90%) | Карточки премиум |
| Accent 200 | Lavender Light | `#C5BAE0` | rgb(197, 186, 224) | hsl(257, 33%, 80%) | Границы медитаций |
| Accent 300 | Lavender Soft | `#AE9DD4` | rgb(174, 157, 212) | hsl(259, 33%, 72%) | Иконки баланс |
| **Accent 400** | **Soft Lavender** | **`#9B8EC4`** | **rgb(155, 142, 196)** | **hsl(254, 28%, 66%)** | **Основной accent** |
| Accent 500 | Lavender Mid | `#8477B4` | rgb(132, 119, 180) | hsl(253, 27%, 59%) | Кнопки accent |
| Accent 600 | Lavender Deep | `#6E62A3` | rgb(110, 98, 163) | hsl(251, 25%, 51%) | Hover |
| Accent 700 | Lavender Dark | `#59508E` | rgb(89, 80, 142) | hsl(249, 28%, 43%) | Активные |
| Accent 800 | Lavender Night | `#453F78` | rgb(69, 63, 120) | hsl(246, 31%, 36%) | Текст |
| Accent 900 | Lavender Abyss | `#333063` | rgb(51, 48, 99) | hsl(244, 35%, 29%) | Контрастный |

### 2.4 SOS Accent -- Warm Coral (Безопасность, Внимание)

Warm Coral -- специальный цвет для SOS-функциональности. Намеренно не агрессивный красный, а тёплый коралловый -- привлекает внимание, но не вызывает панику у пользователей с тревожностью. Высокий контраст обязателен.

| Вариант | Название | HEX | RGB | HSL | Применение |
|---------|----------|-----|-----|-----|------------|
| SOS 50 | Coral Mist | `#FDF0ED` | rgb(253, 240, 237) | hsl(11, 73%, 96%) | Фон SOS-экрана |
| SOS 100 | Coral Frost | `#FBDCD5` | rgb(251, 220, 213) | hsl(11, 84%, 91%) | Фон SOS-карточек |
| SOS 200 | Coral Light | `#F5B5A6` | rgb(245, 181, 166) | hsl(11, 82%, 81%) | Мягкие границы |
| SOS 300 | Coral Soft | `#EF9382` | rgb(239, 147, 130) | hsl(9, 79%, 72%) | Иконки SOS |
| **SOS 400** | **Warm Coral** | **`#E8725A`** | **rgb(232, 114, 90)** | **hsl(10, 76%, 63%)** | **Основной SOS** |
| SOS 500 | Coral Mid | `#DE5438` | rgb(222, 84, 56) | hsl(10, 72%, 55%) | SOS-кнопка |
| SOS 600 | Coral Deep | `#C4412A` | rgb(196, 65, 42) | hsl(9, 65%, 47%) | Hover SOS |
| SOS 700 | Coral Dark | `#A33322` | rgb(163, 51, 34) | hsl(8, 66%, 39%) | Pressed |
| SOS 800 | Coral Night | `#822919` | rgb(130, 41, 25) | hsl(9, 68%, 30%) | Текст SOS |
| SOS 900 | Coral Abyss | `#621F13` | rgb(98, 31, 19) | hsl(9, 67%, 23%) | Контраст |

### 2.5 Semantic Colors (Семантические цвета)

#### Success (Успех)

Используется для положительной обратной связи: завершённые упражнения, достижения, прогресс. Lighter, чем brand primary, чтобы визуально отличаться от основного зелёного.

| Вариант | HEX | RGB | HSL | Применение |
|---------|-----|-----|-----|------------|
| Success Light | `#ECFDF5` | rgb(236, 253, 245) | hsl(152, 81%, 96%) | Фон уведомлений |
| Success Default | `#34D399` | rgb(52, 211, 153) | hsl(158, 64%, 52%) | Иконки, бейджи |
| Success Dark | `#059669` | rgb(5, 150, 105) | hsl(161, 94%, 30%) | Текст |

#### Warning (Предупреждение)

Тёплый amber для мягких предупреждений. Не пугающий, а информативный.

| Вариант | HEX | RGB | HSL | Применение |
|---------|-----|-----|-----|------------|
| Warning Light | `#FFFBEB` | rgb(255, 251, 235) | hsl(48, 100%, 96%) | Фон |
| Warning Default | `#F59E0B` | rgb(245, 158, 11) | hsl(38, 92%, 50%) | Иконки |
| Warning Dark | `#B45309` | rgb(180, 83, 9) | hsl(26, 90%, 37%) | Текст |

#### Error (Ошибка)

Мягкий красный -- осознанный выбор для пользователей с тревожностью. Не кричащий, не триггерящий, но информативный.

| Вариант | HEX | RGB | HSL | Применение |
|---------|-----|-----|-----|------------|
| Error Light | `#FEF2F2` | rgb(254, 242, 242) | hsl(0, 86%, 97%) | Фон |
| Error Default | `#EF7070` | rgb(239, 112, 112) | hsl(0, 80%, 69%) | Иконки (мягче стандартного red) |
| Error Dark | `#B91C1C` | rgb(185, 28, 28) | hsl(0, 74%, 42%) | Текст |

#### Info (Информация)

| Вариант | HEX | RGB | HSL | Применение |
|---------|-----|-----|-----|------------|
| Info Light | `#EFF6FF` | rgb(239, 246, 255) | hsl(214, 100%, 97%) | Фон |
| Info Default | `#60A5FA` | rgb(96, 165, 250) | hsl(213, 94%, 68%) | Иконки |
| Info Dark | `#1D4ED8` | rgb(29, 78, 216) | hsl(224, 76%, 48%) | Текст |

### 2.6 Neutral Scale (Нейтральная шкала)

Нейтральные цвета с лёгким тёплым подтоном (не чисто серые), чтобы поддержать общую тёплую атмосферу.

| Токен | Название | HEX | RGB | HSL | Применение |
|-------|----------|-----|-----|-----|------------|
| Neutral 50 | Cloud | `#FAFAF8` | rgb(250, 250, 248) | hsl(60, 14%, 98%) | Основной фон (light) |
| Neutral 100 | Fog | `#F4F4F1` | rgb(244, 244, 241) | hsl(60, 14%, 95%) | Фон секций |
| Neutral 200 | Mist | `#E8E8E3` | rgb(232, 232, 227) | hsl(60, 11%, 90%) | Границы, разделители |
| Neutral 300 | Pebble | `#D4D4CE` | rgb(212, 212, 206) | hsl(60, 6%, 82%) | Неактивные элементы |
| Neutral 400 | Stone | `#A3A39C` | rgb(163, 163, 156) | hsl(60, 3%, 63%) | Placeholder-текст |
| Neutral 500 | Slate | `#737370` | rgb(115, 115, 112) | hsl(60, 1%, 45%) | Вторичный текст |
| Neutral 600 | Granite | `#545451` | rgb(84, 84, 81) | hsl(60, 2%, 32%) | Иконки |
| Neutral 700 | Charcoal | `#3D3D3A` | rgb(61, 61, 58) | hsl(60, 3%, 23%) | Основной текст (light) |
| Neutral 800 | Coal | `#262624` | rgb(38, 38, 36) | hsl(60, 3%, 15%) | Заголовки |
| Neutral 900 | Midnight | `#141413` | rgb(20, 20, 19) | hsl(60, 3%, 8%) | Основной текст (dark bg) |

### 2.7 Dark Mode палитра

Telegram поддерживает dark mode нативно. Наша палитра адаптируется с сохранением эмоционального восприятия.

#### Принципы Dark Mode

1. **Фоны** -- тёмные нейтральные с тёплым подтоном (не чисто чёрные)
2. **Primary/Secondary** -- lighter variants для текста и акцентов
3. **Контраст** -- повышенный для читаемости
4. **Тени** -- минимальные, заменяются на lighter borders
5. **SOS** -- сохраняет высокий контраст

#### Dark Mode фоны

| Токен | HEX | RGB | HSL | Применение |
|-------|-----|-----|-----|------------|
| Dark BG Primary | `#1A1A18` | rgb(26, 26, 24) | hsl(60, 4%, 10%) | Основной фон |
| Dark BG Secondary | `#242422` | rgb(36, 36, 34) | hsl(60, 3%, 14%) | Карточки |
| Dark BG Tertiary | `#2E2E2B` | rgb(46, 46, 43) | hsl(60, 3%, 17%) | Elevated cards |
| Dark BG Elevated | `#383835` | rgb(56, 56, 53) | hsl(60, 3%, 21%) | Модальные окна |

#### Dark Mode цвета текста и элементов

| Токен | Light Mode | Dark Mode | Применение |
|-------|------------|-----------|------------|
| Text Primary | Neutral 800 `#262624` | `#F0F0ED` | Основной текст |
| Text Secondary | Neutral 500 `#737370` | `#A8A8A3` | Вторичный текст |
| Text Disabled | Neutral 400 `#A3A39C` | `#5A5A56` | Неактивный текст |
| Primary Brand | Primary 500 `#5F9A63` | Primary 300 `#8FC28F` | Акценты, ссылки |
| Secondary Brand | Secondary 500 `#5289AB` | Secondary 300 `#89B7D2` | Вторичные акценты |
| Accent Brand | Accent 500 `#8477B4` | Accent 300 `#AE9DD4` | Accent-элементы |
| SOS Color | SOS 500 `#DE5438` | SOS 400 `#E8725A` | SOS-элементы |
| Success | `#059669` | `#34D399` | Успех |
| Warning | `#B45309` | `#F59E0B` | Предупреждения |
| Error | `#EF7070` | `#EF7070` | Ошибки |
| Info | `#1D4ED8` | `#60A5FA` | Информация |
| Border | Neutral 200 `#E8E8E3` | `#3A3A37` | Границы |
| Divider | Neutral 200 `#E8E8E3` | `#2E2E2B` | Разделители |

### 2.8 Accessibility: таблица контрастности (WCAG AA)

Минимальные требования WCAG AA:
- Обычный текст (< 18px): коэффициент контраста >= 4.5:1
- Крупный текст (>= 18px bold / >= 24px): коэффициент контраста >= 3:1
- Элементы UI (иконки, границы): коэффициент контраста >= 3:1

#### Light Mode контрастность

| Комбинация текст / фон | Ratio | WCAG AA (обычный) | WCAG AA (крупный) |
|-------------------------|-------|-------------------|-------------------|
| Neutral 800 / Neutral 50 | 14.2:1 | Passed | Passed |
| Neutral 700 / Neutral 50 | 10.1:1 | Passed | Passed |
| Neutral 500 / Neutral 50 | 4.6:1 | Passed | Passed |
| Primary 800 / Neutral 50 | 7.8:1 | Passed | Passed |
| Primary 500 / Neutral 50 | 3.6:1 | Failed | Passed |
| Primary 600 / Neutral 50 | 4.8:1 | Passed | Passed |
| Primary 500 / White | 3.4:1 | Failed | Passed |
| White / Primary 500 | 3.4:1 | Failed | Passed |
| White / Primary 600 | 4.5:1 | Passed | Passed |
| SOS 500 / White | 3.7:1 | Failed | Passed |
| White / SOS 500 | 3.7:1 | Failed | Passed |
| White / SOS 600 | 5.0:1 | Passed | Passed |
| SOS 800 / SOS 50 | 10.5:1 | Passed | Passed |
| Secondary 800 / Neutral 50 | 8.4:1 | Passed | Passed |
| Accent 800 / Neutral 50 | 7.1:1 | Passed | Passed |
| Neutral 800 / Primary 50 | 13.8:1 | Passed | Passed |
| Neutral 800 / Secondary 50 | 13.5:1 | Passed | Passed |

#### Dark Mode контрастность

| Комбинация текст / фон | Ratio | WCAG AA (обычный) | WCAG AA (крупный) |
|-------------------------|-------|-------------------|-------------------|
| `#F0F0ED` / Dark BG Primary | 15.1:1 | Passed | Passed |
| `#A8A8A3` / Dark BG Primary | 7.2:1 | Passed | Passed |
| Primary 300 / Dark BG Primary | 8.5:1 | Passed | Passed |
| Secondary 300 / Dark BG Primary | 8.1:1 | Passed | Passed |
| SOS 400 / Dark BG Primary | 5.4:1 | Passed | Passed |
| `#F0F0ED` / Dark BG Secondary | 13.2:1 | Passed | Passed |
| `#A8A8A3` / Dark BG Secondary | 6.3:1 | Passed | Passed |

#### Рекомендации по использованию цвета

```
Для текста на светлом фоне:
  - Основной текст: Neutral 700+ (ratio >= 7:1)
  - Вторичный текст: Neutral 500+ (ratio >= 4.5:1)
  - Primary ссылки: Primary 600+ (ratio >= 4.5:1)
  - SOS-текст: SOS 600+ или SOS 800 (ratio >= 4.5:1)

Для текста на цветном фоне:
  - На Primary 400-600: использовать White (проверить ratio >= 4.5:1)
  - На SOS 400-500: использовать White (при < 4.5:1 -- использовать 600+)

Для кнопок:
  - Primary Button: bg Primary 500, text White, hover Primary 600
  - SOS Button: bg SOS 500, text White, hover SOS 600
  - Обводка кнопок для дополнительного контраста при необходимости
```

---

## 3. Типографика

### 3.1 Font Family

| Приоритет | Шрифт | Назначение | Примечание |
|-----------|-------|------------|------------|
| 1 | **Inter** | Основной шрифт | Оптимизирован для экранов, отличная кириллица, переменный шрифт |
| 2 | `system-ui` | Фоллбэк системный | Нативный шрифт ОС |
| 3 | `-apple-system` | Фоллбэк Apple | San Francisco на iOS/macOS |
| 4 | `Segoe UI` | Фоллбэк Windows | Системный Windows |
| 5 | `sans-serif` | Общий фоллбэк | Любой sans-serif |

**CSS Font Stack:**

```css
font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
```

**Почему Inter:**

- Открытый исходный код (SIL Open Font License)
- Оптимизирован для экранов (variable font)
- Отличная поддержка кириллицы
- Хороший x-height для читаемости на мобильных
- Поддержка tabular figures (для метрик, таймеров)
- Широкий диапазон весов (100-900)

### 3.2 Type Scale (Шкала размеров)

Основана на base unit 16px с масштабным коэффициентом Major Third (1.25).

| Токен | Размер (px) | Размер (rem) | Line Height (px) | Line Height | Letter Spacing | Применение |
|-------|-------------|--------------|-------------------|-------------|---------------|------------|
| `text-xs` | 12px | 0.75rem | 16px | 1.33 | 0.02em | Подписи, мета-данные, timestamps |
| `text-sm` | 14px | 0.875rem | 20px | 1.43 | 0.01em | Вторичный текст, подписи к полям |
| `text-base` | 16px | 1rem | 24px | 1.5 | 0 | Основной body текст, параграфы |
| `text-lg` | 18px | 1.125rem | 28px | 1.56 | -0.01em | Увеличенный body, лид-абзацы |
| `text-xl` | 20px | 1.25rem | 28px | 1.4 | -0.01em | Подзаголовки секций |
| `text-2xl` | 24px | 1.5rem | 32px | 1.33 | -0.02em | Заголовки карточек, диалогов |
| `text-3xl` | 30px | 1.875rem | 36px | 1.2 | -0.02em | Заголовки страниц |
| `text-4xl` | 36px | 2.25rem | 40px | 1.11 | -0.03em | Только hero-блоки, числовые метрики |

### 3.3 Font Weights (Начертания)

| Токен | Вес | Применение |
|-------|-----|------------|
| `font-regular` | 400 | Body-текст, параграфы, описания |
| `font-medium` | 500 | Подписи полей, навигация, мета-данные |
| `font-semibold` | 600 | Подзаголовки, важные элементы, кнопки |
| `font-bold` | 700 | Заголовки, акцентные числа, KPI |

### 3.4 Heading Presets (Пресеты заголовков)

| Пресет | Size | Weight | Line Height | Letter Spacing | Margin Top | Margin Bottom |
|--------|------|--------|-------------|---------------|------------|---------------|
| `h1` | 30px (text-3xl) | 700 (bold) | 36px | -0.02em | 0 | 16px |
| `h2` | 24px (text-2xl) | 700 (bold) | 32px | -0.02em | 32px | 12px |
| `h3` | 20px (text-xl) | 600 (semibold) | 28px | -0.01em | 24px | 8px |
| `h4` | 18px (text-lg) | 600 (semibold) | 28px | -0.01em | 24px | 8px |
| `h5` | 16px (text-base) | 600 (semibold) | 24px | 0 | 16px | 4px |
| `h6` | 14px (text-sm) | 600 (semibold) | 20px | 0.01em | 16px | 4px |

### 3.5 Body Text Presets

| Пресет | Size | Weight | Line Height | Max Width | Применение |
|--------|------|--------|-------------|-----------|------------|
| `body-sm` | 14px | 400 | 20px | 65ch | Вторичный текст, подписи, мелкий шрифт |
| `body` | 16px | 400 | 24px | 65ch | Основной body, параграфы, диалоги |
| `body-lg` | 18px | 400 | 28px | 60ch | Лид-абзацы, важные описания, welcome-экран |

### 3.6 Специальные текстовые стили

| Стиль | Описание | Параметры |
|-------|----------|-----------|
| `caption` | Мета-данные, timestamps | 12px, medium 500, Neutral 500, uppercase при необходимости |
| `overline` | Категории, лейблы | 12px, semibold 600, uppercase, letter-spacing 0.05em |
| `button-text` | Текст кнопок | 16px, semibold 600, letter-spacing 0.01em |
| `button-text-sm` | Текст малых кнопок | 14px, medium 500, letter-spacing 0.01em |
| `input-text` | Текст в полях ввода | 16px, regular 400 (минимум 16px для iOS -- предотвращает zoom) |
| `number-display` | Крупные числовые метрики | 36px, bold 700, tabular-nums |
| `breathing-timer` | Таймер дыхания | 48px, bold 700, tabular-nums, Primary 500 |

---

## 4. Spacing System (Система отступов)

### 4.1 Base Unit

**Base unit: 4px.** Все отступы кратны 4px для визуальной согласованности и ритма.

### 4.2 Spacing Scale

| Токен | Значение | Пример применения |
|-------|----------|-------------------|
| `space-0` | 0px | Без отступа |
| `space-0.5` | 2px | Микро-разделитель (редко) |
| `space-1` | 4px | Между иконкой и текстом, внутренний padding мелких элементов |
| `space-2` | 8px | Между связанными элементами, gap внутри компонента |
| `space-3` | 12px | Padding мелких кнопок, gap между элементами списка |
| `space-4` | 16px | Page padding, card padding, стандартный gap |
| `space-5` | 20px | Увеличенный gap между компонентами |
| `space-6` | 24px | Section gap, gap между карточками |
| `space-8` | 32px | Большие отступы между секциями |
| `space-10` | 40px | Отступ между основными блоками |
| `space-12` | 48px | Крупные секционные отступы |
| `space-16` | 64px | Максимальный отступ, hero-блоки |

### 4.3 Semantic Spacing (Семантические отступы)

| Токен | Значение | Описание |
|-------|----------|----------|
| `page-padding-x` | 16px | Горизонтальный padding страницы (мобильный) |
| `page-padding-y` | 16px | Вертикальный padding страницы |
| `section-gap` | 24px | Отступ между секциями на странице |
| `card-padding` | 16px | Внутренний padding карточек |
| `card-gap` | 12px | Отступ между элементами внутри карточки |
| `element-gap` | 8px | Отступ между мелкими элементами |
| `input-padding-x` | 12px | Горизонтальный padding полей ввода |
| `input-padding-y` | 10px | Вертикальный padding полей ввода |
| `button-padding-x` | 24px | Горизонтальный padding кнопок |
| `button-padding-y` | 12px | Вертикальный padding кнопок |
| `button-padding-x-sm` | 16px | Горизонтальный padding малых кнопок |
| `button-padding-y-sm` | 8px | Вертикальный padding малых кнопок |
| `modal-padding` | 24px | Padding модальных окон |
| `chat-bubble-padding` | 12px | Padding пузырьков чата |
| `list-item-gap` | 12px | Отступ между элементами списка |
| `sos-button-size` | 56px | Размер SOS-кнопки (touch target) |

### 4.4 Правила применения отступов

```
1. Внутренний padding компонента всегда меньше или равен внешнему gap
2. Связанные элементы (label + input): space-1 или space-2
3. Элементы одного уровня (кнопки в ряд): space-2 или space-3
4. Разные компоненты рядом (карточка + карточка): space-4 или space-6
5. Секции на странице: space-6 или space-8
6. Вертикальный ритм: последовательное увеличение отступов сверху вниз
```

---

## 5. Grid System (Сетка)

### 5.1 Mobile (Telegram WebApp) -- Основной формат

Telegram WebApp работает в контейнере мессенджера. Mobile-first -- наш приоритет.

| Параметр | Значение |
|----------|----------|
| Тип | Single column |
| Ширина | 100vw (ограничена контейнером Telegram) |
| Padding | 16px с каждой стороны |
| Полезная ширина | `100vw - 32px` |
| Максимальная ширина контента | 480px |
| Колонки | 1 |
| Breakpoint | < 640px |

```
+--16px--[=========CONTENT=========]--16px--+
|         single column, full width          |
+--------------------------------------------+
```

### 5.2 Tablet

| Параметр | Значение |
|----------|----------|
| Breakpoint | 640px -- 1023px |
| Columns | 2 |
| Gap | 16px |
| Padding | 24px с каждой стороны |
| Max content width | 720px |

```
+--24px--[===COL 1===]--16px--[===COL 2===]--24px--+
|           2 равные колонки с gap 16px              |
+---------------------------------------------------+
```

### 5.3 Desktop

| Параметр | Значение |
|----------|----------|
| Breakpoint | >= 1024px |
| Layout A | 3 equal columns |
| Layout B | Sidebar (280px) + Content |
| Gap | 24px |
| Padding | 32px |
| Max content width | 1120px |

```
Layout A (Dashboard):
+--32px--[==COL 1==]--24px--[==COL 2==]--24px--[==COL 3==]--32px--+

Layout B (Chat):
+--32px--[SIDEBAR 280px]--24px--[=====CONTENT=====]--32px--+
```

### 5.4 Card Grid

Для сеток карточек (упражнения, медитации, курсы) используется auto-fill:

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 0 16px;
}
```

| Viewport | Колонки | Min card width |
|----------|---------|----------------|
| < 640px | 1 | 100% |
| 640-959px | 2 | 280px |
| 960-1279px | 3 | 280px |
| >= 1280px | 4 | 280px |

### 5.5 Telegram WebApp специфика

```yaml
Учитывать:
  - Safe area insets (notch, навигация)
  - Telegram header height (~56px)
  - Bottom navigation (если используется): 64px
  - Keyboard overlay (при вводе текста в чате)
  - Telegram.WebApp.viewportHeight -- динамический
  - Telegram.WebApp.viewportStableHeight -- стабильный

CSS переменные:
  --tg-viewport-height: var(--tg-viewport-height);
  --tg-viewport-stable-height: var(--tg-viewport-stable-height);
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
```

---

## 6. Elevation / Shadows (Тени)

### 6.1 Принципы

- Тени создают иерархию и глубину без навязчивости
- Все тени мягкие и тёплые (не резкие чёрные)
- В Dark Mode тени минимальны, заменяются на lighter borders
- SOS-overlay имеет максимальную тень для привлечения внимания

### 6.2 Light Mode тени

| Токен | Значение | Применение |
|-------|----------|------------|
| `shadow-none` | `none` | Flat-элементы, inline-компоненты |
| `shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.05)` | Карточки в покое, мелкие elevated-элементы |
| `shadow-md` | `0 4px 6px rgba(0, 0, 0, 0.07)` | Elevated карточки, dropdown-меню, hover-состояния карточек |
| `shadow-lg` | `0 10px 15px rgba(0, 0, 0, 0.1)` | Модальные окна, bottom sheets, floating action button |
| `shadow-xl` | `0 20px 25px rgba(0, 0, 0, 0.15)` | SOS overlay, критические модалки |

#### Расширенные тени (multi-layer для реализма)

| Токен | Значение |
|-------|----------|
| `shadow-card` | `0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)` |
| `shadow-card-hover` | `0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)` |
| `shadow-dropdown` | `0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)` |
| `shadow-modal` | `0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)` |
| `shadow-sos` | `0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1)` |

### 6.3 Dark Mode тени

В Dark Mode тени почти не видны на тёмном фоне. Вместо этого используются более светлые borders и subtle background differences.

| Токен | Dark Mode альтернатива |
|-------|----------------------|
| `shadow-sm` | `border: 1px solid rgba(255, 255, 255, 0.06)` |
| `shadow-md` | `border: 1px solid rgba(255, 255, 255, 0.08)` |
| `shadow-lg` | `border: 1px solid rgba(255, 255, 255, 0.1), background slightly lighter` |
| `shadow-xl` | `0 10px 20px rgba(0, 0, 0, 0.4)` (тени видны на тёмном) |

### 6.4 Focus Ring (кольцо фокуса)

Для keyboard navigation и accessibility:

```css
/* Light Mode */
.focus-ring {
  outline: 2px solid #7BAE7F;     /* Primary 400 */
  outline-offset: 2px;
}

/* Dark Mode */
.focus-ring-dark {
  outline: 2px solid #8FC28F;     /* Primary 300 */
  outline-offset: 2px;
}

/* SOS Focus */
.focus-ring-sos {
  outline: 2px solid #E8725A;     /* SOS 400 */
  outline-offset: 2px;
}
```

---

## 7. Border Radius (Скругления)

### 7.1 Принцип: Всегда Rounded

Острые углы создают ощущение жёсткости и формальности. Для платформы психологической поддержки мы **всегда** используем скругления -- это добавляет теплоту, мягкость и дружелюбие.

### 7.2 Шкала скруглений

| Токен | Значение | Применение |
|-------|----------|------------|
| `rounded-none` | 0px | Только для full-width элементов (dividers, separators) |
| `rounded-sm` | 4px | Input-поля, мелкие теги, badges |
| `rounded-md` | 8px | Карточки, кнопки, dropdown-меню |
| `rounded-lg` | 12px | Секции, модальные окна, bottom sheets |
| `rounded-xl` | 16px | Крупные карточки, основные контейнеры |
| `rounded-2xl` | 20px | Крупные модальные окна, hero-карточки |
| `rounded-full` | 9999px | Pill-кнопки, аватары, FAB, SOS-кнопка, теги-чипсы |

### 7.3 Применение по компонентам

| Компонент | Border Radius | Примечание |
|-----------|---------------|------------|
| Кнопки (основные) | `rounded-md` (8px) | Стандартные кнопки |
| Кнопки (pill) | `rounded-full` | Теги, фильтры, chip-кнопки |
| SOS-кнопка | `rounded-full` | Круглая, 56x56px |
| Карточки | `rounded-md` (8px) | Стандартные карточки |
| Карточки (hero) | `rounded-xl` (16px) | Главные промо-карточки |
| Input-поля | `rounded-sm` (4px) | Текстовые поля, селекты |
| Chat-пузырьки | `rounded-lg` (12px) | С одним прямым углом (стиль мессенджера) |
| Аватары | `rounded-full` | Круглые |
| Модальные окна | `rounded-lg` (12px) | Top corners на mobile bottom sheet |
| Bottom Sheet | `rounded-lg` (12px) top | Только верхние углы |
| Toast/Snackbar | `rounded-md` (8px) | Уведомления |
| Progress Bar | `rounded-full` | Скруглённые полоски прогресса |
| Emotion Picker | `rounded-xl` (16px) | Карточки эмоций |
| Tab Bar | `rounded-md` (8px) | Переключатели вкладок |
| Image thumbnails | `rounded-md` (8px) | Превью изображений |

---

## 8. Motion / Animation (Анимация)

### 8.1 Принципы анимации

1. **Gentle, не тревожные** -- плавные, предсказуемые движения. Никогда резкие, дёрганые или неожиданные
2. **Функциональные** -- каждая анимация несёт смысл (переход, обратная связь, ожидание)
3. **Короткие** -- не задерживать пользователя, не мешать взаимодействию
4. **Уважать prefers-reduced-motion** -- полностью отключаемые по системной настройке

### 8.2 Длительности (Duration)

| Токен | Значение | Применение |
|-------|----------|------------|
| `duration-instant` | 0ms | Мгновенные переключения (без анимации) |
| `duration-fast` | 150ms | Hover-состояния, мелкие кнопки, toggle, checkbox |
| `duration-normal` | 250ms | Основные переходы: раскрытие, свёртывание, fade |
| `duration-slow` | 350ms | Модальные окна, bottom sheets, page transitions |
| `duration-slower` | 500ms | Специальные анимации: skeleton loading, progress fill |

### 8.3 Easing Functions (Кривые)

| Токен | Значение CSS | Применение |
|-------|-------------|------------|
| `ease-default` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Стандартный ease-out. Большинство анимаций |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Элемент уходит с экрана |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Элемент появляется на экране (основной) |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Модальные окна, растягивание |
| `ease-linear` | `linear` | Progress bars, таймеры |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce-эффект для мелких элементов (бейджи, уведомления) |
| `ease-breathing` | `cubic-bezier(0.45, 0, 0.55, 1)` | Специальная кривая для дыхательных упражнений |

### 8.4 Стандартные анимации

| Анимация | Duration | Easing | Описание |
|----------|----------|--------|----------|
| Fade In | 250ms | ease-out | Появление элемента (opacity 0 -> 1) |
| Fade Out | 200ms | ease-in | Исчезновение элемента |
| Slide Up | 300ms | ease-out | Bottom sheet, модальное окно снизу |
| Slide Down | 250ms | ease-in | Закрытие bottom sheet |
| Scale In | 200ms | ease-out | Появление кнопки, badge |
| Scale Out | 150ms | ease-in | Исчезновение кнопки |
| Collapse | 250ms | ease-in-out | Сворачивание секции |
| Expand | 250ms | ease-in-out | Разворачивание секции |
| Skeleton Pulse | 1500ms | ease-in-out | Мерцание skeleton-загрузки (loop) |
| Spinner | 800ms | linear | Индикатор загрузки (loop) |
| Progress Fill | 500ms | ease-out | Заполнение progress bar |

### 8.5 Breathing Animation (Дыхательные упражнения)

Специальная анимация для упражнений 4-7-8 дыхания -- ключевая функция SOS-протокола.

```css
/* 4-7-8 Breathing: вдох 4с, задержка 7с, выдох 8с */
@keyframes breathing-4-7-8 {
  0%    { transform: scale(1);    opacity: 0.6; } /* Начало вдоха */
  21%   { transform: scale(1.3);  opacity: 1;   } /* Конец вдоха (4с) */
  58%   { transform: scale(1.3);  opacity: 1;   } /* Задержка (7с) */
  100%  { transform: scale(1);    opacity: 0.6; } /* Выдох (8с) */
}

.breathing-circle {
  animation: breathing-4-7-8 19s ease-breathing infinite;
}

/* 4-4-4 Box Breathing (альтернативная) */
@keyframes breathing-box {
  0%    { transform: scale(1);    opacity: 0.6; }
  25%   { transform: scale(1.25); opacity: 1;   } /* Вдох */
  50%   { transform: scale(1.25); opacity: 1;   } /* Задержка */
  75%   { transform: scale(1);    opacity: 0.6; } /* Выдох */
  100%  { transform: scale(1);    opacity: 0.6; } /* Пауза */
}
```

**Параметры дыхательного круга:**

| Параметр | Значение |
|----------|----------|
| Размер | 200px (mobile), 280px (desktop) |
| Цвет | Primary 300 -> Primary 500 gradient |
| Форма | Круг (border-radius: 50%) |
| Тень | `0 0 40px rgba(123, 174, 127, 0.3)` |
| Текст по центру | Фаза ("Вдох", "Задержка", "Выдох") + таймер |

### 8.6 Reduce Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Исключение: дыхательная анимация сохраняется,
     но замедляется и упрощается */
  .breathing-circle {
    animation-duration: 19s !important;
    animation-iteration-count: infinite !important;
    /* Только opacity, без scale */
    animation-name: breathing-reduced !important;
  }
}

@keyframes breathing-reduced {
  0%    { opacity: 0.5; }
  21%   { opacity: 1;   }
  58%   { opacity: 1;   }
  100%  { opacity: 0.5; }
}
```

### 8.7 Анимация дерева здоровья (Gamification)

Для анимации терапевтической геймификации ("Дерево эмоционального здоровья"):

| Анимация | Описание | Duration | Trigger |
|----------|----------|----------|---------|
| Leaf Grow | Появление нового листочка | 600ms, ease-out | Завершение упражнения |
| Branch Extend | Рост ветки | 800ms, ease-in-out | Прогресс в курсе |
| Flower Bloom | Цветение (достижение) | 1000ms, ease-out + spring | Achievement unlocked |
| Tree Sway | Покачивание дерева | 3000ms, ease-in-out, loop | Idle-состояние |
| Season Change | Смена сезона (фон) | 2000ms, ease-in-out | Смена месяца/уровня |

---

## 9. Иконки

### 9.1 Стиль

| Параметр | Значение |
|----------|----------|
| Библиотека | Lucide Icons (рекомендация) или Heroicons |
| Стиль (default) | Outline (1.5px stroke) |
| Стиль (active/emphasis) | Filled |
| Стиль (light mode) | Outline |
| Стиль (dark mode) | Outline (lighter stroke color) |

**Почему Lucide / Heroicons:**
- Открытая лицензия (MIT / MIT)
- Консистентный стиль
- Хорошее покрытие нужных категорий
- React-компоненты из коробки
- Отличное качество на мобильных экранах

### 9.2 Размеры иконок

| Токен | Размер | Stroke | Применение |
|-------|--------|--------|------------|
| `icon-xs` | 16px | 1.5px | Inline с мелким текстом, meta-данные |
| `icon-sm` | 20px | 1.5px | Кнопки (малые), списки, навигация |
| `icon-md` | 24px | 2px | Стандартные иконки, tab bar, карточки |
| `icon-lg` | 32px | 2px | Заголовки секций, feature-иконки |
| `icon-xl` | 48px | 2px | Hero-иконки, пустые состояния |

### 9.3 Цвета иконок

| Состояние | Light Mode | Dark Mode |
|-----------|------------|-----------|
| Default | Neutral 600 `#545451` | `#A8A8A3` |
| Active | Primary 500 `#5F9A63` | Primary 300 `#8FC28F` |
| Inactive | Neutral 400 `#A3A39C` | `#5A5A56` |
| SOS | SOS 500 `#DE5438` | SOS 400 `#E8725A` |
| On Primary BG | White `#FFFFFF` | White `#FFFFFF` |

### 9.4 Эмоциональные иконки (Emotion Picker)

Для дневника эмоций и определения настроения используются emoji с усиленным визуальным стилем:

| Эмоция | Emoji | Цвет фона | Цвет иконки | Описание |
|--------|-------|-----------|-------------|----------|
| Радость | :blush: | `#FEF9C3` (yellow-100) | `#CA8A04` (yellow-600) | Спокойная радость |
| Грусть | :pensive: | Secondary 50 `#EFF5F9` | Secondary 600 `#3F7497` | Мягкая грусть |
| Тревога | :worried: | Accent 50 `#F3F0F8` | Accent 600 `#6E62A3` | Беспокойство |
| Гнев | :angry: | SOS 50 `#FDF0ED` | SOS 600 `#C4412A` | Раздражение |
| Усталость | :sleeping: | Neutral 100 `#F4F4F1` | Neutral 600 `#545451` | Утомление |
| Спокойствие | :hugs: | Primary 50 `#F0F6F0` | Primary 600 `#4A8550` | Умиротворение |
| Страх | :fearful: | Warning Light `#FFFBEB` | Warning Dark `#B45309` | Испуг |
| Одиночество | :disappointed_relieved: | Secondary 100 `#D6E7F0` | Secondary 700 `#2E5F82` | Одиночество |

**Размеры Emotion Picker:**

| Вариант | Emoji Size | Card Size | Padding |
|---------|-----------|-----------|---------|
| Compact (в чате) | 24px | 48x48px | 12px |
| Standard (дневник) | 32px | 64x64px | 16px |
| Large (выбор эмоции) | 40px | 80x80px | 20px |

### 9.5 SOS Icon (специальная иконка)

SOS-иконка должна быть мгновенно узнаваемой и отличаться от остального интерфейса.

| Параметр | Значение |
|----------|----------|
| Концепция | Сердце + щит (забота + защита) |
| Альтернативная | Крест помощи в круге |
| Размер | 24px (в навигации), 32px (на экране SOS) |
| Цвет | SOS 500 / SOS 400 (dark mode) |
| Анимация | Мягкий pulse при активном SOS-состоянии |
| Touch target | 56x56px минимум |

```css
/* SOS Pulse Animation */
@keyframes sos-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(232, 114, 90, 0.4); }
  70%  { box-shadow: 0 0 0 12px rgba(232, 114, 90, 0); }
  100% { box-shadow: 0 0 0 0 rgba(232, 114, 90, 0); }
}

.sos-button {
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  background: #DE5438;
  color: white;
  animation: sos-pulse 2s ease-in-out infinite;
}
```

---

## 10. Фоновые паттерны и градиенты

### 10.1 Градиенты

Тёплые, nature-inspired градиенты для фоновых секций и hero-блоков.

| Название | Значение | Применение |
|----------|----------|------------|
| Sage Sky | `linear-gradient(135deg, #F0F6F0 0%, #EFF5F9 100%)` | Основной фон секций |
| Morning Mist | `linear-gradient(180deg, #FAFAF8 0%, #F0F6F0 100%)` | Фон страницы (top-to-bottom) |
| Lavender Dusk | `linear-gradient(135deg, #F3F0F8 0%, #EFF5F9 100%)` | Фон медитаций, вечерние экраны |
| Warm Sunset | `linear-gradient(135deg, #FDF0ED 0%, #F3F0F8 100%)` | SOS-фон (мягкий) |
| Ocean Calm | `linear-gradient(135deg, #D6E7F0 0%, #F0F6F0 100%)` | Фон чата ИИ |
| Forest Path | `linear-gradient(180deg, #D9EAD9 0%, #B5D6B5 50%, #8FC28F 100%)` | Фон дерева здоровья |
| Night Rest | `linear-gradient(180deg, #1A1A18 0%, #204B6D 100%)` | Dark mode hero (ночной режим) |
| Breathing Glow | `radial-gradient(circle, #7BAE7F 0%, transparent 70%)` | Свечение дыхательного круга |

### 10.2 Dark Mode градиенты

| Название | Значение | Применение |
|----------|----------|------------|
| Dark Sage | `linear-gradient(135deg, #1A1A18 0%, #1A2E1C 100%)` | Основной фон |
| Dark Ocean | `linear-gradient(135deg, #1A1A18 0%, #162838 100%)` | Фон чата |
| Dark Lavender | `linear-gradient(135deg, #1A1A18 0%, #1E1A2E 100%)` | Фон медитаций |
| Dark SOS | `linear-gradient(135deg, #1A1A18 0%, #2E1810 100%)` | SOS-фон |

### 10.3 Текстуры и паттерны

#### Leaf Pattern (для фона дерева здоровья)

```
Стиль: Subtle, repeating, low-opacity
Opacity: 3-5% (light mode), 2-3% (dark mode)
Размер: 200x200px tile
Элементы: Абстрактные листья, мягкие линии
Цвет: Primary 300 на прозрачном фоне
```

#### Dot Pattern (для фона секций)

```
Стиль: Точечный паттерн
Размер точки: 1px
Gap: 24px
Opacity: 5% (light mode), 3% (dark mode)
Цвет: Neutral 400
```

#### Wave Pattern (для разделителей секций)

```
Стиль: Мягкая волна между секциями
Высота волны: 24-40px
Цвет: цвет нижней секции
Альтернатива: CSS clip-path
```

### 10.4 Overlay (наложения)

| Название | Значение | Применение |
|----------|----------|------------|
| Overlay Light | `rgba(0, 0, 0, 0.3)` | Backdrop модальных окон (light) |
| Overlay Dark | `rgba(0, 0, 0, 0.6)` | Backdrop модальных окон (dark) |
| Overlay SOS | `rgba(98, 31, 19, 0.8)` | SOS-экран overlay (критический) |
| Overlay Image | `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)` | Текст поверх изображений |

---

## 11. Tailwind CSS Configuration (Конфигурация)

### 11.1 Tailwind Theme Extension

```javascript
// tailwind.config.js — ключевые расширения темы
module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand Primary — Sage Green
        primary: {
          50:  '#F0F6F0',
          100: '#D9EAD9',
          200: '#B5D6B5',
          300: '#8FC28F',
          400: '#7BAE7F',
          500: '#5F9A63',
          600: '#4A8550',
          700: '#376F3D',
          800: '#275A2D',
          900: '#1A4520',
        },
        // Brand Secondary — Warm Blue
        secondary: {
          50:  '#EFF5F9',
          100: '#D6E7F0',
          200: '#ADCFE1',
          300: '#89B7D2',
          400: '#6B9FBF',
          500: '#5289AB',
          600: '#3F7497',
          700: '#2E5F82',
          800: '#204B6D',
          900: '#153858',
        },
        // Accent — Soft Lavender
        accent: {
          50:  '#F3F0F8',
          100: '#E2DCEF',
          200: '#C5BAE0',
          300: '#AE9DD4',
          400: '#9B8EC4',
          500: '#8477B4',
          600: '#6E62A3',
          700: '#59508E',
          800: '#453F78',
          900: '#333063',
        },
        // SOS Accent — Warm Coral
        sos: {
          50:  '#FDF0ED',
          100: '#FBDCD5',
          200: '#F5B5A6',
          300: '#EF9382',
          400: '#E8725A',
          500: '#DE5438',
          600: '#C4412A',
          700: '#A33322',
          800: '#822919',
          900: '#621F13',
        },
        // Neutrals
        neutral: {
          50:  '#FAFAF8',
          100: '#F4F4F1',
          200: '#E8E8E3',
          300: '#D4D4CE',
          400: '#A3A39C',
          500: '#737370',
          600: '#545451',
          700: '#3D3D3A',
          800: '#262624',
          900: '#141413',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'sm':   '4px',
        'md':   '8px',
        'lg':   '12px',
        'xl':   '16px',
        '2xl':  '20px',
        'full': '9999px',
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.06)',
        'dropdown':   '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)',
        'modal':      '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
        'sos':        '0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.1)',
      },
      spacing: {
        '0.5': '2px',
        '1':   '4px',
        '2':   '8px',
        '3':   '12px',
        '4':   '16px',
        '5':   '20px',
        '6':   '24px',
        '8':   '32px',
        '10':  '40px',
        '12':  '48px',
        '16':  '64px',
      },
      transitionDuration: {
        'fast':   '150ms',
        'normal': '250ms',
        'slow':   '350ms',
        'slower': '500ms',
      },
      transitionTimingFunction: {
        'default':   'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'ease-out':  'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in':   'cubic-bezier(0.4, 0, 1, 1)',
        'ease-io':   'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring':    'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'breathing': 'cubic-bezier(0.45, 0, 0.55, 1)',
      },
    },
  },
};
```

### 11.2 CSS Custom Properties (для runtime-переключения тем)

```css
:root {
  /* Backgrounds */
  --bg-primary:   #FAFAF8;
  --bg-secondary: #F4F4F1;
  --bg-tertiary:  #E8E8E3;
  --bg-elevated:  #FFFFFF;

  /* Text */
  --text-primary:   #262624;
  --text-secondary: #737370;
  --text-disabled:  #A3A39C;

  /* Brand */
  --color-primary:   #5F9A63;
  --color-secondary: #5289AB;
  --color-accent:    #8477B4;
  --color-sos:       #DE5438;

  /* Borders */
  --border-default: #E8E8E3;
  --border-strong:  #D4D4CE;

  /* Shadows */
  --shadow-card:  0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-modal: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
}

/* Dark Mode (Telegram) */
[data-theme="dark"],
.dark {
  --bg-primary:   #1A1A18;
  --bg-secondary: #242422;
  --bg-tertiary:  #2E2E2B;
  --bg-elevated:  #383835;

  --text-primary:   #F0F0ED;
  --text-secondary: #A8A8A3;
  --text-disabled:  #5A5A56;

  --color-primary:   #8FC28F;
  --color-secondary: #89B7D2;
  --color-accent:    #AE9DD4;
  --color-sos:       #E8725A;

  --border-default: #3A3A37;
  --border-strong:  #4A4A46;

  --shadow-card:  none;
  --shadow-modal: 0 10px 20px rgba(0,0,0,0.4);
}
```

---

## 12. Сводная таблица Design Tokens

### 12.1 Полный список токенов

| Категория | Токен | Light Mode | Dark Mode |
|-----------|-------|------------|-----------|
| **BG** | bg-primary | `#FAFAF8` | `#1A1A18` |
| **BG** | bg-secondary | `#F4F4F1` | `#242422` |
| **BG** | bg-tertiary | `#E8E8E3` | `#2E2E2B` |
| **BG** | bg-elevated | `#FFFFFF` | `#383835` |
| **Text** | text-primary | `#262624` | `#F0F0ED` |
| **Text** | text-secondary | `#737370` | `#A8A8A3` |
| **Text** | text-disabled | `#A3A39C` | `#5A5A56` |
| **Brand** | color-primary | `#5F9A63` | `#8FC28F` |
| **Brand** | color-primary-hover | `#4A8550` | `#7BAE7F` |
| **Brand** | color-secondary | `#5289AB` | `#89B7D2` |
| **Brand** | color-accent | `#8477B4` | `#AE9DD4` |
| **Brand** | color-sos | `#DE5438` | `#E8725A` |
| **Brand** | color-sos-hover | `#C4412A` | `#DE5438` |
| **Semantic** | color-success | `#34D399` | `#34D399` |
| **Semantic** | color-warning | `#F59E0B` | `#F59E0B` |
| **Semantic** | color-error | `#EF7070` | `#EF7070` |
| **Semantic** | color-info | `#60A5FA` | `#60A5FA` |
| **Border** | border-default | `#E8E8E3` | `#3A3A37` |
| **Border** | border-strong | `#D4D4CE` | `#4A4A46` |
| **Radius** | radius-sm | 4px | 4px |
| **Radius** | radius-md | 8px | 8px |
| **Radius** | radius-lg | 12px | 12px |
| **Radius** | radius-xl | 16px | 16px |
| **Radius** | radius-full | 9999px | 9999px |
| **Shadow** | shadow-sm | `0 1px 2px rgba(0,0,0,0.05)` | `none` |
| **Shadow** | shadow-md | `0 4px 6px rgba(0,0,0,0.07)` | `border 1px` |
| **Shadow** | shadow-lg | `0 10px 15px rgba(0,0,0,0.1)` | `0 10px 20px rgba(0,0,0,0.4)` |
| **Shadow** | shadow-xl | `0 20px 25px rgba(0,0,0,0.15)` | `0 20px 30px rgba(0,0,0,0.5)` |
| **Spacing** | space-page | 16px | 16px |
| **Spacing** | space-section | 24px | 24px |
| **Spacing** | space-card | 16px | 16px |
| **Spacing** | space-element | 8px | 8px |
| **Motion** | duration-fast | 150ms | 150ms |
| **Motion** | duration-normal | 250ms | 250ms |
| **Motion** | duration-slow | 350ms | 350ms |
| **Motion** | ease-default | `cubic-bezier(0.25,0.1,0.25,1)` | same |
| **Type** | font-family | Inter, system-ui, sans-serif | same |
| **Type** | text-base | 16px / 24px | same |
| **Type** | font-regular | 400 | same |
| **Type** | font-semibold | 600 | same |
| **Type** | font-bold | 700 | same |

---

## 13. Чеклист для разработки

### 13.1 Pre-development чеклист

- [ ] Шрифт Inter подключён (Google Fonts или self-hosted variable font)
- [ ] Tailwind CSS настроен с расширенной темой из секции 11.1
- [ ] CSS Custom Properties из секции 11.2 добавлены
- [ ] Dark mode переключение через `data-theme` или CSS класс `.dark`
- [ ] Telegram WebApp SDK подключён, viewport variables установлены
- [ ] `prefers-reduced-motion` медиа-запрос обработан
- [ ] Все цвета используют токены, а не хардкод
- [ ] Focus ring стили применены ко всем интерактивным элементам
- [ ] SOS-кнопка имеет touch target 56x56px

### 13.2 Accessibility чеклист

- [ ] Все текстовые комбинации проходят WCAG AA (4.5:1 для body, 3:1 для крупного)
- [ ] Focus visible на всех интерактивных элементах
- [ ] Цвет не единственный способ передачи информации (иконки + цвет)
- [ ] `prefers-reduced-motion: reduce` уважается
- [ ] Минимальный touch target 44x44px (48x48px рекомендуется)
- [ ] SOS touch target 56x56px
- [ ] Alt-текст для всех значимых изображений
- [ ] `aria-label` для иконочных кнопок
- [ ] Semantic HTML (headings, landmarks, lists)
- [ ] Тестирование с VoiceOver / TalkBack

---

## 14. Связанные документы

| Документ | Путь | Описание |
|----------|------|----------|
| Project Brief | `context/project-brief.yaml` | Краткое описание проекта |
| PRD | `docs/discovery/prd.md` | Требования к продукту |
| Competitive Analysis | `docs/discovery/competitive-analysis.md` | Анализ конкурентов |
| Marketing Strategy | `docs/marketing/strategy.md` | Маркетинговая стратегия |
| UI Kit | `docs/design/ui-kit.md` | Компонентная библиотека (в разработке) |
| User Flows | `docs/design/user-flows.md` | Пользовательские сценарии (в разработке) |

---

*Документ создан: UI Agent | Дата: 2026-02-04*
