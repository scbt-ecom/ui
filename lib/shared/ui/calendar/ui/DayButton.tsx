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
      'unset-all-apply text-14 z-10 block h-10 w-10 cursor-pointer rounded-sm',
      'hover:bg-color-primary-tr-hover hover:text-color-primary-default',
      'disabled:text-color-disabled hover:shadow-[0px_0px_0px_1px_rgba(0,55,144,1)]',
      className
    )}
  />
)
