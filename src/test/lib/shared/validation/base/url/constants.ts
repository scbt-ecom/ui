import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const requiredSchema = object({
  field: zodValidators.base.getUrlSchema()
})

export const optionalSchema = object({
  field: zodValidators.base.getUrlSchema({ required: false })
})
