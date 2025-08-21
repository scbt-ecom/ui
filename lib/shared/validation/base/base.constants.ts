import { type Primitive } from 'zod'
import { formatDateToLocaleString } from '$/shared/ui'
import { TypeGuards } from '$/shared/utils'

export const baseDefaultMessages = {
  NON_EMPTY: () => 'Поле не может быть пустым',
  MIN_LENGTH: (min: number) => `Поле должно содержать минимум символов: ${min}`,
  MAX_LENGTH: (max: number) => `Поле должно содержать максимум символов: ${max}`,
  FIX_LENGTH: (length: number) => `Поле должно быть фиксированной длины символов: ${length}`,
  MIN_VALUE: (min: number) => `Значение не может быть меньше чем ${min}`,
  MAX_VALUE: (max: number) => `Значение не может быть больше чем ${max}`,

  PHONE_NON_EMPTY: () => 'Номер телефона должен состоять из 11 цифр',
  PHONE_INVALID_OPERATOR: () => 'Код города/оператора должен начинаться с цифры 3, 4, 5, 6 или 9',

  EMAIL_INVALID: () => 'Email введен некорректно. Пример: example@domain.ru',
  EMAIL_NON_EMPTY: () => 'Введите адрес электронной почты',

  SELECT_NON_EMPTY: () => 'Выберите один из вариантов',
  SELECT_MULTIPLE_MIN_LENGTH: (length: number) => `Выберите не менее ${length} вариантов`,
  SELECT_MULTIPLE_MAX_LENGTH: (length: number) => `Выберите не более ${length} вариантов`,
  SELECT_FIX_LENGTH: (length: number) => `Поле должно быть фиксированного количества вариантов: ${length}`,

  DATE_INVALID_FORMAT: () => 'Дата указана некорректно',
  DATE_NON_EMPTY: () => 'Укажите дату',
  VALUE_OUT_OF_RANGE: <T extends Primitive>(range: T[]) => `Выберите один из вариантов ${range.join(', ')}`,

  DATE_MIN: (min: Date | string) => {
    const date = TypeGuards.isString(min) ? new Date(min) : min

    return `Выбранная дата должна быть не раньше ${formatDateToLocaleString(date)}`
  },
  DATE_MAX: (max: Date | string) => {
    const date = TypeGuards.isString(max) ? new Date(max) : max

    return `Выбранная дата должна быть не позже ${formatDateToLocaleString(date)}`
  },

  INVALID_REGEX_STRING: () => 'Поле не соответствует требованиям',

  INVALID_URL: () => 'Ссылка введена некорректно. Пример: https://example.com, example.com',

  PASSPORT_INVALID_TYPE: () => 'Паспортные данные введены некорректно',
  PASSPORT_NON_EMPTY: () => 'Поле обязательно для заполнения',
  PASSPORT_PART_OR_NUMBER_NON_EMPTY: () => 'Серия или номер паспорта не могут быть пустыми',
  INVALID_PASSPORT_PART: () => 'Серия паспорта введена некорректно',
  INVALID_PASSPORT_NUMBER: () => 'Номер паспорта введен некорректно',

  DEPARTMENT_NON_EMPTY: () => 'Поле обязательно для заполнения',
  INVALID_DEPARTMENT: () => 'Код подразделения введён некорректно',

  CURRENCY_NON_EMPTY: () => 'Не выбрана валюта'
}
