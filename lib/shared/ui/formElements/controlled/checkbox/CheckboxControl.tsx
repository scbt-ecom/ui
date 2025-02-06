'use client'

import { useId } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { type CheckboxBaseProps, Uncontrolled } from '../../uncontrolled'
import { MessageView } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type CheckboxControlClasses = CheckboxBaseProps['classes'] & {
  container?: string
  message?: string
  label?: string
}

export type CheckboxControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<CheckboxBaseProps, 'classes'> & {
    /**
     * Контрол объект для управления полем
     */
    control: Control<TFieldValues>
    /**
     * Отображаемый лейбл
     */
    children: React.ReactElement | string
    /**
     * Дополнительные стили компонента
     */
    classes?: CheckboxControlClasses
    /**
     * Дополнительный текст
     */
    helperText?: string
  }

export const CheckboxControl = <TFieldValues extends FieldValues = FieldValues>({
  control,
  classes,
  className,
  name,
  rules,
  shouldUnregister,
  defaultValue,
  disabled,
  children,
  helperText,
  ...props
}: CheckboxControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    shouldUnregister,
    defaultValue,
    disabled
  })

  const { container, message, label, ...restClasses } = classes || {}
  const { value, onChange, ...restField } = field
  const { invalid, error } = fieldState

  const id = useId()

  return (
    <div className={cn('flex flex-col gap-y-2', className)}>
      <div className={cn('flex items-center justify-items-start gap-x-3', container)}>
        <Uncontrolled.CheckboxBase
          id={id}
          checked={value}
          onCheckedChange={onChange}
          invalid={invalid}
          classes={restClasses}
          {...props}
          {...restField}
        />
        <label
          htmlFor={id}
          className={cn(
            'mob-body-regular-s text-color-dark',
            'desktop:desk-body-regular-m desktop:gap-x-4',
            {
              'text-color-disabled': disabled
            },
            label
          )}
        >
          {children}
        </label>
      </div>
      <MessageView
        text={error ? error.message : helperText}
        className={message}
        intent={error ? 'error' : 'simple'}
        disabled={disabled}
      />
    </div>
  )
}
