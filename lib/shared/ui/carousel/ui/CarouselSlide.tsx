import { type CarouselSlideVariant, renderSlideVariant } from '../model'
import type { DiscriminatedUnion } from '$/shared/types'
import { cn } from '$/shared/utils'

export type CarouselSlideClasses = {
  root?: string
  slide?: string
}

export type CarouselSlideProps = {
  classes?: CarouselSlideClasses
}

export const CarouselSlide = ({ classes, ...props }: DiscriminatedUnion<'variant', CarouselSlideVariant>) => {
  return (
    <div className={cn(classes?.root)}>
      <div className={cn('flex translate-x-0 translate-y-0 transform-gpu select-none flex-col', classes?.slide)}>
        {renderSlideVariant(props)}
      </div>
    </div>
  )
}
