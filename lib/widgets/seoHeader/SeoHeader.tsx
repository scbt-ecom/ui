import { ResponsiveContainer } from '../../shared/ui'
import { type Breadcrumb, Breadcrumbs } from '../breadcrumbs'
import { widgetIds } from '../model'
import type { Category, SeoHeaderHelpers } from './model'
import { CategoriesDesktop, CategoriesMobile } from './ui'
import { useDevice } from '$/shared/hooks'
import { capitalize, cn } from '$/shared/utils'

export type SeoHeaderClasses = {
  root?: string
}

export type SeoHeaderProps = {
  categories: Category[]
  helpers: SeoHeaderHelpers[]
  breadcrumbs: Breadcrumb[]
  phone: string
  classes?: SeoHeaderClasses
}

export const SeoHeader = ({ categories, helpers, phone, breadcrumbs, classes }: SeoHeaderProps) => {
  const { isMobile } = useDevice()

  return (
    <div id={widgetIds.seoHeader} data-test-id={widgetIds.seoHeader} className={cn('w-full bg-color-white', classes?.root)}>
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

export default SeoHeader
