import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { relative, sep } from 'path'
import { findIcon } from './findIcon'

export const generateFileAssets = (staticPath: string, outputDir: string) => {
  const icons: Record<string, string[]> = {}
  const iconsFlatten: string[] = []

  findIcon(staticPath, /\.svg/, (filename) => {
    const [root, icon] = relative(staticPath, filename).split(sep)
    // TODO: допилить для вложенных директорий

    if (!icons[root]) {
      icons[root] = []
    }

    const iconName = `${root}/${icon.split('.')[0]}`

    icons[root].push(iconName)
    iconsFlatten.push(iconName)
  })

  const generic = '<T extends keyof typeof allowedIcons.group>'
  const content = `
export type AllowedIcons = (typeof allowedIcons.flatten)[number]

export type AllowedIconsGroup${generic} = (typeof allowedIcons.group)[T][number]

export const allowedIcons = {
  group: ${JSON.stringify(icons, null, 2)},
  flatten: ${JSON.stringify(iconsFlatten, null, 2)}
} as const
  `
  writeFileSync(`${outputDir}/allowedIcons.ts`, content.trim(), 'utf-8')
  // format generated file using prettier
  execSync(`prettier --write ${outputDir}/allowedIcons.ts`)
}
