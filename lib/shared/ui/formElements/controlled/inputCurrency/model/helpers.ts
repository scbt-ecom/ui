import type { ICurrencyOption, TCurrencyVariant } from '../InputCurrencyControl'

export const getDelimiterForCurrency = (currency: TCurrencyVariant) => {
  switch (currency) {
    case 'euro':
      return '\u20AC '
    case 'dollars':
      return '$ '
    case 'rubles':
      return '\u20BD '
    case 'yuan':
      return '¥ '
    case 'dirhams':
      return 'د.إ '
    default:
      return ''
  }
}

export const currencyOptionsList: ICurrencyOption[] = [
  {
    ruName: 'Евро',
    engName: 'Eur',
    currency: 'euro'
  },
  {
    ruName: 'Доллар США',
    engName: 'USD',
    currency: 'dollars'
  },
  {
    ruName: 'Российский рубль',
    engName: 'RUB',
    currency: 'rubles'
  },
  {
    ruName: 'Китайский Юань',
    engName: 'CNY',
    currency: 'yuan'
  },
  {
    ruName: 'Дирхам ОАЭ',
    engName: 'AED',
    currency: 'dirhams'
  }
]
