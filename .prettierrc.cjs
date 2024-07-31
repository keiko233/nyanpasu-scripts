/** @type {import("prettier").Config} */
module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  tabWidth: 2,
  trailingComma: "all",
  overrides: [
    {
      files: ["tsconfig.json", "jsconfig.json"],
      options: {
        parser: "jsonc",
      },
    },
  ],
  importOrder: [
    "^@/(.*)$",
    "^@(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
  ],
};
