export const angularTemplate = {
    en: `Generate a commit message following the Angular format:
<type>(<scope>): <short summary>

[optional body with bullet points]

Rules:
1. First line: type(scope): summary (max 50 chars)
2. For small changes use only first line
3. For complex changes list key points in body:
   - Each line starts with "- "
   - Each line max 50 chars

Types:
build: Build/dependencies
ci: CI configuration
docs: Documentation
feat: New feature
fix: Bug fix
perf: Performance
refactor: Code change
test: Testing

Examples:
Small change:
feat(api): add data validation method

Complex change:
refactor(core): optimize database queries

- Implement query caching
- Add connection pooling
- Update error handling`,

    ru: `Создайте сообщение коммита в формате Angular:
<тип>(<область>): <краткое описание>

[опциональное тело со списком изменений]

Правила:
1. Первая строка: тип(область): описание (макс 50 символов)
2. Для небольших изменений только первая строка
3. Для сложных изменений список ключевых моментов:
   - Каждая строка начинается с "- "
   - Каждая строка макс 50 символов

Типы:
build: Сборка/зависимости
ci: Конфигурация CI
docs: Документация
feat: Новая функция
fix: Исправление
perf: Производительность
refactor: Изменение кода
test: Тестирование

Примеры:
Небольшое изменение:
feat(api): добавить метод валидации данных

Сложное изменение:
refactor(core): оптимизировать запросы к БД

- Внедрить кеширование запросов
- Добавить пул соединений
- Обновить обработку ошибок`,

    tr: `Angular commit formatında bir commit mesajı oluştur:
<tip>(<kapsam>): <kısa özet>

[isteğe bağlı detaylı açıklama]

[isteğe bağlı alt notlar]

Tip seçim kuralları:
- feat: Yeni özellik
- fix: Hata düzeltme
- docs: Sadece dokümantasyon değişiklikleri
- style: Kod davranışını etkilemeyen değişiklikler (boşluk, biçimlendirme, noktalı virgül vb.)
- refactor: Hata düzeltmeyen ve yeni özellik eklemeyen kod değişikliği
- perf: Performans iyileştirmeleri
- test: Eksik testleri ekleme veya mevcut testleri düzeltme
- build: Derleme sistemini veya harici bağımlılıkları etkileyen değişiklikler
- ci: CI yapılandırma dosyaları ve betiklerindeki değişiklikler
- chore: Kaynak kodu değiştirmeyen diğer değişiklikler

Örnekler:
feat(auth): kullanıcı oturum açma özelliği ekle

Kullanıcıların email ve şifre ile oturum açmalarını sağlar.
- JWT tabanlı kimlik doğrulama
- Oturum süresi yönetimi
- Güvenli şifre hashleme

BREAKING CHANGE: Eski oturum açma API'si kaldırıldı

fix(api): bellek sızıntısı sorununu düzelt

Uzun süreli WebSocket bağlantılarında oluşan bellek sızıntısı düzeltildi.
- Kapatılmayan bağlantılar temizlendi
- Bellek kullanımı optimize edildi`
};