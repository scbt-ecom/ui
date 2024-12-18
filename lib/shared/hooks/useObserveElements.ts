'use client'

import { useEffect, useState } from 'react'

export const useObserveElements = (ids: string[], options?: IntersectionObserverInit, initialState = false): boolean => {
  const [isVisible, setIsVisible] = useState(initialState)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleIds = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target.id)
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
