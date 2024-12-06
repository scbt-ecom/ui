import { type ReactElement } from 'react'

export type Content = {
  title: string
  description: string | ReactElement
  img?: string
  mobileImg?: boolean
}
