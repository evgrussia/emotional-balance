---
title: "Design Tokens — Emotional Balance"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
status: "complete"
related_to:
  - "docs/design/design-foundations.md"
  - "docs/discovery/prd.md"
  - "context/project-brief.yaml"
---

# Design Tokens: Emotional Balance

## 1. Token Architecture

### 1.1 Уровни токенов

Система Design Tokens построена на трёхуровневой архитектуре, обеспечивающей гибкость и масштабируемость.

```
Primitive (Global)  →  Semantic (Alias)  →  Component
─────────────────      ──────────────────    ─────────────
Конкретные значения    Назначение в UI       Привязка к компонентам
--eb-color-sage-500    --eb-color-primary    --eb-button-bg-primary
#5F9A63                var(--eb-color-       var(--eb-color-primary)
                         sage-500)
```

| Уровень | Описание | Пример | Использование |
|---------|----------|--------|---------------|
| **Primitive** | Базовые значения палитр, размеров, шкал | `--eb-color-sage-500` | Только как source для Semantic-токенов |
| **Semantic** | Функциональное назначение в интерфейсе | `--eb-color-primary` | В CSS-стилях компонентов |
| **Component** | Привязка к конкретному компоненту | `--eb-button-bg` | Внутри компонентных стилей |

### 1.2 Naming Convention

```
--eb-{category}-{property}-{variant}-{state}
```

| Сегмент | Описание | Примеры |
|---------|----------|---------|
| `--eb-` | Namespace (emotional-balance) | -- |
| `{category}` | Категория токена | `color`, `font`, `space`, `shadow`, `radius`, `z`, `duration`, `ease` |
| `{property}` | Свойство | `primary`, `size`, `weight`, `target` |
| `{variant}` | Вариант (опционально) | `50`..`900`, `xs`..`4xl`, `sm`..`xl` |
| `{state}` | Состояние (опционально) | `hover`, `active`, `disabled`, `focus` |

**Примеры:**

```
--eb-color-primary            // semantic: основной цвет бренда
--eb-color-primary-hover      // semantic: hover-состояние
--eb-color-sage-500           // primitive: конкретный оттенок
--eb-font-size-base           // typography: базовый размер
--eb-space-4                  // spacing: 16px
--eb-shadow-md                // elevation: средняя тень
--eb-radius-lg                // border: скругление 12px
--eb-z-modal                  // z-index: модальное окно
--eb-duration-normal          // motion: стандартная длительность
--eb-ease-out                 // motion: кривая появления
```

### 1.3 Правила

1. **Компоненты** используют только Semantic-токены, **никогда** Primitive напрямую
2. **Semantic-токены** ссылаются на Primitive через `var()`
3. **Dark Mode** переопределяет Semantic-токены, Primitive остаются неизменными
4. **JSON export** дублирует все уровни для интеграции с инструментами (Figma Tokens, Style Dictionary)

---

## 2. Color Tokens

### 2.1 Primitive Colors — Sage Green (Primary)

```css
:root {
  --eb-color-sage-50:  #F0F6F0;
  --eb-color-sage-100: #D9EAD9;
  --eb-color-sage-200: #B5D6B5;
  --eb-color-sage-300: #8FC28F;
  --eb-color-sage-400: #7BAE7F;
  --eb-color-sage-500: #5F9A63;
  --eb-color-sage-600: #4A8550;
  --eb-color-sage-700: #376F3D;
  --eb-color-sage-800: #275A2D;
  --eb-color-sage-900: #1A4520;
}
```

### 2.2 Primitive Colors — Warm Blue (Secondary)

```css
:root {
  --eb-color-blue-50:  #EFF5F9;
  --eb-color-blue-100: #D6E7F0;
  --eb-color-blue-200: #ADCFE1;
  --eb-color-blue-300: #89B7D2;
  --eb-color-blue-400: #6B9FBF;
  --eb-color-blue-500: #5289AB;
  --eb-color-blue-600: #3F7497;
  --eb-color-blue-700: #2E5F82;
  --eb-color-blue-800: #204B6D;
  --eb-color-blue-900: #153858;
}
```

### 2.3 Primitive Colors — Soft Lavender (Accent)

```css
:root {
  --eb-color-lavender-50:  #F3F0F8;
  --eb-color-lavender-100: #E2DCEF;
  --eb-color-lavender-200: #C5BAE0;
  --eb-color-lavender-300: #AE9DD4;
  --eb-color-lavender-400: #9B8EC4;
  --eb-color-lavender-500: #8477B4;
  --eb-color-lavender-600: #6E62A3;
  --eb-color-lavender-700: #59508E;
  --eb-color-lavender-800: #453F78;
  --eb-color-lavender-900: #333063;
}
```

### 2.4 Primitive Colors — Warm Coral (SOS)

```css
:root {
  --eb-color-coral-50:  #FDF0ED;
  --eb-color-coral-100: #FBDCD5;
  --eb-color-coral-200: #F5B5A6;
  --eb-color-coral-300: #EF9382;
  --eb-color-coral-400: #E8725A;
  --eb-color-coral-500: #DE5438;
  --eb-color-coral-600: #C4412A;
  --eb-color-coral-700: #A33322;
  --eb-color-coral-800: #822919;
  --eb-color-coral-900: #621F13;
}
```

### 2.5 Primitive Colors — Neutrals (Warm Gray)

```css
:root {
  --eb-color-neutral-50:  #FAFAF8;
  --eb-color-neutral-100: #F4F4F1;
  --eb-color-neutral-200: #E8E8E3;
  --eb-color-neutral-300: #D4D4CE;
  --eb-color-neutral-400: #A3A39C;
  --eb-color-neutral-500: #737370;
  --eb-color-neutral-600: #545451;
  --eb-color-neutral-700: #3D3D3A;
  --eb-color-neutral-800: #262624;
  --eb-color-neutral-900: #141413;
}
```

### 2.6 Primitive Colors — Semantic Status

```css
:root {
  /* Success */
  --eb-color-success-light:   #ECFDF5;
  --eb-color-success-default: #34D399;
  --eb-color-success-dark:    #059669;

  /* Warning */
  --eb-color-warning-light:   #FFFBEB;
  --eb-color-warning-default: #F59E0B;
  --eb-color-warning-dark:    #B45309;

  /* Error */
  --eb-color-error-light:     #FEF2F2;
  --eb-color-error-default:   #EF7070;
  --eb-color-error-dark:      #B91C1C;

  /* Info */
  --eb-color-info-light:      #EFF6FF;
  --eb-color-info-default:    #60A5FA;
  --eb-color-info-dark:       #1D4ED8;
}
```

