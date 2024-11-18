import { type ReactElement } from 'react'
import { type IAdvantage } from '../Advantages'
import { type IBannerButtonsGroupClasses } from './ui/BannerButtonsGroup'
import { BannerWithSeparateImg } from './ui/banners'
import { BannerImageFull } from './ui/banners/BannerImageFull'
import { type IButtonProps } from '$/shared/ui'

interface IBannerClasses extends IBannerButtonsGroupClasses {
  section: string
  container: string
  wrapper: string
  content: string
  textBlock: string
  title: string
  subtitle: string
  imageContainer: string
  image: string
  advantages: string
}

export type TButtonsConfig = {
  primary: IButtonProps
  secondary?: IButtonProps
}

export interface IBannerProps {
  headTitle: string | ReactElement
  subtitle: string | ReactElement
  img?: string
  imgSets?: {
    large: string
    mob: string
    type: string
  }
  buttonsConfig: TButtonsConfig
  advantagesList?: IAdvantage[]
  classes?: Partial<IBannerClasses>
  bannerVariant?: 'sepatateImg' | 'fullImg'
}

export const Banner = ({ bannerVariant, ...props }: IBannerProps) => {
  switch (bannerVariant) {
    case 'sepatateImg':
      return <BannerWithSeparateImg {...props} />
    case 'fullImg':
      return <BannerImageFull {...props} />
    default:
      return <BannerWithSeparateImg {...props} />
  }
}
