import { Breadcrumbs } from '../breadcrumbs'
import { widgetIds } from '../model'
import type { Category, SeoHeaderHelpers } from './model'
import { CategoriesDesktop, CategoriesMobile } from './ui'
import { useDevice } from '$/shared/hooks'
import { capitalize } from '$/shared/utils'

export type SeoHeaderProps = {
  categories: Category[]
  helpers: SeoHeaderHelpers[]
  phone: string
}

export const SeoHeader = ({ categories, helpers, phone }: SeoHeaderProps) => {
  const { isMobile } = useDevice()

  return (
    <div id={widgetIds.seoHeader} data-test-id={widgetIds.seoHeader} className='mx-auto w-full max-w-[1440px]'>
      {isMobile ? (
        <CategoriesMobile categories={categories.map((category) => category.children).flat()} helpers={helpers} phone={phone} />
      ) : (
        <CategoriesDesktop categories={categories} helpers={helpers} phone={phone} />
      )}
      <Breadcrumbs
        ellipsis={isMobile ? 1 : undefined}
        matcher={(breadcrumb) => ({ label: capitalize(breadcrumb.label).split('-').join(' ') })}
      />
    </div>
  )
}
