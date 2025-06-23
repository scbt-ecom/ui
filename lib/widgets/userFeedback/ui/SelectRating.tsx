import type { UseRatingReturn } from '../model'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

const ratings = Array(5).fill(0)
const defaultTitle = 'Ваше мнение важно для нас!'
const defaultSubtitle = 'Пожалуйста, оцените работу сайта, чтобы мы сделали его еще удобнее'

export type SelectRatingClasses = {
  wrapper?: string
  textBlock?: string
  title?: string
  subtitle?: string
  ratingsWrapper?: string
  ratingBtn?: string
  ratingIcon?: string
}

export interface SelectRatingProps {
  title?: string
  subtitle?: string
  classes?: SelectRatingClasses
}

export const SelectRating = ({
  handleMouseLeave,
  hoveredRatings,
  selectedRating,
  handleSelectRating,
  handleMouseEnter,
  title = defaultTitle,
  subtitle = defaultSubtitle,
  classes
}: SelectRatingProps & UseRatingReturn) => {
  return (
    <div className={cn('flex flex-col items-center gap-4', classes?.wrapper)}>
      <div className={cn('flex flex-col gap-2 text-center', classes?.textBlock)}>
        <p className={cn('desk-body-medium-l', classes?.title)}>{title}</p>
        <p className={cn('desk-body-regular-l', classes?.subtitle)}>{subtitle}</p>
      </div>

      <div className={cn('flex items-center gap-2', classes?.ratingsWrapper)}>
        {ratings.map((_, index) => (
          <button
            key={index}
            className={cn('size-8', classes?.ratingBtn)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleSelectRating(index + 1)}
          >
            <Icon
              name='general/heart'
              className={cn('fill-[#b0c0d2] transition-colors duration-12', classes?.ratingIcon, {
                'fill-secondary-default': index < (hoveredRatings || selectedRating)
              })}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
