import { object } from 'zod'
import { zodValidators } from '$/shared/validation'

export const requiredSchema = object({
  field: zodValidators.base.getNumberSchema()
})

export const optionalSchema = object({
  field: zodValidators.base.getNumberSchema({ required: false })
})

export const minSchema = object({
  field: zodValidators.base.getNumberSchema({ min: 1 })
})

export const maxSchema = object({
  field: zodValidators.base.getNumberSchema({ max: 10 })
})

export const minMaxSchema = object({
  field: zodValidators.base.getNumberSchema({ min: 1, max: 10 })
})
