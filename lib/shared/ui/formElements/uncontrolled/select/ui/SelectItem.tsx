import { forwardRef, Fragment } from 'react'
import { ComboboxOption, type ComboboxOptionProps } from '@headlessui/react'
import { motion } from 'framer-motion'
import { type CheckboxBaseClasses } from '../../checkbox/Checkbox'
import type { SelectItemOption } from '../model'
import { Uncontrolled } from '$/shared/ui'
import { FieldAttachment } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type SelectItemClasses = {
  item?: string
  helperText?: string
  checkbox?: CheckboxBaseClasses
}

export type SelectItemProps = Omit<ComboboxOptionProps, 'className' | 'value'> & {
  option: SelectItemOption
  isMulti?: boolean
  classes?: SelectItemClasses
  displayValue?: (option: SelectItemOption) => string
  motionProps?: React.ComponentPropsWithoutRef<typeof motion.li>
}

export const SelectItem = forwardRef<HTMLLIElement, SelectItemProps>(
  ({ option, classes, displayValue, isMulti, motionProps, ...props }, ref) => {
    const label = displayValue ? displayValue(option) : option.label

    const { item, helperText, checkbox } = classes || {}

    const ContentWrapper = isMulti || option.attachment || option.helperText ? 'div' : Fragment

    return (
      <ComboboxOption {...props} as={Fragment} disabled={option.disabled} value={option}>
        {({ disabled, selected }) => (
          <motion.li
            {...motionProps}
            ref={ref}
            className={cn(
              'unset-all-apply desk-body-regular-l cursor-pointer truncate rounded-sm bg-color-white px-2',
              'flex h-12 items-center gap-x-4 text-color-dark hover:bg-color-primary-tr-hover hover:text-color-primary-hover',
              '[&:not(:disabled)]:cursor-pointer [&:not(:last-child)]:mb-1 [&>p]:hover:text-color-secondary',
              'data-[selected]:bg-color-primary-tr-hover data-[selected]:text-color-primary-hover',
              'data-[focus]:bg-color-primary-tr-hover data-[focus]:text-color-primary-hover',
              {
                'pointer-events-none !text-color-disabled': disabled,
                '!flex items-center gap-x-4': isMulti || (option.attachment && option.attachment.left)
              },
              item
            )}
          >
            {isMulti ? (
              <Uncontrolled.CheckboxBase checked={selected} disabled={disabled} classes={{ root: 'z-10', ...checkbox }} />
            ) : (
              option.attachment && option.attachment.left && <FieldAttachment {...option.attachment.left} />
            )}
            <ContentWrapper>
              {label}
              {option.helperText && (
                <p
                  className={cn(
                    'desk-body-regular-s text-color-tetriary',
                    {
                      'text-color-disabled': disabled
                    },
                    helperText
                  )}
                >
                  {option.helperText}
                </p>
              )}
            </ContentWrapper>
          </motion.li>
        )}
      </ComboboxOption>
    )
  }
)
