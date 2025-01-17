import { type BrandLogoVariant, type ButtonProps, type PhoneViewProps } from '$/shared/ui'

type PageHeaderClasses = {
  header?: string
  container?: string
  wrapper?: string
  logo?: string
}

interface CommonHeaderProps {
  logoPath?: string
  logoType?: BrandLogoVariant
  classes?: PageHeaderClasses
}

export interface HeaderEmptyProps extends CommonHeaderProps {
  variant: 'empty'
}

export interface HeaderWithPhone extends CommonHeaderProps {
  variant: 'withPhone'
  phoneProps: PhoneViewProps
}

export interface HeaderWithButton extends CommonHeaderProps {
  variant: 'withButton'
  buttonProps?: ButtonProps
}
