/* eslint-disable import/no-default-export */
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        all: false
      },
      include: ['src/test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      exclude: [
        '**/node_modules/**',
        'lib/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*'
      ]
    }
  })
)
