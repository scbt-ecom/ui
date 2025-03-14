import { type ReactElement } from 'react'

export type StatusVariant = 'repeated' | 'approve' | 'reject' | 'error'

export type StatusConfig = {
  icon: {
    element: ReactElement
    bg: string
  }
  title: string | ReactElement
  description: string | ReactElement
  button: {
    text: string | ReactElement
  }
}
