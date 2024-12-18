import { type TSliderVariants } from '../types'

export const getStepByVariant = (variant: TSliderVariants) => {
  const variants = {
    years: 1,
    credit: 0.01
  }

  return variants[variant]
}
