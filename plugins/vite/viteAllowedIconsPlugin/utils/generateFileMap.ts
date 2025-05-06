import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { relative, sep } from 'path'
import { capitalize } from '../../../../lib/shared/utils/capitalize'
import { findIcon } from './findIcon'

export const generateFileMap = (staticPath: string, outputDir: string) => {
  const components: [string, string][] = []

  findIcon(staticPath, /\.svg/, (filepath) => {
    const [root, icon] = relative(staticPath, filepath).split(sep)

    const filename = icon.split('.')[0]

    components.push([`${root}/${filename}`, capitalize(filename)])
  })

  const imports = components
    .map(([key, value]) => {
      return `import ${value} from '../../../../static/${key}.svg?react'`.replace(sep, '/')
    })
    .join('\n')

  const content = `
${imports}

export const iconsMap = {
${components.map(([key, value]) => `'${key}': ${value}`).join(',\n')}
}
  `

  writeFileSync(`${outputDir}/iconsMap.ts`, content.trim(), 'utf-8')

  execSync(`prettier --write ${outputDir}/iconsMap.ts`)
}
