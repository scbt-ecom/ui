import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const requiredSchema = object({
  field: zodValidators.base.getPassportSchema()
})
