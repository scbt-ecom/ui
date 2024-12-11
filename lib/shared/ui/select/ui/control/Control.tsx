import { useMemo, useRef } from 'react'
import { type ControlProps as ControlPrimitiveProps, type MultiValue } from 'react-select'
import type { SelectProps } from '../../Select'
import { useClickOutside } from '$/shared/hooks'
import { Icon, InputBase, type InputBaseProps, type SelectItemOption } from '$/shared/ui'
import { cn } from '$/shared/utils'

type ControlBaseProps = ControlPrimitiveProps<SelectItemOption, boolean>

export type ControlClasses = {
  control?: string
  chip?: string
}

type ControlProps = ControlBaseProps &
  Pick<SelectProps, 'isSearchable' | 'label' | 'returnValue' | 'displayValue'> &
  Pick<InputBaseProps, 'attachmentProps'> & {
    classes?: ControlClasses & InputBaseProps['classes']
  }

type SelectValue = SelectItemOption | MultiValue<SelectItemOption> | null

function isSingleValue(value: SelectValue): value is SelectItemOption {
  return value !== null && !Array.isArray(value)
}

export const Control = ({ isSearchable, label, attachmentProps, displayValue, isMulti, classes, ...props }: ControlProps) => {
  const { selectProps } = props
  const { onMenuOpen, onMenuClose, menuIsOpen, inputValue, onInputChange, value, onChange } = selectProps

  const containerRef = useRef<HTMLInputElement>(null)

  useClickOutside(containerRef, () => onMenuClose && onMenuClose())

  const onInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value, {
      prevInputValue: inputValue,
      action: 'input-change'
    })
  }

  const onMenuOpenToggle = () => {
    if (menuIsOpen) {
      onMenuClose()
    } else {
      onMenuOpen()
    }
  }

  const selectDisplayValue = useMemo(() => {
    if (value) {
      if (Array.isArray(value)) {
        return value.map((item) => (displayValue ? displayValue(item) : item.label)).join(' | ')
      }
      if (isSingleValue(value)) {
        const updatedValue = displayValue ? displayValue(value) : value.label

        onInputChange(updatedValue, {
          prevInputValue: inputValue,
          action: 'set-value'
        })
        return updatedValue
      }
    } else {
      return ''
    }
  }, [value, displayValue])

  const onDeleteItem = (option: SelectItemOption) => {
    if (value && Array.isArray(value)) {
      const updatedValue = value.filter((item) => item.id !== option.id)

      onChange(updatedValue, {
        option,
        action: 'deselect-option'
      })
    }
  }

  return (
    <InputBase
      ref={containerRef}
      classes={{
        ...classes,
        input: cn(classes?.input, {
          'cursor-pointer': !isSearchable
        })
      }}
      readOnly={!isSearchable}
      value={isMulti && isSearchable ? selectDisplayValue : isSearchable ? inputValue : selectDisplayValue}
      onChange={isSearchable ? onInputValueChange : undefined}
      renderValues={
        (isMulti &&
          (() => (
            <>
              {Array.isArray(value) &&
                value.length > 0 &&
                value.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      'mob-body-regular-m flex w-fit items-center gap-x-1 whitespace-nowrap',
                      'rounded-sm bg-color-primary-tr-hover px-1 text-color-primary-default',
                      classes?.chip
                    )}
                  >
                    {displayValue ? displayValue(item) : item.label}
                    <Icon
                      name='general/close'
                      className='size-3.5 cursor-pointer'
                      onClick={(event) => {
                        event.stopPropagation()
                        event.nativeEvent.stopPropagation()

                        onDeleteItem(item)
                      }}
                    />
                  </div>
                ))}
              <input
                type='text'
                className='unset-all-apply desk-body-regular-l flex-grow bg-color-transparent'
                value={inputValue}
                onChange={onInputValueChange}
              />
            </>
          ))) ||
        undefined
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
