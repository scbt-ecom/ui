import { memo } from 'react'
import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { FieldContainer, MessageView, type TFieldContainerConfig } from '../../ui'
import { type AutocompleteBaseProps, Uncontrolled } from '../../uncontrolled'
import { type SelectClasses } from '../../uncontrolled/select/Select'

export type AutocompleteControlProps<
  TFieldValues extends FieldValues,
  TData,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<AutocompleteBaseProps<TData>, 'classes'> & {
    control: Control<TFieldValues>
    dadataBaseUrl: string
    helperText?: string
    size?: TFieldContainerConfig['size']
    classes?: SelectClasses & {
      container?: string
      message?: string
    }
  }

export const InnerComponent = <TFieldValues extends FieldValues, TData>({
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
}: AutocompleteControlProps<TFieldValues, TData>) => {
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
