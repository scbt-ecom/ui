import { type ReactElement } from 'react'
import { ListboxOption } from '@headlessui/react'
import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

export type TCustomOptionClasses = {
  option: string
  optionWrapper: string
  optionValue: string
  optionIcon: string
  optionText: string
}

export interface ISelectOption {
  optionValue: string
  optionLabel: string
  isDisabled?: boolean
  additionalText?: ReactElement | string
}

export interface ICustomOptionProps extends ISelectOption {
  classes?: Partial<TCustomOptionClasses>
}

export const CustomOption = ({ optionValue, optionLabel, additionalText, isDisabled, classes }: ICustomOptionProps) => {
  return (
    <ListboxOption
      value={optionValue}
      disabled={isDisabled}
      className={cn(
        'desk-body-regular-l cursor-pointer rounded-sm p-2 text-color-dark transition-all hover:bg-color-primary-tr-hover hover:text-color-primary-hover data-[disabled]:pointer-events-none data-[focus]:bg-color-primary-tr-hover data-[disabled]:text-color-disabled data-[focus]:text-color-primary-hover',
        classes?.option
      )}
    >
      {({ selected }) => (
        <div className={cn('flex items-center justify-between gap-2', classes?.optionWrapper)}>
          <div className='flex flex-col gap-1'>
            <div className={cn('', classes?.optionValue)}>{optionLabel}</div>
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
