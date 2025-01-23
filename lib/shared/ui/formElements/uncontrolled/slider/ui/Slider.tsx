import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { type TSliderVariants } from '../model/types'
import { cn } from '$/shared/utils'

export type SliderClasses = {
  root?: string
  sliderRoot?: string
  sliderTrack?: string
  sliderThumb?: string
  sliderRange?: string
}

export interface SliderProps {
  classes?: SliderClasses
  onValueChange?: (value: number[]) => void
  value: number[]
  disabled?: boolean
  min?: number
  max?: number
  step?: number
  variant?: TSliderVariants
}

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ min, max, classes, disabled, onValueChange, value, step }, ref) => {
    const { root, sliderRoot, sliderTrack, sliderThumb, sliderRange } = classes || {}

    return (
      <div className={cn('absolute bottom-[-7px] w-full px-4', root)}>
        <SliderPrimitive.Root
          disabled={disabled}
          ref={ref}
          className={cn('relative flex h-4 w-full touch-none items-center select-none', sliderRoot)}
          min={min}
          max={max}
          onValueChange={onValueChange}
          value={value}
          step={step}
        >
          <SliderPrimitive.Track
            className={cn('bg-color-transparent relative h-[2px] w-full grow overflow-hidden rounded-full', sliderTrack)}
          >
            <SliderPrimitive.Range className={cn('bg-color-primary-default absolute h-full', sliderRange)} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            aria-label='slider-thumb'
            className={cn(
              'ring-offset-background bg-color-primary-default block h-4 w-4 cursor-pointer rounded-full transition-colors focus:outline-hidden disabled:pointer-events-none disabled:opacity-50',

              'before:bg-color-transparent before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:content-[""]',

              'hover:before:bg-color-primary-tr-hover',

              'focus:before:bg-color-primary-tr-pressed',
              sliderThumb
            )}
          />
        </SliderPrimitive.Root>
      </div>
    )
  }
)
SliderPrimitive.Slider.displayName = SliderPrimitive.Root.displayName
