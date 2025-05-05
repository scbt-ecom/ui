import { getInputSliderSuffix } from '../../../model/helpers'
import { type TSuffixVariants } from '../../../model/types'

interface UseSliderStep {
  min: number
  max: number
  defaultValue: number
  value: number | undefined
  step: number
  onChange?: (value: number) => void
}

export const useSliderStep = ({ min, max, value, step, onChange }: UseSliderStep) => {
  const getSuffixText = (value: number | undefined, suffix: TSuffixVariants) => {
    if (!value) return ''

    return getInputSliderSuffix(suffix, value)
  }

  const sliderValue = value ?? 0

  const sliderStep = step ?? 1

  const sliderMin = min
  const sliderMax = max

  const handleBlur = (value: number | undefined) => {
    if (!value) return

    if (value > max) {
      if (onChange) onChange(max)
    }
    if (value < min) {
      if (onChange) onChange(min)
    }
  }

  const handleChangeSlider = (value: number) => {
    if (value === undefined) {
      return
    }
    if (onChange) onChange(value)
  }

  return {
    getSuffixText,
    handleBlur,
    handleChangeSlider,
    sliderValue,
    sliderStep,
    sliderMin,
    sliderMax
  }
}
