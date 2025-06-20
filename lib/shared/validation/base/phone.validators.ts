import z from 'zod'
import { baseDefaultMessages } from './base.constants'
import { TypeGuards } from '$/shared/utils'

export type PhoneValidationOptions<Required extends boolean> = {
  /**
   * исключает маску в возвращаемом значении
   * @default true
   */
  ignoreMask?: boolean
  /**
   * игнорирует символы для проверки поля исключая данные символы
   * @default /[()+_ -]/g
   */
  maskSymbols?: RegExp | string
  /**
   * указывает что поле обязательное
   */
  required?: Required
  /**
   * значение по умолчанию
   * @default undefined
   */
  defaultValue?: string
  message?: {
    min?: string
    invalidOperator?: string
  }
  /**
   * указываем валидные коды оператор
   * @default ['3', '4', '5', '6', '9']
   * @param string[]
   */
  validOperatorCodes?: string[]
}

/**
 * Схема валидации обязательного поля номера телефона
 */
const getPhoneRequired = (props?: Omit<PhoneValidationOptions<true>, 'required'>) => {
  const {
    ignoreMask = true,
    maskSymbols = /[()+_ -]/g,
    message,
    defaultValue,
    validOperatorCodes = ['3', '4', '5', '6', '9']
  } = props || {}

  const mask = TypeGuards.isString(maskSymbols) ? new RegExp(maskSymbols) : maskSymbols

  let schema = z.string().superRefine((value, context) => {
    const cleanValue = value.replace(mask, '')

    const operatorCode = cleanValue.charAt(1)

    if (!validOperatorCodes.includes(operatorCode)) {
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
    schema = schema.transform((value) => value.replace(mask, '')) as unknown as typeof schema
  }

  return schema.default(defaultValue ?? '')
}
type PhoneRequiredSchema = ReturnType<typeof getPhoneRequired>

/**
 * Схема валидации опционального поля номера телефона
 */
const getPhoneOptional = (props?: Omit<PhoneValidationOptions<false>, 'required'>) => {
  const { ignoreMask = true, maskSymbols = /[()+_ -]/g, message, validOperatorCodes = ['3', '4', '5', '6', '9'] } = props || {}

  const mask = TypeGuards.isString(maskSymbols) ? new RegExp(maskSymbols) : maskSymbols

  let schema = z.string().superRefine((value, context) => {
    const cleanValue = value.replace(mask, '')

    if (!cleanValue.length) return

    const operatorCode = cleanValue.charAt(1)

    if (!validOperatorCodes.includes(operatorCode)) {
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
    schema = schema.transform((value) => value.replace(mask, '')) as unknown as typeof schema
  }

  return schema.optional().transform((value) => (!value || value?.replace(mask, '').length !== 0 ? undefined : value))
}
type PhoneOptionalSchema = ReturnType<typeof getPhoneOptional>

/**
 * Схема валидации опционального поля номера телефона
 * @param {PhoneValidationOptions} props настройки схемы
 * @typeParam `required` - `boolean`
 * @typeParam `ignoreSeparators` - `boolean | undefined` `default: false`
 * @typeParam `maskSymbols` - `RegExp | undefined` `default: /[()+_ -]/g`
 * @typeParam `message` - `{ [min | invalidOperator]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required value
 * z.object({
 *   field: zodValidators.base.getPhoneSchema()
 * })
 * // will returns z.string()
 *
 * @example with optional value
 * z.object({
 *   field: zodValidators.base.getPhoneSchema({ required: false })
 * })
 * // will returns z.string().optional()
 */
export function getPhoneSchema(props?: PhoneValidationOptions<true>): PhoneRequiredSchema
export function getPhoneSchema(props?: PhoneValidationOptions<false>): PhoneOptionalSchema
export function getPhoneSchema<Required extends boolean>(
  props?: PhoneValidationOptions<Required>
): PhoneRequiredSchema | PhoneOptionalSchema {
  const { required = true } = props || {}

  return required ? getPhoneRequired(props) : getPhoneOptional(props)
}
