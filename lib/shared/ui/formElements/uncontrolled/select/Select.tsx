import { forwardRef } from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, type ComboboxProps } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useSelectController } from './hooks'
import { compareByValue, type SelectItemOption } from './model'
import { SelectItem, type SelectItemProps } from './ui'
import { type DeepPartial } from '$/shared/types'
import { Icon, Slot, Uncontrolled } from '$/shared/ui'
import type { FieldAttachment } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

export type SelectClasses = SelectItemProps['classes'] & {
  root?: string
  list?: string
}

export type ExternalHandlers = {
  onChange?: (value?: SelectItemOption | SelectItemOption[]) => void
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onInputChange?: (value: string) => void
}

export type SelectBaseProps<Multi extends boolean> = Omit<
  ComboboxProps<SelectItemOption, Multi, 'li'>,
  'multiple' | 'onChange' | 'by' | 'className' | 'virtual'
> & {
  /**
   * Отображаемый лейбл
   */
  label: string
  /**
   * Поддержка множественного выбора
   */
  isMulti?: Multi
  /**
   * Пометить поле как не валидное
   */
  invalid?: boolean
  /**
   * Свойство управляющее поиском
   */
  isSearchable?: boolean
  /**
   * Список отображаемых значений
   */
  options: SelectItemOption[]
  /**
   * Дополнительные стили каждого внутреннего элемента
   */
  classes?: SelectClasses
  /**
   * Функция для управления отображаемым значением
   */
  displayValue?: (option: SelectItemOption) => string
  /**
   * Функция для изменения значения
   */
  onChange?: (value: (Multi extends true ? SelectItemOption[] : SelectItemOption) | undefined) => void
  /**
   * Функция для изменения значения поиска
   */
  onInputChange?: (value: string) => void
  /**
   * Значение инпута
   */
  inputValue?: string
  /**
   * Свойства дополнительной иконки
   */
  attachmentProps?: DeepPartial<FieldAttachmentProps>
  /**
   * Включение виртуализации списка
   */
  virtual?: boolean
  /**
   * Свойство для выключения фильтрации по поиску
   */
  filterDisabled?: boolean
  /**
   * Внешние handlers которые можно прокинуть из вне
   */
  externalHandlers?: ExternalHandlers
}

export const SelectBase = forwardRef<HTMLInputElement, SelectBaseProps<boolean>>(
  (
    {
      label,
      invalid,
      isMulti = false,
      isSearchable,
      options: initialOptions,
      classes,
      displayValue,
      value,
      onChange,
      attachmentProps,
      virtual = false,
      filterDisabled = false,
      inputValue: externalInputValue,
      onInputChange: externalOnInputChange,
      externalHandlers,
      immediate,
      disabled,
      ...props
    },
    ref
  ) => {
    const { root, list, ...innerClasses } = classes || {}

    const { options, inputValue, onValueChange, onInputValueChange, selectDisplayValue } = useSelectController({
      options: initialOptions,
      isSearchable,
      isMulti,
      displayValue,
      onChange,
      filterDisabled,
      externalInputValue,
      externalOnInputChange,
      externalHandlers
    })

    const TriggerButton = isSearchable ? Slot : ComboboxButton

    return (
      <Combobox
        {...props}
        virtual={
          virtual
            ? {
                options
              }
            : undefined
        }
        by={compareByValue}
        onBlur={externalHandlers?.onBlur}
        onFocus={externalHandlers?.onFocus}
        onClick={externalHandlers?.onClick}
        value={(value ? value : isMulti ? [] : '') as typeof value}
        onChange={onValueChange}
        multiple={isMulti}
        disabled={disabled}
        immediate={immediate || !isSearchable}
      >
        {({ disabled, open, value }) => {
          const getDisplayValue = () => {
            if (isMulti && isSearchable) {
              return selectDisplayValue(value)
            } else if (isSearchable) {
              return inputValue
            } else {
              return selectDisplayValue(value)
            }
          }

          return (
            <div className={cn('relative w-full', root)}>
              <TriggerButton className='w-full' disabled={disabled}>
                <ComboboxInput
                  ref={ref}
                  as={Uncontrolled.InputBase}
                  label={label}
                  disabled={disabled}
                  readOnly={!isSearchable}
                  value={externalInputValue || getDisplayValue() || ''}
                  autoComplete='off'
                  onChange={(event) => {
                    const { value } = event.target

                    if (isSearchable) {
                      if (externalOnInputChange) externalOnInputChange(value)
                      if (externalHandlers?.onInputChange) externalHandlers.onInputChange(value)
                      if (onInputValueChange) onInputValueChange(event)
                    }
                  }}
                  invalid={invalid}
                  classes={{
                    input: isMulti || !isSearchable ? 'cursor-pointer' : undefined
                  }}
                  // TODO: think about it
                  // renderValues={
                  //   isMulti
                  //     ? () => (
                  //         <ChipList
                  //           values={value}
                  //           onDeleteItem={(option) => onDeleteItem(value, option)}
                  //           inputValue={inputValue}
                  //           onInputValueChange={onInputValueChange}
                  //         />
                  //       )
                  //     : undefined
                  // }
                  attachmentProps={{
                    icon: (
                      <ComboboxButton as='span'>
                        <Icon
                          name='arrows/arrowRight'
                          className={cn('size-6 rotate-90 text-color-blue-grey-600 duration-100', {
                            '-rotate-90': open
                          })}
                        />
                      </ComboboxButton>
                    ),
                    ...attachmentProps
                  }}
                />
              </TriggerButton>
              <ComboboxOptions
                as={motion.ul}
                className={cn(
                  'customScrollbar-y absolute left-0 top-full z-10 mt-1',
                  'max-h-[264px] w-full overflow-y-auto bg-color-white',
                  'rounded-md p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]',
                  list
                )}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 10 }}
              >
                {virtual ? (
                  ({ option }) => (
                    <SelectItem
                      key={option.value}
                      option={option}
                      isMulti={isMulti}
                      classes={{
                        item: 'w-[calc(100%-16px)]',
                        ...innerClasses
                      }}
                      displayValue={displayValue}
                      motionProps={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1 }
                      }}
                    />
                  )
                ) : options.length > 0 ? (
                  options.map((option, index) => (
                    <SelectItem
                      data-test-id={`select-item-${index}`}
                      key={option.value}
                      option={option}
                      isMulti={isMulti}
                      classes={innerClasses}
                      displayValue={displayValue}
                      motionProps={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: index / 25 }
                      }}
                    />
                  ))
                ) : (
                  <p className='py-4 text-center align-middle'>Ничего не найдено</p>
                )}
              </ComboboxOptions>
            </div>
          )
        }}
      </Combobox>
    )
  }
)
