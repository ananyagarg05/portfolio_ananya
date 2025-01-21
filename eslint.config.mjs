import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend "next/core-web-vitals" and add rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "react/no-unescaped-entities": "off", // Disables warnings for unescaped entities
      "@typescript-eslint/quotes": "off", // Disables the quotes rule for TypeScript
      quotes: [
        "off",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ], // Ensures valid usage
      "no-useless-escape": "off", // Disables errors for unnecessary escape sequences
    },
  },
];

export default eslintConfig;
