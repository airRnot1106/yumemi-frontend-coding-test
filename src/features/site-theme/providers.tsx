'use client';

import { type FC, type ReactNode, useLayoutEffect, useState } from 'react';
import { SiteThemeContext } from './contexts';
import { SiteTheme } from './types';

export type SiteThemeProviderProps = {
  children: ReactNode;
};

export const SiteThemeProvider: FC<SiteThemeProviderProps> = ({ children }) => {
  const [siteTheme, setSiteTheme] = useState<SiteTheme>('system');

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', siteTheme);
  }, [siteTheme]);

  return (
    <SiteThemeContext value={{ siteTheme, setSiteTheme }}>
      {children}
    </SiteThemeContext>
  );
};
