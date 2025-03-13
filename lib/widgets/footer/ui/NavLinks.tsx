import type { Details } from '../model/types'
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
  classes?: NavigationLinksClasses
  details: Details[]
}

export const NavLinks = ({ classes, details }: NavLinksProps) => {
  return (
    <div
      className={cn(
        'mt-6 grid grid-cols-1 gap-6 border-b border-blue-grey-500 pb-6 desktop:my-8 desktop:grid-cols-4 desktop:gap-10 desktop:pb-8',
        classes?.navRoot
      )}
    >
      {details?.map(({ column }) =>
        column?.map(({ groupLabel, links }) => (
          <div key={groupLabel} className={cn('flex flex-col gap-4', classes?.navGroup)}>
            <div className={cn('desk-body-medium-l text-color-white', classes?.navLabel)}>{groupLabel}</div>
            <div className={cn('flex flex-col gap-1', classes?.navLinks)}>
              {links?.map(({ path, label }) => (
                <CustomLink
                  key={label}
                  href={path}
                  aria-label={label}
                  intent='white'
                  classes={{
                    link: classes?.navLink,
                    icon: classes?.navLinkIcon
                  }}
                >
                  {label}
                </CustomLink>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
