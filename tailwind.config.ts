// Тут через алиасы конвиги тайлвинда не импортируй, иначе не будет работать
import { extendsPreset, primaryPreset } from './lib/configs'
import type { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [extendsPreset, primaryPreset]
}

export default tailwindConfig
