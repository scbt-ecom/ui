import { cn } from '$/shared/utils'

/**
 * Форматирование объекта даты в читаемую строку
 * @example
 * new Date() -> '10.10.2024'
 * @param {Date} date
 * @param {string} locale
 * @returns Форматированная строка
 */
export const formatDateToLocaleString = (date: Date, locale?: string): string => {
  const formatter = new Intl.DateTimeFormat(locale || 'ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return formatter.format(date)
}

export type TMode = 'single' | 'multiple' | 'range'

export const defaultClassNames = {
  today: cn(
    'text-color-primary-default after:absolute after:content-[""]',
    'after:w-4 after:h-0.5 after:bg-color-primary-default',
    'after:rounded-sm after:bottom-2 after:left-1/2 after:-translate-x-1/2'
  ),
  outside: 'text-color-tetriary',
  selected: 'bg-color-primary-default text-color-white',
  range_outer: cn('text-color-primary-default text-color-white'),
  range_middle: cn(
    'bg-color-primary-tr-hover relative text-color-dark rounded-none',
    'after:absolute after:content-[""] after:top-0 after:left-0',
    'after:w-full after:h-[4px] after:bg-color-white',
    'before:absolute before:content-[""] before:bottom-0 before:left-0',
    'before:w-full before:h-[4px] before:bg-color-white'
  )
}
