import * as React from 'react'
import { cn } from '$/shared/utils'

export type CopyrightClasses = {
  copyRight?: string
}

interface CopyrightProps {
  text?: string | React.ReactElement
  classes?: CopyrightClasses
}

export const Copyright = ({ text, classes }: CopyrightProps) => {
  return <div className={cn('desk-body-regular-m text-color-footer', classes?.copyRight)}>{text}</div>
}
