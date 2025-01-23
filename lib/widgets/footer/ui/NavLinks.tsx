import type { FooterNavLinks } from '../model/types'
import { CustomLink } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type NavigationLinksClasses = {
  navRoot?: string
  navGroup?: string
  navLabel?: string
  navLinks?: string
  navLink?: string
  navLinkIcon?: string
}

interface NavLinksProps {
  navigationLinks: FooterNavLinks[]
  classes?: NavigationLinksClasses
}

export const NavLinks = ({ navigationLinks, classes }: NavLinksProps) => {
  return (
    <div
      className={cn(
        'border-blue-grey-500 desktop:my-8 desktop:grid-cols-4 desktop:gap-10 desktop:pb-8 mt-6 grid grid-cols-1 gap-6 border-b pb-6',
        classes?.navRoot
      )}
    >
      {navigationLinks?.map(({ groupLabel, links }) => (
        <div key={groupLabel} className={cn('flex flex-col gap-4', classes?.navGroup)}>
          <div className={cn('desk-body-medium-l text-color-white', classes?.navLabel)}>{groupLabel}</div>
          <div className={cn('flex flex-col gap-1', classes?.navLinks)}>
            {links?.map(({ text, href }) => (
              <CustomLink
                key={text}
                href={href}
                aria-label={text}
                intent='white'
                classes={{
                  link: classes?.navLink,
                  icon: classes?.navLinkIcon
                }}
              >
                {text}
              </CustomLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
