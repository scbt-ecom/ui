import { memo } from 'react'
import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { MessageView } from '../../ui'
import { type AutocompleteBaseProps, Uncontrolled } from '../../uncontrolled'
import { type SelectClasses } from '../../uncontrolled/select/Select'
import { cn } from '$/shared/utils'

export type AutocompleteControlProps<
  TFieldValues extends FieldValues,
  T,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<AutocompleteBaseProps<T>, 'classes'> & {
    control: Control<TFieldValues>
    helperText?: string
    classes?: SelectClasses & {
      container?: string
      message?: string
    }
  }

export const InnerComponent = <TFieldValues extends FieldValues, T>({
  control,
  name,
  defaultValue,
  disabled,
  helperText,
  rules,
  shouldUnregister,
  classes,
  ...props
}: AutocompleteControlProps<TFieldValues, T>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,unused-imports/no-unused-vars
  const { ref, ...restField } = field
  const { error, invalid } = fieldState
  const { container, message } = classes || {}

  return (
    <div className={cn('w-full', container)}>
      <Uncontrolled.AutocompleteBase {...props} {...restField} invalid={invalid} />
      <MessageView className={message} text={error?.message || helperText} intent={error ? 'error' : 'simple'} />
    </div>
  )
}

export const AutocompleteControl = memo(InnerComponent) as typeof InnerComponent
