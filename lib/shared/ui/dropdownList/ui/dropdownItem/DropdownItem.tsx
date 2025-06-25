import { Fragment } from 'react'
import type { DropdownItemOption } from './model'
import { CheckboxBase } from '$/shared/ui/formElements/uncontrolled/checkbox'
import { cn } from '$/shared/utils'

export interface DropdownItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'children'> {
  item: DropdownItemOption
  onPick?: (value: DropdownItemOption, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  multiple?: boolean
  active?: boolean
  focused?: boolean
  disabled?: boolean
}

export const DropdownItem = ({
  item,
  className,
  onPick,
  multiple = false,
  active = false,
  focused = false,
  ...props
}: DropdownItemProps) => {
  const { label, helperText, disabled, attachment } = item
  const ContentWrapper = multiple || attachment || helperText ? 'div' : Fragment

  return (
    <li
      {...props}
      role='listitem'
      onClick={(event) => onPick?.(item, event)}
      data-focused={focused}
      data-active={active}
      className={cn(
        'desk-body-regular-l w-full cursor-pointer list-none truncate rounded-sm bg-color-white px-2',
        'flex h-12 items-center gap-x-4 text-color-dark hover:bg-color-primary-tr-hover hover:text-color-primary-hover',
        '[&:not(:disabled)]:cursor-pointer [&:not(:last-child)]:mb-1 [&>p]:hover:text-color-secondary',
        'data-[active="true"]:bg-color-primary-tr-hover data-[active="true"]:text-color-primary-hover',
        'data-[focused="true"]:bg-color-primary-tr-hover data-[focused="true"]:text-color-primary-hover',
        {
          'pointer-events-none text-color-disabled': disabled,
          'flex items-center gap-x-4': multiple,
          'gap-x-3': attachment && attachment.left
        },
        className
      )}
    >
      {multiple ? <CheckboxBase checked={active} disabled={disabled} /> : attachment && attachment.left}
      <ContentWrapper>
        {label}
        {helperText && (
          <p
            className={cn('desk-body-regular-s text-color-tetriary', {
              'text-color-disabled': disabled
            })}
          >
            {helperText}
          </p>
        )}
      </ContentWrapper>
      {attachment && attachment.right && <div className='ml-auto'>{attachment.right}</div>}
    </li>
  )
}
