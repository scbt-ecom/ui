import { CustomLink } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TSiteMapClasses = {
  siteMapLink?: string
  siteMapLinkIcon?: string
}

export interface ISiteMapProps {
  classes?: TSiteMapClasses
}

export const SiteMap = ({ classes }: ISiteMapProps) => {
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
