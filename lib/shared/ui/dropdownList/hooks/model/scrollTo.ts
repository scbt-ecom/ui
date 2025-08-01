import { listNavigate } from '../../model'
import type { DropdownItemOption } from '../../ui/dropdownItem'

const ELEMENT_OFFSET = 4

type ScrollProps = {
  focusedIndex: number
  options: DropdownItemOption[]
  elements: HTMLElement[]
  container: HTMLElement
  behavior?: 'smooth' | 'instant'
}

const shouldInstantScroll = (focusedIndex: number, currentIndex: number, totalCount: number) => {
  return (focusedIndex === 0 && currentIndex === totalCount - 1) || (focusedIndex === totalCount - 1 && currentIndex === 0)
}

export const scrollTo = (direction: 1 | -1, params: ScrollProps) => {
  const { options, elements, container, focusedIndex, behavior: defaultBehavior } = params

  if (!options.length) return -1

  let currentIndex = listNavigate(focusedIndex, direction, options.length)

  // skip disabled elements
  let attempts = 0
  while (options[currentIndex].disabled && attempts < options.length) {
    currentIndex = listNavigate(currentIndex, direction, options.length)
    attempts += 1
  }

  // if all elements disabled
  if (attempts >= options.length) {
    return -1
  }

  const scrollElement = elements[currentIndex]

  const containerTop = container.scrollTop
  const containerBottom = container.scrollTop + container.clientHeight

  // if element out of container bounds
  if (scrollElement.offsetTop < containerTop || scrollElement.offsetTop > containerBottom) {
    const scrollTop = scrollElement.offsetTop - container.offsetTop - ELEMENT_OFFSET

    const behavior = shouldInstantScroll(focusedIndex, currentIndex, options.length) ? 'instant' : 'smooth'

    container.scrollTo({
      top: scrollTop,
      behavior: defaultBehavior || behavior
    })
  }

  return currentIndex
}
