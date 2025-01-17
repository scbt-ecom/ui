import type { FooterSocialLinks } from '../model/types'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type SocialLinksClasses = {
  socialRoot?: string
  socialLink?: string
  socialIcon?: string
}

interface ISocialLinksProps {
  socialsLinks: FooterSocialLinks[]
  classes?: SocialLinksClasses
}

export const SocialLinks = ({ socialsLinks, classes }: ISocialLinksProps) => {
  return (
    <div className={cn('mt-4 flex items-center gap-2 desktop:mt-6', classes?.socialRoot)}>
      {socialsLinks?.map(({ iconName, href }) => (
        <a
          className={cn('flex size-8 items-center justify-center rounded-full bg-[#52576a] p-2', classes?.socialLink)}
          href={href}
          key={href}
          aria-label={iconName.replace('social/', '')}
        >
          <Icon name={iconName} className={cn('h-full w-full text-icon-white', classes?.socialIcon)} />
        </a>
      ))}
    </div>
  )
}
