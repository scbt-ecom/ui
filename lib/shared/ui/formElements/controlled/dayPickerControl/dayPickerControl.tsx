'use client'

import { memo, useState } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion'
import { SingleDayPicker } from './single'
import { type Calendar, type MaskInputProps } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'

type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>
type DayPickerControlClasses = MaskInputProps['classes'] & {
  message?: string
}

export type DayPickerControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'> & {
    control: Control<TFieldValues>
    inputProps: Omit<MaskInputProps, 'mask'>
    textHint?: string
    classes?: DayPickerControlClasses
  }

const InnerComponent = <T extends FieldValues = FieldValues>({
  control,
  name,
  disabled,
  rules,
  shouldUnregister,
  defaultValue,
  inputProps,
  textHint,
  classes,
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
  const { message, ...restClasses } = classes || {}

  const [month, setMonth] = useState<Date>(new Date())

  return (
    <AnimatePresence mode='sync'>
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
        text={error?.message || textHint}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </AnimatePresence>
  )
}

export const DayPickerControl = memo(InnerComponent) as typeof InnerComponent
