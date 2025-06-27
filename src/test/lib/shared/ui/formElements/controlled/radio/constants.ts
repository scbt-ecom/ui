import { object } from 'zod'
import { type DataAttributes } from '@/test/utils/types'
import { type RadioGroupControl, type RadioOption } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'
type RadioProps = React.ComponentPropsWithoutRef<typeof RadioGroupControl> & DataAttributes

export const baseSchema = object({
  field: zodValidators.base.getSelectSchema()
})

export const optionalSchema = object({
  field: zodValidators.base.getSelectSchema({ required: false })
})

const disabledOptions: RadioOption[] = [
  {
    value: `value_0`,
    label: `Value 0`,
    id: 0,
    disabled: true
  },
  {
    value: `value_1`,
    label: `Value 1`,
    id: 1
  }
]

const getOptions = (length: number = 10) =>
  Array.from({ length }).map<RadioOption>((_, index) => ({
    value: `value_${index}`,
    label: `Value ${index}`,
    id: index
  }))

export const radioDefaultProps: Omit<RadioProps, 'control'> = {
  name: 'field',
  options: getOptions(),
  label: 'Radio',
  'data-test-id': 'radio'
}

export const radioPropsWithDisabledOption: Omit<RadioProps, 'control'> = {
  name: 'field',
  options: disabledOptions,
  label: 'Radio',
  'data-test-id': 'radio'
}
