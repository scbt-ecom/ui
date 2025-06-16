import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import type { Category } from '../../../../../model'
import { Icon } from '$/shared/ui'

type TabContentProps = React.ComponentProps<typeof motion.div> & {
  categories: Category[]
}

export const TabContent = ({ categories, ...props }: TabContentProps) => {
  return createPortal(
    <motion.div
      {...props}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='absolute z-20 w-full bg-color-white after:absolute after:left-1/2 after:top-[-1px] after:h-[1px] after:w-full after:max-w-[636px] after:-translate-x-1/2 after:bg-color-blue-grey-200 after:content-[""] after:desktop:max-w-[1140px]'
    >
      <div className='mx-auto flex w-full max-w-[1140px] gap-x-[56px] py-10'>
        {categories.map((category) => {
          const CategoryTitle = category.link ? 'a' : 'p'

          return (
            <div key={category.title} className='flex flex-col gap-y-6'>
              {category.title && (
                <CategoryTitle
                  href={category.link?.href ?? undefined}
                  className='flex items-center gap-x-1 text-16 uppercase text-color-primary-default'
                >
                  {category.title}

                  <Icon name='arrows/arrowLink' className='size-6' />
                </CategoryTitle>
              )}
              <ul className='w-[328px]'>
                {category.children.map((child) => (
                  <li key={child.title} className='w-full [&:not(:last-child)]:mb-4'>
                    <a href={child.link?.href} target={child.link?.target} className='w-full text-16'>
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </motion.div>,
    /**
     * Нужно для preview, чтобы категории рендерились в iframe
     */
    document.body.querySelector<HTMLIFrameElement>('#modal-preview')?.contentDocument?.body ?? document.body
  )
}
