# GeminiCommit

<img alt="Visual Studio Marketplace Version" src="https://img.shields.io/visual-studio-marketplace/v/VizzleTF.geminicommit"> <img alt="Visual Studio Marketplace Last Updated" src="https://img.shields.io/visual-studio-marketplace/last-updated/VizzleTF.geminicommit"> <img alt="Visual Studio Marketplace Installs" src="https://img.shields.io/visual-studio-marketplace/i/VizzleTF.geminicommit"> <img alt="Visual Studio Marketplace Rating" src="https://img.shields.io/visual-studio-marketplace/stars/VizzleTF.geminicommit">

GeminiCommit is a VSCode extension that automatically generates commit messages using Google's Gemini AI or an OpenAI API endpoint (OpenAI, Ollama, LocalAI and others).

![GeminiCommit in action](example.gif)

[Features](#features) • [Quick Start & Usage](#quick-start--usage) • [Settings](#settings) • [Commit Formats](#commit-formats) • [Gemini Models & Custom Endpoints](#gemini-models--custom-endpoints) • [Example Messages](#example-messages)

## Features

- AI-powered commit message generation
- Multiple commit message formats (Conventional, Angular, Karma, Semantic, Emoji, Conventional-Emoji)
- Support for Google's Gemini AI and custom endpoints (OpenAI API)
- Multi-language support (English, Russian, and Turkish)
- Customizable commit message instructions
- Option to include references (e.g., issue numbers)
- Secure API key storage
- Automatic commit and push functionality
- Flexible commit workflow support (staged/unstaged changes)

## Quick Start & Usage

1. Install from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=VizzleTF.geminicommit)
2. Set up API key:
   - For Gemini AI: Get key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - For custom endpoint: Configure in settings
3. Use Command Palette (Ctrl+Shift+P) to set API key
4. Configure preferences in VS Code settings:
   - Select your preferred commit format
   - Choose language
   - Enable custom instructions if needed
   - Configure commit behavior:
     - "Only Staged Changes": When enabled, commits only staged changes
     - When disabled:
       - If there are staged changes, commits only those
       - If no staged changes, commits all modified files using `git commit -a`
     - "Auto Commit": Automatically creates a commit after generating the message
     - "Auto Push": When enabled (and Auto Commit is enabled), automatically pushes changes after commit
5. Click "Generate Commit Message" in Source Control view
6. (Optional) Enter references if prompted
7. Review and edit the generated message
8. Commit/push is performed automatically based on your settings

## Settings

### Commit Message Generation

- **Commit Language** (`geminiCommit.commit.commitLanguage`):

  - Languages: English (default), Russian, or Turkish
  - Note: Some formats may have limited support for non-English languages

- **Commit Format** (`geminiCommit.commit.commitFormat`):
  - Available formats: Conventional (default), Angular, Karma, Semantic, Emoji, Conventional-Emoji
  - Each format has its own structure and rules
- **Custom Instructions**:
  - Enable with `geminiCommit.commit.useCustomInstructions`
  - Set instructions in `geminiCommit.commit.customInstructions`
  - Must not be empty when enabled

### References

- **Prompt for Refs** (`geminiCommit.commit.promptForRefs`):
  - When enabled, prompts for issue numbers or references
  - Consider disabling when using Auto Commit to avoid interrupting the flow

### Commit Behavior

- **Only Staged Changes** (`geminiCommit.commit.onlyStagedChanges`):
  - When `true`: Only commits changes that have been staged with `git add`
  - When `false`:
    - If there are staged changes, commits only those changes
    - If there are no staged changes, commits all tracked modified files using `git commit -a`

### Automation

- **Auto Commit** (`geminiCommit.commit.autoCommit`):

  - When `true`: Automatically creates a commit after generating the message
  - When `false`: Only generates and sets the commit message, leaving manual commit control to you

- **Auto Push** (`geminiCommit.commit.autoPush`):
  - When `true`: Automatically pushes changes after commit (requires Auto Commit to be enabled)
  - When `false`: Leaves manual push control to you
  - Note: This setting only works when Auto Commit is enabled. If Auto Push is enabled while Auto Commit is disabled, you'll see a warning message with a quick link to settings

## Commit Formats

The extension supports multiple commit message formats:

1. **Conventional Commits** (default)

   ```shell
   <type>[optional scope]: <description>

   [optional body with bullet points]
   ```

2. **Angular**

   ```shell
   <type>(<scope>): <short summary>

   [optional body with bullet points]
   ```

3. **Karma**

   ```shell
   <type>(<scope>): <message>
   ```

4. **Semantic**

   ```shell
   type: message
   ```

