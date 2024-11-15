import { type TSliderVariants } from '../types'
import { getYearEnding } from './dates'

export const getInputSliderSuffix = (variant: TSliderVariants, value: number) => {
  const variants = {
    years: getYearEnding(value),
    credit: '₽'
  }

  return variants[variant]
}
