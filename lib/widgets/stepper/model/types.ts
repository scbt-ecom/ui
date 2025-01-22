import type { SingleStepClasses } from '../ui/SingleStep'

export type StepperVariant = 'withTitleAndDescription' | 'onlyDescription'

export type SingleStepItem = {
  title?: string
  description: string
}

export type SingleStepProps = SingleStepItem & {
  index: number
  classes?: SingleStepClasses
  variant: StepperVariant
}
