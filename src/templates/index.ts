import { conventionalTemplate } from "./formats/conventional";
import { angularTemplate } from "./formats/angular";
import { karmaTemplate } from "./formats/karma";
import { semanticTemplate } from "./formats/semantic";
import { emojiTemplate } from "./formats/emoji";
import { conventionalEmojiTemplate } from "./formats/conventionalEmoji";

export interface CommitTemplate {
  [key: string]: string;
}

export type CommitFormat =
  | "conventional"
  | "angular"
  | "karma"
  | "semantic"
  | "emoji"
  | "conventionalEmoji";
export type Language = "en" | "ru" | "tr";

const templates: Record<CommitFormat, CommitTemplate> = {
  conventional: conventionalTemplate,
  angular: angularTemplate,
  karma: karmaTemplate,
  semantic: semanticTemplate,
  emoji: emojiTemplate,
  conventionalEmoji: conventionalEmojiTemplate,
};

export function getTemplate(format: CommitFormat, language: Language): string {
  return templates[format][language] || templates.conventional.en;
}
