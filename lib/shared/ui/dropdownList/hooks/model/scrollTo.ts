import { listNavigate } from '../../model'
import type { DropdownItemOption } from '../../ui/dropdownItem'

const ELEMENT_OFFSET = 4

type ScrollToProps = {
  focusedIndex: number
  options: DropdownItemOption[]
  elements: HTMLElement[]
  container: HTMLElement
  behavior?: 'smooth' | 'instant'
}

export const scrollTo = (direction: 1 | -1, params: ScrollToProps) => {
  const { options, elements, container, focusedIndex, behavior: defaultBehavior } = params

  let currentIndex = listNavigate(focusedIndex, direction, options.length)

  while (options[currentIndex].disabled) {
    currentIndex = listNavigate(currentIndex, direction, options.length)
  }

  const scrollElement = elements[currentIndex]

  const containerTop = container.scrollTop
  const containerBottom = container.scrollTop + container.clientHeight

  if (scrollElement.offsetTop < containerTop || scrollElement.offsetTop > containerBottom) {
    const scrollTop = scrollElement.offsetTop - container.offsetTop - ELEMENT_OFFSET

    const behavior =
      (focusedIndex === 0 && currentIndex === options.length - 1) || (focusedIndex === options.length - 1 && currentIndex === 0)
        ? 'instant'
        : 'smooth'

    container.scrollTo({
      top: scrollTop,
      behavior: defaultBehavior || behavior
    })
  }

  return currentIndex
}
