import reactNative from "eslint-plugin-react-native";
import reactPlugin from "eslint-plugin-react";
import { fixupPluginRules } from "@eslint/compat";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    plugins: { reactPlugin, "react-native": fixupPluginRules(reactNative) },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
