import { writeFileSync } from 'fs'
import { relative } from 'path'
import { findIcon } from './findIcon'

export const generateFile = (staticPath: string, outputDir: string) => {
  const icons: string[] = []

  findIcon(staticPath, (filename) => {
    const [root, icon] = relative(staticPath, filename).split('\\')

    icons.push(`${root}/${icon.split('.')[0]}`)
  })

  const content = `
import type { AllowedIcons } from '$/shared/ui/icon'

export const allowedIcons: AllowedIcons[] = ${JSON.stringify(icons, null, 2)}
  `

  writeFileSync(`${outputDir}/allowedIcons.ts`, content.trim(), 'utf-8')
}
