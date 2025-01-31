import { type BrandLogoVariant, type ButtonProps, type PhoneViewProps } from '$/shared/ui'

type HeaderClasses = {
  header?: string
  container?: string
  wrapper?: string
  logo?: string
}

interface CommonHeaderProps {
  logoPath?: string
  logoType?: BrandLogoVariant
  classes?: HeaderClasses
}

export interface HeaderEmptyProps extends CommonHeaderProps {
  config: {
    variant: 'empty'
    details: undefined
  }
}

export interface HeaderWithPhone extends CommonHeaderProps {
  config: {
    variant: 'withPhone'
    details: PhoneViewProps
  }
}

export interface HeaderWithButton extends CommonHeaderProps {
  config: {
    variant: 'withButton'
    details?: ButtonProps
  }
}

export type HeaderProps = HeaderWithButton | HeaderWithPhone | HeaderEmptyProps
