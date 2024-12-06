import type { IFooterNavLinks } from '../model/types'
import { cn } from '$/shared/utils'

export type TNavigationLinksClasses = {
  navRoot: string
  navGroup: string
  navLabel: string
  navWrapper: string
  navLink: string
}

interface INavLinksProps {
  navigationLinks: IFooterNavLinks[]
  classes?: Partial<TNavigationLinksClasses>
}

export const NavLinks = ({ navigationLinks, classes }: INavLinksProps) => {
  return (
    <div className={cn('grid grid-cols-4 gap-10 border-y border-blue-grey-500 py-8 pt-8', classes?.navRoot)}>
      {navigationLinks?.map(({ groupLabel, links }) => (
        <div key={groupLabel} className={cn('flex flex-col gap-4', classes?.navGroup)}>
          <div className={cn('desk-body-regular-m font-medium text-color-white', classes?.navLabel)}>{groupLabel}</div>
          <div className={cn('flex flex-col gap-2', classes?.navWrapper)}>
            {links?.map(({ text, href }) => (
              <a
                key={text}
                href={href}
                className={cn(
                  'desk-body-regular-m cursor-pointer text-color-white transition-colors hover:text-color-footer',
                  classes?.navLink
                )}
                aria-label={text}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
