import type { ImageProps } from '../../model'
import { cn } from '$/shared/utils'

type SlideOnlyImageClasses = {
  root?: string
  image?: string
}

export interface SlideOnlyImageProps {
  imgProps?: ImageProps
  slideClasses?: SlideOnlyImageClasses
}

export const SlideOnlyImage = ({ imgProps, slideClasses }: SlideOnlyImageProps) => {
  return (
    <div className={cn('h-full w-full', slideClasses?.root)}>
      {imgProps && imgProps?.src && (
        <img className={cn('w-full object-contain', slideClasses?.image)} src={imgProps?.src} alt={imgProps?.alt} />
      )}
    </div>
  )
}
