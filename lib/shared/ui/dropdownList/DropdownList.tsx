import { useRef } from 'react'
import { useKeyboardNavigation } from './hooks'
import { isOptionActive } from './model'
import { DropdownItem, type DropdownItemClasses, type DropdownItemOption, EmptyList } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { cn } from '$/shared/utils'

export type DropdownListClasses = {
  root?: string
  item?: DropdownItemClasses
}

export interface DropdownListProps<Multi extends boolean = false> extends React.HTMLAttributes<HTMLUListElement> {
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
  /**
   * Дополнительные стили
   */
  classes?: DropdownListClasses
  /**
   * Целевая нода, с которой будет взаимодействовать список
   */
  target?: React.RefObject<HTMLInputElement>
  /**
   * Отображаемое содержимое при пустом списке
   */
  empty?: (query: string) => React.ReactNode
}

export const DropdownList = <Multi extends boolean>({
  options,
  multiple,
  onPick,
  value,
  className,
  displayValue,
  classes,
  target,
  empty = () => 'Список пуст',
  ...props
}: DropdownListProps<Multi>) => {
  const ref = useRef<HTMLUListElement>(null)

  const { refs, focusedIndex, setFocusedIndex } = useKeyboardNavigation<HTMLUListElement, HTMLLIElement, Multi>({
    options,
    multiple,
    onPick,
    value
  })

  const elementPickHandler = (item: DropdownItemOption) => {
    onPick?.(item)

    if (target && target.current) {
      target.current.focus()
    }
  }

  useClickOutside(ref, () => setFocusedIndex(-1))

  return (
    <ul
      {...props}
      ref={refs.setRoot()}
      className={cn(
        'customScrollbar-y mt-1 max-h-[264px] w-full overflow-y-auto scroll-smooth rounded-md bg-color-white p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]',
        classes?.root,
        className
      )}
    >
      {options.length > 0 ? (
        options.map((option, index) => {
          const active = isOptionActive(option, value)

          return (
            <DropdownItem
              ref={refs.setReference}
              key={index}
              item={option}
              active={active}
              focused={focusedIndex === index}
              multiple={multiple}
              onPick={elementPickHandler}
              displayValue={displayValue}
              onMouseEnter={() => setFocusedIndex(index)}
              onMouseLeave={() => setFocusedIndex(-1)}
              classes={classes?.item}
            />
          )
        })
      ) : (
        <EmptyList>{empty(target?.current?.value || '')}</EmptyList>
      )}
    </ul>
  )
}
