import bezrykovDesk from './assets/bezrukov_desk.png'
import bezrykovMob from './assets/bezrukov_mob.png'
import saifDesktop from './assets/saif.jpg'
import saifMob from './assets/saifMob.jpg'
import { type BannerProps } from '$/widgets/banner/Banner.tsx'
import { type AdvantagesProps } from '$/widgets/banner/ui/banners/ui'

const defaultMockAdvantageProps: AdvantagesProps = {
  details: {
    items: [
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
  imageMobile: {
    src: bezrykovMob
  },
  imageDesktop: {
    src: bezrykovDesk
  },
  buttonsConfig: {
    primary: {
      enabled: true,
      buttonContent: {
        children: 'Primary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    },
    secondary: {
      enabled: true,
      buttonContent: {
        children: 'Secondary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    }
  }
}

export const mockBannerOnlyPrimaryButton: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imageDesktop: {
    src: bezrykovDesk
  },
  imageMobile: {
    src: bezrykovMob
  },
  buttonsConfig: {
    primary: {
      enabled: true,
      buttonContent: {
        children: 'Primary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    }
  }
}

export const mockWithAdvantages: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imageMobile: {
    src: bezrykovMob
  },
  imageDesktop: {
    src: bezrykovDesk
  },

  buttonsConfig: {
    primary: {
      enabled: true,
      buttonContent: {
        children: 'Primary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    }
  },

  advantages: { details: { items: defaultMockAdvantageProps.details?.items ?? [], variant: 'fourCards' }, enabled: true }
}
export const mockBannerBaseFullImage: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imageDesktop: {
    src: saifDesktop
  },
  imageMobile: {
    src: saifMob
  },
  buttonsConfig: {
    primary: {
      enabled: true,
      buttonContent: {
        children: 'Primary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    },
    secondary: {
      enabled: true,
      buttonContent: {
        children: 'Secondary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
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
  imageDesktop: {
    src: saifDesktop
  },
  imageMobile: {
    src: saifMob
  },
  buttonsConfig: {
    primary: {
      enabled: true,
      buttonContent: {
        children: 'Primary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
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
  imageDesktop: {
    src: saifDesktop
  },
  imageMobile: {
    src: saifMob
  },
  buttonsConfig: {
    primary: {
      enabled: true,
      buttonContent: {
        children: 'Primary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    }
  },
  classes: {
    title: 'text-color-white',
    subtitle: 'text-color-white'
  },
  variant: 'fullImg',
  advantages: { details: { items: defaultMockAdvantageProps.details?.items ?? [], variant: 'fourCards' }, enabled: true }
}

export const mockBannerBaseGradient: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imageMobile: {
    src: bezrykovMob
  },
  imageDesktop: {
    src: bezrykovDesk
  },
  buttonsConfig: {
    primary: {
      enabled: true,
      buttonContent: {
        children: 'Primary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    },
    secondary: {
      enabled: true,
      buttonContent: {
        children: 'Secondary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    }
  },
  classes: {
    root: 'bg-color-transparent bg-[linear-gradient(97.94deg,_#dae4f2_-14.21%,_#afcffc_47.44%,_#79aef8_107.86%);]'
  }
}

export const mockBannerBaseGradientAdvantages: BannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  imageMobile: {
    src: bezrykovMob
  },
  imageDesktop: {
    src: bezrykovDesk
  },
  buttonsConfig: {
    primary: {
      enabled: true,
      buttonContent: {
        children: 'Primary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    },
    secondary: {
      enabled: true,
      buttonContent: {
        children: 'Secondary',
        handlerOptions: {
          handler: 'scroll',
          widgetId: 'stepper'
        }
      }
    }
  },
  classes: {
    root: 'bg-color-transparent gradient-apply'
  },
  advantages: { details: { items: defaultMockAdvantageProps.details?.items ?? [], variant: 'fourCards' }, enabled: true }
}
