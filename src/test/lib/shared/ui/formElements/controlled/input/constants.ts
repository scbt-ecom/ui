import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const inputDefaultProps = {
  name: 'field',
  label: 'Input',
  'data-test-id': 'input'
}

export const optionalSchema = object({
  field: zodValidators.base.getStringSchema({ required: false })
})
