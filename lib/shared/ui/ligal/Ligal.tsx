'use client'

import * as React from 'react'
import { cn } from '$/shared/utils'

type LigalClasses = {
  ligalRoot?: string
  ligalText?: string
  ligalButton?: string
}

export interface LigalProps {
  text: string | React.ReactElement
  classes?: LigalClasses
}

export const Ligal = ({ text, classes }: LigalProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isClamped, setIsClamped] = React.useState(false)
  const ligalRef = React.useRef<HTMLParagraphElement | null>(null)

  React.useEffect(() => {
    const element = ligalRef.current
    if (element) {
      setIsClamped(element.scrollHeight > element.clientHeight)
    }
  }, [])

  return (
    <div className={cn('mt-8 flex flex-col gap-4', classes?.ligalRoot)}>
      <p
        ref={ligalRef}
        className={cn('desk-body-regular-m text-color-footer', { 'line-clamp-3': !isExpanded }, classes?.ligalText)}
      >
        {text}
      </p>

      {isClamped && (
        <div
          tabIndex={0}
          role='button'
          onClick={() => setIsExpanded((prev) => !prev)}
          className={cn(
            'desk-body-regular-l text-color-footer hover:text-color-white w-max cursor-pointer font-medium transition-colors',
            classes?.ligalButton
          )}
        >
          Подробнее
        </div>
      )}
    </div>
  )
}
