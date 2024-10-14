import { getInputSliderSuffix } from '../helpers'
import { type TSliderVariants } from '../model/types'

export const useSlider = () => {
  const getSuffixText = (value: number, variant: TSliderVariants) => {
    return getInputSliderSuffix(variant, value)
  }

  const handleBlur = (value: number, min: number, max: number, onChange: (...event: unknown[]) => void) => {
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
    onChange(val)
  }

  return { getSuffixText, handleBlur, handleChange }
}
