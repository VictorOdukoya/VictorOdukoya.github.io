import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.mjs'],
    coverage: {
      provider: 'v8',
      include: ['src/lib/site.mjs'],
      thresholds: { statements: 85, branches: 85, functions: 85, lines: 85 },
    },
  },
});
