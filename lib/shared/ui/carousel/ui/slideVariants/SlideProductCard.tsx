import { Button, type ButtonProps } from '../../../button'
import type { ImageProps } from '../../model'

export interface SlideProductCardProps {
  title?: string
  description?: string
  imgProps?: ImageProps
  buttonProps?: ButtonProps
}

export const SlideProductCard = ({ title, imgProps, description, buttonProps }: SlideProductCardProps) => {
  return (
    <div className='flex h-full w-full flex-col justify-between rounded-md bg-[#F3F4F7] p-6'>
      <div className='flex flex-col gap-2'>
        {title && <h3 className='desk-title-bold-s text-color-dark'>{title}</h3>}
        {description && <p className='desk-body-medium-l text-color-tetriary'>{description}</p>}
        {imgProps && imgProps?.src && <img className='w-full object-contain' src={imgProps?.src} alt={imgProps?.alt} />}
      </div>

      {buttonProps && (
        <Button size='sm' className='w-full' {...buttonProps}>
          {buttonProps?.children || 'Оформить заявку'}
        </Button>
      )}
    </div>
  )
}
