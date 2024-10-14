import { cn } from '../utils'
import { Icon } from './icon/Icon'

export interface IBreadcrumbLink {
  label: string
  path: string
  isDisabled?: boolean
}
interface IBreadcrumbLinkWithoutPath {
  label: string
  isDisabled?: boolean
}

export type TLinksList = [...IBreadcrumbLink[], IBreadcrumbLinkWithoutPath]

export interface IBreadcrumbsProps {
  linksList: TLinksList
}

export const Breadcrumbs = ({ linksList }: IBreadcrumbsProps) => {
  return (
    <div aria-label='Breadcrumb' className='flex max-w-[840px] items-center gap-2'>
      {linksList.map((link) => (
        <>
          {'path' in link ? (
            <div
              className={cn(
                'flex items-center gap-1 rounded-sm border-2 border-solid border-transparent px-1 focus-within:border-primary-focus',
                { 'pointer-events-none !border-transparent': link?.isDisabled }
              )}
            >
              <a
                href={link.path}
                target='_blank'
                rel='noreferrer'
                className={cn(
                  'desk-body-regular-m text-color-primary-default outline-none hover:text-color-primary-hover focus:text-color-primary-default',
                  { '!text-color-disabled': link?.isDisabled }
                )}
              >
                {link.label}
              </a>
              <Icon
                name='arrows/arrowRight'
                className={cn('size-4 text-icon-primary-default', { '!text-icon-disabled': link?.isDisabled })}
              />
            </div>
          ) : (
            <div aria-current='page' className='desk-body-regular-m text-color-blue-grey-600'>
              {link.label}
            </div>
          )}
        </>
      ))}
    </div>
  )
}
