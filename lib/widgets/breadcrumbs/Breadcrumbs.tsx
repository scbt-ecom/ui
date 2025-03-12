import { useRef, useState } from 'react'
import { Breadcrumb } from './Breadcrumb'
import { useBreadcrumbs, type UseBreadcrumbsOptions } from './hooks'
import { useClickOutside, useDevice } from '$/shared/hooks'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type BreadcrumbsProps = UseBreadcrumbsOptions & {
  separator?: React.ReactElement | string
}

export const Breadcrumbs = ({ separator, ...props }: BreadcrumbsProps) => {
  const { isMobile } = useDevice()
  const [hiddenCrumbsOpen, setHiddenCrumbsOpen] = useState<boolean>(false)
  const onHiddenCrumbsToggle = () => setHiddenCrumbsOpen((prev) => !prev)

  const hiddenCrumbsRef = useRef<HTMLUListElement>(null)

  useClickOutside(hiddenCrumbsRef, () => setHiddenCrumbsOpen(false))

  const breadcrumbs = useBreadcrumbs(props)

  const first = breadcrumbs[0]
  const middle = breadcrumbs.slice(1, breadcrumbs.length - 1)
  const last = breadcrumbs[breadcrumbs.length - 1]

  return (
    <div className='flex max-w-[840px] flex-wrap items-center gap-x-2 gap-y-1 py-4 text-color-primary-default'>
      {isMobile ? (
        <>
          {breadcrumbs.length > 3 ? (
            // if we have more than 3 crumbs
            // render hidden breadcrumbs
            <>
              <Breadcrumb breadcrumb={first} />
              {separator ?? <Icon name='arrows/arrowRight' className='size-4' />}
              <div className='relative'>
                <button onClick={onHiddenCrumbsToggle}>...</button>
                <ul
                  ref={hiddenCrumbsRef}
                  className={cn(
                    'invisible absolute max-h-[264px] overflow-y-auto',
                    'w-[280px] rounded-sm bg-color-white',
                    'customScrollbar-y p-1 opacity-0 shadow-sm',
                    {
                      'visible opacity-100': hiddenCrumbsOpen
                    }
                  )}
                >
                  {middle?.map((breadcrumb) => (
                    <li key={breadcrumb.id}>
                      <Breadcrumb
                        breadcrumb={breadcrumb}
                        className={cn(
                          'desk-body-regular-l inline-block py-3',
                          'w-full rounded-sm bg-color-white px-2',
                          'text-color-dark hover:bg-color-primary-tr-hover'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              {separator ?? <Icon name='arrows/arrowRight' className='size-4' />}
              <Breadcrumb breadcrumb={last} className='pointer-events-none text-color-primary-disabled' />
            </>
          ) : (
            // otherwise render all breadcrumbs
            breadcrumbs.map((breadcrumb, index) => {
              const last = index === breadcrumbs.length - 1

              return (
                <div key={breadcrumb.id}>
                  <Breadcrumb
                    breadcrumb={breadcrumb}
                    className={last ? 'pointer-events-none text-color-primary-disabled' : undefined}
                  />
                  {(!last && separator) ?? <Icon name='arrows/arrowRight' className='size-4' />}
                </div>
              )
            })
          )}
        </>
      ) : (
        breadcrumbs.map((breadcrumb, index) => {
          const last = index === breadcrumbs.length - 1

          return (
            <div key={breadcrumb.id} className='flex items-center gap-x-2'>
              <Breadcrumb
                breadcrumb={breadcrumb}
                className={last ? 'pointer-events-none text-color-primary-disabled' : undefined}
              />
              {(!last && separator) ?? <Icon name='arrows/arrowRight' className='size-4' />}
            </div>
          )
        })
      )}
    </div>
  )
}
