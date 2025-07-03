import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { RadioGroupBase, type RadioGroupBaseProps } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type RadioControlClasses = RadioGroupBaseProps['classes'] & {
  container?: string
  message?: string
  label?: string
}

export type RadioGroupControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<RadioGroupBaseProps, 'classes' | 'name'> & {
    /**
     * Отображаемый лейбл
     */
    label: string
    /**
     * Контрол объект для управления полем
     */
    control: Control<TFieldValues>
    /**
     * Дополнительные стили компонента
     */
    classes?: RadioControlClasses
    /**
     * Дополнительный текст
     */
    helperText?: string
  }

export const RadioGroupControl = <TFieldValues extends FieldValues = FieldValues>({
  classes,
  className,
  control,
  name,
  rules,
  shouldUnregister,
  disabled,
  defaultValue,
  helperText,
  label,
  ...props
}: RadioGroupControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    shouldUnregister,
    disabled,
    defaultValue
  })

  const { onChange, ...restField } = field
  const { invalid, error } = fieldState
  const { container, message, label: labelClass, ...restClasses } = classes || {}

  return (
    <div className={container}>
      <p className={cn('desk-body-regular-l w-full pb-4 text-color-dark', labelClass)}>{label}</p>
      <RadioGroupBase
        {...props}
        {...restField}
        onValueChange={onChange}
        invalid={invalid}
        className={className}
        classes={restClasses}
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
