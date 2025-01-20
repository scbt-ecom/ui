import z from 'zod'
import { zodValidators } from '$/shared/validation'

export const baseSchema = z.object({
  field: zodValidators.base.getStringRequiredValidationSchema({
    min: 3
  })
})

export const dateSchema = z.object({
  field: zodValidators.base.getDateRequiredValidationSchema()
})

export const phoneSchema = z.object({
  field: zodValidators.base.getPhoneRequiredValidationSchema()
})
