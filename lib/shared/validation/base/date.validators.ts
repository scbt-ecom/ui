import { isValid, parse } from 'date-fns'
import z from 'zod'
import { baseDefaultMessages } from './base.constants'
import { DATE_VISIBLE_PATTERN } from '$/shared/ui'
import { TypeGuards } from '$/shared/utils'

type DateValidationOptions = {
  /**
   * парсить строку с учетом ISO формата
   * @default false
   */
  iso?: boolean
  /**
   * шаблон для валидации строки (будет проигнорирован, если `iso = true`)
   * @default 'dd.MM.yyyy'
   */
  pattern?: string
  message?: {
    min?: string
    invalidDate?: string
  }
}

/**
 * Схема валидации опционального поля номера телефона
 * @param {DateValidationOptions} props настройки схемы
 * @typeParam `iso` - `boolean | undefined` `default: false`
 * @typeParam `pattern` - `string | undefined` `default: 'dd.MM.yyyy'`
 * @typeParam `message` - `{ [min | invalidOperator]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getDateRequiredValidationSchema()
 * })
 * // will returns z.string()
 */
export const getDateRequiredValidationSchema = (props?: DateValidationOptions) => {
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

/**
 * Схема валидации опционального поля номера телефона
 * @param {DateValidationOptions} props настройки схемы
 * @typeParam `iso` - `boolean | undefined` `default: false` парсить строку с учетом ISO формата
 * @typeParam `pattern` - `string | undefined` `default: 'dd.MM.yyyy'` шаблон для валидации строки (будет проигнорирован, если `iso = true`)
 * @typeParam `message` - `{ [min | invalidOperator]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getDateRequiredValidationSchema()
 * })
 * // will returns z.string()
 */
export const getDateOptionalValidationSchema = (props?: DateValidationOptions) => {
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
