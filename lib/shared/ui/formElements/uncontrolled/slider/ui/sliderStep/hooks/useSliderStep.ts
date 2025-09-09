import { useEffect } from 'react'

interface UseSliderStep {
  min: number
  max: number
  step: number
  onChange?: (value: number) => void
  value?: number
}

export const useSliderStep = ({ min, max, step, onChange, value }: UseSliderStep) => {
  const sliderStep = step ?? 1

  const sliderMin = min
  const sliderMax = max

  useEffect(() => {
    if (!value) return

    if (value > max) {
      if (onChange) onChange(max)
    }
    if (value < min) {
      if (onChange) onChange(min)
    }
  }, [max, min, onChange, value])

  const handleChangeSlider = (value?: number) => {
    if (!value) {
      return
    }
    if (onChange) onChange(value)
  }

  return {
    handleChangeSlider,
    sliderStep,
    sliderMin,
    sliderMax
  }
}
