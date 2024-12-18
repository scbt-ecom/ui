import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TFooterLogoClasses = {
  footerLogo?: string
  footerLogoIcon?: string
}

export interface IFooterLogoProps {
  classes?: TFooterLogoClasses
}

export const FooterLogo = ({ classes }: IFooterLogoProps) => {
  return (
    <a
      aria-label='logo'
      href='https://sovcombank.ru/'
      className={cn('block h-[24px] w-[132px] desktop:h-[32px] desktop:w-[194px]', classes?.footerLogo)}
    >
      <Icon name='brandLogos/logoWhite' className={cn('size-full', classes?.footerLogoIcon)} />
    </a>
  )
}
