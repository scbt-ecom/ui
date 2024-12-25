import type { ReactElement } from 'react'
import { Icon } from '$/shared/ui'

export type TBrandLogoVariant = 'main' | 'white' | 'gray' | 'black' | 'business' | 'insurance'
type TBrandLogosVariants = Record<TBrandLogoVariant, ReactElement>

export const brandLogos: TBrandLogosVariants = {
  main: <Icon name='brandLogos/logoMain' />,
  white: <Icon name='brandLogos/logoWhite' />,
  gray: <Icon name='brandLogos/logoGray' />,
  black: <Icon name='brandLogos/logoBlack' />,
  business: <Icon name='brandLogos/logoBusiness' />,
  insurance: <Icon name='brandLogos/logoInsurance' />
} as const
