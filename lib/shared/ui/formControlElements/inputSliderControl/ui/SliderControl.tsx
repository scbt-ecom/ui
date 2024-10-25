import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { type IInputSliderCommonProps } from '../InputSliderControl'
import { cn } from '$/shared/utils'

export interface ISliderControllProps extends IInputSliderCommonProps {
  classes?: TSliderControlClasses
  onValueChange?: (value: number[]) => void
  value: number[]
}

export type TSliderControlClasses = {
  sliderWrapper?: string
  sliderRoot?: string
  spanLeft?: string
  spanRight?: string
  sliderTrack?: string
  sliderThumb?: string
  sliderRange?: string
}

export const SliderControl = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, ISliderControllProps>(
  ({ min, max, classes, ...props }, ref) => {
    return (
      <div className={cn('absolute bottom-[-7px] w-full px-4', classes?.sliderWrapper)}>
        <SliderPrimitive.Root
          ref={ref}
          className={cn('relative flex h-4 w-full touch-none select-none items-center', classes?.sliderRoot)}
          min={min}
          max={max}
          {...props}
        >
          <SliderPrimitive.Track
            className={cn(
              'relative h-[2px] w-full grow overflow-hidden rounded-full bg-color-blue-grey-500',
              classes?.sliderTrack
            )}
          >
            <SliderPrimitive.Range className={cn('absolute h-full bg-color-primary-default', classes?.sliderRange)} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className='ring-offset-background block h-4 w-4 cursor-pointer rounded-full bg-color-primary-default transition-colors hover:before:absolute hover:before:left-1/2 hover:before:top-1/2 hover:before:h-8 hover:before:w-8 hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:rounded-full hover:before:bg-color-primary-tr-hover hover:before:content-[""] focus:outline-none focus:before:bg-color-primary-tr-pressed disabled:pointer-events-none disabled:opacity-50' />
        </SliderPrimitive.Root>
      </div>
    )
  }
)
SliderPrimitive.Slider.displayName = SliderPrimitive.Root.displayName
