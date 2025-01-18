import * as vscode from "vscode";
import { Logger } from "../utils/logger";
import { ConfigService } from "../utils/configService";

export class SettingsValidator {
  static async validateAllSettings(): Promise<void> {
    await this.validateAutoPushState();
    await this.validateCustomEndpoint();
    await this.validateCustomInstructions();
    await this.validateRefsWithAutoCommit();
  }

  static async validateAutoPushState(): Promise<void> {
    const isAutoPushEnabled = ConfigService.getAutoPushEnabled();
    const isAutoCommitEnabled = ConfigService.getAutoCommitEnabled();

    if (isAutoPushEnabled && !isAutoCommitEnabled) {
      const selection = await vscode.window.showWarningMessage(
        "Auto Push requires Auto Commit to be enabled. Choose an action:",
        "Enable Auto Commit",
        "Disable Auto Push",
        "Open Settings"
      );

      if (selection === "Enable Auto Commit") {
        const config = vscode.workspace.getConfiguration("geminiCommit");
        await config.update("commit.autoCommit", true, true);
        void Logger.log("Auto Commit has been enabled");
      } else if (selection === "Disable Auto Push") {
        const config = vscode.workspace.getConfiguration("geminiCommit");
        await config.update("commit.autoPush", false, true);
        void Logger.log("Auto Push has been disabled");
      } else if (selection === "Open Settings") {
        void vscode.commands.executeCommand(
          "workbench.action.openSettings",
          "geminiCommit.commit"
        );
      }
    }
  }

  static async validateCustomEndpoint(): Promise<void> {
    const useCustomEndpoint = ConfigService.useCustomEndpoint();
    const endpoint = ConfigService.getCustomEndpoint();
    const model = ConfigService.getCustomModel();

    if (useCustomEndpoint && (!endpoint || !model)) {
      const selection = await vscode.window.showWarningMessage(
        "Custom Endpoint requires both URL and model name. Configure now?",
        "Configure",
        "Disable Custom Endpoint",
        "Open Settings"
      );

      if (selection === "Configure") {
        void vscode.commands.executeCommand(
          "workbench.action.openSettings",
          "geminiCommit.custom.endpoint"
        );
      } else if (selection === "Disable Custom Endpoint") {
        const config = vscode.workspace.getConfiguration("geminiCommit");
        await config.update("custom.useCustomEndpoint", false, true);
        void Logger.log("Custom Endpoint has been disabled");
      } else if (selection === "Open Settings") {
        void vscode.commands.executeCommand(
          "workbench.action.openSettings",
          "geminiCommit.custom"
        );
      }
    }
  }

  static async validateCustomInstructions(): Promise<void> {
    const useCustomInstructions = ConfigService.useCustomInstructions();
    const instructions = ConfigService.getCustomInstructions();

    if (useCustomInstructions && !instructions.trim()) {
      const selection = await vscode.window.showWarningMessage(
        "Custom Instructions are enabled but empty. What would you like to do?",
        "Add Instructions",
        "Disable Custom Instructions",
        "Open Settings"
      );

      if (selection === "Add Instructions") {
        void vscode.commands.executeCommand(
          "workbench.action.openSettings",
          "geminiCommit.commit.customInstructions"
        );
      } else if (selection === "Disable Custom Instructions") {
        const config = vscode.workspace.getConfiguration("geminiCommit");
        await config.update("commit.useCustomInstructions", false, true);
        void Logger.log("Custom Instructions have been disabled");
      } else if (selection === "Open Settings") {
        void vscode.commands.executeCommand(
          "workbench.action.openSettings",
          "geminiCommit.commit"
        );
      }
    }
  }

  static async validateRefsWithAutoCommit(): Promise<void> {
    const autoCommitEnabled = ConfigService.getAutoCommitEnabled();
    const promptForRefs = ConfigService.shouldPromptForRefs();

    if (autoCommitEnabled && promptForRefs) {
      const selection = await vscode.window.showWarningMessage(
        "Prompting for refs may interrupt the automatic commit flow. Choose an action:",
        "Disable Refs Prompt",
        "Disable Auto Commit",
        "Keep Both"
      );

      if (selection === "Disable Refs Prompt") {
        const config = vscode.workspace.getConfiguration("geminiCommit");
        await config.update("commit.promptForRefs", false, true);
        void Logger.log("Refs prompt has been disabled");
      } else if (selection === "Disable Auto Commit") {
        const config = vscode.workspace.getConfiguration("geminiCommit");
        await config.update("commit.autoCommit", false, true);
        void Logger.log("Auto Commit has been disabled");
      } else if (selection === "Keep Both") {
        void Logger.log(
          "User chose to keep both Auto Commit and Refs prompt enabled"
        );
      }
    }
  }
}
