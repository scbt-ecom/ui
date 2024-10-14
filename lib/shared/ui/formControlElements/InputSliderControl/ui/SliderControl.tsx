import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { formatNumber, getMinMaxTextSlider } from '../helpers'
import { cn } from '$/shared/utils'

export type TSliderVariants = 'years' | 'credit'

export interface ISliderControl {
  min: number
  max: number
  variant: TSliderVariants
  step?: number
}

export const SliderControl = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & ISliderControl
>(({ min, max, variant, ...props }, ref) => {
  const [start, end] = getMinMaxTextSlider(variant, min, max)

  return (
    <div className='absolute bottom-[-7px] w-full px-4'>
      <SliderPrimitive.Root
        ref={ref}
        className={cn('relative flex h-4 w-full touch-none select-none items-center')}
        min={min}
        max={max}
        {...props}
      >
        <span className='desk-body-regular-m absolute bottom-[-30px] left-[-10px] text-color-tetriary'>{`${formatNumber(min)} ${start}`}</span>
        <span className='desk-body-regular-m absolute bottom-[-30px] right-[-10px] text-color-tetriary'>{`${formatNumber(max)} ${end}`}</span>
        <SliderPrimitive.Track className='relative h-[2px] w-full grow overflow-hidden rounded-full bg-color-blue-grey-500'>
          <SliderPrimitive.Range className='absolute h-full bg-color-primary-default' />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className='ring-offset-background block h-4 w-4 cursor-pointer rounded-full bg-color-primary-default transition-colors hover:before:absolute hover:before:left-1/2 hover:before:top-1/2 hover:before:h-8 hover:before:w-8 hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:rounded-full hover:before:bg-color-primary-tr-hover hover:before:content-[""] focus:outline-none focus:before:bg-color-primary-tr-pressed disabled:pointer-events-none disabled:opacity-50' />
      </SliderPrimitive.Root>
    </div>
  )
})
SliderPrimitive.Slider.displayName = SliderPrimitive.Root.displayName
