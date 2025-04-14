import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fontSizes: {
          xs: { value: '0.75rem' },
          sm: { value: '0.875rem' },
          md: { value: '1rem' },
          lg: { value: '1.125rem' },
          xl: { value: '1.25rem' },
          '2xl': { value: '1.5rem' },
          '3xl': { value: '1.875rem' },
          '4xl': { value: '2.25rem' },
          '5xl': { value: '3rem' },
          '6xl': { value: '4rem' },
          '7xl': { value: '5rem' },
          '8xl': { value: '6rem' },
        },
        colors: {
          base: { value: 'var(--colors-base)' },
          surface: { value: 'var(--colors-surface)' },
          overlay: { value: 'var(--colors-overlay)' },
          muted: { value: 'var(--colors-muted)' },
          subtle: { value: 'var(--colors-subtle)' },
          text: { value: 'var(--colors-text)' },
          love: { value: 'var(--colors-love)' },
          gold: { value: 'var(--colors-gold)' },
          rose: { value: 'var(--colors-rose)' },
          pine: { value: 'var(--colors-pine)' },
          foam: { value: 'var(--colors-foam)' },
          iris: { value: 'var(--colors-iris)' },
          'highlight-low': { value: 'var(--colors-highlight-low)' },
          'highlight-med': { value: 'var(--colors-highlight-med)' },
          'highlight-high': { value: 'var(--colors-highlight-high)' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
