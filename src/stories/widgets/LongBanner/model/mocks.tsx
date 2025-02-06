import toast from 'react-hot-toast'
import money from './assets/money.png'
import { cn } from '$/shared/utils'
import { type LongBannerProps } from '$/widgets/longBanner/LongBanner.tsx'

export const mockLongBannerBase: LongBannerProps = {
  headline: 'Main Title',
  buttonConfig: {
    text: 'Button',
    onClick: () => toast.success('@click on primary btn')
  },
  config: {
    details: [
      {
        title: 'На карту «Халва»',
        description: '<p>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</p>',
        popover: {
          text: 'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время',
          enabled: true
        }
      },
      {
        title: 'Наличными в офисе банка»',
        description: `<p>Выберите офис Совкомбанка и получите деньги в кассе</p>`
      }
    ]
  },
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}

export const mockLongBannerWithoutButton: LongBannerProps = {
  headline: 'Main Title',
  config: {
    details: [
      {
        title: 'На карту «Халва»',
        description: `<p>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</p>`,
        popover: {
          text: 'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время',
          enabled: true
        }
      },
      {
        title: 'Наличными в офисе банка»',
        description: `<p>Выберите офис Совкомбанка и получите деньги в кассе</p>`
      }
    ]
  },
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}

export const mockLongBannerMulti: LongBannerProps = {
  intent: 'fourItems',
  headline: 'Main Title',
  buttonConfig: {
    text: 'Button',
    onClick: () => toast.success('@click on primary btn')
  },
  config: {
    details: [
      {
        title: 'На карту «Халва»',
        description: `<p>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</p>`,
        popover: {
          text: 'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время',
          enabled: true
        }
      },
      {
        title: 'Наличными в офисе банка»',
        description: `<p>Выберите офис Совкомбанка и получите деньги в кассе</p>`
      },
      {
        title: 'На карту «Халва»',
        description: `<p>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</p>`,
        popover: {
          text: 'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время',
          enabled: true
        }
      },
      {
        title: 'Наличными в офисе банка»',
        description: `<p>Выберите офис Совкомбанка и получите деньги в кассе</p>`
      }
    ]
  },
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}

export const mockLongBannerMultiWithoutButton: LongBannerProps = {
  intent: 'fourItems',
  headline: 'Main Title',
  config: {
    details: [
      {
        title: 'На карту «Халва»',
        description: `<p>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</p>`,
        popover: {
          text: 'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время',
          enabled: true
        }
      },
      {
        title: 'Наличными в офисе банка»',
        description: `<p>Выберите офис Совкомбанка и получите деньги в кассе</p>`
      },
      {
        title: 'На карту «Халва»',
        description: `<p>Снимайте в любом банкомате&nbsp;или переводите на карту любого банка через СБП</p>`,
        popover: {
          text: 'Получите бесплатную карту «Халва», на которую будут перечислены кредитные средства: ее доставит курьер в удобное время',
          enabled: true
        }
      },
      {
        title: 'Наличными в офисе банка»',
        description: `<p>Выберите офис Совкомбанка и получите деньги в кассе</p>`
      }
    ]
  },
  imageComponent: <img data-id='banner-image' src={money} alt='money' className={cn('h-full w-full object-contain')} />
}
