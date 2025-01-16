import { getInputSliderSuffix } from './helpers'
import { type TSliderVariants } from './types'
import { useLogarithmic } from './useLogarithmic'

export const useSlider = (min: number, max: number, defaultValue: number) => {
  const { fromSlider, toSlider, round } = useLogarithmic({ min, max, defaultSum: defaultValue })

  const getSuffixText = (value: number, variant: TSliderVariants) => {
    return getInputSliderSuffix(variant, value)
  }

  const handleBlur = (value: number, onChange: (value: number) => void) => {
    if (value > max) {
      onChange(max)
    }
    if (value < min) {
      onChange(min)
    }
  }

  const handleChange = (onChange: (...event: unknown[]) => void, val?: number) => {
    if (val === undefined) {
      return
    }
    onChange(round(val))
  }

  return { getSuffixText, handleBlur, handleChange, toSlider, fromSlider }
}
