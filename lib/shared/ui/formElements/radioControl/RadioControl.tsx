'use client'

import { Controller, type FieldValues } from 'react-hook-form'
import { Root } from '@radix-ui/react-radio-group'
import { cva, type VariantProps } from 'class-variance-authority'
import { type TCommonFieldProps } from '../model/types'
import { MessageView } from '../ui'
import { RadioGroupCustom } from './ui/RadioGroupCustom'
import { cn } from '$/shared/utils'

const radioOptionsConfig = cva('flex gap-2', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col'
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
})

export type TRadioClasses = {
  root?: string
  groupName?: string
  field?: string
  message?: string
  radioGroup?: string
  radioLabel?: string
  radioIndicator?: string
  radioInput?: string
  radio?: string
  radioOption?: string
}

export interface IRadioGroupOption {
  label: string
  value: string
  isDisabled?: boolean
}

type TRadioOptionsConfig = VariantProps<typeof radioOptionsConfig>

export interface IRadioControlProps<T extends FieldValues> extends TRadioOptionsConfig, Omit<TCommonFieldProps<T>, 'label'> {
  radioItemsGroup: IRadioGroupOption[]
  groupName?: string
  classes?: TRadioClasses
  disabled?: boolean
}

/**
 * @deprecated For better performance use `Controlled.RadioGroupControl` instead.
 */
export const RadioControl = <T extends FieldValues>({
  radioItemsGroup,
  control,
  groupName,
  helperText,
  disabled,
  classes,
  orientation,
  ...props
}: IRadioControlProps<T>) => {
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value, ...field }, fieldState: { error } }) => {
        return (
          <div className={cn('flex max-w-max flex-col gap-4', classes?.root)}>
            {groupName && <span className={cn('desk-body-regular-l text-color-dark', classes?.groupName)}>{groupName}</span>}
            <div className={cn('flex flex-col', classes?.field)}>
              <Root
                onValueChange={onChange}
                value={value}
                defaultValue={value}
                className={cn(radioOptionsConfig({ orientation }), classes?.radioGroup)}
                {...field}
                {...props}
              >
                <RadioGroupCustom radioItemsGroup={radioItemsGroup} error={Boolean(error?.message)} classes={classes} />
              </Root>
              <MessageView
                className={classes?.message}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
            </div>
          </div>
        )
      }}
    />
  )
}
