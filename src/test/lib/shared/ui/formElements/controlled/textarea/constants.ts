import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const textareaDefaultProps = {
  name: 'field',
  label: 'Textarea',
  'data-test-id': 'textarea'
}

export const optionalSchema = object({
  field: zodValidators.base.getStringSchema({ required: false })
})
