import { forwardRef, Fragment } from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, type ComboboxProps } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useSelectController } from './hooks'
import type { SelectItemOption } from './model'
import { SelectItem, type SelectItemProps } from './ui'
import { Icon, Uncontrolled } from '$/shared/ui'
import { cn } from '$/shared/utils'

type SelectClasses = SelectItemProps['classes'] & {
  root?: string
  list?: string
}

export type SelectBaseProps<Multi extends boolean = false> = Omit<
  ComboboxProps<SelectItemOption, Multi, 'li'>,
  'multiple' | 'onChange'
> & {
  label: string
  isMulti: Multi
  isSearchable?: boolean
  options: SelectItemOption[]
  classes?: SelectClasses
  displayValue?: (option: SelectItemOption) => string
  onChange?: (value: SelectItemOption | SelectItemOption[] | null) => void
}

export const SelectBase = forwardRef<HTMLElement, SelectBaseProps>(
  ({ label, isMulti, isSearchable, options: initialOptions, classes, displayValue, onChange, ...props }, ref) => {
    const { root, list, ...innerClasses } = classes || {}

    const { options, inputValue, onValueChange, onInputValueChange } = useSelectController({
      options: initialOptions,
      isSearchable,
      isMulti,
      displayValue,
      onChange
    })

    const TriggerWrapper = !isSearchable ? ComboboxButton : Fragment

    return (
      <Combobox ref={ref} {...props} onChange={onValueChange} multiple={isMulti} as={Fragment}>
        {({ disabled, open }) => (
          <div className={cn('relative w-full', root)}>
            <TriggerWrapper as={Fragment}>
              <ComboboxInput
                as={Uncontrolled.InputBase}
                label={label}
                disabled={disabled}
                readOnly={!isSearchable}
                value={inputValue}
                displayValue={displayValue}
                autoComplete='off'
                onChange={onInputValueChange}
                className={!isSearchable ? 'cursor-pointer' : undefined}
                // renderValues={
                //   isMulti
                //     ? () => (
                //         <ChipList
                //           onDeleteItem={() => {}}
                //           values={value}
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
                  )
                }}
              />
            </TriggerWrapper>
            <ComboboxOptions
              as={motion.ul}
              className={cn(
                'customScrollbar-y absolute left-0 top-full mt-1',
                'max-h-[264px] w-full overflow-y-auto bg-color-white',
                'rounded-md p-1 shadow-[0_8px_20px_0px_rgba(41,41,41,0.08)]',
                list
              )}
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
            >
              {options.length ? (
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
              ) : (
                <p className='py-4 text-center align-middle'>Ничего не найдено</p>
              )}
            </ComboboxOptions>
          </div>
        )}
      </Combobox>
    )
  }
)
