import { lstatSync, readdirSync } from 'fs'
import { join } from 'path'

/**
 * Функция для рекурсивного поиска историй
 *
 * @param dir директория для поиска
 * @param callback
 */
export const findStories = (dir: string, callback: (filepath: string) => void) => {
  const files = readdirSync(dir)

  files.forEach((file) => {
    const filepath = join(dir, file)
    const stats = lstatSync(filepath)

    if (stats.isFile() && file.match(/\.stories\.(ts|tsx)$/)) {
      callback(filepath)
    } else if (stats.isDirectory()) {
      findStories(filepath, callback)
    }
  })
}
