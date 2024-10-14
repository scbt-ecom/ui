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
        'desk-body-regular-l text-color-blue-grey-600 transition-colors',
        { 'group-data-[hover]:!text-color-primary-hover': intent === 'clear' },
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
        <div className='flex flex-1 flex-wrap items-center gap-2'>
          {controlledValue.map((value) => (
            <div
              title={value}
              className={cn(
                'w-max max-w-[240px] truncate rounded-sm bg-color-blue-grey-300 px-2 py-1 text-color-dark',
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
    return <div className={cn('flex-1 text-color-dark', classes?.value)}>{controlledValue}</div>
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
        'group flex h-[56px] items-center justify-between rounded-sm bg-color-blue-grey-100 p-4 text-left outline outline-1 outline-transparent transition-all focus:outline-blue-grey-800 data-[hover]:bg-color-blue-grey-200 data-[active]:outline-blue-grey-800',
        {
          'h-auto min-h-[56px] px-4 py-2': intent === 'filled' && multiple,
          'h-full !bg-color-transparent px-2 py-1 focus:outline-primary-focus data-[hover]:bg-color-transparent data-[active]:outline-primary-focus':
            intent === 'clear',
          'pointer-events-none !bg-color-blue-grey-100': disabled,
          '!outline-secondary-default': !!error
        },
        classes?.trigger
      )}
    >
      {renderSelectedValue({ multiple, controlledValue, label, intent, disabled, classes })}

      <Icon
        name='arrows/arrowRight'
        className={cn(
          'size-6 rotate-90 text-icon-blue-grey-600 transition-all group-data-[open]:-rotate-90',
          { 'text-icon-blue-grey-700 group-data-[hover]:text-icon-primary-hover': intent === 'clear' },
          { 'text-icon-disabled': disabled },
          { 'text-icon-secondary-default': !!error },
          classes?.arrowIcon
        )}
      />
    </ListboxButton>
  )
}
