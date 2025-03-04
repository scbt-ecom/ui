import { type ClassAttributes, type HTMLAttributes, useState } from 'react'
import { type CalendarMonth, useDayPicker } from 'react-day-picker'
import { defaultSelectOptions, getMonthsFrom, getYearsFrom, type SelectOptions } from './model'
import { Navigation } from './Navigation'
import { SelectDate } from './selectDate'
import { cn } from '$/shared/utils'

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
  const [selectOpen, setSelectOpen] = useState<'month' | 'year' | null>(null)
  const onSelectOpenChange = (key: typeof selectOpen) => {
    setSelectOpen((prev) => (prev === key ? null : key))
  }

  const { goToMonth } = useDayPicker()

  const month = selectOptions && selectOptions.month !== undefined ? selectOptions.month : defaultSelectOptions.month
  const year = selectOptions && selectOptions.year !== undefined ? selectOptions.year : defaultSelectOptions.year

  return (
    <div
      {...props}
      className={cn('relative mb-2 flex h-fit items-center justify-between border-b-[1px] border-warm-grey-200 pb-2', className)}
    >
      <div className='flex content-center justify-center'>
        {month && (
          <SelectDate
            dates={getMonthsFrom(month.startFrom, month.order)}
            currentMonth={calendarMonth}
            onMonthChange={goToMonth}
            mode='month'
            disabled={month?.disabled}
            open={selectOpen === 'month'}
            onOpenChange={() => onSelectOpenChange('month')}
          />
        )}
        {year && (
          <SelectDate
            dates={getYearsFrom(year.startFrom, year.order)}
            currentMonth={calendarMonth}
            onMonthChange={goToMonth}
            mode='year'
            disabled={year?.disabled}
            open={selectOpen === 'year'}
            onOpenChange={() => onSelectOpenChange('year')}
          />
        )}
      </div>
      <Navigation />
    </div>
  )
}
