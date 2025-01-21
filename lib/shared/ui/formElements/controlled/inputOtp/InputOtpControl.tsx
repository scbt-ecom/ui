import { type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { type InputOtpBaseProps, Uncontrolled } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type InputOtpControlClasses = InputOtpBaseProps['classes'] & {
  message?: string
  container?: string
}

export type InputOtpControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<InputOtpBaseProps, 'classes'> & {
    classes?: InputOtpControlClasses
    helperText?: string
  }

export const InputOtpControl = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  classes,
  helperText,
  ...props
}: InputOtpControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({ control, name, defaultValue, disabled, rules, shouldUnregister })

  const { error, invalid } = fieldState

  const { container, message, ...restClasses } = classes || {}

  return (
    <div className={cn('w-full', container)}>
      <Uncontrolled.InputOtpBase {...field} {...props} invalid={invalid} classes={restClasses} />
      <MessageView
        text={error?.message || helperText}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}
