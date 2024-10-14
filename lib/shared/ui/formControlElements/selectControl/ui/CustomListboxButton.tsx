import { ListboxButton } from '@headlessui/react'
import { type TCommonSelectProps } from '../SelectControl'
import { cn, Icon } from '$/hybrid'

export type TCustomListboxButtonClasses = {
  label: string
  value: string
  trigger: string
  arrowIcon: string
  message: string
}

export interface ICustomListboxButtonProps extends TCommonSelectProps {
  label: string
  controlledValue: string | string[]
  classes?: Partial<TCustomListboxButtonClasses>
}

const renderSelectedValue = ({ multiple, controlledValue, label, intent, disabled, classes }: ICustomListboxButtonProps) => {
  const labelElement = (
    <div
      className={cn(
        'text-color-blue-grey-600 desk-body-regular-l transition-colors',
        { 'group-data-[hover]:!text-color-primary-hover ': intent === 'clear' },
        { '!text-color-disabled': disabled },
        classes?.label
      )}
    >
      {label}
    </div>
  )

  if (multiple && intent === 'filled') {
    if (Array.isArray(controlledValue) && controlledValue.length > 0) {
      return (
        <div className='flex items-center gap-2 flex-wrap flex-1'>
          {controlledValue.map((value) => (
            <div
              title={value}
              className={cn(
                'text-color-dark w-max bg-color-blue-grey-300 rounded-sm py-1 px-2 truncate max-w-[240px]',
                classes?.value
              )}
            >
              {value}
            </div>
          ))}
        </div>
      )
    }
    return labelElement
  }

  if (controlledValue) {
    return <div className={cn('text-color-dark flex-1', classes?.value)}>{controlledValue}</div>
  }
  return labelElement
}

export const CustomListboxButton = ({
  classes,
  intent,
  controlledValue,
  multiple,
  label,
  disabled,
  error
}: ICustomListboxButtonProps) => {
  return (
    <ListboxButton
      className={cn(
        'h-[56px] outline outline-1 outline-transparent bg-color-blue-grey-100 p-4 rounded-sm flex items-center justify-between data-[hover]:bg-color-blue-grey-200 data-[active]:outline-blue-grey-800 focus:outline-blue-grey-800 group text-left transition-all',
        {
          'min-h-[56px] px-4 py-2 h-auto': intent === 'filled' && multiple,
          '!bg-color-transparent data-[hover]:bg-color-transparent h-full px-2 py-1 data-[active]:outline-primary-focus focus:outline-primary-focus':
            intent === 'clear',
          '!bg-color-blue-grey-100 pointer-events-none ': disabled,
          '!outline-secondary-default': !!error
        },
        classes?.trigger
      )}
    >
      {renderSelectedValue({ multiple, controlledValue, label, intent, disabled, classes })}

      <Icon
        name='arrows/arrowRight'
        className={cn(
          'size-6 rotate-90  text-icon-blue-grey-600 group-data-[open]:-rotate-90 transition-all',
          { 'text-icon-blue-grey-700 group-data-[hover]:text-icon-primary-hover': intent === 'clear' },
          { 'text-icon-disabled': disabled },
          { 'text-icon-secondary-default': !!error },
          classes?.arrowIcon
        )}
      />
    </ListboxButton>
  )
}
