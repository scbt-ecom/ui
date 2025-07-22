import { useMemo, useRef, useState } from 'react'
import type { ExternalHandlers } from '../combobox'
import { type ChangeHandler, type ComboboxValue } from '../model'
import type { ComboboxItemOption } from '../ui'
import { TypeGuards } from '$/shared/utils'

type UseComboboxOptions<Multi extends boolean> = {
  initialOptions: ComboboxItemOption[]
  searchable?: boolean
  multiple?: Multi
  value?: ComboboxValue<Multi>
  onChange?: ChangeHandler<Multi>
  displayValue?: (option: ComboboxItemOption) => string
  defaultOpen?: boolean
  externalHandlers?: ExternalHandlers<Multi>
  externalInputValue?: string
  externalOnInputChange?: (value: string) => void
  filterDisabled?: boolean
}

export const useCombobox = <Multi extends boolean>(props: UseComboboxOptions<Multi>) => {
  const {
    multiple,
    defaultOpen,
    value,
    onChange,
    initialOptions,
    searchable,
    filterDisabled,
    displayValue,
    externalHandlers,
    externalInputValue,
    externalOnInputChange
  } = props
  const { changeHandler: externalChangeHandler, inputChangeHandler: externalInputChangeHandler } = externalHandlers ?? {}

  const [search, setSearch] = useState<string>('')
  const [open, setOpen] = useState<boolean>(defaultOpen ?? false)

  const isUpdatingRef = useRef<boolean>(false)

  const options = useMemo<ComboboxItemOption[]>(() => {
    if (filterDisabled) {
      return initialOptions
    }

    if (!search.length || !searchable) {
      return initialOptions
    }

    return initialOptions.filter((option) =>
      option.label.toLowerCase().includes(externalInputValue ? externalInputValue.toLowerCase() : search.toLowerCase())
    )
  }, [externalInputValue, filterDisabled, initialOptions, search, searchable])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(true)

    setSearch(e.target.value)
    externalInputChangeHandler?.(e.target.value)
    externalOnInputChange?.(e.target.value)
  }

  const changeHandler = (newValue: ComboboxItemOption) => {
    if (isUpdatingRef.current) return

    isUpdatingRef.current = true

    if (multiple) {
      const prev = (value as ComboboxItemOption[]) || []
      const exists = prev.some((option) => option.value === newValue.value)

      let updatedValue: ComboboxItemOption[]

      if (exists) {
        updatedValue = prev.filter((option) => option.value !== newValue.value)
      } else {
        updatedValue = [...prev, newValue]
      }

      onChange?.(updatedValue as ComboboxValue<Multi>)
      externalChangeHandler?.(updatedValue as ComboboxValue<Multi>)

      const searchValue = prev.map((option) => (displayValue ? displayValue(option) : option.label)).join(', ')
      setSearch(searchValue)
      externalOnInputChange?.(searchValue)
    } else {
      let updated: ComboboxValue<Multi>

      if ((value as ComboboxItemOption)?.value === newValue.value) {
        updated = null as ComboboxValue<Multi>
      } else {
        updated = newValue as ComboboxValue<Multi>
      }

      onChange?.(updated)
      externalChangeHandler?.(updated)

      const label = displayValue && updated ? displayValue(updated as ComboboxItemOption) : (updated as ComboboxItemOption)?.label
      setSearch(label ?? '')
      externalOnInputChange?.(label ?? '')
      setOpen(false)
    }

    setTimeout(() => {
      isUpdatingRef.current = false
    }, 0)
  }

  const comboboxDisplayValue = (value: ComboboxValue<Multi>) => {
    if (!value) return

    if (TypeGuards.isArray(value)) {
      return value.map((item) => (displayValue ? displayValue(item) : item.label)).join(', ')
    }

    return displayValue ? displayValue(value) : value.label
  }

  return {
    open,
    setOpen,
    changeHandler,
    options,
    search,
    onInputChange,
    state: value,
    comboboxDisplayValue
  }
}
