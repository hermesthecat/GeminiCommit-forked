import * as vscode from "vscode";
import { Logger } from "./utils/logger";
import { ConfigService } from "./utils/configService";
import { GeminiCommitTreeDataProvider } from "./views/geminiCommitTreeDataProvider";
import { generateAndSetCommitMessage } from "./services/aiService";
import { SettingsValidator } from "./services/settingsValidator";

const EXTENSION_NAME = "GeminiCommit";
const COMMAND_ID = "geminicommit.generateCommitMessage";
const VIEW_ID = "geminiCommitView";

export function activate(context: vscode.ExtensionContext): void {
  Logger.log(`${EXTENSION_NAME} extension is now active!`);

  ConfigService.initialize(context);

  void SettingsValidator.validateAllSettings();

  const generateCommitMessageCommand = vscode.commands.registerCommand(
    COMMAND_ID,
    generateAndSetCommitMessage
  );

  const treeDataProvider = new GeminiCommitTreeDataProvider();
  const treeView = vscode.window.createTreeView(VIEW_ID, { treeDataProvider });

  context.subscriptions.push(generateCommitMessageCommand, treeView);

  void registerApiKeyCommands(context);
}

function registerApiKeyCommands(context: vscode.ExtensionContext): void {
  const setApiKeyCommand = vscode.commands.registerCommand(
    "geminicommit.setApiKey",
    async () => {
      const key = await vscode.window.showInputBox({
        prompt: "Enter your Google API Key",
        ignoreFocusOut: true,
        password: true,
      });
      if (key) {
        await ConfigService.setApiKey(key);
      }
    }
  );

  const setCustomApiKeyCommand = vscode.commands.registerCommand(
    "geminicommit.setCustomApiKey",
    async () => {
      const key = await vscode.window.showInputBox({
        prompt: "Enter your Custom API Key",
        ignoreFocusOut: true,
        password: true,
      });
      if (key) {
        await ConfigService.setCustomApiKey(key);
      }
    }
  );

  context.subscriptions.push(setApiKeyCommand, setCustomApiKeyCommand);
}

export function deactivate(): void {
  Logger.log(`${EXTENSION_NAME} extension is now deactivated.`);
  ConfigService.clearCache();
}
