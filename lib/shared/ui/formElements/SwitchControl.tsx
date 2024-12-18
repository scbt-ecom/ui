'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { type TCommonFieldProps } from './model/types'
import { MessageView } from './ui'
import { cn } from '$/shared/utils'

type TSwitchControlClasses = {
  root?: string
  input?: string
  thumb?: string
  textBlock?: string
  label?: string
  message?: string
}

export interface ISwitchControlProps<T extends FieldValues> extends TCommonFieldProps<T> {
  disabled?: boolean
  classes?: TSwitchControlClasses
}

export const SwitchControl = <T extends FieldValues>({
  disabled,
  classes,
  control,
  helperText,
  label,
  ...props
}: ISwitchControlProps<T>) => {
  const inputId = React.useId()

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
        <div className={cn('flex items-center gap-2', classes?.root)}>
          <SwitchPrimitive.Root
            id={inputId}
            disabled={disabled}
            onCheckedChange={onChange}
            value={value}
            checked={value}
            className={cn(
              'h-6 w-10 rounded-full bg-color-blue-grey-300 p-[2px] outline-2 outline-offset-4 outline-transparent focus:outline-primary-focus data-[state=checked]:bg-color-primary-default hover:data-[state=checked]:bg-color-primary-hover',
              { 'data-[state=checked]:!bg-color-primary-disabled data-[state=unchecked]:!bg-color-blue-grey-200': disabled },
              classes?.input
            )}
            {...field}
            {...props}
          >
            <SwitchPrimitive.Thumb
              id={inputId}
              className={cn(
                'block size-5 rounded-full bg-color-white transition-all duration-200 will-change-transform data-[state=checked]:translate-x-4',
                classes?.thumb
              )}
            />
          </SwitchPrimitive.Root>
          <div className={cn('flex flex-col', classes?.textBlock)}>
            <label
              className={cn('desk-body-regular-l text-color-dark', { 'text-color-disabled': disabled }, classes?.label)}
              htmlFor={inputId}
            >
              {label}
            </label>

            <MessageView
              className={cn('mt-0', classes?.message)}
              intent={error?.message ? 'error' : 'simple'}
              text={error?.message || helperText}
              disabled={disabled}
            />
          </div>
        </div>
      )}
    />
  )
}