### 2.7 Semantic Colors — Light Mode

```css
:root {
  /* --- Backgrounds --- */
  --eb-color-bg-primary:    var(--eb-color-neutral-50);   /* #FAFAF8 */
  --eb-color-bg-secondary:  var(--eb-color-neutral-100);  /* #F4F4F1 */
  --eb-color-bg-tertiary:   var(--eb-color-neutral-200);  /* #E8E8E3 */
  --eb-color-bg-elevated:   #FFFFFF;
  --eb-color-bg-chat-ai:    var(--eb-color-blue-50);      /* #EFF5F9 */
  --eb-color-bg-chat-user:  var(--eb-color-sage-50);      /* #F0F6F0 */

  /* --- Text --- */
  --eb-color-text-primary:   var(--eb-color-neutral-800);  /* #262624 */
  --eb-color-text-secondary: var(--eb-color-neutral-500);  /* #737370 */
  --eb-color-text-disabled:  var(--eb-color-neutral-400);  /* #A3A39C */
  --eb-color-text-inverse:   #FFFFFF;
  --eb-color-text-link:      var(--eb-color-sage-600);     /* #4A8550 */

  /* --- Brand --- */
  --eb-color-primary:        var(--eb-color-sage-500);     /* #5F9A63 */
  --eb-color-primary-hover:  var(--eb-color-sage-600);     /* #4A8550 */
  --eb-color-primary-active: var(--eb-color-sage-700);     /* #376F3D */
  --eb-color-secondary:      var(--eb-color-blue-500);     /* #5289AB */
  --eb-color-secondary-hover: var(--eb-color-blue-600);    /* #3F7497 */
  --eb-color-accent:         var(--eb-color-lavender-500); /* #8477B4 */
  --eb-color-accent-hover:   var(--eb-color-lavender-600); /* #6E62A3 */

  /* --- Semantic --- */
  --eb-color-success:        var(--eb-color-success-default);
  --eb-color-success-bg:     var(--eb-color-success-light);
  --eb-color-success-text:   var(--eb-color-success-dark);
  --eb-color-warning:        var(--eb-color-warning-default);
  --eb-color-warning-bg:     var(--eb-color-warning-light);
  --eb-color-warning-text:   var(--eb-color-warning-dark);
  --eb-color-error:          var(--eb-color-error-default);
  --eb-color-error-bg:       var(--eb-color-error-light);
  --eb-color-error-text:     var(--eb-color-error-dark);
  --eb-color-info:           var(--eb-color-info-default);
  --eb-color-info-bg:        var(--eb-color-info-light);
  --eb-color-info-text:      var(--eb-color-info-dark);

  /* --- Borders --- */
  --eb-color-border:         var(--eb-color-neutral-200);  /* #E8E8E3 */
  --eb-color-border-strong:  var(--eb-color-neutral-300);  /* #D4D4CE */
  --eb-color-border-focus:   var(--eb-color-sage-400);     /* #7BAE7F */

  /* --- SOS / Crisis --- */
  --eb-color-sos:            var(--eb-color-coral-500);    /* #DE5438 */
  --eb-color-sos-hover:      var(--eb-color-coral-600);    /* #C4412A */
  --eb-color-sos-active:     var(--eb-color-coral-700);    /* #A33322 */
  --eb-color-sos-text:       #FFFFFF;
  --eb-color-sos-bg:         var(--eb-color-coral-50);     /* #FDF0ED */
  --eb-color-sos-border:     var(--eb-color-coral-200);    /* #F5B5A6 */
  --eb-color-crisis-overlay-bg: rgba(98, 31, 19, 0.8);    /* Coral 900 overlay */

  /* --- Overlays --- */
  --eb-color-overlay:        rgba(0, 0, 0, 0.3);
  --eb-color-overlay-heavy:  rgba(0, 0, 0, 0.6);
}
```

### 2.8 Semantic Colors — Dark Mode Overrides

```css
[data-theme="dark"],
.dark,
.tg-theme-dark {
  /* --- Backgrounds --- */
  --eb-color-bg-primary:    #1A1A18;
  --eb-color-bg-secondary:  #242422;
  --eb-color-bg-tertiary:   #2E2E2B;
  --eb-color-bg-elevated:   #383835;
  --eb-color-bg-chat-ai:    #1C2832;
  --eb-color-bg-chat-user:  #1C2A1E;

  /* --- Text --- */
  --eb-color-text-primary:   #F0F0ED;
  --eb-color-text-secondary: #A8A8A3;
  --eb-color-text-disabled:  #5A5A56;
  --eb-color-text-inverse:   #1A1A18;
  --eb-color-text-link:      var(--eb-color-sage-300);     /* #8FC28F */

  /* --- Brand --- */
  --eb-color-primary:        var(--eb-color-sage-300);     /* #8FC28F */
  --eb-color-primary-hover:  var(--eb-color-sage-400);     /* #7BAE7F */
  --eb-color-primary-active: var(--eb-color-sage-500);     /* #5F9A63 */
  --eb-color-secondary:      var(--eb-color-blue-300);     /* #89B7D2 */
  --eb-color-secondary-hover: var(--eb-color-blue-400);    /* #6B9FBF */
  --eb-color-accent:         var(--eb-color-lavender-300); /* #AE9DD4 */
  --eb-color-accent-hover:   var(--eb-color-lavender-400); /* #9B8EC4 */

  /* --- Semantic --- */
  --eb-color-success:        #34D399;
  --eb-color-success-bg:     rgba(52, 211, 153, 0.1);
  --eb-color-success-text:   #34D399;
  --eb-color-warning:        #F59E0B;
  --eb-color-warning-bg:     rgba(245, 158, 11, 0.1);
  --eb-color-warning-text:   #F59E0B;
  --eb-color-error:          #EF7070;
  --eb-color-error-bg:       rgba(239, 112, 112, 0.1);
  --eb-color-error-text:     #EF7070;
  --eb-color-info:           #60A5FA;
  --eb-color-info-bg:        rgba(96, 165, 250, 0.1);
  --eb-color-info-text:      #60A5FA;

  /* --- Borders --- */
  --eb-color-border:         #3A3A37;
  --eb-color-border-strong:  #4A4A46;
  --eb-color-border-focus:   var(--eb-color-sage-300);     /* #8FC28F */

  /* --- SOS / Crisis --- */
  --eb-color-sos:            var(--eb-color-coral-400);    /* #E8725A */
  --eb-color-sos-hover:      var(--eb-color-coral-500);    /* #DE5438 */
  --eb-color-sos-active:     var(--eb-color-coral-600);    /* #C4412A */
  --eb-color-sos-text:       #FFFFFF;
  --eb-color-sos-bg:         rgba(232, 114, 90, 0.1);
  --eb-color-sos-border:     rgba(232, 114, 90, 0.3);
  --eb-color-crisis-overlay-bg: rgba(98, 31, 19, 0.85);

  /* --- Overlays --- */
  --eb-color-overlay:        rgba(0, 0, 0, 0.5);
  --eb-color-overlay-heavy:  rgba(0, 0, 0, 0.75);
}
```

