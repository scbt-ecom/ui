/* eslint-disable no-console */

import { forwardRef, useRef } from 'react'
import { createPortal } from 'react-dom'
import { InputBase } from '../input'
import { useSelectController } from './hooks'
import { SelectContextProvider } from './model'
import { SelectItem, type SelectItemOption, type SelectItemProps } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { cn } from '$/shared/utils'

type SelectClasses = SelectItemProps['classes'] & {
  root?: string
}

export type SelectBaseProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Выбранное значение
   */
  value: string | null
  /**
   * Функция для изменения выбранного значения
   */
  onValueChange?: (value: string | null) => void
  /**
   * Отображаемый placeholder
   */
  label: string
  /**
   * Список опций
   */
  options: SelectItemOption[]
  /**
   * Включение мульти выбора
   */
  isMulti?: boolean
  /**
   * Включение поиска
   */
  isSearchable?: boolean
  /**
   * Отображение не валидного поля
   */
  invalid?: boolean
  /**
   * Функция для управления возвращаемым значением
   */
  returnValue?: (option: SelectItemOption) => string
  /**
   * Функция для управления отображаемым значением
   */
  displayValue?: (option: SelectItemOption) => string
  /**
   * Дополнительные стили каждого внутреннего элемента
   */
  classes?: SelectClasses
}

const InnerComponent = forwardRef<
  HTMLInputElement,
  Omit<SelectBaseProps, 'options' | 'invalid' | 'returnValue' | 'displayValue' | 'isMulti' | 'isSearchable'>
>(({ label, value, classes, ...props }, ref) => {
  const { root, ...restClasses } = classes || {}

  const containerRef = useRef<HTMLDivElement>(null)

  const { height, width, x, y } = containerRef.current?.getBoundingClientRect() || {
    bottom: 0,
    top: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }

  console.log(`height-${height}`)
  console.log(`width-${width}`)
  console.log(`x-${x}`)
  console.log(`y-${y}`)

  const { menuOpen, onMenuOpen, onMenuClose, isSearchable, options, inputValue, onInputValueChange } = useSelectController()

  useClickOutside(containerRef, onMenuClose)

  return (
    <div ref={containerRef} {...props} className={cn('relative w-full', root)}>
      <InputBase
        ref={ref}
        label={label}
        value={inputValue}
        onChange={onInputValueChange}
        onClick={onMenuOpen}
        onBlur={onMenuClose}
        readOnly={!isSearchable}
      />
      {menuOpen &&
        createPortal(
          <ul
            className={cn('absolute rounded-sm bg-color-white', 'p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]', {
              [`w-[${width}px] left-[${x}px] top-[${y}px]`]: containerRef.current
            })}
          >
            {options.map((option) => (
              <SelectItem key={option.value} option={option} classes={restClasses} selected={value} />
            ))}
          </ul>,
          document.body
        )}
    </div>
  )
})

export const SelectBase = forwardRef<HTMLInputElement, SelectBaseProps>(
  ({ options, displayValue, isSearchable, isMulti, value, returnValue, ...props }, ref) => {
    return (
      <SelectContextProvider
        value={value}
        options={options}
        isMulti={isMulti}
        returnValue={returnValue}
        displayValue={displayValue}
        isSearchable={isSearchable}
      >
        <InnerComponent {...props} ref={ref} value={value} />
      </SelectContextProvider>
    )
  }
)
SelectBase.displayName = 'SelectBase'
