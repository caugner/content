import fs from "node:fs/promises";
import path from "node:path";
import prettier from "prettier";
import { fileURLToPath } from "url";

const DEFAULT_LOCALE = "en-US";
const ACTIVE_LOCALES = [
  "en-US",
  "es",
  "fr",
  "ja",
  "ko",
  "pt-BR",
  "ru",
  "zh-CN",
  "zh-TW",
].sort();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsondataPath = path.join(__dirname, "..", "files", "jsondata");

const files = await fs.readdir(jsondataPath);
const l10nFiles = files.filter((file) => /^L10n-.*\.json$/.test(file));

l10nFiles.map(async (file) => {
  const filepath = path.join(jsondataPath, file);
  const inputJson = await fs.readFile(filepath);
  const input = JSON.parse(inputJson);
  const output = {};
  Object.keys(input)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach((key) => {
      const inputMapping = input[key];
      const outputMapping = {};
      for (const locale of ACTIVE_LOCALES) {
        outputMapping[locale] =
          inputMapping[locale] ?? inputMapping[DEFAULT_LOCALE];
      }
      output[key] = outputMapping;
    });
  const outputJson = prettier.format(JSON.stringify(output), {
    parser: "json",
  });
  await fs.writeFile(filepath, outputJson, "utf-8");
});
