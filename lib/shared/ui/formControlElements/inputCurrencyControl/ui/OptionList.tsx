import { type ICurrencyOption } from '../InputCurrencyControl'
import { cn } from '$/shared/utils'

interface IOptionListProps {
  optionsList: ICurrencyOption[]
  menuIsOpen: boolean
  onSelectOption: (option: ICurrencyOption) => void
}

export const OptionList = ({ optionsList, menuIsOpen, onSelectOption }: IOptionListProps) => {
  return (
    <div
      className={cn(
        'invisible absolute top-[64px] z-10 h-[208px] w-full scale-0 rounded-sm bg-color-white p-1 opacity-0 shadow-sm transition-all',
        { 'opacity-1 scale-1 visible': menuIsOpen }
      )}
    >
      {optionsList?.map((option) => (
        <div
          key={option.engName}
          onClick={() => onSelectOption(option)}
          className='desk-body-regular-l flex cursor-pointer items-center gap-2 rounded-sm bg-color-white p-2 hover:bg-color-blue-grey-100'
        >
          <span>{option.ruName}</span> <span className='uppercase'>({option.engName})</span>
        </div>
      ))}
    </div>
  )
}
