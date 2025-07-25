import type { ButtonWithHandlersProps } from '../../buttonWithHandlers'
import { type BrandLogoVariant, type PhoneViewProps } from '$/shared/ui'

type HeaderClasses = {
  root?: string
  container?: string
  wrapper?: string
  logo?: string
}

interface CommonHeaderProps {
  logoPath?: string
  logoType?: BrandLogoVariant
  classes?: HeaderClasses
}

export type HeaderVariantType = 'empty' | 'withPhone' | 'withButton'

export interface HeaderEmptyProps {
  variant: 'empty'
  details?: {}
}

export interface HeaderWithPhone {
  variant: 'withPhone'
  details: PhoneViewProps
}

export interface HeaderWithButton {
  variant: 'withButton'
  details: ButtonWithHandlersProps
}

export type HeaderVariant<Type extends HeaderVariantType> = Type extends 'withButton'
  ? HeaderWithButton
  : Type extends 'withPhone'
    ? HeaderWithPhone
    : HeaderEmptyProps

export type HeaderProps<Type extends HeaderVariantType> = CommonHeaderProps & HeaderVariant<Type>
