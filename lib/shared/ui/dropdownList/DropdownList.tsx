import { useRef } from 'react'
import { useKeyboardNavigation } from './hooks'
import { isOptionActive } from './model'
import { DropdownItem, type DropdownItemOption } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { cn } from '$/shared/utils'

export interface DropdownListProps<Multi extends boolean> extends React.HTMLAttributes<HTMLUListElement> {
  options: DropdownItemOption[]
  /**
   * Значения выбранные по умолчанию
   */
  value?: Multi extends true ? DropdownItemOption[] : DropdownItemOption | null
  /**
   * Функция при выборе значения из списка
   * @param item
   */
  onPick?: (item: DropdownItemOption) => void
  /**
   * Поддержка множественного выбора
   */
  multiple?: Multi
  /**
   * Функция для управления отображаемым значением
   */
  displayValue?: (option: DropdownItemOption) => string
}

export const DropdownList = <Multi extends boolean>({
  options,
  multiple,
  onPick,
  value,
  className,
  displayValue,
  ...props
}: DropdownListProps<Multi>) => {
  const ref = useRef<HTMLUListElement>(null)

  const { refs, focusedIndex, setFocusedIndex } = useKeyboardNavigation<HTMLUListElement, HTMLLIElement>({
    options,
    multiple,
    onPick
  })

  useClickOutside(ref, () => setFocusedIndex(-1))

  return (
    <ul
      {...props}
      ref={refs.setRoot()}
      className={cn(
        'customScrollbar-y z-10 mt-1 max-h-[264px] w-full overflow-y-auto scroll-smooth rounded-md bg-color-white p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]',
        className
      )}
    >
      {options.map((option, index) => {
        const active = isOptionActive(option, value)

        return (
          <DropdownItem
            ref={refs.setReference}
            key={index}
            item={option}
            active={active}
            focused={focusedIndex === index}
            multiple={multiple}
            onPick={onPick}
            displayValue={displayValue}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(-1)}
          />
        )
      })}
    </ul>
  )
}
