import { type IButtonProps, type IPhoneViewProps, type TBrandLogoVariant } from '$/shared/ui'

type TPageHeaderClasses = {
  header?: string
  container?: string
  wrapper?: string
  logo?: string
}

interface ICommonHeaderProps {
  logoPath?: string
  logoType?: TBrandLogoVariant
  classes?: TPageHeaderClasses
}

export interface IHeaderEmptyProps extends ICommonHeaderProps {
  variant: 'empty'
}

export interface IHeaderWithPhone extends ICommonHeaderProps {
  variant: 'withPhone'
  phoneProps: IPhoneViewProps
}

export interface IHeaderWithButton extends ICommonHeaderProps {
  variant: 'withButton'
  buttonProps?: IButtonProps
}
