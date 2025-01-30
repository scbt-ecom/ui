'use client'

import { type ReactElement } from 'react'
import toast, { type Toast } from 'react-hot-toast'
import { CustomToast } from './ui/CustomToast'

export interface NotificationProps {
  duration?: number
  intent: 'info' | 'error'
  text: string | ReactElement
  customIcon?: ReactElement
  link?: string
  linkText?: string
  closure?: boolean
}

const renderToast = (props: NotificationProps) => {
  switch (props.intent) {
    case 'info':
      return toast.custom((toastOptions: Toast) => <CustomToast {...toastOptions} {...props} />, {
        duration: props.duration ?? 5000
      })
    case 'error':
      return toast.custom((toastOptions: Toast) => <CustomToast {...toastOptions} {...props} />, {
        duration: props.duration ?? 10000
      })
    default:
      return null
  }
}

export const Notification = (props: NotificationProps) => {
  return renderToast(props)
}
