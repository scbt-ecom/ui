import z from 'zod'
import { ZodUtils, zodValidators } from '$/shared/validation'

export const baseSchema = z.object({
  field: zodValidators.base.getStringSchema({
    min: 3
  }),
  optional: zodValidators.base.getStringSchema({ required: false }),
  object: z.object({
    innerString: zodValidators.base.getStringSchema(),
    innerNumber: zodValidators.base.getNumberSchema(),
    innerNumberOptional: zodValidators.base.getNumberSchema({ required: false }),
    innerObject: z.object({
      email: zodValidators.base.getEmailSchema(),
      name: zodValidators.base.getStringSchema()
    }),
    union: zodValidators.base.getUnionSchema(['A', 'B'] as const)
  }),
  array: z.array(zodValidators.base.getStringSchema())
})
export const baseDefaultValues = ZodUtils.getZodDefaults(baseSchema)

export const dateSchema = z.object({
  field: zodValidators.base.getDateSchema()
})
export const dateDefaultValues = ZodUtils.getZodDefaults(dateSchema)

export const phoneSchema = z.object({
  field: zodValidators.base.getPhoneSchema()
})
export const phoneDefaultValues = ZodUtils.getZodDefaults(phoneSchema)
