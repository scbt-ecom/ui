import { object, type TypeOf } from 'zod'
import { type ComboboxControlProps, type ComboboxItemOption } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'

export const baseSchema = object({
  field: zodValidators.base.getSelectSchema()
})

export const optionalSchema = object({
  field: zodValidators.base.getSelectSchema({ required: false })
})

const options: ComboboxItemOption[] = [
  {
    value: 'value_1',
    label: 'Value 1'
  },
  {
    value: 'value_2',
    label: 'Value 2'
  }
]

export const props: Omit<ComboboxControlProps<false, TypeOf<typeof baseSchema>>, 'control'> = {
  name: 'field',
  label: 'Combobox',
  options,
  'data-test-id': 'combobox'
}
