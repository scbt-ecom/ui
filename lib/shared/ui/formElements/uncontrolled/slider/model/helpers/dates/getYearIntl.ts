export const getYearIntl = (years: number) => {
  const pluralRules = new Intl.PluralRules('ru-RU')
  const category = pluralRules.select(years)

  const forms = {
    one: 'год',
    few: 'года',
    many: 'лет',
    other: 'лет'
  }

  return forms[category as keyof typeof forms]
}
