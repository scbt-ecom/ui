import { ButtonWithHandlers, type ButtonWithHandlersProps } from '../../../../buttonWithHandlers'
import { AssistHint, type AssistHintClasses, type AssistHintProps } from './AssistHint'
import { cn } from '$/shared/utils'

export type CalculatorInfoFooterClasses = {
  assistHint?: AssistHintClasses
  buttonsWrapper?: string
  bottomDescription?: string
}

export interface CalculatorInfoFooterProps {
  assistHint?: AssistHintProps
  buttonsConfig: ButtonWithHandlersProps[]
  bottomDescription?: string
  classes?: CalculatorInfoFooterClasses
}

export const CalculatorInfoFooter = ({ assistHint, buttonsConfig, bottomDescription, classes }: CalculatorInfoFooterProps) => {
  return (
    <div>
      {assistHint && <AssistHint {...assistHint} classes={classes?.assistHint} />}

      <div className={cn('flex items-center gap-4 mobile:flex-col', classes?.buttonsWrapper)}>
        {buttonsConfig?.map((button, index) => <ButtonWithHandlers key={index} className='w-full' {...button} />)}
      </div>
      {bottomDescription && (
        <p className={cn('desk-body-regular-m mt-4 text-color-secondary', classes?.bottomDescription)}>{bottomDescription}</p>
      )}
    </div>
  )
}
