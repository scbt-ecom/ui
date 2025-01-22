import { type SelectItemOption } from '$/shared/ui'

export const isSingleOption = (value?: SelectItemOption | SelectItemOption[]): value is SelectItemOption =>
  Boolean(value) && !Array.isArray(value)
