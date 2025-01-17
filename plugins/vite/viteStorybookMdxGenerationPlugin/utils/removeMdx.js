import { lstatSync, readdirSync, rmSync } from 'fs'
import { join } from 'path'

const findMdx = (dir, callback) => {
  const files = readdirSync(dir)

  files.forEach((file) => {
    const filepath = join(dir, file)
    const stats = lstatSync(filepath)

    if (stats.isFile() && file.match(/\.docs\.(mdx)$/)) {
      callback(filepath)
    } else if (stats.isDirectory()) {
      findMdx(filepath, callback)
    }
  })
}

export const removeMdx = (dir) => {
  const dirname = Array.isArray(dir) ? dir.join('/') : dir

  findMdx(dirname, (filepath) => {
    rmSync(filepath)
  })
}

removeMdx(['src', 'stories'])
