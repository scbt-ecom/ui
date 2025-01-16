import { memo } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { type TextareaBaseProps, Uncontrolled } from '$/shared/ui'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type TextareaControlClasses = TextareaBaseProps['classes'] & {
  message?: string
}

export type TextareaControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<TextareaBaseProps, 'classes'> & {
    /**
     * Контрол объект для управления полем
     */
    control: Control<TFieldValues>
    /**
     * Дополнительные стили компонента
     */
    classes?: TextareaControlClasses
    /**
     * Дополнительный текст
     */
    helperText?: string
  }

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  classes,
  control,
  name,
  rules,
  disabled,
  defaultValue,
  shouldUnregister,
  helperText,
  ...props
}: TextareaControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    disabled,
    defaultValue,
    shouldUnregister
  })

  const { error, invalid, isTouched } = fieldState
  const { message, container, ...restClasses } = classes || {}

  return (
    <div className={cn('w-full', container)}>
      <Uncontrolled.TextareaBase
        {...props}
        {...field}
        invalid={invalid}
        classes={restClasses}
        attachmentProps={{
          invalid,
          isTouched,
          withValidateIcons: true,
          ...props.attachmentProps
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

export const TextareaControl = memo(InnerComponent) as typeof InnerComponent
