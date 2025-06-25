import type { DropdownItemOption } from '../ui'
import { TypeGuards } from '$/shared/utils/typeGuards'

export const isOptionActive = (item: DropdownItemOption, value?: DropdownItemOption | DropdownItemOption[]) => {
  if (!value) return false

  if (TypeGuards.isArray(value)) {
    return value.some((selected) => item.value === selected.value)
  }

  return item.value === value.value
}

export const listNavigate = (current: number, direction: 1 | -1, totalCount: number) => {
  if (!totalCount) return -1

  const nextIndex = current + direction

  return (nextIndex + totalCount) % totalCount
}
