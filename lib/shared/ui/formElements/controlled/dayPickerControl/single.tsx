'use client'

import { useEffect, useRef, useState } from 'react'
import { format, isValid, parse } from 'date-fns'
import { type ExternalHandlers } from './dayPickerControl'
import { getCurrentDate, getInitialValue, SINGLE_MASK, SINGLE_VALIDATION_REGEX } from './model'
import { useClickOutside } from '$/shared/hooks'
import { Calendar, DATE_VISIBLE_PATTERN, Icon, type MaskInputProps, Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>

type SingleDayPickerClasses = MaskInputProps['classes'] & {
  calendar?: string
}

type SingleDayPickerProps = Omit<CalendarProps, 'mode'> & {
  /**
   * Свойства Input компонента
   */
  inputProps: Omit<MaskInputProps, 'mask'>
  /**
   * Стили внутренних компонентов
   */
  classes?: SingleDayPickerClasses
  /**
   * Управляемое значение
   */
  value: string
  /**
   * Функция для управления значением
   */
  onChange: (value: string) => void
  /**
   * Дополнительные хендлеры
   */
  externalHandlers?: ExternalHandlers
}

export const SingleDayPicker = ({ inputProps, classes, value, onChange, externalHandlers, ...props }: SingleDayPickerProps) => {
  const { onChange: externalOnChange, onFocus: externalOnFocus, ...restHandlers } = externalHandlers || {}

  const containerRef = useRef<HTMLDivElement>(null)
  const { calendar, ...restClasses } = classes || {}

  const [calendarOpen, setCalendarOpen] = useState<boolean>(false)
  const onCalendarOpenChange = () => {
    setCalendarOpen((prev) => !prev)
  }

  const [month, setMonth] = useState<Date>(new Date())
  const date = getCurrentDate('single', value)

  const [visibleValue, setVisibleValue] = useState<string>(getInitialValue('single', value))

  useEffect(() => {
    setVisibleValue(getInitialValue('single', value))
  }, [value])

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
      const isoDate = date.toISOString()

      onChange(isoDate)
      setMonth(date)

      if (externalOnChange) externalOnChange(isoDate)
    }
  }

  const onDateChange = (newDate: Date) => {
    setMonth(newDate)

    const isoDate = newDate.toISOString()

    onChange(isoDate)
    setVisibleValue(format(newDate, DATE_VISIBLE_PATTERN))
    setCalendarOpen(false)

    if (externalOnChange) externalOnChange(isoDate)
  }

  return (
    <div ref={containerRef} className={cn('relative w-full', classes?.container)}>
      <Uncontrolled.MaskInput
        mask={SINGLE_MASK}
        {...inputProps}
        {...restHandlers}
        classes={restClasses}
        value={visibleValue}
        onChange={onVisibleValueChange}
        onFocus={(event) => {
          setCalendarOpen(true)
          if (externalOnFocus) externalOnFocus(event)
        }}
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
