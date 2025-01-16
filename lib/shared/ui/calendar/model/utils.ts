import { cn } from '$/shared/utils'

export const DATE_VISIBLE_PATTERN = 'dd.MM.yyyy'

/**
 * Форматирование объекта даты в читаемую строку
 * @example
 * new Date() -> '10.10.2024'
 * @param {Date} date
 * @param {string} locale
 * @returns Форматированная строка
 */
export const formatDateToLocaleString = (date: Date, locale: string = 'ru-RU'): string => {
  const formatter = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return formatter.format(date)
}

/**
 * Форматирование объекта даты в читаемую строку года
 * @example
 * new Date() -> '2024'
 * @param {Date} date
 * @param {string} locale
 * @returns Форматированная строка
 */
export const formatDateToYearString = (date: Date, locale: string = 'ru-RU') => {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric'
  })

  return formatter.format(date)
}

/**
 * Форматирование объекта даты в читаемую строку месяца
 * @example
 * new Date() -> 'декабрь'
 * @param date
 * @param locale
 */
export const formatDateToMonthString = (date: Date, locale: string = 'ru-RU') => {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: 'long'
  })

  return formatter.format(date)
}

export const defaultClassNames = {
  today: cn('text-color-primary-default'),
  outside: 'text-color-tetriary',
  selected: 'bg-color-primary-default text-color-white',
  range_outer: cn('text-color-primary-default text-color-white'),
  range_middle: cn(
    'bg-color-primary-tr-hover relative text-color-dark rounded-none',
    'after:absolute after:content-[""] after:top-0 after:left-0',
    'after:w-full after:h-[4px] after:bg-color-white after:z-0',
    'before:absolute before:content-[""] before:bottom-0 before:left-0',
    'before:w-full before:h-[4px] before:bg-color-white before:z-0',
    'hover:after:bg-color-transparent hover:before:bg-color-transparent',
    'before:pointer-events-none before:pointer-events-none'
  ),
  day: 'text-center'
}
