import { useState } from 'react'
import type { Category, SeoHeaderHelpers } from '../../model'
import { Menu } from './menu'
import { Icon } from '$/shared/ui'

type CategoriesMobileProps = {
  categories: Category[]
  helpers: SeoHeaderHelpers[]
  phone: string
}

export const CategoriesMobile = ({ categories, helpers, phone }: CategoriesMobileProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const onOpenToggle = () => setOpen(!open)

  return (
    <div className='relative flex w-full items-center justify-between border-b border-b-blue-grey-500 py-4'>
      <Icon name='brandLogos/logoMain' className='w-[130px]' />
      <button type='button' onClick={onOpenToggle} className='h-max w-max'>
        <Icon name={open ? 'general/close' : 'general/menu'} className='size-6 text-color-primary-default' />
      </button>
      {open && <Menu categories={categories} helpers={helpers} phone={phone} />}
    </div>
  )
}
