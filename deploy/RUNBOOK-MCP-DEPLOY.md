---
title: "Runbook: деплой emotional-balance на VPS через MCP deploy-vps"
created_by: "Orchestrator Agent"
created_at: "2026-02-05"
---

# Runbook: деплой на balance-space.ru через MCP user-deploy-vps

Домен: **balance-space.ru**. Сервер: **default** (213.159.67.199). Изменения на сервере только через **Git** (clone/pull).

## Предусловия

1. Локально выполнить: `git add` → `git commit` → `git push` (все артефакты деплоя и frontend в репозитории).
2. MCP **user-deploy-vps** подключён, доступен инструмент **execute-command** (и при необходимости **list-servers**).

## Шаг 1: Проверка сервера и каталога проекта

**MCP:** `execute-command`  
**Параметры:**
- `cmdString`: `hostname && whoami && ls -la /opt/emotional-balance 2>/dev/null || echo "DIR_NOT_FOUND"`
- `connectionName`: `default`
- `timeout`: 15000

Если каталог не найден — перейти к шагу 2 (clone). Если найден — перейти к шагу 3 (pull).

---

## Шаг 2: Клонирование репозитория (если каталога нет)

**MCP:** `execute-command`  
**Параметры:**
- `cmdString`: `cd /opt && git clone <URL_РЕПОЗИТОРИЯ> emotional-balance && ls -la emotional-balance`
- `connectionName`: `default`
- `timeout`: 60000

Подставить реальный URL репозитория (GitHub/GitLab и т.д.). Если нужна авторизация — использовать deploy key или токен по инструкциям проекта.

---

## Шаг 3: Обновление кода (git pull)

**MCP:** `execute-command`  
**Параметры:**
- `cmdString`: `cd /opt/emotional-balance && git fetch origin && git pull origin main`
- `connectionName`: `default`
- `timeout`: 30000

Ветку `main` заменить на актуальную (например `master`), если отличается.

---

## Шаг 4: Остановка старого frontend на порту 8084

**MCP:** `execute-command`  
**Параметры:**
- `cmdString`: `docker stop psychology-frontend-1 2>/dev/null; docker ps | grep 8084`
- `connectionName`: `default`
- `timeout`: 15000

Убедиться, что порт 8084 свободен: `ss -tlnp | grep 8084` — после остановки вывода быть не должно.

---

## Шаг 5: Сборка и запуск контейнера emotional-balance frontend

**MCP:** `execute-command`  
**Параметры:**
- `cmdString`: `cd /opt/emotional-balance && docker compose -f deploy/docker-compose.prod.yml build --no-cache`
- `connectionName`: `default`
- `timeout`: 300000

**MCP:** `execute-command`  
**Параметры:**
- `cmdString`: `cd /opt/emotional-balance && docker compose -f deploy/docker-compose.prod.yml up -d`
- `connectionName`: `default`
- `timeout`: 30000

---

## Шаг 6: Проверка

**MCP:** `execute-command`  
**Параметры:**
- `cmdString`: `docker ps | grep emotional-balance && curl -sI http://127.0.0.1:8084 | head -5`
- `connectionName`: `default`
- `timeout`: 10000

Ожидается: контейнер `emotional-balance-frontend` в состоянии Up, ответ 200 от curl.

Ручная проверка в браузере: https://balance-space.ru

---

## Откат (если нужно вернуть старый frontend)

**MCP:** `execute-command`  
**Параметры:**
- `cmdString`: `cd /opt/emotional-balance && docker compose -f deploy/docker-compose.prod.yml down`
- `connectionName`: `default`

Затем в каталоге psychology запустить снова frontend (команда зависит от их compose, например):
`cd /var/www/psychology && docker compose -f docker-compose.prod.yml up -d frontend`

---

## Сводка команд MCP (execute-command, connectionName: default)

| # | Действие              | cmdString (кратко) |
|---|------------------------|---------------------|
| 1 | Проверка хоста и каталога | `hostname && whoami && ls -la /opt/emotional-balance 2>/dev/null \|\| echo "DIR_NOT_FOUND"` |
| 2 | Clone (если нет каталога) | `cd /opt && git clone <REPO_URL> emotional-balance && ls -la emotional-balance` |
| 3 | Pull                   | `cd /opt/emotional-balance && git fetch && git pull origin main` |
| 4 | Остановить старый фронт | `docker stop psychology-frontend-1` |
| 5a| Сборка образа          | `cd /opt/emotional-balance && docker compose -f deploy/docker-compose.prod.yml build --no-cache` |
| 5b| Запуск контейнера      | `cd /opt/emotional-balance && docker compose -f deploy/docker-compose.prod.yml up -d` |
| 6 | Проверка               | `docker ps \| grep emotional-balance && curl -sI http://127.0.0.1:8084 \| head -5` |

---
*Документ создан: Orchestrator Agent | Дата: 2026-02-05*
