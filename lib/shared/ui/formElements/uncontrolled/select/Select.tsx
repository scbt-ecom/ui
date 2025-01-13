import { forwardRef, Fragment, useEffect, useRef } from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, type ComboboxProps } from '@headlessui/react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { motion } from 'framer-motion'
import { useSelectController } from './hooks'
import type { SelectItemOption } from './model'
import { SelectItem, type SelectItemProps } from './ui'
import { type DeepPartial } from '$/shared/types'
import { Icon, Uncontrolled } from '$/shared/ui'
import type { FieldAttachment } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type FieldAttachmentProps = React.ComponentPropsWithoutRef<typeof FieldAttachment>

type SelectClasses = SelectItemProps['classes'] & {
  root?: string
  list?: string
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
  isMulti: Multi
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
  onChange?: (value: SelectItemOption | SelectItemOption[] | null) => void
  /**
   * Свойства дополнительной иконки
   */
  attachmentProps?: DeepPartial<FieldAttachmentProps>
  /**
   * Включение виртуализации списка
   */
  virtual?: boolean
}

export const SelectBase = forwardRef<HTMLElement, SelectBaseProps<boolean>>(
  (
    {
      label,
      invalid,
      isMulti,
      isSearchable,
      options: initialOptions,
      classes,
      displayValue,
      onChange,
      attachmentProps,
      virtual = false,
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
      onChange
    })

    const parentScrollRef = useRef<HTMLDivElement>(null)

    const virtualizer = useVirtualizer({
      count: options.length,
      getScrollElement: () => parentScrollRef.current,
      estimateSize: () => 48,
      gap: 4,
      overscan: 5
    })

    useEffect(() => {
      virtualizer.measure()
    }, [options, virtualizer])

    const TriggerWrapper = !isSearchable ? ComboboxButton : Fragment

    return (
      <Combobox ref={ref} {...props} onChange={onValueChange} multiple={isMulti} as={Fragment}>
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
              <TriggerWrapper as={Fragment}>
                <ComboboxInput
                  as={Uncontrolled.InputBase}
                  label={label}
                  disabled={disabled}
                  readOnly={!isSearchable}
                  value={getDisplayValue()}
                  autoComplete='off'
                  onChange={isSearchable ? onInputValueChange : undefined}
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
                      <ComboboxButton>
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
              </TriggerWrapper>
              <motion.div
                ref={parentScrollRef}
                className={cn(
                  'customScrollbar-y absolute left-0 top-full z-10 mt-1',
                  'max-h-[264px] w-full overflow-y-auto bg-color-white',
                  'rounded-md p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]'
                )}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 10 }}
              >
                <ComboboxOptions
                  as={motion.ul}
                  className={cn(
                    // 'customScrollbar-y absolute left-0 top-full z-10 mt-1',
                    // 'max-h-[264px] w-full overflow-y-auto bg-color-white',
                    // 'rounded-md p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]',
                    list
                  )}
                  style={{
                    width: '100%',
                    height: `${virtualizer.getTotalSize()}px`,
                    position: 'relative'
                  }}
                >
                  {options.length ? (
                    virtual ? (
                      virtualizer.getVirtualItems().map((row) => {
                        const option = options[row.index]

                        return (
                          <SelectItem
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              height: `${row.size}px`,
                              width: '100%',
                              transform: `translateY(${row.start}px)`
                            }}
                            key={option.value}
                            option={option}
                            isMulti={isMulti}
                            classes={innerClasses}
                            displayValue={displayValue}
                            motionProps={{
                              transition: { delay: row.index / 25 }
                            }}
                          />
                        )
                      })
                    ) : (
                      options.map((option, index) => (
                        <SelectItem
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
                    )
                  ) : (
                    <p className='py-4 text-center align-middle'>Ничего не найдено</p>
                  )}
                </ComboboxOptions>
              </motion.div>
            </div>
          )
        }}
      </Combobox>
    )
  }
)
