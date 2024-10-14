'use client'

import { Controller, type FieldValues } from 'react-hook-form'
import { Indicator, Item, Root } from '@radix-ui/react-radio-group'
import { cva, type VariantProps } from 'class-variance-authority'
import type { TAdditionalInputPrimitiveClasses, TControlledInputPrimitiveProps } from './model'
import { MessageView } from './ui'
import { cn } from '$/shared/utils'

const radioOptionsConfig = cva('flex gap-2', {
  variants: {
    orientation: {
      horizontal: '',
      vertical: 'flex-col'
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
})

type TRadioClasses = Partial<TAdditionalInputPrimitiveClasses> & {
  groupName?: string
  radioGroup?: string
  radioOption?: string
  indicator?: string
}

export interface IRadioGroupOption {
  label: string
  value: string
  isDisabled?: boolean
}

type TRadioOptionsConfig = VariantProps<typeof radioOptionsConfig>

export interface IRadioControlProps<T extends FieldValues>
  extends TRadioOptionsConfig,
    Omit<TControlledInputPrimitiveProps<T>, 'label'> {
  radioItemsGroup: IRadioGroupOption[]
  groupName?: string
  classes?: TRadioClasses
  label?: never
}

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
      render={({ field: { onChange, value: controlledValue, ref, name }, fieldState: { error } }) => {
        return (
          <div className={cn('flex max-w-max flex-col gap-4', classes?.container)}>
            {groupName && <span className={cn('desk-body-regular-l text-color-dark', classes?.groupName)}>{groupName}</span>}
            <div className={cn('flex flex-col', classes?.field)}>
              <Root
                onValueChange={onChange}
                name={name}
                value={controlledValue}
                ref={ref}
                className={cn(radioOptionsConfig({ orientation }), classes?.radioGroup)}
                defaultValue={controlledValue}
              >
                {radioItemsGroup.map(({ label, value, isDisabled }) => (
                  <div key={value} className={cn('flex items-center gap-2', classes?.radioOption)}>
                    <div
                      className={cn(
                        'flex size-10 items-center justify-center rounded-full transition-all focus-within:bg-color-primary-tr-focus hover:bg-color-primary-tr-hover',
                        classes?.field,
                        { '!bg-color-transparent': isDisabled }
                      )}
                    >
                      <Item
                        disabled={isDisabled}
                        className={cn(
                          'relative size-6 cursor-pointer rounded-full border-2 border-solid bg-color-transparent outline-none transition-all data-[state=checked]:border-primary-default data-[state=unchecked]:border-blue-grey-700',
                          {
                            'data-[state=checked]:!border-primary-disabled data-[state=unchecked]:border-transparent data-[state=unchecked]:bg-color-blue-grey-300':
                              isDisabled
                          },
                          { '!border-negative': !!error?.message },
                          classes?.input
                        )}
                        value={value}
                        id={value}
                      >
                        <Indicator
                          className={cn(
                            'after:content-[" "] relative flex h-full w-full items-center justify-center after:block after:size-3 after:rounded-full after:bg-color-primary-default',
                            { 'after:bg-color-primary-disabled': isDisabled },
                            classes?.indicator
                          )}
                        />
                      </Item>
                    </div>
                    <label
                      className={cn(
                        'desk-body-regular-l cursor-pointer text-color-dark',
                        { 'text-color-disabled': isDisabled },
                        classes?.label
                      )}
                      htmlFor={value}
                    >
                      {label}
                    </label>
                  </div>
                ))}
              </Root>
              <MessageView
                className={cn(classes?.message)}
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
