'use client'

import * as React from 'react'
import { cn } from '$/shared//utils'

export type TLigalClasses = {
  ligalRoot?: string
  ligalText?: string
  ligalButton?: string
}

interface ILigalProps {
  ligal: string | React.ReactElement
  classes?: TLigalClasses
}

export const Ligal = ({ ligal, classes }: ILigalProps) => {
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
        {ligal}
      </p>

      {isClamped && (
        <div
          tabIndex={0}
          role='button'
          onClick={() => setIsExpanded((prev) => !prev)}
          className={cn(
            'desk-body-regular-l w-max cursor-pointer font-medium text-color-footer transition-colors hover:text-color-white',
            classes?.ligalButton
          )}
        >
          Подробнее
        </div>
      )}
    </div>
  )
}
