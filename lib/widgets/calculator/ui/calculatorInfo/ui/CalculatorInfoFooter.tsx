import { type ButtonHandlerOptions, ButtonWithHandlers } from '../../../../buttonWithHandlers'
import { AssistHint, type AssistHintProps } from './AssistHint'
import { type ButtonProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface CalculatorInfoFooterProps {
  assistHint?: AssistHintProps
  buttonsConfig: Array<ButtonProps & { handlerOptions: ButtonHandlerOptions }>
  bottomDescription?: string
}

export const CalculatorInfoFooter = ({ assistHint, buttonsConfig, bottomDescription }: CalculatorInfoFooterProps) => {
  return (
    <div>
      {assistHint && <AssistHint {...assistHint} />}

      <div className={cn('flex items-center gap-4 mobile:flex-col')}>
        {buttonsConfig?.map((button, index) => <ButtonWithHandlers key={index} className='w-full' {...button} />)}
      </div>
      {bottomDescription && <p className='desk-body-regular-m mt-4 text-color-secondary'>{bottomDescription}</p>}
    </div>
  )
}
