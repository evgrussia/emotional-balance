---
title: "Responsive Guidelines"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
depends_on:
  - "docs/design/design-tokens.md"
  - "docs/design/component-library.md"
---

# Responsive Guidelines: Emotional Balance

Руководство по адаптивному дизайну платформы "Emotional Balance" (Нейро-Психолог 24/7). Продукт работает как Telegram WebApp. Более 90% пользователей используют мобильные устройства, поэтому mobile-first является обязательной стратегией.

---

## 1. Breakpoint System

### 1.1 Точки перелома

| Breakpoint | Token | Значение | Описание | Доля users |
|------------|-------|----------|----------|------------|
| **Mobile** | -- | < 640px | Основная платформа | ~90%+ |
| **Tablet** | `--eb-breakpoint-sm` / `--eb-breakpoint-md` | 640px -- 1023px | Планшеты | ~7% |
| **Desktop** | `--eb-breakpoint-lg` | >= 1024px | Telegram Desktop | ~3% |
| **Wide** | `--eb-breakpoint-xl` | >= 1280px | Широкие мониторы | < 1% |

> CSS custom properties нельзя использовать в `@media`. Breakpoint-токены для JS/tooling. В CSS -- литеральные значения.

### 1.2 Mobile-First CSS

Базовые стили для mobile. Расширения через `@media (min-width: ...)`:

```css
.card-grid { display: flex; flex-direction: column; gap: var(--eb-space-3); }

@media (min-width: 640px) {
  .card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--eb-space-4); }
}
@media (min-width: 1024px) {
  .card-grid { grid-template-columns: repeat(3, 1fr); gap: var(--eb-space-6); }
}
```

### 1.3 Telegram WebApp: типичные ширины

| Устройство | Ширина | Устройство | Ширина |
|-----------|--------|-----------|--------|
| iPhone SE | 375px | iPad Mini | 768px |
| iPhone 14/15 | 390px | iPad Pro 11" | 834px |
| iPhone Pro Max | 430px | TG Desktop (windowed) | 400--600px |
| Samsung S24 | 384px | TG Desktop (full) | 800--1400px |

> Telegram Desktop WebApp может открываться в окне 400px. Дизайн должен работать от **320px**.

---

## 2. Telegram WebApp Viewport

### 2.1 ViewportHeight vs ViewportStableHeight

| Свойство | Описание | Когда использовать |
|----------|----------|-------------------|
| `ViewportHeight` | Полная высота; меняется при клавиатуре | Layout, scroll areas |
| `ViewportStableHeight` | Стабильная высота; НЕ меняется при клавиатуре | Fixed elements (SOS, tab bar) |

```javascript
function syncViewport() {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;
  const root = document.documentElement;
  root.style.setProperty('--tg-viewport-height', `${tg.viewportHeight}px`);
  root.style.setProperty('--tg-viewport-stable-height', `${tg.viewportStableHeight}px`);

  tg.onEvent('viewportChanged', ({ isStateStable }) => {
    root.style.setProperty('--tg-viewport-height', `${tg.viewportHeight}px`);
    if (isStateStable)
      root.style.setProperty('--tg-viewport-stable-height', `${tg.viewportStableHeight}px`);
  });
}
```

### 2.2 SafeAreaInsets

| Inset | Типичное значение | Что учитывает |
|-------|-------------------|---------------|
| `top` | 44--59px (iPhone) | Notch, Dynamic Island, status bar |
| `bottom` | 34px (iPhone X+) | Home indicator |
| `left/right` | 0px (portrait) | Landscape notch |

```css
:root {
  --eb-safe-area-top:    env(safe-area-inset-top, 0px);
  --eb-safe-area-bottom: env(safe-area-inset-bottom, 0px);
  --eb-safe-area-left:   env(safe-area-inset-left, 0px);
  --eb-safe-area-right:  env(safe-area-inset-right, 0px);
}
```

### 2.3 isExpanded и клавиатура

При `isExpanded = true` WebApp занимает всю высоту (рекомендуемый режим). Клавиатура **сжимает** viewport, не перекрывает:

```
До клавиатуры:          С клавиатурой:
┌───────────────┐       ┌───────────────┐
│ TG Header     │       │ TG Header     │
│ Content       │       │ Content (сжат)│
│ Input         │       │ Input         │
│ Tab bar       │       │ ██ KEYBOARD ██│
└───────────────┘       └───────────────┘
```

### 2.4 Ориентация

