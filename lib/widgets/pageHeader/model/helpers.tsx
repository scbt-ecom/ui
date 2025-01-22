import type { PageHeaderProps } from './types'
import { Button, PhoneView } from '$/shared/ui'

export const renderContentVariant = (props: PageHeaderProps) => {
  switch (props.variant) {
    case 'withButton':
      return (
        <Button intent='secondary' size='sm' {...props.buttonProps}>
          {props.buttonProps?.children || 'Оформить заявку'}
        </Button>
      )
    case 'withPhone':
      return <PhoneView {...props.phoneProps} />
    default:
      return null
  }
}
