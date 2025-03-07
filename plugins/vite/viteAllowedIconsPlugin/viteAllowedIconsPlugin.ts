import path from 'path'
import process from 'process'
import type { Plugin } from 'vite'
import { Logger } from '../utils'
import { generateFile } from './utils'

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

        generateFile(staticDir, outputDir)
      })

      server.watcher.on('change', (path) => {
        if (path.match(staticDir)) {
          logger.info('Static file changed')

          generateFile(staticDir, outputDir)
        }
      })
    },
    buildStart: () => {
      logger.info('Generate allowed icons for build')

      generateFile(staticDir, outputDir)
    }
  }
}
