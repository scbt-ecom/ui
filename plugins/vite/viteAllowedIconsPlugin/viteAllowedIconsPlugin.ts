import path from 'path'
import process from 'process'
import type { Plugin } from 'vite'
import { Logger } from '../utils'
import { generateFileAssets, generateFileMap } from './utils'

const STATIC_DIR = 'static'
const OUTPUT_DIR = 'lib/shared/ui/icon'

type AllowedIconsPluginOptions = {
  inputPath?: string
  outputPath?: string
}

export const viteAllowedIconsPlugin = (options?: AllowedIconsPluginOptions): Plugin => {
  const { inputPath = STATIC_DIR, outputPath = OUTPUT_DIR } = options || {}

  const staticDir = path.join(process.cwd(), inputPath)
  const outputDir = path.join(process.cwd(), outputPath)

  const logger = new Logger('vite-allowed-icons-plugin')

  return {
    name: 'vite-allowed-icons-plugin',
    enforce: 'pre',
    configureServer: (server) => {
      server.watcher.on('ready', () => {
        logger.info('Generate allowed icons')

        generateFileAssets(staticDir, outputDir)
        generateFileMap(staticDir, outputDir)
      })

      server.watcher.on('all', (event, filePath) => {
        if (['add', 'change', 'unlink'].includes(event) && filePath.endsWith('.svg')) {
          logger.info(`SVG file ${event}: ${filePath}`)

          generateFileAssets(staticDir, outputDir)
          generateFileMap(staticDir, outputDir)
        }
      })
    },
    buildStart: () => {
      logger.info('Generate allowed icons for build')

      generateFileAssets(staticDir, outputDir)
      generateFileMap(staticDir, outputDir)
    }
  }
}
