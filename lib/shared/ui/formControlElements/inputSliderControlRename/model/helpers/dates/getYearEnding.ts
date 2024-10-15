export function getYearEnding(years: number) {
  const lastDigit = Math.floor(years) % 10
  if (years >= 5 && years <= 20) {
    return 'лет'
  }
  if (lastDigit === 1) {
    return 'год'
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'года'
  }
  return 'лет'
}
