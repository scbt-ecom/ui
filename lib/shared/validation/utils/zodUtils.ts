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

type GetZodUtilsOptions = {
  arrayEmpty?: boolean
  dateEmpty?: boolean
}

export class ZodUtils {
  static getZodDefaults<ZodSchema extends z.AnyZodObject, Schema = z.TypeOf<ZodSchema>>(
    zodSchema: ZodSchema | z.ZodEffects<ZodSchema>,
    options?: GetZodUtilsOptions
  ): Schema {
    const { arrayEmpty = false, dateEmpty = false } = options || {}

    const getDefaultValue = (schema: z.ZodTypeAny): any => {
      switch (true) {
        case schema instanceof z.ZodDefault:
          if (!('_def' in schema) || !('defaultValue' in schema._def)) return undefined

          return schema._def.defaultValue()
        case schema instanceof z.ZodArray:
          if (!('_def' in schema)) return undefined

          return arrayEmpty ? [] : [getDefaultValue(schema._def.type)].filter((value) => value !== undefined)
        case schema instanceof z.ZodString:
          return ''
        case schema instanceof z.ZodNumber || schema instanceof z.ZodBigInt:
          return schema.minValue ?? 0
        case schema instanceof z.ZodDate:
          return dateEmpty ? schema.minDate : ''
        case schema instanceof z.ZodSymbol:
          return ''
        case schema instanceof z.ZodBoolean:
          return schema._def.coerce
        case schema instanceof z.ZodNull:
          return null
        case schema instanceof z.ZodPipeline:
          if (!('out' in schema._def)) return undefined
          return getDefaultValue(schema._def.out)
        case schema instanceof z.ZodUnion:
          if (!('options' in schema._def)) return undefined

          return schema._def.options[0]._def.value
        case schema instanceof z.ZodObject:
          return this.getZodDefaults(schema, options)
        case schema instanceof z.ZodAny && !('innerType' in schema._def):
          return undefined
        default:
          getDefaultValue(schema._def.innerType)
      }
    }

    if (zodSchema instanceof z.ZodEffects) {
      if (zodSchema.innerType() instanceof z.ZodEffects) {
        return this.getZodDefaults(zodSchema.innerType(), options)
      }

      return this.getZodDefaults(z.ZodObject.create(zodSchema.innerType().shape), options)
    }

    const shape = zodSchema.shape as z.ZodAny
    const entries = Object.entries(shape)
    const temp = entries.map(([key, value]) => {
      const defaults = value instanceof z.ZodEffects ? this.getZodDefaults(value, options) : getDefaultValue(value)

      return [key, defaults]
    })
    return Object.fromEntries(temp)
  }
}
