import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

interface IDropdownProps<Value extends string | number> {
  options: Value[]
  isActive: boolean
  selectedDate: Value
  onClickTrigger: () => void
  onClickOption: (value: number) => void
  variant?: 'months' | 'years'
}

export const Dropdown = <Value extends string | number>({
  options,
  isActive,
  selectedDate,
  onClickTrigger,
  onClickOption,
  variant = 'months'
}: IDropdownProps<Value>) => {
  return (
    <div className='z-20 w-full'>
      <div
        role='button'
        tabIndex={0}
        onKeyDown={onClickTrigger}
        onClick={onClickTrigger}
        className={cn(
          'desk-body-medium-l flex items-center gap-[2px] rounded-sm px-2 py-2 text-color-tetriary transition-colors hover:bg-color-primary-tr-hover',
          { 'text-color-primary-default': isActive }
        )}
      >
        {selectedDate}
        <Icon
          name='arrows/arrowRight'
          className={cn('rotate-90 text-icon-blue-grey-800', { 'text-icon-primary-default': isActive })}
        />
      </div>

      <div
        className={cn(
          'invisible absolute bottom-3 left-1/2 z-10 flex h-[280px] w-full -translate-x-1/2 flex-col overflow-hidden px-4 opacity-0 transition-all',
          {
            'visible opacity-100': isActive
          }
        )}
      >
        <div
          className='customScrollbar-y overflow-y-auto overflow-x-hidden bg-color-white px-2'
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
                onClick={() => onClickOption(variant === 'months' ? index : (option as number))}
                onKeyDown={() => onClickOption(variant === 'months' ? index : (option as number))}
                className={cn(
                  'mob-body-regular-m cursor-pointer rounded-sm bg-color-white px-2 py-[10px] text-color-dark transition-colors hover:bg-color-primary-tr-hover hover:text-color-primary-hover',
                  { '!bg-color-primary-default !text-color-white': selectedDate === option }
                )}
              >
                {option}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
