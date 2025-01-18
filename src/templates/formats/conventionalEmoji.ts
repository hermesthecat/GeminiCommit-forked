export const conventionalEmojiTemplate = {
    en: `Generate a commit message following the Conventional-Emoji format:
<type>(<scope>): <emoji> <description>

[optional body with bullet points]

Types and Emojis:
- feat: ✨ :sparkles: - New features
- fix: 🐛 :bug: - Bug fixes
- docs: 📚 :books: - Documentation
- style: 💄 :lipstick: - Formatting/UI
- refactor: ♻️ :recycle: - Code refactoring
- test: ✅ :white_check_mark: - Tests
- build: 🔧 :wrench: - Build/dependencies
- perf: ⚡️ :zap: - Performance
- ci: 🚀 :rocket: - CI/CD
- chore: 🔨 :hammer: - Maintenance
- security: 🔒 :lock: - Security

Rules:
1. First line: type(scope): emoji description (max 50 chars)
2. For small changes use only first line
3. For complex changes list key points in body:
   - Each line starts with "- "
   - Each line max 50 chars

Examples:
Simple change:
feat(auth): ✨ add Google OAuth integration

Complex change:
feat(dashboard): ✨ add real-time analytics

- Add websocket connection for live updates
- Implement data visualization components
- Create analytics service module

Bug fix:
fix(api): 🐛 fix token expiration issue`,

    ru: `Создайте сообщение коммита в формате Conventional-Emoji:
<тип>(<область>): <эмодзи> <описание>

[опциональное тело со списком изменений]

Типы и эмодзи:
- feat: ✨ :sparkles: - Новая функциональность
- fix: 🐛 :bug: - Исправление ошибок
- docs: 📚 :books: - Документация
- style: 💄 :lipstick: - Форматирование/UI
- refactor: ♻️ :recycle: - Рефакторинг
- test: ✅ :white_check_mark: - Тесты
- build: 🔧 :wrench: - Сборка/зависимости
- perf: ⚡️ :zap: - Производительность
- ci: 🚀 :rocket: - CI/CD
- chore: 🔨 :hammer: - Обслуживание
- security: 🔒 :lock: - Безопасность

Правила:
1. Первая строка: тип(область): эмодзи описание (макс 50 символов)
2. Для небольших изменений только первая строка
3. Для сложных изменений список ключевых моментов:
   - Каждая строка начинается с "- "
   - Каждая строка макс 50 символов

Примеры:
Простое изменение:
feat(auth): ✨ добавить интеграцию с Google OAuth

Сложное изменение:
feat(dashboard): ✨ добавить аналитику в реальном времени

- Добавить websocket подключение для живых обновлений
- Внедрить компоненты визуализации данных
- Создать модуль сервиса аналитики

Исправление ошибки:
fix(api): 🐛 исправить проблему с истечением токена`
}; 