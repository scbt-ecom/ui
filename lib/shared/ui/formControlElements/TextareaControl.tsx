'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps, TTextareaCommonProps } from './model'
import { FieldAttachment, FieldContainer, MessageView } from './ui'
import { cn } from '$/shared/utils'

type TTextareaClasses = Partial<TAdditionalInputClassesWithAttachment> & {
  head: string
  scrollArea: string
}

export interface ITextareaControlProps<T extends FieldValues> extends TControlledInputProps<T>, TTextareaCommonProps {
  classes?: Partial<TTextareaClasses>
}

export const TextareaControl = <T extends FieldValues>({
  label,
  size = 'full',
  helperText,
  control,
  classes,
  badge,
  icon,
  swapPosition,
  disabled,
  placeholder,
  onClickIcon,
  onKeyDownIcon,
  ...props
}: ITextareaControlProps<T>) => {
  const inputId = React.useId()
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
        <FieldContainer size={size} classes={classes}>
          <div
            className={cn(
              'flex flex-col h-[120px] transition-colors relative border-solid rounded-sm border border-transparent bg-color-blue-grey-100 group-focus-within:border-blue-grey-800  focus:outline-blue-grey-800 hover:bg-color-blue-grey-200 active:bg-color-blue-grey-100',
              { '!border-negative': error },
              { '!bg-color-blue-grey-100': disabled },
              classes?.field
            )}
          >
            <div className={cn('flex items-center justify-between px-4 pt-2', classes?.head)}>
              <label
                className={cn('text-color-tetriary desk-body-regular-s', { 'text-color-disabled': disabled }, classes?.label)}
                htmlFor={inputId}
              >
                {label}
              </label>
              <FieldAttachment
                onClickIcon={onClickIcon}
                onKeyDownIcon={onKeyDownIcon}
                badge={badge}
                icon={icon}
                error={!!error?.message}
                classes={classes}
                isTextarea
                swapPosition={swapPosition}
              />
            </div>

            <div className={cn('w-full flex items-start px-4 py-2', classes?.scrollArea)}>
              <textarea
                aria-invalid={error?.message ? 'true' : 'false'}
                ref={ref}
                className={cn(
                  'w-full h-[78px] desk-body-regular-l flex-1 customScrollbar-y text-color-dark placeholder:text-color-blue-grey-600 transition-all bg-color-transparent outline-none  rounded-md resize-none',
                  { 'placeholder:text-color-disabled': disabled },
                  classes?.input
                )}
                id={inputId}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                {...props}
              />
            </div>
          </div>

          <MessageView
            className={cn(classes?.message)}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
            disabled={disabled}
          />
        </FieldContainer>
      )}
    />
  )
}
