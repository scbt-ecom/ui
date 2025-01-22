import { type AnyZodObject, type TypeOf, ZodDefault } from 'zod'

export const getDefaults = <ZodSchema extends AnyZodObject, Schema = TypeOf<ZodSchema>>(schema: ZodSchema) => {
  const defaults = {} as Schema

  const entries = Object.entries(schema.shape) as [keyof Schema, Schema[keyof Schema]][]

  entries.forEach(([key, value]) => {
    if (value instanceof ZodDefault) {
      defaults[key] = value._def.defaultValue()
    }

    if (value) defaults[key] = undefined as Schema[keyof Schema]
  })

  return defaults
}
