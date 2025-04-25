//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['tailwind.config.js'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', { semi: true, singleQuote: true }],
      semi: ['error', 'always'],
    },
  },
  prettier,
  ...tanstackConfig,
];
