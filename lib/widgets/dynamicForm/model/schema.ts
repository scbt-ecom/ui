import { object, type TypeOf } from 'zod'
import { ZodUtils, zodValidators } from '$/shared/validation'

export const schema = object({
  field: zodValidators.base.getStringSchema()
  // checked: boolean()
  //   .refine((value) => Boolean(value), 'Необходимо поставить галочку')
  //   .default(false)
})

export const defaultValues = ZodUtils.getZodDefaults(schema)

export type Schema = TypeOf<typeof schema>
