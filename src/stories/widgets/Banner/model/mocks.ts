import toast from 'react-hot-toast'
import bezrykovDesk from './assets/bezrukov_desk.png'
import bezrykovMob from './assets/bezrukov_mob.png'
import saif from './assets/saif.jpg'
import saifMob from './assets/saifMob.jpg'
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
  imgMobile: { url: bezrykovMob },
  imgDesktop: { url: bezrykovDesk },
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
  imgMobile: { url: bezrykovMob },
  imgDesktop: { url: bezrykovDesk },
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
  imgMobile: { url: bezrykovMob },
  imgDesktop: { url: bezrykovDesk },

  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    }
  },
  advantages: defaultMockAdvantageProps
}
export const mockBannerBaseFullImage: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgDesktop: { url: saif },
  imgMobile: { url: saifMob },
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
  variant: 'fullImg'
}

export const mockBannerFullImageOnlyPrimaryButton: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgDesktop: { url: saif },
  imgMobile: { url: saifMob },
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    }
  },
  variant: 'fullImg'
}

export const mockBannerFullImageWithAdvantages: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgDesktop: { url: saif },
  imgMobile: { url: saifMob },
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
  variant: 'fullImg',
  advantages: defaultMockAdvantageProps
}

export const mockBannerBaseGradient: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imgMobile: { url: bezrykovMob },
  imgDesktop: { url: bezrykovDesk },
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
  imgMobile: { url: bezrykovMob },
  imgDesktop: { url: bezrykovDesk },
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
