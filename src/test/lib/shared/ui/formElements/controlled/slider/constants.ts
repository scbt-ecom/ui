import { object } from 'zod'
import { type Controlled } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'

type SliderProps = React.ComponentPropsWithoutRef<typeof Controlled.SliderControl> & {
  'data-test-id'?: string
}

export const baseSchema = object({
  field: zodValidators.base.getNumberSchema({
    min: 30_000,
    max: 5_000_000
  })
})

export const sliderDefaultProps: Omit<SliderProps, 'control'> = {
  name: 'Slider',
  sliderProps: {
    componentType: 'step',
    step: 1,
    label: 'Slider',
    min: 30_000,
    max: 5_000_000,
    suffix: 'currency',
    leftText: 'Text',
    rightText: 'Text'
  },
  'data-test-id': 'slider'
}
