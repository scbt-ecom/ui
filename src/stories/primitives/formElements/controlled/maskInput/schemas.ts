import z from 'zod'
import { zodValidators } from '$/shared/validation'

export const baseSchema = z.object({
  field: zodValidators.base.getStringSchema({
    min: 3
  })
})

export const dateSchema = z.object({
  field: zodValidators.base.getDateSchema()
})

export const phoneSchema = z.object({
  field: zodValidators.base.getPhoneSchema()
})
