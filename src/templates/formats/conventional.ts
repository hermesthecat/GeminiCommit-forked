export const conventionalTemplate = {
  en: `Generate a commit message following the Conventional Commits format:
<type>[optional scope]: <description>

[optional body with bullet points]

Rules:
1. First line: type(scope): description (max 50 chars)
2. For small changes use only first line
3. For complex changes list key points in body:
   - Each line starts with "- "
   - Each line max 50 chars

Type selection rules:
- docs: ANY changes to documentation files (*.md, docs/*)
- feat: New features or significant functional changes
- fix: Bug fixes and error corrections
- style: Formatting, semicolons, etc (no code change)
- refactor: Code changes that don't fix bugs or add features
- perf: Performance improvements
- test: Adding or updating tests
- build: Build system or dependencies
- ci: CI/CD changes
- chore: Other maintenance tasks

Examples:
Documentation change:
docs: update installation and usage guides

- Add new features description
- Update configuration section
- Add usage examples

Feature change:
feat(auth): add user authentication

- Implement OAuth2 provider integration
- Create auth service module
- Add session management`,

  ru: `Создайте сообщение коммита в формате Conventional Commits:
<тип>[область]: <описание>

[опциональное тело со списком изменений]

Правила:
1. Первая строка: тип(область): описание (макс 50 символов)
2. Для небольших изменений только первая строка
3. Для сложных изменений список ключевых моментов:
   - Каждая строка начинается с "- "
   - Каждая строка макс 50 символов

Правила выбора типа:
- docs: ЛЮБЫЕ изменения в документации (*.md, docs/*)
- feat: Новая функциональность или значимые изменения
- fix: Исправление ошибок
- style: Форматирование, точки с запятой и т.д.
- refactor: Изменения кода без новой функциональности
- perf: Улучшения производительности
- test: Добавление или обновление тестов
- build: Система сборки или зависимости
- ci: Изменения в CI/CD
- chore: Другие задачи обслуживания

Примеры:
Изменение документации:
docs: обновить руководство по установке и использованию

- Добавить описание новых функций
- Обновить раздел конфигурации
- Добавить примеры использования

Новая функциональность:
feat(auth): добавить аутентификацию пользователей

- Внедрить интеграцию с OAuth2
- Создать модуль сервиса авторизации
- Добавить управление сессиями`,

  tr: `Conventional Commits formatında bir commit mesajı oluştur:
<tip>[isteğe bağlı kapsam]: <açıklama>

[isteğe bağlı gövde madde işaretleriyle]

Kurallar:
1. İlk satır: tip(kapsam): açıklama (maks 50 karakter)
2. Küçük değişiklikler için sadece ilk satır
3. Karmaşık değişiklikler için anahtar noktaları listele:
   - Her satır "- " ile başlar
   - Her satır maks 50 karakter

Tip seçim kuralları:
- docs: Dokümantasyon dosyalarındaki değişiklikler (*.md, docs/*)
- feat: Yeni özellikler veya önemli işlevsel değişiklikler
- fix: Hata düzeltmeleri
- style: Biçimlendirme, noktalı virgül vb. (kod değişikliği yok)
- refactor: Hata düzeltmeyen veya özellik eklemeyen kod değişiklikleri
- perf: Performans iyileştirmeleri
- test: Test ekleme veya güncelleme
- build: Derleme sistemi veya bağımlılıklar
- ci: CI/CD değişiklikleri
- chore: Diğer bakım görevleri

Örnekler:
Dokümantasyon değişikliği:
docs: kurulum ve kullanım kılavuzlarını güncelle

- Yeni özellik açıklamaları ekle
- Yapılandırma bölümünü güncelle
- Kullanım örnekleri ekle

Özellik değişikliği:
feat(auth): kullanıcı kimlik doğrulaması ekle

- OAuth2 sağlayıcı entegrasyonunu uygula
- Kimlik doğrulama servis modülünü oluştur
- Oturum yönetimini ekle`,
};
