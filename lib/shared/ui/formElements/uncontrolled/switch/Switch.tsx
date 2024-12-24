import { forwardRef } from 'react'
import { Root, type SwitchProps, Thumb } from '@radix-ui/react-switch'
import { cn } from '$/shared/utils'

type SwitchBaseClasses = {
  root?: string
  thumb?: string
}

export type SwitchBaseProps = SwitchProps & {
  classes?: SwitchBaseClasses
}

export const SwitchBase = forwardRef<HTMLButtonElement, SwitchBaseProps>(({ classes, className, disabled, ...props }, ref) => (
  <Root
    {...props}
    ref={ref}
    disabled={disabled}
    className={cn(
      'h-6 w-10 rounded-full bg-color-blue-grey-300 p-[2px] outline-2',
      'outline-offset-4 outline-transparent focus:outline-primary-focus',
      'group transition-all hover:bg-color-blue-grey-500',
      'data-[state=checked]:bg-color-primary-default',
      'hover:data-[state=checked]:bg-color-primary-hover',
      { 'data-[state=checked]:!bg-color-primary-disabled data-[state=unchecked]:!bg-color-blue-grey-200': disabled },
      className,
      classes?.root
    )}
  >
    <Thumb
      className={cn(
        'block size-5 rounded-full bg-color-white',
        'duration-100 will-change-transform',
        'data-[state=checked]:translate-x-4',
        'group-active:w-full data-[state=checked]:group-active:translate-x-0',
        classes?.thumb
      )}
    />
  </Root>
))
SwitchBase.displayName = 'SwitchBase'