---

## 3. Typography Tokens

```css
:root {
  /* --- Font Families --- */
  --eb-font-family-primary: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --eb-font-family-mono:    'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

  /* --- Font Sizes --- */
  --eb-font-size-xs:   0.75rem;    /* 12px */
  --eb-font-size-sm:   0.875rem;   /* 14px */
  --eb-font-size-base: 1rem;       /* 16px */
  --eb-font-size-lg:   1.125rem;   /* 18px */
  --eb-font-size-xl:   1.25rem;    /* 20px */
  --eb-font-size-2xl:  1.5rem;     /* 24px */
  --eb-font-size-3xl:  1.875rem;   /* 30px */
  --eb-font-size-4xl:  2.25rem;    /* 36px */

  /* --- Line Heights --- */
  --eb-line-height-tight:   1.2;
  --eb-line-height-snug:    1.33;
  --eb-line-height-normal:  1.5;
  --eb-line-height-relaxed: 1.56;
  --eb-line-height-loose:   1.75;

  /* --- Font Weights --- */
  --eb-font-weight-regular:  400;
  --eb-font-weight-medium:   500;
  --eb-font-weight-semibold: 600;
  --eb-font-weight-bold:     700;

  /* --- Letter Spacing --- */
  --eb-letter-spacing-tighter: -0.03em;
  --eb-letter-spacing-tight:   -0.02em;
  --eb-letter-spacing-slightly-tight: -0.01em;
  --eb-letter-spacing-normal:  0;
  --eb-letter-spacing-wide:    0.01em;
  --eb-letter-spacing-wider:   0.02em;
  --eb-letter-spacing-widest:  0.05em;

  /* --- Max Line Width (measure) --- */
  --eb-measure-narrow: 45ch;
  --eb-measure-normal: 65ch;
  --eb-measure-wide:   80ch;
}
```

### 3.1 Heading Presets (Semantic)

```css
:root {
  /* H1 */
  --eb-heading-1-size:    var(--eb-font-size-3xl);
  --eb-heading-1-weight:  var(--eb-font-weight-bold);
  --eb-heading-1-lh:      1.2;
  --eb-heading-1-ls:      var(--eb-letter-spacing-tight);

  /* H2 */
  --eb-heading-2-size:    var(--eb-font-size-2xl);
  --eb-heading-2-weight:  var(--eb-font-weight-bold);
  --eb-heading-2-lh:      1.33;
  --eb-heading-2-ls:      var(--eb-letter-spacing-tight);

  /* H3 */
  --eb-heading-3-size:    var(--eb-font-size-xl);
  --eb-heading-3-weight:  var(--eb-font-weight-semibold);
  --eb-heading-3-lh:      1.4;
  --eb-heading-3-ls:      var(--eb-letter-spacing-slightly-tight);

  /* H4 */
  --eb-heading-4-size:    var(--eb-font-size-lg);
  --eb-heading-4-weight:  var(--eb-font-weight-semibold);
  --eb-heading-4-lh:      1.56;
  --eb-heading-4-ls:      var(--eb-letter-spacing-slightly-tight);

  /* H5 */
  --eb-heading-5-size:    var(--eb-font-size-base);
  --eb-heading-5-weight:  var(--eb-font-weight-semibold);
  --eb-heading-5-lh:      1.5;
  --eb-heading-5-ls:      var(--eb-letter-spacing-normal);

  /* H6 */
  --eb-heading-6-size:    var(--eb-font-size-sm);
  --eb-heading-6-weight:  var(--eb-font-weight-semibold);
  --eb-heading-6-lh:      1.43;
  --eb-heading-6-ls:      var(--eb-letter-spacing-wide);
}
```

### 3.2 Special Text Presets

```css
:root {
  /* Caption */
  --eb-caption-size:    var(--eb-font-size-xs);
  --eb-caption-weight:  var(--eb-font-weight-medium);
  --eb-caption-lh:      1.33;

  /* Overline */
  --eb-overline-size:   var(--eb-font-size-xs);
  --eb-overline-weight: var(--eb-font-weight-semibold);
  --eb-overline-ls:     var(--eb-letter-spacing-widest);

  /* Button text */
  --eb-button-text-size:    var(--eb-font-size-base);
  --eb-button-text-weight:  var(--eb-font-weight-semibold);
  --eb-button-text-ls:      var(--eb-letter-spacing-wide);

  /* Button text small */
  --eb-button-text-sm-size:   var(--eb-font-size-sm);
  --eb-button-text-sm-weight: var(--eb-font-weight-medium);

  /* Input text (min 16px to prevent iOS zoom) */
  --eb-input-text-size:   var(--eb-font-size-base);
  --eb-input-text-weight: var(--eb-font-weight-regular);

  /* Number display */
  --eb-number-display-size:   var(--eb-font-size-4xl);
  --eb-number-display-weight: var(--eb-font-weight-bold);

  /* Breathing timer */
  --eb-breathing-timer-size:   3rem;  /* 48px */
  --eb-breathing-timer-weight: var(--eb-font-weight-bold);
}
```

---

## 4. Spacing Tokens

