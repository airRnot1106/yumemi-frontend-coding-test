'use client';

import { createContext } from 'react';
import type { SiteTheme } from './types';

export interface ISiteThemeContext {
  siteTheme: SiteTheme;
  setSiteTheme: (siteTheme: SiteTheme) => void;
}

export const SiteThemeContext = createContext<ISiteThemeContext | undefined>(
  undefined,
);
