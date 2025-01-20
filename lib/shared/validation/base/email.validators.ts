import z from 'zod'
import { baseDefaultMessages } from './base.constants'
import { TypeGuards } from '$/shared/utils'

type EmailValidationOptions = {
  message?: {
    min?: string
    invalid?: string
  }
}

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

/**
 * Схема валидации обязательного поля типа email
 * @param {EmailValidationOptions} props настройки схемы
 * @typeParam `message` - `{ [min | invalid]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getEmailRequiredValidationSchema({ message: { min: '' } })
 * })
 * // will returns z.string().min(1).email()
 */
export const getEmailRequiredValidationSchema = (props?: EmailValidationOptions) => {
  const { message } = props || {}

  return z
    .string()
    .min(1, message?.min || baseDefaultMessages.EMAIL_NON_EMPTY())
    .regex(EMAIL_REGEX, message?.invalid || baseDefaultMessages.EMAIL_INVALID())
    .default('')
}

/**
 * Схема валидации опционального поля типа email
 * @param {EmailValidationOptions} props настройки схемы
 * @typeParam `message` - `{ [min | invalid]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getEmailOptionalValidationSchema({ message: { min: '' } })
 * })
 * // will returns z.string().min(1).email().optional()
 */
export const getEmailOptionalValidationSchema = (props?: EmailValidationOptions) => {
  const { message } = props || {}

  return z
    .string()
    .refine(
      (value) => {
        if (TypeGuards.isStringEmpty(value)) return true
        return EMAIL_REGEX.test(value)
      },
      {
        message: message?.invalid || baseDefaultMessages.EMAIL_INVALID()
      }
    )
    .optional()
    .transform((value) => (value?.length === 0 ? undefined : value))
}