```css
:root {
  /* --- Base Scale (4px grid) --- */
  --eb-space-0:    0;
  --eb-space-0-5:  0.125rem;  /* 2px  */
  --eb-space-1:    0.25rem;   /* 4px  */
  --eb-space-2:    0.5rem;    /* 8px  */
  --eb-space-3:    0.75rem;   /* 12px */
  --eb-space-4:    1rem;      /* 16px */
  --eb-space-5:    1.25rem;   /* 20px */
  --eb-space-6:    1.5rem;    /* 24px */
  --eb-space-8:    2rem;      /* 32px */
  --eb-space-10:   2.5rem;    /* 40px */
  --eb-space-12:   3rem;      /* 48px */
  --eb-space-16:   4rem;      /* 64px */

  /* --- Semantic Spacing --- */
  --eb-space-page-x:         var(--eb-space-4);   /* 16px */
  --eb-space-page-y:         var(--eb-space-4);   /* 16px */
  --eb-space-section-gap:    var(--eb-space-6);   /* 24px */
  --eb-space-card-padding:   var(--eb-space-4);   /* 16px */
  --eb-space-card-gap:       var(--eb-space-3);   /* 12px */
  --eb-space-element-gap:    var(--eb-space-2);   /* 8px  */
  --eb-space-input-x:        var(--eb-space-3);   /* 12px */
  --eb-space-input-y:        0.625rem;            /* 10px */
  --eb-space-button-x:       var(--eb-space-6);   /* 24px */
  --eb-space-button-y:       var(--eb-space-3);   /* 12px */
  --eb-space-button-x-sm:    var(--eb-space-4);   /* 16px */
  --eb-space-button-y-sm:    var(--eb-space-2);   /* 8px  */
  --eb-space-modal-padding:  var(--eb-space-6);   /* 24px */
  --eb-space-chat-bubble:    var(--eb-space-3);   /* 12px */
  --eb-space-list-item-gap:  var(--eb-space-3);   /* 12px */
}
```

---

## 5. Shadow Tokens

```css
:root {
  /* --- Light Mode Shadows --- */
  --eb-shadow-none: none;
  --eb-shadow-xs:   0 1px 2px rgba(0, 0, 0, 0.04);
  --eb-shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.05);
  --eb-shadow-md:   0 4px 6px rgba(0, 0, 0, 0.07);
  --eb-shadow-lg:   0 10px 15px rgba(0, 0, 0, 0.1);
  --eb-shadow-xl:   0 20px 25px rgba(0, 0, 0, 0.15);

  /* Multi-layer (realistic) */
  --eb-shadow-card:       0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  --eb-shadow-card-hover: 0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06);
  --eb-shadow-dropdown:   0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);
  --eb-shadow-modal:      0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);

  /* SOS — elevated, привлекает внимание */
  --eb-shadow-sos:        0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1);

  /* Focus ring */
  --eb-shadow-focus:      0 0 0 2px var(--eb-color-border-focus);
  --eb-shadow-focus-sos:  0 0 0 2px var(--eb-color-sos);
}
```

### 5.1 Dark Mode Shadow Overrides

```css
[data-theme="dark"],
.dark,
.tg-theme-dark {
  --eb-shadow-xs:         none;
  --eb-shadow-sm:         none;
  --eb-shadow-md:         none;
  --eb-shadow-lg:         0 10px 20px rgba(0, 0, 0, 0.4);
  --eb-shadow-xl:         0 20px 30px rgba(0, 0, 0, 0.5);

  --eb-shadow-card:       none;
  --eb-shadow-card-hover: none;
  --eb-shadow-dropdown:   0 4px 8px rgba(0, 0, 0, 0.3);
  --eb-shadow-modal:      0 10px 20px rgba(0, 0, 0, 0.4);
  --eb-shadow-sos:        0 10px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(232, 114, 90, 0.2);
}
```

> **Dark Mode:** вместо теней используйте `border: 1px solid var(--eb-color-border)` для визуального разделения поверхностей.

---

## 6. Border Radius Tokens

```css
:root {
  --eb-radius-none: 0;
  --eb-radius-sm:   0.25rem;   /* 4px  — inputs, tags, badges */
  --eb-radius-md:   0.5rem;    /* 8px  — cards, buttons, dropdown */
  --eb-radius-lg:   0.75rem;   /* 12px — modals, bottom sheets, chat bubbles */
  --eb-radius-xl:   1rem;      /* 16px — large cards, containers */
  --eb-radius-2xl:  1.25rem;   /* 20px — hero cards, emotion picker */
  --eb-radius-full: 9999px;    /* circle — avatars, pills, SOS button */
}
```

| Компонент | Токен | Значение |
|-----------|-------|----------|
| Кнопки (стандартные) | `--eb-radius-md` | 8px |
| Кнопки (pill) | `--eb-radius-full` | 9999px |
| SOS-кнопка | `--eb-radius-full` | 9999px |
| Карточки | `--eb-radius-md` | 8px |
| Карточки (hero) | `--eb-radius-xl` | 16px |
| Input-поля | `--eb-radius-sm` | 4px |
| Chat-пузырьки | `--eb-radius-lg` | 12px |
| Аватары | `--eb-radius-full` | 9999px |
| Модальные окна | `--eb-radius-lg` | 12px |
| Bottom Sheet (top) | `--eb-radius-lg` | 12px |
| Toast/Snackbar | `--eb-radius-md` | 8px |
| Progress Bar | `--eb-radius-full` | 9999px |
| Emotion Picker | `--eb-radius-2xl` | 20px |

---

## 7. Z-Index Tokens

```css
:root {
  --eb-z-base:            0;
  --eb-z-dropdown:        100;
  --eb-z-sticky:          200;
  --eb-z-fixed:           300;
  --eb-z-modal-backdrop:  400;
  --eb-z-modal:           500;
  --eb-z-popover:         600;
  --eb-z-tooltip:         700;
  --eb-z-toast:           800;
  --eb-z-sos-button:      900;     /* SOS always on top */
  --eb-z-crisis-overlay:  1000;    /* Crisis — highest */
}
```

| Уровень | Токен | Описание |
|---------|-------|----------|
| 0 | `--eb-z-base` | Обычный поток документа |
| 100 | `--eb-z-dropdown` | Dropdown-меню, select-списки |
| 200 | `--eb-z-sticky` | Sticky header, sticky навигация |
| 300 | `--eb-z-fixed` | Fixed-элементы (bottom nav, FAB) |
| 400 | `--eb-z-modal-backdrop` | Backdrop модальных окон |
| 500 | `--eb-z-modal` | Модальные окна, bottom sheets |
| 600 | `--eb-z-popover` | Popovers, меню контекстные |
| 700 | `--eb-z-tooltip` | Tooltips |
| 800 | `--eb-z-toast` | Toast-уведомления |
| 900 | `--eb-z-sos-button` | **SOS-кнопка — всегда над UI** |
| 1000 | `--eb-z-crisis-overlay` | **Кризисный экран — абсолютный максимум** |

