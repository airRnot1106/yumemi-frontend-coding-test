import { shouldNeverHappen } from '@/utils/panic-helper';
import { useContext } from 'react';
import { type IThemeContext, ThemeContext } from './context';

export const useTheme = (): IThemeContext => {
  const context =
    useContext(ThemeContext) ??
    shouldNeverHappen('useTheme must be used within a ThemeProvider');
  return context;
};
