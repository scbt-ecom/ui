import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { cwd } from 'process'
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
 */
export const generateDocs = (storiesPath: string | string[]) => {
  const storiesBaseDir = Array.isArray(storiesPath) ? storiesPath : [storiesPath]

  const storiesDir = join(cwd(), ...storiesBaseDir)

  findStories(storiesDir, (filepath) => {
    if (filepath.includes('.stories')) {
      const code = readFileSync(filepath).toString()

      const fileUsedForAutoDocs = code.match(/^(?:[\s\n]*)(["']use docs["'];?)/m)

      if (fileUsedForAutoDocs) {
        const component = filepath.match(/([^/\\]+)\.stories\.(ts|tsx)$/)?.[1]

        if (component) {
          const componentPath = filepath.split(/[\\/]/).slice(0, -1)
          const relativeDocFilepath = join(...componentPath, `${component}.docs.mdx`)

          const docContent = getDocsContent(component, filepath.replace(/\\/g, '/'), code)

          writeFileSync(relativeDocFilepath, docContent.trim(), 'utf-8')
        }
      }
    }
  })
}
