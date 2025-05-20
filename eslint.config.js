import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: ['js', 'prettier'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
  {
    'env': {
      'browser': true,
      'es2021': true,
    },
  },
]);