5. **Emoji**

   ```shell
   :emoji: message

   Common emojis:
   ✨ - New feature
   🐛 - Bug fix
   📚 - Documentation
   💄 - UI/style changes
   ♻️ - Refactoring
   ✅ - Tests
   🔧 - Configuration
   ⚡️ - Performance
   🔒 - Security
   📦 - Dependencies/Packages
   🎨 - Code style/format
   🔥 - Remove code/files
   🚀 - Deploy/Release
   🌐 - Internationalization
   🔍 - SEO
   📱 - Responsive design
   🏗️ - Architecture changes
   🎯 - Hit goals/targets
   🔊 - Add logs
   🔇 - Remove logs
   ```

6. **Conventional-Emoji**

   ```shell
   <emoji> <type>(<scope>): <description>

   [optional body with bullet points]

   Example:
   ✨ feat(auth): add Google OAuth integration
   🐛 fix(api): fix token expiration issue
   ```

Each format has its own set of types and rules. For small changes, only the header line is generated. For complex changes, a detailed body with bullet points is included.

## Gemini Models & Custom Endpoints

Available free models:

- `gemini-1.0-pro`: Base model, good for general use
- `gemini-1.5-pro`: Enhanced version with better understanding
- `gemini-1.5-flash`: Optimized for speed (default)
- `gemini-2.0-flash-exp`: Experimental model with latest improvements

---

The extension supports OpenAI-compatible API endpoints. This allows you to:

- Use OpenAI API directly
- Use self-hosted LLMs with OpenAI-compatible API
- Connect to services like LocalAI, ollama, or other OpenAI API proxies

To configure a custom endpoint:

1. Enable "Use Custom Endpoint" in settings
2. Set your endpoint URL (e.g., "https://api.openai.com/v1" for OpenAI)
3. Set your model name (e.g., "gpt-3.5-turbo" for OpenAI)
4. Use Command Palette (Ctrl+Shift+P) to set API key

### Configuration Requirements

When using custom endpoint:

- Both endpoint URL and model name must be configured
- Appropriate API key must be set
- Extension will warn if configuration is incomplete

## Example Messages

Conventional format (complex change):

```shell
feat(auth): implement user authentication system

- Add JWT token-based authentication
- Create login/register endpoints
- Add session management
```

Emoji format:

```shell
✨ add real-time collaboration feature
```

---

# GeminiCommit (на русском)

GeminiCommit - расширение VSCode для автоматической генерации сообщений коммитов с использованием Gemini AI от Google или OpenAI API (OpenAI, Ollama, LocalAI и другие).

### Быстрый старт & Использование

