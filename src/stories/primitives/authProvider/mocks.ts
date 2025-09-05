import { type TCombineProps, type TEsiaProps } from '$/widgets'

export const mockDataEsia: TEsiaProps = {
  isLoading: false,
  badge: '+25%',
  mainLink: {
    title: 'Заполнить через Госуслуги',
    mobileTitle: 'Госуслуги'
  },
  subLink: {
    href: 'https://www.gosuslugi.ru/',
    text: 'Подробнее'
  }
}

export const mockDataMobileId: TEsiaProps = {
  isLoading: false,
  badge: '+25%',
  mainLink: {
    title: 'Заполнить через Mobile ID',
    mobileTitle: 'Mobile ID'
  },
  subLink: {
    href: 'https://mobileid.mts.ru/#order',
    text: 'Подробнее'
  }
}

export const mockDataCombine: TCombineProps = {
  badge: '+25%',
  subtitle: 'Дополнительный текст',
  esiaConfig: {
    isLoading: false,
    mainLink: {
      title: 'Госуслуги',
      mobileTitle: 'Госуслуги'
    },
    subLink: {
      href: 'https://www.gosuslugi.ru/',
      text: 'Подробнее'
    }
  },
  mobileIdConfig: {
    isLoading: false,
    mainLink: {
      title: 'Mobile ID',
      mobileTitle: 'Mobile ID'
    },
    subLink: {
      href: 'https://mobileid.mts.ru/#order',
      text: 'Подробнее'
    }
  }
}
