import svg from '@neodx/svg/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import typeChecker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import { dependencies } from './package.json'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svgr from 'vite-plugin-svgr'
// import { viteStorybookMdxGenerationPlugin } from './plugins'
import { viteAllowedIconsPlugin } from './plugins'

export default defineConfig({
  plugins: [
    // viteStorybookMdxGenerationPlugin(),
    react(),
    svgr(),
    viteAllowedIconsPlugin(),
    dts({ include: ['lib'], insertTypesEntry: true }),
    typeChecker({ typescript: true }),
    svg({
      root: 'static',
      group: true,
      output: './public/sprites',
      resetColors: {
        exclude: [/^brandLogos/, /^logos/],
        replaceUnknown: 'currentColor'
      },
      metadata: {
        path: './lib/shared/ui/icon/sprite.gen.ts',
        runtime: {
          size: true,
          viewBox: true
        }
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'lib/shared/utils-tailwind.css',
          dest: '.'
        },
        {
          src: 'static',
          dest: 'static'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      $: resolve(__dirname, './lib')
    }
  },
  build: {
    sourcemap: true,
    copyPublicDir: true,

    lib: {
      entry: [
        resolve(__dirname, './lib/exports/validation.ts'),
        resolve(__dirname, './lib/exports/utils.ts'),
        resolve(__dirname, './lib/exports/hooks.ts'),
        resolve(__dirname, './lib/exports/widget.ts'),
        resolve(__dirname, './lib/exports/ui.ts'),
        resolve(__dirname, './lib/exports/api.ts'),
        resolve(__dirname, './lib/exports/config.ts')
      ],
      formats: ['es'],
      fileName: (_, name) => {
        return `${name}.js`
      }
    },
    minify: true,
    rollupOptions: {
      external: [...Object.keys(dependencies), 'jsdom'],
      onwarn(warning, defaultHandler) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return
        }
        defaultHandler(warning)
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'class-variance-authority': 'classVarianceAuthority'
        }
      }
    },
    chunkSizeWarningLimit: 2000
  }
})
