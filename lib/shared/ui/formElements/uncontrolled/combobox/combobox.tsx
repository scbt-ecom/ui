import { type ForwardedRef, forwardRef, useRef } from 'react'
import { autoUpdate, flip, offset, useFloating } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCombobox } from './hooks'
import type { ChangeHandler, ComboboxValue } from './model'
import type { ComboboxItemOption } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { type DeepPartial } from '$/shared/types'
import { Icon } from '$/shared/ui'
import { DropdownList, type DropdownListClasses, type DropdownListProps } from '$/shared/ui/dropdownList'
import { type IFieldAttachmentProps } from '$/shared/ui/formElements/ui'
import { InputBase, type InputBaseProps } from '$/shared/ui/formElements/uncontrolled/input'
import { cn, mergeRefs } from '$/shared/utils'

export type ComboboxClasses = {
  root?: string
  list?: { floating?: string } & DropdownListClasses
  input?: InputBaseProps['classes']
}

export type ExternalHandlers<Multi extends boolean> = {
  changeHandler?: ChangeHandler<Multi>
  clickHandler?: (event: React.MouseEvent<HTMLElement>) => void
  blurHandler?: (event: React.FocusEvent<HTMLElement>) => void
  focusHandler?: (event: React.FocusEvent<HTMLElement>) => void
  inputChangeHandler?: (value: string) => void
}

export interface ComboboxProps<Multi extends boolean> extends Omit<DropdownListProps<Multi>, 'options' | 'value' | 'onChange'> {
  /**
   * Список опций
   */
  options: ComboboxItemOption[]
  /**
   * Выбранное значение
   */
  value?: ComboboxValue<Multi>
  /**
   * Функция для изменения значения
   */
  onChange?: ChangeHandler<Multi>
  /**
   * Свойство управляющее поиском
   */
  searchable?: boolean
  /**
   * Открыть список по умолчанию
   */
  defaultOpen?: boolean
  /**
   * Свойства дополнительной иконки
   */
  attachmentProps?: DeepPartial<IFieldAttachmentProps>
  /**
   * Пометить поле как не валидное
   */
  invalid?: boolean
  /**
   * Функция для управления отображаемым значением
   */
  displayValue?: (option: ComboboxItemOption) => string
  /**
   * Отображаемый лейбл
   */
  label: string
  /**
   * Выключено поле
   */
  disabled?: boolean
  /**
   * Только для чтения
   */
  readOnly?: boolean
  /**
   * Дополнительные стили
   */
  classes?: ComboboxClasses
  /**
   * Дополнительные события
   */
  externalHandlers?: ExternalHandlers<Multi>
  /**
   * Функция для изменения значения поиска
   */
  onInputChange?: (value: string) => void
  /**
   * Значение инпута
   */
  inputValue?: string
  /**
   * Выключить фильтрацию списка
   */
  filterDisabled?: boolean
}

const InnerComponent = <Multi extends boolean>(
  {
    options: initialOptions,
    multiple,
    value,
    onChange,
    defaultOpen,
    attachmentProps,
    searchable,
    invalid,
    displayValue,
    label,
    disabled,
    readOnly,
    className,
    externalHandlers,
    inputValue,
    filterDisabled,
    onInputChange: externalInputChangeHandler,
    classes
  }: ComboboxProps<Multi>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const { floating, ...dropdownClasses } = classes?.list ?? {}

  const containerRef = useRef<HTMLDivElement>(null)

  const { refs, floatingStyles } = useFloating<HTMLInputElement>({
    placement: 'bottom-start',
    strategy: 'absolute',
    middleware: [
      flip({
        boundary: 'clippingAncestors',
        crossAxis: false
      }),
      offset(4)
    ],
    whileElementsMounted: autoUpdate
  })

  const { open, setOpen, state, changeHandler, options, search, onInputChange } = useCombobox({
    multiple,
    value,
    onChange,
    searchable,
    defaultOpen,
    displayValue,
    initialOptions,
    filterDisabled,
    externalHandlers,
    externalInputValue: inputValue,
    externalOnInputChange: externalInputChangeHandler
  })

  useClickOutside(containerRef, () => setOpen(false))

  return (
    <div ref={containerRef} className={cn('relative w-full', classes?.root, className)}>
      <InputBase
        ref={mergeRefs(ref, refs.setReference)}
        label={label}
        invalid={invalid}
        readOnly={readOnly || !searchable}
        value={search}
        onChange={onInputChange}
        disabled={disabled}
        onClick={(event) => {
          setOpen(true)
          externalHandlers?.clickHandler?.(event)
        }}
        onBlur={externalHandlers?.blurHandler}
        onFocus={externalHandlers?.focusHandler}
        classes={{
          input: cn({
            'cursor-pointer': !searchable,
            'cursor-default': disabled,
            'pointer-events-none': disabled || readOnly
          }),
          ...classes?.input
        }}
        autoComplete='off'
        attachmentProps={{
          icon: (
            <Icon
              name='arrows/arrowRight'
              className={cn('size-6 rotate-90 text-color-blue-grey-600 duration-100', {
                '-rotate-90': open
              })}
            />
          ),
          onClickIcon: () => setOpen((prev) => !prev),
          ...attachmentProps
        }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            ref={refs.setFloating}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className={cn('z-[1000]', floating)}
            style={{ ...floatingStyles, width: containerRef.current?.getBoundingClientRect().width }}
          >
            <DropdownList
              options={options}
              multiple={multiple}
              onPick={changeHandler}
              value={state}
              displayValue={displayValue}
              classes={dropdownClasses}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const Combobox = forwardRef(InnerComponent) as <Multi extends boolean>(
  props: ComboboxProps<Multi> & { ref?: ForwardedRef<HTMLInputElement> }
) => React.JSX.Element
