import z from 'zod'
import { baseDefaultMessages } from './base.constants'
import { TypeGuards } from '$/shared/utils'

export type EmailValidationOptions<Required extends boolean> = {
  /**
   * указывает что поле обязательное
   * @default true
   */
  required?: Required
  message?: {
    min?: string
    invalid?: string
  }
}

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

/**
 * Схема валидации обязательного поля типа email
 */
const getEmailRequired = (props?: Omit<EmailValidationOptions<true>, 'required'>) => {
  const { message } = props || {}

  return z
    .string()
    .min(1, message?.min || baseDefaultMessages.EMAIL_NON_EMPTY())
    .regex(EMAIL_REGEX, message?.invalid || baseDefaultMessages.EMAIL_INVALID())
    .default('')
}
type EmailRequiredSchema = ReturnType<typeof getEmailRequired>

/**
 * Схема валидации опционального поля типа email
 */
const getEmailOptional = (props?: Omit<EmailValidationOptions<false>, 'required'>) => {
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
type EmailOptionalSchema = ReturnType<typeof getEmailOptional>

/**
 * Схема валидации поля типа email
 * @param {EmailValidationOptions} props настройки схемы
 * @typeParam `required` - `boolean`
 * @typeParam `message` - `{ [min | invalid]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required value
 * z.object({
 *   field: zodValidators.base.getEmailSchema()
 * })
 * // will returns z.string().min(1).email()
 *
 * @example with optional value
 * z.object({
 *   field: zodValidators.base.getEmailSchema({ required: false })
 * })
 * // will returns z.string().min(1).email().optional()
 */
export function getEmailSchema(props?: EmailValidationOptions<true>): EmailRequiredSchema
export function getEmailSchema(props?: EmailValidationOptions<false>): EmailOptionalSchema
export function getEmailSchema<Required extends boolean>(
  props?: EmailValidationOptions<Required>
): EmailRequiredSchema | EmailOptionalSchema {
  const { required = true } = props || {}

  return required ? getEmailRequired(props) : getEmailOptional(props)
}
