import z from 'zod'
import { baseDefaultMessages } from './base.constants'

export type UnionValidationOptions<Required extends boolean, T extends z.Primitive> = {
  /**
   * сообщение об ошибке
   */
  message?: ((values: readonly T[]) => string) | string
  errorMap?: z.ZodErrorMap
  /**
   * сообщение об ошибке при не правильном типе значение
   */
  invalid_type_error?: string
  /**
   * сообщение об ошибке при отсутствии значения
   */
  required_error?: string
  /**
   * описание схемы
   */
  description?: string
  /**
   * указывает что поле обязательное
   * @default true
   */
  required?: Required
}

/**
 * Схема валидации обязательного поля из выборки
 */
const getUnionRequired = <T extends z.Primitive>(
  values: [T, T, ...T[]],
  props?: Omit<UnionValidationOptions<true, T>, 'required'>
) => {
  const { message, ...restProps } = props || {}

  const [first, second, ...other] = values.map((value) => z.literal(value))

  const errorMessage = (() => {
    if (message) {
      return typeof message === 'function' ? message(values) : message
    }

    return baseDefaultMessages.VALUE_OUT_OF_RANGE(values)
  })()

  return z.union([first, second, ...other], {
    message: errorMessage,
    ...restProps
  })
}
type UnionRequiredSchema<T extends z.Primitive> = ReturnType<typeof getUnionRequired<T>>

/**
 * Схема валидации обязательного поля из выборки
 */
const getUnionOptional = <T extends z.Primitive>(values: [T, T, ...T[]], props?: UnionValidationOptions<false, T>) => {
  return getUnionRequired(values, props).optional()
}
type UnionOptionalSchema<T extends z.Primitive> = ReturnType<typeof getUnionOptional<T>>

/**
 * Схема валидации обязательного поля из выборки
 * @param {z.Primitive} values литералы
 * @param {z.RawCreateParams & { message: (values: z.Primitive[]) => string }} props настройки схемы
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required union value
 * z.object({
 *   field: zodValidators.base.getUnionSchema(['A', 'B'] as const)
 * })                                                      ^ it need to infer literal type
 * // will returns z.union([z.literal('A'), z.literal('B')])
 *
 * @example with optional union value
 * z.object({
 *   field: zodValidators.base.getUnionSchema(['A', 'B'] as const, { required: false })
 * })                                                      ^ it need to infer literal type
 * // will returns z.union([z.literal('A'), z.literal('B')]).optional()
 */
export function getUnionSchema<T extends z.Primitive>(
  values: [T, T, ...T[]],
  props?: UnionValidationOptions<true, T>
): UnionRequiredSchema<T>
export function getUnionSchema<T extends z.Primitive>(
  values: [T, T, ...T[]],
  props?: UnionValidationOptions<false, T>
): UnionOptionalSchema<T>
export function getUnionSchema<T extends z.Primitive, Required extends boolean>(
  values: [T, T, ...T[]],
  props?: UnionValidationOptions<Required, T>
): UnionRequiredSchema<T> | UnionOptionalSchema<T> {
  const { required, ...restProps } = props || {}

  return required ? getUnionRequired(values, restProps) : getUnionOptional(values, restProps)
}
