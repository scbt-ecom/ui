import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { cwd } from 'process'
import { type Logger } from '../../utils'
import type { MDXOptions } from '../viteStorybookMdxGenerationPlugin'
import { findStories } from './findStories'
import { getDocsContent } from './getDocsContent'

/**
 * Функция для генерации файлов документации компонентов
 *
 * Функция рекурсивно ищет файлы `*.stories.(ts|tsx)`в корневой
 * директории историй и генерирует на основе каждого файла
 * документацию в формате `.mdx`
 *
 * @param storiesPath корневая директория историй
 * @param options настройки генерации
 * @param logger внутренний логгер
 */
export const generateDocs = (storiesPath: string | string[], options?: MDXOptions, logger?: Logger) => {
  const storiesBaseDir = Array.isArray(storiesPath) ? storiesPath : [storiesPath]

  const storiesDir = join(cwd(), ...storiesBaseDir)

  findStories(storiesDir, (filepath) => {
    const code = readFileSync(filepath).toString()

    const fileUsedForAutoDocs = code.match(/^(?:[\s\n]*)(["']use docs["'];?)/m)

    if (fileUsedForAutoDocs) {
      const component = filepath.match(/([^/\\]+)\.stories\.(ts|tsx)$/)?.[1]

      if (!component) {
        logger?.error('Cannot find component name. Skip.')

        return
      }

      const componentPath = filepath.split(/[\\/]/).slice(0, -1)
      const docFilepath = join(...componentPath, `${component}.docs.mdx`)

      const docContent = getDocsContent(component, filepath.replace(/\\/g, '/'), code, options)

      writeFileSync(docFilepath, docContent.trim(), 'utf-8')
    }
  })
}
