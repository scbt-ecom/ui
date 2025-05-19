import z from 'zod'
import { baseDefaultMessages } from '$/shared/validation'

export type RegexValidatorsOptions<Required extends boolean> = {
  /**
   * указывает что поле обязательное
   * @default true
   */
  required?: Required
  /**
   * значение по умолчанию
   * @default undefined
   */
  defaultValue?: string
  message?: string
}

const getRegexRequired = (regex: RegExp, props?: Omit<RegexValidatorsOptions<true>, 'required'>) => {
  const { message, defaultValue = '' } = props || {}

  return z
    .string()
    .nonempty(baseDefaultMessages.NON_EMPTY())
    .regex(regex, message || baseDefaultMessages.INVALID_REGEX_STRING())
    .default(defaultValue)
}
type RegexRequiredSchema = ReturnType<typeof getRegexRequired>

const getRegexOptional = (regex: RegExp, props?: Omit<RegexValidatorsOptions<false>, 'required'>) => {
  return getRegexRequired(regex, props)
    .optional()
    .transform((value) => (!value?.length ? undefined : value))
}
type RegexOptionalSchema = ReturnType<typeof getRegexOptional>

export function getRegexSchema(regex: RegExp, props?: RegexValidatorsOptions<true>): RegexRequiredSchema
export function getRegexSchema(regex: RegExp, props?: RegexValidatorsOptions<false>): RegexOptionalSchema
export function getRegexSchema<Required extends boolean>(
  regex: RegExp,
  props?: RegexValidatorsOptions<Required>
): RegexRequiredSchema | RegexOptionalSchema {
  const { required = true, ...restProps } = props || {}

  return required ? getRegexRequired(regex, restProps) : getRegexOptional(regex, restProps)
}
