'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { Icon } from '../icon'
import { type TCommonFieldProps } from './model/types'
import { MessageView } from './ui'
import { cn } from '$/shared/utils'

type TCheckboxControlClasses = {
  root?: string
  wrapper?: string
  field?: string
  input?: string
  indicator?: string
  icon?: string
  label?: string
  message?: string
}

export interface ICheckboxControlProps<T extends FieldValues> extends Omit<TCommonFieldProps<T>, 'label'> {
  classes?: TCheckboxControlClasses
  label: React.ReactElement | string
  disabled?: boolean
}

export const CheckboxControl = <T extends FieldValues>({
  control,
  label,
  helperText,
  disabled,
  classes,
  ...props
}: ICheckboxControlProps<T>) => {
  const inputId = React.useId()
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value, ...field }, fieldState: { error } }) => {
        return (
          <div className={cn('flex max-w-[450px] flex-col', classes?.root)}>
            <div className={cn('flex items-center gap-2', classes?.wrapper)}>
              <div
                className={cn(
                  'flex size-10 items-center justify-center rounded-full transition-all focus-within:bg-color-primary-tr-focus hover:bg-color-primary-tr-hover',
                  classes?.field,
                  { '!bg-color-transparent': disabled }
                )}
              >
                <Root
                  id={inputId}
                  value={value}
                  onCheckedChange={(e) => onChange(e)}
                  disabled={disabled}
                  defaultChecked={value}
                  checked={value}
                  className={cn(
                    'flex size-6 cursor-pointer items-center justify-center rounded-sm border border-solid border-blue-grey-700 outline-none active:bg-color-primary-tr-pressed disabled:border-transparent data-[state=checked]:bg-color-primary-default data-[state=checked]:disabled:bg-color-primary-disabled data-[state=unchecked]:disabled:bg-color-blue-grey-300',
                    { '!border-negative': Boolean(error?.message) },
                    classes?.input
                  )}
                  {...field}
                  {...props}
                >
                  <Indicator
                    className={cn('flex items-center justify-center data-[state=checked]:text-icon-white', classes?.indicator)}
                  >
                    <Icon name='general/check' className={cn('size-5', classes?.icon)} />
                  </Indicator>
                </Root>
              </div>

              <label
                className={cn(
                  'desk-body-regular-m flex-1 cursor-pointer text-color-dark',
                  { 'text-color-disabled': disabled },
                  classes?.label
                )}
                htmlFor={inputId}
              >
                {label}
              </label>
            </div>
            <MessageView
              className={classes?.message}
              intent={error?.message ? 'error' : 'simple'}
              text={error?.message || helperText}
              disabled={disabled}
            />
          </div>
        )
      }}
    />
  )
}
