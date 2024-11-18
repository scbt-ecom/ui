import toast from 'react-hot-toast'
import { type ILongBannerProps } from '../LongBanner'
import money from './money.png'
import { cn } from '$/shared/utils'

export const mockLongBannerBase: ILongBannerProps = {
  title: 'Main Title',
  buttonConfig: {
    text: 'Button',
    onClick: () => toast.success('@click on primary btn')
  },
  textContent: [
    {
      title: 'Title',
      description: 'Description',
      popoverText: 'popoverText popoverText'
    },
    { title: 'Title', description: 'Description' }
  ],
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}

export const mockLongBannerWithoutButton: ILongBannerProps = {
  title: 'Main Title',
  textContent: [
    { title: 'Title', description: 'Description' },
    { title: 'Title', description: 'Description' }
  ],
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}

export const mockLongBannerMulti: ILongBannerProps = {
  intent: 'fourItems',
  title: 'Main Title',
  buttonConfig: {
    text: 'Button',
    onClick: () => toast.success('@click on primary btn')
  },
  textContent: [
    {
      title: 'Title',
      description: 'Description',
      popoverText: 'popoverText popoverText'
    },
    {
      title: 'Title',
      description: 'Description',
      popoverText: 'popoverText popoverText'
    },
    { title: 'Title', description: 'Description' },
    { title: 'Title', description: 'Description' }
  ],
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}

export const mockLongBannerMultiWithoutButton: ILongBannerProps = {
  intent: 'fourItems',
  title: 'Main Title',
  textContent: [
    { title: 'Title1', description: 'Description' },
    { title: 'Title2', description: 'Description' },
    { title: 'Title3', description: 'Description' },
    { title: 'Title4', description: 'Description' }
  ],
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}
