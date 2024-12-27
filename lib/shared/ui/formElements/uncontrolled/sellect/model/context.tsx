import { createContext, useCallback, useMemo, useState } from 'react'
import type { SelectItemOption } from '../ui'

type SelectContextProviderProps = {
  options: SelectItemOption[]
  value: string | null
  isMulti?: boolean
  isSearchable?: boolean
  displayValue?: (option: SelectItemOption) => string
  returnValue?: (option: SelectItemOption) => string
  children: React.ReactElement
}

type SelectContextProps = {
  inputValue: string
  onInputValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  options: SelectItemOption[]
  menuOpen: boolean
  onMenuOpenChange: (open: boolean) => void
  onMenuOpen: () => void
  onMenuClose: () => void
  isMulti?: boolean
  isSearchable?: boolean
  displayValue?: (option: SelectItemOption) => string
  returnValue?: (option: SelectItemOption) => string
}

export const SelectContext = createContext<SelectContextProps>({} as SelectContextProps)

export const SelectContextProvider = ({
  options: initialOptions,
  displayValue,
  isSearchable,
  isMulti,
  value,
  returnValue,
  children
}: SelectContextProviderProps) => {
  const defaultValue = initialOptions.find((option) => (returnValue ? returnValue(option) : option.value) === value)
  const initialValue = defaultValue ? (displayValue ? displayValue(defaultValue) : defaultValue.label) : ''

  const [inputValue, setInputValue] = useState<string>(initialValue)

  const [menuOpen, onMenuOpenChange] = useState<boolean>(true)
  const onMenuOpen = () => {
    onMenuOpenChange(true)
  }
  const onMenuClose = () => {
    onMenuOpenChange(false)
  }

  const onInputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isSearchable) {
        return
      }

      const { value } = event.target

      setInputValue(value)
    },
    [isSearchable]
  )

  const options = useMemo<SelectItemOption[]>(
    () =>
      initialOptions.filter((option) =>
        (displayValue ? displayValue(option) : option.label).toLowerCase().includes(inputValue.toLowerCase())
      ),
    [initialOptions, inputValue, displayValue]
  )

  const contextValue = useMemo<SelectContextProps>(
    () => ({
      inputValue,
      onInputValueChange,
      options,
      menuOpen,
      onMenuOpenChange,
      onMenuOpen,
      onMenuClose,
      isMulti,
      isSearchable,
      displayValue,
      returnValue
    }),
    [inputValue, onInputValueChange, options, menuOpen]
  )

  return <SelectContext.Provider value={contextValue}>{children}</SelectContext.Provider>
}
