import { ReactCountryFlag } from 'react-country-flag'
import type { DropdownItemOption } from '$/shared/ui/dropdownList'

export const defaultCurrencyOptions: DropdownItemOption[] = [
  {
    value: 'rub',
    label: 'RUB',
    attachment: {
      left: <ReactCountryFlag countryCode='ru' svg />
    }
  },
  {
    value: 'usd',
    label: 'USD',
    attachment: {
      left: <ReactCountryFlag countryCode='us' svg />
    }
  }
]
