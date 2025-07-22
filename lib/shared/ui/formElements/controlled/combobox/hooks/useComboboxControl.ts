import { useCallback, useMemo } from 'react'
import { type ChangeHandler, type ComboboxItemOption, type ComboboxValue } from '$/shared/ui/formElements/uncontrolled/combobox'
import { TypeGuards } from '$/shared/utils'

type Value<Multi extends boolean> = Multi extends true ? string[] : string | null

interface UseComboboxControlProps<Multi extends boolean> {
  multiple?: Multi
  options: ComboboxItemOption[]
  returnValue?: (option: ComboboxItemOption) => string | null
  onChange: (...event: any[]) => void
  value: Value<Multi>
}

export const useComboboxControl = <Multi extends boolean>({
  options,
  multiple,
  onChange,
  returnValue,
  value
}: UseComboboxControlProps<Multi>) => {
  const optionsMap = useMemo(() => {
    const map = new Map<string | null, ComboboxItemOption>()

    for (const option of options) {
      const value = returnValue ? returnValue(option) : option.value
      map.set(value, option)
    }

    return map
  }, [options])

  const changeHandler = useCallback<ChangeHandler<Multi>>((selected) => {
    if (!selected) {
      return
    }

    if (multiple) {
      if (!TypeGuards.isArray(selected)) {
        return
      }

      const stringValues = selected.map((option) => (returnValue ? returnValue(option) : option.value))

      onChange(stringValues as string[])
    } else {
      const singleOption = selected as ComboboxItemOption
      const stringValue = returnValue ? returnValue(singleOption) : singleOption.value

      onChange(stringValue as string)
    }
  }, [])

  const selected = useMemo<ComboboxValue<Multi>>(() => {
    if (!value) {
      return (multiple ? [] : null) as ComboboxValue<Multi>
    }

    if (multiple) {
      if (!TypeGuards.isArray(value)) {
        return [] as unknown as ComboboxValue<Multi>
      }

      const selectedOptionsArray = value
        .map((stringValue: string) => optionsMap.get(stringValue))
        .filter((option): option is ComboboxItemOption => option !== undefined)

      return selectedOptionsArray as ComboboxValue<Multi>
    }

    const selectedOption = optionsMap.get(value as string)

    return (selectedOption ?? null) as ComboboxValue<Multi>
  }, [multiple, optionsMap, value])

  return {
    changeHandler,
    selected
  }
}
