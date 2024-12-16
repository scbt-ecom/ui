import type { TCombineProps, TEsiaProps } from '$/widgets'

export const mockDataEsia: TEsiaProps = {
  isLoading: false,
  badge: '+25%',
  mainLink: {
    title: 'Заполнить через Госуслуги',
    mobileTitle: 'Госуслуги',
    href: 'https://esia-portal1.test.gosuslugi.ru/login/'
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
    mobileTitle: 'Mobile ID',
    href: 'https://mobileid.mts.ru/'
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
      mobileTitle: 'Госуслуги',
      href: 'https://esia-portal1.test.gosuslugi.ru/login/'
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
      mobileTitle: 'Mobile ID',
      href: 'https://mobileid.mts.ru/'
    },
    subLink: {
      href: 'https://mobileid.mts.ru/#order',
      text: 'Подробнее'
    }
  }
}
