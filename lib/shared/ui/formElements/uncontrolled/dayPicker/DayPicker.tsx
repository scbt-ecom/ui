import { forwardRef, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { format, isValid, parse } from 'date-fns'
import { AnimatePresence } from 'framer-motion'
import { type InputBaseClasses } from '../input/Input'
import { useClickOutside } from '$/shared/hooks'
import { Calendar, DATE_VISIBLE_PATTERN, Icon, MaskInput, type MaskInputProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

type ExternalHandlers = {
  onChange?: (value: string) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export type DayPickerClasses = {
  root?: string
  input?: InputBaseClasses
}

export type DayPickerProps = Omit<MaskInputProps, 'value' | 'onChange' | 'mask' | 'classes'> & {
  /**
   * Указывает, открыт ли календарь по умолчанию
   */
  defaultOpen?: boolean
  /**
   * Значение поля
   */
  value?: string
  /**
   * Функция изменения значения
   */
  onChange?: (value: string) => void
  /**
   * Внешние классы которыми можно поменять стили
   */
  classes?: DayPickerClasses
  /**
   * Дополнительные хендлеры
   */
  externalHandlers?: ExternalHandlers
}

export const DayPickerBase = forwardRef<HTMLInputElement, DayPickerProps>(
  ({ defaultOpen = false, value, onChange, disabled, externalHandlers, classes, ...props }, ref) => {
    const { onChange: externalOnChange, onFocus: externalOnFocus, ...restHandlers } = externalHandlers || {}

    const containerRef = useRef<HTMLDivElement>(null)

    const [calendarOpen, setCalendarOpen] = useState<boolean>(defaultOpen)
    const onCalendarOpenChange = () => {
      setCalendarOpen((prev) => !prev)
    }

    const [month, setMonth] = useState<Date>(new Date())
    const [visibleValue, setVisibleValue] = useState<string>(format(new Date(), DATE_VISIBLE_PATTERN))

    useClickOutside(containerRef, () => setCalendarOpen(false))

    const date = value ? new Date(value) : new Date()

    const onValueChange = (value: string) => {
      setVisibleValue(value)

      const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/

      if (!dateRegex.test(value)) {
        return
      }

      const parsedDate = parse(value, DATE_VISIBLE_PATTERN, new Date())

      if (isValid(parsedDate)) {
        const isoDate = parsedDate.toISOString()

        if (onChange) onChange(isoDate)
        if (externalOnChange) externalOnChange(isoDate)
        setMonth(parsedDate)
      }
    }

    const onDateChange = (date: Date) => {
      setMonth(date)

      const isoDate = date.toISOString()

      if (onChange) onChange(isoDate)
      if (externalOnChange) externalOnChange(isoDate)

      setVisibleValue(format(date, DATE_VISIBLE_PATTERN))
      setCalendarOpen(false)
    }

    const { root, input } = classes || {}

    return (
      <div ref={containerRef} className={cn('relative w-full', root)}>
        <AnimatePresence mode='sync'>
          <MaskInput
            ref={ref}
            {...props}
            {...restHandlers}
            disabled={disabled}
            mask='##.##.####'
            classes={input}
            value={visibleValue}
            onChange={(event) => onValueChange(event.target.value)}
            autoComplete='off'
            onFocus={(event) => {
              setCalendarOpen(true)
              if (externalOnFocus) externalOnFocus(event)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                onCalendarOpenChange()
              }
            }}
            attachmentProps={{
              ...props.attachmentProps,
              icon: (
                <Icon name='general/calendar' className={cn('text-icon-blue-grey-600', { 'text-icon-disabled': disabled })} />
              ),
              onClickIcon: onCalendarOpenChange,
              disabled
            }}
          />
          {calendarOpen &&
            createPortal(
              <Calendar
                required
                mode='single'
                month={month}
                onMonthChange={setMonth}
                selected={date}
                onSelect={onDateChange}
                className='absolute right-0 top-full'
              />,
              document.body
            )}
        </AnimatePresence>
      </div>
    )
  }
)
DayPickerBase.displayName = 'DayPickerBase'
