import { useEffect, useMemo, useRef, useState } from 'react'
import { isOptionActive } from '../model'
import { type DropdownItemOption } from '../ui/dropdownItem'
import { scrollTo } from './model'

export type UseKeyboardNavigationProps<Multi extends boolean> = {
  options: DropdownItemOption[]
  multiple?: Multi
  onPick?: (option: DropdownItemOption) => void
  value?: Multi extends true ? DropdownItemOption[] : DropdownItemOption | null
}

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
      const scrollTop = scrollElement.offsetTop - container.offsetTop - 4

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
        switch (event.key) {
          case 'ArrowUp': {
            event.preventDefault()

            const nextIndex = scrollTo(-1, { options, focusedIndex, container, elements: itemRefs.current })
            setFocusedIndex(nextIndex)

            break
          }
          case 'ArrowDown': {
            event.preventDefault()

            const nextIndex = scrollTo(1, { options, focusedIndex, container, elements: itemRefs.current })
            setFocusedIndex(nextIndex)

            break
          }
          case 'Enter':
            event.preventDefault()

            if (focusedIndex < 0) return

            const selectedItem = options[focusedIndex]
            onPick?.(selectedItem)
            if (!multiple) setFocusedIndex(0)

            break
        }
      },
      { signal: abortController.signal }
    )

    return () => {
      abortController.abort()
    }
  }, [focusedIndex, options])

  return { refs, focusedIndex, setFocusedIndex }
}
