# Навигация по документам проекта Emotional Balance

Краткое описание всех документов проекта, сгруппированных по категориям и типам. Используйте ссылки для перехода к нужному документу.

**Проект:** Emotional Balance (Нейро-Психолог 24/7) — ИИ-платформа психологической поддержки 24/7 через Telegram WebApp на базе российских LLM и методов КПТ.

---

## Содержание

1. [Discovery (исследование и продукт)](#1-discovery-исследование-и-продукт)
2. [Design (дизайн и UX)](#2-design-дизайн-и-ux)
3. [Business (бизнес и стратегия)](#3-business-бизнес-и-стратегия)
4. [Marketing (маркетинг)](#4-marketing-маркетинг)
5. [Deploy (развёртывание)](#5-deploy-развёртывание)
6. [Context (контекст проекта)](#6-context-контекст-проекта)
7. [Frontend (код и гайдлайны)](#7-frontend-код-и-гайдлайны)
8. [.cursor (агенты, навыки, правила)](#8-cursor-агенты-навыки-правила)

---

## 1. Discovery (исследование и продукт)

Документы фазы обнаружения: видение, продукт, требования, метрики, пользователи, рынок.

| Документ | Тип | Описание | Ссылка |
|----------|-----|----------|--------|
| **Vision** | Стратегия | Видение продукта: проблема, ценностное предложение, целевая аудитория, миссия | [vision.md](discovery/vision.md) |
| **PRD** | Спецификация | Product Requirements Document — MVP, фичи, сценарии, ограничения | [prd.md](discovery/prd.md) |
| **Requirements Specification** | Спецификация | Детальная спецификация требований (функциональные и нефункциональные) | [requirements-specification.md](discovery/requirements-specification.md) |
| **User Stories** | Продукт | Пользовательские истории и сценарии использования | [user-stories.md](discovery/user-stories.md) |
| **Roadmap** | Планирование | Дорожная карта продукта: фазы, релизы, зависимости | [roadmap.md](discovery/roadmap.md) |
| **User Research** | Исследование | Результаты пользовательских исследований и персоны | [user-research.md](discovery/user-research.md) |
| **Market Research** | Исследование | Исследование рынка и целевой аудитории | [market-research.md](discovery/market-research.md) |
| **Competitive Analysis** | Исследование | Анализ конкурентов и позиционирование | [competitive-analysis.md](discovery/competitive-analysis.md) |
| **Stakeholder Analysis** | Анализ | Анализ стейкхолдеров и их интересов | [stakeholder-analysis.md](discovery/stakeholder-analysis.md) |
| **Business Processes** | Бизнес-анализ | Описание бизнес-процессов продукта | [business-processes.md](discovery/business-processes.md) |
| **Business Rules** | Бизнес-анализ | Бизнес-правила и логика принятия решений | [business-rules.md](discovery/business-rules.md) |
| **Unit Economics** | Анализ | Юнит-экономика: LTV, CAC, метрики монетизации | [unit-economics.md](discovery/unit-economics.md) |
| **Metrics Framework** | Метрики | Фреймворк метрик и KPI продукта | [metrics-framework.md](discovery/metrics-framework.md) |
| **KPI Dashboard** | Метрики | Описание дашборда KPI и ключевых показателей | [kpi-dashboard.md](discovery/kpi-dashboard.md) |
| **Tracking Plan** | Метрики | План трекинга событий и аналитики | [tracking-plan.md](discovery/tracking-plan.md) |
| **Decision Log** | Управление | Журнал ключевых решений по продукту и архитектуре | [decision-log.md](discovery/decision-log.md) |

---

## 2. Design (дизайн и UX)

Визуальный и интерактивный дизайн, компоненты, контент, Figma.

| Документ | Тип | Описание | Ссылка |
|----------|-----|----------|--------|
| **Design Foundations** | Основа | Визуальная философия, метафора «Сад роста», принципы дизайна | [design-foundations.md](design/design-foundations.md) |
| **Design Tokens** | Спецификация | Токены дизайна: цвета, типографика, отступы, тени | [design-tokens.md](design/design-tokens.md) |
| **Component Library** | Спецификация | Библиотека UI-компонентов (кнопки, инпуты, карточки, навигация и др.) | [component-library.md](design/component-library.md) |
| **Information Architecture** | IA | Информационная архитектура и структура приложения | [information-architecture.md](design/information-architecture.md) |
| **User Flows** | UX | Пользовательские потоки и сценарии навигации | [user-flows.md](design/user-flows.md) |
| **Wireframes** | UX | Проволочные каркасы экранов и ключевых состояний | [wireframes.md](design/wireframes.md) |
| **Interaction Patterns** | UX | Паттерны взаимодействия: навигация, ввод, обратная связь, жесты | [interaction-patterns.md](design/interaction-patterns.md) |
| **Responsive Guidelines** | Спецификация | Адаптивность: брейкпоинты, viewport Telegram WebApp, сетка | [responsive-guidelines.md](design/responsive-guidelines.md) |
| **Content Guidelines** | Контент | Правила создания контента и копирайтинга в продукте | [content-guidelines.md](design/content-guidelines.md) |
| **Voice and Tone** | Контент | Голос и тон коммуникации бренда | [voice-and-tone.md](design/voice-and-tone.md) |
| **UX Copy Patterns** | Контент | Паттерны UX-копирайтинга: кнопки, ошибки, пустые состояния, SOS, чат | [ux-copy-patterns.md](design/ux-copy-patterns.md) |
| **Figma Make Prompts** | Инструмент | Промпты для Figma Make: лендинг, онбординг, экраны приложения, прототипинг | [figma-make-prompts.md](design/figma-make-prompts.md) |

---

## 3. Business (бизнес и стратегия)

Бизнес-стратегия, монетизация, риски, юридическая и партнёрская тематика.

| Документ | Тип | Описание | Ссылка |
|----------|-----|----------|--------|
| **Monetization Strategy** | Стратегия | Стратегия монетизации: тарифы, value-based pricing, B2B | [monetization-strategy.md](business/monetization-strategy.md) |
| **Go-to-Market Strategy** | Стратегия | Стратегия выхода на рынок и позиционирование | [go-to-market-strategy.md](business/go-to-market-strategy.md) |
| **Partnership Strategy** | Стратегия | Партнёрства и каналы привлечения | [partnership-strategy.md](business/partnership-strategy.md) |
| **Investor Memo** | Инвестиции | Мемо для инвесторов: тезисы и обоснование | [investor-memo.md](business/investor-memo.md) |
| **Pitch Deck Outline** | Инвестиции | Структура питч-дека для презентации | [pitch-deck-outline.md](business/pitch-deck-outline.md) |
| **Risk Register** | Управление | Реестр рисков и меры митигации | [risk-register.md](business/risk-register.md) |
| **Legal & Compliance Checklist** | Юридическое | Чек-лист по юридической совместимости и регуляторике | [legal-compliance-checklist.md](business/legal-compliance-checklist.md) |

---

## 4. Marketing (маркетинг)

Маркетинговая стратегия, каналы, контент и запуск.

| Документ | Тип | Описание | Ссылка |
|----------|-----|----------|--------|
| **Strategy** | Стратегия | Общая маркетинговая стратегия | [strategy.md](marketing/strategy.md) |
| **Channel Strategy** | Стратегия | Стратегия по каналам продвижения | [channel-strategy.md](marketing/channel-strategy.md) |
| **Content Plan** | Планирование | План контента и контент-календарь | [content-plan.md](marketing/content-plan.md) |
| **Launch Plan** | Планирование | План запуска продукта | [launch-plan.md](marketing/launch-plan.md) |

---

## 5. Deploy (развёртывание)

Инфраструктура, деплой и runbook.

| Документ | Тип | Описание | Ссылка |
|----------|-----|----------|--------|
| **RUNBOOK-MCP-DEPLOY** | Runbook | Пошаговый runbook деплоя на VPS через MCP (git-only, верификация) | [../deploy/RUNBOOK-MCP-DEPLOY.md](../deploy/RUNBOOK-MCP-DEPLOY.md) |
| **STRATEGY-balance-space** | Стратегия | Стратегия домена/хостинга balance-space | [../deploy/STRATEGY-balance-space.md](../deploy/STRATEGY-balance-space.md) |

Дополнительно в каталоге `deploy/`: `docker-compose.prod.yml`, `nginx-balance-space.ru.conf.example`.

---

## 6. Context (контекст проекта)

Контекстное хранилище проекта (Level 0–2): бриф, саммари, чекпоинты.

| Документ | Тип | Описание | Ссылка |
|----------|-----|----------|--------|
| **project-brief.yaml** | Бриф (Level 0) | Краткое описание проекта: цель, scope, ограничения, tech stack | [../context/project-brief.yaml](../context/project-brief.yaml) |
| **discovery-summary.yaml** | Summary (Level 1) | Краткое саммари фазы Discovery | [../context/summaries/discovery-summary.yaml](../context/summaries/discovery-summary.yaml) |
| **design-summary.yaml** | Summary (Level 1) | Краткое саммари фазы Design | [../context/summaries/design-summary.yaml](../context/summaries/design-summary.yaml) |
| **CP-000-intake** | Checkpoint | Чекпоинт: Intake | [../context/checkpoints/CP-000-intake-2026-02-04.yaml](../context/checkpoints/CP-000-intake-2026-02-04.yaml) |
| **CP-001-discovery** | Checkpoint | Чекпоинт: Discovery | [../context/checkpoints/CP-001-discovery-2026-02-04.yaml](../context/checkpoints/CP-001-discovery-2026-02-04.yaml) |
| **CP-002-design** | Checkpoint | Чекпоинт: Design | [../context/checkpoints/CP-002-design-2026-02-04.yaml](../context/checkpoints/CP-002-design-2026-02-04.yaml) |

---

## 7. Frontend (код и гайдлайны)

Документация в репозитории фронтенда.

| Документ | Тип | Описание | Ссылка |
|----------|-----|----------|--------|
| **Guidelines** | Гайдлайн | Правила и гайдлайны разработки фронтенда | [../frontend/guidelines/Guidelines.md](../frontend/guidelines/Guidelines.md) |
| **ATTRIBUTIONS** | Юридическое | Атрибуции и лицензии сторонних компонентов/ресурсов | [../frontend/ATTRIBUTIONS.md](../frontend/ATTRIBUTIONS.md) |

---

## 8. .cursor (агенты, навыки, правила)

Спецификации агентной системы Cursor: роли, навыки, правила, команды.

### 8.1 Агенты (роли)

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **INDEX** | Индекс агентов | [../.cursor/agents/INDEX.md](../.cursor/agents/INDEX.md) |
| orchestrator, product, coder, dev, qa, review, ux, ui, architect, devops, sre, и др. | Спецификации ролей | [../.cursor/agents/](../.cursor/agents/) |

### 8.2 Навыки (Skills)

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **INDEX** | Индекс навыков | [../.cursor/skills/INDEX.md](../.cursor/skills/INDEX.md) |
| application-logging, context-manager, document-generator, telegram-bot-api, ton-blockchain, yookassa-payments, ssh-deployment, и др. | Спецификации навыков | [../.cursor/skills/](../.cursor/skills/) |

### 8.3 Правила (Rules)

| Файл | Описание | Ссылка |
|------|----------|--------|
| 00-agentic-system-core.mdc | Ядро агентной системы, принципы, подпись | [../.cursor/rules/](../.cursor/rules/) |
| 01-agent-routing-and-formats.mdc | Роутинг задач и форматы handoff | [../.cursor/rules/](../.cursor/rules/) |
| 02-context-and-checkpoints.mdc | Контекст и чекпоинты | [../.cursor/rules/](../.cursor/rules/) |
| 03-ssh-operations.mdc | SSH и операции на VPS | [../.cursor/rules/](../.cursor/rules/) |
| 04-application-logging.mdc | Логирование в коде и AuditLog | [../.cursor/rules/](../.cursor/rules/) |

### 8.4 Команды (Commands)

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **INDEX** | Индекс команд чата | [../.cursor/commands/INDEX.md](../.cursor/commands/INDEX.md) |
| /start-project, /status, /checkpoint, /summary, /route, /deploy-vps | Описание команд | [../.cursor/commands/](../.cursor/commands/) |

---

## Типы документов (сводка)

| Тип | Назначение |
|-----|------------|
| **Стратегия** | Видение, GTM, монетизация, маркетинг, партнёрства |
| **Спецификация** | PRD, требования, компоненты, токены, адаптивность |
| **Исследование** | User/Market/Competitive research |
| **Планирование** | Roadmap, контент-план, план запуска |
| **Метрики** | KPI, tracking plan, metrics framework |
| **UX/IA** | User flows, wireframes, IA, interaction patterns |
| **Контент** | Content guidelines, voice & tone, UX copy |
| **Runbook** | Пошаговый деплой и операции |
| **Context** | Бриф, саммари, чекпоинты (YAML) |

---

*Документ создан: Coder Agent | Дата: 2026-02-05*
