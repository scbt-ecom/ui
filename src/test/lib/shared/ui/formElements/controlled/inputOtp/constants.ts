import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const inputOtpDefaultProps = {
  name: 'field',
  label: 'InputOtp',
  maxLength: 4,
  'data-test-id': 'inputOtp'
}

export const optionalSchema = object({
  field: zodValidators.base.getStringSchema({ required: false, max: 4 })
})
