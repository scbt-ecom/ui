import { AnimatePresence } from 'framer-motion'
import type { Category } from '../model'
import { SeoTabsProvider, Tab } from '$/widgets/seoHeader/ui/tab'

type CategoryTabsProps = {
  categories: Category[]
}

export const CategoryTabs = ({ categories }: CategoryTabsProps) => {
  return (
    <SeoTabsProvider>
      <AnimatePresence mode='sync'>
        <div id='tabs' className='relative flex w-full items-center justify-between gap-x-2 border-b border-b-blue-grey-500'>
          {categories.map((category) => (
            <Tab key={category.title} category={category} value={category.title!} />
          ))}
          <div className='ml-auto'>Личный кабинет</div>
        </div>
      </AnimatePresence>
    </SeoTabsProvider>
  )
}
