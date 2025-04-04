import type { TextStepProps } from './model'
import { TextStep } from './ui'

export interface CarouselWithStepsProps {
  heading: string
  textSteps: TextStepProps[]
  slides: any[]
}

export const CarouselWithSteps = ({ heading, textSteps, slides }: CarouselWithStepsProps) => {
  return (
    <div>
      <div className='flex flex-col gap-8'>
        {textSteps?.map((step, stepIndex) => <TextStep key={step.subtitle} stepIndex={stepIndex} {...step} />)}
      </div>
    </div>
  )
}
