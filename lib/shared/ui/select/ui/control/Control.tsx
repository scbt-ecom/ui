import { useRef } from 'react'
import { type ControlProps as ControlPrimitiveProps } from 'react-select'
import type { SelectBaseProps } from '../../Select'
import { useSelectController } from './hooks'
import { ChipList } from './ui'
import { useClickOutside } from '$/shared/hooks'
import { Icon, InputBase, type InputBaseProps, type SelectItemOption } from '$/shared/ui'
import { cn } from '$/shared/utils'

type ControlBaseProps = ControlPrimitiveProps<SelectItemOption, boolean>

export type ControlClasses = {
  control?: string
  chip?: string
}

export type ControlActions = {
  onInputChange?: (value: string) => void
}

type ControlProps = ControlBaseProps &
  Pick<SelectBaseProps, 'isSearchable' | 'label' | 'returnValue' | 'displayValue'> &
  Pick<InputBaseProps, 'attachmentProps' | 'invalid'> & {
    classes?: ControlClasses & InputBaseProps['classes']
    externalActions?: ControlActions
  }

export const Control = ({
  isSearchable,
  label,
  attachmentProps,
  displayValue,
  isMulti,
  invalid,
  classes,
  externalActions,
  ...props
}: ControlProps) => {
  const { selectProps } = props
  const { onMenuOpen, onMenuClose, menuIsOpen, inputValue, onInputChange, value, onChange } = selectProps

  const { onMenuOpenToggle, onInputValueChange, selectDisplayValue, onDeleteItem } = useSelectController({
    value,
    onValueChange: onChange,
    menuIsOpen,
    inputValue,
    onInputChange,
    displayValue,
    onMenuOpen,
    onMenuClose,
    externalActions
  })

  const containerRef = useRef<HTMLInputElement>(null)

  useClickOutside(containerRef, () => onMenuClose && onMenuClose())

  return (
    <InputBase
      ref={containerRef}
      classes={{
        ...classes,
        input: cn(classes?.input, {
          'cursor-pointer': !isSearchable
        })
      }}
      invalid={invalid}
      readOnly={!isSearchable}
      value={isMulti && isSearchable ? selectDisplayValue : isSearchable ? inputValue : selectDisplayValue}
      onChange={isSearchable ? onInputValueChange : undefined}
      renderValues={
        isMulti
          ? () => (
              <ChipList
                values={value}
                inputValue={inputValue}
                onInputValueChange={onInputValueChange}
                onDeleteItem={onDeleteItem}
              />
            )
          : undefined
      }
      label={label}
      onClick={onMenuOpen}
      onBlur={onMenuClose}
      autoComplete='off'
      attachmentProps={{
        ...attachmentProps,
        icon: (
          <Icon
            name='arrows/arrowRight'
            className={cn('rotate-90 text-icon-blue-grey-600 duration-100', {
              '-rotate-90': menuIsOpen
            })}
          />
        ),
        onClickIcon: onMenuOpenToggle
      }}
    />
  )
}
