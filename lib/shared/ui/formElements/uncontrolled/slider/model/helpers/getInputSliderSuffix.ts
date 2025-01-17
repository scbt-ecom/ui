import { type TSliderVariants } from '../types'
import { getYearIntl } from './dates'

export const getInputSliderSuffix = (variant: TSliderVariants, value: number) => {
  const variants = {
    years: getYearIntl(value),
    credit: '₽'
  }

  return variants[variant]
}
