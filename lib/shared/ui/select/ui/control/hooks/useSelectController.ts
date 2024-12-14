import { useCallback, useMemo } from 'react'
import type { ActionMeta, InputActionMeta, OnChangeValue, PropsValue } from 'react-select'
import { type ControlActions } from '../Control'
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
  externalActions?: ControlActions
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
  onValueChange,
  externalActions
}: UseSelectControllerProps<Option>) => {
  const onInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    event.nativeEvent.preventDefault()

    onInputChange(event.target.value, {
      prevInputValue: inputValue,
      action: 'input-change'
    })

    if (externalActions?.onInputChange) {
      externalActions.onInputChange(event.target.value)
    }
  }

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
