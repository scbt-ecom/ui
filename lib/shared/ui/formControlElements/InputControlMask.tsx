'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps, TInputCommonProps } from './model'
import { FieldAttachment, FieldWrapper, MessageView } from './ui'
import { FieldContainer } from './ui/FieldContainer'
import { cn } from '$/shared/utils'

export interface InputControlMaskProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  format: string
  mask?: string | string[]
  allowEmptyFormatting?: boolean
  onInputChange?: (arg?: string) => void
  classes?: Partial<TAdditionalInputClassesWithAttachment>
}

export const InputControlMask = <T extends FieldValues>({
  format,
  allowEmptyFormatting = false,
  mask = '',
  control,
  onInputChange,
  size = 'full',
  helperText,
  label,
  classes,
  disabled,
  badge,
  icon,
  swapPosition,
  onClickIcon,
  onKeyDownIcon,
  ...props
}: InputControlMaskProps<T>) => {
  const inputId = React.useId()
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FieldContainer size={size} classes={classes}>
          <FieldWrapper
            fieldId={inputId}
            label={label}
            classes={classes}
            disabled={disabled}
            value={value}
            error={!!error?.message}
          >
            <>
              <PatternFormat
                value={value?.toString()}
                className={cn(
                  'w-full h-[56px] desk-body-regular-l  text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md',
                  classes?.input
                )}
                format={format}
                allowEmptyFormatting={allowEmptyFormatting}
                mask={mask}
                onChange={(e) => {
                  onChange(e)
                  if (onInputChange) {
                    onInputChange(e.target.value)
                  }
                }}
                {...props}
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
          />
        </FieldContainer>
      )}
    />
  )
}
