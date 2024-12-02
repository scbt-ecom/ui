import { Indicator, Item } from '@radix-ui/react-radio-group'
import { type IRadioGroupOption, type TRadioClasses } from '../RadioControl'
import { cn } from '$/shared/utils'

interface IRadioGroupCustomProps {
  radioItemsGroup: IRadioGroupOption[]
  classes?: Omit<TRadioClasses, 'root' | 'message' | 'field' | 'groupName'>
  error?: boolean
}

export const RadioGroupCustom = ({ radioItemsGroup, classes, error }: IRadioGroupCustomProps) => {
  return (
    <>
      {radioItemsGroup?.map(({ label, value, isDisabled }) => (
        <div key={value} className={cn('flex items-center gap-2', classes?.radioOption)}>
          <div
            className={cn(
              'flex size-10 items-center justify-center rounded-full transition-all focus-within:bg-color-primary-tr-focus hover:bg-color-primary-tr-hover',
              classes?.radio,
              { '!bg-color-transparent': isDisabled }
            )}
          >
            <Item
              disabled={isDisabled}
              className={cn(
                'relative size-6 cursor-pointer rounded-full border-2 border-solid bg-color-transparent outline-none transition-all data-[state=checked]:border-primary-default data-[state=unchecked]:border-blue-grey-700',
                {
                  'data-[state=checked]:!border-primary-disabled data-[state=unchecked]:border-transparent data-[state=unchecked]:bg-color-blue-grey-300':
                    isDisabled
                },
                { '!border-negative': error },
                classes?.radioInput
              )}
              value={value}
              id={value}
            >
              <Indicator
                className={cn(
                  'after:content-[" "] relative flex h-full w-full items-center justify-center after:block after:size-3 after:rounded-full after:bg-color-primary-default',
                  { 'after:bg-color-primary-disabled': isDisabled },
                  classes?.radioIndicator
                )}
              />
            </Item>
          </div>
          <label
            htmlFor={value}
            className={cn(
              'desk-body-regular-l cursor-pointer text-color-dark',
              { 'text-color-disabled': isDisabled },
              classes?.radioLabel
            )}
          >
            {label}
          </label>
        </div>
      ))}
    </>
  )
}
