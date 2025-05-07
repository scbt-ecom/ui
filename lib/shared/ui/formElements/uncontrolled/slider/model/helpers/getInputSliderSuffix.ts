import { type TSuffixVariants } from '../types'
import { getDayIntl, getIntlMonth, getYearIntl } from './dates'

export const getInputSliderSuffix = (suffix: TSuffixVariants, value?: number) => {
  if (!value) return ''
  const suffixes = {
    year: getYearIntl(value),
    month: getIntlMonth(value),
    day: getDayIntl(value),
    currency: '₽',
    percent: '%'
  }

  return suffixes[suffix]
}
