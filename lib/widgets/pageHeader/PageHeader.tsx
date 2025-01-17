import { type HeaderEmptyProps, type HeaderWithButton, type HeaderWithPhone } from './types'
import { brandLogos, Button, PhoneView, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type PageHeaderProps = HeaderWithButton | HeaderWithPhone | HeaderEmptyProps

const renderContentVariant = (props: PageHeaderProps) => {
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

export const PageHeader = (props: PageHeaderProps) => {
  const { logoPath = '/', logoType = 'main', classes } = props

  return (
    <header className={cn('flex h-[64px] items-center justify-center bg-color-white desktop:h-[72px]', classes?.header)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn('flex items-center justify-between gap-5', classes?.wrapper)}>
          <a
            href={logoPath}
            aria-label='logo'
            target='_blank'
            rel='noreferrer'
            className={cn(
              'flex items-center justify-center [&_svg]:w-[132px] desktop:[&_svg]:h-[32px] desktop:[&_svg]:w-[192px]',
              classes?.logo
            )}
          >
            {brandLogos[logoType]}
          </a>
          {renderContentVariant(props)}
        </div>
      </ResponsiveContainer>
    </header>
  )
}
