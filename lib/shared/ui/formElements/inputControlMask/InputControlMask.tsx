'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { type NumberFormatValues, PatternFormat, type SourceInfo } from 'react-number-format'
import type { TCommonFieldProps } from '../model/types'
import {
  FieldAttachment,
  FieldContainer,
  FieldWrapper,
  type IFieldAttachmentProps,
  MessageView,
  type TFieldAttachmentClasses,
  type TFieldContainerConfig,
  type TFieldWrapperClasses
} from '../ui'
import { useInputControlMask } from './model/useInputControlMask'
import { cn } from '$/shared/utils'

type TInputControlMaskClasses = TFieldAttachmentClasses &
  TFieldWrapperClasses & {
    input?: string
    message?: string
    inputContainer?: string
  }

export type TInputMode = 'phone' | undefined

export type TActions = {
  customInputChange?: (value: NumberFormatValues, source: SourceInfo) => void
  customPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void
  customFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  customBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export interface InputControlMaskProps<T extends FieldValues>
  extends TCommonFieldProps<T>,
    Omit<IFieldAttachmentProps, 'invalid' | 'isTouched'> {
  format: string
  mask?: string | string[]
  allowEmptyFormatting?: boolean
  classes?: TInputControlMaskClasses
  size?: TFieldContainerConfig['size']
  disabled?: boolean
  mode?: TInputMode
  actions?: TActions
}

/**
 * @deprecated For better performance use `Controlled.MaskInput` instead.
 */
export const InputControlMask = <T extends FieldValues>({
  format,
  allowEmptyFormatting = false,
  mask,
  control,
  actions,
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
  mode,
  ...props
}: InputControlMaskProps<T>) => {
  const inputId = React.useId()
  const [showMask, setShowMask] = React.useState(false)
  const maskIsVisible = allowEmptyFormatting && showMask && Boolean(mask)

  const { onValueChange, onPaste, onFocus, onBlur } = useInputControlMask(actions, mode)

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value, onBlur: hookFormBlur, ref }, fieldState: { error, invalid, isTouched } }) => {
        return (
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
                  autoComplete={mode === 'phone' ? 'off' : 'on'}
                  format={format}
                  allowEmptyFormatting={maskIsVisible}
                  mask={mask}
                  onValueChange={(inputValue, source) => onValueChange({ inputValue, source, onChange })}
                  onPaste={(event: React.ClipboardEvent<HTMLInputElement>) => onPaste({ event, onChange })}
                  onFocus={(event) => onFocus({ event, setShowMask })}
                  onBlur={(event) => onBlur({ event, setShowMask, hookFormBlur })}
                  getInputRef={ref}
                  className={cn(
                    'desk-body-regular-l h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                    classes?.input
                  )}
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
        )
      }}
    />
  )
}
