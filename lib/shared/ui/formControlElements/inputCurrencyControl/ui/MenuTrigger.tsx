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
      className='desk-body-regular-l flex items-center gap-1 border-l border-solid border-blue-grey-500 pl-2 pr-4'
    >
      <span className='uppercase text-color-tetriary'>{currentCurrencyOption.engName}</span>
      <Icon name='arrows/arrowRight' className='rotate-90 text-icon-blue-grey-700' />
    </button>
  )
}
