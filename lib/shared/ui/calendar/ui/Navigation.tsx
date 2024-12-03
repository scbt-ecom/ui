import { type HTMLAttributes } from 'react'
import { useDayPicker } from 'react-day-picker'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type NavigationProps = HTMLAttributes<HTMLElement>

export const Navigation = ({ className, ...props }: NavigationProps) => {
  const { previousMonth, nextMonth, goToMonth } = useDayPicker()

  const onPreviousClick = () => {
    if (previousMonth) {
      goToMonth(previousMonth)
    }
  }

  const onNextClick = () => {
    if (nextMonth) {
      goToMonth(nextMonth)
    }
  }

  return (
    <nav {...props} className={cn('flex h-fit gap-x-3', className)}>
      <button
        type='button'
        onClick={onPreviousClick}
        disabled={!previousMonth}
        className={cn('rounded-sm', { 'hover:bg-color-primary-tr-hover': previousMonth })}
      >
        <Icon
          name='arrows/arrowRight'
          className={cn('rotate-180 text-icon-blue-grey-800', {
            'text-icon-disabled': !previousMonth
          })}
        />
      </button>
      <button
        type='button'
        onClick={onNextClick}
        disabled={!nextMonth}
        className={cn('rounded-sm', { 'hover:bg-color-primary-tr-hover': nextMonth })}
      >
        <Icon
          name='arrows/arrowRight'
          className={cn('text-icon-blue-grey-800', {
            'text-icon-disabled': !nextMonth
          })}
        />
      </button>
    </nav>
  )
}
