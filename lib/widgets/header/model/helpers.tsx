import { ButtonWithHandlers } from '../../buttonWithHandlers'
import type { HeaderProps, HeaderVariantType } from './types'
import { PhoneView } from '$/shared/ui'
import { createPhoneNumber } from '$/shared/utils'

export const renderContentVariant = <Type extends HeaderVariantType>({ variant, details }: HeaderProps<Type>) => {
  switch (variant) {
    case 'withButton':
      return <ButtonWithHandlers {...details} />
    case 'withPhone':
      return <PhoneView classes={{ root: 'items-end' }} {...details} phone={createPhoneNumber(details.phone)} />
    default:
      return null
  }
}
