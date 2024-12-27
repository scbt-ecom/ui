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
  // isMulti = false,
  isSearchable = false,
  onChange
}: UseSelectControllerProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const onInputValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target

    setInputValue(value)
  }

  const options = useMemo<SelectItemOption[]>(() => {
    if (!isSearchable) {
      return initialOptions
    }

    return initialOptions.filter((option) =>
      (displayValue ? displayValue(option) : option.label).toLowerCase().includes(inputValue.toLowerCase())
    )
  }, [initialOptions, isSearchable, displayValue, inputValue])

  const onValueChange = (value: SelectItemOption | SelectItemOption[] | null) => {
    if (!value) {
      return
    }

    if (Array.isArray(value)) {
      const mergedValue = value.map((option) => (displayValue ? displayValue(option) : option.label)).join(', ')

      setInputValue(mergedValue)
    } else {
      const label = displayValue ? displayValue(value) : value.label

      setInputValue(label)
    }
    if (onChange) onChange(value)
  }

  return { options, inputValue, onInputValueChange, onValueChange }
}
