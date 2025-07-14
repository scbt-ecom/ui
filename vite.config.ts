import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { cwd } from 'process'
import { defineConfig } from 'vite'
import glob from 'fast-glob'
import typeChecker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import { peerDependecies, devDependencies } from './package.json'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svgr from 'vite-plugin-svgr'
import { viteAllowedIconsPlugin } from './plugins'
import { visualizer } from 'rollup-plugin-visualizer'

const entries = await glob('lib/**/*.{ts,tsx,css}')

export default defineConfig({
  esbuild: {
    jsx: 'automatic'
  },
  plugins: [
    react(),
    svgr(),
    viteAllowedIconsPlugin(),
    dts({ include: ['lib'], outDir: resolve(cwd(), 'dist/types') }),
    typeChecker({ typescript: true }),
    viteStaticCopy({
      targets: [
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
    minify: true,
    rollupOptions: {
      plugins: [
        visualizer({
          sourcemap: true,
          gzipSize: true,
          brotliSize: true,
          emitFile: true,
          open: true
        }),
        {
          name: '@rollup-plugin/remove-empty-chunks',
          generateBundle(_, bundle) {
            for (const [name, chunk] of Object.entries(bundle)) {
              if (chunk.type === 'chunk' && chunk.code.length === 0) {
                delete bundle[name]
              }
            }
          }
        }
      ],
      external: [
        ...Object.keys(devDependencies),
        ...Object.keys(peerDependecies),
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@headlessui/react'
      ],
      onwarn(warning, defaultHandler) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return
        }
        defaultHandler(warning)
      },
      input: entries,
      preserveEntrySignatures: 'strict',
      output: {
        format: 'es',
        exports: 'named',
        entryFileNames: '[name].js',
        dir: resolve(cwd(), 'dist'),
        assetFileNames: ({ name }) => {
          if (name && /\.(css)$/.test(name)) {
            return '[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
        preserveModules: true,
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
