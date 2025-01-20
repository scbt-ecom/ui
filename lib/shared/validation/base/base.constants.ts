export const baseDefaultMessages = {
  NON_EMPTY: () => 'Поле не может быть пустым',
  MIN_LENGTH: (min: number) => `Поле должно содержать минимум символов: ${min}`,
  MAX_LENGTH: (max: number) => `Поле должно содержать максимум символов: ${max}`,
  MIN_VALUE: (min: number) => `Значение не может быть меньше чем ${min}`,
  MAX_VALUE: (max: number) => `Значение не может быть больше чем ${max}`,
  PHONE_NON_EMPTY: () => 'Номер телефона должен состоять из 11 цифр',
  PHONE_INVALID_OPERATOR: () => 'Код города/оператора должен начинаться с цифры 3, 4, 5, 6 или 9',
  EMAIL_INVALID: () => 'Email введен некорректно. Пример: example@domain.ru',
  EMAIL_NON_EMPTY: () => 'Введите адрес электронной почты',
  SELECT_NON_EMPTY: () => 'Выберите один из вариантов',
  SELECT_MULTIPLE_NON_EMPTY: (length: number) => `Выберите не менее ${length} вариантов`,
  DATE_INVALID_FORMAT: () => 'Дата указана некорректно',
  DATE_NON_EMPTY: () => 'Укажите дату'
}
