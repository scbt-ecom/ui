import type { DateRange } from 'react-day-picker'
import { formatDateToLocaleString } from '$/shared/ui'

type IsoDateRange = {
  from?: string
  to?: string
}

/**
 * Функция для получения инит состояния поля ввода
 * @param mode режим календаря (single | range)
 * @param value текущее состояние поля
 */
export function getInitialValue(mode: 'single', value?: string): string
export function getInitialValue(mode: 'range', value?: IsoDateRange): string
export function getInitialValue(mode: 'multiple', value?: IsoDateRange): string
export function getInitialValue(mode: 'single' | 'multiple' | 'range', value?: IsoDateRange | string) {
  switch (mode) {
    case 'range':
      const [from, to] = Object.values(value as IsoDateRange).map((date) => new Date(date))

      return [from ? formatDateToLocaleString(from) : undefined, to ? formatDateToLocaleString(to) : undefined].join('-')
    case 'single':
    default:
      const date = value ? new Date(value as string) : new Date()

      return value ? formatDateToLocaleString(date) : ''
  }
}

/**
 * Функция для получения объекта даты по текущему состоянию
 * @param mode режим календаря (single | range)
 * @param value текущее состояние поля
 *
 * @returns Date если mode 'single'
 * @returns DateRange если mode 'range'
 */
export function getCurrentDate(mode: 'single', value?: string): Date
export function getCurrentDate(mode: 'range', value?: IsoDateRange): DateRange
export function getCurrentDate(mode: 'multiple', value?: IsoDateRange): Date
export function getCurrentDate(mode: 'single' | 'multiple' | 'range', value?: string | IsoDateRange): Date | DateRange {
  switch (mode) {
    case 'range':
      if (value) {
        const entries = Object.entries(value as IsoDateRange).map(([key, value]) => [key, new Date(value)])

        return Object.fromEntries(entries)
      }

      return {} as DateRange
    case 'single':
    default:
      return value ? new Date(value as string) : new Date()
  }
}
