import { cn } from '$/shared/utils'

interface DotsNavigationsProps {
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
  selectedIndex: number
}

export const DotsNavigations = ({ scrollSnaps, selectedIndex, onDotButtonClick, ...props }: DotsNavigationsProps) => {
  return (
    <div className='mt-4 flex items-center gap-[6px]'>
      {scrollSnaps.map((_, index) => (
        <button
          type='button'
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={cn('size-3 cursor-pointer rounded-full border border-solid border-warm-grey-300', {
            'border-dark bg-color-dark': index === selectedIndex
          })}
          {...props}
        ></button>
      ))}
    </div>
  )
}
