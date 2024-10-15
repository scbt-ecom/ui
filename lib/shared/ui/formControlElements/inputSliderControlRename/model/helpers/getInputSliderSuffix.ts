import { type TSliderVariants } from '../types'
import { getYearEnding } from './dates'

export const getInputSliderSuffix = (variant: TSliderVariants, value: number) => {
  const variants = {
    years: getYearEnding(value),
    credit: '₽'
  }

  return variants[variant]
}

export const getMinMaxTextSlider = (variant: TSliderVariants, min: number, max: number) => {
  const variants = {
    years: [min, max].map(getYearEnding),
    credit: ['₽', '₽']
  }

  return variants[variant]
}
