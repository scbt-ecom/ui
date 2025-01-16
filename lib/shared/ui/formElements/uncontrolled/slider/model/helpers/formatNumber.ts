export const formatNumber = (value: number | string) => {
  if (typeof value === 'number') {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
