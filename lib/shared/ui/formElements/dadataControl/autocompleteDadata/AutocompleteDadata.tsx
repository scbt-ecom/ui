'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { Combobox, ComboboxInput } from '@headlessui/react'
import { type TCommonFieldProps } from '../../model/types'
import {
  FieldAttachment,
  FieldContainer,
  FieldWrapper,
  type IFieldAttachmentProps,
  MessageView,
  type TFieldAttachmentClasses,
  type TFieldContainerConfig,
  type TFieldWrapperClasses
} from '../../ui'
import type { TDadataType } from './model/types'
import { useDadata } from './model/useDadata'
import { ComboboxOptionsCustom } from './ui/ComboboxOptionsCustom'
import { cn } from '$/shared/utils'

export type TAutocompleteDadataClasses = TFieldAttachmentClasses &
  TFieldWrapperClasses & {
    root?: string
    input?: string
    message?: string
    options?: string
    optionsScrollArea?: string
    option?: string
    optionValueView?: string
    optionSuggestionValue?: string
    optionAdditionalText?: string
    optionEmptySuggestionValue?: string
  }

export interface IAutocompleteDadataProps<T extends FieldValues>
  extends TCommonFieldProps<T>,
    Omit<IFieldAttachmentProps, 'invalid' | 'isTouched'> {
  classes?: TAutocompleteDadataClasses
  dadataType: TDadataType
  dadataBaseUrl: string
  size?: TFieldContainerConfig['size']
  disabled?: boolean
  customChangeInput?: (...args: unknown[]) => void
  customChangeOption?: (...args: unknown[]) => void
  // TODO: ACTIONS OBJECT
}

export const AutocompleteDadata = <T extends FieldValues>({
  dadataType,
  dadataBaseUrl,
  label,
  helperText,
  control,
  disabled,
  size = 'full',
  classes,
  badge,
  withValidateIcons = true,
  icon,
  onClickIcon,
  onKeyDownIcon,
  customChangeInput,
  customChangeOption,
  ...props
}: IAutocompleteDadataProps<T>) => {
  const { setQuery, suggestionsOptions } = useDadata(dadataType, dadataBaseUrl)
  const inputId = React.useId()

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value, ...field }, fieldState: { error, invalid, isTouched } }) => {
        return (
          <FieldContainer size={size} className={classes?.root}>
            <Combobox
              value={value ?? ''}
              onChange={(suggestion) => {
                if (suggestion) {
                  onChange(suggestion + ' ')

                  if (customChangeOption) {
                    customChangeOption()
                  }
                }
              }}
            >
              <FieldWrapper
                label={label}
                value={value}
                error={Boolean(error?.message)}
                fieldId={inputId}
                disabled={disabled}
                classes={classes}
              >
                <ComboboxInput
                  value={value ?? ''}
                  displayValue={(currentValue: string) => currentValue}
                  onChange={(event) => {
                    onChange(event.target.value)
                    setQuery(event.target.value)
                    if (customChangeInput) {
                      customChangeInput()
                    }
                  }}
                  className={cn(
                    'desk-body-regular-l z-10 h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                    classes?.input
                  )}
                  {...field}
                  {...props}
                />
                <FieldAttachment
                  badge={badge}
                  withValidateIcons={withValidateIcons}
                  icon={icon}
                  onClickIcon={onClickIcon}
                  onKeyDownIcon={onKeyDownIcon}
                  classes={classes}
                  invalid={invalid}
                  isTouched={isTouched}
                />
              </FieldWrapper>
              <MessageView
                className={classes?.message}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
              <ComboboxOptionsCustom suggestionsOptions={suggestionsOptions} classes={classes} />
            </Combobox>
          </FieldContainer>
        )
      }}
    />
  )
}
