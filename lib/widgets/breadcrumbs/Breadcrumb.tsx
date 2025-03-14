import type { Breadcrumb as BreadcrumbType } from './hooks'
import { cn } from '$/shared/utils'

type BreadcrumbProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  breadcrumb: BreadcrumbType
}

export const Breadcrumb = ({ breadcrumb, className, ...props }: BreadcrumbProps) => (
  <a href={breadcrumb.path} className={cn('desk-body-regular-m', className)} {...props}>
    {breadcrumb.label}
  </a>
)
