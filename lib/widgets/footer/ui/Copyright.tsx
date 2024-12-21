import * as React from 'react'
import { cn } from '$/shared/utils'

export type TCopyrightClasses = {
  copyRight?: string
}

interface ICopyrightProps {
  text?: string | React.ReactElement
  classes?: TCopyrightClasses
}

export const Copyright = ({ text, classes }: ICopyrightProps) => {
  return <div className={cn('desk-body-regular-m text-color-footer', classes?.copyRight)}>{text}</div>
}
