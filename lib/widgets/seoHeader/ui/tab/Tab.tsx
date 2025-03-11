import { memo, useRef } from 'react'
import { motion } from 'framer-motion'
import type { Category } from '../../model'
import { TabContent } from './ui'
import { cn, TypeGuards } from '$/shared/utils'

type TabProps = {
  category: Category
  active: boolean
  onActiveTabChange: (active: string | null) => void
}

const InnerComponent = ({ category, active, onActiveTabChange }: TabProps) => {
  // const { activeTab, setActiveTab } = useTabContext()
  const triggerRef = useRef<HTMLDivElement>(null)
  const triggerClientRect = triggerRef.current?.getBoundingClientRect()

  const contentShouldRender = active && !TypeGuards.isArrayEmpty(category.children)

  const Button = !TypeGuards.isArrayEmpty(category.children) ? 'span' : 'a'

  return (
    <motion.div
      ref={triggerRef}
      className={cn(
        'relative flex cursor-default items-center justify-center py-4 text-color-dark',
        'after:content="" after:absolute after:bottom-0 after:left-1/2 after:h-[1px]',
        'after:w-0 after:-translate-x-1/2 after:bg-color-primary-default after:duration-100',
        {
          'text-color-primary-default': contentShouldRender,
          'after:w-full': contentShouldRender
        }
      )}
      onMouseEnter={() => onActiveTabChange(category.title!)}
      onMouseLeave={() => onActiveTabChange(null)}
      onFocus={() => onActiveTabChange(category.title!)}
    >
      <Button href={Button === 'a' ? category.link?.href : undefined} className='desk-body-regular-m outline-none'>
        {category.title}
      </Button>
      {contentShouldRender && (
        <TabContent
          categories={category.children}
          style={{
            top: triggerClientRect ? triggerClientRect.top + triggerClientRect.height : 0,
            width: window.innerWidth
          }}
        />
      )}
    </motion.div>
  )
}

export const Tab = memo(InnerComponent) as typeof InnerComponent
