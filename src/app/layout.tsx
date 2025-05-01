import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { css } from 'styled-system/css';
import { SiteThemeProvider } from '@/features/site-theme/providers';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
        className={`${geistSans.variable} ${geistMono.variable} ${css({
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