Portrait only (Telegram mobile). На планшетах и TG Desktop возможен landscape, обрабатывается breakpoint `md` (768px+).

---

## 3. Layout Patterns per Breakpoint

### 3.1 Mobile (375--640px)

Single column, full-width, stacked. BottomTabBar фиксирован внизу. SOSButton: fixed bottom-right. Padding: 16px. Max-width: 480px.

### 3.2 Tablet (640--1023px)

2-column grid для карточек. Padding: 24px. BottomTabBar сохраняется. Max-width: 720px.

### 3.3 Desktop (>= 1024px)

Sidebar 280px заменяет BottomTabBar. 3-column grid. Padding: 32px. Max-width: 1120px.

### 3.4 Сводная таблица

| Параметр | Mobile (< 640px) | Tablet (640--1023px) | Desktop (>= 1024px) |
|----------|-------------------|----------------------|----------------------|
| Columns | 1 | 2 | 2--3 |
| Container max-width | 480px | 720px | 1120px |
| Page padding X | 16px | 24px | 32px |
| Section gap | 24px | 24px | 32px |
| Card gap | 12px | 16px | 24px |
| Navigation | BottomTabBar | BottomTabBar | Sidebar (280px) |
| SOS position | Fixed bottom-right | Fixed bottom-right | Fixed in content area |

---

## 4. Grid System

### 4.1 Column Grid

| Breakpoint | Columns | Gutter | Margin | Max-width |
|------------|---------|--------|--------|-----------|
| Mobile | 4 | 16px | 16px | 480px |
| Tablet | 8 | 24px | 24px | 720px |
| Desktop | 12 | 24px | auto (min 32px) | 1120px |

### 4.2 CSS Implementation

```css
.eb-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--eb-space-4);
  padding: 0 var(--eb-space-4);
  max-width: 480px;
  margin: 0 auto;
}
@media (min-width: 640px) {
  .eb-grid { grid-template-columns: repeat(8, 1fr); gap: var(--eb-space-6); padding: 0 var(--eb-space-6); max-width: 720px; }
}
@media (min-width: 1024px) {
  .eb-grid { grid-template-columns: repeat(12, 1fr); gap: var(--eb-space-6); padding: 0 var(--eb-space-8); max-width: 1120px; }
}
```

### 4.3 Типичные раскладки

| Раскладка | Mobile (4 cols) | Tablet (8 cols) | Desktop (12 cols) |
|-----------|-----------------|-----------------|-------------------|
| Full-width | span 4 | span 8 | span 12 |
| Half | span 4 (stacked) | span 4 | span 6 |
| Third | span 4 (stacked) | span 4 (2-col) | span 4 |
| Sidebar + Content | -- | -- | span 3 + span 9 |

---

## 5. Typography Scaling

### 5.1 Размеры по breakpoints

Базовый: 16px (1rem) на всех breakpoints. Масштабируются только заголовки.

| Element | Mobile | Tablet | Desktop | Token (mobile) |
|---------|--------|--------|---------|----------------|
| **H1** | 24px | 28px | 32px | `--eb-font-size-2xl` |
| **H2** | 20px | 22px | 24px | `--eb-font-size-xl` |
| **H3** | 18px | 18px | 20px | `--eb-font-size-lg` |
| **H4** | 16px | 16px | 18px | `--eb-font-size-base` |
| **Body** | 16px | 16px | 16px | `--eb-font-size-base` |
| **Small** | 14px | 14px | 14px | `--eb-font-size-sm` |
| **Caption** | 12px | 12px | 12px | `--eb-font-size-xs` |

### 5.2 Line Height

Одинаковая на всех breakpoints: body 1.5 (`--eb-line-height-normal`), headings 1.2--1.4 (`--eb-line-height-tight` / `--eb-line-height-snug`).

### 5.3 Правила доступности типографики

```
1. НЕ использовать vw/vh для font-size (не масштабируется при zoom)
2. Input font-size >= 16px (предотвращает auto-zoom на iOS)
3. Max-width строки: var(--eb-measure-normal) = 65ch
4. html { font-size: 100% } -- уважать системный размер
```

---

## 6. Touch Targets

### 6.1 Минимальные размеры

| Элемент | Min | Recommended | Actual | Token |
|---------|-----|-------------|--------|-------|
| Кнопки (md) | 44px | 48px | 44px | `--eb-touch-target-min` |
| Кнопки (lg) | 44px | 48px | 48px | `--eb-touch-target-comfortable` |
| **SOS** | **44px** | **56px** | **56px** | `--eb-touch-target-sos` |
| Tab item | 44px | 48px | 48px | `--eb-touch-target-comfortable` |
| EmotionPicker cell | 44px | 48px | 64px | -- |
| Checkbox/Toggle | 44px | 44px | 44px | `--eb-touch-target-min` |

