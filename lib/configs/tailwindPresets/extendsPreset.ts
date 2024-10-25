import type { Config } from 'tailwindcss'

export const extendsPreset: Omit<Config, 'content'> = {
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '0.3s',
        12: '0.12s',
        15: '0.15s',
        2: '2s',
        333: '333s'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' }
        },
        'scale-in': {
          from: { opacity: '0', scale: '0' },
          to: { opacity: '1', scale: '1' }
        },
        'progress-loader': {
          '100%': {
            backgroundPosition: '100% 100%'
          }
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
        'scale-in': 'scale-in 0.3s ease-in-out',
        'progress-loader': 'progress-loader 250s linear infinite'
      }
    }
  }
}
