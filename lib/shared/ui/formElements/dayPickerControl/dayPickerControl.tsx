'use client'

import { memo, useRef, useState } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { format, isValid, parse } from 'date-fns'
import { AnimatePresence } from 'framer-motion'
import { useClickOutside } from '$/shared/hooks'
import { Calendar, DATE_VISIBLE_PATTERN, formatDateToLocaleString, Icon, MaskInput, type MaskInputProps } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'

type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>
type DayPickerControlClasses = MaskInputProps['classes'] & {
  message?: string
}

type DayPickerControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<CalendarProps, 'selected' | 'onSelect'> & {
    control: Control<TFieldValues>
    inputProps: MaskInputProps
    textHint?: string
    classes?: DayPickerControlClasses
  }

const InnerComponent = <T extends FieldValues = FieldValues>({
  control,
  name,
  disabled,
  rules,
  // mode,
  shouldUnregister,
  defaultValue,
  inputProps,
  textHint,
  classes,
  ...props
}: DayPickerControlProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [calendarOpen, setCalendarOpen] = useState<boolean>(false)
  const onCalendarOpenChange = () => {
    setCalendarOpen((prev) => !prev)
  }

  useClickOutside(containerRef, () => setCalendarOpen(false))

  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  const { value, onChange, ...restField } = field
  const { error, invalid } = fieldState
  const { message, ...restClasses } = classes || {}

  const [month, setMonth] = useState<Date>(new Date())
  const date = value ? new Date(value) : new Date()

  const [visibleValue, setVisibleValue] = useState<string>(value ? formatDateToLocaleString(date) : '')

  const onVisibleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setVisibleValue(value)

    const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/

    if (!dateRegex.test(value)) {
      return
    }

    const parsedDate = parse(value, DATE_VISIBLE_PATTERN, new Date())

    if (isValid(parsedDate)) {
      onChange(parsedDate.toISOString())
      setMonth(parsedDate)
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
      <AnimatePresence mode='sync'>
        <MaskInput
          invalid={invalid}
          classes={restClasses}
          value={visibleValue}
          onChange={onVisibleValueChange}
          onFocus={() => setCalendarOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onCalendarOpenChange()
            }
          }}
          {...restField}
          {...inputProps}
          attachmentProps={{
            icon: <Icon name='general/calendar' className='text-icon-blue-grey-600' />,
            onClickIcon: onCalendarOpenChange
          }}
        />
        <MessageView
          text={error?.message || textHint}
          className={message}
          intent={error ? 'error' : 'simple'}
          disabled={disabled}
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
            className='absolute right-0 top-full'
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export const DayPickerControl = memo(InnerComponent) as typeof InnerComponent
