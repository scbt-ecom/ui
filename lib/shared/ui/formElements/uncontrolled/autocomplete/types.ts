import type { SelectItemOption } from '../select'

export type AutocompleteItemOption<Data> = SelectItemOption & {
  data?: Data
}
