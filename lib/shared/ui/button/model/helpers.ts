import { cva } from 'class-variance-authority'
import { type ButtonConfig } from '../Button'

export const setButtonLoaderIntent = (intent: ButtonConfig['intent']) => {
  switch (intent) {
    case 'ghost':
    case 'secondary':
      return 'secondary'

    case 'primary':
    case 'negative':
      return 'primary'

    default:
      return intent
  }
}

export const buttonPrimitiveSize = {
  sm: 'h-10',
  md: 'h-12',
  lg: 'h-14'
} as const

export const buttonPrimitiveTextFormat = {
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  initial: 'initial'
} as const

export const buttonPrimitiveIntent = {
  primary:
    'bg-color-primary-default text-color-white outline-offset-[3px] hover:bg-color-primary-hover  active:bg-color-primary-hover  focus:bg-color-primary-default focus:outline-primary-focus  disabled:bg-color-primary-disabled',
  secondary:
    'bg-transparent text-color-primary-default border border-solid border-primary-default hover:bg-color-primary-tr-hover active:bg-color-primary-tr-pressed active:border-primary-hover  focus:outline-primary-focus  focus:bg-color-primary-tr-focus disabled:bg-color-blue-grey-200 disabled:text-color-primary-disabled disabled:border-transparent',
  ghost:
    'bg-transparent text-color-primary-default hover:bg-color-primary-tr-hover hover:text-color-primary-hover focus:bg-color-primary-tr-focus focus:outline-primary-focus active:bg-color-primary-tr-pressed active:text-color-primary-hover disabled:text-color-primary-disabled disabled:bg-transparent',
  negative:
    'bg-color-secondary-default text-color-white outline-offset-[3px] hover:bg-color-secondary-hover disabled:bg-color-secondary-disabled active:bg-color-secondary-hover focus:bg-color-secondary-default focus:outline-primary-focus'
} as const

export const buttonConfig = cva(
  'relative flex items-center justify-center gap-4 cursor-pointer rounded-sm w-max px-4 outline-offset-4 outline-transparent outline-2 desk-body-regular-l transition duration-12 active:scale-[0.97] disabled:pointer-events-none',
  {
    variants: {
      intent: buttonPrimitiveIntent,
      size: buttonPrimitiveSize,
      textFormat: buttonPrimitiveTextFormat,
      isFull: {
        true: 'w-full px-4'
      },
      isLoading: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        intent: 'primary',
        isLoading: true,
        class: '!bg-color-primary-default'
      },
      {
        intent: 'secondary',
        isLoading: true,
        class: '!bg-color-transparent  !border-primary-hover'
      },
      {
        intent: 'ghost',
        isLoading: true,
        class: '!bg-color-blue-grey-200'
      },
      {
        intent: 'negative',
        isLoading: true,
        class: '!bg-color-secondary-default'
      }
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      textFormat: 'initial',
      isFull: false
    }
  }
)