> **Критично:** SOS-кнопка и кризисный overlay никогда не перекрываются другими элементами UI.

---

## 8. Animation / Motion Tokens

```css
:root {
  /* --- Durations --- */
  --eb-duration-instant:   100ms;
  --eb-duration-fast:      150ms;
  --eb-duration-normal:    250ms;
  --eb-duration-slow:      350ms;
  --eb-duration-slower:    500ms;
  --eb-duration-breathing: 4000ms;  /* base breathing cycle */

  /* --- Easing Functions --- */
  --eb-ease-default:   cubic-bezier(0.25, 0.1, 0.25, 1);
  --eb-ease-in:        cubic-bezier(0.4, 0, 1, 1);
  --eb-ease-out:       cubic-bezier(0, 0, 0.2, 1);
  --eb-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --eb-ease-linear:    linear;
  --eb-ease-bounce:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --eb-ease-gentle:    cubic-bezier(0.25, 0.1, 0.25, 1);  /* therapeutic animations */
  --eb-ease-breathing: cubic-bezier(0.45, 0, 0.55, 1);    /* breathing exercises */
}
```

### 8.1 Standard Transitions

| Анимация | Duration | Easing | Применение |
|----------|----------|--------|------------|
| Fade In | `--eb-duration-normal` | `--eb-ease-out` | Появление элемента |
| Fade Out | `--eb-duration-fast` | `--eb-ease-in` | Исчезновение элемента |
| Slide Up | `--eb-duration-slow` | `--eb-ease-out` | Bottom sheet, модальное окно |
| Slide Down | `--eb-duration-normal` | `--eb-ease-in` | Закрытие bottom sheet |
| Scale In | `--eb-duration-fast` | `--eb-ease-out` | Появление кнопки, badge |
| Collapse/Expand | `--eb-duration-normal` | `--eb-ease-in-out` | Секции, аккордеоны |
| Skeleton Pulse | 1500ms | `--eb-ease-in-out` | Загрузочные скелетоны (loop) |
| Progress Fill | `--eb-duration-slower` | `--eb-ease-out` | Заполнение progress bar |
| SOS Pulse | 2000ms | `--eb-ease-in-out` | Пульсация SOS-кнопки (loop) |

### 8.2 prefers-reduced-motion

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

  /* Breathing animation preserved but simplified */
  .breathing-circle {
    animation-duration: 19s !important;
    animation-iteration-count: infinite !important;
  }
}
```

---

## 9. Breakpoint Tokens

```css
:root {
  --eb-breakpoint-sm: 640px;
  --eb-breakpoint-md: 768px;
  --eb-breakpoint-lg: 1024px;
  --eb-breakpoint-xl: 1280px;
}
```

> **Примечание:** CSS custom properties нельзя использовать в `@media`-запросах. Breakpoint-токены предназначены для JS/tooling. В CSS используйте литеральные значения.

| Breakpoint | Значение | Описание |
|------------|----------|----------|
| `sm` | 640px | Крупные мобильные, начало tablet |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Широкий desktop |

```css
/* CSS usage */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## 10. Touch Target Tokens

```css
:root {
  --eb-touch-target-min:         44px;   /* WCAG AA minimum */
  --eb-touch-target-comfortable: 48px;   /* recommended */
  --eb-touch-target-sos:         56px;   /* SOS button — elevated */
}
```

| Элемент | Minimum | Recommended | Actual |
|---------|---------|-------------|--------|
| Кнопки | 44px | 48px | 48px |
| Иконочные кнопки | 44px | 48px | 44px |
| Элементы навигации | 44px | 48px | 48px |
| SOS-кнопка | 44px | 56px | **56px** |
| Chat send button | 44px | 44px | 44px |
| Emotion picker card | 44px | 48px | 64px |

---

## 11. JSON Export Format

Полная структура токенов для экспорта в Style Dictionary, Figma Tokens и другие инструменты.

