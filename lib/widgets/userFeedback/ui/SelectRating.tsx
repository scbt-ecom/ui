import type { UseRatingReturn } from '../model'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface SelectRatingProps {
  title?: string
  subtitle?: string
}

const ratings = Array(5).fill(0)
const defaultTitle = 'Ваше мнение важно для нас!'
const defaultSubtitle = 'Пожалуйста, оцените работу сайта, чтобы мы сделали его еще удобнее'

export const SelectRating = ({
  handleMouseLeave,
  hoveredRatings,
  selectedRating,
  handleSelectRating,
  handleMouseEnter,
  title = defaultTitle,
  subtitle = defaultSubtitle
}: SelectRatingProps & UseRatingReturn) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex flex-col gap-2 text-center'>
        <p className='desk-body-medium-l'>{title}</p>
        <p className='desk-body-regular-l'>{subtitle}</p>
      </div>

      <div className='flex items-center gap-2'>
        {ratings.map((_, index) => (
          <button
            key={index}
            className='size-8'
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleSelectRating(index + 1)}
          >
            <Icon
              name='general/heart'
              className={cn('fill-[#b0c0d2] transition-colors duration-12', {
                'fill-secondary-default': index < (hoveredRatings || selectedRating)
              })}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
