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
      title: 'На карту «Халва»',
      description: <>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</>,
      popoverText:
        'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время'
    },
    {
      title: 'Наличными в офисе банка»',
      description: <>Выберите офис Совкомбанка и получите деньги в кассе</>
    }
  ],
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}

export const mockLongBannerWithoutButton: ILongBannerProps = {
  title: 'Main Title',
  textContent: [
    {
      title: 'На карту «Халва»',
      description: <>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</>,
      popoverText:
        'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время'
    },
    {
      title: 'Наличными в офисе банка»',
      description: <>Выберите офис Совкомбанка и получите деньги в кассе</>
    }
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
      title: 'На карту «Халва»',
      description: <>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</>,
      popoverText:
        'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время'
    },
    {
      title: 'Наличными в офисе банка»',
      description: <>Выберите офис Совкомбанка и получите деньги в кассе</>
    },
    {
      title: 'На карту «Халва»',
      description: <>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</>,
      popoverText:
        'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время'
    },
    {
      title: 'Наличными в офисе банка»',
      description: <>Выберите офис Совкомбанка и получите деньги в кассе</>
    }
  ],
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}

export const mockLongBannerMultiWithoutButton: ILongBannerProps = {
  intent: 'fourItems',
  title: 'Main Title',
  textContent: [
    {
      title: 'На карту «Халва»',
      description: <>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</>,
      popoverText:
        'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время'
    },
    {
      title: 'Наличными в офисе банка»',
      description: <>Выберите офис Совкомбанка и получите деньги в кассе</>
    },
    {
      title: 'На карту «Халва»',
      description: <>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</>,
      popoverText:
        'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время'
    },
    {
      title: 'Наличными в офисе банка»',
      description: <>Выберите офис Совкомбанка и получите деньги в кассе</>
    }
  ],
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}
