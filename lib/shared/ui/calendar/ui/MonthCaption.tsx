import { type ClassAttributes, type HTMLAttributes } from 'react'
import { type CalendarMonth, useDayPicker } from 'react-day-picker'
import { defaultSelectOptions, getMonthsFrom, getYearsFrom } from './model'
import { Navigation } from './Navigation'
import { SelectDate } from './selectDate'
import { cn } from '$/shared/utils'

export type SelectOptions = {
  year?:
    | {
        disabled?: boolean
        startFrom?: number
        order?: 'asc' | 'desc'
      }
    | false
  month?:
    | {
        disabled?: boolean
        startFrom?: number
        order?: 'asc' | 'desc'
      }
    | false
}

type MonthCaptionProps = ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    calendarMonth: CalendarMonth
    displayIndex: number
    selectOptions?: SelectOptions | false
  }

export const MonthCaption = ({
  calendarMonth,
  // disable this rules cuz we do need this prop
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,unused-imports/no-unused-vars
  displayIndex,
  className,
  selectOptions,
  ...props
}: MonthCaptionProps) => {
  const { goToMonth } = useDayPicker()

  const month = selectOptions ? selectOptions.month : defaultSelectOptions.month
  const year = selectOptions ? selectOptions.year : defaultSelectOptions.year

  return (
    <div
      {...props}
      className={cn('mb-2 flex h-fit items-center justify-between border-b-[1px] border-warm-grey-200 pb-2', className)}
    >
      <div className='flex content-center justify-center'>
        {month && (
          <SelectDate
            dates={getMonthsFrom({ startFrom: month.startFrom, order: month.order })}
            currentMonth={calendarMonth}
            onMonthChange={goToMonth}
            mode='month'
            disabled={month?.disabled}
          />
        )}
        {year && (
          <SelectDate
            dates={getYearsFrom({ startFrom: year.startFrom, order: year.order })}
            currentMonth={calendarMonth}
            onMonthChange={goToMonth}
            mode='year'
            disabled={year?.disabled}
          />
        )}
      </div>
      <Navigation />
    </div>
  )
}
