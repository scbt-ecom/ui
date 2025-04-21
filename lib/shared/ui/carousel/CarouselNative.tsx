import { useEffect, useRef, useState } from 'react'
import classNames from 'clsx'
import { motion } from 'framer-motion'

export interface CarouselNativeProps<Element> extends React.HTMLAttributes<HTMLDivElement> {
  items: Element[]
  renderComponent: (elementProps: Element) => React.JSX.Element
  columnGap?: number
}

export const CarouselNative = <Element,>({
  className,
  items,
  renderComponent,
  columnGap = 10,
  ...props
}: CarouselNativeProps<Element>) => {
  const [width, setWidth] = useState<number>(0)

  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current

    if (carousel) {
      setWidth(carousel.scrollWidth - carousel.offsetWidth)
    }
  }, [items])

  return (
    <div ref={containerRef} {...props} className='w-full max-w-[540px] overflow-hidden'>
      <motion.div
        ref={carouselRef}
        drag='x'
        dragElastic={0.15}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30, power: 0.33 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className='flex cursor-pointer flex-col gap-3'
      >
        <div className={classNames('inline-flex w-max flex-col', className)}>
          <div ref={listRef} className='flex' style={{ columnGap }}>
            {items.map((item, cellIndex) => (
              <motion.div key={`cell-${cellIndex}`} className='w-max'>
                {renderComponent(item)}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
