import { forwardRef, useRef } from 'react'
import { autoUpdate, flip, offset, useFloating } from '@floating-ui/react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, type ComboboxProps } from '@headlessui/react'
import { useSelectController } from './hooks'
import { type SelectItemOption } from './model'
import { SelectItem, type SelectItemProps } from './ui'
import { type DeepPartial } from '$/shared/types'
import { Icon, InputBase } from '$/shared/ui'
import type { FieldAttachment } from '$/shared/ui/formElements/ui'
import { cn, mergeRefs } from '$/shared/utils'

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
  /**
   * Кастомизация отображения текста при пустом списке
   */
  emptyList?: (query?: string) => React.ReactNode
  /**
   * Добавляет option который, позволяет очистить значение селекта
   */
  reset?: string
}

const LIST_OFFSET = 4

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
      disabled,
      emptyList,
      reset,
      ...props
    },
    ref
  ) => {
    const { root, list, ...innerClasses } = classes || {}

    const { refs, floatingStyles } = useFloating({
      placement: 'bottom-start',
      strategy: 'absolute',
      middleware: [
        flip({
          boundary: 'clippingAncestors',
          crossAxis: false
        }),
        offset(LIST_OFFSET)
      ],
      whileElementsMounted: autoUpdate
    })

    const triggerRef = useRef<HTMLDivElement>(null)

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
        // @ts-expect-error headless ui issue
        by='value'
        onBlur={externalHandlers?.onBlur}
        onFocus={externalHandlers?.onFocus}
        onClick={externalHandlers?.onClick}
        value={(value ? value : isMulti ? [] : '') as typeof value}
        onChange={onValueChange}
        multiple={isMulti}
        // immediate
        disabled={disabled}
        aria-invalid={invalid}
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
            <div ref={triggerRef} className={cn('relative w-full', root)}>
              <ComboboxButton className='w-full'>
                <ComboboxInput
                  // @ts-expect-error asdf
                  ref={mergeRefs(ref, refs.setReference)}
                  data-test-id='select-input'
                  as={InputBase}
                  label={label}
                  aria-haspopup='listbox'
                  ariaAutocomplete='inline'
                  aria-expanded={open}
                  disabled={disabled}
                  readOnly={!isSearchable}
                  value={externalInputValue || getDisplayValue()}
                  autoComplete='off'
                  onKeyDown={(event) => {
                    event.stopPropagation()
                    event.nativeEvent.stopPropagation()
                  }}
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
                  //     ? (ref) => (
                  //         <ChipList
                  //           ref={ref}
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
              </ComboboxButton>
              <ComboboxOptions
                portal
                data-test-id='select-list'
                ref={refs.setFloating}
                as='ul'
                style={{
                  ...floatingStyles,
                  width: triggerRef.current?.getBoundingClientRect().width
                }}
                className={cn(
                  'customScrollbar-y z-10 mt-1',
                  'max-h-[264px] w-full overflow-y-auto bg-color-white',
                  'rounded-md p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]',
                  list
                )}
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
                  <>
                    {reset && !isMulti && (
                      <SelectItem
                        data-test-id='select-item-empty'
                        option={{ value: null, label: reset }}
                        isMulti={isMulti}
                        classes={innerClasses}
                        displayValue={displayValue}
                        motionProps={{
                          initial: { opacity: 0 },
                          animate: { opacity: 1 }
                        }}
                      />
                    )}
                    {options.map((option, index) => (
                      <SelectItem
                        data-test-id={`select-item-${index}`}
                        key={option.value}
                        option={option}
                        isMulti={isMulti}
                        classes={innerClasses}
                        displayValue={displayValue}
                        motionProps={{
                          initial: { opacity: 0 },
                          animate: { opacity: 1 }
                        }}
                      />
                    ))}
                  </>
                ) : emptyList ? (
                  emptyList(externalInputValue || inputValue)
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
