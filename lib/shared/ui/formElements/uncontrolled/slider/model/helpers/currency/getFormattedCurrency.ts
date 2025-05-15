export const getFormattedCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    notation: 'compact',
    roundingMode: 'floor',
    maximumSignificantDigits: 2
  })

  return formatter.format(value)
}
