import type { SingleStepClasses } from '../ui/SingleStep'

export type SingleStep = SingleStepItemWithImage | SingleStepItemWithoutImage

export type SingleStepItemWithImage = {
  type?: 'withImage'
  title?: string
  description: string
  index?: number
  classes?: SingleStepClasses
  image: {
    src: string
    alt: string
  }
}

export type SingleStepItemWithoutImage = {
  type?: 'withoutImage'
  title?: string
  description: string
  index?: number
  classes?: SingleStepClasses
}

type SingleStepperWithImages<WithImages extends true> = {
  withImages: WithImages
  headline: string
  details: SingleStepItemWithImage[]
}

type SingleStepperWithoutImages<WithImages extends boolean> = {
  withImages: WithImages
  headline: string
  details: SingleStepItemWithoutImage[]
}

export type SingleStepper<WithImages extends boolean> = WithImages extends true
  ? SingleStepperWithImages<WithImages>
  : SingleStepperWithoutImages<WithImages>
