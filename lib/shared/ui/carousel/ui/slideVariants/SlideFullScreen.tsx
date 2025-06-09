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
  image?: ImageProps
  slideClasses?: SlideFullScreenClasses
}

export const SlideFullScreen = ({ slideIndex, title, image, description, slideClasses }: SlideFullScreenProps) => {
  return (
    <div className={cn('flex h-full w-full flex-col gap-6', slideClasses?.root)}>
      <div className={cn('flex items-center gap-4', slideClasses?.wrapper)}>
        <span
          className={cn(
            'mob-headline-bold-s flex size-10 items-center justify-center rounded-sm bg-color-blue-grey-500 text-color-white desktop:desk-title-bold-l desktop:size-12',
            slideClasses?.numeric
          )}
        >
          {slideIndex + 1}
        </span>

        <div className={cn('flex flex-1 flex-col gap-2', slideClasses?.textWrapper)}>
          {title && (
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className={cn(slideClasses?.title, 'mob-title-bold-m desktop:desk-title-bold-s')}
            />
          )}
          {description && (
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className={cn('desk-body-regular-l text-color-secondary', slideClasses?.description)}
            />
          )}
        </div>
      </div>
      {image && image?.src && (
        <div className={cn('mobile:h-[320px] mobile:w-[328px]')}>
          <img className={cn('w-full object-cover mobile:h-[320px]', slideClasses?.image)} src={image?.src} alt={image?.alt} />
        </div>
      )}
    </div>
  )
}
