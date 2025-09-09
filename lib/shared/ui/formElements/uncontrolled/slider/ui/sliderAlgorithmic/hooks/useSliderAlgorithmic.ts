import { useEffect } from 'react'
import { useLogarithmic } from '../../../model'

interface UseSliderAlgorithmic {
  min: number
  max: number
  defaultValue: number
  value: number | undefined
  onChange?: (value: number) => void
}

export const useSliderAlgorithmic = ({ min, max, defaultValue, value, onChange }: UseSliderAlgorithmic) => {
  const { fromSlider, toSlider, round } = useLogarithmic({ min, max, defaultSum: defaultValue })

  const sliderValue = toSlider(value)

  const sliderStep = 0.01

  const sliderMin = toSlider(min)
  const sliderMax = toSlider(max)

  useEffect(() => {
    if (!value) return

    if (value > max) {
      if (onChange) onChange(max)
    }
    if (value < min) {
      if (onChange) onChange(min)
    }
  }, [value, onChange, max, min])

  const handleChangeSlider = (value?: number) => {
    if (!value) {
      return
    }
    if (onChange) onChange(round(fromSlider(value)))
  }

  return {
    handleChangeSlider,
    toSlider,
    fromSlider,
    sliderValue,
    sliderStep,
    sliderMin,
    sliderMax
  }
}
