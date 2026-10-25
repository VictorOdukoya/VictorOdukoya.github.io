import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'docs/**', 'node_modules/**', '.astro/**', 'coverage/**'] },
  { ...js.configs.recommended, files: ['src/**/*.mjs', 'scripts/**/*.mjs', 'tests/**/*.mjs'], languageOptions: { globals: globals.node } },
  ...astro.configs.recommended,
];
