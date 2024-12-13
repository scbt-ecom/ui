import { useCallback, useMemo } from 'react'
import type { ActionMeta, InputActionMeta, OnChangeValue, PropsValue } from 'react-select'
import { type SelectItemOption } from '$/shared/ui'

type InputChangeHandler = (value: string, action: InputActionMeta) => void

type UseSelectControllerProps<Option> = {
  inputValue: string
  onInputChange: InputChangeHandler
  onMenuOpen: () => void
  onMenuClose: () => void
  menuIsOpen: boolean
  displayValue?: (option: Option) => string
  value: PropsValue<Option>
  onValueChange: (value: OnChangeValue<Option, boolean>, action: ActionMeta<Option>) => void
}

function isSingleValue<Option extends SelectItemOption>(value: PropsValue<Option>): value is Option {
  return value !== null && !Array.isArray(value)
}

export const useSelectController = <Option extends SelectItemOption>({
  inputValue,
  onInputChange,
  menuIsOpen,
  onMenuClose,
  onMenuOpen,
  displayValue,
  value,
  onValueChange
}: UseSelectControllerProps<Option>) => {
  const onInputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onInputChange(event.target.value, {
        prevInputValue: inputValue,
        action: 'input-change'
      })
    },
    [inputValue]
  )

  const onMenuOpenToggle = useCallback(() => {
    if (menuIsOpen) {
      onMenuClose()
    } else {
      onMenuOpen()
    }
  }, [menuIsOpen])

  const selectDisplayValue = useMemo(() => {
    if (value) {
      if (Array.isArray(value)) {
        return value.map((item) => (displayValue ? displayValue(item) : item.label)).join(' | ')
      }
      if (isSingleValue(value)) {
        const updatedValue = displayValue ? displayValue(value) : value.label

        onInputChange(updatedValue, {
          prevInputValue: inputValue,
          action: 'set-value'
        })
        return updatedValue
      }
    } else {
      return ''
    }
  }, [displayValue, value])

  const onDeleteItem = useCallback(
    (option: Option) => {
      if (value && Array.isArray(value)) {
        const updatedValue = value.filter((item) => item.id !== option.id)

        onValueChange(updatedValue, {
          option,
          action: 'deselect-option'
        })
      }
    },
    [value]
  )

  return {
    onInputValueChange,
    onMenuOpenToggle,
    selectDisplayValue,
    onDeleteItem
  }
}
