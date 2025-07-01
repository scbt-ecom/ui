import { memo, useEffect, useState } from 'react'
import { useObserverWidgets } from '$/shared/hooks'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export const FeedbackTrigger = memo(() => {
  const isObserved = useObserverWidgets({ ids: ['banner'] })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        'invisible flex size-16 items-center justify-center rounded-full bg-color-secondary-default opacity-0 transition-all hover:bg-color-secondary-hover',
        { 'opacity-1 visible': isVisible && !isObserved }
      )}
    >
      <Icon name='general/heart' className='size-7 fill-transparent stroke-white stroke-[3px]' />
    </div>
  )
})
