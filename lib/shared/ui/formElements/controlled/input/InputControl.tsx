'use client'

import { memo } from 'react'
import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { type InputBaseProps, Uncontrolled } from '../../uncontrolled'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type InputControlClasses = InputBaseProps['classes'] & {
  message?: string
  root?: string
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
  const { message, root, ...restClasses } = classes || {}

  return (
    <div className={cn('w-full', root)}>
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
    </div>
  )
}

export const InputControl = memo(InnerComponent) as typeof InnerComponent
