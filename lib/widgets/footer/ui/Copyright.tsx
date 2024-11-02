import * as React from 'react'
import { cn } from '$/shared/utils'

export type TCopyrightClasses = {
  text: string
}

interface ICopyrightProps {
  text?: string | React.ReactElement
  classes?: Partial<TCopyrightClasses>
}

export const Copyright = ({ text, classes }: ICopyrightProps) => {
  return <div className={cn('desk-body-regular-m text-color-footer', classes?.text)}>{text}</div>
}
