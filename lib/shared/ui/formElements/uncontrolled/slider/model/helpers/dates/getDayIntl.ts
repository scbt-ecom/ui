export const getDayIntl = (years: number) => {
  const pluralRules = new Intl.PluralRules('ru-RU')
  const category = pluralRules.select(years)

  const forms = {
    one: 'день',
    few: 'дня',
    many: 'дней',
    other: 'дней'
  }

  return forms[category as keyof typeof forms]
}
