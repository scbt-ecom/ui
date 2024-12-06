import { type IHeaderWithButton, type IHeaderWithPhone } from './types'
import { brandLogos, Button, PhoneView, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TPageHeaderProps = IHeaderWithButton | IHeaderWithPhone

const renderContentVariant = (props: TPageHeaderProps) => {
  switch (props.variant) {
    case 'withButton':
      return (
        <Button intent='secondary' size='sm' {...props.buttonProps}>
          Оформить заявку
        </Button>
      )
    case 'withPhone':
      const { phone, phoneText } = props
      return <PhoneView phone={phone} text={phoneText} {...props.phoneProps} />
    default:
      return null
  }
}

export const PageHeader = (props: TPageHeaderProps) => {
  const { logoPath = '/', logoType = 'main', classes } = props

  return (
    <header className={cn('flex h-[72px] items-center justify-center bg-color-white', classes?.header)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn('flex items-center justify-between gap-5', classes?.wrapper)}>
          <a
            href={logoPath}
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
