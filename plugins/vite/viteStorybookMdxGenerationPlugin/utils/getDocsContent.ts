/**
 * Функция для генерации контента .mdx файла
 *
 * @param component название компонента для генерации
 * @param filepath путь до файла историй
 * @param code исходный код историй компонента
 *
 * @returns сгенерированный контент в формате .mdx
 */
export const getDocsContent = (component: string, filepath: string, code: string) => {
  const storyRegex = /(?:\/\*\*([\s\S]*?)\*\/\s*)?export const (\w+):\s*Story/g
  const stories: { name: string; description: string }[] = []

  let matches

  while ((matches = storyRegex.exec(code)) !== null) {
    const [, comment, name] = matches
    const description = comment ? comment.replace(/^\s*\*\s?/gm, '').trim() : ''

    if (name !== 'meta' && name !== 'default') {
      stories.push({ name, description })
    }
  }

  const storiesInCanvas = stories
    .map(({ name, description }) =>
      `
## ${component} ${name}

${description}

<Canvas of={${component}Stories.${name}} meta={${component}Stories} />
<Controls of={${component}Stories.${name}} />
`.trim()
    )
    .join('\n\n')

  return `
import { Meta, Canvas, Controls } from "@storybook/blocks";
import * as ${component}Stories from "${filepath}";

# ${component}

<Meta of={${component}Stories} />

${storiesInCanvas}
`
}
