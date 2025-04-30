import { useContext } from 'react';
import { shouldNeverHappen } from '@/utils/panic-helper';
import { type ISiteThemeContext, SiteThemeContext } from './contexts';

export const useSiteTheme = (): ISiteThemeContext => {
  const context =
    useContext(SiteThemeContext) ??
    shouldNeverHappen('useSiteTheme must be used within a SiteThemeProvider');
  return context;
};
