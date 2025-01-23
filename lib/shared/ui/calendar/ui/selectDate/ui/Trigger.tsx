import { type ButtonHTMLAttributes } from 'react'
import { formatDateToMonthString, formatDateToYearString } from '../../../model'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type TriggerProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  currentDate: Date
  mode: 'year' | 'month'
  open: boolean
  onOpenChange: () => void
}

export const Trigger = ({ currentDate, mode, className, open, onOpenChange, ...props }: TriggerProps) => {
  const title = mode === 'year' ? formatDateToYearString(currentDate) : formatDateToMonthString(currentDate)

  return (
    <button
      {...props}
      type='button'
      onClick={onOpenChange}
      className={cn(
        'mob-body-medium-m flex h-10 items-center gap-1 rounded-sm px-2',
        'text-color-tetriary hover:bg-color-primary-tr-hover capitalize',
        'disabled:text-color-disabled disabled:pointer-events-none',
        { 'text-color-primary-default': open },
        className
      )}
    >
      {title}
      <Icon name='arrows/arrowRight' className={cn('size-4 rotate-90', { '-rotate-90': open })} />
    </button>
  )
}
