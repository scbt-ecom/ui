import { isValid, parse } from 'date-fns'
import z from 'zod'
import { baseDefaultMessages } from './base.constants'
import { DATE_VISIBLE_PATTERN } from '$/shared/ui'
import { TypeGuards } from '$/shared/utils'

export type DateValidationOptions<Required extends boolean> = {
  /**
   * валидация строки с учетом ISO формата
   * @default false
   */
  iso?: boolean
  /**
   * шаблон для валидации строки (будет проигнорирован, если `iso = true`)
   * @default 'dd.MM.yyyy'
   */
  pattern?: string
  /**
   * указывает что поле обязательное
   */
  required?: Required
  message?: {
    min?: string
    invalidDate?: string
  }
}

/**
 * Схема валидации опционального поля номера телефона
 */
const getDateRequired = (props?: Omit<DateValidationOptions<boolean>, 'required'>) => {
  const { iso = false, pattern = DATE_VISIBLE_PATTERN, message } = props || {}

  return z
    .string()
    .min(8, message?.min || baseDefaultMessages.DATE_NON_EMPTY())
    .superRefine((value, context) => {
      const validSymbolsLength = pattern.replace(/\W/g, '').length
      const cleanedValue = value.replace(/[._-]/g, '')

      if (cleanedValue.length < validSymbolsLength) {
        context.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: validSymbolsLength,
          type: 'date',
          inclusive: true,
          message: message?.min || baseDefaultMessages.DATE_NON_EMPTY()
        })
      }

      if (iso) {
        try {
          new Date(value).toISOString()
        } catch {
          context.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message: message?.invalidDate || baseDefaultMessages.DATE_INVALID_FORMAT()
          })
        }
      } else {
        const date = parse(value, pattern, new Date())

        if (!isValid(date)) {
          context.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message: message?.invalidDate || baseDefaultMessages.DATE_INVALID_FORMAT()
          })
        }
      }
    })
    .default('')
}
type DateRequiredSchema = ReturnType<typeof getDateRequired>

/**
 * Схема валидации опционального поля номера телефона
 */
const getDateOptional = (props?: Omit<DateValidationOptions<boolean>, 'required'>) => {
  const { iso = false, pattern = DATE_VISIBLE_PATTERN, message } = props || {}

  return z
    .string()
    .transform((value) => (!value ? undefined : value))
    .superRefine((value, context) => {
      if (TypeGuards.isString(value) && Boolean(value.length)) {
        const validSymbolsLength = pattern.replace(/\W/g, '').length
        const cleanedValue = value.replace(/[._-]/g, '')

        if (cleanedValue.length < validSymbolsLength) {
          context.addIssue({
            code: z.ZodIssueCode.too_small,
            minimum: validSymbolsLength,
            type: 'date',
            inclusive: true,
            message: message?.min || baseDefaultMessages.DATE_NON_EMPTY()
          })
        }

        if (iso) {
          try {
            new Date(value).toISOString()
          } catch {
            context.addIssue({
              code: z.ZodIssueCode.invalid_date,
              message: message?.invalidDate || baseDefaultMessages.DATE_INVALID_FORMAT()
            })
          }
        } else {
          const date = parse(value, pattern, new Date())

          if (!isValid(date)) {
            context.addIssue({
              code: z.ZodIssueCode.invalid_date,
              message: message?.invalidDate || baseDefaultMessages.DATE_INVALID_FORMAT()
            })
          }
        }
      }
    })
    .optional()
}
type DateOptionalSchema = ReturnType<typeof getDateOptional>

/**
 * Схема валидации поля даты
 * @param {DateValidationOptions} props настройки схемы
 * @typeParam `required` - `boolean`
 * @typeParam `iso` - `boolean | undefined`
 * @typeParam `pattern` - `string | undefined`
 * @typeParam `message` - `{ [min | invalidOperator]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required value
 * z.object({
 *   field: zodValidators.base.getDateSchema()
 * })
 * // will returns z.string()
 *
 * @example with required value
 * z.object({
 *   field: zodValidators.base.getDateSchema({ required: false })
 * })
 * // will returns z.string().optional()
 */
export function getDateSchema(props?: DateValidationOptions<true>): DateRequiredSchema
export function getDateSchema(props?: DateValidationOptions<false>): DateOptionalSchema
export function getDateSchema<Required extends boolean>(
  props?: DateValidationOptions<Required>
): DateRequiredSchema | DateOptionalSchema {
  const { required = true } = props || {}

  return required ? getDateRequired(props) : getDateOptional(props)
}
