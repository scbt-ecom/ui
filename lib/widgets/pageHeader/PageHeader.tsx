import { type ReactElement } from 'react'
import { brandLogos, Button, PhoneView, ResponsiveContainer, type TBrandLogoVariant } from '$/shared/ui'
import { cn } from '$/shared/utils'

type TPageHeaderClasses = {
  header: string
  container: string
  wrapper: string
  logo: string
  button: string
  phoneWrapper: string
  phoneLink: string
  phoneText: string
}
export interface ICommonHeaderProps {
  logoPath?: string
  logoType?: TBrandLogoVariant
  classes?: Partial<TPageHeaderClasses>
}
interface IHeaderWithPhone extends ICommonHeaderProps {
  variant: 'withPhone'
  phone: string | ReactElement
  phoneText: string | ReactElement
}
interface IHeaderWithButton extends ICommonHeaderProps {
  variant: 'withButton'
}

export type TPageHeaderProps = IHeaderWithButton | IHeaderWithPhone

const renderContentVariant = (props: TPageHeaderProps) => {
  switch (props.variant) {
    case 'withButton':
      return (
        <Button intent='secondary' size='sm' className={props.classes?.button}>
          Оформить заявку
        </Button>
      )
    case 'withPhone':
      const { phone, phoneText } = props as IHeaderWithPhone
      return (
        <PhoneView
          phone={phone}
          text={phoneText}
          classes={{
            wrapper: props.classes?.phoneWrapper,
            text: props.classes?.phoneText,
            link: props.classes?.phoneLink
          }}
        />
      )
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
            aria-label='logo'
            target='_blank'
            rel='noreferrer'
            className={cn(
              'flex items-center justify-center [&_svg]:w-[114px] desktop:[&_svg]:h-[32px] desktop:[&_svg]:w-[192px]',
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
