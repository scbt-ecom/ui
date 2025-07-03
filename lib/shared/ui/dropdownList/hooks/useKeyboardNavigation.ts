import { useEffect, useMemo, useRef, useState } from 'react'
import { listNavigate } from '../model'
import { type DropdownItemOption } from '../ui/dropdownItem'

export type UseKeyboardNavigationProps = {
  options: DropdownItemOption[]
  multiple?: boolean
  onPick?: (option: DropdownItemOption) => void
}

const ELEMENT_OFFSET = 4

export const useKeyboardNavigation = <Container extends HTMLElement, Element extends HTMLElement>({
  options,
  multiple,
  onPick
}: UseKeyboardNavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

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

  useEffect(() => {
    if (!containerRef.current) return

    const abortController = new AbortController()
    const container = containerRef.current

    window.addEventListener(
      'keydown',
      ({ key }) => {
        let direction: 1 | -1 = -1

        switch (key) {
          case 'ArrowUp':
            direction = -1
            break
          case 'ArrowDown':
            direction = 1
            break
          case ' ':
            if (focusedIndex < 0) return

            const selectedItem = options[focusedIndex]
            onPick?.(selectedItem)
            if (!multiple) setFocusedIndex(-1)

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

          container.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
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
