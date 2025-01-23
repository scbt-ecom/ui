import { type ICurrencyOption } from '../InputCurrencyControl'
import { Icon } from '$/shared/ui'

interface IMenuTriggerProps {
  onToggleMenu: () => void
  currentCurrencyOption: ICurrencyOption
}

export const MenuTrigger = ({ onToggleMenu, currentCurrencyOption }: IMenuTriggerProps) => {
  return (
    <button
      type='button'
      onClick={onToggleMenu}
      className='desk-body-regular-l border-blue-grey-500 flex items-center gap-1 border-l border-solid pr-4 pl-2'
    >
      <span className='text-color-tetriary uppercase'>{currentCurrencyOption.engName}</span>
      <Icon name='arrows/arrowRight' className='text-icon-blue-grey-700 rotate-90' />
    </button>
  )
}
