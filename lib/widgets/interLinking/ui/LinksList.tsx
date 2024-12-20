import type { TColumnsLinks } from '../model/types'
import { CustomLink } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TLinksListClasses = {
  linksWrapper?: string
  linkText?: string
  linkIcon?: string
}

export interface ILinksListProps {
  links: TColumnsLinks
  classes?: TLinksListClasses
}

export const LinksList = ({ links, classes }: ILinksListProps) => {
  return (
    <nav className={cn('flex flex-col gap-1', classes?.linksWrapper)}>
      {links?.map(({ path, label }) => (
        <CustomLink
          classes={{
            link: cn('w-max', classes?.linkText),
            icon: cn(classes?.linkIcon)
          }}
          key={path}
          href={path}
        >
          {label}
        </CustomLink>
      ))}
    </nav>
  )
}
