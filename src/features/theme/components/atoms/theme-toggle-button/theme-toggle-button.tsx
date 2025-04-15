'use client';

import { useTheme } from '@/features/theme';
import { Moon, Sun } from 'lucide-react';
import type { ChangeEventHandler, FC } from 'react';
import { cx, sva } from 'styled-system/css';

export type ThemeToggleButtonProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

const createThemeToggleButtonStyle = sva({
  slots: ['root', 'input', 'light', 'dark'],
  base: {
    root: {
      display: 'inline-grid',
      placeContent: 'center',
      position: 'relative',
      cursor: 'pointer',
      border: '1px solid',
      borderColor: 'muted/20',
      borderRadius: 'md',
      transitionProperty: 'color, background-color, border-color, box-shadow',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      _hover: {
        backgroundColor: 'color-mix(in oklab, var(--colors-base), #000 7%)',
      },
      '& > *': {
        gridRow: 1,
        gridColumn: 1,
      },
      '--size-base': '0.25rem',
    },
    input: {
      WebkitAppearance: 'none',
      appearance: 'none',
      border: 'none',
    },
    light: {
      transition: 'transform 0.4s ease, opacity 0.4s ease',
      opacity: 0,
      transform: 'rotate(-45deg) scale(0.8)',
      "&[aria-checked='true']": {
        opacity: 1,
        transform: 'rotate(0deg) scale(1)',
      },
    },
    dark: {
      transition: 'transform 0.4s ease, opacity 0.4s ease',
      opacity: 0,
      transform: 'rotate(45deg) scale(0.8)',
      "&[aria-checked='true']": {
        opacity: 1,
        transform: 'rotate(0deg) scale(1)',
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          height: 'calc(var(--size-base) * 6)',
          paddingInline: '0.5rem',
          '& > *': {
            // width: '1.5rem',
            // height: '1.5rem',
          },
        },
      },
      sm: {
        root: {
          height: 'calc(var(--size-base) * 8)',
          paddingInline: '1rem',
          '& > *': {
            // width: '2rem',
            // height: '2rem',
          },
        },
      },
      md: {
        root: {
          height: 'calc(var(--size-base) * 10)',
          paddingInline: '1.5rem',
          '& > *': {
            width: '2rem',
            height: '2rem',
          },
        },
      },
      lg: {
        root: {
          height: 'calc(var(--size-base) * 12)',
          paddingInline: '2rem',
          '& > *': {
            width: '2.5rem',
            height: '2.5rem',
          },
        },
      },
      xl: {
        root: {
          height: 'calc(var(--size-base) * 14)',
          paddingInline: '2.5rem',
          '& > *': {
            width: '3rem',
            height: '3rem',
          },
        },
      },
    },
  },
});

export const ThemeToggleButton: FC<ThemeToggleButtonProps> = ({
  size = 'md',
  className,
  ...rest
}) => {
  const { theme, setTheme } = useTheme();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked;
    setTheme(checked ? 'light' : 'dark');
  };

  const { root, input, light, dark } = createThemeToggleButtonStyle({ size });

  return (
    <label {...rest} className={cx(root, className)}>
      <input type="checkbox" className={input} onChange={handleChange} />
      <Sun
        aria-checked={theme === 'light' || theme === 'system'}
        className={light}
      />
      <Moon aria-checked={theme === 'dark'} className={dark} />
    </label>
  );
};
