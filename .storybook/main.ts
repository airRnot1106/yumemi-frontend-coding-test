import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ['../public'],
  viteFinal(config) {
    config.plugins?.push(tsconfigPaths());
    config.plugins?.push(
      svgr({
        include: /\.svg$/,
      }),
    );
    config.plugins = config.plugins?.flat().map((plugin) => {
      if (
        typeof plugin === 'object' &&
        plugin !== null &&
        'name' in plugin &&
        plugin.name === 'vite-plugin-storybook-nextjs-image'
      ) {
        return {
          ...plugin,
          resolveId(id, importer) {
            if (id.endsWith('.svg')) {
              return null;
            }
            // @ts-expect-error `resolveId` hook of vite-plugin-storybook-nextjs-image is a function
            return plugin.resolveId(id, importer);
          },
        };
      }
      return plugin;
    });
    return config;
  },
};
export default config;
