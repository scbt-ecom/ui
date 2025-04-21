import { AssistHint, type AssistHintProps } from './AssistHint'
import { Button, type ButtonProps } from '$/shared/ui'

export interface CalculatorInfoFooterProps {
  assistHint?: AssistHintProps
  buttonProps?: ButtonProps
  bottomDescription?: string
}

export const CalculatorInfoFooter = ({ assistHint, buttonProps, bottomDescription }: CalculatorInfoFooterProps) => {
  return (
    <div>
      {assistHint && <AssistHint {...assistHint} />}
      {buttonProps && (
        <Button className='w-full' {...buttonProps}>
          {buttonProps.children}
        </Button>
      )}
      {bottomDescription && <p className='desk-body-regular-m mt-4 text-color-secondary'>{bottomDescription}</p>}
    </div>
  )
}
