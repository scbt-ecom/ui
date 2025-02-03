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
} from '../shared/constants'

export const tailwindConfigBase: Omit<Config, 'content'> = {
  theme: {
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
      bgGradientDeg: allowedBackgroundDeg,
      width: {
        'popper-content': 'var(--radix-popover-content-available-width)',
        'popper-trigger': 'var(--radix-popover-trigger-width)',
        'autocomplete-input': 'var(--input-width)',
        'select-trigger': 'var(--button-width)'
      },
      transitionDuration: {
        DEFAULT: '0.3s',
        12: '0.12s',
        15: '0.15s',
        2: '2s'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      keyframes: {
        'scale-in': {
          from: { opacity: '0', scale: '0' },
          to: { opacity: '1', scale: '1' }
        },
        'progress-loader': {
          '100%': {
            backgroundPosition: '100% 100%'
          }
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        },
        shine: {
          to: {
            'background-position-x': '-200%'
          }
        }
      },
      animation: {
        'scale-in': 'scale-in 0.3s ease-in-out',
        'progress-loader': 'progress-loader 250s linear infinite',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  plugins: [
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
