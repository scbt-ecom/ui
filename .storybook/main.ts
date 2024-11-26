import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
    '@storybook/addon-console',
    '@storybook/addon-viewport'
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true
    }
  },
  docs: {
    autodocs: 'tag'
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          $: resolve(__dirname, '../lib')
        }
      }
    }),
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config
