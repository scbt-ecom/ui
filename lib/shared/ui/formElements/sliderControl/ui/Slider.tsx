import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { type ISliderCommonProps } from '../SliderControl'
import { cn } from '$/shared/utils'

export type TSliderClasses = {
  sliderWrapper?: string
  sliderRoot?: string
  spanLeft?: string
  spanRight?: string
  sliderTrack?: string
  sliderThumb?: string
  sliderRange?: string
}

export interface ISliderProps extends ISliderCommonProps {
  classes?: TSliderClasses
  onValueChange?: (value: number[]) => void
  value: number[]
}

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, ISliderProps>(
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
            className={cn('relative h-[2px] w-full grow overflow-hidden rounded-full bg-color-transparent', classes?.sliderTrack)}
          >
            <SliderPrimitive.Range className={cn('absolute h-full bg-color-primary-default', classes?.sliderRange)} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            aria-label='slider-thumb'
            className={cn(
              'ring-offset-background block h-4 w-4 cursor-pointer rounded-full bg-color-primary-default transition-colors disabled:pointer-events-none disabled:opacity-50',
              'hover:before:absolute hover:before:left-1/2 hover:before:top-1/2 hover:before:h-8 hover:before:w-8 hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:rounded-full hover:before:bg-color-primary-tr-hover hover:before:content-[""]',
              'focus:outline-none focus:before:absolute focus:before:left-1/2 focus:before:top-1/2 focus:before:h-8 focus:before:w-8 focus:before:-translate-x-1/2 focus:before:-translate-y-1/2 focus:before:rounded-full focus:before:bg-color-primary-tr-pressed focus:before:content-[""]',
              classes?.sliderThumb
            )}
          />
        </SliderPrimitive.Root>
      </div>
    )
  }
)
SliderPrimitive.Slider.displayName = SliderPrimitive.Root.displayName
