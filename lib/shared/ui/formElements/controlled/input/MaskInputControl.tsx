'use client'

import { memo } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { type MaskInputProps, Uncontrolled } from '../../uncontrolled'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type MaskInputClasses = MaskInputProps['classes'] & {
  message?: string
}

export type MaskInputControlProps<
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
    helperText?: string
  }

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  classes,
  helperText,
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

  const { error, invalid, isTouched } = fieldState
  const { message, container, ...restClasses } = classes || {}

  return (
    <div className={cn('w-full', container)}>
      <Uncontrolled.MaskInput
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

export const MaskInputControl = memo(InnerComponent) as typeof InnerComponent
