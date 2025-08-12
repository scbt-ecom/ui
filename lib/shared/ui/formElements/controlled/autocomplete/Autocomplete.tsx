import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { MessageView } from '../../ui'
import { AutocompleteBase, type AutocompleteBaseProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type AutocompleteControlProps<
  TFieldValues extends FieldValues,
  T,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<AutocompleteBaseProps<T>, 'classes'> & {
    control: Control<TFieldValues>
    helperText?: string
    classes?: AutocompleteBaseProps<T>['classes'] & {
      container?: string
      message?: string
    }
  }

export const AutocompleteControl = <TFieldValues extends FieldValues, T>({
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

  const { error, invalid, isTouched } = fieldState
  const { container, message } = classes || {}

  return (
    <div className={cn('w-full', container)}>
      <AutocompleteBase
        {...props}
        {...field}
        invalid={invalid}
        attachmentProps={{ ...props?.attachmentProps, icon: undefined, invalid, isTouched, withValidateIcons: true }}
      />
      <MessageView className={message} text={error?.message || helperText} intent={error ? 'error' : 'simple'} />
    </div>
  )
}
