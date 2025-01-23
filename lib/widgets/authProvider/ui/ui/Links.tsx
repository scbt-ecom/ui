import type { SingleAuthSchema } from '../../model/types'
import { CustomLink } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TLinksClasses = {
  linksWrapper?: string
  linksMainLink?: string
  linksSubLink?: string
}

interface ILinksProps extends Pick<SingleAuthSchema, 'subLink' | 'mainLink'> {
  isMobile: boolean
  classes?: TLinksClasses
}

export const Links = ({ mainLink, subLink, isMobile, classes }: ILinksProps) => {
  return (
    <div className={cn('flex flex-col', classes?.linksWrapper)}>
      <a
        href={mainLink.href}
        target='_blank'
        rel='noreferrer'
        className={cn(
          'before:content=[" "] desk-body-medium-l text-color-dark z-4 before:absolute before:top-1/2 before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2',
          classes?.linksMainLink
        )}
      >
        {isMobile ? mainLink.mobileTitle : mainLink.title}
      </a>

      {subLink?.text && subLink?.href && (
        <CustomLink
          intent='blue'
          withUnderline
          href={subLink?.href}
          target='_blank'
          rel='noreferrer'
          classes={{
            link: cn('w-max relative z-6 p-0 desk-body-regular-m text-color-tetriary', classes?.linksSubLink)
          }}
        >
          {subLink?.text}
        </CustomLink>
      )}
    </div>
  )
}
