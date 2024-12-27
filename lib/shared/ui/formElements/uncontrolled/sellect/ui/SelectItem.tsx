import { forwardRef, Fragment } from 'react'
import { useSelectController } from '../hooks'
import type { SelectItemOption } from './model'
import { Uncontrolled } from '$/shared/ui'
import { FieldAttachment } from '$/shared/ui/formElements/ui'
import { cn } from '$/shared/utils'

type SelectItemClasses = {
  item?: string
  helperText?: string
}

export type SelectItemProps = Omit<React.HTMLAttributes<HTMLLIElement>, 'className'> & {
  /**
   * Опция
   */
  option: SelectItemOption
  /**
   * Включение мульти выбора
   */
  isMulti?: boolean
  /**
   * Выбранное значение
   */
  selected: string | null
  /**
   * Дополнительные стили каждого внутреннего элемента
   */
  classes?: SelectItemClasses
}

export const SelectItem = forwardRef<HTMLLIElement, SelectItemProps>(({ option, selected, classes, ...props }, ref) => {
  const { isMulti, displayValue, returnValue } = useSelectController()

  const value = returnValue ? returnValue(option) : option.value
  const label = displayValue ? displayValue(option) : option.label

  const isSelected = value === selected

  const ContentWrapper = isMulti || option.attachment || option.helperText ? 'div' : Fragment

  return (
    <li
      {...props}
      ref={ref}
      className={cn(
        'unset-all-apply desk-body-regular-l flex h-12 cursor-pointer items-center rounded-sm bg-color-white px-2',
        'text-color-dark hover:bg-color-primary-tr-hover hover:text-color-primary-hover',
        '[&:not(:disabled)]:cursor-pointer [&:not(:last-child)]:mb-1 [&>p]:hover:text-color-secondary',
        {
          '!bg-color-primary-tr-hover !text-color-primary-hover': isSelected,
          'pointer-events-none !text-color-disabled': option.disabled,
          '!flex items-center gap-x-4': isMulti || (option.attachment && option.attachment.left)
        },
        classes?.item
      )}
    >
      {isMulti ? (
        <Uncontrolled.CheckboxBase checked={isSelected} disabled={option?.disabled} />
      ) : (
        option.attachment && option.attachment.left && <FieldAttachment {...option.attachment.left} />
      )}
      <ContentWrapper>
        {label}
        {option.helperText && (
          <p className={cn('desk-body-regular-s text-color-tetriary', classes?.helperText)}>{option.helperText}</p>
        )}
      </ContentWrapper>
    </li>
  )
})
SelectItem.displayName = 'SelectItem'
