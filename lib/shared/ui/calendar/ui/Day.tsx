import { type ClassAttributes, type TdHTMLAttributes } from 'react'
import { CalendarDay, type Modifiers } from 'react-day-picker'
import { cn } from '$/shared/utils'

type DayProps = ClassAttributes<HTMLTableCellElement> &
  TdHTMLAttributes<HTMLTableCellElement> & {
    day: CalendarDay
    modifiers: Modifiers
    disabledAfterToday?: boolean
  }

export const Day = ({ className, day, children, disabledAfterToday, ...props }: DayProps) => {
  const today = new Date()
  const isToday = day.isEqualTo(new CalendarDay(today, today))
  const isAfterToday = day.date.getTime() > today.getTime()

  return (
    <td
      {...props}
      className={cn(
        'relative h-10 w-10 rounded-sm hover:z-10',
        'hover:bg-color-primary-tr-hover hover:text-color-primary-default',
        { 'pointer-events-none text-color-tetriary': disabledAfterToday && isAfterToday },
        className
      )}
    >
      {children}
      {isToday && (
        <span
          className={cn(
            'pointer-events-none absolute bottom-2 left-1/2 h-0.5 w-4',
            '-translate-x-1/2 rounded-sm bg-color-primary-default'
          )}
        />
      )}
    </td>
  )
}
