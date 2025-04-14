import { Button, type ButtonProps } from '../../../button'
import type { ImageProps } from '../../model'
import { cn } from '$/shared/utils'

type SlideProductCardClasses = {
  root?: string
  wrapper?: string
  textWrapper?: string
  title?: string
  description?: string
  image?: string
  button?: string
}

export interface SlideProductCardProps {
  title?: string
  description?: string
  imgProps?: ImageProps
  buttonProps?: ButtonProps
  slideClasses?: SlideProductCardClasses
}

export const SlideProductCard = ({ title, imgProps, description, buttonProps, slideClasses }: SlideProductCardProps) => {
  return (
    <div className={cn('flex h-full w-full flex-col justify-between rounded-md bg-[#F3F4F7] p-6', slideClasses?.root)}>
      <div className={cn('flex flex-col gap-2', slideClasses?.wrapper)}>
        <div className={cn('flex flex-col gap-2', slideClasses?.textWrapper)}>
          {title && <h3 className={cn('desk-title-bold-s text-color-dark', slideClasses?.title)}>{title}</h3>}
          {description && (
            <p className={cn('desk-body-medium-l text-color-tetriary', slideClasses?.description)}>{description}</p>
          )}
        </div>
        {imgProps && imgProps?.src && (
          <img className={cn('w-full object-contain', slideClasses?.image)} src={imgProps?.src} alt={imgProps?.alt} />
        )}
      </div>

      {buttonProps && (
        <Button size='sm' className={cn('w-full', slideClasses?.button)} {...buttonProps}>
          {buttonProps?.children || 'Оформить заявку'}
        </Button>
      )}
    </div>
  )
}
