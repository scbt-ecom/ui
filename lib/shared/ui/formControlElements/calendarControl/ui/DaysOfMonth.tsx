import { format, getDay, isSameMonth, isToday } from 'date-fns'
import { colStartClasses } from '../model/helpers'
import { type TDaysOfMonthClasses } from '../model/types'
import { cn } from '$/shared/utils'

interface IDaysOfMonthProps {
  daysList: Date[]
  selectedDay: number
  firstDayOfMonth: Date
  onSelectDay: (day: Date) => void
  classes?: Partial<TDaysOfMonthClasses>
}

export const DaysOfMonth = ({ daysList, firstDayOfMonth, selectedDay, onSelectDay, classes }: IDaysOfMonthProps) => {
  return (
    <div className={cn('grid grid-cols-7 place-items-center', classes?.monthWrapper)}>
      {daysList?.map((day, idx) => {
        const isCurrentMonth = isSameMonth(day, firstDayOfMonth)

        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            role='button'
            tabIndex={0}
            onKeyDown={() => onSelectDay(day)}
            onClick={() => onSelectDay(day)}
            className={cn(
              'flex size-10 cursor-pointer items-center justify-center',
              colStartClasses[getDay(+day - 1)],
              classes?.button
            )}
          >
            <span
              className={cn(
                'mob-body-regular-m flex h-full w-full items-center justify-center rounded-sm border border-solid border-transparent text-color-dark transition-colors hover:border-primary-default hover:bg-color-primary-tr-hover',
                {
                  'before:content-[" "] relative text-color-primary-default before:absolute before:bottom-1 before:left-1/2 before:h-[2px] before:w-4 before:-translate-x-1/2 before:rounded-[2px] before:bg-icon-primary-default':
                    isToday(day),
                  '!bg-color-primary-default !text-color-white': selectedDay === +format(day, 'dd') && isCurrentMonth,
                  'text-color-disabled': !isCurrentMonth
                },
                classes?.day
              )}
            >
              {format(day, 'd')}
            </span>
          </div>
        )
      })}
    </div>
  )
}
