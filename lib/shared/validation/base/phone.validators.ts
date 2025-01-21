import z from 'zod'
import { baseDefaultMessages } from './base.constants'

export type PhoneValidationOptions = {
  /**
   * исключает маску в возвращаемом значении
   * @default false
   */
  ignoreMask?: boolean
  /**
   * игнорирует символы для проверки поля исключая данные символы
   * @default /[()+_ -]/g
   */
  maskSymbols?: RegExp
  message?: {
    min?: string
    invalidOperator?: string
  }
}

/**
 * Схема валидации обязательного поля номера телефона
 * @param {PhoneValidationOptions} props настройки схемы
 * @typeParam `ignoreMask` - `boolean | undefined` `default: false`
 * @typeParam `maskSymbols` - `RegExp | undefined` `default: /[()+_ -]/g`
 * @typeParam `message` - `{ [min | invalidOperator]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getPhoneRequired()
 * })
 * // will returns z.string()
 */
export const getPhoneRequired = (props?: PhoneValidationOptions) => {
  const { ignoreMask = true, maskSymbols = /[()+_ -]/g, message } = props || {}

  let schema = z.string().superRefine((value, context) => {
    const cleanValue = value.replace(maskSymbols, '')

    const operatorCode = cleanValue.charAt(1)

    if (!['3', '4', '5', '6', '7', '9'].includes(operatorCode)) {
      context.addIssue({
        code: z.ZodIssueCode.invalid_string,
        validation: 'regex',
        message: message?.invalidOperator || baseDefaultMessages.PHONE_INVALID_OPERATOR()
      })
    }

    if (cleanValue.length < 11) {
      context.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 11,
        inclusive: true,
        type: 'string',
        message: message?.min || baseDefaultMessages.PHONE_NON_EMPTY()
      })
    }
  })

  if (ignoreMask) {
    schema = schema.transform((value) => value.replace(maskSymbols, '')) as unknown as typeof schema
  }

  return schema.default('')
}

/**
 * Схема валидации опционального поля номера телефона
 * @param {PhoneValidationOptions} props настройки схемы
 * @typeParam `ignoreSeparators` - `boolean | undefined` `default: false` возвращает строку вырезая символы маски
 * @typeParam `maskSymbols` - `RegExp | undefined` `default: /[()+_ -]/g` игнорирует символы для проверки поля исключая данные символы
 * @typeParam `message` - `{ [min | invalidOperator]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example
 * z.object({
 *   field: zodValidators.base.getPhoneOptional()
 * })
 * // will returns z.string()
 */
export const getPhoneOptional = (props?: PhoneValidationOptions) => {
  const { ignoreMask = true, maskSymbols = /[()+_ -]/g, message } = props || {}

  let schema = z.string().superRefine((value, context) => {
    const cleanValue = value.replace(maskSymbols, '')

    const operatorCode = cleanValue.charAt(1)

    if (!['3', '4', '5', '6', '7', '9'].includes(operatorCode)) {
      context.addIssue({
        code: z.ZodIssueCode.invalid_string,
        validation: 'regex',
        message: message?.invalidOperator || baseDefaultMessages.PHONE_INVALID_OPERATOR()
      })
    }

    if (cleanValue.length < 11) {
      context.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 11,
        inclusive: true,
        type: 'string',
        message: message?.min || baseDefaultMessages.PHONE_NON_EMPTY()
      })
    }
  })

  if (ignoreMask) {
    schema = schema.transform((value) => value.replace(maskSymbols, '')) as unknown as typeof schema
  }

  return schema.transform((value) => (!value ? undefined : value))
}