```json
{
  "color": {
    "primitive": {
      "sage": {
        "50":  { "value": "#F0F6F0" },
        "100": { "value": "#D9EAD9" },
        "200": { "value": "#B5D6B5" },
        "300": { "value": "#8FC28F" },
        "400": { "value": "#7BAE7F" },
        "500": { "value": "#5F9A63" },
        "600": { "value": "#4A8550" },
        "700": { "value": "#376F3D" },
        "800": { "value": "#275A2D" },
        "900": { "value": "#1A4520" }
      },
      "blue": {
        "50":  { "value": "#EFF5F9" },
        "100": { "value": "#D6E7F0" },
        "200": { "value": "#ADCFE1" },
        "300": { "value": "#89B7D2" },
        "400": { "value": "#6B9FBF" },
        "500": { "value": "#5289AB" },
        "600": { "value": "#3F7497" },
        "700": { "value": "#2E5F82" },
        "800": { "value": "#204B6D" },
        "900": { "value": "#153858" }
      },
      "lavender": {
        "50":  { "value": "#F3F0F8" },
        "100": { "value": "#E2DCEF" },
        "200": { "value": "#C5BAE0" },
        "300": { "value": "#AE9DD4" },
        "400": { "value": "#9B8EC4" },
        "500": { "value": "#8477B4" },
        "600": { "value": "#6E62A3" },
        "700": { "value": "#59508E" },
        "800": { "value": "#453F78" },
        "900": { "value": "#333063" }
      },
      "coral": {
        "50":  { "value": "#FDF0ED" },
        "100": { "value": "#FBDCD5" },
        "200": { "value": "#F5B5A6" },
        "300": { "value": "#EF9382" },
        "400": { "value": "#E8725A" },
        "500": { "value": "#DE5438" },
        "600": { "value": "#C4412A" },
        "700": { "value": "#A33322" },
        "800": { "value": "#822919" },
        "900": { "value": "#621F13" }
      },
      "neutral": {
        "50":  { "value": "#FAFAF8" },
        "100": { "value": "#F4F4F1" },
        "200": { "value": "#E8E8E3" },
        "300": { "value": "#D4D4CE" },
        "400": { "value": "#A3A39C" },
        "500": { "value": "#737370" },
        "600": { "value": "#545451" },
        "700": { "value": "#3D3D3A" },
        "800": { "value": "#262624" },
        "900": { "value": "#141413" }
      }
    },
    "semantic": {
      "light": {
        "bg-primary":       { "value": "{color.primitive.neutral.50}" },
        "bg-secondary":     { "value": "{color.primitive.neutral.100}" },
        "bg-tertiary":      { "value": "{color.primitive.neutral.200}" },
        "bg-elevated":      { "value": "#FFFFFF" },
        "text-primary":     { "value": "{color.primitive.neutral.800}" },
        "text-secondary":   { "value": "{color.primitive.neutral.500}" },
        "text-disabled":    { "value": "{color.primitive.neutral.400}" },
        "primary":          { "value": "{color.primitive.sage.500}" },
        "primary-hover":    { "value": "{color.primitive.sage.600}" },
        "secondary":        { "value": "{color.primitive.blue.500}" },
        "accent":           { "value": "{color.primitive.lavender.500}" },
        "sos":              { "value": "{color.primitive.coral.500}" },
        "sos-hover":        { "value": "{color.primitive.coral.600}" },
        "border":           { "value": "{color.primitive.neutral.200}" },
        "border-strong":    { "value": "{color.primitive.neutral.300}" },
        "success":          { "value": "#34D399" },
        "warning":          { "value": "#F59E0B" },
        "error":            { "value": "#EF7070" },
        "info":             { "value": "#60A5FA" }
      },
      "dark": {
        "bg-primary":       { "value": "#1A1A18" },
        "bg-secondary":     { "value": "#242422" },
        "bg-tertiary":      { "value": "#2E2E2B" },
        "bg-elevated":      { "value": "#383835" },
        "text-primary":     { "value": "#F0F0ED" },
        "text-secondary":   { "value": "#A8A8A3" },
        "text-disabled":    { "value": "#5A5A56" },
        "primary":          { "value": "{color.primitive.sage.300}" },
        "primary-hover":    { "value": "{color.primitive.sage.400}" },
        "secondary":        { "value": "{color.primitive.blue.300}" },
        "accent":           { "value": "{color.primitive.lavender.300}" },
        "sos":              { "value": "{color.primitive.coral.400}" },
        "sos-hover":        { "value": "{color.primitive.coral.500}" },
        "border":           { "value": "#3A3A37" },
        "border-strong":    { "value": "#4A4A46" },
        "success":          { "value": "#34D399" },
        "warning":          { "value": "#F59E0B" },
        "error":            { "value": "#EF7070" },
        "info":             { "value": "#60A5FA" }
      }
    }
  },
  "typography": {
    "fontFamily": {
      "primary": { "value": "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif" },
      "mono":    { "value": "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }
    },
    "fontSize": {
      "xs":   { "value": "0.75rem" },
      "sm":   { "value": "0.875rem" },
      "base": { "value": "1rem" },
      "lg":   { "value": "1.125rem" },
      "xl":   { "value": "1.25rem" },
      "2xl":  { "value": "1.5rem" },
      "3xl":  { "value": "1.875rem" },
      "4xl":  { "value": "2.25rem" }
    },
    "fontWeight": {
      "regular":  { "value": 400 },
      "medium":   { "value": 500 },
      "semibold": { "value": 600 },
      "bold":     { "value": 700 }
    },
    "lineHeight": {
      "tight":   { "value": 1.2 },
      "snug":    { "value": 1.33 },
      "normal":  { "value": 1.5 },
      "relaxed": { "value": 1.56 },
      "loose":   { "value": 1.75 }
    },
    "letterSpacing": {
      "tight":   { "value": "-0.02em" },
      "normal":  { "value": "0" },
      "wide":    { "value": "0.01em" },
      "wider":   { "value": "0.02em" },
      "widest":  { "value": "0.05em" }
    }
  },
  "spacing": {
    "0":   { "value": "0" },
    "0.5": { "value": "0.125rem" },
    "1":   { "value": "0.25rem" },
    "2":   { "value": "0.5rem" },
    "3":   { "value": "0.75rem" },
    "4":   { "value": "1rem" },
    "5":   { "value": "1.25rem" },
    "6":   { "value": "1.5rem" },
    "8":   { "value": "2rem" },
    "10":  { "value": "2.5rem" },
    "12":  { "value": "3rem" },
    "16":  { "value": "4rem" }
  },
  "shadow": {
    "xs":         { "value": "0 1px 2px rgba(0, 0, 0, 0.04)" },
    "sm":         { "value": "0 1px 2px rgba(0, 0, 0, 0.05)" },
    "md":         { "value": "0 4px 6px rgba(0, 0, 0, 0.07)" },
    "lg":         { "value": "0 10px 15px rgba(0, 0, 0, 0.1)" },
    "xl":         { "value": "0 20px 25px rgba(0, 0, 0, 0.15)" },
    "card":       { "value": "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)" },
    "card-hover": { "value": "0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)" },
    "modal":      { "value": "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)" },
    "sos":        { "value": "0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1)" }
  },
  "borderRadius": {
    "none": { "value": "0" },
    "sm":   { "value": "0.25rem" },
    "md":   { "value": "0.5rem" },
    "lg":   { "value": "0.75rem" },
    "xl":   { "value": "1rem" },
    "2xl":  { "value": "1.25rem" },
    "full": { "value": "9999px" }
  },
  "zIndex": {
    "base":           { "value": 0 },
    "dropdown":       { "value": 100 },
    "sticky":         { "value": 200 },
    "fixed":          { "value": 300 },
    "modal-backdrop": { "value": 400 },
    "modal":          { "value": 500 },
    "popover":        { "value": 600 },
    "tooltip":        { "value": 700 },
    "toast":          { "value": 800 },
    "sos-button":     { "value": 900 },
    "crisis-overlay": { "value": 1000 }
  },
  "motion": {
    "duration": {
      "instant":   { "value": "100ms" },
      "fast":      { "value": "150ms" },
      "normal":    { "value": "250ms" },
      "slow":      { "value": "350ms" },
      "slower":    { "value": "500ms" },
      "breathing": { "value": "4000ms" }
    },
    "easing": {
      "default":   { "value": "cubic-bezier(0.25, 0.1, 0.25, 1)" },
      "in":        { "value": "cubic-bezier(0.4, 0, 1, 1)" },
      "out":       { "value": "cubic-bezier(0, 0, 0.2, 1)" },
      "in-out":    { "value": "cubic-bezier(0.4, 0, 0.2, 1)" },
      "bounce":    { "value": "cubic-bezier(0.34, 1.56, 0.64, 1)" },
      "gentle":    { "value": "cubic-bezier(0.25, 0.1, 0.25, 1)" },
      "breathing": { "value": "cubic-bezier(0.45, 0, 0.55, 1)" }
    }
  },
  "breakpoint": {
    "sm": { "value": "640px" },
    "md": { "value": "768px" },
    "lg": { "value": "1024px" },
    "xl": { "value": "1280px" }
  },
  "touchTarget": {
    "min":         { "value": "44px" },
    "comfortable": { "value": "48px" },
    "sos":         { "value": "56px" }
  }
}
```

