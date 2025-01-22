import z from 'zod'
import { fioDefaultMessages, fioRegex } from './dadata.constants'

const getFioParts = (value: string) => {
  const [surname, name, ...patronymicParts] = value.trim().replace(/\s+/g, ' ').split(' ')
  const patronymic = patronymicParts.join(' ')

  return { surname, name, patronymic }
}

type FioValidationOptions<Required extends boolean> = {
  /**
   * указывает что поле обязательное
   * @default true
   */
  required?: Required
  message?: {
    root?: string
    nameOrSurnameEmpty?: string
    invalidName?: string
    invalidSurname?: string
    invalidPatronymic?: string
  }
}

/**
 * Схема валидации обязательного поля автозаполнения ФИО
 */
const getFioRequired = (props?: Omit<FioValidationOptions<true>, 'required'>) => {
  const { message } = props || {}

  const { nameOrSurnameEmpty, invalidSurname, invalidPatronymic, invalidName } = message || {}

  return z
    .string()
    .superRefine((value, context) => {
      const { name, surname, patronymic } = getFioParts(value)

      if (!fioRegex.ONLY_CYRILLIC.test(value)) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'regex',
          message: fioDefaultMessages.ONLY_CYRILLIC()
        })
      }

      if (!name || !surname) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'regex',
          message: nameOrSurnameEmpty || fioDefaultMessages.NAME_OR_SURNAME_NON_EMPTY()
        })
      }

      if (!fioRegex.CHECK_HYPHEN.test(name)) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'regex',
          message: invalidName || fioDefaultMessages.INVALID_NAME()
        })
      }

      if (!fioRegex.CHECK_HYPHEN.test(surname)) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'regex',
          message: invalidSurname || fioDefaultMessages.INVALID_SURNAME()
        })
      }

      if (patronymic) {
        if (!fioRegex.PATRONYMIC.test(patronymic)) {
          context.addIssue({
            code: z.ZodIssueCode.invalid_string,
            validation: 'regex',
            message: invalidPatronymic || fioDefaultMessages.INVALID_PATRONYMIC()
          })
        }
      }
    })
    .transform((value) => value.trimEnd())
    .default('')
}
type FioRequiredSchema = ReturnType<typeof getFioRequired>

/**
 * Схема валидации опционального поля автозаполнения ФИО
 */
const getFioOptional = (props?: Omit<FioValidationOptions<false>, 'required'>) => {
  return getFioRequired(props)
    .optional()
    .transform((value) => (!value?.length ? undefined : value))
}
type FioOptionalSchema = ReturnType<typeof getFioOptional>

/**
 * Схема валидации поля автозаполнения ФИО
 * @param {DateValidationOptions} props настройки схемы
 * @typeParam `required` - `boolean`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required value
 * z.object({
 *   field: zodValidators.base.getFioSchema()
 * })
 * // will returns z.string()
 *
 * @example with required value
 * z.object({
 *   field: zodValidators.base.getFioSchema({ required: false })
 * })
 * // will returns z.string().optional()
 */
export function getFioSchema(props?: FioValidationOptions<true>): FioRequiredSchema
export function getFioSchema(props?: FioValidationOptions<false>): FioOptionalSchema
export function getFioSchema<Required extends boolean>(
  props?: FioValidationOptions<Required>
): FioRequiredSchema | FioOptionalSchema {
  const { required = true, ...restProps } = props || {}

  return required ? getFioRequired(restProps) : getFioOptional(restProps)
}
