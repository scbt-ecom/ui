import z from 'zod'

type ZodUtilsGetDefaultsOptions = {
  /**
   * Вставить в массив значение, исходя из внутренней схемы z.array
   */
  fillArrayWithValue?: boolean
}

export class ZodUtils {
  /**
   * Функция для получения значения по умолчанию исходя из схемы
   * @param zodSchema схема формы
   * @param options настройки генерации значений по умолчанию
   * @returns объект значений по умолчанию
   *
   * @example
   * const schema = z.object({
   *   name: zodValidators.base.getStringSchema(),
   *   role: zodValidators.base.getUnionSchema(['UNKNOWN', 'ADMIN', 'MODERATOR', 'USER'] as const),
   *   info: z.object({
   *     address: zodValidators.base.getStringSchema(),
   *     phone: zodValidators.base.getPhoneSchema({ ignoreMask: true }),
   *     age: zodValidators.base.getNumberSchema()
   *   })
   * })
   *
   * const defaultValues = ZodUtils.getZodDefaults(schema)
   *
   * // default values will be inferred from schema
   * // {
   * //   name: '',
   * //   role: 'UNKNOWN',
   * //   info: {
   * //     address: '',
   * //     phone: '',
   * //     age: 0
   * //   }
   * // }
   */
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
          return undefined
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
        case schema instanceof z.ZodDiscriminatedUnion:
          return getDefaultValue(schema._def.options[0])
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
