import type { Link } from '../model/types'
import { CustomLink } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type LinksListClasses = {
  linksWrapper?: string
  linkText?: string
  linkIcon?: string
}

export interface LinksListProps {
  links: Link[]
  classes?: LinksListClasses
}

export const LinksList = ({ links, classes }: LinksListProps) => {
  return (
    <nav className={cn('flex flex-col gap-1', classes?.linksWrapper)}>
      {links?.map(({ path, label, ...rest }) => (
        <CustomLink
          classes={{
            link: cn('w-max', classes?.linkText),
            icon: cn(classes?.linkIcon)
          }}
          intent='dark'
          key={path}
          href={path}
          {...rest}
        >
          {label}
        </CustomLink>
      ))}
    </nav>
  )
}
