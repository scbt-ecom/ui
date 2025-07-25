import avatar from './avatar.png'
import { getUuid } from '$/shared/utils'
import { type Contents } from '$/widgets/usefulInfo/model'

const expertCard = {
  avatar,
  name: 'Сергей Белокрылов',
  position: 'Редактор банковского издания',
  description:
    'Один из способов увеличить шансы на одобрение — стать постоянным клиентом Совкомбанка. Например, оформить зарплатную карту. \n' +
    '\n' +
    'Не забудьте указать дополнительные источники доходов. Сдаете квартиру или авто \n' +
    'в аренду? Это плюс. Чем выше ваш официальный доход, тем больше шансов \n' +
    'на одобрение.'
}

const expertsList = [
  expertCard,
  {
    avatar,
    name: 'Дарья Сокольская',
    position: 'Модератор',
    description:
      'Один из способов увеличить шансы на одобрение — стать постоянным клиентом Совкомбанка. Например, оформить зарплатную карту. \n' +
      '\n' +
      'Не забудьте указать дополнительные источники доходов. Сдаете квартиру или авто \n' +
      'в аренду? Это плюс. Чем выше ваш официальный доход, тем больше шансов \n' +
      'на одобрение.'
  },
  {
    avatar,
    name: 'Денис Дорохов',
    position: 'Редактор издания',
    description:
      'Один из способов увеличить шансы на одобрение — стать постоянным клиентом Совкомбанка. Например, оформить зарплатную карту.'
  }
]

export const expertsMulti: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'EXPERTS',
    details: [
      {
        headline: 'Как увеличить вероятность одобрения займа в Совкомбанке?',
        expertsList
      }
    ]
  }
}

export const expertsBase: Contents = {
  entityId: getUuid(),
  entity: {
    variant: 'EXPERTS',
    details: [
      {
        headline: 'Как увеличить вероятность одобрения займа в Совкомбанке?',
        expertsList: [expertCard]
      }
    ]
  }
}
