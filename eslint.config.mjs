import reactNative from "eslint-plugin-react-native";
import reactPlugin from "eslint-plugin-react";
import { fixupPluginRules } from "@eslint/compat";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginJest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";

export default defineConfig([
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    ...testingLibrary.configs["flat/marko"],
    plugins: {
      reactPlugin,
      "react-native": fixupPluginRules(reactNative),
      jest: pluginJest,
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
]);
