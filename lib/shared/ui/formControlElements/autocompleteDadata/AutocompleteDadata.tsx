'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { Combobox, ComboboxInput } from '@headlessui/react'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps, TInputCommonProps } from '../model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
import type { TDadataType } from './model/types'
import { useDadata } from './model/useDadata'
import { ComboboxOptionsCustom } from './ui/ComboboxOptionsCustom'
import { cn } from '$/shared/utils'

type TDadataClasses = Partial<TAdditionalInputClassesWithAttachment> & {
  options?: string
  indentMargin?: string
}

export interface IAutocompleteDadataProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  classes?: TDadataClasses
  dadataType: TDadataType
  dadataBaseUrl: string
}

export const AutocompleteDadata = <T extends FieldValues>({
  control,
  helperText,
  classes,
  size = 'full',
  label,
  disabled,
  dadataType,
  dadataBaseUrl,
  badge,
  icon,
  swapPosition,
  onClickIcon,
  onKeyDownIcon,
  ...props
}: IAutocompleteDadataProps<T>) => {
  const { setQuery, suggestionsOptions } = useDadata(dadataType, dadataBaseUrl)
  const inputId = React.useId()

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
                    value={value}
                    displayValue={(currentValue: string) => {
                      return currentValue
                    }}
                    onChange={(event) => {
                      onChange(event.target.value)
                      setQuery(event.target.value)
                    }}
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
              <ComboboxOptionsCustom suggestionsOptions={suggestionsOptions} />
            </Combobox>
          </FieldContainer>
        )
      }}
    />
  )
}
