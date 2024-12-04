import { ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { type TAutocompleteDadataClasses } from '../AutocompleteDadata'
import { type TDadataOption } from '../model/types'
import { cn } from '$/shared/utils'

interface IComboboxOptionsProps {
  suggestionsOptions: TDadataOption[] | null
  classes?: Omit<TAutocompleteDadataClasses, 'root' | 'input' | 'message'>
}

export const ComboboxOptionsCustom = ({ suggestionsOptions, classes }: IComboboxOptionsProps) => {
  const suggestionsNotEmpty = suggestionsOptions && suggestionsOptions?.length > 0

  return (
    <ComboboxOptions
      transition
      className={cn(
        'scrollHidden absolute top-14 z-50 mt-2 flex w-full flex-col bg-color-white transition-[transform,_opacity] empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0',
        classes?.options
      )}
    >
      <div
        className={cn('rounded-sm border border-solid border-blue-grey-700 p-1', {
          'border-transparent p-0': !suggestionsNotEmpty
        })}
      >
        <div className={cn('customScrollbar-y !max-h-[246px] overflow-x-hidden', classes?.optionsScrollArea)}>
          {suggestionsNotEmpty && (
            <>
              {suggestionsOptions?.map(({ value: suggestionValue, additionalText, isDisabled }, index) => (
                <ComboboxOption
                  key={index}
                  disabled={isDisabled}
                  value={suggestionValue ?? ''}
                  className={cn(
                    'flex max-w-[calc(100%-2px)] cursor-pointer items-center justify-between gap-2 rounded-sm p-2 transition-colors hover:bg-color-primary-tr-hover hover:text-color-primary-hover data-[disabled]:pointer-events-none data-[disabled]:bg-color-blue-grey-100 data-[focus]:bg-color-primary-tr-hover data-[disabled]:text-color-disabled data-[focus]:text-color-primary-hover',
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
          )}
        </div>
      </div>
    </ComboboxOptions>
  )
}