---

## 12. Telegram WebApp Integration

### 12.1 Theme Params Mapping

Telegram WebApp предоставляет `Telegram.WebApp.themeParams` с набором цветов текущей темы. Маппинг на наши токены:

```javascript
// telegram-theme.js — синхронизация Telegram theme с CSS custom properties
function applyTelegramTheme() {
  const tp = window.Telegram?.WebApp?.themeParams;
  if (!tp) return;

  const root = document.documentElement;

  // Определение режима
  const isDark = window.Telegram.WebApp.colorScheme === 'dark';
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');

  // Маппинг Telegram params -> наши токены (опционально)
  if (tp.bg_color)             root.style.setProperty('--tg-bg-color', tp.bg_color);
  if (tp.text_color)           root.style.setProperty('--tg-text-color', tp.text_color);
  if (tp.hint_color)           root.style.setProperty('--tg-hint-color', tp.hint_color);
  if (tp.link_color)           root.style.setProperty('--tg-link-color', tp.link_color);
  if (tp.button_color)         root.style.setProperty('--tg-button-color', tp.button_color);
  if (tp.button_text_color)    root.style.setProperty('--tg-button-text-color', tp.button_text_color);
  if (tp.secondary_bg_color)   root.style.setProperty('--tg-secondary-bg-color', tp.secondary_bg_color);
  if (tp.header_bg_color)      root.style.setProperty('--tg-header-bg-color', tp.header_bg_color);
  if (tp.section_bg_color)     root.style.setProperty('--tg-section-bg-color', tp.section_bg_color);
  if (tp.accent_text_color)    root.style.setProperty('--tg-accent-text-color', tp.accent_text_color);
}
```

### 12.2 Telegram Theme Params Reference

| Telegram Param | Наш токен (Light) | Наш токен (Dark) |
|----------------|--------------------|-------------------|
| `bg_color` | `--eb-color-bg-primary` | `--eb-color-bg-primary` |
| `text_color` | `--eb-color-text-primary` | `--eb-color-text-primary` |
| `hint_color` | `--eb-color-text-secondary` | `--eb-color-text-secondary` |
| `link_color` | `--eb-color-text-link` | `--eb-color-text-link` |
| `button_color` | `--eb-color-primary` | `--eb-color-primary` |
| `button_text_color` | `--eb-color-text-inverse` | `--eb-color-text-inverse` |
| `secondary_bg_color` | `--eb-color-bg-secondary` | `--eb-color-bg-secondary` |

### 12.3 Viewport Tokens

```css
:root {
  /* Telegram WebApp viewport */
  --eb-tg-viewport-height:        var(--tg-viewport-height, 100vh);
  --eb-tg-viewport-stable-height: var(--tg-viewport-stable-height, 100vh);

  /* Safe area insets */
  --eb-safe-area-top:    env(safe-area-inset-top, 0px);
  --eb-safe-area-bottom: env(safe-area-inset-bottom, 0px);
  --eb-safe-area-left:   env(safe-area-inset-left, 0px);
  --eb-safe-area-right:  env(safe-area-inset-right, 0px);

  /* Telegram header */
  --eb-tg-header-height: 56px;

  /* Bottom navigation */
  --eb-bottom-nav-height: 64px;
}
```

### 12.4 Auto Dark Mode Detection

```javascript
// Автоматическое определение темы при загрузке и смене
function initTheme() {
  // 1. Telegram WebApp
  if (window.Telegram?.WebApp) {
    const scheme = window.Telegram.WebApp.colorScheme;
    document.documentElement.setAttribute('data-theme', scheme);

    // Слушать изменения темы
    window.Telegram.WebApp.onEvent('themeChanged', () => {
      document.documentElement.setAttribute(
        'data-theme',
        window.Telegram.WebApp.colorScheme
      );
      applyTelegramTheme();
    });
    return;
  }

  // 2. System preference fallback
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  document.documentElement.setAttribute(
    'data-theme',
    prefersDark.matches ? 'dark' : 'light'
  );

  prefersDark.addEventListener('change', (e) => {
    document.documentElement.setAttribute(
      'data-theme',
      e.matches ? 'dark' : 'light'
    );
  });
}
```

---

## 13. Token Usage Guidelines

### 13.1 Правило: Primitive vs Semantic

```
Primitive-токены (--eb-color-sage-500, --eb-space-4) описывают ЧТО это.
Semantic-токены (--eb-color-primary, --eb-space-card-padding) описывают ЗАЧЕМ.
```

| Ситуация | Правильно | Неправильно |
|----------|-----------|-------------|
| Цвет кнопки | `var(--eb-color-primary)` | `var(--eb-color-sage-500)` |
| Фон страницы | `var(--eb-color-bg-primary)` | `var(--eb-color-neutral-50)` |
| Отступ карточки | `var(--eb-space-card-padding)` | `16px` |
| SOS-кнопка | `var(--eb-color-sos)` | `var(--eb-color-coral-500)` |
| Тень карточки | `var(--eb-shadow-card)` | `0 1px 3px rgba(...)` |

### 13.2 Правила комбинирования

**Цвета текста на фоне:**

| Фон | Текст Primary | Текст Secondary | Ссылки |
|-----|---------------|-----------------|--------|
| `--eb-color-bg-primary` | `--eb-color-text-primary` | `--eb-color-text-secondary` | `--eb-color-text-link` |
| `--eb-color-bg-secondary` | `--eb-color-text-primary` | `--eb-color-text-secondary` | `--eb-color-text-link` |
| `--eb-color-primary` | `--eb-color-text-inverse` | -- | -- |
| `--eb-color-sos` | `--eb-color-sos-text` | -- | -- |
| `--eb-color-bg-chat-ai` | `--eb-color-text-primary` | `--eb-color-text-secondary` | `--eb-color-secondary` |

