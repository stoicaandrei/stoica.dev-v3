import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    if (!config.resolve) return config;
    if (!config.resolve.alias) config.resolve.alias = [];

    config.resolve.alias['@/components/atoms'] = path.resolve(__dirname, '../src/components/atoms');
    config.resolve.alias['@/components/molecules'] = path.resolve(__dirname, '../src/components/molecules');
    config.resolve.alias['@/components/organisms'] = path.resolve(__dirname, '../src/components/organisms');
    config.resolve.alias['@/components/templates'] = path.resolve(__dirname, '../src/components/templates');
    config.resolve.alias['@/images'] = path.resolve(__dirname, '../src/images');
    config.resolve.alias['@/utils'] = path.resolve(__dirname, '../src/utils');

    return config;
  }
};
export default config;
