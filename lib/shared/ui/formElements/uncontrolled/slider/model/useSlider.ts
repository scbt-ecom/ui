import { getInputSliderSuffix } from './helpers'
import { type TSliderVariants } from './types'
import { useLogarithmic } from './useLogarithmic'

interface UseSlider {
  min: number
  max: number
  defaultValue: number
  value: number | undefined
  variant: TSliderVariants
}

export const useSlider = ({ min, max, defaultValue, value, variant }: UseSlider) => {
  const { fromSlider, toSlider, round } = useLogarithmic({ min, max, defaultSum: defaultValue })

  const getSuffixText = (value: number | undefined, variant: TSliderVariants) => {
    if (!value) return ''

    return getInputSliderSuffix(variant, value)
  }

  const sliderValue = variant === 'credit' ? toSlider(value) : value || 0

  const handleBlur = (value: number | undefined, onChange: (value: number) => void) => {
    if (!value) return

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
