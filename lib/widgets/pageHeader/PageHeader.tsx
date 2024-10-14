import { brandLogos, Button, PhoneView, ResponsiveContainer, type TBrandLogoVariant } from '$/shared/ui'

export interface ICommonHeaderProps {
  logoPath?: string
  logoType?: TBrandLogoVariant
}
interface IHeaderWithPhone extends ICommonHeaderProps {
  variant: 'withPhone'
  phone: string
  phoneText: string
}
interface IHeaderWithButton extends ICommonHeaderProps {
  variant: 'withButton'
}

export type TPageHeaderProps = IHeaderWithButton | IHeaderWithPhone

const renderContentVariant = (props: TPageHeaderProps) => {
  switch (props.variant) {
    case 'withButton':
      return (
        <Button intent='secondary' size='sm'>
          Оформить заявку
        </Button>
      )
    case 'withPhone':
      const { phone, phoneText } = props as IHeaderWithPhone
      return <PhoneView phone={phone} text={phoneText} />
    default:
      return null
  }
}

export const PageHeader = (props: TPageHeaderProps) => {
  const { logoPath = '/', logoType = 'main' } = props

  return (
    <header className='flex h-[72px] items-center justify-center bg-color-blue-grey-200'>
      <ResponsiveContainer>
        <div className='flex items-center justify-between gap-5'>
          <a
            href={logoPath}
            target='_blank'
            rel='noreferrer'
            className='flex items-center justify-center [&_svg]:h-[32px] [&_svg]:w-[192px]'
          >
            {brandLogos[logoType]}
          </a>
          {renderContentVariant(props)}
        </div>
      </ResponsiveContainer>
    </header>
  )
}
