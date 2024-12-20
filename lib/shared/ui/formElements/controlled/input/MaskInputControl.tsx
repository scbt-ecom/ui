'use client'

import { memo } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { type MaskInputProps, Uncontrolled } from '../../uncontrolled'
import { MessageView } from '$/shared/ui/formElements/ui'

type MaskInputClasses = MaskInputProps['classes'] & {
  message?: string
}

type MaskInputControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<MaskInputProps, 'classes'> & {
    /**
     * Контрол объект для управления полем
     */
    control: Control<TFieldValues>
    /**
     * Дополнительные стили компонента
     */
    classes?: MaskInputClasses
    /**
     * Дополнительный текст
     */
    textHint?: string
  }

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  className,
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  classes,
  textHint,
  ...props
}: MaskInputControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  const { error, invalid } = fieldState
  const { message, ...restClasses } = classes || {}

  return (
    <div className={className}>
      <Uncontrolled.MaskInput {...props} {...field} invalid={invalid} classes={restClasses} />
      <MessageView
        text={error?.message || textHint}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}

export const MaskInputControl = memo(InnerComponent) as typeof InnerComponent
