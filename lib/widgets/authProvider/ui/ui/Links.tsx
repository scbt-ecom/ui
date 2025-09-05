import type { SingleAuthSchema } from '../../model/types'
import { CustomLink } from '$/shared/ui'
import { cn } from '$/shared/utils'

export type TLinksClasses = {
  linksWrapper?: string
  linksMainLink?: string
  linksSubLink?: string
}

interface ILinksProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Pick<SingleAuthSchema, 'subLink' | 'mainLink'> {
  isMobile: boolean
  classes?: TLinksClasses
}

export const Links = ({ mainLink, subLink, isMobile, classes, ...props }: ILinksProps) => {
  return (
    <div className={cn('flex flex-col', classes?.linksWrapper)}>
      <button
        {...props}
        type='button'
        className={cn(
          'before:content=[" "] desk-body-medium-l z-[4] text-color-dark before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2',
          classes?.linksMainLink
        )}
      >
        {isMobile ? mainLink.mobileTitle : mainLink.title}
      </button>

      {subLink?.text && subLink?.href && (
        <CustomLink
          intent='blue'
          withUnderline
          href={subLink?.href}
          target='_blank'
          rel='noreferrer'
          classes={{
            link: cn('w-max relative z-[6] p-0 desk-body-regular-m text-color-tetriary', classes?.linksSubLink)
          }}
        >
          {subLink?.text}
        </CustomLink>
      )}
    </div>
  )
}
