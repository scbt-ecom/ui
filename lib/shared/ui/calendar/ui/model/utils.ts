import { type SelectOptions } from '..'

export const weekdays = {
  пн: false,
  вт: false,
  ср: false,
  чт: false,
  пт: false,
  сб: true,
  вс: true
}

type GetFromProps = {
  startFrom?: number
  order?: 'asc' | 'desc'
}

export const getYearsFrom = ({ startFrom = 1950, order = 'desc' }: GetFromProps): number[] => {
  const dates: number[] = []

  const today = new Date()

  switch (order) {
    case 'asc':
      for (let i = startFrom; i <= today.getFullYear(); i += 1) {
        dates.push(i)
      }
      break
    case 'desc':
    default:
      for (let i = today.getFullYear(); i >= startFrom; i -= 1) {
        dates.push(i)
      }
  }

  return dates
}

export const getMonthsFrom = ({ startFrom = 0, order = 'desc' }: GetFromProps): number[] => {
  const dates: number[] = []

  // for (let i = 12; i >= startFrom; i -= 1) {
  //   dates.push(new Date(currentYear, i, currentDay))
  // }

  switch (order) {
    case 'asc':
      for (let i = startFrom; i <= 12; i += 1) {
        dates.push(i)
      }
      break
    case 'desc':
    default:
      for (let i = 12; i >= startFrom; i -= 1) {
        dates.push(i)
      }
  }

  return dates
}

export const defaultSelectOptions: SelectOptions = {
  year: {
    order: 'desc',
    startFrom: 2000,
    disabled: false
  },
  month: {
    order: 'asc',
    startFrom: 1,
    disabled: false
  }
}
