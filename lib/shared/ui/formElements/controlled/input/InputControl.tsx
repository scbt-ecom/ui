'use client'

import { memo } from 'react'
import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { type InputBaseProps, Uncontrolled } from '../../uncontrolled'
import { MessageView } from '$/shared/ui/formElements/ui'

type InputControlClasses = InputBaseProps['classes'] & {
  message?: string
}

type InputControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<InputBaseProps, 'classes'> & {
    control: Control<TFieldValues>
    textHint?: string
    classes?: InputControlClasses
  }

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  className,
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  textHint,
  classes,
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

  const { error, invalid } = fieldState
  const { message, ...restClasses } = classes || {}

  return (
    <div className={className}>
      <Uncontrolled.InputBase {...props} {...field} classes={restClasses} invalid={invalid} />
      <MessageView
        text={error?.message || textHint}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}

export const InputControl = memo(InnerComponent) as typeof InnerComponent
