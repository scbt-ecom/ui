import { memo } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { type RadioGroupBaseProps, Uncontrolled } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type RadioControlClasses = RadioGroupBaseProps['classes'] & {
  container?: string
  message?: string
}

type RadioGroupControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<RadioGroupBaseProps, 'classes'> & {
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
    textHint?: string
  }

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  classes,
  className,
  control,
  name,
  rules,
  shouldUnregister,
  disabled,
  defaultValue,
  textHint,
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
  const { container, message, ...restClasses } = classes || {}

  return (
    <div className={cn('', container)}>
      <Uncontrolled.RadioGroupBase
        {...props}
        {...restField}
        onValueChange={onChange}
        invalid={invalid}
        className={className}
        classes={restClasses}
      />
      <MessageView
        text={error?.message || textHint}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}
export const RadioGroupControl = memo(InnerComponent) as typeof InnerComponent
