import { useMemo, useState } from 'react'
import type { ExternalHandlers } from '../combobox'
import { type ChangeHandler, type ComboboxValue } from '../model'
import type { ComboboxItemOption } from '../ui'

type UseComboboxOptions<Multi extends boolean> = {
  initialOptions: ComboboxItemOption[]
  searchable?: boolean
  multiple?: Multi
  value?: ComboboxValue<Multi>
  onChange?: ChangeHandler<Multi>
  displayValue?: (option: ComboboxItemOption) => string
  defaultOpen?: boolean
  externalHandlers?: ExternalHandlers<Multi>
}

export const useCombobox = <Multi extends boolean>(props: UseComboboxOptions<Multi>) => {
  const { multiple, defaultOpen, value, onChange, initialOptions, searchable, displayValue, externalHandlers } = props
  const { changeHandler: externalChangeHandler, inputChangeHandler: externalInputChangeHandler } = externalHandlers ?? {}

  const [search, setSearch] = useState<string>('')
  const [open, setOpen] = useState<boolean>(defaultOpen ?? false)
  const [state, setState] = useState<ComboboxValue<Multi>>(value ?? ((multiple ? [] : null) as ComboboxValue<Multi>))

  const options = useMemo<ComboboxItemOption[]>(() => {
    if (!search.length || !searchable) {
      return initialOptions
    }

    return initialOptions.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    externalInputChangeHandler?.(e.target.value)
  }

  const changeHandler = (value: ComboboxItemOption) => {
    setState((prevState) => {
      if (multiple) {
        const prev = prevState as ComboboxItemOption[]
        const exists = prev.some((option) => option.value === value.value)

        const updated = (
          exists ? prev.filter((option) => option.value !== value.value) : [...prev, value]
        ) as ComboboxValue<Multi>

        onChange?.(updated)
        externalChangeHandler?.(updated)

        setSearch(
          (updated as ComboboxItemOption[]).map((option) => (displayValue ? displayValue(option) : option.label)).join(', ')
        )

        return updated
      }

      const updated = ((prevState as ComboboxItemOption)?.value === value.value ? null : value) as ComboboxValue<Multi>

      onChange?.(updated)
      externalChangeHandler?.(updated)

      const label = displayValue && updated ? displayValue(updated as ComboboxItemOption) : (updated as ComboboxItemOption)?.label
      setSearch(label ?? '')
      setOpen(false)

      return updated
    })
  }

  return {
    open,
    setOpen,
    changeHandler,
    options,
    search,
    onInputChange,
    state
  }
}
