import { type DetailedHTMLProps, type ThHTMLAttributes } from 'react'
import { weekdays } from './model'
import { cn } from '$/shared/utils'

type WeekdayProps = DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>

export const Weekday = ({ className, children, ...props }: WeekdayProps) => {
  const isWeekend = weekdays[children as keyof typeof weekdays]

  return (
    <td
      {...props}
      className={cn('h-10 w-10 p-0 text-14 font-medium capitalize', { 'text-color-negative': isWeekend }, className)}
    >
      {children}
    </td>
  )
}
