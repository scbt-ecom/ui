import toast from 'react-hot-toast'
import { type IBannerProps } from '../Banner'
import bezrykov from './bezrukov.png'
import saif from '$/widgets/banner/saif.jpg'

export const mockBannerBase: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: bezrykov,
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
export const mockBannerOnlyPrimaryButton: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: bezrykov,

  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary',
      size: 'lg'
    }
  }
}

export const mockWithAdvantages: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: bezrykov,

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
    { title: 'От 20 минут', description: 'сумма одобрения' }
  ]
}
export const mockBannerBaseFullImage: IBannerProps = {
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
  bannerVariant: 'fullImg'
}

export const mockBannerFullImageOnlyPrimaryButton: IBannerProps = {
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

export const mockBannerFullImageWithAdvantages: IBannerProps = {
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
    { title: 'От 20 минут', description: 'сумма одобрения' }
  ]
}

export const mockBannerBaseGradient: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: bezrykov,
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

export const mockBannerBaseGradientAdvantages: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  img: bezrykov,
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
    { title: 'От 20 минут', description: 'сумма одобрения' }
  ]
}
