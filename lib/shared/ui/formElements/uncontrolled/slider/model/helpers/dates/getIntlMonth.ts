export const getIntlMonth = (months: number) => {
  const pluralRules = new Intl.PluralRules('ru-RU')
  const category = pluralRules.select(months)

  const forms = {
    one: 'месяц',
    few: 'месяца',
    many: 'месяцев',
    other: 'месяцев'
  }

  return forms[category as keyof typeof forms]
}
