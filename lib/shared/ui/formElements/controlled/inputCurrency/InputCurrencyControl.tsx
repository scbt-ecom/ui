import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { MessageView } from '../../ui'
import { InputCurrencyBase, type InputCurrencyBaseProps } from '../../uncontrolled/inputCurrency'
import { cn } from '$/shared/utils'

type InputCurrencyControlClasses = {
  root?: string
  message?: string
  input?: InputCurrencyBaseProps['classes']
}

export type InputCurrencyControlProps<TFieldValues extends FieldValues = FieldValues> = UseControllerProps<
  TFieldValues,
  FieldPath<TFieldValues>
> &
  Omit<InputCurrencyBaseProps, 'classes'> & {
    control: Control<TFieldValues>
    helperText?: string
    classes?: InputCurrencyControlClasses
  }

export const InputCurrencyControl = <TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  shouldUnregister,
  disabled,
  defaultValue,
  helperText,
  classes,
  ...props
}: InputCurrencyControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    shouldUnregister,
    disabled,
    defaultValue
  })

  const { error, invalid, isTouched } = fieldState
  const { root, input, message } = classes ?? {}

  return (
    <div className={cn('w-full', root)}>
      <InputCurrencyBase
        {...props}
        {...field}
        classes={input}
        invalid={invalid}
        attachmentProps={{
          invalid,
          isTouched,
          withValidateIcons: false
        }}
      />
      <MessageView
        text={error?.message || helperText}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}
