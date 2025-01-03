import { useMemo, useState } from 'react'
import type { SelectItemOption } from '../model'

type UseSelectControllerProps = {
  options: SelectItemOption[]
  isMulti?: boolean
  isSearchable?: boolean
  displayValue?: (option: SelectItemOption) => string
  onChange?: (value: SelectItemOption | SelectItemOption[] | null) => void
}

export const useSelectController = ({
  options: initialOptions,
  displayValue,
  isSearchable = false,
  onChange
}: UseSelectControllerProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const withDisplayValue = (option: SelectItemOption) => {
    return displayValue ? displayValue(option) : option.label
  }

  const onInputValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target

    setInputValue(value)
  }

  const options = useMemo<SelectItemOption[]>(() => {
    if (!isSearchable) {
      return initialOptions
    }

    return initialOptions.filter((option) => withDisplayValue(option).toLowerCase().includes(inputValue.toLowerCase()))
  }, [isSearchable, initialOptions, withDisplayValue, inputValue])

  const onValueChange = (value: SelectItemOption | SelectItemOption[] | null) => {
    if (!value) {
      return
    }

    if (!Array.isArray(value)) {
      const label = withDisplayValue(value)
      setInputValue(label)
    }

    if (onChange) onChange(value)
  }

  const selectDisplayValue = (value: SelectItemOption | SelectItemOption[] | null) => {
    if (!value) return

    if (Array.isArray(value)) {
      return value.map((item) => withDisplayValue(item)).join(', ')
    } else {
      return withDisplayValue(value)
    }
  }

  const onDeleteItem = (values: SelectItemOption | SelectItemOption[], option: SelectItemOption) => {
    const filteredOptions =
      (Array.isArray(values) && values.filter((value: SelectItemOption) => value.value !== option.value)) || []

    onValueChange(filteredOptions)
  }

  return { options, inputValue, onInputValueChange, onValueChange, onDeleteItem, selectDisplayValue }
}
