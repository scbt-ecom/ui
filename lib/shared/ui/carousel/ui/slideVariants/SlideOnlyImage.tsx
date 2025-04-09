import type { ImageProps } from '../../model'

export interface SlideOnlyImageProps {
  imgProps?: ImageProps
}

export const SlideOnlyImage = ({ imgProps }: SlideOnlyImageProps) => {
  return (
    <div className='h-full w-full'>
      {imgProps && imgProps?.src && <img className='w-full object-contain' src={imgProps?.src} alt={imgProps?.alt} />}
    </div>
  )
}
