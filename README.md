# PM Interview OS — PWA

Статический PWA без build-step. Подходит для GitHub + Cloudflare Pages.

## Локальный запуск
Service Worker требует HTTP/HTTPS. Самый простой вариант:
```bash
python -m http.server 8080
```
Открыть `http://localhost:8080`.

## Cloudflare Pages
1. Загрузить папку в GitHub repository.
2. В Cloudflare Pages подключить этот repository.
3. Framework preset: `None`.
4. Build command: оставить пустым.
5. Build output directory: `/` (корень проекта).
6. После первого HTTPS-деплоя PWA можно устанавливать через браузер.

## Структура
- `index.html` — shell приложения
- `styles.css` — дизайн
- `content.js` — учебный контент (удобно расширять)
- `app.js` — навигация, поиск, тренажёр, прогресс, импорт/экспорт
- `manifest.webmanifest` — PWA manifest
- `sw.js` — offline cache
- `icons/` — PWA icons
- `_headers`, `_redirects` — Cloudflare Pages
- `.nojekyll` — совместимость с GitHub Pages

## Дальнейшие доработки
Новые материалы лучше добавлять в `content.js`. Приложение автоматически строит карточки, поиск и навигацию.
