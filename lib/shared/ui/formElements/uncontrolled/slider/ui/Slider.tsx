import Slider from 'rc-slider'
import { cn } from '$/shared/utils'

export type SliderClasses = {
  track?: string
  rail?: string
  handle?: string
  tracks?: string
}

export interface SliderInnerProps {
  classes?: SliderClasses
  onChange: (value: number) => void
  value: number
  disabled?: boolean
  min?: number
  max?: number
  step?: number | null
  marks?: number[]
}

export const SliderInner = ({ classes, min, max, value, step, marks, disabled, onChange, ...props }: SliderInnerProps) => {
  const { track, rail, handle } = classes || {}

  const handleChangeSlider = (value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value
    onChange(newValue)
  }

  const convertedMarks = marks?.reduce(
    (acc, value) => {
      acc[value] = <></>
      return acc
    },
    {} as Record<number, JSX.Element>
  )

  return (
    <div className='absolute bottom-0 w-full'>
      <Slider
        {...props}
        className='relative h-[4px]'
        value={value}
        marks={convertedMarks}
        disabled={disabled}
        min={min}
        max={max}
        onChange={handleChangeSlider}
        step={step}
        classNames={{
          track: cn('absolute bg-color-primary-default size-[3px]', track),
          rail: cn('absolute w-full size-[3px]', rail),
          handle: cn(
            'absolute top-1/2 !-translate-y-1/2 left-1/2 !-translate-x-1/2 ',

            'ring-offset-background block h-4 w-4 cursor-pointer rounded-full bg-color-primary-default transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',

            'before:absolute before:left-1/2 before:top-1/2 before:size-8 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-color-transparent before:content-[""]',

            'hover:before:bg-color-primary-tr-hover',

            'focus:before:bg-color-primary-tr-pressed',
            handle
          )
        }}
      />
    </div>
  )
}
