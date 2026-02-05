---
title: "Стратегия деплоя balance-space.ru (emotional-balance frontend)"
created_by: "Orchestrator Agent"
created_at: "2026-02-05"
---

# Стратегия деплоя balance-space.ru

## Цель

Заменить текущее приложение на домене **balance-space.ru** на новый frontend из репозитория **emotional-balance** (папка `frontend`). Деплой через MCP **user-deploy-vps**. Все изменения на сервере — только через Git (pull), без прямой загрузки файлов проекта.

## Текущее состояние сервера (на 2026-02-05)

- **Хост:** vm4652062.example.com (213.159.67.199)
- **Домен:** balance-space.ru, www.balance-space.ru
- **Текущий проект на домене:** **psychology** (каталог `/var/www/psychology`)
  - Контейнеры: `psychology-frontend` (порт **8084**), `psychology-backend` (порт **8001**), postgres, redis
  - Nginx: `/etc/nginx/sites-available/balance-space.ru` — проксирует `/` → 8084, `/api/`, `/admin/` и др. → 8001
  - **SSL:** уже настроен (Let's Encrypt): `/etc/letsencrypt/live/balance-space.ru/`

### Занятые порты (релевантные)

| Порт  | Назначение                |
|-------|----------------------------|
| 80    | nginx                      |
| 443   | nginx (SSL)                |
| 8084  | psychology-frontend (заменяем) |
| 8001  | psychology-backend (оставляем или останавливаем по желанию) |

### Свободные порты для приложений (примеры)

8093, 8094, 8096, 8097, 8098, 8099 и др. — для нового frontend не требуются: используем **8084** после остановки psychology-frontend.

## Решение по портам и nginx

- **Порт frontend:** **8084** (как сейчас) — после остановки контейнера `psychology-frontend` порт освободится, наш контейнер `emotional-balance-frontend` займёт 8084.
- **Nginx:** конфиг **не меняем**. Уже настроены:
  - редирект HTTP → HTTPS;
  - SSL-сертификаты для balance-space.ru;
  - `location /` → `proxy_pass http://127.0.0.1:8084`.
- **Бэкенд 8001:** в репозитории emotional-balance бэкенда нет. Текущие `location /api/`, `/admin/`, `/health/`, `/static/`, `/media/` ведут на 8001 (psychology-backend). Варианты:
  - **A)** Оставить как есть — наш frontend на 8084, старый API на 8001 (если нужен).
  - **B)** Позже удалить или изменить эти location, если бэкенд больше не нужен.

## Шаги деплоя (кратко)

1. **Локально:** закоммитить и запушить в Git: `frontend/Dockerfile`, `frontend/.dockerignore`, `deploy/docker-compose.prod.yml`, `deploy/STRATEGY-balance-space.md`, `deploy/RUNBOOK-MCP-DEPLOY.md`.
2. **На VPS (через MCP execute-command):**
   - Клонировать репозиторий в `/opt/emotional-balance` (или использовать существующий каталог по согласованию), затем `git pull`.
   - Остановить контейнер psychology-frontend: в каталоге psychology выполнить остановку только frontend-сервиса (или `docker stop psychology-frontend-1`).
   - В каталоге emotional-balance: `docker compose -f deploy/docker-compose.prod.yml build --no-cache` и `docker compose -f deploy/docker-compose.prod.yml up -d`.
   - Проверить: `curl -sI http://127.0.0.1:8084` и https://balance-space.ru.

## SSL

- Сертификаты уже есть для balance-space.ru.
- При продлении использовать certbot (при необходимости): `certbot renew` (cron уже может быть настроен).
- Менять конфиг nginx для SSL не требуется.

## Конфигурация nginx (текущая, без изменений)

Файл на сервере: `/etc/nginx/sites-available/balance-space.ru`. После замены frontend меняется только то, что за портом 8084 (теперь наше приложение). Содержимое оставляем как есть:

- listen 80 → redirect to https
- listen 443 ssl; server_name balance-space.ru www.balance-space.ru
- ssl_certificate /etc/letsencrypt/live/balance-space.ru/fullchain.pem
- ssl_certificate_key /etc/letsencrypt/live/balance-space.ru/privkey.pem
- location / → proxy_pass http://127.0.0.1:8084

## Риски и откат

- **Риск:** неверная сборка образа или падение контейнера.
- **Откат:** остановить `emotional-balance-frontend`, снова запустить `psychology-frontend` на 8084 (в каталоге `/var/www/psychology`), перезагрузить nginx при необходимости.

---
*Документ создан: Orchestrator Agent | Дата: 2026-02-05*
