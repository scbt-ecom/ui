import type { ComboboxItemOption } from '../combobox'

export type AutocompleteItemOption<Data> = ComboboxItemOption & {
  data?: Data
}
