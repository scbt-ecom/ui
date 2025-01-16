'use client'

import { memo } from 'react'
import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { type InputBaseProps, Uncontrolled } from '../../uncontrolled'
import { FieldContainer, MessageView, type TFieldContainerConfig } from '$/shared/ui/formElements/ui'

type InputControlClasses = InputBaseProps['classes'] & {
  message?: string
}

type InputControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<InputBaseProps, 'classes'> & {
    /**
     * Контрол объект для управления полем
     */
    control: Control<TFieldValues>
    /**
     * Дополнительный текст
     */
    helperText?: string
    /**
     * Дополнительные стили компонента
     */
    classes?: InputControlClasses
    /**
     * Размер контейнера для поля
     */
    size?: TFieldContainerConfig['size']
  }

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  helperText,
  classes,
  size,
  ...props
}: InputControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  const { error, invalid, isTouched } = fieldState
  const { message, container, ...restClasses } = classes || {}

  return (
    <FieldContainer size={size} className={container}>
      <Uncontrolled.InputBase
        {...props}
        {...field}
        classes={restClasses}
        invalid={invalid}
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

export const InputControl = memo(InnerComponent) as typeof InnerComponent
