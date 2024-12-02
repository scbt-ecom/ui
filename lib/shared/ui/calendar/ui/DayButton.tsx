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
    className={cn('unset-all-apply block h-10 w-10 cursor-pointer text-14 disabled:text-color-disabled', className)}
  />
)
