import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type FooterLogoClasses = {
  footerLogo?: string
  footerLogoIcon?: string
}

export interface FooterLogoProps {
  classes?: FooterLogoClasses
}

export const FooterLogo = ({ classes }: FooterLogoProps) => {
  return (
    <a
      aria-label='logo'
      href='https://sovcombank.ru/'
      className={cn('desktop:h-[32px] desktop:w-[194px] block h-[24px] w-[132px]', classes?.footerLogo)}
    >
      <Icon name='brandLogos/logoWhite' className={cn('size-full', classes?.footerLogoIcon)} />
    </a>
  )
}
