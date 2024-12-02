'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import type { TCommonFieldProps } from './model/types'
import {
  FieldAttachment,
  FieldContainer,
  FieldWrapper,
  type IFieldAttachmentProps,
  MessageView,
  type TFieldAttachmentClasses,
  type TFieldContainerConfig,
  type TFieldWrapperClasses
} from './ui'
import { cn } from '$/shared/utils'

type TInputControlMaskClasses = TFieldAttachmentClasses &
  TFieldWrapperClasses & {
    input?: string
    message?: string
    inputContainer?: string
  }

export interface InputControlMaskProps<T extends FieldValues>
  extends TCommonFieldProps<T>,
    Omit<IFieldAttachmentProps, 'invalid' | 'isTouched'> {
  format: string
  mask?: string | string[]
  allowEmptyFormatting?: boolean
  onInputChange?: (arg?: string) => void
  classes?: TInputControlMaskClasses
  size?: TFieldContainerConfig['size']
  disabled?: boolean
}

export const InputControlMask = <T extends FieldValues>({
  format,
  allowEmptyFormatting = false,
  mask = '',
  control,
  onInputChange,
  size = 'full',
  label,
  helperText,
  disabled,
  classes,
  badge,
  withValidateIcons = true,
  icon,
  onClickIcon,
  onKeyDownIcon,
  ...props
}: InputControlMaskProps<T>) => {
  const inputId = React.useId()
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value, onBlur, ref }, fieldState: { error, invalid, isTouched } }) => (
        <FieldContainer size={size} className={classes?.inputContainer}>
          <FieldWrapper
            label={label}
            value={value}
            error={Boolean(error?.message)}
            fieldId={inputId}
            disabled={disabled}
            classes={classes}
          >
            <>
              <PatternFormat
                id={inputId}
                aria-invalid={error?.message ? 'true' : 'false'}
                value={value ?? ''}
                format={format}
                allowEmptyFormatting={allowEmptyFormatting}
                mask={mask}
                onChange={(e) => {
                  onChange(e)
                  if (onInputChange) {
                    onInputChange(e.target.value)
                  }
                }}
                className={cn(
                  'desk-body-regular-l h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                  classes?.input
                )}
                onBlur={onBlur}
                getInputRef={ref}
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
            </>
          </FieldWrapper>
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
