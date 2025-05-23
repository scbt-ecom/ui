/**
 * @deprecated use baseDefaultMessages instead
 */
export const VALIDATION_MESSAGES = {
  REQUIRED: 'Поле обязательно к заполнению',
  MIN_LENGTH: 'Минимальная длина символов должна быть не менее',
  MAX_LENGTH: 'Максимальная длина символов должна быть не более',
  FIX_LENGTH: 'Длина символов должна быть равна',
  MAX_LENGTH_ELEMENTS: 'Максимальное количество элементов должно быть не более',
  MIN_LENGTH_ELEMENTS: 'Минимальное количество элементов должно быть не менее',
  FIX_LENGTH_ELEMENTS: 'Количество элементов должно быть равно',
  INVALID_VALUE: 'Поле заполнено некорректно',
  INVALID_DATE: 'Введите корректную дату',
  FUTURE_DATE_NOT_ALLOWED: 'Нельзя выбрать дату позже текущей',
  INVALID_URL: 'Некорректная ссылка'
} as const
