import { type SlideVariants, slideVariantsMap } from '../model'
import { cn } from '$/shared/utils'

export type CarouselSlideClasses = {
  root?: string
  card?: string
}

export type CarouselSlideProps = {
  variant: SlideVariants
  classes?: CarouselSlideClasses
}

export const CarouselSlide = ({ variant, classes, ...props }: CarouselSlideProps) => {
  const SlideVariant = slideVariantsMap[variant]

  if (!SlideVariant) return <p>Такого слайда не существует</p>

  return (
    <div className={cn(classes?.root)}>
      <div className={cn('flex translate-x-0 translate-y-0 transform-gpu select-none flex-col', classes?.card)}>
        <SlideVariant {...props} />
      </div>
    </div>
  )
}