**Тени по уровням:**

| Поверхность | Тень |
|-------------|------|
| Inline-элемент | `--eb-shadow-none` |
| Карточка (rest) | `--eb-shadow-card` |
| Карточка (hover) | `--eb-shadow-card-hover` |
| Dropdown | `--eb-shadow-dropdown` |
| Модальное окно | `--eb-shadow-modal` |
| SOS overlay | `--eb-shadow-sos` |

### 13.3 Anti-patterns

```
1. НЕ использовать Primitive-токены в компонентах
   background: var(--eb-color-sage-500);       // BAD
   background: var(--eb-color-primary);         // GOOD

2. НЕ хардкодить значения
   padding: 16px;                               // BAD
   padding: var(--eb-space-card-padding);        // GOOD

3. НЕ смешивать уровни
   color: var(--eb-color-sage-500);
   background: var(--eb-color-bg-primary);       // BAD: primitive + semantic

4. НЕ дублировать значения из токенов
   box-shadow: 0 1px 3px rgba(0,0,0,0.04);     // BAD
   box-shadow: var(--eb-shadow-card);            // GOOD

5. НЕ использовать calc() с magic numbers
   margin: calc(16px + 8px);                     // BAD
   margin: var(--eb-space-6);                    // GOOD (24px)

6. НЕ переопределять токены inline
   style="--eb-color-primary: red"               // BAD: breaks system
```

### 13.4 Accessibility Checklist для токенов

- Все комбинации `text + background` проходят WCAG AA (4.5:1 для body, 3:1 для крупного текста)
- SOS-элементы имеют повышенный контраст
- `--eb-touch-target-min` (44px) соблюдается для всех интерактивных элементов
- `--eb-color-border-focus` видим в обоих режимах (light / dark)
- Цвет никогда не единственный способ передачи информации

---

## 14. Complete CSS Custom Properties Reference

Сводная таблица всех semantic-токенов, их значений в light и dark mode.

| Категория | Токен | Light | Dark |
|-----------|-------|-------|------|
| **BG** | `--eb-color-bg-primary` | `#FAFAF8` | `#1A1A18` |
| **BG** | `--eb-color-bg-secondary` | `#F4F4F1` | `#242422` |
| **BG** | `--eb-color-bg-tertiary` | `#E8E8E3` | `#2E2E2B` |
| **BG** | `--eb-color-bg-elevated` | `#FFFFFF` | `#383835` |
| **BG** | `--eb-color-bg-chat-ai` | `#EFF5F9` | `#1C2832` |
| **BG** | `--eb-color-bg-chat-user` | `#F0F6F0` | `#1C2A1E` |
| **Text** | `--eb-color-text-primary` | `#262624` | `#F0F0ED` |
| **Text** | `--eb-color-text-secondary` | `#737370` | `#A8A8A3` |
| **Text** | `--eb-color-text-disabled` | `#A3A39C` | `#5A5A56` |
| **Text** | `--eb-color-text-inverse` | `#FFFFFF` | `#1A1A18` |
| **Text** | `--eb-color-text-link` | `#4A8550` | `#8FC28F` |
| **Brand** | `--eb-color-primary` | `#5F9A63` | `#8FC28F` |
| **Brand** | `--eb-color-primary-hover` | `#4A8550` | `#7BAE7F` |
| **Brand** | `--eb-color-primary-active` | `#376F3D` | `#5F9A63` |
| **Brand** | `--eb-color-secondary` | `#5289AB` | `#89B7D2` |
| **Brand** | `--eb-color-accent` | `#8477B4` | `#AE9DD4` |
| **SOS** | `--eb-color-sos` | `#DE5438` | `#E8725A` |
| **SOS** | `--eb-color-sos-hover` | `#C4412A` | `#DE5438` |
| **SOS** | `--eb-color-sos-text` | `#FFFFFF` | `#FFFFFF` |
| **SOS** | `--eb-color-crisis-overlay-bg` | `rgba(98,31,19,0.8)` | `rgba(98,31,19,0.85)` |
| **Status** | `--eb-color-success` | `#34D399` | `#34D399` |
| **Status** | `--eb-color-warning` | `#F59E0B` | `#F59E0B` |
| **Status** | `--eb-color-error` | `#EF7070` | `#EF7070` |
| **Status** | `--eb-color-info` | `#60A5FA` | `#60A5FA` |
| **Border** | `--eb-color-border` | `#E8E8E3` | `#3A3A37` |
| **Border** | `--eb-color-border-strong` | `#D4D4CE` | `#4A4A46` |
| **Border** | `--eb-color-border-focus` | `#7BAE7F` | `#8FC28F` |
| **Shadow** | `--eb-shadow-card` | multi-layer | `none` |
| **Shadow** | `--eb-shadow-modal` | multi-layer | `0 10px 20px rgba(0,0,0,0.4)` |
| **Shadow** | `--eb-shadow-sos` | multi-layer | glow + shadow |
| **Type** | `--eb-font-family-primary` | Inter stack | same |
| **Type** | `--eb-font-size-base` | 1rem (16px) | same |
| **Space** | `--eb-space-card-padding` | 1rem (16px) | same |
| **Space** | `--eb-space-section-gap` | 1.5rem (24px) | same |
| **Motion** | `--eb-duration-normal` | 250ms | same |
| **Motion** | `--eb-ease-default` | cubic-bezier(0.25,0.1,0.25,1) | same |
| **Z** | `--eb-z-sos-button` | 900 | same |
| **Z** | `--eb-z-crisis-overlay` | 1000 | same |
| **Touch** | `--eb-touch-target-sos` | 56px | same |

---

## 15. Related Documents

| Document | Path | Description |
|----------|------|-------------|
| Design Foundations | `docs/design/design-foundations.md` | Base design system (Wave 1) |
| Project Brief | `context/project-brief.yaml` | Project overview |
| PRD | `docs/discovery/prd.md` | Product requirements |
| UI Kit | `docs/design/ui-kit.md` | Component library (in progress) |

---

*Документ создан: UI Agent | Дата: 2026-02-04*
