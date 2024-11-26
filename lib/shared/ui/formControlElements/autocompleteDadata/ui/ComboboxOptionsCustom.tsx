import { ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { type TDadataOption } from '../model/types'
import { cn } from '$/shared/utils'

interface IComboboxOptionsProps {
  suggestionsOptions: TDadataOption[] | null
}

export const ComboboxOptionsCustom = ({ suggestionsOptions }: IComboboxOptionsProps) => {
  return (
    <ComboboxOptions
      transition
      className={cn(
        'scrollHidden absolute top-14 z-10 mt-2 flex w-full flex-col rounded-md border border-solid border-blue-grey-700 bg-color-white p-2 transition-all empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0'
      )}
    >
      <div className='customScrollbar-y !max-h-[246px] overflow-x-hidden p-2'>
        {suggestionsOptions && suggestionsOptions?.length > 0 ? (
          <>
            {suggestionsOptions?.map(({ value: suggestionValue, additionalText, isDisabled }) => (
              <ComboboxOption
                key={suggestionValue}
                disabled={isDisabled}
                value={suggestionValue ?? ''}
                className='flex cursor-pointer items-center justify-between gap-2 rounded-sm px-3 py-3 hover:bg-color-blue-grey-200 data-[disabled]:pointer-events-none data-[disabled]:bg-color-blue-grey-100 data-[focus]:bg-color-blue-grey-200 data-[disabled]:text-color-disabled'
              >
                <div className='flex flex-col gap-1'>
                  <p className='desk-body-regular-l'>{suggestionValue}</p>

                  {additionalText && <span className='desk-body-regular-s text-color-tetriary'>{additionalText}</span>}
                </div>
              </ComboboxOption>
            ))}
          </>
        ) : (
          <ComboboxOption value='' className='desk-body-regular-m text-color-tetriary'>
            Ничего не найдено
          </ComboboxOption>
        )}
      </div>
    </ComboboxOptions>
  )
}
