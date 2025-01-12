import { memo } from 'react'
import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { FieldContainer, MessageView, type TFieldContainerConfig } from '../../ui'
import { type AutocompleteBaseProps, Uncontrolled } from '../../uncontrolled'
import { type SelectClasses } from '../../uncontrolled/select/Select'
import type { IDadataOptions } from '$/shared/ui/formElements/dadataControl/autocompleteDadata/model/helpers'

export type AutocompleteControlProps<
  TFieldValues extends FieldValues,
  T,
  TData extends IDadataOptions<T>,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<AutocompleteBaseProps<T, TData>, 'classes'> & {
    control: Control<TFieldValues>
    dadataBaseUrl: string
    helperText?: string
    size?: TFieldContainerConfig['size']
    classes?: SelectClasses & {
      container?: string
      message?: string
    }
  }

export const InnerComponent = <TFieldValues extends FieldValues, T, TData extends IDadataOptions<T>>({
  control,
  name,
  defaultValue,
  disabled,
  helperText,
  rules,
  shouldUnregister,
  size,
  classes,
  ...props
}: AutocompleteControlProps<TFieldValues, T, TData>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  const { error, invalid } = fieldState
  const { container, message } = classes || {}

  return (
    <FieldContainer className={container} size={size}>
      <Uncontrolled.AutocompleteBase {...props} {...field} invalid={invalid} />
      <MessageView className={message} text={error?.message || helperText} intent={error ? 'error' : 'simple'} />
    </FieldContainer>
  )
}

export const AutocompleteControl = memo(InnerComponent) as typeof InnerComponent
