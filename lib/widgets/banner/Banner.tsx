import { type ReactElement } from 'react'
import { type IAdvantage, type IAdvantageClasses } from '../Advantages'
import { type IBannerButtonsGroupClasses } from './ui/BannerButtonsGroup'
import { BannerWithSeparateImg } from './ui/banners'
import { BannerImageFull } from './ui/banners'
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
  advantageContainer: string
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
    type?: string
  }
  buttonsConfig: TButtonsConfig
  advantagesList?: IAdvantage[]
  classes?: Partial<IBannerClasses> & Partial<IAdvantageClasses>
  bannerVariant?: 'separateImg' | 'fullImg'
}

export const Banner = ({ bannerVariant, ...props }: IBannerProps) => {
  switch (bannerVariant) {
    case 'separateImg':
      return <BannerWithSeparateImg {...props} />
    case 'fullImg':
      return <BannerImageFull {...props} />
    default:
      return <BannerWithSeparateImg {...props} />
  }
}
