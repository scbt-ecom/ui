import { type ClassAttributes, type TdHTMLAttributes } from 'react'
import { type CalendarDay, type Modifiers } from 'react-day-picker'
import { cn } from '$/shared/utils'

type DayProps = ClassAttributes<HTMLTableCellElement> &
  TdHTMLAttributes<HTMLTableCellElement> & {
    day: CalendarDay
    modifiers: Modifiers
  }

export const Day = ({ className, ...props }: DayProps) => (
  <td
    {...props}
    className={cn('relative h-10 w-10 rounded-sm hover:bg-color-primary-tr-hover hover:text-color-primary-default', className)}
  />
)
