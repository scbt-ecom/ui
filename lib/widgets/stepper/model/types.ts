import type { SingleStepClasses } from '../ui/SingleStep'

export type StepperVariant = 'withTitleAndDescription' | 'onlyDescription'

export type SingleStepItem = {
  title?: string
  description: string
  index?: number
  classes?: SingleStepClasses
  stepperVariant?: StepperVariant
  image?: {
    src: string
    alt: string
    base64?: string
  }
}

export type CarouselEnabled = {
  enabled: true
  images: [string, string, string]
}

export type CarouselDisabled = {
  enabled: false
}

export type Carousel<Enabled extends boolean> = Enabled extends true ? CarouselEnabled : CarouselDisabled

export type SingleStepper<Enabled extends boolean> = {
  headline: string
  stepperVariant: StepperVariant
  details: SingleStepItem[]
  carousel: Carousel<Enabled>
}
