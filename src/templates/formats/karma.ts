export const karmaTemplate = {
    en: `Generate a commit message following the Karma format:
<type>(<scope>): <message>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation change
- style: Formatting, missing semi colons, etc
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance

Example:
chore(ci): update deployment script to Node 16`,

    ru: `Создайте сообщение коммита в формате Karma:
<тип>(<область>): <сообщение>

Типы:
- feat: Новая функциональность
- fix: Исправление ошибки
- docs: Изменения в документации
- style: Форматирование, пропущенные точки с запятой и т.д.
- refactor: Рефакторинг кода
- test: Добавление тестов
- chore: Обслуживание

Пример:
chore(ci): обновить скрипт деплоя до Node 16`,

    tr: `Karma formatında bir commit mesajı oluştur:
<tip>(<kapsam>): <mesaj>

Tipler:
- feat: Yeni özellik
- fix: Hata düzeltme
- docs: Dokümantasyon
- style: Stil değişiklikleri
- refactor: Kod yenileme
- test: Test değişiklikleri
- chore: Genel bakım

Örnek:
feat(login): sosyal medya girişi ekle
fix(api): hatalı istek yönetimini düzelt
docs(readme): kurulum talimatlarını güncelle`
};