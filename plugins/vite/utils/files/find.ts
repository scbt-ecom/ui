import { lstatSync, readdirSync } from 'fs'
import { join } from 'path'

export const find = (dir: string, matching: RegExp, callback: (filepath: string) => void) => {
  const stack = [dir]

  while (stack.length) {
    const currentDir = stack.pop()

    if (currentDir) {
      const files = readdirSync(currentDir)

      for (const file of files) {
        const filepath = join(currentDir, file)
        const stats = lstatSync(filepath)

        if (stats.isFile() && file.match(matching)) {
          callback(filepath)
        } else if (stats.isDirectory()) {
          stack.push(filepath)
        }
      }
    }
  }
}
