// import { type BrandLogoVariant, type ButtonProps, type PhoneViewProps } from '$/shared/ui'
//
// type HeaderClasses = {
//   header?: string
//   container?: string
//   wrapper?: string
//   logo?: string
// }
//
// interface CommonHeaderProps {
//   logoPath?: string
//   logoType?: BrandLogoVariant
//   classes?: HeaderClasses
// }
//
// export interface HeaderEmptyProps extends CommonHeaderProps {
//   config: {
//     variant: 'empty'
//     details: undefined
//   }
// }
//
// export interface HeaderWithPhone extends CommonHeaderProps {
//   config: {
//     variant: 'withPhone'
//     details: PhoneViewProps
//   }
// }
//
// export interface HeaderWithButton extends CommonHeaderProps {
//   config: {
//     variant: 'withButton'
//     details?: ButtonProps
//   }
// }
//
// export type HeaderProps = HeaderWithButton | HeaderWithPhone | HeaderEmptyProps
//

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
  details?: ButtonProps
}

export type HeaderVariant<Type extends HeaderVariantType> = Type extends 'withButton'
  ? HeaderWithButton
  : Type extends 'withPhone'
    ? HeaderWithPhone
    : HeaderEmptyProps

export type HeaderProps<Type extends HeaderVariantType> = CommonHeaderProps & HeaderVariant<Type>
