import type { ReactElement } from 'react'

export type ComboboxItemOption = {
  value: string | null
  label: string
  helperText?: string
  disabled?: boolean
  attachment?: {
    left?: ReactElement
    right?: ReactElement
  }
}
