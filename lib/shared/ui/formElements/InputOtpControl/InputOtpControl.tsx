import { useEffect, useRef } from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { type TCommonFieldProps } from '../model/types'
import { MessageView } from '../ui'
import { InputOTP, InputOTPSlot, type TInputOTPClasses, type TInputOTPSlotClasses } from './ui'
import { cn } from '$/shared/utils'

export type TInputOtpControlClasses = TInputOTPClasses &
  TInputOTPSlotClasses & {
    root?: string
    wrapper?: string
    message?: string
  }

export interface IInputOtpControlProps<T extends FieldValues> extends TCommonFieldProps<T> {
  inputLength?: number
  classes?: TInputOtpControlClasses
  disabled?: boolean
  initialFocus?: boolean
}

export const InputOtpControl = <T extends FieldValues>({
  control,
  inputLength = 4,
  classes,
  disabled,
  helperText,
  initialFocus = true,
  ...props
}: IInputOtpControlProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current && initialFocus) {
      inputRef.current.focus()
    }
  }, [initialFocus])

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <div className={cn('m-auto w-max', classes?.root)}>
          <InputOTP pattern={REGEXP_ONLY_DIGITS} value={value ?? ''} {...field} maxLength={inputLength}>
            <div className={cn('m-auto flex w-max items-center gap-4', classes?.wrapper)}>
              {inputLength > 0 &&
                Array.from({ length: inputLength }, (_, inputIndex) => <InputOTPSlot key={inputIndex} index={inputIndex} />)}
            </div>
          </InputOTP>
          <MessageView
            className={classes?.message}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
            disabled={disabled}
          />
        </div>
      )}
    />
  )
}
