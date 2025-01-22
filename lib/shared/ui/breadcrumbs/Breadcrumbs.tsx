import { type ReactElement } from 'react'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface BreadcrumbLink {
  label: string | ReactElement
  path: string
  isDisabled?: boolean
}
interface BreadcrumbLinkWithoutPath {
  label: string
  isDisabled?: boolean
}

export type LinksList = [...BreadcrumbLink[], BreadcrumbLinkWithoutPath]

export interface BreadcrumbsProps {
  linksList: LinksList
}

//TODO: Его должны переработать не использовать! DEPRECATED

export const Breadcrumbs = ({ linksList }: BreadcrumbsProps) => {
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
