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

export const getYearsFrom = (startFrom = 2000, order = 'desc'): number[] => {
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

export const getMonthsFrom = (startFrom = 0, order = 'desc'): number[] => {
  const dates: number[] = []

  switch (order) {
    case 'asc':
      for (let i = startFrom; i <= 11; i += 1) {
        dates.push(i)
      }
      break
    case 'desc':
    default:
      for (let i = 11; i >= startFrom; i -= 1) {
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
    startFrom: 0,
    disabled: false
  }
}
