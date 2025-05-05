import { forwardRef } from 'react'
import { type ComponentType, type SliderGatewayProps } from './model/types'
import { SliderAlgorithmic } from './ui/sliderAlgorithmic'
import { SliderMarks } from './ui/sliderMarks'
import { SliderStep } from './ui/sliderStep'

const Slider = <Type extends ComponentType>(props: SliderGatewayProps<Type>, ref: React.Ref<HTMLInputElement>) => {
  switch (props.componentType) {
    case 'marks':
      return <SliderMarks {...props} componentType='marks' ref={ref} />
    case 'algoritmic':
      return <SliderAlgorithmic {...props} componentType='algoritmic' ref={ref} />
    case 'step':
    default:
      return <SliderStep {...props} componentType='step' ref={ref} />
  }
}

export const SliderBase = forwardRef(Slider) as <Type extends ComponentType>(
  props: SliderGatewayProps<Type> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement
