export const conventionalEmojiTemplate = {
    en: `Generate a commit message following the Conventional-Emoji format:
<emoji> <type>(<scope>): <description>

[optional body with bullet points]

Types and Emojis:
- ✨ feat: - New features
- 🐛 fix: - Bug fixes
- 📚 docs: - Documentation
- 💄 style: - Formatting/UI
- ♻️ refactor: - Code refactoring
- ✅ test: - Tests
- 🔧 build: - Build/dependencies
- ⚡️ perf: - Performance
- 🚀 ci: - CI/CD
- 🔨 chore: - Maintenance
- 🔒 security: - Security

Rules:
1. First line: emoji type(scope): description (max 50 chars)
2. For small changes use only first line
3. For complex changes list key points in body:
   - Each line starts with "- "
   - Each line max 50 chars

Examples:
Simple change:
✨ feat(auth): add Google OAuth integration

Complex change:
✨ feat(dashboard): add real-time analytics

- Add websocket connection for live updates
- Implement data visualization components
- Create analytics service module

Bug fix:
🐛 fix(api): fix token expiration issue`,

    ru: `Создайте сообщение коммита в формате Conventional-Emoji:
<эмодзи> <тип>(<область>): <описание>

[опциональное тело со списком изменений]

Типы и эмодзи:
- ✨ feat: - Новая функциональность
- 🐛 fix: - Исправление ошибок
- 📚 docs: - Документация
- 💄 style: - Форматирование/UI
- ♻️ refactor: - Рефакторинг
- ✅ test: - Тесты
- 🔧 build: - Сборка/зависимости
- ⚡️ perf: - Производительность
- 🚀 ci: - CI/CD
- 🔨 chore: - Обслуживание
- 🔒 security: - Безопасность

Правила:
1. Первая строка: эмодзи тип(область): описание (макс 50 символов)
2. Для небольших изменений только первая строка
3. Для сложных изменений список ключевых моментов:
   - Каждая строка начинается с "- "
   - Каждая строка макс 50 символов

Примеры:
Простое изменение:
✨ feat(auth): добавить интеграцию с Google OAuth

Сложное изменение:
✨ feat(dashboard): добавить аналитику в реальном времени

- Добавить websocket подключение для живых обновлений
- Внедрить компоненты визуализации данных
- Создать модуль сервиса аналитики

Исправление ошибки:
🐛 fix(api): исправить проблему с истечением токена`
}; 