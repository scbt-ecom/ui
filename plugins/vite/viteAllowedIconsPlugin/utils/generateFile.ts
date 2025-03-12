import { writeFileSync } from 'fs'
import { relative, sep } from 'path'
import { findIcon } from './findIcon'

export const generateFile = (staticPath: string, outputDir: string) => {
  const icons: Record<string, string[]> = {}
  const iconsFlatten: string[] = []

  findIcon(staticPath, (filename) => {
    const [root, icon] = relative(staticPath, filename).split(sep)

    if (!icons[root]) {
      icons[root] = []
    }

    const iconName = `${root}/${icon.split('.')[0]}`

    icons[root].push(iconName)
    iconsFlatten.push(iconName)
  })

  const content = `
import type { AllowedIcons } from '$/shared/ui/icon'

export const allowedIcons: {
  group: Record<string, AllowedIcons[]>,
  flatten: AllowedIcons[]
} = {
  group: ${JSON.stringify(icons, null, 2)},
  flatten: ${JSON.stringify(iconsFlatten, null, 2)}
}
  `

  writeFileSync(`${outputDir}/allowedIcons.ts`, content.trim(), 'utf-8')
}
