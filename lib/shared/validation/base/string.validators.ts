import z from 'zod'
import { baseDefaultMessages } from './base.constants'

type StringValidationOptions = {
  /**
   * минимальное количество символов
   * @default 1
   */
  min?: number
  /**
   * максимальное количество символов
   * @default undefined
   */
  max?: number
  message?: Record<keyof Omit<StringValidationOptions, 'message'>, string>
}

/**
 * Схема валидации обязательного поля строкового типа
 * @param {StringValidationOptions} props настройки схемы
 * @typeParam `min` - `number | undefined` `default: 1`
 * @typeParam `max` - `number | undefined` `default: undefined`
 * @typeParam `message` - `{ [min | max]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getStringRequired({ min: 10, max: 20 })
 * })
 * // will returns z.string().min(10).max(20)
 */
export const getStringRequired = (props?: StringValidationOptions) => {
  const { min = 1, max, message } = props || {}

  let schema = z.string().min(min, { message: message?.min || baseDefaultMessages.MIN_LENGTH(min) })

  if (max) {
    schema = schema.max(max, { message: message?.max || baseDefaultMessages.MAX_LENGTH(max) })
  }

  return schema.refine((value) => Boolean(value.length), { message: message?.min || baseDefaultMessages.NON_EMPTY() }).default('')
}

/**
 * Схема валидации обязательного поля строкового типа
 * @param {StringValidationOptions} props настройки схемы
 * @typeParam `min` - `number | undefined` `default: 1`
 * @typeParam `max` - `number | undefined` `default: undefined`
 * @typeParam `message` - `{ [min | max]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getStringOptional({ min: 10, max: 20 })
 * })
 * // will returns z.string().min(10).max(20).optional()
 */
export const getStringOptional = (props?: StringValidationOptions) => {
  const { min, max, message } = props || {}

  let schema = z.string()

  if (min) {
    schema = schema.min(min, { message: message?.min || baseDefaultMessages.MIN_LENGTH(min) })
  }

  if (max) {
    schema = schema.max(max, { message: message?.max || baseDefaultMessages.MAX_LENGTH(max) })
  }

  return schema.optional().transform((value) => (!value?.length ? undefined : value))
}
