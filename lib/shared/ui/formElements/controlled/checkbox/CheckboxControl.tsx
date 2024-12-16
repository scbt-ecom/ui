'use client'

import { memo, useId } from 'react'
import { type Control, type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { type CheckboxBaseProps, Uncontrolled } from '../../uncontrolled'
import { cn } from '$/shared/utils'

type CheckboxControlClasses = CheckboxBaseProps['classes'] & {
  container?: string
  message?: string
  label?: string
}

type CheckboxControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> &
  Omit<CheckboxBaseProps, 'classes'> & {
    control: Control<TFieldValues>
    children: React.ReactElement | string
    classes?: CheckboxControlClasses
  }

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  control,
  classes,
  className,
  name,
  rules,
  shouldUnregister,
  defaultValue,
  disabled,
  children,
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
      {error && (
        <p className={cn('mob-body-regular-s text-color-negative', 'desktop:desk-body-regular-m', message)}>{error.message}</p>
      )}
    </div>
  )
}

export const CheckboxControl = memo(InnerComponent) as typeof InnerComponent
