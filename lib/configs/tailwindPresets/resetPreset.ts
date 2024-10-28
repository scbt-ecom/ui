// Тут через алиасы не импортируй, иначе не будет работать
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import tailwindAnimation from 'tailwindcss-animate'
import {
  allowedBackgroundColors,
  allowedBackgroundDeg,
  allowedBannersBackgroundColors,
  allowedBorderRadius,
  allowedFontSize,
  allowedIconsColors,
  allowedLineHeight,
  allowedStrokeColors,
  allowedTextColors,
  allowedTextStyles
} from '../../shared/constants'

export const resetPreset: Omit<Config, 'content'> = {
  theme: {
    screens: {
      mobile: { max: '1187px' },
      desktop: '1188px'
    },
    backgroundColor: {
      color: allowedBackgroundColors,
      banner: allowedBannersBackgroundColors,
      icon: allowedIconsColors
    },
    textColor: {
      icon: allowedIconsColors,
      color: allowedTextColors
    },
    fill: allowedIconsColors,
    stroke: allowedIconsColors,
    borderColor: allowedStrokeColors,
    outlineColor: allowedStrokeColors,
    borderRadius: allowedBorderRadius,
    fontFamily: { roboto: ['var(--ff-roboto)', 'sans-serif'] },
    fontSize: allowedFontSize,
    lineHeight: allowedLineHeight,
    gradientColorStops: allowedBackgroundColors,
    boxShadow: {
      sm: '0 8px 20px 0 rgba(0, 0, 0, 0.08)',
      md: '0 12px 20px 0 rgba(0, 33, 87, 0.10)',
      lg: '0 16px 24px 0 rgba(0, 33, 87, 0.16)'
    },
    extend: {
      bgGradientDeg: allowedBackgroundDeg
    }
  },
  plugins: [
    // eslint-disable-next-line global-require
    tailwindAnimation,
    plugin(({ addComponents }) => {
      addComponents(allowedTextStyles)
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-deg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`
          })
        },
        {
          values: Object.assign(theme('bgGradientDeg', {}), {})
        }
      )
    })
  ]
}
