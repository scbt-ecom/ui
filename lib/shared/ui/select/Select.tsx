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
  'placeholder' | 'options' | 'defaultValue'
> &
  Pick<InputBaseProps, 'attachmentProps'> & {
    label: string
    invalid?: boolean
    isSearchable?: boolean
    returnValue?: (option: SelectItemOption) => string
    displayValue?: (option: SelectItemOption) => string
    classes?: SelectClasses
    options: SelectItemOption[]
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
      ...props
    },
    ref
  ) => {
    const isFilterDisabled = filterOptionDisabled || (!isSearchable && !isMulti) ? null : undefined

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
