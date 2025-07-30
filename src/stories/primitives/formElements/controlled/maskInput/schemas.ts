import z from 'zod'
import { ZodUtils, zodValidators } from '$/shared/validation'

export const baseSchema = z.object({
  field: zodValidators.base.getStringSchema({
    min: 3
  })
})
export const baseDefaultValues = ZodUtils.getZodDefaults(baseSchema)

export const dateSchema = z.object({
  field: zodValidators.base.getDateSchema({ iso: false, max: new Date() })
})
export const dateDefaultValues = ZodUtils.getZodDefaults(dateSchema)

export const phoneSchema = z.object({
  field: zodValidators.base.getPhoneSchema()
})
export const phoneDefaultValues = ZodUtils.getZodDefaults(phoneSchema)

export const passportSchema = z.object({
  field: zodValidators.base.getPassportSchema()
})
export const passportDefaultValues = ZodUtils.getZodDefaults(passportSchema)

export const passportDepartmentSchema = z.object({
  field: zodValidators.base.getPassportDepartmentSchema()
})
export const passportDepartmentDefaultValues = ZodUtils.getZodDefaults(passportDepartmentSchema)
