import { type ComponentProps, forwardRef, type ReactElement } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { buttonConfig, setButtonLoaderIntent } from './model/helpers'
import { Loader } from '$/shared/ui/loader'
import { cn } from '$/shared/utils'

export type ButtonConfig = VariantProps<typeof buttonConfig>
export interface ButtonProps extends ComponentProps<'button'>, ButtonConfig {
  iconLeft?: ReactElement
  iconRight?: ReactElement
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
        <>
          {iconLeft && <span className='flex size-5 items-center justify-center'>{iconLeft}</span>}
          {isLoading ? (
            <>
              {children} <Loader size='sm' intent={setButtonLoaderIntent(intent)} />
            </>
          ) : (
            children
          )}
          {iconRight && <span className='flex size-5 items-center justify-center'>{iconRight}</span>}
        </>
      </button>
    )
  }
)
