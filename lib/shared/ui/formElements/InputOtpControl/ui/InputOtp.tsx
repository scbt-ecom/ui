import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import { OTPInput } from 'input-otp'
import { cn } from '$/shared/utils'

export type TInputOTPClasses = {
  inputContainer?: string
  input?: string
}

type TInputOTPProps = ComponentPropsWithoutRef<typeof OTPInput> & {
  classes?: TInputOTPClasses
}

export const InputOTP = forwardRef<ElementRef<typeof OTPInput>, TInputOTPProps>(({ classes, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn('flex items-center w-full', classes?.inputContainer)}
    className={cn('disabled:cursor-not-allowed', classes?.input)}
    {...props}
  />
))

InputOTP.displayName = 'InputOTP'
