import toast from 'react-hot-toast'
import bezrykovDesk from './assets/bezrukov_desk.png'
import bezrykovMob from './assets/bezrukov_mob.png'
import saifDesktop from './assets/saif.jpg'
import saifMob from './assets/saifMob.jpg'
import { cn } from '$/shared/utils'
import { type AdvantagesProps } from '$/widgets'
import { type BannerProps } from '$/widgets/banner/Banner.tsx'

const defaultMockAdvantageProps: AdvantagesProps = {
  config: {
    details: [
      { title: 'До 5 млн ₽', description: 'сумма кредита' },
      { title: 'До 5 лет', description: 'срок кредита' },
      { title: 'От 5 минут', description: 'быстрое одобрение' },
      { title: 'Бесплатная', description: 'доставка кредита' }
    ],
    variant: 'fourCards'
  }
}

export const mockBannerBase: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgMobile: <img src={bezrykovMob} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  imgDesktop: <img src={bezrykovDesk} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    },
    secondary: {
      onClick: () => toast.success('@click on secondary btn'),
      children: 'Secondary',
      size: 'lg'
    }
  }
}
export const mockBannerOnlyPrimaryButton: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgMobile: <img src={bezrykovMob} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  imgDesktop: <img src={bezrykovDesk} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    }
  }
}

export const mockWithAdvantages: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgMobile: <img src={bezrykovMob} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  imgDesktop: <img src={bezrykovDesk} alt='Картинка баннера' className={cn('h-full object-cover')} />,

  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    }
  },
  withAdvantages: true,
  advantages: defaultMockAdvantageProps
}
export const mockBannerBaseFullImage: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgDesktop: <img src={saifDesktop} alt='Картинка баннера' className={cn('h-full w-full object-cover object-center')} />,
  imgMobile: <img src={saifMob} alt='Картинка баннера' className={cn('h-full w-full object-cover object-center')} />,
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    },
    secondary: {
      onClick: () => toast.success('@click on secondary btn'),
      children: 'Secondary',
      size: 'lg'
    }
  },
  classes: {
    title: 'text-color-white',
    subtitle: 'text-color-white'
  },
  variant: 'fullImg'
}

export const mockBannerFullImageOnlyPrimaryButton: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgDesktop: <img src={saifDesktop} alt='Картинка баннера' className={cn('h-full w-full object-cover object-center')} />,
  imgMobile: <img src={saifMob} alt='Картинка баннера' className={cn('h-full w-full object-cover object-center')} />,
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    }
  },
  classes: {
    title: 'text-color-white',
    subtitle: 'text-color-white'
  },
  variant: 'fullImg'
}

export const mockBannerFullImageWithAdvantages: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgDesktop: <img src={saifDesktop} alt='Картинка баннера' className={cn('h-full w-full object-cover object-center')} />,
  imgMobile: <img src={saifMob} alt='Картинка баннера' className={cn('h-full w-full object-cover object-center')} />,
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    },
    secondary: {
      onClick: () => toast.success('@click on secondary btn'),
      children: 'Secondary',
      size: 'lg'
    }
  },
  classes: {
    title: 'text-color-white',
    subtitle: 'text-color-white'
  },
  variant: 'fullImg',
  advantages: defaultMockAdvantageProps
}

export const mockBannerBaseGradient: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgMobile: <img src={bezrykovMob} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  imgDesktop: <img src={bezrykovDesk} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    },
    secondary: {
      onClick: () => toast.success('@click on secondary btn'),
      children: 'Secondary',
      size: 'lg'
    }
  },
  classes: {
    root: 'bg-color-transparent bg-[linear-gradient(97.94deg,_#dae4f2_-14.21%,_#afcffc_47.44%,_#79aef8_107.86%);]'
  }
}

export const mockBannerBaseGradientAdvantages: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgMobile: <img src={bezrykovMob} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  imgDesktop: <img src={bezrykovDesk} alt='Картинка баннера' className={cn('h-full object-cover')} />,
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    },
    secondary: {
      onClick: () => toast.success('@click on secondary btn'),
      children: 'Secondary',
      size: 'lg'
    }
  },
  classes: {
    root: 'bg-color-transparent gradient-apply'
  },
  advantages: defaultMockAdvantageProps
}
