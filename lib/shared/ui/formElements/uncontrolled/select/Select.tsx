/* eslint-disable no-console */
import { forwardRef } from 'react'
import SelectPrimitive, { type Props } from 'react-select'
import {
  Control,
  type ControlClasses,
  SelectItem,
  type SelectItemClasses,
  type SelectItemOption,
  SelectList,
  type SelectListClasses
} from './ui'
import { type InputBaseProps } from '$/shared/ui'
import { cn } from '$/shared/utils'

type SelectClasses = {
  container?: string
  control?: ControlClasses
  option?: SelectItemClasses
  list?: SelectListClasses
}

export type SelectBaseProps<IsMulti extends boolean = boolean> = Omit<
  Props<SelectItemOption, IsMulti>,
  'placeholder' | 'options' | 'defaultValue' | 'isSearchable'
> &
  Pick<InputBaseProps, 'attachmentProps' | 'label' | 'invalid'> & {
    /**
     * Свойство управляющее поиском
     */
    isSearchable?: boolean
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
    /**
     * Список отображаемых значений
     */
    options: SelectItemOption[]
    /**
     * Свойство для выключения фильтрации элементов по поиску
     */
    filterOptionDisabled?: boolean
  }
type SelectRef = React.ElementRef<typeof SelectPrimitive<SelectItemOption, boolean>>

export const SelectBase = forwardRef<SelectRef, SelectBaseProps>(
  (
    {
      isSearchable,
      isMulti,
      label,
      attachmentProps,
      hideSelectedOptions = false,
      returnValue,
      displayValue,
      onMenuClose,
      classes,
      className,
      invalid,
      filterOptionDisabled,
      value,
      ...props
    },
    ref
  ) => {
    /**
     * Переменная для управления фильтрацией элементов по вводимым в поиск символам
     *
     * при значении `null` фильтрация будет выключена, при `undefined` логика фильтрации включается библиотекой `react-select`
     *
     * Автоматическая фильтрация выключается:
     * - принутдительно параметром `filterOptionDisabled`
     * - при базовых настройках компонента (выключенный поиск + сингл режим)
     *
     * Фильтрация будет работать если:
     * - включен режим поиска
     * - включен режим мульти
     */
    const isFilterDisabled = filterOptionDisabled || (!isSearchable && !isMulti) ? null : undefined

    console.log('SelectBase value: ', value)

    return (
      <SelectPrimitive
        ref={ref}
        {...props}
        closeMenuOnSelect={!isMulti}
        isMulti={isMulti}
        filterOption={isFilterDisabled}
        onMenuClose={onMenuClose}
        className={cn('w-full', classes?.container, className)}
        hideSelectedOptions={hideSelectedOptions}
        getOptionLabel={displayValue ? (option) => displayValue(option) : undefined}
        getOptionValue={returnValue ? (option) => returnValue(option) : undefined}
        components={{
          Control: (props) => (
            <Control
              {...props}
              invalid={invalid}
              displayValue={displayValue}
              isSearchable={isSearchable}
              label={label}
              attachmentProps={attachmentProps}
              classes={classes?.control}
            />
          ),
          Option: (props) => <SelectItem {...props} classes={classes?.option} />,
          MenuList: (props) => <SelectList {...props} classes={classes?.list} />
        }}
      />
    )
  }
)
SelectBase.displayName = 'SelectBase'
