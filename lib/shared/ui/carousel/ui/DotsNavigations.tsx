import type { DotsOptions } from '../model'
import { cn } from '$/shared/utils'

export type DotsNavigationsClasses = {
  dotsWrapper?: string
  dot?: string
}

interface DotsNavigationsProps extends Pick<DotsOptions, 'position'> {
  scrollSnaps: number[]
  onClickDot: (index: number) => void
  visibleIndex: number
  classes?: DotsNavigationsClasses
}

export const DotsNavigations = ({ scrollSnaps, visibleIndex, onClickDot, position, classes, ...props }: DotsNavigationsProps) => {
  return (
    <div
      className={cn(
        'mt-4 flex items-center gap-[6px]',
        {
          'justify-center': position === 'center',
          'justify-end': position === 'bot-right',
          'justify-start': position === 'bot-left'
        },
        classes?.dotsWrapper
      )}
    >
      {scrollSnaps.map((_, index) => (
        <button
          type='button'
          key={index}
          onClick={() => onClickDot(index)}
          className={cn(
            'size-3 cursor-pointer rounded-full border border-solid border-warm-grey-300',
            {
              'border-dark bg-color-dark': index === visibleIndex
            },
            classes?.dot
          )}
          {...props}
        ></button>
      ))}
    </div>
  )
}
