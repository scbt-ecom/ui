import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const requiredSchema = object({
  field: zodValidators.base.getStringSchema()
})

export const optionalSchema = object({
  field: zodValidators.base.getStringSchema({ required: false })
})

export const minSchema = object({
  field: zodValidators.base.getStringSchema({ min: 1 })
})

export const maxSchema = object({
  field: zodValidators.base.getStringSchema({ max: 5 })
})

export const minMaxSchema = object({
  field: zodValidators.base.getStringSchema({ min: 1, max: 5 })
})
