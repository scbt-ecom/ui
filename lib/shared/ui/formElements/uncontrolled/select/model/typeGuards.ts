import { type SelectItemOption } from '$/shared/ui'

export const isSingleOption = (value?: SelectItemOption | SelectItemOption[]): value is SelectItemOption | undefined =>
  !Array.isArray(value)
