export type CalendarSelectOption = {
  disabled?: boolean
  startFrom?: number
  order?: 'asc' | 'desc'
}

export type SelectOptions = {
  year?: CalendarSelectOption | false
  month?: CalendarSelectOption | false
}
