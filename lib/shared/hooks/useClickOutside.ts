'use client'

import * as React from 'react'
import { isClient } from '../utils'

export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  React.useEffect(() => {
    if (isClient) {
      globalThis?.document?.addEventListener('mousedown', handleClickOutside)
      return () => {
        globalThis?.document.removeEventListener('mousedown', handleClickOutside)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, callback])
}

//
