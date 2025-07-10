import type { Breadcrumb as BreadcrumbType } from './hooks'
import { cn } from '$/shared/utils'

type BreadcrumbProps = React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLDivElement> & {
  breadcrumb: BreadcrumbType
  isLast?: boolean
}

export const Breadcrumb = ({ breadcrumb, className, isLast, ...props }: BreadcrumbProps) => {
  return (
    <>
      {isLast ? (
        <p className={cn('desk-body-regular-m pointer-events-none text-color-tetriary', className)} {...props}>
          {breadcrumb.label}
        </p>
      ) : (
        <a href={breadcrumb.path} className={cn('desk-body-regular-m', className)} {...props}>
          {breadcrumb.label}
        </a>
      )}
    </>
  )
}
