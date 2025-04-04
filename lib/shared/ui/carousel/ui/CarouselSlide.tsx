import { Button } from '../../button'
import Card from '../image.png'
import type { CarouselSlideProps } from '../model'

export const CarouselSlide = ({ title, description }: CarouselSlideProps) => {
  return (
    <div className=''>
      <div className='flex min-h-[420px] translate-x-0 translate-y-0 transform-gpu flex-col rounded-sm bg-color-blue-grey-300 p-4 mobile:w-[360px] desktop:w-[280px]'>
        <div className='flex flex-1 flex-shrink select-none flex-col gap-2 rounded-md'>
          <h3 className='desk-title-bold-s'>{title}</h3>
          <img src={Card} alt='card' />
          <p className='desk-body-medium-l text-color-tetriary'>{description}</p>
        </div>

        <Button size='sm' className='w-full'>
          Оформить заявку
        </Button>
      </div>
    </div>
  )
}
