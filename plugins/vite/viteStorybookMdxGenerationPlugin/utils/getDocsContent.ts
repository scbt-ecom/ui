import { render } from 'ejs'
import { mdxTemplate } from './templates'

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

  return render(mdxTemplate, { component, filepath, stories })
}
