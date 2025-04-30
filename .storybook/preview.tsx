import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.css';
import { SiteThemeProvider } from '../src/features/site-theme/providers';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        responsive: {
          name: 'Responsive',
          styles: {
            width: '100%',
            height: '100%',
          },
        },
        xs: {
          name: 'Extra Small',
          styles: {
            width: '375px',
            height: '100%',
          },
        },
        sm: {
          name: 'Small',
          styles: {
            width: '640px',
            height: '100%',
          },
        },
        md: {
          name: 'Medium',
          styles: {
            width: '768px',
            height: '100%',
          },
        },
        lg: {
          name: 'Large',
          styles: {
            width: '1024px',
            height: '100%',
          },
        },
        xl: {
          name: 'Extra Large',
          styles: {
            width: '1280px',
            height: '100%',
          },
        },
      },
      defaultViewport: 'responsive',
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    (Story) => (
      <SiteThemeProvider>
        <div
          style={{
            color: 'var(--colors-text)',
            backgroundColor: 'var(--colors-base)',
          }}
        >
          <Story />
        </div>
      </SiteThemeProvider>
    ),
  ],
};

export default preview;
