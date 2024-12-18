import * as React from 'react'
import { cn } from '$/shared/utils'

export type TCopyrightClasses = {
  copyRight?: string
}

interface ICopyrightProps {
  text?: string | React.ReactElement
  classes?: TCopyrightClasses
  withSiteMap?: boolean
}

export const Copyright = ({ text, classes, withSiteMap }: ICopyrightProps) => {
  return (
    <div className={cn('desk-body-regular-m text-color-footer', { 'mt-6 desktop:mt-8': !withSiteMap }, classes?.copyRight)}>
      {text}
    </div>
  )
}
