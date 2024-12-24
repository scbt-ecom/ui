'use client'

import { memo, useMemo } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import type { OnChangeValue } from 'react-select'
import { type SelectBaseProps, type SelectItemOption, Uncontrolled } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type SelectControlClasses = SelectBaseProps['classes'] & {
  container?: string
  message?: string
}

type SelectControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  SelectBaseProps & {
    /**
     * Контрол объект для управления полем
     */
    control: Control<TFieldValues>
    /**
     * Дополнительные стили компонента
     */
    classes?: SelectControlClasses
    /**
     * Дополнительный текст
     */
    textHint?: string
  }

function isSingleValue(value: OnChangeValue<SelectItemOption, boolean>): value is SelectItemOption {
  return value !== null && !Array.isArray(value)
}

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  control,
  classes,
  className,
  name,
  rules,
  shouldUnregister,
  disabled,
  defaultValue,
  returnValue,
  options,
  textHint,
  ...props
}: SelectControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    shouldUnregister,
    disabled,
    defaultValue
  })

  const { invalid, error } = fieldState
  const { container, message, ...restClasses } = classes || {}

  const { value, onChange, ...restField } = field

  const onValueChange = (value: OnChangeValue<SelectItemOption, boolean>) => {
    if (Array.isArray(value)) {
      const values = value.map((item) => (returnValue ? returnValue(item) : item.value))
      onChange(values)
    } else if (isSingleValue(value)) {
      onChange(returnValue ? returnValue(value) : value.value)
    }
  }

  const selected = useMemo<OnChangeValue<SelectItemOption, boolean>>(() => {
    if (Array.isArray(value)) {
      return options.filter((option) => value.includes(returnValue ? returnValue(option) : option.value))
    } else {
      return options.find((option) => (returnValue ? returnValue(option) : option.value) === value) || null
    }
  }, [options, returnValue, value])

  return (
    <div className={cn('flex w-full flex-col items-start gap-y-2', container, className)}>
      <Uncontrolled.SelectBase
        {...props}
        {...restField}
        {...restClasses}
        options={options}
        value={selected}
        onChange={onValueChange}
        invalid={invalid}
        isDisabled={disabled}
      />
      <MessageView
        text={error ? error.message : textHint}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}

export const SelectControl = memo(InnerComponent) as typeof InnerComponent
