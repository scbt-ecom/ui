import { useRef } from 'react'
import { autoUpdate, flip, offset, useFloating } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCombobox } from './hooks'
import type { ChangeHandler, ComboboxValue } from './model'
import type { ComboboxItemOption } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { type DeepPartial } from '$/shared/types'
import { Icon } from '$/shared/ui'
import { DropdownList, type DropdownListProps } from '$/shared/ui/dropdownList'
import { type IFieldAttachmentProps } from '$/shared/ui/formElements/ui'
import { InputBase } from '$/shared/ui/formElements/uncontrolled/input'
import { cn, mergeRefs } from '$/shared/utils'

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
}

export const Combobox = <Multi extends boolean>({
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
  className
}: ComboboxProps<Multi>) => {
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
    defaultOpen,
    searchable,
    displayValue,
    initialOptions
  })

  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'initial'
  }

  useClickOutside(containerRef, () => setOpen(false))

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <InputBase
        ref={mergeRefs(refs.setReference)}
        label={label}
        invalid={invalid}
        readOnly={!searchable}
        value={search}
        onChange={onInputChange}
        onClick={() => setOpen(true)}
        classes={{
          input: !searchable ? 'cursor-pointer' : undefined
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
            style={{ ...floatingStyles, width: containerRef.current?.getBoundingClientRect().width }}
          >
            <DropdownList
              options={options}
              multiple={multiple}
              onPick={changeHandler}
              value={state}
              displayValue={displayValue}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
