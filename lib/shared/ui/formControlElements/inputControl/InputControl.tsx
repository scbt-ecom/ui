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
      render={({ field: { onChange, ref: controlledRef, value }, fieldState: { error } }) => (
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
                aria-invalid={error?.message ? 'true' : 'false'}
                ref={controlledRef}
                type={isPassport && !passportIsVisible ? 'password' : 'text'}
                className={cn(
                  'desk-body-regular-l h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
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