### 6.2 Spacing и расширение target area

Между touch targets: min **8px** (`--eb-space-2`). Для маленьких визуальных элементов -- расширение через padding:

```css
.icon-button {
  width: 24px; height: 24px;
  padding: 10px;   /* Visual 24px + padding 10*2 = 44px touch */
  margin: -10px;   /* Компенсация для позиционирования */
}
```

### 6.3 Desktop: hover states

```css
@media (hover: hover) and (pointer: fine) {
  .card-interactive:hover {
    box-shadow: var(--eb-shadow-card-hover);
    transform: translateY(-1px);
    cursor: pointer;
  }
}
```

| Компонент | Mobile Target | Desktop Target | Desktop Addition |
|-----------|---------------|----------------|-----------------|
| Button | 44px | 44px | hover + cursor |
| SOS | 56px | 64px | hover glow |
| Card | full area | full area | hover shadow + lift |
| Emotion cell | 64px | 80px | hover scale(1.05) |

---

## 7. Component Adaptation

### 7.1 Сводная таблица

| Component | Mobile (< 640px) | Tablet (640--1023px) | Desktop (>= 1024px) |
|-----------|-------------------|----------------------|----------------------|
| **BottomTabBar** | Fixed bottom, 56px | Fixed bottom, 56px | Hidden -> Sidebar 280px |
| **BottomSheet** | Native bottom, drag-to-dismiss | Native bottom, max 600px | Center modal, max 560px |
| **Card** | Full-width, stacked | 2-column grid | 3-column grid |
| **ChatBubble** | max-width: 80% | max-width: 70% | max-width: 60% |
| **SOSButton** | 56x56, bottom-right | 56x56, bottom-right | 64x64, content area |
| **EmotionPicker** | 2x4 grid, 64px | 3x3 grid, 80px | 4x2 grid, 80px |
| **Button CTA** | Full-width | Auto-width (min 200px) | Auto-width (min 200px) |
| **TextInput** | Full-width | Full-width | Max 480px |
| **Select** | Bottom sheet | Bottom sheet | Dropdown popover |
| **BreathingCircle** | 200x200px | 240x240px | 280x280px |
| **Container** | pad 16px, max 480px | pad 24px, max 720px | pad 32px, max 1120px |
| **Header** | Telegram header | Telegram header | App header + breadcrumbs |
| **CrisisOverlay** | Full-screen | Full-screen | Full-screen |

### 7.2 BottomTabBar -> Sidebar

```css
.bottom-tab-bar {
  position: fixed; bottom: 0; left: 0; right: 0;
  height: calc(56px + var(--eb-safe-area-bottom));
  padding-bottom: var(--eb-safe-area-bottom);
  display: flex; align-items: center; justify-content: space-around;
  background: var(--eb-color-bg-elevated);
  border-top: 1px solid var(--eb-color-border);
  z-index: var(--eb-z-fixed);
}
.sidebar-nav { display: none; }

@media (min-width: 1024px) {
  .bottom-tab-bar { display: none; }
  .sidebar-nav {
    display: flex; flex-direction: column; position: fixed;
    left: 0; top: 0; bottom: 0; width: 280px;
    padding: var(--eb-space-6); background: var(--eb-color-bg-elevated);
    border-right: 1px solid var(--eb-color-border); z-index: var(--eb-z-fixed);
  }
  .main-content { margin-left: 280px; }
}
```

### 7.3 BottomSheet -> Modal (Desktop)

```css
.bottom-sheet {
  position: fixed; bottom: 0; left: 0; right: 0;
  border-radius: var(--eb-radius-lg) var(--eb-radius-lg) 0 0;
  background: var(--eb-color-bg-elevated); box-shadow: var(--eb-shadow-modal);
  z-index: var(--eb-z-modal); transform: translateY(100%);
  transition: transform var(--eb-duration-slow) var(--eb-ease-out);
}
.bottom-sheet.open { transform: translateY(0); }

@media (min-width: 1024px) {
  .bottom-sheet {
    bottom: auto; left: 50%; top: 50%;
    transform: translate(-50%, -50%) scale(0.95); opacity: 0;
    max-width: 560px; width: 90%; border-radius: var(--eb-radius-lg);
    transition: transform var(--eb-duration-normal) var(--eb-ease-out),
                opacity var(--eb-duration-normal) var(--eb-ease-out);
  }
  .bottom-sheet.open { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
```

