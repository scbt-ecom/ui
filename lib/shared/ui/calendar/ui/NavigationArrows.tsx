import { type NavProps } from 'react-day-picker'
import { Icon } from '$/shared/ui/icon'

interface INavigationArrowsProps extends NavProps {}

export const NavigationArrows = ({ onPreviousClick, onNextClick }: INavigationArrowsProps) => {
  return (
    <div className='flex items-center gap-3'>
      <button onClick={onPreviousClick}>
        <Icon
          name='arrows/arrowRight'
          className='size-6 rotate-180 text-icon-blue-grey-800 transition-colors hover:text-icon-accent-hover'
        />
      </button>
      <button onClick={onNextClick}>
        <Icon
          name='arrows/arrowRight'
          className='size-6 text-icon-blue-grey-800 transition-colors hover:text-icon-accent-hover'
        />
      </button>
    </div>
  )
}
