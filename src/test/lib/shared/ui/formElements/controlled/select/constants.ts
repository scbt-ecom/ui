import { object } from 'zod'
import { type SelectItemOption } from '$/shared/ui'
import { zodValidators } from '$/shared/validation'

export const baseSchema = object({
  field: zodValidators.base.getSelectSchema()
})

export const multipleSchema = object({
  field: zodValidators.base.getSelectSchema({ multiple: true, minLength: 1 })
})

export const optionalSchema = object({
  field: zodValidators.base.getSelectSchema({ required: false })
})

export const getOptions = (length: number = 10) =>
  Array.from({ length }).map<SelectItemOption>((_, index) => ({
    value: `value_${index}`,
    label: `Value ${index}`
  }))

export const selectBaseProps = {
  label: 'Pick a value',
  name: 'field',
  options: getOptions(),
  'data-test-id': 'select'
}
