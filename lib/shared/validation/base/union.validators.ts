import z from 'zod'
import { baseDefaultMessages } from './base.constants'

export type UnionValidationOptions<T extends z.Primitive> = {
  message?: ((values: readonly T[]) => string) | string
  errorMap?: z.ZodErrorMap
  invalid_type_error?: string
  required_error?: string
  description?: string
}

/**
 * Схема валидации обязательного поля из выборки
 * @param {z.Primitive[]} values литералы
 * @param {z.RawCreateParams & { message: (values: z.Primitive[]) => string }} props настройки схемы
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getUnionRequired(['A', 'B'] as const)
 * })                                                      ^ it need to infer literal type
 * // will returns z.union([z.literal('A'), z.literal('B')])
 */
export const getUnionRequired = <T extends z.Primitive>(values: [T, T, ...T[]], props?: UnionValidationOptions<T>) => {
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

/**
 * Схема валидации обязательного поля из выборки
 * @param {z.Primitive} values литералы
 * @param {z.RawCreateParams & { message: (values: z.Primitive[]) => string }} props настройки схемы
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getUnionRequired(['A', 'B'] as const)
 * })                                                      ^ it need to infer literal type
 * // will returns z.union([z.literal('A'), z.literal('B')]).optional()
 */
export const getUnionOptional = <T extends z.Primitive>(values: [T, T, ...T[]], props?: UnionValidationOptions<T>) => {
  return getUnionRequired(values, props).optional()
}
