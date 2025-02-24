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
    zodSchema: ZodSchema | z.ZodEffects<ZodSchema> | z.ZodIntersection<ZodSchema, ZodSchema>,
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
        case schema._def.typeName === 'ZodDefault' || schema instanceof z.ZodDefault:
          return (schema as z.ZodDefault<ZodSchema>)._def.defaultValue()
        case schema._def.typeName === 'ZodOptional' || schema instanceof z.ZodOptional:
          return undefined
        case schema._def.typeName === 'ZodNullable' || schema instanceof z.ZodNullable:
          return null
        case schema._def.typeName === 'ZodArray' || schema instanceof z.ZodArray:
          return fillArrayWithValue ? [getDefaultValue((schema as z.ZodArray<ZodSchema>).element)] : []
        case schema._def.typeName === 'ZodObject' || schema instanceof z.ZodObject:
          return this.getZodDefaults(schema, options)
        case schema._def.typeName === 'ZodUnion' || schema instanceof z.ZodUnion:
          return getDefaultValue(schema._def.options[0])
        case schema._def.typeName === 'ZodLiteral' || schema instanceof z.ZodLiteral:
          return schema._def.value
        case schema._def.typeName === 'ZodDiscriminatedUnion' || schema instanceof z.ZodDiscriminatedUnion:
          return getDefaultValue(schema._def.options[0])
        case schema._def.typeName === 'ZodEnum' || schema instanceof z.ZodEnum:
          return schema._def.values[0]
        case schema._def.typeName === 'ZodString' || schema instanceof z.ZodString:
          return ''
        case schema._def.typeName === 'ZodNumber' || schema instanceof z.ZodNumber:
          return 0
        case schema._def.typeName === 'ZodBoolean' || schema instanceof z.ZodBoolean:
          return false
        case !('innerType' in schema._def):
          return undefined
        default:
          return getDefaultValue(schema._def.innerType)
      }
    }

    const defaults = {} as Schema

    const schemaShape = zodSchema instanceof z.ZodIntersection ? this.zodMergeIntersection(zodSchema).shape : zodSchema.shape

    const schemaEntries = Object.entries(schemaShape) as [keyof Schema, z.ZodAny][]

    schemaEntries.map(([key, value]) => {
      defaults[key] = getDefaultValue(value) as Schema[keyof Schema]
    })

    return defaults
  }

  /**
   * Функция для объединения zod схождений
   * @param {ZodIntersection} zodSchema
   * @returns объединенная схема двух схождений
   *
   * @example
   * let schema = z.object({
   *   foo: z.string()
   * })
   *   // this will return intersection and we need
   *   // to merge its left to right schema's
   *   .and(
   *     z.object({
   *       bar: z.string()
   *     })
   *   )
   *
   * schema = ZodUtils.zodMergeIntersection(schema)
   *
   * // schema will be
   * z.object({
   *   foo: z.string(),
   *   bar: z.string()
   * })
   */
  static zodMergeIntersection<ZodLeft extends z.ZodTypeAny, ZodRight extends z.ZodTypeAny>(
    zodSchema: z.ZodIntersection<ZodLeft, ZodRight>
  ): z.ZodObject<z.objectUtil.MergeShapes<z.TypeOf<ZodLeft>, z.TypeOf<ZodRight>>> {
    const { left, right } = zodSchema._def

    const leftSchema =
      left instanceof z.ZodDiscriminatedUnion || left._def.typeName === 'ZodDiscriminatedUnion' ? left._def.options[0] : left
    const rightSchema =
      right instanceof z.ZodDiscriminatedUnion || left._def.typeName === 'ZodDiscriminatedUnion' ? right._def.options[0] : right

    if (leftSchema instanceof z.ZodObject && rightSchema instanceof z.ZodObject) {
      return leftSchema.merge(rightSchema)
    }

    throw new Error(`Cannot merge schema type ${rightSchema._def.typeName} to ${leftSchema._def.typeName}`)
  }
}
