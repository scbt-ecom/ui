import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { Combobox, type ComboboxClasses, type ComboboxItemOption, type ComboboxProps } from '../../uncontrolled/combobox'
import { useComboboxControl } from './hooks'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

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
  multiple,
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

  const { selected, changeHandler } = useComboboxControl({
    value,
    onChange,
    multiple,
    returnValue,
    options
  })

  return (
    <div className={cn('w-full items-start gap-y-2', root, className)}>
      <Combobox
        {...props}
        {...restField}
        options={options}
        value={selected}
        onChange={changeHandler}
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
