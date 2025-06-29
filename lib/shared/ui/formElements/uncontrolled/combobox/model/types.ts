import type { ComboboxItemOption } from '../ui'

export type ComboboxValue<Multi extends boolean> = Multi extends true ? ComboboxItemOption[] : ComboboxItemOption | null

export type ChangeHandler<Multi extends boolean> = (
  value: Multi extends true ? ComboboxItemOption[] : ComboboxItemOption | null
) => void
