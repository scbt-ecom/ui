// Тут через алиасы конвиги тайлвинда не импортируй, иначе не будет работать
import { tailwindConfigBase } from './lib/configs'
import type { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [tailwindConfigBase],
  theme: {
    extend: {
      screens: {
        mobile: { max: '1187px' },
        desktop: '1188px'
      }
    }
  }
}

export default tailwindConfig
