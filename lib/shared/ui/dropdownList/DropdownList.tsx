import { useEffect, useRef, useState } from 'react'
import { isOptionActive, listNavigate } from './model'
import { DropdownItem, type DropdownItemOption } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { cn } from '$/shared/utils'

export interface DropdownListProps<Multi extends boolean> extends React.HTMLAttributes<HTMLUListElement> {
  options: DropdownItemOption[]
  value?: Multi extends true ? DropdownItemOption[] : DropdownItemOption
  onPick?: (item: DropdownItemOption) => void
  multiple?: Multi
}

export const DropdownList = <Multi extends boolean>({
  options,
  multiple,
  onPick,
  value,
  className,
  ...props
}: DropdownListProps<Multi>) => {
  const ref = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<HTMLLIElement[]>([])

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  useClickOutside(ref, () => setFocusedIndex(-1))

  useEffect(() => {
    if (!ref.current) return

    const abortController = new AbortController()
    const container = ref.current

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

        if (scrollElement) {
          const scrollTop = scrollElement.offsetTop - container.offsetTop - 4

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

  return (
    <ul
      {...props}
      ref={ref}
      className={cn(
        'customScrollbar-y z-10 mt-1 max-h-[264px] w-full overflow-y-auto scroll-smooth rounded-md bg-color-white p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]',
        className
      )}
    >
      {options.map((option, index) => {
        const active = isOptionActive(option, value)

        return (
          <DropdownItem
            ref={(node) => {
              if (!node) return

              itemRefs.current.push(node)
            }}
            key={index}
            item={option}
            active={active}
            focused={focusedIndex === index}
            multiple={multiple}
            onPick={onPick}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(-1)}
          />
        )
      })}
    </ul>
  )
}
