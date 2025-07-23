import { memo, useCallback, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CustomLink } from '../../../../shared/ui'
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

  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <AnimatePresence mode='sync'>
      <div
        ref={triggerRef}
        id='tabs'
        className='relative flex w-full items-center justify-between gap-x-4 border-b border-b-[rgba(234,237,241)]'
      >
        {categories.map((category) => (
          <Tab
            key={category.title}
            ref={triggerRef}
            category={category}
            active={activeTab === category.title}
            onActiveTabChange={onActiveTabChange}
          />
        ))}
        <CustomLink
          icon='general/loginFilled'
          href='https://halvacard.ru/lk2/'
          target='_blank'
          classes={{
            link: 'ml-auto cursor-pointer desk-body-regular-m gap-2 hover:no-underline'
          }}
          rel='noreferrer'
        >
          Войти
        </CustomLink>
      </div>
    </AnimatePresence>
  )
}

export const CategoryTabs = memo(InnerComponent) as typeof InnerComponent
