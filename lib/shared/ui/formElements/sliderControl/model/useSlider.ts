import { getInputSliderSuffix } from './helpers'
import { type TSliderVariants } from './types'
import { useLogarithmic } from './useLogarithmic'

export const useSlider = (min: number, max: number, defaultValue: number) => {
  const logarithmicRange = useLogarithmic({ min, max, defaultSum: defaultValue })

  const getSuffixText = (value: number, variant: TSliderVariants) => {
    return getInputSliderSuffix(variant, value)
  }

  const handleBlur = (value: number, onChange: (...event: unknown[]) => void) => {
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
    onChange(logarithmicRange.round(val))
  }

  const toSliderValue = (value: number) => {
    return logarithmicRange.toSlider(value)
  }

  const fromSliderValue = (value: number) => {
    return logarithmicRange.fromSlider(value)
  }

  return { getSuffixText, handleBlur, handleChange, toSliderValue, fromSliderValue }
}
