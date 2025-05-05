import { getInputSliderSuffix } from '../../../model/helpers'
import { type TSuffixVariants } from '../../../model/types'

interface UseSliderMarks {
  marks: number[]
  onChange?: (value: number) => void
  value: number | undefined
}

export const useSliderMarks = ({ marks, value, onChange }: UseSliderMarks) => {
  const sliderMin = Math.min(...marks)
  const sliderMax = Math.max(...marks)
  const sliderValue = value ?? 0

  const getSuffixText = (value: number | undefined, suffix: TSuffixVariants) => {
    if (!value) return ''

    return getInputSliderSuffix(suffix, value)
  }

  const handleChangeSlider = (value: number) => {
    if (value === undefined) {
      return
    }
    if (onChange) onChange(value)
  }

  return {
    handleChangeSlider,
    getSuffixText,
    sliderValue,
    sliderMin,
    sliderMax
  }
}
