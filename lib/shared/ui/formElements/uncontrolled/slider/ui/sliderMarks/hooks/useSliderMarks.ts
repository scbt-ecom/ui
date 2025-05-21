interface UseSliderMarks {
  marks: number[]
  onChange?: (value: number) => void
  value: number | undefined
}

export const useSliderMarks = ({ marks, onChange, value }: UseSliderMarks) => {
  const sliderMin = Math.min(...marks)
  const sliderMax = Math.max(...marks)

  const handleChangeSlider = (value?: number) => {
    if (!value) {
      return
    }
    if (onChange) onChange(value)
  }

  const handleBlur = () => {
    if (value && value > sliderMax) {
      onChange?.(sliderMax)
    }
  }

  return {
    handleChangeSlider,
    handleBlur,
    sliderMin,
    sliderMax
  }
}
