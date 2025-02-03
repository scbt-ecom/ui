import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const requiredSchema = object({
  field: zodValidators.base.getDateSchema()
})

export const optionalSchema = object({
  field: zodValidators.base.getDateSchema({ required: false })
})

export const patternSchema = object({
  field: zodValidators.base.getDateSchema({ iso: false })
})
