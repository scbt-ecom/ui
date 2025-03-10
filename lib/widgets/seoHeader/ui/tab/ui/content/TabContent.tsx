import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import type { Category } from '../../../../model'
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
      className='fixed bg-color-white'
    >
      <div className='mx-auto flex w-[1140px] gap-x-[56px] py-10'>
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
                    <a href={child.link?.href} className='w-full text-16'>
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
    document.body
  )
}
