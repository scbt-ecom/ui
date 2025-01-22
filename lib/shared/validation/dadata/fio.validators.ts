import z from 'zod'
import { fioDefaultMessages, fioRegex } from './dadata.constants'

const getFioParts = (value: string) => {
  const [surname, name, ...patronymicParts] = value.trim().replace(/\s+/g, ' ').split(' ')
  const patronymic = patronymicParts.join(' ')

  return { surname, name, patronymic }
}

type FioValidationOptions = {
  message?: {
    root?: string
    nameOrSurnameEmpty?: string
    invalidName?: string
    invalidSurname?: string
    invalidPatronymic?: string
  }
}

export const getFioRequired = (props?: FioValidationOptions) => {
  const { message } = props || {}

  const { root, nameOrSurnameEmpty, invalidSurname, invalidPatronymic, invalidName } = message || {}

  return z
    .string()
    .min(1, {
      message: root || fioDefaultMessages.NON_EMPTY()
    })
    .superRefine((value, context) => {
      const { name, surname, patronymic } = getFioParts(value)

      if (!fioRegex.ONLY_CYRILLIC.test(value)) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'regex',
          message: fioDefaultMessages.ONLY_CYRILLIC()
        })
      }

      if (!fioRegex.CHECK_WHITESPACES.test(value)) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'regex',
          message: fioDefaultMessages.VALUE_NO_WHITESPACE()
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
    .default('')
}
