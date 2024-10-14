'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps, TInputCommonProps } from '../model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
import type { TDadataBaseUrl, TDadataType } from './model/types'
import { useDadata } from './model/useDadata'
import { cn } from '$/shared/utils'

type TDadataClasses = Partial<TAdditionalInputClassesWithAttachment> & {
  options?: string
  indentMargin?: string
}

export interface IDadataInputControlProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  classes?: TDadataClasses
  dadataType?: TDadataType
  dadataBaseUrl?: TDadataBaseUrl
}

export const DadataInputControl = <T extends FieldValues>({
  control,
  helperText,
  classes,
  size = 'full',
  label,
  disabled,
  dadataType = 'fio',
  dadataBaseUrl = 'cache',
  badge,
  icon,
  swapPosition,
  onClickIcon,
  onKeyDownIcon,

  ...props
}: IDadataInputControlProps<T>) => {
  const { setQuery, suggestionsOptions } = useDadata(dadataType, dadataBaseUrl)
  const inputId = React.useId()
  // TODO: Пофиксить при нажатие на enter очищается инпут, если нет опшенов

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, name, value }, fieldState: { error } }) => {
        return (
          <FieldContainer size={size} classes={classes}>
            <Combobox value={value} onChange={onChange}>
              <FieldWrapper
                fieldId={inputId}
                label={label}
                classes={classes}
                disabled={disabled}
                value={value}
                error={!!error?.message}
              >
                <>
                  <ComboboxInput
                    className={cn(
                      'desk-body-regular-l z-10 h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                      classes?.input
                    )}
                    ref={ref}
                    name={name}
                    value={value} // TODO: capitalize
                    displayValue={(currentValue: string) => {
                      return currentValue
                    }}
                    onChange={(event) => {
                      onChange(event.target.value)
                      setQuery(event.target.value)
                    }}
                  />
                  {/* //TODO: Пока проблемы с реализацией на других полях  */}
                  {/* {suggestionsOptions && debounceQuery && (
                    <span className='absolute desk-body-regular-l text-color-blue-grey-600 left-[16px] top-[28px] capitalize group-focus-within:visible'>
                      {suggestionsOptions[0]?.value}
                    </span>
                  )} */}
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
                  {suggestionsOptions && suggestionsOptions?.length > 0 ? (
                    <>
                      {suggestionsOptions?.map(({ value: suggestionValue, additionalText, isDisabled }) => (
                        <ComboboxOption
                          disabled={isDisabled}
                          key={suggestionValue}
                          value={suggestionValue ?? ''}
                          className='flex cursor-pointer items-center justify-between gap-2 rounded-sm px-3 py-3 hover:bg-color-blue-grey-200 data-[disabled]:pointer-events-none data-[disabled]:bg-color-blue-grey-100 data-[focus]:bg-color-blue-grey-200 data-[disabled]:text-color-disabled'
                        >
                          <div className='flex flex-col gap-1'>
                            <p className='desk-body-regular-l'>{suggestionValue}</p>

                            {additionalText && <span className='desk-body-regular-s text-color-tetriary'>{additionalText}</span>}
                          </div>
                        </ComboboxOption>
                      ))}
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
