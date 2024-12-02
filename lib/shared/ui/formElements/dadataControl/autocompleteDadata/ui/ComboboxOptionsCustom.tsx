import { ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { type TAutocompleteDadataClasses } from '../AutocompleteDadata'
import { type TDadataOption } from '../model/types'
import { cn } from '$/shared/utils'

interface IComboboxOptionsProps {
  suggestionsOptions: TDadataOption[] | null
  classes?: Omit<TAutocompleteDadataClasses, 'root' | 'input' | 'message'>
}

export const ComboboxOptionsCustom = ({ suggestionsOptions, classes }: IComboboxOptionsProps) => {
  return (
    <ComboboxOptions
      transition
      className={cn(
        'scrollHidden absolute top-14 z-50 mt-2 flex w-full flex-col rounded-md border border-solid border-blue-grey-700 bg-color-white p-2 transition-all empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0',
        classes?.options
      )}
    >
      <div className={cn('customScrollbar-y !max-h-[246px] overflow-x-hidden p-2', classes?.optionsScrollArea)}>
        {suggestionsOptions && suggestionsOptions?.length > 0 ? (
          <>
            {suggestionsOptions?.map(({ value: suggestionValue, additionalText, isDisabled }, index) => (
              <ComboboxOption
                key={index}
                disabled={isDisabled}
                value={suggestionValue ?? ''}
                className={cn(
                  'flex cursor-pointer items-center justify-between gap-2 rounded-sm px-3 py-3 hover:bg-color-blue-grey-200 data-[disabled]:pointer-events-none data-[disabled]:bg-color-blue-grey-100 data-[focus]:bg-color-blue-grey-200 data-[disabled]:text-color-disabled',
                  classes?.option
                )}
              >
                <div className={cn('flex flex-col gap-1', classes?.optionValueView)}>
                  <p className={cn('desk-body-regular-l', classes?.optionSuggestionValue)}>{suggestionValue}</p>

                  {additionalText && (
                    <span className={cn('desk-body-regular-s text-color-tetriary', classes?.optionAdditionalText)}>
                      {additionalText}
                    </span>
                  )}
                </div>
              </ComboboxOption>
            ))}
          </>
        ) : (
          <ComboboxOption value='' className={cn('desk-body-regular-m text-color-tetriary', classes?.optionEmptySuggestionValue)}>
            Ничего не найдено
          </ComboboxOption>
        )}
      </div>
    </ComboboxOptions>
  )
}
