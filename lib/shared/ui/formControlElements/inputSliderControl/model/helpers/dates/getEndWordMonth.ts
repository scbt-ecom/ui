export function getEndWordMonth(months: number) {
  const remMonthsDivByTen = months % 10

  switch (true) {
    case months > 10 && months < 20:
      return 'месяцев'
    case remMonthsDivByTen > 1 && remMonthsDivByTen < 5:
      return 'месяца'
    case remMonthsDivByTen === 1:
      return 'месяц'
    default:
      return 'месяцев'
  }
}
