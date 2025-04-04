import type { TextStepProps } from '../model'

export interface TextStep extends TextStepProps {
  stepIndex: number
}

export const TextStep = ({ stepIndex, subtitle, description }: TextStep) => {
  return (
    <div className='flex items-center gap-4'>
      <span className='text-[40px] font-semibold text-color-primary-default'>{stepIndex}</span>
      <span className='desk-body-medium-l'>{subtitle}</span>
      <p className='desk-body-medium-l'>{description}</p>
    </div>
  )
}
