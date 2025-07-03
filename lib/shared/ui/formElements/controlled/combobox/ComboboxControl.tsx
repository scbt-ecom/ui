import { useMemo } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import {
  type ChangeHandler,
  Combobox,
  type ComboboxClasses,
  type ComboboxItemOption,
  type ComboboxProps,
  type ComboboxValue
} from '../../uncontrolled/combobox'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn, TypeGuards } from '$/shared/utils'

export type ComboboxControlClasses = {
  root?: string
  message?: string
  combobox?: ComboboxClasses
}

export type ComboboxControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  ComboboxProps<false> & {
    control: Control<TFieldValues>
    helperText?: string
    returnValue?: (option: ComboboxItemOption) => string | null
    classes?: ComboboxControlClasses
  }

export const ComboboxControl = <TFieldValues extends FieldValues>({
  control,
  className,
  name,
  rules,
  shouldUnregister,
  disabled,
  defaultValue,
  options,
  helperText,
  returnValue,
  classes,
  ...props
}: ComboboxControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    shouldUnregister,
    disabled,
    defaultValue
  })

  const { error, invalid } = fieldState
  const { value, onChange, ...restField } = field

  const { root, combobox, message } = classes ?? {}

  const onValueChange: ChangeHandler<false> = (value) => {
    if (TypeGuards.isArray(value)) return

    onChange(returnValue && value ? returnValue(value) : (value?.value ?? null))
  }

  const selected = useMemo<ComboboxValue<false>>(() => {
    if (TypeGuards.isArray(value)) return null

    return options.find((option) => (returnValue ? returnValue(option) : option.value) === value) ?? null
  }, [options, value])

  return (
    <div className={cn('w-full items-start gap-y-2', root, className)}>
      <Combobox
        {...props}
        {...restField}
        options={options}
        value={selected}
        onChange={onValueChange}
        invalid={invalid}
        disabled={disabled}
        multiple={false}
        classes={combobox}
      />
      <MessageView
        text={error ? error.message : helperText}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}
