'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { autoUpdate, flip, offset, useFloating } from '@floating-ui/react'
import { format, isValid, parse } from 'date-fns'
import { type ExternalHandlers } from './dayPickerControl'
import { getCurrentDate, getInitialValue, SINGLE_MASK, SINGLE_VALIDATION_REGEX } from './model'
import { useClickOutside } from '$/shared/hooks'
import { Calendar, DATE_VISIBLE_PATTERN, Icon, type MaskInputProps, Uncontrolled } from '$/shared/ui'
import { cn, mergeRefs, TypeGuards } from '$/shared/utils'

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

export const SingleDayPicker = ({
  inputProps,
  classes,
  value,
  onChange,
  externalHandlers,
  month,
  onMonthChange,
  ...props
}: SingleDayPickerProps) => {
  const { onChange: externalOnChange, onFocus: externalOnFocus, ...restHandlers } = externalHandlers || {}

  const calendarRef = useRef<HTMLDivElement>(null)

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-end',
    middleware: [
      flip({
        boundary: 'clippingAncestors',
        crossAxis: false
      }),
      offset(0)
    ],
    whileElementsMounted: autoUpdate
  })

  const { calendar, ...restClasses } = classes || {}

  const [calendarOpen, setCalendarOpen] = useState<boolean>(false)

  const onCalendarOpenChange = () => {
    setCalendarOpen((prev) => !prev)
  }

  const date = getCurrentDate('single', value)

  const [visibleValue, setVisibleValue] = useState<string>(getInitialValue('single', value))

  useEffect(() => {
    if (value && !TypeGuards.isStringEmpty(value)) {
      setVisibleValue(getInitialValue('single', value))
      if (onMonthChange) onMonthChange(new Date(value))
    }
  }, [value])

  useClickOutside(calendarRef, () => setCalendarOpen(false))

  const onVisibleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setVisibleValue(value)

    if (TypeGuards.isStringEmpty(value)) {
      return onChange('')
    }

    if (!SINGLE_VALIDATION_REGEX.test(value)) {
      return
    }

    const date = parse(value, DATE_VISIBLE_PATTERN, new Date())

    if (isValid(date)) {
      const isoDate = date.toISOString()

      onChange(isoDate)
      if (onMonthChange) onMonthChange(date)

      if (externalOnChange) externalOnChange(isoDate)
    }
  }

  const onDateChange = (newDate: Date) => {
    if (onMonthChange) onMonthChange(newDate)

    const isoDate = newDate.toISOString()

    onChange(isoDate)
    setVisibleValue(format(newDate, DATE_VISIBLE_PATTERN))
    setCalendarOpen(false)

    if (externalOnChange) externalOnChange(isoDate)
  }

  return (
    <div ref={refs.setReference} className={cn('relative w-full', classes?.container)}>
      <Uncontrolled.MaskInput
        mask={SINGLE_MASK}
        {...inputProps}
        {...restHandlers}
        classes={restClasses}
        value={visibleValue}
        onChange={onVisibleValueChange}
        autoComplete='off'
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
          disabled: inputProps.disabled,
          icon: <Icon name='general/calendar' className='text-icon-blue-grey-600' />,
          onClickIcon: onCalendarOpenChange,
          ...inputProps.attachmentProps
        }}
      />
      {calendarOpen &&
        createPortal(
          <Calendar
            // @ts-expect-error asdf
            ref={mergeRefs(calendarRef, refs.setFloating)}
            {...props}
            required
            mode='single'
            style={{
              ...floatingStyles,
              width: 'max-content'
            }}
            month={month}
            onMonthChange={onMonthChange}
            selected={date}
            onSelect={onDateChange}
            className={cn(calendar)}
            data-test-id='calendar'
          />,
          document.body
        )}
    </div>
  )
}
