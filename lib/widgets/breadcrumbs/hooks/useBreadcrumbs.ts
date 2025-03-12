import { useEffect, useState } from 'react'
import type { Breadcrumb, UseBreadcrumbsOptions } from './types'
import { getUuid, TypeGuards } from '$/shared/utils'

const defaultOptions: Required<Omit<UseBreadcrumbsOptions, 'endsWith' | 'startsWith'>> = {
  matcher: (breadcrumb) => breadcrumb.label,
  filter: () => true
}

export const useBreadcrumbs = ({
  startsWith,
  endsWith,
  matcher = defaultOptions.matcher,
  filter = defaultOptions.filter
}: UseBreadcrumbsOptions) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([])

  useEffect(() => {
    let pathnameParts = window.location.pathname.split('/').filter((part) => !TypeGuards.isStringEmpty(part))

    if (startsWith) {
      if (TypeGuards.isString(startsWith)) {
        pathnameParts = pathnameParts.slice(pathnameParts.findIndex((part) => part === startsWith))
      } else {
        pathnameParts = pathnameParts.slice(startsWith)
      }
    }

    if (endsWith) {
      if (TypeGuards.isString(endsWith)) {
        pathnameParts = pathnameParts.slice(0, pathnameParts.findIndex((part) => part === endsWith) + 1)
      } else {
        pathnameParts = pathnameParts.slice(0, endsWith + 1)
      }
    }

    const newBreadcrumbs: Breadcrumb[] = []
    let currentPath = ''

    pathnameParts.forEach((pathname, index) => {
      currentPath += `/${pathname}`

      const breadcrumb: Breadcrumb = {
        index,
        id: getUuid(),
        path: currentPath,
        label: pathname
      }

      newBreadcrumbs.push(breadcrumb)
    })

    newBreadcrumbs.forEach((breadcrumb) => {
      breadcrumb.label = matcher(breadcrumb)
    })

    setBreadcrumbs(newBreadcrumbs.filter(filter))
  }, [endsWith, filter, matcher, startsWith])

  return breadcrumbs
}
