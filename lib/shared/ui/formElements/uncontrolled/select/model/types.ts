import { type ReactElement } from 'react'

export type SelectItemOption = {
  value: string | null
  label: string
  helperText?: string
  disabled?: boolean
  attachment?: {
    left?: ReactElement
    right?: ReactElement
  }
}
