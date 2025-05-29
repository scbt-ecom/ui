import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Category, SeoHeaderHelpers } from '../../model'
import { Menu } from './menu'
import { Icon } from '$/shared/ui'

type CategoriesMobileProps = {
  categories: Category[]
  helpers: SeoHeaderHelpers[]
  phone: string
}

export const CategoriesMobile = ({ categories, helpers, phone }: CategoriesMobileProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const containerClientRect = containerRef.current?.getBoundingClientRect()

  const [open, setOpen] = useState<boolean>(false)

  const onOpenToggle = () => setOpen(!open)

  return (
    <div
      ref={containerRef}
      className='relative flex w-full items-center justify-between border-b border-b-blue-grey-500 py-4 desktop:hidden'
    >
      <Icon name='brandLogos/logoMain' className='w-[130px]' />
      <button type='button' onClick={onOpenToggle} className='h-max w-max'>
        <Icon name={open ? 'general/close' : 'general/menu'} className='size-6 text-color-primary-default' />
      </button>

      {open &&
        createPortal(
          <Menu
            categories={categories}
            helpers={helpers}
            phone={phone}
            style={{ top: containerClientRect ? containerClientRect.top + containerClientRect.height : 0 }}
          />,
          /**
           * Нужно для preview, чтобы категории рендерились в iframe
           */
          document.body.querySelector<HTMLIFrameElement>('#modal-preview')?.contentDocument?.body ?? document.body
        )}
    </div>
  )
}
