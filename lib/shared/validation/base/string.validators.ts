import z from 'zod'
import { baseDefaultMessages } from './base.constants'

export type StringValidationOptions<Required extends boolean> = {
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
  /**
   * указывает что поле обязательное
   */
  required?: Required
  message?: Record<keyof Omit<StringValidationOptions<Required>, 'message'>, string>
}

/**
 * Схема валидации обязательного поля строкового типа
 */
const getStringRequired = (props?: Omit<StringValidationOptions<true>, 'required'>) => {
  const { min = 1, max, message } = props || {}

  let schema = z.string().min(min, { message: message?.min || baseDefaultMessages.MIN_LENGTH(min) })

  if (max) {
    schema = schema.max(max, { message: message?.max || baseDefaultMessages.MAX_LENGTH(max) })
  }

  return schema.refine((value) => Boolean(value.length), { message: message?.min || baseDefaultMessages.NON_EMPTY() }).default('')
}
type StringRequiredSchema = ReturnType<typeof getStringRequired>

/**
 * Схема валидации обязательного поля строкового типа
 */
const getStringOptional = (props?: Omit<StringValidationOptions<false>, 'required'>) => {
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
type StringOptionalSchema = ReturnType<typeof getStringOptional>

/**
 * Схема валидации обязательного поля строкового типа
 * @param {StringValidationOptions} props настройки схемы
 * @typeParam `min` - `number | undefined` `default: 1`
 * @typeParam `max` - `number | undefined` `default: undefined`
 * @typeParam `message` - `{ [min | max]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required min value
 * z.object({
 *   field: zodValidators.base.getStringSchema({ min: 10 })
 * })
 * // will returns z.string().min(10)
 *
 * @example with required min, max value
 * z.object({
 *   field: zodValidators.base.getStringSchema({ min: 10, max: 20 })
 * })
 * // will returns z.string().min(10).max(20)
 *
 * @example with optional min value
 * z.object({
 *   field: zodValidators.base.getStringSchema({ required: false, min: 10 })
 * })
 * // will returns z.string().min(10).optional()
 *
 * @example with optional min, max value
 * z.object({
 *   field: zodValidators.base.getStringSchema({ required: false, min: 10, max: 20 })
 * })
 * // will returns z.string().min(10).max(20).optional()
 */
export function getStringSchema(props?: StringValidationOptions<true>): StringRequiredSchema
export function getStringSchema(props?: StringValidationOptions<false>): StringOptionalSchema
export function getStringSchema<Required extends boolean>(
  props?: StringValidationOptions<Required>
): StringRequiredSchema | StringOptionalSchema {
  const { required = true, ...restProps } = props || {}

  return required ? getStringRequired(restProps) : getStringOptional(restProps)
}
