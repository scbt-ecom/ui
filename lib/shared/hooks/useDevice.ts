'use client'
import { useCallback, useSyncExternalStore } from 'react'

const getServerSnapshot = () => false

export const useDevice = () => {
  const isMobileQuery = '(max-width: 1187px)'
  const isDesktopQuery = '(min-width: 1188px)'

  const subscribeMobile = useCallback(
    (callback: () => void) => {
      const matchMedia = globalThis.matchMedia(isMobileQuery)
      matchMedia.addEventListener('change', callback)
      return () => {
        matchMedia.removeEventListener('change', callback)
      }
    },
    [isMobileQuery]
  )

  const subscribeDesktop = useCallback(
    (callback: () => void) => {
      const matchMedia = globalThis.matchMedia(isDesktopQuery)
      matchMedia.addEventListener('change', callback)
      return () => {
        matchMedia.removeEventListener('change', callback)
      }
    },
    [isDesktopQuery]
  )

  const getSnapshotMobile = () => globalThis.matchMedia(isMobileQuery).matches
  const getSnapshotDesktop = () => globalThis.matchMedia(isDesktopQuery).matches

  return {
    isMobile: useSyncExternalStore(subscribeMobile, getSnapshotMobile, getServerSnapshot),
    isDesktop: useSyncExternalStore(subscribeDesktop, getSnapshotDesktop, getServerSnapshot)
  }
}
