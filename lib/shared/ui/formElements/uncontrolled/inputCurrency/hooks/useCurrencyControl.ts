import { useMemo, useState } from 'react'
import type { CurrencyValue } from '../InputCurrency'
import type { DropdownItemOption } from '$/shared/ui/dropdownList'

interface UseCurrencyControlProps {
  value: CurrencyValue
  currencies: DropdownItemOption[]
  onChange: (value: CurrencyValue) => void
}

export const useCurrencyControl = ({ value, currencies, onChange }: UseCurrencyControlProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const currenciesMap = useMemo<Map<string, DropdownItemOption>>(() => {
    const map = new Map<string, DropdownItemOption>()

    for (const currency of currencies) {
      if (currency.value) map.set(currency.value, currency)
    }

    return map
  }, [currencies])

  const currency = useMemo<DropdownItemOption | null>(
    () => (value.currency ? (currenciesMap.get(value.currency) ?? null) : null),
    [value, currenciesMap]
  )

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value

    if (!/^-?\d*([.,]\d+)?([eE][-+]?\d+)?$/.test(v)) return

    onChange({ ...value, value: v })
  }

  const onCurrencyChange = (currency: DropdownItemOption) => {
    setOpen(false)
    onChange({ ...value, currency: currency.value })
  }

  return { currency, open, setOpen, onCurrencyChange, onInputChange }
}
