import z from 'zod'
import { baseDefaultMessages } from './base.constants'

type NumberValidationOptions = {
  min?: number
  max?: number
  message?: Record<keyof Omit<NumberValidationOptions, 'message'>, string>
}

/**
 * Схема валидации обязательного поля числового типа
 * @param {NumberValidationOptions} props настройки схемы
 * @typeParam `min` - `number | undefined` `default: 1`
 * @typeParam `max` - `number | undefined` `default: undefined`
 * @typeParam `message` - `{ [min | max]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getNumberRequired({ min: 10, max: 20 })
 * })
 * // will returns z.coerce.number().min(10).max(20)
 */
export const getNumberRequired = (props?: NumberValidationOptions) => {
  const { min = 0, max, message } = props || {}

  let schema = z.coerce.number().min(min, message?.min || baseDefaultMessages.MIN_VALUE(min))

  if (max) {
    schema = schema.max(max, message?.min || baseDefaultMessages.MAX_VALUE(max))
  }

  return schema.default(0)
}

/**
 * Схема валидации опционального поля числового типа
 * @param {NumberValidationOptions} props настройки схемы
 * @typeParam `min` - `number | undefined` `default: 1`
 * @typeParam `max` - `number | undefined` `default: undefined`
 * @typeParam `message` - `{ [min | max]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getNumberOptional({ min: 10, max: 20 })
 * })
 * // will returns z.coerce.number().min(10).max(20).optional()
 */
export const getNumberOptional = (props?: NumberValidationOptions) => {
  return getNumberRequired(props)
    .optional()
    .transform((value) => (!value ? undefined : value))
}
