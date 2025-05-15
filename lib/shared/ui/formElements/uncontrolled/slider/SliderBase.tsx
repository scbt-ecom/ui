import { forwardRef } from 'react'
import { type SliderGatewayProps } from './model/types'
import { SliderAlgorithmic } from './ui/sliderAlgorithmic'
import { SliderMarks } from './ui/sliderMarks'
import { SliderStep } from './ui/sliderStep'

export const SliderBase = forwardRef<HTMLInputElement, SliderGatewayProps>((props, ref) => {
  switch (props.componentType) {
    case 'marks':
      return <SliderMarks {...props} ref={ref} componentType='marks' />
    case 'algorithmic':
      return <SliderAlgorithmic {...props} ref={ref} componentType='algorithmic' />
    case 'step':
    default:
      return <SliderStep {...props} ref={ref} componentType='step' />
  }
})
