'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { type TCommonFieldProps } from './model/types'
import {
  FieldAttachment,
  FieldContainer,
  type IFieldAttachmentProps,
  MessageView,
  type TFieldAttachmentClasses,
  type TFieldContainerConfig,
  type TFieldWrapperClasses
} from './ui'
import { cn } from '$/shared/utils'

type TTextareaControlClasses = TFieldAttachmentClasses &
  TFieldWrapperClasses & {
    root?: string
    field?: string
    head?: string
    label?: string
    scrollArea?: string
    input?: string
    message?: string
  }

export interface ITextareaControlProps<T extends FieldValues>
  extends TCommonFieldProps<T>,
    Omit<IFieldAttachmentProps, 'invalid' | 'isTouched'> {
  classes?: TTextareaControlClasses
  size?: TFieldContainerConfig['size']
  disabled?: boolean
  placeholder?: string
}

export const TextareaControl = <T extends FieldValues>({
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
  placeholder,
  ...props
}: ITextareaControlProps<T>) => {
  const inputId = React.useId()

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState: { error, invalid, isTouched } }) => (
        <FieldContainer size={size} className={classes?.root}>
          <div
            className={cn(
              'relative flex h-[120px] flex-col rounded-sm border border-solid border-transparent bg-color-blue-grey-100 transition-colors hover:bg-color-blue-grey-200 focus:outline-blue-grey-800 active:bg-color-blue-grey-100 group-focus-within:border-blue-grey-800',
              { '!border-negative': error },
              { '!bg-color-blue-grey-100': disabled },
              classes?.field
            )}
          >
            <div className={cn('flex items-center justify-between px-4 pt-2', classes?.head)}>
              <label
                className={cn('desk-body-regular-s text-color-tetriary', { 'text-color-disabled': disabled }, classes?.label)}
                htmlFor={inputId}
              >
                {label}
              </label>
              <FieldAttachment
                badge={badge}
                withValidateIcons={withValidateIcons}
                icon={icon}
                onClickIcon={onClickIcon}
                onKeyDownIcon={onKeyDownIcon}
                invalid={invalid}
                isTouched={isTouched}
                classes={{
                  fieldAttachmentRoot: cn('mr-0', classes?.fieldAttachmentRoot),
                  ...classes
                }}
              />
            </div>

            <div className={cn('flex w-full items-start px-4 py-2', classes?.scrollArea)}>
              <textarea
                aria-invalid={error?.message ? 'true' : 'false'}
                id={inputId}
                disabled={disabled}
                placeholder={placeholder}
                className={cn(
                  'customScrollbar-y desk-body-regular-l h-[78px] w-full flex-1 resize-none rounded-md bg-color-transparent text-color-dark outline-none transition-all placeholder:text-color-blue-grey-600',
                  { 'placeholder:text-color-disabled': disabled },
                  classes?.input
                )}
                {...field}
                {...props}
              />
            </div>
          </div>
          <MessageView
            className={classes?.message}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
            disabled={disabled}
          />
        </FieldContainer>
      )}
    />
  )
}
