import z from 'zod'
import { baseDefaultMessages } from './base.constants'
import { getSelectSchema } from './select.validators'
import { getStringSchema } from './string.validators'
import type { CurrencyValue } from '$/shared/ui/formElements/uncontrolled/inputCurrency'
import { TypeGuards } from '$/shared/utils'

export type CurrencyValidationOptions = {
  /**
   * Минимальное значение
   * @default 1
   */
  min?: number
  /**
   * Максимальное значение
   * @default undefined
   */
  max?: number
  /**
   * Значение по умолчанию
   * @default { value: '', currency: null }
   */
  defaultValue?: CurrencyValue
  /**
   * Произвольные сообщения об ошибках
   */
  message?: Partial<
    Record<keyof Omit<CurrencyValidationOptions, 'message' | 'defaultValue'> | 'currencyEmpty' | 'valueEmpty', string>
  >
}

const defaultCurrency: CurrencyValue = {
  value: '',
  currency: null
}

const getCurrencyRequired = (props?: CurrencyValidationOptions) => {
  const { min = 1, max, message, defaultValue = defaultCurrency } = props ?? {}

  return z
    .object({
      value: getStringSchema(),
      currency: getSelectSchema()
    })
    .superRefine(({ value, currency }, context) => {
      if (TypeGuards.isStringEmpty(value)) {
        context.addIssue({
          code: z.ZodIssueCode.too_small,
          type: 'string',
          minimum: 0,
          inclusive: true,
          message: message?.valueEmpty ?? baseDefaultMessages.NON_EMPTY()
        })
      }

      if (Number(value) < min) {
        context.addIssue({
          code: z.ZodIssueCode.too_small,
          type: 'string',
          minimum: min,
          inclusive: true,
          message: message?.min ?? baseDefaultMessages.MIN_VALUE(min)
        })
      }

      if (TypeGuards.isNil(currency)) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_type,
          expected: 'string',
          received: 'null',
          message: message?.currencyEmpty ?? baseDefaultMessages.CURRENCY_NON_EMPTY()
        })
      }

      if (max) {
        if (Number(value) > max) {
          context.addIssue({
            code: z.ZodIssueCode.too_big,
            type: 'string',
            maximum: max,
            inclusive: true,
            message: message?.max ?? baseDefaultMessages.MAX_VALUE(max)
          })
        }
      }
    })
    .default(defaultValue)
}
type CurrencyRequiredSchema = ReturnType<typeof getCurrencyRequired>

/**
 * Схема валидации обязательного поля валюты
 * @param {CurrencyValidationOptions} props настройки схемы
 * @typeParam `min` - `number | undefined` `default: 1`
 * @typeParam `max` - `number | undefined` `default: undefined`
 * @typeParam `message` - `{ [min | max | currencyEmpty | valueEmpty]: string }`
 * @typeParam `defaultValue` - `CurrencyValue` `default: { value: '', currency: null }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required min value
 * z.object({
 *   field: zodValidators.base.getCurrencySchema({ min: 10 })
 * })
 * // will returns z.object({
 *   value: z.string().min(10),
 *   currency: z.string().nullable()
 * })
 *
 * @example with required min, max value
 * z.object({
 *   field: zodValidators.base.getCurrencySchema({ min: 10, max: 20 })
 * })
 * // will returns z.object({
 *   value: z.string().min(10).max(20),
 *   currency: z.string().nullable()
 * })
 */
export function getCurrencySchema(props?: CurrencyValidationOptions): CurrencyRequiredSchema {
  return getCurrencyRequired(props)
}
