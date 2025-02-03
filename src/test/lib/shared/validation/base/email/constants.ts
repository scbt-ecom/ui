import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const requiredSchema = object({
  field: zodValidators.base.getEmailSchema()
})

export const optionalSchema = object({
  field: zodValidators.base.getEmailSchema({ required: false })
})
