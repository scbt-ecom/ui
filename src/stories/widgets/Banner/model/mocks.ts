import toast from 'react-hot-toast'
import bezrykovDesk from './assets/bezrukov_desk.png'
import bezrykovMob from './assets/bezrukov_mob.png'
import saif from './assets/saif.jpg'
import saifMob from './assets/saifMob.jpg'
import { type BannerProps } from '$/widgets/banner/Banner.tsx'

export const mockBannerBase: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: bezrykovMob,
  imgSets: {
    mob: bezrykovMob,
    large: bezrykovDesk
  },
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
  img: bezrykovMob,
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
  img: bezrykovMob,

  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    }
  },

  advantagesList: [
    { title: 'До 5 млн ₽', description: 'сумма кредита' },
    { title: 'До 5 лет', description: 'срок кредита' },
    { title: 'От 5 минут', description: 'быстрое одобрение' },
    { title: 'Бесплатная', description: 'доставка кредита' }
  ]
}
export const mockBannerBaseFullImage: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: saif,
  imgSets: {
    mob: saifMob,
    large: saif
  },
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
    primary: 'bg-color-negative',
    secondary: 'bg-color-negative text-color-white'
  },
  bannerVariant: 'fullImg'
}

export const mockBannerFullImageOnlyPrimaryButton: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: saif,
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    }
  },
  classes: {
    primary: 'bg-color-negative'
  },
  bannerVariant: 'fullImg'
}

export const mockBannerFullImageWithAdvantages: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: saif,
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
    primary: 'bg-color-negative',
    secondary: 'bg-color-negative text-color-white'
  },
  bannerVariant: 'fullImg',
  advantagesList: [
    { title: 'До 5 млн ₽', description: 'сумма кредита' },
    { title: 'До 5 лет', description: 'срок кредита' },
    { title: 'От 5 минут', description: 'быстрое одобрение' },
    { title: 'Бесплатная', description: 'доставка кредита' }
  ]
}

export const mockBannerBaseGradient: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: bezrykovMob,
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
    section: 'bg-color-transparent bg-[linear-gradient(97.94deg,_#dae4f2_-14.21%,_#afcffc_47.44%,_#79aef8_107.86%);]'
  }
}

export const mockBannerBaseGradientAdvantages: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: bezrykovMob,
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
    section: 'bg-color-transparent gradient-apply'
  },
  advantagesList: [
    { title: 'До 5 млн ₽', description: 'сумма кредита' },
    { title: 'До 5 лет', description: 'срок кредита' },
    { title: 'От 5 минут', description: 'быстрое одобрение' },
    { title: 'Бесплатная', description: 'доставка кредита' }
  ]
}
