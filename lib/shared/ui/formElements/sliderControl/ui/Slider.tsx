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
              'ring-offset-background block h-4 w-4 cursor-pointer rounded-full bg-color-primary-default transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',

              'before:absolute before:left-1/2 before:top-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-color-transparent before:content-[""]',

              'hover:before:bg-color-primary-tr-hover',

              'focus:before:bg-color-primary-tr-pressed',
              classes?.sliderThumb
            )}
          />
        </SliderPrimitive.Root>
      </div>
    )
  }
)
SliderPrimitive.Slider.displayName = SliderPrimitive.Root.displayName
