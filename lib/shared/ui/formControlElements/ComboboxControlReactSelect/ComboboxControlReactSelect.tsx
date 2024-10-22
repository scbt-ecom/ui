'use client'

import * as React from 'react'
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form'
import Select, { type GroupBase } from 'react-select'
import { type TControlledInputProps } from '../model'
import { FieldContainer, MessageView } from '../ui'
import { Label } from '../ui/Label'
import { selectClassNames } from './model/selectClassnames'
import { type TComboboxControlReactSelectPropsClasses } from './model/types'
import { DropdownIndicator, MultiValueRemove, Option } from './ui'
import { cn } from '$/shared/utils'

type TSelectVariant = 'primary' | 'secondary'

export interface SelectOption<ValueType> {
  value: ValueType
  label: string
}

export interface IComboboxControlReactSelectProps<T extends FieldValues, ValueType> extends TControlledInputProps<T> {
  name: Path<T>
  control: Control<T>
  options: readonly (ValueType | GroupBase<ValueType>)[]
  label: string
  size?: 'sm' | 'md' | 'lg' | 'full'
  helperText?: string
  marker?: boolean
  variant?: TSelectVariant
  isClearable?: boolean
  defaultValue?: ValueType
  noOptionsMessage?: string
  classes?: Partial<TComboboxControlReactSelectPropsClasses>
  disabled?: boolean
  isMulti?: boolean
  placeholder?: string
  onClickIcon?: (...args: unknown[]) => unknown
  onKeyDownIcon?: (event: React.KeyboardEvent) => unknown
  isSearchable?: boolean
}

export const ComboboxControlReactSelect = <T extends FieldValues, ValueType>({
  options,
  control,
  defaultValue,
  variant = 'primary',
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
  ...props
}: IComboboxControlReactSelectProps<T, ValueType>) => {
  const selectId = React.useId()
  return (
    <div>
      <Controller
        control={control}
        name={props.name}
        render={({ field: { onChange, ref, name, value }, fieldState: { error } }) => {
          return (
            <FieldContainer classes={classes} size={size}>
              <div
                className={cn(
                  'relative flex rounded-sm border border-solid border-transparent bg-color-blue-grey-100 transition-colors hover:bg-color-blue-grey-200 focus:outline-blue-grey-800 active:bg-color-blue-grey-100 group-focus-within:border-blue-grey-800',
                  { '!border-negative': error },
                  { '!bg-color-blue-grey-100': disabled }
                )}
              >
                {!isMulti && <Label disabled={disabled} classes={classes} fieldId={selectId} label={label} value={value} />}
                <Select
                  inputId={selectId}
                  placeholder={isMulti ? placeholder : ''}
                  classNamePrefix={variant}
                  instanceId={name}
                  hideSelectedOptions={false}
                  closeMenuOnSelect={!isMulti}
                  components={{ Option, MultiValueRemove, DropdownIndicator }}
                  classNames={selectClassNames<ValueType | GroupBase<ValueType>>(isMulti, disabled, classes)}
                  isSearchable={isSearchable}
                  ref={ref}
                  isDisabled={disabled}
                  styles={{
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isSelected ? 'bg-color-transparent' : 'bg-color-transparent',
                      color: state.isSelected ? 'text-color-dark' : 'text-color-dark'
                    })
                  }}
                  isMulti={isMulti}
                  defaultValue={defaultValue}
                  isClearable={isClearable}
                  noOptionsMessage={() => noOptionsMessage}
                  options={options}
                  value={options.find((option) => (option as SelectOption<ValueType>).value === value)}
                  onChange={(option) => {
                    if (isMulti) {
                      onChange((option as SelectOption<ValueType>[])?.map((c) => c.value))
                    } else {
                      onChange((option as SelectOption<ValueType>)?.value)
                    }
                  }}
                  {...props}
                />
              </div>
              <MessageView
                className={cn(classes?.message)}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
            </FieldContainer>
          )
        }}
      />
    </div>
  )
}