### 7.4 ChatBubble и EmotionPicker

```css
.chat-bubble { max-width: 80%; }
@media (min-width: 640px)  { .chat-bubble { max-width: 70%; } }
@media (min-width: 1024px) { .chat-bubble { max-width: 60%; } }

.emotion-picker { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--eb-space-3); }
.emotion-cell { width: 64px; height: 64px; }
@media (min-width: 640px) {
  .emotion-picker { grid-template-columns: repeat(3, 1fr); }
  .emotion-cell { width: 80px; height: 80px; }
}
@media (min-width: 1024px) { .emotion-picker { grid-template-columns: repeat(4, 1fr); } }
```

---

## 8. Image & Media

### 8.1 Основные правила

```css
img, video { max-width: 100%; height: auto; display: block; }
.illustration { width: 100%; max-width: 320px; height: auto; }  /* SVG preferred */
```

### 8.2 Responsive Sizes

| Элемент | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Chat AI avatar | 32px | 36px | 40px |
| Profile avatar | 48px | 56px | 64px |
| BreathingCircle | 200x200px | 250x250px | 300x300px |
| Illustrations | max 280px | max 320px | max 400px |

### 8.3 Dark Mode для изображений

- SVG: использовать `currentColor` или CSS custom properties
- Растровые: `filter: brightness(0.85) contrast(1.1)` в dark mode
- Формат: WebP с fallback PNG, srcset для Retina

---

## 9. Performance

### 9.1 CSS Budget

| Metric | Target |
|--------|--------|
| CSS bundle (gzip) | < 100KB |
| FCP (3G mobile) | < 3s |
| LCP (3G mobile) | < 4s |
| CLS | < 0.1 |
| FID | < 100ms |
| TTI (3G) | < 5s |

### 9.2 Стратегии оптимизации

- **Mobile-first CSS:** мобильные устройства загружают минимальный CSS; desktop-стили за `@media`
- **Critical CSS:** первый экран inline в `<head>`, остальное async
- **Lazy loading:** изображения ниже fold, тяжёлые компоненты (DiaryCalendar, EmotionChart)
- **Code splitting:** `lazy(() => import('./BreathingExercise'))` и аналогичные
- **Неиспользуемые стили:** desktop CSS не загружается на mobile

---

## 10. Safe Area Handling

### 10.1 Компоненты с safe area

| Компонент | Safe Area | CSS |
|-----------|-----------|-----|
| BottomTabBar | bottom | `padding-bottom: var(--eb-safe-area-bottom)` |
| SOSButton | bottom + right | `bottom: calc(80px + var(--eb-safe-area-bottom))` |
| Chat input | bottom | `padding-bottom: var(--eb-safe-area-bottom)` |
| Full-screen overlays | all sides | `padding: var(--eb-safe-area-top) var(--eb-safe-area-right) var(--eb-safe-area-bottom) var(--eb-safe-area-left)` |

### 10.2 SOSButton Positioning

```css
.sos-button {
  position: fixed;
  z-index: var(--eb-z-sos-button);
  width: var(--eb-touch-target-sos);   /* 56px */
  height: var(--eb-touch-target-sos);
  border-radius: var(--eb-radius-full);
  bottom: calc(56px + var(--eb-safe-area-bottom) + var(--eb-space-4));
  right: calc(var(--eb-space-4) + var(--eb-safe-area-right));
}
@media (min-width: 1024px) {
  .sos-button {
    width: 64px; height: 64px;
    bottom: calc(var(--eb-space-8) + var(--eb-safe-area-bottom));
    right: calc(var(--eb-space-8) + var(--eb-safe-area-right));
  }
}
```

### 10.3 Keyboard + ViewportStableHeight

При открытии клавиатуры: `ViewportHeight` уменьшается, `ViewportStableHeight` остаётся стабильным. Fixed-элементы (SOS, tab bar) привязывать к `--eb-tg-viewport-stable-height`.

---

## 11. Dark Mode

### 11.1 Detection

```
Приоритет: 1) Telegram.WebApp.colorScheme  2) prefers-color-scheme  3) 'light'
```

```javascript
function detectTheme() {
  const tg = window.Telegram?.WebApp;
  if (tg) return tg.colorScheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
document.documentElement.setAttribute('data-theme', detectTheme());
```

### 11.2 Selectors

