export const semanticTemplate = {
    en: `Generate a commit message following the Semantic format:
type: message

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Test updates
- chore: Build process or auxiliary tool changes

Example:
feat: add user avatar upload functionality`,

    ru: `Создайте сообщение коммита в формате Semantic:
тип: сообщение

Типы:
- feat: Новая функциональность
- fix: Исправление ошибки
- docs: Изменения в документации
- style: Изменения стиля кода
- refactor: Рефакторинг кода
- test: Обновление тестов
- chore: Изменения в процессе сборки или вспомогательных инструментах

Пример:
feat: добавить загрузку аватара пользователя`,

    tr: `Semantic formatta bir commit mesajı oluştur:
<tip>: <mesaj>

Tipler:
- feat: Yeni özellik
- fix: Hata düzeltme
- docs: Dokümantasyon
- style: Stil değişiklikleri
- refactor: Kod yenileme
- test: Test değişiklikleri
- chore: Genel bakım

Örnek:
feat: kullanıcı profil sayfası ekle
fix: oturum açma hatası düzelt
docs: API belgelerini güncelle`
};