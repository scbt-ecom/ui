'use client'

import { memo } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { MaskInput, type MaskInputProps } from '../../../input'
import { MessageView } from '$/shared/ui/formElements/ui'

type MaskInputClasses = MaskInputProps['classes'] & {
  message?: string
}

type MaskInputControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<MaskInputProps, 'classes'> & {
    control: Control<TFieldValues>
    classes?: MaskInputClasses
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
      <MaskInput {...props} {...field} invalid={invalid} classes={restClasses} />
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
