import { Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TextStep = {
  subtitle: string
  description?: string
}

export interface TextStepsProps extends TextStep {
  stepIndex: number
  visibleIndex: number
}

export interface TextStepsListProps {
  textSteps: TextStep[]
  visibleIndex: number
  heading?: string
}

const TextStep = ({ subtitle, description, stepIndex, visibleIndex }: TextStepsProps) => {
  const isCurrentStep = stepIndex === visibleIndex

  return (
    <div className={cn('flex items-center gap-4', { 'mobile:hidden': !isCurrentStep })}>
      <span className={cn('text-[40px] font-semibold text-[#9ADCFE]', { 'text-[#02A8FC]': isCurrentStep })}>{stepIndex}</span>

      <div className='flex flex-col gap-1'>
        <h5 className={cn('desk-body-medium-l text-color-tetriary', { 'text-color-dark': isCurrentStep })}>{subtitle}</h5>
        <p className={cn('desk-body-regular-m text-color-tetriary', { 'text-color-dark': isCurrentStep })}>{description}</p>
      </div>
    </div>
  )
}

export const TextStepsList = ({ textSteps, visibleIndex, heading }: TextStepsListProps) => {
  return (
    <div className='flex max-w-[512px] flex-col gap-10'>
      {heading && <Heading as='h2'>{heading}</Heading>}

      {textSteps?.map((step, stepIndex) => (
        <TextStep key={step.subtitle} visibleIndex={visibleIndex} stepIndex={stepIndex} {...step} />
      ))}
    </div>
  )
}
