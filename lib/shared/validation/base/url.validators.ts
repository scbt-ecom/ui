import { string } from 'zod'
import { baseDefaultMessages } from './base.constants'
import { TypeGuards } from '$/shared/utils'

export type UrlValidationOptions<Required extends boolean> = {
  /**
   * указывает что поле обязательное
   * @default true
   */
  required?: Required
  /**
   * Регулярное выражение для проверки email на валидность
   */
  regexp?: RegExp
  message?: {
    min?: string
    invalid?: string
  }
}

const URL_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

/**
 * Схема валидации обязательного поля ссылки
 */
const getUrlRequired = (props?: Omit<UrlValidationOptions<true>, 'required'>) => {
  const { message, regexp = URL_REGEX } = props || {}

  return string()
    .min(1, message?.min || baseDefaultMessages.NON_EMPTY())
    .regex(regexp, message?.invalid || baseDefaultMessages.INVALID_URL())
    .default('')
}
type UrlRequiredSchema = ReturnType<typeof getUrlRequired>

/**
 * Схема валидации опционального поля ссылки
 */
const getUrlOptional = (props?: Omit<UrlValidationOptions<false>, 'required'>) => {
  const { message, regexp = URL_REGEX } = props || {}

  return string()
    .refine((value) => {
      if (TypeGuards.isStringEmpty(value)) return true
      return regexp.test(value)
    }, message?.invalid || baseDefaultMessages.INVALID_URL())
    .optional()
    .transform((value) => (!value?.length ? undefined : value))
}
type UrlOptionalSchema = ReturnType<typeof getUrlOptional>

export function getUrlSchema(props?: UrlValidationOptions<true>): UrlRequiredSchema
export function getUrlSchema(props?: UrlValidationOptions<false>): UrlOptionalSchema
/**
 * Схема валидации поля ссылки
 * @param {UrlValidationOptions} props настройки схемы
 * @typeParam `required` - `boolean`
 * @typeParam `regexp` - `RegExp`
 * @typeParam `message` - `{ [min | invalid]: string }`
 * @returns схема валидации поля в соответствии с настройками
 */
export function getUrlSchema<Required extends boolean>(
  props?: UrlValidationOptions<Required>
): UrlRequiredSchema | UrlOptionalSchema {
  const { required = true } = props || {}

  return required ? getUrlRequired(props) : getUrlOptional(props)
}
