import type { HeaderProps } from './types'
import { Button, PhoneView } from '$/shared/ui'

export const renderContentVariant = (config: HeaderProps['config']) => {
  const { variant, details } = config
  switch (variant) {
    case 'withButton':
      return (
        <Button intent='secondary' size='sm' {...details}>
          {details?.children || 'Оформить заявку'}
        </Button>
      )
    case 'withPhone':
      return <PhoneView classes={{ root: 'items-end' }} {...details} />
    default:
      return null
  }
}
