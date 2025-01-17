import { CustomLink } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type SiteMapClasses = {
  siteMapLink?: string
  siteMapLinkIcon?: string
}

export interface SiteMapProps {
  classes?: SiteMapClasses
}

export const SiteMap = ({ classes }: SiteMapProps) => {
  return (
    <CustomLink
      intent='white'
      href='https://sovcombank.ru/site-map'
      target='_blank'
      aria-label='site-map'
      rel='noreferrer'
      classes={{
        link: cn('mobile:mt-6', classes?.siteMapLink),
        icon: classes?.siteMapLinkIcon
      }}
    >
      Карта сайта
    </CustomLink>
  )
}
