import { useEffect, useState } from 'react'
import type { Breadcrumb, UseBreadcrumbsOptions } from './types'
import { getUuid, TypeGuards } from '$/shared/utils'

export const useBreadcrumbs = ({ startsWith, endsWith, matcher, filter, rootEnabled = true }: UseBreadcrumbsOptions) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([])

  useEffect(() => {
    let pathnameParts = window.location.pathname.split('/').filter((part) => !TypeGuards.isStringEmpty(part))

    if (!TypeGuards.isUndefined(startsWith)) {
      if (TypeGuards.isString(startsWith)) {
        pathnameParts = pathnameParts.slice(pathnameParts.findIndex((part) => part === startsWith))
      } else {
        pathnameParts = pathnameParts.slice(startsWith)
      }
    }

    if (!TypeGuards.isUndefined(endsWith)) {
      if (TypeGuards.isString(endsWith)) {
        pathnameParts = pathnameParts.slice(0, pathnameParts.findIndex((part) => part === endsWith) + 1)
      } else {
        pathnameParts = pathnameParts.slice(0, endsWith + 1)
      }
    }

    let newBreadcrumbs: Breadcrumb[] = []
    let currentPath = ''

    if (rootEnabled) {
      const breadcrumb: Breadcrumb = {
        index: 0,
        id: getUuid(),
        path: '/',
        label: 'home'
      }

      newBreadcrumbs.push(breadcrumb)
    }

    pathnameParts.forEach((pathname, index) => {
      currentPath += `/${pathname}`

      const breadcrumb: Breadcrumb = {
        // while root enabled we have root page out of pathname parts
        index: rootEnabled ? index + 1 : index,
        id: getUuid(),
        path: currentPath,
        label: pathname
      }

      newBreadcrumbs.push(breadcrumb)
    })

    if (matcher) {
      newBreadcrumbs = newBreadcrumbs.map((breadcrumb) => {
        return {
          ...breadcrumb,
          ...matcher(breadcrumb)
        }
      })
    }

    setBreadcrumbs(filter ? newBreadcrumbs.filter(filter) : newBreadcrumbs)
  }, [endsWith, filter, matcher, rootEnabled, startsWith])

  return breadcrumbs
}
