import z, { ZodIssueCode } from 'zod'
import { baseDefaultMessages } from './base.constants'

const okato = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
  '80',
  '81',
  '82',
  '83',
  '84',
  '85',
  '86',
  '87',
  '88',
  '89',
  '90',
  '91',
  '92',
  '93',
  '94',
  '95',
  '96',
  '97',
  '98',
  '99'
]

export type PassportValidationOptions = {
  /**
   * значение по умолчанию
   * @default undefined
   */
  defaultValue?: string
  message?: Partial<Record<'empty' | 'root' | 'invalidPart' | 'invalidNumber', string>>
}

/**
 * Схема валидации обязательного поля паспорта
 */
const getPassportRequired = (props?: PassportValidationOptions) => {
  const { defaultValue, message } = props || {}
  const { root, empty, invalidPart, invalidNumber } = message || {}

  const currentDate = new Date()

  const schema = z
    .string({ message: root ?? baseDefaultMessages.PASSPORT_INVALID_TYPE() })
    .nonempty(empty ?? baseDefaultMessages.PASSPORT_NON_EMPTY())
    .superRefine((value, context) => {
      const [part, number] = value.replace(/_/g, '').split(' ')

      // паспорт должен содержать серию и номер
      if (!part.length || !number.length) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: empty ?? baseDefaultMessages.PASSPORT_PART_OR_NUMBER_NON_EMPTY()
        })
      }

      // серия паспорта не может начинаться с нуля или иметь более 2 нулей подряд
      if (/^0{2,4}/.test(part)) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: invalidPart ?? baseDefaultMessages.INVALID_PASSPORT_PART()
        })
      }

      // год выпуска паспорта должен быть в диапазоне 97-99 или 00 по настоящий год
      const year = parseInt(part.slice(2, 4), 10)
      const currentYear = currentDate.getFullYear().toString().slice(2, 4)
      if (!(year >= 97 && year <= 99) && !(year >= 0 && year <= Number(currentYear))) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: invalidPart ?? baseDefaultMessages.INVALID_PASSPORT_PART()
        })
      }

      // первые 2 цифры должны содержать валидный код ОКАТО и ОКТМО
      if (!okato.includes(part.slice(0, 2))) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: invalidPart ?? baseDefaultMessages.INVALID_PASSPORT_PART()
        })
      }

      // номер паспорта не может быть меньше 000101
      if (Number(number.replace(/^0+/g, '')) < 101) {
        return context.addIssue({
          code: ZodIssueCode.custom,
          message: invalidNumber ?? baseDefaultMessages.INVALID_PASSPORT_NUMBER()
        })
      }
    })

  return schema.default(defaultValue ?? '')
}
type PassportRequiredSchema = ReturnType<typeof getPassportRequired>

/**
 * Схема валидации обязательного поля паспорта
 * @param {PassportValidationOptions} props настройки схемы
 * @typeParam `message` - `{ [root]: string }`
 * @returns схема валидации поля в соответствии с настройками
 *
 * @example with required min value
 * z.object({
 *   field: zodValidators.base.getPassportSchema()
 * })
 * // will return z.string()
 */
export function getPassportSchema(props?: PassportValidationOptions): PassportRequiredSchema {
  return getPassportRequired(props)
}
