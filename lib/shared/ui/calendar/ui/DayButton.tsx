import { type ButtonHTMLAttributes, type ClassAttributes } from 'react'
import { type CalendarDay, type Modifiers } from 'react-day-picker'
import { cn } from '$/shared/utils'

type DayButtonProps = ClassAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    day: CalendarDay
    modifiers: Modifiers
  }

export const DayButton = ({ className, ...props }: DayButtonProps) => (
  <button
    {...props}
    className={cn(
      'mob-body-medium-m h-full w-full',
      'unset-all-apply z-10 block h-10 w-10 cursor-pointer rounded-sm text-14',
      'hover:bg-color-primary-tr-hover hover:text-color-primary-default',
      'hover:shadow-[0px_0px_0px_1px_rgba(0,55,144,1)] disabled:text-color-disabled',
      className
    )}
  />
)
