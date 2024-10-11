'use client'

import { Controller, type FieldValues } from 'react-hook-form'
import { Listbox, ListboxOptions } from '@headlessui/react'
import type { TControlledInputProps, TFieldContainerClasses } from '../model'
import { FieldContainer, MessageView } from '../ui'
import {
  CustomListboxButton,
  CustomOption,
  type ISelectOption,
  type TCustomListboxButtonClasses,
  type TCustomOptionClasses
} from './ui'
import { cn } from '$/shared/utils'

type ISelectControlClasses = TCustomOptionClasses &
  TCustomListboxButtonClasses &
  TFieldContainerClasses & {
    optionsList: string
    scrollArea: string
  }

export type TCommonSelectProps = {
  intent?: 'filled' | 'clear' | null
  multiple?: boolean // !!! ONLY FOR FILLED INTENT !!!
  disabled?: boolean
  error?: string
}

export interface ISelectControlProps<T extends FieldValues> extends TControlledInputProps<T>, TCommonSelectProps {
  classes?: Partial<ISelectControlClasses>
  optionsList: ISelectOption[]
  anchorConfig?: {
    gap?: number | string
    offset?: number | string
    padding?: number | string
  }
}

export const SelectControl = <T extends FieldValues>({
  size,
  control,
  helperText,
  disabled,
  classes,
  optionsList,
  label,
  multiple = false,
  intent = 'filled',
  anchorConfig = {
    gap: 8
  },
  ...props
}: ISelectControlProps<T>) => {
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, name, value: controlledValue }, fieldState: { error } }) => {
        const selectedValues: ISelectOption[] = Array.isArray(controlledValue) ? controlledValue : []

        return (
          <FieldContainer intent={intent} size={size} classes={classes}>
            <Listbox
              disabled={disabled}
              value={multiple && intent === 'filled' ? selectedValues : controlledValue}
              onChange={onChange}
              name={name}
              multiple={multiple && intent === 'filled'}
            >
              <CustomListboxButton
                intent={intent}
                label={label}
                controlledValue={controlledValue}
                multiple={multiple}
                disabled={disabled}
                error={error?.message}
                classes={classes}
              />
              <MessageView
                className={cn(classes?.message)}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
              <ListboxOptions
                className={cn(
                  'bg-color-white items-start justify-start shadow-sm w-select-trigger outline-transparent scrollHidden p-2 data-[closed]:opacity-0 transition-opacity duration-200',
                  classes?.optionsList
                )}
                transition
                anchor={anchorConfig}
              >
                <div className={cn('p-2 customScrollbar-y overflow-x-hidden !max-h-[246px]', classes?.scrollArea)}>
                  {optionsList?.map((option) => <CustomOption key={option.optionValue} classes={classes} {...option} />)}
                </div>
              </ListboxOptions>
            </Listbox>
          </FieldContainer>
        )
      }}
    />
  )
}
