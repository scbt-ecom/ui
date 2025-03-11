import { memo, useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { Category } from '../../model'
import { Tab } from './tab'

type CategoryTabsProps = {
  categories: Category[]
}

const InnerComponent = ({ categories }: CategoryTabsProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const onActiveTabChange = useCallback((active: string | null) => {
    setActiveTab(active)
  }, [])

  return (
    <AnimatePresence mode='sync'>
      <div id='tabs' className='relative flex w-full items-center justify-between gap-x-4 border-b border-b-[rgba(234,237,241)]'>
        {categories.map((category) => (
          <Tab
            key={category.title}
            category={category}
            active={activeTab === category.title}
            onActiveTabChange={onActiveTabChange}
          />
        ))}
        <div className='ml-auto'>Личный кабинет</div>
      </div>
    </AnimatePresence>
  )
}

export const CategoryTabs = memo(InnerComponent) as typeof InnerComponent
