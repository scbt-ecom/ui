import type { IDropdownProps } from './Dropdown'
import { cn } from '$/shared/utils'

interface IOptionsListProps<Value extends string | number> extends Omit<IDropdownProps<Value>, 'onClickTrigger'> {}

export const OptionsList = <Value extends string | number>({
  isActive,
  variant,
  options,
  onClickOption,
  selectedValue,
  classes
}: IOptionsListProps<Value>) => {
  const modeMonth = variant === 'months'
  return (
    <div
      className={cn('customScrollbar-y overflow-y-auto overflow-x-hidden bg-color-white px-2', classes?.dropdownOptions)}
      role='listbox'
      aria-expanded={isActive ? 'true' : 'false'}
      aria-label={variant === 'months' ? 'Выбор месяца' : 'Выбор года'}
    >
      {options?.map((option, index) => {
        return (
          <div
            key={option}
            role='button'
            tabIndex={0}
            onClick={() => onClickOption(modeMonth ? index : (option as number))}
            onKeyDown={() => onClickOption(modeMonth ? index : (option as number))}
            className={cn(
              'mob-body-regular-m cursor-pointer rounded-sm bg-color-white px-2 py-[10px] text-color-dark transition-colors hover:bg-color-primary-tr-hover hover:text-color-primary-hover',
              {
                '!bg-color-primary-default !text-color-white': modeMonth ? selectedValue === option : +selectedValue === option
              },
              classes?.dropdownOption
            )}
          >
            {option}
          </div>
        )
      })}
    </div>
  )
}
