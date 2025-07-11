import { type DetailedHTMLProps, forwardRef, type HTMLAttributes, type JSX, useMemo } from 'react'
import { type ClassNames, DayPicker, type DayPickerProps } from 'react-day-picker'
import { ru } from 'date-fns/locale'
import 'react-day-picker/style.css'
import { defaultClassNames } from './model'
import { Day, DayButton, Footer, MonthCaption, type SelectOptions, Weekday } from './ui'
import { cn } from '$/shared/utils'

type CalendarProps = DayPickerProps & {
  navigation?: boolean
  renderFooter?: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element | string
  selectOptions?: SelectOptions
  disabledAfterToday?: boolean
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      classNames,
      showOutsideDays = true,
      navigation = true,
      renderFooter,
      selectOptions,
      className,
      disabledAfterToday,
      style,
      ...props
    },
    ref
  ) => {
    const cls = useMemo<Partial<ClassNames>>(
      () => ({
        today: cn(defaultClassNames.today, classNames?.today),
        outside: cn(defaultClassNames.outside, classNames?.outside),
        selected: cn(defaultClassNames.selected, classNames?.selected),
        range_start: cn(defaultClassNames.range_outer, classNames?.range_start),
        range_middle: cn(defaultClassNames.range_middle, classNames?.range_middle),
        range_end: cn(defaultClassNames.range_outer, classNames?.range_end),
        month_grid: 'h-[280px]',
        day: cn(defaultClassNames.day, classNames?.day),
        ...classNames
      }),
      [classNames]
    )

    const startYear =
      selectOptions?.year && 'startFrom' in selectOptions.year && selectOptions.year.startFrom
        ? new Date(selectOptions.year.startFrom, 0)
        : undefined

    return (
      <div
        ref={ref}
        style={style}
        className={cn(
          'relative flex flex-col gap-y-1 rounded-sm border-[1px] border-warm-grey-200',
          'bg-color-white p-4 shadow-[0_16px_24px_0px_rgba(0,33,87,0.16)]',
          className
        )}
      >
        <DayPicker
          {...props}
          fixedWeeks
          captionLayout='dropdown'
          showOutsideDays={showOutsideDays}
          locale={ru}
          classNames={cls}
          startMonth={startYear}
          components={{
            Day: (props) => <Day {...props} disabledAfterToday={disabledAfterToday} />,
            DayButton: (props) => <DayButton {...props} />,
            Weekday: (props) => <Weekday {...props} />,
            Nav: () => <></>,
            MonthCaption: (props) => (navigation ? <MonthCaption {...props} selectOptions={selectOptions} /> : <></>)
          }}
        />
        {renderFooter && <Footer render={renderFooter} />}
      </div>
    )
  }
)
Calendar.displayName = 'Calendar'
