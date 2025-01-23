import z from 'zod'

/**
 * @deprecated For better performance use `ZodUtils.getZodDefaults` instead.
 */
export const getDefaults = <ZodSchema extends z.AnyZodObject, Schema = z.TypeOf<ZodSchema>>(schema: ZodSchema) => {
  const defaults = {} as Schema

  const entries = Object.entries(schema.shape) as [keyof Schema, Schema[keyof Schema]][]

  entries.forEach(([key, value]) => {
    if (value instanceof z.ZodDefault) {
      defaults[key] = value._def.defaultValue()
    }

    if (value) defaults[key] = undefined as Schema[keyof Schema]
  })

  return defaults
}

type ZodUtilsGetDefaultsOptions = {
  fillArrayWithValue?: boolean
}

export class ZodUtils {
  static getZodDefaults<ZodSchema extends z.AnyZodObject, Schema = z.TypeOf<ZodSchema>>(
    zodSchema: ZodSchema | z.ZodEffects<ZodSchema>,
    options?: ZodUtilsGetDefaultsOptions
  ): Schema {
    const { fillArrayWithValue } = options || {}

    if (zodSchema instanceof z.ZodEffects) {
      if (zodSchema.innerType() instanceof z.ZodEffects) {
        return this.getZodDefaults(zodSchema.innerType(), options)
      }

      return this.getZodDefaults(z.ZodObject.create(zodSchema.innerType().shape), options)
    }

    const getDefaultValue = (schema: z.ZodTypeAny): unknown => {
      switch (true) {
        case schema instanceof z.ZodDefault:
          return schema._def.defaultValue()
        case schema instanceof z.ZodOptional:
          return getDefaultValue(schema.unwrap())
        case schema instanceof z.ZodNullable:
          return null
        case schema instanceof z.ZodArray:
          return fillArrayWithValue ? [getDefaultValue(schema.element)] : []
        case schema instanceof z.ZodObject:
          return this.getZodDefaults(schema, options)
        case schema instanceof z.ZodUnion:
          return getDefaultValue(schema._def.options[0])
        case schema instanceof z.ZodLiteral:
          return schema._def.value
        case schema instanceof z.ZodEnum:
          return schema._def.values[0]
        case schema instanceof z.ZodString:
          return ''
        case schema instanceof z.ZodNumber:
          return 0
        case schema instanceof z.ZodBoolean:
          return false
        case !('innerType' in schema._def):
          return undefined
        default:
          return getDefaultValue(schema._def.innerType)
      }
    }

    const defaults = {} as Schema

    const schemaEntries = Object.entries(zodSchema.shape) as [keyof Schema, z.ZodAny][]

    schemaEntries.map(([key, value]) => {
      defaults[key] = getDefaultValue(value) as Schema[keyof Schema]
    })

    return defaults
  }
}
