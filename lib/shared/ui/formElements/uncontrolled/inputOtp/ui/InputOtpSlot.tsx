import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, useContext } from 'react'
import { OTPInputContext } from 'input-otp'
import { cn } from '$/shared/utils'

export type InputOTPSlotClasses = {
  singleChar?: string
  caretWrapper?: string
  caret?: string
  substrate?: string
}

interface InputOTPSlotProps extends ComponentPropsWithoutRef<'div'> {
  index: number
  classes?: InputOTPSlotClasses
  invalid?: boolean
}

export const InputOTPSlot = forwardRef<ElementRef<'div'>, InputOTPSlotProps>(({ index, classes, invalid, ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        'desk-headline-bold-m relative flex size-10 items-center justify-center bg-color-dark bg-color-transparent',
        classes?.singleChar
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={cn('pointer-events-none absolute inset-0 flex items-center justify-center', classes?.caretWrapper)}>
          <div className={cn('h-5 w-px animate-caret-blink bg-color-dark duration-1000', classes?.caret)} />
        </div>
      )}
      <span
        className={cn(
          'absolute bottom-0 h-px w-8 bg-color-blue-grey-500',
          { 'bg-color-dark': isActive, 'bg-color-negative': invalid },
          classes?.substrate
        )}
      ></span>
    </div>
  )
})

InputOTPSlot.displayName = 'InputOTPSlot'
