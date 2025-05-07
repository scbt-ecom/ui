import fs from 'fs'
import { join } from 'path'

export const findIcon = (dir: string, matching: RegExp, callback: (filename: string) => void) => {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filepath = join(dir, file)
    const stats = fs.lstatSync(filepath)

    if (stats.isFile() && file.match(matching)) {
      callback(filepath)
    } else if (stats.isDirectory()) {
      findIcon(filepath, matching, callback)
    }
  })
}
