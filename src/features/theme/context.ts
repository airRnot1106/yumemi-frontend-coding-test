import { createContext } from 'react';
import type { Theme } from './types';

export interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
