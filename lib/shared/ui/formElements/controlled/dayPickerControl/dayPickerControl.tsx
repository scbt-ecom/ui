'use client'

import { memo, useState } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { SingleDayPicker } from './single'
import { type Calendar, type MaskInputProps } from '$/shared/ui'
import { FieldContainer, MessageView, type TFieldContainerConfig } from '$/shared/ui/formElements/ui'

type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>
type DayPickerControlClasses = MaskInputProps['classes'] & {
  message?: string
}

export type DayPickerControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'> & {
    /**
     * Контрол объект для управления полем
     */
    control: Control<TFieldValues>
    /**
     * Свойства отображаемого Input поля
     */
    inputProps: Omit<MaskInputProps, 'mask'>
    /**
     * Дополнительный текст
     */
    helperText?: string
    /**
     * Дополнительные стили компонента
     */
    classes?: DayPickerControlClasses
    /**
     * Размер контейнера для поля
     */
    size?: TFieldContainerConfig['size']
  }

const InnerComponent = <T extends FieldValues = FieldValues>({
  control,
  name,
  disabled,
  rules,
  shouldUnregister,
  defaultValue,
  inputProps,
  helperText,
  classes,
  size,
  ...props
}: DayPickerControlProps<T>) => {
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
  const { message, container, ...restClasses } = classes || {}

  const [month, setMonth] = useState<Date>(new Date())

  return (
    <FieldContainer className={container} size={size}>
      <SingleDayPicker
        {...props}
        value={value ?? ''}
        onChange={onChange}
        month={month}
        onMonthChange={setMonth}
        classes={restClasses}
        inputProps={{
          ...inputProps,
          ...restField,
          invalid
        }}
      />
      <MessageView
        text={error?.message || helperText}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </FieldContainer>
  )
}

export const DayPickerControl = memo(InnerComponent) as typeof InnerComponent