0. Если вы из России проверьте, что адрес 'generativelanguage.googleapis.com' не выдает 400 ошибку (User location is not supported for the API use.). Используйте VPN для этого домена.
1. Установите из [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=VizzleTF.geminicommit)
2. Настройте API ключ:
   - Для Gemini AI: Получите ключ на [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Для пользовательского сервиса: Настройте в настройках
3. Используйте палитру команд (Ctrl+Shift+P) для установки API ключа
4. Настройте предпочтения в настройках VS Code:
   - Выберите предпочтительный формат коммитов
   - Выберите язык
   - При необходимости включите пользовательские инструкции
   - Настройте поведение коммитов:
     - "Only Staged Changes": Когда включено, коммитит только staged изменения
     - Когда выключено:
       - Если есть staged изменения, коммитит только их
       - Если нет staged изменений, коммитит все измененные файлы используя `git commit -a`
     - "Auto Commit": Когда включено, автоматически создает коммит после генерации сообщения
     - "Auto Push": Когда включено (и включен Auto Commit), автоматически пушит изменения после коммита.
       При включенном Auto Push без Auto Commit вы увидите предупреждение с быстрой ссылкой на настройки
5. Нажмите "Generate Commit Message" в панели Source Control
6. (Опционально) Введите ссылки, если запрошено
7. Просмотрите и отредактируйте сгенерированное сообщение
8. Коммит и пуш выполняются автоматически в соответствии с вашими настройками

### Форматы коммитов

Расширение поддерживает несколько форматов сообщений коммитов:

1. **Conventional Commits** (по умолчанию)
2. **Angular**
3. **Karma**
4. **Semantic**
5. **Emoji**
6. **Conventional-Emoji**

Каждый формат имеет свой набор типов и правил. Для небольших изменений генерируется только заголовок, для сложных изменений добавляется детальное описание с пунктами.

### Модели & Эндпоинты

Доступные бесплатные модели:

- `gemini-1.0-pro`: Базовая модель, подходит для общего использования
- `gemini-1.5-pro`: Улучшенная версия с лучшим пониманием контекста
- `gemini-1.5-flash`: Оптимизирована для скорости (по умолчанию)
- `gemini-2.0-flash-exp`: Экспериментальная модель с последними улучшениями

---

Расширение поддерживает API-эндпоинты, совместимые с OpenAI. Это позволяет:

- Использовать OpenAI API напрямую
- Использовать self-hosted LLM с совместимым API
- Подключаться к сервисам LocalAI, ollama и другим прокси OpenAI API

Для настройки пользовательского эндпоинта:

1. Включите "Use Custom Endpoint" в настройках
2. Укажите URL эндпоинта (например, "https://api.openai.com/v1" для OpenAI)
3. Укажите название модели (например, "gpt-3.5-turbo" для OpenAI)
4. Используйте палитру команд (Ctrl+Shift+P) для установки API ключа

## Community & Support

### 📢 Stay Updated

- [Telegram Channel](https://t.me/geminicommit) - Release announcements and updates
- [Telegram Group](https://t.me/gemini_commit) - Community discussions and support

### 🤝 Get Help

- Report issues on [GitHub Issues](https://github.com/VizzleTF/GeminiCommit/issues)
- Join our Telegram community for:
  - Quick support
  - Feature discussions
  - Community updates

### 🛠 Technical Requirements

- VS Code 1.93.0+
- Git
- Google AI API key or custom endpoint

### 👥 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

# GeminiCommit (Türkçe)

GeminiCommit, Google'ın Gemini AI'sını veya OpenAI API endpoint'ini (OpenAI, Ollama, LocalAI ve diğerleri) kullanarak otomatik commit mesajları oluşturan bir VSCode eklentisidir.

### Hızlı Başlangıç & Kullanım

1. [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=VizzleTF.geminicommit)'ten yükleyin
2. API anahtarını ayarlayın:
   - Gemini AI için: [Google AI Studio](https://aistudio.google.com/app/apikey)'dan anahtar alın
   - Özel endpoint için: Ayarlardan yapılandırın
3. API anahtarını ayarlamak için Komut Paleti'ni (Ctrl+Shift+P) kullanın
4. VS Code ayarlarından tercihlerinizi yapılandırın:
   - Tercih ettiğiniz commit formatını seçin
   - Dili seçin
   - Gerekirse özel talimatları etkinleştirin
   - Commit davranışını yapılandırın:
     - "Only Staged Changes": Etkinleştirildiğinde, sadece staged değişiklikleri commit eder
     - Devre dışı bırakıldığında:
       - Staged değişiklikler varsa, sadece onları commit eder
       - Staged değişiklik yoksa, tüm değiştirilmiş dosyaları `git commit -a` kullanarak commit eder
     - "Auto Commit": Mesaj oluşturulduktan sonra otomatik commit yapar
     - "Auto Push": Etkinleştirildiğinde (ve Auto Commit etkinken), commit'ten sonra otomatik push yapar
5. Source Control görünümünde "Generate Commit Message"a tıklayın
6. (İsteğe bağlı) İstenirse referansları girin
7. Oluşturulan mesajı inceleyin ve düzenleyin
8. Commit/push ayarlarınıza göre otomatik olarak gerçekleştirilir

### Commit Formatları

Eklenti birden fazla commit mesaj formatını destekler:

1. **Conventional Commits** (varsayılan)
2. **Angular**
3. **Karma**
4. **Semantic**
5. **Emoji**
6. **Conventional-Emoji**

Her format kendi tip ve kurallarına sahiptir. Küçük değişiklikler için sadece başlık satırı, karmaşık değişiklikler için madde işaretli detaylı açıklama oluşturulur.

### Modeller & Endpoint'ler

Kullanılabilir ücretsiz modeller:

- `gemini-1.0-pro`: Temel model, genel kullanım için uygun
- `gemini-1.5-pro`: Daha iyi anlama yeteneğine sahip geliştirilmiş versiyon
- `gemini-1.5-flash`: Hız için optimize edilmiş (varsayılan)
- `gemini-2.0-flash-exp`: En son iyileştirmelere sahip deneysel model

---

Eklenti, OpenAI uyumlu API endpoint'lerini destekler. Bu sayede:

- OpenAI API'yi doğrudan kullanabilirsiniz
- OpenAI uyumlu API'ye sahip kendi LLM'lerinizi kullanabilirsiniz
- LocalAI, ollama veya diğer OpenAI API proxy'lerine bağlanabilirsiniz

Özel endpoint yapılandırmak için:

1. Ayarlardan "Use Custom Endpoint"i etkinleştirin
2. Endpoint URL'nizi ayarlayın (örn. OpenAI için "https://api.openai.com/v1")
3. Model adınızı ayarlayın (örn. OpenAI için "gpt-3.5-turbo")
4. API anahtarını ayarlamak için Komut Paleti'ni (Ctrl+Shift+P) kullanın

## Topluluk & Destek

### 📢 Güncel Kalın

- [Telegram Kanalı](https://t.me/geminicommit) - Sürüm duyuruları ve güncellemeler
- [Telegram Grubu](https://t.me/gemini_commit) - Topluluk tartışmaları ve destek
