import { getInputSliderSuffix } from './helpers'
import { type TSliderVariants } from './types'
import { useLogarithmic } from './useLogarithmic'

interface UseSlider {
  min: number
  max: number
  defaultValue: number
  value: number
  variant: TSliderVariants
}

export const useSlider = ({ min, max, defaultValue, value, variant }: UseSlider) => {
  const { fromSlider, toSlider, round } = useLogarithmic({ min, max, defaultSum: defaultValue })

  const getSuffixText = (value: number, variant: TSliderVariants) => {
    return getInputSliderSuffix(variant, value)
  }

  const sliderValue = variant === 'credit' ? toSlider(value) : value

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
    onChange(variant === 'credit' ? round(val) : val)
  }

  return { getSuffixText, handleBlur, handleChange, toSlider, fromSlider, sliderValue }
}
