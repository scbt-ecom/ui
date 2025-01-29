import type { SelectItemOption } from './types'
import { isSingleOption } from '$/shared/ui'
import { TypeGuards } from '$/shared/utils'

const isSelectOptions = (value: any): value is SelectItemOption | SelectItemOption[] => {
  let option = value satisfies SelectItemOption

  if (TypeGuards.isArray(value)) {
    option = value[0]
  }

  return Boolean(option['value'])
}

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

  if (isSingleOption(current) && isSingleOption(prev)) {
    return current.value === prev.value
  }

  const currentArray = TypeGuards.isArray(current) ? current : [current]
  const prevArray = TypeGuards.isArray(prev) ? prev : [prev]

  if (prevArray.length !== prevArray.length) {
    return false
  }

  const valuesMap = new Set(currentArray.map((item) => item.value))

  return prevArray.every((item) => valuesMap.has(item.value)) && currentArray.every((item) => valuesMap.has(item.value))
}
