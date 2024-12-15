import { useRef } from 'react'
import { type ControlProps as ControlPrimitiveProps } from 'react-select'
import type { SelectBaseProps } from '../../Select'
import { useSelectController } from './hooks'
import { ChipList } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { Icon, InputBase, type InputBaseProps, type SelectItemOption } from '$/shared/ui'
import { cn } from '$/shared/utils'

type ControlBaseProps = ControlPrimitiveProps<SelectItemOption, boolean>

export type ControlClasses = {
  control?: string
  chip?: string
}

type ControlProps = ControlBaseProps &
  Pick<SelectBaseProps, 'isSearchable' | 'label' | 'returnValue' | 'displayValue' | 'invalid'> &
  Pick<InputBaseProps, 'attachmentProps'> & {
    /**
     * Дополнительные стили каждого внутреннего элемента
     */
    classes?: ControlClasses & InputBaseProps['classes']
  }

export const Control = ({
  isSearchable,
  label,
  attachmentProps,
  displayValue,
  isMulti,
  invalid,
  classes,
  ...props
}: ControlProps) => {
  const { selectProps } = props
  const { onMenuOpen, onMenuClose, menuIsOpen, inputValue, onInputChange, value, onChange } = selectProps

  const { onMenuOpenToggle, onInputValueChange, selectDisplayValue, onDeleteItem } = useSelectController({
    value,
    onValueChange: onChange,
    menuIsOpen,
    inputValue,
    onInputChange,
    displayValue,
    onMenuOpen,
    onMenuClose
  })

  const containerRef = useRef<HTMLInputElement>(null)

  useClickOutside(containerRef, () => onMenuClose && onMenuClose())

  /**
   * Функция для отображения значения в Input компонента
   *
   * При включенных режимах мульти + поиск в значение попадает merged строка всех выбранных значений (deprecated)
   * При включенном поиске в значение попадает только наш ввод + автозаменяется ввод на выбранный элемент из списка
   * При выключенных режимах мульти + поиск в значение попадает выбранный элемент из списка
   */
  const getDisplayValue = () => {
    if (isMulti && isSearchable) {
      return selectDisplayValue
    } else if (isSearchable) {
      return inputValue
    } else {
      return selectDisplayValue
    }
  }

  return (
    <InputBase
      ref={containerRef}
      classes={{
        ...classes,
        input: cn(classes?.input, {
          'cursor-pointer': !isSearchable
        })
      }}
      invalid={invalid}
      readOnly={!isSearchable}
      value={getDisplayValue()}
      /**
       * Управляем инпутом только если поиск включен
       *
       * При выключенном поиске управление происходит за счет выбора значения из списка
       */
      onChange={isSearchable ? onInputValueChange : undefined}
      /**
       * Свойство для рендера кастомных компонентов в Input
       *
       * При включенном режиме мульти рендерим компонент ChipList, где отображаем выбранные значения
       * Нужно явно передать undefined, так как при условии isMulti && ... будет возвращаться явный false
       */
      renderValues={
        isMulti
          ? () => (
              <ChipList
                values={value}
                inputValue={inputValue}
                onInputValueChange={onInputValueChange}
                onDeleteItem={onDeleteItem}
              />
            )
          : undefined
      }
      label={label}
      onClick={onMenuOpen}
      onBlur={onMenuClose}
      autoComplete='off'
      attachmentProps={{
        ...attachmentProps,
        icon: (
          <Icon
            name='arrows/arrowRight'
            className={cn('rotate-90 text-icon-blue-grey-600 duration-100', {
              '-rotate-90': menuIsOpen
            })}
          />
        ),
        onClickIcon: onMenuOpenToggle
      }}
    />
  )
}
