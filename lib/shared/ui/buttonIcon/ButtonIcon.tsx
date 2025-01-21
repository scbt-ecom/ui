import { type ComponentProps, forwardRef, type ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '$/shared/utils'

type ButtonClasses = {
  button: string
  icon: string
}

const buttonConfig = cva(
  'group flex items-center justify-center cursor-pointer rounded-full outline-offset-[3px] outline-transparent outline-2 transition duration-12 active:scale-[0.97] disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary:
          'text-icon-white bg-color-primary-default hover:bg-color-primary-hover active:bg-color-primary-hover focus:bg-color-primary-hover focus:outline-primary-focus disabled:bg-color-primary-disabled',
        secondary:
          'text-icon-primary-default bg-color-transparent border border-solid outline-offset-4 border-primary-default hover:bg-color-primary-tr-hover hover:text-icon-primary-default hover:border-primary-hover  active:bg-color-primary-tr-pressed active:border-primary-hover active:text-icon-primary-hover focus:bg-color-primary-tr-focus focus:outline-primary-focus disabled:bg-color-blue-grey-200 disabled:border-transparent disabled:text-icon-primary-disabled',
        ghost:
          'text-icon-primary-default bg-color-transparent hover:bg-color-primary-tr-hover focus:bg-color-primary-tr-focus focus:outline-primary-focus active:text-icon-primary-hover active:bg-color-primary-tr-pressed disabled:bg-color-transparent disabled:text-icon-primary-disabled'
      },
      size: {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12'
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'lg'
    }
  }
)

type ButtonProps = VariantProps<typeof buttonConfig>

export interface IButtonIconProps extends Omit<ComponentProps<'button'>, 'className'>, ButtonProps {
  children: ReactElement
  classes?: Partial<ButtonClasses>
}

export const ButtonIcon = forwardRef<HTMLButtonElement, IButtonIconProps>(
  ({ size, intent, children, classes, type = 'button', ...props }, ref) => {
    return (
      <button ref={ref} type={type} className={cn(buttonConfig({ intent, size }), classes?.button)} {...props}>
        <span className={cn(classes?.icon)}>{children}</span>
      </button>
    )
  }
)