```css
:root { /* Light mode tokens -- default */ }
[data-theme="dark"], .dark, .tg-theme-dark { /* Dark mode overrides */ }
```

### 11.3 Визуальная адаптация

| Элемент | Light Mode | Dark Mode |
|---------|------------|-----------|
| Карточки | shadow | border 1px solid |
| SVG-иллюстрации | Оригинал | currentColor / CSS vars |
| Растровые илл. | Оригинал | `filter: brightness(0.85)` |
| Status colors | Solid bg | Semi-transparent bg `rgba(..., 0.1)` |
| Shadows | Multi-layer subtle | None (border instead) |

### 11.4 Transition при смене темы

```css
:root {
  transition: background-color 200ms var(--eb-ease-default),
              color 200ms var(--eb-ease-default),
              border-color 200ms var(--eb-ease-default);
}
```

### 11.5 Telegram Theme Sync

```javascript
tg.onEvent('themeChanged', () => {
  document.documentElement.setAttribute('data-theme', tg.colorScheme);
});
```

---

## 12. Accessibility at Scale

### 12.1 Zoom до 200%

Контент доступен при zoom 200% без горизонтального скролла. Все размеры в `rem`, контейнеры в `%`/`max-width`.

```css
html { font-size: 100%; }  /* Уважать системный размер */
body { min-width: 320px; overflow-x: hidden; }
```

### 12.2 Font Scaling

```css
html { font-size: 100%; -webkit-text-size-adjust: 100%; }
input { font-size: max(16px, 1rem); }  /* Prevent iOS auto-zoom */
p { max-width: var(--eb-measure-normal); }  /* 65ch */
```

### 12.3 Reflow на 320px

```css
.chat-bubble, .card-content {
  overflow-wrap: break-word; word-break: break-word; hyphens: auto;
}
.table-container { overflow-x: auto; -webkit-overflow-scrolling: touch; }
```

### 12.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .breathing-circle {  /* Исключение: упрощённая анимация */
    animation-duration: 19s !important;
    animation-iteration-count: infinite !important;
  }
}
```

### 12.5 Focus и Contrast

```css
:focus-visible { outline: 2px solid var(--eb-color-border-focus); outline-offset: 2px; }
:focus:not(:focus-visible) { outline: none; }
```

| Пара | Min Ratio | WCAG Level |
|------|-----------|------------|
| Text primary / BG primary | 4.5:1 | AA |
| SOS text / SOS bg | 7:1 | AAA |
| Link text / BG | 4.5:1 | AA |
| Placeholder / Input bg | 3:1 | AA (large) |

---

## Appendix: Testing Checklist

### Breakpoints

```
[ ] 320px  [ ] 375px  [ ] 390px  [ ] 430px  [ ] 640px  [ ] 768px  [ ] 1024px  [ ] 1280px
```

### Telegram WebApp

```
[ ] iOS (iPhone)  [ ] Android  [ ] macOS Desktop (400px)  [ ] macOS Desktop (800px+)
[ ] Windows Desktop  [ ] ViewportHeight/StableHeight  [ ] SafeAreaInsets  [ ] isExpanded
[ ] Keyboard behavior  [ ] BackButton SDK
```

### Component Adaptation

```
[ ] BottomTabBar -> Sidebar (1024px)  [ ] BottomSheet -> Modal (1024px)
[ ] Cards: 1-col -> 2-col -> 3-col   [ ] ChatBubble: 80% -> 70% -> 60%
[ ] SOSButton: safe area correct      [ ] EmotionPicker: grid reconfigures
```

### Accessibility

```
[ ] Zoom 200%: no horizontal scroll   [ ] Font scaling 200%
[ ] Reduced motion: animations off    [ ] Focus visible: keyboard nav
[ ] Touch targets >= 44px             [ ] Contrast WCAG AA both themes
[ ] Reflow at 320px                   [ ] Dark mode: all screens
```

### Performance

```
[ ] CSS < 100KB gzip  [ ] FCP < 3s (3G)  [ ] CLS < 0.1
[ ] Lazy loading      [ ] Code splitting  [ ] No layout shift
```

---

## Related Documents

| Document | Path |
|----------|------|
| Design Tokens | `docs/design/design-tokens.md` |
| Component Library | `docs/design/component-library.md` |
| Design Foundations | `docs/design/design-foundations.md` |
| Interaction Patterns | `docs/design/interaction-patterns.md` |
| Wireframes | `docs/design/wireframes.md` |

---

*Документ создан: UI Agent | Дата: 2026-02-04*
