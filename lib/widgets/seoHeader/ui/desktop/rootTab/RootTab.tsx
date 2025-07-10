import type { Category } from '../../../model'
import { cn } from '$/shared/utils'

type RootTabProps = React.HTMLAttributes<HTMLDivElement> & {
  category: Category
  selectedCategory: Category
  onCurrentCategoryChange: (category: Category) => void
  onRootCategoryChange: (category: Category) => void
  active: boolean
}

export const RootTab = ({
  category,
  selectedCategory,
  onCurrentCategoryChange,
  onRootCategoryChange,
  active,
  ...props
}: RootTabProps) => {
  return (
    <div
      {...props}
      onClick={() => {
        onCurrentCategoryChange(category.children[0])
        onRootCategoryChange(category)
      }}
      className={cn('group/category relative cursor-default text-color-tetriary duration-100 hover:text-color-dark', {
        'text-color-dark': active
      })}
    >
      <span className='desk-body-regular-m'>{category.title}</span>
      {category.children.length > 1 && (
        <div
          className={cn(
            'absolute right-0 top-full z-10 flex w-max flex-col',
            'invisible bg-color-white opacity-0 shadow-sm group-hover/category:visible group-hover/category:opacity-100',
            'rounded-sm p-1'
          )}
        >
          {category.children.map((child) => (
            <span
              onClick={(event) => {
                event.stopPropagation()
                event.nativeEvent.stopPropagation()

                onRootCategoryChange(category)
                onCurrentCategoryChange(child)
              }}
              key={child.title}
              className={cn(
                'desk-body-regular-l rounded-sm px-3 py-3.5 text-color-dark duration-100 hover:bg-color-primary-tr-hover hover:text-color-dark',
                {
                  'text-color-primary-default': selectedCategory.title === child.title
                }
              )}
            >
              {child.title}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
