'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import Select, { type DropdownIndicatorProps, type MultiValueRemoveProps, type OptionProps } from 'react-select'
import { type TCommonFieldProps } from '../../model/types'
import { FieldContainer, MessageView, type TFieldContainerConfig } from '../../ui'
import { FieldLabel } from '../../ui/fieldWrapper/ui'
import { selectClassNames } from './model/selectClassnames'
import {
  type TComboboxControlClasses,
  type TComboboxOptionClasses,
  type TDropdownIndicatorClasses,
  type TMultiValueRemoveClasses
} from './model/types'
import { ComboboxOption, DropdownIndicator, MultiValueRemove } from './ui'
import { cn } from '$/shared/utils'

export interface SelectOption<ValueType> {
  value: ValueType
  label: string | React.ReactElement
}

export interface IComboboxControlProps<T extends FieldValues, ValueType> extends TCommonFieldProps<T> {
  options: SelectOption<ValueType>[]
  size?: TFieldContainerConfig['size']
  marker?: boolean
  isClearable?: boolean
  defaultValue?: ValueType
  noOptionsMessage?: string | React.ReactElement
  disabled?: boolean
  isMulti?: boolean
  placeholder?: string | React.ReactElement
  isSearchable?: boolean
  classes?: TComboboxControlClasses
  onClickIcon?: (...args: unknown[]) => unknown
  onKeyDownIcon?: (event: React.KeyboardEvent) => unknown
  customChange?: (...args: unknown[]) => void
}

export const ComboboxControl = <T extends FieldValues, ValueType>({
  options,
  control,
  defaultValue,
  isClearable = false,
  label,
  disabled,
  placeholder = 'Выберите несколько значений',
  helperText,
  noOptionsMessage = 'Нет результатов поиска',
  size = 'full',
  classes,
  isMulti = false,
  isSearchable,
  customChange,
  ...props
}: IComboboxControlProps<T, ValueType>) => {
  const selectId = React.useId()

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, name, value }, fieldState: { error } }) => {
        return (
          <FieldContainer className={classes?.selectWrapper} size={size}>
            <div
              className={cn(
                'relative flex rounded-sm border border-solid border-transparent bg-color-blue-grey-100 transition-colors hover:bg-color-blue-grey-200 focus:outline-blue-grey-800 active:bg-color-blue-grey-100 group-focus-within:border-blue-grey-800',
                { '!border-negative': error },
                { '!bg-color-blue-grey-100': disabled }
              )}
            >
              {!isMulti && <FieldLabel disabled={disabled} classes={classes} fieldId={selectId} label={label} value={value} />}
              <Select
                inputId={selectId}
                placeholder={isMulti ? placeholder : ''}
                instanceId={name}
                hideSelectedOptions={false}
                closeMenuOnSelect={!isMulti}
                components={{
                  Option: (props: OptionProps) => <ComboboxOption {...props} classes={classes as TComboboxOptionClasses} />,
                  MultiValueRemove: (props: MultiValueRemoveProps) => (
                    <MultiValueRemove {...props} classes={classes as TMultiValueRemoveClasses} />
                  ),
                  DropdownIndicator: (props: DropdownIndicatorProps) => (
                    <DropdownIndicator {...props} classes={classes as TDropdownIndicatorClasses} />
                  )
                }}
                classNames={selectClassNames(isMulti, disabled, classes)}
                isSearchable={isSearchable}
                ref={ref}
                isDisabled={disabled}
                isMulti={isMulti}
                defaultValue={defaultValue}
                isClearable={isClearable}
                noOptionsMessage={() => noOptionsMessage}
                options={options}
                value={options?.find((option) => (option as SelectOption<ValueType>)?.value === value)}
                onChange={(option) => {
                  if (customChange) {
                    customChange(option)
                  }
                  if (isMulti) {
                    onChange((option as SelectOption<ValueType>[])?.map((c) => c?.value))
                  } else {
                    onChange((option as SelectOption<ValueType>)?.value)
                  }
                }}
                {...props}
              />
            </div>
            <MessageView
              className={classes?.message}
              intent={error?.message ? 'error' : 'simple'}
              text={error?.message || helperText}
              disabled={disabled}
            />
          </FieldContainer>
        )
      }}
    />
  )
}
