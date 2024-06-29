import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      vue: pluginVue,
    },
  },
];
