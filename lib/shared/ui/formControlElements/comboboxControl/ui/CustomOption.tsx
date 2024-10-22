import { ComboboxOption } from '@headlessui/react'
import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

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
      className='flex cursor-pointer items-center justify-between gap-2 rounded-sm px-3 py-3 hover:bg-color-blue-grey-200 data-[disabled]:pointer-events-none data-[disabled]:bg-color-blue-grey-100 data-[focus]:bg-color-blue-grey-200 data-[disabled]:text-color-disabled'
    >
      {({ selected }) => (
        <div className={cn('flex w-full items-center justify-between gap-2')}>
          <div className='flex flex-col gap-1'>
            <div className='desk-body-regular-l'>{optionValue}</div>
            {additionalText && <span className='desk-body-regular-s text-color-tetriary'>{additionalText}</span>}
          </div>
          <Icon name='general/check' className={cn('size-5 text-icon-primary-default', { invisible: !selected })} />
        </div>
      )}
    </ComboboxOption>
  )
}
