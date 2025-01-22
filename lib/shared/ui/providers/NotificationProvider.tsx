'use client'

import { useEffect } from 'react'
import toast, { Toaster, useToasterStore } from 'react-hot-toast'

export interface NotificationProviderProps {
  maxToastViewLimit?: number
  toastDuration?: number
}

export const NotificationProvider = ({ maxToastViewLimit = 2, toastDuration = 5000 }: NotificationProviderProps) => {
  const { toasts } = useToasterStore()

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= maxToastViewLimit)
      .forEach((t) => toast.dismiss(t.id))
  }, [maxToastViewLimit, toasts])

  return (
    <Toaster
      position='top-center'
      toastOptions={{
        duration: toastDuration
      }}
    />
  )
}
