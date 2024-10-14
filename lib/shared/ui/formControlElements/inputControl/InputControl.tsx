'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps, TInputCommonProps } from '../model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
import { useInputPassword } from './model/hooks'
import { cn } from '$/shared/utils'

export interface InputControlProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  classes?: Partial<TAdditionalInputClassesWithAttachment>
  variant?: 'base' | 'password'
}

export const InputControl = <T extends FieldValues>({
  label,
  size = 'full',
  helperText,
  control,
  classes,
  badge,
  icon,
  swapPosition,
  disabled,
  variant,
  onClickIcon,
  onKeyDownIcon,
  ...props
}: InputControlProps<T>) => {
  const inputId = React.useId()
  const isPassport = variant === 'password'
  const { displayPasswordIcon, passportIsVisible, handleShowPassword } = useInputPassword(onClickIcon)

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
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
              <input
                type={isPassport && !passportIsVisible ? 'password' : 'text'}
                aria-invalid={error?.message ? 'true' : 'false'}
                ref={ref}
                className={cn(
                  'w-full h-[56px] desk-body-regular-l text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md',
                  classes?.input
                )}
                id={inputId}
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...props}
              />
              <FieldAttachment
                onClickIcon={isPassport ? handleShowPassword : onClickIcon}
                onKeyDownIcon={onKeyDownIcon}
                badge={badge}
                icon={isPassport ? displayPasswordIcon() : icon}
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
        </FieldContainer>
      )}
    />
  )
}
