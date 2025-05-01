import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { css } from 'styled-system/css';
import { SiteThemeProvider } from '@/features/site-theme/providers';

import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Prefecture Information Graph',
  description:
    '日本の都道府県の人口構成をグラフで可視化するWebアプリケーション',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} ${css({
          color: 'text',
          backgroundColor: 'base',
        })}`}
      >
        <NuqsAdapter>
          <SiteThemeProvider>{children}</SiteThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
