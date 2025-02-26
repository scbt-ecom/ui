'use client'

import { useEffect, useState } from 'react'

type FloatingPosition = {
  top?: number
  left?: number
  width?: number
  transformOrigin?: string
}

export const useFloating = (
  trigger: React.RefObject<HTMLElement>,
  list: React.RefObject<HTMLElement>,
  offset: number
): FloatingPosition | null => {
  const [position, setPosition] = useState<FloatingPosition | null>(null)

  useEffect(() => {
    const updatePosition = () => {
      if (trigger.current && list.current) {
        const triggerRect = trigger.current.getBoundingClientRect()
        const listRect = list.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        let top: number
        let transformOrigin: string

        const spaceBelow = viewportHeight - triggerRect.bottom
        const fitsBelow = spaceBelow >= listRect.height + offset

        if (fitsBelow) {
          top = triggerRect.bottom + offset
          transformOrigin = 'top'
        } else {
          const spaceAbove = triggerRect.top
          const fitsAbove = spaceAbove >= listRect.height + offset

          if (fitsAbove) {
            top = triggerRect.top - listRect.height - offset * 2
            transformOrigin = 'bottom'
          } else {
            top = triggerRect.bottom + offset
            transformOrigin = 'top'
            list.current.style.maxHeight = `${spaceBelow - offset}px`
          }
        }

        setPosition({
          top,
          width: triggerRect.width,
          left: triggerRect.left,
          transformOrigin
        })
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('orientationchange', updatePosition)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('orientationchange', updatePosition)
    }
  }, [trigger.current, list.current, offset])

  return position
}
