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
        'bg-color-white invisible absolute top-[64px] z-10 h-[208px] w-full scale-0 rounded-sm p-1 opacity-0 shadow-sm transition-all',
        { 'visible scale-1 opacity-1': menuIsOpen }
      )}
    >
      {optionsList?.map((option) => (
        <div
          key={option.engName}
          onClick={() => onSelectOption(option)}
          className='desk-body-regular-l bg-color-white hover:bg-color-blue-grey-100 flex cursor-pointer items-center gap-2 rounded-sm p-2'
        >
          <span>{option.ruName}</span> <span className='uppercase'>({option.engName})</span>
        </div>
      ))}
    </div>
  )
}
