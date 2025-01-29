import type { SelectItemOption } from './types'
import { TypeGuards } from '$/shared/utils'

const isSelectOptions = (value: SelectItemOption | SelectItemOption[] | {}): value is SelectItemOption | SelectItemOption[] =>
  TypeGuards.isArray(value) ? 'value' in value[0] : 'value' in value

export const compareByValue = (
  current: NoInfer<SelectItemOption | SelectItemOption[]> | {},
  prev: NoInfer<SelectItemOption | SelectItemOption[]> | {}
): boolean => {
  if (TypeGuards.isNil(current) || TypeGuards.isNil(prev)) {
    return current === prev
  }

  if (!isSelectOptions(current) || !isSelectOptions(prev)) {
    return false
  }

  const currentArray = TypeGuards.isArray(current) ? current : [current]
  const prevArray = TypeGuards.isArray(prev) ? prev : [prev]

  if (prevArray.length !== prevArray.length) {
    return false
  }

  const valuesMap = new Set(currentArray.map((item) => item.value))

  return prevArray.every((item) => valuesMap.has(item.value)) && currentArray.every((item) => valuesMap.has(item.value))
}
