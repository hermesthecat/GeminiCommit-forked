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
- 📦 pkg: - Package updates
- 🎨 format: - Code style/format
- 🔥 remove: - Remove code/files
- 🌐 i18n: - Internationalization
- 🔍 seo: - SEO improvements
- 📱 ui: - Responsive/Mobile
- 🏗️ arch: - Architecture
- 🎯 goal: - Milestones/Goals
- 🔊 log: - Logging

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
🏗️ arch(core): redesign data flow architecture

- Implement new state management pattern
- Add event-driven communication
- Update service layer structure

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
- 📦 pkg: - Обновления пакетов
- 🎨 format: - Стиль/формат кода
- 🔥 remove: - Удаление кода/файлов
- 🌐 i18n: - Интернационализация
- 🔍 seo: - Улучшения SEO
- 📱 ui: - Адаптивность/Мобильность
- 🏗️ arch: - Архитектура
- 🎯 goal: - Этапы/Цели
- 🔊 log: - Логирование

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
🏗️ arch(core): переработать архитектуру потока данных

- Внедрить новый паттерн управления состоянием
- Добавить событийное взаимодействие
- Обновить структуру слоя сервисов

Исправление ошибки:
🐛 fix(api): исправить проблему с истечением токена`,

  tr: `Conventional-Emoji formatında bir commit mesajı oluştur:
<emoji> <tip>(<kapsam>): <açıklama>

[isteğe bağlı gövde madde işaretleriyle]

Tipler ve Emojiler:
- ✨ feat: - Yeni özellikler
- 🐛 fix: - Hata düzeltmeleri
- 📚 docs: - Dokümantasyon
- 💄 style: - Biçimlendirme/Arayüz
- ♻️ refactor: - Kod yenileme
- ✅ test: - Testler
- 🔧 build: - Derleme/bağımlılıklar
- ⚡️ perf: - Performans
- 🚀 ci: - CI/CD
- 🔨 chore: - Bakım
- 🔒 security: - Güvenlik
- 📦 pkg: - Paket güncellemeleri
- 🎨 format: - Kod stili/formatı
- 🔥 remove: - Kod/dosya silme
- 🌐 i18n: - Yerelleştirme
- 🔍 seo: - SEO iyileştirmeleri
- 📱 ui: - Responsive/Mobil
- 🏗️ arch: - Mimari
- 🎯 goal: - Kilometre taşları/Hedefler
- 🔊 log: - Loglama

Kurallar:
1. İlk satır: emoji tip(kapsam): açıklama (maks 50 karakter)
2. Küçük değişiklikler için sadece ilk satır
3. Karmaşık değişiklikler için anahtar noktaları listele:
   - Her satır "- " ile başlar
   - Her satır maks 50 karakter

Örnekler:
Basit değişiklik:
✨ feat(auth): Google OAuth entegrasyonu ekle

Karmaşık değişiklik:
🏗️ arch(core): veri akış mimarisini yeniden tasarla

- Yeni durum yönetimi desenini uygula
- Olay tabanlı iletişimi ekle
- Servis katmanı yapısını güncelle

Hata düzeltme:
🐛 fix(api): token süresi hatasını düzelt`,
};
