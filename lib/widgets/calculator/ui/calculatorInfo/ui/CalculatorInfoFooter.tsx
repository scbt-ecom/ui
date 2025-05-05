import { AssistHint, type AssistHintProps } from './AssistHint'
import { Button, type ButtonProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface CalculatorInfoFooterProps {
  assistHint?: AssistHintProps
  buttonsConfig: {
    primaryBtn: ButtonProps
    secondaryBtn?: ButtonProps
  }
  bottomDescription?: string
}

export const CalculatorInfoFooter = ({ assistHint, buttonsConfig, bottomDescription }: CalculatorInfoFooterProps) => {
  const { primaryBtn } = buttonsConfig
  return (
    <div>
      {assistHint && <AssistHint {...assistHint} />}

      <div className={cn('flex items-center gap-4 mobile:flex-col')}>
        <Button className='w-full' {...primaryBtn}>
          {primaryBtn.children}
        </Button>

        {buttonsConfig?.secondaryBtn && (
          <Button className='w-full' intent='secondary' {...buttonsConfig.secondaryBtn}>
            {buttonsConfig.secondaryBtn.children}
          </Button>
        )}
      </div>
      {bottomDescription && <p className='desk-body-regular-m mt-4 text-color-secondary'>{bottomDescription}</p>}
    </div>
  )
}
