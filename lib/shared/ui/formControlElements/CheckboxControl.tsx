'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { Icon } from '../icon/Icon'
import type { TAdditionalInputPrimitiveClasses, TControlledInputPrimitiveProps } from './model'
import { MessageView } from './ui'
import { cn } from '$/shared/utils'

type TCheckboxClasses = Partial<TAdditionalInputPrimitiveClasses> & {
  wrapper?: string
  indicator?: string
}

export interface ICheckboxControlProps<T extends FieldValues> extends Omit<TControlledInputPrimitiveProps<T>, 'label'> {
  classes?: TCheckboxClasses
  label: React.ReactElement | string
}

export const CheckboxControl = <T extends FieldValues>({
  control,
  helperText,
  label,
  disabled,
  classes,
  ...props
}: ICheckboxControlProps<T>) => {
  const checkboxId = React.useId()
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value, ref, name }, fieldState: { error } }) => {
        return (
          <div className={cn('flex max-w-[450px] flex-col', classes?.container)}>
            <div className={cn('flex items-center gap-4', classes?.wrapper)}>
              <div
                className={cn(
                  'flex size-10 items-center justify-center rounded-full transition-all focus-within:bg-color-primary-tr-focus hover:bg-color-primary-tr-hover',
                  classes?.field,
                  { '!bg-color-transparent': disabled }
                )}
              >
                <Root
                  name={name}
                  value={value}
                  ref={ref}
                  onCheckedChange={(e) => {
                    onChange(e)
                  }}
                  className={cn(
                    'flex size-6 cursor-pointer items-center justify-center rounded-sm border border-solid border-blue-grey-700 outline-none active:bg-color-primary-tr-pressed disabled:border-transparent data-[state=checked]:bg-color-primary-default data-[state=checked]:disabled:bg-color-primary-disabled data-[state=unchecked]:disabled:bg-color-blue-grey-300',
                    { '!border-negative': !!error?.message },
                    classes?.input
                  )}
                  disabled={disabled}
                  id={checkboxId}
                  defaultChecked={value}
                  checked={value}
                >
                  <Indicator
                    className={cn('flex items-center justify-center data-[state=checked]:text-icon-white', classes?.indicator)}
                  >
                    <Icon name='general/check' className='size-5' />
                  </Indicator>
                </Root>
              </div>

              <label
                className={cn(
                  'desk-body-regular-m flex-1 cursor-pointer text-color-dark',
                  { 'text-color-disabled': disabled },
                  classes?.label
                )}
                htmlFor={checkboxId}
              >
                {label}
              </label>
            </div>
            <MessageView
              className={cn(classes?.message)}
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
