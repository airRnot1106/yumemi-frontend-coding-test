import { cva } from 'styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-grid',
    gridAutoFlow: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    '--size-base': '0.25rem',
    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
    _focusVisible: {
      outlineStyle: 'solid',
      outlineWidth: '2px',
      outlineOffset: '2px',
    },
  },
  variants: {
    size: {
      'fit-content': {
        paddingBlock: '0',
        paddingInline: '0',
      },
      xs: {
        height: 'calc(var(--size-base) * 6)',
        paddingInline: '0.5rem',
      },
      sm: {
        height: 'calc(var(--size-base) * 8)',
        paddingInline: '1rem',
      },
      md: {
        height: 'calc(var(--size-base) * 10)',
        paddingInline: '1.5rem',
      },
      lg: {
        height: 'calc(var(--size-base) * 12)',
        paddingInline: '2rem',
      },
      xl: {
        height: 'calc(var(--size-base) * 14)',
        paddingInline: '2.5rem',
      },
    },
  },
});
