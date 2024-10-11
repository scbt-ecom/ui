import toast from 'react-hot-toast'
import { type IBannerProps } from '../Banner'

export const mockBannerBase: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary'
    },
    secondary: {
      onClick: () => toast.success('@click on secondary btn'),
      children: 'Secondary'
    }
  }
}
export const mockBannerOnlyPrimaryButton: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary'
    }
  }
}

export const mockWithAdvantages: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary'
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
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary'
    },
    secondary: {
      onClick: () => toast.success('@click on secondary btn'),
      children: 'Secondary'
    }
  },
  bannerVariant: 'fullImg'
}
