'use client'

import { useRef, useState } from 'react'
import { type DateRange } from 'react-day-picker'
import { format, isValid, parse } from 'date-fns'
import { getCurrentDate, getInitialValue, RANGE_MASK, SINGLE_VALIDATION_REGEX } from './model'
import { useClickOutside } from '$/shared/hooks'
import { Calendar, DATE_VISIBLE_PATTERN, Icon, type MaskInputProps, Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>

type RangeDayPickerClasses = MaskInputProps['classes'] & {
  calendar?: string
}

type IsoDateRange = {
  from?: string
  to?: string
}

type RangeDayPickerProps = Omit<CalendarProps, 'mode'> & {
  /**
   * Свойства Input компонента
   */
  inputProps: Omit<MaskInputProps, 'mask'>
  /**
   * Стили внутренних компонентов
   */
  classes?: RangeDayPickerClasses
  /**
   * Управляемое значение
   */
  value: IsoDateRange
  /**
   * Функция для управления значением
   */
  onChange: (value: IsoDateRange) => void
}

export const RangeDayPicker = ({ inputProps, classes, value, onChange, ...props }: RangeDayPickerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { calendar, ...restClasses } = classes || {}

  const [calendarOpen, setCalendarOpen] = useState<boolean>(false)
  const onCalendarOpenChange = () => {
    setCalendarOpen((prev) => !prev)
  }

  const [month, setMonth] = useState<Date>(new Date())
  const date = getCurrentDate('range', value)

  const [visibleValue, setVisibleValue] = useState<string>(getInitialValue('range', value))

  useClickOutside(containerRef, () => setCalendarOpen(false))

  const onVisibleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setVisibleValue(value)

    if (!value.length) {
      return onChange({
        from: '',
        to: ''
      })
    }

    const isoDateRange = value.split('-')

    if (isoDateRange.some((date) => !SINGLE_VALIDATION_REGEX.test(date))) {
      return
    }

    const dateRangeEntries = [
      ['from', parse(isoDateRange[0], DATE_VISIBLE_PATTERN, new Date())],
      ['to', parse(isoDateRange[1], DATE_VISIBLE_PATTERN, new Date())]
    ] as [string, Date][]

    if (dateRangeEntries.every(([, date]) => isValid(date))) {
      const dateRange = Object.fromEntries(dateRangeEntries.map(([key, value]) => [key, value.toISOString()]))

      onChange(dateRange)
      setMonth(dateRangeEntries[Math.round(Math.random())][1])
    }
  }

  const onDateChange = (newDate: DateRange) => {
    setMonth(newDate.from || newDate.to || new Date())

    const isoDateRange = Object.entries(newDate).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value ? value.toISOString() : ''
      }),
      {} as IsoDateRange
    )

    onChange(isoDateRange)
    setVisibleValue(
      `${format(isoDateRange.from || '', DATE_VISIBLE_PATTERN)}-${format(isoDateRange.to || '', DATE_VISIBLE_PATTERN)}`
    )

    if (newDate.from && newDate.to) {
      setCalendarOpen(false)
    }
  }

  return (
    <div ref={containerRef} className='relative w-[600px]'>
      <Uncontrolled.MaskInput
        mask={RANGE_MASK}
        {...inputProps}
        classes={restClasses}
        value={visibleValue}
        onChange={onVisibleValueChange}
        onFocus={() => setCalendarOpen(true)}
        attachmentProps={{
          icon: <Icon name='general/calendar' className='text-icon-blue-grey-600' />,
          onClickIcon: onCalendarOpenChange
        }}
      />
      {calendarOpen && (
        <Calendar
          {...props}
          required
          mode='range'
          month={month}
          onMonthChange={setMonth}
          selected={date}
          onSelect={onDateChange}
          className={cn('absolute right-0 top-full', calendar)}
        />
      )}
    </div>
  )
}
