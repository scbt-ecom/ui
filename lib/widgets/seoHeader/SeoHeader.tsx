import { ResponsiveContainer } from '../../shared/ui'
import { Breadcrumbs } from '../breadcrumbs'
import { type Breadcrumb } from '../breadcrumbs/hooks'
import { widgetIds } from '../model'
import type { Category, SeoHeaderHelpers } from './model'
import { CategoriesDesktop, CategoriesMobile } from './ui'
import { useDevice } from '$/shared/hooks'
import { capitalize } from '$/shared/utils'

export type SeoHeaderProps = {
  categories: Category[]
  helpers: SeoHeaderHelpers[]
  breadcrumbs: Breadcrumb[]
  phone: string
}

export const SeoHeader = ({ categories, helpers, phone, breadcrumbs }: SeoHeaderProps) => {
  const { isMobile } = useDevice()

  return (
    <div id={widgetIds.seoHeader} data-test-id={widgetIds.seoHeader} className='w-full bg-color-white'>
      <ResponsiveContainer className='mx-auto w-full'>
        <CategoriesMobile categories={categories.map((category) => category.children).flat()} helpers={helpers} phone={phone} />
        <CategoriesDesktop categories={categories} helpers={helpers} phone={phone} />
        <Breadcrumbs
          ellipsis={isMobile ? 1 : undefined}
          breadcrumbs={breadcrumbs}
          matcher={(breadcrumb) => ({ label: capitalize(breadcrumb.label).split('-').join(' ') })}
        />
      </ResponsiveContainer>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default SeoHeader
