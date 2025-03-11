import { currentCategoryAction, rootCategoryAction, useCategoryReducer } from './hooks'
import type { Category, SeoHeaderHelpers } from './model'
import { CategoryTabs, RootTab } from './ui'
import { Icon } from '$/shared/ui'
import { createPhoneNumber } from '$/shared/utils'

type SeoHeaderProps = {
  categories: Category[]
  helpers: SeoHeaderHelpers[]
  phone: string
}

export const SeoHeader = ({ categories, helpers, phone }: SeoHeaderProps) => {
  const [store, dispatch] = useCategoryReducer({ root: categories[0].children[0], current: categories[0].children[0] })

  return (
    <div className='mx-auto w-full max-w-[1440px]'>
      <div className='flex w-full items-center justify-between gap-x-4 border-b border-b-[rgba(234,237,241)] py-4'>
        <Icon name='brandLogos/logoMain' className='mr-auto w-[130px]' />
        {categories.map((category) => {
          const active = store.root.title === category.title

          return (
            <RootTab
              key={category.title}
              category={category}
              selectedCategory={store.current}
              onCurrentCategoryChange={(cat) => dispatch(currentCategoryAction(cat))}
              onRootCategoryChange={(cat) => dispatch(rootCategoryAction(cat))}
              active={active}
            />
          )
        })}
        <div className='h-3.5 w-[1px] rounded-sm bg-color-blue-grey-500' />
        {helpers.map((helper) => (
          <a
            key={helper.title}
            href={helper.link.href}
            className='desk-body-regular-m flex items-center gap-x-1 text-color-blue-grey-600 duration-100 hover:text-color-dark'
          >
            {helper.link.icon && <Icon name={helper.link.icon} className='size-4' />}
            {helper.title}
          </a>
        ))}
        <div className='h-3.5 w-[1px] rounded-sm bg-color-blue-grey-500' />
        <a
          href={`tel:${phone}`}
          className='desk-body-regular-m flex items-center gap-x-1 text-color-blue-grey-600 duration-100 hover:text-color-dark'
        >
          {createPhoneNumber(phone, 'x xxx xxx xx xx')}
        </a>
      </div>
      <CategoryTabs categories={store.current.children} />
    </div>
  )
}
