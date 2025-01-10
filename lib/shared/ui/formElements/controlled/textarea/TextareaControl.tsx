import { memo } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { type TextareaBaseProps, Uncontrolled } from '$/shared/ui'
import { FieldContainer, MessageView, type TFieldContainerConfig } from '$/shared/ui/formElements/ui'

type TextareaControlClasses = TextareaBaseProps['classes'] & {
  message?: string
}

export type TextareaControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<TextareaBaseProps, 'classes' | 'name'> & {
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
    /**
     * Размер контейнера для поля
     */
    size?: TFieldContainerConfig['size']
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
  size,
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
    <FieldContainer size={size} className={container}>
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
    </FieldContainer>
  )
}

export const TextareaControl = memo(InnerComponent) as typeof InnerComponent
