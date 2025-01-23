import { forwardRef } from 'react'
import { Root, type SwitchProps, Thumb } from '@radix-ui/react-switch'
import { cn } from '$/shared/utils'

type SwitchBaseClasses = {
  root?: string
  thumb?: string
}

type ExternalHandlers = {
  onChange?: (value: boolean) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
}

export type SwitchBaseProps = SwitchProps & {
  classes?: SwitchBaseClasses
  externalHandlers?: ExternalHandlers
}

export const SwitchBase = forwardRef<HTMLButtonElement, SwitchBaseProps>(
  ({ classes, className, disabled, externalHandlers, onCheckedChange, ...props }, ref) => {
    const { onChange: externalOnChange, ...restHandlers } = externalHandlers || {}

    const onChange = (value: boolean) => {
      if (onCheckedChange) onCheckedChange(value)
      if (externalOnChange) externalOnChange(value)
    }

    return (
      <Root
        {...props}
        {...restHandlers}
        ref={ref}
        onCheckedChange={onChange}
        disabled={disabled}
        className={cn(
          'bg-color-blue-grey-300 h-6 w-10 rounded-full p-[2px] outline-2',
          'focus:outline-primary-focus outline-offset-4 outline-transparent',
          'group hover:bg-color-blue-grey-500 transition-all',
          'data-[state=checked]:bg-color-primary-default',
          'hover:data-[state=checked]:bg-color-primary-hover',
          { 'data-[state=checked]:bg-color-primary-disabled! data-[state=unchecked]:bg-color-blue-grey-200!': disabled },
          className,
          classes?.root
        )}
      >
        <Thumb
          className={cn(
            'bg-color-white block size-5 rounded-full',
            'duration-100 will-change-transform',
            'data-[state=checked]:translate-x-4',
            'group-active:w-full group-active:data-[state=checked]:translate-x-0',
            classes?.thumb
          )}
        />
      </Root>
    )
  }
)
SwitchBase.displayName = 'SwitchBase'
