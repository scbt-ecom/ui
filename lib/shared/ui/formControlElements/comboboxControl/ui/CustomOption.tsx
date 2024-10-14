import { ComboboxOption } from '@headlessui/react'
import { cn, Icon } from '$/hybrid'

export interface IComboboxOption {
  optionValue: string
  additionalText?: string
  isDisabled?: boolean
}

export const CustomOption = ({ optionValue, additionalText, isDisabled }: IComboboxOption) => {
  return (
    <ComboboxOption
      disabled={isDisabled}
      key={optionValue}
      value={optionValue ?? ''}
      className='cursor-pointer px-3 py-3 flex items-center justify-between gap-2 hover:bg-color-blue-grey-200 rounded-sm data-[focus]:bg-color-blue-grey-200 data-[disabled]:bg-color-blue-grey-100 data-[disabled]:text-color-disabled data-[disabled]:pointer-events-none'
    >
      {({ selected }) => (
        <div className={cn('flex justify-between items-center gap-2 w-full')}>
          <div className='flex flex-col gap-1'>
            <div className='desk-body-regular-l'>{optionValue}</div>
            {additionalText && <span className='desk-body-regular-s text-color-tetriary'>{additionalText}</span>}
          </div>
          <Icon name='general/check' className={cn('size-5  text-icon-primary-default', { invisible: !selected })} />
        </div>
      )}
    </ComboboxOption>
  )
}
