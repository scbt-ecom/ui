import { type ReactElement } from 'react'
import { ListboxOption } from '@headlessui/react'
import { cn, Icon } from '$/hybrid'

export type TCustomOptionClasses = {
  option: string
  optionWrapper: string
  optionValue: string
  optionIcon: string
  optionText: string
}

export interface ISelectOption {
  optionValue: string
  isDisabled?: boolean
  additionalText?: ReactElement | string
}

export interface ICustomOptionProps extends ISelectOption {
  classes?: Partial<TCustomOptionClasses>
}

export const CustomOption = ({ optionValue, additionalText, isDisabled, classes }: ICustomOptionProps) => {
  return (
    <ListboxOption
      value={optionValue}
      disabled={isDisabled}
      className={cn(
        'desk-body-regular-l text-color-dark p-2 rounded-sm cursor-pointer transition-all hover:bg-color-primary-tr-hover hover:text-color-primary-hover data-[focus]:text-color-primary-hover data-[focus]:bg-color-primary-tr-hover data-[disabled]:pointer-events-none data-[disabled]:text-color-disabled',
        classes?.option
      )}
    >
      {({ selected }) => (
        <div className={cn('flex justify-between items-center gap-2', classes?.optionWrapper)}>
          <div className='flex flex-col gap-1'>
            <div className={cn('', classes?.optionValue)}>{optionValue}</div>
            {additionalText && (
              <span className={cn('desk-body-regular-s text-color-tetriary', classes?.optionText)}>{additionalText}</span>
            )}
          </div>
          <Icon
            name='general/check'
            className={cn('size-5 text-icon-primary-default', { invisible: !selected }, classes?.optionIcon)}
          />
        </div>
      )}
    </ListboxOption>
  )
}
