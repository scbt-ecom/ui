import { type TSliderVariants } from '$/shared/ui/formControlElements/InputSliderControl/model/types'

const getStepCredit = (value: number) => {
  const step = 1000

  const firstStep = value < 100_000
  const secondStep = value >= 100_000 && value < 500_000
  const max = value >= 1_000_000

  switch (true) {
    case firstStep:
      return 1000
    case secondStep:
      return 10_000
    case max:
      return 100_000
    default:
      return step
  }
}

export const getStepByVariant = (value: number, variant: TSliderVariants) => {
  const variants = {
    years: 1,
    credit: getStepCredit(value)
  }

  return variants[variant]
}
