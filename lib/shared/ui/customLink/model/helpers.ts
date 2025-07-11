import { cva } from 'class-variance-authority'

export const linkPrimitiveIntent = {
  blue: 'text-color-primary-default hover:text-color-primary-hover  focus-visible:text-color-primary-default focus-visible:border-primary-focus',
  white: 'text-color-white hover:text-color-footer focus-visible:text-color-white  focus-visible:border-primary-focus',
  dark: 'text-color-dark group-focus:text-icon-dark-default focus-visible:border-primary-focus'
} as const

export const linkPrimitiveSize = {
  sm: 'desk-body-regular-m',
  md: 'desk-body-regular-l'
} as const

export const linkPrimitiveIconIntent = {
  blue: 'text-icon-primary-default group-hover:text-icon-primary-hover group-focus:text-icon-primary-default ',
  white: 'text-icon-white group-hover:text-icon-footer group-focus:text-icon-white',
  dark: 'text-icon-dark-default'
} as const

export const customLinkConfig = cva(
  'group outline-none flex items-center gap-1 transition-all duration-100 p-[2px] rounded-sm border border-solid border-transparent hover:underline underline-offset-4',
  {
    variants: {
      intent: linkPrimitiveIntent,
      withUnderline: {
        true: 'underline underline-offset-4',
        false: ''
      },
      disabled: {
        true: '!text-color-primary-disabled pointer-events-none !border-transparent',
        false: ''
      },
      size: linkPrimitiveSize
    },
    defaultVariants: {
      intent: 'blue',
      disabled: false,
      size: 'sm',
      withUnderline: false
    }
  }
)

export const linkIconConfig = cva('size-6', {
  variants: {
    intent: linkPrimitiveIconIntent,
    disabled: {
      true: '!text-icon-primary-disabled pointer-events-none',
      false: ''
    }
  },
  defaultVariants: {
    intent: 'blue',
    disabled: false
  }
})
