import z from 'zod'
import { baseDefaultMessages } from './base.constants'

export type NumberValidationOptions<Required extends boolean> = {
  /**
   * минимальное значение
   * @default 0
   */
  min?: number
  /**
   * максимальное значение
   * @default undefined
   */
  max?: number
  /**
   * указывает что поле обязательное
   * @default true
   */
  required?: Required
  message?: Record<keyof Omit<NumberValidationOptions<Required>, 'message'>, string>
}

/**
 * Схема валидации обязательного поля числового типа
 */
const getNumberRequired = (props?: Omit<NumberValidationOptions<true>, 'required'>) => {
  const { min = 0, max, message } = props || {}

  let schema = z.coerce.number().min(min, message?.min || baseDefaultMessages.MIN_VALUE(min))

  if (max) {
    schema = schema.max(max, message?.min || baseDefaultMessages.MAX_VALUE(max))
  }

  return schema.default(0)
}
type NumberRequiredSchema = ReturnType<typeof getNumberRequired>

/**
 * Схема валидации опционального поля числового типа
 */
const getNumberOptional = (props?: Omit<NumberValidationOptions<false>, 'required'>) => {
  return getNumberRequired(props)
    .optional()
    .transform((value) => (!value ? undefined : value))
}
type NumberOptionalSchema = ReturnType<typeof getNumberOptional>

/**
 * Схема валидации опционального поля числового типа
 * @param {NumberValidationOptions} props настройки схемы
 @typeParam `required` - `boolean`
 * @typeParam `min` - `number | undefined` `default: 1`
 * @typeParam `max` - `number | undefined` `default: undefined`
 * @typeParam `message` - `{ [min | max]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required min, max value
 * z.object({
 *   field: zodValidators.base.getNumberSchema({ min: 10, max: 20 })
 * })
 * // will returns z.coerce.number().min(10).max(20)
 *
 * @example with optional min, max value
 * z.object({
 *   field: zodValidators.base.getNumberSchema({ min: 10, max: 20, required: false })
 * })
 * // will returns z.coerce.number().min(10).max(20).optional()
 */
export function getNumberSchema(props?: NumberValidationOptions<true>): NumberRequiredSchema
export function getNumberSchema(props?: NumberValidationOptions<false>): NumberOptionalSchema
export function getNumberSchema<Required extends boolean>(
  props?: NumberValidationOptions<Required>
): NumberRequiredSchema | NumberOptionalSchema {
  const { required = true } = props || {}

  return required ? getNumberRequired(props) : getNumberOptional(props)
}
