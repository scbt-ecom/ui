import { type TSuffixVariants } from '../types'
import { getFormattedCurrency } from './currency'
import { getDayIntl, getIntlMonth, getYearIntl } from './dates'

export const getInputSliderSuffix = (suffix: TSuffixVariants, value?: number, input: boolean = true) => {
  if (!value) return ''

  const suffixesInput = {
    year: getYearIntl(value),
    month: getIntlMonth(value),
    day: getDayIntl(value),
    currency: '₽',
    percent: '%'
  }

  const suffixesAdditional = {
    year: `${value} ${getYearIntl(value)}`,
    month: `${value} ${getIntlMonth(value)}`,
    day: `${value} ${getDayIntl(value)}`,
    currency: getFormattedCurrency(value),
    percent: `${value}%`
  }

  return input ? suffixesInput[suffix] : suffixesAdditional[suffix]
}
