import { type Category } from '../../../model'
import { Accordion, Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

type MenuItemProps = {
  category: Category
}

export const MenuItem = ({ category }: MenuItemProps) => (
  <Accordion
    key={category.title}
    label={category.title ?? ''}
    icon={<Icon name='arrows/arrowRight' className='-rotate-90' />}
    classes={{
      root: 'w-full',
      header: {
        trigger: 'py-2 data-[open=false]:bg-color-white',
        label: 'desk-body-regular-m'
      },
      content: cn(
        'relative',
        'after:content-"" after:absolute after:w-[calc(100%-32px)]',
        'after:bottom-0 after:left-1/2 after:-translate-x-1/2',
        'after:h-[1px] after:bg-color-blue-grey-200'
      )
    }}
  >
    <div className='flex flex-col items-start justify-center gap-y-4'>
      {category.children.map((child) => {
        const isLink = Boolean(child.link)
        const Title = isLink ? 'a' : 'p'

        return (
          <ul key={child.title} className='w-full list-none p-0'>
            <Title
              href={isLink ? child.link?.href : undefined}
              className='mb-3 flex items-center gap-x-1 text-16 text-color-primary-default'
            >
              {child.title}
              <Icon name='arrows/arrowLink' />
            </Title>
            {child.children.map((innerChild) => (
              <li key={innerChild.title} className='inline-block w-full [&:not(:last-child)]:mb-3'>
                <a href={innerChild.link?.href} className='w-full'>
                  {innerChild.title}
                </a>
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  </Accordion>
)
