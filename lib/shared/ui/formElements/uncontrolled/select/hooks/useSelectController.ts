import { useMemo, useState } from 'react'
import type { SelectItemOption } from '../model'
import { type ExternalHandlers } from '$/shared/ui/formElements/uncontrolled/select/Select'

type UseSelectControllerProps = {
  options: SelectItemOption[]
  isMulti?: boolean
  isSearchable?: boolean
  displayValue?: (option: SelectItemOption) => string
  onChange?: (value: SelectItemOption | SelectItemOption[] | undefined) => void
  filterDisabled: boolean
  externalInputValue?: string
  externalOnInputChange?: (value: string) => void
  externalHandlers?: ExternalHandlers
}

export const useSelectController = ({
  options: initialOptions,
  displayValue,
  isSearchable = false,
  onChange,
  filterDisabled,
  externalInputValue,
  externalOnInputChange,
  externalHandlers
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
    if (filterDisabled) {
      return initialOptions
    }

    if (!isSearchable) {
      return initialOptions
    }

    return initialOptions.filter((option) =>
      withDisplayValue(option)
        .toLowerCase()
        .includes(externalInputValue ? externalInputValue.toLowerCase() : inputValue.toLowerCase())
    )
  }, [isSearchable, initialOptions, withDisplayValue, inputValue, externalInputValue, filterDisabled])

  const resetValue = () => {
    if (onChange) onChange(undefined)
    if (externalHandlers?.onChange) externalHandlers?.onChange(undefined)
  }

  const onValueChange = (value: SelectItemOption | SelectItemOption[] | null) => {
    if (!value) {
      return
    }

    if (!Array.isArray(value)) {
      if (!value.value) {
        return resetValue()
      }

      const label = withDisplayValue(value)
      setInputValue(label)
      if (externalOnInputChange) externalOnInputChange(label)
      if (externalHandlers?.onInputChange) externalHandlers?.onInputChange(label)
    }

    if (onChange) onChange(value)
    if (externalHandlers?.onChange) externalHandlers?.onChange(value)
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
