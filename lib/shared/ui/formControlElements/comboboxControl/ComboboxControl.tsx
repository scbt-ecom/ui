'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { type TControlledInputProps, type TInputCommonProps } from '../model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
import { CustomOption, type IComboboxOption } from './ui/CustomOption'
import { cn } from '$/shared/utils'

export interface IComboboxControlProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  classes: any
}

const suggestionsOptions: IComboboxOption[] = [
  { optionValue: 'Кредит наличными' },
  { optionValue: 'Кредит под залог недвижимости' },
  { optionValue: 'Кредит под залог авто' },
  { optionValue: 'Кредит на карту' },
  { optionValue: 'Кредит на авто' }
]

const filteredOptions = (controlledValue: string) =>
  suggestionsOptions?.filter(({ optionValue }) => optionValue?.toLowerCase().includes(controlledValue?.toLowerCase()))

export const ComboboxControl = <T extends FieldValues>({
  control,
  helperText,
  size = 'full',
  label,
  disabled,
  badge,
  icon,
  swapPosition,
  onClickIcon,
  onKeyDownIcon,
  classes,
  multiple = false,
  ...props
}: IComboboxControlProps<T>) => {
  const inputId = React.useId()

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, name, value: controlledValue }, fieldState: { error } }) => {
        // const selectedValues: IComboboxOption[] = Array.isArray(controlledValue) ? controlledValue : []
        // const displayValues = multiple ? selectedValues : controlledValue

        return (
          <FieldContainer size={size} classes={classes}>
            <Combobox multiple={multiple} value={controlledValue} onChange={onChange}>
              <FieldWrapper
                fieldId={inputId}
                label={label}
                classes={classes}
                disabled={disabled}
                value={controlledValue}
                error={!!error?.message}
              >
                <>
                  {/* {selectedValues.length > 0 && (
                    <div className='flex-1'>
                      <ul className='flex items-center gap-2 flex-wrap'>
                        {selectedValues.map((optionValue) => (
                          <li
                            className='text-color-secondary desk-body-regular-l bg-color-blue-grey-300 px-2 py-2 text-nowrap rounded-sm'
                            key={optionValue}
                          >
                            {optionValue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                  <ComboboxInput
                    className={cn(
                      'desk-body-regular-l z-10 h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                      classes?.input
                    )}
                    ref={ref}
                    name={name}
                    displayValue={(optionSelectedValue: string) => optionSelectedValue}
                    onChange={(event) => onChange(event.target.value)}
                  />
                  <FieldAttachment
                    onClickIcon={onClickIcon}
                    onKeyDownIcon={onKeyDownIcon}
                    badge={badge}
                    icon={icon}
                    error={!!error?.message}
                    classes={classes}
                    swapPosition={swapPosition}
                  />
                </>
              </FieldWrapper>
              <MessageView
                className={cn(classes?.message)}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
              <ComboboxOptions
                transition
                className={cn(
                  'scrollHidden absolute top-14 z-10 mt-2 flex w-full flex-col rounded-md border border-solid border-blue-grey-700 bg-color-white p-2 transition-all empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0'
                )}
              >
                <div className='customScrollbar-y !max-h-[246px] overflow-x-hidden p-2'>
                  {filteredOptions(controlledValue)?.length > 0 ? (
                    <>
                      {filteredOptions(controlledValue)?.map((option) => <CustomOption key={option.optionValue} {...option} />)}
                    </>
                  ) : (
                    <ComboboxOption value='' className='desk-body-regular-m text-color-tetriary'>
                      Ничего не найдено
                    </ComboboxOption>
                  )}
                </div>
              </ComboboxOptions>
            </Combobox>
          </FieldContainer>
        )
      }}
    />
  )
}
