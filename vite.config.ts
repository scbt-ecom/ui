import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import typeChecker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import { dependencies, peerDependencies } from './package.json'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svgr from 'vite-plugin-svgr'
import { viteAllowedIconsPlugin } from './plugins'
import { bundleStats } from 'rollup-plugin-bundle-stats'

const deps = [...Object.keys(dependencies ?? {}), ...Object.keys(peerDependencies ?? {})]

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteAllowedIconsPlugin(),
    dts({ include: ['lib'], insertTypesEntry: true }),
    typeChecker({ typescript: true }),
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
        resolve(__dirname, './lib/exports/config.ts'),
        resolve(__dirname, './lib/exports/constants.ts'),
        resolve(__dirname, './lib/exports/next.ts'),
        resolve(__dirname, './lib/exports/editor.ts')
      ],
      formats: ['es'],
      fileName: (_, name) => {
        return `${name}.js`
      }
    },
    minify: true,
    rollupOptions: {
      external: deps,

      output: {
        // assetFileNames: 'assets/[name].[hash][extname]',
        // chunkFileNames: 'assets/[name].[hash].js',
        // entryFileNames: 'assets/[name].[hash].js',
        preserveModules: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'class-variance-authority': 'classVarianceAuthority'
        },
        plugins: [
          bundleStats({
            html: true
          })
        ]
      },
      onwarn(warning, defaultHandler) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return
        }
        if (warning.message.includes('dynamic import will not move module into another chunk.')) {
          return
        }
        defaultHandler(warning)
      }
    },
    chunkSizeWarningLimit: 2000
  }
})
