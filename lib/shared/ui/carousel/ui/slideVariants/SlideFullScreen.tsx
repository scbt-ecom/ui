import { Heading } from '../../../heading'
import type { ImageProps } from '../../model'
import { cn } from '$/shared/utils'

type SlideFullScreenClasses = {
  root?: string
  wrapper?: string
  numeric?: string
  textWrapper?: string
  title?: string
  description?: string
  image?: string
}

export interface SlideFullScreenProps {
  slideIndex: number
  title?: string
  description?: string
  imgProps?: ImageProps
  slideClasses?: SlideFullScreenClasses
}

export const SlideFullScreen = ({ slideIndex, title, imgProps, description, slideClasses }: SlideFullScreenProps) => {
  return (
    <div className={cn('flex h-full w-full flex-col gap-6', slideClasses?.root)}>
      <div className={cn('flex items-center gap-4', slideClasses?.wrapper)}>
        <span
          className={cn(
            'desk-title-bold-l flex size-12 items-center justify-center rounded-sm bg-color-blue-grey-500 text-color-white',
            slideClasses?.numeric
          )}
        >
          {slideIndex + 1}
        </span>

        <div className={cn('flex flex-1 flex-col gap-2', slideClasses?.textWrapper)}>
          {title && (
            <Heading as='h4' className={cn(slideClasses?.title)}>
              {title}
            </Heading>
          )}
          {description && (
            <p className={cn('desk-body-regular-l text-color-secondary', slideClasses?.description)}>{description}</p>
          )}
        </div>
      </div>
      {imgProps && imgProps?.src && (
        <img
          className={cn('w-full object-contain mobile:h-[320px]', slideClasses?.image)}
          src={imgProps?.src}
          alt={imgProps?.alt}
        />
      )}
    </div>
  )
}
