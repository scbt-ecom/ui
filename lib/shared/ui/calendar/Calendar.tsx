import { type DetailedHTMLProps, type HTMLAttributes, type JSX, useMemo } from 'react'
import { type ClassNames, DayPicker, type DayPickerProps } from 'react-day-picker'
import { ru } from 'date-fns/locale'
import 'react-day-picker/style.css'
import { defaultClassNames } from './model'
import { Day, DayButton, Footer, Navigation, Weekday } from './ui'
import { cn } from '$/shared/utils'

type CalendarProps = DayPickerProps & {
  navigation?: boolean
  renderFooter?: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element | string
}

export const Calendar = ({ classNames, showOutsideDays = true, navigation = true, renderFooter, ...props }: CalendarProps) => {
  const cls = useMemo<Partial<ClassNames>>(
    () => ({
      today: cn(defaultClassNames.today, classNames?.today),
      outside: cn(defaultClassNames.outside, classNames?.outside),
      selected: cn(defaultClassNames.selected, classNames?.selected),
      range_start: cn(defaultClassNames.range_outer, classNames?.range_start),
      range_middle: cn(defaultClassNames.range_middle, classNames?.range_middle),
      range_end: cn(defaultClassNames.range_outer, classNames?.range_end),
      ...classNames
    }),
    [classNames]
  )

  return (
    <div className='flex flex-col gap-y-2 rounded-sm border-[1px] border-warm-grey-200 p-4 shadow-[0_16px_24px_0px_rgba(0,33,87,0.16)]'>
      <DayPicker
        {...props}
        captionLayout='dropdown'
        showOutsideDays={showOutsideDays}
        locale={ru}
        classNames={cls}
        components={{
          Day: (props) => <Day className='' {...props} />,
          DayButton: (props) => <DayButton {...props} />,
          Weekday: (props) => <Weekday {...props} />,
          Nav: (props) => (navigation ? <Navigation {...props} /> : <></>)
          // MonthCaption: () => (navigation ? <></> : <></>)
        }}
      />
      {renderFooter && <Footer render={renderFooter} />}
    </div>
  )
}
