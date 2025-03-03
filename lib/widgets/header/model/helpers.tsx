import type { HeaderProps, HeaderVariantType } from './types'
import { Button, PhoneView } from '$/shared/ui'
import { createPhoneNumber } from '$/shared/utils'

export const renderContentVariant = <Type extends HeaderVariantType>({ variant, details }: HeaderProps<Type>) => {
  switch (variant) {
    case 'withButton':
      return (
        <Button intent='secondary' size='sm' {...details}>
          {details?.children || 'Оформить заявку'}
        </Button>
      )
    case 'withPhone':
      return <PhoneView classes={{ root: 'items-end' }} {...details} phone={createPhoneNumber(details.phone)} />
    default:
      return null
  }
}
