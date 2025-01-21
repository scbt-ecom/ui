import { forwardRef, useEffect, useRef } from 'react'
import { OTPInput, type OTPInputProps, REGEXP_ONLY_DIGITS } from 'input-otp'
import { InputOTPSlot, type InputOTPSlotClasses } from './ui'
import { cn, mergeRefs } from '$/shared/utils'

export type InputOtpBaseClasses = {
  input?: string
  inputContainer?: string
  container?: string
  slot?: InputOTPSlotClasses
}

type ExternalHandlers = {
  onChange?: (value: string) => void
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
}

export type InputOtpBaseProps = Omit<OTPInputProps, 'render'> & {
  /**
   * Внешние классы которыми можно поменять стили
   */
  classes?: InputOtpBaseClasses
  /**
   * Изначальный автофокус
   */
  initialFocus?: boolean
  /**
   * Внешние handlers
   */
  externalHandlers?: ExternalHandlers
  /**
   * Для aria-invalid валидное или не валидное поле
   */
  invalid?: boolean
}

export const InputOtpBase = forwardRef<HTMLInputElement, InputOtpBaseProps>(
  ({ value, onChange, classes, maxLength = 4, initialFocus = true, externalHandlers, invalid, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (inputRef.current && initialFocus) {
        inputRef.current.focus()
      }
    }, [initialFocus])

    return (
      <>
        <OTPInput
          pattern={REGEXP_ONLY_DIGITS}
          value={value ?? ''}
          onChange={(newValue) => {
            onChange?.(newValue)
            externalHandlers?.onChange?.(newValue)
          }}
          ref={mergeRefs(inputRef, ref)}
          containerClassName={cn('flex items-center w-full', classes?.inputContainer)}
          className={cn('disabled:cursor-not-allowed', classes?.input)}
          onClick={externalHandlers?.onClick}
          maxLength={maxLength}
          onBlur={externalHandlers?.onBlur}
          aria-invalid={invalid}
          onFocus={externalHandlers?.onFocus}
          {...props}
        >
          <div className={cn('m-auto flex w-max items-center gap-4', classes?.container)}>
            {maxLength > 0 &&
              Array.from({ length: maxLength }, (_, inputIndex) => <InputOTPSlot key={inputIndex} index={inputIndex} />)}
          </div>
        </OTPInput>
      </>
    )
  }
)
