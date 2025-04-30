import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'src/**/index.{js,jsx,ts,tsx}',
      ],
      reporter: ['text', 'json', 'html'],
    },
  },
});
