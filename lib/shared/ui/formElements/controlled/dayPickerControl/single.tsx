'use client'

import { useRef, useState } from 'react'
import { format, isValid, parse } from 'date-fns'
import { getCurrentDate, getInitialValue, SINGLE_MASK, SINGLE_VALIDATION_REGEX } from './model'
import { useClickOutside } from '$/shared/hooks'
import { Calendar, DATE_VISIBLE_PATTERN, Icon, type MaskInputProps, Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>

type SingleDayPickerClasses = MaskInputProps['classes'] & {
  calendar?: string
}

type SingleDayPickerProps = Omit<CalendarProps, 'mode'> & {
  inputProps: Omit<MaskInputProps, 'mask'>
  classes?: SingleDayPickerClasses
  value: string
  onChange: (value: string) => void
}

export const SingleDayPicker = ({ inputProps, classes, value, onChange, ...props }: SingleDayPickerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { calendar, ...restClasses } = classes || {}

  const [calendarOpen, setCalendarOpen] = useState<boolean>(false)
  const onCalendarOpenChange = () => {
    setCalendarOpen((prev) => !prev)
  }

  const [month, setMonth] = useState<Date>(new Date())
  const date = getCurrentDate('single', value)

  const [visibleValue, setVisibleValue] = useState<string>(getInitialValue('single', value))

  useClickOutside(containerRef, () => setCalendarOpen(false))

  const onVisibleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setVisibleValue(value)

    if (!value.length) {
      return onChange('')
    }

    if (!SINGLE_VALIDATION_REGEX.test(value)) {
      return
    }

    const date = parse(value, DATE_VISIBLE_PATTERN, new Date())

    if (isValid(date)) {
      onChange(date.toISOString())
      setMonth(date)
    }
  }

  const onDateChange = (newDate: Date) => {
    setMonth(newDate)
    onChange(newDate.toISOString())
    setVisibleValue(format(newDate, DATE_VISIBLE_PATTERN))
    setCalendarOpen(false)
  }

  return (
    <div ref={containerRef} className='relative w-[600px]'>
      <Uncontrolled.MaskInput
        mask={SINGLE_MASK}
        {...inputProps}
        classes={restClasses}
        value={visibleValue}
        onChange={onVisibleValueChange}
        onFocus={() => setCalendarOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onCalendarOpenChange()
          }
        }}
        attachmentProps={{
          icon: <Icon name='general/calendar' className='text-icon-blue-grey-600' />,
          onClickIcon: onCalendarOpenChange
        }}
      />
      {calendarOpen && (
        <Calendar
          {...props}
          required
          mode='single'
          month={month}
          onMonthChange={setMonth}
          selected={date}
          onSelect={onDateChange}
          className={cn('absolute right-0 top-full z-10', calendar)}
        />
      )}
    </div>
  )
}
