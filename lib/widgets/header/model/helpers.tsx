import { ButtonWithHandlers } from '../../buttonWithHandlers'
import type { HeaderProps } from './types'
import { PhoneView } from '$/shared/ui'
import { createPhoneNumber } from '$/shared/utils'

export const renderContentVariant = (config: HeaderProps['config']) => {
  const { variant, details } = config

  switch (variant) {
    case 'withButton':
      return <ButtonWithHandlers {...details} />
    case 'withPhone':
      return <PhoneView classes={{ root: 'items-end' }} {...details} phone={createPhoneNumber(details.phone)} />
    default:
      return null
  }
}
