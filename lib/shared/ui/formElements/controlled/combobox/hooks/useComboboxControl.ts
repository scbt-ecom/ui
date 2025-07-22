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
  }, [options, returnValue])

  const changeHandler = useCallback<ChangeHandler<Multi>>(
    (value) => {
      if (multiple || TypeGuards.isArray(value)) return
      if (!value) return

      onChange(returnValue ? returnValue(value) : value.value)
    },
    [multiple, onChange, returnValue]
  )

  const selected = useMemo<ComboboxValue<Multi>>(() => {
    if (multiple || TypeGuards.isArray(value)) return [] as unknown as ComboboxValue<Multi>
    if (!value) return null as ComboboxValue<Multi>

    return (optionsMap.get(value) ?? null) as ComboboxValue<Multi>
  }, [multiple, optionsMap, value])

  return {
    changeHandler,
    selected
  }
}
