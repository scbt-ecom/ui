import { type ReactElement } from 'react'
import { type routes } from './constants'

export type Routes = {
  base: {
    home: string
    verify: string
  }
  fallbacks: {
    success: string
    repeated: string
    reject: string
    technical: string
  }
}

export type DeepUnionOfValues<T> = T extends object ? { [Key in keyof T]: DeepUnionOfValues<T[Key]> }[keyof T] : T

export type RoutesPath = DeepUnionOfValues<typeof routes>

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
