import z from 'zod'
import { zodValidators } from '$/shared/validation'

export const baseSchema = z.object({
  field: zodValidators.base.getStringRequired({
    min: 3
  })
})

export const dateSchema = z.object({
  field: zodValidators.base.getDateRequired()
})

export const phoneSchema = z.object({
  field: zodValidators.base.getPhoneRequired()
})
