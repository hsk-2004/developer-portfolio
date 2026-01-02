import js from "@eslint/js";
import next from "eslint-config-next";

export default [
  // Ignore build artifacts
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "out/**",
      "coverage/**",
    ],
  },

  js.configs.recommended,

  // React / Next frontend
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // Browser
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        fetch: "readonly",

        // Timers
        setTimeout: "readonly",
        clearTimeout: "readonly",
        queueMicrotask: "readonly",

        // Web APIs
        AbortController: "readonly",
      },
    },
    rules: {
      ...next.rules,

      // 👇 IMPORTANT: practical rules
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },

  // Node / config / API routes
  {
    files: [
      "app/api/**/*.js",
      "*.config.js",
      "next.config.js",
      "postcss.config.js",
      "tailwind.config.js",
    ],
    languageOptions: {
      globals: {
        process: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
];
