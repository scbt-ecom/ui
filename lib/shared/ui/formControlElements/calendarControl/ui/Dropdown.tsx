import { type TDropdownClasses } from '../model/types'
import { OptionsList } from './OptionsList'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface IDropdownProps<Value extends string | number> {
  options: Value[]
  selectedValue: string
  isActive: boolean
  onClickTrigger: () => void
  onClickOption: (value: number) => void
  variant?: 'months' | 'years'
  classes?: Partial<TDropdownClasses>
}

export const Dropdown = <Value extends string | number>({
  onClickTrigger,
  isActive,
  selectedValue,
  options,
  variant = 'months',
  onClickOption,
  classes
}: IDropdownProps<Value>) => {
  return (
    <div className={cn('z-20 w-full', classes?.dropdownWrapper)}>
      <div
        role='button'
        tabIndex={0}
        onKeyDown={onClickTrigger}
        onClick={onClickTrigger}
        className={cn(
          'desk-body-medium-l flex items-center gap-[2px] rounded-sm px-2 py-2 text-color-tetriary transition-colors hover:bg-color-primary-tr-hover',
          { 'text-color-primary-default': isActive },
          classes?.dropdownTrigger
        )}
      >
        {selectedValue}
        <Icon
          name='arrows/arrowRight'
          className={cn('rotate-90 text-icon-blue-grey-800', { 'text-icon-primary-default': isActive }, classes?.dropdownIcon)}
        />
      </div>

      <div
        className={cn(
          'invisible absolute bottom-3 left-1/2 z-10 flex h-[280px] w-full -translate-x-1/2 flex-col overflow-hidden px-4 opacity-0 transition-all',
          { 'visible opacity-100': isActive },
          classes?.dropdownOverlay
        )}
      >
        <OptionsList
          options={options}
          selectedValue={selectedValue}
          isActive={isActive}
          onClickOption={onClickOption}
          variant={variant}
        />
      </div>
    </div>
  )
}
