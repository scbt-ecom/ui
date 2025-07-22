import { useEffect, useMemo, useRef, useState } from 'react'
import { isOptionActive, listNavigate } from '../model'
import { type DropdownItemOption } from '../ui/dropdownItem'

export type UseKeyboardNavigationProps<Multi extends boolean> = {
  options: DropdownItemOption[]
  multiple?: Multi
  onPick?: (option: DropdownItemOption) => void
  value?: Multi extends true ? DropdownItemOption[] : DropdownItemOption | null
}

const ELEMENT_OFFSET = 4

export const useKeyboardNavigation = <Container extends HTMLElement, Element extends HTMLElement, Multi extends boolean = false>({
  options,
  multiple,
  onPick,
  value
}: UseKeyboardNavigationProps<Multi>) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0)

  const containerRef = useRef<Container>(null)
  const itemRefs = useRef<Element[]>([])

  const refs = useMemo(
    () => ({
      setReference: (node: Element | null) => {
        if (node) itemRefs.current.push(node)
      },
      setRoot: () => containerRef
    }),
    []
  )

  // find and scroll to active element if exists
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let activeIndex = -1

    for (let i = 0; i < options.length; i += 1) {
      if (isOptionActive(options[i], value)) {
        setFocusedIndex(i)
        activeIndex = i
        break
      }
    }

    const scrollElement = itemRefs.current[activeIndex]

    if (scrollElement) {
      const scrollTop = scrollElement.offsetTop - container.offsetTop - ELEMENT_OFFSET

      container.scrollTo({
        top: scrollTop,
        behavior: 'instant'
      })
    }
  }, [options])

  useEffect(() => {
    if (!containerRef.current) return

    const abortController = new AbortController()
    const container = containerRef.current

    window.addEventListener(
      'keydown',
      (event) => {
        let direction: 1 | -1 = -1

        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault()

            direction = -1
            break
          case 'ArrowDown':
            event.preventDefault()

            direction = 1
            break
          case ' ':
          case 'Enter':
            event.preventDefault()

            if (focusedIndex < 0) return

            const selectedItem = options[focusedIndex]
            onPick?.(selectedItem)
            if (!multiple) setFocusedIndex(0)

            return
          default:
            return
        }

        let currentIndex = listNavigate(focusedIndex, direction, options.length)

        while (options[currentIndex].disabled) {
          currentIndex = listNavigate(currentIndex, direction, options.length)
        }

        const scrollElement = itemRefs.current[currentIndex]

        const containerTop = container.scrollTop
        const containerBottom = container.scrollTop + container.clientHeight

        if (scrollElement.offsetTop < containerTop || scrollElement.offsetTop > containerBottom) {
          const scrollTop = scrollElement.offsetTop - container.offsetTop - ELEMENT_OFFSET

          const behavior =
            (focusedIndex === 0 && currentIndex === options.length - 1) ||
            (focusedIndex === options.length - 1 && currentIndex === 0)
              ? 'instant'
              : 'smooth'

          container.scrollTo({
            top: scrollTop,
            behavior
          })
        }

        setFocusedIndex(currentIndex)
      },
      { signal: abortController.signal }
    )

    return () => {
      abortController.abort()
    }
  }, [focusedIndex, options])

  return { refs, focusedIndex, setFocusedIndex }
}
