import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { formatNumber, getMinMaxTextSlider } from '../helpers'
import { type TInputSliderProps } from '../model/types'
import { cn } from '$/shared/utils'

export const SliderControl = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & TInputSliderProps
>(({ className, min, max, variant, ...props }, ref) => {
  const [start, end] = getMinMaxTextSlider(variant, min, max)

  return (
    <div className='absolute bottom-[-7px] w-full px-4'>
      <SliderPrimitive.Root
        ref={ref}
        className={cn('relative h-4 flex w-full touch-none select-none items-center', className)}
        min={min}
        max={max}
        {...props}
      >
        <span className='absolute left-[-10px] bottom-[-30px] text-color-tetriary desk-body-regular-m'>{`${formatNumber(min)} ${start}`}</span>
        <span className='absolute right-[-10px] bottom-[-30px] text-color-tetriary desk-body-regular-m'>{`${formatNumber(max)} ${end}`}</span>
        <SliderPrimitive.Track className='relative h-[2px] w-full grow overflow-hidden rounded-full bg-color-blue-grey-500'>
          <SliderPrimitive.Range className='absolute h-full bg-color-primary-default' />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className='block h-4 w-4 rounded-full bg-color-primary-default hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:top-1/2 hover:before:left-1/2  hover:before:absolute hover:before:rounded-full hover:before:content-[""] hover:before:w-8 hover:before:h-8 hover:before:bg-color-primary-tr-hover ring-offset-background cursor-pointer transition-colors focus:outline-none focus:before:bg-color-primary-tr-pressed disabled:pointer-events-none disabled:opacity-50' />
      </SliderPrimitive.Root>
    </div>
  )
})
SliderPrimitive.Slider.displayName = SliderPrimitive.Root.displayName
