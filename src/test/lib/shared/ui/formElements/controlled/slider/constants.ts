import { object } from 'zod'
import { type SliderControl } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderControl> & {
  'data-test-id'?: string
}

export const baseSchema = object({
  field: zodValidators.base.getNumberSchema({
    min: 30_000,
    max: 5_000_000,
    defaultValue: 30_000
  })
})

export const sliderDefaultProps: Omit<SliderProps, 'control'> = {
  name: 'Slider',
  componentType: 'algorithmic',
  label: 'Slider',
  min: 30_000,
  max: 5_000_000,
  suffix: 'currency',
  'data-test-id': 'slider'
}
