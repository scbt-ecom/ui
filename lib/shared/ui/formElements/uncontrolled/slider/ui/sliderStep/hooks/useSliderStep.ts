interface UseSliderStep {
  min: number
  max: number
  step: number
  onChange?: (value: number) => void
}

export const useSliderStep = ({ min, max, step, onChange }: UseSliderStep) => {
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

  const handleChangeSlider = (value?: number) => {
    if (!value) {
      return
    }
    if (onChange) onChange(value)
  }

  return {
    handleBlur,
    handleChangeSlider,
    sliderStep,
    sliderMin,
    sliderMax
  }
}
