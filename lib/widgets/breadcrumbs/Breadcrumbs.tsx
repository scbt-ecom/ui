import { useMemo, useRef, useState } from 'react'
import { Breadcrumb } from './Breadcrumb'
import { type Breadcrumb as BreadcrumbType, defaultBreadcrumbs, type UseBreadcrumbsOptions } from './hooks'
import { useClickOutside } from '$/shared/hooks'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type BreadcrumbsClasses = {
  root?: string
  separator?: string
  breadcrumb?: string
}

type BreadcrumbsProps = UseBreadcrumbsOptions & {
  /**
   * произвольный сепаратор, разделяющий элементы
   */
  separator?: React.ReactElement | string
  /**
   * указывает, сколько элементов отображать перед/после сужения
   */
  ellipsis?: number
  /**
   * дополнительные стили компонента
   */
  classes?: BreadcrumbsClasses
  /**
   * Массив хлебных крошек
   */
  breadcrumbs: BreadcrumbType[]
}

const renderBreadcrumbs = (
  breadcrumbs: BreadcrumbType[],
  separator: BreadcrumbsProps['separator'],
  classes?: BreadcrumbsClasses['breadcrumb'],
  lastIndex?: number
) => {
  return breadcrumbs.map((breadcrumb, index) => {
    const isLast = index === lastIndex

    return (
      <div key={breadcrumb.label} className='flex items-center gap-x-1'>
        <Breadcrumb
          isLast={isLast}
          breadcrumb={breadcrumb}
          className={cn(classes, {
            'text-color-blue-grey-600': breadcrumb.disabled
          })}
        />
        {index !== breadcrumbs.length - 1 && separator}
      </div>
    )
  })
}

export const Breadcrumbs = ({ separator, ellipsis, classes, breadcrumbs = defaultBreadcrumbs }: BreadcrumbsProps) => {
  const [hiddenCrumbsOpen, setHiddenCrumbsOpen] = useState<boolean>(false)

  const hiddenCrumbsRef = useRef<HTMLUListElement>(null)

  useClickOutside(hiddenCrumbsRef, () => setHiddenCrumbsOpen(false))

  // separated crumbs while ellipsis provided
  const { first, middle, last } = useMemo(() => {
    let first: BreadcrumbType[] = []
    let middle: BreadcrumbType[] = []
    let last: BreadcrumbType[] = []

    if (ellipsis) {
      first = breadcrumbs.slice(0, ellipsis)
      middle = breadcrumbs.slice(ellipsis, breadcrumbs.length - ellipsis)
      last = breadcrumbs.slice(breadcrumbs.length - ellipsis)
    }

    return { first, middle, last }
  }, [breadcrumbs, ellipsis])

  const separatedElement = separator ?? <Icon name='arrows/arrowRight' className={cn('size-4', classes?.separator)} />

  return (
    <div
      className={cn(
        'flex max-w-[840px] flex-wrap items-center',
        'gap-x-2 gap-y-1 py-4 text-color-primary-default',
        classes?.root
      )}
    >
      {ellipsis ? (
        // if ellipsis provided, render hidden breadcrumbs
        <>
          {breadcrumbs.length > ellipsis * 2 + 1 ? (
            // if we have more than ellipsis (visible crumbs) + available hidden crumbs
            // render hidden breadcrumbs
            <>
              {renderBreadcrumbs(first, separatedElement, classes?.breadcrumb)}
              {separatedElement}
              {middle.length > 0 && (
                <>
                  <div className='relative'>
                    <button onClick={() => setHiddenCrumbsOpen(true)}>...</button>
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
                      {middle.map((breadcrumb) => (
                        <li key={breadcrumb.label}>
                          <Breadcrumb
                            breadcrumb={breadcrumb}
                            className={cn(
                              'desk-body-regular-l inline-block py-3',
                              'w-full rounded-sm bg-color-white px-2',
                              'text-color-dark hover:bg-color-primary-tr-hover',
                              classes?.breadcrumb
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  {separatedElement}
                </>
              )}
              {renderBreadcrumbs(last, separatedElement, classes?.breadcrumb, last.length - 1)}
            </>
          ) : (
            // otherwise render all breadcrumbs
            renderBreadcrumbs(breadcrumbs, separatedElement, classes?.breadcrumb, breadcrumbs.length - 1)
          )}
        </>
      ) : (
        // if ellipsis doesn't provided render all breadcrumbs
        renderBreadcrumbs(breadcrumbs, separatedElement, classes?.breadcrumb, breadcrumbs.length - 1)
      )}
    </div>
  )
}
