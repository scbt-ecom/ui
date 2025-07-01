'use client'

import { useEffect, useState } from 'react'
import type { AllowedWidgets } from '$/widgets'

export type UseObserverWidgets = {
  ids: AllowedWidgets[]
  options?: IntersectionObserverInit
  initialState?: boolean
}

export const useObserverWidgets = ({ ids, options, initialState = false }: UseObserverWidgets) => {
  const [isVisible, setIsVisible] = useState(initialState)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleIds = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target.id) as AllowedWidgets[]
      setIsVisible(visibleIds.some((id) => ids.includes(id)))
    }, options)

    const elementsMap = new Map<string, HTMLElement | null>()

    ids.forEach((id) => {
      const element = document.getElementById(id)
      elementsMap.set(id, element)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [ids, options])

  return isVisible
}
