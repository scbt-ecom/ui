interface UseSliderMarks {
  marks: number[]
  onChange?: (value: number) => void
}

export const useSliderMarks = ({ marks, onChange }: UseSliderMarks) => {
  const sliderMin = Math.min(...marks)
  const sliderMax = Math.max(...marks)

  const handleChangeSlider = (value?: number) => {
    if (!value) {
      return
    }
    if (onChange) onChange(value)
  }

  return {
    handleChangeSlider,
    sliderMin,
    sliderMax
  }
}
