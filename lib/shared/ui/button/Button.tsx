import { type ComponentProps, forwardRef, type ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { setButtonLoaderIntent } from './model/helpers'
import { Loader } from '$/shared/ui'
import { cn } from '$/shared/utils'

const buttonConfig = cva(
  'relative flex items-center justify-center gap-4 cursor-pointer rounded-sm w-max px-4 outline-offset-4 outline-transparent outline-2 desk-body-regular-l transition duration-12 active:scale-[0.97] disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary:
          'bg-color-primary-default text-color-white outline-offset-[3px] hover:bg-color-primary-hover  active:bg-color-primary-hover  focus:bg-color-primary-default focus:outline-primary-focus  disabled:bg-color-primary-disabled',
        secondary:
          'bg-transparent text-color-primary-default border border-solid border-primary-default hover:bg-color-primary-tr-hover active:bg-color-primary-tr-pressed active:border-primary-hover  focus:outline-primary-focus  focus:bg-color-primary-tr-focus disabled:bg-color-blue-grey-200 disabled:text-color-primary-disabled disabled:border-transparent',
        ghost:
          'bg-transparent text-color-primary-default hover:bg-color-primary-tr-hover hover:text-color-primary-hover focus:bg-color-primary-tr-focus focus:outline-primary-focus active:bg-color-primary-tr-pressed active:text-color-primary-hover disabled:text-color-primary-disabled disabled:bg-transparent',
        negative:
          'bg-color-secondary-default text-color-white outline-offset-[3px] hover:bg-color-secondary-hover disabled:bg-color-secondary-disabled active:bg-color-secondary-hover focus:bg-color-secondary-default focus:outline-primary-focus'
      },
      size: {
        sm: 'h-10',
        md: 'h-12',
        lg: 'h-14'
      },
      textFormat: {
        capitalize: 'capitalize',
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        initial: 'initial'
      },
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

export type TButtonConfig = VariantProps<typeof buttonConfig>
export interface IButtonProps extends ComponentProps<'button'>, TButtonConfig {
  iconLeft?: ReactElement
  iconRight?: ReactElement
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      intent,
      size,
      className,
      children,
      type = 'button',
      iconLeft,
      iconRight,
      disabled = false,
      isLoading = false,
      isFull = false,
      textFormat,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(buttonConfig({ intent, size, textFormat, isLoading, isFull }), className)}
        {...props}
      >
        {isLoading ? (
          <Loader size='sm' intent={setButtonLoaderIntent(intent)} />
        ) : (
          <>
            {iconLeft && <span className='flex size-5 items-center justify-center'>{iconLeft}</span>}
            {children}
            {iconRight && <span className='flex size-5 items-center justify-center'>{iconRight}</span>}
          </>
        )}
      </button>
    )
  }
)
