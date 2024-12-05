import React from 'react'
import { type ICurrencyOption, type TCurrencyVariant } from '../InputCurrencyControl'
import { currencyOptionsList } from './helpers'

type TUseInputCurrencyReturn = {
  menuIsOpen: boolean
  currentCurrencyOption: ICurrencyOption
  onSelectOption: (option: ICurrencyOption) => void
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export const useInputCurrency = (defaultCurrency?: TCurrencyVariant): TUseInputCurrencyReturn => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)
  const [currentCurrencyOption, setCurrencyOption] = React.useState<ICurrencyOption>(
    () => currencyOptionsList?.find((option) => option?.currency === defaultCurrency) || currencyOptionsList[0]
  )
  const onSelectOption = (option: ICurrencyOption) => {
    setCurrencyOption(option)
    setMenuIsOpen(false)
  }

  const onToggleMenu = () => setMenuIsOpen((prev) => !prev)
  const onCloseMenu = () => setMenuIsOpen(false)

  return {
    menuIsOpen,
    currentCurrencyOption,
    onSelectOption,
    onToggleMenu,
    onCloseMenu
  }
}
